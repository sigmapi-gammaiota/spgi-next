import { MessageProps } from "../components/Message";

interface DefaultProps {
  private: boolean;
  navLinks: [{ href: string; text: string }?];
  messages: [MessageProps?];
}

export function getDefaultProps(): DefaultProps {
  return {
    private: true,
    navLinks: [],
    messages: [],
  };
}
