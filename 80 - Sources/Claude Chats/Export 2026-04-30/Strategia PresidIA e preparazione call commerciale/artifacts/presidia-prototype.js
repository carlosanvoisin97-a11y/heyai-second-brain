import { useState, useEffect, useRef } from "react";

const COLORS = {
  bg: "#0B0F1A",
  surface: "#111827",
  surfaceAlt: "#1A2235",
  border: "#1E293B",
  borderLight: "#334155",
  text: "#F1F5F9",
  textMuted: "#94A3B8",
  textDim: "#64748B",
  accent: "#3B82F6",
  accentDim: "#1E40AF",
  green: "#22C55E",
  greenBg: "rgba(34,197,94,0.1)",
  yellow: "#EAB308",
  yellowBg: "rgba(234,179,8,0.1)",
  red: "#EF4444",
  redBg: "rgba(239,68,68,0.1)",
  blue: "#3B82F6",
  blueBg: "rgba(59,130,246,0.1)",
};

const FONT = `'DM Sans', sans-serif`;
const FONT_MONO = `'JetBrains Mono', monospace`;

const MOCK_COMPANY = {
  name: "Caffè Roma S.r.l.",
  piva: "IT12345678901",
  ccnl: "CCNL Commercio",
  settore: "Pubblici Esercizi — Bar/Caffetteria",
  dipendenti: 12,
  consulente: "Dott. Marco Murolo",
  studioConsulente: "Studio Murolo & Associati",
  fatturato: "500.000 – 1.000.000 €",
  orario: "Lun–Sab, 06:30–21:00",
};

const EMPLOYEES = [
  { id: "D001", nome: "Bianchi L.", livello: "4°", contratto: "Indeterminato", tipo: "Full-time", assunzione: "12/03/2019", scadenza: "—", lordo: "1.820", straordinari: 14, ferieMat: 26, ferieGod: 8, ferieRes: 18, status: "yellow" },
  { id: "D002", nome: "Rossi M.", livello: "5°", contratto: "Indeterminato", tipo: "Full-time", assunzione: "05/09/2020", scadenza: "—", lordo: "1.650", straordinari: 6, ferieMat: 26, ferieGod: 18, ferieRes: 8, status: "green" },
  { id: "D003", nome: "Verdi A.", livello: "6°S", contratto: "Apprendistato", tipo: "Full-time", assunzione: "15/01/2025", scadenza: "14/01/2028", lordo: "1.380", straordinari: 0, ferieMat: 26, ferieGod: 22, ferieRes: 4, status: "green" },
  { id: "D004", nome: "Neri F.", livello: "5°", contratto: "Determinato", tipo: "Part-time 24h", assunzione: "01/06/2025", scadenza: "31/05/2026", lordo: "990", straordinari: 22, ferieMat: 17, ferieGod: 4, ferieRes: 13, status: "red" },
  { id: "D005", nome: "Colombo S.", livello: "3°", contratto: "Indeterminato", tipo: "Full-time", assunzione: "22/11/2017", scadenza: "—", lordo: "2.180", straordinari: 8, ferieMat: 26, ferieGod: 14, ferieRes: 12, status: "green" },
  { id: "D006", nome: "Fontana R.", livello: "4°", contratto: "Indeterminato", tipo: "Part-time 20h", assunzione: "03/04/2022", scadenza: "—", lordo: "1.090", straordinari: 18, ferieMat: 22, ferieGod: 6, ferieRes: 16, status: "yellow" },
  { id: "D007", nome: "Greco P.", livello: "6°S", contratto: "Determinato", tipo: "Full-time", assunzione: "01/10/2025", scadenza: "30/09/2026", lordo: "1.380", straordinari: 2, ferieMat: 26, ferieGod: 20, ferieRes: 6, status: "green" },
  { id: "D008", nome: "Moretti G.", livello: "5°", contratto: "Indeterminato", tipo: "Full-time", assunzione: "18/07/2021", scadenza: "—", lordo: "1.650", straordinari: 10, ferieMat: 26, ferieGod: 12, ferieRes: 14, status: "yellow" },
];

const ALERTS = [
  { type: "red", area: "Straordinari", msg: "Neri F. (D004): part-time 24h con 22 ore straordinarie nel mese. Pattern ricorrente da 3 mesi.", action: "Notifica inviata al consulente", time: "Oggi, 09:14" },
  { type: "red", area: "Ferie", msg: "Bianchi L. (D001): 18 giorni di ferie residue. Rischio superamento limite 18 mesi per godimento.", action: "Notifica inviata al consulente", time: "Oggi, 09:14" },
  { type: "yellow", area: "Scadenze", msg: "Neri F. (D004): contratto a termine in scadenza il 31/05/2026. Mancano 78 giorni.", action: "Monitoraggio attivo", time: "Ieri, 14:30" },
  { type: "yellow", area: "Ferie", msg: "Fontana R. (D006): 16 giorni ferie residue su 22 maturate. Valutare piano ferie.", action: "Monitoraggio attivo", time: "Ieri, 14:30" },
  { type: "yellow", area: "Straordinari", msg: "Fontana R. (D006): part-time 20h con 18 ore straordinarie. Verifica supplementari.", action: "Monitoraggio attivo", time: "Ieri, 14:30" },
  { type: "blue", area: "Voci retributive", msg: "Rimborsi spese registrati per 3 dipendenti. Voce non incidente su imponibile.", action: "Decisione registrata: documentazione presente", time: "08/03/2026" },
];

