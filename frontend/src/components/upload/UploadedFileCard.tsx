"use client";

import { FileText, Trash2 } from "lucide-react";

interface UploadedFileCardProps {
  file: File;
  onRemove: () => void;
}

export default function UploadedFileCard({
  file,
  onRemove,
}: UploadedFileCardProps) {
  const size = (file.size / (1024 * 1024)).toFixed(2);

  return (
    <div className="mt-8 flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <div className="flex items-center gap-4">

        <div className="rounded-xl bg-blue-100 p-3">
          <FileText className="text-blue-600" />
        </div>

        <div>
          <h3 className="font-semibold">{file.name}</h3>

          <p className="text-sm text-slate-500">
            {size} MB
          </p>

          <span className="text-sm font-medium text-green-600">
            Ready to upload
          </span>

        </div>

      </div>

      <button
        onClick={onRemove}
        className="rounded-xl p-2 text-red-500 transition hover:bg-red-50"
      >
        <Trash2 />
      </button>

    </div>
  );
}