/* ------------------------------------------------------------------ */
/* Class 6 · teacher, parent and school views                          */
/* ------------------------------------------------------------------ */

/** 1 = needs support … 4 = explains own strategy. */
export type StrandLevels = { abstract: number; pattern: number; decompose: number; algorithmic: number };

export type Class6Student = { id: string; name: string; classId: string; levels: StrandLevels; note: string; team?: string; role?: string };

export type Class6Section = {
  id: string; // "6B"
  period: string;
  students: number;
  hours: { ct: number; ai: number; project: number };
  next: { minutes: number; mode: string; title: string; chapter: string; item: string };
};

export type Observation = { id: string; studentId: string; date: string; text: string; tags: string[]; where: string };

export type SchoolSection = { id: string; teacher: string; band: "3-5" | "6-8"; hours: number };
