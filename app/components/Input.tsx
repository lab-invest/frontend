interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: "text" | "email" | "password" | "tel";
  name: string;
  inputRef?: React.Ref<HTMLInputElement>;
  className?: string;
}

export default function Input({
  type,
  name,
  inputRef,
  className,
  ...props
}: InputProps) {
  return (
    <input
      type={type}
      name={name}
      className={
        "w-full px-2 py-2 border rounded-md text-sm bg-gray-100 focus:outline-none focus:ring-1 focus:ring-purple-600" +
        className
      }
      ref={inputRef}
      {...props}
    />
  );
}
