import Link from "next/link";

export default function Logo({ href = "/", tag = null }) {
  return (
    <Link href={href} className="sw-logo" aria-label="Beranda Sewara">
      <img src="/sewara-logo.png" alt="Sewara" className="sw-logo-img" />
      {tag ? <small style={{ marginLeft: 8, fontSize: 12, fontWeight: 700, color: "var(--sw-primary-soft-text)", background: "var(--sw-primary-soft)", padding: "2px 9px", borderRadius: 999 }}>{tag}</small> : null}
    </Link>
  );
}
