/**
 * Makeracle Studio copy for Class 6 — taken from the design renders
 * ("Makeracle Class 6 CT & AI Studio" PDF), NOT from the CBSE handbook.
 *
 * Lab names, "Make" projects and strand tags are Makeracle's product design.
 * The handbook names CT strands only for the Chapter 5 activity; the tags
 * below are the renders' tags. The `spot` lines are short UI summaries of
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
};

export const ctStudio: Record<number, CTStudioCopy> = {
  1: { lab: "Pattern Lab", make: "Pattern Maker", strands: ["Pattern recognition"], spot: "Shoot one item from each box. Eliminate the most.", line: "Grow a series, spot the rule, then make your own." },
  2: { lab: "Clock Angle Lab", make: "Clock-angle spinner", strands: ["Abstract thinking", "Algorithmic thinking"], spot: "Four ropes, four colours. Which rope is red?", line: "Every time is an angle. Test it on the clock." },
  3: { lab: "Sachin’s Dice Game", make: "Dice-score puzzle builder", strands: [], spot: "Four friends, four shapes. Who chose the circle?", line: "Fewest rolls wins. Play it to think it." },
  4: { lab: "Graph Clue Cracker", make: "Pictograph studio", strands: ["Decomposition"], spot: "Fill the circles with 1 to 6. What is A minus B?", line: "Who is which bar? Cross-check the clues." },
  5: { lab: "Circle of 12", make: "Circle-of-12 star maker", strands: ["Pattern recognition", "Abstract thinking"], spot: "Click squares to balance grey and white", line: "Activity Time: connect 12 points by adding 2, 3, 4, 5, 6." },
  6: { lab: "Kitchen Garden Planner", make: "Fold-and-measure garden planner", strands: ["Abstract thinking", "Decomposition"], spot: "Place 11, 3, 5 and 2 so neighbours add to more than 9 and less than 17.", line: "Same fence, more space?" },
  7: { lab: "Report Card Lab", make: "Fraction report card", strands: ["Decomposition"], spot: "Two friends who sometimes lie. Which day is today?", line: "Out of 25, 50 or 100? Compare fairly." },
  8: { lab: "Square Builder", make: "Square-builder tangram kit", strands: ["Abstract thinking"], spot: "Follow the arrows to find A and B.", line: "Pieces in, square out." },
  9: { lab: "Mirror Studio", make: "Fold-and-cut symmetry studio", strands: ["Abstract thinking", "Pattern recognition"], spot: "Only one jar tells the truth.", line: "Draw half, get whole." },
  10: { lab: "Alex’s Magic Box", make: "Magic-box logic machine", strands: ["Algorithmic thinking"], spot: "26 letters in a circle. Which four share a group?", line: "Rules in, negatives out." },
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
