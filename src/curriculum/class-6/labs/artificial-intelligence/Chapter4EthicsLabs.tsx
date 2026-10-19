"use client";

import Link from "next/link";
import { useState } from "react";
import { PostButton } from "@/features/studio/class-wall/PostButton";
import { useNote } from "@/lib/learning/work-store";
import { footprintItems, inbox, inboxChoices, passwordChecks } from "@/curriculum/class-6/studio/ai-practice";

/** Class 6 · AI Chapter 4 (Ethics and Digital Responsibility) labs. */

/* ---------------- AI 4 · Step 1 · Responsible use ---------------- */

// From the handbook's ethics examples (SH p. 76); the online twins are practice.
const CHOICES = [
  { situation: "You find a lost pencil box in class.", good: "Return it to the owner", bad: "Keep it" },
  { situation: "Your friend is upset.", good: "Try to help", bad: "Laugh at them" },
  { situation: "Online: you find a great essay for your project.", good: "Write it in your own words and credit the source", bad: "Copy it and change a few words" },
  { situation: "Online: someone in your class group is being teased.", good: "Be kind, and tell a teacher", bad: "Forward the joke" },
];

export function ResponsibleLab() {
  const [p, setP] = useState<Record<number, "good" | "bad">>({});
  return (
    <section className="s-card" aria-labelledby="ethics-choices">
      <p className="lbl">What would you do? · offline and online</p>
      <h2 id="ethics-choices" className="s-title" style={{ fontSize: 26 }}>
        Same rules, new place
      </h2>
      <ul style={{ listStyle: "none", margin: "8px 0 0", padding: 0 }}>
        {CHOICES.map((c, i) => (
          <li key={c.situation} style={{ borderTop: "1px solid var(--line)", padding: "12px 0" }}>
            <p className="sm" style={{ fontWeight: 700 }}>
              {c.situation}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8 }} role="group" aria-label={c.situation}>
              {/* alternate the order so the right answer isn't always first */}
              {(i % 2 ? (["bad", "good"] as const) : (["good", "bad"] as const)).map((k) => (
                <button key={k} type="button" className="tool-btn" aria-pressed={p[i] === k} onClick={() => setP((x) => ({ ...x, [i]: k }))} style={p[i] === k ? { background: k === "good" ? "var(--green)" : "var(--ink)", color: "#fff" } : undefined}>
                  {c[k]}
                </button>
              ))}
            </div>
            {p[i] && (
              <p className="sm" role="status" style={{ marginTop: 6, fontWeight: 700 }}>
                {p[i] === "good" ? "That’s the ethical choice: honest, respectful, responsible." : "Think again: would that be honest and respectful?"}
              </p>
            )}
          </li>
        ))}
      </ul>
      <p className="sm muted" style={{ marginTop: 8 }}>
        The first two are the handbook’s examples; the online ones are Makeracle practice.
      </p>
    </section>
  );
}

/* ---------------- AI 4 · Step 2 · Arjun's inbox ---------------- */

