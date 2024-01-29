"use client"

import React from 'react';
import { Button, Group, useMantineColorScheme, Accordion, Container, Title, Code } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';
import classes2 from './FaqSimple.module.css';
import { SimpleGrid, Text, ThemeIcon, Grid, rem } from '@mantine/core';
import { IconReceiptOff, IconFlame, IconCircleDotted, IconFileCode, IconAdjustmentsAlt, IconAlarmFilled, IconShieldHeart } from '@tabler/icons-react';
import classes from './FeaturesTitle.module.css';

const features = [
  {
    icon: IconAdjustmentsAlt,
    title: 'Utility',
    description: 'You can use the utility commands in your advantage to get any info in your server.',
  },
  {
    icon: IconAlarmFilled,
    title: 'Reminders',
    description: 'Users can also make reminders and get reminded about certain things.',
  },
  {
    icon: IconCircleDotted,
    title: 'Simple.',
    description:
      "With it's command usage, users wont have to worry about typing long commands, its simple and easy to use!",
  },
  {
    icon: IconShieldHeart,
    title: 'Rest Assured',
    description:
      'Our team is always on the lookout for ideas, support, and new features to add to Zap.',
  },
];

export function ColorSchemeToggle() {
  const icon = <IconExternalLink size={14} />;

  return (
    <>
      <Group justify="left" mt="xl" ml={50}>
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

      <div className={classes.wrapper}>
        <Grid gutter={80}>
          <Grid.Col mt={250} span={{ base: 12, md: 5 }}>
            <Title className={classes.title} order={2}>
            Features
            </Title>
            <Text c="dimmed">
            Explore every feature Zap has in order to maximize your experience!
            </Text>

            <Button
            rightSection={icon}
              variant="default"
              size="lg"
              radius="md"
              mt="xl"
              component='a'
              href='https://www.guilded.gg/b/2e702266-2dfe-4796-b61c-ccbb0536444c'
            >
              Get started
            </Button>
          </Grid.Col>
          <Grid.Col mt={250} span={{ base: 12, md: 7 }}>
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
              {features.map((feature) => (
                <div key={feature.title}>
                  <ThemeIcon
                    size={44}
                    radius="md"
                    variant='default'
                  >
                    <feature.icon style={{ width: rem(26), height: rem(26) }} stroke={1.5} />
                  </ThemeIcon>
                  <Text fz="lg" mt="sm" fw={500}>
                    {feature.title}
                  </Text>
                  <Text c="dimmed" fz="sm">
                    {feature.description}
                  </Text>
                </div>
              ))}
            </SimpleGrid>
          </Grid.Col>
        </Grid>
      </div>

      <Container size="sm" mt="140" className={classes2.wrapper}>
        <Title ta="center" className={classes2.title}>
          Frequently Asked Questions
        </Title>

        <Accordion variant="separated">
          <Accordion.Item className={classes2.item} value="reset-password">
            <Accordion.Control>What is the bot's prefix?</Accordion.Control>
            <Accordion.Panel>The prefix for every server is <Code variant='default' color='gray' c="white">$</Code></Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes2.item} value="another-account">
            <Accordion.Control>Who created Zap?</Accordion.Control>
            <Accordion.Panel>Zap was created by A guilded bot developer named "weebwashere", i don't know who he is but he sounds like a nice person. </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
}

export default ColorSchemeToggle;
