import prisma from '@lib/Prisma';

// DELETE /api/guest/:id
export default async function handle(req: any, res: any) {
  if (req.method === 'DELETE') {
    const guest = await prisma.partyGuest.delete({
      where: {
        name_invitedToPartyId: {
          name: req.query.name,
          invitedToPartyId: req.query.invitedToPartyId,
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
