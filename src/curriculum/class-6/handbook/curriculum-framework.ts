import type { CTStrand, PageRef } from "./types";

/**
 * Curriculum framework for Class 6 CT & AI.
 * SH and TH share these pages (pp. 5–9 in both books).
 */
export const curriculum = {
  source: {
    title: "Computational Thinking and Artificial Intelligence, Class 6",
    publisher: "Central Board of Secondary Education",
    edition: "First Edition: March, 2026",
    books: { sh: "Student Handbook", th: "Teacher Handbook" },
  },
  session: "2026-27",
  classes: "3rd to 8th",
  page: { sh: [5, 9], th: [5, 9] } satisfies PageRef,

  relevance: [
    { title: "Future Readiness", text: "It prepares students for the modern world of work where using data effectively and applying AI ethically are essential capabilities." },
    { title: "Holistic Development", text: "It fosters core cognitive capacities such as reasoning, logical thinking, and ethical decision-making, contributing to individual flourishing and responsible digital citizenship." },
    { title: "Interdisciplinary Connection", text: "Integrating CT and AI across subjects like Mathematics and Science helps students see knowledge as interconnected rather than compartmentalized." },
    { title: "Innovation", text: "It encourages an entrepreneurial mindset by teaching students to devise innovative solutions to real-world challenges." },
  ],

  curricularGoals: [
    { code: "CG-1", text: "Develops skills and capacities of computational thinking, namely, decomposition, pattern recognition, data representation, generalisation, abstraction, and algorithms to solve problems where such techniques of computational thinking are effective." },
    { code: "CG-2", text: "Develops spatial and visual reasoning." },
    { code: "CG-3", text: "Gain foundational knowledge of AI, its types, and domains." },
    { code: "CG-4", text: "Understand key ethical terms such as bias and fairness in relation to AI." },
    { code: "CG-5", text: "Demonstrates proficiency to use Computer & other devices, computer applications for learning and practical purposes such as data analysis, preparation of visual representations and communication of ideas." },
  ],

  ctOutcomes: [
    {
      strand: "Abstract Thinking" as CTStrand,
      lead: "Students will be able to interpret and solve multi-step problems with layered and abstract clues, using:",
      items: [
        "Advanced viewpoints and cross-sections of 3D objects",
        "Combined transformation of shapes (multiple flips, rotations, reflections, cuts/folds)",
        "Changes in orientation, position, order, and direction (clockwise, anticlockwise, diagonal)",
        "Identifying hidden, overlapping, or implied parts in complex visual patterns",
        "Symmetry across multiple axes and composite mirror/water image reasoning",
        "Visual reasoning involving scale, proportion, and spatial relationships",
      ],
    },
    {
      strand: "Pattern Recognition" as CTStrand,
      lead: "Students will be able to identify, extend, and justify complex patterns involving multiple simultaneous changes, formed using:",
      items: [
        "Numbers with mixed operations and logical rules",
        "Shapes/images with changing attributes (size, position, count, orientation)",
        "Letters and symbols with positional or alphabetical logic",
        "Patterns involving alternation, skipping, grouping, or cyclic behaviour",
        "Mixed patterns combining numbers, shapes, and letters with dependency rules",
      ],
    },
    {
      strand: "Decomposition" as CTStrand,
      lead: "Students will be able to break down higher-order problems involving interdependent clues and constraints, using information from:",
      items: [
        "Numerical clues involving place value, operations, factors, multiples, and comparisons",
        "Properties of 2D and 3D shapes (faces, edges, vertices, diagonals, angles)",
        "Multi-step transfers or exchanges (money, quantities, digits, objects) with conditions",
        "Tables, grids, or charts requiring cross-referencing of multiple data points",
        "Conditional rules for counting, grouping, sorting, or eliminating possibilities",
        "Visual representations that encode numerical or logical values",
      ],
    },
    {
      strand: "Algorithmic Thinking" as CTStrand,
      lead: "Students will be able to follow, analyse, and apply multi-layered rules and procedures to solve complex problems involving:",
      items: [
        "Number sequences formed using combined operations and logical conditions",
        "Movement on grids involving direction, distance, turns, and path constraints",
        "Stepwise changes where values increase/decrease based on rules",
        "Multi-step instructions involving swaps, shifts, transfers, and rearrangements",
        "Ordering people, objects, or events using multiple attributes or clues",
        "Logical flow of steps, identifying necessary vs redundant information",
      ],
    },
  ],

  aiOutcomes: [
    "Summarise the basic ideas and concepts of AI and its application",
    "Describe key differences between machine intelligence and human intelligence",
    "Explain the difference between automation and AI using practical, real-world cases.",
    "Differentiate the three fundamental AI methodologies, namely supervised, unsupervised, and reinforcement learning",
    "Develop the skill of organizing and representing data and its various forms, including text, numbers, images, and sounds",
    "Recognize simple patterns in data and make decisions based on observations",
    "Demonstrate an understanding of ethics and digital responsibility in the use of AI, including digital footprints, privacy, and responsible technology behaviour.",
    "Practice essential internet safety protocols, such as creating secure passwords, maintaining safe online behaviour, and applying basic privacy measures while using digital and AI tools.",
    "Apply conceptual knowledge of AI to everyday activities by recognising human-centred design and ethical principles in how AI works and interacts with people",
  ],

  /** Middle Stage (Classes 6–8) requires 100 hours annually. */
  timeAllocation: {
    totalHours: 100,
    ctHours: 40,
    aiHours: 20,
    projectHours: 40,
    projects: { count: 2, hoursEach: 20 },
  },

  pedagogy: [
    { title: "Experiential Learning", text: "Students engage with complex puzzles, riddles, and hands-on real-world problems." },
    { title: "Collaborative Work", text: "The curriculum emphasizes group discussions, debates, and collaborative projects to solve multidisciplinary challenges." },
    { title: "Project-Based Learning", text: "Students use AI tools and data analysis to create solutions for community or fictional city issues." },
  ],

  assessment: [
    { title: "Performance-Based Tools", text: "Project presentations, assignments, and reflective journals." },
    { title: "Practical Evaluation", text: "Written tests with CT puzzles, practical examinations, and interactive activities." },
    { title: "Qualitative Feedback", text: "Teachers use clear rubrics and Observation Journals to ensure consistency in tracking student development." },
  ],

  /** "How to Use This Book?" guidance (SH/TH p. 9), used by the teacher views. */
  teacherGuidance: [
    "Part 1 is a companion to the Mathematics textbook and follows the same chapter sequence, so the Mathematics teacher can integrate it into daily instruction.",
    "Before beginning a chapter, read and identify the underlying concepts required for each question and plan how to align them with classroom teaching.",
    "Adopt a facilitative approach, guiding students through prompts and discussions rather than directly providing solutions. Give students time to think and attempt independently, then discuss different approaches.",
    "Where a chapter includes activities, conduct them before attempting the questions.",
    "The process of thinking is more important than arriving at the correct answer. Create a safe environment where students are comfortable making mistakes, exploring multiple strategies, and expressing their reasoning.",
  ],
};
