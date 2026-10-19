"use client";

import { useEffect } from "react";
import { StepBar } from "@/components/ui/StepBar";
import { useAttempt, useStudio } from "@/lib/learning/work-store";

/** Labelled step pills for an AI path; a step counts as done once visited. */
export function AIStepBar({ chapter, steps, current }: { chapter: number; steps: { slug: string; label: string }[]; current: string }) {
  const { attempts } = useStudio();
  const [, mark] = useAttempt(`ai${chapter}-step-${current}`);
  useEffect(() => {
    mark({ correct: true });
  }, [mark]);
  const idx = steps.findIndex((s) => s.slug === current);
  return (
    <StepBar
      label={`AI Chapter ${chapter} steps`}
      current={idx}
      steps={steps.map((s, i) => ({
        href: `/studio/ai/${chapter}/${s.slug}`,
        label: `${i + 1} · ${s.label}`,
        done: i !== idx && attempts[`ai${chapter}-step-${s.slug}`]?.correct === true,
        dark: i !== idx && attempts[`ai${chapter}-step-${s.slug}`]?.correct === true,
      }))}
    />
  );
}
