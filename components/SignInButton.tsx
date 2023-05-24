import { Text, UnstyledButton } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import useStyles from '@styles/styles';
import { signIn } from 'next-auth/react';

export default function SignInButton() {
  const { classes } = useStyles();
  const { hovered, ref } = useHover();

  return (
    <UnstyledButton
      onClick={() => {
        signIn(undefined, { callbackUrl: '/private' });
      }}
    >
      <Text
        ref={ref}
        className={
          classes.navButton + ' ' + (hovered ? classes.navButtonHover : '')
        }
      >
        Sign In
      </Text>
    </UnstyledButton>
  );
}
