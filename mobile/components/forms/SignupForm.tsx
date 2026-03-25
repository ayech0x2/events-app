import TextInput from "@/components/controls/TextInput";
import { useForm } from "@/hooks/useForm";
import normalize from "@/normalize";
import { Box, Text, TouchableOpacity } from "@/restyle";
import AuthService from "@/services/auth";
import { SignupInput } from "@/types";
import { useRouter } from "expo-router";
import { Alert } from "react-native";

export default function SignupForm() {
  const authService = new AuthService();

  const router = useRouter();

  const { register, handleSubmit, errors, setError, reset, isSubmitting } =
    useForm({
      initialValues: {
        email: "",
        password: "",
        name: "",
      },
      validate: (values) => {
        const errors: Partial<Record<keyof SignupInput, string>> = {};
        if (!values.email) errors.email = "Email est requis";
        if (!values.password) errors.password = "Mot de passe est requis";
        if (!values.name) errors.name = "Nom est requis";
        return errors;
      },
    });

  const onSubmit = (values: SignupInput) => {
    authService
      .signup(values.email, values.password, values.name)
      .then(() => {
        Alert.alert("Succès", "Utilisateur créé avec succès");
        reset();
        router.back();
      })
      .catch((err) => {
        setError("email", err.message);
      });
  };

  return (
    <Box gap="m">
      <Box>
        <Text variant="title" fontWeight="bold">
          Se connecter
        </Text>
        <Text variant="caption" color="textSecondary">
          Entrez vos informations pour vous connecter
        </Text>
      </Box>
      <TextInput
        {...register("email")}
        label="Addresse email"
        placeholder="Email"
        error={errors.email}
        nativeProps={{
          keyboardType: "email-address",
        }}
      />
      <TextInput
        {...register("name")}
        label="Nom"
        placeholder="Nom"
        error={errors.name}
      />
      <TextInput
        {...register("password")}
        label="Mot de passe"
        placeholder="Password"
        error={errors.password}
        nativeProps={{
          secureTextEntry: true,
        }}
      />
      <TouchableOpacity
        padding="s"
        borderRadius="m"
        alignItems="center"
        height={normalize(42)}
        justifyContent="center"
        backgroundColor="primary"
        onPress={handleSubmit(onSubmit)}
        disabled={isSubmitting}
      >
        <Text color="textWhite" textTransform="uppercase" textAlign="center">
          {isSubmitting ? "Création..." : "S'inscrire"}
        </Text>
      </TouchableOpacity>
    </Box>
  );
}
