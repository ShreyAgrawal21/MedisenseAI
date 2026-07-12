"use client";

import { useRef, useState } from "react";
import { UploadCloud } from "lucide-react";

interface UploadDropzoneProps {
  onFileSelect: (file: File) => void;
}

const ALLOWED_TYPES = [
  "application/pdf",
  "image/png",
  "image/jpeg",
];

const MAX_SIZE = 20 * 1024 * 1024; // 20 MB

export default function UploadDropzone({
  onFileSelect,
}: UploadDropzoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState("");

  function validateFile(file: File) {
    if (!ALLOWED_TYPES.includes(file.type)) {
      setError("Only PDF, JPG and PNG files are allowed.");
      return false;
    }

    if (file.size > MAX_SIZE) {
      setError("File size must be less than 20 MB.");
      return false;
    }

    setError("");
    return true;
  }

  function handleFile(file: File) {
    if (!validateFile(file)) return;

    onFileSelect(file);
  }

  function handleInput(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    handleFile(file);
  }

  function handleDrop(
    e: React.DragEvent<HTMLDivElement>
  ) {
    e.preventDefault();

    setDragActive(false);

    const file = e.dataTransfer.files?.[0];

    if (!file) return;

    handleFile(file);
  }

  return (
    <>
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragActive(true);
        }}
        onDragLeave={() => setDragActive(false)}
        onDrop={handleDrop}
        className={`rounded-3xl border-2 border-dashed p-16 text-center transition-all duration-300

        ${
          dragActive
            ? "border-blue-600 bg-blue-50"
            : "border-slate-300 bg-white"
        }

        `}
      >
        <UploadCloud
          size={70}
          className="mx-auto text-blue-600"
        />

        <h2 className="mt-6 text-3xl font-bold">
          Drag & Drop Your Medical Report
        </h2>

        <p className="mt-3 text-slate-500">
          Drop your report here or browse from your computer.
        </p>

        <button
          onClick={() => inputRef.current?.click()}
          className="mt-8 rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Browse Files
        </button>

        <input
          ref={inputRef}
          type="file"
          accept=".pdf,.png,.jpg,.jpeg"
          hidden
          onChange={handleInput}
        />

        <p className="mt-6 text-sm text-slate-400">
          PDF • JPG • JPEG • PNG
        </p>

        <p className="text-sm text-slate-400">
          Maximum size 20 MB
        </p>
      </div>

      {error && (
        <div className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-red-600">
          {error}
        </div>
      )}
    </>
  );
}