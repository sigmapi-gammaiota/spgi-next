import { NavbarLinksGroup } from '@components/NavbarLinksGroup';
import {
  Anchor,
  Divider,
  Group,
  Navbar,
  ScrollArea,
  Text,
  UnstyledButton,
} from '@mantine/core';
import { signOut } from 'next-auth/react';
import {
  TbArrowBackUp,
  TbBeer,
  TbBooks,
  TbGavel,
  TbHome,
  TbLogout,
  TbSchool,
} from 'react-icons/tb';

export interface PrivateNavbarProps {
  navLinks: { text: string; href: string; group: string }[];
  hidden?: boolean;
}

export function PrivateNavbar({ navLinks, hidden }: PrivateNavbarProps) {
  console.log(hidden);
  return (
    <Navbar width={{ sm: 300 }} p="md" hiddenBreakpoint="sm" hidden={hidden}>
      <Navbar.Section grow component={ScrollArea}>
        <NavbarLinksGroup
          text="Home"
          icon={TbHome}
          href={navLinks.find((navLink) => navLink.group == 'HOME')?.href}
        />
        <NavbarLinksGroup
          text="Parties"
          icon={TbBeer}
          links={navLinks.filter((navLink) => navLink.group == 'PARTIES')}
        />
        <NavbarLinksGroup
          text="Standards"
          icon={TbGavel}
          links={navLinks.filter((navLink) => navLink.group == 'STANDARDS')}
        />
        <NavbarLinksGroup
          text="Scholarship"
          icon={TbSchool}
          links={navLinks.filter((navLink) => navLink.group == 'SCHOLARSHIP')}
        />
        <NavbarLinksGroup
          text="Archives"
          icon={TbBooks}
          links={navLinks.filter((navLink) => navLink.group == 'ARCHIVES')}
        />
      </Navbar.Section>
      <Navbar.Section>
        <Divider />
        <Anchor href="/" variant="text">
          <Group>
            <TbArrowBackUp />
            <Text>Back to Public</Text>
          </Group>
        </Anchor>
        <UnstyledButton onClick={() => signOut()}>
          <Group>
            <TbLogout />
            <Text>Logout</Text>
          </Group>
        </UnstyledButton>
      </Navbar.Section>
    </Navbar>
  );
}
