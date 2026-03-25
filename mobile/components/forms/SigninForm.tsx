import TextInput from "@/components/controls/TextInput";
import { useForm } from "@/hooks/useForm";
import normalize from "@/normalize";
import { Box, Text, TouchableOpacity } from "@/restyle";
import AuthService from "@/services/auth";
import { SigninInput } from "@/types";
import { useAuth } from "../AuthProvider";

export default function SigninForm() {
  const authService = new AuthService();

  const auth = useAuth();

  const { register, handleSubmit, errors, isSubmitting, setError } = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors: Partial<Record<keyof SigninInput, string>> = {};
      if (!values.email) errors.email = "Email est requis";
      if (!values.password) errors.password = "Mot de passe est requis";
      return errors;
    },
  });

  const onSubmit = (values: SigninInput) => {
    authService
      .signin(values.email, values.password)
      .then(async (res) => {
        auth && auth.login(res.token);
      })
      .catch(() => {
        setError("password", "Merci de vérifier vos informations");
        setError("email", "Merci de vérifier vos informations");
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
          {isSubmitting ? "Connexion..." : "Se connecter"}
        </Text>
      </TouchableOpacity>
    </Box>
  );
}
