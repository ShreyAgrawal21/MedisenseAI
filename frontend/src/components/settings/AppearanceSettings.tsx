"use client";

import { Palette } from "lucide-react";

interface Props {
  darkMode: boolean;
  language: string;
  onDarkModeChange: (value: boolean) => void;
  onLanguageChange: (value: string) => void;
}

export default function AppearanceSettings({
  darkMode,
  language,
  onDarkModeChange,
  onLanguageChange,
}: Props) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow">

      <div className="mb-6 flex items-center gap-3">

        <Palette className="text-indigo-600" />

        <h2 className="text-2xl font-bold">
          Appearance
        </h2>

      </div>

      <div className="space-y-6">

        {/* Dark Mode */}

        <div className="flex items-center justify-between">

          <div>

            <h3 className="font-semibold">
              Dark Mode
            </h3>

            <p className="text-sm text-slate-500">
              Enable dark theme throughout MediSense AI.
            </p>

          </div>

          <label className="relative inline-flex cursor-pointer items-center">

            <input
              type="checkbox"
              checked={darkMode}
              onChange={(e) =>
                onDarkModeChange(e.target.checked)
              }
              className="peer sr-only"
            />

            <div className="peer h-6 w-11 rounded-full bg-gray-300 transition peer-checked:bg-blue-600 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:after:translate-x-full" />

          </label>

        </div>

        {/* Language */}

        <div>

          <label className="mb-2 block font-medium">
            Language
          </label>

          <select
            value={language}
            onChange={(e) =>
              onLanguageChange(e.target.value)
            }
            className="w-full rounded-xl border border-slate-300 p-3 focus:border-blue-500 focus:outline-none"
          >

            <option value="en">
              English
            </option>

            <option value="hi">
              Hindi
            </option>

          </select>

        </div>

      </div>

    </div>
  );
}