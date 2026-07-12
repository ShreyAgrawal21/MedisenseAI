"use client";

import { TrendingUp } from "lucide-react";

interface Props {
  items: string[];
}

export default function ImprovedCard({
  items,
}: Props) {
  return (
    <div className="rounded-xl border bg-white shadow-sm p-6">

      <div className="flex items-center gap-3 mb-5">

        <TrendingUp className="text-green-600" />

        <h2 className="text-xl font-semibold">
          Improved
        </h2>

      </div>

      {items.length === 0 ? (

        <p className="text-gray-500">
          No improvements detected.
        </p>

      ) : (

        <ul className="space-y-3">

          {items.map((item, index) => (

            <li
              key={index}
              className="flex items-center gap-3"
            >

              <div className="h-2 w-2 rounded-full bg-green-600" />

              {item}

            </li>

          ))}

        </ul>

      )}

    </div>
  );
}