import { NavbarLinksGroup } from '@components/NavbarLinksGroup';
import { Navbar, ScrollArea } from '@mantine/core';
import { TbGavel } from 'react-icons/tb';
import { Beer, Books, Home, School } from 'tabler-icons-react';

export interface PrivateNavbarProps {
  navLinks: { text: string; href: string; group: string }[];
}

export function PrivateNavbar({ navLinks }: PrivateNavbarProps) {
  return (
    <Navbar height={800} width={{ sm: 300 }} p="md">
      <Navbar.Section grow component={ScrollArea}>
        <NavbarLinksGroup
          text="Home"
          icon={Home}
          href={navLinks.find((navLink) => navLink.group == 'HOME')?.href}
        />
        <NavbarLinksGroup
          text="Parties"
          icon={Beer}
          links={navLinks.filter((navLink) => navLink.group == 'PARTIES')}
        />
        <NavbarLinksGroup
          text="Standards"
          icon={TbGavel}
          links={navLinks.filter((navLink) => navLink.group == 'STANDARDS')}
        />
        <NavbarLinksGroup
          text="Scholarship"
          icon={School}
          links={navLinks.filter((navLink) => navLink.group == 'SCHOLARSHIP')}
        />
        <NavbarLinksGroup
          text="Archives"
          icon={Books}
          links={navLinks.filter((navLink) => navLink.group == 'ARCHIVES')}
        />
      </Navbar.Section>
    </Navbar>
  );
}
