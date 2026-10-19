import type { CTOption, Figure, PageRef } from "../types";

/** Four text options a–d, in the order printed in the handbook. */
export function textOptions(a: string, b: string, c: string, d: string): CTOption[] {
  return [
    { key: "a", text: a },
    { key: "b", text: b },
    { key: "c", text: c },
    { key: "d", text: d },
  ];
}

/** Four picture options a–d; `alts` describe each picture as printed. */
export function figureOptions(id: string, page: PageRef, alts: [string, string, string, string]): CTOption[] {
  return (["a", "b", "c", "d"] as const).map((key, i) => ({
    key,
    figure: { id: `${id}-opt-${key}`, page, alt: alts[i] } satisfies Figure,
  }));
}
