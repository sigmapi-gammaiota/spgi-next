import { Box, Container, MantineNumberSize, SpacingValue, SystemProp } from "@mantine/core";

export interface SectionProps {
  children: any;
  size?: MantineNumberSize | undefined;
  p?: SystemProp<SpacingValue> | undefined;
  bg?: string | undefined;
}

export default function Section({ children, size="lg", p="lg", bg="" }: SectionProps) {
  return (
    <Box sx={(theme) => ({ backgroundColor: theme.colors[bg] })}>
      <Container size={size} p={p}>
        { children }
      </Container>
    </Box>
  );
};
