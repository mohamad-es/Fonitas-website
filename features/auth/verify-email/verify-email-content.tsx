"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type VerifiedUser = {
  public_id: string;
  display_name: string;
  status: string;
  primary_email: {
    email: string;
    is_verified: boolean;
    verified_at: string;
  };
  tenant_public_id: string;
  created_at: string;
  updated_at: string;
  last_login_at: string | null;
  roles: string[];
  permissions: string[];
};

type VerifyEmailResponse = {
  data: VerifiedUser;
  meta: Record<string, unknown>;
};

type ApiErrorResponse = {
  error: {
    code: string;
    message: string;
    details: Record<string, unknown>;
  };
  request_id: string;
};

function getErrorMessage(payload: unknown): string {
  if (payload && typeof payload === "object" && "error" in payload) {
    const error = (payload as ApiErrorResponse).error;
    if (typeof error?.message === "string" && error.message.trim()) {
      return error.message;
    }
  }
  return "We couldn't verify your email. The link may be invalid or expired.";
}

export function VerifyEmailContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!token?.trim()) {
      setStatus("error");
      setMessage("The verification link is missing its token. Please use the link from your email.");
      return;
    }

    const controller = new AbortController();

    async function verifyEmail() {
      try {
        const response = await fetch("https://api.fonitas.com/api/v1/auth/verify-email", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
          signal: controller.signal,
        });

        const payload: unknown = await response.json().catch(() => null);
        if (!response.ok) {
          setStatus("error");
          setMessage(getErrorMessage(payload));
          return;
        }

        const result = payload as VerifyEmailResponse;
        if (!result.data?.primary_email?.is_verified) {
          setStatus("error");
          setMessage("The server did not confirm that this email address is verified. Please try again.");
          return;
        }

        setStatus("success");
        setMessage("Your email address has been verified successfully.");
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") return;
        setStatus("error");
        setMessage("Unable to connect to Fonitas. Check your connection and refresh to try again.");
      }
    }

    void verifyEmail();
    return () => controller.abort();
  }, [token]);

  return (
    <div className="text-center">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
        {status === "loading" ? (
          <span aria-hidden="true" className="h-7 w-7 animate-spin rounded-full border-2 border-white/20 border-t-[#ff5a1f]" />
        ) : status === "success" ? (
          <span aria-hidden="true" className="text-3xl text-emerald-400">✓</span>
        ) : (
          <span aria-hidden="true" className="text-3xl text-red-400">!</span>
        )}
      </div>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#ff5a1f]">Email verification</p>
      <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        {status === "loading" ? "Verifying your email" : status === "success" ? "Email verified" : "Verification failed"}
      </h1>
      <p role={status === "error" ? "alert" : "status"} aria-live="polite" className="mx-auto mt-4 max-w-md text-sm leading-6 text-white/55">
        {status === "loading" ? "Please wait while we confirm your email address." : message}
      </p>
      {status !== "loading" && (
        <Link href={status === "success" ? "/login" : "/register"} className="mt-8 inline-flex rounded-full bg-[#ff5a1f] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#ff7a3d]">
          {status === "success" ? "Continue to sign in ↗" : "Back to registration"}
        </Link>
      )}
    </div>
  );
}
