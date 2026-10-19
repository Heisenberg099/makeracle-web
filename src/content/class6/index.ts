/**
 * Class 6 CT & AI content, transcribed from the CBSE Student and Teacher
 * Handbooks (First Edition, March 2026). See ./types.ts for conventions.
 *
 * UI code should import from here, never from the chapter files directly,
 * so a backend can later replace this module with API calls of the same shape.
 */
import type { AIChapter, CTChapter, Figure } from "./types";
import { ch01 } from "./ct/ch01-patterns";
import { ch02 } from "./ct/ch02-lines-angles";
import { ch03 } from "./ct/ch03-number-play";
import { ch04 } from "./ct/ch04-data-handling";
import { ch05 } from "./ct/ch05-prime-time";
import { ch06 } from "./ct/ch06-perimeter-area";
import { ch07 } from "./ct/ch07-fractions";
import { ch08 } from "./ct/ch08-constructions";
import { ch09 } from "./ct/ch09-symmetry";
import { ch10 } from "./ct/ch10-other-side-of-zero";
import { ai1 } from "./ai/ch1-intro-to-ai";
import { ai2 } from "./ai/ch2-basic-data";
import { ai3 } from "./ai/ch3-patterns-decisions";
import { ai4 } from "./ai/ch4-ethics";

export * from "./types";
export { curriculum } from "./curriculum";

export const ctChapters: CTChapter[] = [ch01, ch02, ch03, ch04, ch05, ch06, ch07, ch08, ch09, ch10];
export const aiChapters: AIChapter[] = [ai1, ai2, ai3, ai4];

export function getCTChapter(n: number) {
  return ctChapters.find((c) => c.number === n);
}

export function getAIChapter(n: number) {
  return aiChapters.find((c) => c.number === n);
}

/** Every handbook picture still to be extracted (drives TODO-images.md and placeholders). */
export function allFigures(): { where: string; figure: Figure }[] {
  const out: { where: string; figure: Figure }[] = [];
  for (const ch of ctChapters) {
    const add = (where: string, f?: Figure) => f && out.push({ where, figure: f });
    for (const s of ch.activity?.steps ?? []) add(`CT ${ch.number} activity`, s.figure);
    for (const e of ch.activity?.explorations ?? []) add(`CT ${ch.number} exploration`, e.figure);
    for (const q of [...ch.questions, ch.thinkingSpot]) {
      const label = "number" in q ? `CT ${ch.number} Q${q.number}` : `CT ${ch.number} Thinking Spot`;
      add(label, q.figure);
      for (const o of q.options) add(`${label} option ${o.key}`, o.figure);
    }
  }
  for (const ch of aiChapters)
    for (const s of ch.sections)
      for (const b of s.blocks) if (b.kind === "figure") out.push({ where: `AI ${ch.number} · ${s.heading}`, figure: b.figure });
  return out;
}
