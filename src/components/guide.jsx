import { IconInfo, IconAlert } from "./icons";

// ---------- Blok penyusun halaman panduan (server-safe) ----------

export function Steps({ children }) {
  return <div className="sw-gsteps">{children}</div>;
}

export function Step({ n, children }) {
  return (
    <div className="sw-gstep">
      <span className="sw-gstep-num">{n}</span>
      <div className="sw-gstep-body">{children}</div>
    </div>
  );
}

export function Bullets({ children }) {
  return <div className="sw-bullets">{children}</div>;
}

export function Note({ title, children }) {
  return (
    <div className="sw-note" role="note">
      <span className="sw-note-icon"><IconInfo /></span>
      <div className="sw-note-body">
        <div className="sw-note-title">{title}</div>
        {children}
      </div>
    </div>
  );
}

export function Warn({ title, children }) {
  return (
    <div className="sw-warn" role="alert">
      <span className="sw-warn-icon"><IconAlert /></span>
      <div className="sw-warn-body">
        <div className="sw-warn-title">{title}</div>
        {children}
      </div>
    </div>
  );
}

export function OptCards({ children }) {
  return <div className="sw-opt">{children}</div>;
}

export function OptCard({ title, desc, highlight = false }) {
  return (
    <div className={`sw-opt-card${highlight ? " sw-opt-card--hl" : ""}`}>
      <div className="sw-opt-title">{title}</div>
      <div className="sw-opt-desc">{desc}</div>
    </div>
  );
}

export function ICho({ children }) {
  return <div className="sw-icho">{children}</div>;
}

export function IChos({ children }) {
  return <div className="sw-ichos">{children}</div>;
}

export function Badge({ tone = "neutral", children }) {
  return <span className={`sw-badge sw-badge--${tone}`}>{children}</span>;
}

export function Tbl({ children, variant = "default" }) {
  const cls = variant === "example" ? "sw-tbl sw-tbl--ex" : "sw-tbl";
  return (
    <div className="sw-tbl-wrap">
      <table className={cls}>{children}</table>
    </div>
  );
}

export function TH({ children }) {
  return <th>{children}</th>;
}

export function TD({ children }) {
  return <td>{children}</td>;
}

export function TR({ children }) {
  return <tr>{children}</tr>;
}
