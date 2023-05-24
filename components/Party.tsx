import { PartyGuestProps } from '@components/PartyGuest';
import { Card } from '@mantine/core';
import Link from 'next/link';
import React from 'react';

export type PartyProps = {
  id: number;
  name: string;
  startsAt: Date;
  guests: PartyGuestProps[];
};

const Party: React.FC<{ party: PartyProps }> = ({ party }) => {
  return (
    <Link href={`/private/parties/${party.id}`}>
      {/* TODO: cursor-pointer not working */}
      <Card className="cursor-pointer" shadow="sm" withBorder>
        <h2>{party.name}</h2>
        <h2>{party.id}</h2>
      </Card>
    </Link>
  );
};

export default Party;
