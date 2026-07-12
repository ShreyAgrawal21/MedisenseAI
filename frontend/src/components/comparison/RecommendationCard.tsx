"use client";

import { HeartPulse } from "lucide-react";

interface Props {
  recommendation: string;
}

export default function RecommendationCard({
  recommendation,
}: Props) {
  return (
    <div className="rounded-xl border bg-white shadow-sm p-6">
      <div className="flex items-center gap-3 mb-5">
        <HeartPulse className="text-pink-600" />

        <h2 className="text-xl font-semibold">
          AI Recommendation
        </h2>
      </div>

      <p className="leading-8 text-gray-700">
        {recommendation}
      </p>
    </div>
  );
}