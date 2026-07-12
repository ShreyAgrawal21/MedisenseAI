"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
        }}
        className="absolute left-20 top-24 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="absolute bottom-10 right-20 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl"
      />
    </>
  );
}