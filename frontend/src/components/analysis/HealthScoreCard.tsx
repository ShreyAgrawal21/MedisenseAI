interface Props {
  score: number;
}

export default function HealthScoreCard({
  score,
}: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-5">
        ❤️ Overall Health Score
      </h2>

      <div className="text-center">

        <h1 className="text-6xl font-bold text-blue-600">
          {score}%
        </h1>

        <div className="mt-6 h-4 rounded-full bg-slate-200 overflow-hidden">

          <div
            className="bg-green-500 h-4 rounded-full"
            style={{
              width: `${score}%`,
            }}
          />

        </div>

        <p className="mt-4 text-slate-600">

          {score >= 85
            ? "Excellent Health"
            : score >= 70
            ? "Good Health"
            : "Needs Attention"}

        </p>

      </div>

    </div>
  );
}