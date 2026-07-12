"use client";

import { useMemo, useState } from "react";
import { useParams } from "next/navigation";

import ChatInput from "@/components/chat/ChatInput";
import ChatWindow from "@/components/chat/ChatWindow";
import SuggestedQuestions from "@/components/chat/SuggestedQuestions";

import { Message } from "@/types/chat";
import { askQuestion } from "@/services/chat";

export default function ChatPage() {
  const params = useParams();

  const reportId = useMemo(() => {
    const id = Number(params.id);
    return Number.isNaN(id) ? null : id;
  }, [params]);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "👋 Hello! I'm your AI Medical Assistant.\n\nAsk me anything about your uploaded medical report.",
    },
  ]);

  const [loading, setLoading] = useState(false);

  async function handleSend(question: string) {
    if (!reportId) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "❌ Invalid Report ID.",
        },
      ]);
      return;
    }

    const userMessage: Message = {
      role: "user",
      content: question,
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {
      const response = await askQuestion(reportId, question);

      const aiMessage: Message = {
        role: "assistant",
        content:
          response.answer ??
          "Sorry, I couldn't generate an answer for this report.",
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "⚠️ Unable to contact the AI service. Please try again later.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  if (!reportId) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-xl p-10">
          <h1 className="text-2xl font-bold text-red-600">
            Invalid Report
          </h1>

          <p className="mt-3 text-gray-600">
            Please open the chat from the Analysis page.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="max-w-5xl mx-auto py-10 px-6">

        <div className="bg-white rounded-2xl shadow-xl p-8">

          <h1 className="text-4xl font-bold mb-2">
            🩺 AI Medical Assistant
          </h1>

          <p className="text-gray-500 mb-8">
            Ask anything about your uploaded medical report.
          </p>

          <div className="min-h-137.5">
            <ChatWindow
              messages={messages}
              loading={loading}
            />
          </div>

          <ChatInput
            onSend={handleSend}
            loading={loading}
          />
          <SuggestedQuestions
            onSelect={handleSend}
          />

        </div>

      </div>

    </div>
  );
}