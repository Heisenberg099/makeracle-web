import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LangProvider } from "@/i18n/LangProvider";
import { site } from "@/content/website/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Makeracle — AI & build-learning for CBSE schools",
    template: "%s · Makeracle",
  },
  description:
    "Makeracle helps CBSE schools deliver the compulsory Computational Thinking & AI hours with real student projects, teacher scripts and portfolios. From curiosity to creation.",
  openGraph: {
    title: "Makeracle — From curiosity to creation",
    description:
      "Students build real AI, web and app projects in school. Book a free 90-minute workshop.",
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  themeColor: "#ff2d46",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Fonts load in the browser (not at build time) so builds work offline. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,300..800&family=Figtree:wght@600;700;800&family=Instrument+Serif&display=swap"
        />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
