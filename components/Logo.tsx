import { Image, UnstyledButton } from '@mantine/core';
import Link from 'next/link';

export interface LogoProps {
  href?: string;
}

export default function Logo({ href = '/' }: LogoProps) {
  return (
    <UnstyledButton>
      <Link href={href}>
        <Image src="img/logo.svg" width={250} />
      </Link>
    </UnstyledButton>
  );
}
