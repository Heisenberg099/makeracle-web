/** Class bands, programme types and course pages (from the website blueprint). */

export type Band = {
  id: string;
  classes: string;
  theme: string;
  skills: string;
  tools: string;
  ships: string;
  alignment: string;
  highlight?: "red" | "ink";
  note?: string;
};

export const bands: Band[] = [
  {
    id: "3-5",
    classes: "3–5",
    theme: "Play and patterns",
    skills: "Decomposition, patterns, sequencing, debugging. Unplugged first.",
    tools: "ScratchJr, Scratch",
    ships: "An interactive story or game",
    alignment: "CBSE CT 50 hrs · Bebras",
  },
  {
    id: "6-8",
    classes: "6–8",
    theme: "First real builds",
    skills: "Variables, loops, events, data tables, the AI project cycle, bias.",
    tools: "Scratch → browser Python, HTML/CSS, MIT App Inventor",
    ships: "A portfolio website, an AI classifier, a first Android app",
    alignment: "CBSE CT & AI 100 hrs (40 / 20 / 40)",
    highlight: "red",
    note: "most schools start here",
  },
  {
    id: "9-10",
    classes: "9–10",
    theme: "Building with AI",
    skills: "Python, JavaScript, Git, prompts as specifications, safe LLM API use.",
    tools: "Web apps, Flutter intro, pandas",
    ships: "A subject chatbot, a data story",
    alignment: "AI 417 · CT & AI from 2027–28 · INAIO Stage 1",
  },
  {
    id: "11-12",
    classes: "11–12",
    theme: "Shipping real products",
    skills: "Data structures, statistics for ML, testing, agents with guardrails.",
    tools: "Full-stack web, Flutter, scikit-learn",
    ships: "A deployed capstone with real users",
    alignment: "AI 843 · CS 083 · INAIO / IOAI",
    highlight: "ink",
  },
];

export const programmeTypes = [
  "In-school annual",
  "90-min workshop",
  "Term pilot",
  "Holiday bootcamp",
  "Small-group cohort",
  "INAIO prep · 9–12",
  "Teacher certification",
] as const;
export type ProgrammeType = (typeof programmeTypes)[number];

export type Course = {
  slug: string;
  name: string;
  tagline: string;
  band: string; // class band id
  classes: string;
  ages: string;
  track: "AI" | "Web" | "App" | "Data" | "Computational thinking";
  types: ProgrammeType[];
  duration: string;
  prerequisites: string;
  builds: string;
  outcomes: string[];
  outline: string[];
  tools: string;
  devices: string;
  assessment: string;
  cbse: string;
  languages: string;
  support: string;
  price?: string; // parent courses only
};

