"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface ActionCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  color: string;
}

export default function ActionCard({
  title,
  description,
  href,
  icon: Icon,
  color,
}: ActionCardProps) {
  return (
    <Link
      href={href}
      className="group rounded-3xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div
        className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${color}`}
      >
        <Icon className="h-7 w-7 text-white" />
      </div>

      <h3 className="text-xl font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>
    </Link>
  );
}