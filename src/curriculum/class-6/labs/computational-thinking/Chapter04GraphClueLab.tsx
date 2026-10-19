"use client";

import Link from "next/link";
import { useState } from "react";
import { addMade } from "@/lib/learning/work-store";

/**
 * PRACTICE, NOT FROM HANDBOOK — a twin of handbook CT 4 Q4 with new numbers
 * (from the renders), so the real question stays a fresh challenge.
 */
const BARS = [45, 30, 60, 40, 50];
const FRIENDS = ["A", "B", "C", "D", "E"] as const;
type Friend = (typeof FRIENDS)[number];

const CLUES: { text: string; ok: (w: Partial<Record<Friend, number>>) => boolean }[] = [
  { text: "C is the heaviest of all five.", ok: (w) => w.C !== undefined && w.C === Math.max(...BARS) },
  {
    text: "E is lighter than C but heavier than everyone else.",
    ok: (w) => w.E !== undefined && w.C !== undefined && w.E < w.C && (["A", "B", "D"] as Friend[]).every((f) => w[f] !== undefined && w[f]! < w.E!),
  },
  { text: "A is exactly 5 kg lighter than E.", ok: (w) => w.A !== undefined && w.E !== undefined && w.E - w.A === 5 },
  { text: "B is lighter than D.", ok: (w) => w.B !== undefined && w.D !== undefined && w.B < w.D },
];

