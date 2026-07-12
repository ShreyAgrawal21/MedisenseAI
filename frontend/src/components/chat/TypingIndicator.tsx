"use client";

export default function TypingIndicator() {
  return (
    <div className="flex items-start gap-4 animate-fade-in">

      {/* AI Avatar */}
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xl text-white shadow-lg">
        🤖
      </div>

      {/* Bubble */}
      <div className="rounded-2xl rounded-bl-md border border-gray-200 bg-white px-5 py-4 shadow-md">

        <div className="mb-2 text-sm font-semibold text-gray-500">
          🩺 MediSense AI
        </div>

        <div className="flex items-center gap-2">

          <span
            className="h-2.5 w-2.5 rounded-full bg-blue-500 animate-bounce"
            style={{ animationDelay: "0ms" }}
          />

          <span
            className="h-2.5 w-2.5 rounded-full bg-blue-500 animate-bounce"
            style={{ animationDelay: "150ms" }}
          />

          <span
            className="h-2.5 w-2.5 rounded-full bg-blue-500 animate-bounce"
            style={{ animationDelay: "300ms" }}
          />

          <span className="ml-3 text-sm text-gray-500">
            Thinking...
          </span>

        </div>

      </div>

    </div>
  );
}