"use client";

import { useState } from "react";
import { weatherDiary, weatherSteps } from "@/curriculum/class-6/studio/ai-practice";

/** Class 6 · AI Chapter 3 (Simple Pattern Recognition and Decision Making) labs. */

/* ---------------- AI 3 · Step 1 · Patterns ---------------- */

// PRACTICE, NOT FROM HANDBOOK — built on the handbook's own examples (2, 4, 6, 8; days; the basketball story).
const SPOT = [
  { prompt: "2, 4, 6, 8, … what comes next?", options: ["9", "10", "12"], answer: "10", why: "The rule is “add 2”." },
  { prompt: "Monday, Tuesday, Wednesday, … what comes next?", options: ["Friday", "Thursday", "Sunday"], answer: "Thursday", why: "Days follow a cycle that repeats every week." },
  { prompt: "You score more on game day when you practise every day. What should you do before Friday?", options: ["Wait until Friday", "Practise a little every day", "Guess"], answer: "Practise a little every day", why: "The pattern tells you what works, so you don’t need to guess." },
];

export function PatternsLab({ methods }: { methods: { term: string; text: string }[] }) {
  const [p, setP] = useState<Record<number, string>>({});
  return (
    <div className="lab-grid">
      <section className="s-card" aria-labelledby="spot-pat">
        <p className="lbl">Spot the pattern · practice built on the handbook’s examples</p>
        <h2 id="spot-pat" className="s-title" style={{ fontSize: 26 }}>
          What comes next?
        </h2>
        <ol style={{ listStyle: "none", margin: "8px 0 0", padding: 0 }}>
          {SPOT.map((s, i) => (
            <li key={s.prompt} style={{ borderTop: "1px solid var(--line)", padding: "12px 0" }}>
              <p className="sm" style={{ fontWeight: 700 }}>
                {i + 1}. {s.prompt}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8 }} role="group" aria-label={`Question ${i + 1} options`}>
                {s.options.map((o) => (
                  <button key={o} type="button" className="tool-btn" aria-pressed={p[i] === o} onClick={() => setP((x) => ({ ...x, [i]: o }))} style={p[i] === o ? { background: o === s.answer ? "var(--green)" : "var(--ink)", color: "#fff" } : undefined}>
                    {o}
                  </button>
                ))}
              </div>
              {p[i] && (
                <p className="sm" role="status" style={{ marginTop: 6, fontWeight: 700 }}>
                  {p[i] === s.answer ? `Right. ${s.why}` : "Not yet. Look for the rule."}
                </p>
              )}
            </li>
          ))}
        </ol>
      </section>
      <section className="s-card-ink" aria-labelledby="methods">
        <p className="lbl">From the handbook</p>
        <h2 id="methods" className="s-title" style={{ fontSize: 26 }}>
          Ways to find patterns
        </h2>
        <dl style={{ margin: "8px 0 0" }}>
          {methods.map((m) => (
            <div key={m.term} style={{ borderTop: "1px solid var(--ink-2)", padding: "10px 0" }}>
              <dt style={{ fontWeight: 700, color: "var(--yellow)" }}>{m.term}</dt>
              <dd className="sm" style={{ margin: "2px 0 0" }}>
                {m.text}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}

/* ---------------- AI 3 · Step 2 · Weather diary ---------------- */

export function WeatherLab() {
  const [pick, setPick] = useState<Record<string, number>>({});
  const max = 35;
  return (
    <div className="lab-grid">
      <section className="s-card-ink" aria-labelledby="wd">
        <p id="wd" className="sm" style={{ color: "var(--muted-on-ink)" }}>
          Our class diary · morning (grey) vs afternoon (red) temperature in °C · practice data
        </p>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 14, height: 220, borderBottom: "1.5px solid var(--muted-on-ink)", marginTop: 20 }} role="img" aria-label={`Temperatures: ${weatherDiary.map((d) => `${d.day} morning ${d.am}, afternoon ${d.pm}`).join("; ")}`}>
          {weatherDiary.map((d) => (
            <div key={d.day} style={{ flex: 1, display: "flex", gap: 4, alignItems: "flex-end", height: "100%" }}>
              {[
                [d.am, "var(--muted-on-ink)", "var(--ink)"],
                [d.pm, "var(--red-deep)", "#fff"],
              ].map(([v, bg, fg], k) => (
                <span key={k} style={{ flex: 1, height: `${(Number(v) / max) * 100}%`, background: String(bg), color: String(fg), borderRadius: "3px 3px 0 0", fontSize: 11, fontWeight: 700, textAlign: "center", paddingTop: 4 }}>
                  {v}
                </span>
              ))}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 14, marginTop: 8 }}>
          {weatherDiary.map((d) => (
            <span key={d.day} className="sm" style={{ flex: 1, textAlign: "center" }}>
              {d.day} · {d.sky}
            </span>
          ))}
        </div>
      </section>
      <div className="stack" style={{ gap: 10 }}>
        {weatherSteps.map((s) => (
          <section key={s.id} className="s-card" aria-labelledby={`ws-${s.id}`}>
            <p className="lbl">{s.label}</p>
            <p id={`ws-${s.id}`} className="sm" style={{ fontWeight: 700 }}>
              {s.prompt}
            </p>
            <div style={{ display: "grid", gap: 6, marginTop: 8 }} role="group" aria-label={s.label}>
              {s.options.map((o, i) => (
                <button key={o.text} type="button" className="opt" aria-pressed={pick[s.id] === i} onClick={() => setPick((p) => ({ ...p, [s.id]: i }))} style={pick[s.id] === i ? { background: o.ok ? "var(--green)" : "var(--ink)", color: "#fff", boxShadow: "none" } : undefined}>
                  {o.text}
                </button>
              ))}
            </div>
            {pick[s.id] !== undefined && (
              <p className="sm" role="status" style={{ marginTop: 6, fontWeight: 700 }}>
                {s.options[pick[s.id]].why}
              </p>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
