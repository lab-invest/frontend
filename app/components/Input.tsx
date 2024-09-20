interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: "text" | "email" | "password";
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
        "w-full px-1.5 py-1.5 border rounded-md text-sm bg-gray-100 focus:outline-none focus:ring-1 focus:ring-purple-600" +
        className
      }
      ref={inputRef}
      {...props}
    />
  );
}
