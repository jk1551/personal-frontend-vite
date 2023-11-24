import { AspectRatio, Card, Image, Text } from '@mantine/core';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Post } from '../../database/collection';
import classes from './ArticleCard.module.css';

interface ArticleCardProps {
  post: Post;
}

const ArticleCard: FC<ArticleCardProps> = ({ post }) => {
  const navigate = useNavigate();

  return (
    <Card
      key={post.title}
      p="md"
      radius="md"
      component="a"
      onClick={() => navigate(`/blog/${post.id}`)}
      className={classes.card}
    >
      <AspectRatio ratio={1920 / 1080}>
        <Image src={post.url} />
      </AspectRatio>
      <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
        {post.created_at}
      </Text>
      <Text className={classes.title} mt={5}>
        {post.title}
      </Text>
    </Card>
  );
};

export default ArticleCard;
