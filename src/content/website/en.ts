/**
 * All public website copy, in English — the single source of truth for words
 * on the site (from the "Website Content & Build Brief", 19 Oct 2026).
 *
 * Translating: copy this file to hi.ts, keep every key, translate the
 * strings (see docs/I18N.md). Code and tool names (Python, HTML, Scratch)
 * stay in English.
 *
 * Rules: anything in [square brackets] is a placeholder that must be
 * replaced with real data before launch. Never invent numbers,
 * testimonials or school names. Never write "miracle", "magic",
 * "guaranteed", salary/job claims or "become an AI engineer".
 */
import type { FormDef } from "@/lib/leads/forms";
import type { IconName } from "@/components/ui/Icon";

/* ------------------------------------------------------------------ */
/* Shared                                                              */
/* ------------------------------------------------------------------ */

export const common = {
  cta: {
    book: "Book a free workshop",
    pilot: "Request a pilot proposal",
    howItWorks: "See how it works",
  },
  alumni: {
    label: "Built by alumni of",
    disclaimer: "makeracle is an independent company and is not affiliated with or endorsed by these institutions.",
  },
  footer: {
    explore: "Explore",
    company: "Company",
    trust: "Trust",
    comingSoon: "soon",
    rights: "All rights reserved.",
  },
};

/** SEO titles (< 60 chars) and meta descriptions (< 155 chars). */
export const seo = {
  home: {
    title: "makeracle · AI, web & app projects for CBSE schools",
    description:
      "Students build real AI, web and app projects in school, taught by your own teachers. Built for CBSE’s CT & AI curriculum. Book a free workshop.",
  },
  schools: {
    title: "CBSE CT & AI curriculum delivery · makeracle",
    description:
      "Ready-to-run lessons, project modules, rubrics and teacher training for CBSE’s Computational Thinking & AI hours, Classes 3–12.",
  },
  programmes: {
    title: "AI & coding programmes, Classes 3–12 · makeracle",
    description: "From Scratch stories to deployed apps: project-based AI, web and app learning for every class band.",
  },
  workshops: {
    title: "Free AI workshop for schools · makeracle",
    description: "A free 90-minute workshop where Class 7–9 students build their own AI study assistant. Book one for your school.",
  },
  teachers: {
    title: "Teach AI with confidence · makeracle",
    description: "Scripts, rubrics, training and certification so any computer teacher can run hands-on AI and coding sessions.",
  },
  parents: {
    title: "See what your child builds · makeracle",
    description: "Real projects, portfolio pages and showcase days, through your child’s school.",
  },
  about: {
    title: "About makeracle",
    description: "Built by alumni of IIT Mandi, IIITDM Jabalpur and BITSoM to bring hands-on AI learning into Indian classrooms.",
  },
  // Not in the brief's SEO table — written in the same style.
  safety: {
    title: "Safety & AI use · makeracle",
    description: "Teacher-controlled accounts, no personal data uploads, supervised AI and teacher-approved portfolios. How makeracle keeps students safe.",
  },
  contact: {
    title: "Contact makeracle",
    description: "Principals, teachers, parents and partners are all welcome. We reply within one working day.",
  },
  privacy: {
    title: "Privacy policy · makeracle",
    description: "How makeracle collects, uses, stores and deletes data, in line with India’s Digital Personal Data Protection Act.",
  },
};

/* ------------------------------------------------------------------ */
/* Home                                                                */
/* ------------------------------------------------------------------ */

