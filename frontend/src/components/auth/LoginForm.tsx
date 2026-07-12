"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import PasswordInput from "./PasswordInput";
import RememberMe from "./RememberMe";
import GradientButton from "@/components/shared/GradientButton";

import { login as loginApi } from "@/services/auth";
import { useAuth } from "@/hooks/useAuth";

const LoginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type LoginFormData = z.infer<typeof LoginSchema>;

export default function LoginForm() {
  const router = useRouter();
  const { login } = useAuth();

  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: LoginFormData) {
    try {
      setLoading(true);

      const response = await loginApi(data);

      login(response.access_token, response.full_name, response.email);

      router.push("/dashboard");
    } catch (error) {
      setError("root", {
        message: "Invalid email or password",
      });

      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-10 shadow-xl">

      <h1 className="text-3xl font-bold text-slate-900">
        Welcome Back 👋
      </h1>

      <p className="mt-3 text-slate-500">
        Login to your MediSense AI account
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 space-y-6"
      >

        <div className="space-y-2">
          <label className="text-sm font-medium">
            Email
          </label>

          <input
            {...register("email")}
            placeholder="Enter your email"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />

          {errors.email && (
            <p className="text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        <PasswordInput
          registration={register("password")}
          error={errors.password?.message}
        />

        <RememberMe
          checked={rememberMe}
          onChange={setRememberMe}
        />

        {errors.root && (
          <p className="text-center text-sm text-red-500">
            {errors.root.message}
          </p>
        )}

        <GradientButton type="submit">
          {loading ? "Signing In..." : "Login"}
        </GradientButton>

        <p className="text-center text-sm text-slate-500">
          Don&apos;t have an account?{" "}
          <span
            onClick={() => router.push("/register")}
            className="cursor-pointer font-semibold text-blue-600 hover:text-blue-700"
          >
            Register
          </span>
        </p>

      </form>
    </div>
  );
}