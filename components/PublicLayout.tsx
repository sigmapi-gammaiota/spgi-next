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
      <nav className="flex bg-slate-200 justify-center pt-10 pb-5">
      <img src="https://sigmapigammaiota.org/static/img/logo.svg" width="150" height="50" className="mr-10 ml-10"/> 
        {publicNavLinks.map((nl) => {
          return (
            <div key={nl.href} className="mx-1 text-purple-900 link-underline link-underline-black ml-5 mr-5">
              <Link href={nl.href}>{nl.text}</Link>
            </div>
          );
        })}
        <div className="mx-1 text-purple-900 link-underline link-underline-black ml-5 mr-5">
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
      <main className="container mx-1">{children}</main>
      <footer className="fixed text-center bottom-0 min-w-full mx-1 bg-slate-200">Our Values<br/>
Scholarship | Chivalry | Culture | Character | Service<br/>
<em>Copyright 2019 Gamma Iota Chapter of Sigma Pi Fraternity</em></footer>
    </div>
  );
};

export default PublicLayout;
