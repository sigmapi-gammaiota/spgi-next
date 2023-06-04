import PartyGuest, { PartyGuestProps } from '@components/PartyGuest';
import { Stack, Title } from '@mantine/core';

export type PartyGuestsProps = {
  title: string;
  filter: string;
  guests: PartyGuestProps[];
};

export default function PartyGuests({
  title,
  filter,
  guests,
}: PartyGuestsProps) {
  return (
    <Stack>
      {title && (
        <Title order={2} align="center">
          {title}
        </Title>
      )}
      {guests
        .filter((guest) => guest.gender == filter)
        .map((guest) => (
          <PartyGuest key={guest.name} guest={guest} />
        ))}
    </Stack>
  );
}
