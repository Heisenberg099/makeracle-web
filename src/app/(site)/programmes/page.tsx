import type { Metadata } from "next";
import { bands } from "@/content/programmes";
import { CourseCatalog } from "./CourseCatalog";
import styles from "./programmes.module.css";

export const metadata: Metadata = {
  title: "Programmes — CBSE CT & AI curriculum by class",
  description: "Class-wise AI, web, app and data programmes for Classes 3–12, mapped to the CBSE CT & AI curriculum, AI 417 and AI 843.",
};

export default function ProgrammesPage() {
  return (
    <>
      <section className="wrap" style={{ paddingTop: 70, paddingBottom: 60 }}>
        <p className="lbl">Programmes · by class band</p>
        <h1 className="cap" style={{ fontSize: "clamp(56px, 8.6vw, 140px)", lineHeight: 0.9 }}>
          Pick a class.
          <br />
          <span className="ink">See what they&apos;ll build.</span>
        </h1>
      </section>

      <section className="wrap" style={{ paddingBottom: 110 }}>
        <div className={styles.bands}>
          {bands.map((b) => (
            <div key={b.id} id={`band-${b.id}`} className={`${styles.band} ${b.highlight === "red" ? styles.red : b.highlight === "ink" ? styles.ink : ""}`}>
              <p className="lbl" style={{ margin: 0 }}>
                Classes{b.note ? ` · ${b.note}` : ""}
              </p>
              <div className={styles.bnum} aria-hidden="true">
                {b.classes}
              </div>
              <h2 className="cap" style={{ fontSize: 40 }}>
                {b.theme}
              </h2>
              <p className="sm">
                <strong>Skills</strong> — {b.skills}
              </p>
              <p className="sm">
                <strong>Tools</strong> — {b.tools}
              </p>
              <p className="sm">
                <strong>They ship</strong> — {b.ships}
              </p>
              <p className={`sm ${styles.align}`}>{b.alignment}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-paper">
        <div className="wrap sec">
          <p className="lbl">Course catalogue</p>
          <h2 className="cap h-l" style={{ marginBottom: 36 }}>
            Every course.
            <br />
            Filter by how you buy.
          </h2>
          <CourseCatalog />
        </div>
      </section>
    </>
  );
}
