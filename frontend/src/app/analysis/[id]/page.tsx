"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

import {
  getReport,
  ReportResponse,
} from "@/services/report";

import PatientCard from "@/components/analysis/PatientCard";
import SummaryCard from "@/components/analysis/SummaryCard";
import RecommendationCard from "@/components/analysis/RecommendationCard";
import FindingsCard from "@/components/analysis/FindingsCard";
import DisclaimerCard from "@/components/analysis/DisclaimerCard";
import HealthScoreCard from "@/components/analysis/HealthScoreCard";
import StatsCard from "@/components/analysis/StatsCard";
import TestsTable from "@/components/analysis/TestsTable";
import FloatingChatButton from "@/components/chat/FloatingChatButton";


interface MedicalTest {
  name: string;
  value: string | number;
  unit?: string;
  reference_range?: string;
  status?: string;
}

interface AnalysisData {
  success?: boolean;
  patient_name?: string;
  report_type?: string;
  tests?: MedicalTest[];
}

interface SummaryData {
  summary?: string;
  recommendations?: string[];
  abnormal_findings?: string[];
  normal_findings?: string[];
  disclaimer?: string;
}

export default function AnalysisPage() {
  const params = useParams();
  const reportId = Number(params.id);

  const [report, setReport] =
    useState<ReportResponse | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReport() {
      try {
        const data = await getReport(reportId);
        setReport(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    if (!isNaN(reportId)) {
      fetchReport();
    }
  }, [reportId]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-2xl font-semibold">
          Loading AI Analysis...
        </h1>
      </div>
    );
  }

  if (!report) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-2xl font-semibold text-red-600">
          Report Not Found
        </h1>
      </div>
    );
  }

  //---------------------------------------
  // Parse JSON safely
  //---------------------------------------

  let analysis: AnalysisData = report.analysis_json ?? {};
  let summary: SummaryData = report.summary_json ?? {};

  try {
    if (typeof analysis === "string") {
      analysis = JSON.parse(analysis as string) as AnalysisData;
    }
  } catch {
    analysis = {} as AnalysisData;
  }

  try {
    if (typeof summary === "string") {
      summary = JSON.parse(summary as string) as SummaryData;
    }
  } catch {
    summary = {} as SummaryData;
  }

  //---------------------------------------
  // Safe Tests
  //---------------------------------------

  const tests: MedicalTest[] = Array.isArray(analysis.tests)
    ? analysis.tests
    : [];

  //---------------------------------------
  // Safe Recommendations
  //---------------------------------------

  const recommendations: string[] =
    Array.isArray(summary.recommendations)
      ? summary.recommendations
      : [];

  //---------------------------------------
  // Safe Findings
  //---------------------------------------

  const abnormalFindings: string[] =
    Array.isArray(summary.abnormal_findings)
      ? summary.abnormal_findings
      : [];

  const normalFindings: string[] =
    Array.isArray(summary.normal_findings)
      ? summary.normal_findings
      : [];

  //---------------------------------------
  // Statistics
  //---------------------------------------

  const totalTests = tests.length;

  const normalTests = tests.filter(
    (t) => t.status === "Normal"
  ).length;

  const abnormalTests = totalTests - normalTests;

  const healthScore =
    totalTests === 0
      ? 0
      : Math.round((normalTests / totalTests) * 100);

  return (
    <div className="min-h-screen bg-slate-100 py-10">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-10">
          <h1 className="text-5xl font-bold text-slate-800">
            🩺 AI Medical Report
          </h1>

          <p className="mt-3 text-lg text-slate-500">
            {report.original_filename}
          </p>

          {analysis.success === false && (
            <div className="mt-5 rounded-xl border border-yellow-400 bg-yellow-50 p-4">
              <h2 className="font-bold text-yellow-700">
                AI Analysis Unavailable
              </h2>

              <p className="text-sm text-yellow-700 mt-2">
                Gemini API quota is exhausted or temporarily unavailable.
                Your report has been uploaded successfully.
              </p>
            </div>
          )}
        </div>

        <div className="mb-8 grid gap-6 lg:grid-cols-2">

          <PatientCard
            patient={analysis.patient_name ?? "Unknown Patient"}
            reportType={analysis.report_type ?? "Medical Report"}
          />

          <HealthScoreCard score={healthScore} />

        </div>

        <div className="mb-8 grid gap-6 md:grid-cols-3">

          <StatsCard
            title="Tests Performed"
            value={totalTests}
            icon="🧪"
          />

          <StatsCard
            title="Normal"
            value={normalTests}
            icon="🟢"
            color="text-green-600"
          />

          <StatsCard
            title="Abnormal"
            value={abnormalTests}
            icon="🔴"
            color="text-red-600"
          />

        </div>

        <div className="mb-8">
          <SummaryCard
            summary={
              summary.summary ??
              "AI summary unavailable."
            }
          />
        </div>

        <div className="mb-8">
          <TestsTable tests={tests} />
        </div>

        <div className="mb-8 grid gap-6 lg:grid-cols-2">

          <FindingsCard
            title="Abnormal Findings"
            findings={abnormalFindings}
            color="red"
          />

          <FindingsCard
            title="Normal Findings"
            findings={normalFindings}
            color="green"
          />

        </div>

        <div className="mb-8">

          <RecommendationCard
            recommendations={recommendations}
          />

        </div>

        <DisclaimerCard
          disclaimer={
            summary.disclaimer ??
            "This AI interpretation is for educational purposes only."
          }
        />
        <FloatingChatButton reportId={report.id} />

        <div className="mt-10">
        </div>

      </div>

    </div>
  );
}