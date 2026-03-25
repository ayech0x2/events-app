import { Box, Text } from "@/restyle";
import normalize from "@/normalize";

export default function AppLogo() {
  return (
    <Box justifyContent="center" alignItems="center" flex={1}>
      <Text
        alignItems="center"
        textAlign="center"
        variant="title"
        textTransform="uppercase"
        fontWeight={"bold"}
        fontSize={normalize(28)}
        lineHeight={normalize(32)}
      >
        AppName
      </Text>
      <Text variant="body" color="textSecondary" textTransform="uppercase">
        Slogan de l'application
      </Text>
    </Box>
  );
}
