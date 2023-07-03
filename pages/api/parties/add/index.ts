import prisma from '@lib/Prisma';
import { getSession } from 'next-auth/react';

// POST /api/parties/add
export default async function handle(req: any, res: any) {
  if (req.method === 'POST') {
    const {
      name,
      startsAt,
      prepartyStartsAt,
      maxInvites,
      maxMaleInvites,
      maxFemaleInvites,
      maxPrepartyInvites,
    } = req.body;

    // TODO: check that party does not already exist

    const session = await getSession({ req });
    const user = await prisma.user.findFirst({
      where: { name: session?.user?.name },
      select: { id: true },
    });

    // TODO: check that user has permission to create party

    const result = await prisma.party.create({
      data: {
        name,
        startsAt,
        prepartyStartsAt,
        maxInvites,
        maxMaleInvites,
        maxFemaleInvites,
        maxPrepartyInvites,
      },
    });
    res.json(result);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
