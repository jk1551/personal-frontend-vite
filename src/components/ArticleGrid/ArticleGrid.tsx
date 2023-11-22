import { ActionIcon, Badge, Card, Container, Group, Image, SimpleGrid, Text, rem } from '@mantine/core';
import { IconShare } from '@tabler/icons-react';
import { FC } from 'react';
import { Post } from '../../database/collection';
import classes from './ArticleCard.module.css';

interface ArticleGridProps {
  posts: Post[] | null;
}

export const ArticlesGrid: FC<ArticleGridProps> = ({ posts }) => {
  console.log(posts);

  const cards =
    posts &&
    posts.map((post) => (
      <Card withBorder padding="lg" radius="md" className={classes.card}>
        <Card.Section mb="sm">
          <Image src={post.url} alt="Top 50 underrated plants for house decoration" height={180} />
        </Card.Section>

        <Badge w="fit-content" variant="light">
          decorations
        </Badge>

        <Text fw={700} className={classes.title} mt="xs">
          Top 50 underrated plants for house decoration
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
    ));

  return (
    <Container py="xl">
      <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
    </Container>
  );
};
