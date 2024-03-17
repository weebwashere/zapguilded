import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { AppShell } from '@mantine/core';
import classes from './Welcome.module.css';
import { IconPhoto } from '@tabler/icons-react';
import { WavyBackground } from "../components/ui/wavy-background";

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
