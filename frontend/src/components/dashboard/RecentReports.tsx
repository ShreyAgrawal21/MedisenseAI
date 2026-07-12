"use client";

import ReportRow from "./ReportRow";
import { DashboardReport } from "@/types/dashboard";

interface Props {
  reports: DashboardReport[];
  onOpenReport?: (reportId: number) => void;
}

export default function RecentReports({
  reports,
  onOpenReport,
}: Props) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow">

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold">
            Recent Reports
          </h2>

          <p className="text-sm text-slate-500">
            Your latest uploaded medical reports
          </p>

        </div>

      </div>

      {reports.length === 0 ? (

        <div className="rounded-xl border border-dashed border-slate-300 py-12 text-center">

          <p className="text-slate-500">
            No reports uploaded yet.
          </p>

        </div>

      ) : (

        <div className="space-y-4">

          {reports.map((report) => (

            <ReportRow

              key={report.id}

              id={report.id}

              name={report.original_filename}

              date={new Date(
                report.uploaded_at
              ).toLocaleString()}

              status={
                report.status as
                  | "Analyzed"
                  | "Processing"
                  | "Completed"
                  | "Uploaded"
              }

              onView={() =>
                onOpenReport?.(report.id)
              }

            />

          ))}

        </div>

      )}

    </div>
  );
}