/**
 * DEMO DATA · Class 6 Teacher Hub (sections, students, observations, live answers)
 * Everything here is fictional sample data. The backend replaces these
 * exports with API calls of the same shape (types in src/lib/types).
 */
import type { Class6Section, Class6Student, Observation } from "@/lib/types";

/* ------------------------------------------------------------------ */
/* Class 6 Teacher Hub · DEMO DATA (render numbers). All sample data.  */
/* ------------------------------------------------------------------ */
export const hubDemo = {
  teacher: { name: "Ms. Kapoor", subject: "Maths + CT" },
  today: "Monday · Period 3 and Period 6",
  sync: { chapter: 5, text: "You are on Ganita Prakash Ch 5 · Prime Time. The CT companion is ready: Activity Time (Circle of 12), 10 thinking questions and The Thinking Spot." },
  training: { code: "TRG-02 2026-27", subTheme: "Sub-theme 3 “Mathematics as the cornerstone”", done: 2, total: 7 },
  sections: [
    { id: "6A", period: "Period 3", students: 38, hours: { ct: 20, ai: 6, project: 12 }, next: { minutes: 40, mode: "unplugged first, then screen", title: "Prime Time · Activity Time: Circle of 12", chapter: "5", item: "ct5-act" } },
    { id: "6B", period: "Period 6", students: 36, hours: { ct: 18, ai: 6, project: 12 }, next: { minutes: 35, mode: "projector", title: "Patterns in Mathematics · Q1 discussion", chapter: "1", item: "ct1-q1" } },
  ] satisfies Class6Section[],
};

const L = (abstract: number, pattern: number, decompose: number, algorithmic: number) => ({ abstract, pattern, decompose, algorithmic });

export const class6Students: Class6Student[] = [
  { id: "6B-12", name: "Riya S.", classId: "6B", levels: L(3, 4, 2, 3), note: "Strong pattern talk", team: "Team Rocket", role: "Data keeper" },
  { id: "6B-01", name: "Aarav P.", classId: "6B", levels: L(4, 4, 3, 4), note: "Leads group work", team: "Team Rocket", role: "Class leader" },
  { id: "6B-18", name: "Meher K.", classId: "6B", levels: L(2, 3, 2, 2), note: "Uses hint 2 often", team: "Team Rocket", role: "Chart designer" },
  { id: "6B-15", name: "Kabir M.", classId: "6B", levels: L(3, 4, 3, 3), note: "", team: "Team Rocket", role: "Speaker" },
  { id: "6B-27", name: "Sana V.", classId: "6B", levels: L(1, 2, 2, 1), note: "Needs grid support" },
  { id: "6B-09", name: "Ishaan T.", classId: "6B", levels: L(3, 2, 4, 3), note: "Great at clue tables" },
  { id: "6B-05", name: "Diya R.", classId: "6B", levels: L(2, 2, 1, 2), note: "Absent 2 sessions" },
  { id: "6B-02", name: "Arnav G.", classId: "6B", levels: L(4, 3, 3, 4), note: "" },
  { id: "6A-03", name: "Tara H.", classId: "6A", levels: L(3, 3, 2, 3), note: "Explains clearly" },
  { id: "6A-07", name: "Vihaan K.", classId: "6A", levels: L(2, 3, 3, 2), note: "" },
  { id: "6A-11", name: "Navya D.", classId: "6A", levels: L(4, 3, 3, 3), note: "Helps her pair" },
  { id: "6A-14", name: "Reyansh L.", classId: "6A", levels: L(2, 2, 2, 3), note: "Rushes the explanation" },
];

export const observationsDemo: Observation[] = [
  { id: "o1", studentId: "6B-12", date: "2026-10-14", text: "Explained why adding 5 makes a star: “5 and 12 share no factor.”", tags: ["Pattern recognition"], where: "CT 5 · Circle of 12" },
  { id: "o2", studentId: "6B-12", date: "2026-10-09", text: "Re-counted every tally twice before entering data.", tags: ["Data care"], where: "Project 1 · Stage 3" },
  { id: "o3", studentId: "6B-12", date: "2026-10-03", text: "Needed hint 2 on the seating-around-the-table question.", tags: ["Decomposition"], where: "CT 2 · Lines and Angles" },
  { id: "o4", studentId: "6B-12", date: "2026-09-26", text: "Sorted all 7 machines correctly and explained “learns from data”.", tags: ["CG-3"], where: "AI 1 · AI or Automation" },
  { id: "o5", studentId: "6B-01", date: "2026-10-12", text: "Kept the team on time during the tally.", tags: ["Collaboration"], where: "Project 1 · Stage 3" },
  { id: "o6", studentId: "6B-01", date: "2026-10-01", text: "Wrote his own rule for the block pattern before building it.", tags: ["Algorithmic thinking"], where: "CT 1 · Pattern Lab" },
  { id: "o7", studentId: "6B-18", date: "2026-10-10", text: "Used hint 2 on both clock questions, then explained the 6° rule.", tags: ["Abstract thinking"], where: "CT 2 · Clock Angle Lab" },
  { id: "o8", studentId: "6B-15", date: "2026-10-11", text: "Presented the team’s question clearly.", tags: ["Communication"], where: "Project 1 · Stage 1" },
  { id: "o9", studentId: "6B-27", date: "2026-10-08", text: "Found the grid hard; worked well with a printed copy.", tags: ["Decomposition"], where: "CT 3 · Number Play" },
  { id: "o10", studentId: "6B-09", date: "2026-10-07", text: "Built a full clue table for the graph question.", tags: ["Decomposition"], where: "CT 4 · Graph Clue Cracker" },
];

/** Live answer counts for projector mode (DEMO: as if from student devices). */
export const responsesDemo: Record<string, number[]> = { "ct1-q1": [14, 9, 6, 4] };
