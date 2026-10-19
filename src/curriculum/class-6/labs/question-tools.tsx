import type { ComponentType } from "react";
import { SeriesMachine } from "@/curriculum/class-6/labs/computational-thinking/Chapter01PatternLab";

/** Interactive helpers shown inside the question player for specific handbook questions. */
export const questionTools: Record<string, ComponentType> = {
  "ct1-q1": SeriesMachine,
};
