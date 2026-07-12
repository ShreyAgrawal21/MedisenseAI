"use client";

import Link from "next/link";
import { Bot } from "lucide-react";

interface Props {
  reportId: number;
}

export default function FloatingChatButton({
  reportId,
}: Props) {
  return (
    <Link
      href={`/chat/${reportId}`}
      className="
        fixed
        bottom-6
        right-6
        z-50
        group
      "
    >
      <div
        className="
          flex
          items-center
          gap-3
          rounded-full
          bg-blue-600
          px-5
          py-3
          text-white
          shadow-xl
          transition-all
          duration-300
          hover:bg-blue-700
          hover:scale-105
        "
      >
        <Bot className="h-6 w-6" />

        <span
          className="
            max-w-0
            overflow-hidden
            whitespace-nowrap
            transition-all
            duration-300
            group-hover:max-w-xs
          "
        >
          Ask AI
        </span>
      </div>
    </Link>
  );
}