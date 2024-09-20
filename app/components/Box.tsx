interface BoxProps {
  children: React.ReactNode;
}

export default function Box({ children }: BoxProps) {
  return (
    <div
      className={`flex flex-col gap-y-6 w-1/3 px-5 py-6 bg-white rounded-md`}
    >
      {children}
    </div>
  );
}
