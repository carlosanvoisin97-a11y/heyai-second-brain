import { useState } from "react";

const phases = [
  {
    id: 1,
    title: "ACQUISIZIONE",
    subtitle: "Scouting e Primo Contatto",
    icon: "🔍",
    color: "#1B4332",
    lightColor: "#D8F3DC",
    accentColor: "#40916C",
    duration: "Continuativo",
    steps: [
      {
        label: "Ricerca prospect",
        detail: "LinkedIn Sales Navigator — profili marketing, eventi, HR",
        actor: "New Business (Marani, Candiani, Bresciani, Cosma)",
      },
      {
        label: "Studio profilo",
        detail: "L'azienda fa eventi? Ha divisione interna? → PASSAGGIO PIÙ TIME-CONSUMING",
        actor: "Commerciale",
        painPoint: true,
      },
      {
        label: "Primo contatto",
        detail: "Messaggio LinkedIn o email — la scrittura in sé è rapida",
        actor: "Commerciale",
      },
      {
        label: "Follow-up e nurturing",
        detail: "Interazioni successive, invio presentazione aziendale",
        actor: "Commerciale",
      },
      {
        label: "Qualificazione",
        detail: "Lead tracciato con status in LeadMe",
        actor: "Commerciale",
      },
    ],
    tools: [
      { name: "LinkedIn Sales Navigator", status: "existing" },
      { name: "LeadMe", status: "delivered" },
    ],
    proposed: [
      { name: "LeadMe Evolution — AI Scouting + Lead Scoring", status: "proposed" },
      { name: "Minutes — trascrizione call esplorative", status: "wip" },
    ],
    questions: [
      "Nella tua BU come funziona l'acquisizione? Il cliente (Campari) vi contatta direttamente o fate anche voi scouting attivo?",
      "Per i clienti nuovi (non Campari), come li trovate? Usate LinkedIn?",
      "Quanto tempo dedica il tuo team alla fase pre-vendita rispetto alla gestione?",
    ],
  },
  {
    id: 2,
    title: "PROPOSTA",
    subtitle: "Brief → Brainstorming → Budget → Gara",
    icon: "📋",
    color: "#1A3A5C",
    lightColor: "#D0E2F2",
    accentColor: "#3A7CA5",
    duration: "2-6 settimane",
    steps: [
      {
        label: "Arrivo brief",
        detail: "99,9% via gare (portali acquisto), brief diretto da fidelizzati, o telefonico",
        actor: "Cliente → Commerciale",
      },
      {
        label: "Apertura COM",
        detail: "Email a Calaiò: cliente, evento, data, destinazione, budget, margine → Business Central",
        actor: "Commerciale → Calaiò",
        keyInfo: "COM si apre AL BRIEF, non alla conferma",
      },
      {
        label: "Brainstorming interno",
        detail: "Analisi brief + budget cliente + desiderate → destinazioni alternative → divisione compiti per reparto",
        actor: "Commerciale + reparti coinvolti",
      },
      {
        label: "Programmazione",
        detail: "Ricerca destinazioni, disponibilità hotel, piante/foto sale → budget Excel complessivo",
        actor: "Osmetti (Programmazione)",
      },
      {
        label: "Lavoro parallelo multi-reparto",
        detail: "Biglietteria chiede proposte voli gruppo · PM valuta sale per scenotecnica · Creativo produce claim/render",
        actor: "Biglietteria + PM + Creativo",
      },
      {
        label: "Costruzione budget Excel",
        detail: "Programmazione ha la totalità; Biglietteria e PM inviano i loro costi → budget complessivo",
        actor: "Programmazione",
        keyInfo: "Budget RESTA su Excel — troppo variabile per piattaforma",
      },
      {
        label: "Iterazioni",
        detail: "Fino a 7 attivazioni diverse per COM (cambio destinazione, sala inadeguata, budget...)",
        actor: "Tutti",
        painPoint: true,
      },
      {
        label: "Approvazione + Invio",
        detail: "Garbarino approva per top client → invio proposta",
        actor: "Garbarino → Commerciale",
      },
    ],
    tools: [
      { name: "AI Venue Finder (Gem Gemini)", status: "delivered" },
      { name: "Excel", status: "existing" },
      { name: "Business Central", status: "existing" },
    ],
    proposed: [
      { name: "Minutes → estrazione action item → Flow", status: "wip" },
      { name: "Task Management (Flow) — task per reparto", status: "proposed" },
      { name: "Modulo Creativo — analisi brief + generazione contenuti", status: "proposed" },
    ],
    questions: [
      "Nella tua BU, dato che siete one-man-show, il brief come arriva? Sempre da Campari direttamente?",
      "Aprite anche voi la COM via email a Calaiò al brief? O avete un processo diverso?",
      "Quante iterazioni di budget fai in media prima dell'approvazione?",
      "Chi approva nella tua BU? (\"Chicco\"? — DA VERIFICARE dalla trascrizione)",
      "Quanto tempo impiega in media il reparto creativo (Romano) a darvi output? Media reale, non forchetta.",
      "Quante delle 280 COM/anno coinvolgono il reparto creativo?",
    ],
  },
  {
    id: 3,
    title: "CONVERSIONE",
    subtitle: "Conferma e Passaggio Pratica",
    icon: "✅",
    color: "#5C1A1A",
    lightColor: "#F2D0D0",
    accentColor: "#B83A3A",
    duration: "1-2 settimane",
    steps: [
      {
        label: "Comunicazione esito",
        detail: "Gara vinta/cliente conferma → commerciale inserisce condizioni di pagamento nella COM",
        actor: "Commerciale",
        keyInfo: "Senza condizioni di pagamento, l'operativo NON può procedere",
      },
      {
        label: "Inserimento Progress (apertura)",
        detail: "Zaghi inserisce budget di apertura (il più basso stimato) + marginalità per TUTTE le COM aziendali",
        actor: "Zaghi",
        painPoint: true,
      },
      {
        label: "Passaggio pratica",
        detail: "Call a 3: Programmazione + Operativo + Commerciale. Transfer completo: fornitori, contratti, budget, criticità",
        actor: "Programmazione → Operativo",
        keyInfo: "Da qui la Programmazione SI DISIMPEGNA completamente",
      },
      {
        label: "Assegnazione operativo",
        detail: "Cuzzocrea decide quale operativo assegnare in base a carichi",
        actor: "Cuzzocrea",
      },
      {
        label: "Presentazione al cliente",
        detail: "Commerciale presenta l'operativo → da ora l'operativo è il riferimento logistico",
        actor: "Commerciale + Operativo",
      },
    ],
    tools: [
      { name: "Email", status: "existing" },
      { name: "Excel Progress", status: "existing" },
    ],
    proposed: [
      { name: "Minutes — trascrizione passaggio pratica", status: "wip" },
      { name: "LeadMe Evolution CRM — conversione lead→cliente", status: "proposed" },
      { name: "Tally — ricezione automatica commessa + baseline budget", status: "proposed" },
      { name: "Flow — generazione task da call passaggio pratica", status: "proposed" },
    ],
    questions: [
      "Nella tua BU, dato che siete one-man-show, esiste un 'passaggio pratica'? O la stessa persona che fa la proposta gestisce anche l'esecuzione?",
      "Chi compila il Progress per le tue COM? Tu personalmente? Zaghi? Entrambi?",
      "Come gestisci l'apertura COM verso Calaiò? Stesso processo (email)?",
      "Per i 5-6 progetti complessi dove coinvolgi più persone, come avviene il passaggio di consegne?",
    ],
  },
  {
    id: 4,
    title: "ESECUZIONE",
    subtitle: "Gestione Operativa dell'Evento",
    icon: "⚙️",
    color: "#3D1A5C",
    lightColor: "#E8D0F2",
    accentColor: "#7B3AA5",
    duration: "1-6 mesi",
    steps: [
      {
        label: "4A. Operativi — Conferma fornitori",
        detail: "Ripresa contatti Programmazione, negoziazione, conferma, firma contratti (condizioni cancellazione, pagamento, rooming list)",
        actor: "Operativo",
      },
      {
        label: "4A. Gestione variazioni quotidiane",
        detail: "Cliente aggiunge camere, cambia menù, aggiunge coffee break → budget da 10 a 11 a 15...",
        actor: "Operativo + Cliente",
        painPoint: true,
        keyInfo: "Gestito su Excel + email/call — molto volatile",
      },
      {
        label: "4A. Sopralluoghi + raccolta fatture",
        detail: "Site inspection on-site · Fatture arrivano alla fine (anche mesi dopo il contratto)",
        actor: "Operativo",
        painPoint: true,
      },
      {
        label: "4B. PM/Comunicazione",
        detail: "Allestimento sala, scenotecnica, render 3D, produzione materiali · Budget comunicazione separato",
        actor: "PM (se convention)",
        keyInfo: "Solo se c'è componente convention",
      },
      {
        label: "4C. Biglietteria",
        detail: "Acquisto biglietti aerei/treni, gestione variazioni nome/date · Deadline critiche (nominativi, emissione)",
        actor: "Biglietteria",
      },
      {
        label: "4D. Segreteria",
        detail: "Contatto partecipanti, raccolta liste/documenti, form Crowd, rooming list · NON gestisce budget",
        actor: "Segreteria",
        keyInfo: "SEPARATA dal sistema centrale per GDPR",
      },
      {
        label: "Coordinamento",
        detail: "Commerciale = supervisione lato cliente · Operativo = lato interno · Lorena = vista su operativi + segreteria + biglietteria",
        actor: "Multi-reparto",
        painPoint: true,
        keyInfo: "Nessun sistema centralizzato task — coordinamento via email/call",
      },
    ],
    tools: [
      { name: "Excel (preventivo + Gantt)", status: "existing" },
      { name: "Crowd (form partecipanti)", status: "wip" },
    ],
    proposed: [
      { name: "Task Management (Flow) — task × reparto, vista admin Lorena, alert scadenze", status: "proposed" },
      { name: "Flow — Upload contratti → AI estrae scadenze → alert", status: "proposed" },
      { name: "Flow — Upload fatture → alimentano consuntivo", status: "proposed" },
      { name: "Sally in-context — domande operative su contratti/scadenze", status: "proposed" },
    ],
    questions: [
      "Nel tuo team one-man-show: la stessa persona fa tutto (fornitori, contratti, variazioni, fatture)?",
      "Come tracciate le variazioni di budget durante l'esecuzione? Excel singolo o versioni multiple?",
      "Per i 5-6 progetti complessi con 2-6 persone: come vi coordinate? Email? Call? WhatsApp? File condivisi?",
      "Quanto tempo perdi in coordinamento quando più persone lavorano sullo stesso progetto?",
      "Come raccogli le fatture oggi? Arrivano via email? Le archivi in cartella? Con che frequenza mancano o arrivano tardi?",
      "Usi un Gantt per i progetti complessi? Su Excel?",
      "Quanto spesso il creativo (Romano) è coinvolto nella fase esecutiva (non solo proposta)?",
    ],
  },
  {
    id: 5,
    title: "CHIUSURA",
    subtitle: "Consuntivo → Progress → Fatturazione",
    icon: "📊",
    color: "#5C4A1A",
    lightColor: "#F2EAD0",
    accentColor: "#C4960A",
    duration: "2-4 settimane post-evento",
    steps: [
      {
        label: "Consuntivo lato interno",
        detail: "Operativo raccoglie TUTTE le fatture, verifica costi effettivi per fornitore, prepara quadro completo costi",
        actor: "Operativo",
        painPoint: true,
        keyInfo: "Operativi dimenticano fatture o le inviano incomplete (Cavecchi)",
      },
      {
        label: "Consuntivo lato cliente",
        detail: "Budget nel format Excel del cliente con prezzo venduto — commerciale dà l'OK",
        actor: "Commerciale",
      },
      {
        label: "Template chiusura contabile",
        detail: "Template unico Excel per tutta l'azienda → invio a Calaiò",
        actor: "Responsabile COM",
      },
      {
        label: "Aggiornamento Progress",
        detail: "Zaghi inserisce: budget confermato + budget consuntivo + marginalità effettiva, diviso per reparto (logistica, biglietteria, comunicazione/PM)",
        actor: "Zaghi (per TUTTE le COM)",
        painPoint: true,
        keyInfo: "PAIN POINT #1 — \"tantissimo tempo\", \"da impazzire\" — ricostruzione da email, preventivi, decisioni last-minute",
      },
      {
        label: "Aggiornamento settimanale",
        detail: "Prima linea (Zaghi, Candiani, Bresciani) deve aggiornare il Progress SETTIMANALMENTE, non solo a chiusura",
        actor: "Prima linea commerciale",
        keyInfo: "Frequenza obbligatoria confermata da Cavecchi 09/02",
      },
      {
        label: "Analisi Garbarino",
        detail: "GM verifica costi, margini, scostamenti preventivo vs consuntivo",
        actor: "Garbarino",
      },
      {
        label: "Fatturazione",
        detail: "Ciclo attivo (al cliente) e passivo (da fornitori) — dettagli da verificare con Calaiò",
        actor: "Calaiò / Commerciale",
      },
    ],
    tools: [
      { name: "Excel Progress (compilato da Zaghi)", status: "existing" },
      { name: "Excel Preventivo (avanzamenti)", status: "existing" },
      { name: "Template chiusura contabile", status: "existing" },
    ],
    proposed: [
      { name: "Tally — Progress digitale pre-popolato da task completati", status: "proposed" },
      { name: "Tally — Alert dati mancanti alla chiusura", status: "proposed" },
      { name: "Tally — Dashboard BI per Garbarino (KPI, marginalità, scostamenti)", status: "proposed" },
      { name: "Tally — Fatturazione attiva/passiva + scadenzario", status: "proposed" },
    ],
    questions: [
      "Il template chiusura contabile (quello che mandate a Calaiò) è lo stesso per la tua BU?",
      "Quanto tempo ci metti a chiudere una singola COM? (semplice vs complessa)",
      "Per i progetti con 4-5 persone, come riconcili i costi di ognuno? Quanto tempo in più ci vuole?",
      "Le 280 COM finiscono TUTTE nel Progress o solo quelle sopra una certa soglia?",
      "Quanto tempo dedichi al Progress in un mese? Aggiorni anche tu settimanalmente?",
      "Integrazione Revolut: quanto spesso usate la carta aziendale? Reinserite manualmente i dati nella chiusura?",
    ],
  },
];

