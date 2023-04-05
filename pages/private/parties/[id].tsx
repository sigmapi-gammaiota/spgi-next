import { PartyProps } from '@components/Party';
import PartyGuest from '@components/PartyGuest';
import { getPrivateProps } from '@lib/NextProps';
import prisma from '@lib/Prisma';
import { GetServerSideProps } from 'next/types';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let p = await getPrivateProps(ctx);
  const party = await prisma.party.findUnique({
    where: {
      id: Number(ctx.query?.id),
    },
    include: {
      guests: {
        select: {
          name: true,
          addedAt: true,
          gender: true,
          isPreparty: true,
          wasVouchedFor: true,
          addedBy: {
            select: {
              name: true,
            },
          },
          usingInvite: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

  if (p.private) {
    //private page
    return {
      props: {
        ...p,
        party: JSON.parse(JSON.stringify(party)),
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
  party: PartyProps;
};

export default function Page(props: Props) {
  console.log(props.party);
  return (
    <div>
      <main>{props.party.name}</main>
      {props.party.guests.map((guest) => (
        <div key={guest.name} className="guest">
          <PartyGuest guest={guest} />
        </div>
      ))}
    </div>
  );
}
