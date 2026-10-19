/** Copy for the home page and shared FAQ content. */

export const flagshipProjects = [
  {
    code: "P/01",
    slug: "padhai-buddy",
    name: "Padhai Buddy",
    classes: "Classes 8–10",
    blurb: "A chatbot that answers only from the student's own chapter notes.",
    tools: ["Python", "Safe AI sandbox"],
    icon: "chat",
  },
  {
    code: "P/02",
    slug: "mera-portfolio",
    name: "Mera Portfolio",
    classes: "Classes 6–8",
    blurb: "Their own website, hand-coded, that holds every project they make.",
    tools: ["HTML", "CSS"],
    icon: "web",
  },
  {
    code: "P/03",
    slug: "mohalla-helper",
    name: "Mohalla Helper",
    classes: "Classes 6–8",
    blurb: "A first Android app that solves one real problem in their neighbourhood.",
    tools: ["MIT App Inventor"],
    icon: "app",
  },
  {
    code: "P/04",
    slug: "fair-or-not",
    name: "Fair or Not?",
    classes: "Classes 6–8",
    blurb: "Train an image classifier, then catch it being unfair — and fix it.",
    tools: ["AI project cycle", "Bias"],
    icon: "scale",
  },
  {
    code: "P/05",
    slug: "data-detective",
    name: "Data Detective",
    classes: "Classes 9–10",
    blurb: "A data story built from a real local dataset, told with charts.",
    tools: ["pandas", "Charts"],
    icon: "data",
  },
] as const;

export const schoolFaqs = [
  {
    q: "What does it cost?",
    a: "The first 90-minute workshop is free. Term pilots and annual plans are quoted per school by student count — usually much less than a robotics lab.",
  },
  {
    q: "What devices do we need?",
    a: "Anything from 20–30 older lab PCs to a few shared Android phones or a single projector. Every Class 3–8 lesson also has an unplugged version.",
  },
  {
    q: "Our internet is patchy. Will it work?",
    a: "Yes. Lessons and the build space download ahead of time and work offline; student work syncs when the connection returns.",
  },
  {
    q: "How much of our teacher's time does it take?",
    a: "Your computer teacher runs the sessions in their normal timetable slots. Scripts and slides are ready-made, so prep is around 10 minutes a lesson. [Confirm after pilots]",
  },
  {
    q: "What happens to student data?",
    a: "Students under 13 log in with a class code and PIN — no email or phone. We never ask students to upload personal data, store data in India and follow the DPDP Act. Parents can ask us to delete data at any time.",
  },
  {
    q: "Does this help with board exams?",
    a: "The Classes 9–12 tracks support the AI 417, AI 843 and CS 083 syllabi. For Classes 3–8 it delivers the compulsory CT & AI hours with marks you can export for your records.",
  },
];
