"use client";

export default function ComparisonSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">

      {[1, 2, 3, 4, 5].map((item) => (

        <div
          key={item}
          className="rounded-xl border bg-white p-6"
        >
          <div className="h-6 w-48 rounded bg-gray-200 mb-5" />

          <div className="space-y-3">

            <div className="h-4 rounded bg-gray-200" />

            <div className="h-4 rounded bg-gray-200 w-5/6" />

            <div className="h-4 rounded bg-gray-200 w-2/3" />

          </div>

        </div>

      ))}

    </div>
  );
}