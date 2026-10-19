/**
 * Types for the CBSE Class 6 Computational Thinking & AI content.
 *
 * Source of truth: CBSE "Computational Thinking and Artificial Intelligence,
 * Class 6" Student Handbook (SH) and Teacher Handbook (TH), First Edition,
 * March 2026. Page numbers are the printed "Page N" numbers in each book.
 *
 * Nothing in src/content/class6 is invented: every prompt, option, answer and
 * solution is transcribed from the handbooks. Where the handbook relies on a
 * picture that has not been extracted yet, `figure` holds a placeholder with
 * the page numbers (see TODO-images.md). Practice material written by
 * Makeracle lives elsewhere and is labelled "practice, not from handbook".
 */

/** Printed page numbers in the Student Handbook (sh) and Teacher Handbook (th). */
export type PageRef = { sh?: number | [number, number]; th?: number | [number, number] };

/** CT strands named in the handbook's learning outcomes and "Competencies" lines. */
export type CTStrand =
  | "Abstract Thinking"
  | "Pattern Recognition"
  | "Decomposition"
  | "Algorithmic Thinking"
  | "Generalisation";

/**
 * A picture the handbook uses that we have not extracted yet.
 * `alt` describes what the picture shows, transcribed from the page, so the
 * placeholder is still useful (and screen-reader friendly) until the real
 * image is added.
 */
export type Figure = {
  id: string;
  page: PageRef;
  alt: string;
  /** Set once the picture is extracted (e.g. "/class6/ct1-q4-fig.png"); until then UI shows a placeholder. */
  src?: string;
};

export type OptionKey = "a" | "b" | "c" | "d";

export type CTOption = {
  key: OptionKey;
  /** Text of the option, when the handbook prints it as text. */
  text?: string;
  /** When the option itself is a picture. */
  figure?: Figure;
};

/** Teacher-only worked solution, one entry per step, as written in the TH. */
export type Solution = { steps: string[] };

export type CTQuestion = {
  id: string; // e.g. "ct1-q4"
  chapter: number;
  number: number; // 1–10 as numbered in the handbook
  prompt: string;
  /** Extra lines printed under the prompt (conditions, sets, notes). */
  details?: string[];
  figure?: Figure;
  options: CTOption[];
  /** Correct option(s). Some handbook items accept more than one. */
  answer: OptionKey[];
  solution: Solution;
  /** Only where the handbook names competencies for this item (Chapter 5 activity). */
  strands?: CTStrand[];
  page: PageRef;
};

export type ThinkingSpot = Omit<CTQuestion, "number" | "id"> & { id: string };

/** Chapter 5 "Activity Time" (TH pp. 46–51, SH pp. 25–27). */
export type CTActivity = {
  title: string;
  subtitle: string;
  intro?: string;
  helpsWith?: string[];
  /** Teacher-facing session plan (TH only). */
  plan?: { activity: string; minutes: number; description: string; link?: string }[];
  /** Teacher-facing CT components (TH only). */
  components?: { strand: CTStrand; text: string }[];
  rule: string[];
  steps: {
    id: string;
    prompt: string;
    options?: CTOption[];
    answer?: OptionKey[];
    /** Answer table the student completes (rows already filled in the book are given). */
    table?: { head: string[]; rows: string[][] };
    strands?: CTStrand[];
    teacherNote?: string[];
    figure?: Figure;
  }[];
  explorations: {
    id: string;
    prompt: string;
    options?: CTOption[];
    answer?: OptionKey[];
    strands?: CTStrand[];
    teacherNote?: string[];
    figure?: Figure;
  }[];
  teacherExtension?: string;
  page: PageRef;
};

export type CTChapter = {
  number: number; // 1–10, the CT chapter number used in the handbook
  slug: string;
  title: string;
  /** The handbook follows the Class 6 Mathematics textbook chapter sequence. */
  page: PageRef;
  activity?: CTActivity;
  questions: CTQuestion[];
  thinkingSpot: ThinkingSpot;
};

/* ------------------------------------------------------------------ */
/* AI chapters                                                         */
/* ------------------------------------------------------------------ */

export type AIBlock =
  | { kind: "p"; text: string }
  | { kind: "list"; title?: string; items: string[] }
  | { kind: "terms"; items: { term: string; text: string }[] }
  | { kind: "table"; caption?: string; head: string[]; rows: string[][] }
  | { kind: "example"; title?: string; lines: string[] }
  | { kind: "keyConcept"; text: string }
  | { kind: "figure"; figure: Figure };

export type AISection = {
  id: string;
  heading: string;
  blocks: AIBlock[];
  page: PageRef;
};

export type MCQ = { id: string; prompt: string; details?: string[]; options: { key: OptionKey; text: string }[]; answer: OptionKey };
export type FillBlank = { id: string; text: string; answer: string };
export type ShortAnswer = { id: string; prompt: string; answer: string[] };
export type MatchTable = {
  title: string;
  head: [string, string];
  rows: { item: string; answer: string }[];
};

export type AIExercise = {
  mcq: MCQ[];
  fillBlanks: FillBlank[];
  shortAnswer: ShortAnswer[];
  /** Section D "Think and apply" — either open questions or a table. */
  thinkApply: { questions?: ShortAnswer[]; table?: MatchTable };
  /** Section E — a classification / identification table. */
  table: MatchTable;
  page: PageRef;
};

export type AIChapter = {
  number: number; // 1–4
  slug: string;
  title: string;
  learningFocus: string[];
  /** "Ethical Awareness" column of the handbook's table of contents. */
  ethicsTag: string;
  sections: AISection[];
  pointsToRemember: string[];
  exercise: AIExercise;
  /** Mistakes or inconsistencies in the printed handbook, kept as-is and noted here. */
  handbookNotes?: string[];
  page: PageRef;
};
