"use client";

import Link from "next/link";
import { useState } from "react";

/** PRACTICE, NOT FROM HANDBOOK: "like handbook Q4" — cover a 3 × 3 square with exactly 3 pieces. */
const PIECES = [
  { id: "L", label: "L-piece", size: 4, color: "var(--red-deep)", text: "#fff" },
  { id: "B", label: "Bar", size: 3, color: "var(--ink)", text: "#fff" },
  { id: "D", label: "Domino", size: 2, color: "var(--muted)", text: "#fff" },
] as const;
type PieceId = (typeof PIECES)[number]["id"];

function connected(cells: number[], w: number) {
  if (cells.length <= 1) return true;
  const set = new Set(cells);
  const seen = new Set([cells[0]]);
  const stack = [cells[0]];
  while (stack.length) {
    const c = stack.pop()!;
    const r = Math.floor(c / w);
    const col = c % w;
    for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const rr = r + dr;
      const cc = col + dc;
      const n = rr * w + cc;
      if (rr >= 0 && cc >= 0 && rr < w && cc < w && set.has(n) && !seen.has(n)) {
        seen.add(n);
        stack.push(n);
      }
    }
  }
  return seen.size === cells.length;
}

function SquareBuilder() {
  const [cells, setCells] = useState<(PieceId | null)[]>(Array(9).fill(null));
  const [piece, setPiece] = useState<PieceId>("L");
  const [msg, setMsg] = useState("");
  const count = (id: PieceId) => cells.filter((c) => c === id).length;
  const left = cells.filter((c) => !c).length;
  const shapesOk = PIECES.every((p) => connected(cells.flatMap((c, i) => (c === p.id ? [i] : [])), 3));
  const done = left === 0 && shapesOk && PIECES.every((p) => count(p.id) === p.size);

  const paint = (i: number) => {
    setMsg("");
    const p = PIECES.find((x) => x.id === piece)!;
    if (cells[i] === piece) return setCells((c) => c.map((x, j) => (j === i ? null : x)));
    if (cells[i]) return setMsg("Pieces can’t overlap. Tap that cell with its own piece to clear it first.");
    if (count(piece) >= p.size) return setMsg(`The ${p.label} only has ${p.size} cells.`);
    setCells((c) => c.map((x, j) => (j === i ? piece : x)));
  };

  return (
    <section className="s-card" aria-labelledby="sb-q">
      <p className="lbl">Like handbook Q4 · build a 3 × 3 square from exactly 3 pieces</p>
      <p id="sb-q" className="q-prompt">
        Choose a piece, then paint its cells. Each piece must be one joined shape, and pieces can’t overlap.
      </p>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", margin: "12px 0" }} role="group" aria-label="Choose a piece">
        {PIECES.map((p) => (
          <button key={p.id} type="button" aria-pressed={p.id === piece} onClick={() => setPiece(p.id)} className="tool-btn" style={{ background: p.color, color: p.text, outline: p.id === piece ? "3px solid var(--yellow)" : undefined }}>
            {p.label} · {count(p.id)}/{p.size}
          </button>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 6, maxWidth: 240 }} role="group" aria-label="3 by 3 square">
        {cells.map((c, i) => {
          const p = PIECES.find((x) => x.id === c);
          return (
            <button key={i} type="button" onClick={() => paint(i)} aria-label={`Cell ${i + 1}: ${p ? p.label : "empty"}`} style={{ aspectRatio: "1", border: 0, borderRadius: 4, cursor: "pointer", background: p ? p.color : "var(--ground)" }} />
          );
        })}
      </div>
      <p className={`status-bar${done ? " ok" : ""}`} role="status" style={{ marginTop: 12 }}>
        {done ? "Square built with exactly 3 joined pieces." : msg || (left === 0 && !shapesOk ? "Every cell is covered, but a piece is split in two. Each piece must be one joined shape." : `${left} cells left to cover`)}
      </p>
      <button type="button" className="btn btn-ghost" style={{ marginTop: 10 }} onClick={() => (setCells(Array(9).fill(null)), setMsg(""))}>
        Clear
      </button>
      <p className="sm" style={{ marginTop: 12 }}>
        Practice, not from the handbook.{" "}
        <Link className="ul" href="/studio/ct/8/q/4" style={{ fontWeight: 600 }}>
          Try handbook Q4
        </Link>
      </p>
    </section>
  );
}

/** PRACTICE, NOT FROM HANDBOOK: "like handbook Q10" — fill a 5 × 5 grid so no two neighbours match. */
function PatternGrid() {
  const [g, setG] = useState<number[]>(() => {
    const a = Array(25).fill(0);
    a[0] = 1;
    a[1] = 2;
    a[2] = 1;
    a[5] = 2;
    return a;
  });
  const clashes = new Set<number>();
  g.forEach((v, i) => {
    if (!v) return;
    const r = Math.floor(i / 5);
    const c = i % 5;
    if (c < 4 && g[i + 1] === v) {
      clashes.add(i);
      clashes.add(i + 1);
    }
    if (r < 4 && g[i + 5] === v) {
      clashes.add(i);
      clashes.add(i + 5);
    }
  });
  const counts = [1, 2, 3].map((p) => g.filter((v) => v === p).length);
  const full = g.every(Boolean);
  const colors = ["var(--ground)", "var(--yellow)", "var(--red-deep)", "var(--paper)"];
  const text = ["var(--ink)", "var(--ink)", "#fff", "var(--ink)"];

  return (
    <section className="s-card-ink" aria-labelledby="pg-q">
      <p className="lbl">Like handbook Q10 · no two neighbours match</p>
      <p id="pg-q" className="q-prompt">
        Fill the 5 × 5 grid with 3 patterns. Cells that share a side must be different. Which pattern ends up used the most?
      </p>
      <p className="sm" style={{ margin: "6px 0 12px" }}>
        Tap a cell to cycle 1 → 2 → 3 → empty.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 6, maxWidth: 300 }} role="group" aria-label="5 by 5 pattern grid">
        {g.map((v, i) => (
          <button
            key={i}
            type="button"
           
            onClick={() => setG((a) => a.map((x, j) => (j === i ? (x + 1) % 4 : x)))}
            aria-label={`Row ${Math.floor(i / 5) + 1}, column ${(i % 5) + 1}: ${v ? `pattern ${v}` : "empty"}${clashes.has(i) ? ", clashes" : ""}`}
            style={{ aspectRatio: "1", border: 0, borderRadius: 4, cursor: "pointer", fontWeight: 700, background: colors[v], color: text[v], outline: clashes.has(i) ? "3px solid var(--yellow)" : undefined, outlineOffset: -3 }}
          >
            {v || ""}
          </button>
        ))}
      </div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 12 }}>
        {counts.map((c, i) => (
          <span key={i} className="s-chip" style={{ background: colors[i + 1], color: text[i + 1], boxShadow: "none" }}>
            Pattern {i + 1} · {c}
          </span>
        ))}
      </div>
      <p className="sm" role="status" style={{ marginTop: 10, color: clashes.size ? "var(--yellow)" : "#fff", fontWeight: 700 }}>
        {clashes.size ? "Two neighbours match. Change one of them." : full ? "Grid complete with no clashes. Which pattern did you use most, and why?" : "No clashes so far. Keep going."}
      </p>
      <p className="sm" style={{ marginTop: 10 }}>
        Practice, not from the handbook.{" "}
        <Link className="ul" href="/studio/ct/8/q/10" style={{ fontWeight: 600 }}>
          Try handbook Q10
        </Link>
      </p>
    </section>
  );
}

export function SquareLab() {
  return (
    <>
      <div className="lab-grid">
        <SquareBuilder />
        <PatternGrid />
      </div>
      <section className="s-card-yellow row-between" style={{ marginTop: 16, alignItems: "center" }}>
        <div style={{ maxWidth: 620 }}>
          <p className="lbl">Make · matchstick and card-piece kit</p>
          <p className="s-title" style={{ fontSize: 28 }}>
            Cut it, build it, swap it
          </p>
          <p className="sm" style={{ marginTop: 6 }}>
            Cut your 3 pieces from squared card, mix them in an envelope and challenge your pair to rebuild the square without rotating any piece. Then try handbook Q3 with real matchsticks.
          </p>
        </div>
        <Link href="/studio/ct/8/thinking-spot" className="btn btn-ink">
          Thinking Spot · arrow cells <span aria-hidden="true">→</span>
        </Link>
      </section>
    </>
  );
}