const SICUREZZA_ITEMS = [
  { nome: "DVR — Documento Valutazione Rischi", status: "green", note: "Aggiornato 15/01/2026" },
  { nome: "Nomina RSPP", status: "green", note: "Dott. Ferri — esterno" },
  { nome: "Formazione lavoratori (rischio basso)", status: "yellow", note: "2 dipendenti con formazione scaduta" },
  { nome: "Addetti antincendio", status: "green", note: "Bianchi L., Colombo S." },
  { nome: "Addetti primo soccorso", status: "green", note: "Rossi M., Colombo S." },
  { nome: "Sorveglianza sanitaria", status: "red", note: "Nessun medico competente nominato" },
  { nome: "Formazione datore di lavoro", status: "yellow", note: "Attestato del 2020 — verificare aggiornamento" },
];

const COST_MONTHS = [
  { m: "Ott", val: 18200 }, { m: "Nov", val: 18800 },
  { m: "Dic", val: 22100 }, { m: "Gen", val: 17900 },
  { m: "Feb", val: 18400 }, { m: "Mar", val: 18600 },
];

const SemaphoreIcon = ({ status, size = 10 }) => (
  <span style={{
    display: "inline-block", width: size, height: size, borderRadius: "50%",
    backgroundColor: status === "green" ? COLORS.green : status === "yellow" ? COLORS.yellow : status === "red" ? COLORS.red : COLORS.blue,
    boxShadow: `0 0 ${size}px ${status === "green" ? COLORS.green : status === "yellow" ? COLORS.yellow : status === "red" ? COLORS.red : COLORS.blue}55`,
  }} />
);

