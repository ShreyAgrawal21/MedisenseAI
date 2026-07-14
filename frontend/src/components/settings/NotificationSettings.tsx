"use client";

import { Bell } from "lucide-react";

interface Props {
  emailNotifications: boolean;
  aiNotifications: boolean;
  reportNotifications: boolean;
  healthAlerts: boolean;

  onEmailChange: (value: boolean) => void;
  onAIChange: (value: boolean) => void;
  onReportChange: (value: boolean) => void;
  onHealthAlertChange: (value: boolean) => void;
}

export default function NotificationSettings({
  emailNotifications,
  aiNotifications,
  reportNotifications,
  healthAlerts,
  onEmailChange,
  onAIChange,
  onReportChange,
  onHealthAlertChange,
}: Props) {

  const notifications = [
    {
      title: "Email Notifications",
      description: "Receive important updates via email.",
      checked: emailNotifications,
      onChange: onEmailChange,
    },
    {
      title: "AI Analysis Notifications",
      description: "Notify when AI finishes analyzing a report.",
      checked: aiNotifications,
      onChange: onAIChange,
    },
    {
      title: "Report Upload Notifications",
      description: "Receive confirmation after report uploads.",
      checked: reportNotifications,
      onChange: onReportChange,
    },
    {
      title: "Critical Health Alerts",
      description: "Notify when abnormal medical values are detected.",
      checked: healthAlerts,
      onChange: onHealthAlertChange,
    },
  ];

  return (
    <div className="rounded-3xl bg-white p-8 shadow">

      <div className="mb-6 flex items-center gap-3">

        <Bell className="text-yellow-500" />

        <h2 className="text-2xl font-bold">
          Notifications
        </h2>

      </div>

      <div className="space-y-6">

        {notifications.map((item) => (

          <div
            key={item.title}
            className="flex items-center justify-between rounded-2xl border border-slate-200 p-5"
          >

            <div>

              <h3 className="font-semibold">
                {item.title}
              </h3>

              <p className="text-sm text-slate-500">
                {item.description}
              </p>

            </div>

            <label className="relative inline-flex cursor-pointer items-center">

              <input
                type="checkbox"
                checked={item.checked}
                onChange={(e) =>
                  item.onChange(e.target.checked)
                }
                className="peer sr-only"
              />

              <div className="peer h-6 w-11 rounded-full bg-gray-300 transition peer-checked:bg-blue-600 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:after:translate-x-full" />

            </label>

          </div>

        ))}

      </div>

    </div>
  );
}