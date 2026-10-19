"use client";

import Link from "next/link";
import { useState } from "react";

const N = 8;

/** Fence needed: every side of a planted square that faces an unplanted square or the edge. */
export function perimeter(cells: boolean[]) {
  let p = 0;
  cells.forEach((on, i) => {
    if (!on) return;
    const r = Math.floor(i / N);
    const c = i % N;
    const empty = (rr: number, cc: number) => rr < 0 || cc < 0 || rr >= N || cc >= N || !cells[rr * N + cc];
    p += [empty(r - 1, c), empty(r + 1, c), empty(r, c - 1), empty(r, c + 1)].filter(Boolean).length;
  });
  return p;
}

type Mission = "biggest" | "same" | "thin";

const MISSIONS: { id: Mission; label: string; task: string }[] = [
  { id: "biggest", label: "Biggest garden", task: "You have 16 m of fencing. Plant the biggest garden whose perimeter is exactly 16 m." },
  { id: "same", label: "Same fence", task: "Plant any garden. Then add one more square without changing the length of fence you need." },
  { id: "thin", label: "Thin vs fat", task: "Make a garden of exactly 6 m². Make a thin one and a fat one. Which needs more fence?" },
];

export function GardenLab() {
  const [cells, setCells] = useState<boolean[]>(() => Array.from({ length: N * N }, (_, i) => [27, 28, 35, 36].includes(i)));
  const [mission, setMission] = useState<Mission>("biggest");
  const [sameDone, setSameDone] = useState(false);
  const [sixes, setSixes] = useState<number[]>([]);
  const area = cells.filter(Boolean).length;
  const per = perimeter(cells);

  const toggle = (i: number) => {
    const next = cells.slice();
    next[i] = !next[i];
    if (next[i] && area > 0 && perimeter(next) === per) setSameDone(true);
    const a2 = next.filter(Boolean).length;
    if (a2 === 6) setSixes((s) => (s.includes(perimeter(next)) ? s : [...s, perimeter(next)].sort((x, y) => x - y)));
    setCells(next);
  };

  let status = "";
  let ok = false;
  if (mission === "biggest") {
    if (per !== 16) status = `Perimeter is ${per} m. Aim for exactly 16 m.`;
    else if (area < 16) status = `Perimeter is 16 m and area is ${area} m². Can you fit more inside the same fence?`;
    else {
      status = `16 m of fence holds ${area} m². That is the biggest. Why does this shape win?`;
      ok = true;
    }
  } else if (mission === "same") {
    ok = sameDone;
    status = sameDone ? "Done. You added a square and the fence stayed the same. Where did you put it?" : `Fence now: ${per} m. Add one square and keep it at ${per} m.`;
  } else {
    ok = sixes.length >= 2;
    status = sixes.length === 0 ? `Area is ${area} m². Make it exactly 6 m².` : `6 m² gardens so far need: ${sixes.join(" m, ")} m of fence.${ok ? " Thin needs more. Why?" : " Now make a different shape."}`;
  }

  return (
    <div className="lab-grid">
      <section className="s-card" aria-label="Garden grid">
        <div className="row-between" style={{ alignItems: "center", marginBottom: 12 }}>
          <p className="sm muted">Tap squares to plant · each square is 1 m × 1 m</p>
          <button type="button" className="btn btn-ghost" onClick={() => {
            setCells(Array(N * N).fill(false));
            setSameDone(false);
          }}>
            Clear
          </button>
        </div>
        <div className="tapgrid-wrap">
        <div className="tapgrid" style={{ gridTemplateColumns: `repeat(${N}, minmax(44px, 48px))` }} role="group" aria-label="8 by 8 garden">
          {cells.map((on, i) => (
            <button
              key={i}
              type="button"
             
              aria-pressed={on}
              aria-label={`Row ${Math.floor(i / N) + 1}, column ${(i % N) + 1}, ${on ? "planted" : "empty"}`}
              onClick={() => toggle(i)}
              style={{ aspectRatio: "1", border: 0, borderRadius: 2, cursor: "pointer", background: on ? "var(--green)" : "var(--ground)" }}
            />
          ))}
        </div>
        </div>
        <div className="grid g2" style={{ gap: 8, marginTop: 14 }} aria-live="polite">
          <div className="stat-tile">
            <p className="sm" style={{ color: "var(--muted-on-ink)" }}>Area</p>
            <p className="v">
              {area} M<sup>2</sup>
            </p>
          </div>
          <div className="stat-tile" style={{ background: "var(--red-deep)" }}>
            <p className="sm">Perimeter (fence needed)</p>
            <p className="v">{per} M</p>
          </div>
        </div>
      </section>
      <div className="stack" style={{ gap: 12 }}>
        <section className="s-card" aria-label="Missions">
          <p className="lbl">Missions</p>
          <div className="toggles" role="group" aria-label="Choose a mission" style={{ background: "var(--ground)", borderRadius: 999, padding: 4, display: "inline-flex" }}>
            {MISSIONS.map((m) => (
              <button key={m.id} type="button" className="tog" aria-pressed={m.id === mission} onClick={() => setMission(m.id)} style={{ background: m.id === mission ? undefined : "transparent" }}>
                {m.label}
              </button>
            ))}
          </div>
          <p className="q-prompt" style={{ fontSize: 16, margin: "14px 0" }}>
            {MISSIONS.find((m) => m.id === mission)!.task}
          </p>
          <p className={`status-bar${ok ? " ok" : ""}`} role="status">
            {status}
          </p>
        </section>
        <section className="s-card-ink">
          <p className="lbl">Handbook link · Q2 and Q5</p>
          <p className="sm">
            Q2 cuts a 16 cm square along its diagonal. Q5 adds hexagons to a grid without changing the perimeter. Mission 2 here is the square-grid version of Q5: can a new square ever keep the fence the same length?
          </p>
          <p className="sm" style={{ marginTop: 10, display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/studio/ct/6/q/2" className="ul inline-target" style={{ fontWeight: 600 }}>
              Try handbook Q2
            </Link>
            <Link href="/studio/ct/6/q/5" className="ul inline-target" style={{ fontWeight: 600 }}>
              Try handbook Q5
            </Link>
          </p>
        </section>
        <div className="s-card-yellow tilt-r">
          <p className="lbl">Make · real garden bed</p>
          <p className="serif" style={{ fontSize: 22, lineHeight: 1.2 }}>
            Peg out your best design with string in the school garden. Measure the string: does it match your fence number?
          </p>
        </div>
      </div>
    </div>
  );
}
