"use client";

import { useId, useState } from "react";
import { checkAnswer, useAttempt, useNote, useStudio } from "@/lib/learning/work-store";
import type { PublicFill, PublicMCQ, PublicOpen, PublicTable } from "@/curriculum/class-6/student-safe";

type Mark = "right" | "wrong" | "checking" | "error" | null;

function Verdict({ mark }: { mark: Mark }) {
  if (!mark) return null;
  const text = mark === "right" ? "Right" : mark === "wrong" ? "Not yet · try again" : mark === "checking" ? "Checking…" : "Couldn’t check";
  return (
    <span className="sm" role="status" style={{ fontWeight: 700, color: mark === "right" ? "var(--green)" : "var(--ink)" }}>
      {text}
    </span>
  );
}

function MCQItem({ q, n }: { q: PublicMCQ; n: number }) {
  const [attempt, update] = useAttempt(q.id);
  const [picked, setPicked] = useState<string | null>(null);
  const [state, setState] = useState<Mark>(null);
  const choice = picked ?? attempt?.choice[0] ?? null;
  const mark: Mark = state ?? (attempt?.correct ? "right" : null);

  async function pick(k: string) {
    if (mark === "right") return;
    setPicked(k);
    setState("checking");
    try {
      const ok = await checkAnswer({ kind: "ai-mcq", id: q.id, value: k });
      update({ choice: [k], correct: ok, tries: (attempt?.tries ?? 0) + 1 });
      setState(ok ? "right" : "wrong");
    } catch {
      setState("error");
    }
  }

  return (
    <li style={{ borderTop: "1px solid var(--line)", padding: "14px 0" }}>
      <p className="sm" style={{ fontWeight: 700 }}>
        {n}. {q.prompt}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8, alignItems: "center" }} role="group" aria-label={`Question ${n} options`}>
        {q.options.map((o) => (
          <button key={o.key} type="button" className="opt" aria-pressed={choice === o.key} disabled={mark === "right" && choice !== o.key} onClick={() => pick(o.key)} style={{ borderRadius: 999, padding: "8px 14px", minHeight: 44, fontSize: 13 }}>
            {o.text}
          </button>
        ))}
        <Verdict mark={mark} />
      </div>
    </li>
  );
}

/** Exercise A: multiple choice, checked on the server one at a time. */
export function MCQSet({ items, title = "Five questions from the handbook", label = "Exercise A · quick check", start = 1 }: { items: PublicMCQ[]; title?: string; label?: string; start?: number }) {
  const { attempts } = useStudio();
  const done = items.filter((q) => attempts[q.id]?.correct).length;
  if (!items.length) return null;
  return (
    <section className="s-card" aria-labelledby={`mcq-${items[0].id}`} style={{ marginTop: 16 }}>
      <p className="lbl">{label}</p>
      <h2 id={`mcq-${items[0].id}`} className="s-title" style={{ fontSize: 28 }}>
        {title} · {done} / {items.length}
      </h2>
      <ol style={{ listStyle: "none", margin: "12px 0 0", padding: 0 }}>
        {items.map((q, i) => (
          <MCQItem key={q.id} q={q} n={start + i} />
        ))}
      </ol>
    </section>
  );
}

