import { FC } from 'react';
import { Post } from '../database/collection';

interface SingleArticleProps {
  post: Post;
}

const ArticlePage: FC<SingleArticleProps> = ({ post }) => {
  return <></>;
};

export default ArticlePage;
