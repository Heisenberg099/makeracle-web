"use client";

import { useState } from "react";
import { AnswerBox } from "@/features/studio/questions/AnswerBox";
import { addMade } from "@/lib/learning/work-store";
import type { PublicQuestion } from "@/curriculum/class-6/student-safe";

const N = 8;

function MirrorGrid() {
  const [axis, setAxis] = useState<"v" | "h">("v");
  const [cells, setCells] = useState<boolean[]>(Array(N * N).fill(false));
  const [saved, setSaved] = useState(false);
  const mirror = (i: number) => {
    const r = Math.floor(i / N);
    const c = i % N;
    return axis === "v" ? r * N + (N - 1 - c) : (N - 1 - r) * N + c;
  };
  const editable = (i: number) => (axis === "v" ? i % N < N / 2 : Math.floor(i / N) < N / 2);
  const on = (i: number) => (editable(i) ? cells[i] : cells[mirror(i)]);

  return (
    <section className="s-card" aria-label="Mirror drawing">
      <div className="row-between" style={{ alignItems: "center", marginBottom: 12 }}>
        <p className="sm muted">Paint the bright half. The mirror paints the other.</p>
        <div className="toggles" role="group" aria-label="Mirror line" style={{ background: "var(--ground)", borderRadius: 999, padding: 4 }}>
          {(["v", "h"] as const).map((a) => (
            <button key={a} type="button" className="tog" aria-pressed={axis === a} onClick={() => (setAxis(a), setCells(Array(N * N).fill(false)))} style={{ background: axis === a ? undefined : "transparent" }}>
              {a === "v" ? "Vertical mirror" : "Horizontal mirror"}
            </button>
          ))}
        </div>
      </div>
      <div className="tapgrid-wrap">
      <div className="tapgrid" style={{ gridTemplateColumns: `repeat(${N}, minmax(44px, 48px))` }} role="group" aria-label="8 by 8 drawing grid">
        {cells.map((_, i) => {
          const ed = editable(i);
          const filled = on(i);
          return (
            <button
              key={i}
              type="button"
             
              disabled={!ed}
              aria-pressed={ed ? filled : undefined}
              aria-label={`${ed ? "Paint" : "Mirror"} cell, row ${Math.floor(i / N) + 1}, column ${(i % N) + 1}${filled ? ", filled" : ""}`}
              onClick={() => setCells((c) => c.map((x, j) => (j === i ? !x : x)))}
              style={{ aspectRatio: "1", border: 0, borderRadius: 2, cursor: ed ? "pointer" : "default", background: filled ? (ed ? "var(--ink)" : "var(--red-deep)") : ed ? "var(--grey)" : "var(--ground)" }}
            />
          );
        })}
      </div>
      </div>
      <div style={{ display: "flex", gap: 8, marginTop: 14, flexWrap: "wrap" }}>
        <button type="button" className="btn btn-ghost" onClick={() => (setCells(Array(N * N).fill(false)), setSaved(false))}>
          Clear
        </button>
        <button
          type="button"
          className="btn btn-red"
          disabled={saved || !cells.some(Boolean)}
          onClick={() => {
            addMade({ title: "Rangoli card", detail: `${cells.filter(Boolean).length * 2} cells, ${axis === "v" ? "vertical" : "horizontal"} mirror`, from: "CT 9 · Mirror Studio" });
            setSaved(true);
          }}
        >
          {saved ? "Saved to my portfolio" : "Save as rangoli card"}
        </button>
      </div>
    </section>
  );
}

const LETTERS = "RISTLHPACE".split("");

function LetterPicker({ q9 }: { q9: PublicQuestion }) {
  const [picked, setPicked] = useState<string[]>([]);
  const [result, setResult] = useState("");
  // Checked on the server against the handbook's list; only counts come back, never which letters.
  async function check() {
    setResult("Checking…");
    let r: { right: number; wrong: number; missed: number };
    try {
      const res = await fetch("/api/curriculum/class-6/check", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ kind: "ct9-letters", value: picked }) });
      r = await res.json();
    } catch {
      return setResult("Couldn’t check right now. Please try again.");
    }
    const { right, wrong, missed } = r;
    setResult(wrong === 0 && missed === 0 ? "All your picks are right, and you found them all." : `${right} of your picks are right. ${wrong ? `${wrong} ${wrong === 1 ? "has" : "have"} no line of symmetry. ` : ""}${missed ? `You missed ${missed}.` : ""}`);
  }
  return (
    <section className="s-card-ink" aria-labelledby="mq9">
      <p className="lbl">Handbook Q9 · tap every letter with at least one line of symmetry</p>
      <p id="mq9" className="s-title" style={{ fontSize: 26, letterSpacing: 2 }}>
        RISTLHPACE
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, margin: "12px 0" }} role="group" aria-label="Letters">
        {LETTERS.map((l, i) => (
          <button key={i} type="button" aria-pressed={picked.includes(l)} onClick={() => setPicked((p) => (p.includes(l) ? p.filter((x) => x !== l) : [...p, l]))} style={{ width: 52, height: 56, border: 0, borderRadius: 6, cursor: "pointer", fontSize: 26, fontWeight: 700, background: picked.includes(l) ? "var(--yellow)" : "var(--ink-2)", color: picked.includes(l) ? "var(--ink)" : "#fff" }}>
            {l}
          </button>
        ))}
      </div>
      <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
        <button type="button" className="tool-btn red" onClick={check} disabled={!picked.length}>
          Check my picks
        </button>
        <strong className="sm">{picked.length} picked</strong>
      </div>
      <p className="sm" role="status" style={{ marginTop: 8 }}>
        {result}
      </p>
      <div style={{ marginTop: 14 }}>
        <AnswerBox question={q9} tone="dark" layout="pills" />
      </div>
    </section>
  );
}

function PhotoBox({ label }: { label: string }) {
  const [url, setUrl] = useState<string | null>(null);
  const id = `ph-${label.replace(/\W+/g, "")}`;
  return (
    <label htmlFor={id} style={{ flex: "1 1 180px", minHeight: 120, border: "1.5px dashed var(--muted)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", cursor: "pointer", overflow: "hidden", padding: url ? 0 : 12 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {url ? <img src={url} alt={label} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : <span className="sm">{label}</span>}
      <input id={id} type="file" accept="image/*" capture="environment" className="sr-only" onChange={(e) => e.target.files?.[0] && setUrl(URL.createObjectURL(e.target.files[0]))} />
    </label>
  );
}

export function MirrorLab({ q9 }: { q9: PublicQuestion }) {
  return (
    <div className="lab-grid">
      <MirrorGrid />
      <div className="stack" style={{ gap: 12 }}>
        <LetterPicker q9={q9} />
        <section className="s-card" aria-labelledby="fold">
          <p className="lbl">Fold and cut · handbook Q2 and Q5</p>
          <p id="fold" className="sm">
            Before you unfold, sketch your prediction. Then fold, cut, unfold and photograph both. Did your prediction match?
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
            <PhotoBox label="My prediction (photo)" />
            <PhotoBox label="After unfolding (photo)" />
          </div>
          <p className="sm muted" style={{ marginTop: 8 }}>
            Photos stay on this device in the demo. Don’t photograph faces.
          </p>
        </section>
        <div className="s-card-yellow tilt-r">
          <p className="serif" style={{ fontSize: 22, lineHeight: 1.2 }}>
            Feeds Project 2: design your squad badge here so it has at least two lines of symmetry.
          </p>
        </div>
      </div>
    </div>
  );
}
