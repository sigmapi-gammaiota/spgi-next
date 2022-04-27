import Link from "next/link";
import { getSession, signIn, useSession } from "next-auth/react";

const publicNavLinks = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/philanthropy", text: "Philanthropy" },
  { href: "/donate", text: "Donate" },
  { href: "/rush", text: "Rush" },
];

const PublicLayout = ({ children }: { children: any }) => {
  const { status } = useSession();

  return (
    <div className="grid">
      <nav className="flex-nowrap md:flex bg-base0 justify-center pt-10 pb-5">
        <img
          src="https://sigmapigammaiota.org/static/img/logo.svg"
          width="150"
          height="50"
          className="mr-4 md:mr-10 ml-4 md:ml-10"
        />
        {publicNavLinks.map((nl) => {
          return (
            <div
              key={nl.href}
              className="mx-1 md:ml-2 transition ease-in-out text-purp0 hover:-translate-y-1 hover:scale-110 hover:text-purp1 duration-200"
            >
              <Link href={nl.href}>{nl.text}</Link>
            </div>
          );
        })}
        <div className="mx-1 md:ml-2 transition ease-in-out text-purp0 hover:-translate-y-1 hover:scale-110 hover:text-purp1 duration-200">
          {status == "authenticated" && <Link href="private">Private</Link>}
          {status == "unauthenticated" && (
            <button
              className=""
              onClick={() => {
                signIn(undefined, { callbackUrl: "/private" });
              }}
            >
              Sign in
            </button>
          )}
        </div>
      </nav>
      <main className="container mx-auto">{children}</main>
      <footer className="fixed bg-base0 text-center bottom-0 min-w-full mx-1">
        Our Values
        <br />
        Scholarship | Chivalry | Culture | Character | Service
        <br />
        <em>Copyright 2019 Gamma Iota Chapter of Sigma Pi Fraternity</em>
      </footer>
    </div>
  );
};

export default PublicLayout;
