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

import classes from 'components/Welcome/Welcome.module.css';
import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react';
import classes1 from 'components/Welcome/MobileNavbar.module.css';
import { FaSun, FaMoon } from 'react-icons/fa';
import { IconExternalLink } from '@tabler/icons-react';

const icon = <IconExternalLink size={14} />;

export default function Welcome() {
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
              <Button className={classes1.control} component='a' variant="default" href='https://zapguilded.vercel.app/'>Home</Button>
              <Button className={classes1.control} component='a' variant='default' href='https://www.guilded.gg/b/2e702266-2dfe-4796-b61c-ccbb0536444c'>Invite</Button>
              <Button className={classes1.control} component='a' variant='default' href='https://guilded.gg/i/knxezNqE'>Support</Button>
            </Group>
          </Group>
        </AppShell.Header>
      </AppShell>
      <Title className={classes.title} ta="left" mt={105}>
        About{' '}
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: '#FFFF00', to: '#FFFF00' }}
        >
          Us
        </Text>
      </Title>
      <Text className={classes.textLeft} c="dimmed" ta="left" size="lg" maw={580} mt="xl">
        Zap is all about providing features for users on guilded to be accustomed with. Providing features such as Moderation, Anime, and more!
      </Text>
      <Group className="column" align="start" mt={32} ml={50}>
        <Button
          justify="center"
          component="a"
          href="https://www.guilded.gg/b/2e702266-2dfe-4796-b61c-ccbb0536444c"
          size="lg"
          rightSection={icon}
          variant="default"
          mt="md"
        >
          Invite Zap
        </Button>
        <Button
          justify="center"
          component="a"
          href="https://www.guilded.gg/i/knxezNqE"
          size="lg"
          rightSection={icon}
          variant="default"
          mt="md"
        >
          Support Server
        </Button>
      </Group>
    </MantineProvider>
  );
}