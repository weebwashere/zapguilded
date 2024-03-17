'use client';

import React from 'react';
import { Button, Group, useMantineColorScheme, Accordion, Container, Title, Code } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';
import classes from './FaqSimple.module.css';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const icon = <IconExternalLink size={14} />;

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
      <Container size="sm" mt="240" className={classes.wrapper}>
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