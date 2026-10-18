"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Lesson } from "@/lib/types";
import { LogoMark } from "@/components/Logo";

/**
 * Projector mode: one step per screen, big type for the back row,
 * a step timer, and teacher notes that can be hidden from the class.
 * Keys: → / Space next · ← back · N notes · F fullscreen.
 * Works offline once the page is loaded (no network calls).
 */
export function ProjectorRunner({ lesson }: { lesson: Lesson }) {
  const [i, setI] = useState(0);
  const [notes, setNotes] = useState(true);
  const [left, setLeft] = useState(lesson.steps[0].min * 60);
  const [running, setRunning] = useState(false);
  const rootRef = useRef<HTMLElement>(null);

  const step = lesson.steps[i];
  const last = i === lesson.steps.length - 1;

  const go = useCallback(
    (n: number) => {
      const next = Math.max(0, Math.min(lesson.steps.length - 1, n));
      setI(next);
      setLeft(lesson.steps[next].min * 60);
    },
    [lesson.steps],
  );

  useEffect(() => {
    if (!running) return;
    const t = setInterval(() => setLeft((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(t);
  }, [running]);

  const fullscreen = useCallback(() => {
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    else rootRef.current?.requestFullscreen?.().catch(() => {});
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        go(i + 1);
      } else if (e.key === "ArrowLeft") go(i - 1);
      else if (e.key.toLowerCase() === "n") setNotes((v) => !v);
      else if (e.key.toLowerCase() === "f") fullscreen();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [i, go, fullscreen]);

  const mm = String(Math.floor(left / 60)).padStart(2, "0");
  const ss = String(left % 60).padStart(2, "0");

  return (
    <main ref={rootRef} id="main" style={{ minHeight: "100vh", background: "#111", color: "#fff", display: "flex", flexDirection: "column" }}>
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "16px 24px", flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <LogoMark tone="dark" size={28} />
          <span className="sm" style={{ color: "#bdbdbd" }}>
            {lesson.module} · Lesson {lesson.order}: {lesson.title}
          </span>
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <button type="button" className="tog" onClick={() => setNotes((v) => !v)} aria-pressed={notes}>
            Teacher notes (N)
          </button>
          <button type="button" className="tog" onClick={fullscreen}>
            Fullscreen (F)
          </button>
          <Link href={`/teacher/lessons/${lesson.id}`} className="tog" style={{ display: "inline-flex", alignItems: "center", textDecoration: "none" }}>
            Exit
          </Link>
        </div>
      </header>

      <div style={{ display: "flex", gap: 6, padding: "0 24px" }} aria-hidden="true">
        {lesson.steps.map((s, n) => (
          <span key={s.title} style={{ flex: s.min, height: 6, borderRadius: 99, background: n < i ? "#fff" : n === i ? "var(--red)" : "#333" }} />
        ))}
      </div>

      <section aria-live="polite" style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "40px clamp(24px, 6vw, 96px)" }}>
        <p className="sm" style={{ color: "#bdbdbd", fontSize: 18 }}>
          Step {i + 1} of {lesson.steps.length} · {step.min} min
        </p>
        <h1 className="cap" style={{ fontSize: "clamp(56px, 9vw, 160px)", lineHeight: 0.9, marginTop: 12 }}>
          {step.title}
        </h1>
        <p style={{ fontSize: "clamp(24px, 3vw, 44px)", lineHeight: 1.25, marginTop: 28, maxWidth: 1100 }}>{step.say}</p>
      </section>

      {notes && (
        <aside style={{ background: "#222", padding: "16px 24px" }} aria-label="Teacher notes">
          <p className="sm" style={{ color: "#bdbdbd" }}>
            Teacher notes (hidden from class with N)
          </p>
          <p style={{ fontSize: 18, marginTop: 4 }}>{step.do}</p>
        </aside>
      )}

      <footer style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "16px 24px", flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 40, fontWeight: 600, fontVariantNumeric: "tabular-nums", color: left === 0 ? "var(--red)" : "#fff" }} aria-label={`${mm} minutes ${ss} seconds left`}>
            {mm}:{ss}
          </span>
          <button type="button" className="tog" onClick={() => setRunning((r) => !r)}>
            {running ? "Pause" : "Start timer"}
          </button>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button type="button" className="btn btn-ghost" style={{ color: "#fff", boxShadow: "inset 0 0 0 1.5px #fff" }} onClick={() => go(i - 1)} disabled={i === 0}>
            ← Back
          </button>
          {last ? (
            <Link href="/teacher/marking" className="btn">
              Done · mark the class →
            </Link>
          ) : (
            <button type="button" className="btn" onClick={() => go(i + 1)}>
              Next step →
            </button>
          )}
        </div>
      </footer>
    </main>
  );
}
