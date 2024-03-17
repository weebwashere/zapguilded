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
  useMantineColorScheme,
  Affix,
  Transition
} from '@mantine/core';

import classes from './Welcome.module.css';
import { useWindowScroll } from '@mantine/hooks';
import { IconArrowUp } from '@tabler/icons-react';
import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react';
import classes1 from './MobileNavbar.module.css';
import { FaSun, FaMoon } from 'react-icons/fa';

export function Welcome() {
  // Hook to control the color scheme
  const [scroll, scrollTo] = useWindowScroll();
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
              <Button className={classes1.control} component='a' variant="default" href='https://zapguilded.vercel.app'>Home</Button>
              <Button className={classes1.control} component='a' variant='default' href='/about'>About Us</Button>
              <Button className={classes1.control} component='a' variant='default' href='https://twitter.com/zapguilded'>Twitter</Button>
              <Button size='sm' variant='default' mb={25} onClick={toggleColorScheme}>
                {computedColorScheme === "dark" ? <FaSun /> : <FaMoon />}
              </Button>
            </Group>
          </Group>
        </AppShell.Header>
      </AppShell>
      <Title className={classes.title} ta="center" mr={50}  mt={160}>
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
      <Group justify='center'>
      <Text className={classes.textLeft} c="dimmed" ta="center" mr={60} size="lg" maw={580}  mt="xl">
        Zap, the ultimate multipurpose bot for safe and engaging online communities. This bot includes moderation,
        reminders, and a lot more!{' '}
      </Text>
      </Group>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftSection={<IconArrowUp style={{ width: rem(16), height: rem(16) }} />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
              variant='default'
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </MantineProvider>
  );
}