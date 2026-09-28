"use client";

import { useState } from "react";

const inputClass = "mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white outline-none transition placeholder:text-white/25 focus:border-[#ff5a1f]/60";

type ApiErrorResponse = { error?: { message?: string } };

function apiMessage(payload: unknown) {
  if (payload && typeof payload === "object" && "error" in payload) {
    const message = (payload as ApiErrorResponse).error?.message;
    if (typeof message === "string" && message.trim()) return message;
  }
  return "We couldn't process the request. Please try again.";
}

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");
  const [cooldown, setCooldown] = useState(0);

  useState(() => {
    return undefined;
  });

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending" || cooldown > 0) return;
    setStatus("sending");
    setMessage("");
    try {
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
    } catch {
      setStatus("error");
      setMessage("Unable to connect to Fonitas. Check your connection and try again.");
    }
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
