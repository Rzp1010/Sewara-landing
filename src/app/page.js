import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import HeroMockup from "../components/HeroMockup";
import {
  IconBox,
  IconCalendar,
  IconGantt,
  IconKanban,
  IconInvoice,
  IconTag,
  IconSend,
  IconShield,
  IconArrowRight,
  IconBook,
  IconCheck,
} from "../components/icons";
import { APP_URL } from "../lib/site";

const FEATURES = [
  {
    icon: IconBox,
    tone: "primary",
    title: "Inventaris Alat",
    desc: "Katalog lengkap dengan nomor seri per unit, kondisi, dan tarif sewa. Tambah manual satu per satu atau import massal dari file CSV.",
    tag: "Katalog + Import CSV",
  },
  {
    icon: IconCalendar,
    tone: "info",
    title: "Booking & Kalender",
    desc: "Buat booking dengan durasi 6/12/24 jam atau harian, atur DP, dan lihat seluruh jadwal sewa dalam satu kalender.",
    tag: "Durasi fleksibel",
  },
  {
    icon: IconGantt,
    tone: "purple",
    title: "Tracking Alat",
    desc: "Cek ketersediaan lewat mode tabel, atau lihat jadwal tiap unit secara visual di mode timeline sebelum membuat booking.",
    tag: "Tabel + Timeline",
  },
  {
    icon: IconKanban,
    tone: "orange",
    title: "Status Sewa Kanban",
    desc: "Papan kanban Booking → Disewa → Selesai. Serahkan, terima, atau geser kartu, kolom Mendekati & Telat terdeteksi otomatis.",
    tag: "Drag & drop",
  },
  {
    icon: IconInvoice,
    tone: "success",
    title: "Laporan & Invoice PDF",
    desc: "Catat pembayaran, pantau riwayat transaksi, dan cetak atau unduh invoice PDF yang siap dikirim ke penyewa.",
    tag: "Invoice PDF",
  },
  {
    icon: IconTag,
    tone: "warning",
    title: "Member, Promo & SDM",
    desc: "Kelola data member, atur promo, dan kelola akun staf (CS & Gudang) dengan hak akses yang sesuai dengan perannya.",
    tag: "Manajemen tim",
  },
  {
    icon: IconSend,
    tone: "info",
    title: "Notifikasi Telegram",
    desc: "Terima notifikasi otomatis ke Telegram untuk aktivitas penting, seperti booking baru dan perubahan status sewa.",
    tag: "Pantau dari mana saja",
  },
  {
    icon: IconShield,
    tone: "primary",
    title: "Multi-user & Role",
    desc: "Superadmin, Owner, CS, dan Gudang dengan hak akses menu berbeda, menjaga data bisnis tetap aman dan tertata.",
    tag: "4 peran terpisah",
  },
];

const STEPS = [
  {
    n: 1,
    title: "Buat akun",
    desc: "Daftar di halaman aplikasi, tunggu persetujuan admin, lalu masuk ke dashboard Sewara Anda.",
  },
  {
    n: 2,
    title: "Isi inventaris",
    desc: "Tambahkan katalog alat beserta nomor seri dan tarif sewa, cukup manual untuk sedikit, import CSV untuk banyak.",
  },
  {
    n: 3,
    title: "Jalankan operasional",
    desc: "Terima booking, pantau status sewa, catat pembayaran, dan proses pengembalian sampai transaksi selesai.",
  },
];

export const metadata = {
  title: "Sewara - Era Baru Manajemen Persewaan",
};

export default function Page() {
  return (
    <>
      <Navbar variant="landing" />

      {/* ---------- HERO ---------- */}
      <section className="sw-hero">
        <div className="sw-hero-inner">
          <div>
            <Reveal delay={90}>
              <h1 className="sw-hero-title">
                Era Baru <span className="sw-grad-text">Manajemen Persewaan</span>
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="sw-hero-sub">
                Kelola katalog alat, booking, tracking, dan status sewa sampai laporan,
                dalam satu aplikasi yang ringkas, akurat, dan siap dipakai tim Anda.
              </p>
            </Reveal>
            <Reveal delay={270}>
              <div className="sw-hero-actions">
                <a className="sw-btn sw-btn--primary sw-btn--lg" href={APP_URL} target="_blank" rel="noopener noreferrer">
                  Masuk ke Aplikasi
                  <IconArrowRight />
                </a>
                <a className="sw-btn sw-btn--outline sw-btn--lg" href="/panduan">
                  <IconBook />
                  Baca Panduan
                </a>
              </div>
            </Reveal>
            <Reveal delay={360}>
              <div className="sw-hero-trust">
                <span className="sw-tick"><IconCheck /> Gratis dicoba</span>
                <span className="sw-tick"><IconCheck /> Akses lewat browser</span>
                <span className="sw-tick"><IconCheck /> Multi-peran tim</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="sw-hero-visual">
            <HeroMockup />
          </Reveal>
        </div>
      </section>

      {/* ---------- FITUR ---------- */}
      <section className="sw-section sw-section--soft" id="fitur">
        <div className="sw-container">
          <Reveal className="sw-section-head">
            <h2 className="sw-section-title">Semua yang Anda butuhkan untuk mengelola persewaan</h2>
            <p className="sw-section-sub">
              Modul-modul dirancang mengikuti alur kerja persewaan alat yang nyata, dari
              barang masuk katalog sampai alat kembali ke gudang.
            </p>
          </Reveal>

          <div className="sw-fgrid">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={(i % 4) * 70}>
                <article className={`sw-fcard sw-tone-${f.tone}`}>
                  <div className="sw-fcard-icon">
                    <f.icon />
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                  <span className="sw-fcard-tag">{f.tag}</span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CARA KERJA ---------- */}
      <section className="sw-section">
        <div className="sw-container">
          <Reveal className="sw-section-head">
            <h2 className="sw-section-title">Mulai dalam tiga langkah</h2>
            <p className="sw-section-sub">
              Tidak perlu ribet, dari akun pertama sampai operasional harian berjalan lancar.
            </p>
          </Reveal>

          <div className="sw-csteps">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 110}>
                <article className="sw-cstep">
                  <div className="sw-cstep-num">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  {i < STEPS.length - 1 && (
                    <span className="sw-cstep-arrow" aria-hidden>
                      <IconArrowRight />
                    </span>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA AKHIR ---------- */}
      <section className="sw-cta-wrap">
        <div className="sw-container">
          <Reveal>
            <div className="sw-cta-panel">
              <h2 className="sw-cta-title">Siap merapikan operasional persewaan Anda?</h2>
              <p className="sw-cta-sub">
                Buat akun, isi inventaris, dan jalankan operasional harian dengan lebih tenang.
                Gratis untuk dicoba, mulai hari ini.
              </p>
              <div className="sw-cta-actions">
                <a className="sw-btn sw-btn--primary sw-btn--lg" href={APP_URL} target="_blank" rel="noopener noreferrer">
                  Masuk ke Aplikasi
                  <IconArrowRight />
                </a>
                <a className="sw-btn sw-btn--outline sw-btn--lg" href="/panduan" style={{ borderColor: "rgba(224,231,255,.35)", color: "#E0E7FF", background: "transparent" }}>
                  <IconBook />
                  Baca Panduan Lengkap
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
