"use client";

import { useMemo } from "react";
import { Activity } from "lucide-react";
import { Profile } from "@/services/profile";

interface Props {
  profile: Profile;
  onChange: (field: keyof Profile, value: unknown) => void;
}

export default function MedicalInformation({
  profile,
  onChange,
}: Props) {

  const bmi = useMemo(() => {

    if (
      !profile.height ||
      !profile.weight ||
      profile.height <= 0
    ) {
      return null;
    }

    const heightInMeters = profile.height / 100;

    return (
      profile.weight /
      (heightInMeters * heightInMeters)
    ).toFixed(1);

  }, [profile.height, profile.weight]);

  const bmiStatus = useMemo(() => {

    if (!bmi) return "";

    const value = Number(bmi);

    if (value < 18.5) return "Underweight";

    if (value < 25) return "Normal";

    if (value < 30) return "Overweight";

    return "Obese";

  }, [bmi]);

  return (

    <div className="rounded-3xl bg-white p-8 shadow">

      <div className="mb-6 flex items-center gap-3">

        <Activity className="text-blue-600" />

        <h2 className="text-2xl font-bold">

          Medical Information

        </h2>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        {/* Height */}

        <div>

          <label className="mb-2 block font-medium">

            Height (cm)

          </label>

          <input
            type="number"
            value={profile.height ?? ""}
            onChange={(e) =>
              onChange(
                "height",
                e.target.value === ""
                  ? undefined
                  : Number(e.target.value)
              )
            }
            className="w-full rounded-xl border border-slate-300 p-3 focus:border-blue-500 focus:outline-none"
          />

        </div>

        {/* Weight */}

        <div>

          <label className="mb-2 block font-medium">

            Weight (kg)

          </label>

          <input
            type="number"
            value={profile.weight ?? ""}
            onChange={(e) =>
              onChange(
                "weight",
                e.target.value === ""
                  ? undefined
                  : Number(e.target.value)
              )
            }
            className="w-full rounded-xl border border-slate-300 p-3 focus:border-blue-500 focus:outline-none"
          />

        </div>

      </div>

      {/* BMI */}

      <div className="mt-8 rounded-2xl bg-blue-50 p-5">

        <h3 className="text-lg font-semibold">

          Body Mass Index (BMI)

        </h3>

        {bmi ? (

          <div className="mt-3 flex flex-wrap items-center gap-4">

            <span className="text-3xl font-bold text-blue-700">

              {bmi}

            </span>

            <span className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white">

              {bmiStatus}

            </span>

          </div>

        ) : (

          <p className="mt-2 text-slate-500">

            Enter height and weight to calculate BMI.

          </p>

        )}

      </div>

      {/* Allergies */}

      <div className="mt-8">

        <label className="mb-2 block font-medium">

          Allergies

        </label>

        <textarea
          rows={3}
          value={profile.allergies ?? ""}
          onChange={(e) =>
            onChange(
              "allergies",
              e.target.value
            )
          }
          className="w-full rounded-xl border border-slate-300 p-3 focus:border-blue-500 focus:outline-none"
          placeholder="Enter allergies..."
        />

      </div>

      {/* Medical Conditions */}

      <div className="mt-6">

        <label className="mb-2 block font-medium">

          Medical Conditions

        </label>

        <textarea
          rows={3}
          value={
            profile.medical_conditions ?? ""
          }
          onChange={(e) =>
            onChange(
              "medical_conditions",
              e.target.value
            )
          }
          className="w-full rounded-xl border border-slate-300 p-3 focus:border-blue-500 focus:outline-none"
          placeholder="Enter medical conditions..."
        />

      </div>

    </div>

  );

}