/**
 * DEMO DATA for the Phase 2 portals.
 * Everything here is fictional. The backend team will replace these exports
 * with API calls of the same shape (see src/lib/types.ts and docs/ARCHITECTURE.md).
 */
import type { ClassSection, Lesson, Portfolio, PortfolioItem, ProjectProgress, StudioProgress, Student, Submission, WallPost } from "./types";

export const demoSchool = { id: "sch_demo", name: "Demo Public School", city: "Greater Noida", board: "CBSE" };

export const demoTeacher = {
  id: "t_1",
  name: "Ms. Kavya Sharma",
  certification: "Facilitator" as const,
  trainingDone: 6,
  trainingTotal: 10,
};

export const classes: ClassSection[] = [
  { id: "6A", label: "Class 6 · A", classNum: 6, module: "Mera Portfolio", lessonId: "mp-3", hours: { ct: 14, ai: 4, project: 10 }, slot: "Mon, Wed · 10:20" },
  { id: "7B", label: "Class 7 · B", classNum: 7, module: "Fair or Not?", lessonId: "fn-2", hours: { ct: 22, ai: 9, project: 16 }, slot: "Tue, Thu · 11:40" },
  { id: "8C", label: "Class 8 · C", classNum: 8, module: "Mohalla Helper", lessonId: "mh-1", hours: { ct: 30, ai: 12, project: 24 }, slot: "Fri · 09:00 (double)" },
];

export const requirement68 = { ct: 40, ai: 20, project: 40 };

const names = [
  "Aarav S.", "Ananya R.", "Kabir M.", "Diya P.", "Vihaan K.", "Isha T.", "Arjun N.", "Meera J.",
  "Rohan M.", "Priya K.", "Aditya V.", "Sara B.", "Ishaan G.", "Navya D.", "Reyansh L.", "Tara H.",
];

export const students: Student[] = classes.flatMap((c, ci) =>
  names.slice(0, 12).map((n, i) => ({
    id: `${c.id}-${i + 1}`,
    name: names[(i + ci * 3) % names.length],
    classId: c.id,
    roll: i + 1,
  })),
);

