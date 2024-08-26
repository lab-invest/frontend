import { tv } from "tailwind-variants";

interface ButtonProps {
  text: string;
  variant: "active" | "disable" | "buy" | "delete";
  type: "submit" | "button";
}

const button = tv({
  base: "w-full py-2 rounded-md text-white font-semibold text-xs 2xl:text-lg",
  variants: {
    variant: {
      active: "bg-purple-800 hover:bg-purple-900",
      disable: "bg-gray-300 cursor-not-allowed",
      buy: "bg-green-500",
      delete: "bg-red-500",
    },
  },
});

export default function Button({ text, variant, type }: ButtonProps) {
  return (
    <button type={type} className={button({ variant })}>
      {text}
    </button>
  );
}
