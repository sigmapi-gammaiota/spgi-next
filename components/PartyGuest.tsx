import { Card, CloseButton, Group, Stack, Text } from '@mantine/core';
import { useSession } from 'next-auth/react';
import React from 'react';

export type PartyGuestProps = {
  name: string;
  gender: string;
  isPreparty: boolean;
  addedBy: { name: string };
  usingInvite: { name: string };
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
  const { data } = useSession();

  const isBorrowingInvite = (): boolean => {
    return guest.addedBy.name != guest.usingInvite.name;
  };

  const canRemove = (): boolean => {
    return (
      guest.addedBy.name === data?.user?.name ||
      guest.usingInvite.name === data?.user?.name
    );
  };

  const removeGuest = async (id: string) => {
    try {
      await fetch(`/api/guest/${id}`, {
        method: 'DELETE',
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card
      className={getGenderColor(guest.gender)}
      shadow="md"
      radius="lg"
      withBorder
    >
      <Group align="flex-start">
        <Stack className="flex-grow gap-0">
          <Text size="lg" weight={700}>
            {guest.name}
          </Text>
          <Text>Added by {guest.addedBy.name}</Text>
          {isBorrowingInvite() && (
            <Text className="mt-[-1rem]" italic>
              Using invite from {guest.usingInvite.name}
            </Text>
          )}
        </Stack>
        {canRemove() && (
          <CloseButton
            title="Remove Guest"
            variant="outline"
            color="black"
            size="xl"
          />
        )}
      </Group>
    </Card>
  );
};

export default PartyGuest;
