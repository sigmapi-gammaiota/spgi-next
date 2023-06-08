import Section from '@components/Section';
import { getPrivateProps } from '@lib/NextProps';
import prisma from '@lib/Prisma';
import { Table } from '@mantine/core';
import Link from 'next/link';
import { GetServerSideProps } from 'next/types';
import PartyProps from 'util/PartyProps';

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
  const rows = props.parties.map((party) => (
    <Link key={party.id} href={`/private/parties/${party.id}`}>
      <tr className="cursor-pointer hover:bg-gray-100">
        <td>{party.name}</td>
        <td>{party.startsAt.toLocaleString()}</td>
      </tr>
    </Link>
  ));

  return (
    <Section>
      <Table>
        <thead>
          <tr>
            <th>Party Name</th>
            <th>Party Date</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Section>
  );
}
