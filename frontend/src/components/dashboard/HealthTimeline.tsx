"use client";

interface Props {
  summary?: {
    recommendations?: string[];
    follow_up?: string;
    health_status?: string;
  };
}

export default function HealthTimeline({
  summary,
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-xl font-semibold mb-6">
        📅 Health Timeline
      </h2>

      <div className="space-y-6">

        <div className="flex items-start gap-4">
          <div className="h-4 w-4 rounded-full bg-green-500 mt-1" />

          <div>
            <p className="font-semibold">
              Report Uploaded
            </p>

            <p className="text-sm text-gray-500">
              Medical report successfully uploaded.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">

          <div className="h-4 w-4 rounded-full bg-blue-500 mt-1" />

          <div>

            <p className="font-semibold">

              AI Analysis Complete

            </p>

            <p className="text-sm text-gray-500">

              Health Status:
              {" "}
              {summary?.health_status ??
                "Unknown"}

            </p>

          </div>

        </div>

        {summary?.recommendations?.length ? (

          <div className="flex items-start gap-4">

            <div className="h-4 w-4 rounded-full bg-yellow-500 mt-1" />

            <div>

              <p className="font-semibold">

                Recommendation Generated

              </p>

              <p className="text-sm text-gray-500">

                {summary.recommendations[0]}

              </p>

            </div>

          </div>

        ) : null}

        {summary?.follow_up ? (

          <div className="flex items-start gap-4">

            <div className="h-4 w-4 rounded-full bg-red-500 mt-1" />

            <div>

              <p className="font-semibold">

                Follow-up

              </p>

              <p className="text-sm text-gray-500">

                {summary.follow_up}

              </p>

            </div>

          </div>

        ) : null}

      </div>

    </div>
  );
}