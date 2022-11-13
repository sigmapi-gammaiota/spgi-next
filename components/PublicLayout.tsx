import { Box, Container, Title } from "@mantine/core";
import useStyles from "@styles/styles";
import { AppProps } from "next/app";
import Section from "@components/Section";

export default function PublicLayout({ Component, pageProps }: AppProps) {
  const { classes } = useStyles();

  return (
    <>
      {
        pageProps.title && 
        <Box sx={({ backgroundColor: "#3f3a5f" })}>
          <Section>
              <Title className={classes.title}>{pageProps.title}</Title>
          </Section>
        </Box>
      }
      <Component {...pageProps} />
    </>
  );
};
