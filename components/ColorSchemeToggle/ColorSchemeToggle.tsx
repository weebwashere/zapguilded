'use client';

import React from 'react';
import { Button, Group, useMantineColorScheme, Accordion, Container, Title, Code, useMantineTheme, Card, rem, Text, Badge, SimpleGrid } from '@mantine/core';
import { IconExternalLink, IconGauge, IconUser, IconCookie, IconClock, IconMoodSmileBeam, IconInfoCircle} from '@tabler/icons-react';
import classes from './FaqSimple.module.css';
import classes1 from './FeaturesCards.module.css';
const mockdata = [
  {
    title: 'Utility',
    description:
      "Zap's utility commands are designed to provide users with quick access to informational content, or info based on your server.",
    icon: IconInfoCircle,
  },
  {
    title: 'Reminders',
    description:
      "Zap's reminder system allows users to create, view, and remove reminders conveniently.",
    icon: IconClock,
  },
  {
    title: 'Fun',
    description:
      "Zap's fun commands are designed to provide users with entertaining and lighthearted experiences.",
    icon: IconMoodSmileBeam,
  },
  {
    title: 'Anime',
    description: "Users can use Zap’s anime commands to get information on there favourite anime’s and manga, as well as generate waifu, neko, and maid images.",
    icon: IconCookie,
  },
];

const data = [
  {
    title: 'Page views',
    stats: '456,133',
    description: '24% more than in the same month last year, 33% more that two years ago',
  },
  {
    title: 'New users',
    stats: '2,175',
    description: '13% less compared to last month, new user engagement up by 6%',
  },
  {
    title: 'Completed orders',
    stats: '1,994',
    description: '1994 orders were completed this month, 97% satisfaction rate',
  },
];


export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const icon = <IconExternalLink size={14} />;
  
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes1.card} padding="xl">
      <feature.icon
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
        color="#FFFF00"
      />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <>
      <Group justify="center" mt="xl" >
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
      <Container size="lg" mt={200} py="xl">
        <Title order={2} className={classes1.title} ta="center" mt="sm">
          Features 👇
        </Title>
        <SimpleGrid cols={{ base: 2, md: 2 }} spacing="xl" mt={50}>
          {features}
        </SimpleGrid>
      </Container>
      <Container size="sm" mt="210" mb={70} className={classes.wrapper}>
        <Title ta="center" className={classes.title}>
          Frequently Asked Questions
        </Title>

        <Accordion variant="separated">
          <Accordion.Item className={classes.item} value="reset-password">
            <Accordion.Control>What is the bot's prefix?</Accordion.Control>
            <Accordion.Panel>The prefix for every server is <Code variant='default' color='gray' c="white">$</Code></Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="another-account">
            <Accordion.Control>Who created Zap?</Accordion.Control>
            <Accordion.Panel>Zap was created by A guilded bot developer named "weebwashere", i don't know who he is but he sounds like a nice person. </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
}