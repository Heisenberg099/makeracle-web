"use client";

import { useState } from "react";
import { PostButton } from "../PostButton";

/** CT 1 · Q1 machine: the series where each number n appears (n − 1) times, starting at 2. */
function seriesTerms(count: number) {
  const out: number[] = [];
  for (let n = 2; out.length < count; n++) for (let k = 0; k < n - 1 && out.length < count; k++) out.push(n);
  return out;
}

const GIVEN = 11; // terms printed in the handbook question

export function SeriesMachine() {
  const [shown, setShown] = useState(GIVEN);
  const terms = seriesTerms(shown);
  const extra = terms.slice(GIVEN, GIVEN + 20);
  const nines = extra.filter((t) => t === 9).length;

  return (
    <div>
      <ol aria-label="Series so far" style={{ display: "flex", flexWrap: "wrap", gap: 6, listStyle: "none", margin: 0, padding: 0 }}>
        {terms.map((t, i) => (
          <li
            key={i}
            style={{
              minWidth: 36,
              height: 40,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 4,
              fontWeight: 700,
              background: i < GIVEN ? "var(--ground)" : i < GIVEN + 20 ? "var(--yellow)" : "var(--grey)",
            }}
          >
            {t}
          </li>
        ))}
      </ol>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center", marginTop: 14 }}>
        <button type="button" className="tool-btn red" onClick={() => setShown((s) => s + 1)}>
          Grow the series +1
        </button>
        <button type="button" className="tool-btn" style={{ boxShadow: "inset 0 0 0 1.5px var(--ink)", background: "transparent" }} onClick={() => setShown((s) => s + 5)}>
          +5
        </button>
        <button type="button" className="tool-btn" style={{ boxShadow: "inset 0 0 0 1.5px var(--ink)", background: "transparent" }} onClick={() => setShown(GIVEN)}>
          Reset
        </button>
        <span className="sm" role="status">
          Next-20 window: <strong>{extra.length}</strong> of 20 shown · 9s spotted: <strong style={{ color: "var(--red-text)" }}>{nines}</strong>
        </span>
      </div>
    </div>
  );
}

/** Make · Pattern Maker: a growing block pattern (start blocks, add blocks each term). */
export function PatternMaker() {
  const [start, setStart] = useState(3);
  const [add, setAdd] = useState(4);
  const terms = [0, 1, 2, 3].map((i) => start + i * add);
  let first = 1;
  while (start + (first - 1) * add <= 20 && first < 99) first++;

  return (
    <div className="s-card-yellow make-card tilt-r" style={{ padding: 22 }}>
      <p className="lbl">Make · Pattern Maker (like Q4’s block series)</p>
      <p className="sm" style={{ fontWeight: 700 }}>
        Start with {start} blocks, add {add} each term.
      </p>
      <div style={{ display: "flex", gap: 16, alignItems: "flex-end", flexWrap: "wrap", margin: "16px 0" }} role="img" aria-label={`Terms 1 to 4: ${terms.join(", ")} blocks`}>
        {terms.map((b, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min(4, Math.max(1, Math.ceil(Math.sqrt(b))))}, 8px)`, gap: 2, justifyContent: "center" }}>
              {Array.from({ length: Math.min(b, 48) }, (_, k) => (
                <span key={k} style={{ width: 8, height: 8, background: "var(--ink)", display: "block" }} />
              ))}
            </div>
            <span className="sm">
              T{i + 1} · {b}
            </span>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        <button type="button" className="tool-btn" style={{ background: "transparent", boxShadow: "inset 0 0 0 1.5px var(--ink)" }} onClick={() => setStart((s) => (s >= 10 ? 1 : s + 1))}>
          Start +1
        </button>
        <button type="button" className="tool-btn" style={{ background: "transparent", boxShadow: "inset 0 0 0 1.5px var(--ink)" }} onClick={() => setAdd((a) => (a >= 8 ? 1 : a + 1))}>
          Add +1
        </button>
        <button type="button" className="tool-btn red" onClick={() => (setStart(3), setAdd(4))}>
          Reset
        </button>
      </div>
      <p className="serif" style={{ fontSize: 20, lineHeight: 1.2, margin: "16px 0" }}>
        Your challenge for the class: “Which term first has more than 20 blocks?” · answer: term {first}
      </p>
      <PostButton
        className="btn btn-ink"
        post={() => ({
          title: `Start ${start}, add ${add}`,
          body: `Which term first has more than 20 blocks? (start with ${start}, add ${add} each term)`,
          kind: "Pattern",
          from: "CT 1 · Pattern Lab",
        })}
      />
    </div>
  );
}
