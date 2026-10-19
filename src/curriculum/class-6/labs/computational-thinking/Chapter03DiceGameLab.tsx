"use client";

import { useState } from "react";
import { AnswerBox } from "@/features/studio/questions/AnswerBox";
import { PostButton } from "@/features/studio/class-wall/PostButton";
import type { PublicQuestion } from "@/curriculum/class-6/student-safe";

const TARGET = 29;

function DiceGame({ q1 }: { q1: PublicQuestion }) {
  const [rolls, setRolls] = useState<number[]>([]);
  const [best, setBest] = useState<number | null>(null);
  const total = rolls.reduce((a, b) => a + b, 0);
  const sixes = rolls.filter((r) => r === 6).length;
  const over = sixes >= 3;

  const roll = (n: number) => {
    if (over) return;
    const next = [...rolls, n];
    setRolls(next);
    const s6 = next.filter((r) => r === 6).length;
    const sum = next.reduce((a, b) => a + b, 0);
    if (s6 === 3 && sum === TARGET) setBest((b) => (b === null ? next.length : Math.min(b, next.length)));
  };

  const status = !over
    ? rolls.length === 0
      ? "Pick a roll to start. The game ends on the third 6."
      : "Keep rolling. The game ends on the third 6."
    : total === TARGET
      ? `Game over: ${TARGET} in ${rolls.length} rolls. Can you do it in fewer?`
      : `Game over with ${total}, not ${TARGET}. Try again.`;

  return (
    <section className="s-card" aria-labelledby="dice-q">
      <p className="lbl">Handbook Q1 · play it to think it</p>
      <p id="dice-q" className="q-prompt">
        {q1.prompt}
      </p>
      <p className="sm muted" style={{ margin: "14px 0 8px" }}>
        Choose each roll
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }} role="group" aria-label="Choose a roll">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => roll(n)}
            disabled={over}
            aria-label={`Roll a ${n}`}
            style={{ width: 64, height: 64, borderRadius: 8, border: 0, cursor: over ? "default" : "pointer", background: n === 6 ? "var(--red-deep)" : "var(--ink)", color: "#fff", fontSize: 28, fontWeight: 700, opacity: over ? 0.5 : 1 }}
          >
            {n}
          </button>
        ))}
      </div>
      <ol aria-label="Rolls so far" style={{ display: "flex", flexWrap: "wrap", gap: 6, listStyle: "none", margin: "14px 0", padding: 10, minHeight: 52, background: "var(--ground)", borderRadius: 6 }}>
        {rolls.map((r, i) => (
          <li key={i} style={{ width: 32, height: 32, borderRadius: 4, display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 700, background: r === 6 ? "var(--red-deep)" : "var(--paper)", color: r === 6 ? "#fff" : "var(--ink)" }}>
            {r}
          </li>
        ))}
      </ol>
      <div className="grid g3" style={{ gap: 8 }}>
        <div className="stat-tile">
          <p className="sm" style={{ color: "var(--muted-on-ink)" }}>Total score</p>
          <p className="v">{total}</p>
        </div>
        <div className="stat-tile">
          <p className="sm" style={{ color: "var(--muted-on-ink)" }}>Sixes</p>
          <p className="v" style={{ color: "var(--yellow)" }}>
            {sixes} / 3
          </p>
        </div>
        <div className="stat-tile">
          <p className="sm" style={{ color: "var(--muted-on-ink)" }}>Rolls</p>
          <p className="v">{rolls.length}</p>
        </div>
      </div>
      <p className={`status-bar${over && total === TARGET ? " ok" : ""}`} role="status" style={{ marginTop: 10 }}>
        {status}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center", marginTop: 12 }}>
        <button type="button" className="tool-btn red" onClick={() => setRolls((r) => r.slice(0, -1))} disabled={!rolls.length}>
          Undo last roll
        </button>
        <button type="button" className="btn btn-ghost" onClick={() => setRolls([])}>
          New game
        </button>
        <span className="sm" style={{ fontWeight: 600 }}>
          Best so far: {best === null ? "—" : `${best} rolls`}
        </span>
      </div>
      <div style={{ marginTop: 18, borderTop: "1px solid var(--line)", paddingTop: 16 }}>
        <p className="lbl">Your answer to Q1</p>
        <AnswerBox question={q1} layout="pills" />
      </div>
    </section>
  );
}

