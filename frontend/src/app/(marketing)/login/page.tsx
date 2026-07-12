import LoginForm from "@/components/auth/LoginForm";
import LoginIllustration from "@/components/auth/LoginIllustration";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-8">

      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-20">

        <LoginForm />

        <LoginIllustration />

      </div>

    </main>
  );
}