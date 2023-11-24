import { Container, SimpleGrid } from '@mantine/core';
import { FC } from 'react';
import { Post } from '../../database/collection';
import ArticleCard from './ArticleCard';

interface ArticleGridProps {
  posts: Post[] | null;
}

export const ArticlesGrid: FC<ArticleGridProps> = ({ posts }) => {
  const cards = posts && posts.map((post) => <ArticleCard key={post.id} post={post} />);

  return (
    <Container py="xl" size="xl">
      <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
    </Container>
  );
};
