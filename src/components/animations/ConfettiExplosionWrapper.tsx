"use client";

import { useEffect, useState } from "react";
import { ConfettiExplosion } from "./ConfettiExplosion";

export function ConfettiExplosionWrapper() {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Show confetti after a short delay when the page loads
    const timer = setTimeout(() => {
      setShowConfetti(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!showConfetti) {
    return null;
  }

  return <ConfettiExplosion duration={5000} particleCount={200} />;
}
