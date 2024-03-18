import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript, AppShell } from '@mantine/core';
import { theme } from '../theme';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  title: 'Zap | Guilded Multipurpose Bot',
  description: 'Zap, the ultimate multipurpose bot for safe and engaging online communities.',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="https://cdn.gilcdn.com/WebhookThumbnail/d56373e64d7ffcc3a9cd6871c6dc064d-Full.webp?w=160&h=160" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider defaultColorScheme='dark' theme={theme}>{children}</MantineProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}

