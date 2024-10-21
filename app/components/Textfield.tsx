import Input from "./Input";

interface TextFieldProps {
  type: "text" | "email" | "password" | "tel";
  isDisabled?: boolean;
  labelText: string;
  name: string;
  placeholder?: string;
  maxLength?: number;
}

export default function Textfield({
  type,
  isDisabled,
  labelText,
  name,
  placeholder,
  maxLength,
}: TextFieldProps) {
  return (
    <div className="flex flex-col">
      <label className="text-sm" htmlFor="#">
        {labelText}
      </label>
      <Input
        maxLength={maxLength}
        placeholder={placeholder}
        type={type}
        name={name}
        disabled={isDisabled}
      />
    </div>
  );
}
