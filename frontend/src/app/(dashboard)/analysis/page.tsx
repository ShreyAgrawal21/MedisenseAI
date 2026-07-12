"use client";

import { useEffect, useState } from "react";

import { getOverview } from "@/services/analysis";
import { AnalysisOverview } from "@/types/analysis";

export default function AnalysisPage() {
  const [overview, setOverview] =
    useState<AnalysisOverview | null>(null);

  useEffect(() => {
    async function load() {
      const data = await getOverview();
      setOverview(data);
    }

    load();
  }, []);

  if (!overview) {
    return (
      <div className="p-10 text-xl">
        Loading Analysis...
      </div>
    );
  }

  return (
    <div className="space-y-8 p-8">

      <h1 className="text-4xl font-bold">
        Overall AI Analysis
      </h1>

      <div className="grid grid-cols-5 gap-5">

        <Card
          title="Health Score"
          value={`${overview.health_score}%`}
        />

        <Card
          title="Reports"
          value={overview.reports}
        />

        <Card
          title="Critical"
          value={overview.critical}
        />

        <Card
          title="Warnings"
          value={overview.warnings}
        />

        <Card
          title="Normal"
          value={overview.normal}
        />

      </div>

      <div className="grid grid-cols-2 gap-8">

        <div className="rounded-2xl bg-white p-6 shadow">

          <h2 className="mb-5 text-2xl font-bold">
            Findings
          </h2>

          <ul className="space-y-3">

            {overview.findings.map((item) => (
              <li key={item}>
                • {item}
              </li>
            ))}

          </ul>

        </div>

        <div className="rounded-2xl bg-white p-6 shadow">

          <h2 className="mb-5 text-2xl font-bold">
            Recommendations
          </h2>

          <ul className="space-y-3">

            {overview.recommendations.map((item) => (
              <li key={item}>
                ✓ {item}
              </li>
            ))}

          </ul>

        </div>

      </div>

    </div>
  );
}

function Card({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow">

      <h2 className="text-gray-500">
        {title}
      </h2>

      <div className="mt-3 text-4xl font-bold">
        {value}
      </div>

    </div>
  );
}