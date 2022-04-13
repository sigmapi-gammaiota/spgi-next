import { GetStaticProps } from "next";
import { getDefaultPublicProps } from "../../lib/NextProps";

export const getStaticProps: GetStaticProps = async () => {
  let p = getDefaultPublicProps();
  p.title = "About";
  return {
    props: p,
  };
};

export default function Page() {
  return <div>About, Owen</div>;
}
