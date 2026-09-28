import { Suspense } from "react";
import { AuthLayout } from "@/components/auth/auth-layout";
import { VerifyEmailContent } from "@/features/auth/verify-email/verify-email-content";

export const metadata = {
  title: "Verify your email — Fonitas",
  description: "Verify your email address to activate your Fonitas account.",
};

export default function VerifyEmailPage() {
  return (
    <AuthLayout>
      <div className="mx-auto w-full max-w-lg">
        <Suspense
          fallback={
            <div role="status" className="py-12 text-center text-sm text-white/55">
              Loading email verification...
            </div>
          }
        >
          <VerifyEmailContent />
        </Suspense>
      </div>
    </AuthLayout>
  );
}
