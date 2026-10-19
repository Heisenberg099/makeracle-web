/**
 * Company-wide facts and settings. Page copy lives in ./en.ts.
 * Anything in [brackets] is a placeholder the founders still need to fill
 * in — search the repo for "[" before launch. Never invent these.
 */
export const site = {
  name: "makeracle",
  // TODO(launch): confirm the registered company name.
  legalName: "Makeracle Learning Private Limited",
  tagline: "From curiosity to creation.",
  description: "A build-first AI, web and app programme for Indian schools.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://makeracle.in",
  email: "[hello@makeracle.com]",
  phone: "[number]",
  whatsapp: "[number]",
  whatsappLink: "#", // e.g. https://wa.me/91XXXXXXXXXX
  city: "[city]",
  address: "[address, city]",
  safetyEmail: "[email]",
  safetyResponse: "[24 hours]",
  grievanceOfficer: "[Grievance officer name, email]",
  proposalDays: "[3]",
  social: [
    { label: "Instagram", icon: "instagram", href: "#" },
    { label: "LinkedIn", icon: "linkedin", href: "#" },
    { label: "YouTube", icon: "youtube", href: "#" },
    { label: "X", icon: "x", href: "#" },
  ],
  /** The portals (Studio, Teacher Hub, parent, school) run on demo data until the backend launches. */
  portalsLive: false,
  /** Set when the school brochure PDF exists, e.g. "/makeracle-school-brochure.pdf". */
  brochureUrl: null as string | null,
} as const;

export const mainNav = [
  { key: "nav.schools", href: "/for-schools" },
  { key: "nav.programmes", href: "/programmes" },
  { key: "nav.workshops", href: "/workshops" },
  { key: "nav.teachers", href: "/teachers" },
  { key: "nav.parents", href: "/parents" },
  { key: "nav.about", href: "/about" },
] as const;

/**
 * "Built by alumni of" — in this order, with correct names.
 * Logos stay off until each institute gives written permission:
 * add `logo: "/alumni/iit-mandi.svg"` only after the "yes" is on file.
 */
export const alumni: { name: string; fullName: string; logo?: string }[] = [
  { name: "IIT Mandi", fullName: "Indian Institute of Technology Mandi" },
  { name: "IIITDM Jabalpur", fullName: "PDPM Indian Institute of Information Technology, Design and Manufacturing Jabalpur" },
  { name: "BITSoM", fullName: "BITS School of Management, Mumbai" },
];
