/** Simple line icons (24×24, currentColor). Decorative unless `label` is given. */
export type IconName =
  | "chat"
  | "web"
  | "app"
  | "scale"
  | "data"
  | "teacher"
  | "devices"
  | "portfolio"
  | "shield"
  | "clock"
  | "rubric"
  | "kit"
  | "modules"
  | "studio"
  | "mentor"
  | "check"
  | "users"
  | "whatsapp"
  | "phone"
  | "mail"
  | "pin"
  | "arrow"
  | "instagram"
  | "linkedin"
  | "youtube"
  | "x";

const paths: Record<IconName, React.ReactNode> = {
  chat: (
    <>
      <path d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-8l-5 4v-4H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
      <path d="M7.5 9.5h9M7.5 12.5h6" />
    </>
  ),
  web: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 8.5h18M6 6.3h.01M8.5 6.3h.01M7 12h5M7 15.5h10" />
    </>
  ),
  app: (
    <>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
      <path d="M10.5 18.5h3M12 7.5a2.5 2.5 0 0 1 2.5 2.5c0 2-2.5 4-2.5 4s-2.5-2-2.5-4A2.5 2.5 0 0 1 12 7.5Z" />
    </>
  ),
  scale: (
    <>
      <path d="M12 3v17M7 20h10M4 7h16" />
      <path d="M4 7 2 13h4L4 7ZM20 7l-2 6h4l-2-6Z" />
    </>
  ),
  data: (
    <>
      <path d="M4 3v17h17" />
      <path d="M8 16v-4M12 16V8M16 16v-6M20 16V5" />
    </>
  ),
  teacher: (
    <>
      <circle cx="8" cy="7" r="3" />
      <path d="M3 20v-2a5 5 0 0 1 10 0v2" />
      <path d="M13 4h8v9h-6M15.5 13l-2 3" />
    </>
  ),
  devices: (
    <>
      <rect x="2.5" y="4" width="13" height="10" rx="1.5" />
      <path d="M6 18h6M9 14v4" />
      <rect x="17" y="8" width="4.5" height="12" rx="1" />
    </>
  ),
  portfolio: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="9" cy="9" r="2.5" />
      <path d="M14 8h4M14 11h3M6 16h12" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 4.5 6v5.5c0 4.5 3.2 8 7.5 9.5 4.3-1.5 7.5-5 7.5-9.5V6L12 3Z" />
      <path d="m8.8 12 2.2 2.2 4.2-4.4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  rubric: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="m7.5 8 1.2 1.2L11 7M7.5 13l1.2 1.2L11 12M13.5 8h3M13.5 13h3M7.5 17.5h9" />
    </>
  ),
  kit: (
    <>
      <path d="M3 8h18v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8Z" />
      <path d="M8 8V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3M3 13h18M11 13v2h2v-2" />
    </>
  ),
  modules: (
    <>
      <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" />
      <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" />
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" />
      <path d="M17.25 13.5v7.5M13.5 17.25h7.5" />
    </>
  ),
  studio: (
    <>
      <rect x="2.5" y="4" width="19" height="14" rx="2" />
      <path d="m9 9-2.5 2.5L9 14M15 9l2.5 2.5L15 14M13 8.5l-2 6M8 21h8" />
    </>
  ),
  mentor: (
    <>
      <circle cx="12" cy="9" r="5" />
      <path d="m9 13.5-1.5 7L12 18l4.5 2.5-1.5-7M10.2 9l1.3 1.3 2.4-2.6" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 20v-1.5A4.5 4.5 0 0 1 8 14h2a4.5 4.5 0 0 1 4.5 4.5V20" />
      <path d="M15.5 5.2a3 3 0 0 1 0 5.6M17.5 14a4.5 4.5 0 0 1 3 4.3V20" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M4 20.5 5.2 17A8.5 8.5 0 1 1 8 19.6L4 20.5Z" />
      <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8a4.5 4.5 0 0 1-2.3-2.3l.8-1-1-2L9.5 8" />
    </>
  ),
  phone: <path d="M5 3.5h3.5l1.5 4-2 1.5a10 10 0 0 0 7 7l1.5-2 4 1.5V19a1.5 1.5 0 0 1-1.5 1.5A16.5 16.5 0 0 1 3.5 5 1.5 1.5 0 0 1 5 3.5Z" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17 7h.01" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
      <path d="M8 10.5V16M8 7.8h.01M11.5 16v-5.5M11.5 13a2.5 2.5 0 0 1 5 0v3" />
    </>
  ),
  youtube: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="m10.5 9.5 4 2.5-4 2.5v-5Z" />
    </>
  ),
  x: <path d="M4.5 4h4l11 16h-4L4.5 4ZM19.5 4 13.6 10.6M4.5 20l5.9-6.6" />,
};

export function Icon({ name, size = 26, label, strokeWidth = 1.8 }: { name: IconName; size?: number; label?: string; strokeWidth?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
