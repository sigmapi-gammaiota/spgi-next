import PrivateLayout from '@components/PrivateLayout';
import PublicLayout from '@components/PublicLayout';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function AppLayout(props: AppProps) {
  const {
    Component,
    pageProps: { session, ...pageProps },
  } = props;

  if (pageProps.private) {
    if (pageProps.navLinks && pageProps.messages) {
      return (
        <div>
          <Head>
            <title>
              Sigma Pi Gamma Iota
              {pageProps.title && ' - '.concat(pageProps.title)}
            </title>
          </Head>
          <SessionProvider session={session}>
            <PrivateLayout
              navLinks={pageProps.navLinks}
              messages={pageProps.messages}
            >
              <Component {...pageProps} />
            </PrivateLayout>
          </SessionProvider>
        </div>
      );
    }
  }

  return (
    <div>
      <Head>
        <title>
          Sigma Pi Gamma Iota
          {pageProps.title && ' - '.concat(pageProps.title)}
        </title>
      </Head>
      <SessionProvider session={session}>
        <PublicLayout {...props} />
      </SessionProvider>
    </div>
  );
}
