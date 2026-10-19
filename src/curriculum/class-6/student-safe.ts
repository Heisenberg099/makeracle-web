/**
 * Student-safe views of handbook items: everything a student needs to try a
 * question, and nothing that gives the answer away (no answer keys, no
 * Teacher Handbook solutions). Server pages pass these to client components.
 */
import type { AIChapter, CTOption, CTQuestion, Figure, MatchTable, PageRef, ThinkingSpot } from "./index";

export type PublicQuestion = {
  id: string;
  chapter: number;
  number?: number;
  prompt: string;
  details?: string[];
  figure?: Figure;
  options: CTOption[];
  /** More than one option is correct (e.g. CT 5 exploration 2). */
  multi: boolean;
  page: PageRef;
};

export function toPublic(q: CTQuestion | ThinkingSpot): PublicQuestion {
  return {
    id: q.id,
    chapter: q.chapter,
    number: "number" in q ? q.number : undefined,
    prompt: q.prompt,
    details: q.details,
    figure: q.figure,
    options: q.options,
    multi: q.answer.length > 1,
    page: q.page,
  };
}

/* ---------------- AI exercises (answers stripped) ---------------- */

export type PublicMCQ = { id: string; prompt: string; details?: string[]; options: { key: string; text: string }[] };
export type PublicTable = { chapter: number; section: "table" | "thinkApply"; title: string; head: [string, string]; items: string[]; choices: string[] };
export type PublicFill = { id: string; text: string };
export type PublicOpen = { id: string; prompt: string };

export function publicMCQs(ch: AIChapter, ids?: string[]): PublicMCQ[] {
  return ch.exercise.mcq.filter((m) => !ids || ids.includes(m.id)).map(({ id, prompt, details, options }) => ({ id, prompt, details, options }));
}

export function publicTable(ch: AIChapter, section: "table" | "thinkApply"): PublicTable | null {
  const t: MatchTable | undefined = section === "table" ? ch.exercise.table : ch.exercise.thinkApply.table;
  if (!t) return null;
  // Choices are the set of possible answers (like options on a test), sorted so order gives nothing away.
  const choices = [...new Set(t.rows.map((r) => r.answer))].sort();
  return { chapter: ch.number, section, title: t.title, head: t.head, items: t.rows.map((r) => r.item), choices };
}

export function publicFills(ch: AIChapter): PublicFill[] {
  return ch.exercise.fillBlanks.map(({ id, text }) => ({ id, text }));
}

export function publicOpen(ch: AIChapter, part: "short" | "think"): PublicOpen[] {
  const list = part === "short" ? ch.exercise.shortAnswer : (ch.exercise.thinkApply.questions ?? []);
  return list.map(({ id, prompt }) => ({ id, prompt }));
}
