import "server-only";
/**
 * Answer checking. Runs on the server only, so answer keys never reach the
 * student's browser. The backend can replace this with a real grading
 * service of the same shape.
 */
import { aiChapters, ctChapters, type OptionKey } from "@/content/class6";

type Keyed = { answer: OptionKey[] };

const ctIndex = new Map<string, Keyed>();
for (const ch of ctChapters) {
  for (const q of [...ch.questions, ch.thinkingSpot]) ctIndex.set(q.id, q);
  for (const s of [...(ch.activity?.steps ?? []), ...(ch.activity?.explorations ?? [])]) if (s.answer) ctIndex.set(s.id, { answer: s.answer });
}

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

export type CheckRequest =
  | { kind: "ct"; id: string; value: string[] }
  | { kind: "ai-mcq"; id: string; value: string }
  | { kind: "ai-fill"; id: string; value: string }
  | { kind: "ai-table"; chapter: number; section: "thinkApply" | "table"; row: number; value: string };

/** Returns whether the answer is right, or null if the item is unknown. */
export function check(req: CheckRequest): boolean | null {
  if (req.kind === "ct") {
    const q = ctIndex.get(req.id);
    if (!q || !Array.isArray(req.value)) return null;
    const want = [...q.answer].sort().join();
    const got = [...new Set(req.value)].sort().join();
    return want === got;
  }
  for (const ch of aiChapters) {
    const e = ch.exercise;
    if (req.kind === "ai-mcq") {
      const m = e.mcq.find((x) => x.id === req.id);
      if (m) return m.answer === req.value;
    }
    if (req.kind === "ai-fill") {
      const f = e.fillBlanks.find((x) => x.id === req.id);
      if (f) return norm(f.answer) === norm(String(req.value ?? ""));
    }
    if (req.kind === "ai-table" && ch.number === req.chapter) {
      const table = req.section === "table" ? e.table : e.thinkApply.table;
      const row = table?.rows[req.row];
      if (row) return norm(row.answer) === norm(String(req.value ?? ""));
    }
  }
  return null;
}

/**
 * CT 9 Q9 letter picker. The TH solution lists the letters with at least one
 * line of symmetry; only counts go back to the student, never which letters.
 */
const SYMMETRIC_LETTERS = new Set(["I", "T", "H", "A", "C", "E"]); // TH p. 87
export function checkLetters(picked: string[]) {
  const uniq = [...new Set(picked.map((l) => String(l).toUpperCase()))];
  const right = uniq.filter((l) => SYMMETRIC_LETTERS.has(l)).length;
  return { right, wrong: uniq.length - right, missed: SYMMETRIC_LETTERS.size - right };
}
