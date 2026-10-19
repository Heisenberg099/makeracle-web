/**
 * Core records (from the blueprint's data model). Portals are written against
 * these types so the backend can replace src/lib/mock.ts without UI changes.
 */

export type Role = "admin" | "principal" | "teacher" | "student" | "parent" | "partner" | "staff";

export type ClassSection = {
  id: string;
  label: string;
  classNum: number;
  module: string;
  lessonId: string; // next lesson to run
  hours: { ct: number; ai: number; project: number };
  slot: string;
};

export type Student = {
  id: string;
  name: string; // first name + last initial only
  classId: string;
  roll: number;
};

export type LessonStep = { min: number; title: string; say: string; do: string };

export type Lesson = {
  id: string;
  module: string;
  band: string;
  track: "AI" | "Web" | "App" | "Data" | "Computational thinking";
  order: number;
  title: string;
  minutes: number;
  competency: string;
  unplugged: boolean;
  materials: string[];
  steps: LessonStep[];
};

export const rubricCriteria = ["works", "readable", "original", "reflected"] as const;
export type RubricCriterion = (typeof rubricCriteria)[number];
/** 0 = not marked, 1–4 = rubric level */
export type RubricScore = Record<RubricCriterion, 0 | 1 | 2 | 3 | 4>;

export type Submission = {
  id: string;
  studentId: string;
  studentName: string;
  classId: string;
  project: string;
  submittedAt: string;
  status: "draft" | "submitted" | "reviewed" | "published";
  reflection: string;
};

export type Portfolio = {
  handle: string;
  displayName: string;
  classLabel: string;
  school: string;
  showSchool: boolean;
  quote: string;
  projects: {
    title: string;
    kind: string;
    learned: string;
    rubric: string[];
    link: string;
    linkLabel: string;
    preview: "chat" | "app" | "web";
  }[];
  badges: string[];
  certificates: { title: string; code: string; issued: string }[];
};

/* ------------------------------------------------------------------ */
/* Class 6 Studio                                                      */
/* ------------------------------------------------------------------ */

export type JourneyStatus = "done" | "in-progress" | "now" | "up-next";

/** One student's progress through the Class 6 CT & AI journey. */
export type StudioProgress = {
  student: { id: string; firstName: string; name: string; classLabel: string; school: string };
  /** The class teacher who approves class-wall posts. */
  teacher: string;
  /** e.g. "Monday · Week 14 of 2026-27" */
  today: string;
  /** Hours logged against the CBSE requirement (40 CT / 20 AI / 40 projects). */
  hours: { ct: number; ai: number; project: number };
  ct: Record<number, JourneyStatus>;
  ai: Record<number, JourneyStatus>;
  /** 1–5, from the student's answers so far. */
  strengths: { strand: "Abstract thinking" | "Pattern recognition" | "Decomposition" | "Algorithmic thinking"; level: number }[];
  continue: { eyebrow: string; title: string; line: string; href: string; progress: string };
  projects: { slug: string; number: number; title: string; line: string; status: string }[];
  wallHighlight: { quote: string; href: string } | null;
};

/** A class-wall post. Only approved posts are shown to the class; reactions only, no comments. */
export type WallPost = {
  id: string;
  /** First name + last initial only. */
  author: string;
  part: "ct" | "ai";
  tag: string; // "CT 5"
  kind: string; // "String art"
  visual: { text: string; tone: "ink" | "red" | "yellow" | "white" | "green" | "grey" | "pink" };
  title: string;
  body: string;
  status: "waiting" | "approved" | "returned";
  /** "I tried it" reactions. */
  tried: number;
  postedAt: string;
};

export type PortfolioItem = {
  id: string;
  tag: string; // "CT 5 · String art"
  title: string;
  learned: string;
  chips: string[];
  visual: WallPost["visual"];
};

export type ProjectProgress = {
  slug: string;
  team: string;
  /** First name + last initial, mapped to role ids in content/class6/projects.ts. */
  members: { name: string; role: string }[];
  hoursLogged: number;
  stageStatus: Record<string, "done" | "working" | "up-next">;
  /** Teacher marks per rubric row, 0 = not marked yet. */
  marks: Record<string, 0 | 1 | 2 | 3 | 4>;
  teacherNote: string;
};

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
