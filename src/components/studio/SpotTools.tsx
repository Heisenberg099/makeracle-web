"use client";

import { useId, useState } from "react";
import { checkAnswer, useAttempt, useNote, useStudio } from "@/lib/class6/store";
import type { PublicQuestion } from "@/lib/class6/public";

/** CT 9 Thinking Spot tool (from the render): suppose the candies are in a jar, then test every message. */
export function JarTool() {
  const [jar, setJar] = useState(2);
  const msgs = [
    { jar: 1, text: "“The candies are not in this jar”", true: (j: number) => j !== 1 },
    { jar: 2, text: "“The candies are not in this jar”", true: (j: number) => j !== 2 },
    { jar: 3, text: "“The candies are in the 2nd jar”", true: (j: number) => j === 2 },
  ];
  const trueCount = msgs.filter((m) => m.true(jar)).length;
  return (
    <div>
      <p className="sm" style={{ color: "var(--muted-on-ink)", marginBottom: 8 }}>
        Tool · suppose the candies are in…
      </p>
      <div className="grid g3" style={{ gap: 10 }} role="group" aria-label="Suppose the candies are in">
        {msgs.map((m) => (
          <button key={m.jar} type="button" aria-pressed={jar === m.jar} onClick={() => setJar(m.jar)} style={{ border: 0, borderRadius: 8, padding: "16px 10px", cursor: "pointer", font: "inherit", background: jar === m.jar ? "var(--paper)" : "var(--ink-2)", color: jar === m.jar ? "var(--ink)" : "#fff", outline: jar === m.jar ? "3px solid var(--yellow)" : undefined }}>
            <svg width="44" height="52" viewBox="0 0 44 52" aria-hidden="true">
              <rect x="10" y="2" width="24" height="7" rx="2" fill={jar === m.jar ? "var(--red-deep)" : "var(--muted-on-ink)"} />
              <rect x="5" y="9" width="34" height="40" rx="8" fill="none" stroke={jar === m.jar ? "var(--red-deep)" : "var(--muted-on-ink)"} strokeWidth="3" />
              {jar === m.jar && (
                <>
                  <circle cx="18" cy="30" r="5" fill="var(--red-deep)" />
                  <circle cx="27" cy="34" r="5" fill="var(--red-deep)" />
                  <circle cx="22" cy="24" r="4" fill="var(--red-deep)" />
                </>
              )}
            </svg>
            <span className="s-title" style={{ fontSize: 26, display: "block" }}>
              Jar {m.jar}
            </span>
            <span className="sm">{m.text}</span>
          </button>
        ))}
      </div>
      <table className="tbl" style={{ marginTop: 12, background: "var(--ink-2)", color: "#fff", borderRadius: 6 }}>
        <thead>
          <tr>
            <th scope="col" style={{ color: "#fff" }}>
              If candies are in jar {jar}…
            </th>
            <th scope="col" style={{ color: "#fff" }}>
              Message is
            </th>
          </tr>
        </thead>
        <tbody>
          {msgs.map((m) => (
            <tr key={m.jar}>
              <td>
                Jar {m.jar}: {m.text}
              </td>
              <td style={{ fontWeight: 700, color: m.true(jar) ? "var(--yellow)" : "var(--muted-on-ink)" }}>{m.true(jar) ? "TRUE" : "FALSE"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="sm" role="status" style={{ marginTop: 10, fontWeight: 700, color: trueCount === 1 ? "var(--yellow)" : "#ffb3bd" }}>
        {trueCount} true {trueCount === 1 ? "message · fits the rule. Check it once more." : "messages · breaks the rule, so this jar can’t be it."}
      </p>
    </div>
  );
}

/** Generic Thinking Spot tool: suppose each option in turn and note what breaks. */
export function SupposeTool({ question }: { question: PublicQuestion }) {
  const [opt, setOpt] = useState(question.options[0]?.key ?? "a");
  const [note, setNote] = useNote(`${question.id}-suppose-${opt}`);
  const uid = useId();
  return (
    <div>
      <p className="sm" style={{ color: "var(--muted-on-ink)", marginBottom: 8 }}>
        Tool · suppose, then check. Pick an option and write what happens if it were true.
      </p>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }} role="group" aria-label="Suppose the answer is">
        {question.options.map((o) => (
          <button key={o.key} type="button" className="tool-btn" aria-pressed={o.key === opt} onClick={() => setOpt(o.key)}>
            Suppose {o.key}){o.text ? ` ${o.text}` : ""}
          </button>
        ))}
      </div>
      <div className="fld" style={{ marginTop: 12 }}>
        <label htmlFor={`${uid}-n`} style={{ color: "#fff" }}>
          If it’s {opt}), then…
        </label>
        <textarea id={`${uid}-n`} value={note} onChange={(e) => setNote(e.target.value)} placeholder="…this clue would break because…" style={{ color: "#fff", borderBottomColor: "#fff" }} />
      </div>
    </div>
  );
}

