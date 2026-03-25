import { useAuth } from "@/components/AuthProvider";
import { Redirect } from "expo-router";

export default function Index() {
  const auth = useAuth();

  if (auth?.loading) {
    return null;
  }

  if (auth?.token) {
    return <Redirect href="/application" />;
  }

  return <Redirect href="/auth/signin" />;
}
