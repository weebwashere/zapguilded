'use client';

import { Button, Group, useMantineColorScheme } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const icon = <IconExternalLink size={14} />;

  return (
    <Group justify="left" mt="xl" ml={50}>
      <Button 
        justify="center" 
        component="a"
        href="https://www.guilded.gg/b/2e702266-2dfe-4796-b61c-ccbb0536444c"
        size='lg' 
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
        size='lg' 
        rightSection={icon} 
        variant="default" 
        mt="md"
      >
        Support Server
      </Button>
    </Group>
  );
}
//hello :D