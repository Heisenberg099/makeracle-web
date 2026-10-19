import { ctChapters, getCTChapter } from "@/content/class6";

/** Parse and validate a CT chapter route param (1–10). */
export function chapterFrom(raw: string) {
  const n = Number(raw);
  return Number.isInteger(n) ? getCTChapter(n) : undefined;
}

export const chapterParams = () => ctChapters.map((c) => ({ chapter: String(c.number) }));
