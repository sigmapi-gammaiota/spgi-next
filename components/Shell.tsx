import AppLayout from '@components/AppLayout';
import Logo from '@components/Logo';
import NavButtons from '@components/NavButtons';
import {
  AppShell,
  Burger,
  Container,
  Group,
  Header,
  MediaQuery,
  Navbar,
  Stack,
} from '@mantine/core';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Shell(props: AppProps) {
  const [opened, setOpened] = useState(false);
  const dynamicRoute = useRouter().asPath;

  useEffect(() => setOpened(false), [dynamicRoute]);

  return (
    <AppShell
      padding={0}
      navbar={
        <>
          {opened && (
            <Navbar p="md">
              <Stack>
                <NavButtons />
              </Stack>
            </Navbar>
          )}
        </>
      }
      header={
        <Header height={90} px="md" py="sm">
          <MediaQuery largerThan="md" styles={{ display: 'none' }}>
            <Container size="lg" p="xs">
              <Group position="apart">
                <Logo />
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                />
              </Group>
            </Container>
          </MediaQuery>
          <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
            <Container size="lg" p="xs">
              <Group position="apart">
                <Logo />
                <Group spacing="xl">
                  <NavButtons />
                </Group>
              </Group>
            </Container>
          </MediaQuery>
        </Header>
      }
    >
      <AppLayout {...props} />
    </AppShell>
  );
}
