"use client";

import Link from "next/link";
import { useState } from "react";
import { AnswerBox } from "@/features/studio/questions/AnswerBox";
import type { PublicQuestion } from "@/curriculum/class-6/student-safe";

/** Minutes after 12:00 → hand angles (hour hand moves 0.5° a minute, minute hand 6°). */
function hands(t: number) {
  const hour = (t * 0.5) % 360;
  const minute = (t % 60) * 6;
  const d = Math.abs(hour - minute) % 360;
  return { hour, minute, between: Math.min(d, 360 - d) };
}

const fmt = (t: number) => {
  const h = Math.floor(t / 60) % 12;
  const m = t % 60;
  return `${h === 0 ? 12 : h}:${String(m).padStart(2, "0")}`;
};

function Clock({ t }: { t: number }) {
  const { hour, minute, between } = hands(t);
  const rad = (a: number) => ((a - 90) * Math.PI) / 180;
  // rounded so server and browser render identical coordinates
  const end = (a: number, r: number) => [+(100 + r * Math.cos(rad(a))).toFixed(2), +(100 + r * Math.sin(rad(a))).toFixed(2)];
  // shade the smaller angle between the hands
  const [a1, a2] = (() => {
    let s = Math.min(hour, minute);
    let e = Math.max(hour, minute);
    if (e - s > 180) [s, e] = [e, s + 360];
    return [s, e];
  })();
  const [sx, sy] = end(a1, 46);
  const [ex, ey] = end(a2, 46);
  const [hx, hy] = end(hour, 50);
  const [mx, my] = end(minute, 74);
  return (
    <svg viewBox="0 0 200 200" width="100%" style={{ maxWidth: 320, display: "block", margin: "0 auto" }} role="img" aria-label={`Clock showing ${fmt(t)}; angle between hands ${between}°`}>
      <circle cx="100" cy="100" r="92" fill="var(--ground)" stroke="var(--ink)" strokeWidth="4" />
      {Array.from({ length: 12 }, (_, i) => {
        const [x1, y1] = end(i * 30, 84);
        const [x2, y2] = end(i * 30, 90);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--ink)" strokeWidth="2" />;
      })}
      {between > 0 && <path d={`M100 100 L${sx} ${sy} A46 46 0 ${a2 - a1 > 180 ? 1 : 0} 1 ${ex} ${ey} Z`} fill="var(--red-deep)" opacity="0.2" />}
      <line x1="100" y1="100" x2={hx} y2={hy} stroke="var(--ink)" strokeWidth="6" strokeLinecap="round" />
      <line x1="100" y1="100" x2={mx} y2={my} stroke="var(--red-deep)" strokeWidth="4" strokeLinecap="round" />
      <circle cx="100" cy="100" r="6" fill="var(--ink)" />
    </svg>
  );
}

