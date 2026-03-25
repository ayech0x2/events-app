import { AuthProvider } from "@/components/AuthProvider";
import theme from "@/restyle";
import { ThemeProvider } from "@shopify/restyle";
import { Stack } from "expo-router";

export default function StackLayout() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </ThemeProvider>
    </AuthProvider>
  );
}
