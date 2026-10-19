"use client";

import { useId, useState } from "react";
import { Figure } from "./Figure";
import { checkAnswer, useAttempt } from "@/lib/class6/store";
import type { PublicQuestion } from "@/lib/class6/public";

const MIN_EXPLAIN = 15;

/**
 * Try → explain your rule → check. Never shows the answer: a wrong try says
 * "not yet" and invites a hint. Checking happens on the server.
 */
export function AnswerBox({
  question,
  tone = "light",
  layout = "grid",
  explainLabel = "Explain your rule",
}: {
  question: Pick<PublicQuestion, "id" | "options" | "multi">;
  tone?: "light" | "dark";
  layout?: "grid" | "pills";
  explainLabel?: string;
}) {
  const uid = useId();
  const [attempt, update] = useAttempt(question.id);
  const [picked, setChoice] = useState<string[] | null>(null);
  const [typed, setExplanation] = useState<string | null>(null);
  const [state, setStatus] = useState<"idle" | "checking" | "right" | "wrong" | "error">("idle");
  const [problem, setProblem] = useState("");
  // Saved work loads after the first render, so fall back to it until the student edits.
  const choice = picked ?? attempt?.choice ?? [];
  const explanation = typed ?? attempt?.explanation ?? "";
  const status = state === "idle" && attempt?.correct ? "right" : state;
  const solved = status === "right";

  const toggle = (k: string) => {
    if (solved) return;
    setStatus((s) => (s === "wrong" ? "idle" : s));
    setChoice(question.multi ? (choice.includes(k) ? choice.filter((x) => x !== k) : [...choice, k]) : [k]);
  };

  async function onCheck() {
    if (!choice.length) return setProblem("Pick an option first.");
    if (explanation.trim().length < MIN_EXPLAIN) return setProblem("Write your rule in a sentence first. Then check.");
    setProblem("");
    setStatus("checking");
    try {
      const ok = await checkAnswer({ kind: "ct", id: question.id, value: choice });
      update({ choice, explanation, correct: ok, tries: (attempt?.tries ?? 0) + 1 });
      setStatus(ok ? "right" : "wrong");
    } catch {
      setStatus("error");
    }
  }

  const dark = tone === "dark";
  return (
    <div className={`answer${dark ? " dark" : ""}`}>
      <div role="group" aria-label={question.multi ? "Options (pick all that apply)" : "Options"} className={layout === "grid" ? "opt-grid" : "opt-pills"}>
        {question.options.map((o) => (
          <button key={o.key} type="button" className="opt" aria-pressed={choice.includes(o.key)} onClick={() => toggle(o.key)} disabled={solved && !choice.includes(o.key)}>
            <span className="opt-key">{o.key})</span>
            {o.text ? <span>{o.text}</span> : o.figure ? <Figure figure={o.figure} compact /> : null}
          </button>
        ))}
      </div>
      {question.multi && <p className="sm" style={{ marginTop: 8 }}>More than one option can be right. Pick all that apply.</p>}

      <div className="fld" style={{ marginTop: 16 }}>
        <label htmlFor={`${uid}-why`}>{explainLabel}</label>
        <textarea
          id={`${uid}-why`}
          value={explanation}
          readOnly={solved}
          onChange={(e) => setExplanation(e.target.value)}
          placeholder="I noticed that…"
          style={{ minHeight: 80 }}
        />
      </div>

      {problem && (
        <p className="sm" role="alert" style={{ marginTop: 8, fontWeight: 600 }}>
          {problem}
        </p>
      )}

      {!solved && (
        <button type="button" className="btn" style={{ marginTop: 14, background: "var(--red-deep)" }} onClick={onCheck} disabled={status === "checking"}>
          {status === "checking" ? "Checking…" : "Check my answer"}
        </button>
      )}

      <div aria-live="polite">
        {status === "right" && (
          <p className="feedback ok">
            <strong>Yes. That works.</strong> Your answer and your rule are saved to your journey.
          </p>
        )}
        {status === "wrong" && (
          <p className="feedback no">
            <strong>Not yet.</strong> Look at the question again, or unlock a hint. You can try as many times as you like.
          </p>
        )}
        {status === "error" && <p className="feedback no">Couldn’t check right now. Please try again.</p>}
      </div>
    </div>
  );
}
