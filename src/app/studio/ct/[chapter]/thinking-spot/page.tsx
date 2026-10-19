import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ChapterSteps } from "@/components/studio/ChapterSteps";
import { Figure } from "@/components/studio/Figure";
import { LabFrame } from "@/components/studio/LabFrame";
import { EarlierSpots, JarTool, SpotAnswer, SupposeTool } from "@/components/studio/SpotTools";
import { StoredHints } from "@/components/studio/StoredHints";
import { ctChapters } from "@/content/class6";
import { ctStudio } from "@/content/class6/studio";
import { chapterFrom, chapterParams } from "@/lib/class6/params";
import { toPublic } from "@/lib/class6/public";

export const generateStaticParams = chapterParams;

export async function generateMetadata({ params }: PageProps<"/studio/ct/[chapter]/thinking-spot">): Promise<Metadata> {
  const ch = chapterFrom((await params).chapter);
  return { title: ch ? `The Thinking Spot · CT ${ch.number}` : "The Thinking Spot" };
}

export default function SpotPage({ params }: PageProps<"/studio/ct/[chapter]/thinking-spot">) {
  return (
    <Suspense fallback={<p className="wrap sec">Loading…</p>}>
      <Spot params={params} />
    </Suspense>
  );
}

// DEMO: the spot set for this week, as on the render.
const THIS_WEEK = { chapter: 9, left: "3 days left" };

async function Spot({ params }: { params: PageProps<"/studio/ct/[chapter]/thinking-spot">["params"] }) {
  const ch = chapterFrom((await params).chapter);
  if (!ch) notFound();
  const q = toPublic(ch.thinkingSpot);
  const s = ctStudio[ch.number];

  return (
    <LabFrame
      dark
      chips={[{ text: ch.number === THIS_WEEK.chapter ? `This week · from CT Chapter ${ch.number} · ${THIS_WEEK.left}` : `From CT Chapter ${ch.number} · ${ch.title}`, yellow: true }]}
      title="The Thinking Spot"
      red={s.spot.replace(/\.?$/, ".")}
    >
      <div style={{ maxWidth: 820, marginTop: -8, marginBottom: 20 }}>
        <p className="body" style={{ fontSize: 16 }}>
          {q.prompt}
        </p>
        {q.details && (
          <ul className="q-details" style={{ color: "#e6e6e6" }}>
            {q.details.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="lab-grid">
        <div className="stack" style={{ gap: 12 }}>
          {q.figure && (
            <div className="s-card-ink" style={{ padding: 0 }}>
              <Figure figure={q.figure} />
            </div>
          )}
          <section className="s-card-ink" style={{ background: "var(--ink-2)" }} aria-label="Thinking tool">
            {ch.number === 9 ? <JarTool /> : <SupposeTool question={q} />}
          </section>
          <StoredHints id={q.id} />
        </div>
        <div className="stack" style={{ gap: 12 }}>
          <SpotAnswer question={q} />
          <div className="s-card-yellow tilt-r">
            <p className="lbl">Thinking move</p>
            <p className="serif" style={{ fontSize: 22, lineHeight: 1.2 }}>
              {ch.number === 9
                ? "“Suppose, then check” works for every truth-and-lies puzzle, like Fractions’ Thinking Spot about A and B lying on certain days."
                : "“Suppose, then check”: take one option, pretend it is true, and test every clue. If a clue breaks, cross it off."}
            </p>
          </div>
          <EarlierSpots spots={ctChapters.map((c) => ({ chapter: c.number, label: ctStudio[c.number].spot.replace(/\.$/, "") }))} current={ch.number} />
        </div>
      </div>
      <div style={{ marginTop: 24 }}>
        <ChapterSteps chapter={ch.number} current="spot" />
      </div>
    </LabFrame>
  );
}
