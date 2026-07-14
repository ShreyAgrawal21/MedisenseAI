"use client";

import { DashboardResponse } from "@/types/dashboard";

import { useEffect, useState } from "react";

import ProfileHeader from "@/components/profile/ProfileHeader";
import PersonalInformation from "@/components/profile/PersonalInformation";
import MedicalInformation from "@/components/profile/MedicalInformation";
import EmergencyContact from "@/components/profile/EmergencyContact";
import ProfileStats from "@/components/profile/ProfileStats";

import {
  getProfile,
  updateProfile,
  Profile,
} from "@/services/profile";

import { getDashboard } from "@/services/dashboard";

export default function ProfilePage() {

  const [profile, setProfile] =
    useState<Profile | null>(null);

  const [dashboard, setDashboard] =
    useState<DashboardResponse | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  useEffect(() => {

    async function loadData() {

      try {

        const [profileData, dashboardData] =
          await Promise.all([
            getProfile(),
            getDashboard(),
          ]);

        setProfile(profileData);

        setDashboard(dashboardData);

      } catch (err) {

        console.error(err);

      } finally {

        setLoading(false);

      }

    }

    loadData();

  }, []);

  function handleChange(
    field: keyof Profile,
    value: unknown,
  ) {

    if (!profile) return;

    setProfile({

      ...profile,

      [field]: value,

    });

  }

  async function handleSave() {

    if (!profile) return;

    try {

      setSaving(true);

      const updated =
        await updateProfile(profile);

      setProfile(updated);

      alert("✅ Profile updated successfully.");

    } catch (error) {

      console.error(error);

      alert("❌ Failed to update profile.");

    } finally {

      setSaving(false);

    }

  }

  if (loading || !profile) {

    return (

      <div className="flex h-96 items-center justify-center">

        <div className="text-xl font-semibold">

          Loading Profile...

        </div>

      </div>

    );

  }

  return (

    <div className="space-y-8">

      <ProfileHeader

        profile={profile}

      />

      <ProfileStats

        reportsUploaded={
          dashboard?.total_reports ?? 0
        }

        healthScore={
          dashboard?.health_score ?? 0
        }

        lastAnalysis={
          dashboard?.last_upload
        }

        memberSince={undefined}

      />

      <PersonalInformation

        profile={profile}

        onChange={handleChange}

      />

      <MedicalInformation

        profile={profile}

        onChange={handleChange}

      />

      <EmergencyContact

        profile={profile}

        onChange={handleChange}

      />

      <div className="flex justify-end gap-4">

        <button

          onClick={() =>
            window.location.reload()
          }

          className="rounded-xl border border-slate-300 px-6 py-3 font-medium hover:bg-slate-100"

        >

          Cancel

        </button>

        <button

          onClick={handleSave}

          disabled={saving}

          className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 disabled:opacity-50"

        >

          {saving
            ? "Saving..."
            : "Save Changes"}

        </button>

      </div>

    </div>

  );

}