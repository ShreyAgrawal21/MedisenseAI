"use client";

import { UploadCloud } from "lucide-react";

export default function UploadHeader() {
  return (
    <div className="mb-8 rounded-3xl bg-linear-to-r from-blue-600 to-cyan-500 p-8 text-white shadow-lg">

      <div className="flex items-center gap-4">

        <UploadCloud size={42} />

        <div>

          <h1 className="text-3xl font-bold">
            Upload Medical Report
          </h1>

          <p className="mt-2 text-blue-100">
            Upload blood reports, pathology reports, X-rays,
            MRI scans and prescriptions for AI analysis.
          </p>

        </div>

      </div>

    </div>
  );
}