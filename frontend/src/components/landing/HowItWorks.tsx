"use client";

import { motion } from "framer-motion";
import {
  Upload,
  ScanText,
  Brain,
  MessageCircle,
  Activity,
} from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Report",
    description: "Upload your blood test, pathology, or diagnostic report securely.",
  },
  {
    icon: ScanText,
    title: "Extract Information",
    description: "AI extracts medical values and report details automatically.",
  },
  {
    icon: Brain,
    title: "AI Analysis",
    description: "Gemini AI explains findings in simple, easy-to-understand language.",
  },
  {
    icon: MessageCircle,
    title: "Ask Questions",
    description: "Chat with your AI assistant about any result or medical term.",
  },
  {
    icon: Activity,
    title: "Track Health",
    description: "Monitor health trends and compare reports over time.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-8">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Workflow
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            How MediSense AI Works
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            A simple five-step process powered by AI.
          </p>

        </div>

        <div className="mt-20">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative flex gap-8 pb-12"
              >
                <div className="relative flex flex-col items-center">

                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-cyan-500 shadow-lg">
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  {index !== steps.length - 1 && (
                    <div className="mt-2 h-20 w-1 rounded-full bg-blue-200" />
                  )}

                </div>

                <div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-slate-600 leading-7">
                    {step.description}
                  </p>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}