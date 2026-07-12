import { HeartPulse } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-blue-600 to-cyan-500 shadow-lg">
        <HeartPulse className="h-7 w-7 text-white" />
      </div>

      <div>
        <h1 className="text-xl font-bold text-slate-900">
          MediSense AI
        </h1>

        <p className="text-xs text-slate-500">
          AI Healthcare Intelligence
        </p>
      </div>
    </div>
  );
}