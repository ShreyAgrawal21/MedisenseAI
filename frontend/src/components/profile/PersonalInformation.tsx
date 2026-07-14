"use client";

import { Profile } from "@/services/profile";

interface Props {
  profile: Profile;
  onChange: (field: keyof Profile, value: unknown) => void;
}

export default function PersonalInformation({
  profile,
  onChange,
}: Props) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow">

      <h2 className="mb-6 text-2xl font-bold">
        Personal Information
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        {/* Full Name */}

        <div>

          <label className="mb-2 block font-medium">
            Full Name
          </label>

          <input
            type="text"
            value={profile.full_name}
            onChange={(e) =>
              onChange("full_name", e.target.value)
            }
            className="w-full rounded-xl border border-slate-300 p-3 focus:border-blue-500 focus:outline-none"
          />

        </div>

        {/* Email */}

        <div>

          <label className="mb-2 block font-medium">
            Email
          </label>

          <input
            type="email"
            value={profile.email}
            disabled
            className="w-full cursor-not-allowed rounded-xl border bg-slate-100 p-3"
          />

        </div>

        {/* Phone */}

        <div>

          <label className="mb-2 block font-medium">
            Phone Number
          </label>

          <input
            type="text"
            value={profile.phone_number ?? ""}
            onChange={(e) =>
              onChange("phone_number", e.target.value)
            }
            className="w-full rounded-xl border border-slate-300 p-3 focus:border-blue-500 focus:outline-none"
          />

        </div>

        {/* Gender */}

        <div>

          <label className="mb-2 block font-medium">
            Gender
          </label>

          <select
            value={profile.gender ?? ""}
            onChange={(e) =>
              onChange("gender", e.target.value)
            }
            className="w-full rounded-xl border border-slate-300 p-3 focus:border-blue-500 focus:outline-none"
          >

            <option value="">Select Gender</option>

            <option value="Male">Male</option>

            <option value="Female">Female</option>

            <option value="Other">Other</option>

          </select>

        </div>

        {/* DOB */}

        <div>

          <label className="mb-2 block font-medium">
            Date of Birth
          </label>

          <input
            type="date"
            value={profile.date_of_birth ?? ""}
            onChange={(e) =>
              onChange(
                "date_of_birth",
                e.target.value
              )
            }
            className="w-full rounded-xl border border-slate-300 p-3 focus:border-blue-500 focus:outline-none"
          />

        </div>

        {/* Blood Group */}

        <div>

          <label className="mb-2 block font-medium">
            Blood Group
          </label>

          <select
            value={profile.blood_group ?? ""}
            onChange={(e) =>
              onChange(
                "blood_group",
                e.target.value
              )
            }
            className="w-full rounded-xl border border-slate-300 p-3 focus:border-blue-500 focus:outline-none"
          >

            <option value="">Select</option>

            <option>A+</option>
            <option>A-</option>

            <option>B+</option>
            <option>B-</option>

            <option>AB+</option>
            <option>AB-</option>

            <option>O+</option>
            <option>O-</option>

          </select>

        </div>

      </div>

    </div>
  );
}