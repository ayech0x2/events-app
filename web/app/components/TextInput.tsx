import { useId } from "react";

interface Props {
  name: string;
  label: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
}

function TextInput({
  placeholder,
  type = "text",
  label,
  error,
  name,
  value,
  onChange,
}: Props) {
  const id = useId();

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id} className="text-sm text-gray-500">
          {label}
        </label>
      )}
      <input
        id={id}
        className={`border-1 ${error ? "border-red-500" : "border-gray-300"} rounded-md px-2 py-2`}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
}

export default TextInput;
