/* eslint-disable @next/next/no-img-element */
"use client";

import { Camera, Mail, UserCircle } from "lucide-react";
import { Profile } from "@/services/profile";

interface Props {
  profile: Profile;
}

export default function ProfileHeader({
  profile,
}: Props) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow">

      <div className="flex flex-col items-center gap-6 md:flex-row">

        {/* Avatar */}

        <div className="relative">

          {profile.profile_image ? (

            <img
              src={profile.profile_image}
              alt={profile.full_name}
              className="h-32 w-32 rounded-full border-4 border-blue-100 object-cover"
            />

          ) : (

            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-blue-100">

              <UserCircle
                size={80}
                className="text-blue-600"
              />

            </div>

          )}

          <button
            className="absolute bottom-0 right-0 rounded-full bg-blue-600 p-3 text-white shadow transition hover:bg-blue-700"
          >
            <Camera size={18} />
          </button>

        </div>

        {/* User Info */}

        <div className="flex-1">

          <h1 className="text-3xl font-bold text-slate-900">
            {profile.full_name}
          </h1>

          <div className="mt-3 flex items-center gap-2 text-slate-500">

            <Mail size={18} />

            {profile.email}

          </div>

          <div className="mt-5 flex flex-wrap gap-3">

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              AI Healthcare User
            </span>

            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
              Active
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}