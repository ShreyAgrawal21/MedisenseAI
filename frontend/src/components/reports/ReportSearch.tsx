"use client";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function ReportSearch({
  value,
  onChange,
}: Props) {
  return (
    <input
      type="text"
      placeholder="Search reports..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="
        w-full
        rounded-xl
        border
        p-4
        outline-none
        focus:ring-2
        focus:ring-blue-500
      "
    />
  );
}