import {
  ActionIcon,
  Box,
  Burger,
  Button,
  Divider,
  Drawer,
  Group,
  ScrollArea,
  rem,
  useMantineColorScheme,
} from '@mantine/core';
import { useDisclosure, useFullscreen } from '@mantine/hooks';
import { IconArrowsMaximize, IconArrowsMinimize, IconMoon, IconSun } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import classes from './Header.module.css';

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const { toggle, fullscreen } = useFullscreen();
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
    <Box pb={120}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Group h="100%" gap={10} visibleFrom="sm">
            <motion.a
              href="/"
              className={classes.link}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.8 }}
              style={{ x: 100 }}
            >
              Home
            </motion.a>
            <motion.a
              href="/blog"
              className={classes.link}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              style={{ x: 100 }}
            >
              Blog
            </motion.a>
          </Group>

          <Group visibleFrom="sm">
            <Button variant="default">Log in</Button>
            {fullscreen ? (
              <ActionIcon onClick={toggle} variant="default" color="gray" size="lg" radius="md" aria-label="Minimize">
                <IconArrowsMinimize style={{ width: '70%', height: '70%' }} stroke={1.5} />
              </ActionIcon>
            ) : (
              <ActionIcon onClick={toggle} variant="default" color="gray" size="lg" radius="md" aria-label="Maximize">
                <IconArrowsMaximize style={{ width: '70%', height: '70%' }} stroke={1.5} />
              </ActionIcon>
            )}
            {colorScheme === 'light' ? (
              <ActionIcon
                onClick={() => setColorScheme('dark')}
                variant="default"
                color="gray"
                size="lg"
                radius="md"
                aria-label="DarkButton"
              >
                <IconMoon style={{ width: '70%', height: '70%' }} stroke={1.5} />
              </ActionIcon>
            ) : (
              <ActionIcon
                onClick={() => setColorScheme('light')}
                variant="default"
                color="gray"
                size="lg"
                radius="md"
                aria-label="LightButton"
              >
                <IconSun style={{ width: '70%', height: '70%' }} stroke={1.5} />
              </ActionIcon>
            )}
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
          {colorScheme === 'light' ? (
            <ActionIcon
              onClick={() => setColorScheme('dark')}
              variant="default"
              color="gray"
              size="lg"
              radius="md"
              aria-label="DarkButton"
              hiddenFrom="sm"
            >
              <IconMoon style={{ width: '70%', height: '70%' }} stroke={1.5} />
            </ActionIcon>
          ) : (
            <ActionIcon
              onClick={() => setColorScheme('light')}
              variant="default"
              color="gray"
              size="lg"
              radius="md"
              aria-label="LightButton"
              hiddenFrom="sm"
            >
              <IconSun style={{ width: '70%', height: '70%' }} stroke={1.5} />
            </ActionIcon>
          )}
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />
          <a href="/" className={classes.link}>
            Home
          </a>
          <a href="/blog" className={classes.link}>
            Blog
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