function ClueCracker() {
  const [friend, setFriend] = useState<Friend>("C");
  const [labels, setLabels] = useState<(Friend | null)[]>(BARS.map(() => null));
  const weights: Partial<Record<Friend, number>> = {};
  labels.forEach((f, i) => f && (weights[f] = BARS[i]));
  const placed = labels.filter(Boolean).length;
  const satisfied = CLUES.map((c) => c.ok(weights));
  const cracked = placed === 5 && satisfied.every(Boolean);

  const place = (i: number) =>
    setLabels((ls) => {
      const next = ls.map((f) => (f === friend ? null : f));
      next[i] = friend;
      return next;
    });

  return (
    <>
      <section className="s-card" aria-labelledby="gc-step">
        <p id="gc-step" className="lbl">
          1 · Pick a friend · 2 · tap the bar you think is theirs
        </p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", margin: "8px 0 16px" }} role="group" aria-label="Pick a friend">
          {FRIENDS.map((f) => (
            <button key={f} type="button" aria-pressed={f === friend} onClick={() => setFriend(f)} className="tool-btn ink" style={{ width: 48, height: 48, fontSize: 18, outline: f === friend ? "3px solid var(--yellow)" : undefined, background: f === friend ? "var(--red-deep)" : undefined }}>
              {f}
            </button>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 10, height: 240, borderLeft: "2px solid var(--ink)", borderBottom: "2px solid var(--ink)", padding: "0 10px" }}>
          {BARS.map((b, i) => (
            <button
              key={i}
              type="button"
              onClick={() => place(i)}
              aria-label={`Bar ${i + 1}, ${b} kg${labels[i] ? `, labelled ${labels[i]}` : ", no label"}. Label as ${friend}`}
              style={{ flex: 1, height: `${(b / 60) * 85}%`, border: 0, borderRadius: "4px 4px 0 0", cursor: "pointer", background: labels[i] ? "var(--ink)" : "var(--grey)", color: labels[i] ? "#fff" : "var(--ink)", position: "relative", fontWeight: 700, fontSize: 18, paddingTop: 8 }}
            >
              <span style={{ position: "absolute", top: -22, left: 0, right: 0, fontSize: 12, color: "var(--ink)" }}>{b} kg</span>
              {labels[i] ?? "?"}
            </button>
          ))}
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center", marginTop: 14, flexWrap: "wrap" }}>
          <button type="button" className="btn btn-ghost" onClick={() => setLabels(BARS.map(() => null))}>
            Clear labels
          </button>
          <strong className="sm" role="status">
            {cracked ? "Cracked. Every clue fits." : `Labels placed: ${placed} of 5`}
          </strong>
        </div>
      </section>
      <div className="stack" style={{ gap: 12 }}>
        <section className="s-card-ink" aria-label="Clues">
          <p className="lbl">Clues · they turn white when satisfied</p>
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {CLUES.map((c, i) => (
              <li key={c.text} className="sm" style={{ borderTop: "1px solid var(--ink-2)", padding: "10px 0", color: satisfied[i] ? "#fff" : "var(--muted-on-ink)", fontWeight: satisfied[i] ? 700 : 400 }}>
                <span aria-hidden="true">{satisfied[i] ? "● " : "○ "}</span>
                {c.text}
                <span className="sr-only">{satisfied[i] ? " (satisfied)" : " (not yet)"}</span>
              </li>
            ))}
          </ul>
        </section>
        <div className="s-card-yellow tilt-r">
          <p className="lbl">Strategy card</p>
          <p className="serif" style={{ fontSize: 22, lineHeight: 1.2 }}>
            Start with the clue that fixes one bar for sure. Then each new label makes the next clue easier.
          </p>
        </div>
        <ChartBuilder />
        <p className="sm">
          Practice twin, not from the handbook. Ready for the real one?{" "}
          <Link href="/studio/ct/4/q/4" className="ul" style={{ fontWeight: 600 }}>
            Try handbook Q4
          </Link>
        </p>
      </div>
    </>
  );
}

function ChartBuilder() {
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState([
    { label: "", value: "" },
    { label: "", value: "" },
    { label: "", value: "" },
    { label: "", value: "" },
    { label: "", value: "" },
  ]);
  const [saved, setSaved] = useState(false);
  const nums = rows.map((r) => Number(r.value) || 0);
  const max = Math.max(1, ...nums);

  return (
    <section className="s-card" aria-labelledby="cb-title">
      <p className="lbl">Make · your own clue graph</p>
      <p id="cb-title" className="sm">
        Measure 5 things in class (heights of plants, lengths of pencils), draw the bar graph without labels and write 4 clues. Swap with another team.
      </p>
      {!open ? (
        <button type="button" className="btn btn-red" style={{ marginTop: 12 }} onClick={() => setOpen(true)} aria-expanded={false}>
          Open the chart builder
        </button>
      ) : (
        <div style={{ marginTop: 12 }}>
          {rows.map((r, i) => (
            <div key={i} className="form-grid" style={{ gridTemplateColumns: "1fr 100px", gap: 8, marginBottom: 6 }}>
              <div className="fld">
                <label htmlFor={`cb-l-${i}`} className="sr-only">
                  Thing {i + 1}
                </label>
                <input id={`cb-l-${i}`} placeholder={`Thing ${i + 1}`} value={r.label} onChange={(e) => setRows((rs) => rs.map((x, j) => (j === i ? { ...x, label: e.target.value } : x)))} />
              </div>
              <div className="fld">
                <label htmlFor={`cb-v-${i}`} className="sr-only">
                  Value {i + 1}
                </label>
                <input id={`cb-v-${i}`} inputMode="numeric" placeholder="cm" value={r.value} onChange={(e) => setRows((rs) => rs.map((x, j) => (j === i ? { ...x, value: e.target.value.replace(/[^\d.]/g, "") } : x)))} />
              </div>
            </div>
          ))}
          <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 120, borderBottom: "2px solid var(--ink)", marginTop: 12 }} role="img" aria-label="Your bar graph, without labels">
            {nums.map((n, i) => (
              <span key={i} style={{ flex: 1, height: `${(n / max) * 100}%`, background: "var(--ink)", borderRadius: "3px 3px 0 0" }} />
            ))}
          </div>
          <button
            type="button"
            className="btn btn-ink"
            style={{ marginTop: 12 }}
            disabled={saved || nums.filter(Boolean).length < 3}
            onClick={() => {
              addMade({ title: "My clue graph", detail: rows.map((r) => `${r.label || "?"} ${r.value}`).join(", "), from: "CT 4 · Graph Clue Cracker" });
              setSaved(true);
            }}
          >
            {saved ? "Saved to my portfolio" : "Save to my portfolio"}
          </button>
        </div>
      )}
    </section>
  );
}

export function ClueLab() {
  return (
    <div className="lab-grid">
      <ClueCracker />
    </div>
  );
}
