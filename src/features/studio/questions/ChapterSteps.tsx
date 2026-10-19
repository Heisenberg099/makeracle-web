"use client";

import { StepBar } from "@/components/ui/StepBar";
import { useStudio } from "@/lib/learning/work-store";

/** Q1–Q10 + The Thinking Spot for one CT chapter; solved items are marked from saved progress. */
export function ChapterSteps({ chapter, current }: { chapter: number; current: number | "spot" | "lab" }) {
  const { attempts } = useStudio();
  const steps = [
    { href: `/studio/ct/${chapter}`, label: "Lab" },
    ...Array.from({ length: 10 }, (_, i) => ({
      href: `/studio/ct/${chapter}/q/${i + 1}`,
      label: String(i + 1),
      srLabel: `Question ${i + 1}`,
      done: attempts[`ct${chapter}-q${i + 1}`]?.correct === true,
    })),
    { href: `/studio/ct/${chapter}/thinking-spot`, label: "The Thinking Spot", dark: true, done: attempts[`ct${chapter}-ts`]?.correct === true },
  ];
  const idx = current === "lab" ? 0 : current === "spot" ? 11 : current;
  return <StepBar steps={steps} current={idx} label={`Chapter ${chapter} questions`} />;
}
