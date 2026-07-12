interface Props {
  recommendations: string[];
}

export default function RecommendationCard({
  recommendations,
}: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-5">
        💡 Recommendations
      </h2>

      <ul className="space-y-3">

        {recommendations.map((item, index) => (
          <li key={index}>
            ✅ {item}
          </li>
        ))}

      </ul>

    </div>
  );
}