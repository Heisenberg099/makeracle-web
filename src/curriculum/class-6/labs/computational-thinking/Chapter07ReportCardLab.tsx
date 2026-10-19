"use client";

import { useState } from "react";
import { AnswerBox } from "@/features/studio/questions/AnswerBox";
import { addMade } from "@/lib/learning/work-store";
import type { PublicQuestion } from "@/curriculum/class-6/student-safe";

const SUBJECTS = [
  { name: "Dance", got: 22, of: 25 },
  { name: "Maths", got: 41, of: 50 },
  { name: "Science", got: 93, of: 100 },
];

function Ranker({ q1 }: { q1: PublicQuestion }) {
  const [order, setOrder] = useState<string[]>([]);
  const [converted, setConverted] = useState(false);
  const ranked = order.length === 3;

  return (
    <section className="s-card" aria-labelledby="rc-q1">
      <div className="row-between" style={{ alignItems: "center" }}>
        <p className="lbl" style={{ margin: 0 }}>
          Handbook Q1
        </p>
        <button type="button" className="btn btn-ghost" disabled={!ranked} aria-pressed={converted} onClick={() => setConverted((c) => !c)} title={ranked ? undefined : "Rank the subjects first"}>
          {converted ? "Show the marks" : "Convert all to /100"}
        </button>
      </div>
      <p id="rc-q1" className="q-prompt">
        {q1.prompt}
      </p>
      <ul className="q-details">{q1.details?.map((d) => <li key={d}>{d}</li>)}</ul>
      {!ranked && <p className="sm muted">Rank them first. “Convert all to /100” unlocks after you have tried.</p>}
      <div className="grid g3" style={{ gap: 10, marginTop: 14 }} role="group" aria-label="Tap the subjects, best first">
        {SUBJECTS.map((s) => {
          const pos = order.indexOf(s.name);
          const pct = Math.round((s.got / s.of) * 100);
          return (
            <button
              key={s.name}
              type="button"
              aria-pressed={pos >= 0}
              onClick={() => setOrder((o) => (o.includes(s.name) ? o.filter((x) => x !== s.name) : [...o, s.name]))}
              style={{ textAlign: "left", border: 0, borderRadius: 6, padding: 14, cursor: "pointer", background: pos >= 0 ? "var(--ink)" : "var(--ground)", color: pos >= 0 ? "#fff" : "var(--ink)", font: "inherit" }}
            >
              <span className="s-title" style={{ fontSize: 22, display: "block" }}>
                {s.name}
                {pos >= 0 ? ` · ${pos + 1}` : ""}
              </span>
              <span className="s-title" style={{ fontSize: 34, display: "block" }}>
                {converted ? `${pct}/100` : `${s.got}/${s.of}`}
              </span>
              <span className="pbar" style={{ display: "block", marginTop: 8 }}>
                <span style={{ width: converted ? `${pct}%` : 0 }} />
              </span>
            </button>
          );
        })}
      </div>
      <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap", marginTop: 12 }}>
        <span className="sm" style={{ fontWeight: 600 }} role="status">
          Your order: {order.length ? order.join(" → ") : "tap the subjects, best first"}
        </span>
        <button type="button" className="btn btn-ghost" onClick={() => (setOrder([]), setConverted(false))}>
          Start again
        </button>
      </div>
      <div style={{ marginTop: 16, borderTop: "1px solid var(--line)", paddingTop: 14 }}>
        <p className="lbl">Which option matches your order?</p>
        <AnswerBox question={q1} />
      </div>
    </section>
  );
}

const FRACTIONS = [
  { label: "10/15", v: 10 / 15 },
  { label: "8/9", v: 8 / 9 },
  { label: "17/18", v: 17 / 18 },
  { label: "5/6", v: 5 / 6 },
];

