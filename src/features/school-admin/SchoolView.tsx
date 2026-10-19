"use client";

import Link from "next/link";
import { useState } from "react";
import type { SchoolSection } from "@/lib/types";

type Props = {
  name: string;
  week: number;
  weeks: number;
  observationNotes: number;
  approvedMakes: number;
  projectsUnderway: number;
  sections: SchoolSection[];
  training: { name: string; done: number }[];
  trainingTotal: number;
  comingUp: { title: string; body: string };
  deadline: { label: string; title: string; body: string };
};

const BAND = { "3-5": 50, "6-8": 100 } as const;

export function SchoolActions() {
  const [msg, setMsg] = useState("");
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
      <button type="button" className="btn btn-ghost" onClick={() => window.print()}>
        Download inspection pack (PDF)
      </button>
      <button
        type="button"
        className="btn btn-red"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(window.location.href);
            setMsg("Link copied. Paste it into your message to management.");
          } catch {
            setMsg("Copy the page address to share it.");
          }
        }}
      >
        Share with management
      </button>
      <Link href="/sign-in" className="sm inline-target" style={{ fontWeight: 600 }}>
        Sign out
      </Link>
      <span className="sm" role="status">{msg}</span>
    </div>
  );
}

export function SchoolView(p: Props) {
  const [band, setBand] = useState<"3-5" | "6-8">("6-8");
  const target = BAND[band];
  const expected = (target * p.week) / p.weeks; // hours a section should have by this week
  const rows = p.sections.filter((s) => s.band === band);
  const sixToEight = p.sections.filter((s) => s.band === "6-8");
  const onTrack68 = sixToEight.filter((s) => s.hours >= (100 * p.week) / p.weeks).length;

  return (
    <div className="print-me">
      <div className="grid g4" style={{ gap: 12 }}>
        <div className="s-card-ink">
          <p className="sm" style={{ color: "var(--muted-on-ink)" }}>Sections on track</p>
          <p className="s-title" style={{ fontSize: 44 }}>{onTrack68} / {sixToEight.length}</p>
          <p className="sm">Classes 6–8</p>
        </div>
        <div className="s-card">
          <p className="sm muted">Observation notes</p>
          <p className="s-title" style={{ fontSize: 44 }}>{p.observationNotes.toLocaleString("en-IN")}</p>
          <p className="sm">Teacher Observation Journal entries</p>
        </div>
        <div className="s-card">
          <p className="sm muted">Student makes</p>
          <p className="s-title" style={{ fontSize: 44 }}>{p.approvedMakes}</p>
          <p className="sm">Approved on class walls</p>
        </div>
        <div className="s-card-red">
          <p className="sm">Projects underway</p>
          <p className="s-title" style={{ fontSize: 44 }}>{p.projectsUnderway}</p>
          <p className="sm">Classes 6–8, project 1 of 2</p>
        </div>
      </div>

      <section className="s-card" style={{ marginTop: 12 }} aria-labelledby="hours">
        <div className="row-between" style={{ alignItems: "center" }}>
          <h2 id="hours" className="s-title" style={{ fontSize: 28 }}>Hours delivered by section</h2>
          <div className="toggles" role="group" aria-label="Classes" style={{ background: "var(--ground)", borderRadius: 999, padding: 4 }}>
            {(["3-5", "6-8"] as const).map((b) => (
              <button key={b} type="button" className="tog" aria-pressed={band === b} onClick={() => setBand(b)} style={{ background: band === b ? undefined : "transparent" }}>
                Classes {b.replace("-", "–")} · {BAND[b]} h
              </button>
            ))}
          </div>
        </div>
        <div style={{ overflowX: "auto" }}>
          <table className="tbl" style={{ marginTop: 10, minWidth: 620, fontSize: 14 }}>
            <thead>
              <tr>
                <th scope="col">Section</th>
                <th scope="col">Teacher</th>
                <th scope="col">Hours so far</th>
                <th scope="col">Progress to {target} h</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((s) => {
                const ok = s.hours >= expected;
                return (
                  <tr key={s.id}>
                    <th scope="row" style={{ textAlign: "left" }}>{s.id}</th>
                    <td>{s.teacher}</td>
                    <td>{s.hours} h</td>
                    <td>
                      <span className={`pbar${ok ? " ink" : ""}`} style={{ display: "block" }} role="progressbar" aria-label={`${s.id} hours`} aria-valuemin={0} aria-valuemax={target} aria-valuenow={s.hours}>
                        <span style={{ width: `${(s.hours / target) * 100}%` }} />
                      </span>
                    </td>
                    <td style={{ fontWeight: 700, color: ok ? "var(--green)" : "var(--red-text)" }}>{ok ? "On track" : "Behind"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="sm muted" style={{ marginTop: 8 }}>
          On track = at least the share of hours expected by this week of the session (week {p.week} of about {p.weeks}: {expected.toFixed(1)} h of {target} h).
        </p>
      </section>

      <div className="lab-grid" style={{ marginTop: 12 }}>
        <section className="s-card-ink" aria-labelledby="training">
          <p className="lbl">Notification TRG-02 · {p.trainingTotal} sub-themes</p>
          <h2 id="training" className="s-title" style={{ fontSize: 28 }}>Teacher training</h2>
          <ul style={{ listStyle: "none", margin: "8px 0 0", padding: 0 }}>
            {p.training.map((t) => (
              <li key={t.name} style={{ borderTop: "1px solid var(--ink-2)", padding: "8px 0" }}>
                <p className="sm" style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>{t.name}</span>
                  <strong>{t.done} / {p.trainingTotal}</strong>
                </p>
                <div className="levels" style={{ marginTop: 6 }} role="img" aria-label={`${t.name}: ${t.done} of ${p.trainingTotal} sub-themes`}>
                  {Array.from({ length: p.trainingTotal }, (_, i) => (
                    <span key={i} className={i < t.done ? "on" : undefined} style={{ background: i < t.done ? undefined : "var(--ink-2)" }} />
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>
        <div className="stack" style={{ gap: 12 }}>
          <div className="s-card-yellow tilt-r">
            <p className="sm">Coming up</p>
            <h2 className="s-title" style={{ fontSize: 26 }}>{p.comingUp.title}</h2>
            <p className="sm">{p.comingUp.body}</p>
          </div>
          <div className="s-card">
            <p className="sm muted">{p.deadline.label}</p>
            <h2 className="s-title" style={{ fontSize: 26 }}>{p.deadline.title}</h2>
            <p className="sm">{p.deadline.body}</p>
            <p className="sm muted" style={{ marginTop: 6 }}>From the design renders · confirm against the CBSE circular.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
