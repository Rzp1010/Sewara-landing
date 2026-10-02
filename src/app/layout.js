import "./globals.css";
import { SITE_URL } from "../lib/site";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sewara - Era Baru Manajemen Persewaan",
    template: "%s | Sewara",
  },
  description:
    "Sewara, aplikasi manajemen persewaan alat yang modern: inventaris, booking & kalender, tracking, status sewa kanban, hingga laporan & invoice PDF. Kelola bisnis sewa Anda dalam satu aplikasi.",
  applicationName: "Sewara",
  keywords: [
    "sewara",
    "aplikasi persewaan",
    "manajemen persewaan alat",
    "rental alat",
    "inventaris",
    "booking",
    "tracking alat",
    "invoice",
    "kanban",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: "Sewara",
    title: "Sewara - Era Baru Manajemen Persewaan",
    description:
      "Kelola inventaris, booking, tracking, status sewa, dan laporan dalam satu aplikasi persewaan alat yang modern.",
  },
  twitter: {
    card: "summary",
    title: "Sewara - Era Baru Manajemen Persewaan",
    description:
      "Aplikasi manajemen persewaan alat: inventaris, booking, tracking, status sewa, hingga laporan & invoice PDF.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        {/* Font Inter, dimuat dari Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
        />
        {children}
      </body>
    </html>
  );
}
