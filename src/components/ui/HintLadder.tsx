"use client";

import { useState } from "react";

/**
 * Hints unlock one at a time, never all at once, and never the answer.
 * The newest hint is announced to screen readers. `onUnlock` lets a parent
 * record hint use (e.g. for the teacher's Observation Journal).
 */
export function HintLadder({
  hints,
  initialUsed = 0,
  used: usedProp,
  onUnlock,
  title = "Hint ladder",
  note,
}: {
  hints: string[];
  initialUsed?: number;
  /** Controlled mode: how many hints are unlocked (e.g. from saved progress). */
  used?: number;
  onUnlock?: (used: number) => void;
  title?: string;
  note?: string;
}) {
  const [own, setUsed] = useState(Math.min(initialUsed, hints.length));
  const used = Math.min(usedProp ?? own, hints.length);
  const allUsed = used >= hints.length;

  return (
    <section className="s-card" aria-label={title}>
      <p className="lbl" style={{ marginBottom: 6 }}>
        {title} · {used} of {hints.length} used
      </p>
      <ol className="hints">
        {hints.map((h, i) => (
          <li key={i}>
            <span className="n" aria-hidden="true">
              {i + 1}
            </span>
            {i < used ? (
              <p className="body" style={{ margin: 0 }}>
                <span className="sr-only">Hint {i + 1}: </span>
                {h}
              </p>
            ) : (
              <p className="body locked" style={{ margin: 0 }}>
                <span className="sr-only">Hint {i + 1}: </span>Locked · try on your own first
              </p>
            )}
          </li>
        ))}
      </ol>
      <p className="sr-only" aria-live="polite">
        {used > 0 ? `Hint ${used} unlocked: ${hints[used - 1]}` : ""}
      </p>
      <button
        type="button"
        className="btn btn-ghost"
        style={{ marginTop: 14, minHeight: 44 }}
        disabled={allUsed}
        onClick={() => {
          const next = used + 1;
          setUsed(next);
          onUnlock?.(next);
        }}
      >
        {allUsed ? "All hints used · explain your rule next" : "Unlock next hint"}
      </button>
      {note && (
        <p className="sm muted" style={{ marginTop: 10 }}>
          {note}
        </p>
      )}
    </section>
  );
}
