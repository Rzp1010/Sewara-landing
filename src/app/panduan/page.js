import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PanduanToc from "../../components/PanduanToc";
import { Steps, Step, Note, Warn, OptCards, OptCard, ICho, IChos, Badge, Bullets, Tbl, TH, TD, TR } from "../../components/guide";
import { IconBook } from "../../components/icons";

export const metadata = {
  title: "Panduan Penggunaan",
  description:
    "Panduan lengkap Sewara, dari pendaftaran akun, login, pengaturan invoice, mengisi inventaris, membuat booking, mengubah status sewa, hingga tracking alat.",
};

const TOC = [
  { label: "Memulai", id: "daftar", title: "Pendaftaran Akun" },
  { label: "Memulai", id: "login", title: "Login" },
  {
    label: "Persiapan",
    id: "invoice",
    title: "Invoice & Dokumen",
    sub: [
      { id: "format-nomor", title: "Format Nomor Invoice" },
      { id: "opsi-cetak", title: "Opsi Cetak Invoice" },
      { id: "tata-letak", title: "Tata Letak Invoice" },
    ],
  },
  {
    label: "Inventaris",
    id: "inventaris",
    title: "Menambahkan Inventaris",
      sub: [
        { id: "tambah-manual", title: "Tambah Manual" },
        { id: "import-csv", title: "Import CSV" },
        { id: "panduan-csv", title: "Panduan Template CSV" },
      ],
  },
  { label: "Operasional", id: "booking", title: "Membuat Booking" },
  {
    label: "Operasional",
    id: "status",
    title: "Status Sewa",
    sub: [
      { id: "serah-terima", title: "Serah Terima Alat" },
      { id: "terima-kembali", title: "Terima Alat Kembali" },
      { id: "bayar-sisa", title: "Catat Pembayaran Sisa" },
    ],
  },
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

          {/* BAGIAN 3: INVOICE & DOKUMEN */}
          <section className="sw-gs" id="invoice">
            <div className="sw-gs-kicker">Bagian 3</div>
            <h2 className="sw-gs-title">Invoice &amp; Dokumen</h2>
            <p className="sw-gs-lead">
              Atur format nomor invoice, footer, opsi cetak, dan customize layout invoice sesuai
              kebutuhan bisnis.
            </p>

            <h3 id="format-nomor">A. Format Nomor Invoice</h3>
            <Steps>
              <Step n={1}>
                Klik <strong>"Invoice &amp; Dokumen"</strong> di sidebar pengaturan.
              </Step>
              <Step n={2}>
                Atur <strong>Awalan Nomor Invoice</strong>: prefix invoice. Contoh:{" "}
                <code>INV-BTL</code>.
              </Step>
              <Step n={3}>
                Atur <strong>Jumlah Digit</strong>: berapa digit nomor. Contoh: 5 digit ={" "}
                <code>01001</code>, <code>01002</code>, dst.
              </Step>
              <Step n={4}>
                Atur <strong>Mulai Dari Nomor</strong>: nomor awal. Contoh: <code>1001</code>.
              </Step>
            </Steps>
            <Note title="Contoh Nomor">
              Lihat bagian <strong>Contoh Nomor</strong> di bawah pengaturan untuk preview hasil
              format invoice sebelum disimpan.
            </Note>

            <h3 id="opsi-cetak">B. Opsi Cetak Invoice</h3>
            <Steps>
              <Step n={1}>
                <strong>Cetak 2 salinan dalam 1 halaman A4 landscape</strong>
                <Bullets>
                  <li>Aktif: invoice dicetak dengan 2 salinan identik dalam 1 halaman A4 landscape, untuk pelanggan dan arsip toko.</li>
                  <li>Nonaktif: invoice dicetak normal, 1 salinan per halaman dalam A4 portrait.</li>
                </Bullets>
              </Step>
              <Step n={2}>
                <strong>Kolom tanda tangan</strong>
                <Bullets>
                  <li>Aktifkan atau nonaktifkan opsi ini untuk menampilkan atau menyembunyikan area tanda tangan pada invoice.</li>
                  <li>Area tersebut digunakan untuk tanda tangan manual pada invoice yang dicetak.</li>
                </Bullets>
              </Step>
            </Steps>

            <h3 id="tata-letak">C. Tata Letak Invoice</h3>
            <p className="sw-gs-lead">Pilih mode tata letak yang ingin digunakan:</p>
            <Bullets>
              <li><strong>Default:</strong> menggunakan layout bawaan Sewara dengan field standar.</li>
              <li><strong>Custom:</strong> atur layout sesuai kebutuhan. Klik <strong>"Atur Tata Letak Invoice"</strong> untuk membuka editor.</li>
            </Bullets>

            <h4>8 Block Layout</h4>
            <p className="sw-gs-lead">Pada mode Custom, block berikut menentukan susunan informasi di invoice:</p>
            <Steps>
              <Step n={1}><strong>Header</strong>: unggah gambar/logo (JPG/PNG, maksimal 5 MB; rasio 4:1–8:1, lebar ideal 1600 px).</Step>
              <Step n={2}><strong>Info Booking</strong>: pilih field informasi booking.</Step>
              <Step n={3}><strong>Kiri</strong>: pilih field dari dropdown.</Step>
              <Step n={4}><strong>Kanan</strong>: pilih field dari dropdown.</Step>
              <Step n={5}><strong>List Alat</strong>: daftar alat yang disewa; block ini terkunci.</Step>
              <Step n={6}><strong>Kiri Bawah</strong>: pilih field dari dropdown.</Step>
              <Step n={7}><strong>Total Harga</strong>: total harga sewa; block ini terkunci.</Step>
              <Step n={8}><strong>Footer</strong>: atur custom text atau tanda tangan.</Step>
            </Steps>

            <h4>Field yang Bisa Dipilih</h4>
            <div style={{ marginLeft: 24 }}>
              <Bullets>
                <li>No. Invoice</li>
                <li>Tanggal Buat</li>
                <li>Status</li>
                <li>Dibuat Oleh</li>
                <li>Waktu Ambil</li>
                <li>Waktu Kembali</li>
                <li>Durasi</li>
                <li>Diserahkan Oleh</li>
                <li>Penyewa</li>
                <li>No. HP</li>
                <li>Alamat</li>
                <li>Jaminan</li>
                <li>Status Bayar</li>
                <li>Aksesoris</li>
                <li>Tanda Tangan</li>
                <li>Text Footer</li>
              </Bullets>
            </div>

            <h4>Cara Customize</h4>
            <Steps>
              <Step n={1}>Buka modal editor <strong>"Atur Tata Letak Invoice"</strong>.</Step>
              <Step n={2}>
                Pada block yang bisa diubah (A, B, C, D, F, H), klik <strong>"Pilih Field"</strong> atau <strong>"Tambah Field"</strong>, lalu pilih field yang ingin ditampilkan.
                <Bullets>
                  <li>Field yang sudah dipakai di block lain tidak muncul lagi, agar tidak ada duplikasi.</li>
                  <li>Untuk memindahkan field, hapus dari block asal terlebih dahulu. Setelah itu field bisa dipilih di block tujuan.</li>
                </Bullets>
              </Step>
              <Step n={3}>Periksa hasilnya pada preview real-time di sebelah kanan.</Step>
              <Step n={4}>Klik <strong>"Simpan Layout"</strong> untuk menerapkan perubahan ke semua invoice.</Step>
            </Steps>

            <Note title="Reset ke Layout Default">
              Klik <strong>"Reset ke Default"</strong> di bagian "Tata Letak Invoice" untuk kembali
              ke layout standar Sewara.
            </Note>

            <Warn title="Catatan Penting">
              <Bullets>
                <li>Setiap field hanya bisa dipakai satu kali di seluruh invoice.</li>
                <li>Download PDF dan cetak mengikuti layout yang dipilih (Custom atau Default).</li>
                <li>Opsi "Cetak 2 Salinan" hanya berlaku saat print/cetak.</li>
              </Bullets>
            </Warn>


          </section>


          {/* BAGIAN 4: INVENTARIS */}
          <section className="sw-gs" id="inventaris">
            <div className="sw-gs-kicker">Bagian 4</div>
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

            <h3 id="panduan-csv">Panduan Mengisi Template CSV</h3>
            <p style={{ color: "var(--sw-text-2)", marginBottom: 16 }}>
              Template CSV terdiri dari 10 kolom. Jangan mengubah nama kolom di baris pertama: template tidak
              akan terbaca jika header diubah.
            </p>

            <Tbl>
              <thead>
                <TR>
                  <TH>Kolom</TH>
                  <TH>Wajib</TH>
                  <TH>Keterangan</TH>
                </TR>
              </thead>
              <tbody>
                <TR><TD><code>NamaAlat</code></TD><TD><Badge tone="danger">Wajib</Badge></TD><TD>Nama alat yang akan disewakan. Contoh: <code>Sony A7C</code></TD></TR>
                <TR><TD><code>TipeSewa</code></TD><TD><Badge tone="danger">Wajib</Badge></TD><TD>Isi dengan <code>Fleksibel</code> atau <code>Harian</code></TD></TR>
                <TR><TD><code>Harga6J</code></TD><TD><Badge tone="warning">Kondisional</Badge></TD><TD>Tarif sewa 6 jam. Wajib diisi jika TipeSewa = <code>Fleksibel</code>. Kosongkan jika <code>Harian</code></TD></TR>
                <TR><TD><code>Harga12J</code></TD><TD><Badge tone="warning">Kondisional</Badge></TD><TD>Tarif sewa 12 jam. Wajib diisi jika TipeSewa = <code>Fleksibel</code>. Kosongkan jika <code>Harian</code></TD></TR>
                <TR><TD><code>Harga24J</code></TD><TD><Badge tone="danger">Wajib</Badge></TD><TD>Tarif sewa 24 jam. Wajib diisi untuk semua tipe sewa</TD></TR>
                <TR><TD><code>Denda/Jam</code></TD><TD><Badge tone="danger">Wajib</Badge></TD><TD>Denda keterlambatan per jam. Isi <code>0</code> jika tidak ada denda</TD></TR>
                <TR><TD><code>NomorSeri</code></TD><TD><Badge tone="danger">Wajib</Badge></TD><TD>Nomor seri alat. Jika lebih dari 1 unit, pisahkan dengan garis miring <code>/</code> tanpa spasi. Contoh: <code>K1/K2/K3</code></TD></TR>
                <TR><TD><code>Kondisi</code></TD><TD><Badge tone="danger">Wajib</Badge></TD><TD>Kondisi fisik alat. Isi dengan <code>Sangat Baik</code>, <code>Baik</code>, atau <code>Cukup</code></TD></TR>
                <TR><TD><code>Keterangan</code></TD><TD><Badge tone="neutral">Opsional</Badge></TD><TD>Catatan tambahan tentang alat. Boleh dikosongkan</TD></TR>
                <TR><TD><code>Tag Kategori</code></TD><TD><Badge tone="neutral">Opsional</Badge></TD><TD>Kategori alat untuk pengelompokan. Contoh: <code>Kamera</code>, <code>Lensa</code>, <code>Lighting</code></TD></TR>
              </tbody>
            </Tbl>

            <h4>Contoh Pengisian</h4>
            <Tbl variant="example">
              <thead>
                <TR>
                  <TH>NamaAlat</TH><TH>TipeSewa</TH><TH>Harga6J</TH><TH>Harga12J</TH>
                  <TH>Harga24J</TH><TH>Denda/Jam</TH><TH>NomorSeri</TH><TH>Kondisi</TH>
                  <TH>Keterangan</TH><TH>Tag Kategori</TH>
                </TR>
              </thead>
              <tbody>
                <TR><TD>Sony A7C</TD><TD>Fleksibel</TD><TD>210000</TD><TD>240000</TD><TD>270000</TD><TD>0</TD><TD>K1/K2</TD><TD>Sangat Baik</TD><TD></TD><TD>Kamera</TD></TR>
                <TR><TD>Sony A7ii</TD><TD>Fleksibel</TD><TD>145000</TD><TD>160000</TD><TD>185000</TD><TD>5000</TD><TD>K3</TD><TD>Baik</TD><TD>Ada goresan kecil di body</TD><TD>Kamera</TD></TR>
                <TR><TD>Tripod Profesional</TD><TD>Harian</TD><TD></TD><TD></TD><TD>50000</TD><TD>0</TD><TD>T1/T2/T3</TD><TD>Baik</TD><TD></TD><TD>Aksesoris</TD></TR>
              </tbody>
            </Tbl>

            <h4>Hal Penting</h4>
            <Bullets>
              <li>Isi tarif dalam angka saja, <strong>tanpa titik, koma, atau Rp</strong>. Contoh: <code>270000</code> bukan <code>Rp270.000</code></li>
              <li>Jika TipeSewa = <code>Harian</code>, kolom Harga6J dan Harga12J <strong>boleh dikosongkan</strong></li>
              <li>Jika TipeSewa = <code>Fleksibel</code>, kolom Harga6J dan Harga12J <strong>wajib diisi</strong>: jika kosong, produk tidak akan tersimpan</li>
              <li>Pisahkan nomor seri dengan <code>/</code> tanpa spasi. Contoh: <code>K1/K2/K3</code></li>
              <li><strong>Jangan ubah nama kolom</strong> di baris pertama: template tidak akan terbaca jika header diubah</li>
            </Bullets>

            <Warn title="Setelah selesai mengisi">
              Unduh file dari Google Sheets dalam format <strong>CSV</strong>: bukan format XLSX atau format
              lainnya. Klik <strong>File &rarr; Download &rarr; Comma Separated Values (.csv)</strong>
            </Warn>
          </section>

          {/* BAGIAN 5: BOOKING */}
          <section className="sw-gs" id="booking">
            <div className="sw-gs-kicker">Bagian 5</div>
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

          {/* BAGIAN 6: STATUS SEWA */}
          <section className="sw-gs" id="status">
            <div className="sw-gs-kicker">Bagian 6</div>
            <h2 className="sw-gs-title">Melihat dan Mengubah Status Sewa</h2>
            <Steps>
              <Step n={1}>Klik menu <strong>"Operasional"</strong> di sidebar kiri.</Step>
              <Step n={2}>Pilih submenu <strong>"Status Sewa"</strong>.</Step>
              <Step n={3}>
                Halaman menampilkan <strong>papan kanban</strong> dengan kolom-kolom status.
              </Step>
            </Steps>

            <h3>Penjelasan Kolom Kanban</h3>
            <Tbl>
              <thead>
                <TR>
                  <TH>Kolom</TH>
                  <TH>Arti</TH>
                </TR>
              </thead>
              <tbody>
                <TR>
                  <TD><Badge tone="booking">Booking</Badge></TD>
                  <TD>Sudah dibooking, belum diserahkan ke penyewa</TD>
                </TR>
                <TR>
                  <TD><Badge tone="disewa">Disewa</Badge></TD>
                  <TD>Alat sudah diserahkan ke penyewa</TD>
                </TR>
                <TR>
                  <TD><Badge tone="mendekati">Mendekati</Badge></TD>
                  <TD>Waktu kembali kurang dari X jam (bisa diatur di Pengaturan)</TD>
                </TR>
                <TR>
                  <TD><Badge tone="telat">Telat</Badge></TD>
                  <TD>Sudah melewati jadwal kembali</TD>
                </TR>
                <TR>
                  <TD><Badge tone="info">Belum Selesai</Badge></TD>
                  <TD>Barang sudah kembali, tapi pembayaran belum lunas</TD>
                </TR>
                <TR>
                  <TD><Badge tone="selesai">Selesai</Badge></TD>
                  <TD>Alat sudah dikembalikan dan transaksi selesai</TD>
                </TR>
              </tbody>
            </Tbl>

            <Note title="Pengaturan Kolom 'Mendekati'">
              Batas waktu kolom "Mendekati" bisa diatur di menu Pengaturan. Contoh: jika diatur 2 jam,
              maka booking yang kurang dari 2 jam dari jadwal kembali akan otomatis masuk ke kolom
              Mendekati.
            </Note>

            <h3 id="serah-terima">Serah Terima Alat (Booking &rarr; Disewa)</h3>
            <p className="sw-gs-lead">Tujuan: menandakan alat sudah diserahkan ke penyewa.</p>
            <Steps>
              <Step n={1}>Cari booking di kolom <strong>"Booking"</strong>.</Step>
              <Step n={2}>Klik tombol <strong>"Serahkan"</strong>.</Step>
              <Step n={3}>
                Popup konfirmasi muncul: klik <strong>"Serahkan"</strong> untuk lanjut (atau{" "}
                <strong>"Batal"</strong> untuk batal).
              </Step>
              <Step n={4}>
                <p>Sistem cek pembayaran:</p>
                <IChos>
                  <ICho>
                    <strong>Sudah Lunas</strong> → status langsung jadi <strong>"Disewa"</strong> ✓
                  </ICho>
                  <ICho>
                    <strong>Belum Lunas</strong> → popup catat pembayaran muncul → isi &amp; klik{" "}
                    <strong>"Simpan"</strong> → status jadi <strong>"Disewa"</strong>
                  </ICho>
                </IChos>
              </Step>
              <Step n={5}>Card berpindah ke kolom <strong>"Disewa"</strong>.</Step>
            </Steps>
            <Note title="Catatan">
              Jika popup catat pembayaran ditutup, status tetap berubah ke <strong>"Disewa"</strong>,
              tapi pembayaran belum tercatat.
            </Note>

            <h3 id="terima-kembali">Terima Alat Kembali (Disewa &rarr; Selesai/Belum Selesai)</h3>
            <p className="sw-gs-lead">
              Tujuan: menerima alat kembali, cek kondisi, dan ubah status sesuai pembayaran.
            </p>
            <Steps>
              <Step n={1}>
                Cari booking di kolom <strong>"Disewa"</strong>, <strong>"Mendekati"</strong>, atau{" "}
                <strong>"Telat"</strong>.
              </Step>
              <Step n={2}>Klik tombol <strong>"Terima"</strong>.</Step>
              <Step n={3}>
                Popup konfirmasi muncul: klik <strong>"Terima"</strong> untuk lanjut.
              </Step>
              <Step n={4}>
                <p>Sistem cek pembayaran:</p>
                <Bullets>
                  <div>
                    <span>
                      <strong>Belum Lunas</strong> → popup catat pembayaran muncul → isi &amp; klik{" "}
                      <strong>"Simpan"</strong> (atau tutup untuk skip)
                    </span>
                  </div>
                </Bullets>
              </Step>
              <Step n={5}>
                <p>
                  Popup <strong>"Cek Kondisi Unit"</strong> muncul: untuk setiap alat, pilih kondisi:
                </p>
                <IChos>
                  <ICho>
                    <strong>Baik</strong>: tidak ada masalah.
                  </ICho>
                  <ICho>
                    <strong>Bermasalah</strong>: wajib isi catatan (contoh: "Layar pecah",
                    "Baterai rusak", dll).
                  </ICho>
                </IChos>
              </Step>
              <Step n={6}>
                <p>Klik <strong>"Simpan"</strong>:</p>
                <IChos>
                  <ICho>
                    Pembayaran <strong>Lunas</strong> → status jadi <strong>"Selesai"</strong> ✓
                  </ICho>
                  <ICho>
                    Pembayaran <strong>Belum Lunas</strong> → status jadi{" "}
                    <strong>"Belum Selesai"</strong>
                  </ICho>
                </IChos>
              </Step>
            </Steps>

            <h3 id="bayar-sisa">Catat Pembayaran Sisa (Belum Selesai &rarr; Selesai)</h3>
            <p className="sw-gs-lead">Tujuan: melunasi pembayaran yang masih tertunda.</p>
            <Steps>
              <Step n={1}>Cari booking di kolom <strong>"Belum Selesai"</strong>.</Step>
              <Step n={2}>
                Klik tombol <strong>"Bayar"</strong> atau <strong>"Catat Pembayaran"</strong>.
              </Step>
              <Step n={3}>
                <p>Popup catat pembayaran muncul, isi:</p>
                <Bullets>
                  <div><span><strong>Jumlah Bayar</strong></span></div>
                  <div><span><strong>Metode</strong> (Tunai / Transfer / QRIS)</span></div>
                  <div><span><strong>Catatan</strong> (opsional)</span></div>
                </Bullets>
              </Step>
              <Step n={4}>
                <p>Klik <strong>"Simpan"</strong>:</p>
                <IChos>
                  <ICho>
                    Jika <strong>Lunas</strong> → status jadi <strong>"Selesai"</strong> ✓
                  </ICho>
                  <ICho>
                    Jika <strong>Belum Lunas</strong> → tetap di <strong>"Belum Selesai"</strong>,
                    ringkasan sisa ter-update
                  </ICho>
                </IChos>
              </Step>
            </Steps>

            <h3>Tips</h3>
            <Bullets>
              <li>
                Klik tombol <strong>"Detail"</strong> di card booking untuk lihat informasi lengkap
                sebelum ambil aksi.
              </li>
              <li>
                <strong>Drag &amp; drop</strong> card ke kolom lain sebagai alternatif klik tombol
                (jika app support).
              </li>
              <li>
                Catat pembayaran bisa dilakukan di mana saja: saat serah, saat terima, atau nanti dari
                kolom <strong>"Belum Selesai"</strong>.
              </li>
            </Bullets>
          </section>

          {/* BAGIAN 7: TRACKING */}
          <section className="sw-gs" id="tracking">
            <div className="sw-gs-kicker">Bagian 7</div>
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
