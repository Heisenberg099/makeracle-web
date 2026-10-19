/**
 * Step-by-step paths through the four AI chapters (Makeracle Studio design).
 *
 * Each step lists which handbook sections it teaches (shown under "From the
 * handbook"), which handbook exercise items it asks, and which interactive
 * lab it uses. Together the steps cover every section and every exercise
 * item of each chapter — see `coverage()` below.
 */
export type AILab =
  | "intelligence"
  | "history"
  | "everyday"
  | "sort"
  | "data-around"
  | "types"
  | "organise"
  | "lemonade"
  | "patterns"
  | "weather"
  | "responsible"
  | "inbox"
  | "practices"
  | "footprints"
  | "check";

export type AIStep = {
  slug: string;
  /** Short label for the step bar. */
  label: string;
  title: string;
  red: string;
  /** Handbook section ids taught in this step. */
  sections: string[];
  lab: AILab;
  /** Handbook exercise A item ids asked in this step. */
  mcq?: string[];
  /** Exercise E (table) or D (think-and-apply table) asked in this step. */
  table?: "table" | "thinkApply";
  /** Exercise B, C and D (open questions) — the "Check yourself" step. */
  fill?: boolean;
  short?: boolean;
  thinkOpen?: boolean;
};

export const aiPaths: Record<number, AIStep[]> = {
  1: [
    { slug: "intelligence", label: "Intelligence", title: "What makes", red: "someone smart?", sections: ["ai1-intelligence", "ai1-what-is-ai", "ai1-human-vs-machine"], lab: "intelligence" },
    { slug: "history", label: "History", title: "From water clocks", red: "to thinking machines.", sections: ["ai1-history", "ai1-modern"], lab: "history" },
    { slug: "everyday", label: "AI around us", title: "A day full of AI", red: "you never noticed.", sections: ["ai1-daily-life", "ai1-how-ai-learns"], lab: "everyday", mcq: ["ai1-mcq1", "ai1-mcq2", "ai1-mcq3", "ai1-mcq4", "ai1-mcq5"] },
    { slug: "ai-or-automation", label: "AI or automation?", title: "Smart or", red: "really learning?", sections: ["ai1-not-ai", "ai1-ml"], lab: "sort", table: "thinkApply" },
    { slug: "check", label: "Check yourself", title: "Check yourself.", red: "Intro to AI.", sections: [], lab: "check", fill: true, short: true },
  ],
  2: [
    { slug: "what-is-data", label: "What is data?", title: "Data is", red: "everywhere.", sections: ["ai2-intro", "ai2-what-is-data", "ai2-importance"], lab: "data-around", mcq: ["ai2-mcq1", "ai2-mcq3"] },
    { slug: "types", label: "Types of data", title: "Numbers, words,", red: "pictures, sounds.", sections: ["ai2-types"], lab: "types", mcq: ["ai2-mcq2", "ai2-mcq4", "ai2-mcq5"], table: "table" },
    { slug: "collect-organise", label: "Collect & organise", title: "Collect it.", red: "Organise it.", sections: ["ai2-collecting", "ai2-organising"], lab: "organise" },
    { slug: "represent", label: "Lemonade lab", title: "Raw numbers in.", red: "Decisions out.", sections: ["ai2-representing"], lab: "lemonade" },
    { slug: "check", label: "Check yourself", title: "Check yourself.", red: "Basic data concepts.", sections: [], lab: "check", fill: true, short: true, thinkOpen: true },
  ],
  3: [
    { slug: "patterns", label: "Patterns", title: "Patterns are", red: "everywhere.", sections: ["ai3-pattern", "ai3-importance", "ai3-identifying", "ai3-repeated", "ai3-similarities"], lab: "patterns", mcq: ["ai3-mcq1", "ai3-mcq3"] },
    { slug: "weather-diary", label: "Weather diary", title: "Weather diary", red: "Observe → conclude → decide.", sections: ["ai3-observations", "ai3-decisions"], lab: "weather", mcq: ["ai3-mcq2", "ai3-mcq4", "ai3-mcq5"], table: "table" },
    { slug: "check", label: "Check yourself", title: "Check yourself.", red: "Patterns and decisions.", sections: [], lab: "check", fill: true, short: true, thinkOpen: true },
  ],
  4: [
    { slug: "responsible-use", label: "Responsible use", title: "Think before", red: "you click.", sections: ["ai4-intro", "ai4-responsible-use", "ai4-ethics", "ai4-computer-ethics"], lab: "responsible" },
    { slug: "arjuns-inbox", label: "Arjun’s inbox", title: "Be Arjun’s", red: "cyber bodyguard.", sections: ["ai4-arjun"], lab: "inbox", mcq: ["ai4-mcq2", "ai4-mcq3", "ai4-mcq4"] },
    { slug: "online-dangers", label: "Online dangers", title: "Name it.", red: "Stop it.", sections: ["ai4-unethical"], lab: "practices", mcq: ["ai4-mcq1"], table: "table" },
    { slug: "footprints", label: "Digital footprints", title: "Every click", red: "leaves a footprint.", sections: ["ai4-footprint", "ai4-good-behaviour"], lab: "footprints", mcq: ["ai4-mcq5"] },
    { slug: "check", label: "Check yourself", title: "Check yourself.", red: "Ethics online.", sections: [], lab: "check", fill: true, short: true, thinkOpen: true },
  ],
};

export function getAIStep(chapter: number, slug: string) {
  return aiPaths[chapter]?.find((s) => s.slug === slug);
}
