import type { Metadata } from "next";
import { programmes, seo } from "@/content/en";
import { CourseCatalog } from "./CourseCatalog";
import styles from "./programmes.module.css";

export const metadata: Metadata = {
  title: { absolute: seo.programmes.title },
  description: seo.programmes.description,
  alternates: { canonical: "/programmes" },
};

// Same highlights as before: most schools start in 6–8; 11–12 is the capstone.
const highlight = ["", styles.red, "", styles.ink];

export default function ProgrammesPage() {
  const { hero, stages, stageLabels } = programmes;
  return (
    <>
      <section className="wrap" style={{ paddingTop: 70, paddingBottom: 60 }}>
        <p className="lbl">Programmes · Class 3 to Class 12</p>
        <h1 className="cap" style={{ fontSize: "clamp(48px, 7vw, 116px)", lineHeight: 0.9 }}>
          {hero.title}
        </h1>
        <p className="lead" style={{ maxWidth: 560, marginTop: 28 }}>
          {hero.sub}
        </p>
      </section>

      <section className="wrap" style={{ paddingBottom: 110 }}>
        <div className={styles.bands}>
          {stages.map((b, i) => (
            <div key={b.classes} className={`${styles.band} ${highlight[i]}`}>
              <p className="lbl" style={{ margin: 0 }}>
                Classes
              </p>
              <div className={styles.bnum} aria-hidden="true">
                {b.classes.replace("Classes ", "")}
              </div>
              <h2 className="cap" style={{ fontSize: 40 }}>
                <span className="sr-only">{b.classes}: </span>
                {b.title}
              </h2>
              <p className="sm">{b.line}</p>
              <p className="sm">
                <strong>{stageLabels.builds}</strong> — {b.builds}
              </p>
              <p className={`sm ${styles.align}`}>
                <strong>{stageLabels.tools}</strong> — {b.tools}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-paper">
        <div className="wrap sec">
          <p className="lbl">Course catalogue</p>
          <h2 className="cap h-l" style={{ marginBottom: 36 }}>
            {programmes.catalogue.title}
          </h2>
          <CourseCatalog />
        </div>
      </section>
    </>
  );
}
