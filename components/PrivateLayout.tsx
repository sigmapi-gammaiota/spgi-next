import { Message, MessageProps } from '@components/Message';
import { PrivateNavbar } from '@components/PrivateNavbar';
import { PrivateLink } from '@lib/RoleRouter';

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
  return (
    <>
      <PrivateNavbar navLinks={navLinks} />
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
