"use client";

const questions = [
  "Explain my report",
  "Which values are abnormal?",
  "What should I be worried about?",
  "Should I consult a doctor?",
  "Give me diet recommendations",
  "Summarize my report",
];

interface Props {
  onSelect: (question: string) => void;
}

export default function SuggestedQuestions({
  onSelect,
}: Props) {
  return (
    <div className="mb-8">

      <h3 className="text-lg font-semibold mb-4">
        💡 Suggested Questions
      </h3>

      <div className="flex flex-wrap gap-3">

        {questions.map((question) => (
          <button
            key={question}
            onClick={() => onSelect(question)}
            className="
              rounded-full
              border
              border-blue-200
              bg-blue-50
              px-4
              py-2
              text-sm
              hover:bg-blue-100
              transition
            "
          >
            {question}
          </button>
        ))}

      </div>

    </div>
  );
}