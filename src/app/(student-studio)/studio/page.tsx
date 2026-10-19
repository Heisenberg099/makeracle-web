import Link from "next/link";
import { PortalShell } from "@/components/layout/PortalShell";
import { Card } from "@/components/ui/Card";
import { LevelBar, ProgressBar } from "@/components/ui/ProgressBar";
import { aiChapters, ctChapters, curriculum } from "@/curriculum/class-6";
import { aiStudio, ctStudio, studioRoutes } from "@/curriculum/class-6/studio/lab-copy";
import { studioDemo } from "@/lib/demo-data";
import { Journey, type JourneyItem } from "@/features/studio/journey/Journey";

export const metadata = { title: "My journey" };

const nav = [
  { href: studioRoutes.home, label: "My journey", exact: true },
  { href: studioRoutes.ct(1), label: "Pattern Lab · Ch 1" },
  { href: studioRoutes.ct(5), label: "Circle of 12 · Ch 5" },
  { href: "/studio/ai/1", label: "Intro to AI · AI 1" },
  { href: studioRoutes.ai(2), label: "Data Lab · AI 2" },
  { href: studioRoutes.ai(4), label: "Arjun’s Inbox · AI 4" },
  { href: studioRoutes.project("data-detectives"), label: "Project 1 · Data Detectives" },
  { href: studioRoutes.project("cyber-suraksha"), label: "Project 2 · Cyber Suraksha" },
  { href: studioRoutes.thinkingSpot(9), label: "The Thinking Spot" },
  { href: studioRoutes.wall, label: "Class wall" },
  { href: studioRoutes.portfolio, label: "My portfolio" },
];

