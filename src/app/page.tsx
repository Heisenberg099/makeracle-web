import Link from "next/link";
import { ScrollIntro } from "@/components/intro/ScrollIntro";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { HeroBurst } from "@/components/illustrations/HeroBurst";
import { ProjectIcon } from "@/components/illustrations/ProjectIcon";
import { flagshipProjects } from "@/content/home";
import { site } from "@/content/site";
import s from "./home.module.css";

export default function HomePage() {
  return (
    <>
      <ScrollIntro />
      <SiteHeader />
      <main id="main">
        <Hero />
        <HowItWorks />
        <WhatStudentsBuild />
        <Outcomes />
        <TeachersParents />
        <TrustBand />
        <Testimonials />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}

function Hero() {
  return (
    <section className={s.hero} aria-labelledby="hero-title">
      <div className={s.num} aria-hidden="true" style={{ left: 16 }}>
        20
      </div>
      <div className={s.num} aria-hidden="true" style={{ left: "60%" }}>
        26
      </div>

      <div className={s.grid}>
        <div className={s.illo}>
          <HeroBurst idPrefix="hero" />
        </div>

        <div className={`${s.c1} ${s.r1} ${s.rel}`}>
          <p className="lbl">Jump to</p>
          <nav className={s.nav} aria-label="Home sections">
            <Link href="/for-schools">For Schools</Link>
            <Link href="/programmes" style={{ paddingLeft: 18 }}>
              → Programmes
            </Link>
            <Link href="/workshops">Workshops</Link>
            <Link href="#teachers">Teachers</Link>
            <Link href="#parents">Parents</Link>
            <Link href="/safety">Safety</Link>
          </nav>
        </div>

        <div className={`${s.c2} ${s.r1} ${s.rel}`}>
          <p className="sm" style={{ fontWeight: 600 }}>
            Built for CBSE schools
          </p>
          <p className="sm muted">CT &amp; AI · AI 417 / 843</p>
        </div>

        <div className={`${s.c4} ${s.r1} ${s.rel} ${s.wide}`}>
          <h2 id="hero-title" className="cap h-s">
            From curiosity
            <br />
            to creation.
            <br />
            Class 3 makes games
            <br />
            Class 8 trains AI
            <br />
            Class 12 ships apps
            <br />
            with real users
            <br />
            and every kid gets
            <br />a portfolio…
          </h2>
        </div>

        <div className={`${s.c4} ${s.r2} ${s.rel}`} style={{ alignSelf: "center" }}>
          <p className="cap" style={{ fontSize: 26 }}>
            CT &amp; AI · compulsory
            <br />
            since April 2026
          </p>
        </div>

        <div className={`${s.c1} ${s.r3} ${s.rel}`}>
          <p className="lbl">The CBSE requirement</p>
          <p className="sm">Classes 3–5 · 50 hrs (inside Maths &amp; TWAU)</p>
          <p className="sm">Classes 6–8 · 100 hrs</p>
          <p className="sm">— CT 40 · AI 20 · Projects 40</p>
          <p className="sm">Classes 9–12 · AI 417 / 843 support</p>
          <p className="sm">Compulsory from 1 April 2026</p>
          <p className="sm" style={{ marginTop: 18 }}>
            <Link href="/for-schools#cbse" className="ul">
              See how we cover it
            </Link>
          </p>
        </div>
        <div className={`${s.c2} ${s.r3} ${s.rel}`}>
          <p className="lbl">What students build</p>
          {flagshipProjects.map((p) => (
            <p className="sm" key={p.slug}>
              <Link href={`/programmes/${p.slug}`}>
                {p.name} — {p.blurb.split(" ").slice(0, 5).join(" ")}…
              </Link>
            </p>
          ))}
        </div>
        <div className={`${s.c3} ${s.r3} ${s.rel}`}>
          <p className="lbl">Programmes</p>
          <p className="sm">Free 90-min workshop</p>
          <p className="sm">12-session term pilot</p>
          <p className="sm">Annual in-school programme</p>
          <p className="sm">Holiday bootcamps</p>
          <p className="sm">Teacher certification</p>
          <p className="sm" style={{ marginTop: 18 }}>
            <Link href="/programmes" className="ul">
              All programmes
            </Link>
          </p>
        </div>
        <div className={`${s.c4} ${s.r3} ${s.rel} ${s.wide}`}>
          <p className="cap h-s">
            CBSE made CT &amp; AI compulsory for Classes 3–8. We give your computer teacher every script, rubric and project to deliver all
            of it — no new hires.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24 }}>
            <Link href="/workshops#book" className="btn">
              Book a free workshop →
            </Link>
            <Link href="/programmes" className="btn btn-ghost">
              See programmes
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="wrap sec rule-top" aria-labelledby="how-title">
      <div style={{ display: "flex", flexWrap: "wrap", gap: 40, alignItems: "flex-start" }}>
        <div style={{ flex: "1 1 340px", minWidth: 0 }}>
          <p className="lbl">How it works</p>
          <h2 id="how-title" className="cap" style={{ fontSize: "clamp(48px, 6vw, 96px)" }}>
            Three steps.
            <br />
            No new
            <br />
            hires.
          </h2>
          <p className="body" style={{ maxWidth: 300, marginTop: 24 }}>
            Start small and free. Move to a term pilot only once your principal has seen students build something real.
          </p>
        </div>
        <div className={s.cards} style={{ flex: "2 1 760px", minWidth: 0, paddingTop: 40 }}>
          <div className={s.tcard} style={{ background: "#fff", transform: "rotate(-3deg)", marginTop: 10, position: "relative", zIndex: 1 }}>
            <p className="lbl">Step 01 · free</p>
            <h3 className="ttl" style={{ fontSize: 34, marginBottom: 14 }}>
              Free workshop
            </h3>
            <p className="body" style={{ fontSize: 13 }}>
              90 minutes. 40–60 students from Classes 7–9 build their own AI study buddy and take home a working link and a certificate.
            </p>
            <p className="sm" style={{ marginTop: 28, display: "flex", justifyContent: "space-between" }}>
              <span className="muted">Book in 2 minutes</span>
              <Link href="/workshops#book" style={{ fontWeight: 600 }}>
                Book →
              </Link>
            </p>
          </div>
          <div className={s.tcard} style={{ background: "#111", color: "#fff", transform: "rotate(2.5deg)", margin: "60px -16px 0", position: "relative", zIndex: 2 }}>
            <p className="lbl" style={{ color: "var(--muted-on-ink)" }}>
              Step 02 · one term
            </p>
            <h3 className="ttl" style={{ fontSize: 34, marginBottom: 14 }}>
              Term pilot
            </h3>
            <p className="body" style={{ fontSize: 13, color: "#e6e6e6" }}>
              12 sessions for Classes 6–8. Your computer teacher leads with minute-by-minute scripts; our mentors review work every week. Success
              criteria agreed upfront.
            </p>
            <p className="sm" style={{ marginTop: 28, display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "var(--muted-on-ink)" }}>Ends in a showcase day</span>
              <Link href="/for-schools#pilot" style={{ fontWeight: 600, color: "#fff" }}>
                Request →
              </Link>
            </p>
          </div>
          <div className={s.tcard} style={{ background: "var(--grey)", transform: "rotate(-1.5deg)", marginTop: 20, position: "relative", zIndex: 3 }}>
            <p className="lbl" style={{ color: "#4a4a4a" }}>
              Step 03 · the full year
            </p>
            <h3 className="ttl" style={{ fontSize: 34, marginBottom: 14 }}>
              Annual programme
            </h3>
            <p className="body" style={{ fontSize: 13 }}>
              Every module, teacher training and certification, a portfolio for every student and termly showcase days for parents.
            </p>
            <p className="sm" style={{ marginTop: 28, display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "#4a4a4a" }}>School licence</span>
              <Link href="/contact" style={{ fontWeight: 600 }}>
                Get a quote →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatStudentsBuild() {
  return (
    <section className="bg-paper" aria-labelledby="build-title">
      <div className="wrap sec">
        <div className="row-between" style={{ alignItems: "flex-end", marginBottom: 56 }}>
          <div>
            <p className="lbl">What students build</p>
            <h2 id="build-title" className="cap h-l">
              Five things your
              <br />
              students will actually ship.
            </h2>
          </div>
          <Link href="/programmes" className="btn btn-ghost">
            See all programmes →
          </Link>
        </div>
        <div className="grid g5 ruled">
          {flagshipProjects.map((p) => (
            <Link key={p.slug} href={`/programmes/${p.slug}`} style={{ textDecoration: "none", display: "block" }}>
              <ProjectIcon name={p.icon} />
              <p className="lbl" style={{ marginTop: 22 }}>
                {p.code} · {p.classes}
              </p>
              <h3 className="ttl" style={{ fontSize: 32 }}>
                {p.name}
              </h3>
              <p className="body" style={{ fontSize: 13, margin: "12px 0 16px" }}>
                {p.blurb}
              </p>
              {p.tools.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Outcomes() {
  const stats = ["Pilot schools", "Students building", "Portfolios published", "Completion rate"];
  return (
    <section className="wrap sec" aria-labelledby="outcomes-title">
      <div className="row-between" style={{ marginBottom: 40 }}>
        <div>
          <p className="lbl">Outcomes</p>
          <h2 id="outcomes-title" className="cap" style={{ fontSize: "clamp(40px, 4.6vw, 72px)" }}>
            We only publish
            <br />
            numbers we can prove.
          </h2>
        </div>
        <p className="body" style={{ maxWidth: 320, alignSelf: "flex-end" }}>
          These fill in from our first term pilots. Until then: no inflated stats, no “AI engineer at 12”.
        </p>
      </div>
      {/* TODO(data): replace dashes with real pilot numbers from the admin dashboard. */}
      <div className="grid g4" style={{ gap: 28 }}>
        {stats.map((label) => (
          <div key={label}>
            <div className={s.bigNum} aria-hidden="true">
              ––
            </div>
            <p className="cap" style={{ fontSize: 22, marginTop: 12 }}>
              {label}
            </p>
            <span className="sm muted">Coming after term 1</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function TeachersParents() {
  return (
    <section className="wrap" style={{ paddingBottom: 110, display: "flex", flexWrap: "wrap", gap: 24 }}>
      <div id="teachers" className="card-ink stack" style={{ flex: "1 1 480px", minWidth: 0, padding: "48px 44px", gap: 26 }}>
        <p className="lbl" style={{ color: "var(--muted-on-ink)", margin: 0 }}>
          For computer teachers
        </p>
        <h2 className="cap h-m">
          You lead.
          <br />
          We script every
          <br />
          minute.
        </h2>
        <p className="body" style={{ color: "#e6e6e6", maxWidth: 440 }}>
          Minute-by-minute lesson scripts, slides, rubrics and an offline projector mode — so you can run every session without being an AI expert.
        </p>
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
            Join the Teacher hub waitlist →
          </Link>
        </div>
      </div>
      <div id="parents" className="card stack" style={{ flex: "1 1 480px", minWidth: 0, padding: "48px 44px", gap: 26 }}>
        <p className="lbl" style={{ margin: 0 }}>
          For parents
        </p>
        <h2 className="cap h-m">
          See what they
          <br />
          made — not what
          <br />
          they watched.
        </h2>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "stretch" }}>
          <div
            className="tilt-l"
            style={{ flex: "1 1 220px", border: "1.5px solid #111", borderRadius: 6, padding: 16, background: "var(--ground)", textDecoration: "none" }}
          >
            <p className="lbl" style={{ margin: "0 0 8px" }}>
              makeracle.in/p/aarav-s
            </p>
            <div
              className="ttl"
              style={{ height: 96, borderRadius: 4, background: "#111", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}
            >
              Padhai Buddy
            </div>
            <p className="sm" style={{ marginTop: 10, fontWeight: 600 }}>
              Aarav S. · Class 8
            </p>
            <p className="sm muted">Sample portfolio · 3 projects · 4 badges</p>
          </div>
          <p className="body" style={{ flex: "1 1 200px", alignSelf: "center" }}>
            Portfolio view, termly showcase days and safe holiday bootcamps — reached through your child&apos;s school.
          </p>
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link href="/contact" className="btn btn-ghost">
            Ask about holiday bootcamps →
          </Link>
        </div>
      </div>
    </section>
  );
}

function TrustBand() {
  return (
    <section className="bg-red" aria-labelledby="trust-title">
      <div className="wrap sec" style={{ display: "flex", flexWrap: "wrap", gap: 48, justifyContent: "space-between" }}>
        <div style={{ flex: "0 1 300px" }}>
          <p className="lbl" id="trust-title">
            Trust and safety
          </p>
          <p className="body" style={{ color: "#fff" }}>
            After everything parents have seen from ed-tech, trust is the product. These are promises, written into our policies.
          </p>
          <div style={{ marginTop: 24 }}>
            <Link href="/safety" className="btn btn-white">
              Read our safety policy →
            </Link>
          </div>
        </div>
        <p className="cap white" style={{ flex: "1 1 640px", fontSize: "clamp(40px, 5.2vw, 84px)", lineHeight: 0.98 }}>
          No personal data uploads.
          <br />
          Teacher-controlled accounts.
          <br />
          No-login tools for under-13s.
          <br />
          DPDP-aligned privacy.
          <br />
          No salary promises. Ever.
        </p>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="wrap sec" aria-label="Testimonials and partners">
      <p className="lbl">From principals and teachers</p>
      {/* TODO(content): add real quotes with name, school and city after pilots. */}
      <blockquote className="serif" style={{ margin: 0, fontSize: "clamp(34px, 4vw, 60px)", lineHeight: 1.08, maxWidth: 1100 }}>
        “[Principal quote from a pilot school — added after term 1, with name, school and city.]”
      </blockquote>
      <p className="sm" style={{ marginTop: 20 }}>
        [Name] · Principal · [School], [City]
      </p>
      <div className="row-between rule-top" style={{ marginTop: 90, paddingTop: 22, alignItems: "center" }}>
        <p className="lbl" style={{ margin: 0 }}>
          Partners — schools, Sahodaya clusters, lab and CSR partners (with permission)
        </p>
        <Link href="/contact#partner" className="sm ul" style={{ fontWeight: 600 }}>
          Partner with us
        </Link>
      </div>
      <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 16, marginTop: 22 }}>
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="placeholder" style={{ height: 84 }}>
            [Partner logo]
          </div>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-paper">
      <div className="wrap sec" style={{ display: "flex", flexWrap: "wrap", gap: 40, alignItems: "flex-end", justifyContent: "space-between" }}>
        <h2 className="cap" style={{ fontSize: "clamp(56px, 8.4vw, 136px)", lineHeight: 0.92, flex: "1 1 760px" }}>
          Book a free
          <br />
          90-minute workshop
          <br />
          for your school.
        </h2>
        <div className="stack" style={{ flex: "0 1 300px" }}>
          <p className="body">40–60 students. One hall or lab. Every student leaves with a working AI study buddy and a shareable link.</p>
          <Link href="/workshops#book" className="btn btn-lg">
            Book now →
          </Link>
          <a href={site.whatsappLink} className="sm" style={{ textAlign: "center" }}>
            or WhatsApp us · {site.whatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}
