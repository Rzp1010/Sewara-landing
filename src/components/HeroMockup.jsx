import {
  IconBox,
  IconCalendar,
  IconKanban,
  IconGantt,
  IconInvoice,
  IconUsers,
  IconAlert,
  IconShield,
  IconCheck,
} from "./icons";

// Mockup dashboard Sewara, disusun murni dari CSS + SVG inline
export default function HeroMockup() {
  return (
    <div className="sw-hero-visual">
      <div className="sw-mock-glow" aria-hidden />

      {/* Kartu melayang */}
      <div className="sw-float sw-float--a" aria-hidden>
        <span className="sw-float-ic sw-float-ic--g">
          <IconCheck />
        </span>
        <span className="sw-float-txt">
          <b>Booking berhasil dibuat</b>
          <span>#INV-0241 · Kamera Sony A7IV</span>
        </span>
      </div>

      <div className="sw-float sw-float--b" aria-hidden>
        <span className="sw-float-ic sw-float-ic--w">
          <IconAlert />
        </span>
        <span className="sw-float-txt">
          <b>Telat terdeteksi</b>
          <span>Kembali 30 menit lalu</span>
        </span>
      </div>

      <div className="sw-float sw-float--c" aria-hidden>
        <span className="sw-float-ic sw-float-ic--p">
          <IconCheck />
        </span>
        <span className="sw-float-txt">
          <b>Lunas · Rp 450.000</b>
          <span>Invoice terkirim</span>
        </span>
      </div>

      {/* Jendela aplikasi */}
      <div className="sw-mock">
        <div className="sw-mock-bar">
          <span className="sw-mock-dots" aria-hidden>
            <i />
            <i />
            <i />
          </span>
          <span className="sw-mock-url">
            <IconCheck />
            sewara.id
          </span>
        </div>

        <div className="sw-mock-body">
          {/* Rail sidebar */}
          <div className="sw-mock-rail" aria-hidden>
            <span><IconBox /></span>
            <span><IconCalendar /></span>
            <span><IconGantt /></span>
            <span><IconKanban /></span>
            <span><IconInvoice /></span>
            <span><IconUsers /></span>
          </div>

          {/* Isi dashboard */}
          <div className="sw-mock-main">
            <div className="sw-mock-stats">
              <div className="sw-mock-stat">
                <div className="sw-mock-stat-label">Jumlah Alat</div>
                <div className="sw-mock-stat-value">124 <small>unit</small></div>
              </div>
              <div className="sw-mock-stat sw-mock-stat--g">
                <div className="sw-mock-stat-label">Sewa Aktif</div>
                <div className="sw-mock-stat-value">18</div>
              </div>
              <div className="sw-mock-stat sw-mock-stat--o">
                <div className="sw-mock-stat-label">Pendapatan</div>
                <div className="sw-mock-stat-value">Rp 6,4jt</div>
              </div>
            </div>

            <div className="sw-mock-kanban">
              <div className="sw-mock-col sw-mock-col--booking">
                <h5>Booking <i>3</i></h5>
                <div className="sw-mock-kcard">
                  <b>Budi Santoso</b>
                  <span>Ambil: 08:00 · 12 jam</span>
                  <span className="sw-badge sw-badge--booking">Booking</span>
                </div>
                <div className="sw-mock-kcard sw-mock-kcard--dim">
                  <b>Rina Wijaya</b>
                  <span>Ambil: 10:30</span>
                </div>
              </div>
              <div className="sw-mock-col sw-mock-col--disewa">
                <h5>Disewa <i>2</i></h5>
                <div className="sw-mock-kcard">
                  <b>Andi Prasetyo</b>
                  <span>Kembali: 18:00</span>
                  <span className="sw-badge sw-badge--disewa">Disewa</span>
                </div>
                <div className="sw-mock-kcard sw-mock-kcard--dim">
                  <b>Dewi Lestari</b>
                  <span>Kembali: besok 09:00</span>
                </div>
              </div>
              <div className="sw-mock-col sw-mock-col--selesai">
                <h5>Selesai <i>9</i></h5>
                <div className="sw-mock-kcard">
                  <b>Sari Amelia</b>
                  <span>Selesai · Lunas</span>
                  <span className="sw-badge sw-badge--selesai">Selesai</span>
                </div>
                <div className="sw-mock-kcard sw-mock-kcard--dim">
                  <b>Hendra Gunawan</b>
                  <span>Selesai · Lunas</span>
                </div>
              </div>
            </div>

            <div className="sw-mock-gantt">
              <h6>Tracking Alat · Timeline</h6>
              <div className="sw-mock-grow">
                <em>K1</em>
                <div className="sw-mock-gtrack">
                  <span className="sw-mock-gbar sw-mock-gbar--a" />
                </div>
              </div>
              <div className="sw-mock-grow">
                <em>K2</em>
                <div className="sw-mock-gtrack">
                  <span className="sw-mock-gbar sw-mock-gbar--b" />
                </div>
              </div>
              <div className="sw-mock-grow">
                <em>L1</em>
                <div className="sw-mock-gtrack">
                  <span className="sw-mock-gbar sw-mock-gbar--free" />
                  <span className="sw-mock-gbar sw-mock-gbar--c" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
