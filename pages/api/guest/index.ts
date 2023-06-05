import { getSession } from 'next-auth/react';
import prisma from '@lib/Prisma';

// PUT /api/guest
export default async function handle(req: any, res: any) {
  const { name, addedAt, gender, isPreparty, wasVouchedFor, invitedToPartyId } =
    req.body;

  const session = await getSession({ req });
  const user = await prisma.user.findFirst({
    where: { name: session?.user?.name },
    select: { id: true },
  });

  const result = await prisma.partyGuest.create({
    data: {
      name,
      addedAt,
      gender,
      isPreparty,
      wasVouchedFor,
      invitedTo: { connect: { id: invitedToPartyId } },
      addedBy: { connect: { id: user?.id } },
      usingInvite: { connect: { id: user?.id } },
    },
  });
  res.json(result);
}
