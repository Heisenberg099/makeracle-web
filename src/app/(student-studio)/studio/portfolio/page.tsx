import { TopBar } from "@/components/layout/TopBar";
import { PortfolioView } from "@/features/studio/portfolio/PortfolioView";
import { projects } from "@/curriculum/class-6/studio/projects";
import { portfolioDemo, projectsDemo, studioDemo } from "@/lib/demo-data";

export const metadata = { title: "My portfolio" };

const SHORT: Record<string, string> = { "Abstract thinking": "Abstract", "Pattern recognition": "Pattern", Decomposition: "Decompose", "Algorithmic thinking": "Algorithmic" };

export default function PortfolioPage() {
  const p = studioDemo; // DEMO — the signed-in student
  return (
    <div className="studio-page">
      <main id="main" className="wrap" style={{ paddingBottom: 80 }}>
        <TopBar />
        <PortfolioView
          name={p.student.name}
          classLine={`${p.student.classLabel} · 2026-27`}
          quote={portfolioDemo.quote}
          strengths={p.strengths.map((s) => ({ label: SHORT[s.strand] ?? s.strand, level: s.level }))}
          items={portfolioDemo.items}
          badges={portfolioDemo.badges}
          projects={projects.map((pr) => {
            const prog = projectsDemo[pr.slug];
            const working = pr.stages.find((s) => prog.stageStatus[s.id] === "working");
            return {
              slug: pr.slug,
              title: `${pr.number} · ${pr.title.replace(/:$/, "")}`,
              status: working ? `Stage ${pr.stages.indexOf(working) + 1} of ${pr.stages.length} · ${working.name}` : "Not started",
              hours: `${prog.hoursLogged} / 20 h logged`,
            };
          })}
        />
      </main>
    </div>
  );
}
