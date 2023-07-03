import AppLayout from '@components/AppLayout';
import Shell from '@components/Shell';
import { DefaultMantineColor, MantineProvider, Tuple } from '@mantine/core';
import '@styles/globals.css';
import getEmotionCache from '@util/getEmotionCache';
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import Head from 'next/head';

type ExtendedCustomColors = 'purple' | 'gold' | DefaultMantineColor;

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 1>>;
  }
}

export default function App(props: AppProps) {
  const {
    pageProps: { session },
  } = props;

  const emotionCache = getEmotionCache();

  return (
    <div id="app">
      <Head>
        <title>Sigma Pi Gamma Iota</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        emotionCache={emotionCache}
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colors: {
            purple: ['#3F3A5F'],
            gold: ['#D2B48C'],
          },
          primaryColor: 'purple',
          fontFamily: 'Lato, sans-serif',
          headings: {
            fontFamily: 'Lato, sans-serif',
            fontWeight: 100,
            sizes: {
              h1: { fontSize: 24 },
              h2: { fontSize: 20 },
              h3: { fontSize: 18 },
              h4: { fontSize: 16 },
              h5: { fontSize: 14 },
              h6: { fontSize: 12 },
            },
          },
          components: {
            Title: {
              styles: {
                root: {
                  color: '#3F3A5F',
                },
              },
            },
            Text: {
              styles: {
                root: {
                  paddingTop: 6,
                  paddingBottom: 6,
                },
              },
            },
          },
        }}
      >
        <SessionProvider session={session}>
          <AppLayout {...props} />
        </SessionProvider>
      </MantineProvider>
    </div>
  );
}
