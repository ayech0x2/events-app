import normalize from "@/normalize";
import { Box, TextInput as RestyleTextInput, Text } from "@/restyle";
import { TextInputChangeEvent, TextInputProps } from "react-native";

interface Props {
  label: string;
  value: string;
  placeholder: string;
  onChange: (e: TextInputChangeEvent) => void;
  error?: string;
  nativeProps?: TextInputProps;
}

export default function TextInput({
  label,
  placeholder,
  value,
  onChange,
  error,
  nativeProps,
}: Props) {
  return (
    <Box>
      <Text color="textSecondary" marginBottom="xs">
        {label}
      </Text>
      <Box
        backgroundColor="inputBg"
        borderWidth={1}
        borderColor={error ? "errorBorder" : "border"}
        borderRadius="s"
        height={normalize(40)}
        justifyContent="center"
      >
        <RestyleTextInput
          onChange={onChange}
          defaultValue={value}
          placeholder={placeholder}
          paddingHorizontal="s"
          fontSize={normalize(14)}
          {...nativeProps}
        />
      </Box>
      {error ? (
        <Text color="error" variant="caption" marginTop="xs">
          {error}
        </Text>
      ) : null}
    </Box>
  );
}
