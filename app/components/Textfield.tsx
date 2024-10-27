import Input from "./Input";

interface TextFieldProps {
  type: "text" | "email" | "password" | "tel" | "date";
  isDisabled?: boolean;
  labelText: string;
  name: string;
  placeholder?: string;
  maxLength?: number;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Textfield({
  type,
  isDisabled,
  labelText,
  name,
  placeholder,
  maxLength,
  value,
  onChange,
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
        value={value}
        onChange={onChange}
        disabled={isDisabled}
      />
    </div>
  );
}
