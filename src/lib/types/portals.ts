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
