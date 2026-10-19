"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Figure } from "@/components/studio/Figure";
import { useValue } from "@/lib/class6/store";
import type { Figure as Fig, CTOption, OptionKey } from "@/content/class6";
import type { Observation } from "@/lib/types";

type Props = {
  context: string;
  prompt: string;
  details?: string[];
  figure?: Fig;
  options: CTOption[];
  answer: OptionKey[];
  /** Teacher Handbook solution, shown only at "Reveal & reflect". */
  solution: string[];
  prompts: string[];
  watchFor?: string[];
  responses?: number[];
  prev?: string;
  next?: string;
  students: { id: string; name: string }[];
};

const STEPS = [
  { id: "think", label: "1 · Think alone", seconds: 120, title: "Think on your own.", line: "No talking for two minutes. Try it on paper first." },
  { id: "pair", label: "2 · Pair & share", seconds: 180, title: "Pair and share.", line: "Explain your rule to your partner. Did you get the same answer?" },
  { id: "discuss", label: "3 · Class discussion", seconds: 300, title: "Class discussion.", line: "Who solved it a different way? What did you try first?" },
  { id: "reveal", label: "4 · Reveal & reflect", seconds: 0, title: "Reveal and reflect.", line: "The Teacher Handbook’s way, step by step." },
];

const mmss = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

