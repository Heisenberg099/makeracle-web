"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { Icon } from "@/components/ui/Icon";
import { mainNav, site } from "@/content/website/site";
import { useLang } from "@/i18n/LangProvider";
import type { Lang } from "@/i18n/dictionaries";

const langs: { id: Lang; short: string; key: "lang.en" | "lang.hi" }[] = [
  { id: "en", short: "EN", key: "lang.en" },
  { id: "hi", short: "हिं", key: "lang.hi" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="site-header">
        <div className="wrap inner" style={{ position: "relative" }}>
          <Link href="/" aria-label={t("home.label")} style={{ textDecoration: "none" }} onClick={() => setOpen(false)}>
            <Logo size={34} />
          </Link>

          <nav id="site-nav" aria-label="Main" className={`site-nav${open ? " open" : ""}`}>
            {mainNav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} onClick={() => setOpen(false)}>
                  {t(item.key)}
                </Link>
              );
            })}
          </nav>

          <div className="header-actions">
            <div className="lang-switch" role="group" aria-label={t("lang.group")}>
              {langs.map((l) => (
                <button key={l.id} type="button" lang={l.id} aria-pressed={lang === l.id} aria-label={t(l.key)} onClick={() => setLang(l.id)}>
                  {l.short}
                </button>
              ))}
            </div>
            {/* Hidden until the portals launch (site.portalsLive). */}
            {site.portalsLive && (
              <Link href="/login" className="sm" style={{ fontWeight: 600 }}>
                {t("nav.login")}
              </Link>
            )}
            <Link href="/workshops#book" className="btn header-cta">
              {t("cta.book")}
            </Link>
            <button
              type="button"
              className="menu-btn"
              aria-expanded={open}
              aria-controls="site-nav"
              aria-label={open ? t("menu.close") : t("menu.open")}
              onClick={() => setOpen((o) => !o)}
            >
              <svg width="18" height="12" viewBox="0 0 18 12" aria-hidden="true">
                <path d={open ? "M2 1 L16 11 M16 1 L2 11" : "M0 1 H18 M0 6 H18 M0 11 H12"} stroke="#111" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile only: sticky booking bar with WhatsApp */}
      <div className="mobile-bar">
        <Link href="/workshops#book" className="btn">
          {t("cta.book")}
        </Link>
        <a href={site.whatsappLink} className="wa-btn" aria-label={t("whatsapp.label")}>
          <Icon name="whatsapp" size={24} strokeWidth={2} />
        </a>
      </div>
    </>
  );
}
