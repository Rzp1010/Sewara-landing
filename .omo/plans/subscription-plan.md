---
intent: clear
review_required: false
status: approved
---
# Subscription Plan – Final

## Tujuan
Menambahkan tampilan paket berlangganan pada halaman `/harga` dengan tiga tier (Basic, Pro, Enterprise). Untuk saat ini gunakan nilai placeholder untuk harga, fitur, dan minimum transaksi.

## Implementasi – tugas
- [ ] 1. Buat komponen `PricingTier` menampilkan nama paket, daftar fitur placeholder, harga placeholder (mis. Rp0/bulan), dan badge minimum transaksi (mis. "≥0 transaksi").
- [ ] 2. Tambahkan tiga instance `PricingTier` ke grid pricing pada `src/app/harga/page.js` (Basic, Pro, Enterprise).
- [ ] 3. Lengkapi styling di `globals.css` untuk menyesuaikan tampilan kartu tier (warna latar, border, spacing).
- [ ] 4. Pastikan toggle billing (Bulanan/Tahunan) tetap berfungsi dan memengaruhi harga placeholder (mis. tetap Rp0).
- [ ] 5. Tambahkan label “Custom” pada tiap harga untuk menandakan placeholder.
- [ ] 6. Perbarui dokumentasi di README (jika ada) mengenai struktur paket placeholder.

## Verifikasi akhir – tugas
- [ ] F1. Buka `/harga` di browser, pastikan tiga kartu paket terlihat berurutan vertikal di bawah toggle.
- [ ] F2. Klik tombol “Bulanan” / “Tahunan”, pastikan harga tidak berubah (placeholder) dan tidak terjadi error.
- [ ] F3. Responsif: pada layar lebar kartu tetap dalam grid, pada layar kecil kartu menumpuk satu per satu.
- [ ] F4. Pastikan `npm run build` selesai tanpa error dan output `/harga` berukuran < 5 KB.
- [ ] F5. Commit perubahan, push ke `main`.
