"use client";

import { motion } from "framer-motion";
import {
  Brain,
  MessageCircle,
  FileSearch,
  Activity,
} from "lucide-react";

const features = [
  {
    title: "AI Report Analysis",
    description:
      "Understand complex medical reports in seconds with AI-powered explanations.",
    icon: Brain,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Medical AI Chat",
    description:
      "Ask questions about your reports and receive intelligent responses.",
    icon: MessageCircle,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Compare Reports",
    description:
      "Track health changes by comparing reports from different dates.",
    icon: FileSearch,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Health Trends",
    description:
      "Visualize improvements with charts and long-term health insights.",
    icon: Activity,
    color: "from-purple-500 to-pink-500",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Features
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Everything You Need
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Powerful AI tools designed to simplify understanding
            and managing your health reports.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  group
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-8
                  shadow-sm
                  hover:shadow-2xl
                  transition-all
                "
              >
                <div
                  className={`
                    mb-6
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-linear-to-br
                    ${feature.color}
                  `}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}