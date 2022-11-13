import { GetStaticProps } from "next";
import { getDefaultPublicProps } from "@lib/NextProps";
import { Text, Title } from "@mantine/core";
import Section from "@components/Section";

export const getStaticProps: GetStaticProps = async () => {
  let p = getDefaultPublicProps();
  return {
    props: p,
  };
};

export default function Page() {
  return (
    <Section>
      <Title order={1}>Home</Title>
      <Text>Paragraph</Text>
    </Section>
  );
}
