import type { Metadata } from "next";
import { Suspense } from "react";
import { PageFrame } from "@/components/layout/PageFrame";
import { PlannerView, type PlannerAI, type PlannerCT } from "@/features/teacher/planner/PlannerView";
import { aiChapters, ctChapters, type CTOption } from "@/curriculum/class-6";
import { aiPaths } from "@/curriculum/class-6/studio/ai-paths";
import { ctStudio } from "@/curriculum/class-6/studio/lab-copy";

export const metadata: Metadata = { title: "Chapter planner · Teacher hub", robots: { index: false } };

// DEMO: where this class is in the year (matches the render).
const STATUS: Record<string, string> = { ct1: "Done", ct2: "Done", ct3: "Done", ct4: "This week", ct5: "Next", ai1: "This week" };

const opts = (o: CTOption[]) => o.map((x) => `${x.key}) ${x.text ?? x.figure?.alt ?? ""}`);

/** Teacher view: includes Teacher Handbook answers and solutions. */
export default function PlannerPage() {
  const ct: PlannerCT[] = ctChapters.map((c) => ({
    key: `ct${c.number}`,
    number: c.number,
    title: c.title,
    status: STATUS[`ct${c.number}`] ?? "",
    lab: ctStudio[c.number].lab,
    hasActivity: !!c.activity,
    activityPlan: c.activity?.plan,
    activityComponents: c.activity?.components,
    // CT 5 materials follow the render; other chapters need only paper.
    materials: c.number === 5 ? ["Printed 12-point circles", "Thread and card for string art"] : ["Paper and pencil", "A printed worksheet per pair (use Print worksheet)"],
    questions: c.questions.map((q) => ({ n: q.number, id: q.id, prompt: q.prompt, details: q.details, options: opts(q.options), answer: q.answer.join(", "), steps: q.solution.steps })),
    spot: { id: c.thinkingSpot.id, prompt: c.thinkingSpot.prompt, details: c.thinkingSpot.details, options: opts(c.thinkingSpot.options), answer: c.thinkingSpot.answer.join(", "), steps: c.thinkingSpot.solution.steps },
  }));

  const ai: PlannerAI[] = aiChapters.map((c) => {
    const e = c.exercise;
    const mcqText = (k: string, m: (typeof e.mcq)[number]) => m.options.find((o) => o.key === k)?.text ?? k;
    return {
      key: `ai${c.number}`,
      number: c.number,
      title: c.title,
      status: STATUS[`ai${c.number}`] ?? "",
      ethics: c.ethicsTag,
      focus: c.learningFocus,
      steps: aiPaths[c.number].map((s) => s.label),
      answers: [
        { section: "A · Multiple choice", items: e.mcq.map((m) => ({ q: m.prompt, a: `${m.answer}) ${mcqText(m.answer, m)}` })) },
        { section: "B · Fill in the blanks", items: e.fillBlanks.map((f) => ({ q: f.text, a: f.answer })) },
        { section: "C · Short answers", items: e.shortAnswer.map((s) => ({ q: s.prompt, a: s.answer.join("; ") })) },
        {
          section: "D · Think and apply",
          items: e.thinkApply.questions ? e.thinkApply.questions.map((s) => ({ q: s.prompt, a: s.answer.join("; ") })) : (e.thinkApply.table?.rows ?? []).map((r) => ({ q: r.item, a: r.answer })),
        },
        { section: `E · ${e.table.title}`, items: e.table.rows.map((r) => ({ q: r.item, a: r.answer })) },
      ],
    };
  });

  return (
    <PageFrame chips={[{ text: "Follows the Teacher Handbook · solutions included" }]} title="Chapter planner" red="Plan a chapter in 5 minutes." back={{ href: "/teacher", label: "Today" }}>
      <Suspense fallback={<p className="sm">Loading planner…</p>}>
        <PlannerView ct={ct} ai={ai} />
      </Suspense>
    </PageFrame>
  );
}
