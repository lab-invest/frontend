interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

export default function Box({ children, className }: BoxProps) {
  return (
    <div
      className={`flex flex-col min-w-96 w-1/3 px-5 py-6 text-left bg-white rounded-md z-10 ${className}`}
    >
      {children}
    </div>
  );
}
