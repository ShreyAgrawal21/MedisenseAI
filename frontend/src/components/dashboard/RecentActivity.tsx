"use client";

const activities = [
  {
    title: "Uploaded Blood Report.pdf",
    time: "2 hours ago",
  },
  {
    title: "AI Analysis Completed",
    time: "Yesterday",
  },
  {
    title: "Compared CBC & Lipid Report",
    time: "3 days ago",
  },
];

export default function RecentActivity() {
  return (
    <div className="rounded-3xl border bg-white p-8 shadow-sm">

      <h2 className="text-2xl font-bold">

        📋 Recent Activity

      </h2>

      <p className="mb-8 text-slate-500">

        Your latest actions

      </p>

      <div className="space-y-5">

        {activities.map((activity) => (

          <div
            key={activity.title}
            className="flex items-center justify-between rounded-xl bg-slate-50 p-4"
          >

            <span>

              {activity.title}

            </span>

            <span className="text-sm text-slate-500">

              {activity.time}

            </span>

          </div>

        ))}

      </div>

    </div>
  );
}