"use client";

const suggestions = [
  "🩸 Explain my report",
  "📊 Which values are abnormal?",
  "💊 Should I consult a doctor?",
  "🥗 Give diet recommendations",
  "❤️ Summarize my report",
];

export default function EmptyState() {
  return (
    <div className="flex h-full flex-col items-center justify-center px-8 text-center">

      {/* AI Icon */}
      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-5xl text-white shadow-xl">
        🩺
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800">
        AI Medical Assistant
      </h1>

      {/* Subtitle */}
      <p className="mt-3 max-w-xl text-gray-500 leading-7">
        Ask anything about your uploaded medical report.
        <br />
        I&apos;ll explain medical terms, abnormal values, possible causes,
        lifestyle recommendations, and much more.
      </p>

      {/* Suggested Questions */}
      <div className="mt-10 w-full max-w-3xl">

        <h2 className="mb-5 text-lg font-semibold text-gray-700">
          💡 Suggested Questions
        </h2>

        <div className="grid gap-4 md:grid-cols-2">

          {suggestions.map((question) => (
            <div
              key={question}
              className="
                rounded-xl
                border
                border-gray-200
                bg-white
                p-4
                text-left
                shadow-sm
                transition-all
                duration-200
                hover:-translate-y-1
                hover:border-blue-300
                hover:shadow-md
              "
            >
              {question}
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}