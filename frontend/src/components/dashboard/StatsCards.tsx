"use client";

import {
  FileText,
  HeartPulse,
  AlertTriangle,
  Calendar,
} from "lucide-react";

interface Props {

  totalReports: number;

  abnormalReports: number;

  healthScore?: number;

  healthStatus?: string;

  lastUpload?: string;

}

export default function StatsCards({

  totalReports,

  abnormalReports,

  healthScore,

  healthStatus,

  lastUpload,

}: Props) {

  const cards = [

    {
      title: "Reports",

      value: totalReports,

      icon: FileText,
    },

    {
      title: "Health Score",

      value:
        healthScore !== undefined
          ? `${healthScore}/100`
          : "--",

      subtitle:
        healthStatus ?? "Unavailable",

      icon: HeartPulse,
    },

    {
      title: "Abnormal Tests",

      value: abnormalReports,

      icon: AlertTriangle,
    },

    {
      title: "Last Upload",

      value: lastUpload
        ? new Date(
            lastUpload
          ).toLocaleDateString()
        : "--",

      icon: Calendar,
    },
  ];

  return (

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {cards.map((card) => {

        const Icon = card.icon;

        return (

          <div

            key={card.title}

            className="rounded-xl bg-white p-6 shadow"

          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-gray-500">

                  {card.title}

                </p>

                <p className="mt-2 text-3xl font-bold">

                  {card.value}

                </p>

                {"subtitle" in card &&

                card.subtitle ? (

                  <p className="mt-1 text-sm text-green-600">

                    {card.subtitle}

                  </p>

                ) : null}

              </div>

              <Icon

                size={32}

                className="text-blue-600"

              />

            </div>

          </div>

        );

      })}

    </div>

  );

}