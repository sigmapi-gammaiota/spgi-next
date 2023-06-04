import PartyGuests from '@components/PartyGuests';
import Section from '@components/Section';
import { getPrivateProps } from '@lib/NextProps';
import prisma from '@lib/Prisma';
import {
  Button,
  Card,
  Grid,
  Group,
  Input,
  MediaQuery,
  NativeSelect,
  Stack,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { GetServerSideProps } from 'next/types';
import { FaSearch } from 'react-icons/fa';
import PartyProps from 'util/PartyProps';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let p = await getPrivateProps(ctx);
  const party = await prisma.party.findUnique({
    where: {
      id: Number(ctx.query?.id),
    },
    include: {
      guests: {
        select: {
          name: true,
          addedAt: true,
          gender: true,
          isPreparty: true,
          wasVouchedFor: true,
          addedBy: {
            select: {
              name: true,
            },
          },
          usingInvite: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

  if (p.private) {
    //private page
    return {
      props: {
        ...p,
        party: JSON.parse(JSON.stringify(party)),
      },
    };
  } else {
    //redirect to login
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};

type Props = {
  party: PartyProps;
};

export default function Page(props: Props) {
  const validateGuestName = (guestName: string): null | string => {
    if (!guestName || guestName.length == 0) {
      return 'Please enter a name';
    }

    return null;
  };

  const validateGuestGender = (guestGender: string): null | string => {
    if (!guestGender || guestGender.length == 0) {
      return 'Please pick a gender';
    }

    return null;
  };

  const addGuestForm = useForm({
    initialValues: {
      guestName: '',
      guestGender: '',
    },
    validate: {
      guestName: (value) => validateGuestName(value),
      guestGender: (value) => validateGuestGender(value),
    },
  });

  const searchForm = useForm({
    initialValues: {
      search: '',
    },
  });

  return (
    <Section>
      <Stack>
        <Title order={1}>{props.party.name}</Title>

        {/* Add Guest Form */}
        <Card className="bg-gray-100" shadow="sm" radius="md" withBorder>
          <form
            onSubmit={addGuestForm.onSubmit((values) => console.log(values))}
          >
            <Stack spacing="xs">
              <TextInput
                label="Guest Name"
                placeholder="Full Name"
                {...addGuestForm.getInputProps('guestName')}
              />
              <NativeSelect
                label="Gender"
                data={['', 'Male', 'Female', 'Non-Binary']}
                {...addGuestForm.getInputProps('guestGender')}
              />
              <Group position="right">
                <Button type="submit" color="blue">
                  Add Guest
                </Button>
              </Group>
            </Stack>
          </form>
        </Card>

        {/* Search Form */}
        <form onSubmit={searchForm.onSubmit((values) => console.log(values))}>
          <Group>
            <Input
              icon={<FaSearch />}
              className="flex-grow"
              placeholder="Search by Guest or Brother Name"
              {...searchForm.getInputProps('search')}
            />
            <Button type="submit" color="blue">
              Search
            </Button>
          </Group>
        </form>

        {/* For large screens, display guests in three columns */}
        <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
          <Grid>
            <Grid.Col span={4}>
              <PartyGuests
                title="Male Guests"
                filter="MALE"
                guests={props.party.guests}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <PartyGuests
                title="Female Guests"
                filter="FEMALE"
                guests={props.party.guests}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <PartyGuests
                title="Non-Binary Guests"
                filter="NON_BINARY"
                guests={props.party.guests}
              />
            </Grid.Col>
          </Grid>
        </MediaQuery>

        {/* For small screens, display guests in one stack */}
        <MediaQuery largerThan="md" styles={{ display: 'none' }}>
          <Stack>
            <PartyGuests
              title="Male Guests"
              filter="MALE"
              guests={props.party.guests}
            />
            <PartyGuests
              title="Female Guests"
              filter="FEMALE"
              guests={props.party.guests}
            />
            <PartyGuests
              title="Non-Binary Guests"
              filter="NON_BINARY"
              guests={props.party.guests}
            />
          </Stack>
        </MediaQuery>
      </Stack>
    </Section>
  );
}
