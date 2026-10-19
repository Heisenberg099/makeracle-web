/**
 * DEMO DATA · Class 6 Student Studio (journey, class wall, portfolio, projects)
 * Everything here is fictional sample data. The backend replaces these
 * exports with API calls of the same shape (types in src/lib/types).
 */
import type { PortfolioItem, ProjectProgress, StudioProgress, WallPost } from "@/lib/types";

/* ------------------------------------------------------------------ */
/* Class 6 Studio — DEMO DATA. Every number below is sample data.      */
/* ------------------------------------------------------------------ */

export const studioDemo: StudioProgress = {
  student: { id: "6B-12", firstName: "Riya", name: "Riya S.", classLabel: "Class 6B", school: "Green Valley Public School" },
  teacher: "Ms. Kapoor",
  today: "Monday · Week 14 of 2026-27",
  hours: { ct: 18, ai: 6, project: 12 },
  ct: { 1: "done", 2: "done", 3: "done", 4: "in-progress", 5: "now", 6: "up-next", 7: "up-next", 8: "up-next", 9: "up-next", 10: "up-next" },
  ai: { 1: "done", 2: "in-progress", 3: "up-next", 4: "up-next" },
  strengths: [
    { strand: "Abstract thinking", level: 3 },
    { strand: "Pattern recognition", level: 4 },
    { strand: "Decomposition", level: 2 },
    { strand: "Algorithmic thinking", level: 3 },
  ],
  continue: {
    eyebrow: "Continue · CT Chapter 5 · Prime Time · Activity Time",
    title: "Circle of 12: make a star",
    line: "Connect 12 points by adding 2, 3, 4, 5… Why does 5 make a star?",
    href: "/studio/ct/5",
    progress: "2 of 5 rows done.",
  },
  projects: [
    { slug: "data-detectives", number: 1, title: "Data Detectives", line: "How does our class travel to school?", status: "Stage 3 of 6 · 12 h logged" },
    { slug: "cyber-suraksha", number: 2, title: "Cyber Suraksha Squad", line: "A digital-safety campaign for juniors", status: "opens in Term 2" },
  ],
  wallHighlight: { quote: "Aarav’s pattern stumped 21 of us. Try ‘Hexagons & Diamonds’ remix.", href: "/studio/wall" },
};

/* Class wall · DEMO posts, already approved by the teacher. First name + last initial only. */
export const wallDemo: WallPost[] = [
  { id: "w1", author: "Aarav P.", part: "ct", tag: "CT 1", kind: "Challenge", visual: { text: "3 → 7 → 11", tone: "ink" }, title: "Hexagons & Diamonds remix", body: "Start 3, add 4 each term. Which term passes 20 blocks first?", status: "approved", tried: 21, postedAt: "2026-10-12" },
  { id: "w2", author: "Riya S.", part: "ct", tag: "CT 5", kind: "String art", visual: { text: "12/5", tone: "red" }, title: "12-point star", body: "Added 5 each time and got a star in 12 steps.", status: "approved", tried: 14, postedAt: "2026-10-13" },
  // The render showed 10901 here, which is the answer to handbook CT 3 Q8; changed so the wall can't give it away.
  { id: "w3", author: "Kabir M.", part: "ct", tag: "CT 3", kind: "Riddle", visual: { text: "1 2 3 2 1", tone: "yellow" }, title: "I am a palindrome…", body: "Five digits, I read the same both ways, and my digits add up to 9. What am I?", status: "approved", tried: 9, postedAt: "2026-10-13" },
  { id: "w4", author: "Meher K.", part: "ct", tag: "CT 9", kind: "Mirror art", visual: { text: "◆ | ◆", tone: "white" }, title: "Diwali rangoli half", body: "Drew one half, the mirror did the rest. Two lines of symmetry!", status: "approved", tried: 17, postedAt: "2026-10-14" },
  { id: "w5", author: "Ishaan T.", part: "ct", tag: "CT 10", kind: "Magic box", visual: { text: "IN → ? → OUT", tone: "ink" }, title: "The flip-flop box", body: "Two rules and a twist. Guess my rules from 5 inputs.", status: "approved", tried: 6, postedAt: "2026-10-15" },
  { id: "w6", author: "Sana V.", part: "ct", tag: "CT 6", kind: "Garden plan", visual: { text: "4 × 4", tone: "green" }, title: "16 m fence, 16 m² garden", body: "Square wins. My L-shape only fit 12 m².", status: "approved", tried: 11, postedAt: "2026-10-15" },
  { id: "w7", author: "Diya R.", part: "ai", tag: "AI 2", kind: "Pictogram", visual: { text: "▮▮▮▮▮", tone: "grey" }, title: "Our bus vs walkers", body: "One icon = 2 students. Walkers win this week.", status: "approved", tried: 8, postedAt: "2026-10-16" },
  { id: "w8", author: "Arnav G.", part: "ct", tag: "CT 2", kind: "Paper clock", visual: { text: "90°", tone: "pink" }, title: "Clock with angles", body: "Every 5 minutes is 30°. At 3:00 it’s 90°.", status: "approved", tried: 12, postedAt: "2026-10-17" },
];

