/**
 * Makeracle Studio copy for Class 6 — taken from the design renders
 * ("Makeracle Class 6 CT & AI Studio" PDF), NOT from the CBSE handbook.
 *
 * Lab names, "Make" projects and strand tags are Makeracle's product design.
 * The handbook names CT strands only for the Chapter 5 activity; the tags
 * below are the renders' tags (lab-page chips). The `spot` lines are short UI summaries of
 * each chapter's handbook Thinking Spot (full text lives in ./ct/*).
 */

export type StudioStrand = "Abstract thinking" | "Pattern recognition" | "Decomposition" | "Algorithmic thinking";

export type CTStudioCopy = {
  /** Lab screen name (render page title). */
  lab: string;
  /** "Make: …" on the journey card. */
  make: string;
  /** Render strand tags for the chapter (empty where the render shows none). */
  strands: StudioStrand[];
  /** One-line summary of the chapter's Thinking Spot. */
  spot: string;
  /** Panel line under the chapter title. */
  line: string;
  /** Red second line of the lab title. */
  tagline: string;
  /** Chip text next to the chapter chip on the lab page (render wording). */
  chip: string;
  /** Short intro beside or under the lab title. */
  intro?: string;
};

export const ctStudio: Record<number, CTStudioCopy> = {
  1: { lab: "Pattern Lab", make: "Pattern Maker", strands: ["Pattern recognition"], spot: "Shoot one item from each box. Eliminate the most.", line: "Grow a series, spot the rule, then make your own.", tagline: "Chapter 1 · Q1", chip: "Pattern recognition", intro: "Think first, test with the machine, then make your own. Hints unlock one at a time; the answer is never shown until you explain your rule." },
  2: { lab: "Clock Angle Lab", make: "Clock-angle spinner", strands: ["Abstract thinking", "Algorithmic thinking"], spot: "Four ropes, four colours. Which rope is red?", line: "Every time is an angle. Test it on the clock.", tagline: "Every time is an angle.", chip: "Abstract thinking · Algorithmic thinking" },
  3: { lab: "Sachin’s Dice Game", make: "Dice-score puzzle builder", strands: ["Decomposition", "Algorithmic thinking"], spot: "Four friends, four shapes. Who chose the circle?", line: "Fewest rolls wins. Play it to think it.", tagline: "Fewest rolls wins.", chip: "Decomposition · Algorithmic thinking" },
  4: { lab: "Graph Clue Cracker", make: "Pictograph studio", strands: ["Decomposition"], spot: "Fill the circles with 1 to 6. What is A minus B?", line: "Who is which bar? Cross-check the clues.", tagline: "Who is which bar?", chip: "Decomposition · cross-referencing clues", intro: "A practice twin of handbook Q4 (friends’ weights on an unlabelled graph) with new numbers, so the real question stays a fresh challenge." },
  5: { lab: "Circle of 12", make: "Circle-of-12 star maker", strands: ["Pattern recognition", "Abstract thinking"], spot: "Click squares to balance grey and white", line: "Activity Time: connect 12 points by adding 2, 3, 4, 5, 6.", tagline: "Add, join, repeat.", chip: "Activity Time · factors & multiples", intro: "Start at a point. Add the same number again and again and join each point you land on. Stop when you are back where you started. Watch which numbers make polygons and which make stars." },
  6: { lab: "Kitchen Garden Planner", make: "Fold-and-measure garden planner", strands: ["Abstract thinking", "Decomposition"], spot: "Place 11, 3, 5 and 2 so neighbours add to more than 9 and less than 17.", line: "Same fence, more space?", tagline: "Same fence, more space?", chip: "Abstract thinking · Decomposition" },
  7: { lab: "Report Card Lab", make: "Fraction report card", strands: ["Decomposition"], spot: "Two friends who sometimes lie. Which day is today?", line: "Out of 25, 50 or 100? Compare fairly.", tagline: "Out of 25, 50 or 100?", chip: "Decomposition · comparing" },
  8: { lab: "Square Builder", make: "Square-builder tangram kit", strands: ["Abstract thinking"], spot: "Follow the arrows to find A and B.", line: "Pieces in, square out.", tagline: "Pieces in, square out.", chip: "Abstract thinking · spatial reasoning" },
  9: { lab: "Mirror Studio", make: "Fold-and-cut symmetry studio", strands: ["Abstract thinking", "Pattern recognition"], spot: "Only one jar tells the truth.", line: "Draw half, get whole.", tagline: "Draw half, get whole.", chip: "Abstract thinking · Pattern recognition" },
  10: { lab: "Alex’s Magic Box", make: "Magic-box logic machine", strands: ["Algorithmic thinking"], spot: "26 letters in a circle. Which four share a group?", line: "Rules in, negatives out.", tagline: "Rules in, negatives out.", chip: "Algorithmic thinking · conditional rules" },
};

export type AIStudioCopy = { lab: string; make: string; line: string };

export const aiStudio: Record<number, AIStudioCopy> = {
  1: { lab: "Intro to AI", make: "AI-or-automation sorter", line: "Smart, or really learning? Four short steps." },
  2: { lab: "Data Lab", make: "Lemonade data lab", line: "Raw numbers in. Decisions out." },
  3: { lab: "Decision Lab", make: "Weather diary", line: "Observe, conclude, decide." },
  4: { lab: "Arjun’s Inbox", make: "Arjun’s inbox", line: "Spot the traps before Arjun clicks." },
};

/** Where each part of the journey opens. Routes are built in later phases. */
export const studioRoutes = {
  home: "/studio",
  ct: (n: number) => `/studio/ct/${n}`,
  thinkingSpot: (n: number) => `/studio/ct/${n}/thinking-spot`,
  ai: (n: number) => (n === 1 ? "/studio/ai/1/intelligence" : `/studio/ai/${n}`),
  project: (slug: string) => `/studio/projects/${slug}`,
  wall: "/studio/wall",
  portfolio: "/studio/portfolio",
};
