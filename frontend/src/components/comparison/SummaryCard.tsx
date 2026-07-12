"use client";

import { FileText } from "lucide-react";

interface Props {
  summary: string;
}

export default function SummaryCard({
  summary,
}: Props) {
  return (
    <div className="rounded-xl border bg-white shadow-sm p-6">

      <div className="flex items-center gap-3 mb-4">

        <FileText className="text-blue-600" />

        <h2 className="text-xl font-semibold">
          Summary
        </h2>

      </div>

      <p className="leading-8 text-gray-700">
        {summary}
      </p>

    </div>
  );
}