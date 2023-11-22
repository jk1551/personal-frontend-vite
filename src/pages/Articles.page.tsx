import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArticlesGrid } from '../components/ArticleGrid/ArticleGrid';
import { Post } from '../database/collection';
import { supabase } from '../supabaseClient';

const Articles = () => {
  const [articles, setArticles] = useState<Post[] | null>(null);
  const [page, setPage] = useState(0);
  let query = useParams();
  const itemsPerPage = 1;

  const getStartAndEnd = () => {
    let start = itemsPerPage * page;
    let end = start + itemsPerPage;

    return { start, end };
  };

  useEffect(() => {
    getArticles();
  }, []);

  async function getArticles() {
    const { start, end } = getStartAndEnd();
    const { data, error } = await supabase.from('post').select('*').range(start, end);
    setArticles(data);
  }

  return <ArticlesGrid posts={articles} />;
};

export default Articles;
