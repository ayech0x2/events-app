import { useAuth } from "@/components/AuthProvider";
import { Text, TouchableOpacity } from "@/restyle";
import { Stack } from "expo-router";
import { Alert } from "react-native";

export default function StackLayout() {
  const auth = useAuth();

  const handleLogout = () => {
    Alert.alert("Déconnexion", "Êtes-vous sûr de vouloir vous déconnecter ?", [
      {
        text: "Annuler",
        style: "cancel",
      },
      {
        text: "Déconnexion",
        onPress: () => auth?.logout(),
      },
    ]);
  };
  return (
    <Stack
      screenOptions={{
        title: "Événements",
        headerRight: () => (
          <TouchableOpacity onPress={handleLogout}>
            <Text>➜]</Text>
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen name="index" options={{ title: "Événements" }} />
      <Stack.Screen name="[eventId]" options={{ title: "Détails" }} />
    </Stack>
  );
}
