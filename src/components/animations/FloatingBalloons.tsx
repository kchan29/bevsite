"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface BalloonProps {
  id: string;
  color: string;
  size: number;
  delay: number;
  duration: number;
  left: string;
}

const Balloon: React.FC<BalloonProps> = ({ color, size, delay, duration, left }) => {
  return (
    <motion.div
      className="absolute bottom-0"
      style={{ left }}
      initial={{ y: 0, opacity: 0 }}
      animate={{
        y: [0, -1000],
        opacity: [0, 1, 1, 0],
        x: [0, Math.random() * 40 - 20, Math.random() * 60 - 30]
      }}
      transition={{
        delay,
        duration,
        ease: "easeOut",
        times: [0, 0.1, 0.9, 1]
      }}
    >
      <div
        className="relative"
        style={{
          width: `${size}px`,
          height: `${size * 1.2}px`,
        }}
      >
        <div
          className="absolute rounded-full w-full h-[85%] top-0"
          style={{ backgroundColor: color }}
        />
        <div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[2px] h-[15%]"
          style={{ backgroundColor: "#888" }}
        />
      </div>
    </motion.div>
  );
};

interface FloatingBalloonsProps {
  count?: number;
}

export function FloatingBalloons({ count = 15 }: FloatingBalloonsProps) {
  const [balloons, setBalloons] = useState<React.ReactNode[]>([]);

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
    const newBalloons = Array.from({ length: count }).map((_, index) => {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.floor(Math.random() * 30) + 30; // 30-60px
      const delay = Math.random() * 15; // 0-15s delay
      const duration = Math.random() * 10 + 15; // 15-25s duration
      const left = `${Math.random() * 100}%`;
      const id = `balloon-${index}-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;

      return (
        <Balloon
          key={id}
          id={id}
          color={color}
          size={size}
          delay={delay}
          duration={duration}
          left={left}
        />
      );
    });

    setBalloons(newBalloons);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {balloons}
    </div>
  );
}
