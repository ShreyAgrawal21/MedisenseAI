"use client";

interface RememberMeProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function RememberMe({
  checked,
  onChange,
}: RememberMeProps) {
  return (
    <div className="flex items-center justify-between">
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
        />

        <span className="text-sm text-slate-600">
          Remember me
        </span>
      </label>

      <button
        type="button"
        className="text-sm font-medium text-blue-600 hover:text-blue-700 transition"
      >
        Forgot Password?
      </button>
    </div>
  );
}