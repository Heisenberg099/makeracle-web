import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { LabFrame } from "@/components/studio/LabFrame";
import { AIStepBar } from "@/components/studio/ai/AIStepBar";
import { FillBlanks, MCQSet, OpenQuestions, TableQuiz } from "@/components/studio/ai/Exercises";
import { LearnSections } from "@/components/studio/ai/LearnSections";
import { EverydayLab, HistoryLab, IntelligenceLab, SortLab } from "@/components/studio/ai/labs1";
import { DataAroundLab, LemonadeLab, OrganiseLab, TypesLab } from "@/components/studio/ai/labs2";
import { FootprintsLab, InboxLab, PatternsLab, PracticesLab, ResponsibleLab, WeatherLab } from "@/components/studio/ai/labs34";
import { getAIChapter, type AIBlock, type AIChapter, type AISection } from "@/content/class6";
import { aiPaths, getAIStep, type AIStep } from "@/content/class6/aiPaths";
import { publicFills, publicMCQs, publicOpen, publicTable } from "@/lib/class6/public";

export function generateStaticParams() {
  return Object.entries(aiPaths).flatMap(([chapter, steps]) => steps.map((s) => ({ chapter, step: s.slug })));
}

export async function generateMetadata({ params }: PageProps<"/studio/ai/[chapter]/[step]">): Promise<Metadata> {
  const { chapter, step } = await params;
  const s = getAIStep(Number(chapter), step);
  return { title: s ? `AI ${chapter} · ${s.label}` : "AI" };
}

export default function AIStepPage({ params }: PageProps<"/studio/ai/[chapter]/[step]">) {
  return (
    <Suspense fallback={<p className="wrap sec">Loading…</p>}>
      <Step params={params} />
    </Suspense>
  );
}

/* --- helpers that pull lab data straight from the handbook content --- */
const section = (ch: AIChapter, id: string) => ch.sections.find((s) => s.id === id)!;
const termsIn = (s: AISection) => s.blocks.flatMap((b) => (b.kind === "terms" ? b.items : []));
const firstSentences = (t: string, n = 2) => t.split(/(?<=\.)\s+/).slice(0, n).join(" ");

function labFor(ch: AIChapter, step: AIStep) {
  switch (step.lab) {
    case "intelligence": {
      const table = section(ch, "ai1-human-vs-machine").blocks.find((b): b is Extract<AIBlock, { kind: "table" }> => b.kind === "table")!.rows;
      // The 7 statements drawn in the render, in the handbook's own words, minus the
      // leading "Human/Machine Intelligence" that would give the answer away.
      const strip = (t: string) => {
        const r = t.replace(/^(Human|Machine) Intelligence /, "");
        return r.charAt(0).toUpperCase() + r.slice(1);
      };
      const statements = [
        { text: strip(table[0][0]), answer: "Human" as const },
        { text: strip(table[0][1]), answer: "Machine" as const },
        { text: table[2][0], answer: "Human" as const },
        { text: table[5][1], answer: "Machine" as const },
        { text: table[4][0], answer: "Human" as const },
        { text: table[3][1], answer: "Machine" as const },
        { text: table[6][0], answer: "Human" as const },
      ];
      return (
        <IntelligenceLab
          kinds={termsIn(section(ch, "ai1-intelligence"))}
          computing="Using computers to conduct mathematical, logical, or relational calculations"
          intelligence="Learning, reasoning, decision-making, and adapting to new situations"
          statements={statements}
        />
      );
    }
    case "history": {
      const t = termsIn(section(ch, "ai1-history"));
      const birth = t.find((x) => x.term === "Birth of AI")!.text;
      const modern = section(ch, "ai1-modern").blocks[0];
      return (
        <HistoryLab
          eras={[
            { id: "ancient", when: "Ancient", label: "Automatons", text: firstSentences(t[0].text, 3) },
            { id: "1940s", when: "1940s", label: "Alan Turing asks “Can machines think?”", text: firstSentences(t[1].text.split("Turing further introduced")[1] ? `Turing introduced${t[1].text.split("Turing further introduced")[1]}` : t[1].text, 2) },
            { id: "1956", when: "1956", label: "Birth of AI at Dartmouth", text: firstSentences(birth, 2) },
            { id: "winter", when: "1980s–90s", label: "The AI Winter", text: birth.slice(birth.indexOf("However")) },
            { id: "modern", when: "2000s →", label: "Modern AI", text: modern.kind === "p" ? modern.text : "" },
          ]}
        />
      );
    }
    case "everyday":
      return <EverydayLab />;
    case "sort":
      return <SortLab chapter={ch.number} />;
    case "data-around":
      return <DataAroundLab />;
    case "types":
      return <TypesLab />;
    case "organise":
      return <OrganiseLab terms={termsIn(section(ch, "ai2-organising"))} />;
    case "lemonade": {
      const tables = section(ch, "ai2-representing").blocks.filter((b): b is Extract<AIBlock, { kind: "table" }> => b.kind === "table");
      const salesT = tables.find((b) => b.caption?.startsWith("The Sales Data"))!;
      const plantT = tables.find((b) => b.caption === "The Plantation Data")!;
      return (
        <LemonadeLab
          sales={salesT.rows.map((r) => ({ product: r[0], days: r.slice(1, 6).map(Number), total: Number(r[6]) }))}
          plantation={plantT.rows.map((r) => ({ cls: r[0], trees: Number(r[1]) }))}
        />
      );
    }
    case "patterns":
      return <PatternsLab methods={[...termsIn(section(ch, "ai3-repeated")), ...termsIn(section(ch, "ai3-similarities"))]} />;
    case "weather":
      return <WeatherLab />;
    case "responsible":
      return <ResponsibleLab />;
    case "inbox":
      return <InboxLab />;
    case "practices": {
      const blocks = section(ch, "ai4-unethical").blocks;
      const practices = blocks.flatMap((b, i) => {
        if (b.kind !== "terms") return [];
        const next = blocks[i + 1];
        return [{ term: b.items[0].term, text: firstSentences(b.items[0].text, 1), steps: next?.kind === "list" ? next.items : [] }];
      });
      return <PracticesLab practices={practices} />;
    }
    case "footprints": {
      const list = section(ch, "ai4-good-behaviour").blocks.find((b): b is Extract<AIBlock, { kind: "list" }> => b.kind === "list")!;
      return <FootprintsLab pledges={list.items.map((t) => firstSentences(t, 1))} />;
    }
    case "check":
      return null;
  }
}

