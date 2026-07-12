"use client";

import { motion } from "framer-motion";
import GradientButton from "@/components/shared/GradientButton";
import AnimatedBackground from "@/components/shared/AnimatedBackground";
import {
  Brain,
  Upload,
  MessageCircle,
  Activity,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 pt-32">

      <AnimatedBackground />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-20 px-8 py-20 lg:flex-row">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >

          <div className="mb-6 inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">

            AI Powered Healthcare

          </div>

          <h1 className="text-6xl font-extrabold leading-tight text-slate-900">

            Understand
            <br />

            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">

              Medical Reports

            </span>

            <br />

            in Seconds

          </h1>

          <p className="mt-8 text-lg leading-8 text-slate-600">

            Upload blood reports, pathology reports,
            diagnostic reports and instantly receive
            AI-powered explanations, summaries,
            comparisons and health insights.

          </p>

          <div className="mt-10 flex gap-5">

            <GradientButton>

              Get Started

            </GradientButton>

            <button className="rounded-xl border border-slate-300 px-8 py-4 font-semibold hover:bg-white">

              Watch Demo

            </button>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        >

          <div className="w-[420px] rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl">

            <div className="mb-6 flex items-center justify-between">

              <h2 className="text-xl font-bold">

                Health Dashboard

              </h2>

              <Activity className="text-blue-600" />

            </div>

            <div className="rounded-2xl bg-blue-50 p-6">

              <p className="text-sm text-slate-500">

                Health Score

              </p>

              <h1 className="mt-2 text-5xl font-bold text-blue-600">

                92%

              </h1>

            </div>

            <div className="mt-8 space-y-5">

              <div className="flex items-center gap-4">

                <Upload className="text-blue-500" />

                <span>Upload Reports</span>

              </div>

              <div className="flex items-center gap-4">

                <Brain className="text-cyan-500" />

                <span>AI Analysis</span>

              </div>

              <div className="flex items-center gap-4">

                <MessageCircle className="text-green-500" />

                <span>Medical AI Chat</span>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}