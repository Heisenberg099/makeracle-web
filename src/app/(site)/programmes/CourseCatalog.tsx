"use client";

import Link from "next/link";
import { useState } from "react";
import { courses, programmeFormats, programmes, type ProgrammeFormat } from "@/content/en";
import styles from "./programmes.module.css";

export function CourseCatalog() {
  const { catalogue } = programmes;
  const [format, setFormat] = useState<ProgrammeFormat | "All">("All");

  const shown = courses.filter((c) => format === "All" || c.formats.includes(format));

  return (
    <div>
      <div role="group" aria-label={catalogue.filterLabel} className="toggles">
        {(["All", ...programmeFormats] as const).map((f) => (
          <button key={f} type="button" className="tog" aria-pressed={format === f} onClick={() => setFormat(f)}>
            {f === "All" ? catalogue.all : f}
          </button>
        ))}
      </div>

      <p className="sm muted" role="status" style={{ marginTop: 18 }}>
        {catalogue.count(shown.length)}
      </p>
      <div className={styles.courses}>
        {shown.map((c) => (
          <Link key={c.slug} href={`/programmes/${c.slug}`} className={styles.course}>
            <p className="lbl" style={{ margin: 0 }}>
              {c.classes} · {c.track} · {c.sessions}
            </p>
            <h3 className="ttl" style={{ fontSize: 34 }}>
              {c.name}
            </h3>
            <p className="body">{c.tagline}.</p>
            <div>
              {c.formats.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
            <span className="sm" style={{ fontWeight: 600, marginTop: "auto" }}>
              {catalogue.view} →
            </span>
          </Link>
        ))}
        {shown.length === 0 && <p className="body">{catalogue.empty}</p>}
      </div>
    </div>
  );
}
