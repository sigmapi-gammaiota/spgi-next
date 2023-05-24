import { PartyGuestProps } from '@components/PartyGuest';

type PartyProps = {
  id: number;
  name: string;
  startsAt: Date;
  guests: PartyGuestProps[];
};

export default PartyProps;
