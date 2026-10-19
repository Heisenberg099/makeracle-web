"use client";

import { useState } from "react";
import { AnswerBox } from "@/features/studio/questions/AnswerBox";
import { HintLadder } from "@/components/ui/HintLadder";
import { PostButton } from "@/features/studio/class-wall/PostButton";
import { useNote } from "@/lib/learning/work-store";
import type { PublicQuestion } from "@/curriculum/class-6/student-safe";

const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a);
const POLY: Record<number, string> = { 3: "Triangle", 4: "Square", 5: "Pentagon", 6: "Hexagon", 8: "Octagon", 10: "Decagon" };

/** Join every k-th point on an n-point circle, starting from point k, until back at the start. */
export function circleWalk(n: number, k: number) {
  const steps = n / gcd(n, k);
  const r = (k / gcd(n, k)) % steps;
  const shape = steps === 2 ? "Straight line" : r === 1 || r === steps - 1 ? (POLY[steps] ?? `${steps}-sided polygon`) : `${steps}-point star`;
  const path: number[] = [];
  let p = k % n;
  for (let i = 0; i <= steps; i++) {
    path.push(p);
    p = (p + k) % n;
  }
  return { steps, shape, path };
}

function Circle({ n, k }: { n: number; k: number }) {
  const { path } = circleWalk(n, k);
  const pt = (i: number) => {
    const a = (i / n) * 2 * Math.PI - Math.PI / 2;
    // rounded so server and browser render identical coordinates
    return [+(150 + 120 * Math.cos(a)).toFixed(2), +(150 + 120 * Math.sin(a)).toFixed(2)];
  };
  return (
    <svg viewBox="0 0 300 300" width="100%" style={{ maxWidth: 380, display: "block", margin: "0 auto" }} role="img" aria-label={`${n}-point circle joined by adding ${k}`}>
      <circle cx="150" cy="150" r="120" fill="none" stroke="var(--muted)" strokeDasharray="2 5" />
      <polygon points={path.map((i) => pt(i).join(",")).join(" ")} fill="var(--red-deep)" fillOpacity="0.08" stroke="var(--red-deep)" strokeWidth="2.5" strokeLinejoin="round" />
      {Array.from({ length: n }, (_, i) => {
        const [x, y] = pt(i);
        const [lx, ly] = [+(150 + 138 * Math.cos((i / n) * 2 * Math.PI - Math.PI / 2)).toFixed(2), +(150 + 138 * Math.sin((i / n) * 2 * Math.PI - Math.PI / 2)).toFixed(2)];
        return (
          <g key={i}>
            <circle cx={x} cy={y} r={path.includes(i) ? 6 : 3.5} fill={path.includes(i) ? "var(--red-deep)" : "var(--muted)"} />
            <text x={lx} y={ly} fontSize="10" textAnchor="middle" dominantBaseline="central" fill="var(--ink)">
              {i === 0 ? n : i}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

const TABLE = [2, 3, 4, 5, 6]; // rows of the handbook's record table (n = 12)

export function CircleLab({ think, exp2 }: { think: string; exp2: PublicQuestion }) {
  const [n, setN] = useState(12);
  const [k, setK] = useState(5);
  const [tried, setTried] = useState<number[]>([5]);
  const [idea, setIdea] = useNote("ct5-act-4");
  const { steps, shape } = circleWalk(n, k);

  const pickK = (v: number) => {
    setK(v);
    if (n === 12) setTried((t) => (t.includes(v) ? t : [...t, v]));
  };

  return (
    <>
      <div className="lab-grid">
        <section className="s-card print-me" aria-label="String-art circle">
          <Circle n={n} k={k} />
          <div style={{ display: "flex", justifyContent: "center", gap: 36, marginTop: 10, textAlign: "center" }} aria-live="polite">
            <div>
              <p className="sm muted">Steps back to start</p>
              <p className="s-title" style={{ fontSize: 44 }}>
                {steps}
              </p>
            </div>
            <div>
              <p className="sm muted">Shape formed</p>
              <p className="s-title" style={{ fontSize: 44, color: "var(--red-text)" }}>
                {shape}
              </p>
            </div>
          </div>
        </section>
        <div className="stack" style={{ gap: 12 }}>
          <section className="s-card-ink" aria-label="Controls">
            <p className="lbl">1 · Pick the number to add (start from the same number)</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }} role="group" aria-label="Number to add">
              {Array.from({ length: n - 2 }, (_, i) => i + 2).map((v) => (
                <button key={v} type="button" className="tool-btn" aria-pressed={v === k} onClick={() => pickK(v)} style={{ width: 44, padding: 0 }}>
                  {v}
                </button>
              ))}
            </div>
            <p className="lbl" style={{ marginTop: 14 }}>
              2 · Explorations: change the circle
            </p>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }} role="group" aria-label="Points on the circle">
              {[12, 16, 20].map((v) => (
                <button key={v} type="button" className="tool-btn" aria-pressed={v === n} onClick={() => (setN(v), setK((x) => Math.min(x, v - 1)))}>
                  {v} points
                </button>
              ))}
            </div>
          </section>

          <section className="s-card" aria-labelledby="rec-title">
            <p id="rec-title" className="lbl">
              3 · Your record table (12 points · fills in as you try)
            </p>
            <table className="tbl" style={{ fontSize: 14 }}>
              <thead>
                <tr>
                  <th scope="col">Number added</th>
                  <th scope="col">Steps to start</th>
                  <th scope="col">Shape formed</th>
                </tr>
              </thead>
              <tbody>
                {TABLE.map((v) => {
                  const w = circleWalk(12, v);
                  const done = tried.includes(v);
                  return (
                    <tr key={v}>
                      <th scope="row" style={{ textAlign: "left" }}>
                        {v}
                      </th>
                      <td>{done ? w.steps : "?"}</td>
                      <td className={done ? undefined : "muted"}>{done ? w.shape : "Try it"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </section>

          <section className="s-card-yellow" aria-labelledby="think-title">
            <p className="lbl">4 · Think it through (from the handbook)</p>
            <p id="think-title" className="serif" style={{ fontSize: 22, lineHeight: 1.2 }}>
              {think}
            </p>
            <div className="fld" style={{ marginTop: 10 }}>
              <label htmlFor="idea">My idea</label>
              <textarea id="idea" value={idea} onChange={(e) => setIdea(e.target.value)} placeholder="5 and 12 share no factor except 1, so…" style={{ background: "var(--paper)", padding: 10, borderRadius: 6 }} />
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 12 }}>
              <PostButton disabled={idea.trim().length < 10} post={() => ({ title: "Why does 5 make a star?", body: idea.trim(), kind: "Idea", from: "CT 5 · Circle of 12" })} />
            </div>
            <div style={{ marginTop: 12 }}>
              <HintLadder title="Ask for a hint" hints={["List the factors of 12.", "Which of the numbers you added are factors of 12, and which are not?"]} note="Practice hints, not from the handbook." />
            </div>
          </section>
        </div>
      </div>

      <section className="s-card" style={{ marginTop: 16 }} aria-labelledby="exp2">
        <p className="lbl">Exploration 2 · test each option on the circle above</p>
        <p id="exp2" className="q-prompt" style={{ marginBottom: 12 }}>
          {exp2.prompt}
        </p>
        <AnswerBox question={exp2} layout="pills" />
      </section>

      <section className="s-card-ink row-between" style={{ marginTop: 16, alignItems: "center" }}>
        <div style={{ maxWidth: 640 }}>
          <p className="lbl">Make it yours · counts toward Pattern recognition</p>
          <p className="s-title" style={{ fontSize: 28 }}>
            String-art star card
          </p>
          <p className="sm" style={{ marginTop: 6 }}>
            Print your favourite star as a {n}-nail template, wind thread around nails on card or a board, and photograph it for your portfolio. Label it with the number you added and the steps it took.
          </p>
        </div>
        <button type="button" className="btn btn-white" onClick={() => window.print()}>
          Print my template
        </button>
      </section>
    </>
  );
}
