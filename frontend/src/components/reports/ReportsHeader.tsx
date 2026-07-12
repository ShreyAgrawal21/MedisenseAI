"use client";

import Link from "next/link";
import { Upload, Search } from "lucide-react";

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

export default function ReportsHeader({
  search,
  setSearch,
}: Props) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">

      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          My Medical Reports
        </h1>

        <p className="text-gray-500 mt-1">
          View, analyze and chat with your uploaded reports.
        </p>
      </div>

      <div className="flex gap-3">

        <div className="relative">

          <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search reports..."
            className="pl-10 pr-4 py-2 rounded-lg border w-72 focus:ring-2 focus:ring-blue-500 outline-none"
          />

        </div>

        <Link
          href="/upload"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 rounded-lg flex items-center gap-2 transition"
        >
          <Upload className="w-5 h-5" />
          Upload
        </Link>

      </div>

    </div>
  );
}