import { Card, Text } from '@mantine/core';
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
    return 'bg-green-300';
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
      <Text size="lg" weight={700}>
        {guest.name}
      </Text>
      <Text>Added by {guest.addedBy.name}</Text>
    </Card>
  );
};

export default PartyGuest;
