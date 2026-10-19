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