export const home = {
  hero: {
    eyebrow: "For CBSE schools · Classes 3–12",
    title: "From curiosity to creation.",
    sub: "Your students build real AI, web and app projects in school, taught by your own teachers with everything they need. Built for the new CBSE Computational Thinking & AI curriculum.",
    trust: ["Free 90-minute workshop", "No new hardware needed", "Works offline"],
    // TODO(content): replace the illustration with real workshop photos (with consent).
    visualAlt: "Illustration: a student’s phone showing Padhai Buddy, an AI study assistant answering from chapter notes",
  },
  cbse: {
    title: "Computational Thinking & AI is now part of every CBSE school’s timetable.",
    body: "Since the 2026–27 session, CBSE schools teach CT & AI from Class 3. Most schools have the syllabus. What they don’t have is the time to build projects, the rubrics to assess them, and teachers trained to run them. That’s what makeracle provides.",
    stats: [
      { num: "50 hours a year", label: "Classes 3–5, inside Maths and The World Around Us" },
      { num: "100 hours a year", label: "Classes 6–8" },
      { num: "40 of those hours are projects", label: "assessed with presentations, journals and rubrics" },
    ],
    link: "See how we cover every hour",
  },
  how: {
    title: "Start small. Grow when you’re sure.",
    steps: [
      { title: "Free workshop", body: "90 minutes. Your Class 7–9 students build their own AI study buddy and leave with a working link." },
      { title: "Term pilot", body: "12 sessions for Classes 6–8, led by your computer teacher with our scripts, rubrics and remote mentors." },
      { title: "Annual programme", body: "Every class, every term: modules, teacher certification, student portfolios and showcase days." },
    ],
    stepLabel: "Step",
    button: "Book step 1, free",
  },
  build: {
    title: "Students don’t watch videos. They ship projects.",
    button: "See all programmes",
  },
  why: {
    title: "Made for how Indian schools actually work.",
    points: [
      { icon: "teacher", title: "Your teachers lead.", body: "Minute-by-minute scripts and projector mode mean any computer teacher can run a session." },
      { icon: "devices", title: "Works with what you have.", body: "Old lab PCs, shared phones or one projector. Every Class 3–8 lesson also has an unplugged version." },
      { icon: "portfolio", title: "Proof you can show.", body: "Every student gets a portfolio page. Every term ends with a showcase day for parents." },
      { icon: "shield", title: "Safe by design.", body: "Teacher-controlled accounts, no personal data uploads, privacy built for India’s data protection law." },
    ] satisfies { icon: IconName; title: string; body: string }[],
  },
  /** Hidden until real pilot numbers exist — set `show: true` and fill the values. */
  outcomes: {
    show: false,
    title: "What our schools see",
    stats: [
      { num: "[number]", label: "schools" },
      { num: "[number]", label: "students" },
      { num: "[number]", label: "projects published" },
      { num: "[%]", label: "sessions completed" },
    ],
  },
  /** Real, signed-off quotes only. The section stays hidden while this is empty. */
  testimonials: [] as { quote: string; name: string; role: string; school: string; city: string }[],
  audiences: {
    teachers: {
      eyebrow: "For teachers",
      body: "Everything you need to run a great session, from scripts and rubrics to training and a certificate.",
      link: "Join the Teacher hub",
    },
    parents: {
      eyebrow: "For parents",
      body: "See what your child built, not how many videos they watched.",
      link: "See a sample portfolio",
    },
  },
  final: {
    title: "See it in your school before you decide.",
    body: "Book a free 90-minute workshop for your Class 7–9 students. We bring everything; you watch them build.",
    whatsapp: "Or talk to us on WhatsApp",
  },
};

/** The five flagship projects (Home cards + Programmes course pages). */
export const flagshipProjects = [
  { slug: "padhai-buddy", icon: "chat", name: "Padhai Buddy", classes: "Classes 8–10", line: "An AI study assistant that answers from their own chapter notes." },
  { slug: "mera-portfolio", icon: "web", name: "Mera Portfolio", classes: "Classes 6–9", line: "A personal website that holds every project they make." },
  { slug: "mohalla-helper", icon: "app", name: "Mohalla Helper", classes: "Classes 7–10", line: "An Android app that solves a real local problem." },
  { slug: "fair-or-not", icon: "scale", name: "Fair or Not?", classes: "Classes 6–8", line: "Train an AI model, then find and fix its bias." },
  { slug: "data-detective", icon: "data", name: "Data Detective", classes: "Classes 9–12", line: "Turn real school or city data into a story with charts." },
] satisfies { slug: string; icon: IconName; name: string; classes: string; line: string }[];

/* ------------------------------------------------------------------ */
/* For Schools                                                         */
/* ------------------------------------------------------------------ */

