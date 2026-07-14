"use client";

import { PhoneCall } from "lucide-react";
import { Profile } from "@/services/profile";

interface Props {
  profile: Profile;
  onChange: (field: keyof Profile, value: unknown) => void;
}

export default function EmergencyContact({
  profile,
  onChange,
}: Props) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow">

      <div className="mb-6 flex items-center gap-3">

        <PhoneCall className="text-red-600" />

        <h2 className="text-2xl font-bold">
          Emergency Contact
        </h2>

      </div>

      <div className="grid gap-6 md:grid-cols-3">

        {/* Contact Name */}

        <div>

          <label className="mb-2 block font-medium">
            Contact Name
          </label>

          <input
            type="text"
            value={profile.emergency_contact_name ?? ""}
            onChange={(e) =>
              onChange(
                "emergency_contact_name",
                e.target.value
              )
            }
            className="w-full rounded-xl border border-slate-300 p-3 focus:border-blue-500 focus:outline-none"
          />

        </div>

        {/* Phone */}

        <div>

          <label className="mb-2 block font-medium">
            Phone Number
          </label>

          <input
            type="text"
            value={profile.emergency_contact_phone ?? ""}
            onChange={(e) =>
              onChange(
                "emergency_contact_phone",
                e.target.value
              )
            }
            className="w-full rounded-xl border border-slate-300 p-3 focus:border-blue-500 focus:outline-none"
          />

        </div>

        {/* Relation */}

        <div>

          <label className="mb-2 block font-medium">
            Relationship
          </label>

          <select
            value={
              profile.emergency_contact_relation ?? ""
            }
            onChange={(e) =>
              onChange(
                "emergency_contact_relation",
                e.target.value
              )
            }
            className="w-full rounded-xl border border-slate-300 p-3 focus:border-blue-500 focus:outline-none"
          >

            <option value="">
              Select Relationship
            </option>

            <option>Father</option>
            <option>Mother</option>
            <option>Brother</option>
            <option>Sister</option>
            <option>Spouse</option>
            <option>Friend</option>
            <option>Guardian</option>
            <option>Other</option>

          </select>

        </div>

      </div>

    </div>
  );
}