/** "I think it's… because…" — submitted with reasoning, checked on the server, never revealed. */
export function SpotAnswer({ question }: { question: PublicQuestion }) {
  const uid = useId();
  const [attempt, update] = useAttempt(question.id);
  const [pick, setPick] = useState<string | null>(null);
  const [why, setWhy] = useState<string | null>(null);
  const [state, setState] = useState<"idle" | "checking" | "right" | "wrong" | "error">("idle");
  const [problem, setProblem] = useState("");
  const choice = pick ?? attempt?.choice[0] ?? "";
  const because = why ?? attempt?.explanation ?? "";
  const status = state === "idle" && attempt?.correct ? "right" : state;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!choice) return setProblem("Choose your answer first.");
    if (because.trim().length < 15) return setProblem("Write your reasoning in a sentence or two.");
    setProblem("");
    setState("checking");
    try {
      const ok = await checkAnswer({ kind: "ct", id: question.id, value: [choice] });
      update({ choice: [choice], explanation: because, correct: ok, tries: (attempt?.tries ?? 0) + 1 });
      setState(ok ? "right" : "wrong");
    } catch {
      setState("error");
    }
  }

  return (
    <form className="s-card" onSubmit={submit} aria-label="Submit your answer and your reasoning">
      <p className="lbl">Submit your answer and your reasoning</p>
      <div className="fld">
        <label htmlFor={`${uid}-a`}>I think it’s…</label>
        <select id={`${uid}-a`} value={choice} onChange={(e) => (setPick(e.target.value), setState("idle"))} disabled={status === "right"}>
          <option value="">Choose…</option>
          {question.options.map((o) => (
            <option key={o.key} value={o.key}>
              {o.key}) {o.text ?? o.figure?.alt}
            </option>
          ))}
        </select>
      </div>
      <div className="fld" style={{ marginTop: 14 }}>
        <label htmlFor={`${uid}-b`}>Because…</label>
        <textarea id={`${uid}-b`} value={because} onChange={(e) => setWhy(e.target.value)} readOnly={status === "right"} placeholder="I tested each option and…" />
      </div>
      {problem && (
        <p className="sm" role="alert" style={{ marginTop: 8, fontWeight: 600 }}>
          {problem}
        </p>
      )}
      {status !== "right" && (
        <button type="submit" className="btn btn-red" style={{ marginTop: 14 }} disabled={status === "checking"}>
          {status === "checking" ? "Checking…" : "Submit"}
        </button>
      )}
      <div aria-live="polite">
        {status === "right" && (
          <p className="feedback ok">
            <strong>Solved.</strong> Your reasoning is saved for your teacher to read.
          </p>
        )}
        {status === "wrong" && (
          <p className="feedback no">
            <strong>Not this time.</strong> Suppose your answer is true and check every clue again. Try as often as you like.
          </p>
        )}
        {status === "error" && <p className="feedback no">Couldn’t check right now. Please try again.</p>}
      </div>
    </form>
  );
}

/** Status of every chapter's Thinking Spot, from saved progress. */
export function EarlierSpots({ spots, current }: { spots: { chapter: number; label: string }[]; current: number }) {
  const { attempts } = useStudio();
  return (
    <section className="s-card-ink" aria-labelledby="earlier">
      <p id="earlier" className="lbl">
        All Thinking Spots
      </p>
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {spots.map((s) => {
          const a = attempts[`ct${s.chapter}-ts`];
          const st = a?.correct ? "Solved" : a?.tries ? `Tried ${a.tries === 2 ? "twice" : `${a.tries} times`}` : "Open";
          return (
            <li key={s.chapter} style={{ borderTop: "1px solid var(--ink-2)" }}>
              <a href={`/studio/ct/${s.chapter}/thinking-spot`} aria-current={s.chapter === current ? "page" : undefined} style={{ display: "flex", justifyContent: "space-between", gap: 10, padding: "10px 0", minHeight: 44, alignItems: "center", textDecoration: "none", color: "#fff", fontWeight: s.chapter === current ? 700 : 400 }}>
                <span className="sm">
                  Ch {s.chapter} · {s.label}
                </span>
                <span className="sm" style={{ color: a?.correct ? "var(--yellow)" : a?.tries ? "var(--muted-on-ink)" : "#ffb3bd" }}>
                  {st}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
