import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React from "react";

const AuthContext = React.createContext<{
  token: string | null;
  loading: boolean;
  login: (token: string) => void;
  logout: () => void;
} | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = React.useState<string | null>(null);

  const [loading, setLoading] = React.useState(true);

  const router = useRouter();

  React.useEffect(() => {
    const loadToken = async () => {
      const savedToken = await AsyncStorage.getItem("token");
      if (savedToken) setToken(savedToken);
      setLoading(false);
    };
    loadToken();
  }, []);

  const login = async (token: string) => {
    setToken(token);
    await AsyncStorage.setItem("token", token);
    router.replace("/application");
  };

  const logout = async () => {
    setToken(null);
    await AsyncStorage.removeItem("token");
    router.replace("/auth/signin");
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
