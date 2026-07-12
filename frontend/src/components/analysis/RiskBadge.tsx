interface Props {
  score: number;
}

export default function RiskBadge({
  score,
}: Props) {

  const color =
    score >= 85
      ? "bg-green-500"
      : score >= 70
      ? "bg-yellow-500"
      : "bg-red-500";

  const text =
    score >= 85
      ? "Low Risk"
      : score >= 70
      ? "Medium Risk"
      : "High Risk";

  return (
    <span
      className={`${color} text-white px-4 py-2 rounded-full font-semibold`}
    >
      {text}
    </span>
  );
}