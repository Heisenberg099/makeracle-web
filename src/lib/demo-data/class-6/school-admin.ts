/**
 * DEMO DATA · school admin dashboard
 * Everything here is fictional sample data. The backend replaces these
 * exports with API calls of the same shape (types in src/lib/types).
 */
import type { SchoolSection } from "@/lib/types";

/* School dashboard · DEMO */
export const schoolDemo = {
  name: "Green Valley Public School (CBSE)",
  week: 14,
  weeks: 36,
  observationNotes: 1248,
  approvedMakes: 612,
  projectsUnderway: 24,
  sections: [
    { id: "Class 3A", teacher: "Ms. Rao", band: "3-5", hours: 19 },
    { id: "Class 4A", teacher: "Ms. Rao", band: "3-5", hours: 21 },
    { id: "Class 5A", teacher: "Mr. Khan", band: "3-5", hours: 15 },
    { id: "Class 6A", teacher: "Ms. Kapoor", band: "6-8", hours: 38 },
    { id: "Class 6B", teacher: "Ms. Kapoor", band: "6-8", hours: 36 },
    { id: "Class 7A", teacher: "Mr. Iyer", band: "6-8", hours: 41 },
    { id: "Class 7B", teacher: "Mr. Iyer", band: "6-8", hours: 27 },
    { id: "Class 8A", teacher: "Ms. Fernandes", band: "6-8", hours: 44 },
    { id: "Class 8B", teacher: "Ms. Fernandes", band: "6-8", hours: 39 },
  ] satisfies SchoolSection[],
  training: [
    { name: "Ms. Kapoor", done: 2 },
    { name: "Mr. Iyer", done: 4 },
    { name: "Ms. Fernandes", done: 1 },
    { name: "Ms. Rao", done: 3 },
    { name: "Mr. Khan", done: 0 },
    { name: "Ms. Das", done: 5 },
  ],
  trainingTotal: 7,
  comingUp: { title: "CT Fair · Classes 6–8 · 14 Nov", body: "24 project stalls registered. Parents invited through the parent app." },
  // From the renders; check against the actual CBSE circular before launch.
  deadline: { label: "Composite Skill Lab · Circular Skill-75/2024", title: "Deadline about Aug 2027", body: "Lab bookings this month: 38 CT & AI sessions, 12 Kaushal Bodh sessions." },
};
