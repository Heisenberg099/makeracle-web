"use client";

import { useState } from "react";
import { AnswerBox } from "@/features/studio/questions/AnswerBox";
import { PostButton } from "@/features/studio/class-wall/PostButton";
import { useAttempt } from "@/lib/learning/work-store";
import type { PublicQuestion } from "@/curriculum/class-6/student-safe";

/** Handbook CT 10 Q7 rules, applied in order, then the sign is reversed. */
function run(input: number) {
  const rule = input > 400 ? 0 : input < 201 ? 1 : 2;
  const mid = rule === 0 ? input - 100 : rule === 1 ? input + 100 : 0;
  return { rule, mid, out: -mid };
}

const RULES = ["If input > 400 → subtract 100", "If input < 201 → add 100", "If 201 to 401 → becomes 0"];

function MagicBox({ q7 }: { q7: PublicQuestion }) {
  const [input, setInput] = useState(300);
  const { rule, mid, out } = run(input);
  return (
    <section className="s-card-ink" aria-labelledby="mb-q">
      <div className="row-between" style={{ alignItems: "flex-start" }}>
        <div>
          <p className="lbl">Handbook Q7</p>
          <p id="mb-q" className="q-prompt" style={{ color: "#fff" }}>
            Which input produces an output of −345?
          </p>
        </div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }} role="group" aria-label="Load an option into the machine">
          {q7.options.map((o) => (
            <button key={o.key} type="button" className="tool-btn" onClick={() => setInput(Number(String(o.text).replace("−", "-")))} aria-label={`Try ${o.text} in the machine`}>
              {o.text}
            </button>
          ))}
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.4fr) minmax(0,1fr)", gap: 10, marginTop: 14 }} className="mb-grid">
        <div className="s-card">
          <p className="sm muted">Input</p>
          <p className="s-title" style={{ fontSize: 52 }} aria-live="polite">
            {input}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8 }} role="group" aria-label="Change the input">
            {[-100, -10, -1, 1, 10, 100].map((d) => (
              <button key={d} type="button" className="tool-btn" onClick={() => setInput((v) => v + d)} aria-label={`${d > 0 ? "Add" : "Subtract"} ${Math.abs(d)}`}>
                {d > 0 ? `+${d}` : `−${-d}`}
              </button>
            ))}
          </div>
        </div>
        <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 6 }}>
          {RULES.map((r, i) => (
            <li key={r} className="sm" style={{ padding: "10px 12px", borderRadius: 4, display: "flex", justifyContent: "space-between", gap: 8, background: i === rule ? "var(--yellow)" : "var(--ink-2)", color: i === rule ? "var(--ink)" : "var(--muted-on-ink)", fontWeight: i === rule ? 700 : 400 }}>
              <span>{r}</span>
              {i === rule && (
                <span>
                  {input} → {mid}
                </span>
              )}
            </li>
          ))}
          <li className="sm" style={{ padding: "10px 12px", borderRadius: 4, display: "flex", justifyContent: "space-between", background: "var(--red-deep)", color: "#fff", fontWeight: 700 }}>
            <span>Then reverse the sign</span>
            <span>
              {mid} → {out}
            </span>
          </li>
        </ol>
        <div className="s-card-red">
          <p className="sm">Output</p>
          <p className="s-title" style={{ fontSize: 52 }} aria-live="polite">
            {out}
          </p>
          <p className="sm" style={{ fontWeight: 700 }}>
            Target: −345
          </p>
        </div>
      </div>
      <div style={{ marginTop: 16 }}>
        <AnswerBox question={q7} tone="dark" layout="pills" />
      </div>
    </section>
  );
}

const Q4 = [
  { shown: "C + 151 − 41", means: "C − 151 + 41", k: -110 },
  { shown: "C − 80 + 357", means: "C + 80 − 357", k: -277 },
  { shown: "C + 50 + 93", means: "C − 50 − 93", k: -143 },
  { shown: "C + 200 − 68", means: "C − 200 + 68", k: -132 },
];

function UpsideDown({ q4 }: { q4: PublicQuestion }) {
  const [c, setC] = useState(10);
  const [attempt] = useAttempt(q4.id);
  // Rule 2: show the computed values only after the student has submitted an answer.
  const tried = (attempt?.tries ?? 0) > 0;
  return (
    <section className="s-card" aria-labelledby="ud-q">
      <p className="lbl">Handbook Q4 · upside-down signs</p>
      <p id="ud-q" className="q-prompt">
        {q4.prompt}
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "12px 0" }}>
        <span style={{ fontWeight: 700 }}>C =</span>
        <button type="button" className="tool-btn" onClick={() => setC((v) => Math.max(1, v - 10))} aria-label="C minus 10">
          −10
        </button>
        <strong className="s-title" style={{ fontSize: 32 }} aria-live="polite">
          {c}
        </strong>
        <button type="button" className="tool-btn" onClick={() => setC((v) => v + 10)} aria-label="C plus 10">
          +10
        </button>
      </div>
      <table className="tbl" style={{ fontSize: 14 }}>
        <thead>
          <tr>
            <th scope="col">Option</th>
            <th scope="col">Really means</th>
            <th scope="col" style={{ textAlign: "right" }}>
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          {Q4.map((r, i) => (
            <tr key={r.shown}>
              <th scope="row" style={{ textAlign: "left" }}>
                {"abcd"[i]}) {r.shown}
              </th>
              <td className="muted">{tried ? r.means : "Swap the signs yourself first"}</td>
              <td style={{ textAlign: "right", fontWeight: 700, fontSize: 20 }}>{tried ? c + r.k : "?"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {!tried && <p className="sm muted" style={{ marginTop: 8 }}>The table fills in after you submit an answer below, so you can test it with different values of C.</p>}
      <div style={{ marginTop: 14 }}>
        <AnswerBox question={q4} layout="pills" />
      </div>
    </section>
  );
}

function MyBox() {
  const [rules, setRules] = useState("");
  return (
    <section className="s-card-yellow tilt-r" aria-labelledby="mybox">
      <p className="lbl">Make · your own magic box</p>
      <p id="mybox" className="serif" style={{ fontSize: 22, lineHeight: 1.2 }}>
        Write 2 rules and a final twist. Build the box from a shoebox with slips of paper inside, and let your pair guess the rules from 5 inputs.
      </p>
      <div className="fld" style={{ marginTop: 10 }}>
        <label htmlFor="box-rules">My rules</label>
        <textarea id="box-rules" value={rules} onChange={(e) => setRules(e.target.value)} placeholder="If the input is even → halve it…" style={{ background: "var(--paper)", padding: 10, borderRadius: 6 }} />
      </div>
      <div style={{ marginTop: 12 }}>
        <PostButton className="btn btn-ink" label="Share my box" disabled={rules.trim().length < 10} post={() => ({ title: "Guess my magic box", body: rules.trim(), kind: "Magic box", from: "CT 10 · Alex’s Magic Box" })} />
      </div>
    </section>
  );
}

export function MagicBoxLab({ q4, q7 }: { q4: PublicQuestion; q7: PublicQuestion }) {
  return (
    <div className="stack" style={{ gap: 16 }}>
      <MagicBox q7={q7} />
      <div className="lab-grid">
        <UpsideDown q4={q4} />
        <MyBox />
      </div>
    </div>
  );
}
