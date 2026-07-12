"use client";

import { useEffect, useMemo, useState } from "react";

import ReportsHeader from "@/components/reports/ReportsHeader";
import ReportsSkeleton from "@/components/reports/ReportsSkeleton";
import EmptyReports from "@/components/reports/EmptyReports";
import ReportGrid from "@/components/reports/ReportGrid";

import { Report } from "@/types/report";
import { getReports } from "@/services/report";

import Link from "next/link";
import { Scale } from "lucide-react";

export default function ReportsPage() {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [selected, setSelected] = useState<number[]>([]);


  async function loadReports() {
    try {
      const data = await getReports();
      setReports(data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadReports();
  }, []);

  function toggle(id: number) {
  setSelected((prev) => {
    if (prev.includes(id)) {
      return prev.filter((x) => x !== id);
    }

    if (prev.length >= 2) {
      return prev;
    }

    return [...prev, id];
  });
}

  const filtered = useMemo(() => {
    return reports.filter((report) =>
      report.original_filename
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [reports, search]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <ReportsHeader
        search={search}
        setSearch={setSearch}
      />

      {loading ? (
        <ReportsSkeleton />
      ) : filtered.length === 0 ? (
        <EmptyReports />
      ) : (
        <ReportGrid
          reports={filtered}
          selected={selected}
          onToggle={toggle}
        />
      )}
      {selected.length === 2 && (
  <Link
    href={`/compare?left=${selected[0]}&right=${selected[1]}`}
    className="
      fixed
      bottom-8
      right-8
      z-50
      flex
      items-center
      gap-3
      rounded-full
      bg-blue-600
      px-6
      py-4
      text-white
      shadow-2xl
      transition
      hover:bg-blue-700
    "
  >
    <Scale className="w-5 h-5" />

    Compare Selected
  </Link>
)}

    </div>
  );
}