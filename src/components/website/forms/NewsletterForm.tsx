"use client";

import { useState } from "react";

/** Compact newsletter sign-up for the dark footer. Posts to /api/leads as "newsletter". */
export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "ok" | "err">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "newsletter", values: { email }, source: "footer" }),
      });
      setState(res.ok ? "ok" : "err");
    } catch {
      setState("err");
    }
  }

  return (
    <form onSubmit={submit}>
      <label htmlFor="nl-email" className="lbl" style={{ color: "#9a9a9a", display: "block" }}>
        Newsletter — CBSE explainers, project stories
      </label>
      <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
        <input
          id="nl-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@school.edu.in"
          style={{
            flex: 1,
            minWidth: 0,
            minHeight: 48,
            padding: "0 16px",
            borderRadius: 999,
            border: "1.5px solid #6b6b6b",
            background: "transparent",
            color: "#fff",
            fontSize: 13,
          }}
        />
        <button type="submit" className="btn" disabled={state === "sending"}>
          Join
        </button>
      </div>
      <p className="sm" role="status" style={{ marginTop: 8, color: state === "err" ? "#ff8a97" : "#bdbdbd", minHeight: 18 }}>
        {state === "ok" ? "You're on the list." : state === "err" ? "Couldn't sign you up — check the email." : ""}
      </p>
    </form>
  );
}
