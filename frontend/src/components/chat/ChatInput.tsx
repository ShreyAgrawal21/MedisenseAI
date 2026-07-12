"use client";

import { useState } from "react";

interface Props {
  onSend: (message: string) => void;
  loading: boolean;
}

export default function ChatInput({
  onSend,
  loading,
}: Props) {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    const trimmed = message.trim();

    if (!trimmed || loading) return;

    onSend(trimmed);
    setMessage("");
  };

  return (
    <div className="mt-6 rounded-2xl border border-gray-200 bg-white shadow-md p-4">

      <textarea
        rows={3}
        value={message}
        disabled={loading}
        placeholder="Ask anything about your medical report..."
        className="w-full resize-none rounded-xl border border-gray-300 p-4 text-gray-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 disabled:bg-gray-100"
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
          }
        }}
      />

      <div className="mt-4 flex items-center justify-between">

        <p className="text-sm text-gray-500">
          Press <span className="font-semibold">Enter</span> to send •{" "}
          <span className="font-semibold">Shift + Enter</span> for a new line
        </p>

        <button
          type="button"
          onClick={sendMessage}
          disabled={loading || message.trim().length === 0}
          className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          {loading ? "Thinking..." : "Send"}
        </button>

      </div>

    </div>
  );
}