"use client";

const filters = [
  "All",
  "CBC",
  "Lipid",
  "Vitamin",
  "Kidney",
  "Liver",
  "Diabetes",
];

interface Props {
  selected: string;
  onSelect: (value: string) => void;
}

export default function ReportFilters({
  selected,
  onSelect,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onSelect(filter)}
          className={`rounded-full px-4 py-2 transition ${
            selected === filter
              ? "bg-blue-600 text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}