import { signOut } from "next-auth/react";
import Link from "next/link";
import { MessageProps, Message } from "./Message";

interface PrivateLayoutProps {
  children: any;
  navLinks: [{ text: string; href: string }];
  messages: [MessageProps];
}

const PrivateLayout = ({
  children,
  navLinks,
  messages,
}: PrivateLayoutProps) => {
  return (
    <>
      <div className="header">
        <nav>
          {navLinks &&
            navLinks.map((nl) => {
              return (
                <Link key={nl.href} href={nl.href}>
                  {nl.text}
                </Link>
              );
            })}
          <button onClick={() => signOut()}>Sign Out</button>
        </nav>
      </div>
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
