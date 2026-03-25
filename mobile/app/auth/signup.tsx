import AppLogo from "@/components/AppLogo";
import AuthFooter from "@/components/AuthFooter";
import SignupForm from "@/components/forms/SignupForm";
import { Box, Theme } from "@/restyle";
import { useTheme } from "@shopify/restyle";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Signup() {
  const { spacing } = useTheme<Theme>();

  return (
    <Box flex={1} backgroundColor="bg">
      <SafeAreaView
        style={{
          flex: 1,
          paddingHorizontal: spacing.m,
          gap: spacing.m,
        }}
      >
        <AppLogo />
        <Box marginTop="auto" />
        <SignupForm />
        <AuthFooter currentScreen="signup" />
      </SafeAreaView>
    </Box>
  );
}
