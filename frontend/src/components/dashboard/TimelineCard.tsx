"use client";

import Link from "next/link";

import { TimelineItem } from "@/types/timeline";

interface Props {
  item: TimelineItem;
}

export default function TimelineCard({
  item,
}: Props) {
  const date = new Date(
    item.uploaded_at
  ).toLocaleDateString();

  function getColor(score: number) {
    if (score >= 85)
      return "bg-green-100 text-green-700";

    if (score >= 70)
      return "bg-yellow-100 text-yellow-700";

    return "bg-red-100 text-red-700";
  }

  return (
    <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg">

      <div className="absolute left-7 top-0 h-full w-0.5 bg-slate-200"></div>

      <div className="relative flex gap-5">

        <div className="mt-2 h-5 w-5 rounded-full bg-blue-600 ring-4 ring-blue-100"></div>

        <div className="flex-1">

          <div className="flex items-center justify-between">

            <div>

              <h3 className="text-lg font-semibold">

                {item.report_name}

              </h3>

              <p className="text-sm text-slate-500">

                {date}

              </p>

            </div>

            <div
              className={`rounded-full px-4 py-2 text-sm font-semibold ${getColor(
                item.health_score
              )}`}
            >
              {item.health_score}%
            </div>

          </div>

          <p className="mt-4 text-slate-600">
            {item.summary}
          </p>

          <div className="mt-6 flex gap-3">

            <Link
              href={`/analysis/${item.id}`}
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              Analyze
            </Link>

            <Link
              href={`/chat/${item.id}`}
              className="rounded-lg bg-cyan-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-cyan-700"
            >
              Chat
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}