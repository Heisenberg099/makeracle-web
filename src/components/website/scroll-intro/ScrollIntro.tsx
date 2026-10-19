"use client";

import { useEffect, useRef, useState } from "react";
import { PushingStudent } from "@/components/website/illustrations/PushingStudent";
import { Logo } from "@/components/brand/Logo";
import styles from "./ScrollIntro.module.css";

/**
 * First screen of the home page. As the visitor scrolls, a student pushes the
 * black panel off to the right, revealing the full MAKERACLE wordmark; the
 * sticky stage then releases and the website scrolls in underneath.
 *
 * Scroll progress → `t` (0…1) → CSS variable `--t`. Legs swing with distance
 * travelled, so the student "walks" only while you scroll.
 * Reduced-motion users get the finished frame without the long scroll.
 */
export function ScrollIntro() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [t, setT] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (reduced) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = trackRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const p = scrollable > 0 ? Math.min(1, Math.max(0, -rect.top / scrollable)) : 1;
      // Push happens between 4% and 88% of the track; the rest is a pause.
      const pushed = Math.min(1, Math.max(0, (p - 0.04) / 0.84));
      setT(pushed);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [reduced]);

  const shown = reduced ? 1 : t;
  // Ease so the first push feels heavy, then the panel gives way.
  const eased = shown < 0.5 ? 2 * shown * shown : 1 - Math.pow(-2 * shown + 2, 2) / 2;
  const stride = reduced ? 0 : Math.sin(shown * 26);

  return (
    <section
      ref={trackRef}
      className={`${styles.track}${reduced ? ` ${styles.static}` : ""}`}
      aria-label="Makeracle — from curiosity to creation"
    >
      <div className={styles.stage} style={{ "--t": eased } as React.CSSProperties}>
        <div className={styles.brand}>
          <Logo size={30} />
        </div>

        <p className={`${styles.tagline} cap`} style={{ fontSize: "clamp(20px, 2.2vw, 30px)" }}>
          From curiosity
          <br />
          to creation.
          <span className="sm muted" style={{ display: "block", textTransform: "none", fontStretch: "100%", marginTop: 10 }}>
            AI, web &amp; app projects · Classes 3–12
          </span>
        </p>

        <h1 className={styles.title}>
          <span>Make</span>
          <span>racle</span>
        </h1>

        <div className={styles.panel} aria-hidden="true">
          <p className={styles.panelNote}>keep pushing →</p>
        </div>

        <div className={styles.student} aria-hidden="true">
          <PushingStudent stride={eased >= 1 ? 0 : stride} />
        </div>

        <div className={styles.hint} aria-hidden="true" style={{ opacity: 1 - eased }}>
          <p className="sm muted">Scroll to help them push</p>
          <div className={styles.bar}>
            <span />
          </div>
          <p className="sm">Students build real AI, web and app projects — in school.</p>
        </div>

        <div className={styles.done}>
          <span>Come on in</span>
          <svg className={styles.arrow} width="16" height="22" viewBox="0 0 16 22" aria-hidden="true">
            <path d="M8 1 V20 M1 13 L8 20 L15 13" stroke="#111" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>
    </section>
  );
}
