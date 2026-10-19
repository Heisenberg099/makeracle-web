import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { courses, getCourse } from "@/content/website/programmes";
import styles from "@/app/(website)/programmes/programmes.module.css";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/programmes/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const c = getCourse(slug);
  return c ? { title: `${c.name} — ${c.tagline}`, description: `${c.builds}. ${c.classes}, ${c.duration}.` } : {};
}

export default function CoursePage({ params }: PageProps<"/programmes/[slug]">) {
  return (
    <Suspense fallback={<section className="bg-paper"><div className="wrap sec"><p className="lbl">Loading course…</p></div></section>}>
      <Course params={params} />
    </Suspense>
  );
}

async function Course({ params }: { params: PageProps<"/programmes/[slug]">["params"] }) {
  const { slug } = await params;
  const c = getCourse(slug);
  if (!c) notFound();

  const rows: [string, React.ReactNode][] = [
    ["Duration", <strong key="d">{c.duration}</strong>],
    ["Prerequisites", c.prerequisites],
    ["What students build", c.builds],
    ["Learning outcomes", c.outcomes.join(" · ")],
    ["Tools", c.tools],
    ["Devices", c.devices],
    ["Assessment", c.assessment],
    ["CBSE mapping", c.cbse],
    ["Languages", c.languages],
    ["Teacher support", c.support],
  ];
  if (c.price) rows.splice(1, 0, ["Price", c.price]);

  return (
    <section className="bg-paper">
      <div className="wrap sec" style={{ display: "flex", flexWrap: "wrap", gap: 56 }}>
        <div style={{ flex: "1 1 440px", minWidth: 0 }}>
          <p className="lbl">
            <Link href="/programmes">Programmes</Link> / {c.classes}
          </p>
          <h1 className="cap" style={{ fontSize: "clamp(56px, 6.4vw, 104px)", lineHeight: 0.9 }}>
            {c.name}
          </h1>
          <p className="lead" style={{ fontSize: 18, marginTop: 20, maxWidth: 420 }}>
            {c.tagline} — {c.builds.charAt(0).toLowerCase() + c.builds.slice(1)}.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 22 }}>
            <span className="chip chip-solid">{c.classes}</span>
            <span className="chip">{c.ages}</span>
            <span className="chip">{c.track} track</span>
            {c.types.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 32 }}>
            <Link href={`/workshops?course=${c.slug}#book`} className="btn">
              Book for my school
            </Link>
            {/* TODO(content): add syllabus PDFs to /public/syllabus/<slug>.pdf and link them here. */}
            <Link href="/contact" className="btn btn-ghost">
              Request the syllabus
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
          <details style={{ borderBottom: "1.5px solid var(--ink)", padding: "18px 0" }}>
            <summary className="ttl" style={{ fontSize: 22, cursor: "pointer" }}>
              Session-by-session outline · {c.outline.length}
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
