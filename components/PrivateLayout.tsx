import { signOut } from "next-auth/react";
import Link from "next/link";
import { Key } from "react";
import { Url } from "url";
import { PrivateLink } from "../lib/RoleRouter";
import { MessageProps, Message } from "./Message";

interface PrivateLayoutProps {
  children: any;
  navLinks: { text: String; href: String }[];
  messages: [MessageProps];
}

const PrivateLayout = ({
  children,
  navLinks,
  messages,
}: PrivateLayoutProps) => {
  return (
    <>
      <header>
        <nav className="flex">
          {navLinks &&
            navLinks.map((nl) => {
              //todo: check "as unknown as Key", seems clunky
              return (
                <div
                  key={nl.href as unknown as Key}
                  className="mx-1 hover:underline"
                >
                  <Link href={nl.href as unknown as Url}>{nl.text}</Link>
                </div>
              );
            })}
          <button onClick={() => signOut()} className="mx-1 hover:underline">
            Sign Out
          </button>
        </nav>
      </header>
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
