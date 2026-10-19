"use client";

import { useState } from "react";
import { useValue } from "@/lib/class6/store";
import type { SavedMarks } from "@/components/studio/wall/ProjectWorkspace";
import type { Class6Student, Observation } from "@/lib/types";

type ProjectLite = { slug: string; title: string; rubric: { id: string; name: string; level4: string }[]; demoMarks: Record<string, number>; demoNote: string; team: string[] };

const LABELS = [
  ["abstract", "Abstract"],
  ["pattern", "Pattern"],
  ["decompose", "Decompose"],
  ["algorithmic", "Algorithmic"],
] as const;

function download(name: string, rows: (string | number)[][]) {
  const csv = rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
  const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  URL.revokeObjectURL(url);
}

/** Top-bar actions: hours evidence as CSV, term report via the print dialog. */
export function JournalActions({ students, demoObs, sections }: { students: Class6Student[]; demoObs: Observation[]; sections: { id: string; hours: { ct: number; ai: number; project: number } }[] }) {
  const [extra] = useValue<Observation[]>("teacher-observations", []);
  const all = [...extra, ...demoObs];
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <button
        type="button"
        className="btn btn-ghost"
        onClick={() =>
          download("ct-ai-hours-evidence.csv", [
            ["Section", "CT hours (of 40)", "AI hours (of 20)", "Project hours (of 40)", "Total (of 100)"],
            ...sections.map((s) => [s.id, s.hours.ct, s.hours.ai, s.hours.project, s.hours.ct + s.hours.ai + s.hours.project]),
            [],
            ["Student", "Observation notes"],
            ...students.map((s) => [s.name, all.filter((o) => o.studentId === s.id).length]),
          ])
        }
      >
        Export hours evidence (CT 40 · AI 20 · Projects 40)
      </button>
      <button type="button" className="btn btn-red" onClick={() => window.print()}>
        Term report PDFs
      </button>
    </div>
  );
}

