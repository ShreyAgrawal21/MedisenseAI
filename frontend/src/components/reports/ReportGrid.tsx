"use client";

import { Report } from "@/types/report";
import ReportCard from "./ReportCard";

interface Props {
  reports: Report[];
  selected: number[];
  onToggle: (id: number) => void;
}

export default function ReportGrid({
  reports,
  selected,
  onToggle,
}: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {reports.map((report) => {
        const isSelected = selected.includes(report.id);

        const disableCheckbox =
          selected.length >= 2 && !isSelected;

        return (
          <ReportCard
            key={report.id}
            report={report}
            selected={isSelected}
            disabled={disableCheckbox}
            onToggle={onToggle}
          />
        );
      })}
    </div>
  );
}