function NumberLine({ q3 }: { q3: PublicQuestion }) {
  const [on, setOn] = useState<string[]>([]);
  return (
    <section className="s-card-ink" aria-labelledby="rc-q3">
      <p className="lbl">Handbook Q3 · place each fraction on the line</p>
      <p id="rc-q3" className="q-prompt">
        {q3.prompt}
      </p>
      <ul className="q-details">{q3.details?.map((d) => <li key={d}>{d}</li>)}</ul>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", margin: "14px 0" }} role="group" aria-label="Place fractions">
        {FRACTIONS.map((f) => (
          <button key={f.label} type="button" className="tool-btn" aria-pressed={on.includes(f.label)} onClick={() => setOn((o) => (o.includes(f.label) ? o.filter((x) => x !== f.label) : [...o, f.label]))} style={on.includes(f.label) ? { background: "var(--yellow)", color: "var(--ink)" } : undefined}>
            {f.label}
          </button>
        ))}
      </div>
      <div style={{ position: "relative", height: 70, margin: "10px 8px 0" }} role="img" aria-label={`Number line from 0 to 1 with ${on.join(", ") || "no fractions"} placed`}>
        <div style={{ position: "absolute", left: 0, right: 0, top: 40, height: 2, background: "#fff" }} />
        <span className="sm" style={{ position: "absolute", left: -4, top: 48 }}>
          0
        </span>
        <span className="sm" style={{ position: "absolute", right: -4, top: 48 }}>
          1
        </span>
        {FRACTIONS.filter((f) => on.includes(f.label)).map((f, i) => (
          <span key={f.label} style={{ position: "absolute", left: `${f.v * 100}%`, top: i % 2 ? 0 : 14, transform: "translateX(-50%)", background: "var(--yellow)", color: "var(--ink)", fontSize: 12, fontWeight: 700, padding: "2px 6px", borderRadius: 4 }}>
            {f.label}
          </span>
        ))}
      </div>
      <p className="sm" style={{ marginTop: 6 }}>
        Zoom tip: all four sit between 0.6 and 1. Turning them into ninetieths (the options use /90) makes the gaps easy to see.
      </p>
      <div style={{ marginTop: 14 }}>
        <AnswerBox question={q3} tone="dark" layout="pills" />
      </div>
    </section>
  );
}

function MyReportCard() {
  const [tests, setTests] = useState(["17 / 20", "34 / 40", ""]);
  const [saved, setSaved] = useState(false);
  const parsed = tests.map((t) => {
    const m = t.match(/^\s*(\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)\s*$/);
    if (!m) return null;
    const got = Number(m[1]);
    const of = Number(m[2]);
    return of > 0 && got <= of ? Math.round((got / of) * 100) : null;
  });
  return (
    <section className="s-card-yellow tilt-r" aria-labelledby="my-rc">
      <p className="lbl">Make · my own report card</p>
      <p id="my-rc" className="serif" style={{ fontSize: 22, lineHeight: 1.2 }}>
        Collect three of your own test scores with different totals. Convert, compare, and draw your own bars.
      </p>
      {tests.map((t, i) => (
        <div key={i} className="fld" style={{ marginTop: 10 }}>
          <label htmlFor={`rc-t${i}`}>Test {i + 1}</label>
          <input id={`rc-t${i}`} value={t} placeholder="e.g. 18 / 25" onChange={(e) => setTests((ts) => ts.map((x, j) => (j === i ? e.target.value : x)))} style={{ background: "var(--paper)", paddingInline: 10, borderRadius: 6 }} />
          {parsed[i] !== null && (
            <span className="pbar ink" style={{ display: "block" }} aria-label={`${parsed[i]} out of 100`}>
              <span style={{ width: `${parsed[i]}%` }} />
            </span>
          )}
          {t && parsed[i] === null && <span className="err">Write it like 18 / 25.</span>}
        </div>
      ))}
      <button
        type="button"
        className="btn btn-ink"
        style={{ marginTop: 14 }}
        disabled={saved || parsed.filter((p) => p !== null).length < 2}
        onClick={() => {
          addMade({ title: "My report card", detail: tests.filter(Boolean).map((t, i) => `${t} = ${parsed[i]}/100`).join(" · "), from: "CT 7 · Report Card Lab" });
          setSaved(true);
        }}
      >
        {saved ? "Added to my portfolio" : "Add to portfolio"}
      </button>
    </section>
  );
}

export function ReportCardLab({ q1, q3 }: { q1: PublicQuestion; q3: PublicQuestion }) {
  return (
    <div className="stack" style={{ gap: 16 }}>
      <Ranker q1={q1} />
      <div className="lab-grid">
        <NumberLine q3={q3} />
        <MyReportCard />
      </div>
    </div>
  );
}
