"use client";

import Link from "next/link";
import { useState } from "react";
import { addMade, useValue } from "@/lib/class6/store";
import { boothChecklist, travelModes, type ProjectDef } from "@/content/class6/projects";
import type { ProjectProgress } from "@/lib/types";

const BAR = ["var(--yellow)", "var(--red-deep)", "var(--paper)", "var(--muted-on-ink)", "var(--pink)"];

function Tally({ slug, start }: { slug: string; start: Record<string, number> }) {
  const [t, setT] = useValue<Record<string, number>>(`${slug}-tally`, start);
  const total = travelModes.reduce((a, m) => a + (t[m] ?? 0), 0);
  const max = Math.max(1, ...travelModes.map((m) => t[m] ?? 0));
  const top = travelModes.reduce((a, b) => ((t[b] ?? 0) > (t[a] ?? 0) ? b : a));
  return (
    <section className="s-card-ink lab-grid" style={{ gap: 20 }} aria-label="Live survey tally">
      <div>
        <p className="lbl">Stage 3 tool · live survey tally (no names collected)</p>
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {travelModes.map((m) => (
            <li key={m} style={{ display: "flex", alignItems: "center", gap: 10, borderTop: "1px solid var(--ink-2)", padding: "8px 0" }}>
              <strong style={{ flex: 1 }}>{m}</strong>
              <button type="button" className="tool-btn" aria-label={`One fewer for ${m}`} onClick={() => setT((x) => ({ ...x, [m]: Math.max(0, (x[m] ?? 0) - 1) }))}>
                −
              </button>
              <span className="s-title" style={{ fontSize: 26, minWidth: 34, textAlign: "center" }} aria-live="polite">
                {t[m] ?? 0}
              </span>
              <button type="button" className="tool-btn red" aria-label={`One more for ${m}`} onClick={() => setT((x) => ({ ...x, [m]: (x[m] ?? 0) + 1 }))}>
                +
              </button>
            </li>
          ))}
        </ul>
        <p className="sm" style={{ marginTop: 8 }}>
          {total} classmates surveyed
        </p>
      </div>
      <div>
        <p className="lbl">Stage 4 preview · bar chart builds itself</p>
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }} aria-label="Bar chart">
          {travelModes.map((m, i) => (
            <li key={m} style={{ display: "grid", gridTemplateColumns: "84px 1fr", alignItems: "center", gap: 8, padding: "6px 0" }}>
              <span className="sm">{m}</span>
              <span style={{ background: "var(--ink-2)", borderRadius: 3, height: 18 }}>
                <span style={{ display: "block", height: "100%", width: `${((t[m] ?? 0) / max) * 100}%`, background: BAR[i], borderRadius: 3 }} />
              </span>
            </li>
          ))}
        </ul>
        {total >= 10 && (
          <p className="sm" style={{ marginTop: 12, padding: "10px 12px", borderRadius: 6, background: "var(--yellow)", color: "var(--ink)", fontWeight: 700 }}>
            Pattern spotted: {top} is the most common way ({t[top]} of {total}). Why might that be?
          </p>
        )}
      </div>
    </section>
  );
}

