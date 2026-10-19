import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { courses, getCourse, programmes } from "@/content/en";
import styles from "../programmes.module.css";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/programmes/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const c = getCourse(slug);
  return c
    ? {
        title: { absolute: `${c.name}: ${c.tagline} · makeracle` },
        description: `${c.builds}. ${c.classes}, ${c.sessions}.`,
        alternates: { canonical: `/programmes/${c.slug}` },
      }
    : {};
}

export default function CoursePage({ params }: PageProps<"/programmes/[slug]">) {
  return (
    <Suspense
      fallback={
        <section className="bg-paper">
          <div className="wrap sec">
            <p className="lbl">Loading course…</p>
          </div>
        </section>
      }
    >
      <Course params={params} />
    </Suspense>
  );
}

async function Course({ params }: { params: PageProps<"/programmes/[slug]">["params"] }) {
  const { slug } = await params;
  const c = getCourse(slug);
  if (!c) notFound();
  const L = programmes.course.rows;

  const rows: [string, React.ReactNode][] = [
    [L.classes, <strong key="c">{c.classes}</strong>],
    [L.track, c.track],
    [L.format, c.formats.join(" · ")],
    [L.sessions, c.sessions],
    [L.prerequisites, c.prerequisites],
    [L.builds, c.builds],
    [L.tools, c.tools],
    [L.devices, c.devices],
    [L.assessment, c.assessment],
    [L.cbse, c.cbse],
    [L.languages, c.languages],
  ];

  return (
    <section className="bg-paper">
      <div className="wrap sec" style={{ display: "flex", flexWrap: "wrap", gap: 56 }}>
        <div style={{ flex: "1 1 440px", minWidth: 0 }}>
          <p className="lbl">
            <Link href="/programmes">{programmes.course.breadcrumb}</Link> / {c.classes}
          </p>
          <h1 className="cap" style={{ fontSize: "clamp(56px, 6.4vw, 104px)", lineHeight: 0.9 }}>
            {c.name}
          </h1>
          <p className="lead" style={{ fontSize: 18, marginTop: 20, maxWidth: 420 }}>
            {c.tagline}.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 22 }}>
            <span className="chip chip-solid">{c.classes}</span>
            <span className="chip">{c.track}</span>
            {c.formats.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>

          <h2 className="ttl" style={{ fontSize: 22, marginTop: 40 }}>
            {programmes.course.outcomes}
          </h2>
          <ul style={{ margin: "12px 0 0", paddingLeft: 20, fontSize: 14, lineHeight: 1.8 }}>
            {c.outcomes.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>

          <div className="placeholder" style={{ marginTop: 32, minHeight: 120 }}>
            <span>
              <strong>{programmes.course.sample}</strong>
              <br />
              {c.sample}
            </span>
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 32 }}>
            <Link href={`/workshops?course=${c.slug}#book`} className="btn">
              {programmes.course.button} →
            </Link>
          </div>
        </div>
        <div style={{ flex: "1 1 560px", minWidth: 0, borderTop: "1.5px solid var(--ink)" }}>
          <dl style={{ margin: 0 }}>
            {rows.map(([k, v]) => (
              <div key={k} className={styles.row}>
                <dt className="muted">{k}</dt>
                <dd style={{ margin: 0 }}>{v}</dd>
              </div>
            ))}
          </dl>
          <details open style={{ borderBottom: "1.5px solid var(--ink)", padding: "18px 0" }}>
            <summary className="ttl" style={{ fontSize: 22, cursor: "pointer" }}>
              {programmes.course.outline} · {c.outline.length}
            </summary>
            <ol style={{ margin: "14px 0 0", paddingLeft: 22, fontSize: 13, lineHeight: 1.8 }}>
              {c.outline.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ol>
          </details>
        </div>
      </div>
    </section>
  );
}
