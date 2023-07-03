import Logo from '@components/Logo';
import { Message, MessageProps } from '@components/Message';
import { PrivateNavbar } from '@components/PrivateNavbar';
import { PrivateLink } from '@lib/RoleRouter';
import {
  AppShell,
  Box,
  Burger,
  Group,
  Header,
  MediaQuery,
} from '@mantine/core';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface PrivateLayoutProps {
  children: any;
  navLinks: PrivateLink[];
  messages: [MessageProps];
}

const PrivateLayout = ({
  children,
  navLinks,
  messages,
}: PrivateLayoutProps) => {
  const [opened, setOpened] = useState(false);
  const dynamicRoute = useRouter().asPath;

  useEffect(() => setOpened(false), [dynamicRoute]);

  return (
    <AppShell
      padding={0}
      navbarOffsetBreakpoint="sm"
      navbar={<PrivateNavbar navLinks={navLinks} hidden={!opened} />}
      header={
        <Header height={90} px="md" py="sm">
          <Box p="xs">
            <Group position="apart">
              <Logo />
              <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                />
              </MediaQuery>
            </Group>
          </Box>
        </Header>
      }
    >
      <div>
        {messages &&
          messages.map((m) => {
            return Message(m.text, m.level);
          })}
      </div>
      <main>{children}</main>
    </AppShell>
  );
};

export default PrivateLayout;
