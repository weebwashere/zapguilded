"use client";
import { Title, Text, Anchor, AppShell, Burger, Flex, Image, Card, SimpleGrid, Container, rem, useMantineTheme, Group, Badge, Button, UnstyledButton, MantineProvider } from '@mantine/core';
import classes from './Welcome.module.css';
import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react';
import classes1 from './MobileNavbar.module.css';

export function Welcome() {
  return (
    <>
    <MantineProvider defaultColorScheme="dark">
    </MantineProvider>
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
            <Group ml="xl" gap={0} visibleFrom="sm">
              <UnstyledButton className={classes1.control} component='a' href='#'>Home</UnstyledButton>
              <UnstyledButton className={classes1.control} component='a' href='https://www.guilded.gg/b/2e702266-2dfe-4796-b61c-ccbb0536444c'>Invite</UnstyledButton>
              <UnstyledButton className={classes1.control} component='a' href='https://guilded.gg/i/knxezNqE'>Support</UnstyledButton>
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
    </>
  );
}