const Card = ({ children, style, onClick, hover }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: COLORS.surface, border: `1px solid ${hovered && hover ? COLORS.borderLight : COLORS.border}`,
        borderRadius: 12, padding: "20px 24px", transition: "all 0.2s",
        cursor: onClick ? "pointer" : "default",
        transform: hovered && hover ? "translateY(-2px)" : "none",
        boxShadow: hovered && hover ? "0 8px 24px rgba(0,0,0,0.3)" : "none",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

const StatCard = ({ label, value, sub, status, onClick }) => (
  <Card hover onClick={onClick} style={{ flex: 1, minWidth: 160 }}>
    <div style={{ fontSize: 12, color: COLORS.textDim, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8, fontFamily: FONT_MONO }}>{label}</div>
    <div style={{ fontSize: 28, fontWeight: 700, color: COLORS.text, lineHeight: 1 }}>
      {status && <SemaphoreIcon status={status} size={8} />}{" "}
      {value}
    </div>
    {sub && <div style={{ fontSize: 13, color: COLORS.textMuted, marginTop: 6 }}>{sub}</div>}
  </Card>
);

const MiniBar = ({ values, max, colors }) => (
  <div style={{ display: "flex", gap: 3, alignItems: "end", height: 48 }}>
    {values.map((v, i) => (
      <div key={i} style={{
        flex: 1, height: `${(v / max) * 100}%`, minHeight: 4,
        background: colors?.[i] || COLORS.accent, borderRadius: "3px 3px 0 0",
        transition: "height 0.5s ease",
      }} />
    ))}
  </div>
);

const NavItem = ({ icon, label, active, onClick, badge }) => (
  <div
    onClick={onClick}
    style={{
      display: "flex", alignItems: "center", gap: 12, padding: "10px 16px",
      borderRadius: 8, cursor: "pointer", transition: "all 0.15s",
      background: active ? "rgba(59,130,246,0.12)" : "transparent",
      color: active ? COLORS.accent : COLORS.textMuted,
      fontWeight: active ? 600 : 400, fontSize: 14,
      position: "relative",
    }}
  >
    <span style={{ fontSize: 18, width: 24, textAlign: "center" }}>{icon}</span>
    <span>{label}</span>
    {badge && (
      <span style={{
        marginLeft: "auto", background: COLORS.red, color: "#fff",
        fontSize: 11, fontWeight: 700, borderRadius: 10, padding: "2px 7px",
        minWidth: 18, textAlign: "center",
      }}>{badge}</span>
    )}
  </div>
);

const SectionTitle = ({ children, sub }) => (
  <div style={{ marginBottom: 24 }}>
    <h2 style={{ fontSize: 22, fontWeight: 700, color: COLORS.text, margin: 0 }}>{children}</h2>
    {sub && <p style={{ fontSize: 14, color: COLORS.textMuted, margin: "6px 0 0" }}>{sub}</p>}
  </div>
);

const Table = ({ columns, data, onRowClick }) => (
  <div style={{ overflowX: "auto" }}>
    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
      <thead>
        <tr>
          {columns.map((c, i) => (
            <th key={i} style={{
              textAlign: "left", padding: "10px 12px", color: COLORS.textDim,
              fontSize: 11, textTransform: "uppercase", letterSpacing: 0.8,
              borderBottom: `1px solid ${COLORS.border}`, fontFamily: FONT_MONO, fontWeight: 500,
            }}>{c.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}
            onClick={() => onRowClick?.(row)}
            style={{ cursor: onRowClick ? "pointer" : "default", transition: "background 0.1s" }}
            onMouseEnter={e => e.currentTarget.style.background = COLORS.surfaceAlt}
            onMouseLeave={e => e.currentTarget.style.background = "transparent"}
          >
            {columns.map((c, j) => (
              <td key={j} style={{
                padding: "12px", borderBottom: `1px solid ${COLORS.border}`,
                color: COLORS.text, whiteSpace: "nowrap",
              }}>{c.render ? c.render(row) : row[c.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const AlertRow = ({ alert }) => (
  <div style={{
    display: "flex", gap: 14, padding: "14px 16px", alignItems: "flex-start",
    borderBottom: `1px solid ${COLORS.border}`,
    background: alert.type === "red" ? "rgba(239,68,68,0.04)" : alert.type === "yellow" ? "rgba(234,179,8,0.03)" : "transparent",
  }}>
    <SemaphoreIcon status={alert.type} size={10} />
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ fontSize: 11, color: COLORS.textDim, fontFamily: FONT_MONO, marginBottom: 4 }}>
        {alert.area} — {alert.time}
      </div>
      <div style={{ fontSize: 13, color: COLORS.text, lineHeight: 1.5 }}>{alert.msg}</div>
      <div style={{ fontSize: 12, color: COLORS.textMuted, marginTop: 4, fontStyle: "italic" }}>{alert.action}</div>
    </div>
  </div>
);

/* ─── PAGES ─── */

const PageDashboard = ({ setPage }) => {
  const redCount = ALERTS.filter(a => a.type === "red").length;
  const yellowCount = ALERTS.filter(a => a.type === "yellow").length;
  const costoTotale = EMPLOYEES.reduce((s, e) => s + parseInt(e.lordo.replace(".", "")), 0);
  const ferieResAvg = Math.round(EMPLOYEES.reduce((s, e) => s + e.ferieRes, 0) / EMPLOYEES.length);
  const straAvg = Math.round(EMPLOYEES.reduce((s, e) => s + e.straordinari, 0) / EMPLOYEES.length);

  return (
    <div>
      <SectionTitle sub={`${MOCK_COMPANY.ccnl} · Aggiornamento: Marzo 2026`}>
        Dashboard Organizzativa
      </SectionTitle>

      {/* Semaforo sintetico */}
      <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
        <Card style={{ flex: 1, minWidth: 200, borderLeft: `3px solid ${COLORS.red}` }} hover onClick={() => setPage("notifiche")}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 28, fontWeight: 800, color: COLORS.red }}>{redCount}</span>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.text }}>Criticità</div>
              <div style={{ fontSize: 12, color: COLORS.textMuted }}>Attenzione immediata</div>
            </div>
          </div>
        </Card>
        <Card style={{ flex: 1, minWidth: 200, borderLeft: `3px solid ${COLORS.yellow}` }} hover onClick={() => setPage("notifiche")}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 28, fontWeight: 800, color: COLORS.yellow }}>{yellowCount}</span>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.text }}>Monitoraggio</div>
              <div style={{ fontSize: 12, color: COLORS.textMuted }}>Elementi da osservare</div>
            </div>
          </div>
        </Card>
        <Card style={{ flex: 1, minWidth: 200, borderLeft: `3px solid ${COLORS.green}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 28, fontWeight: 800, color: COLORS.green }}>4</span>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.text }}>Aree stabili</div>
              <div style={{ fontSize: 12, color: COLORS.textMuted }}>Situazione regolare</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Stat cards */}
      <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
        <StatCard label="Dipendenti" value={MOCK_COMPANY.dipendenti} sub="8 FT · 2 PT · 1 App. · 1 Det." onClick={() => setPage("personale")} />
        <StatCard label="Costo Mensile" value={`€${costoTotale.toLocaleString("it")}`} sub="Proiezione annua: €186.480" onClick={() => setPage("costi")} />
        <StatCard label="Ferie Residue (Ø)" value={`${ferieResAvg}gg`} status="yellow" sub="3 dipendenti oltre soglia" onClick={() => setPage("ferie")} />
        <StatCard label="Straordinari (Ø)" value={`${straAvg}h`} status="yellow" sub="2 situazioni anomale" onClick={() => setPage("straordinari")} />
      </div>

      {/* Costo personale trend + Alerts */}
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        <Card style={{ flex: 2, minWidth: 300 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.text, marginBottom: 4 }}>Andamento costo del personale</div>
          <div style={{ fontSize: 12, color: COLORS.textMuted, marginBottom: 16 }}>Ultimi 6 mesi (lordo)</div>
          <div style={{ display: "flex", alignItems: "end", gap: 6, height: 100 }}>
            {COST_MONTHS.map((m, i) => {
              const max = Math.max(...COST_MONTHS.map(x => x.val));
              const h = (m.val / max) * 100;
              const isDec = m.m === "Dic";
              return (
                <div key={i} style={{ flex: 1, textAlign: "center" }}>
                  <div style={{ fontSize: 11, color: COLORS.textDim, marginBottom: 4, fontFamily: FONT_MONO }}>
                    €{(m.val / 1000).toFixed(1)}k
                  </div>
                  <div style={{
                    height: h, background: isDec ? COLORS.yellow : COLORS.accent,
                    borderRadius: "4px 4px 0 0", transition: "height 0.6s ease",
                    opacity: isDec ? 0.9 : 0.7,
                  }} />
                  <div style={{ fontSize: 11, color: COLORS.textDim, marginTop: 6 }}>{m.m}</div>
                </div>
              );
            })}
          </div>
          <div style={{ fontSize: 11, color: COLORS.textDim, marginTop: 12, fontStyle: "italic" }}>
            Picco dicembre: tredicesima mensilità
          </div>
        </Card>

        <Card style={{ flex: 3, minWidth: 340, padding: 0, overflow: "hidden" }}>
          <div style={{ padding: "16px 20px 12px", borderBottom: `1px solid ${COLORS.border}` }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.text }}>Segnalazioni recenti</div>
          </div>
          <div style={{ maxHeight: 240, overflowY: "auto" }}>
            {ALERTS.slice(0, 4).map((a, i) => <AlertRow key={i} alert={a} />)}
          </div>
          <div
            onClick={() => setPage("notifiche")}
            style={{
              padding: "10px 20px", textAlign: "center", fontSize: 12, fontWeight: 600,
              color: COLORS.accent, cursor: "pointer", borderTop: `1px solid ${COLORS.border}`,
            }}
          >
            Vedi tutte le segnalazioni →
          </div>
        </Card>
      </div>

      {/* Osservatorio attività */}
      <Card style={{ marginTop: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.text, marginBottom: 4 }}>
              Osservatorio organizzativo dell'attività
            </div>
            <div style={{ fontSize: 13, color: COLORS.yellow, lineHeight: 1.6 }}>
              ⚠ La distribuzione delle ore lavorate merita attenzione rispetto all'orario di apertura dell'attività.
            </div>
            <div style={{ fontSize: 13, color: COLORS.textMuted, lineHeight: 1.6, marginTop: 2 }}>
              L'organico risulta contenuto rispetto alla dimensione operativa dichiarata.
            </div>
          </div>
          <div style={{ fontSize: 10, color: COLORS.textDim, maxWidth: 300, lineHeight: 1.5, fontStyle: "italic", padding: "8px 12px", background: COLORS.surfaceAlt, borderRadius: 6 }}>
            Gli indicatori sono elaborati sulla base di informazioni organizzative inserite dall'azienda e dei dati contenuti nei cedolini. Non rappresentano una valutazione di conformità normativa.
          </div>
        </div>
      </Card>
    </div>
  );
};

const PagePersonale = () => (
  <div>
    <SectionTitle sub="Struttura attuale dell'organico">Personale</SectionTitle>
    <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
      <StatCard label="Totale" value="8" sub="dipendenti attivi" />
      <StatCard label="Full-time" value="5" />
      <StatCard label="Part-time" value="2" />
      <StatCard label="Apprendisti" value="1" status="blue" />
    </div>
    <Card style={{ padding: 0, overflow: "hidden" }}>
      <Table
        columns={[
          { label: "", key: "status", render: r => <SemaphoreIcon status={r.status} /> },
          { label: "ID", key: "id" },
          { label: "Dipendente", key: "nome" },
          { label: "Livello", key: "livello" },
          { label: "Contratto", key: "contratto" },
          { label: "Tipo", key: "tipo" },
          { label: "Assunzione", key: "assunzione" },
          { label: "Scadenza", key: "scadenza" },
          { label: "Lordo", key: "lordo", render: r => `€${r.lordo}` },
        ]}
        data={EMPLOYEES}
      />
    </Card>
  </div>
);

const PageCosti = () => {
  const total = EMPLOYEES.reduce((s, e) => s + parseInt(e.lordo.replace(".", "")), 0);
  return (
    <div>
      <SectionTitle sub="Costo del personale e proiezioni">Costi</SectionTitle>
      <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
        <StatCard label="Costo Mensile" value={`€${total.toLocaleString("it")}`} />
        <StatCard label="Proiezione Annua" value={`€${(total * 13).toLocaleString("it")}`} sub="Include tredicesima" />
        <StatCard label="Costo Medio/Dip." value={`€${Math.round(total / EMPLOYEES.length).toLocaleString("it")}`} />
      </div>
      <Card style={{ padding: 0, overflow: "hidden" }}>
        <Table
          columns={[
            { label: "Dipendente", key: "nome" },
            { label: "Livello", key: "livello" },
            { label: "Tipo", key: "tipo" },
            { label: "Lordo Mensile", render: r => <span style={{ fontWeight: 600 }}>€{r.lordo}</span> },
            { label: "Straordinari (h)", key: "straordinari", render: r => r.straordinari > 15 ? <span style={{ color: COLORS.red, fontWeight: 600 }}>{r.straordinari}</span> : r.straordinari },
          ]}
          data={EMPLOYEES}
        />
      </Card>
      <Card style={{ marginTop: 16 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.text, marginBottom: 12 }}>Andamento ultimi 6 mesi</div>
        <div style={{ display: "flex", alignItems: "end", gap: 8, height: 120 }}>
          {COST_MONTHS.map((m, i) => {
            const max = Math.max(...COST_MONTHS.map(x => x.val));
            const h = (m.val / max) * 100;
            return (
              <div key={i} style={{ flex: 1, textAlign: "center" }}>
                <div style={{ fontSize: 11, color: COLORS.textDim, marginBottom: 4, fontFamily: FONT_MONO }}>€{(m.val / 1000).toFixed(1)}k</div>
                <div style={{ height: h, background: `linear-gradient(to top, ${COLORS.accentDim}, ${COLORS.accent})`, borderRadius: "4px 4px 0 0" }} />
                <div style={{ fontSize: 11, color: COLORS.textDim, marginTop: 6 }}>{m.m}</div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

const PageFerie = () => (
  <div>
    <SectionTitle sub="Monitoraggio ferie maturate, godute e residue">Ferie</SectionTitle>
    <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
      <StatCard label="Ferie Residue Totali" value={`${EMPLOYEES.reduce((s, e) => s + e.ferieRes, 0)}gg`} status="yellow" />
      <StatCard label="Media Residua" value={`${Math.round(EMPLOYEES.reduce((s, e) => s + e.ferieRes, 0) / EMPLOYEES.length)}gg`} />
      <StatCard label="Criticità" value="1" status="red" sub="Bianchi L. — 18gg residue" />
    </div>
    <Card style={{ padding: 0, overflow: "hidden" }}>
      <Table
        columns={[
          { label: "", render: r => <SemaphoreIcon status={r.ferieRes > 15 ? "red" : r.ferieRes > 10 ? "yellow" : "green"} /> },
          { label: "Dipendente", key: "nome" },
          { label: "Maturate", key: "ferieMat", render: r => `${r.ferieMat}gg` },
          { label: "Godute", key: "ferieGod", render: r => `${r.ferieGod}gg` },
          { label: "Residue", key: "ferieRes", render: r => (
            <span style={{ fontWeight: 600, color: r.ferieRes > 15 ? COLORS.red : r.ferieRes > 10 ? COLORS.yellow : COLORS.text }}>
              {r.ferieRes}gg
            </span>
          )},
          { label: "% Godimento", render: r => {
            const pct = Math.round((r.ferieGod / r.ferieMat) * 100);
            return (
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ flex: 1, height: 6, background: COLORS.surfaceAlt, borderRadius: 3, maxWidth: 80 }}>
                  <div style={{ width: `${pct}%`, height: "100%", background: pct > 60 ? COLORS.green : pct > 40 ? COLORS.yellow : COLORS.red, borderRadius: 3 }} />
                </div>
                <span style={{ fontSize: 12, color: COLORS.textMuted }}>{pct}%</span>
              </div>
            );
          }},
        ]}
        data={EMPLOYEES}
      />
    </Card>
    <Card style={{ marginTop: 16, borderLeft: `3px solid ${COLORS.yellow}` }}>
      <div style={{ fontSize: 12, color: COLORS.yellow, fontWeight: 600, marginBottom: 4 }}>Nota informativa</div>
      <div style={{ fontSize: 13, color: COLORS.textMuted, lineHeight: 1.6 }}>
        Il CCNL Commercio prevede che almeno 2 settimane di ferie siano godute nell'anno di maturazione e il residuo entro 18 mesi successivi.
        Per eventuali valutazioni specifiche è opportuno confrontarsi con il consulente del lavoro.
      </div>
    </Card>
  </div>
);

const PageStraordinari = () => (
  <div>
    <SectionTitle sub="Frequenza, andamento mensile e pattern anomali">Straordinari</SectionTitle>
    <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
      <StatCard label="Ore Totali Mese" value={`${EMPLOYEES.reduce((s, e) => s + e.straordinari, 0)}h`} />
      <StatCard label="Media / Dipendente" value={`${Math.round(EMPLOYEES.reduce((s, e) => s + e.straordinari, 0) / EMPLOYEES.length)}h`} />
      <StatCard label="Pattern Anomali" value="2" status="red" sub="Neri F., Fontana R." />
    </div>
    <Card style={{ padding: 0, overflow: "hidden" }}>
      <Table
        columns={[
          { label: "", render: r => <SemaphoreIcon status={r.straordinari > 18 ? "red" : r.straordinari > 12 ? "yellow" : "green"} /> },
          { label: "Dipendente", key: "nome" },
          { label: "Tipo", key: "tipo" },
          { label: "Ore Straord.", render: r => (
            <span style={{ fontWeight: 600, color: r.straordinari > 18 ? COLORS.red : r.straordinari > 12 ? COLORS.yellow : COLORS.text }}>
              {r.straordinari}h
            </span>
          )},
          { label: "Proiezione Annua", render: r => `${r.straordinari * 12}h` },
          { label: "Pattern", render: r => {
            if (r.tipo.includes("Part-time") && r.straordinari > 15) return <span style={{ color: COLORS.red, fontSize: 12, fontWeight: 600 }}>⚠ PT + straordinari elevati</span>;
            if (r.straordinari > 12) return <span style={{ color: COLORS.yellow, fontSize: 12 }}>Da monitorare</span>;
            return <span style={{ color: COLORS.textDim, fontSize: 12 }}>Regolare</span>;
          }},
        ]}
        data={EMPLOYEES.sort((a, b) => b.straordinari - a.straordinari)}
      />
    </Card>
    <Card style={{ marginTop: 16, borderLeft: `3px solid ${COLORS.red}` }}>
      <div style={{ fontSize: 12, color: COLORS.red, fontWeight: 600, marginBottom: 4 }}>Segnalazione critica</div>
      <div style={{ fontSize: 13, color: COLORS.textMuted, lineHeight: 1.6 }}>
        Neri F. (D004): part-time 24h con 22 ore straordinarie mensili. Pattern ricorrente da 3 mesi.
        La presenza sistematica di straordinari su contratto part-time merita verifica con il consulente del lavoro.
      </div>
    </Card>
  </div>
);

const PageSicurezza = () => (
  <div>
    <SectionTitle sub="Checklist adempimenti principali in materia di sicurezza sul lavoro">Sicurezza</SectionTitle>
    <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
      <StatCard label="Adempimenti OK" value="3" status="green" />
      <StatCard label="Da verificare" value="2" status="yellow" />
      <StatCard label="Criticità" value="1" status="red" sub="Sorveglianza sanitaria" />
    </div>
    <Card style={{ padding: 0, overflow: "hidden" }}>
      {SICUREZZA_ITEMS.map((item, i) => (
        <div key={i} style={{
          display: "flex", alignItems: "center", gap: 14, padding: "14px 20px",
          borderBottom: i < SICUREZZA_ITEMS.length - 1 ? `1px solid ${COLORS.border}` : "none",
        }}>
          <SemaphoreIcon status={item.status} size={10} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, color: COLORS.text, fontWeight: 500 }}>{item.nome}</div>
            <div style={{ fontSize: 12, color: COLORS.textMuted, marginTop: 2 }}>{item.note}</div>
          </div>
          <div style={{
            fontSize: 11, fontWeight: 600, padding: "4px 10px", borderRadius: 6,
            background: item.status === "green" ? COLORS.greenBg : item.status === "yellow" ? COLORS.yellowBg : COLORS.redBg,
            color: item.status === "green" ? COLORS.green : item.status === "yellow" ? COLORS.yellow : COLORS.red,
          }}>
            {item.status === "green" ? "Presente" : item.status === "yellow" ? "Da verificare" : "Assente"}
          </div>
        </div>
      ))}
    </Card>
    <Card style={{ marginTop: 16, borderLeft: `3px solid ${COLORS.red}` }}>
      <div style={{ fontSize: 12, color: COLORS.red, fontWeight: 600, marginBottom: 4 }}>Intervento necessario</div>
      <div style={{ fontSize: 13, color: COLORS.textMuted, lineHeight: 1.6 }}>
        La sorveglianza sanitaria risulta non attivata. In assenza di nomina del medico competente, l'azienda potrebbe essere esposta a contestazioni in caso di ispezione.
        Notifica inviata al referente sicurezza.
      </div>
    </Card>
  </div>
);

const PageNotifiche = () => (
  <div>
    <SectionTitle sub="Tutte le segnalazioni organizzative attive">Segnalazioni</SectionTitle>
    <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
      {[
        { label: "Critiche", count: ALERTS.filter(a => a.type === "red").length, color: COLORS.red },
        { label: "Monitoraggio", count: ALERTS.filter(a => a.type === "yellow").length, color: COLORS.yellow },
        { label: "Registrate", count: ALERTS.filter(a => a.type === "blue").length, color: COLORS.blue },
      ].map((g, i) => (
        <Card key={i} style={{ flex: 1, minWidth: 140, borderLeft: `3px solid ${g.color}` }}>
          <div style={{ fontSize: 24, fontWeight: 800, color: g.color }}>{g.count}</div>
          <div style={{ fontSize: 12, color: COLORS.textMuted }}>{g.label}</div>
        </Card>
      ))}
    </div>
    <Card style={{ padding: 0, overflow: "hidden" }}>
      {ALERTS.map((a, i) => <AlertRow key={i} alert={a} />)}
    </Card>
  </div>
);

const PageQA = () => {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState(null);
  const [typing, setTyping] = useState(false);

  const sampleQA = [
    { q: "Quanti giorni di preavviso per licenziamento 4° livello?", a: "Il CCNL Commercio prevede, per il 4° livello con anzianità fino a 5 anni, un preavviso di 20 giorni di calendario. Per anzianità da 5 a 10 anni: 30 giorni. Oltre i 10 anni: 45 giorni. (Art. 234 CCNL Commercio)\n\nPer eventuali valutazioni specifiche è opportuno confrontarsi con il consulente del lavoro." },
    { q: "Quante ore di straordinario massime annue?", a: "Il CCNL Commercio prevede un limite massimo di 250 ore annue di lavoro straordinario per ciascun lavoratore. Le ore straordinarie devono essere compensate con le maggiorazioni previste dall'art. 137. (Art. 136 CCNL Commercio)\n\nPer eventuali valutazioni specifiche è opportuno confrontarsi con il consulente del lavoro." },
    { q: "Durata massima apprendistato professionalizzante?", a: "Il CCNL Commercio prevede che l'apprendistato professionalizzante abbia durata massima di 36 mesi. Per il livello 6°S la durata è ridotta a 24 mesi. (Art. 50 CCNL Commercio)\n\nPer eventuali valutazioni specifiche è opportuno confrontarsi con il consulente del lavoro." },
  ];

  const handleAsk = (q) => {
    const question = q || query;
    if (!question.trim()) return;
    setQuery(question);
    setAnswer(null);
    setTyping(true);
    const match = sampleQA.find(s => question.toLowerCase().includes(s.q.toLowerCase().slice(0, 20)));
    setTimeout(() => {
      setTyping(false);
      setAnswer(match ? match.a : "Il CCNL Commercio disciplina questa materia in modo specifico. Per una risposta puntuale alla tua domanda, il sistema sta elaborando il contenuto normativo pertinente.\n\nPer eventuali valutazioni specifiche è opportuno confrontarsi con il consulente del lavoro.");
    }, 1500);
  };

  return (
    <div>
      <SectionTitle sub="Domande informative su CCNL e normativa del lavoro">Q&A Normativo</SectionTitle>

      <Card style={{ marginBottom: 20 }}>
        <div style={{ display: "flex", gap: 10 }}>
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleAsk()}
            placeholder="Fai una domanda sul CCNL Commercio..."
            style={{
              flex: 1, padding: "12px 16px", fontSize: 14, color: COLORS.text,
              background: COLORS.surfaceAlt, border: `1px solid ${COLORS.border}`,
              borderRadius: 8, outline: "none", fontFamily: FONT,
            }}
          />
          <button
            onClick={() => handleAsk()}
            style={{
              padding: "12px 24px", fontSize: 14, fontWeight: 600, color: "#fff",
              background: COLORS.accent, border: "none", borderRadius: 8,
              cursor: "pointer", fontFamily: FONT,
            }}
          >
            Chiedi
          </button>
        </div>
      </Card>

      {typing && (
        <Card>
          <div style={{ color: COLORS.textMuted, fontSize: 14 }}>
            <span style={{ animation: "pulse 1.5s ease infinite" }}>Analisi normativa in corso...</span>
          </div>
        </Card>
      )}

      {answer && (
        <Card style={{ borderLeft: `3px solid ${COLORS.accent}` }}>
          <div style={{ fontSize: 11, color: COLORS.accent, fontWeight: 600, fontFamily: FONT_MONO, marginBottom: 8 }}>RISPOSTA INFORMATIVA</div>
          <div style={{ fontSize: 14, color: COLORS.text, lineHeight: 1.7, whiteSpace: "pre-wrap" }}>{answer}</div>
        </Card>
      )}

      <div style={{ marginTop: 24 }}>
        <div style={{ fontSize: 13, color: COLORS.textDim, marginBottom: 12, fontWeight: 600 }}>Domande frequenti</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {sampleQA.map((s, i) => (
            <Card key={i} hover onClick={() => { setQuery(s.q); handleAsk(s.q); }} style={{ padding: "12px 16px" }}>
              <div style={{ fontSize: 13, color: COLORS.accent }}>{s.q}</div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

const PageScadenze = () => {
  const scadenze = [
    { dip: "Neri F.", tipo: "Contratto a termine", data: "31/05/2026", giorni: 78, status: "yellow" },
    { dip: "Greco P.", tipo: "Contratto a termine", data: "30/09/2026", giorni: 200, status: "green" },
    { dip: "Verdi A.", tipo: "Apprendistato", data: "14/01/2028", giorni: 672, status: "green" },
  ];
  return (
    <div>
      <SectionTitle sub="Contratti a termine, apprendistati e scadenze attive">Scadenze</SectionTitle>
      <Card style={{ padding: 0, overflow: "hidden" }}>
        <Table
          columns={[
            { label: "", render: r => <SemaphoreIcon status={r.status} /> },
            { label: "Dipendente", key: "dip" },
            { label: "Tipologia", key: "tipo" },
            { label: "Scadenza", key: "data" },
            { label: "Giorni Residui", render: r => (
              <span style={{ fontWeight: 600, color: r.giorni < 90 ? COLORS.yellow : COLORS.text }}>{r.giorni}gg</span>
            )},
          ]}
          data={scadenze}
        />
      </Card>
    </div>
  );
};

/* ─── APP ─── */

export default function PresidIA() {
  const [page, setPage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const pages = {
    dashboard: <PageDashboard setPage={setPage} />,
    personale: <PagePersonale />,
    costi: <PageCosti />,
    ferie: <PageFerie />,
    straordinari: <PageStraordinari />,
    scadenze: <PageScadenze />,
    sicurezza: <PageSicurezza />,
    notifiche: <PageNotifiche />,
    qa: <PageQA />,
  };

  const navItems = [
    { key: "dashboard", icon: "◉", label: "Dashboard" },
    { key: "personale", icon: "◎", label: "Personale" },
    { key: "costi", icon: "€", label: "Costi" },
    { key: "ferie", icon: "☀", label: "Ferie" },
    { key: "straordinari", icon: "⏱", label: "Straordinari" },
    { key: "scadenze", icon: "⏳", label: "Scadenze" },
    { key: "sicurezza", icon: "⛑", label: "Sicurezza" },
    { key: "notifiche", icon: "🔔", label: "Segnalazioni", badge: "2" },
    { key: "qa", icon: "💬", label: "Q&A Normativo" },
  ];

  return (
    <div style={{
      fontFamily: FONT, background: COLORS.bg, color: COLORS.text,
      minHeight: "100vh", display: "flex", opacity: mounted ? 1 : 0,
      transition: "opacity 0.5s ease",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: ${COLORS.borderLight}; border-radius: 3px; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
      `}</style>

      {/* Sidebar */}
      <div style={{
        width: sidebarOpen ? 240 : 0, minHeight: "100vh", background: COLORS.surface,
        borderRight: `1px solid ${COLORS.border}`, display: "flex", flexDirection: "column",
        transition: "width 0.3s ease", overflow: "hidden", flexShrink: 0,
      }}>
        {/* Logo */}
        <div style={{ padding: "24px 20px 20px", borderBottom: `1px solid ${COLORS.border}` }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: COLORS.text, letterSpacing: -0.5 }}>
            Presid<span style={{ color: COLORS.accent }}>IA</span>
          </div>
          <div style={{ fontSize: 10, color: COLORS.textDim, marginTop: 4, textTransform: "uppercase", letterSpacing: 1.5, fontFamily: FONT_MONO }}>
            Governance Organizzativa
          </div>
        </div>

        {/* Company */}
        <div style={{ padding: "16px 20px", borderBottom: `1px solid ${COLORS.border}` }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.text }}>{MOCK_COMPANY.name}</div>
          <div style={{ fontSize: 11, color: COLORS.textDim, marginTop: 2 }}>{MOCK_COMPANY.settore}</div>
        </div>

        {/* Nav */}
        <div style={{ padding: "12px 10px", flex: 1 }}>
          {navItems.map(n => (
            <NavItem
              key={n.key} icon={n.icon} label={n.label}
              active={page === n.key} badge={n.badge}
              onClick={() => setPage(n.key)}
            />
          ))}
        </div>

        {/* Consulente */}
        <div style={{ padding: "16px 20px", borderTop: `1px solid ${COLORS.border}` }}>
          <div style={{ fontSize: 10, color: COLORS.textDim, textTransform: "uppercase", letterSpacing: 1, fontFamily: FONT_MONO, marginBottom: 6 }}>Consulente</div>
          <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.text }}>{MOCK_COMPANY.consulente}</div>
          <div style={{ fontSize: 11, color: COLORS.textDim }}>{MOCK_COMPANY.studioConsulente}</div>
        </div>
      </div>

      {/* Main */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        {/* Header */}
        <div style={{
          height: 56, display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0 28px", borderBottom: `1px solid ${COLORS.border}`, background: COLORS.surface,
          flexShrink: 0,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span onClick={() => setSidebarOpen(!sidebarOpen)} style={{ cursor: "pointer", fontSize: 18, color: COLORS.textMuted }}>☰</span>
            <span style={{ fontSize: 14, color: COLORS.textMuted }}>
              {navItems.find(n => n.key === page)?.label || "Dashboard"}
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 12, color: COLORS.textDim }}>
            <span style={{ fontFamily: FONT_MONO }}>DEMO · PROTOTIPO</span>
            <div style={{
              width: 32, height: 32, borderRadius: "50%", background: COLORS.accent,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 13, fontWeight: 700, color: "#fff",
            }}>CR</div>
          </div>
        </div>

        {/* Content */}
        <div style={{ flex: 1, overflowY: "auto", padding: "28px" }}>
          {pages[page]}
        </div>
      </div>
    </div>
  );
}