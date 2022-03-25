import Link from "next/link";

const publicNavLinks = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/philanthropy", text: "Philanthropy" },
  { href: "/donate", text: "Donate" },
  { href: "/rush", text: "Rush" },
  { href: "/private", text: "Login" },
];

const PublicLayout = ({ children }: { children: any }) => {
  return (
    <div>
      <nav>
        {publicNavLinks.map((nl) => {
          return (
            <Link key={nl.href} href={nl.href}>
              {nl.text}
            </Link>
          );
        })}
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default PublicLayout;