export const schools = {
  hero: {
    eyebrow: "For principals and school leaders",
    title: "Deliver CBSE’s CT & AI curriculum with projects your parents will want to see.",
    sub: "makeracle gives your computer teacher ready-to-run lessons, project modules, rubrics and a student build space, so every compulsory hour becomes something students make and show.",
  },
  challenge: {
    title: "The syllabus is ready. Delivery is the hard part.",
    cards: [
      { icon: "clock", title: "New hours to fill.", body: "100 hours a year in Classes 6–8, 50 in Classes 3–5, with 40 project hours to plan and assess." },
      { icon: "teacher", title: "Teachers need support.", body: "Most computer teachers haven’t built AI or app projects before." },
      { icon: "rubric", title: "Projects need proof.", body: "CBSE expects presentations, reflective journals and rubrics, not just a written test." },
    ] satisfies { icon: IconName; title: string; body: string }[],
  },
  get: {
    title: "Everything to run the programme, in one box.",
    items: [
      { icon: "kit", title: "Teacher kits", body: "Minute-by-minute lesson scripts, slides and worksheets for every session." },
      { icon: "modules", title: "Project modules", body: "Ready-made projects for every class, from Scratch stories to AI apps." },
      { icon: "rubric", title: "Rubrics and reports", body: "A simple 4-level rubric and term reports you can share with management and parents." },
      { icon: "studio", title: "Makeracle Studio", body: "A student build space that runs in the browser, works on low-end phones and keeps working offline." },
      { icon: "portfolio", title: "Student portfolios", body: "Every student gets a page showing their projects, approved by your teacher before it goes live." },
      { icon: "mentor", title: "Remote mentors", body: "Our team reviews student work and runs weekly office hours for your teachers." },
    ] satisfies { icon: IconName; title: string; body: string }[],
  },
  cbse: {
    title: "Every module maps to the CBSE framework.",
    caption: "CBSE requirement by class, and what makeracle provides",
    head: ["Classes", "CBSE requirement", "What makeracle provides"],
    rows: [
      ["3–5", "50 hrs/year of CT, inside Maths and The World Around Us; block-based coding", "Unplugged activities and Scratch projects that slot into existing periods"],
      ["6–8", "100 hrs/year: about 40 CT, 20 AI, 40 projects", "Full term modules, AI project cycle, 5 flagship projects, rubrics"],
      ["9–10", "AI subject 417; CT & AI expected to extend here from 2027–28", "Python labs, practical and project support (from 2027–28)"],
      ["11–12", "AI subject 843, capstone", "Capstone mentoring, deployed projects, olympiad prep"],
    ],
    // TODO(launch): verify Class 9–12 details against current CBSE circulars.
    smallPrint: "Hours as per CBSE circular Acad-15/2026 and the CBSE CT & AI framework. [Verify Class 9–12 details against current CBSE circulars before launch.]",
  },
  delivery: {
    title: "Your teacher leads. We stand behind them.",
    steps: [
      "We train your teacher (about 3 days).",
      "Your teacher runs sessions from our scripts.",
      "Students build in pairs.",
      "Our mentors review and give feedback.",
      "Students publish to their portfolio.",
      "You host a showcase day each term.",
    ],
  },
  infra: {
    title: "No new lab required.",
    body: "makeracle runs on old lab PCs, shared Android phones or a single projector. Lessons download in advance and work without internet. Every Class 3–8 lesson has an unplugged version.",
  },
  training: {
    title: "Your teachers grow with the programme.",
    levels: [
      { name: "Facilitator", body: "Runs scripted sessions" },
      { name: "Builder", body: "Adapts projects" },
      { name: "Mentor", body: "Trains other teachers" },
    ],
    note: "Each level comes with a certificate your school can display.",
  },
  pilot: {
    title: "Try it for one term.",
    body: "A 12-session pilot for Classes 6–8. We agree success measures with you up front: sessions completed, students who publish a portfolio, and whether your teacher can run sessions independently by week 6.",
  },
  pricing: {
    eyebrow: "Pricing",
    body: "Annual programmes are priced per student per year, typically well below the cost of a robotics lab. Pilots and workshops are priced separately, and your first workshop is free.",
    button: "Get a quote",
  },
  faq: {
    title: "Questions principals ask",
    items: [
      { q: "How much teacher time does it take?", a: "It runs inside the CT & AI periods you already have. Teacher prep is about 15 minutes per session using our scripts." },
      { q: "Do we need new computers or fast internet?", a: "No. It works on existing PCs, shared phones or a projector, and lessons work offline." },
      { q: "Is it safe for students to use AI?", a: "Yes. Accounts are teacher-controlled, younger students log in without email or phone numbers, and no personal data is uploaded." },
      { q: "How are students assessed?", a: "With a 4-level project rubric (works, readable, original, reflected), reflective journals and portfolio pages, in line with CBSE’s project-based assessment." },
      // TODO(launch): confirm the replacement-teacher policy.
      { q: "What if our teacher leaves?", a: "Training and scripts stay with the school, and we train the replacement teacher at no extra cost. [confirm policy]" },
      { q: "Can parents see the work?", a: "Yes. Through approved portfolio pages and a showcase day every term." },
      { q: "Which boards do you support?", a: "CBSE first. State-board and ICSE versions are on our roadmap." },
    ],
  },
  final: {
    title: "Let your students show you what they can build.",
    brochure: "Download the school brochure (PDF)",
    brochurePending: "Ask us for the school brochure (PDF)",
  },
};

/* ------------------------------------------------------------------ */
/* Programmes                                                          */
/* ------------------------------------------------------------------ */

