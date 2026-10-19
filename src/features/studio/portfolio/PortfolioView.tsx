"use client";

import Link from "next/link";
import { useState } from "react";
import { Chip } from "@/components/ui/Chip";
import { PostVisual } from "@/features/studio/class-wall/PostVisual";
import { useStudio, useValue } from "@/lib/learning/work-store";
import type { PortfolioItem } from "@/lib/types";

type Props = {
  name: string;
  classLine: string;
  quote: string;
  strengths: { label: string; level: number }[];
  items: PortfolioItem[];
  projects: { slug: string; title: string; status: string; hours: string }[];
  badges: { id: string; name: string; detail: string }[];
};

export function PortfolioView({ name, classLine, quote, strengths, items, projects, badges }: Props) {
  const { made } = useStudio();
  const [share, setShare] = useValue("portfolio-share-parents", true);
  const [tab, setTab] = useState<"made" | "projects" | "badges">("made");
  const top = Math.max(...strengths.map((s) => s.level));
  const madeItems: PortfolioItem[] = made.map((m) => ({ id: m.id, tag: m.from, title: m.title, learned: m.detail, chips: [], visual: { text: m.title.split(" ").slice(0, 2).join(" "), tone: "white" } }));

  return (
    <>
      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: -8, marginBottom: 12 }}>
        <label style={{ display: "inline-flex", alignItems: "center", gap: 10, fontWeight: 700, fontSize: 14, cursor: "pointer", minHeight: 44 }}>
          Share with my parents
          {/* 44px tall hit area; the visible track inside is 30px */}
          <button type="button" role="switch" aria-checked={share} onClick={() => setShare(!share)} style={{ width: 56, height: 44, border: 0, padding: 0, cursor: "pointer", background: "transparent", display: "inline-flex", alignItems: "center" }}>
            <span className="sr-only">Share with my parents</span>
            <span aria-hidden="true" style={{ position: "relative", width: 52, height: 30, borderRadius: 999, background: share ? "var(--red-deep)" : "var(--grey)" }}>
              <span style={{ position: "absolute", top: 3, left: share ? 25 : 3, width: 24, height: 24, borderRadius: 999, background: "#fff", transition: "left .15s" }} />
            </span>
          </button>
        </label>
      </div>

      <section className="s-card-ink" style={{ display: "flex", flexWrap: "wrap", gap: 24, alignItems: "center", padding: 28 }} aria-labelledby="pf-name">
        <span aria-hidden="true" className="s-title" style={{ width: 80, height: 80, borderRadius: 999, background: "var(--yellow)", color: "var(--ink)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 36, flex: "none" }}>
          {name[0]}
        </span>
        <div style={{ flex: "1 1 260px" }}>
          <p className="sm" style={{ color: "var(--muted-on-ink)" }}>{classLine}</p>
          <h1 id="pf-name" className="s-title" style={{ fontSize: "clamp(40px, 6vw, 64px)" }}>
            {name}
          </h1>
          <p className="serif" style={{ fontSize: 20, color: "var(--yellow)" }}>
            “{quote}”
          </p>
        </div>
        <div className="grid g2" style={{ gap: 8, flex: "1 1 300px" }}>
          {strengths.map((s) => (
            <div key={s.label} style={{ background: "var(--ink-2)", borderRadius: 6, padding: "10px 12px" }}>
              <p className="sm" style={{ color: "var(--muted-on-ink)" }}>{s.label}</p>
              <p className="s-title" style={{ fontSize: 22, color: s.level === top ? "var(--yellow)" : "#fff" }}>
                Level {s.level}
              </p>
            </div>
          ))}
        </div>
      </section>
      <p className="sm" role="status" style={{ marginTop: 8 }}>
        {share ? "Your parents can see this page in their view." : "Hidden from your parents. Only you and your teacher can see it."}
      </p>

      <div className="toggles" role="group" aria-label="Show" style={{ background: "var(--paper)", borderRadius: 999, padding: 4, display: "inline-flex", margin: "16px 0" }}>
        {(
          [
            ["made", "Things I made"],
            ["projects", "Projects"],
            ["badges", "Badges"],
          ] as const
        ).map(([id, label]) => (
          <button key={id} type="button" className="tog" aria-pressed={tab === id} onClick={() => setTab(id)} style={{ background: tab === id ? undefined : "transparent" }}>
            {label}
          </button>
        ))}
      </div>

      {tab === "made" && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 14 }}>
          {[...madeItems, ...items].map((it) => (
            <article key={it.id} className="s-card" style={{ padding: 14 }}>
              <PostVisual v={it.visual} height={100} />
              <p className="sm muted" style={{ marginTop: 10 }}>{it.tag}</p>
              <h2 className="s-title" style={{ fontSize: 20 }}>{it.title}</h2>
              <p className="sm" style={{ marginTop: 6 }}>
                <strong>What I learned:</strong> {it.learned}
              </p>
              {it.chips.length > 0 && (
                <p style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 8 }}>
                  {it.chips.map((c) => (
                    <Chip key={c}>{c}</Chip>
                  ))}
                </p>
              )}
            </article>
          ))}
        </div>
      )}

      {tab === "projects" && (
        <div className="grid g2" style={{ gap: 14 }}>
          {projects.map((p) => (
            <Link key={p.slug} href={`/studio/projects/${p.slug}`} className="s-card-ink" style={{ textDecoration: "none", color: "#fff", display: "block" }}>
              <p className="lbl">{p.hours}</p>
              <p className="s-title" style={{ fontSize: 28 }}>{p.title}</p>
              <p className="sm" style={{ color: "var(--muted-on-ink)", marginTop: 6 }}>{p.status}</p>
            </Link>
          ))}
        </div>
      )}

      {tab === "badges" && (
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 14 }}>
          {badges.map((b) => (
            <li key={b.id} className="s-card-yellow">
              <p className="s-title" style={{ fontSize: 22 }}>{b.name}</p>
              <p className="sm" style={{ marginTop: 6 }}>{b.detail}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
