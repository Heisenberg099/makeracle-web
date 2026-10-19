/**
 * Shared record types — one import point: `import type { … } from "@/lib/types"`.
 * Portals are written against these so the backend can replace src/lib/demo-data
 * without UI changes. Curriculum content types live with each class
 * (e.g. src/curriculum/class-6/handbook/types.ts).
 */
export * from "./portals";
export * from "./student-studio";
export * from "./teacher-and-school";
