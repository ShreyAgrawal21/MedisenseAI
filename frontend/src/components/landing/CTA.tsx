"use client";

import { motion } from "framer-motion";
import GradientButton from "@/components/shared/GradientButton";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-32">

      {/* Background */}

      <div className="absolute inset-0 bg-linear-to-r from-blue-600 via-sky-500 to-cyan-500" />

      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
        className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-white/10 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl"
      />

      {/* Content */}

      <div className="relative mx-auto max-w-5xl px-8 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold text-white"
        >
          Ready to Transform
          <br />
          Your Medical Reports?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-blue-100"
        >
          Upload reports, understand complex medical terms,
          compare health trends, and chat with AI —
          all in one secure platform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-col justify-center gap-5 sm:flex-row"
        >
          <GradientButton>
            <span className="flex items-center gap-2">
              Get Started
              <ArrowRight size={18} />
            </span>
          </GradientButton>

          <button className="flex items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white/20">
            <PlayCircle size={20} />
            View Demo
          </button>
        </motion.div>

      </div>
    </section>
  );
}