function TableRow({ t, i }: { t: PublicTable; i: number }) {
  const id = `ai${t.chapter}-${t.section}-${i}`;
  const [attempt, update] = useAttempt(id);
  const [state, setState] = useState<Mark>(null);
  const [val, setVal] = useState<string | null>(null);
  const value = val ?? attempt?.choice[0] ?? "";
  const mark: Mark = state ?? (attempt?.correct ? "right" : attempt?.tries ? "wrong" : null);
  const uid = useId();

  async function choose(v: string) {
    setVal(v);
    if (!v) return setState(null);
    setState("checking");
    try {
      const ok = await checkAnswer({ kind: "ai-table", chapter: t.chapter, section: t.section, row: i, value: v });
      update({ choice: [v], correct: ok, tries: (attempt?.tries ?? 0) + 1 });
      setState(ok ? "right" : "wrong");
    } catch {
      setState("error");
    }
  }

  return (
    <tr>
      <th scope="row" style={{ textAlign: "left", fontWeight: 400 }}>
        <label htmlFor={`${uid}-s`}>{t.items[i]}</label>
      </th>
      <td style={{ width: 1, whiteSpace: "nowrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "flex-end" }}>
          <select id={`${uid}-s`} value={value} onChange={(e) => choose(e.target.value)} disabled={mark === "right"} style={{ minHeight: 44, border: "1.5px solid var(--ink)", borderRadius: 6, padding: "0 8px", background: "var(--paper)", color: "var(--ink)", font: "inherit" }}>
            <option value="">Choose…</option>
            {t.choices.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <span style={{ minWidth: 90 }}>
            <Verdict mark={mark} />
          </span>
        </div>
      </td>
    </tr>
  );
}

/** Exercise D/E tables: pick an answer for each row. */
export function TableQuiz({ table, label }: { table: PublicTable; label: string }) {
  const { attempts } = useStudio();
  const done = table.items.filter((_, i) => attempts[`ai${table.chapter}-${table.section}-${i}`]?.correct).length;
  return (
    <section className="s-card" style={{ marginTop: 16 }} aria-labelledby={`tq-${table.chapter}-${table.section}`}>
      <p className="lbl">{label}</p>
      <h2 id={`tq-${table.chapter}-${table.section}`} className="s-title" style={{ fontSize: 26 }}>
        {table.title} · {done} / {table.items.length}
      </h2>
      <table className="tbl" style={{ marginTop: 8, fontSize: 14 }}>
        <thead>
          <tr>
            <th scope="col">{table.head[0]}</th>
            <th scope="col" style={{ textAlign: "right" }}>
              {table.head[1]}
            </th>
          </tr>
        </thead>
        <tbody>
          {table.items.map((_, i) => (
            <TableRow key={i} t={table} i={i} />
          ))}
        </tbody>
      </table>
    </section>
  );
}

function Fill({ f, n }: { f: PublicFill; n: number }) {
  const [attempt, update] = useAttempt(f.id);
  const [val, setVal] = useState<string | null>(null);
  const [state, setState] = useState<Mark>(null);
  const value = val ?? attempt?.choice[0] ?? "";
  const mark: Mark = state ?? (attempt?.correct ? "right" : null);
  const [before, after] = f.text.split("____");
  const uid = useId();

  async function check() {
    if (!value.trim()) return;
    setState("checking");
    try {
      const ok = await checkAnswer({ kind: "ai-fill", id: f.id, value });
      update({ choice: [value], correct: ok, tries: (attempt?.tries ?? 0) + 1 });
      setState(ok ? "right" : "wrong");
    } catch {
      setState("error");
    }
  }

  return (
    <li style={{ borderTop: "1px solid var(--line)", padding: "12px 0", display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8 }}>
      <label htmlFor={`${uid}-f`} className="body">
        {n}. {before}
        <span className="sr-only"> (blank) </span>
      </label>
      <input
        id={`${uid}-f`}
        value={value}
        readOnly={mark === "right"}
        onChange={(e) => (setVal(e.target.value), setState(null))}
        onKeyDown={(e) => e.key === "Enter" && check()}
        style={{ width: 150, minHeight: 44, border: 0, borderBottom: "2px solid var(--ink)", background: "transparent", font: "inherit", fontWeight: 700 }}
      />
      <span className="body">{after}</span>
      {mark !== "right" && (
        <button type="button" className="tool-btn" onClick={check}>
          Check
        </button>
      )}
      <Verdict mark={mark} />
    </li>
  );
}

/** Exercise B: fill in the blanks. */
export function FillBlanks({ items }: { items: PublicFill[] }) {
  return (
    <section className="s-card" style={{ marginTop: 16 }} aria-labelledby="fill-title">
      <p className="lbl">Exercise B · fill in the blanks</p>
      <h2 id="fill-title" className="s-title" style={{ fontSize: 26 }}>
        Finish the sentence
      </h2>
      <ol style={{ listStyle: "none", margin: "8px 0 0", padding: 0 }}>
        {items.map((f, i) => (
          <Fill key={f.id} f={f} n={i + 1} />
        ))}
      </ol>
    </section>
  );
}

function Open({ q, n }: { q: PublicOpen; n: number }) {
  const [text, setText] = useNote(q.id);
  const uid = useId();
  return (
    <li className="fld" style={{ borderTop: "1px solid var(--line)", padding: "12px 0" }}>
      <label htmlFor={`${uid}-o`}>
        {n}. {q.prompt}
      </label>
      <textarea id={`${uid}-o`} value={text} onChange={(e) => setText(e.target.value)} placeholder="In my own words…" />
      <span className="hint">{text.trim().length >= 10 ? "Saved. Your teacher reads these." : "Write a sentence or two. It saves as you type."}</span>
    </li>
  );
}

/** Exercises C and D: answers in the student's own words, saved for the teacher (no model answer shown). */
export function OpenQuestions({ items, label, title }: { items: PublicOpen[]; label: string; title: string }) {
  if (!items.length) return null;
  return (
    <section className="s-card" style={{ marginTop: 16 }} aria-labelledby={`open-${items[0].id}`}>
      <p className="lbl">{label}</p>
      <h2 id={`open-${items[0].id}`} className="s-title" style={{ fontSize: 26 }}>
        {title}
      </h2>
      <ol style={{ listStyle: "none", margin: "8px 0 0", padding: 0 }}>
        {items.map((q, i) => (
          <Open key={q.id} q={q} n={i + 1} />
        ))}
      </ol>
    </section>
  );
}