export function InboxLab() {
  const [open, setOpen] = useState(inbox[0].id);
  const [sorted, setSorted] = useState<Record<string, string>>({});
  const [pw, setPw] = useState("arjun2013");
  const msg = inbox.find((m) => m.id === open)!;
  const checked = inbox.filter((m) => sorted[m.id] === m.answer).length;
  const passed = passwordChecks.filter((c) => c.test(pw)).length;
  const strength = passed <= 2 ? "Weak" : passed <= 4 ? "Getting there" : "Strong";

  return (
    <>
      <div className="lab-grid lab-grid-inbox">
        <section className="s-card" aria-labelledby="inbox-title">
          <p id="inbox-title" className="sm muted">
            Arjun’s inbox · {checked} of {inbox.length} checked
          </p>
          <ul style={{ listStyle: "none", margin: "8px 0 0", padding: 0, display: "grid", gap: 6 }}>
            {inbox.map((m) => (
              <li key={m.id}>
                <button type="button" aria-current={m.id === open ? "true" : undefined} onClick={() => setOpen(m.id)} style={{ width: "100%", textAlign: "left", border: 0, borderRadius: 6, padding: 10, minHeight: 56, cursor: "pointer", font: "inherit", background: m.id === open ? "var(--ink)" : "var(--ground)", color: m.id === open ? "#fff" : "var(--ink)" }}>
                  <span className="sm" style={{ display: "flex", justifyContent: "space-between", gap: 6 }}>
                    <span>{m.from}</span>
                    <span>{sorted[m.id] === m.answer ? "Done" : "New"}</span>
                  </span>
                  <span className="sm" style={{ fontWeight: 700 }}>
                    {m.subject}
                  </span>
                </button>
              </li>
            ))}
          </ul>
          <p className="sm muted" style={{ marginTop: 8 }}>
            The first two are from Arjun’s story in the handbook; the others are practice.
          </p>
        </section>
        <section className="s-card" aria-labelledby="msg-title" aria-live="polite">
          <p className="sm muted">From: {msg.sender}</p>
          <h2 id="msg-title" className="s-title" style={{ fontSize: 26, marginTop: 4 }}>
            {msg.subject}
          </h2>
          <p className="body" style={{ background: "var(--ground)", borderRadius: 6, padding: 14, marginTop: 10 }}>
            {msg.body}
          </p>
          <p className="sm" style={{ fontWeight: 700, marginTop: 12 }}>
            What should Arjun do with this?
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8 }} role="group" aria-label="What should Arjun do?">
            {inboxChoices.map((c) => (
              <button key={c.id} type="button" className="tool-btn" aria-pressed={sorted[msg.id] === c.id} onClick={() => setSorted((s) => ({ ...s, [msg.id]: c.id }))} style={sorted[msg.id] === c.id ? { background: c.id === msg.answer ? "var(--green)" : "var(--ink)", color: "#fff" } : undefined}>
                {c.label}
              </button>
            ))}
          </div>
          {sorted[msg.id] && (
            <p className="sm" role="status" style={{ marginTop: 8, fontWeight: 700 }}>
              {sorted[msg.id] === msg.answer ? `Right. ${msg.why}` : "Not yet. Look at who sent it and what it asks for."}
            </p>
          )}
        </section>
      </div>

      <section className="s-card-ink" style={{ marginTop: 16 }} aria-labelledby="pw-title">
        <p className="lbl">Password lab · never type a real password here</p>
        <h2 id="pw-title" className="s-title" style={{ fontSize: 26 }}>
          Make a strong password
        </h2>
        <div className="fld" style={{ marginTop: 10 }}>
          <label htmlFor="pw" style={{ color: "#fff" }}>
            Try a practice password
          </label>
          <input id="pw" type="text" autoComplete="off" spellCheck={false} value={pw} onChange={(e) => setPw(e.target.value)} style={{ background: "var(--paper)", color: "var(--ink)", paddingInline: 12, borderRadius: 6 }} />
        </div>
        <div className="levels" style={{ marginTop: 12 }} role="img" aria-label={`Strength: ${strength}, ${passed} of ${passwordChecks.length} checks`}>
          {passwordChecks.map((_, i) => (
            <span key={i} className={i < passed ? "on" : undefined} style={{ background: i < passed ? undefined : "var(--ink-2)" }} />
          ))}
        </div>
        <p className="s-title" style={{ fontSize: 28, color: "var(--yellow)", marginTop: 10 }} aria-live="polite">
          {strength}
        </p>
        <ul style={{ listStyle: "none", margin: "8px 0 0", padding: 0 }}>
          {passwordChecks.map((c) => (
            <li key={c.id} className="sm" style={{ padding: "4px 0", color: c.test(pw) ? "#fff" : "var(--muted-on-ink)" }}>
              {c.test(pw) ? "✓" : "○"} {c.label}
            </li>
          ))}
        </ul>
        <p className="sm" style={{ marginTop: 8, color: "var(--muted-on-ink)" }}>
          Handbook tip: keep changing your password, and never share it. Nothing you type here is saved.
        </p>
      </section>
    </>
  );
}

/* ---------------- AI 4 · Step 3 · Online dangers ---------------- */

