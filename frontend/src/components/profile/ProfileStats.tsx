"use client";

import {
  FileText,
  HeartPulse,
  BrainCircuit,
  CalendarDays,
} from "lucide-react";

interface Props {
  reportsUploaded?: number;
  healthScore?: number;
  lastAnalysis?: string;
  memberSince?: string;
}

export default function ProfileStats({
  reportsUploaded = 0,
  healthScore = 0,
  lastAnalysis,
  memberSince,
}: Props) {
  const stats = [
    {
      title: "Reports Uploaded",
      value: reportsUploaded,
      icon: FileText,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Health Score",
      value: `${healthScore}/100`,
      icon: HeartPulse,
      color: "text-red-600",
      bg: "bg-red-50",
    },
    {
      title: "Last Analysis",
      value: lastAnalysis
        ? new Date(lastAnalysis).toLocaleDateString()
        : "--",
      icon: BrainCircuit,
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      title: "Member Since",
      value: memberSince
        ? new Date(memberSince).toLocaleDateString()
        : "--",
      icon: CalendarDays,
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
  ];

  return (
    <div className="rounded-3xl bg-white p-8 shadow">

      <h2 className="mb-6 text-2xl font-bold">
        Statistics
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

        {stats.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className={`rounded-2xl ${item.bg} p-6`}
            >

              <div className="mb-4 flex items-center justify-between">

                <Icon
                  className={item.color}
                  size={28}
                />

              </div>

              <p className="text-sm text-slate-500">
                {item.title}
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                {item.value}
              </h3>

            </div>

          );

        })}

      </div>

    </div>
  );
}