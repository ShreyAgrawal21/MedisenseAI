"use client";

import { useState } from "react";

interface Props {
  text: string;
}

export default function CopyButton({ text }: Props) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(text);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <button
      onClick={copy}
      className="text-xs text-blue-600 hover:text-blue-800 transition"
    >
      {copied ? "✅ Copied" : "📋 Copy"}
    </button>
  );
}