import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { AnswerBox } from "@/features/studio/questions/AnswerBox";
import { ChapterSteps } from "@/features/studio/questions/ChapterSteps";
import { PageFrame } from "@/components/layout/PageFrame";
import { StoredHints } from "@/features/studio/questions/StoredHints";
import { PatternMaker, SeriesMachine } from "@/curriculum/class-6/labs/computational-thinking/Chapter01PatternLab";
import { ClockLab } from "@/curriculum/class-6/labs/computational-thinking/Chapter02ClockAngleLab";
import { DiceLab } from "@/curriculum/class-6/labs/computational-thinking/Chapter03DiceGameLab";
import { ClueLab } from "@/curriculum/class-6/labs/computational-thinking/Chapter04GraphClueLab";
import { CircleLab } from "@/curriculum/class-6/labs/computational-thinking/Chapter05CircleOf12Lab";
import { GardenLab } from "@/curriculum/class-6/labs/computational-thinking/Chapter06GardenPlannerLab";
import { ReportCardLab } from "@/curriculum/class-6/labs/computational-thinking/Chapter07ReportCardLab";
import { SquareLab } from "@/curriculum/class-6/labs/computational-thinking/Chapter08SquareBuilderLab";
import { MirrorLab } from "@/curriculum/class-6/labs/computational-thinking/Chapter09MirrorStudioLab";
import { MagicBoxLab } from "@/curriculum/class-6/labs/computational-thinking/Chapter10MagicBoxLab";
import type { CTChapter } from "@/curriculum/class-6";
import { ctStudio } from "@/curriculum/class-6/studio/lab-copy";
import { chapterFrom, chapterParams } from "@/curriculum/class-6/route-params";
import { toPublic } from "@/curriculum/class-6/student-safe";

export const generateStaticParams = chapterParams;

export async function generateMetadata({ params }: PageProps<"/studio/ct/[chapter]">): Promise<Metadata> {
  const ch = chapterFrom((await params).chapter);
  return { title: ch ? `${ctStudio[ch.number].lab} · CT ${ch.number}` : "Lab" };
}

export default function LabPage({ params }: PageProps<"/studio/ct/[chapter]">) {
  return (
    <Suspense fallback={<p className="wrap sec">Loading lab…</p>}>
      <Lab params={params} />
    </Suspense>
  );
}

const q = (ch: CTChapter, n: number) => toPublic(ch.questions.find((x) => x.number === n)!);

function labBody(ch: CTChapter) {
  switch (ch.number) {
    case 1: {
      const q1 = q(ch, 1);
      return (
        <div className="lab-grid">
          <div className="stack" style={{ gap: 12 }}>
            <section className="s-card" aria-labelledby="pl-q1">
              <p className="lbl">{ch.title} · Question 1 of 10 · Pattern recognition</p>
              <p id="pl-q1" className="q-prompt">
                {q1.prompt}
              </p>
              <div style={{ marginTop: 14 }}>
                <SeriesMachine />
              </div>
            </section>
            <section className="s-card" aria-label="Your answer">
              <AnswerBox question={q1} />
            </section>
          </div>
          <div className="stack" style={{ gap: 12 }}>
            <StoredHints id="ct1-q1" />
            <PatternMaker />
          </div>
        </div>
      );
    }
    case 2:
      return <ClockLab q2={q(ch, 2)} q7={q(ch, 7)} />;
    case 3:
      return <DiceLab q1={q(ch, 1)} q8={q(ch, 8)} />;
    case 4:
      return <ClueLab />;
    case 5: {
      const act = ch.activity!;
      const exp2 = act.explorations.find((e) => e.id === "ct5-exp-2")!;
      return <CircleLab think="Why did adding 2, 3 and 4 make polygons, but 5 made a star? Is there a link between these numbers and 12?" exp2={{ id: exp2.id, options: exp2.options!, multi: (exp2.answer?.length ?? 0) > 1, prompt: exp2.prompt, chapter: 5, page: act.page }} />;
    }
    case 6:
      return <GardenLab />;
    case 7:
      return <ReportCardLab q1={q(ch, 1)} q3={q(ch, 3)} />;
    case 8:
      return <SquareLab />;
    case 9:
      return <MirrorLab q9={q(ch, 9)} />;
    case 10:
      return <MagicBoxLab q4={q(ch, 4)} q7={q(ch, 7)} />;
  }
}

async function Lab({ params }: { params: PageProps<"/studio/ct/[chapter]">["params"] }) {
  const ch = chapterFrom((await params).chapter);
  if (!ch) notFound();
  const s = ctStudio[ch.number];
  const first = ch.number === 1;

  return (
    <PageFrame
      chips={[{ text: `CT Chapter ${ch.number} · ${ch.title}`, solid: true }, { text: s.chip }]}
      right={first ? <ChapterSteps chapter={1} current="lab" /> : undefined}
      title={s.lab}
      red={s.tagline}
      intro={first || ch.number === 4 ? s.intro : undefined}
    >
      {ch.number === 5 && s.intro && (
        <p className="body" style={{ maxWidth: 640, marginTop: -12, marginBottom: 20 }}>
          {s.intro}
        </p>
      )}
      {labBody(ch)}
      {!first && (
        <section className="s-card" style={{ marginTop: 20 }} aria-labelledby="think-ten">
          <div className="row-between" style={{ alignItems: "center" }}>
            <div>
              <p className="lbl">Think · the 10 handbook questions</p>
              <p id="think-ten" className="body" style={{ fontWeight: 600 }}>
                {ch.title}: 10 thinking questions, then The Thinking Spot.
              </p>
            </div>
            <Link href={`/studio/ct/${ch.number}/q/1`} className="btn btn-red">
              Start question 1 <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div style={{ marginTop: 14 }}>
            <ChapterSteps chapter={ch.number} current="lab" />
          </div>
        </section>
      )}
    </PageFrame>
  );
}
