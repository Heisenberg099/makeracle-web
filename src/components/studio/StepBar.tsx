import Link from "next/link";

export type Step = { href: string; label: string; done?: boolean; dark?: boolean; srLabel?: string };

/**
 * Row of step links: numbered circles (CT questions 1–10 + The Thinking Spot)
 * or labelled pills (AI paths "1 · Intelligence", …). The current step is
 * marked with aria-current="step"; completed steps get an outline and are
 * announced as completed.
 */
export function StepBar({ steps, current, label }: { steps: Step[]; current: number; label: string }) {
  return (
    <nav aria-label={label}>
      <ol className="stepbar">
        {steps.map((s, i) => (
          <li key={s.href}>
            <Link
              href={s.href}
              aria-current={i === current ? "step" : undefined}
              className={[s.done && i !== current ? "done" : "", s.dark ? "dark" : ""].filter(Boolean).join(" ") || undefined}
            >
              <span aria-hidden={s.srLabel ? true : undefined}>{s.label}</span>
              {s.srLabel && <span className="sr-only">{s.srLabel}</span>}
              {s.done && <span className="sr-only"> (completed)</span>}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
