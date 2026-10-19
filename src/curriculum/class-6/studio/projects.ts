/**
 * The two Class 6 projects (Makeracle Studio design, from the renders).
 *
 * The handbook sets the frame — 40 project hours as 2 projects of 20 hours,
 * and the goal "Use AI tools and data analysis to create solutions for
 * community or fictional city issues" — but not the projects themselves.
 * Stage text for stages the renders don't detail is Makeracle design copy.
 */

export type ProjectStage = {
  id: string;
  name: string;
  hours: number;
  /** Chapters this stage uses, as on the render's stage cards. */
  links: string;
  description: string;
  tasks: string[];
  deliverable: string;
  /** Reflection journal prompt for this stage. */
  journal: string;
};

export type ProjectRole = { id: string; role: string; does: string };

export type RubricRow = { id: string; name: string; level4: string };

export type ProjectDef = {
  slug: string;
  number: number;
  title: string;
  red: string;
  term: string;
  /** Line above the title. */
  quote: string;
  uses: string;
  summary: string;
  stages: ProjectStage[];
  roles: ProjectRole[];
  rolesNote: string;
  rubric: RubricRow[];
  ethics: string;
};

export const projects: ProjectDef[] = [
  {
    slug: "data-detectives",
    number: 1,
    title: "Data Detectives:",
    red: "How do we get to school?",
    term: "Term 1",
    quote: "“Use AI tools and data analysis to create solutions for community issues” · Class 6 handbook",
    uses: "AI 1 · AI 2 · AI 3 · CT 4 Data Handling",
    summary: "Survey how your class travels to school, show it as tables and charts, spot the pattern, and suggest one change to the school.",
    stages: [
      { id: "ask", name: "Ask", hours: 2, links: "AI 3 · observations", description: "Write one question your class can answer with data.", tasks: ["Brainstorm in pairs", "Pick one question", "Check it is answerable"], deliverable: "Our question, on a card", journal: "Why did you choose this question?" },
      { id: "plan", name: "Plan", hours: 2, links: "AI 1 · teamwork · AI 2 · data care", description: "Decide what to count, how, and who does what. No names, only counts.", tasks: ["Choose the 5 options", "Agree our data rules", "Assign roles"], deliverable: "Plan sheet", journal: "What rule will keep our data careful and fair?" },
      { id: "collect", name: "Collect", hours: 4, links: "AI 2 · collecting data", description: "Survey every class 6 section and tally how each student travels to school.", tasks: ["Tally in pairs", "Double-check totals", "Log hours"], deliverable: "Raw tally sheet (photo)", journal: "What surprised you in the data so far?" },
      { id: "show", name: "Organise & show", hours: 5, links: "CT 4 · Data Handling · AI 2 · representing", description: "Turn the tally into a table, a bar chart and a pictograph with a key.", tasks: ["Make the table", "Draw the bar chart", "Add a key to the pictograph"], deliverable: "Table, bar chart and pictograph", journal: "Which picture of the data is easiest to read? Why?" },
      { id: "decide", name: "Spot & decide", hours: 4, links: "AI 3 · patterns, conclusions, decisions", description: "What pattern do you see? What can you fairly conclude, and what would you suggest to the school?", tasks: ["Write one observation", "Write one fair conclusion", "Suggest one decision"], deliverable: "One-page finding", journal: "What are the limits of our data?" },
      { id: "share", name: "Share", hours: 3, links: "Exhibition · reflection", description: "Present your finding at the CT Fair, then write what you would change next time.", tasks: ["Practise in pairs", "Present", "Reflect"], deliverable: "Exhibition poster and reflection", journal: "What would you change if you did this project again?" },
    ],
    roles: [
      { id: "keeper", role: "Data keeper", does: "checks every tally" },
      { id: "leader", role: "Class leader", does: "keeps the team on track" },
      { id: "designer", role: "Chart designer", does: "tables and pictographs" },
      { id: "speaker", role: "Speaker", does: "presents at the CT Fair" },
    ],
    rolesNote: "Team roles · inspired by “The Class Leader” in AI Ch 1",
    rubric: [
      { id: "question", name: "Question", level4: "Clear, answerable with data" },
      { id: "care", name: "Data care", level4: "Accurate counts, consent, no names" },
      { id: "representation", name: "Representation", level4: "Correct table, chart and key" },
      { id: "reasoning", name: "Reasoning", level4: "Observation → conclusion → decision" },
      { id: "reflection", name: "Reflection", level4: "Honest journal, what we would change" },
    ],
    ethics: "Count ways of travelling, never names. Ask before you survey another section, and keep the tally sheet in class.",
  },
  {
    slug: "cyber-suraksha",
    number: 2,
    title: "Cyber Suraksha Squad",
    red: "Keep Class 3 safe online.",
    term: "Term 2",
    quote: "Community issue: younger children click on anything online",
    uses: "AI 1 · AI 4 · CT 8 · CT 9",
    summary: "Run a digital-safety campaign for Class 3 juniors: a phishing quiz game, a password-strength booth and a symmetric squad badge.",
    stages: [
      { id: "learn", name: "Learn", hours: 3, links: "AI 4 · AI 1", description: "Revisit Arjun’s story: phishing, spam, passwords, privacy and footprints. Each member becomes the expert on one.", tasks: ["Re-read Arjun’s story", "Pick your expert topic", "Write expert notes"], deliverable: "Expert notes, one per member", journal: "What will Class 3 find hardest to understand?" },
      { id: "investigate", name: "Investigate", hours: 3, links: "AI 2 · data care", description: "With the Class 3 teacher, find out what juniors do online. Anonymous tally only.", tasks: ["Write 3 simple questions", "Get the teacher’s OK", "Tally anonymous answers"], deliverable: "Anonymous survey results", journal: "What did the juniors already know?" },
      { id: "design", name: "Design", hours: 4, links: "CT 9 Symmetry · CT 8 Constructions", description: "Design the squad badge with two lines of symmetry, and plan the booth.", tasks: ["Sketch the badge", "Check two mirror lines", "Plan the booth layout"], deliverable: "Badge design and booth plan", journal: "How did symmetry help your badge?" },
      { id: "build", name: "Build", hours: 5, links: "AI 4 · CT 1 Patterns", description: "Make the campaign kit: quiz cards, password booth, footprint trail and comic strip.", tasks: ["Make the quiz cards", "Build the password booth", "Finish the comic strip"], deliverable: "Campaign kit", journal: "Which part of the kit are you proudest of?" },
      { id: "run", name: "Run", hours: 3, links: "Communication", description: "Run the booth for Class 3 with your teacher present.", tasks: ["Set up the booth", "Explain kindly", "Count how many juniors played"], deliverable: "Booth day", journal: "What question from a junior surprised you?" },
      { id: "reflect", name: "Reflect", hours: 2, links: "Reflection journal", description: "What worked? What would you change for next year’s squad?", tasks: ["Team discussion", "Write your reflection", "Thank the juniors"], deliverable: "Reflection journal", journal: "What would you change for next year’s squad?" },
    ],
    roles: [
      { id: "phishing", role: "Phishing expert", does: "quiz cards and fake-message spotting" },
      { id: "password", role: "Password expert", does: "runs the password booth" },
      { id: "privacy", role: "Privacy expert", does: "checks no real names or photos are used" },
      { id: "footprint", role: "Footprint expert", does: "builds the footprint trail" },
    ],
    rolesNote: "Each member becomes the expert on one topic · AI Ch 4",
    rubric: [
      { id: "understanding", name: "Understanding", level4: "Explains each online danger correctly" },
      { id: "design", name: "Design", level4: "Badge has two lines of symmetry; kit is clear for Class 3" },
      { id: "safety", name: "Safety and ethics", level4: "No real names or photos; every screen checked by the teacher" },
      { id: "communication", name: "Communication", level4: "Clear, kind and right for 8-year-olds" },
      { id: "reflection", name: "Reflection", level4: "Honest journal, what we would change" },
    ],
    ethics: "No real names or photos of juniors. Survey answers stay anonymous. Every screen we show was checked by our teacher.",
  },
];

/** Campaign kit for Project 2 (render). */
export const boothChecklist = [
  { id: "badge", name: "Squad badge", detail: "Two lines of symmetry · CT 9" },
  { id: "quiz", name: "Phishing quiz cards", detail: "10 cards, real-looking but fake messages" },
  { id: "password", name: "Password booth", detail: "Juniors build a strong password from word cards" },
  { id: "trail", name: "Footprint trail", detail: "Floor stickers: active vs passive footprints" },
  { id: "comic", name: "Comic strip", detail: "“Think before you click”, 6 panels" },
];

export const travelModes = ["Walk", "Cycle", "School bus", "Car", "Auto"];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
