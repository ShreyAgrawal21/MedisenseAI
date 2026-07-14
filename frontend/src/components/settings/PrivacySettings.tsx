"use client";

import {
  Download,
  FileDown,
  Trash2,
  ShieldAlert,
} from "lucide-react";

interface Props {
  onExport: () => void;
  onDownloadReports: () => void;
  onDeleteAccount: () => void;
}

export default function PrivacySettings({
  onExport,
  onDownloadReports,
  onDeleteAccount,
}: Props) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow">

      <div className="mb-6 flex items-center gap-3">

        <ShieldAlert className="text-red-500" />

        <h2 className="text-2xl font-bold">
          Privacy & Data
        </h2>

      </div>

      <div className="space-y-6">

        {/* Export */}

        <div className="flex items-center justify-between rounded-2xl border p-5">

          <div>

            <h3 className="font-semibold">
              Export Profile Data
            </h3>

            <p className="text-sm text-slate-500">
              Download your account information.
            </p>

          </div>

          <button
            onClick={onExport}
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
          >
            <Download size={18} />

            Export

          </button>

        </div>

        {/* Reports */}

        <div className="flex items-center justify-between rounded-2xl border p-5">

          <div>

            <h3 className="font-semibold">
              Download Reports
            </h3>

            <p className="text-sm text-slate-500">
              Download all uploaded medical reports.
            </p>

          </div>

          <button
            onClick={onDownloadReports}
            className="flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-white hover:bg-green-700"
          >
            <FileDown size={18} />

            Download

          </button>

        </div>

        {/* Delete */}

        <div className="flex items-center justify-between rounded-2xl border border-red-200 bg-red-50 p-5">

          <div>

            <h3 className="font-semibold text-red-700">
              Delete Account
            </h3>

            <p className="text-sm text-red-500">
              This action cannot be undone.
            </p>

          </div>

          <button
            onClick={onDeleteAccount}
            className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-white hover:bg-red-700"
          >
            <Trash2 size={18} />

            Delete

          </button>

        </div>

      </div>

    </div>
  );
}