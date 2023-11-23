import { Pagination } from '@mantine/core';
import { usePagination } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArticlesGrid } from '../components/ArticleGrid/ArticleGrid';
import { Post } from '../database/collection';
import { supabase } from '../supabaseClient';

const Articles = () => {
  const [articles, setArticles] = useState<Post[] | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(
    searchParams && searchParams.get('page') ? parseInt(searchParams.get('page')!, 10) : 1,
  );
  const [pageSize] = useState(
    searchParams && searchParams.get('pageSize') ? parseInt(searchParams.get('pageSize')!, 10) : 2,
  );
  const [pageCount, setPageCount] = useState<number | null>(1);
  const pagination = usePagination({ total: pageSize, initialPage: 1, page: page });

  useEffect(() => {
    getArticles();
  }, [page, pageSize]);

  const getStartEnd = () => {
    const start = (pagination.active - 1) * pageSize;
    const end = start + pageSize - 1;

    return { start, end };
  };

  async function getArticles() {
    const { start, end } = getStartEnd();
    const { data, count } = await supabase.from('post').select('*', { count: 'exact' }).range(start, end);
    setArticles(data);
    setPageCount(Math.floor(count! / pageSize) + 1);

    // Update URL params when the page or pageSize changes
    if (searchParams !== null) {
      setSearchParams({ page: pagination.active.toString(), pageSize: pageSize.toString() });
    }
  }

  console.log(articles);

  return (
    <>
      <ArticlesGrid posts={articles} />
      <Pagination value={page} onChange={(newPage) => setPage(newPage)} total={pageCount ?? 1} />
    </>
  );
};

export default Articles;