export function ClockLab({ q2, q7 }: { q2: PublicQuestion; q7: PublicQuestion }) {
  const [t, setT] = useState(180); // 3:00, as in the render
  const [found, setFound] = useState<number[]>([]);
  const [msg, setMsg] = useState("");
  const { between } = hands(t);
  const move = (d: number) => setT((x) => (((x + d) % 720) + 720) % 720);

  return (
    <div className="lab-grid">
      <section className="s-card" aria-label="Clock">
        <Clock t={t} />
        <div style={{ display: "flex", justifyContent: "center", gap: 40, marginTop: 16, textAlign: "center" }} aria-live="polite">
          <div>
            <p className="sm muted">Time</p>
            <p className="s-title" style={{ fontSize: 44 }}>
              {fmt(t)}
            </p>
          </div>
          <div>
            <p className="sm muted">Angle between hands</p>
            <p className="s-title" style={{ fontSize: 44, color: "var(--red-text)" }}>
              {Number.isInteger(between) ? between : between.toFixed(1)}°
            </p>
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 8, marginTop: 14 }}>
          <button type="button" className="tool-btn" onClick={() => move(-60)}>
            − 1 h
          </button>
          <button type="button" className="tool-btn" onClick={() => move(60)}>
            + 1 h
          </button>
          <button type="button" className="tool-btn ink" onClick={() => move(-5)}>
            − 5 min
          </button>
          <button type="button" className="tool-btn ink" onClick={() => move(5)}>
            + 5 min
          </button>
          <button type="button" className="tool-btn ink" onClick={() => move(-1)}>
            − 1 min
          </button>
          <button type="button" className="tool-btn red" onClick={() => move(1)}>
            + 1 min
          </button>
        </div>
      </section>

      <div className="stack" style={{ gap: 12 }}>
        <section className="s-card-ink" aria-labelledby="q2-title">
          <p className="lbl">Handbook Q2 · test with the clock</p>
          <p id="q2-title" className="q-prompt">
            {q2.prompt}
          </p>
          <ul className="q-details">{q2.details?.map((d) => <li key={d}>{d}</li>)}</ul>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, margin: "14px 0" }}>
            <button type="button" className="tool-btn red" onClick={() => setT(115)}>
              Set clock to 1:55
            </button>
            <button type="button" className="btn btn-ghost" onClick={() => setT(120)}>
              Set clock to 2:00
            </button>
          </div>
          <p className="sm">Move one minute at a time. When does the angle hit exactly 60°?</p>
          <div style={{ marginTop: 14 }}>
            <AnswerBox question={q2} tone="dark" layout="pills" />
          </div>
        </section>

        <section className="s-card" aria-labelledby="q7-title">
          <p className="lbl">Handbook Q7 · straight-line hunt</p>
          <p id="q7-title" className="q-prompt" style={{ fontSize: 16 }}>
            {q7.prompt} Log each one you find.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center", margin: "12px 0" }}>
            <button
              type="button"
              className="tool-btn red"
              onClick={() => {
                if (Math.abs(between - 180) > 3) return setMsg("Not 180° yet");
                if (found.includes(t)) return setMsg(`Already logged ${fmt(t)}`);
                setFound((f) => [...f, t].sort((a, b) => a - b));
                setMsg(`Logged ${fmt(t)}`);
              }}
            >
              It’s 180° · log it
            </button>
            <strong>Found: {found.length}</strong>
            <span className="sm muted" role="status">
              {msg}
            </span>
          </div>
          {found.length > 0 && <p className="sm">On this 12-hour face: {found.map(fmt).join(", ")}</p>}
          <p className="sm muted" style={{ marginTop: 6 }}>
            The hands are exactly opposite only part-way through most minutes, so the lab accepts the nearest minute (within 3°).
          </p>
          <div style={{ marginTop: 12 }}>
            <AnswerBox question={q7} layout="pills" explainLabel="How did you count them for a whole day?" />
          </div>
        </section>

        <div className="s-card-yellow tilt-r">
          <p className="lbl">Rule spotted?</p>
          <p className="serif" style={{ fontSize: 22, lineHeight: 1.2 }}>
            The minute hand moves 6° a minute. The hour hand moves only half a degree. Why does that matter at 1:55?
          </p>
        </div>
      </div>

      <section className="s-card-ink row-between" style={{ gridColumn: "1 / -1", alignItems: "center" }}>
        <div>
          <p className="lbl">Make · paper protractor clock</p>
          <p className="s-title" style={{ fontSize: 28 }}>
            Build a clock you can measure
          </p>
          <p className="sm" style={{ marginTop: 6 }}>
            Cut a card circle, mark 30° steps, fix two hands with a split pin. Set 5 times your classmates call out and record each angle.
          </p>
        </div>
        <Link href="/studio/ct/2/thinking-spot" className="btn btn-white">
          Thinking Spot · four ropes <span aria-hidden="true">→</span>
        </Link>
      </section>
    </div>
  );
}
