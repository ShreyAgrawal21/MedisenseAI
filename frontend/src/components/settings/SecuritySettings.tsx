"use client";

import { useState } from "react";
import {
  Eye,
  EyeOff,
  LockKeyhole,
} from "lucide-react";

interface SecuritySettingsProps {
  onChangePassword: (
    currentPassword: string,
    newPassword: string
  ) => Promise<void>;
}

interface PasswordInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  show: boolean;
  onToggleShow: () => void;
}

function PasswordInput({
  label,
  value,
  onChange,
  show,
  onToggleShow,
}: PasswordInputProps) {
  return (
    <div>
      <label className="mb-2 block font-medium text-slate-700">
        {label}
      </label>

      <div className="relative">

        <input
          type={show ? "text" : "password"}
          value={value}
          onChange={(e) =>
            onChange(e.target.value)
          }
          className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-4 pr-12 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />

        <button
          type="button"
          onClick={onToggleShow}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-blue-600"
        >
          {show ? (
            <EyeOff size={20} />
          ) : (
            <Eye size={20} />
          )}
        </button>

      </div>
    </div>
  );
}

export default function SecuritySettings({
  onChangePassword,
}: SecuritySettingsProps) {

  const [currentPassword, setCurrentPassword] =
    useState("");

  const [newPassword, setNewPassword] =
    useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [showCurrent, setShowCurrent] =
    useState(false);

  const [showNew, setShowNew] =
    useState(false);

  const [showConfirm, setShowConfirm] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const getStrength = () => {

    if (newPassword.length === 0)
      return {
        width: "0%",
        color: "",
        label: "",
      };

    if (newPassword.length < 8)
      return {
        width: "33%",
        color: "bg-red-500",
        label: "Weak",
      };

    const strongRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (strongRegex.test(newPassword))
      return {
        width: "100%",
        color: "bg-green-500",
        label: "Strong",
      };

    return {
      width: "66%",
      color: "bg-yellow-500",
      label: "Medium",
    };

  };

  const strength = getStrength();

  async function handleSubmit() {

    if (
      !currentPassword ||
      !newPassword ||
      !confirmPassword
    ) {

      alert("Please fill all fields.");

      return;

    }

    if (newPassword !== confirmPassword) {

      alert("Passwords do not match.");

      return;

    }

    if (newPassword.length < 8) {

      alert(
        "Password should be at least 8 characters."
      );

      return;

    }

    try {

      setLoading(true);

      await onChangePassword(
        currentPassword,
        newPassword
      );

      alert(
        "Password changed successfully."
      );

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");

    } catch (error) {

      console.error(error);

      alert(
        "Unable to change password."
      );

    } finally {

      setLoading(false);

    }

  }

  return (

    <div className="rounded-3xl bg-white p-8 shadow">

      <div className="mb-8 flex items-center gap-3">

        <LockKeyhole className="text-red-600" />

        <h2 className="text-2xl font-bold">
          Security
        </h2>

      </div>

      <div className="space-y-6">

        <PasswordInput
          label="Current Password"
          value={currentPassword}
          onChange={setCurrentPassword}
          show={showCurrent}
          onToggleShow={() =>
            setShowCurrent(!showCurrent)
          }
        />

        <PasswordInput
          label="New Password"
          value={newPassword}
          onChange={setNewPassword}
          show={showNew}
          onToggleShow={() =>
            setShowNew(!showNew)
          }
        />

        <PasswordInput
          label="Confirm Password"
          value={confirmPassword}
          onChange={setConfirmPassword}
          show={showConfirm}
          onToggleShow={() =>
            setShowConfirm(!showConfirm)
          }
        />

        <div>

          <div className="mb-2 flex items-center justify-between">

            <span className="text-sm font-medium text-slate-700">
              Password Strength
            </span>

            <span className="text-sm font-semibold">

              {strength.label}

            </span>

          </div>

          <div className="h-2 rounded-full bg-slate-200">

            <div
              className={`h-2 rounded-full transition-all ${strength.color}`}
              style={{
                width: strength.width,
              }}
            />

          </div>

        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >

          {loading
            ? "Changing Password..."
            : "Change Password"}

        </button>

      </div>

    </div>

  );

}