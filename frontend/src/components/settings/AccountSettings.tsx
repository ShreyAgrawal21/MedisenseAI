"use client";

import { Mail, User } from "lucide-react";
import { Profile } from "@/services/profile";

interface Props {
  profile: Profile;
}

export default function AccountSettings({
  profile,
}: Props) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow">

      <div className="mb-6 flex items-center gap-3">

        <User className="text-blue-600" />

        <h2 className="text-2xl font-bold">
          Account Information
        </h2>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <div>

          <label className="mb-2 block font-medium">
            Full Name
          </label>

          <input
            type="text"
            value={profile.full_name}
            disabled
            className="w-full rounded-xl border bg-slate-100 p-3"
          />

        </div>

        <div>

          <label className="mb-2 block font-medium">
            Email Address
          </label>

          <div className="relative">

            <Mail
              className="absolute left-3 top-3.5 text-slate-400"
              size={18}
            />

            <input
              type="email"
              value={profile.email}
              disabled
              className="w-full rounded-xl border bg-slate-100 py-3 pl-10 pr-3"
            />

          </div>

        </div>

      </div>

      <p className="mt-4 text-sm text-slate-500">
        Your account information is managed from your
        Profile page.
      </p>

    </div>
  );
}