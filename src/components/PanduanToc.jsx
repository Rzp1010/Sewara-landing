"use client";

import { useEffect, useState, useCallback } from "react";
import { IconMenu, IconClose } from "./icons";

// Sidebar daftar isi: sticky di desktop, drawer di mobile, dengan scrollspy
export default function PanduanToc({ sections }) {
  const [active, setActive] = useState(sections[0]?.id || "");
  const [open, setOpen] = useState(false);

  const semuaId = useCallback(() => {
    const ids = [];
    sections.forEach((s) => {
      ids.push(s.id);
      (s.sub || []).forEach((x) => ids.push(x.id));
    });
    return ids;
  }, [sections]);

  useEffect(() => {
    const ids = semuaId();
    const onScroll = () => {
      const pos = window.scrollY + 150;
      let cur = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= pos) cur = id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [semuaId]);

  const isActive = (id) => active === id;
  const parentActive = (s) => isActive(s.id) || (s.sub || []).some((x) => isActive(x.id));

  const tutupDrawer = () => setOpen(false);

  return (
    <>
      {/* Backdrop mobile */}
      <div className={`sw-toc-backdrop ${open ? "show" : ""}`} onClick={tutupDrawer} aria-hidden />

      <aside className={`sw-guide-toc ${open ? "open" : ""}`} aria-label="Daftar isi panduan">
        <div className="sw-toc-head">
          <div className="sw-toc-title">Daftar Isi</div>
          <button type="button" className="sw-toc-close" onClick={tutupDrawer} aria-label="Tutup daftar isi">
            <IconClose />
          </button>
        </div>
        <nav>
          {sections.map((s) => (
            <div key={s.id} className="sw-toc-section">
              <div className="sw-toc-label">{s.label}</div>
              <a
                href={`#${s.id}`}
                className={`sw-toc-item ${parentActive(s) ? "is-active" : ""}`}
                onClick={tutupDrawer}
              >
                {s.title}
              </a>
              {(s.sub || []).map((x) => (
                <a
                  key={x.id}
                  href={`#${x.id}`}
                  className={`sw-toc-sub ${isActive(x.id) ? "is-active" : ""}`}
                  onClick={tutupDrawer}
                >
                  {x.title}
                </a>
              ))}
            </div>
          ))}
        </nav>
      </aside>

      {/* Tombol melayang (mobile) */}
      <button type="button" className="sw-toc-toggle" onClick={() => setOpen(true)} aria-label="Buka daftar isi">
        <IconMenu />
        Daftar Isi
      </button>
    </>
  );
}
