"use client";
import {
  Title,
  Text,
  Anchor,
  AppShell,
  Burger,
  Flex,
  Image,
  Card,
  SimpleGrid,
  Container,
  rem,
  useMantineTheme,
  Group,
  Badge,
  Button,
  UnstyledButton,
  MantineProvider,
  useComputedColorScheme,
  useMantineColorScheme
} from '@mantine/core';

import classes from './Welcome.module.css';
import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react';
import classes1 from './MobileNavbar.module.css';
import { FaSun, FaMoon } from 'react-icons/fa';

export function Welcome() {
  // Hook to control the color scheme
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light');
  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? 'light' : 'dark');
  }

  return (
    <MantineProvider defaultColorScheme="dark">
      <AppShell header={{ height: 70 }} padding="md">
        <AppShell.Header>
          <Group justify="space-between" style={{ flex: 1 }}>
            <Image
              mb={21}
              radius="md"
              h={70}
              w={70}
              src="https://cdn.gilcdn.com/WebhookThumbnail/d56373e64d7ffcc3a9cd6871c6dc064d-Full.webp?w=160&h=160"
            />
            <Group ml="xl" gap={9} visibleFrom="sm" mr={40}>
              <Button className={classes1.control} component='a' variant="default" href='#'>Home</Button>
              <Button className={classes1.control} component='a' variant='default' href='https://www.guilded.gg/b/2e702266-2dfe-4796-b61c-ccbb0536444c'>Invite</Button>
              <Button className={classes1.control} component='a' variant='default' href='https://guilded.gg/i/knxezNqE'>Support</Button>
              <Button className={classes1.control} component='a' variant='default' href='https://twitter.com/zapguilded'>Twitter</Button>
              <Button size='sm' variant='default' mb={25} onClick={toggleColorScheme}>
                {computedColorScheme === "dark" ? <FaSun /> : <FaMoon />}
              </Button>
            </Group>
          </Group>
        </AppShell.Header>
      </AppShell>
      <Title className={classes.title} ta="left" mt={105}>
        Hello! I'm{' '}
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: '#FFFF00', to: '#FFFF00' }}
        >
          Zap
        </Text>
      </Title>
      <Text className={classes.textLeft} c="dimmed" ta="left" size="lg" maw={580} mt="xl">
        Zap, the ultimate multipurpose bot for safe and engaging online communities. This bot includes moderation,
        reminders, and a lot more!{' '}
      </Text>
    </MantineProvider>
  );
}