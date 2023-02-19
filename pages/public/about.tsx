import { getDefaultPublicProps } from '@lib/NextProps';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  let p = getDefaultPublicProps();
  p.title = 'About';
  return {
    props: p,
  };
};

export default function Page() {
  return <div>About</div>;
}