/* Portfolio · DEMO items for Riya S. */
export const portfolioDemo = {
  quote: "I like finding the rule hiding inside things.",
  items: [
    { id: "p1", tag: "CT 5 · String art", title: "12-point star", learned: "Numbers that share no factor with 12 make stars.", chips: ["Pattern recognition"], visual: { text: "12/5", tone: "red" } },
    { id: "p2", tag: "CT 1 · Pattern Maker", title: "Growing towers", learned: "A rule can be written before you build.", chips: ["Pattern recognition", "Algorithmic"], visual: { text: "3 → 7 → 11", tone: "ink" } },
    { id: "p3", tag: "CT 9 · Mirror Studio", title: "Rangoli half", learned: "S has a turn, not a mirror line.", chips: ["Abstract thinking"], visual: { text: "◆ | ◆", tone: "yellow" } },
    { id: "p4", tag: "AI 1 · Learning Lab", title: "Shape sorter notes", learned: "Labels let a model learn names.", chips: ["CG-3 · AI"], visual: { text: "▲ ■ ●", tone: "grey" } },
  ] satisfies PortfolioItem[],
  badges: [
    { id: "b1", name: "Pattern spotter", detail: "Finished CT 1 with all 10 questions explained" },
    { id: "b2", name: "Angle hunter", detail: "Logged straight lines in the Clock Angle Lab" },
    { id: "b3", name: "Fair data keeper", detail: "Project 1 · Data care, no names collected" },
  ],
};

/* Projects · DEMO progress for Team Rocket (6B). */
export const projectsDemo: Record<string, ProjectProgress> = {
  "data-detectives": {
    slug: "data-detectives",
    team: "Team Rocket · 6B",
    members: [
      { name: "Riya S.", role: "keeper" },
      { name: "Aarav P.", role: "leader" },
      { name: "Meher K.", role: "designer" },
      { name: "Kabir M.", role: "speaker" },
    ],
    hoursLogged: 12,
    stageStatus: { ask: "done", plan: "done", collect: "working", show: "up-next", decide: "up-next", share: "up-next" },
    marks: { question: 3, care: 4, representation: 0, reasoning: 0, reflection: 2 },
    teacherNote: "Strong question and careful counting. Keep the journal going every stage.",
  },
  "cyber-suraksha": {
    slug: "cyber-suraksha",
    team: "Team Rocket · 6B",
    members: [
      { name: "Riya S.", role: "privacy" },
      { name: "Aarav P.", role: "phishing" },
      { name: "Meher K.", role: "password" },
      { name: "Kabir M.", role: "footprint" },
    ],
    hoursLogged: 0,
    stageStatus: { learn: "working", investigate: "up-next", design: "up-next", build: "up-next", run: "up-next", reflect: "up-next" },
    marks: { understanding: 0, design: 0, safety: 0, communication: 0, reflection: 0 },
    teacherNote: "",
  },
};

/** DEMO tally for the Collect stage (render numbers). */
export const tallyDemo: Record<string, number> = { Walk: 11, Cycle: 4, "School bus": 7, Car: 6, Auto: 3 };
