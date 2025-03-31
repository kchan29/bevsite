"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ConfettiPieceProps {
  id: string;
  color: string;
  size: number;
  duration: number;
  delay: number;
  left: string;
}

const ConfettiPiece: React.FC<ConfettiPieceProps> = ({ id, color, size, duration, delay, left }) => {
  return (
    <motion.div
      key={id}
      className="absolute top-0"
      style={{
        left,
        backgroundColor: color,
        width: size,
        height: size * 0.3,
        borderRadius: size > 8 ? 2 : 0,
        zIndex: 10
      }}
      initial={{ y: -20, opacity: 0, rotate: 0 }}
      animate={{
        y: ["0vh", "100vh"],
        opacity: [0, 1, 1, 0.5, 0],
        rotate: [0, 360 * Math.random() * (Math.random() > 0.5 ? 1 : -1)],
        scale: [1, Math.random() * 0.3 + 0.7]
      }}
      transition={{
        duration,
        delay,
        ease: "easeInOut",
        times: [0, 0.2, 0.8, 0.9, 1]
      }}
    />
  );
};

interface ParticleEffectProps {
  count?: number;
}

export function ParticleEffect({ count = 100 }: ParticleEffectProps) {
  const [pieces, setPieces] = useState<React.ReactNode[]>([]);

  const colors = [
    "#f472b6", // pink
    "#818cf8", // indigo
    "#a78bfa", // purple
    "#22d3ee", // cyan
    "#f59e0b", // amber
    "#10b981", // emerald
    "#ef4444", // red
    "#3b82f6"  // blue
  ];

  useEffect(() => {
    const confettiPieces = Array.from({ length: count }).map((_, index) => {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.floor(Math.random() * 10) + 5; // 5-15px
      const duration = Math.random() * 3 + 2; // 2-5s duration
      const delay = Math.random() * 5; // 0-5s delay
      const left = `${Math.random() * 100}%`;
      const id = `confetti-${Date.now()}-${index}-${Math.random().toString(36).substring(2, 9)}`;

      return (
        <ConfettiPiece
          key={id}
          id={id}
          color={color}
          size={size}
          duration={duration}
          delay={delay}
          left={left}
        />
      );
    });

    setPieces(confettiPieces);

    // Refresh the confetti periodically
    const intervalId = setInterval(() => {
      setPieces(prevPieces => {
        // Replace 20% of the pieces
        const toKeep = prevPieces.slice(0, Math.floor(prevPieces.length * 0.8));
        const newPieces = Array.from({ length: Math.floor(count * 0.2) }).map((_, index) => {
          const color = colors[Math.floor(Math.random() * colors.length)];
          const size = Math.floor(Math.random() * 10) + 5; // 5-15px
          const duration = Math.random() * 3 + 2; // 2-5s duration
          const delay = Math.random() * 2; // 0-2s delay
          const left = `${Math.random() * 100}%`;
          const id = `confetti-${Date.now()}-${index}-${Math.random().toString(36).substring(2, 9)}`;

          return (
            <ConfettiPiece
              key={id}
              id={id}
              color={color}
              size={size}
              duration={duration}
              delay={delay}
              left={left}
            />
          );
        });
        return [...toKeep, ...newPieces];
      });
    }, 2000);

    return () => clearInterval(intervalId);
  }, [count]); // Removed colors from the dependency array

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {pieces}
    </div>
  );
}
