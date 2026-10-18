import Link from "next/link";
import { Logo } from "@/components/Logo";

export default function NotFound() {
  return (
    <main id="main" className="wrap sec">
      <Logo />
      <h1 className="cap h-xl" style={{ marginTop: 48 }}>
        404.
        <br />
        <span className="ink">Nothing built here yet.</span>
      </h1>
      <p className="lead" style={{ marginTop: 24 }}>
        The page you were looking for doesn&apos;t exist — maybe a student will make it.
      </p>
      <Link href="/" className="btn" style={{ marginTop: 32 }}>
        Back to home
      </Link>
    </main>
  );
}
