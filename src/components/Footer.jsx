import Link from "next/link";
import Logo from "./Logo";
import { IconArrowRight, IconExternal } from "./icons";
import { APP_URL } from "../lib/site";

const NAV = [
  { href: "/", label: "Beranda", external: false },
  { href: "/#fitur", label: "Fitur", external: false },
  { href: "/panduan", label: "Panduan", external: false },
];

const APP = [
  { href: APP_URL, label: "Masuk ke Aplikasi", external: true },
  { href: "/panduan", label: "Baca Panduan", external: false },
];

export default function Footer() {
  return (
    <footer className="sw-footer">
      <div className="sw-footer-inner">
        <div className="sw-footer-brand">
          <Logo />
          <p>
            Aplikasi manajemen persewaan alat yang modern dan mudah digunakan. Dari
            inventaris, booking, hingga laporan, semua dalam satu tempat.
          </p>
        </div>

        <div className="sw-footer-col">
          <h4>Navigasi</h4>
          <ul>
            {NAV.map((l) => (
              <li key={l.label}>
                <Link href={l.href}>
                  {l.label}
                  <IconArrowRight />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="sw-footer-col">
          <h4>Aplikasi</h4>
          <ul>
            {APP.map((l) =>
              l.external ? (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.label}
                    <IconExternal />
                  </a>
                </li>
              ) : (
                <li key={l.label}>
                  <Link href={l.href}>
                    {l.label}
                    <IconArrowRight />
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      <div className="sw-footer-bottom">
        <div className="sw-footer-bottom-inner">
          <span>© 2026 Sewara. Semua hak dilindungi.</span>
          <span>Panduan versi 1.0, diperbarui seiring pengembangan aplikasi.</span>
        </div>
      </div>
    </footer>
  );
}