export default function StudioHome() {
  const p = studioDemo; // DEMO DATA — replace with the signed-in student's progress
  const t = curriculum.timeAllocation;

  const ctItems: JourneyItem[] = ctChapters.map((ch) => {
    const s = ctStudio[ch.number];
    return {
      key: `ct-${ch.number}`,
      label: `CT ${ch.number}`,
      title: ch.title,
      status: p.ct[ch.number] ?? "up-next",
      make: s.make,
      panel: {
        kicker: `CT ${ch.number} · mirrors your NCERT maths chapter`,
        line: s.line,
        chips: s.strands,
        steps: [
          { label: "1 · Think", text: `${ch.questions.length} thinking questions · hints, no answers` },
          { label: "2 · Make", text: s.make },
          { label: "3 · The Thinking Spot", text: s.spot, dark: true },
        ],
        href: studioRoutes.ct(ch.number),
      },
    };
  });

  const aiItems: JourneyItem[] = aiChapters.map((ch) => {
    const s = aiStudio[ch.number];
    return {
      key: `ai-${ch.number}`,
      label: `AI ${ch.number}`,
      title: ch.title,
      status: p.ai[ch.number] ?? "up-next",
      make: s.make,
      panel: {
        kicker: `AI ${ch.number} · Ethics tag: ${ch.ethicsTag.toLowerCase()}`,
        line: s.line,
        chips: ch.learningFocus.slice(0, 3),
        steps: [
          { label: "1 · Learn", text: `${ch.sections.length} short sections · try things as you read` },
          { label: "2 · Make", text: s.make },
          { label: "3 · Check yourself", text: "Exercise A to E · hints, no answers", dark: true },
        ],
        href: studioRoutes.ai(ch.number),
      },
    };
  });

  return (
    <PortalShell
      area={`Student Studio · ${p.student.classLabel}`}
      user={p.student.name}
      nav={nav}
      footer={
        <p className="side-note">
          Follows the CBSE Class 6 CT &amp; AI handbook
          <br />
          Part 1: {ctChapters.length} CT chapters · Part 2: {aiChapters.length} AI chapters · {t.projects.count} projects of {t.projects.hoursEach} h
        </p>
      }
    >
      <p className="sm muted">{p.today}</p>
      <h1 className="studio-hello" style={{ marginTop: 8 }}>
        Hi {p.student.firstName}.
        <br />
        <span className="hi">Make</span> something
        <br />
        today.
      </h1>

      <div className="hours" style={{ marginTop: 28 }}>
        {[
          { label: "Advanced CT", done: p.hours.ct, target: t.ctHours, tone: "red" as const },
          { label: "Introductory AI", done: p.hours.ai, target: t.aiHours, tone: "ink" as const },
          { label: "Projects", done: p.hours.project, target: t.projectHours, tone: "muted" as const },
        ].map((h) => (
          <Card key={h.label}>
            <p className="sm muted">{h.label}</p>
            <p className="num">
              {h.done}
              <small> / {h.target} H</small>
            </p>
            <ProgressBar value={h.done} max={h.target} label={`${h.label} hours`} tone={h.tone} />
          </Card>
        ))}
      </div>

      <Card tone="red" className="continue" style={{ marginTop: 22 }}>
        <svg width="64" height="64" viewBox="0 0 64 64" aria-hidden="true" style={{ flex: "none" }}>
          <circle cx="32" cy="32" r="28" fill="none" stroke="#fff" strokeWidth="1.5" strokeDasharray="2 6" />
          <path d="M32 6 L54.5 45 H9.5 Z M32 58 L9.5 19 H54.5 Z" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinejoin="round" />
        </svg>
        <div style={{ flex: "1 1 320px", minWidth: 0 }}>
          <p className="lbl" style={{ marginBottom: 6 }}>
            {p.continue.eyebrow}
          </p>
          <p className="s-title">{p.continue.title}</p>
          <p className="sm" style={{ marginTop: 6 }}>
            {p.continue.line} {p.continue.progress}
          </p>
        </div>
        <Link href={p.continue.href} className="btn btn-white">
          Open the activity <span aria-hidden="true">→</span>
        </Link>
      </Card>

      <div className="journey" style={{ marginTop: 32 }}>
        <Journey
          parts={[
            {
              id: "ct",
              label: "Part 1 · Computational Thinking",
              intro: "Each chapter follows your NCERT Ganita Prakash chapter. Think through the 10 questions, then make something with the idea, then try The Thinking Spot.",
              items: ctItems,
            },
            {
              id: "ai",
              label: "Part 2 · AI",
              intro: "Four short AI chapters. Learn the idea, make something with it, then check yourself.",
              items: aiItems,
            },
          ]}
        />

        <div className="stack" style={{ gap: 14 }}>
          <Card as="section" aria-label="My CT strengths">
            <p className="lbl">My CT strengths · from my answers so far</p>
            <div className="stack" style={{ gap: 14, marginTop: 10 }}>
              {p.strengths.map((s) => (
                <div key={s.strand}>
                  <p className="sm" style={{ display: "flex", justifyContent: "space-between", fontWeight: 600, marginBottom: 6 }}>
                    <span>{s.strand}</span>
                    <span>Level {s.level}</span>
                  </p>
                  <LevelBar level={s.level} label={s.strand} />
                </div>
              ))}
            </div>
          </Card>

          <Card tone="ink" as="section" aria-label="Projects">
            <p className="lbl">Projects · {t.projects.hoursEach} hours each</p>
            {p.projects.map((pr) => (
              <Link key={pr.slug} href={studioRoutes.project(pr.slug)} style={{ display: "block", textDecoration: "none", borderTop: "1px solid var(--ink-2)", paddingTop: 12, marginTop: 12, color: "#fff" }}>
                <span className="s-title" style={{ fontSize: 24, display: "block" }}>
                  {pr.number} · {pr.title}
                </span>
                <span className="sm" style={{ color: "var(--muted-on-ink)" }}>
                  {pr.line} · {pr.status}
                </span>
              </Link>
            ))}
          </Card>

          {p.wallHighlight && (
            <Card tone="yellow" tilt="r" as="aside" aria-label="From the class wall">
              <p className="lbl">Class wall</p>
              <p className="serif" style={{ fontSize: 22, lineHeight: 1.15 }}>
                “{p.wallHighlight.quote}”
              </p>
              <Link href={p.wallHighlight.href} className="sm ul" style={{ display: "inline-flex", minHeight: 44, alignItems: "center", fontWeight: 600 }}>
                Open the class wall
              </Link>
            </Card>
          )}
        </div>
      </div>
    </PortalShell>
  );
}
