import { GetStaticProps } from "next";
import { getDefaultPublicProps } from "../../lib/NextProps";

export const getStaticProps: GetStaticProps = async () => {
  let p = getDefaultPublicProps();
  return {
    props: p,
  };
};

export default function Page() {
  return <div>public (kyle)</div>;
}
