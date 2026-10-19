"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/Logo";

type NavItem = { href: string; label: string; exact?: boolean };

/** Shared chrome for logged-in portals (teacher, student, parent, school admin). */
export function PortalShell({
  area,
  user,
  nav,
  footer,
  children,
}: {
  area: string;
  user: string;
  nav: NavItem[];
  /** Replaces the default help line at the bottom of the sidebar. */
  footer?: React.ReactNode;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div className="portal">
      <aside className="portal-side">
        <Link href="/" aria-label="Makeracle home" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", minHeight: 44 }}>
          <Logo tone="dark" size={30} />
        </Link>
        <div>
          <p className="lbl" style={{ color: "var(--muted-on-ink)", margin: 0 }}>
            {area}
          </p>
          <p className="sm" style={{ fontWeight: 600 }}>
            {user}
          </p>
        </div>
        <nav aria-label={area}>
          {nav.map((n) => {
            const active = n.exact ? pathname === n.href : pathname === n.href || pathname.startsWith(n.href + "/");
            return (
              <Link key={n.href} href={n.href} aria-current={active ? "page" : undefined}>
                {n.label}
              </Link>
            );
          })}
        </nav>
        <nav aria-label="Account" style={{ borderTop: "1px solid var(--ink-2)", paddingTop: 10 }}>
          <Link href="/">Makeracle website</Link>
          <Link href="/sign-in">Sign out</Link>
        </nav>
        <div style={{ marginTop: "auto" }}>
          {footer ?? (
            <p className="sm" style={{ color: "var(--muted-on-ink)" }}>
              Help: WhatsApp support · weekly office hours
            </p>
          )}
        </div>
      </aside>
      <main id="main" className="portal-main">
        <p className="demo-bar" role="note">
          Demo mode — sample data only. Real sign-in (OTP for teachers and parents, class code + PIN for students) is wired up by the
          backend team.
        </p>
        {children}
      </main>
    </div>
  );
}
