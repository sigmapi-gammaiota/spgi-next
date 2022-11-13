import { Container, MantineNumberSize, SpacingValue, SystemProp } from "@mantine/core";

export interface SectionProps {
  children: any;
  size?: MantineNumberSize | undefined;
  p?: SystemProp<SpacingValue> | undefined
}

export default function Section({ children, size="lg", p="lg" }: SectionProps) {
  return (
    <Container size={size} p={p}>
      { children }
    </Container>
  );
};
