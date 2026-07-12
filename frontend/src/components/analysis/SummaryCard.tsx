interface Props {
  summary: string;
}

export default function SummaryCard({ summary }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-2xl font-bold text-slate-800 mb-4">
        📋 AI Summary
      </h2>

      <p className="text-slate-600 leading-8">
        {summary}
      </p>
    </div>
  );
}