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
  Transition,
  BackgroundImage,
  Switch,
  AppShellHeader,
  ActionIcon
} from '@mantine/core';

import { Spotlight, SpotlightActionData, spotlight } from '@mantine/spotlight';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import classes from './Welcome.module.css';
import { useWindowScroll } from '@mantine/hooks';
import { IconArrowUp, IconHome, IconDashboard, IconFileText, IconSearch, IconSun, IconMoonStars } from '@tabler/icons-react';
import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react';
import classes1 from './MobileNavbar.module.css';
import '@mantine/spotlight/styles.css';
import { FaSun, FaMoon, FaGuilded, FaLink } from 'react-icons/fa6';
import { FaXTwitter } from "react-icons/fa6";
import { IoSunny } from "react-icons/io5";
import { FaInfoCircle } from 'react-icons/fa';
const icon = <IconSearch size={14} />

export function Welcome() {
  // Hook to control the color 
  const theme = useMantineTheme();
  const [scroll, scrollTo] = useWindowScroll();
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light');
  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? 'light' : 'dark');
  }

  const actions: SpotlightActionData[] = [
    {
      group: 'Socials',
      id: 'twitter',
      label: 'X',
      description: "Visit Zap's Twitter/X page.",
      onClick: () => {
        window.location.href = 'https://twitter.com/zapguilded'
      },
      leftSection: <FaXTwitter style={{ width: rem(24), height: rem(24) }}  />,
    },
    {
      id: 'guilded',
      label: 'Guilded',
      description: "Visit Zap's guilded support server.",
      onClick: () => {
        window.location.href = 'https://guilded.gg/zapguilded'
      },
      leftSection: <FaGuilded style={{ width: rem(24), height: rem(24) }}  />,
    },
    {
      id: 'bot-invite',
      label: 'Bot Invite',
      description: 'Invite Zap to your server.',
      onClick: () => {
        window.location.href = 'https://www.guilded.gg/b/2e702266-2dfe-4796-b61c-ccbb0536444c'
      },
      leftSection: <FaLink style={{ width: rem(20), height: rem(20) }}  />,
    },
  ];

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
              
              <>
                <Button
                  data-disabled
                  leftSection={icon}
                  className={classes1.control}
                  component='a'
                  variant='default'
                  onClick={spotlight.open}
                >
                  Search...
                </Button>
                <Spotlight
                  actions={actions}
                  nothingFound="Nothing found..."
                  highlightQuery
                  searchProps={{
                    leftSection: <IconSearch style={{ width: rem(20), height: rem(20) }} stroke={1.5} />,
                    placeholder: 'Search...',
                  }}
                />
              </>
              <Button
                className={classes1.control}
                size='sm'
                variant='default'
                component='a'
                mb={25}
                onClick={toggleColorScheme}
              >
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