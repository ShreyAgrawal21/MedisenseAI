"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import {
  LayoutDashboard,
  Upload,
  FileText,
  BrainCircuit,
  User,
  Settings,
  LogOut,
  HeartPulse,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Upload Report",
    href: "/upload",
    icon: Upload,
  },
  {
    title: "Reports",
    href: "/reports",
    icon: FileText,
  },
  {
    title: "AI Analysis",
    href: "/analysis",
    icon: BrainCircuit,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: User,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { logout } = useAuth();

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-200 bg-white">

      {/* Logo */}

      <div className="flex items-center gap-3 border-b border-slate-200 px-6 py-6">

        <div className="rounded-2xl bg-linear-to-r from-blue-600 to-cyan-500 p-3">

          <HeartPulse
            className="text-white"
            size={24}
          />

        </div>

        <div>

          <h1 className="text-xl font-bold text-slate-900">
            MediSense AI
          </h1>

          <p className="text-xs text-slate-500">
            AI Healthcare Assistant
          </p>

        </div>

      </div>

      {/* Navigation */}

      <nav className="flex-1 space-y-2 p-4">

        {menuItems.map((item) => {

          const Icon = item.icon;

          const active =
            pathname.startsWith(item.href);

          return (
            <Link
              key={item.title}
              href={item.href}
              className={`flex items-center gap-3 rounded-2xl px-4 py-3 transition-all

                ${
                  active
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-slate-600 hover:bg-slate-100"
                }
              `}
            >

              <Icon size={20} />

              <span className="font-medium">

                {item.title}

              </span>

            </Link>
          );
        })}
      </nav>

      {/* Logout */}

      <div className="border-t border-slate-200 p-4">

        <button
            onClick={() => {
               logout();
               router.push("/login");
            }}
            className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-red-600 transition hover:bg-red-50"
        >
            <LogOut size={20} />

         Logout
        </button>

      </div>

    </aside>
  );
}