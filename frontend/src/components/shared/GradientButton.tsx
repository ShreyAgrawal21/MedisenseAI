"use client";

import { motion } from "framer-motion";
import React from "react";

interface GradientButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function GradientButton({
  children,
  type = "button",
  disabled = false,
  className = "",
  onClick,
}: GradientButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        w-full
        rounded-xl
        bg-linear-to-r
        from-blue-600
        to-cyan-500
        px-6
        py-3
        font-semibold
        text-white
        shadow-lg
        transition
        hover:shadow-xl
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}