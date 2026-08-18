import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PanduanToc from "../../components/PanduanToc";
import { Steps, Step, Note, Warn, OptCards, OptCard, ICho, IChos, Badge, Bullets } from "../../components/guide";
import { IconBook } from "../../components/icons";

export const metadata = {
  title: "Panduan Penggunaan",
  description:
    "Panduan lengkap Sewara, dari pendaftaran akun, login, mengisi inventaris, membuat booking, mengubah status sewa, hingga tracking alat.",
};

const TOC = [
  { label: "Memulai", id: "daftar", title: "Pendaftaran Akun" },
  { label: "Memulai", id: "login", title: "Login" },
  {
    label: "Inventaris",
    id: "inventaris",
    title: "Menambahkan Inventaris",
    sub: [
      { id: "tambah-manual", title: "Tambah Manual" },
      { id: "import-csv", title: "Import CSV" },
    ],
  },
  { label: "Operasional", id: "booking", title: "Membuat Booking" },
  { label: "Operasional", id: "status", title: "Status Sewa" },
  {
    label: "Operasional",
    id: "tracking",
    title: "Tracking Alat",
    sub: [
      { id: "mode-tabel", title: "Mode Tabel" },
      { id: "mode-timeline", title: "Mode Timeline" },
    ],
  },
];

