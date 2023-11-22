import { useEffect, useState } from 'react';
import { ArticlesGrid } from '../components/ArticleGrid/ArticleGrid';
import { Post } from '../database/collection';
import { supabase } from '../supabaseClient';

const Articles = () => {
  const [articles, setArticles] = useState<Post[] | null>(null);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data, error } = await supabase.from('post').select('*');
    setArticles(data);
  }

  return <ArticlesGrid posts={articles} />;
};

export default Articles;
