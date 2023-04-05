import React from 'react';
import Router from 'next/router';
import { PartyGuestProps } from '@components/PartyGuest';

export type PartyProps = {
  id: number;
  name: string;
  startsAt: Date;
  guests: PartyGuestProps[];
};

const Party: React.FC<{ party: PartyProps }> = ({ party }) => {
  return (
    <div
      onClick={() =>
        Router.push('/private/parties/[id]', `/private/parties/${party.id}`)
      }
    >
      <h2>{party.name}</h2>
      <h2>{party.id}</h2>
    </div>
  );
};

export default Party;
