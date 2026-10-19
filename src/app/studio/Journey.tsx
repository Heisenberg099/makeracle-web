"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { Chip } from "@/components/studio/Chip";
import type { JourneyStatus } from "@/lib/types";

export type JourneyItem = {
  key: string; // "ct-5"
  label: string; // "CT 5"
  title: string;
  status: JourneyStatus;
  make: string;
  panel: {
    kicker: string;
    line: string;
    chips: string[];
    steps: { label: string; text: string; dark?: boolean }[];
    href: string;
  };
};

const statusText: Record<JourneyStatus, string> = { done: "Done", "in-progress": "In progress", now: "Now", "up-next": "Up next" };
const statusClass: Record<JourneyStatus, string> = { done: "done", "in-progress": "inprog", now: "now", "up-next": "" };

/** "My journey": Part 1 (CT) / Part 2 (AI) switch, chapter cards, and the selected chapter's path. */
export function Journey({ parts }: { parts: { id: "ct" | "ai"; label: string; intro: string; items: JourneyItem[] }[] }) {
  const [partId, setPartId] = useState<"ct" | "ai">("ct");
  const part = parts.find((p) => p.id === partId) ?? parts[0];
  const defaultKey = (p: (typeof parts)[number]) => (p.items.find((i) => i.status === "now") ?? p.items.find((i) => i.status === "in-progress") ?? p.items[0]).key;
  const [selected, setSelected] = useState<Record<string, string>>(() => Object.fromEntries(parts.map((p) => [p.id, defaultKey(p)])));
  const item = part.items.find((i) => i.key === selected[part.id]) ?? part.items[0];
  const panelRef = useRef<HTMLDivElement>(null);

  // On narrow screens the panel sits below every card, so bring it into view after a pick.
  const pick = (key: string) => {
    setSelected((s) => ({ ...s, [part.id]: key }));
    if (window.matchMedia("(max-width: 900px)").matches) {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      requestAnimationFrame(() => panelRef.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" }));
    }
  };

  return (
    <section aria-labelledby="journey-title">
      <div className="row-between" style={{ alignItems: "center", gap: 16 }}>
        <h2 id="journey-title" className="s-title" style={{ fontSize: 36 }}>
          My journey
        </h2>
        <div className="toggles" role="group" aria-label="Choose part" style={{ background: "var(--paper)", borderRadius: 999, padding: 4 }}>
          {parts.map((p) => (
            <button key={p.id} type="button" className="tog" aria-pressed={p.id === partId} onClick={() => setPartId(p.id)} style={{ background: p.id === partId ? undefined : "transparent" }}>
              {p.label}
            </button>
          ))}
        </div>
      </div>
      <p className="body" style={{ maxWidth: 640, margin: "12px 0 18px" }}>
        {part.intro}
      </p>

      <div className="chapters" role="group" aria-label={`${part.label} chapters`}>
        {part.items.map((it) => (
          <button
            key={it.key}
            type="button"
            className={`chapter ${statusClass[it.status]}`}
            aria-pressed={it.key === item.key}
            onClick={() => pick(it.key)}
          >
            <span className="chapter-head">
              <span>{it.label}</span>
              <span>{statusText[it.status]}</span>
            </span>
            <span className="s-title">{it.title}</span>
            <span className="make">Make: {it.make}</span>
          </button>
        ))}
      </div>

      <div ref={panelRef} className="s-card journey-panel" style={{ marginTop: 16, padding: 24, scrollMarginTop: 16 }}>
        <div>
          <p className="lbl">{item.panel.kicker}</p>
          <h3 className="s-title" style={{ fontSize: 32 }}>
            {item.title}
          </h3>
          <p className="body" style={{ marginTop: 10 }}>
            {item.panel.line}
          </p>
          {item.panel.chips.length > 0 && (
            <p style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 14 }}>
              {item.panel.chips.map((c) => (
                <Chip key={c}>{c}</Chip>
              ))}
            </p>
          )}
        </div>
        <div>
          <ol className="pathsteps">
            {item.panel.steps.map((s) => (
              <li key={s.label} className={s.dark ? "dark" : undefined}>
                <p className="lbl">{s.label}</p>
                <p className="sm" style={{ fontWeight: 600 }}>
                  {s.text}
                </p>
              </li>
            ))}
          </ol>
          <Link href={item.panel.href} className="btn btn-block" style={{ marginTop: 10, background: "var(--red-deep)" }}>
            Open {item.label} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
