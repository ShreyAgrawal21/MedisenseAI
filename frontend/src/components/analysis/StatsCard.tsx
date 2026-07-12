interface Props {
  title: string;
  value: number;
  icon: string;
  color?: string;
}

export default function StatsCard({
  title,
  value,
  icon,
  color = "text-blue-600",
}: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <div className="text-4xl mb-3">
        {icon}
      </div>

      <h3 className="text-slate-500 text-sm">
        {title}
      </h3>

      <h2 className={`text-4xl font-bold mt-2 ${color}`}>
        {value}
      </h2>

    </div>
  );
}