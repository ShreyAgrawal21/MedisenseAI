import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import CopyButton from "./CopyButton";

interface Props {
  role: "user" | "assistant";
  message: string;
}

export default function ChatMessage({
  role,
  message,
}: Props) {
  const isUser = role === "user";

  return (
    <div
      className={`flex items-start gap-4 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {/* AI Avatar */}
      {!isUser && (
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xl text-white shadow-lg">
          🤖
        </div>
      )}

      {/* Message Bubble */}
      <div
        className={`max-w-[82%] rounded-2xl px-5 py-4 shadow-md transition-all duration-200 hover:shadow-lg ${
          isUser
            ? "rounded-br-md bg-blue-600 text-white"
            : "rounded-bl-md border border-gray-200 bg-white text-gray-800"
        }`}
      >
        {/* Sender */}
        <div
          className={`mb-3 text-sm font-semibold ${
            isUser ? "text-blue-100" : "text-gray-500"
          }`}
        >
          {isUser ? "👤 You" : "🩺 MediSense AI"}
        </div>

        {/* Message */}
        <div
          className={`break-words leading-7 ${
            isUser
              ? "whitespace-pre-wrap text-white"
              : "prose prose-sm max-w-none prose-headings:text-gray-800 prose-p:text-gray-700 prose-li:text-gray-700"
          }`}
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {message}
          </ReactMarkdown>
        </div>

        {/* Copy Button */}
        {!isUser && (
          <div className="mt-5 flex justify-end">
            <CopyButton text={message} />
          </div>
        )}
      </div>

      {/* User Avatar */}
      {isUser && (
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-600 text-xl text-white shadow-lg">
          👤
        </div>
      )}
    </div>
  );
}