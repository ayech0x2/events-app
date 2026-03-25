import theme from "@/restyle";
import { ThemeProvider } from "@shopify/restyle";
import { Stack } from "expo-router";

export default function StackLayout() {
  return (
    <ThemeProvider theme={theme}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </ThemeProvider>
  );
}
