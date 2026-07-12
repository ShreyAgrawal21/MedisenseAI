"use client";

import { MinusCircle } from "lucide-react";

interface Props {
  items: string[];
}

export default function StableCard({ items }: Props) {
  return (
    <div className="rounded-xl border bg-white shadow-sm p-6">
      <div className="flex items-center gap-3 mb-5">
        <MinusCircle className="text-yellow-500" />

        <h2 className="text-xl font-semibold">
          Stable
        </h2>
      </div>

      {items.length === 0 ? (
        <p className="text-gray-500">
          Nothing remained stable.
        </p>
      ) : (
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3"
            >
              <div className="h-2 w-2 rounded-full bg-yellow-500" />

              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}