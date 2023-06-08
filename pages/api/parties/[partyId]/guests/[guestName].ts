import prisma from '@lib/Prisma';
import { getSession } from 'next-auth/react';

// DELETE /api/parties/[partyId]/guests/[guestName]
export default async function handle(req: any, res: any) {
  if (req.method === 'DELETE') {
    const invitedToPartyId = Number(req.query.partyId);
    const guestName = req.query.guestName;

    const session = await getSession({ req });
    const user = await prisma.user.findFirst({
      where: { name: session?.user?.name },
      select: { id: true },
    });

    // TODO: check that user has permissions to delete this guest

    const guest = await prisma.partyGuest.delete({
      where: {
        name_invitedToPartyId: {
          name: guestName,
          invitedToPartyId: invitedToPartyId,
        },
      },
    });
    res.json(guest);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