export const programmes = {
  hero: {
    title: "A path from first block of code to first real product.",
    sub: "Four stages, Class 3 to Class 12. Each one ends with something students made.",
  },
  stageLabels: { builds: "Students build", tools: "Tools" },
  stages: [
    {
      classes: "Classes 3–5",
      title: "Play and patterns",
      line: "Learn to think step by step through games, puzzles and stories.",
      builds: "An interactive story or game",
      tools: "Unplugged activities, ScratchJr, Scratch",
    },
    {
      classes: "Classes 6–8",
      title: "First real builds",
      line: "Write real code, make a first website and app, and see how AI learns.",
      builds: "Portfolio website, AI classifier, Android app",
      tools: "Scratch, Python, HTML/CSS, MIT App Inventor",
    },
    {
      classes: "Classes 9–10",
      title: "Building with AI",
      line: "Use Python and JavaScript to build apps that use AI safely.",
      builds: "A subject chatbot, a data story",
      tools: "Python, JavaScript, Git, Flutter intro",
    },
    {
      classes: "Classes 11–12",
      title: "Shipping real products",
      line: "Build, test and launch a real product with real users.",
      builds: "A deployed capstone project",
      tools: "Full-stack web, Flutter, scikit-learn",
    },
  ],
  catalogue: {
    title: "Courses",
    all: "All",
    filterLabel: "Filter courses by format",
    count: (n: number) => `${n} ${n === 1 ? "course" : "courses"}`,
    empty: "No courses in this format yet. More are on the way.",
    view: "View course",
  },
  course: {
    breadcrumb: "Programmes",
    button: "Book a free workshop",
    rows: {
      classes: "Classes",
      track: "Track",
      format: "Format",
      sessions: "Sessions",
      prerequisites: "Prerequisites",
      builds: "What students build",
      tools: "Tools",
      devices: "Device needs",
      assessment: "Assessment",
      cbse: "CBSE mapping",
      languages: "Languages",
    },
    outcomes: "Learning outcomes",
    outline: "Session outline",
    sample: "A sample student project",
  },
};

export const programmeFormats = [
  "In school",
  "Workshops",
  "Holiday bootcamps",
  "Small-group cohorts",
  "Olympiad prep",
  "Teacher certification",
] as const;
export type ProgrammeFormat = (typeof programmeFormats)[number];

export type Course = {
  slug: string;
  name: string;
  tagline: string;
  classes: string;
  track: "AI" | "Web" | "App" | "Data" | "Computational thinking";
  formats: ProgrammeFormat[];
  sessions: string;
  prerequisites: string;
  builds: string;
  outcomes: string[];
  outline: string[];
  tools: string;
  devices: string;
  assessment: string;
  cbse: string;
  languages: string;
  sample: string;
};

// TODO(content): add a real sample student project to each course (with consent).
const samplePending = "[Sample student project — add a real one, with school and parent consent]";

export const courses: Course[] = [
  {
    slug: "padhai-buddy",
    name: "Padhai Buddy",
    tagline: "Build your own AI study assistant",
    classes: "Classes 8–10",
    track: "AI",
    formats: ["In school", "Workshops", "Holiday bootcamps"],
    sessions: "12 sessions × 45 min",
    prerequisites: "Basic Scratch, or none",
    builds: "An AI study assistant that answers from their own chapter notes",
    outcomes: ["Write prompts as specifications", "Ground answers in a source", "Test an AI for wrong answers", "Explain how their bot works"],
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
    tools: "Makeracle Studio, in the browser; works offline with cached demo answers",
    devices: "Lab PC or a shared Android phone",
    assessment: "4-level rubric and a portfolio page",
    cbse: "[Competency codes] · [hours covered]",
    languages: "English · Hindi",
    sample: samplePending,
  },
  {
    slug: "mera-portfolio",
    name: "Mera Portfolio",
    tagline: "Hand-code your own website",
    classes: "Classes 6–9",
    track: "Web",
    formats: ["In school"],
    sessions: "12 sessions × 45 min",
    prerequisites: "None",
    builds: "A personal website that holds every project they make",
    outcomes: ["Structure a page with HTML", "Style it with CSS", "Publish safely (first name and initial only)", "Write a short reflection"],
    outline: ["How the web works (unplugged)", "My first tag", "Headings, lists, links", "Colours and fonts", "Layout with boxes", "Adding projects", "Peer review", "Publish and present"],
    tools: "Makeracle Studio (HTML/CSS editor), works offline",
    devices: "Lab PC or a shared Android phone",
    assessment: "4-level rubric and the live page",
    cbse: "[Competency codes] · [hours covered]",
    languages: "English · Hindi",
    sample: samplePending,
  },
  {
    slug: "mohalla-helper",
    name: "Mohalla Helper",
    tagline: "A first Android app for your neighbourhood",
    classes: "Classes 7–10",
    track: "App",
    formats: ["In school", "Holiday bootcamps"],
    sessions: "12 sessions × 45 min",
    prerequisites: "Some Scratch helps",
    builds: "An Android app that solves a real local problem",
    outcomes: ["Interview real users", "Design screens", "Use events and variables", "Test with a neighbour"],
    outline: ["Find a problem", "Talk to three people", "Sketch screens", "First screen in App Inventor", "Buttons and events", "Storing data", "Test with users", "Showcase"],
    tools: "MIT App Inventor",
    devices: "Lab PC and one Android phone per group",
    assessment: "4-level rubric, the app and a demo video",
    cbse: "[Competency codes] · [hours covered]",
    languages: "English · Hindi",
    sample: samplePending,
  },
  {
    slug: "fair-or-not",
    name: "Fair or Not?",
    tagline: "Train an AI, then catch it being unfair",
    classes: "Classes 6–8",
    track: "AI",
    formats: ["In school"],
    sessions: "10 sessions × 45 min",
    prerequisites: "None",
    builds: "An AI model they trained, plus a short report on its bias and how they fixed it",
    outcomes: ["Follow the AI project cycle", "Collect and label data", "Spot bias", "Explain a fix"],
    outline: ["Sorting game (unplugged)", "Collect data", "Train a classifier", "Test it", "Find who it fails", "Fix the data", "Report back"],
    tools: "Browser-based classifier, no login for under-13s",
    devices: "Lab PC or a phone with a camera",
    assessment: "4-level rubric and a bias report",
    cbse: "[Competency codes] · [hours covered]",
    languages: "English · Hindi",
    sample: samplePending,
  },
  {
    slug: "data-detective",
    name: "Data Detective",
    tagline: "Tell a true story with real data",
    classes: "Classes 9–12",
    track: "Data",
    formats: ["In school", "Small-group cohorts"],
    sessions: "12 sessions × 45 min",
    prerequisites: "Basic Python helps",
    builds: "A story with charts, made from real school or city data",
    outcomes: ["Clean a dataset", "Ask a good question", "Choose the right chart", "Present a finding honestly"],
    outline: ["What makes a good question", "Loading data", "Cleaning", "First charts", "Finding the story", "Checking for misleading charts", "Writing it up", "Presenting"],
    tools: "Python and pandas, in the browser",
    devices: "Lab PC",
    assessment: "4-level rubric and the data story",
    cbse: "[Competency codes] · [hours covered]",
    languages: "English · Hindi",
    sample: samplePending,
  },
];

