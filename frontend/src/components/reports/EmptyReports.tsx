"use client";

import Link from "next/link";

import { FileSearch, Upload } from "lucide-react";

export default function EmptyReports() {
  return (
    <div className="flex flex-col items-center justify-center py-24">

      <FileSearch className="w-20 h-20 text-gray-400" />

      <h2 className="text-2xl font-bold mt-6">
        No Reports Found
      </h2>

      <p className="text-gray-500 mt-2">
        Upload your first medical report.
      </p>

      <Link
        href="/upload"
        className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2"
      >
        <Upload className="w-5 h-5" />
        Upload Report
      </Link>

    </div>
  );
}