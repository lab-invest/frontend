"use client"
import { useEffect, useState } from "react";
import { variation } from "./variation";

function addVariations() {
  var width = window.innerWidth;
  const variations = [];
  if (width > 1400) {
    for (let i = 0; i < 8; i++) {
      variations.push(variation("PETR4", 320));
    }
  } else if (width > 1200) {
    for (let i = 0; i < 6; i++) {
      variations.push(variation("PETR4", 320));
    }
  } else {
    for (let i = 0; i < 4; i++) {
      variations.push(variation("PETR4", 320));
    }
  }
  return variations;
}

export function VariationDiv() {
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
    <div className="flex ml-10 mt-4 mr-10 justify-between">
      {addVariations(windowWidth)}
    </div>
  );
}
