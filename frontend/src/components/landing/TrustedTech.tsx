"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Database,
  Server,
  MonitorSmartphone,
  Wind,
  Atom,
} from "lucide-react";

const tech = [
  {
    icon: Brain,
    title: "Gemini AI",
    color: "text-blue-600",
  },
  {
    icon: Atom,
    title: "React",
    color: "text-cyan-600",
  },
  {
    icon: MonitorSmartphone,
    title: "Next.js",
    color: "text-slate-800",
  },
  {
    icon: Server,
    title: "FastAPI",
    color: "text-green-600",
  },
  {
    icon: Database,
    title: "MySQL",
    color: "text-orange-500",
  },
  {
    icon: Wind,
    title: "TailwindCSS",
    color: "text-sky-500",
  },
];

export default function TrustedTech() {
  return (
    <section className="bg-white py-20">

      <div className="mx-auto max-w-7xl px-8">

        <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">

          Powered by Modern AI Technologies

        </h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">

          {tech.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:shadow-xl"
              >
                <Icon
                  className={`mx-auto mb-4 h-10 w-10 ${item.color}`}
                />

                <p className="font-semibold text-slate-700">
                  {item.title}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}