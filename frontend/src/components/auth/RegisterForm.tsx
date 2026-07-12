"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import PasswordInput from "./PasswordInput";
import GradientButton from "@/components/shared/GradientButton";

import { register as registerUser } from "@/services/auth";

const RegisterSchema = z
  .object({
    full_name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Enter a valid email"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

type RegisterFormData = z.infer<typeof RegisterSchema>;

export default function RegisterForm() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);


  const {
    register,
    handleSubmit,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    watch,
    formState: { errors },
    setError,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterSchema),
  });

  async function onSubmit(data: RegisterFormData) {
    console.log("onSubmit called");
    console.log(data);
    try {
      setLoading(true);

      console.log("Calling register API...");

      await registerUser({
        full_name: data.full_name,
        email: data.email,
        password: data.password,
      });

      console.log("API finished");

      alert("Registration successful!");

      router.push("/login");
    } catch (error: unknown) {
      setError("root", {
        message: "Registration failed",
      });

      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-10 shadow-xl">

      <h1 className="text-3xl font-bold text-slate-900">
        Create Account 🚀
      </h1>

      <p className="mt-2 text-slate-500">
        Join MediSense AI today.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 space-y-6"
      >
        {/* Name */}

        <div>
          <label className="text-sm font-medium">
            Full Name
          </label>

          <input
            {...register("full_name")}
            className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            placeholder="John Doe"
          />

          {errors.full_name && (
            <p className="mt-1 text-sm text-red-500">
              {errors.full_name.message}
            </p>
          )}
        </div>

        {/* Email */}

        <div>
          <label className="text-sm font-medium">
            Email
          </label>

          <input
            {...register("email")}
            className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            placeholder="example@gmail.com"
          />

          {errors.email && (
            <p className="mt-1 text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}

        <PasswordInput
          registration={register("password")}
          error={errors.password?.message}
        />

        {/* Confirm Password */}

        <PasswordInput
          label="Confirm Password"
          placeholder="Confirm your password"
          registration={register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />

        {/* API Error */}

        {errors.root && (
          <p className="text-center text-red-500">
            {errors.root.message}
          </p>
        )}

        <GradientButton
        type="submit"
        disabled={loading}>
          {loading ? "Creating Account..." : "Create Account"}
        </GradientButton>

        <p className="text-center text-sm text-slate-500">
          Already have an account?{" "}
          <span
            onClick={() => router.push("/login")}
            className="cursor-pointer font-semibold text-blue-600"
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}