import Shell from "@components/Shell";
import { MantineProvider } from "@mantine/core";
import { AppProps } from "next/app";

export default function MantineApp(props: AppProps) {
	return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colors: {
          brand: [
            "#3F3A5F",
            "#3F3A5F",
            "#3F3A5F",
            "#3F3A5F",
            "#3F3A5F",
            "#3F3A5F",
            "#3F3A5F",
            "#3F3A5F",
            "#3F3A5F",
            "#3F3A5F",
          ]
        },
        primaryColor: "brand",
        fontFamily: "Lato, sans-serif",
        headings: {
          fontFamily: "Lato, sans-serif",
          fontWeight: 100,
          lineHeight: 2,
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
                color: "#3F3A5F"
              },
            },
          },
          Text: {
            styles: {
              root: {
                paddingTop: 6,
                paddingBottom: 6
              }
            }
          }
        }
      }}
    >
      <Shell {...props} />
    </MantineProvider>
	);
}