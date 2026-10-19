"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type Pic = { id: string; initial: string; label: string; tone: string; fg: string };

/**
 * DEMO sign-in (UI only — the backend wires real auth).
 * Students: class code + picture + 4-digit PIN, no email or phone.
 * Teachers and parents: phone + one-time password.
 */
export function SignInForm({ pictures, demoCode }: { pictures: Pic[]; demoCode: string }) {
  const router = useRouter();
  const [who, setWho] = useState<"student" | "teacher" | "parent">("student");
  const [code, setCode] = useState(demoCode);
  const [pic, setPic] = useState<string | null>(null);
  const [pin, setPin] = useState("");
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [msg, setMsg] = useState("");

  const press = (k: string) => setPin((p) => (k === "clear" ? "" : k === "back" ? p.slice(0, -1) : p.length < 4 ? p + k : p));
  const phoneOk = /^[6-9]\d{9}$/.test(phone.replace(/\D/g, "").replace(/^91(?=\d{10}$)/, ""));

  return (
    <div>
      <h1 className="s-title" style={{ fontSize: 36 }}>
        Sign in
      </h1>
      <div className="toggles" role="tablist" aria-label="I am a" style={{ background: "var(--paper)", borderRadius: 999, padding: 4, margin: "14px 0 18px", display: "flex" }}>
        {(["student", "teacher", "parent"] as const).map((w) => (
          <button key={w} type="button" role="tab" aria-selected={who === w} className="tog" onClick={() => (setWho(w), setMsg(""))} style={{ flex: 1, background: who === w ? "var(--ink)" : "transparent", color: who === w ? "#fff" : "var(--ink)", textTransform: "capitalize" }}>
            {w}
          </button>
        ))}
      </div>

      {who === "student" ? (
        <form
          role="tabpanel"
          aria-label="Student sign-in"
          onSubmit={(e) => {
            e.preventDefault();
            if (code.trim().toUpperCase() !== demoCode) return setMsg("That class code isn’t right. Check with your teacher.");
            if (!pic) return setMsg("Find your picture.");
            if (pin.length !== 4) return setMsg("Enter your 4-digit PIN.");
            router.push("/studio");
          }}
        >
          <div className="fld">
            <label htmlFor="code">Class code (from your teacher)</label>
            <input id="code" value={code} onChange={(e) => setCode(e.target.value)} autoComplete="off" autoCapitalize="characters" style={{ background: "var(--paper)", border: "1.5px solid var(--ink)", borderRadius: 6, paddingInline: 12 }} />
          </div>
          <fieldset className="fld" style={{ marginTop: 16 }}>
            <legend>Find your picture</legend>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 8 }}>
              {pictures.map((p) => (
                <button key={p.id} type="button" aria-pressed={pic === p.id} aria-label={p.label} onClick={() => setPic(p.id)} style={{ width: 48, height: 48, borderRadius: 999, border: 0, cursor: "pointer", fontWeight: 700, background: p.tone, color: p.fg, outline: pic === p.id ? "3px solid var(--red-deep)" : undefined, outlineOffset: 2 }}>
                  {p.initial}
                </button>
              ))}
            </div>
          </fieldset>
          <p className="sm" style={{ fontWeight: 700, marginTop: 16 }} aria-live="polite">
            Your 4-digit PIN · <span aria-label={`${pin.length} of 4 digits entered`}>{"●".repeat(pin.length) + "○".repeat(4 - pin.length)}</span>
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 72px)", gap: 6, marginTop: 8 }} role="group" aria-label="PIN keypad">
            {["1", "2", "3", "4", "5", "6", "7", "8", "9", "clear", "0", "back"].map((k) => (
              <button key={k} type="button" onClick={() => press(k)} aria-label={k === "clear" ? "Clear PIN" : k === "back" ? "Delete last digit" : `Digit ${k}`} style={{ height: 52, border: 0, borderRadius: 6, background: "transparent", fontSize: k.length > 1 ? 16 : 22, fontWeight: 700, cursor: "pointer", textTransform: "capitalize" }}>
                {k}
              </button>
            ))}
          </div>
          {msg && (
            <p className="sm" role="alert" style={{ fontWeight: 700, marginTop: 8 }}>
              {msg}
            </p>
          )}
          <button type="submit" className="btn btn-red" style={{ marginTop: 12 }}>
            Open my Studio <span aria-hidden="true">→</span>
          </button>
          <p className="sm muted" style={{ marginTop: 10 }}>
            Forgot your PIN? Ask your teacher to reset it from the Teacher Hub.
          </p>
        </form>
      ) : (
        <form
          role="tabpanel"
          aria-label={`${who} sign-in`}
          onSubmit={(e) => {
            e.preventDefault();
            if (!otpSent) {
              if (!phoneOk) return setMsg("Please enter a 10-digit mobile number.");
              setOtpSent(true);
              return setMsg("");
            }
            if (!/^\d{6}$/.test(otp)) return setMsg("Enter the 6-digit code.");
            router.push(who === "teacher" ? "/teacher" : "/parent");
          }}
        >
          <div className="fld">
            <label htmlFor="phone">Mobile number</label>
            <input id="phone" type="tel" inputMode="tel" autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="98xxx xxxxx" readOnly={otpSent} style={{ background: "var(--paper)", border: "1.5px solid var(--ink)", borderRadius: 6, paddingInline: 12 }} />
          </div>
          {otpSent && (
            <div className="fld" style={{ marginTop: 14 }}>
              <label htmlFor="otp">6-digit code sent by SMS</label>
              <input id="otp" inputMode="numeric" autoComplete="one-time-code" maxLength={6} value={otp} onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))} style={{ background: "var(--paper)", border: "1.5px solid var(--ink)", borderRadius: 6, paddingInline: 12, letterSpacing: 6 }} />
              <span className="hint">Demo: no SMS is sent. Any 6 digits continue.</span>
            </div>
          )}
          {msg && (
            <p className="sm" role="alert" style={{ fontWeight: 700, marginTop: 8 }}>
              {msg}
            </p>
          )}
          <button type="submit" className="btn btn-red" style={{ marginTop: 16 }}>
            {otpSent ? "Verify and continue" : "Send code"} <span aria-hidden="true">→</span>
          </button>
          {otpSent && (
            <button type="button" className="btn btn-ghost" style={{ marginTop: 16, marginLeft: 8 }} onClick={() => (setOtpSent(false), setOtp(""))}>
              Change number
            </button>
          )}
        </form>
      )}
    </div>
  );
}
