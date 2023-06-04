import { Message, MessageProps } from '@components/Message';
import NavButton from '@components/NavButton';
import Section from '@components/Section';
import { Button, Group } from '@mantine/core';
import { signOut } from 'next-auth/react';

interface PrivateLayoutProps {
  children: any;
  navLinks: { text: string; href: string }[];
  messages: [MessageProps];
}

const PrivateLayout = ({
  children,
  navLinks,
  messages,
}: PrivateLayoutProps) => {
  return (
    <>
      <Section bg="purple">
        <Group>
          {navLinks &&
            navLinks.map((navLink) => (
              <NavButton text={navLink.text} href={navLink.href} isPrivate />
            ))}
          <NavButton text="Sign Out" onClick={() => signOut()} isPrivate />
        </Group>
      </Section>
      <div>
        {messages &&
          messages.map((m) => {
            return Message(m.text, m.level);
          })}
      </div>
      <main>{children}</main>
    </>
  );
};

export default PrivateLayout;
