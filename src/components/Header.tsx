"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/animations/AnimatedText";
import { celebrationName } from "@/lib/data";

// Animation variants for the cake icon
const cakeVariants = {
  initial: { scale: 0, rotate: -10 },
  animate: {
    scale: 1,
    rotate: [-10, 10, -5, 5, 0],
    transition: {
      scale: { duration: 0.5, ease: "backOut" },
      rotate: { duration: 1.5, ease: "easeInOut" }
    }
  },
  hover: {
    rotate: [0, -5, 5, -3, 3, 0],
    scale: 1.1,
    transition: { duration: 0.5 }
  }
};

export function Header() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="relative py-16 md:py-24 px-6 overflow-hidden text-center">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-pink-100 to-purple-100">
        {/* Festive background patterns */}
        <div className="absolute top-0 left-0 right-0 h-10 bg-[radial-gradient(circle_at_center,rgba(255,182,193,0.4)_1px,transparent_1px)] bg-[length:20px_20px]" />
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-[radial-gradient(circle_at_center,rgba(216,180,254,0.4)_1px,transparent_1px)] bg-[length:20px_20px]" />
      </div>

      {mounted && (
        <>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4"
          >
            <motion.div
              className="inline-block text-4xl"
              variants={cakeVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              🎂
            </motion.div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 pb-2">
              <AnimatedText
                text={`Happy Birthday, ${celebrationName}!`}
                delay={0.5}
                duration={0.08}
                staggerChildren={0.05}
              />
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="mt-6 text-lg text-gray-700"
            >
              <p>Check out all these special messages from your friends below!</p>
            </motion.div>
          </div>

          {/* Decoration elements */}
          <motion.div
            className="absolute top-10 left-10 text-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
          >
            🎈
          </motion.div>

          <motion.div
            className="absolute bottom-10 right-10 text-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 2.2 }}
          >
            🎁
          </motion.div>

          <motion.div
            className="absolute top-1/4 right-10 text-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 2.4 }}
          >
            🎉
          </motion.div>

          <motion.div
            className="absolute bottom-1/4 left-10 text-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 2.6 }}
          >
            🥳
          </motion.div>
        </>
      )}
    </header>
  );
}