export function getCourse(slug: string) {
  return courses.find((c) => c.slug === slug);
}

/* ------------------------------------------------------------------ */
/* Workshops                                                           */
/* ------------------------------------------------------------------ */

export const workshops = {
  hero: {
    eyebrow: "Free workshop · Makeracle Labs",
    title: "Build Your Own AI Study Buddy",
    sub: "A free 90-minute workshop for Classes 7–9. Every student leaves with a working AI study assistant and a link to show at home.",
  },
  timeline: {
    title: "What happens",
    items: [
      { when: "0–10 min", title: "The hook.", body: "A chatbot answers from your students’ own chapter, then gets something wrong. Can they do better?" },
      { when: "10–20 min", title: "Unplugged.", body: "Students write rules for a human “robot” and learn how instructions work." },
      { when: "20–55 min", title: "Build in pairs.", body: "Students paste their notes, write their bot’s rules and test five questions." },
      { when: "55–70 min", title: "Break it.", body: "They hunt for wrong or unfair answers and fix them." },
      { when: "70–85 min", title: "Demos.", body: "Five pairs present. Everyone gets a link and a certificate." },
      { when: "85–90 min", title: "What’s next.", body: "A quick look at what they could build this term." },
    ],
  },
  need: {
    title: "What we need from you",
    body: "A hall or lab, a projector, and phones or PCs for students to share in pairs. We bring backups.",
  },
  who: {
    title: "Who it’s for",
    body: "Classes 7–9, 40–60 students per session.",
  },
  book: {
    title: "Book a free workshop",
    body: "Tell us about your school. We’ll call you within one working day to fix a date.",
  },
  feedback: { prompt: "Already had a workshop?", link: "Tell us how it went" },
};

/* ------------------------------------------------------------------ */
/* For Teachers                                                        */
/* ------------------------------------------------------------------ */

export const teachers = {
  hero: {
    eyebrow: "For teachers",
    title: "You don’t need to be an AI expert to teach AI well.",
    sub: "makeracle gives you the script, the slides, the project and the rubric. You bring the classroom.",
  },
  blocks: [
    { icon: "kit", title: "Scripts for every session.", body: "Minute-by-minute plans with a projector mode that walks you through." },
    { icon: "rubric", title: "Rubrics that save time.", body: "Mark projects in minutes and export marks for school records." },
    { icon: "mentor", title: "Training and certificates.", body: "Grow from Facilitator to Builder to Mentor." },
    { icon: "whatsapp", title: "Help when you need it.", body: "Weekly office hours and WhatsApp support." },
  ] satisfies { icon: IconName; title: string; body: string }[],
  join: {
    title: "Join the Teacher hub",
    body: "The Teacher hub is opening soon. Leave your details and we’ll message you when it opens.",
  },
};

/* ------------------------------------------------------------------ */
/* For Parents                                                         */
/* ------------------------------------------------------------------ */

