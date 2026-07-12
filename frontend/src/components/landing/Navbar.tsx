"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "@/components/shared/Logo";
import GradientButton from "@/components/shared/GradientButton";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 z-50 w-full border-b border-slate-200/50 bg-white/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">

        <Logo />

        <div className="hidden items-center gap-8 md:flex">

          <Link
            href="#features"
            className="text-slate-600 transition hover:text-blue-600"
          >
            Features
          </Link>

          <Link
            href="#how"
            className="text-slate-600 transition hover:text-blue-600"
          >
            How it Works
          </Link>

          <Link
            href="#about"
            className="text-slate-600 transition hover:text-blue-600"
          >
            About
          </Link>

        </div>

        <div className="flex items-center gap-4">

          <Link 
            href="/login"
            className="text-slate-600 hover:text-blue-600"
          >
            Login
          </Link>

          <Link href="/register">
             <GradientButton>
              Get Started
             </GradientButton>
          </Link>
          

        </div>

      </div>
    </motion.nav>
  );
}