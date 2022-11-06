import { Box, Container, Title } from "@mantine/core";
import useStyles from "@styles/styles";
import { AppProps } from "next/app";

export default function PublicLayout({ Component, pageProps }: AppProps) {
  const { classes } = useStyles();

  return (
    <>
      {
        pageProps.title && 
        <Box sx={({ backgroundColor: "#3f3a5f" })}>
          <Container size="lg" p="lg">
              <Title className={classes.title}>{pageProps.title}</Title>
          </Container>
        </Box>
      }
      <Container size="lg" p="lg">
        <Component {...pageProps} />
      </Container>
    </>
  );
};
