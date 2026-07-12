"use client";

export default function ReportsSkeleton() {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

      {[1, 2, 3, 4, 5, 6].map((item) => (

        <div
          key={item}
          className="rounded-xl border bg-white p-5 animate-pulse"
        >
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-5" />

          <div className="space-y-3">

            <div className="h-4 bg-gray-200 rounded" />

            <div className="h-4 bg-gray-200 rounded w-5/6" />

            <div className="h-4 bg-gray-200 rounded w-2/3" />

          </div>

          <div className="flex gap-3 mt-8">

            <div className="flex-1 h-10 rounded bg-gray-200" />

            <div className="w-12 h-10 rounded bg-gray-200" />

          </div>

        </div>

      ))}

    </div>
  );
}