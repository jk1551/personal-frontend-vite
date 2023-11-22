import { ActionIcon, Badge, Card, Group, Image, Text, rem } from '@mantine/core';
import { IconShare } from '@tabler/icons-react';
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
    <Card key={post.id} withBorder radius="md" className={classes.card} onClick={() => navigate(`/blog/${post.id}`)}>
      <Card.Section mb="sm">
        <Image src={post.url} alt="Top 50 underrated plants for house decoration" height={180} />
      </Card.Section>

      {post.tags &&
        post.tags.map((tag) => {
          return (
            <Badge w="fit-content" variant="light">
              {tag}
            </Badge>
          );
        })}

      <Text fw={700} className={classes.title} mt="xs">
        {post.title}
      </Text>

      <Group mt="lg">
        <div>
          <Text fw={500}>Joe King</Text>
          <Text fz="xs" c="dimmed">
            posted 34 minutes ago
          </Text>
        </div>
      </Group>

      <Card.Section className={classes.footer}>
        <Group justify="right">
          <ActionIcon variant="subtle" color="gray">
            <IconShare style={{ width: rem(20), height: rem(20) }} color="blue" stroke={1.5} />
          </ActionIcon>
        </Group>
      </Card.Section>
    </Card>
  );
};

export default ArticleCard;
