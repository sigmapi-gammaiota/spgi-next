import { Anchor, Text, UnstyledButton } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import useStyles from '@styles/styles';
import { useRouter } from 'next/router';

export interface NavButtonProps {
  text: string;
  href?: string;
  target?: string;
  markActive?: boolean;
}

export default function NavButton({
  text,
  href = '/',
  target = '',
  markActive = true,
}: NavButtonProps) {
  const { classes } = useStyles();
  const router = useRouter();
  const { hovered, ref } = useHover();

  return (
    <UnstyledButton>
      <Anchor href={href} target={target} variant="text">
        <Text
          ref={ref}
          className={
            classes.navButton +
            ' ' +
            (hovered ? classes.navButtonHover : '') +
            ' ' +
            (markActive && router.pathname == href
              ? classes.navButtonActive
              : '')
          }
        >
          {text}
        </Text>
      </Anchor>
    </UnstyledButton>
  );
}