function CampaignKit({ slug }: { slug: string }) {
  const [done, setDone] = useValue<string[]>(`${slug}-kit`, ["badge", "quiz"]);
  const [flip, setFlip] = useState(false);
  return (
    <div className="lab-grid">
      <section className="s-card-ink" aria-labelledby="kit">
        <p className="lbl">Campaign kit · tick what your team has built</p>
        <h3 id="kit" className="s-title" style={{ fontSize: 28 }}>
          Booth checklist · {done.length} / {boothChecklist.length}
        </h3>
        <ul style={{ listStyle: "none", margin: "10px 0 0", padding: 0, display: "grid", gap: 6 }}>
          {boothChecklist.map((c) => {
            const on = done.includes(c.id);
            return (
              <li key={c.id}>
                <label style={{ display: "flex", gap: 12, alignItems: "center", padding: "10px 12px", borderRadius: 6, cursor: "pointer", minHeight: 52, background: on ? "var(--yellow)" : "var(--ink-2)", color: on ? "var(--ink)" : "#fff" }}>
                  <input type="checkbox" checked={on} onChange={() => setDone((d) => (on ? d.filter((x) => x !== c.id) : [...d, c.id]))} style={{ width: 22, height: 22, accentColor: "var(--ink)" }} />
                  <span>
                    <strong style={{ display: "block" }}>{c.name}</strong>
                    <span className="sm">{c.detail}</span>
                  </span>
                </label>
              </li>
            );
          })}
        </ul>
      </section>
      <div className="stack" style={{ gap: 12 }}>
        <p className="sm muted" style={{ margin: 0 }}>
          Quiz card preview · tap to flip (made for Class 3)
        </p>
        <button type="button" onClick={() => setFlip((f) => !f)} aria-pressed={flip} className={`s-card-yellow ${flip ? "" : "tilt-r"}`} style={{ border: 0, textAlign: "left", font: "inherit", cursor: "pointer", minHeight: 160 }}>
          {!flip ? (
            <>
              <span className="sm" style={{ display: "block" }}>Front · is this message safe?</span>
              <span className="s-title" style={{ fontSize: 30, display: "block", margin: "14px 0" }}>
                You won a free game!
              </span>
              <span className="sm">“Click here to claim it now.” — gamezone-prizes.win</span>
            </>
          ) : (
            <>
              <span className="sm" style={{ display: "block" }}>Back · the answer for juniors</span>
              <span className="s-title" style={{ fontSize: 30, display: "block", margin: "14px 0" }}>
                Not safe. Don’t click!
              </span>
              <span className="sm">A prize you never entered for, from a strange address. Tell a grown-up.</span>
            </>
          )}
        </button>
        <section className="s-card" aria-label="Ethics check">
          <p className="lbl">Ethics check before the booth opens</p>
          <p className="body">No real names or photos of juniors. Survey answers stay anonymous. Every screen we show was checked by our teacher.</p>
        </section>
      </div>
    </div>
  );
}

function Journal({ slug, stage, prompt }: { slug: string; stage: string; prompt: string }) {
  const [entries, setEntries] = useValue<{ stage: string; text: string; at: string }[]>(`${slug}-journal`, []);
  const [text, setText] = useState("");
  const [photo, setPhoto] = useState<string | null>(null);
  const mine = entries.filter((e) => e.stage === stage);
  return (
    <section className="s-card" aria-labelledby="journal">
      <p className="lbl">Reflection journal · {stage}</p>
      <label id="journal" htmlFor="journal-text" className="sm" style={{ fontWeight: 700, display: "block" }}>
        {prompt}
      </label>
      <textarea id="journal-text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Write in your own words…" style={{ width: "100%", minHeight: 80, marginTop: 8, padding: 10, border: "1.5px solid var(--ink)", borderRadius: 6, font: "inherit" }} />
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10, alignItems: "center" }}>
        <button
          type="button"
          className="btn btn-red"
          disabled={text.trim().length < 5}
          onClick={() => {
            setEntries((e) => [...e, { stage, text: text.trim(), at: new Date().toISOString() }]);
            setText("");
          }}
        >
          Save entry
        </button>
        <label className="btn btn-ghost" style={{ cursor: "pointer" }}>
          Add a photo of our work
          <input type="file" accept="image/*" capture="environment" className="sr-only" onChange={(e) => e.target.files?.[0] && setPhoto(URL.createObjectURL(e.target.files[0]))} />
        </label>
      </div>
      {photo && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={photo} alt="Your team’s work (stays on this device in the demo)" style={{ marginTop: 10, maxWidth: 240, borderRadius: 6 }} />
      )}
      {mine.length > 0 && (
        <ol style={{ margin: "12px 0 0", paddingLeft: 18 }} aria-label="Saved entries">
          {mine.map((e) => (
            <li key={e.at} className="sm" style={{ padding: "4px 0" }}>
              {e.text} <span className="muted">· {new Date(e.at).toLocaleDateString("en-IN")}</span>
            </li>
          ))}
        </ol>
      )}
      <p className="sm muted" style={{ marginTop: 8 }}>
        Your teacher reads your journal. Photos stay on this device in the demo; don’t photograph faces.
      </p>
    </section>
  );
}

