import React from 'react';

export type PartyGuestProps = {
  name: string;
  gender: string;
  isPreparty: boolean;
  addedBy: { name: string };
};

const PartyGuest: React.FC<{ guest: PartyGuestProps }> = ({ guest }) => {
  return (
    <div>
      <h2>{guest.name}</h2>
      <h2>Added by {guest.addedBy.name}</h2>
      <h2>{guest.gender}</h2>
      <h2>{guest.isPreparty}</h2>
    </div>
  );
};

export default PartyGuest;
