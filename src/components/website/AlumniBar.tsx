"use client";

import { useEffect, useRef } from "react";
import { alumni } from "@/content/website/site";
import { common } from "@/content/website/en";

const SPEED = 30; // px per second

/**
 * "Built by alumni of" strip. Scrolls right to left in a seamless loop
 * (the list is duplicated once), pauses on hover and keyboard focus, and
 * sits still and centred when the visitor has "reduce motion" on (CSS).
 * Text names only until each institute gives written permission for its logo.
 */
export function AlumniBar() {
  const listRef = useRef<HTMLUListElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Set the loop duration from the real width so the speed stays ~30px/s.
  useEffect(() => {
    const list = listRef.current;
    const track = trackRef.current;
    if (!list || !track) return;
    const update = () => track.style.setProperty("--alumni-duration", `${Math.max(list.offsetWidth / SPEED, 4)}s`);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(list);
    return () => ro.disconnect();
  }, []);

  // Repeat names so one copy is always wider than the strip; the track then holds two copies.
  const items = [...alumni, ...alumni, ...alumni];

  const renderList = (hidden: boolean) => (
    <ul className="alumni-list" ref={hidden ? undefined : listRef} aria-hidden={hidden || undefined}>
      {items.map((a, i) => (
        <li
          key={`${a.name}-${i}`}
          className={`alumni-item${i >= alumni.length ? " alumni-rep" : ""}`}
          aria-hidden={!hidden && i >= alumni.length ? true : undefined}
        >
          {a.logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={a.logo} alt={`${a.name} logo`} />
          ) : (
            <span title={a.fullName}>{a.name}</span>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <section className="alumni" aria-label={common.alumni.label}>
      <div className="wrap">
        <div className="alumni-strip">
          <p className="alumni-label">{common.alumni.label}</p>
          <div className="alumni-viewport" tabIndex={0} aria-label={`${common.alumni.label}: ${alumni.map((a) => a.name).join(", ")}`}>
            <div className="alumni-track" ref={trackRef}>
              {renderList(false)}
              {renderList(true)}
            </div>
          </div>
        </div>
      </div>
      <div style={{ borderTop: "1px solid var(--line)" }}>
        <p className="wrap alumni-note">{common.alumni.disclaimer}</p>
      </div>
    </section>
  );
}