async function Step({ params }: { params: PageProps<"/studio/ai/[chapter]/[step]">["params"] }) {
  const { chapter, step: slug } = await params;
  const ch = getAIChapter(Number(chapter));
  const step = ch && getAIStep(ch.number, slug);
  if (!ch || !step) notFound();
  const steps = aiPaths[ch.number];
  const idx = steps.indexOf(step);
  const next = steps[idx + 1];
  const table = step.table && publicTable(ch, step.table);
  const mcqs = step.mcq ? publicMCQs(ch, step.mcq) : [];
  const mcqStart = step.mcq ? ch.exercise.mcq.findIndex((m) => m.id === step.mcq![0]) + 1 : 1;

  return (
    <LabFrame
      kicker={`AI Chapter ${ch.number} · ${ch.title} · Ethics tag: ${ch.ethicsTag.toLowerCase()}`}
      right={<AIStepBar chapter={ch.number} steps={steps} current={step.slug} />}
      title={step.title}
      red={step.red}
    >
      {labFor(ch, step)}

      {mcqs.length > 0 && <MCQSet items={mcqs} start={mcqStart} title={mcqs.length === 5 ? "Five questions from the handbook" : "Questions from the handbook"} />}
      {table && <TableQuiz table={table} label={step.table === "table" ? "Exercise E · from the handbook" : "Exercise D · think and apply"} />}

      {step.lab === "check" && (
        <>
          {step.fill && <FillBlanks items={publicFills(ch)} />}
          {step.short && <OpenQuestions items={publicOpen(ch, "short")} label="Exercise C · short answers" title="In your own words" />}
          {step.thinkOpen && <OpenQuestions items={publicOpen(ch, "think")} label="Exercise D · think and apply" title="Use what you learned" />}
          <section className="s-card-yellow" style={{ marginTop: 16 }} aria-labelledby="ptr">
            <p className="lbl">Points to remember · from the handbook</p>
            <h2 id="ptr" className="s-title" style={{ fontSize: 24 }}>
              {ch.title}
            </h2>
            <ul className="q-details">
              {ch.pointsToRemember.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </section>
        </>
      )}

      <LearnSections sections={step.sections.map((id) => section(ch, id))} />

      <nav className="row-between" aria-label="Step navigation" style={{ marginTop: 20, alignItems: "center" }}>
        {idx > 0 ? (
          <Link className="btn btn-ghost" href={`/studio/ai/${ch.number}/${steps[idx - 1].slug}`}>
            <span aria-hidden="true">←</span> {steps[idx - 1].label}
          </Link>
        ) : (
          <Link className="btn btn-ghost" href="/studio">
            <span aria-hidden="true">←</span> My journey
          </Link>
        )}
        {next ? (
          <Link className="btn btn-ink" href={`/studio/ai/${ch.number}/${next.slug}`}>
            Next · {next.label} <span aria-hidden="true">→</span>
          </Link>
        ) : ch.number < 4 ? (
          <Link className="btn btn-ink" href={`/studio/ai/${ch.number + 1}`}>
            Next · AI Chapter {ch.number + 1} <span aria-hidden="true">→</span>
          </Link>
        ) : (
          <Link className="btn btn-ink" href="/studio">
            Back to my journey
          </Link>
        )}
      </nav>
    </LabFrame>
  );
}
