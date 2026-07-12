"use client";

import { useMemo, useState } from "react";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { HealthTrends } from "@/types/dashboard";

interface Props {
  trends: HealthTrends;
}

const options = [
  {
    key: "hemoglobin",
    label: "Hemoglobin",
  },
  {
    key: "wbc",
    label: "WBC",
  },
  {
    key: "rbc",
    label: "RBC",
  },
  {
    key: "platelets",
    label: "Platelets",
  },
  {
    key: "health_score",
    label: "Health Score",
  },
];

export default function HealthTrend({
  trends,
}: Props) {

  const [selected, setSelected] =
    useState("hemoglobin");

  const data = useMemo(() => {

    return trends[
      selected as keyof HealthTrends
    ];

  }, [selected, trends]);

  return (

    <div className="bg-white rounded-xl shadow p-6">

      <div className="flex items-center justify-between mb-5">

        <h2 className="text-xl font-semibold">

          📈 Health Trends

        </h2>

        <select

          value={selected}

          onChange={(e) =>
            setSelected(e.target.value)
          }

          className="border rounded-lg px-3 py-2"

        >

          {options.map((item) => (

            <option
              key={item.key}
              value={item.key}
            >

              {item.label}

            </option>

          ))}

        </select>

      </div>

      <ResponsiveContainer
        width="100%"
        height={320}
      >

        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="date" />

          <YAxis />

          <Tooltip />

          <Line

            type="monotone"

            dataKey="value"

            strokeWidth={3}

            dot

          />

        </LineChart>

      </ResponsiveContainer>

    </div>

  );

}