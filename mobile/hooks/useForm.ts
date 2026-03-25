import { useState } from "react";
import { TextInputChangeEvent } from "react-native";

type UseFormOptions<T> = {
  initialValues: T;
  validate?: (values: T) => Partial<Record<keyof T, string>>;
};

export function useForm<T extends Record<string, any>>(
  options: UseFormOptions<T>,
) {
  const { initialValues, validate } = options;

  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const register = (name: keyof T) => ({
    name,
    value: values[name],
    onChange: (e: TextInputChangeEvent) => {
      const value = e.nativeEvent.text;
      setValues((prev) => ({ ...prev, [name]: value }));
    },
  });

  const handleSubmit =
    (onSubmit: (values: T) => Promise<void> | void) => async () => {
      if (validate) {
        const validationErrors = validate(values);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
          return;
        }
      }

      try {
        setIsSubmitting(true);
        await onSubmit(values);
      } finally {
        setIsSubmitting(false);
      }
    };

  const setError = (name: keyof T, error: string) => {
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
  };

  return {
    values,
    errors,
    register,
    handleSubmit,
    isSubmitting,
    reset,
    setError,
  };
}