export const lessons: Lesson[] = [
  {
    id: "mp-1",
    module: "Mera Portfolio",
    band: "6-8",
    track: "Web",
    order: 1,
    title: "How the web works",
    minutes: 45,
    competency: "[CT-6.x] Decomposition",
    unplugged: true,
    materials: ["Slides", "Worksheet: 'Be the browser'", "Paper cut-outs"],
    steps: [
      { min: 5, title: "Hook", say: "Who here has opened a website today? Which one? Let's find out what really happened.", do: "Ask 3 students; write the sites on the board." },
      { min: 15, title: "Be the browser", say: "You are the browser, you are the server. Let's send a page across the room.", do: "Pairs pass paper 'requests' and 'responses'." },
      { min: 15, title: "Spot the parts", say: "Every page has a head, a body and content. Find them on the worksheet.", do: "Worksheet in pairs; circulate and check." },
      { min: 10, title: "Wrap-up", say: "Tell your partner one thing a browser does.", do: "Exit ticket: one sentence each." },
    ],
  },
  {
    id: "mp-2",
    module: "Mera Portfolio",
    band: "6-8",
    track: "Web",
    order: 2,
    title: "My first tag",
    minutes: 45,
    competency: "[CT-6.x] Sequencing",
    unplugged: false,
    materials: ["Slides", "Studio starter: hello.html"],
    steps: [
      { min: 5, title: "Recap", say: "What does the browser need from us? Instructions it understands.", do: "Show yesterday's worksheet." },
      { min: 10, title: "Live demo", say: "Watch me type one heading. What changes if I misspell it?", do: "Projector: type <h1>, break it, fix it." },
      { min: 25, title: "Build in pairs", say: "Make a page with your first name and initial and one thing you love.", do: "Driver/navigator swap at 12 minutes." },
      { min: 5, title: "Share", say: "Two pairs show their page.", do: "Pick volunteers; praise one specific choice." },
    ],
  },
  {
    id: "mp-3",
    module: "Mera Portfolio",
    band: "6-8",
    track: "Web",
    order: 3,
    title: "Colours and fonts with CSS",
    minutes: 45,
    competency: "[CT-6.x] Patterns",
    unplugged: false,
    materials: ["Slides", "Colour cards", "Studio starter: style.css"],
    steps: [
      { min: 5, title: "Hook", say: "Same words, two looks. Which page would you trust? Why?", do: "Show two versions of one page." },
      { min: 10, title: "One rule", say: "A CSS rule says: find this, then change that.", do: "Type one rule live; change colour three times." },
      { min: 22, title: "Build in pairs", say: "Pick two colours and one font. Make your page yours.", do: "Swap driver at 11 minutes. Check contrast with the card." },
      { min: 8, title: "Gallery walk", say: "Leave one kind comment on another pair's page.", do: "Sticky notes on screens." },
    ],
  },
  {
    id: "fn-1",
    module: "Fair or Not?",
    band: "6-8",
    track: "AI",
    order: 1,
    title: "The sorting game",
    minutes: 45,
    competency: "[AI-7.x] AI project cycle",
    unplugged: true,
    materials: ["Picture cards", "Slides"],
    steps: [
      { min: 10, title: "Hook", say: "I'll show you pictures. Sort them into two piles — but I won't tell you the rule.", do: "Run the sort with 6 volunteers." },
      { min: 20, title: "Guess the rule", say: "How did you decide? That's what a classifier does.", do: "Groups write their rule." },
      { min: 15, title: "Where it fails", say: "Which picture didn't fit any pile? Who decided that?", do: "Discuss; note words like 'unfair'." },
    ],
  },
  {
    id: "fn-2",
    module: "Fair or Not?",
    band: "6-8",
    track: "AI",
    order: 2,
    title: "Collect and label data",
    minutes: 45,
    competency: "[AI-7.x] Data",
    unplugged: false,
    materials: ["Slides", "Classifier tool (no login)", "Object set"],
    steps: [
      { min: 5, title: "Recap", say: "Yesterday you were the classifier. Today the computer learns from you.", do: "Show the tool on the projector." },
      { min: 25, title: "Collect", say: "Take 20 examples of each object. Different angles, different light.", do: "Pairs collect; no faces, no people." },
      { min: 10, title: "Train and test", say: "Train it. Now test with something it has never seen.", do: "Note results on the worksheet." },
      { min: 5, title: "Reflect", say: "When was it wrong? Why do you think so?", do: "One sentence in the reflection journal." },
    ],
  },
  {
    id: "mh-1",
    module: "Mohalla Helper",
    band: "6-8",
    track: "App",
    order: 1,
    title: "Find a real problem",
    minutes: 45,
    competency: "[CT-8.x] Problem framing",
    unplugged: true,
    materials: ["Slides", "Interview sheet"],
    steps: [
      { min: 10, title: "Hook", say: "What's one small thing in your street that annoys everyone?", do: "Collect 10 ideas on the board." },
      { min: 20, title: "Plan interviews", say: "Who would you ask? What three questions?", do: "Groups fill the interview sheet." },
      { min: 15, title: "Pick one", say: "Which problem could an app actually help with?", do: "Each group commits to one problem." },
    ],
  },
];

export function getLesson(id: string) {
  return lessons.find((l) => l.id === id);
}

export const submissions: Submission[] = [
  { id: "s1", studentId: "8C-1", studentName: "Aarav S.", classId: "8C", project: "Padhai Buddy", submittedAt: "2026-10-15", status: "submitted", reflection: "An AI can sound sure and still be wrong, so mine shows the page it got the answer from." },
  { id: "s2", studentId: "8C-2", studentName: "Ananya R.", classId: "8C", project: "Mohalla Helper", submittedAt: "2026-10-16", status: "submitted", reflection: "Talking to my neighbour changed what my app does." },
  { id: "s3", studentId: "7B-4", studentName: "Diya P.", classId: "7B", project: "Fair or Not?", submittedAt: "2026-10-14", status: "reviewed", reflection: "It only knew red pens, so it thought blue pens were pencils." },
  { id: "s4", studentId: "6A-3", studentName: "Kabir M.", classId: "6A", project: "Mera Portfolio", submittedAt: "2026-10-17", status: "submitted", reflection: "I learned that one missing > breaks everything." },
];

