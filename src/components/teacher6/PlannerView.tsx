"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useValue } from "@/lib/class6/store";

export type PlannerCT = {
  key: string; // "ct5"
  number: number;
  title: string;
  status: string;
  lab: string;
  hasActivity: boolean;
  activityPlan?: { activity: string; minutes: number; description: string; link?: string }[];
  activityComponents?: { strand: string; text: string }[];
  materials: string[];
  questions: { n: number; id: string; prompt: string; details?: string[]; options: string[]; answer: string; steps: string[] }[];
  spot: { id: string; prompt: string; details?: string[]; options: string[]; answer: string; steps: string[] };
};

export type PlannerAI = {
  key: string; // "ai1"
  number: number;
  title: string;
  status: string;
  ethics: string;
  focus: string[];
  steps: string[];
  answers: { section: string; items: { q: string; a: string }[] }[];
};

const SECTIONS = [
  { id: "6A", label: "Class 6A · Period 3" },
  { id: "6B", label: "Class 6B · Period 6" },
];

function Solution({ title, prompt, options, answer, steps }: { title: string; prompt: string; options: string[]; answer: string; steps: string[] }) {
  return (
    <details style={{ borderTop: "1px solid var(--line)", padding: "10px 0" }}>
      <summary style={{ cursor: "pointer", fontWeight: 700, minHeight: 44, display: "flex", alignItems: "center" }}>
        {title} · Answer {answer}
      </summary>
      <p className="sm" style={{ marginTop: 6 }}>{prompt}</p>
      <p className="sm muted" style={{ marginTop: 4 }}>{options.join(" · ")}</p>
      <ol className="q-details">
        {steps.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ol>
    </details>
  );
}

export function PlannerView({ ct, ai }: { ct: PlannerCT[]; ai: PlannerAI[] }) {
  const sp = useSearchParams();
  const [sel, setSel] = useState(sp.get("ch") ?? "ct5");
  const [picked, setPicked] = useState<number[]>([1, 2, 3, 4, 6, 8]);
  const [section, setSection] = useState("6A");
  const [assigned, setAssigned] = useValue<Record<string, { chapter: string; questions: number[] }>>("teacher-assignments", {});
  const [msg, setMsg] = useState("");
  const c = ct.find((x) => x.key === sel);
  const a = ai.find((x) => x.key === sel);

  const periods = c
    ? c.hasActivity
      ? [
          ["Period 1 · unplugged", "Activity first", "Hands-on materials before any questions, as the handbook suggests."],
          ["Period 2 · think", "Questions 1–5", "Think alone, then pairs. Hints, not answers."],
          ["Period 3 · lab", "Make it", `Studio lab: ${c.lab}. Post a creation to the class wall.`],
          ["Period 4 · challenge", "Q6–10 + Thinking Spot", "Harder questions, then the Thinking Spot puzzle."],
        ]
      : [
          ["Period 1 · think", "Questions 1–5", "Think alone, then pairs. Hints, not answers."],
          ["Period 2 · lab", "Make it", `Studio lab: ${c.lab}. Post a creation to the class wall.`],
          ["Period 3 · think", "Questions 6–10", "Same routine: attempt first, discuss strategies after."],
          ["Period 4 · challenge", "Thinking Spot + review", "The puzzle, then students explain different approaches."],
        ]
    : [];

  return (
    <div className="planner-grid">
      <nav className="s-card" aria-label="Chapters" style={{ padding: 12 }}>
        <p className="sm muted" style={{ margin: "4px 8px 8px" }}>
          Part 1 · CT (40 h) · Part 2 · AI (20 h)
        </p>
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {[...ct.map((x) => ({ key: x.key, label: `CT ${x.number} · ${x.title}`, status: x.status })), ...ai.map((x) => ({ key: x.key, label: `AI ${x.number} · ${x.title}`, status: x.status }))].map((x) => (
            <li key={x.key}>
              <button type="button" aria-current={x.key === sel ? "true" : undefined} onClick={() => (setSel(x.key), setMsg(""))} style={{ width: "100%", textAlign: "left", border: 0, borderRadius: 6, padding: "10px 10px", minHeight: 44, cursor: "pointer", font: "inherit", fontSize: 13, display: "flex", justifyContent: "space-between", gap: 8, background: x.key === sel ? "var(--ink)" : "transparent", color: x.key === sel ? "#fff" : "var(--ink)" }}>
                <span>{x.label}</span>
                <span style={{ fontSize: 11, whiteSpace: "nowrap" }}>{x.status}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {c && (
        <div className="stack" style={{ gap: 12 }}>
          <div className="planner-top">
            <div className="stack" style={{ gap: 12 }}>
              <section className="s-card-ink">
                <p className="lbl">CT {c.number} · runs alongside NCERT Ganita Prakash</p>
                <h2 className="s-title" style={{ fontSize: 36 }}>{c.title}</h2>
                <p className="sm" style={{ marginTop: 6 }}>
                  Suggested: 4 periods of 40 minutes. Handbook tip: {c.hasActivity ? "run the activity before the questions, and let students think before any discussion." : "give students time to think and attempt on their own before any discussion."}
                </p>
              </section>
              <div className="grid g2" style={{ gap: 10 }}>
                {periods.map(([k, t, d]) => (
                  <div key={k} className="s-card">
                    <p className="sm muted">{k}</p>
                    <p className="s-title" style={{ fontSize: 22 }}>{t}</p>
                    <p className="sm" style={{ marginTop: 4 }}>{d}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="stack" style={{ gap: 12 }}>
              <div className="s-card-yellow tilt-r">
                <p className="sm">Unplugged materials for this chapter</p>
                <ul className="q-details">
                  {c.materials.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </div>
              <div className="s-card">
                <p className="sm muted">Studio lab students will use</p>
                <Link href={`/studio/ct/${c.number}`} className="btn btn-red" style={{ marginTop: 8 }}>
                  {c.lab} <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>

          <section className="s-card" aria-labelledby="assign">
            <p id="assign" className="sm muted">
              Pick the thinking questions to assign · {picked.length} selected
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8 }} role="group" aria-label="Questions">
              {c.questions.map((q) => (
                <button key={q.n} type="button" aria-pressed={picked.includes(q.n)} aria-label={`Question ${q.n}`} onClick={() => setPicked((p) => (p.includes(q.n) ? p.filter((x) => x !== q.n) : [...p, q.n].sort((x, y) => x - y)))} style={{ width: 48, height: 48, borderRadius: 999, border: 0, cursor: "pointer", fontWeight: 700, background: picked.includes(q.n) ? "var(--red-deep)" : "var(--ground)", color: picked.includes(q.n) ? "#fff" : "var(--ink)" }}>
                  {q.n}
                </button>
              ))}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center", marginTop: 12 }}>
              <label htmlFor="assign-to" style={{ fontWeight: 700 }}>Assign to</label>
              <select id="assign-to" value={section} onChange={(e) => setSection(e.target.value)} style={{ minHeight: 44, border: "1.5px solid var(--ink)", borderRadius: 6, padding: "0 8px", background: "var(--paper)", font: "inherit" }}>
                {SECTIONS.map((s) => (
                  <option key={s.id} value={s.id}>{s.label}</option>
                ))}
              </select>
              <button
                type="button"
                className="btn btn-red"
                disabled={!picked.length}
                onClick={() => {
                  setAssigned((x) => ({ ...x, [section]: { chapter: c.key, questions: picked } }));
                  setMsg(`Assigned to Class ${section}: CT ${c.number}, questions ${picked.join(", ")}.`);
                }}
              >
                Assign in Studio
              </button>
              <button type="button" className="btn btn-ghost" onClick={() => window.print()} disabled={!picked.length}>
                Print worksheet
              </button>
              <Link href={`/teacher/present/${c.key}-q${picked[0] ?? 1}`} className="btn btn-ghost">
                Preview projector mode
              </Link>
            </div>
            <p className="sm" role="status" style={{ marginTop: 8, fontWeight: 700 }}>
              {msg || (assigned[section] ? `Currently assigned to ${section}: ${assigned[section].chapter.toUpperCase()} questions ${assigned[section].questions.join(", ")}` : "")}
            </p>
            {/* Printable worksheet: questions only, never answers */}
            <div className="print-me" style={{ display: "none" }} aria-hidden="true">
              <h1>CT {c.number} · {c.title} · Worksheet</h1>
              <ol>
                {c.questions.filter((q) => picked.includes(q.n)).map((q) => (
                  <li key={q.n} style={{ marginBottom: 14 }}>
                    {q.prompt}
                    {q.details && <ul>{q.details.map((d) => <li key={d}>{d}</li>)}</ul>}
                    <p>{q.options.join("    ")}</p>
                    <p>My rule: ________________________________</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {c.hasActivity && c.activityPlan && (
            <section className="s-card" aria-labelledby="act-plan">
              <p className="lbl">Teacher Handbook · Activity Time plan</p>
              <h2 id="act-plan" className="s-title" style={{ fontSize: 24 }}>Run the activity</h2>
              <table className="tbl" style={{ marginTop: 8, fontSize: 13 }}>
                <thead><tr><th scope="col">Activity</th><th scope="col">Minutes</th><th scope="col">Description</th></tr></thead>
                <tbody>
                  {c.activityPlan.map((r) => (
                    <tr key={r.activity}>
                      <th scope="row" style={{ textAlign: "left" }}>{r.activity}</th>
                      <td>{r.minutes}</td>
                      <td>
                        {r.description}
                        {r.link && (
                          <>
                            {" "}
                            <a href={r.link} target="_blank" rel="noreferrer" className="ul">Open resource</a>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <ul className="q-details">
                {c.activityComponents?.map((x) => (
                  <li key={x.strand}><strong>{x.strand}:</strong> {x.text}</li>
                ))}
              </ul>
            </section>
          )}

          <section className="s-card" aria-labelledby="sol">
            <p className="lbl">Teacher Handbook · solutions, step by step · teacher view only</p>
            <h2 id="sol" className="s-title" style={{ fontSize: 24 }}>Solutions</h2>
            {c.questions.map((q) => (
              <Solution key={q.id} title={`Q${q.n}`} prompt={q.prompt} options={q.options} answer={q.answer} steps={q.steps} />
            ))}
            <Solution title="The Thinking Spot" prompt={c.spot.prompt} options={c.spot.options} answer={c.spot.answer} steps={c.spot.steps} />
          </section>
        </div>
      )}

      {a && (
        <div className="stack" style={{ gap: 12 }}>
          <section className="s-card-ink">
            <p className="lbl">AI {a.number} · Ethics tag: {a.ethics.toLowerCase()}</p>
            <h2 className="s-title" style={{ fontSize: 34 }}>{a.title}</h2>
            <p className="sm" style={{ marginTop: 6 }}>Learning focus: {a.focus.join(" · ")}</p>
          </section>
          <section className="s-card">
            <p className="lbl">Studio path students will follow</p>
            <ol className="q-details">
              {a.steps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
            <Link href={`/studio/ai/${a.number}`} className="btn btn-red" style={{ marginTop: 10 }}>
              Open the AI {a.number} path <span aria-hidden="true">→</span>
            </Link>
          </section>
          <section className="s-card" aria-labelledby="ai-ans">
            <p className="lbl">Teacher Handbook · exercise answers · teacher view only</p>
            <h2 id="ai-ans" className="s-title" style={{ fontSize: 24 }}>Answers</h2>
            {a.answers.map((s) => (
              <details key={s.section} style={{ borderTop: "1px solid var(--line)", padding: "10px 0" }}>
                <summary style={{ cursor: "pointer", fontWeight: 700, minHeight: 44, display: "flex", alignItems: "center" }}>{s.section}</summary>
                <ol className="q-details">
                  {s.items.map((x) => (
                    <li key={x.q}>
                      {x.q} <strong>→ {x.a}</strong>
                    </li>
                  ))}
                </ol>
              </details>
            ))}
          </section>
        </div>
      )}
    </div>
  );
}
