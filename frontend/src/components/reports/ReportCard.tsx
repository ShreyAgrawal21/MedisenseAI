"use client";

import Link from "next/link";

import {
  FileText,
  MessageCircle,
  Calendar,
  Activity,
} from "lucide-react";

import { Report } from "@/types/report";

interface Props {
  report: Report;
  selected: boolean;
  disabled: boolean;
  onToggle: (id: number) => void;
}

export default function ReportCard({
  report,
  selected,
  disabled,
  onToggle,
}: Props) {
  return (
    <div className="rounded-xl border bg-white shadow-sm hover:shadow-md transition p-5 space-y-4">

      <div className="flex justify-between">

        <div>

          <div className="flex items-center gap-2">

            <FileText className="w-5 h-5 text-blue-600" />

            <h3 className="font-semibold break-all">
              {report.original_filename}
            </h3>

          </div>

          <p className="text-gray-500 text-sm mt-1">
            Report #{report.id}
          </p>

        </div>

        <input
          type="checkbox"
          checked={selected}
          disabled={disabled}
          onChange={() => onToggle(report.id)}
          className="w-5 h-5"
        />

      </div>

      <div className="space-y-2 text-sm">

        <div className="flex items-center gap-2">

          <Activity className="w-4 h-4 text-green-600" />

          Status:
          <span className="font-medium capitalize">
            {report.status}
          </span>

        </div>

        <div className="flex items-center gap-2">

          <Calendar className="w-4 h-4 text-orange-500" />

          {new Date(report.uploaded_at).toLocaleDateString()}

        </div>

      </div>

      <div className="flex gap-2 pt-2">

        <Link
          href={`/analysis/${report.id}`}
          className="flex-1 rounded-lg bg-blue-600 text-white py-2 text-center hover:bg-blue-700"
        >
          View Analysis
        </Link>

        <Link
          href={`/chat/${report.id}`}
          className="rounded-lg border border-blue-600 px-4 flex items-center justify-center hover:bg-blue-50"
        >
          <MessageCircle className="w-5 h-5 text-blue-600" />
        </Link>

      </div>

    </div>
  );
}