export const courses: Course[] = [
  {
    slug: "padhai-buddy",
    name: "Padhai Buddy",
    tagline: "Build your own AI study assistant",
    band: "9-10",
    classes: "Classes 8–10",
    ages: "ages 13–16",
    track: "AI",
    types: ["In-school annual", "90-min workshop", "Holiday bootcamp"],
    duration: "12 sessions × 45 min",
    prerequisites: "Basic Scratch, or none",
    builds: "A chatbot that answers from the student's own chapter notes — and cites the page",
    outcomes: [
      "Write prompts as specifications",
      "Ground answers in a source",
      "Test an AI for wrong answers",
      "Explain how their bot works",
    ],
    outline: [
      "What is a chatbot? Unplugged role-play",
      "Your notes become data",
      "Prompts as specifications",
      "First working bot",
      "Make it cite its sources",
      "Break it: find wrong answers",
      "Fix it and re-test",
      "Hindi and English questions",
      "Make it look good",
      "Peer testing in pairs",
      "Portfolio page and reflection",
      "Showcase demo",
    ],
    tools: "Free, browser-based; works offline with cached demo answers",
    devices: "Lab PC or a shared Android phone",
    assessment: "4-level rubric + a portfolio artifact",
    cbse: "[Competency codes] · [hours covered]",
    languages: "English · Hindi",
    support: "Script, slides, rubric, weekly office hours",
  },
  {
    slug: "mera-portfolio",
    name: "Mera Portfolio",
    tagline: "Hand-code your own website",
    band: "6-8",
    classes: "Classes 6–8",
    ages: "ages 11–14",
    track: "Web",
    types: ["In-school annual", "Term pilot"],
    duration: "12 sessions × 45 min",
    prerequisites: "None",
    builds: "A personal website, hand-coded in HTML and CSS, that holds every project they make",
    outcomes: [
      "Structure a page with HTML",
      "Style it with CSS",
      "Publish safely (first name + initial only)",
      "Write a short reflection",
    ],
    outline: ["How the web works (unplugged)", "My first tag", "Headings, lists, links", "Colours and fonts", "Layout with boxes", "Adding projects", "Peer review", "Publish and present"],
    tools: "Makeracle Studio (HTML/CSS editor), works offline",
    devices: "Lab PC or shared Android phone",
    assessment: "4-level rubric + the live page",
    cbse: "[Competency codes] · [hours covered]",
    languages: "English · Hindi",
    support: "Script, slides, rubric, weekly office hours",
  },
  {
    slug: "mohalla-helper",
    name: "Mohalla Helper",
    tagline: "A first Android app for your neighbourhood",
    band: "6-8",
    classes: "Classes 6–8",
    ages: "ages 11–14",
    track: "App",
    types: ["In-school annual", "Term pilot", "Holiday bootcamp"],
    duration: "12 sessions × 45 min",
    prerequisites: "Some Scratch helps",
    builds: "An Android app that solves one real problem in their neighbourhood",
    outcomes: ["Interview real users", "Design screens", "Use events and variables", "Test with a neighbour"],
    outline: ["Find a problem", "Talk to three people", "Sketch screens", "First screen in App Inventor", "Buttons and events", "Storing data", "Test with users", "Showcase"],
    tools: "MIT App Inventor",
    devices: "Lab PC + one Android phone per group",
    assessment: "4-level rubric + APK and demo video",
    cbse: "[Competency codes] · [hours covered]",
    languages: "English · Hindi",
    support: "Script, slides, rubric, weekly office hours",
  },
  {
    slug: "fair-or-not",
    name: "Fair or Not?",
    tagline: "Train an AI, then catch it being unfair",
    band: "6-8",
    classes: "Classes 6–8",
    ages: "ages 11–14",
    track: "AI",
    types: ["In-school annual", "Term pilot"],
    duration: "10 sessions × 45 min",
    prerequisites: "None",
    builds: "An image classifier, plus a short report on where it was unfair and how they fixed it",
    outcomes: ["Follow the AI project cycle", "Collect and label data", "Spot bias", "Explain a fix"],
    outline: ["Sorting game (unplugged)", "Collect data", "Train a classifier", "Test it", "Find who it fails", "Fix the data", "Report back"],
    tools: "Browser-based classifier, no login for under-13s",
    devices: "Lab PC or phone with camera",
    assessment: "4-level rubric + bias report",
    cbse: "[Competency codes] · [hours covered]",
    languages: "English · Hindi",
    support: "Script, slides, rubric, weekly office hours",
  },
  {
    slug: "data-detective",
    name: "Data Detective",
    tagline: "Tell a true story with real local data",
    band: "9-10",
    classes: "Classes 9–10",
    ages: "ages 14–16",
    track: "Data",
    types: ["In-school annual", "Small-group cohort"],
    duration: "12 sessions × 45 min",
    prerequisites: "Basic Python helps",
    builds: "A data story from a real local dataset, told with charts",
    outcomes: ["Clean a dataset", "Ask a good question", "Choose the right chart", "Present a finding honestly"],
    outline: ["What makes a good question", "Loading data", "Cleaning", "First charts", "Finding the story", "Checking for misleading charts", "Writing it up", "Presenting"],
    tools: "Python, pandas in the browser",
    devices: "Lab PC",
    assessment: "4-level rubric + data story",
    cbse: "[Competency codes] · [hours covered]",
    languages: "English · Hindi",
    support: "Script, slides, rubric, weekly office hours",
  },
];

export function getCourse(slug: string) {
  return courses.find((c) => c.slug === slug);
}
