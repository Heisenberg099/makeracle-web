import type { Metadata } from "next";
import Link from "next/link";
import { ScrollIntro } from "@/components/intro/ScrollIntro";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AlumniBar } from "@/components/AlumniBar";
import { Icon } from "@/components/Icon";
import { HeroBurst } from "@/components/illustrations/HeroBurst";
import { ProjectIcon } from "@/components/illustrations/ProjectIcon";
import { common, flagshipProjects, home, seo } from "@/content/en";
import { site } from "@/content/site";
import s from "./home.module.css";

export const metadata: Metadata = {
  title: { absolute: seo.home.title },
  description: seo.home.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <ScrollIntro />
      <SiteHeader />
      <main id="main">
        {/* Hero + alumni bar fill exactly one screen below the header */}
        <div className={s.screen}>
          <Hero />
          <AlumniBar />
        </div>
        <BookStrip />
        <CbseRequirement />
        <HowItWorks />
        <WhatStudentsBuild />
        <WhySchools />
        <Outcomes />
        <Testimonials />
        <TeachersParents />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}

function Hero() {
  const { hero } = home;
  const [eyebrowA, eyebrowB] = hero.eyebrow.split(" · ");
  return (
    <section className={s.hero} aria-labelledby="hero-title">
      <div className={s.num} aria-hidden="true" style={{ left: 16 }}>
        20
      </div>
      <div className={s.num} aria-hidden="true" style={{ left: "60%" }}>
        26
      </div>

      <div className={s.grid}>
        {/* TODO(content): swap for real workshop photos / a short silent loop (with consent). */}
        <div className={s.illo}>
          <HeroBurst idPrefix="hero" />
        </div>

        <div className={`${s.c1} ${s.r1} ${s.rel}`}>
          <p className="cap" style={{ fontSize: "clamp(26px, 2.6vw, 40px)", lineHeight: 0.95 }}>
            <span className="ink">{eyebrowA}</span>
            <br />
            {eyebrowB}
          </p>
        </div>

        <div className={`${s.c4} ${s.r1} ${s.rel} ${s.wide}`}>
          <h1 id="hero-title" className="cap" style={{ fontSize: "clamp(48px, 6.4vw, 104px)", lineHeight: 0.9 }}>
            From curiosity
            <br />
            to creation.
          </h1>
        </div>

      </div>
    </section>
  );
}

/** Trust points, sub-line and the booking buttons, just below the alumni bar. */
function BookStrip() {
  const { hero } = home;
  return (
    <section className={s.book} aria-label={common.cta.book}>
      {hero.trust.map((t, i) => (
        <div key={t}>
          <p className="lbl">0{i + 1}</p>
          <p className="cap" style={{ fontSize: 26 }}>
            {t}
          </p>
        </div>
      ))}
      <div className={s.bookMain}>
        <p className="lead">{hero.sub}</p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24 }}>
          <Link href="/workshops#book" className="btn">
            {common.cta.book} →
          </Link>
          <Link href="#how-it-works" className="btn btn-ghost">
            {common.cta.howItWorks}
          </Link>
        </div>
      </div>
    </section>
  );
}

function CbseRequirement() {
  const { cbse } = home;
  return (
    <section className="wrap sec" aria-labelledby="cbse-title">
      <div className="row-between" style={{ marginBottom: 40 }}>
        <div style={{ maxWidth: 900 }}>
          <p className="lbl">The CBSE requirement</p>
          <h2 id="cbse-title" className="cap" style={{ fontSize: "clamp(36px, 4.4vw, 68px)" }}>
            {cbse.title}
          </h2>
        </div>
      </div>
      <p className="lead" style={{ maxWidth: 720 }}>
        {cbse.body}
      </p>
      <div className="grid g3 ruled" style={{ marginTop: 48 }}>
        {cbse.stats.map((x) => (
          <div key={x.num}>
            <p className="cap" style={{ fontSize: "clamp(30px, 3vw, 44px)" }}>
              {x.num}
            </p>
            <p className="sm" style={{ marginTop: 10 }}>
              {x.label}
            </p>
          </div>
        ))}
      </div>
      <p className="sm" style={{ marginTop: 28 }}>
        <Link href="/for-schools#cbse" className="ul" style={{ fontWeight: 600 }}>
          {cbse.link} →
        </Link>
      </p>
    </section>
  );
}

