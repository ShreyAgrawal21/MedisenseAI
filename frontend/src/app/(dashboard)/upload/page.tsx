"use client";

import { useState } from "react";

import UploadHeader from "@/components/upload/UploadHeader";
import UploadDropzone from "@/components/upload/UploadDropzone";
import UploadedFileCard from "@/components/upload/UploadedFileCard";

import { uploadReport } from "@/services/report";

import { useRouter } from "next/navigation";

export default function UploadPage() {
    const router = useRouter();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleUpload() {
    if (!selectedFile) return;

    try {
      setUploading(true);
      setProgress(0);
      setSuccess(false);
      setError("");

      const response = await uploadReport(
        selectedFile,
        (progress) => {
             setProgress(progress);
        }
    );

    console.log(response);

    setSuccess(true);

    setTimeout(() => {
      router.push(`/analysis/${response.id}`);
    }, 1000);

      // Uncomment later when Analysis page is ready
      // router.push(`/analysis/${response.id}`);
    } catch (err) {
      console.error(err);

      setError(
        "Failed to upload report. Please try again."
      );
    } finally {
      setUploading(false);
    }
  }

  function handleRemoveFile() {
    setSelectedFile(null);
    setProgress(0);
    setSuccess(false);
    setError("");
  }

  return (
    <div className="space-y-8">

      {/* Upload Header */}

      <UploadHeader />

      {/* Upload Dropzone */}

      <UploadDropzone
        onFileSelect={(file) => {
          setSelectedFile(file);
          setProgress(0);
          setSuccess(false);
          setError("");
        }}
      />

      {/* Selected File */}

      {selectedFile && (
        <>
          <UploadedFileCard
            file={selectedFile}
            onRemove={handleRemoveFile}
          />

          <div className="flex justify-end">

            <button
              onClick={handleUpload}
              disabled={uploading}
              className="
                rounded-xl
                bg-linear-to-r
                from-blue-600
                to-cyan-500
                px-8
                py-3
                font-semibold
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-xl
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >
              {uploading
                ? "Uploading..."
                : "Upload Report"}
            </button>

          </div>
        </>
      )}

      {/* Upload Progress */}

      {uploading && (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow">

          <div className="mb-3 flex items-center justify-between">

            <span className="font-medium text-slate-700">
              Uploading Report...
            </span>

            <span className="font-semibold text-blue-600">
              {progress}%
            </span>

          </div>

          <div className="h-3 overflow-hidden rounded-full bg-slate-200">

            <div
              className="
                h-full
                rounded-full
                bg-linear-to-r
                from-blue-600
                to-cyan-500
                transition-all
                duration-300
              "
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

        </div>
      )}

      {/* Success Message */}

      {success && (
        <div className="rounded-2xl border border-green-200 bg-green-50 p-5 shadow-sm">

          <h3 className="text-lg font-semibold text-green-700">
            ✅ Report Uploaded Successfully
          </h3>

          <p className="mt-2 text-sm text-green-600">
            Your medical report has been uploaded successfully.
          </p>

          <p className="mt-1 text-sm text-green-600">
            AI analysis will begin automatically in the next milestone.
          </p>

        </div>
      )}

      {/* Error Message */}

      {error && (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-5 shadow-sm">

          <h3 className="text-lg font-semibold text-red-700">
            ❌ Upload Failed
          </h3>

          <p className="mt-2 text-sm text-red-600">
            {error}
          </p>

        </div>
      )}

    </div>
  );
}