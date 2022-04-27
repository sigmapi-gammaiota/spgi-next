import { signOut } from "next-auth/react";
import Link from "next/link";
import { Key } from "react";
import { Url } from "url";
import { PrivateLink } from "../lib/RoleRouter";

interface PrivateLayoutProps {
  children: any;
  navLinks: { text: String; href: String }[];
}

const PrivateLayout = ({ children, navLinks }: PrivateLayoutProps) => {
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
      <main>{children}</main>
    </>
  );
};

export default PrivateLayout;
