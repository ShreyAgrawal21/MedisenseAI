"use client";

import {
  Upload,
  BrainCircuit,
  FileText,
} from "lucide-react";

import ActionCard from "./ActionCard";

export default function QuickActions() {
  return (
    <section className="mt-12">

      <div className="mb-6">

        <h2 className="text-3xl font-bold text-slate-900">
          Quick Actions
        </h2>

        <p className="mt-2 text-slate-500">
          Quickly access the most common features.
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-3">

        <ActionCard
          title="Upload Report"
          description="Upload blood reports, prescriptions and pathology reports."
          href="/upload"
          icon={Upload}
          color="bg-blue-600"
        />

        <ActionCard
          title="Reports"
          description="View all uploaded reports and their history."
          href="/reports"
          icon={FileText}
          color="bg-green-600"
        />

        <ActionCard
          title="AI Analysis"
          description="View complete AI generated report interpretation."
          href="/analysis"
          icon={BrainCircuit}
          color="bg-cyan-600"
        />

      </div>

    </section>
  );
}