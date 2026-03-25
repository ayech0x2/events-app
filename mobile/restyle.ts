import {
  backgroundColor,
  BoxProps,
  createBox,
  createRestyleComponent,
  createText,
  createTheme,
  layout,
  shadow,
  border,
  spacing,
  typography,
  TypographyProps,
} from "@shopify/restyle";
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TouchableOpacity as RNTouchableOpacity,
  TouchableOpacityProps as RNTouchableOpacityProps,
} from "react-native";

const palette = {
  primary: "#2b7fff",
  white: "#FFFFFF",
  whiteRgba: "#ffffff26",
  black: "#1a1a1a",
  grey: "#f3f3f3",
  grey100: "#e6e6e6",
  grey200: "#808080ff",
  error: "#ff0000",
  errorBorder: "#ff000085",
};

const theme = createTheme({
  colors: {
    primary: palette.primary,
    bg: palette.white,
    text: palette.black,
    textSecondary: palette.grey200,
    inputBg: palette.grey,
    border: palette.grey100,
    textWhite: palette.white,
    error: palette.error,
    errorBorder: palette.errorBorder,
  },
  spacing: {
    auto: "auto",
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    title: {
      fontSize: 20,
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
  borderRadii: {
    s: 4,
    m: 8,
    l: 12,
    xl: 16,
  },
});

export const Box = createBox<Theme>();
export const Text = createText<Theme>();

type TouchableOpacityProps = BoxProps<Theme> & RNTouchableOpacityProps;
export const TouchableOpacity = createRestyleComponent<
  TouchableOpacityProps,
  Theme
>([spacing, backgroundColor, layout, border], RNTouchableOpacity);

type TextInputProps = BoxProps<Theme> &
  TypographyProps<Theme> &
  RNTextInputProps;
export const TextInput = createRestyleComponent<TextInputProps, Theme>(
  [typography, spacing, shadow, layout],
  RNTextInput,
);

export type Theme = typeof theme;
export default theme;
