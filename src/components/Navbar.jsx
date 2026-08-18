"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { IconMenu, IconClose, IconExternal } from "./icons";
import { APP_URL } from "../lib/site";

const LANDING_LINKS = [
  { href: "/#fitur", label: "Fitur", hash: true },
  { href: "/panduan", label: "Panduan" },
];

const DOCS_LINKS = [{ href: "/", label: "Beranda", back: true }];

export default function Navbar({ variant = "landing" }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = variant === "docs" ? DOCS_LINKS : LANDING_LINKS;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Tutup menu mobile saat pindah halaman
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (link) => {
    if (link.hash) return false;
    return pathname === link.href;
  };

  return (
    <header className={`sw-nav ${scrolled ? "scrolled" : ""}`}>
      <div className="sw-nav-inner">
        <Logo />

        <nav className="sw-nav-links" aria-label="Navigasi utama">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`sw-nav-link ${isActive(link) ? "is-active" : ""}`}
            >
              {link.back ? <span aria-hidden>←</span> : null}
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="sw-nav-cta">
          <a className="sw-btn sw-btn--primary sw-btn--sm" href={APP_URL} target="_blank" rel="noopener noreferrer">
            Masuk ke Aplikasi
            <IconExternal />
          </a>
        </div>

        <button
          type="button"
          className="sw-nav-toggle"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {/* Menu mobile */}
      <nav className={`sw-nav-mobile ${open ? "open" : ""}`} aria-label="Navigasi mobile">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="sw-nav-link">
            {link.back ? <span aria-hidden>←</span> : null}
            {link.label}
          </Link>
        ))}
        <a className="sw-btn sw-btn--primary sw-btn--block" href={APP_URL} target="_blank" rel="noopener noreferrer">
          Masuk ke Aplikasi
          <IconExternal />
        </a>
      </nav>
    </header>
  );
}
