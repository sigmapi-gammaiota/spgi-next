import Head from "next/head";
import { getPrivateProps } from "../../lib/NextProps";
import { GetServerSideProps } from "next/types";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let p = await getPrivateProps(ctx);
  p.title = "Admin";
  if (p.private) {
    //private page
    return {
      props: p,
    };
  } else {
    //redirect to login
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};

export default function Page() {
  return <div>admin</div>;
}
