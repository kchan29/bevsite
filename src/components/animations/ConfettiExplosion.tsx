"use client";

import { useCallback, useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

interface ConfettiExplosionProps {
  duration?: number;
  particleCount?: number;
}

export function ConfettiExplosion({
  duration = 5000,
  particleCount = 200,
}: ConfettiExplosionProps) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isExploding, setIsExploding] = useState(true);

  const handleResize = useCallback(() => {
    if (typeof window !== "undefined") {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  useEffect(() => {
    if (isExploding) {
      const timer = setTimeout(() => setIsExploding(false), duration);
      return () => clearTimeout(timer);
    }
  }, [isExploding, duration]);

  useEffect(() => {
    setIsExploding(true);
  }, []);

  if (!isExploding) return null;

  return (
    <ReactConfetti
      width={dimensions.width}
      height={dimensions.height}
      numberOfPieces={particleCount}
      recycle={false}
      colors={["#f472b6", "#818cf8", "#a78bfa", "#22d3ee", "#f59e0b", "#10b981"]}
    />
  );
}
