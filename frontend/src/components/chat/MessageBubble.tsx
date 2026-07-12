interface Props {
  role: "user" | "assistant";
  message: string;
}

export default function MessageBubble({
  role,
  message,
}: Props) {
  const isUser = role === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[75%] rounded-2xl px-5 py-3 shadow
        ${
          isUser
            ? "bg-blue-600 text-white"
            : "bg-white text-slate-700"
        }`}
      >
        {message}
      </div>
    </div>
  );
}