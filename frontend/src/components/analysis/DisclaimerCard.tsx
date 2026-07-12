interface Props {
  disclaimer: string;
}

export default function DisclaimerCard({
  disclaimer,
}: Props) {
  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
      <h2 className="text-xl font-bold mb-3">
        ⚠️ Disclaimer
      </h2>

      <p className="text-slate-700">
        {disclaimer}
      </p>
    </div>
  );
}