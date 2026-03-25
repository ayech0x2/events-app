import { Box, Text } from "@/restyle";
import { useRouter } from "expo-router";

export default function AuthFooter({
  currentScreen,
}: {
  currentScreen: "signin" | "signup";
}) {
  const text =
    currentScreen === "signin"
      ? "Vous n'avez pas de compte ? "
      : "Vous avez déjà un compte ? ";
  const buttonText =
    currentScreen === "signin" ? "Créez-en un." : "Connectez-vous.";

  const router = useRouter();

  const handleTextPress = () => {
    if (currentScreen === "signin") router.push("/auth/signup");
    else router.back();
  };

  return (
    <Box gap="s">
      <Text textAlign="center">
        {text}
        <Text onPress={handleTextPress} color="primary" fontWeight={"bold"}>
          {buttonText}
        </Text>
      </Text>
      <Text textAlign="center" variant="caption" color="textSecondary">
        Copyright © 2026
      </Text>
    </Box>
  );
}
