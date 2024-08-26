import Input from "./Input";

interface TextFieldProps {
  type: "text" | "email" | "password";
  isDisabled: boolean;
  labelText: string;
  name: string;
}

export default function Textfield({
  type,
  isDisabled,
  labelText,
  name,
}: TextFieldProps) {
  return (
    <div className="flex flex-col">
      <label className="text-sm" htmlFor="#">
        {labelText}
      </label>
      <Input type={type} name={name} disabled={isDisabled} />
    </div>
  );
}
