import { Button, Container, Group, Image, List, Text, ThemeIcon, Title, rem } from '@mantine/core';
import { IconBrandGithub, IconCheck, IconDownload } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import classes from './Hero.module.css';

export function Hero() {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
      <Container size="md">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Hi! I'm <span className={classes.highlight}>Joe King</span>
            </Title>
            <Text c="dimmed" mt="md"></Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Code Craftsman</b> – I love turning ideas into sleek, user-friendly code that just works.
              </List.Item>
              <List.Item>
                <b>Forever Learner</b> – Tech's always changing, but so am I. I'm all about staying on top of the latest
                and greatest.
              </List.Item>
              <List.Item>
                <b>Problem Solver</b> – Challenges? Bring 'em on. I tackle problems with a mix of precision and
                creativity, delivering solutions that just make sense.
              </List.Item>
            </List>

            <Group mt={30}>
              <Button radius="xl" size="md" className={classes.control} rightSection={<IconDownload size={16} />}>
                Resume
              </Button>
              <Button
                variant="default"
                radius="xl"
                size="md"
                className={classes.control}
                rightSection={<IconBrandGithub size={16} />}
              >
                Github
              </Button>
            </Group>
          </div>
          <Image
            src={
              'https://media.licdn.com/dms/image/C4E03AQGGVoUbeFEAwg/profile-displayphoto-shrink_800_800/0/1647121527291?e=1706140800&v=beta&t=95g5hufvzk9iA10b2Bs_xbt1Delr0mxkRcgvpdKKXWQ'
            }
            className={classes.image}
          />
        </div>
      </Container>
    </motion.div>
  );
}
