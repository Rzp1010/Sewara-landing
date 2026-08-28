"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Reveal from "../../components/Reveal";
import { APP_URL } from "../../lib/site";
import {
  IconCheck,
  IconClose,
  IconArrowRight,
} from "../../components/icons";

const PLANS = [
  {
    name: "Basic",
    tagline: "Untuk usaha kecil dengan kebutuhan sederhana",
    price: { monthly: 0, yearly: 0 },
    priceLabel: "Custom",
    minTransactions: "≥10 transaksi/bulan",
    features: [
      "Inventaris alat & nomor seri",
      "Booking & kalender",
      "Status sewa kanban",
      "Laporan dasar",
      "Invoice PDF",
    ],
    cta: "Hubungi Kami",
  },
  {
    name: "Pro",
    tagline: "Untuk bisnis rental yang berkembang",
    price: { monthly: 0, yearly: 0 },
    priceLabel: "Custom",
    minTransactions: "≥50 transaksi/bulan",
    highlight: true,
    features: [
      "Semua fitur Basic",
      "Tracking mode tabel & timeline",
      "Import CSV massal",
      "Paket/Bundling alat",
      "Promo & diskon otomatis",
      "Member & riwayat sewa",
      "Notifikasi Telegram",
      "Multi-user & Role (Owner, CS)",
      "Email support",
    ],
    cta: "Hubungi Kami",
  },
  {
    name: "Enterprise",
    tagline: "Untuk operasional skala besar",
    price: { monthly: 0, yearly: 0 },
    priceLabel: "Custom",
    minTransactions: "≥200 transaksi/bulan",
    features: [
      "Semua fitur Pro",
      "Multi-user & Role (Owner, CS, Gudang)",
      "Custom domain",
      "Priority support 24/7",
      "Training & onboarding",
      "API access",
    ],
    cta: "Hubungi Kami",
  },
];

const FAQ = [
  {
    q: "Apakah bisa coba gratis sebelum berlangganan?",
    a: "Ya. Semua paket punya trial 14 hari penuh tanpa kartu kredit. Fitur tidak dibatasi saat trial.",
  },
  {
    q: "Apa perbedaan billing bulanan vs tahunan?",
    a: "Paket tahunan hemat ~20% dari harga bulanan. Dibayar di muka per tahun. Bisa upgrade/downgrade kapan saja, prorata otomatis.",
  },
  {
    q: "Bagaimana kalau alat/member melebihi batas paket?",
    a: "Saat mendekati batas, Anda dapat notifikasi. Upgrade ke paket atas kapan saja — data & pengaturan ikut pindah mulus.",
  },
  {
    q: "Apakah data saya aman & bisa diekspor?",
    a: "Ya. Data dienkripsi transit & at-rest, backup harian. Ekspor CSV/PDF inventaris, booking, laporan kapan saja.",
  },
  {
    q: "Bisakah pakai domain sendiri (custom domain)?",
    a: "Custom domain tersedia di paket Pro & Enterprise. Tim kami bantu setup DNS & SSL gratis.",
  },
  {
    q: "Bagaimana cara pembayarannya?",
    a: "Terima transfer bank, VA, QRIS, kartu kredit, dan e-wallet via payment gateway terpercaya. Invoice otomatis terbit.",
  },
];

export default function HargaPage() {
  const [billing, setBilling] = useState("yearly");

  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
<section className="sw-section sw-section--hero" aria-labelledby="harga-hero-title">
            <div className="sw-container">
              <div className="sw-pricing-header">
                <Reveal delay={40}>
                  <h1 id="harga-hero-title" className="sw-hero-title" style={{ lineHeight: "1.2" }}>
                    Pilih Paket<br />
                    <span className="sw-accent-text">Sesuai Skala Bisnismu</span>
                  </h1>
                </Reveal>
                <Reveal delay={100}>
                  <div className="sw-billing-toggle" role="group" aria-label="Pilih siklus penagihan">
                    <button
                      className={`sw-billing-btn ${billing === "monthly" ? "active" : ""}`}
                      onClick={() => setBilling("monthly")}
                      aria-pressed={billing === "monthly"}
                    >
                      Bulanan
                    </button>
                    <button
                      className={`sw-billing-btn ${billing === "yearly" ? "active" : ""}`}
                      onClick={() => setBilling("yearly")}
                      aria-pressed={billing === "yearly"}
                    >
                      Tahunan <span className="sw-badge sw-badge--primary" style={{ marginLeft: 8, fontSize: 11 }}>Hemat 20%</span>
                    </button>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

        {/* PRICING CARDS */}
        <section className="sw-section" aria-labelledby="plans-title">
          <div className="sw-container">
            <div className="sw-pricing-grid">
              {PLANS.map((plan, i) => (
                <Reveal key={plan.name} delay={280 + i * 80}>
                  <article className={`sw-pricing-card ${plan.highlight ? "sw-pricing-card--highlight" : ""}`}>
                    <div className="sw-pricing-head">
                      <h3 className="sw-pricing-name">{plan.name}</h3>
                      <p className="sw-pricing-tagline">{plan.tagline}</p>
                      <div className="sw-pricing-price">
                        <span className="sw-pricing-amount">
                          {plan.priceLabel || `Rp${plan.price[billing].toLocaleString("id-ID")}`}
                        </span>
                        {!plan.priceLabel && <span className="sw-pricing-period">/bulan</span>}
                      </div>
                      {plan.minTransactions && (
                        <p className="sw-pricing-badge">
                          <span className="sw-badge sw-badge--info">{plan.minTransactions}</span>
                        </p>
                      )}
                      {billing === "yearly" && !plan.priceLabel && (
                        <p className="sw-pricing-yearly">
                          Dibayar <strong>Rp{(plan.price.yearly * 12).toLocaleString("id-ID")}</strong> /tahun
                        </p>
                      )}
                    </div>

                    <ul className="sw-pricing-features" role="list">
                      {plan.features.map((feat, fi) => (
                        <li key={fi} className="sw-pricing-feat">
                          <IconCheck className="sw-pricing-feat-icon" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={APP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sw-btn sw-btn--primary sw-btn--lg sw-btn--block"
                    >
                      {plan.cta}
                      <IconArrowRight />
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="sw-section" aria-labelledby="faq-title">
          <div className="sw-container" style={{ maxWidth: 760 }}>
            <div style={{ textAlign: "center", marginBottom: 32 }}>
              <h2 id="faq-title" className="sw-section-title" style={{ marginBottom: 8 }}>
                Pertanyaan Umum
              </h2>
            </div>

            <div className="sw-faq">
              {FAQ.map((item, i) => (
                <details key={i} className="sw-faq-item">
                  <summary className="sw-faq-q">{item.q}</summary>
                  <div className="sw-faq-a">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}