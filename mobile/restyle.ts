import { createBox, createText, createTheme } from "@shopify/restyle";

const palette = {
  white: "#FFFFFF",
  black: "#1a1a1aff",
};

const theme = createTheme({
  colors: {
    bg: palette.white,
    text: palette.black,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    title: {
      fontSize: 24,
      lineHeight: 32,
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
    },
    caption: {
      fontSize: 12,
      lineHeight: 16,
    },
    defaults: {
      color: "text",
      fontSize: 16,
      lineHeight: 24,
    },
  },
});

export const Box = createBox<Theme>();
export const Text = createText<Theme>();

export type Theme = typeof theme;
export default theme;