export const parents = {
  hero: {
    eyebrow: "For parents",
    title: "See what your child built, not how many videos they watched.",
    sub: "Through their school, your child builds real projects and publishes them on their own portfolio page.",
  },
  blocks: {
    ages: {
      title: "What children learn at each age",
      body: "From games and stories in Class 3 to real apps and AI projects by Class 12. Each stage ends with something your child made.",
      link: "See the programmes",
    },
    portfolio: {
      title: "A sample portfolio",
      body: "Every project your child finishes goes on their own page. Their teacher approves it before it goes live, and public pages show first name and initial only.",
      sampleTag: "Sample",
      sampleName: "Aarav S. · Class 8",
      sampleUrl: "makeracle.in/p/aarav-s",
      sampleProjects: ["Padhai Buddy", "Mera Portfolio", "Fair or Not?"],
      sampleNote: "A made-up example to show the layout. Not a real student.",
    },
    showcase: {
      title: "Showcase days at school",
      body: "Every term ends with a showcase day. Students show what they built, and you can ask them how it works.",
    },
    safety: {
      title: "Our safety promise",
      body: "Teacher-controlled accounts, no personal data uploads, and nothing goes public until a teacher approves it.",
      link: "Read how we keep students safe",
    },
  },
  bootcamps: {
    title: "Holiday bootcamps and small-group cohorts",
    // TODO(content): add bootcamp prices and dates.
    body: "[prices and dates], offered first to families at partner schools.",
  },
  askSchool: "Ask your school about makeracle",
  waitlist: "Join the bootcamp waitlist",
};

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const about = {
  hero: {
    eyebrow: "About makeracle",
    title: "We believe every child should get to make something real.",
  },
  story: [
    "makeracle started with a simple observation: Indian students hear about AI every day, but very few get to build anything with it. Schools want to teach it, and now CBSE requires it. What’s missing is a practical way to do it in a real classroom.",
    "We’re a team of engineers and educators, alumni of IIT Mandi, IIITDM Jabalpur and BITSoM Mumbai, who have built software, products and businesses. We started makeracle to bring that hands-on way of learning into schools, led by the teachers who are already there.",
    "Our promise is simple: no hype, no shortcuts. Students learn by making, teachers are supported, and parents see real work.",
  ],
  pronunciation: "makeracle is said MAKE-ruh-kul.",
  team: {
    title: "The team",
    // TODO(content): add real founder details — name, photo, role, institution + graduation year, one line, LinkedIn.
    members: [
      { name: "[Name]", role: "[Role]", institution: "[Institution, graduation year]", line: "[One line about them]", linkedin: "#", photo: null },
      { name: "[Name]", role: "[Role]", institution: "[Institution, graduation year]", line: "[One line about them]", linkedin: "#", photo: null },
      { name: "[Name]", role: "[Role]", institution: "[Institution, graduation year]", line: "[One line about them]", linkedin: "#", photo: null },
    ] as { name: string; role: string; institution: string; line: string; linkedin: string; photo: string | null }[],
    photoPending: "[Photo]",
  },
  values: {
    title: "What we stand for",
    items: ["Make, don’t just watch.", "Teachers first.", "Honest about outcomes.", "Safe by design."],
  },
};

/* ------------------------------------------------------------------ */
/* Safety & AI use                                                     */
/* ------------------------------------------------------------------ */

export const safety = {
  hero: {
    eyebrow: "Safety & AI use",
    title: "Safe, supervised and private by default.",
  },
  sections: [
    { icon: "teacher", title: "Teacher-controlled accounts.", body: "Teachers create student accounts. Students under 13 log in with a class code and PIN, with no email or phone number needed." },
    { icon: "shield", title: "No personal data uploads.", body: "Students never need to upload photos, addresses or personal documents." },
    { icon: "chat", title: "Supervised AI.", body: "AI tools run through a school-controlled connection with content filters and usage limits." },
    { icon: "check", title: "Learning to question AI.", body: "We teach students to verify, cite and reflect, not to copy." },
    { icon: "portfolio", title: "Approved portfolios only.", body: "Nothing goes public until a teacher approves it, and public pages show first name and initial only." },
    { icon: "users", title: "Parental consent.", body: "Parents give and can withdraw consent with an OTP-verified form." },
  ] satisfies { icon: IconName; title: string; body: string }[],
  report: {
    title: "Report a concern.",
    body: (email: string, time: string) => `${email} · We respond within ${time}.`,
  },
  privacyLink: "Read the full Privacy Policy",
};

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

export const contact = {
  hero: {
    eyebrow: "Contact",
    title: "Let’s talk about your school.",
    sub: "Principals, teachers, parents and partners are all welcome. We reply within one working day.",
  },
  details: { phone: "Phone", whatsapp: "WhatsApp", email: "Email", address: "Address" },
  formTitle: "Send us a message",
  partner: {
    eyebrow: "Partner with us",
    title: "For school chains, sahodaya clusters, lab vendors and CSR teams.",
    body: "Bring makeracle to many schools at once. Tell us about your organisation and our partnerships team will call you.",
  },
};

