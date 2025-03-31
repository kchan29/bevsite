"use client";

import { useState, useEffect } from "react";
import { FloatingBalloons } from "./FloatingBalloons";

export function BackgroundBalloons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show balloons after page loads
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null;
  }

  return <FloatingBalloons count={25} />;
}