const stepCards = [
  { bg: "#fff", color: undefined, tilt: "rotate(-3deg)", margin: "10px 0 0", z: 1, lbl: undefined, body: undefined },
  { bg: "#111", color: "#fff", tilt: "rotate(2.5deg)", margin: "60px -16px 0", z: 2, lbl: "var(--muted-on-ink)", body: "#e6e6e6" },
  { bg: "var(--grey)", color: undefined, tilt: "rotate(-1.5deg)", margin: "20px 0 0", z: 3, lbl: "#4a4a4a", body: undefined },
];

function HowItWorks() {
  const { how } = home;
  return (
    <section id="how-it-works" className="wrap sec rule-top" aria-labelledby="how-title" style={{ scrollMarginTop: 80 }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 40, alignItems: "flex-start" }}>
        <div style={{ flex: "1 1 340px", minWidth: 0 }}>
          <p className="lbl">How it works</p>
          <h2 id="how-title" className="cap" style={{ fontSize: "clamp(48px, 6vw, 96px)" }}>
            {how.title}
          </h2>
          <div style={{ marginTop: 28 }}>
            <Link href="/workshops#book" className="btn">
              {how.button} →
            </Link>
          </div>
        </div>
        <ol className={s.cards} style={{ flex: "2 1 760px", minWidth: 0, paddingTop: 40, listStyle: "none", margin: 0, paddingLeft: 0 }}>
          {how.steps.map((step, i) => {
            const c = stepCards[i];
            return (
              <li
                key={step.title}
                className={s.tcard}
                style={{ background: c.bg, color: c.color, transform: c.tilt, margin: c.margin, position: "relative", zIndex: c.z }}
              >
                <p className="lbl" style={{ color: c.lbl }}>
                  {how.stepLabel} 0{i + 1}
                </p>
                <h3 className="ttl" style={{ fontSize: 34, marginBottom: 14 }}>
                  {step.title}
                </h3>
                <p className="body" style={{ fontSize: 13, color: c.body }}>
                  {step.body}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function WhatStudentsBuild() {
  const { build } = home;
  return (
    <section className="bg-paper" aria-labelledby="build-title">
      <div className="wrap sec">
        <div className="row-between" style={{ alignItems: "flex-end", marginBottom: 56 }}>
          <div>
            <p className="lbl">What students build</p>
            <h2 id="build-title" className="cap h-l">
              {build.title}
            </h2>
          </div>
          <Link href="/programmes" className="btn btn-ghost">
            {build.button} →
          </Link>
        </div>
        <div className="grid g5 ruled">
          {flagshipProjects.map((p, i) => (
            <Link key={p.slug} href={`/programmes/${p.slug}`} style={{ textDecoration: "none", display: "block" }}>
              <ProjectIcon name={p.icon as "chat" | "web" | "app" | "scale" | "data"} />
              <p className="lbl" style={{ marginTop: 22 }}>
                P/0{i + 1} · {p.classes}
              </p>
              <h3 className="ttl" style={{ fontSize: 32 }}>
                {p.name}
              </h3>
              <p className="body" style={{ fontSize: 13, marginTop: 12 }}>
                {p.line}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySchools() {
  const { why } = home;
  return (
    <section className="bg-ink" aria-labelledby="why-title">
      <div className="wrap sec">
        <p className="lbl">Why schools choose makeracle</p>
        <h2 id="why-title" className="cap h-l" style={{ marginBottom: 48 }}>
          {why.title}
        </h2>
        <div className="grid g4 ruled">
          {why.points.map((p) => (
            <div key={p.title}>
              <span className="icon-ink">
                <Icon name={p.icon} size={40} strokeWidth={1.6} />
              </span>
              <h3 className="ttl" style={{ fontSize: 26, marginTop: 16 }}>
                {p.title}
              </h3>
              <p className="sm" style={{ marginTop: 10, color: "#d6d6d6" }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Hidden until real pilot numbers exist (home.outcomes.show in en.ts). */
function Outcomes() {
  const { outcomes } = home;
  if (!outcomes.show) return null;
  return (
    <section className="wrap sec" aria-labelledby="outcomes-title">
      <p className="lbl">Outcomes</p>
      <h2 id="outcomes-title" className="cap" style={{ fontSize: "clamp(40px, 4.6vw, 72px)", marginBottom: 40 }}>
        {outcomes.title}
      </h2>
      <div className="grid g4" style={{ gap: 28 }}>
        {outcomes.stats.map((x) => (
          <div key={x.label}>
            <div className={s.bigNum}>{x.num}</div>
            <p className="cap" style={{ fontSize: 22, marginTop: 12 }}>
              {x.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/** Real, signed-off quotes only. Hidden while home.testimonials is empty. */
function Testimonials() {
  const { testimonials } = home;
  if (testimonials.length === 0) return null;
  return (
    <section className="wrap sec" aria-label="What principals and teachers say">
      <p className="lbl">From principals and teachers</p>
      <div className="grid g2" style={{ gap: 48 }}>
        {testimonials.map((t) => (
          <figure key={t.name} style={{ margin: 0 }}>
            <blockquote className="serif" style={{ margin: 0, fontSize: "clamp(28px, 3vw, 44px)", lineHeight: 1.1 }}>
              “{t.quote}”
            </blockquote>
            <figcaption className="sm" style={{ marginTop: 20 }}>
              {t.name} · {t.role} · {t.school}, {t.city}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function TeachersParents() {
  const { teachers, parents } = home.audiences;
  return (
    <section className="wrap sec" style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
      <div id="teachers" className="card-ink stack" style={{ flex: "1 1 480px", minWidth: 0, padding: "48px 44px", gap: 26 }}>
        <p className="lbl" style={{ color: "var(--muted-on-ink)", margin: 0 }}>
          {teachers.eyebrow}
        </p>
        <h2 className="cap h-m">{teachers.body}</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center" }}>
          <span className="chip chip-red" style={{ padding: "10px 16px", fontSize: 13, fontWeight: 600, margin: 0 }}>
            Facilitator
          </span>
          <span style={{ color: "var(--muted-on-ink)" }}>→</span>
          <span className="chip" style={{ padding: "10px 16px", fontSize: 13, fontWeight: 600, margin: 0 }}>
            Builder
          </span>
          <span style={{ color: "var(--muted-on-ink)" }}>→</span>
          <span className="chip" style={{ padding: "10px 16px", fontSize: 13, fontWeight: 600, margin: 0, color: "#bdbdbd" }}>
            Mentor
          </span>
        </div>
        <div>
          <Link href="/teachers" className="btn">
            {teachers.link} →
          </Link>
        </div>
      </div>
      <div id="parents" className="card stack" style={{ flex: "1 1 480px", minWidth: 0, padding: "48px 44px", gap: 26 }}>
        <p className="lbl" style={{ margin: 0 }}>
          {parents.eyebrow}
        </p>
        <h2 className="cap h-m">{parents.body}</h2>
        <div>
          <Link href="/parents#sample-portfolio" className="btn btn-ghost">
            {parents.link} →
          </Link>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  const { final } = home;
  return (
    <section className="bg-ink">
      <div className="wrap sec" style={{ display: "flex", flexWrap: "wrap", gap: 40, alignItems: "flex-end", justifyContent: "space-between" }}>
        <h2 className="cap" style={{ fontSize: "clamp(48px, 7vw, 116px)", lineHeight: 0.92, flex: "1 1 700px" }}>
          {final.title}
        </h2>
        <div className="stack" style={{ flex: "0 1 320px" }}>
          <p className="body" style={{ color: "#e6e6e6" }}>
            {final.body}
          </p>
          <Link href="/workshops#book" className="btn btn-lg">
            {common.cta.book} →
          </Link>
          <a href={site.whatsappLink} className="sm" style={{ textAlign: "center", color: "#fff" }}>
            {final.whatsapp} · {site.whatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}
