import Section from '@components/Section';
import { Title } from '@mantine/core';
import useStyles from '@styles/styles';
import { AppProps } from 'next/app';

export default function PublicLayout({ Component, pageProps }: AppProps) {
  const { classes } = useStyles();

  return (
    <>
      {pageProps.title && (
        <Section bg="purple">
          <Title className={classes.title}>{pageProps.title}</Title>
        </Section>
      )}
      <Component {...pageProps} />
    </>
  );
}
