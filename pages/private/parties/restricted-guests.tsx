import Section from '@components/Section';
import { getPrivateProps } from '@lib/NextProps';
import { Title } from '@mantine/core';
import { GetServerSideProps } from 'next/types';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let p = await getPrivateProps(ctx);

  if (p.private) {
    //private page
    return {
      props: p,
    };
  } else {
    //redirect to login
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};

export default function Page() {
  return (
    <Section>
      <Title order={1}>Blacklist / Graylist</Title>
    </Section>
  );
}
