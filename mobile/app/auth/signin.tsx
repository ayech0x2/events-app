import AppLogo from "@/components/AppLogo";
import AuthFooter from "@/components/AuthFooter";
import SigninForm from "@/components/forms/SigninForm";
import { Box, Theme } from "@/restyle";
import { useTheme } from "@shopify/restyle";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Signin() {
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
        <SigninForm />
        <AuthFooter currentScreen="signin"  />
      </SafeAreaView>
    </Box>
  );
}
