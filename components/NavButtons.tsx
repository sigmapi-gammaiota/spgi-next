import NavButton from "@components/NavButton";
import SignInButton from "@components/SignInButton";
import { useSession } from "next-auth/react";

export default function NavButtons() {
  const { status } = useSession();

  return (
    <>
      <NavButton text="Home" href="/" />
      <NavButton text="About" href="/about" />
      <NavButton text="Service & Activities" href="/activities" />
      <NavButton text="Rush Sigma Pi" href="/rush" />
      <NavButton text="Brothers" href="/brothers" />
      <NavButton text="Donate" href="https://paypal.me/sigmapigammaiota?locale.x=en_US" target="_blank" />
      {
        status == "authenticated" && 
        <NavButton text="Private" href="/private" />
      }
      {
        status == "unauthenticated" && 
        <SignInButton />
      }
    </>
  );
}