export const portfolios: Portfolio[] = [
  {
    handle: "aarav-s",
    displayName: "Aarav S.",
    classLabel: "Class 8",
    school: "Demo Public School",
    showSchool: true,
    quote: "I make things that answer questions — and I check if they're right.",
    projects: [
      { title: "Padhai Buddy", kind: "AI · 12 sessions", learned: "An AI can sound sure and still be wrong, so mine shows the page it got the answer from.", rubric: ["Works", "Readable", "Original", "Reflected"], link: "#", linkLabel: "Try it →", preview: "chat" },
      { title: "Mohalla Helper", kind: "App · Android", learned: "Asking three neighbours what they needed changed my whole app.", rubric: ["Works", "Readable"], link: "#", linkLabel: "Download APK →", preview: "app" },
      { title: "Mera Portfolio", kind: "Web · HTML / CSS", learned: "The page you're on started as my very first HTML file.", rubric: ["Works", "Readable"], link: "#", linkLabel: "View code →", preview: "web" },
    ],
    badges: ["First bot", "Bug hunter", "Fair tester", "Shipped an app"],
    certificates: [{ title: "Padhai Buddy workshop", code: "MKR-2026-0001", issued: "[date]" }],
  },
  {
    handle: "diya-p",
    displayName: "Diya P.",
    classLabel: "Class 7",
    school: "Demo Public School",
    showSchool: false,
    quote: "I taught a computer to sort pens — then caught it being unfair.",
    projects: [
      { title: "Fair or Not?", kind: "AI · classifier", learned: "It only knew red pens, so it thought blue pens were pencils. More varied data fixed it.", rubric: ["Works", "Original", "Reflected"], link: "#", linkLabel: "See the report →", preview: "chat" },
    ],
    badges: ["Fair tester"],
    certificates: [],
  },
];

export function getPortfolio(handle: string) {
  return portfolios.find((p) => p.handle === handle);
}

export const announcements = [
  { date: "16 Oct", text: "New: Hindi slides for Mera Portfolio lessons 1–4." },
  { date: "10 Oct", text: "CBSE circular on CT & AI assessment — what it means for your marks export." },
];

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
  { id: "w4", author: "Meher J.", part: "ct", tag: "CT 9", kind: "Mirror art", visual: { text: "◆ | ◆", tone: "white" }, title: "Diwali rangoli half", body: "Drew one half, the mirror did the rest. Two lines of symmetry!", status: "approved", tried: 17, postedAt: "2026-10-14" },
  { id: "w5", author: "Ishaan G.", part: "ct", tag: "CT 10", kind: "Magic box", visual: { text: "IN → ? → OUT", tone: "ink" }, title: "The flip-flop box", body: "Two rules and a twist. Guess my rules from 5 inputs.", status: "approved", tried: 6, postedAt: "2026-10-15" },
  { id: "w6", author: "Sana B.", part: "ct", tag: "CT 6", kind: "Garden plan", visual: { text: "4 × 4", tone: "green" }, title: "16 m fence, 16 m² garden", body: "Square wins. My L-shape only fit 12 m².", status: "approved", tried: 11, postedAt: "2026-10-15" },
  { id: "w7", author: "Diya P.", part: "ai", tag: "AI 2", kind: "Pictogram", visual: { text: "▮▮▮▮▮", tone: "grey" }, title: "Our bus vs walkers", body: "One icon = 2 students. Walkers win this week.", status: "approved", tried: 8, postedAt: "2026-10-16" },
  { id: "w8", author: "Arnav K.", part: "ct", tag: "CT 2", kind: "Paper clock", visual: { text: "90°", tone: "pink" }, title: "Clock with angles", body: "Every 5 minutes is 30°. At 3:00 it’s 90°.", status: "approved", tried: 12, postedAt: "2026-10-17" },
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
      { name: "Meher J.", role: "designer" },
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
      { name: "Meher J.", role: "password" },
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
