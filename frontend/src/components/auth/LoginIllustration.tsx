"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Brain,
  FileText,
  MessageCircle,
} from "lucide-react";

export default function LoginIllustration() {
  return (
    <motion.div
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 5,
      }}
      className="hidden lg:block"
    >
      <div className="w-105 rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl">

        <div className="flex items-center justify-between">

          <h2 className="text-2xl font-bold">
            AI Dashboard
          </h2>

          <Activity className="text-blue-600" />

        </div>

        <div className="mt-8 rounded-2xl bg-blue-50 p-6">

          <p className="text-sm text-slate-500">
            Health Score
          </p>

          <h1 className="mt-2 text-5xl font-bold text-blue-600">
            92%
          </h1>

        </div>

        <div className="mt-10 space-y-6">

          <div className="flex items-center gap-4">
            <Brain className="text-blue-600" />
            <span>AI Analysis</span>
          </div>

          <div className="flex items-center gap-4">
            <FileText className="text-green-600" />
            <span>Medical Reports</span>
          </div>

          <div className="flex items-center gap-4">
            <MessageCircle className="text-purple-600" />
            <span>AI Chat</span>
          </div>

        </div>

      </div>
    </motion.div>
  );
}