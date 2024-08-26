import { useEffect, useState } from "react";
import { tv } from "tailwind-variants";

interface ToastProps {
  message: string;
  duration?: number;
  show: boolean;
  onClose: () => void;
  variant: "success" | "error";
}

const toastStyles = tv({
  base: "fixed top-5 text-white text-xs p-2 rounded-md shadow-md z-50",
  variants: {
    variant: {
      success: "bg-green-500",
      error: "bg-red-500",
    },
  },
});

export default function Toast({
  message,
  duration = 2000,
  show,
  onClose,
  variant,
}: ToastProps) {
  const [visible, setVisible] = useState(show);
  const [animationClass, setAnimationClass] = useState("accordion-up");

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (show) {
      setVisible(true);
      setAnimationClass("accordion-up");
      timer = setTimeout(() => {
        setAnimationClass("accordion-down");
        setTimeout(() => {
          setVisible(false);
          onClose();
        }, 250); // Tempo da animação de fade-out
      }, duration);
    } else {
      setAnimationClass("accordion-down");
      timer = setTimeout(() => {
        setVisible(false);
        onClose();
      }, 250); // Tempo da animação de fade-out
    }

    return () => clearTimeout(timer);
  }, [show, duration, onClose]);

  if (!visible) return null;

  return (
    <div className={`${toastStyles({ variant })} ${animationClass}`}>
      {message}
    </div>
  );
}
