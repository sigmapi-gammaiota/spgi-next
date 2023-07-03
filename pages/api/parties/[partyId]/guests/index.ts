import prisma from '@lib/Prisma';
import { getSession } from 'next-auth/react';

// POST /api/parties/[partyId]/guests
export default async function handle(req: any, res: any) {
  if (req.method === 'POST') {
    const invitedToPartyId = Number(req.query.partyId);
    const { name, addedAt, gender, isPreparty, wasVouchedFor } = req.body;

    // TODO: check that guest does not already exist

    const session = await getSession({ req });
    const user = await prisma.user.findFirst({
      where: { name: session?.user?.name },
      select: { id: true },
    });

    // TODO: check that party list is open
    // TODO: check that user has enough invites

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
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
