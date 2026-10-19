import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { AnswerBox } from "@/components/studio/AnswerBox";
import { ChapterSteps } from "@/components/studio/ChapterSteps";
import { Figure } from "@/components/studio/Figure";
import { LabFrame } from "@/components/studio/LabFrame";
import { StoredHints } from "@/components/studio/StoredHints";
import { ctChapters } from "@/content/class6";
import { ctStudio } from "@/content/class6/studio";
import { chapterFrom } from "@/lib/class6/params";
import { toPublic } from "@/lib/class6/public";
import { questionTools } from "@/components/studio/labs/tools";

export function generateStaticParams() {
  return ctChapters.flatMap((c) => c.questions.map((q) => ({ chapter: String(c.number), n: String(q.number) })));
}

export async function generateMetadata({ params }: PageProps<"/studio/ct/[chapter]/q/[n]">): Promise<Metadata> {
  const { chapter, n } = await params;
  const ch = chapterFrom(chapter);
  return { title: ch ? `${ch.title} · Question ${n}` : "Question" };
}

export default function QuestionPage({ params }: PageProps<"/studio/ct/[chapter]/q/[n]">) {
  return (
    <Suspense fallback={<p className="wrap sec">Loading question…</p>}>
      <Question params={params} />
    </Suspense>
  );
}

async function Question({ params }: { params: PageProps<"/studio/ct/[chapter]/q/[n]">["params"] }) {
  const { chapter, n } = await params;
  const ch = chapterFrom(chapter);
  const q = ch?.questions.find((x) => x.number === Number(n));
  if (!ch || !q) notFound();
  const pq = toPublic(q);
  const s = ctStudio[ch.number];
  const Tool = questionTools[q.id];

  return (
    <LabFrame
      right={<ChapterSteps chapter={ch.number} current={q.number} />}
      title={s.lab}
      red={`Chapter ${ch.number} · Q${q.number}`}
      intro="Think first, then pick. Hints unlock one at a time; the answer is never shown until you explain your rule."
    >
      <div className="lab-grid">
        <div className="stack" style={{ gap: 12 }}>
          <section className="s-card" aria-labelledby="q-prompt">
            <p className="lbl">
              {ch.title} · Question {q.number} of {ch.questions.length}
              {s.strands.length ? ` · ${s.strands.join(" · ")}` : ""}
            </p>
            <p id="q-prompt" className="q-prompt">
              {pq.prompt}
            </p>
            {pq.details && (
              <ul className="q-details">
                {pq.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            )}
            {pq.figure && (
              <div style={{ marginTop: 14 }}>
                <Figure figure={pq.figure} />
              </div>
            )}
            {Tool && (
              <div style={{ marginTop: 16 }}>
                <Tool />
              </div>
            )}
          </section>
          <section className="s-card" aria-label="Your answer">
            <AnswerBox question={pq} />
          </section>
        </div>
        <div className="stack" style={{ gap: 12 }}>
          <StoredHints id={q.id} />
          <nav className="s-card row-between" aria-label="Question navigation" style={{ alignItems: "center" }}>
            {q.number > 1 ? (
              <Link className="btn btn-ghost" href={`/studio/ct/${ch.number}/q/${q.number - 1}`}>
                <span aria-hidden="true">←</span> Question {q.number - 1}
              </Link>
            ) : (
              <Link className="btn btn-ghost" href={`/studio/ct/${ch.number}`}>
                <span aria-hidden="true">←</span> Back to the lab
              </Link>
            )}
            {q.number < ch.questions.length ? (
              <Link className="btn btn-red" href={`/studio/ct/${ch.number}/q/${q.number + 1}`}>
                Question {q.number + 1} <span aria-hidden="true">→</span>
              </Link>
            ) : (
              <Link className="btn btn-red" href={`/studio/ct/${ch.number}/thinking-spot`}>
                The Thinking Spot <span aria-hidden="true">→</span>
              </Link>
            )}
          </nav>
          <div className="s-card-yellow make-card">
            <p className="lbl">Make · {s.make}</p>
            <p className="body">Done thinking? Make something with the idea in the {s.lab}.</p>
            <Link className="btn btn-ink" href={`/studio/ct/${ch.number}`} style={{ marginTop: 12 }}>
              Open the {s.lab}
            </Link>
          </div>
          <p className="sm muted">Source: CBSE Class 6 CT &amp; AI Student Handbook, p. {String(q.page.sh)}.</p>
        </div>
      </div>
    </LabFrame>
  );
}
