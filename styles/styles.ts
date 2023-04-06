import { createStyles } from "@mantine/core";

export default createStyles((theme) => ({
  title: {
    color: theme.white,
    fontSize: 30,
    fontWeight: 500,
  },
  navButton: {
    color: "#3f3a5f",
    fontSize: 16,
    fontWeight: 400,
    padding: 0
  },
  navButtonHover: {
    borderBottom: "solid",
  },
  navButtonActive: {
    borderBottom: "solid",
  }
}));
