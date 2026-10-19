import Link from "next/link";

/** Top row of every Studio screen outside the home: back link on the left, optional step bar or actions on the right. */
export function StudioTopBar({ backHref = "/studio", backLabel = "My journey", children }: { backHref?: string; backLabel?: string; children?: React.ReactNode }) {
  return (
    <div className="studio-top">
      <Link href={backHref} className="back-link">
        <span aria-hidden="true">←</span> {backLabel}
      </Link>
      {children}
    </div>
  );
}
