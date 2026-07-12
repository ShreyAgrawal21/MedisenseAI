"use client";

import { Sparkles } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export default function WelcomeCard() {

    const { user } = useAuth();

    const firstName =
        user?.full_name?.split(" ")[0] ?? "User";

    return (
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-10 text-white shadow-xl">

            <div className="flex items-center gap-3">

                <Sparkles size={34} />

                <h2 className="text-3xl font-bold">
                    Welcome back, {firstName} 👋
                </h2>

            </div>

            <p className="mt-4 max-w-2xl text-lg text-blue-100">
                Upload your medical reports, chat with AI,
                compare health trends and receive
                personalized insights instantly.
            </p>

        </div>
    );
}