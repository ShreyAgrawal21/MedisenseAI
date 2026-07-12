"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { UseFormRegisterReturn } from "react-hook-form";

interface PasswordInputProps {
  label?: string;
  placeholder?: string;
  registration: UseFormRegisterReturn;
  error?: string;
}

export default function PasswordInput({
  label = "Password",
  placeholder = "Enter your password",
  registration,
  error,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-slate-700">
        {label}
      </label>

      <div className="relative">
        <input
          {...registration}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          className="
            w-full rounded-xl
            border border-slate-300
            bg-white
            px-4 py-3
            pr-12
            text-slate-900
            outline-none
            transition
            focus:border-blue-500
            focus:ring-4
            focus:ring-blue-100
          "
        />

        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-blue-600"
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5" />
          ) : (
            <Eye className="h-5 w-5" />
          )}
        </button>
      </div>

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}