function Palindrome({ q8 }: { q8: PublicQuestion }) {
  const [d, setD] = useState([1, 2, 3]);
  const digits = [d[0], d[1], d[2], d[1], d[0]];
  const hasEven = digits.some((x) => x % 2 === 0);
  const hasOdd = digits.some((x) => x % 2 === 1);
  const diff = Math.max(...digits) - Math.min(...digits);
  const bump = (i: number) => setD((v) => v.map((x, j) => (j !== i ? x : i === 0 ? (x % 9) + 1 : (x + 1) % 10)));
  const checks = [
    { ok: hasEven && hasOdd, text: "Both even and odd digits" },
    { ok: diff === 9, text: `Greatest difference is 9 (now ${diff})` },
    { ok: true, text: "Reads the same both ways" },
  ];

  return (
    <section className="s-card-yellow" aria-labelledby="pal-q">
      <p className="lbl">Handbook Q8 · palindrome builder</p>
      <p id="pal-q" className="q-prompt" style={{ fontSize: 16 }}>
        {q8.prompt}
      </p>
      <div style={{ display: "flex", gap: 8, justifyContent: "center", margin: "16px 0 8px" }}>
        {digits.map((x, i) =>
          i < 3 ? (
            <button key={i} type="button" onClick={() => bump(i)} aria-label={`Digit ${i + 1}: ${x}. Tap to change`} style={{ width: 52, height: 52, borderRadius: 999, border: 0, background: "var(--ink)", color: "#fff", fontSize: 20, fontWeight: 700, cursor: "pointer" }}>
              {x}
            </button>
          ) : (
            <span key={i} aria-label={`Digit ${i + 1}: ${x} (mirrors digit ${5 - i})`} style={{ width: 52, height: 52, borderRadius: 999, background: "var(--paper)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 20, fontWeight: 700 }}>
              {x}
            </span>
          ),
        )}
      </div>
      <p className="sm" style={{ textAlign: "center" }}>
        Tap the first three digits to change them. The last two mirror automatically.
      </p>
      <ul style={{ listStyle: "none", padding: 0, margin: "12px 0" }} aria-live="polite">
        {checks.map((c) => (
          <li key={c.text} className="sm" style={{ fontWeight: 700, opacity: c.ok ? 1 : 0.6 }}>
            {c.ok ? "✓" : "○"} {c.text}
          </li>
        ))}
      </ul>
      <p className="s-title" style={{ fontSize: 26 }} aria-live="polite">
        Digit sum {digits.reduce((a, b) => a + b, 0)}
      </p>
      <div style={{ marginTop: 14 }}>
        <AnswerBox question={q8} layout="pills" />
      </div>
    </section>
  );
}

function RiddleMaker() {
  const [text, setText] = useState("");
  return (
    <section className="s-card-ink" aria-labelledby="riddle-title">
      <p className="lbl">Make · number riddle cards</p>
      <p id="riddle-title" className="sm">
        Write a “I am a number…” riddle with three clues, like Q8. Test it on your pair, then post the best one to the class wall.
      </p>
      <div className="fld" style={{ marginTop: 12 }}>
        <label htmlFor="riddle" style={{ color: "#fff" }}>
          My riddle
        </label>
        <textarea id="riddle" value={text} onChange={(e) => setText(e.target.value)} placeholder="I am a 3-digit number…" style={{ color: "#fff", borderBottomColor: "#fff" }} />
      </div>
      <div style={{ marginTop: 12 }}>
        <PostButton className="btn btn-white" label="Post a riddle" disabled={text.trim().length < 10} post={() => ({ title: "Number riddle", body: text.trim(), kind: "Riddle", from: "CT 3 · Number Play" })} />
      </div>
    </section>
  );
}

export function DiceLab({ q1, q8 }: { q1: PublicQuestion; q8: PublicQuestion }) {
  return (
    <div className="lab-grid">
      <DiceGame q1={q1} />
      <div className="stack" style={{ gap: 12 }}>
        <Palindrome q8={q8} />
        <RiddleMaker />
      </div>
    </div>
  );
}