export function PracticesLab({ practices }: { practices: { term: string; text: string; steps: string[] }[] }) {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section className="s-card" aria-labelledby="practices">
      <p className="lbl">From the handbook · tap a card to see how to stop it</p>
      <h2 id="practices" className="s-title" style={{ fontSize: 26 }}>
        Unethical practices online
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 10, marginTop: 10 }}>
        {practices.map((p) => {
          const on = open === p.term;
          return (
            <div key={p.term} className={on ? "s-card-ink" : "s-card-grey"}>
              <button type="button" aria-expanded={on} onClick={() => setOpen(on ? null : p.term)} style={{ background: "transparent", border: 0, padding: 0, textAlign: "left", font: "inherit", color: "inherit", cursor: "pointer", minHeight: 44, width: "100%" }}>
                <span className="s-title" style={{ fontSize: 20, display: "block" }}>
                  {p.term}
                </span>
                <span className="sm">{p.text}</span>
              </button>
              {on && (
                <ul className="q-details" style={{ color: "#fff" }}>
                  {p.steps.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ---------------- AI 4 · Step 4 · Footprints ---------------- */

export function FootprintsLab({ pledges }: { pledges: string[] }) {
  const [p, setP] = useState<Record<number, string>>({});
  const [kept, setKept] = useNote("ai4-pledge");
  const keptList = kept ? kept.split("|") : [];
  return (
    <>
      <div className="lab-grid">
        <section className="s-card" aria-labelledby="fp-title">
          <p className="lbl">Digital footprints</p>
          <h2 id="fp-title" className="s-title" style={{ fontSize: 26 }}>
            Active or passive?
          </h2>
          <ul style={{ listStyle: "none", margin: "8px 0 0", padding: 0 }}>
            {footprintItems.map((f, i) => (
              <li key={f.text} style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 8, borderTop: "1px solid var(--line)", padding: "10px 0" }}>
                <span className="sm">{f.text}</span>
                <span style={{ display: "flex", gap: 6, alignItems: "center" }} role="group" aria-label={`${f.text}: active or passive`}>
                  {(["Active", "Passive"] as const).map((o) => (
                    <button key={o} type="button" className="tool-btn" aria-pressed={p[i] === o} onClick={() => setP((x) => ({ ...x, [i]: o }))} style={p[i] === o ? { background: o === f.answer ? "var(--green)" : "var(--ink)", color: "#fff" } : undefined}>
                      {o}
                    </button>
                  ))}
                  <span className="sm" style={{ minWidth: 56, fontWeight: 700 }}>
                    {p[i] ? (p[i] === f.answer ? "Right" : "Not yet") : ""}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </section>
        <section className="s-card-ink" aria-labelledby="pledge">
          <p className="lbl">Good digital behaviour · from the handbook</p>
          <h2 id="pledge" className="s-title" style={{ fontSize: 26 }}>
            My online promises
          </h2>
          <ul style={{ listStyle: "none", margin: "8px 0 0", padding: 0 }}>
            {pledges.map((t) => (
              <li key={t}>
                <label className="check" style={{ padding: "8px 0", minHeight: 44, alignItems: "center", color: "#fff" }}>
                  <input type="checkbox" checked={keptList.includes(t)} onChange={(e) => setKept((e.target.checked ? [...keptList, t] : keptList.filter((x) => x !== t)).join("|"))} />
                  <span className="sm">{t}</span>
                </label>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <section className="s-card-yellow row-between" style={{ marginTop: 16, alignItems: "center" }}>
        <div style={{ maxWidth: 620 }}>
          <p className="lbl">Make · for Project 2 · Cyber Suraksha Squad</p>
          <p className="s-title" style={{ fontSize: 24 }}>
            A “Think before you click” comic strip
          </p>
          <p className="sm" style={{ marginTop: 6 }}>
            Draw Arjun’s story in four boxes, with the safe choice in the last box. Share it with your squad.
          </p>
        </div>
        <span style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <PostButton className="btn btn-ink" label="Tell the class wall" post={() => ({ title: "Think before you click", body: "I’m making a comic strip of Arjun’s story for Project 2.", kind: "Comic plan", from: "AI 4 · Digital footprints" })} />
          <Link href="/studio/projects/cyber-suraksha" className="btn btn-ghost">
            Open Project 2
          </Link>
        </span>
      </section>
    </>
  );
}
