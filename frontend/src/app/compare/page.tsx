"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { compareReports } from "@/services/comparison";
import { ComparisonResult } from "@/types/comparison";

import ComparisonSkeleton from "@/components/comparison/ComparisonSkeleton";
import SummaryCard from "@/components/comparison/SummaryCard";
import ImprovedCard from "@/components/comparison/ImprovedCard";
import WorsenedCard from "@/components/comparison/WorsenedCard";
import StableCard from "@/components/comparison/StableCard";
import RecommendationCard from "@/components/comparison/RecommendationCard";

export default function ComparePage() {
  const params = useSearchParams();

  const left = Number(params.get("left"));
  const right = Number(params.get("right"));

  const [loading, setLoading] = useState(true);

  const [comparison, setComparison] =
    useState<ComparisonResult | null>(null);

  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const result = await compareReports(
          left,
          right
        );

        setComparison(result.comparison);
      } catch {
        setError(
          "Unable to compare reports."
        );
      } finally {
        setLoading(false);
      }
    }

    if (left && right) {
      load();
    }
  }, [left, right]);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto py-10 px-6">
        <ComparisonSkeleton />
      </div>
    );
  }

  if (error || !comparison) {
    return (
      <div className="max-w-4xl mx-auto py-10 text-center">
        <h1 className="text-2xl font-bold text-red-600">
          {error || "Comparison not found"}
        </h1>

        <Link
          href="/reports"
          className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white"
        >
          Back to Reports
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-10 px-6 space-y-6">

      <Link
        href="/reports"
        className="inline-flex items-center gap-2 text-blue-600 hover:underline"
      >
        <ArrowLeft size={18} />

        Back to Reports
      </Link>

      <h1 className="text-4xl font-bold">
        AI Report Comparison
      </h1>

      <SummaryCard
        summary={comparison.summary}
      />

      <div className="grid lg:grid-cols-2 gap-6">

        <ImprovedCard
          items={comparison.improved}
        />

        <WorsenedCard
          items={comparison.worsened}
        />

      </div>

      <StableCard
        items={comparison.stable}
      />

      <RecommendationCard
        recommendation={
          comparison.recommendation
        }
      />

    </div>
  );
}