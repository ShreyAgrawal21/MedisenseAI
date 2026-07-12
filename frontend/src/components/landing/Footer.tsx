"use client";

import Link from "next/link";
import Logo from "@/components/shared/Logo";

import {
  Mail,
  Heart,
  ArrowUpRight,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-8 py-20">
        <div className="grid gap-14 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Logo />

            <p className="mt-6 text-sm leading-7 text-slate-600">
              AI-powered healthcare assistant that helps users understand,
              compare and summarize medical reports instantly.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="https://github.com/"
                target="_blank"
                className="rounded-xl border border-slate-200 p-3 transition hover:border-blue-500 hover:bg-blue-50"
              >
                <FaGithub size={20} />
              </Link>

              <Link
                href="https://linkedin.com/ShreyAgrawal21"
                target="_blank"
                className="rounded-xl border border-slate-200 p-3 transition hover:border-blue-500 hover:bg-blue-50"
              >
                <FaLinkedin size={20} />
              </Link>

              <Link
                href="mailto:support@medisense.ai"
                className="rounded-xl border border-slate-200 p-3 transition hover:border-blue-500 hover:bg-blue-50"
              >
                <Mail size={20} />
              </Link>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-slate-900">
              Product
            </h3>

            <div className="space-y-4 text-slate-600">
              <Link href="#" className="block hover:text-blue-600">
                Features
              </Link>

              <Link href="#" className="block hover:text-blue-600">
                AI Analysis
              </Link>

              <Link href="#" className="block hover:text-blue-600">
                Report Comparison
              </Link>

              <Link href="#" className="block hover:text-blue-600">
                Medical AI Chat
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-slate-900">
              Resources
            </h3>

            <div className="space-y-4 text-slate-600">
              <Link href="#" className="block hover:text-blue-600">
                Documentation
              </Link>

              <Link href="#" className="block hover:text-blue-600">
                FAQs
              </Link>

              <Link href="#" className="block hover:text-blue-600">
                Privacy Policy
              </Link>

              <Link href="#" className="block hover:text-blue-600">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-slate-900">
              Start Today
            </h3>

            <p className="mb-8 text-sm leading-7 text-slate-600">
              Upload your medical reports and receive AI-powered insights within
              seconds.
            </p>

            <button className="group flex items-center gap-2 rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105">
              Get Started

              <ArrowUpRight
                size={18}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-200 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-slate-500">
              © 2026 MediSense AI. All rights reserved.
            </p>

            <p className="flex items-center gap-2 text-sm text-slate-500">
              Built with <Heart size={16} className="fill-red-500 text-red-500" /> using Next.js,
              FastAPI & Gemini AI
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}