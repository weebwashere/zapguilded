import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { AppShell, MantineProvider } from '@mantine/core';
import classes from './Welcome.module.css';
 import { Notifications } from '@mantine/notifications';
import { IconPhoto } from '@tabler/icons-react';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
