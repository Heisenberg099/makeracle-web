/**
 * Student-safe views of handbook items: everything a student needs to try a
 * question, and nothing that gives the answer away (no answer keys, no
 * Teacher Handbook solutions). Server pages pass these to client components.
 */
import type { CTOption, CTQuestion, Figure, PageRef, ThinkingSpot } from "@/content/class6";

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
