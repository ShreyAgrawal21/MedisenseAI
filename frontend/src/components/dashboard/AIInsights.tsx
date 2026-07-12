"use client";

import { Activity, AlertTriangle, CheckCircle2, HeartPulse, Utensils, Dumbbell, ClipboardCheck } from "lucide-react";

interface Props {
  summary?: {
    summary?: string;
    recommendations?: string[];
    normal_findings?: string[];
    abnormal_findings?: string[];
    health_score?: number;
    health_status?: string;
    diet?: string[];
    lifestyle?: string[];
    follow_up?: string;
  };

  onOpenAnalysis?: () => void;
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">{title}</h3>
      {children}
    </div>
  );
}

export default function AIInsights({
  summary,
  onOpenAnalysis,
}: Props) {
  if (!summary) {
    return (
      <div className="rounded-xl bg-white p-6 shadow">
        <h2 className="mb-3 text-xl font-bold">
          AI Insights
        </h2>

        <p className="text-gray-500">
          Upload a medical report to generate AI insights.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-white p-6 shadow">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-2xl font-bold">
          AI Insights
        </h2>

        {onOpenAnalysis && (
          <button
            onClick={onOpenAnalysis}
            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            View Full Analysis →
          </button>
        )}

      </div>

      <div className="grid gap-5">

        <Section title="📝 Summary">

          <p className="leading-7 text-gray-700 whitespace-pre-line break-words">
            {summary.summary ??
              "No summary available."}
          </p>

        </Section>

        <Section title="❤️ Health Status">

          <div className="flex items-center gap-3">

            <HeartPulse className="text-red-500" />

            <div>

              <p className="text-3xl font-bold">
                {summary.health_score ?? "--"}
              </p>

              <p className="text-gray-600">
                {summary.health_status ??
                  "Unavailable"}
              </p>

            </div>

          </div>

        </Section>

        <Section title="⚠️ Abnormal Findings">

          {summary.abnormal_findings?.length ? (

            <div className="flex flex-wrap gap-3">

              {summary.abnormal_findings.map(
                (item, index) => (

                  <div
                    key={index}
                    className="rounded-full bg-red-100 px-4 py-2 text-red-700"
                  >
                    <AlertTriangle
                      size={16}
                      className="mr-2 inline"
                    />
                    {item}
                  </div>

                )
              )}

            </div>

          ) : (

            <p className="text-gray-500">
              No abnormal findings.
            </p>

          )}

        </Section>

        <Section title="✅ Normal Findings">

          {summary.normal_findings?.length ? (

            <div className="flex flex-wrap gap-3">

              {summary.normal_findings.map(
                (item, index) => (

                  <div
                    key={index}
                    className="rounded-full bg-green-100 px-4 py-2 text-green-700"
                  >
                    <CheckCircle2
                      size={16}
                      className="mr-2 inline"
                    />
                    {item}
                  </div>

                )
              )}

            </div>

          ) : (

            <p className="text-gray-500">
              No normal findings.
            </p>

          )}

        </Section>

        <Section title="💊 Recommendations">

          {summary.recommendations?.length ? (

            <ul className="space-y-3">

              {summary.recommendations.map(
                (item, index) => (

                  <li
                    key={index}
                    className="flex items-start gap-3"
                  >

                    <ClipboardCheck
                      size={20}
                      className="mt-1 text-blue-600"
                    />

                    <span className="leading-7 break-words">
                      {item}
                    </span>

                  </li>

                )
              )}

            </ul>

          ) : (

            <p className="text-gray-500">
              No recommendations available.
            </p>

          )}

        </Section>

        <Section title="🥗 Diet">

          {summary.diet?.length ? (

            <ul className="space-y-2">

              {summary.diet.map(
                (item, index) => (

                  <li
                    key={index}
                    className="flex gap-2"
                  >

                    <Utensils
                      size={18}
                      className="mt-1 text-green-600"
                    />

                    {item}

                  </li>

                )
              )}

            </ul>

          ) : (

            <p className="text-gray-500">
              No diet advice.
            </p>

          )}

        </Section>

        <Section title="🏃 Lifestyle">

          {summary.lifestyle?.length ? (

            <ul className="space-y-2">

              {summary.lifestyle.map(
                (item, index) => (

                  <li
                    key={index}
                    className="flex gap-2"
                  >

                    <Dumbbell
                      size={18}
                      className="mt-1 text-purple-600"
                    />

                    {item}

                  </li>

                )
              )}

            </ul>

          ) : (

            <p className="text-gray-500">
              No lifestyle suggestions.
            </p>

          )}

        </Section>

        <Section title="📅 Follow Up">

          <div className="flex items-start gap-3">

            <Activity
              className="text-blue-600"
            />

            <p className="leading-7 break-words">
              {summary.follow_up ??
                "No follow-up required."}
            </p>

          </div>

        </Section>

      </div>

    </div>
  );
}