export default function PanduanPage() {
  return (
    <>
      <Navbar variant="docs" />

      <div className="sw-guide">
        <PanduanToc sections={TOC} />

        <main className="sw-guide-main">
          <nav className="sw-crumb" aria-label="Breadcrumb">
            <a href="/">Beranda</a>
            <span aria-hidden>›</span>
            <span>Panduan</span>
          </nav>

          {/* HERO PANDUAN */}
          <header className="sw-guide-hero">
            <span className="sw-guide-badge">
              <IconBook />
              Dokumentasi Resmi
            </span>
            <h1 className="sw-guide-title">Panduan Penggunaan Sewara</h1>
            <p className="sw-guide-sub">
              Panduan lengkap untuk memulai dan mengoperasikan aplikasi manajemen persewaan
              alat Sewara, dari pendaftaran hingga operasional harian.
            </p>
          </header>

          {/* BAGIAN 1: DAFTAR */}
          <section className="sw-gs" id="daftar">
            <div className="sw-gs-kicker">Bagian 1</div>
            <h2 className="sw-gs-title">Pendaftaran Akun</h2>
            <Steps>
              <Step n={1}>
                Buka <strong>sewara.vercel.app</strong>, klik tombol <strong>"Masuk ke Aplikasi"</strong>,
                lalu klik <strong>"Daftar di sini"</strong> yang berada di bawah tombol Login.
              </Step>
              <Step n={2}>
                Isi form pendaftaran: <strong>Nama Lengkap</strong>, <strong>Nama Bisnis</strong>,{" "}
                <strong>Email</strong>, dan <strong>Password</strong>.
              </Step>
              <Step n={3}>Klik tombol <strong>"Daftar"</strong>.</Step>
              <Step n={4}>
                Akun akan menunggu persetujuan dari admin sebelum bisa digunakan.
              </Step>
            </Steps>
            <Note title="Catatan untuk Tester Awal">
              Setelah mendaftar, segera hubungi admin untuk mempercepat proses persetujuan.
              Saat ini persetujuan manual hanya berlaku untuk tester awal.
            </Note>
          </section>

          {/* BAGIAN 2: LOGIN */}
          <section className="sw-gs" id="login">
            <div className="sw-gs-kicker">Bagian 2</div>
            <h2 className="sw-gs-title">Login</h2>
            <Steps>
              <Step n={1}>
                Buka <strong>sewara.vercel.app</strong> lalu klik tombol <strong>"Masuk ke Aplikasi"</strong>.
              </Step>
              <Step n={2}>
                Masukkan <strong>Email</strong> dan <strong>Password</strong> yang didaftarkan.
              </Step>
              <Step n={3}>Klik tombol <strong>"Login"</strong>.</Step>
            </Steps>
          </section>

          {/* BAGIAN 3: INVENTARIS */}
          <section className="sw-gs" id="inventaris">
            <div className="sw-gs-kicker">Bagian 3</div>
            <h2 className="sw-gs-title">Menambahkan Inventaris</h2>
            <p className="sw-gs-lead">
              Sebelum membuat booking, pastikan inventaris alat sudah diisi terlebih dahulu.
            </p>
            <Steps>
              <Step n={1}>Klik menu <strong>"Inventaris"</strong> di sidebar kiri.</Step>
              <Step n={2}>Pilih submenu <strong>"Katalog &amp; Inventaris"</strong>.</Step>
              <Step n={3}>Klik tombol <strong>"+ Tambah Produk"</strong> di pojok kanan atas.</Step>
            </Steps>

            <OptCards>
              <OptCard
                title="Tambah Manual"
                desc="Input satu per satu langsung di aplikasi. Cocok untuk inventaris yang sedikit."
                highlight
              />
              <OptCard
                title="Import CSV"
                desc="Upload file CSV sekaligus. Cocok untuk inventaris yang banyak."
              />
            </OptCards>

            <h3 id="tambah-manual">A. Tambah Manual</h3>
            <Steps>
              <Step n={1}>
                <p>Pilih jenis produk:</p>
                <IChos>
                  <ICho>
                    <strong>Alat Satuan</strong>, untuk alat yang memiliki nomor seri per unit.
                  </ICho>
                  <ICho>
                    <strong>Paket/Bundling</strong>, untuk paket yang terdiri dari beberapa alat.
                  </ICho>
                </IChos>
              </Step>
              <Step n={2}>
                <p>Isi detail produk:</p>
                <Bullets>
                  <div><span><strong>Nama Produk</strong>, nama alat yang akan disewakan</span></div>
                  <div><span><strong>Tag Kategori</strong>, opsional, untuk pengelompokan alat</span></div>
                  <div><span><strong>Nomor Seri</strong>, pisahkan tiap nomor seri dengan tanda koma. Contoh: <code>K1, K2</code> untuk 2 unit kamera</span></div>
                  <div><span><strong>Kondisi</strong>, kondisi fisik alat saat ini</span></div>
                  <div><span><strong>Keterangan</strong>, opsional, catatan tambahan</span></div>
                </Bullets>
              </Step>
              <Step n={3}>
                <p>Pilih Tipe Sewa:</p>
                <IChos>
                  <ICho>
                    <strong>Fleksibel</strong>, alat bisa disewa dengan durasi 6, 12, atau 24 jam.
                    Wajib isi tarif untuk semua durasi.
                  </ICho>
                  <ICho>
                    <strong>Harian</strong>, alat hanya bisa disewa per 24 jam. Cukup isi tarif 24 jam.
                  </ICho>
                </IChos>
              </Step>
              <Step n={4}>
                Tentukan <strong>Denda per jam</strong> keterlambatan. Isi angka <code>0</code> jika tidak
                ingin menerapkan denda.
              </Step>
              <Step n={5}>Klik <strong>"Simpan Produk"</strong>.</Step>
              <Step n={6}>Ulangi untuk semua alat yang tersedia.</Step>
            </Steps>
            <Warn title="Perhatian">
              Paket/Bundling hanya bisa dibuat setelah ada alat satuan di inventaris. Jika belum ada alat
              sama sekali, proses simpan akan gagal.
            </Warn>

            <h3 id="import-csv">B. Import CSV</h3>
            <Steps>
              <Step n={1}>Klik <strong>"Import CSV"</strong> di popup Tambah Produk.</Step>
              <Step n={2}>Klik <strong>"Download Template CSV"</strong> yang sudah disediakan.</Step>
              <Step n={3}>
                Buka file template di <strong>Google Sheets</strong> dan isi data sesuai panduan di template.
              </Step>
              <Step n={4}>Unduh file dari Google Sheets dalam format <strong>CSV</strong>.</Step>
              <Step n={5}>
                Kembali ke popup, klik <strong>"Choose File"</strong> dan pilih file CSV tadi.
              </Step>
              <Step n={6}>
                Klik <strong>"Upload"</strong>, semua data akan otomatis masuk ke inventaris.
              </Step>
            </Steps>
          </section>

          {/* BAGIAN 4: BOOKING */}
          <section className="sw-gs" id="booking">
            <div className="sw-gs-kicker">Bagian 4</div>
            <h2 className="sw-gs-title">Membuat Booking</h2>
            <Steps>
              <Step n={1}>Klik menu <strong>"Operasional"</strong> di sidebar kiri.</Step>
              <Step n={2}>Pilih submenu <strong>"Booking Baru"</strong>.</Step>
              <Step n={3}>
                Isi identitas penyewa: <strong>Nama</strong>, <strong>Nomor HP</strong>,{" "}
                <strong>Alamat</strong>, dan <strong>Jaminan</strong>.
              </Step>
              <Step n={4}>Pilih <strong>Waktu Ambil</strong> dan <strong>Durasi Sewa</strong>.</Step>
              <Step n={5}>
                Scroll ke bagian <strong>"Pilih Barang"</strong>, pilih produk beserta nomor serinya,
                lalu klik <strong>"Masukkan"</strong>. Ulangi untuk semua alat yang disewa.
              </Step>
              <Step n={6}>
                Total harga akan otomatis terhitung setelah semua alat dimasukkan.
              </Step>
              <Step n={7}>
                Di bagian <strong>DP</strong>, masukkan jumlah DP dan metode pembayaran jika ada.
                Kosongkan jika belum ada pembayaran.
              </Step>
              <Step n={8}>Klik <strong>"Buat Booking"</strong>.</Step>
            </Steps>

            <Note title="Setelah Booking Dibuat">
              <Bullets>
                <div><span>Booking akan muncul di panel <strong>Jadwal Aktif</strong> di sisi kanan layar.</span></div>
                <div><span>User bisa <strong>edit booking</strong> langsung dari panel Jadwal Aktif.</span></div>
                <div><span>User bisa <strong>lihat, print, dan download invoice PDF</strong> langsung dari panel tersebut.</span></div>
              </Bullets>
            </Note>

            <Warn title="Pengaturan DP">
              Pengaturan DP bisa diatur di menu Pengaturan. Jika diatur <strong>Bebas</strong>, booking
              tanpa DP tetap bisa dibuat. Jika diatur <strong>Wajib DP</strong>, kolom DP harus diisi agar
              booking berhasil disimpan.
            </Warn>
          </section>

          {/* BAGIAN 5: STATUS SEWA */}
          <section className="sw-gs" id="status">
            <div className="sw-gs-kicker">Bagian 5</div>
            <h2 className="sw-gs-title">Melihat dan Mengubah Status Sewa</h2>
            <Steps>
              <Step n={1}>Klik menu <strong>"Operasional"</strong> di sidebar kiri.</Step>
              <Step n={2}>Pilih submenu <strong>"Status Sewa"</strong>.</Step>
              <Step n={3}>
                Halaman akan menampilkan <strong>papan kanban</strong> dengan beberapa kolom status.
              </Step>
            </Steps>

            <h3>Yang Bisa Dilakukan di Halaman Ini</h3>
            <Steps>
              <Step n="✓">
                <strong>Lihat detail transaksi</strong>, klik tombol <strong>"Detail"</strong> di kartu booking.
              </Step>
              <Step n="✓">
                <strong>Catat pembayaran</strong>, klik tombol <strong>"Bayar"</strong>, atau saat mengubah
                status booking yang belum lunas, form pembayaran akan otomatis muncul.
              </Step>
              <Step n="✓">
                <p><strong>Ubah status booking</strong> dengan 2 cara:</p>
                <Bullets>
                  <div><span>Klik tombol <strong>"Serahkan"</strong> (Booking → Disewa) atau <strong>"Terima"</strong> (Disewa → Selesai)</span></div>
                  <div><span>Atau <strong>drag and drop</strong> kartu ke kolom status berikutnya</span></div>
                </Bullets>
              </Step>
            </Steps>

            <h3>Penjelasan Kolom Kanban</h3>
            <div className="sw-tbl-wrap">
              <table className="sw-tbl">
                <thead>
                  <tr>
                    <th>Kolom</th>
                    <th>Keterangan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><Badge tone="booking">Booking</Badge></td>
                    <td>Sudah dibooking, belum diserahkan ke penyewa.</td>
                  </tr>
                  <tr>
                    <td><Badge tone="disewa">Disewa</Badge></td>
                    <td>Alat sudah diserahkan ke penyewa.</td>
                  </tr>
                  <tr>
                    <td><Badge tone="mendekati">Mendekati</Badge></td>
                    <td>Waktu kembali kurang dari X jam (bisa diatur di Pengaturan).</td>
                  </tr>
                  <tr>
                    <td><Badge tone="telat">Telat</Badge></td>
                    <td>Sudah melewati waktu kembali yang dijadwalkan.</td>
                  </tr>
                  <tr>
                    <td><Badge tone="selesai">Selesai</Badge></td>
                    <td>Alat sudah dikembalikan dan transaksi selesai.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Note title="Pengaturan Kolom 'Mendekati'">
              Batas waktu kolom "Mendekati" bisa diatur di menu Pengaturan. Contoh: jika diatur 2 jam,
              maka booking yang kurang dari 2 jam dari jadwal kembali akan otomatis masuk ke kolom
              Mendekati.
            </Note>
          </section>

          {/* BAGIAN 6: TRACKING */}
          <section className="sw-gs" id="tracking">
            <div className="sw-gs-kicker">Bagian 6</div>
            <h2 className="sw-gs-title">Tracking Alat</h2>
            <p className="sw-gs-lead">
              Fitur Tracking Alat memiliki 2 mode tampilan sesuai kebutuhan user.
            </p>

            <OptCards>
              <OptCard
                title="Mode Tabel"
                desc="Cek ketersediaan alat di tanggal tertentu secara cepat."
              />
              <OptCard
                title="Mode Timeline"
                desc="Lihat jadwal booking alat secara visual dan langsung proses ke booking."
                highlight
              />
            </OptCards>

            <h3 id="mode-tabel">A. Mode Tabel</h3>
            <Steps>
              <Step n={1}>Klik menu <strong>"Operasional"</strong> di sidebar kiri.</Step>
              <Step n={2}>Pilih submenu <strong>"Tracking Alat"</strong>.</Step>
              <Step n={3}>Pastikan mode <strong>"Tabel"</strong> dipilih.</Step>
              <Step n={4}>Pilih tanggal yang ingin dicek.</Step>
              <Step n={5}>
                Sistem akan menampilkan semua alat beserta status ketersediaannya di tanggal tersebut.
              </Step>
            </Steps>

            <h3 id="mode-timeline">B. Mode Timeline</h3>
            <p className="sw-gs-lead">
              Mode ini cocok untuk mengecek ketersediaan alat secara mendalam sebelum membuat booking,
              sekaligus langsung melanjutkan ke proses booking.
            </p>
            <Steps>
              <Step n={1}>
                Di halaman Tracking Alat, pilih mode <strong>"Timeline"</strong>.
              </Step>
              <Step n={2}>Cari nama alat yang ingin disewa.</Step>
              <Step n={3}>
                Sistem akan menampilkan <strong>timeline visual</strong>, terlihat jelas kapan saja alat
                sudah dibooking dan kapan masih tersedia.
              </Step>
              <Step n={4}>
                Centang <strong>Nomor Seri (S/N)</strong> alat yang ingin disewa.
              </Step>
              <Step n={5}>
                Tentukan <strong>tanggal ambil dan tanggal kembali</strong> langsung di halaman ini.
              </Step>
              <Step n={6}>
                Klik <strong>"Lanjut ke Booking"</strong>, user akan langsung diarahkan ke halaman Booking
                Baru dengan alat yang dipilih sudah masuk ke keranjang.
              </Step>
              <Step n={7}>Tinggal isi identitas penyewa dan selesaikan booking.</Step>
            </Steps>
          </section>

          <footer className="sw-guide-foot">
            <p>Panduan Aplikasi Sewara · Versi 1.0 · 2026</p>
            <p>Dokumen ini akan terus diperbarui seiring pengembangan aplikasi.</p>
          </footer>
        </main>
      </div>

      <Footer />
    </>
  );
}
