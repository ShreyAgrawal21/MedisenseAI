"use client";

import { Bell, Search, UserCircle } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export default function Topbar() {
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur-md">

      <div className="flex h-20 items-center justify-between px-8">

        {/* Search */}

        <div className="relative w-full max-w-lg">

          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search reports..."
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-12 pr-4 outline-none transition focus:border-blue-500 focus:bg-white"
          />

        </div>

        {/* Right */}

        <div className="ml-8 flex items-center gap-6">

          <button className="relative rounded-xl p-2 transition hover:bg-slate-100">

            <Bell size={22} />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>

          </button>

          <div className="flex items-center gap-3">

            <UserCircle
              size={42}
              className="text-blue-600"
            />

            <div>

              <h3 className="font-semibold text-slate-900">
                {user?.email ?? "User"}
              </h3>

              <p className="text-sm text-slate-500">
                MediSense AI User
              </p>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
}