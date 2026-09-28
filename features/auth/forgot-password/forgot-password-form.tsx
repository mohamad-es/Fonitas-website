"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const inputClass = "mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white outline-none transition placeholder:text-white/25 focus:border-[#ff5a1f]/60";

type ApiErrorResponse = { error?: { message?: string } };

function apiMessage(payload: unknown) {
  if (payload && typeof payload === "object" && "error" in payload) {
    const message = (payload as ApiErrorResponse).error?.message;
    if (typeof message === "string" && message.trim()) return message;
  }
  return "We couldn't process the request. Please try again.";
}

function ForgotPasswordFormContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token")?.trim() ?? "";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = window.setTimeout(() => setCooldown((value) => Math.max(0, value - 1)), 1000);
    return () => window.clearTimeout(timer);
  }, [cooldown]);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending" || cooldown > 0) return;
    setStatus("sending");
    setMessage("");

    try {
      if (token) {
        if (password.length < 8) {
          setStatus("error");
          setMessage("Your password must be at least 8 characters long.");
          return;
        }
        if (password !== confirmPassword) {
          setStatus("error");
          setMessage("The passwords do not match.");
          return;
        }

        const response = await fetch("https://api.fonitas.com/api/v1/auth/password/reset", {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify({ token, password }),
        });

        if (response.status === 204 || response.ok) {
          setStatus("sent");
          setMessage("Your password has been updated and all sessions have been signed out. You can now sign in with your new password.");
          setPassword("");
          setConfirmPassword("");
        } else {
          const payload: unknown = await response.json().catch(() => null);
          setStatus("error");
          if (response.status === 429) {
            const retryAfter = Number(response.headers.get("Retry-After"));
            setMessage(retryAfter > 0
              ? `Too many attempts. Please try again in ${retryAfter} seconds.`
              : "Too many attempts. Please wait before trying again.");
          } else if (response.status === 401 || response.status === 422) {
            setMessage(apiMessage(payload) || "This reset link may be invalid or expired. Request a new one.");
          } else {
            setMessage(apiMessage(payload));
          }
        }
      } else {
        const response = await fetch("https://api.fonitas.com/api/v1/auth/password/forgot", {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify({ tenant_slug: "fonitas", email: email.trim() }),
        });
        if (response.status === 204 || response.ok) {
          setStatus("sent");
          setMessage("If an account exists for this email, a password reset link will be sent shortly.");
          setCooldown(120);
        } else {
          const payload: unknown = await response.json().catch(() => null);
          setStatus("error");
          setMessage(response.status === 429 ? "Too many requests. Please wait before trying again." : apiMessage(payload));
          if (response.status === 429) {
            const retryAfter = Number(response.headers.get("Retry-After"));
            setCooldown(Number.isFinite(retryAfter) && retryAfter > 0 ? retryAfter : 120);
          }
        }
      }
    } catch {
      setStatus("error");
      setMessage("Unable to connect to Fonitas. Check your connection and try again.");
    }
  }

  if (token) {
    return (
      <form onSubmit={submit} className="space-y-5">
        {message && <div role={status === "error" ? "alert" : "status"} aria-live="polite" className={`rounded-2xl border px-4 py-3 text-sm leading-6 ${status === "error" ? "border-red-500/30 bg-red-500/10 text-red-300" : "border-[#ff5a1f]/30 bg-[#ff5a1f]/10 text-orange-200"}`}>{message}</div>}
        {status !== "sent" && <>
          <label className="block text-sm text-white/70" htmlFor="new-password">New password
            <input id="new-password" type="password" autoComplete="new-password" required minLength={8} maxLength={128} value={password} onChange={(event) => setPassword(event.target.value)} placeholder="At least 8 characters" className={inputClass} />
          </label>
          <label className="block text-sm text-white/70" htmlFor="confirm-password">Confirm new password
            <input id="confirm-password" type="password" autoComplete="new-password" required minLength={8} maxLength={128} value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} placeholder="Re-enter your new password" className={inputClass} />
          </label>
          <button type="submit" disabled={status === "sending" || !password || !confirmPassword} className="w-full rounded-full bg-[#ff5a1f] px-5 py-3.5 text-sm font-semibold text-black transition hover:bg-[#ff7a3d] disabled:cursor-not-allowed disabled:opacity-60">
            {status === "sending" ? "Updating password..." : "Reset password ↗"}
          </button>
        </>}
      </form>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-5">
      {message && <div role={status === "error" ? "alert" : "status"} aria-live="polite" className={`rounded-2xl border px-4 py-3 text-sm leading-6 ${status === "error" ? "border-red-500/30 bg-red-500/10 text-red-300" : "border-[#ff5a1f]/30 bg-[#ff5a1f]/10 text-orange-200"}`}>{message}</div>}
      <label className="block text-sm text-white/70" htmlFor="forgot-email">Email address
        <input id="forgot-email" type="email" autoComplete="email" required maxLength={254} value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@company.com" className={inputClass} />
      </label>
      <button type="submit" disabled={!email.trim() || status === "sending" || cooldown > 0} className="w-full rounded-full bg-[#ff5a1f] px-5 py-3.5 text-sm font-semibold text-black transition hover:bg-[#ff7a3d] disabled:cursor-not-allowed disabled:opacity-60">
        {status === "sending" ? "Sending..." : cooldown > 0 ? `Request sent · try again in ${Math.floor(cooldown / 60)}:${String(cooldown % 60).padStart(2, "0")}` : "Send password reset email ↗"}
      </button>
      {status === "sent" && <p className="text-xs leading-5 text-white/45">For security, we show the same confirmation whether or not the email is registered.</p>}
    </form>
  );
}

export function ForgotPasswordForm() {
  return <Suspense fallback={<div className="text-sm text-white/50">Loading password recovery...</div>}><ForgotPasswordFormContent /></Suspense>;
}