const statusConfig = {
  delivered: { label: "Operativo", bg: "#D8F3DC", text: "#1B4332", dot: "#40916C" },
  wip: { label: "In lavorazione", bg: "#FFF3CD", text: "#664D03", dot: "#E6A817" },
  proposed: { label: "Proposto Wave 2", bg: "#D0E2F2", text: "#1A3A5C", dot: "#3A7CA5" },
  existing: { label: "Pre-esistente", bg: "#E9ECEF", text: "#495057", dot: "#868E96" },
};

function ToolBadge({ name, status }) {
  const cfg = statusConfig[status];
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      padding: "4px 10px", borderRadius: 6, fontSize: 12,
      background: cfg.bg, color: cfg.text, fontWeight: 500,
      border: `1px solid ${cfg.dot}22`,
    }}>
      <span style={{ width: 7, height: 7, borderRadius: "50%", background: cfg.dot, flexShrink: 0 }} />
      {name}
    </div>
  );
}

function PhaseCard({ phase, isOpen, onToggle }) {
  return (
    <div style={{
      borderRadius: 12, overflow: "hidden",
      border: isOpen ? `2px solid ${phase.accentColor}` : "1px solid #DEE2E6",
      transition: "all 0.3s ease",
      background: "#fff",
      boxShadow: isOpen ? `0 4px 20px ${phase.accentColor}18` : "0 1px 4px rgba(0,0,0,0.06)",
    }}>
      {/* Header */}
      <div
        onClick={onToggle}
        style={{
          display: "flex", alignItems: "center", gap: 14, padding: "16px 20px",
          cursor: "pointer", background: isOpen ? phase.lightColor : "#FAFAFA",
          transition: "background 0.2s",
          userSelect: "none",
        }}
      >
        <div style={{
          width: 44, height: 44, borderRadius: 10, background: phase.color,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 20, flexShrink: 0,
        }}>
          {phase.icon}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: phase.accentColor, letterSpacing: 1.2, fontFamily: "'JetBrains Mono', monospace" }}>
              FASE {phase.id}
            </span>
            <span style={{ fontSize: 17, fontWeight: 700, color: phase.color, fontFamily: "'DM Sans', sans-serif" }}>
              {phase.title}
            </span>
          </div>
          <div style={{ fontSize: 13, color: "#6C757D", marginTop: 2, fontFamily: "'DM Sans', sans-serif" }}>
            {phase.subtitle}
          </div>
        </div>
        <div style={{ fontSize: 11, color: "#868E96", background: "#F1F3F5", padding: "3px 10px", borderRadius: 20, fontWeight: 500, whiteSpace: "nowrap" }}>
          ⏱ {phase.duration}
        </div>
        <div style={{
          fontSize: 18, color: phase.accentColor, transform: isOpen ? "rotate(180deg)" : "rotate(0)",
          transition: "transform 0.3s", fontWeight: 700,
        }}>
          ▾
        </div>
      </div>

      {/* Expanded Content */}
      {isOpen && (
        <div style={{ padding: "0 20px 20px" }}>
          {/* Process Steps */}
          <div style={{ marginTop: 16 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#868E96", letterSpacing: 1.5, marginBottom: 10, fontFamily: "'JetBrains Mono', monospace" }}>
              STEP DEL PROCESSO
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {phase.steps.map((step, i) => (
                <div key={i} style={{ display: "flex", gap: 12, position: "relative" }}>
                  {/* Timeline */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 24, flexShrink: 0 }}>
                    <div style={{
                      width: 12, height: 12, borderRadius: "50%",
                      background: step.painPoint ? "#DC3545" : phase.accentColor,
                      border: `2px solid ${step.painPoint ? "#DC354540" : phase.accentColor + "40"}`,
                      flexShrink: 0, marginTop: 4,
                      boxShadow: step.painPoint ? "0 0 8px #DC354540" : "none",
                    }} />
                    {i < phase.steps.length - 1 && (
                      <div style={{ width: 2, flex: 1, background: "#DEE2E6", minHeight: 20 }} />
                    )}
                  </div>
                  {/* Content */}
                  <div style={{
                    flex: 1, paddingBottom: 14,
                    borderLeft: "none",
                  }}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 8, flexWrap: "wrap" }}>
                      <span style={{ fontSize: 14, fontWeight: 600, color: "#212529", fontFamily: "'DM Sans', sans-serif" }}>
                        {step.label}
                      </span>
                      {step.painPoint && (
                        <span style={{ fontSize: 10, background: "#FFF5F5", color: "#DC3545", padding: "1px 7px", borderRadius: 4, fontWeight: 600, border: "1px solid #DC354520" }}>
                          ⚠ PAIN POINT
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: 13, color: "#495057", marginTop: 3, lineHeight: 1.5, fontFamily: "'DM Sans', sans-serif" }}>
                      {step.detail}
                    </div>
                    <div style={{ fontSize: 11, color: "#868E96", marginTop: 3, fontStyle: "italic" }}>
                      → {step.actor}
                    </div>
                    {step.keyInfo && (
                      <div style={{
                        marginTop: 6, fontSize: 12, color: phase.color,
                        background: phase.lightColor, padding: "5px 10px", borderRadius: 6,
                        borderLeft: `3px solid ${phase.accentColor}`,
                        fontWeight: 500, fontFamily: "'DM Sans', sans-serif",
                      }}>
                        📌 {step.keyInfo}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools - Two columns */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 18 }}>
            {/* Current Tools */}
            <div style={{ background: "#F8F9FA", borderRadius: 8, padding: 14 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#868E96", letterSpacing: 1.2, marginBottom: 8, fontFamily: "'JetBrains Mono', monospace" }}>
                STRUMENTI ATTUALI
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {phase.tools.map((t, i) => <ToolBadge key={i} {...t} />)}
              </div>
            </div>
            {/* Proposed Tools */}
            <div style={{ background: "#F0F7FF", borderRadius: 8, padding: 14 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#868E96", letterSpacing: 1.2, marginBottom: 8, fontFamily: "'JetBrains Mono', monospace" }}>
                PROPOSTI / IN LAVORAZIONE
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {phase.proposed.map((t, i) => <ToolBadge key={i} {...t} />)}
              </div>
            </div>
          </div>

          {/* Questions for Antonio */}
          <div style={{
            marginTop: 18, background: "#FFFBEB", borderRadius: 8, padding: 14,
            border: "1px solid #F59E0B30",
          }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#92400E", letterSpacing: 1.2, marginBottom: 10, fontFamily: "'JetBrains Mono', monospace" }}>
              🎯 DOMANDE PER ANTONIO CICHELLO
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {phase.questions.map((q, i) => (
                <div key={i} style={{
                  display: "flex", gap: 8, alignItems: "flex-start",
                  fontSize: 13, color: "#78350F", lineHeight: 1.5,
                  fontFamily: "'DM Sans', sans-serif",
                }}>
                  <span style={{
                    background: "#F59E0B", color: "#fff", borderRadius: 4,
                    minWidth: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 11, fontWeight: 700, flexShrink: 0, marginTop: 1,
                  }}>
                    {i + 1}
                  </span>
                  <span>{q}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function NoloopProcessMap() {
  const [openPhases, setOpenPhases] = useState(new Set());
  const [showAll, setShowAll] = useState(false);

  const toggle = (id) => {
    setOpenPhases((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleAll = () => {
    if (showAll) {
      setOpenPhases(new Set());
      setShowAll(false);
    } else {
      setOpenPhases(new Set(phases.map((p) => p.id)));
      setShowAll(true);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet" />

      {/* Header */}
      <div style={{
        background: "#1A1A2E",
        padding: "28px 24px 22px",
        color: "#fff",
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "#7C8DB0", marginBottom: 6, fontFamily: "'JetBrains Mono', monospace" }}>
            NOLOOP — PROCESSO OPERATIVO E2E
          </div>
          <div style={{ fontSize: 24, fontWeight: 700, marginBottom: 4 }}>
            Mappatura Ciclo di Vita Evento
          </div>
          <div style={{ fontSize: 13, color: "#ADB5BD" }}>
            v2 — Basata su interviste Cavecchi, Zaghi, Cichello, Merli · Guida per call 11/02/2026
          </div>
        </div>
      </div>

      {/* Legend + Controls */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "16px 24px 0" }}>
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 12,
        }}>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {Object.entries(statusConfig).map(([key, cfg]) => (
              <div key={key} style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "#6C757D" }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: cfg.dot }} />
                {cfg.label}
              </div>
            ))}
            <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "#DC3545" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#DC3545" }} />
              Pain Point
            </div>
          </div>
          <button
            onClick={toggleAll}
            style={{
              fontSize: 12, fontWeight: 600, color: "#495057",
              background: "#fff", border: "1px solid #DEE2E6",
              borderRadius: 6, padding: "6px 14px", cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseOver={(e) => e.target.style.background = "#F8F9FA"}
            onMouseOut={(e) => e.target.style.background = "#fff"}
          >
            {showAll ? "▴ Chiudi tutto" : "▾ Espandi tutto"}
          </button>
        </div>
      </div>

      {/* Phase Cards */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "16px 24px 40px", display: "flex", flexDirection: "column", gap: 12 }}>
        {/* Flow connector line */}
        {phases.map((phase) => (
          <PhaseCard
            key={phase.id}
            phase={phase}
            isOpen={openPhases.has(phase.id)}
            onToggle={() => toggle(phase.id)}
          />
        ))}

        {/* Footer note */}
        <div style={{
          marginTop: 12, padding: 16, background: "#fff", borderRadius: 10,
          border: "1px dashed #CED4DA", fontSize: 12, color: "#6C757D",
          lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif",
        }}>
          <strong style={{ color: "#495057" }}>📝 Nota per la call:</strong> Questo processo è mappato dalla BU Garbarino. 
          La BU Cichello opera in modalità <strong>one-man-show</strong> (280 eventi/anno, solo 5-6 complessi). 
          L'obiettivo è capire dove il flusso è analogo e dove diverge, per dimensionare correttamente le soluzioni.
          <br /><br />
          <strong style={{ color: "#495057" }}>Strumenti trasversali</strong> (tutte le fasi): 
          <strong>Minutes</strong> 🟡 (trascrizione call → action item) · <strong>Sally</strong> 🔵 (agente AI conversazionale, in-context ovunque) · 
          <strong>Crowd</strong> 🟡 (gestione partecipanti, GDPR-separato)
        </div>
      </div>
    </div>
  );
}