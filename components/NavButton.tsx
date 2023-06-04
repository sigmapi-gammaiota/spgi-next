import { Anchor, Text, UnstyledButton } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import useStyles from '@styles/styles';
import { useRouter } from 'next/router';

export interface NavButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  target?: string;
  markActive?: boolean;
  isPrivate?: boolean;
}

export default function NavButton({
  text,
  href = '/',
  target = '',
  markActive = true,
  isPrivate = false,
  onClick = () => {},
}: NavButtonProps) {
  const { classes } = useStyles();
  const router = useRouter();
  const { hovered, ref } = useHover();

  return (
    <UnstyledButton onClick={onClick}>
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
              : '') +
            ' ' +
            (isPrivate && 'text-white')
          }
        >
          {text}
        </Text>
      </Anchor>
    </UnstyledButton>
  );
}
