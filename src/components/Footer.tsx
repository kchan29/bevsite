"use client";

import { motion } from "framer-motion";
import { celebrationName } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative py-12 px-6 bg-gradient-to-r from-purple-100 to-pink-100 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500"
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Wishing you the happiest birthday ever, {celebrationName}!
        </motion.h2>

        <motion.p
          className="text-gray-700 mb-6 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          We hope all these messages from your friends bring you joy on your special day.
          Here's to another wonderful year ahead!
        </motion.p>

        <motion.div
          className="text-3xl space-x-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            🎂
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.2, rotate: -10 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            🎁
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            🎉
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.2, rotate: -10 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            🥳
          </motion.span>
        </motion.div>

        <motion.p
          className="mt-8 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          Made with ❤️ by friends who care
        </motion.p>
      </motion.div>

      {/* Decorative elements in the background */}
      <div className="absolute inset-0 pointer-events-none -z-0">
        {/* Decorative dots pattern */}
        <div className="absolute top-0 left-0 right-0 h-6 bg-[radial-gradient(circle_at_center,rgba(196,181,253,0.5)_1px,transparent_1px)] bg-[length:16px_16px]" />

        <motion.div
          className="absolute left-6 top-1/4 text-2xl"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        >
          🎈
        </motion.div>

        <motion.div
          className="absolute right-6 top-1/3 text-2xl"
          animate={{
            y: [0, -8, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 3.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          🎈
        </motion.div>

        <motion.div
          className="absolute left-1/4 bottom-6 text-2xl"
          animate={{
            y: [0, -12, 0],
            rotate: [0, 8, 0]
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1
          }}
        >
          🎈
        </motion.div>

        <motion.div
          className="absolute right-1/4 bottom-12 text-2xl"
          animate={{
            y: [0, -15, 0],
            rotate: [0, -8, 0]
          }}
          transition={{
            duration: 4.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1.5
          }}
        >
          🎈
        </motion.div>
      </div>
    </footer>
  );
}
