import { useEffect, useState } from "react";
import Variation from "./Variation";

function addVariations(width: number) {
  const variations = [];
  if (width > 1400) {
    for (let i = 0; i < 8; i++) {
      variations.push(
        <Variation key={i} nameAction="PETR4" valueAction={320} />
      );
    }
  } else if (width > 1200) {
    for (let i = 0; i < 7; i++) {
      variations.push(
        <Variation key={i} nameAction="PETR4" valueAction={320} />
      );
    }
  } else {
    for (let i = 0; i < 6; i++) {
      variations.push(
        <Variation key={i} nameAction="PETR4" valueAction={320} />
      );
    }
  }
  return variations;
}

export default function BoxVariation() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex justify-between">{addVariations(windowWidth)}</div>
  );
}