export function JournalView({ students, demoObs, projects }: { students: Class6Student[]; demoObs: Observation[]; projects: ProjectLite[] }) {
  const [extra] = useValue<Observation[]>("teacher-observations", []);
  const all = [...extra, ...demoObs];
  const [sid, setSid] = useState(students[0].id);
  const st = students.find((s) => s.id === sid)!;
  const timeline = all.filter((o) => o.studentId === sid).sort((a, b) => b.date.localeCompare(a.date));
  const [pslug, setPslug] = useState(projects[0].slug);
  const proj = projects.find((p) => p.slug === pslug)!;
  const [saved, setSaved] = useValue<SavedMarks>(`marks-${pslug}`, null);
  const [draft, setDraft] = useState<Record<string, Record<string, number>>>({});
  const [note, setNote] = useState<Record<string, string>>({});
  const marks = draft[pslug] ?? saved?.marks ?? proj.demoMarks;
  const feedback = note[pslug] ?? saved?.note ?? proj.demoNote;
  const total = proj.rubric.reduce((a, r) => a + (marks[r.id] ?? 0), 0);
  const inTeam = proj.team.includes(st.name);
  const [status, setStatus] = useState("");

  return (
    <>
      <div className="journal-grid">
        <nav className="s-card" aria-label="Students" style={{ padding: 12 }}>
          <p className="sm muted" style={{ margin: "4px 8px 8px" }}>Class 6B · 36 students (demo: 8 shown)</p>
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {students.map((s) => {
              const n = all.filter((o) => o.studentId === s.id).length;
              return (
                <li key={s.id}>
                  <button type="button" aria-current={s.id === sid ? "true" : undefined} onClick={() => setSid(s.id)} style={{ width: "100%", textAlign: "left", border: 0, borderRadius: 6, padding: "10px", minHeight: 44, cursor: "pointer", font: "inherit", display: "flex", justifyContent: "space-between", background: s.id === sid ? "var(--ink)" : "transparent", color: s.id === sid ? "#fff" : "var(--ink)" }}>
                    <span>{s.name}</span>
                    <span className="sm">{n} {n === 1 ? "note" : "notes"}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="stack print-me" style={{ gap: 12 }}>
          <section className="s-card" aria-labelledby="st-name">
            <div className="row-between" style={{ alignItems: "center" }}>
              <h2 id="st-name" className="s-title" style={{ fontSize: 34 }}>{st.name}</h2>
              <span className="sm muted">{st.team ? `${st.team} · ${st.role}` : "Not in a project team yet"}</span>
            </div>
            <div className="grid g4" style={{ gap: 8, marginTop: 10 }}>
              {LABELS.map(([k, l]) => (
                <div key={k} style={{ background: "var(--ground)", borderRadius: 6, padding: "10px 12px" }}>
                  <p className="sm muted">{l}</p>
                  <p className="s-title" style={{ fontSize: 26 }}>L{st.levels[k]}</p>
                </div>
              ))}
            </div>
            <p className="sm muted" style={{ marginTop: 12 }}>Timeline · newest first</p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {timeline.map((o) => (
                <li key={o.id} style={{ display: "grid", gridTemplateColumns: "70px 1fr", gap: 10, borderTop: "1px solid var(--line)", padding: "10px 0" }}>
                  <span className="sm muted">{new Date(o.date).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}</span>
                  <span>
                    <span className="sm">{o.text}</span>
                    <span style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 6 }}>
                      <span className="s-chip solid">{o.where}</span>
                      {o.tags.map((t) => (
                        <span key={t} className="s-chip">{t}</span>
                      ))}
                    </span>
                  </span>
                </li>
              ))}
              {timeline.length === 0 && <li className="sm muted" style={{ borderTop: "1px solid var(--line)", padding: "10px 0" }}>No notes yet. Use quick capture in Today or projector mode.</li>}
            </ul>
          </section>

          <section id="mark" className="s-card" aria-labelledby="mark-title" style={{ scrollMarginTop: 20 }}>
            <div className="row-between" style={{ alignItems: "center" }}>
              <h2 id="mark-title" className="s-title" style={{ fontSize: 26 }}>Mark · {proj.title}</h2>
              <strong>{total} / {proj.rubric.length * 4}</strong>
            </div>
            <div className="toggles" role="group" aria-label="Project" style={{ marginTop: 8 }}>
              {projects.map((p) => (
                <button key={p.slug} type="button" className="tog" aria-pressed={p.slug === pslug} onClick={() => (setPslug(p.slug), setStatus(""))}>
                  {p.title}
                </button>
              ))}
            </div>
            {!inTeam ? (
              <p className="sm" style={{ marginTop: 10 }}>{st.name} isn’t in a project team in the demo. Pick Riya S., Aarav P., Meher K. or Kabir M. to mark Team Rocket.</p>
            ) : (
              <>
                <p className="sm muted" style={{ marginTop: 8 }}>Team Rocket · marks apply to the whole team</p>
                <ul style={{ listStyle: "none", margin: "8px 0 0", padding: 0 }}>
                  {proj.rubric.map((r) => (
                    <li key={r.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, borderTop: "1px solid var(--line)", padding: "10px 0", flexWrap: "wrap" }}>
                      <span>
                        <strong style={{ display: "block" }}>{r.name}</strong>
                        <span className="sm">{r.level4}</span>
                      </span>
                      <span style={{ display: "flex", gap: 4 }} role="group" aria-label={`${r.name} level`}>
                        {[1, 2, 3, 4].map((v) => (
                          <button key={v} type="button" aria-pressed={marks[r.id] === v} onClick={() => setDraft((d) => ({ ...d, [pslug]: { ...marks, [r.id]: v } }))} style={{ width: 44, height: 44, border: 0, borderRadius: 6, cursor: "pointer", fontWeight: 700, background: marks[r.id] === v ? "var(--red-deep)" : "var(--ground)", color: marks[r.id] === v ? "#fff" : "var(--ink)" }}>
                            {v}
                          </button>
                        ))}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="fld" style={{ marginTop: 12 }}>
                  <label htmlFor="fb">Feedback to the team</label>
                  <textarea id="fb" value={feedback} onChange={(e) => setNote((n) => ({ ...n, [pslug]: e.target.value }))} />
                </div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 12, alignItems: "center" }}>
                  <button
                    type="button"
                    className="btn btn-red"
                    onClick={() => {
                      setSaved({ marks, note: feedback, parentOk: saved?.parentOk ?? false, at: new Date().toISOString() });
                      setStatus("Saved. The team sees these marks on their project page.");
                    }}
                  >
                    Save and send to student
                  </button>
                  <button
                    type="button"
                    className="btn btn-ghost"
                    aria-pressed={saved?.parentOk ?? false}
                    onClick={() => {
                      setSaved({ marks, note: feedback, parentOk: !(saved?.parentOk ?? false), at: new Date().toISOString() });
                      setStatus(saved?.parentOk ? "Removed from the parent portfolio." : "Approved for the parent portfolio.");
                    }}
                  >
                    {saved?.parentOk ? "Approved for parent portfolio ✓" : "Approve for parent portfolio"}
                  </button>
                </div>
                <p className="sm" role="status" style={{ marginTop: 8, fontWeight: 700 }}>{status}</p>
              </>
            )}
          </section>
        </div>

        <div className="stack" style={{ gap: 12 }}>
          <section className="s-card-ink" aria-label="Evidence attached">
            <p className="lbl">Evidence attached</p>
            <div className="grid g2" style={{ gap: 8 }}>
              {["Tally sheet photo", "Bar chart draft", "Journal · Stage 3", "Circle of 12 star"].map((e) => (
                <div key={e} style={{ border: "1.5px dashed var(--muted-on-ink)", borderRadius: 4, minHeight: 80, display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: 8 }} className="sm">
                  {e}
                </div>
              ))}
            </div>
            <p className="sm" style={{ marginTop: 8, color: "var(--muted-on-ink)" }}>Demo placeholders. Real uploads arrive with the backend.</p>
          </section>
          <div className="s-card-yellow tilt-r">
            <p className="sm">Why this matters</p>
            <p className="serif" style={{ fontSize: 22, lineHeight: 1.2, marginTop: 4 }}>
              The handbook asks for rubrics and Observation Journals. Every note here becomes proof that the hours and the thinking happened.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