/* ------------------------------------------------------------------ */
/* Privacy, terms, refunds                                             */
/* ------------------------------------------------------------------ */

/* DRAFT — a plain-language structure, not legal advice. Have it reviewed by
   a lawyer for India’s Digital Personal Data Protection Act before launch. */
export const privacy = {
  eyebrow: "Privacy policy · draft",
  title: "Your data, in plain words.",
  updated: "Last updated: [date]",
  draftNote: "[Draft — to be reviewed by a lawyer for India’s Digital Personal Data Protection Act before launch.]",
  sections: [
    {
      h: "What we collect",
      p: [
        "Schools: contact name, role, school, city, phone and email, so we can call you back.",
        "Teachers: name, school, phone, email, classes taught and training progress.",
        "Students: first name, last initial, class and section, created by the teacher. No email or phone for students under 13. The projects and reflections they make.",
        "Parents: name, relationship, phone, email and consent records.",
      ],
    },
    {
      h: "Why we collect it",
      p: ["To run the programme your school signed up for, report progress to the school and parents, issue certificates and improve our lessons. We never sell data and never use student data for advertising."],
    },
    {
      h: "Parental consent",
      p: ["Parents give and can withdraw consent with an OTP-verified form, before a portfolio can be public or AI tools can be used."],
    },
    { h: "Where it’s stored", p: ["[Storage location and security measures — to be confirmed.]"] },
    { h: "How long we keep it", p: ["[Retention periods — to be confirmed with counsel.]"] },
    { h: "Your rights", p: ["You can ask to see, correct or delete your data, or your child’s. Write to our grievance officer."] },
  ],
  grievance: "Grievance officer",
};

export const legalPending = {
  terms: { title: "Terms of use", body: "[Terms of use — to be added after review by a lawyer.]" },
  refund: { title: "Refund policy", body: "[Refund policy — to be added after review by a lawyer.]" },
  questions: "Questions in the meantime?",
  contactLink: "Contact us",
};

/* ------------------------------------------------------------------ */
/* Forms and microcopy                                                 */
/* ------------------------------------------------------------------ */

export const formCopy = {
  consent: "I agree to be contacted by makeracle about this request. Read our",
  privacyLink: "Privacy Policy",
  errors: {
    required: "Please fill this in.",
    schoolName: "Please enter your school’s name.",
    phone: "Please enter a 10-digit mobile number.",
    email: "That email doesn’t look right.",
    consent: "Please tick this box so we can contact you.",
    choose: "Please choose one of the options.",
    number: "Please enter a number.",
    phoneOrEmail: "Please give a phone number or an email.",
  },
  choose: "Choose…",
  sending: "Sending…",
  failed: "Something went wrong sending this. Please check the form, or message us on WhatsApp.",
  sendAnother: "Send another",
  requiredNote: "Fields marked * are required.",
};

const roles = ["Principal", "Owner", "Coordinator", "Computer teacher", "Other"] as const;
const boards = ["CBSE", "ICSE", "State", "Other"] as const;
const workshopClasses = ["7", "8", "9", "Other"] as const;
const devices = ["Lab PCs", "Tablets", "Phones", "Projector only"] as const;
const allClasses = ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12"] as const;

const consent = { name: "consent", label: formCopy.consent, kind: "consent", required: true, full: true } as const;

const workshopFields = [
  { name: "contactName", label: "Your name", kind: "text", required: true, autoComplete: "name" },
  { name: "role", label: "Your role", kind: "chips", required: true, options: roles, full: true },
  { name: "schoolName", label: "School name", kind: "text", required: true, autoComplete: "organization", error: formCopy.errors.schoolName },
  { name: "city", label: "City", kind: "text", required: true, autoComplete: "address-level2" },
  { name: "board", label: "Board", kind: "chips", required: true, options: boards, full: true },
  { name: "phone", label: "Phone (WhatsApp)", kind: "tel", placeholder: "98xxx xxxxx" },
  { name: "email", label: "Email", kind: "email", placeholder: "principal@school.edu.in" },
  { name: "classes", label: "Classes interested", kind: "multichips", options: workshopClasses, optionPrefix: "Class ", full: true },
  { name: "students", label: "Approx. number of students", kind: "number" },
  { name: "preferredDates", label: "Preferred dates", kind: "text", placeholder: "e.g. 2nd week of November" },
  { name: "devices", label: "Devices available", kind: "multichips", options: devices, full: true },
  {
    name: "heardFrom",
    label: "How did you hear about us?",
    kind: "select",
    options: ["Another school", "Sahodaya cluster", "Social media", "Search", "Event", "Other"],
    full: true,
  },
] as const;

