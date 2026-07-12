interface Props {
  title: string;
  findings: string[];
  color?: "red" | "green";
}

export default function FindingsCard({
  title,
  findings,
  color = "red",
}: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-5">
        {color === "red" ? "⚠️" : "✅"} {title}
      </h2>

      {findings.length === 0 ? (
        <p className="text-slate-500">No findings available.</p>
      ) : (
        <ul className="space-y-3">
          {findings.map((item, index) => (
            <li key={index}>
              {color === "red" ? "🔴" : "🟢"} {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}