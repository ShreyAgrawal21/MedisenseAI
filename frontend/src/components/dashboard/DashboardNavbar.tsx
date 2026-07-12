"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  FileText,
  MessageCircle,
  Bell,
  UserCircle,
} from "lucide-react";

export default function DashboardNavbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-slate-200">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-8">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 text-white text-xl">
            🩺
          </div>

          <div>
            <h1 className="font-bold text-slate-900">
              MediSense AI
            </h1>

            <p className="text-xs text-slate-500">
              AI Healthcare Intelligence
            </p>
          </div>
        </div>

        {/* Navigation */}

        <nav className="hidden md:flex items-center gap-8">

          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-blue-600 font-medium"
          >
            <LayoutDashboard size={18} />
            Dashboard
          </Link>

          <Link
            href="/reports"
            className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition"
          >
            <FileText size={18} />
            Reports
          </Link>

          <Link
            href="/chat"
            className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition"
          >
            <MessageCircle size={18} />
            AI Chat
          </Link>

        </nav>

        {/* Right Side */}

        <div className="flex items-center gap-5">

          <button className="relative">

            <Bell
              className="text-slate-600 hover:text-blue-600"
              size={22}
            />

            <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500"></span>

          </button>

          <div className="flex items-center gap-2">

            <UserCircle
              size={34}
              className="text-blue-600"
            />

            <div className="hidden sm:block">

              <p className="text-sm font-semibold">
                Shrey
              </p>

              <p className="text-xs text-slate-500">
                AI Student
              </p>

            </div>

          </div>

        </div>

      </div>
    </header>
  );
}