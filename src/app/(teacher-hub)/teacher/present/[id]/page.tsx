import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { QuestionProjector } from "@/features/teacher/projector/QuestionProjector";
import { ctChapters, getCTChapter } from "@/curriculum/class-6";
import { hints } from "@/curriculum/class-6/studio/practice-hints";
import { class6Students, getLesson, lessons, responsesDemo } from "@/lib/demo-data";
import { ProjectorRunner } from "./ProjectorRunner";

export const metadata: Metadata = { title: "Projector mode", robots: { index: false } };

export function generateStaticParams() {
  const c6 = ctChapters.flatMap((c) => [...c.questions.map((q) => q.id), c.thinkingSpot.id]);
  return [...lessons.map((l) => ({ id: l.id })), ...c6.map((id) => ({ id }))];
}

export default function PresentPage({ params }: PageProps<"/teacher/present/[id]">) {
  return (
    <Suspense fallback={<main style={{ minHeight: "100vh", background: "var(--ink)" }} />}>
      <Present params={params} />
    </Suspense>
  );
}

// Render notes for CT 1 Q1 ("Watch for"); other items use the practice hints as prompts.
const WATCH: Record<string, string[]> = {
  "ct1-q1": ["Counting the 6 already shown again (leads to 2 or 4)", "Counting 9 nine times instead of eight"],
};
const PROMPTS: Record<string, string[]> = {
  "ct1-q1": ["How many times does 3 appear? And 4?", "Can you say the rule in one sentence?", "Who solved it a different way?"],
};

async function Present({ params }: { params: PageProps<"/teacher/present/[id]">["params"] }) {
  const { id } = await params;
  const m = id.match(/^ct(\d+)-(q(\d+)|ts)$/);
  if (!m) {
    const lesson = getLesson(id);
    if (!lesson) notFound();
    return <ProjectorRunner lesson={lesson} />;
  }
  const ch = getCTChapter(Number(m[1]));
  const item = ch && (m[2] === "ts" ? ch.thinkingSpot : ch.questions.find((q) => q.number === Number(m[3])));
  if (!ch || !item) notFound();
  const order = [...ch.questions.map((q) => q.id), ch.thinkingSpot.id];
  const i = order.indexOf(item.id);
  const label = "number" in item ? `Q${item.number}` : "The Thinking Spot";

  return (
    <QuestionProjector
      context={`Class 6B · CT Chapter ${ch.number} · ${ch.title} · ${label}`}
      prompt={item.prompt}
      details={item.details}
      figure={item.figure}
      options={item.options}
      answer={item.answer}
      solution={item.solution.steps}
      prompts={PROMPTS[item.id] ?? [...(hints[item.id] ?? []), "Who solved it a different way?"]}
      watchFor={WATCH[item.id]}
      responses={responsesDemo[item.id]}
      prev={order[i - 1]}
      next={order[i + 1]}
      students={class6Students.filter((s) => s.classId === "6B").map((s) => ({ id: s.id, name: s.name }))}
    />
  );
}
