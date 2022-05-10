import Link from "next/link";
import Image from "next/image";
import { getSession, signIn, useSession } from "next-auth/react";

const publicNavLinks = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/philanthropy", text: "Philanthropy" },
  { href: "https://www.paypal.com/paypalme/sigmapigammaiota?locale.x=en_US", text: "Donate" },
  { href: "/rush", text: "Rush" },
];

const PublicLayout = ({ children }: { children: any }) => {
  const { status } = useSession();

  return (
    <div className="container mx-auto md:px-20 space-y-2 bg-base0">
      <nav className="flex flex-row bg-base0">
        <Image
          src="/logo.svg"
          alt="logo"
          width={250}
          height={75}
          layout="intrinsic"
          objectFit="contain"
        />
        <div className="flex-grow"></div>
        {publicNavLinks.map((nl) => {
          return (
            <div key={nl.href} className="mx-2 my-auto text-purp0">
              <Link href={nl.href}>{nl.text}</Link>
            </div>
          );
        })}
        <div className="mx-2 my-auto text-purp0">
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
      <main className="mx-auto">{children}</main>
      <footer className="bg-base0 text-center min-w-full">
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
