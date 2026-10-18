export type ProjectIconName = "chat" | "web" | "app" | "scale" | "data";

/** Line icons for the five flagship projects. */
export function ProjectIcon({ name, size = 72 }: { name: ProjectIconName; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 72 72",
    fill: "none",
    stroke: "#111",
    strokeWidth: 2.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "chat":
      return (
        <svg {...common}>
          <path d="M8 14 H52 Q58 14 58 20 V40 Q58 46 52 46 H28 L16 56 V46 H14 Q8 46 8 40 V20 Q8 14 14 14 Z" />
          <path d="M18 26 H46 M18 34 H36" />
          <circle cx="58" cy="54" r="9" fill="var(--red)" />
        </svg>
      );
    case "web":
      return (
        <svg {...common}>
          <rect x="6" y="12" width="60" height="46" rx="5" />
          <path d="M6 22 H66" />
          <circle cx="13" cy="17" r="1.5" fill="#111" />
          <circle cx="20" cy="17" r="1.5" fill="#111" />
          <circle cx="24" cy="38" r="8" fill="var(--red)" />
          <path d="M38 32 H58 M38 40 H52 M16 50 H58" />
        </svg>
      );
    case "app":
      return (
        <svg {...common}>
          <rect x="20" y="6" width="32" height="60" rx="6" />
          <path d="M32 58 H40" />
          <path d="M36 22 Q28 22 28 30 Q28 38 36 46 Q44 38 44 30 Q44 22 36 22 Z" fill="var(--red)" />
          <circle cx="36" cy="30" r="3" fill="#fff" />
        </svg>
      );
    case "scale":
      return (
        <svg {...common}>
          <path d="M36 8 V60 M16 60 H56" />
          <path d="M10 20 H62" />
          <path d="M10 20 L4 38 H16 Z" fill="var(--red)" />
          <path d="M62 20 L56 38 H68 Z" />
          <circle cx="36" cy="8" r="3" fill="#111" />
        </svg>
      );
    case "data":
      return (
        <svg {...common}>
          <path d="M10 60 V12 M10 60 H64" />
          <rect x="18" y="38" width="8" height="18" fill="#111" />
          <rect x="32" y="28" width="8" height="28" />
          <rect x="46" y="20" width="8" height="36" />
          <circle cx="50" cy="16" r="10" fill="var(--red)" />
          <path d="M57 23 L66 32" />
        </svg>
      );
  }
}
