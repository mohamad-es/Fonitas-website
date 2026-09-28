import Link from "next/link";
import { AuthLayout } from "@/components/auth/auth-layout";
import { ForgotPasswordForm } from "@/features/auth/forgot-password/forgot-password-form";

export const metadata = {
  title: "Forgot password — Fonitas",
  description: "Request a password reset link for your Fonitas account.",
};

export default function ForgotPasswordPage() {
  return (
    <AuthLayout>
      <div className="mb-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#ff5a1f]">Account recovery</p>
        <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Forgot password?</h1>
        <p className="mt-4 max-w-md text-sm leading-6 text-white/50">Enter the email address associated with your Fonitas account. If an account exists, we’ll email you a link to reset your password.</p>
      </div>
      <ForgotPasswordForm />
      <p className="mt-8 text-center text-sm text-white/45"><Link href="/login" className="text-white hover:text-[#ff7a3d]">← Back to sign in</Link></p>
    </AuthLayout>
  );
}
