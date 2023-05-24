import Party, { PartyProps } from '@components/Party';
import { getPrivateProps } from '@lib/NextProps';
import prisma from '@lib/Prisma';
import { GetServerSideProps } from 'next/types';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let p = await getPrivateProps(ctx);
  const parties = await prisma.party.findMany({});

  if (p.private) {
    //private page
    return {
      props: {
        ...p,
        parties: JSON.parse(JSON.stringify(parties)),
      },
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

type Props = {
  parties: PartyProps[];
};

export default function Page(props: Props) {
  return (
    <div>
      <main>parties</main>
      {props.parties.map((party) => (
        <Party key={party.id} party={party} />
      ))}
    </div>
  );
}