export function Class6Projector(p: Props) {
  const [step, setStep] = useState(0);
  const [left, setLeft] = useState(STEPS[0].seconds);
  const [running, setRunning] = useState(false);
  const [notes, setNotes] = useState(true);
  const [noting, setNoting] = useState(false);
  const [who, setWho] = useState(p.students[0]?.id ?? "");
  const [text, setText] = useState("");
  const [, setObs] = useValue<Observation[]>("teacher-observations", []);
  const [saved, setSaved] = useState("");
  const total = (p.responses ?? []).reduce((a, b) => a + b, 0);
  const s = STEPS[step];
  const reveal = s.id === "reveal";

  // One tick per second while running; the timer stops itself at 0.
  useEffect(() => {
    if (!running || left <= 0) return;
    const t = setTimeout(() => setLeft((x) => Math.max(0, x - 1)), 1000);
    return () => clearTimeout(t);
  }, [running, left]);
  const ticking = running && left > 0;

  const go = (i: number) => {
    setStep(i);
    setLeft(STEPS[i].seconds);
    setRunning(false);
  };

  return (
    <main id="main" className="studio-page dark" style={{ padding: "18px var(--gutter) 40px" }}>
      <div className="row-between" style={{ alignItems: "center" }}>
        <Link href="/teacher" className="back-link" style={{ color: "#fff" }}>
          <span aria-hidden="true">←</span> Exit projector mode
        </Link>
        <nav aria-label="Lesson steps">
          <ol className="stepbar">
            {STEPS.map((x, i) => (
              <li key={x.id}>
                <button type="button" onClick={() => go(i)} aria-current={i === step ? "step" : undefined} className="tool-btn" style={{ background: i === step ? "var(--red-deep)" : "var(--ink-2)", color: "#fff" }}>
                  {x.label}
                </button>
              </li>
            ))}
          </ol>
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {s.seconds > 0 && (
            <>
              <span className="s-title" style={{ fontSize: 40, color: "var(--yellow)" }} role="timer" aria-live="off" aria-label={`${mmss(left)} left`}>
                {mmss(left)}
              </span>
              <button type="button" className="tool-btn" style={{ background: "var(--ink-2)", color: "#fff" }} onClick={() => {
                  if (left === 0) setLeft(s.seconds);
                  setRunning(left === 0 ? true : !ticking);
                }}>
                {ticking ? "Pause" : left === 0 ? "Restart" : "Start"}
              </button>
            </>
          )}
        </div>
      </div>

      <div className="lab-grid" style={{ marginTop: 18, gridTemplateColumns: notes ? undefined : "1fr" }}>
        <div>
          <p className="sm" style={{ color: "var(--muted-on-ink)" }}>{p.context}</p>
          <h1 style={{ fontSize: "clamp(24px, 2.6vw, 38px)", lineHeight: 1.25, margin: "8px 0 0", fontWeight: 700 }}>{p.prompt}</h1>
          {p.details && (
            <ul className="q-details" style={{ color: "#e6e6e6", fontSize: 18 }}>
              {p.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          )}
          {p.figure && (
            <div style={{ marginTop: 12 }} className="s-card-ink">
              <Figure figure={p.figure} />
            </div>
          )}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: 10, marginTop: 16 }}>
            {p.options.map((o, i) => {
              const right = reveal && p.answer.includes(o.key);
              const n = p.responses?.[i];
              return (
                <div key={o.key} style={{ background: right ? "var(--green)" : "var(--ink-2)", borderRadius: 6, padding: 12 }}>
                  <p className="s-title" style={{ fontSize: 26 }}>
                    {o.key.toUpperCase()}) {o.text ?? ""}
                  </p>
                  {!o.text && o.figure && <p className="sm">{o.figure.alt}</p>}
                  {p.responses && (
                    <>
                      <span className="pbar" style={{ display: "block", marginTop: 8, background: "var(--ink)" }}>
                        <span style={{ width: `${total ? ((n ?? 0) / total) * 100 : 0}%` }} />
                      </span>
                      <p className="sm" style={{ marginTop: 6 }}>{n} students</p>
                    </>
                  )}
                  {right && <p className="sm" style={{ fontWeight: 700, marginTop: 6 }}>Correct</p>}
                </div>
              );
            })}
          </div>
          {!p.responses && <p className="sm" style={{ color: "var(--muted-on-ink)", marginTop: 8 }}>Live answers appear here as students answer in the Studio.</p>}

          <section className="s-card-red" style={{ marginTop: 16, padding: 24 }} aria-live="polite">
            <p className="s-title" style={{ fontSize: 34 }}>{s.title}</p>
            <p className="body" style={{ marginTop: 6 }}>{s.line}</p>
            {reveal && (
              <ol style={{ margin: "12px 0 0", paddingLeft: 22, lineHeight: 1.6 }}>
                {p.solution.map((x) => (
                  <li key={x} style={{ marginTop: 6 }}>{x}</li>
                ))}
              </ol>
            )}
          </section>

          <div className="row-between" style={{ marginTop: 16 }}>
            {p.prev ? (
              <Link href={`/teacher/present/${p.prev}`} className="btn btn-ghost">
                <span aria-hidden="true">←</span> Previous question
              </Link>
            ) : (
              <span />
            )}
            {p.next && (
              <Link href={`/teacher/present/${p.next}`} className="btn btn-white">
                Next question <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>
        </div>

        {notes ? (
          <aside className="s-card-yellow" aria-label="Teacher notes" style={{ alignSelf: "start" }}>
            <div className="row-between" style={{ alignItems: "center" }}>
              <p className="sm">Teacher notes · hide before projecting</p>
              <button type="button" className="tool-btn" onClick={() => setNotes(false)}>
                Hide
              </button>
            </div>
            <p className="serif" style={{ fontSize: 22, lineHeight: 1.2, marginTop: 8 }}>
              The thinking matters more than the answer. Guide with prompts; don’t give the solution.
            </p>
            <p className="sm" style={{ fontWeight: 700, marginTop: 12 }}>Prompts to use</p>
            <ul className="q-details">
              {p.prompts.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            {p.watchFor && (
              <>
                <p className="sm" style={{ fontWeight: 700, marginTop: 10 }}>Watch for</p>
                <ul className="q-details">
                  {p.watchFor.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </>
            )}
            {!noting ? (
              <button type="button" className="btn btn-ink btn-block" style={{ marginTop: 14 }} onClick={() => setNoting(true)}>
                Note an observation
              </button>
            ) : (
              <form
                style={{ marginTop: 12 }}
                onSubmit={(e) => {
                  e.preventDefault();
                  if (text.trim().length < 5) return;
                  setObs((o) => [{ id: `t${Date.now()}`, studentId: who, date: new Date().toISOString().slice(0, 10), text: text.trim(), tags: [], where: p.context.split(" · ").slice(1).join(" · ") }, ...o]);
                  setSaved("Saved to the journal.");
                  setText("");
                  setNoting(false);
                }}
              >
                <div className="fld">
                  <label htmlFor="pj-s">Student</label>
                  <select id="pj-s" value={who} onChange={(e) => setWho(e.target.value)} style={{ background: "var(--paper)", borderRadius: 6, paddingInline: 8 }}>
                    {p.students.map((x) => (
                      <option key={x.id} value={x.id}>{x.name}</option>
                    ))}
                  </select>
                </div>
                <div className="fld" style={{ marginTop: 8 }}>
                  <label htmlFor="pj-t">What did you notice?</label>
                  <input id="pj-t" value={text} onChange={(e) => setText(e.target.value)} style={{ background: "var(--paper)", borderRadius: 6, paddingInline: 8 }} />
                </div>
                <button type="submit" className="btn btn-ink" style={{ marginTop: 10 }}>Save</button>
              </form>
            )}
            <p className="sm" role="status" style={{ marginTop: 6 }}>{saved}</p>
          </aside>
        ) : (
          <button type="button" className="tool-btn" style={{ position: "fixed", right: 16, bottom: 16, background: "var(--yellow)" }} onClick={() => setNotes(true)}>
            Show teacher notes
          </button>
        )}
      </div>
    </main>
  );
}
