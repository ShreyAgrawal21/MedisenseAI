"use client";

import { Eye, FileText } from "lucide-react";

interface ReportRowProps {
  id: number;
  name: string;
  date: string;
  status: "Analyzed" | "Processing" | "Completed" | "Uploaded";
  onView?: () => void;
}

const statusColors = {
  Analyzed:
    "bg-green-100 text-green-700 border-green-200",

  Processing:
    "bg-yellow-100 text-yellow-700 border-yellow-200",

  Completed:
    "bg-blue-100 text-blue-700 border-blue-200",

  Uploaded:
    "bg-slate-100 text-slate-700 border-slate-200",
};

export default function ReportRow({
  id,
  name,
  date,
  status,
  onView,
}: ReportRowProps) {

  return (

    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div className="flex items-center gap-4">

          <div className="rounded-xl bg-blue-100 p-3">

            <FileText
              className="text-blue-600"
              size={24}
            />

          </div>

          <div>

            <h3 className="font-semibold text-slate-800 break-all">

              {name}

            </h3>

            <p className="mt-1 text-sm text-slate-500">

              Uploaded

              {" • "}

              {date}

            </p>

            <p className="mt-1 text-xs text-slate-400">

              Report ID #{id}

            </p>

          </div>

        </div>

        <div className="flex items-center gap-3">

          <span
            className={`rounded-full border px-4 py-2 text-xs font-semibold ${statusColors[status]}`}
          >
            {status}
          </span>

          <button

            onClick={onView}

            className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"

          >

            <Eye size={18} />

            View Analysis

          </button>

        </div>

      </div>

    </div>

  );

}