export const forms = {
  workshop: {
    title: "Book a free workshop",
    submitLabel: "Book my free workshop",
    success: "Thank you! We’ll call you within one working day to fix a date. A confirmation is on its way to your WhatsApp.",
    fields: [...workshopFields, consent],
    oneOf: [["phone", "email"]],
  },
  pilot: {
    title: "Request a pilot proposal",
    submitLabel: "Send me a proposal",
    // TODO(launch): confirm the number of working days.
    success: "Thank you! Your proposal will reach you within [3] working days.",
    fields: [
      ...workshopFields,
      { name: "students68", label: "Students in Classes 6–8", kind: "number" },
      { name: "computerTeachers", label: "Number of computer teachers", kind: "number" },
      { name: "currentDelivery", label: "Current CT & AI delivery", kind: "chips", options: ["None", "In-house", "Another provider"], full: true },
      { name: "budgetPlanning", label: "When do you plan next year’s budget?", kind: "text", placeholder: "e.g. January", full: true },
      consent,
    ],
    oneOf: [["phone", "email"]],
  },
  "teacher-signup": {
    title: "Join the Teacher hub",
    submitLabel: "Join the waitlist",
    success: "You’re on the list. We’ll message you when the Teacher hub opens.",
    fields: [
      { name: "name", label: "Name", kind: "text", required: true, autoComplete: "name" },
      { name: "school", label: "School", kind: "text", required: true, error: formCopy.errors.schoolName },
      { name: "phone", label: "Phone", kind: "tel", required: true },
      { name: "email", label: "Email", kind: "email", required: true },
      { name: "classesTaught", label: "Classes you teach", kind: "multichips", options: allClasses, optionPrefix: "Class ", full: true },
      { name: "coding", label: "Coding experience", kind: "chips", options: ["None", "Basic", "Confident"], full: true },
      consent,
    ],
  },
  bootcamp: {
    title: "Join the bootcamp waitlist",
    submitLabel: "Join the waitlist",
    success: "Thanks! We’ll share dates and prices soon.",
    fields: [
      { name: "parentName", label: "Parent name", kind: "text", required: true, autoComplete: "name" },
      { name: "phone", label: "Phone", kind: "tel", required: true },
      { name: "email", label: "Email", kind: "email", required: true },
      { name: "childClass", label: "Child’s class", kind: "select", required: true, options: allClasses.map((c) => `Class ${c}`) },
      { name: "school", label: "School", kind: "text" },
      { name: "language", label: "Preferred language", kind: "chips", options: ["English", "Hindi"] },
      consent,
    ],
  },
  partner: {
    title: "Partner with us",
    submitLabel: "Request a call",
    success: "Thank you! Our partnerships team will call you.",
    fields: [
      { name: "orgName", label: "Organisation", kind: "text", required: true, autoComplete: "organization" },
      { name: "orgType", label: "Type", kind: "chips", required: true, options: ["School chain", "Sahodaya cluster", "Lab vendor", "CSR", "Other"], full: true },
      { name: "contactName", label: "Contact name", kind: "text", required: true, autoComplete: "name" },
      { name: "phone", label: "Phone", kind: "tel", required: true },
      { name: "email", label: "Email", kind: "email", required: true },
      { name: "schoolsCount", label: "Number of schools", kind: "number" },
      { name: "message", label: "Message", kind: "textarea", full: true },
      consent,
    ],
  },
  contact: {
    title: "General enquiry",
    submitLabel: "Send message",
    success: "Thanks! We’ll reply within one working day.",
    fields: [
      { name: "name", label: "Name", kind: "text", required: true, autoComplete: "name" },
      { name: "phoneOrEmail", label: "Phone or email", kind: "text", required: true },
      { name: "iam", label: "I am a", kind: "chips", required: true, options: ["School", "Teacher", "Parent", "Partner", "Other"], full: true },
      { name: "message", label: "Message", kind: "textarea", required: true, full: true },
      consent,
    ],
  },
  // Not in the brief — kept from Phase 1 for after-workshop follow-up (/workshops/feedback, not indexed).
  "workshop-feedback": {
    title: "Workshop feedback",
    submitLabel: "Send feedback",
    success: "Thank you. Your feedback goes straight to the team that ran your workshop.",
    fields: [
      { name: "school", label: "School name", kind: "text", required: true, error: formCopy.errors.schoolName },
      { name: "rating", label: "How did it go? (1 = poor, 5 = great)", kind: "chips", required: true, options: ["1", "2", "3", "4", "5"], full: true },
      { name: "pilot", label: "Would you run a term pilot?", kind: "chips", required: true, options: ["Yes", "Maybe", "No"], full: true },
      { name: "worked", label: "What worked", kind: "textarea", full: true },
      { name: "change", label: "What should we change", kind: "textarea", full: true },
    ],
  },
} satisfies Record<string, FormDef>;
