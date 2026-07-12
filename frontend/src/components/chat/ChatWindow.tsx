"use client";

import { useEffect, useRef } from "react";

import { Message } from "@/types/chat";

import ChatMessage from "./ChatMessage";
import TypingIndicator from "./TypingIndicator";
import EmptyState from "./EmptyState";

interface Props {
  messages: Message[];
  loading: boolean;
}

export default function ChatWindow({
  messages,
  loading,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto-scroll whenever messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, loading]);

  // Empty State
  if (messages.length === 0) {
    return (
      <div className="h-[550px] flex items-center justify-center">
        <EmptyState />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="
        h-[550px]
        overflow-y-auto
        rounded-2xl
        border
        bg-gray-50
        p-6
        space-y-5
        scroll-smooth
      "
    >
      {messages.map((message, index) => (
        <ChatMessage
          key={`${message.role}-${index}`}
          role={message.role}
          message={message.content}
        />
      ))}

      {loading && <TypingIndicator />}

      <div ref={bottomRef} />
    </div>
  );
}