"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "Internal Medicine",
    quote:
      "MediSense AI simplifies complex pathology reports and presents information in a way patients can actually understand.",
  },
  {
    name: "Rahul Sharma",
    role: "Fitness Enthusiast",
    quote:
      "Comparing my blood reports over time helped me track my health improvements effortlessly.",
  },
  {
    name: "Priya Verma",
    role: "Software Engineer",
    quote:
      "The AI chat answered every question I had regarding my diagnostic report within seconds.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Testimonials
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Loved by Users
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            See how MediSense AI helps users understand
            medical reports with confidence.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {testimonials.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="
              rounded-3xl
              border
              border-slate-200
              bg-white/80
              backdrop-blur-xl
              p-8
              shadow-lg
              transition-all
              hover:shadow-2xl
              "
            >

              <Quote className="mb-6 h-10 w-10 text-blue-500" />

              <div className="mb-6 flex gap-1">

                {[...Array(5)].map((_, i) => (

                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />

                ))}

              </div>

              <p className="leading-8 text-slate-600">
                &quot;{item.quote}&quot;
              </p>

              <div className="mt-8 flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-cyan-500 text-lg font-bold text-white">

                  {item.name.charAt(0)}

                </div>

                <div>

                  <h4 className="font-semibold text-slate-900">
                    {item.name}
                  </h4>

                  <p className="text-sm text-slate-500">
                    {item.role}
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}