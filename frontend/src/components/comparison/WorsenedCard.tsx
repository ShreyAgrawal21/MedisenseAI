"use client";

import { TrendingDown } from "lucide-react";

interface Props {
  items: string[];
}

export default function WorsenedCard({ items }: Props) {
  return (
    <div className="rounded-xl border bg-white shadow-sm p-6">
      <div className="flex items-center gap-3 mb-5">
        <TrendingDown className="text-red-600" />

        <h2 className="text-xl font-semibold">
          Worsened
        </h2>
      </div>

      {items.length === 0 ? (
        <p className="text-gray-500">
          No worsening detected.
        </p>
      ) : (
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3"
            >
              <div className="h-2 w-2 rounded-full bg-red-600" />

              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}