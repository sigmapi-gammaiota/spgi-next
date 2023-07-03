import {
  Anchor,
  Box,
  Collapse,
  Group,
  ThemeIcon,
  UnstyledButton,
} from '@mantine/core';
import { useState } from 'react';
import { TbChevronRight } from 'react-icons/tb';

export interface NavbarLinksGroupProps {
  text: string;
  icon: React.FC<any>;
  href?: string;
  links?: { text: string; href: string }[];
  initiallyOpened?: boolean;
}

export function NavbarLinksGroup({
  text,
  icon: Icon,
  href,
  links,
  initiallyOpened,
}: NavbarLinksGroupProps) {
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const items = (hasLinks ? links : []).map((link) => (
    <Anchor href={link.href} key={link.text} variant="text" className="block">
      {link.text}
    </Anchor>
  ));
  const textAndIcon = (
    <Group position="apart" spacing={0}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <ThemeIcon variant="light" size={30}>
          <Icon size="1.1rem" className="text-white" />
        </ThemeIcon>
        <Box ml="md">{text}</Box>
      </Box>
      {hasLinks && (
        <TbChevronRight
          size="1rem"
          style={{
            transform: opened ? 'rotate(90deg)' : 'none',
          }}
          className="transition"
        />
      )}
    </Group>
  );

  return (
    <>
      <UnstyledButton onClick={() => setOpened((o) => !o)} className="block">
        {href ? (
          <Anchor href={href} variant="text">
            {textAndIcon}
          </Anchor>
        ) : (
          textAndIcon
        )}
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}
