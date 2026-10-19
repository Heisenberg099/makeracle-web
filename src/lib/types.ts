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
