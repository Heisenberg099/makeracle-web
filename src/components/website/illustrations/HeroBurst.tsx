"use client";

import { useEffect, useRef } from "react";

/**
 * Hero illustration: an open book (the logo shape) with the things students
 * make rising out of it. Every floating icon can be dragged; when let go it
 * drifts slowly back to its place like a bubble. Icons drift
 * out of the way of the one you're dragging. Pure SVG, no assets.
 *
 * Positions live in refs and are written straight to each <g>'s transform,
 * so dragging never re-renders React.
 */

type Id =
  | "cap"
  | "puzzle"
  | "globe"
  | "laptop"
  | "network"
  | "chat"
  | "phone"
  | "robot"
  | "controller"
  | "certificate"
  | "magnifier"
  | "chart"
  | "plane"
  | "bulb";

/** x, y = resting position (viewBox units); r = push radius while dragging; s = scale; rot = tilt (deg). */
type Item = { id: Id; title: string; x: number; y: number; r: number; s: number; rot: number };

// A loose, hand-scattered burst out of the book: uneven spacing, tilts and
// sizes on purpose. Overlaps at rest are fine.
const ITEMS: Item[] = [
  { id: "globe", title: "Portfolio on the web", x: 322, y: 58, r: 28, s: 0.78, rot: 0 },
  { id: "cap", title: "Learning", x: 168, y: 64, r: 54, s: 0.84, rot: -9 },
  { id: "puzzle", title: "Coding basics", x: 54, y: 118, r: 30, s: 0.8, rot: -18 },
  { id: "network", title: "How AI learns", x: 226, y: 150, r: 32, s: 0.8, rot: 12 },
  { id: "chat", title: "AI chatbot", x: 316, y: 176, r: 44, s: 0.76, rot: 7 },
  { id: "laptop", title: "Websites", x: 104, y: 206, r: 48, s: 0.8, rot: 5 },
  { id: "robot", title: "AI", x: 200, y: 262, r: 42, s: 0.84, rot: -7 },
  { id: "phone", title: "Apps", x: 42, y: 300, r: 35, s: 0.78, rot: -8 },
  { id: "controller", title: "Games", x: 326, y: 286, r: 34, s: 0.82, rot: 15 },
  { id: "certificate", title: "Certificate", x: 120, y: 340, r: 36, s: 0.82, rot: -13 },
  { id: "magnifier", title: "Data detective", x: 246, y: 344, r: 30, s: 0.86, rot: 20 },
  { id: "chart", title: "Data stories", x: 334, y: 386, r: 38, s: 0.7, rot: -10 },
  { id: "plane", title: "Ship it", x: 66, y: 418, r: 29, s: 0.86, rot: -16 },
  { id: "bulb", title: "Curiosity", x: 282, y: 424, r: 34, s: 0.76, rot: 13 },
];

const W = 380;
const H = 580;
const STIFFNESS = 3; // spring pull back home (per s²) — low = slow, bubble-like
const DAMPING = 3.2; // just under critical: settles with no bounce
const MAX_SPEED = 420;
const GAP = 4; // extra room the dragged icon clears around others

type Body = { x: number; y: number; vx: number; vy: number; phase: number; tilt: number };
type Drag = { i: number; pointerId: number; dx: number; dy: number; lastX: number; lastY: number; lastT: number; vx: number; vy: number };

