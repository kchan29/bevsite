"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

interface AnimatedTextProps extends Omit<HTMLMotionProps<"div">, "animate" | "initial" | "variants"> {
  text: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  staggerChildren?: number;
}

export function AnimatedText({
  text,
  delay = 0,
  duration = 0.05,
  className = "",
  once = false,
  staggerChildren = 0.03,
  ...props
}: AnimatedTextProps) {
  // Split the text into an array of letters
  const letters = Array.from(text);

  // Variants for the container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren: delay,
        when: "beforeChildren"
      },
    }),
  };

  // Variants for each letter
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
        duration,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
        duration,
      },
    },
  };

  return (
    <motion.div
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
      {...(once ? { whileInView: "visible", viewport: { once: true } } : {})}
      {...props}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={`${index}-${letter}`}
          variants={child}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
}
