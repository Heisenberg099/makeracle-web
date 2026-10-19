"use client";

import { HintLadder } from "@/components/ui/HintLadder";
import { hints as allHints } from "@/curriculum/class-6/studio/practice-hints";
import { useAttempt } from "@/lib/learning/work-store";

/** Hint ladder for one handbook item, remembering how many hints were used. */
export function StoredHints({ id }: { id: string }) {
  const [attempt, update] = useAttempt(id);
  const hints = allHints[id];
  if (!hints?.length) return null;
  return <HintLadder hints={hints} used={attempt?.hints ?? 0} onUnlock={(n) => update({ hints: n })} note="Hints are Makeracle practice hints, not from the handbook." />;
}