export function HeroBurst({ className, idPrefix = "hb" }: { className?: string; idPrefix?: string }) {
  const a = `${idPrefix}-a`;
  const b = `${idPrefix}-b`;
  const svgRef = useRef<SVGSVGElement>(null);
  const nodes = useRef<(SVGGElement | null)[]>([]);
  const bodies = useRef<Body[]>(ITEMS.map((it, i) => ({ x: it.x, y: it.y, vx: 0, vy: 0, phase: i * 1.7, tilt: 0 })));
  const drag = useRef<Drag | null>(null);
  const endDragRef = useRef<() => void>(() => {});

  // Physics loop: spring home + idle bob, keep icons apart, write transforms.
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let last = performance.now();
    let visible = true;

    const step = (now: number) => {
      const dt = Math.min(0.033, (now - last) / 1000);
      last = now;
      const t = now / 1000;
      const still = reduced.matches;
      const bs = bodies.current;
      const held = drag.current?.i ?? -1;

      bs.forEach((p, i) => {
        if (i === held) return;
        const home = ITEMS[i];
        const hx = home.x + (still ? 0 : Math.cos(t * 0.6 + p.phase) * 2);
        const hy = home.y + (still ? 0 : Math.sin(t * 0.8 + p.phase) * 3);
        p.tilt = still ? 0 : Math.sin(t * 0.7 + p.phase * 1.3) * 2.5;
        if (still) {
          p.x = hx;
          p.y = hy;
          p.vx = p.vy = 0;
          return;
        }
        p.vx += (STIFFNESS * (hx - p.x) - DAMPING * p.vx) * dt;
        p.vy += (STIFFNESS * (hy - p.y) - DAMPING * p.vy) * dt;
        const sp = Math.hypot(p.vx, p.vy);
        if (sp > MAX_SPEED) {
          p.vx *= MAX_SPEED / sp;
          p.vy *= MAX_SPEED / sp;
        }
        p.x += p.vx * dt;
        p.y += p.vy * dt;
      });

      // Only the icon you're holding pushes others aside; everything else may
      // overlap and glides back home through its neighbours, like bubbles.
      if (held >= 0) {
        const h = bs[held];
        bs.forEach((q, j) => {
          if (j === held) return;
          let dx = q.x - h.x;
          let dy = q.y - h.y;
          let d = Math.hypot(dx, dy);
          const min = ITEMS[held].r + ITEMS[j].r + GAP;
          if (d >= min) return;
          if (d < 0.01) {
            dx = 1;
            dy = 0;
            d = 1;
          }
          // Ease out of the way rather than jump.
          const push = (min - d) * 0.35;
          q.x += (dx / d) * push;
          q.y += (dy / d) * push;
        });
      }

      bs.forEach((p, i) => {
        const { r, s, rot } = ITEMS[i];
        p.x = Math.min(W - r * 0.6, Math.max(r * 0.6, p.x));
        p.y = Math.min(H - r * 0.6, Math.max(r * 0.6, p.y));
        nodes.current[i]?.setAttribute("transform", `translate(${p.x.toFixed(2)} ${p.y.toFixed(2)}) rotate(${(rot + p.tilt).toFixed(2)}) scale(${s})`);
      });

      frame = visible ? requestAnimationFrame(step) : 0;
    };

    const start = () => {
      if (!frame) {
        last = performance.now();
        frame = requestAnimationFrame(step);
      }
    };

    // Only animate while on screen (saves battery on phones).
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) start();
    });
    io.observe(svg);
    start();

    return () => {
      io.disconnect();
      if (frame) cancelAnimationFrame(frame);
      endDragRef.current();
    };
  }, []);

  const toSvg = (clientX: number, clientY: number) => {
    const m = svgRef.current?.getScreenCTM();
    if (!m) return { x: 0, y: 0 };
    const pt = new DOMPoint(clientX, clientY).matrixTransform(m.inverse());
    return { x: pt.x, y: pt.y };
  };

  /**
   * Dragging listens on the window, not the icon, so letting go anywhere —
   * outside the illustration, outside the window, or a cancelled gesture —
   * always drops the icon. A mouse move with no button pressed also ends the
   * drag, in case a release was missed.
   */
  const startDrag = (i: number) => (e: React.PointerEvent<SVGGElement>) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    e.preventDefault();
    endDragRef.current();

    const p = toSvg(e.clientX, e.clientY);
    const body = bodies.current[i];
    drag.current = { i, pointerId: e.pointerId, dx: body.x - p.x, dy: body.y - p.y, lastX: p.x, lastY: p.y, lastT: performance.now(), vx: 0, vy: 0 };
    body.vx = body.vy = 0;
    const node = nodes.current[i];
    if (node) node.style.cursor = "grabbing";

    const end = () => {
      const d = drag.current;
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
      window.removeEventListener("blur", end);
      document.removeEventListener("visibilitychange", end);
      endDragRef.current = () => {};
      if (!d) return;
      const b = bodies.current[d.i];
      b.vx = d.vx * 0.35;
      b.vy = d.vy * 0.35;
      const n = nodes.current[d.i];
      if (n) n.style.cursor = "grab";
      drag.current = null;
    };
    const move = (ev: PointerEvent) => {
      const d = drag.current;
      if (!d || ev.pointerId !== d.pointerId) return;
      if (ev.pointerType === "mouse" && ev.buttons === 0) return end();
      const q = toSvg(ev.clientX, ev.clientY);
      const now = performance.now();
      const dt = Math.max(1, now - d.lastT) / 1000;
      d.vx = d.vx * 0.6 + ((q.x - d.lastX) / dt) * 0.4;
      d.vy = d.vy * 0.6 + ((q.y - d.lastY) / dt) * 0.4;
      d.lastX = q.x;
      d.lastY = q.y;
      d.lastT = now;
      const b = bodies.current[d.i];
      b.x = q.x + d.dx;
      b.y = q.y + d.dy;
    };
    const up = (ev: PointerEvent) => {
      if (drag.current && ev.pointerId === drag.current.pointerId) end();
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
    window.addEventListener("blur", end);
    document.addEventListener("visibilitychange", end);
    endDragRef.current = end;
  };

  const label = { fontFamily: "Archivo, sans-serif", fontWeight: 700, stroke: "none", dominantBaseline: "central" as const, textAnchor: "middle" as const };

  // Each icon is drawn around (0, 0); the group's transform places and scales it.
  const art: Record<Id, React.ReactNode> = {
    // Learning: graduation cap
    cap: (
      <>
        <path d="M-42 6 V32 Q0 50 42 32 V6" fill="#fff" />
        <path d="M0 -32 L70 -4 L0 24 L-70 -4 Z" fill="#fff" />
        <path d="M0 -32 L70 -4 L0 24 L-70 -4 Z" fill={`url(#${b})`} />
        <path d="M0 -4 Q36 -2 62 0 V30" fill="none" />
        <rect x="56" y="28" width="12" height="18" rx="3" fill="#111" />
      </>
    ),
    // Coding basics: a Scratch-style puzzle block
    puzzle: (
      <>
        <path d="M-26 -22 H-9 A9 9 0 1 1 9 -22 H26 V-5 A9 9 0 1 1 26 13 V30 H-26 Z" fill="#ff2d46" />
        <path d="M-14 4 H8" fill="none" stroke="#fff" />
      </>
    ),
    // Portfolio on the web: globe
    globe: (
      <>
        <circle r="28" fill="#fff" />
        <ellipse rx="11" ry="28" fill="none" />
        <path d="M-28 0 H28 M-24 -14 H24 M-24 14 H24" fill="none" strokeWidth="2.5" />
      </>
    ),
    // Websites: laptop with code
    laptop: (
      <g transform="rotate(-10)">
        <rect x="-50" y="-38" width="100" height="64" rx="7" fill="#fff" />
        <rect x="-41" y="-29" width="82" height="46" rx="3" fill={`url(#${b})`} />
        <path d="M-60 32 H60 L51 45 H-51 Z" fill="#fff" />
        <rect x="-27" y="-18" width="54" height="24" rx="4" fill="#fff" />
        <text x="0" y="-6" fontSize="16" fill="#111" {...label}>
          &lt;/&gt;
        </text>
      </g>
    ),
    // How AI learns: a small neural network
    network: (
      <>
        <path d="M-28 -16 L0 -24 M-28 -16 L0 0 M-28 -16 L0 24 M-28 16 L0 -24 M-28 16 L0 0 M-28 16 L0 24 M0 -24 L28 0 M0 0 L28 0 M0 24 L28 0" fill="none" strokeWidth="2" />
        <circle cx="-28" cy="-16" r="7" fill="#fff" />
        <circle cx="-28" cy="16" r="7" fill="#fff" />
        <circle cx="0" cy="-24" r="7" fill={`url(#${a})`} />
        <circle cx="0" cy="0" r="7" fill="#fff" />
        <circle cx="0" cy="24" r="7" fill={`url(#${a})`} />
        <circle cx="28" cy="0" r="8" fill="#ff2d46" />
      </>
    ),
    // AI chatbot: speech bubble
    chat: (
      <>
        <path d="M-51 -34 H39 Q51 -34 51 -22 V14 Q51 26 39 26 H-9 L-27 44 L-25 26 H-39 Q-51 26 -51 14 V-22 Q-51 -34 -39 -34 Z" fill="#fff" />
        <text x="0" y="-4" fontSize="22" fill="#ff2d46" {...label}>
          Hi!
        </text>
      </>
    ),
    // Apps: phone with app tiles
    phone: (
      <g transform="rotate(12)">
        <rect x="-23" y="-40" width="46" height="80" rx="9" fill="#fff" />
        <rect x="-15" y="-28" width="12" height="12" rx="3" fill={`url(#${a})`} />
        <rect x="3" y="-28" width="12" height="12" rx="3" fill="#ff2d46" />
        <rect x="-15" y="-10" width="12" height="12" rx="3" fill="#ff2d46" />
        <rect x="3" y="-10" width="12" height="12" rx="3" fill={`url(#${a})`} />
        <path d="M-7 28 H7" fill="none" />
      </g>
    ),
    // AI: robot
    robot: (
      <>
        <path d="M0 -29 V-43" fill="none" />
        <circle cx="0" cy="-49" r="6" fill="#ff2d46" />
        <path d="M-35 -5 H-45 M35 -5 H45" fill="none" />
        <rect x="-35" y="-29" width="70" height="58" rx="16" fill="#fff" />
        <circle cx="-14" cy="-4" r="6" fill="#111" />
        <circle cx="14" cy="-4" r="6" fill="#111" />
        <path d="M-13 14 Q0 22 13 14" fill="none" />
      </>
    ),
    // Games: controller
    controller: (
      <>
        <path d="M-34 -6 Q-34 -20 -20 -20 H20 Q34 -20 34 -6 V6 Q34 22 22 22 Q14 22 10 12 H-10 Q-14 22 -22 22 Q-34 22 -34 6 Z" fill="#fff" />
        <path d="M-25 -2 H-11 M-18 -9 V5" fill="none" />
        <circle cx="14" cy="-6" r="4" fill="#ff2d46" />
        <circle cx="23" cy="2" r="4" fill="#111" />
      </>
    ),
    // Certificate with a seal
    certificate: (
      <>
        <path d="M14 18 L10 38 L17 33 L23 39 L25 18" fill="#ff2d46" />
        <rect x="-34" y="-26" width="68" height="46" rx="4" fill="#fff" />
        <path d="M-22 -12 H22 M-22 -2 H10" fill="none" strokeWidth="2.5" />
        <circle cx="18" cy="12" r="10" fill={`url(#${a})`} />
      </>
    ),
    // Data detective: magnifying glass
    magnifier: (
      <>
        <path d="M8 8 L24 24" fill="none" strokeWidth="7" />
        <circle cx="-6" cy="-6" r="19" fill="#fff" />
        <path d="M-15 -10 Q-13 -16 -7 -18" fill="none" strokeWidth="2.5" />
      </>
    ),
    // Data stories: bar chart card
    chart: (
      <g transform="rotate(6)">
        <rect x="-40" y="-36" width="80" height="72" rx="8" fill="#fff" />
        <path d="M-28 -24 V24 H30" fill="none" strokeWidth="2.5" />
        <rect x="-20" y="4" width="11" height="20" fill={`url(#${b})`} strokeWidth="2.5" />
        <rect x="-4" y="-8" width="11" height="32" fill="#ff2d46" strokeWidth="2.5" />
        <rect x="12" y="-18" width="11" height="42" fill="#fff" strokeWidth="2.5" />
      </g>
    ),
    // Ship it: paper plane
    plane: (
      <>
        <path d="M-30 4 L30 -18 L4 22 Z" fill="#fff" />
        <path d="M4 22 L8 -2 L30 -18" fill="none" />
        <path d="M-34 18 L-24 16 M-30 26 L-18 22" fill="none" strokeWidth="2" />
      </>
    ),
    // Curiosity: light bulb
    bulb: (
      <>
        <path d="M0 -44 V-50 M-28 -34 L-32 -38 M28 -34 L32 -38" fill="none" strokeWidth="2.5" />
        <path d="M-14 5 A22 22 0 1 1 14 5 Q10 9 10 16 H-10 Q-10 9 -14 5 Z" fill="#fff" />
        <path d="M-5 8 V-4 L0 -10 L5 -4 V8" fill="none" stroke="#ff2d46" strokeWidth="2.5" />
        <rect x="-10" y="16" width="20" height="12" rx="3" fill={`url(#${a})`} />
        <path d="M-6 34 H6" fill="none" />
      </>
    ),
  };

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${W} ${H}`}
      className={className}
      role="img"
      aria-label="Line illustration: an open book with the things students make rising out of it — a graduation cap, a coding block, a globe, a laptop with code, a neural network, an AI chat bubble, a phone app, a robot, a game controller, a certificate, a magnifying glass, a bar chart, a paper plane and a light bulb"
      style={{ overflow: "visible", userSelect: "none", WebkitUserSelect: "none" }}
    >
      <defs>
        <pattern id={a} width="5" height="5" patternUnits="userSpaceOnUse">
          <circle cx="2.5" cy="2.5" r="1.15" fill="#111" />
        </pattern>
        <pattern id={b} width="4" height="4" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.75" fill="#111" />
        </pattern>
      </defs>
      <g stroke="#111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        {/* static: rays and the book with the rising sun (logo shape) */}
        <path d="M128 452 L138 438 M190 444 V428 M252 452 L242 438" fill="none" />
        <circle cx="190" cy="488" r="38" fill="#ff2d46" />
        <path d="M28 458 L190 510 L190 562 L28 510 Z" fill="#fff" />
        <path d="M28 458 L190 510 L190 562 L28 510 Z" fill={`url(#${a})`} />
        <path d="M352 458 L190 510 L190 562 L352 510 Z" fill="#fff" />
        <path d="M214 520 L330 484 M214 534 L330 498 M214 548 L300 521" fill="none" strokeWidth="2" />
        <path d="M28 510 L190 562 L352 510 L352 522 L190 574 L28 522 Z" fill="#111" />

        {ITEMS.map((it, i) => (
          <g
            key={it.id}
            ref={(el) => {
              nodes.current[i] = el;
            }}
            transform={`translate(${it.x} ${it.y}) rotate(${it.rot}) scale(${it.s})`}
            onPointerDown={startDrag(i)}
            style={{ cursor: "grab", touchAction: "none" }}
          >
            <title>{it.title}</title>
            {/* invisible hit area so the whole icon is easy to grab */}
            <circle r={(it.r / it.s) * 0.9} fill="transparent" stroke="none" />
            {art[it.id]}
          </g>
        ))}
      </g>
    </svg>
  );
}
