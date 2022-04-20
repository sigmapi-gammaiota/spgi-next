import { getPrivateProps } from "../../lib/NextProps";
import { GetServerSideProps } from "next/types";
import useSWR from "swr";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { getAllUsers, User } from "../../lib/UserTools";
import { redirect } from "next/dist/server/api-utils";

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
  const { data: session, status: sessionStatus } = useSession({
    required: true,
  });

  const fetcher = (url:string) => fetch(url).then((res) => res.json());
  const { data:users, error } = useSWR<User[], string>("/api/admin/getUsers", fetcher);
  

  if (sessionStatus == "loading") {
    return <div>Loading session...</div>;
  }

  if (error) return <p>Loading failed...</p>;
  if (!users) return <h1>Loading data...</h1>;

  return (
    <div>
      <table>
        <tr>
          <th>Email</th>
          <th>Name</th>
          <th>Image</th>
        </tr>
        {users&&users.map((user)=>{
          return (
            <tr key={user.email}>
              <td>{user.email}</td>
              <td>{user.name}</td>
              <td>{user.image}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
