import { getDefaultPublicProps } from "@lib/NextProps";
import { Text, Title } from "@mantine/core";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  let p = getDefaultPublicProps();
  p.title = "Brothers";
  return {
    props: p,
  };
};

export default function Page() {
  return (
    <>
      <Title order={1}>Heading</Title>
      <Text>Paragraph</Text>
    </>
  );
}
