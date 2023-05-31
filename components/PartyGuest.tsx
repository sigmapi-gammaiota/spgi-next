import { Card } from '@mantine/core';
import React from 'react';

export type PartyGuestProps = {
  name: string;
  gender: string;
  isPreparty: boolean;
  addedBy: { name: string };
};

const getGenderColor = (gender: string): string => {
  if (gender === 'MALE') {
    return 'bg-blue-300';
  } else if (gender === 'FEMALE') {
    return 'bg-pink-300';
  } else {
    return '';
  }
};

const PartyGuest: React.FC<{ guest: PartyGuestProps }> = ({ guest }) => {
  return (
    <Card
      className={getGenderColor(guest.gender)}
      shadow="md"
      radius="lg"
      withBorder
    >
      <h2>{guest.name}</h2>
      <h2>Added by {guest.addedBy.name}</h2>
      <h2>{guest.gender}</h2>
      <h2>{guest.isPreparty}</h2>
    </Card>
  );
};

export default PartyGuest;
