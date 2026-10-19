/**
 * Company-wide facts. Anything in [brackets] is a placeholder the
 * founders still need to fill in — search the repo for "[" before launch.
 */
export const site = {
  name: "Makeracle",
  tagline: "From curiosity to creation.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://makeracle.in",
  email: "hello@[domain]",
  phone: "[+91 phone]",
  whatsapp: "[+91 WhatsApp]",
  whatsappLink: "#", // e.g. https://wa.me/91XXXXXXXXXX
  legalName: "[Registered company name]",
  address: "[Office address, City, State]",
  grievanceOfficer: "[Grievance officer name, email]",
  social: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "YouTube", href: "#" },
  ],
} as const;

export const mainNav = [
  { key: "nav.schools", href: "/for-schools" },
  { key: "nav.programmes", href: "/programmes" },
  { key: "nav.workshops", href: "/workshops" },
  { key: "nav.teachers", href: "/teachers" },
  { key: "nav.parents", href: "/#parents" },
  { key: "nav.about", href: "/about" },
  { key: "nav.contact", href: "/contact" },
] as const;
