import { getDefaultPublicProps } from '@lib/NextProps';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  let p = getDefaultPublicProps();
  return {
    props: p,
  };
};

export default function Page() {
  return <div>public</div>;
}