/** Marks the teacher saved in the Observation Journal (same store), overriding the demo marks. */
export type SavedMarks = { marks: Record<string, number>; note: string; parentOk: boolean; at: string } | null;

export function ProjectWorkspace({ project, progress: base, tally, next }: { project: ProjectDef; progress: ProjectProgress; tally: Record<string, number>; next: { slug: string; title: string; line: string; when: string; uses: string } | null }) {
  const [saved] = useValue<SavedMarks>(`marks-${project.slug}`, null);
  const progress: ProjectProgress = saved ? { ...base, marks: saved.marks as ProjectProgress["marks"], teacherNote: saved.note } : base;
  const firstWorking = project.stages.find((s) => progress.stageStatus[s.id] === "working") ?? project.stages[0];
  const [sel, setSel] = useState(firstWorking.id);
  const [extra, setExtra] = useValue(`${project.slug}-hours`, 0);
  const [sent, setSent] = useState(false);
  const stage = project.stages.find((s) => s.id === sel)!;
  const idx = project.stages.indexOf(stage);
  const hours = Math.min(20, progress.hoursLogged + extra);

  return (
    <>
      <div className="row-between" style={{ alignItems: "flex-end", marginTop: -8, marginBottom: 16 }}>
        <p className="body" style={{ maxWidth: 620 }}>
          {project.summary}
        </p>
        <div className="s-card" style={{ minWidth: 200 }}>
          <p className="sm muted">Hours logged</p>
          <p className="s-title" style={{ fontSize: 36 }}>
            {hours} <small style={{ fontSize: 18 }}>/ 20 H</small>
          </p>
          <span className="pbar" style={{ display: "block", marginTop: 6 }} role="progressbar" aria-label="Hours logged" aria-valuemin={0} aria-valuemax={20} aria-valuenow={hours}>
            <span style={{ width: `${(hours / 20) * 100}%` }} />
          </span>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 8 }} role="group" aria-label="Project stages">
        {project.stages.map((s, i) => {
          const st = progress.stageStatus[s.id] ?? "up-next";
          const bg = st === "done" ? "var(--ink)" : st === "working" ? "var(--red-deep)" : "var(--paper)";
          const fg = st === "up-next" ? "var(--ink)" : "#fff";
          return (
            <button key={s.id} type="button" aria-pressed={s.id === sel} onClick={() => setSel(s.id)} style={{ textAlign: "left", border: 0, borderRadius: 6, padding: 12, minHeight: 96, cursor: "pointer", font: "inherit", background: bg, color: fg, outline: s.id === sel ? "3px solid var(--yellow)" : undefined, display: "flex", flexDirection: "column" }}>
              <span className="sm">
                Stage {i + 1} · {s.hours} h · {st === "done" ? "done" : st === "working" ? "working" : "up next"}
              </span>
              <span className="s-title" style={{ fontSize: 22 }}>
                {s.name}
              </span>
              <span className="sm" style={{ marginTop: "auto", paddingTop: 6 }}>
                {s.links}
              </span>
            </button>
          );
        })}
      </div>

      <div className="lab-grid" style={{ marginTop: 16 }}>
        <div className="stack" style={{ gap: 12 }}>
          <section className="s-card" aria-labelledby="stage-name" aria-live="polite">
            <p className="lbl">
              Stage {idx + 1} · {stage.links}
            </p>
            <h2 id="stage-name" className="s-title" style={{ fontSize: 34 }}>
              {stage.name}
            </h2>
            <p className="body" style={{ marginTop: 6 }}>
              {stage.description}
            </p>
            <p style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }}>
              {stage.tasks.map((t) => (
                <span key={t} className="s-chip" style={{ boxShadow: "none", background: "var(--ground)" }}>
                  {t}
                </span>
              ))}
            </p>
            <p className="sm" style={{ fontWeight: 700, marginTop: 10 }}>
              Deliverable: {stage.deliverable}
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 12, alignItems: "center" }}>
              <button type="button" className="tool-btn ink" disabled={hours >= 20} onClick={() => setExtra((h) => h + 1)}>
                Log 1 hour
              </button>
              <button
                type="button"
                className="btn btn-ghost"
                disabled={sent}
                onClick={() => {
                  addMade({ title: `${project.title.replace(/:$/, "")} · ${stage.name}`, detail: stage.deliverable, from: `Project ${project.number}` });
                  setSent(true);
                }}
              >
                {sent ? "Added to my portfolio" : "Add this deliverable to my portfolio"}
              </button>
            </div>
          </section>

          {project.slug === "data-detectives" ? (stage.id === "collect" || stage.id === "show" || stage.id === "decide" ? <Tally slug={project.slug} start={tally} /> : null) : <CampaignKit slug={project.slug} />}

          <Journal slug={project.slug} stage={stage.name} prompt={stage.journal} />
        </div>

        <div className="stack" style={{ gap: 12 }}>
          <section className="s-card" aria-labelledby="roles">
            <p id="roles" className="lbl">
              {project.rolesNote}
            </p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {progress.members.map((m, i) => {
                const r = project.roles.find((x) => x.id === m.role)!;
                return (
                  <li key={m.name} style={{ display: "flex", gap: 12, alignItems: "center", borderTop: "1px solid var(--line)", padding: "10px 0" }}>
                    <span aria-hidden="true" style={{ width: 36, height: 36, borderRadius: 999, flex: "none", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "#fff", background: ["var(--red-deep)", "var(--ink)", "var(--muted)", "var(--red-dark)"][i % 4] }}>
                      {m.name[0]}
                    </span>
                    <span>
                      <strong style={{ display: "block" }}>{m.name}</strong>
                      <span className="sm">
                        {r.role} · {r.does}
                      </span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </section>

          <section className="s-card" aria-labelledby="rubric">
            <p id="rubric" className="lbl">
              How we’ll be assessed · rubric (4 levels each)
            </p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {project.rubric.map((r) => {
                const m = progress.marks[r.id] ?? 0;
                return (
                  <li key={r.id} style={{ borderTop: "1px solid var(--line)", padding: "8px 0", display: "flex", justifyContent: "space-between", gap: 10 }}>
                    <span>
                      <strong style={{ display: "block" }}>{r.name}</strong>
                      <span className="sm">Level 4: {r.level4}</span>
                    </span>
                    <span className="sm" style={{ fontWeight: 700, whiteSpace: "nowrap" }}>
                      {m ? `Level ${m} of 4` : "Not marked yet"}
                    </span>
                  </li>
                );
              })}
            </ul>
            {progress.teacherNote && (
              <p className="sm" style={{ marginTop: 8, background: "var(--ground)", padding: 10, borderRadius: 6 }}>
                <strong>Teacher’s note:</strong> {progress.teacherNote}
              </p>
            )}
          </section>

          {next && (
            <Link href={`/studio/projects/${next.slug}`} className="s-card-ink tilt-r" style={{ display: "block", textDecoration: "none", color: "#fff" }}>
              <span className="lbl" style={{ display: "block" }}>
                {next.when}
              </span>
              <span className="s-title" style={{ fontSize: 28, display: "block" }}>
                {next.title}
              </span>
              <span className="sm" style={{ display: "block", marginTop: 6 }}>
                {next.line}
              </span>
              <span className="sm" style={{ display: "block", marginTop: 8, color: "var(--muted-on-ink)" }}>
                Uses {next.uses}
              </span>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
