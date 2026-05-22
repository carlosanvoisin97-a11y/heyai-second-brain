const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, BorderStyle, WidthType, ShadingType, LevelFormat,
  HeadingLevel, PageBreak } = require('docx');
const fs = require('fs');

// ===================== DESIGN TOKENS =====================
const PRIMARY = "1B365D";   // navy
const ACCENT  = "2E75B6";   // blue
const LIGHT   = "D5E8F0";   // light blue
const WARN    = "F2DCDB";   // light red
const GREEN   = "E2EFDA";   // light green
const GRAY    = "F5F5F5";
const WHITE   = "FFFFFF";

const border  = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const borders = { top: border, bottom: border, left: border, right: border };
const noBorder = { style: BorderStyle.NONE, size: 0 };
const noBorders = { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder };
const cellPad = { top: 80, bottom: 80, left: 120, right: 120 };

const TW = 9026; // A4 content width

// ===================== HELPERS =====================
const h1 = (text) => new Paragraph({ heading: HeadingLevel.HEADING_1, spacing: { before: 360, after: 200 }, children: [new TextRun({ text, bold: true, size: 32, font: "Arial", color: PRIMARY })] });
const h2 = (text) => new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 280, after: 160 }, children: [new TextRun({ text, bold: true, size: 28, font: "Arial", color: ACCENT })] });
const h3 = (text) => new Paragraph({ spacing: { before: 200, after: 120 }, children: [new TextRun({ text, bold: true, size: 24, font: "Arial", color: PRIMARY })] });
const p = (text, opts = {}) => new Paragraph({ spacing: { after: 120 }, alignment: opts.align, children: [new TextRun({ text, size: 22, font: "Arial", ...opts })] });
const pb = (label, value) => new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: label, bold: true, size: 22, font: "Arial" }), new TextRun({ text: value, size: 22, font: "Arial" })] });
const br = () => new Paragraph({ children: [new PageBreak()] });

function makeCell(text, opts = {}) {
  const runs = Array.isArray(text) ? text : [new TextRun({ text: String(text), size: opts.size || 20, font: "Arial", bold: opts.bold, color: opts.fontColor || "000000" })];
  return new TableCell({
    borders, margins: cellPad,
    width: opts.width ? { size: opts.width, type: WidthType.DXA } : undefined,
    shading: opts.bg ? { fill: opts.bg, type: ShadingType.CLEAR } : undefined,
    verticalAlign: opts.vAlign,
    children: [new Paragraph({ alignment: opts.align, spacing: { after: 0 }, children: runs })]
  });
}

function makeTable(headers, rows, colWidths) {
  const tw = colWidths.reduce((a,b)=>a+b, 0);
  const headerRow = new TableRow({
    children: headers.map((h, i) => makeCell(h, { bold: true, bg: PRIMARY, fontColor: WHITE, width: colWidths[i], size: 18 }))
  });
  const dataRows = rows.map(row => new TableRow({
    children: row.map((cell, i) => {
      if (typeof cell === 'object' && cell.text !== undefined) {
        return makeCell(cell.text, { width: colWidths[i], bg: cell.bg, bold: cell.bold, size: cell.size || 20 });
      }
      return makeCell(cell, { width: colWidths[i] });
    })
  }));
  return new Table({ width: { size: tw, type: WidthType.DXA }, columnWidths: colWidths, rows: [headerRow, ...dataRows] });
}

// ===================== CONTENT =====================
const content = [];

// ===== COVER PAGE =====
content.push(new Paragraph({ spacing: { before: 4000 } }));
content.push(new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "PROPOSTA COMMERCIALE", size: 48, bold: true, font: "Arial", color: PRIMARY })] }));
content.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 200 }, children: [new TextRun({ text: "Piattaforma AI per Ottimizzazione Operations", size: 32, font: "Arial", color: ACCENT })] }));
content.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 100 }, children: [new TextRun({ text: "Modulo Logistica & Stock Management + Modulo Gestione Vendite", size: 24, font: "Arial", color: "666666" })] }));
content.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 600 }, children: [new TextRun({ text: "Fase 1 — MVP", size: 28, bold: true, font: "Arial", color: ACCENT })] }));
content.push(new Paragraph({ spacing: { after: 40 }, alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Preparato per:", size: 22, font: "Arial", color: "666666" })] }));
content.push(new Paragraph({ spacing: { after: 200 }, alignment: AlignmentType.CENTER, children: [new TextRun({ text: "NOT (NoLoop on Trade)", size: 28, bold: true, font: "Arial", color: PRIMARY })] }));
content.push(new Paragraph({ spacing: { after: 40 }, alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Preparato da:", size: 22, font: "Arial", color: "666666" })] }));
content.push(new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "HeyAI — Digital Strategy & AI Solutions", size: 24, bold: true, font: "Arial", color: ACCENT })] }));
content.push(new Paragraph({ spacing: { before: 800 }, alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Febbraio 2026  |  Versione 1.0  |  CONFIDENZIALE", size: 20, font: "Arial", color: "999999" })] }));

content.push(br());

// ===== 1. EXECUTIVE SUMMARY =====
content.push(h1("1. Executive Summary"));
content.push(p("NOT gestisce oggi circa 30-33 pop-up store in centri commerciali italiani con un team Operations di 20 persone che opera attraverso processi manuali frammentati su Excel, Google Sheets e WhatsApp. L'inefficienza operativa limita la scalabilità e genera errori sistematici nella gestione di stock, vendite e reportistica."));
content.push(p("La presente proposta copre la progettazione, lo sviluppo e l'implementazione dei primi due moduli della piattaforma AI per NOT:"));
content.push(pb("Modulo Logistica & Stock Management: ", "gestione predittiva degli ordini, tracciamento stock end-to-end (magazzini e pop-up), workflow di approvazione e alert automatici."));
content.push(pb("Modulo Gestione Vendite: ", "form unico di registrazione vendite (sostitutivo della tripla compilazione attuale), cross-check automatici, dashboard real-time, timbratura digitale e analytics."));

content.push(h3("Investimento proposto"));
content.push(makeTable(
  ["Pacchetto", "Scope", "Investimento", "Timeline"],
  [
    ["Base", "Core MVP: logistica + vendite senza AI avanzata e senza integrazioni esterne", {text:"€ 135.000", bold:true}, "16 settimane"],
    [{text:"Recommended", bold:true, bg:GREEN}, {text:"MVP completo: AI predittiva, form unico, dashboard, timbratura digitale", bg:GREEN}, {text:"€ 168.000", bold:true, bg:GREEN}, {text:"20 settimane", bg:GREEN}],
    ["Advanced", "MVP + integrazioni BAT/Pard (API o RPA) + calendario turni + analytics avanzati", {text:"€ 215.000", bold:true}, "24 settimane"]
  ],
  [1800, 3226, 1800, 1200]
));
content.push(new Paragraph({ spacing: { after: 80 } }));

content.push(h3("Razionale economico"));
content.push(p("Il business case documentato identifica un risparmio operativo annuo a regime di € 214.268 (scenario realistico), con un saving cumulato a 3 anni di € 557.097. L'investimento nel pacchetto Recommended genera un payback in circa 9-10 mesi dalla messa in produzione. Il 58% del saving proviene dal modulo Vendite, il 42% dal modulo Logistica."));

content.push(h3("Dipendenze principali lato cliente"));
content.push(p("Consegna dati storici vendite (5 anni) e giacenze iniziali in formato Excel strutturato entro il kick-off. Disponibilità di Carmen/Laila come product owner per validazione requisiti e UAT (4-8 ore/settimana). Verifica disponibilità API con BAT e Pard (impatta opzione integrazione). Risoluzione tema GDPR con reparto legale Noloop (impatta form unificato con dati clienti finali)."));

content.push(br());

// ===== 2. SCOPE E DELIVERABLE =====
content.push(h1("2. Scope e Deliverable"));

content.push(h2("2.1 Modulo Logistica & Stock Management"));
content.push(h3("Funzionalità incluse — MVP"));
content.push(p("F0 — Setup iniziale: Interfaccia censimento giacenze iniziali per ogni pop-up e magazzino (Milano e Roma). Import storico vendite 5 anni per alimentazione modello predittivo."));
content.push(p("F1 — Modello predittivo e generazione ordini: AI basata su storico vendite, stagionalità e trend. Genera proposte ordine a BAT (aggregato) e proposte replenishment per singolo pop-up. Gestione ereditarietà profilo vendita per nuovi prodotti. Parametri regolabili per calibrazione modello. Ottimizzazione distribuzione in caso di stock insufficiente."));
content.push(p("F2 — Workflow approvazione: Visualizzazione, modifica e approvazione ordini (Carmen/Laila). Conversione ordine approvato in task per magazziniere. Vista Area Manager in sola lettura."));
content.push(p("F3 — Check-out magazzino: Conferma quantità caricate per spedizione (aggregate, non per singolo prodotto). Alert discrepanza automatico. Aggiornamento giacenze magazzino. Check-in merce da BAT con verifica bolla."));
content.push(p("F4 — Check-in pop-up: Notifica spedizione in arrivo con dettaglio prodotti. Conferma ricezione con alert discrepanza. Registrazione codici myglow al check-in (inserimento manuale alfanumerico). Aggiornamento automatico giacenze pop-up."));

content.push(h3("Funzionalità escluse / future option"));
content.push(p("Integrazione Google Trends per pattern stagionali (evoluzione futura). Scansione barcode prodotto per prodotto a magazzino (esclusa per decisione operativa). Integrazione diretta con sistemi BAT per visibilità stock fornitore (da valutare come evolutiva). Gestione rapporti commerciali/economici con BAT."));

content.push(h2("2.2 Modulo Gestione Vendite"));
content.push(h3("Funzionalità incluse — MVP"));
content.push(p("F5 — Form unico di vendita: Scansione codice myglow tramite fotocamera con riconoscimento AI (modello/colore/prezzo). Auto-compilazione operatore e timestamp. Inserimento manuale dati cliente (genere, età). Foto scontrino in-app. Gestione 3 flussi vendita configurabili (scansione obbligatoria, inserimento manuale quantità, vendita Shopify). Gestione prezzi centralizzata con logica sconto clienti registrati BAT. Registrazione in due step per connettività scarsa. Aggiornamento automatico giacenze."));
content.push(p("F5 — Cross-check automatici: Vendite vs stock (alert vendite mancanti). Inventario periodico anti-furto con confronto codici univoci. Cross-check vendite vs scontrini (se OCR implementato)."));
content.push(p("F6 — Pop-up vendita indiretta: Tipologia pop-up configurabile (vendita diretta vs tabaccaio). Tracciamento legame vendita NOT e tabaccaio. Cambio tipologia pop-up nel tempo."));
content.push(p("T — Timbratura digitale: Check-in/check-out con geolocalizzazione. Conteggio ore automatico per operatore/giorno/pop-up. Correlazione vendite/ora."));

content.push(h3("Funzionalità escluse / future option"));
content.push(p("Calendario turni collettivo con prenotazione slot (quotato separatamente come modulo opzionale). Export monte ore per studio paghe in formato compatibile (nice-to-have, valutabile in Fase 2). Integrazione API ufficiale con BAT/Pard/Shopify (vedi sezione integrazioni). Modulo formazione operatori (in roadmap, non in scope MVP)."));

content.push(h2("2.3 Dashboard & Analytics (trasversale)"));
content.push(p("Stock real-time per pop-up, magazzino, prodotto/colore con selettore per tipo pop-up. Previsione rottura stock (indicativa, basata su modello predittivo). Segnalazione anomalie consumo gadget vs vendite. Performance per pop-up e venditore (vendite/ora, trend, confronto). Visualizzazione e regolazione parametri modello predittivo. Export Excel/CSV con filtri. Report settimanale BAT auto-generato."));

content.push(h2("2.4 Architettura tecnica trasversale"));
content.push(p("Architettura multi-tenant predisposta per supporto futuri clienti (oltre GLO/BAT). Gestione pop-up con categorie prodotto diverse (separazione logica per brand/tipo). Web App mobile-first (PWA) con login identificativo. 4 profili utente: Admin, Magazziniere, Area Manager, Promoter/Steward. Interfaccia magazziniere semplificata. Gestione connettività scarsa con interfaccia di re-inserimento."));

content.push(h2("2.5 Deliverable tangibili"));
content.push(makeTable(
  ["Deliverable", "Fase", "Formato"],
  [
    ["Backlog prioritizzato e requisiti di dettaglio", "Discovery", "Documento + tool di PM"],
    ["Architettura tecnica e design di alto livello", "Discovery", "Documento tecnico"],
    ["Wireframe/mockup interfacce principali", "Discovery/Dev", "Figma o equivalente"],
    ["Piattaforma funzionante (moduli Logistica + Vendite)", "Go-Live", "Web App (PWA)"],
    ["Modello AI predittivo addestrato su storico 5 anni", "Go-Live", "Componente integrato"],
    ["Documentazione utente e guida operativa", "Go-Live", "PDF / in-app"],
    ["Training iniziale per Admin e key user (2 sessioni)", "Go-Live", "Sessione live"],
    ["Report di collaudo e test eseguiti", "Go-Live", "Documento"],
  ],
  [4000, 2013, 3013]
));

content.push(br());

// ===== 3. PIANO PER FASI =====
content.push(h1("3. Piano per Fasi"));

content.push(h2("Fase 1A — Discovery & Design (Settimane 1-4)"));
content.push(p("Obiettivo: consolidare i requisiti, definire l'architettura e costruire il backlog di sviluppo."));
content.push(p("Contenuti: Process mapping dettagliato dei flussi logistica e vendite. Definizione struttura dati (catalogo prodotti, tipologie pop-up, ruoli). Design architettura multi-tenant e integrazioni. Wireframe interfacce principali (form vendita, dashboard, vista magazziniere). Backlog refinement e sprint planning."));
content.push(p("Exit criteria: Backlog approvato da NOT. Architettura validata dal team tecnico. Wireframe confermati da Carmen/Laila."));

content.push(h2("Fase 1B — Sviluppo Core (Settimane 5-14)"));
content.push(p("Obiettivo: sviluppo e test dei moduli core (Logistica + Vendite + Dashboard)."));
content.push(p("Contenuti: Sprint 1-2 (sett. 5-8): Setup infrastruttura, autenticazione, gestione prodotti e pop-up, setup iniziale (F0). Sprint 3-4 (sett. 9-12): Form vendita con scansione AI, registrazione vendite, check-in/check-out magazzino e pop-up (F3-F5). Sprint 5 (sett. 13-14): Modello predittivo, workflow approvazione, cross-check automatici, timbratura digitale (F1-F2)."));
content.push(p("Exit criteria: Funzionalità core testabili in ambiente di staging. Modello predittivo addestrato su storico. Demo intermedia a stakeholder NOT."));

content.push(h2("Fase 1C — Dashboard, Test & Go-Live (Settimane 15-20)"));
content.push(p("Obiettivo: completamento dashboard, UAT, fine-tuning e rilascio in produzione."));
content.push(p("Contenuti: Sprint 6 (sett. 15-16): Dashboard analytics, report, alert predittivi. Sprint 7 (sett. 17-18): UAT con Carmen/Laila e Area Manager pilota. Bug fixing e fine-tuning modello. Sprint 8 (sett. 19-20): Deployment produzione, training utenti, go-live su 3-5 pop-up pilota."));
content.push(p("Exit criteria: UAT superata con sign-off Carmen. Go-live su pop-up pilota senza bloccanti. Training completato per Admin e key user."));

content.push(h2("Hypercare & Stabilizzazione (Settimane 21-24)"));
content.push(p("Obiettivo: supporto post-go-live, rollout progressivo e stabilizzazione."));
content.push(p("Contenuti: Supporto operativo dedicato (8 ore/settimana). Monitoraggio performance e fix prioritari. Rollout progressivo sui restanti pop-up. Fine-tuning modello predittivo su dati reali. Raccolta feedback per pianificazione Fase 2."));
content.push(p("Exit criteria: Sistema stabile su tutti i pop-up attivi. Nessun bug bloccante aperto da oltre 48 ore. Handover operativo completato."));

content.push(br());

// ===== 4. WBS + EFFORT =====
content.push(h1("4. WBS e Stima Effort"));

content.push(p("Il monte ore complessivo viene presentato per workpackage. Lo sviluppo tecnico segue un approccio agile con rilasci incrementali; il dettaglio ore per singolo requisito non viene esposto in quanto concordato a forfait con il team di sviluppo."));

content.push(h3("Team assegnato"));
content.push(p("Il team di sviluppo è composto da due Senior Developer con oltre 10 anni di esperienza ciascuno nella progettazione e realizzazione di soluzioni software custom:"));
content.push(pb("Technical Lead & System Architect — ", "Esperienza consolidata come CTO in una tech company italiana, specializzato in architetture cloud-native, system integration, piattaforme SaaS multi-tenant e real-time data processing. Competenze specifiche in API design, microservizi e infrastrutture scalabili."));
content.push(pb("AI & Data Engineer — ", "Consulente specializzato in Intelligenza Artificiale e Data Science con focus su machine learning, algoritmi predittivi e sistemi di recommendation. Competenze in Python, modelli di computer vision, NLP e integrazione LLM."));
content.push(pb("Project Manager (HeyAI) — ", "Coordinamento progettuale, raccolta requisiti, testing, documentazione, training e change management."));

content.push(h3("WBS — Pacchetto Recommended"));

const wbsHeaders = ["Workpackage", "Ruoli", "GG/Uomo", "Note"];
const wbsRows = [
  [{text:"DISCOVERY & DESIGN", bold:true, bg:LIGHT}, {text:"", bg:LIGHT}, {text:"25", bold:true, bg:LIGHT}, {text:"", bg:LIGHT}],
  ["Process mapping, analisi requisiti dettaglio", "PM, BA", "8", "Include interviste stakeholder"],
  ["Architettura tecnica e design sistema", "Tech Lead, AI Eng", "8", "Multi-tenant, data model"],
  ["UX/UI wireframe e prototipazione", "PM, Dev", "5", "Form vendita, dashboard, viste ruolo"],
  ["Backlog refinement e sprint planning", "PM, Tech Lead", "4", "Prioritizzazione con NOT"],

  [{text:"SVILUPPO CORE — LOGISTICA", bold:true, bg:LIGHT}, {text:"", bg:LIGHT}, {text:"45", bold:true, bg:LIGHT}, {text:"", bg:LIGHT}],
  ["Setup iniziale (F0): censimento, import storico", "Dev x2", "6", "Qualità dati a carico cliente"],
  ["Modello predittivo AI (F1): training, output, parametri", "AI Eng, Dev", "14", "Dipende da qualità storico"],
  ["Workflow approvazione e task magazziniere (F2)", "Dev x2", "8", ""],
  ["Check-out magazzino + check-in merce BAT (F3)", "Dev x2", "8", "Conferma aggregate"],
  ["Check-in pop-up + registrazione codici (F4)", "Dev x2", "6", "Myglow manuale + alert"],
  ["Gestione multi-tenant e categorie prodotto", "Tech Lead, Dev", "3", "Layer filtraggio per tipo pop-up"],

  [{text:"SVILUPPO CORE — VENDITE", bold:true, bg:LIGHT}, {text:"", bg:LIGHT}, {text:"55", bold:true, bg:LIGHT}, {text:"", bg:LIGHT}],
  ["Form unico vendita con scansione AI (F5.1-F5.9)", "AI Eng, Dev x2", "18", "Computer vision, 3 flussi vendita"],
  ["Gestione catalogo prodotti (back-office)", "Dev", "5", "CRUD, clonazione, categorie"],
  ["Pop-up vendita indiretta (F6)", "Dev", "4", "Configurazione tipo pop-up"],
  ["Cross-check automatici (vendite/stock/incassi)", "Dev, AI Eng", "8", "Alert anomalie"],
  ["Timbratura digitale e correlazione vendite/ora", "Dev", "6", "Geolocalizzazione, calcolo automatico"],
  ["Gestione ruoli, permessi, autenticazione", "Tech Lead", "5", "4 profili, audit base"],
  ["Gestione connettività e re-inserimento", "Dev", "4", "Interfaccia recovery"],
  ["Integrazioni Shopify (K-ippun Haru)", "Dev", "5", "API Shopify confermata"],

  [{text:"DASHBOARD & ANALYTICS", bold:true, bg:LIGHT}, {text:"", bg:LIGHT}, {text:"20", bold:true, bg:LIGHT}, {text:"", bg:LIGHT}],
  ["Dashboard stock real-time e alert predittivi", "Dev, AI Eng", "8", "Selettore tipo pop-up"],
  ["Dashboard performance venditori e pop-up", "Dev", "6", "KPI, trend, confronto"],
  ["Export report e report BAT automatico", "Dev", "4", "Excel/CSV + template BAT"],
  ["Parametri modello predittivo (visualizzazione)", "Dev", "2", ""],

  [{text:"TESTING & QUALITY", bold:true, bg:LIGHT}, {text:"", bg:LIGHT}, {text:"18", bold:true, bg:LIGHT}, {text:"", bg:LIGHT}],
  ["Test unitari e di integrazione", "Dev x2", "8", "Copertura funzionalità core"],
  ["UAT con team NOT", "PM, Dev", "6", "2 cicli UAT + fix"],
  ["Security review e performance testing", "Tech Lead", "4", "OWASP base, load test"],

  [{text:"DEPLOYMENT & GO-LIVE", bold:true, bg:LIGHT}, {text:"", bg:LIGHT}, {text:"12", bold:true, bg:LIGHT}, {text:"", bg:LIGHT}],
  ["Setup infrastruttura e CI/CD", "Tech Lead, DevOps", "4", "Cloud, ambienti staging/prod"],
  ["Deployment e migrazione dati iniziali", "Dev, PM", "3", "Import giacenze e storico"],
  ["Training utenti (2 sessioni)", "PM", "3", "Admin + key user"],
  ["Documentazione utente", "PM", "2", "Guida operativa"],

  [{text:"PROJECT MANAGEMENT", bold:true, bg:LIGHT}, {text:"", bg:LIGHT}, {text:"30", bold:true, bg:LIGHT}, {text:"", bg:LIGHT}],
  ["Coordinamento team e stakeholder", "PM", "12", "8h/sett x 20 sett = 20gg + buffer"],
  ["Raccolta requisiti, analisi funzionale, UX review", "PM", "8", "Ongoing durante sviluppo"],
  ["QA coordination, documentazione, change mgmt", "PM", "6", ""],
  ["Hypercare post go-live (4 settimane)", "PM, Dev", "4", "8h/sett supporto dedicato"],

  [{text:"TOTALE PACCHETTO RECOMMENDED", bold:true, bg:PRIMARY}, {text:"", bg:PRIMARY}, {text:"205", bold:true, bg:PRIMARY}, {text:"", bg:PRIMARY}],
];

content.push(makeTable(wbsHeaders, wbsRows, [3200, 2000, 1200, 2626]));

content.push(new Paragraph({ spacing: { before: 200, after: 120 }, children: [
  new TextRun({ text: "Nota: ", bold: true, size: 20, font: "Arial", italics: true }),
  new TextRun({ text: "Il monte ore di sviluppo tecnico viene concordato a forfait con il team di sviluppo e non viene dettagliato per singolo requisito. Lo sviluppo segue un approccio agile con rilasci incrementali.", size: 20, font: "Arial", italics: true }),
]}));

content.push(br());

// ===== 5. QUOTAZIONE ECONOMICA =====
content.push(h1("5. Quotazione Economica"));

content.push(h2("5.1 Tre Pacchetti"));

content.push(h3("Pacchetto Base — € 135.000"));
content.push(p("Scope ridotto per validazione del concept con budget contenuto. Include: setup iniziale e import storico, modello predittivo con parametri regolabili (senza ottimizzazione distribuzione avanzata), workflow approvazione e task magazziniere, check-out/check-in base (senza registrazione codici myglow), form vendita semplificato (inserimento manuale, senza scansione AI), dashboard base (stock e vendite, senza analytics predittivi), 4 profili utente, timbratura digitale base (senza geolocalizzazione). Esclusi: scansione AI prodotto, cross-check avanzati, integrazioni esterne, pop-up vendita indiretta, hypercare."));

content.push(h3("Pacchetto Recommended — € 168.000 (consigliato)"));
content.push(p("MVP completo con tutte le funzionalità core confermate nel requirement log. Include tutto il pacchetto Base, più: scansione AI prodotto con computer vision (modello/colore/prezzo), cross-check triplo automatico (vendite/stock/incassi), pop-up vendita indiretta con tracciamento, gestione multi-tenant con categorie prodotto per tipo pop-up, dashboard completa con analytics predittivi e alert rottura stock, integrazione Shopify per K-ippun Haru, timbratura con geolocalizzazione e correlazione vendite/ora, report BAT auto-generato, hypercare 4 settimane. Include training iniziale (2 sessioni) e documentazione operativa."));

content.push(h3("Pacchetto Advanced — € 215.000"));
content.push(p("MVP completo più integrazioni esterne e nice-to-have. Include tutto il pacchetto Recommended, più: integrazione BAT/Pard via API o bot RPA (compilazione automatica form esterni), calendario turni collettivo con prenotazione slot e approvazione AM, OCR scontrino per cross-check automatico vendite/incassi, chat AI per interrogazione dati in linguaggio naturale, export monte ore in formato studio paghe, hypercare estesa (8 settimane)."));

content.push(h2("5.2 Breakdown per Fase"));
content.push(makeTable(
  ["Fase", "Base", "Recommended", "Advanced"],
  [
    ["Discovery & Design (sett. 1-4)", "€ 22.000", "€ 28.000", "€ 32.000"],
    ["Sviluppo Core (sett. 5-14)", "€ 78.000", "€ 92.000", "€ 118.000"],
    ["Dashboard, Test & Go-Live (sett. 15-20)", "€ 35.000", "€ 38.000", "€ 45.000"],
    ["Hypercare (sett. 21-24)", "—", "€ 10.000", "€ 20.000"],
    [{text:"TOTALE", bold:true, bg:LIGHT}, {text:"€ 135.000", bold:true, bg:LIGHT}, {text:"€ 168.000", bold:true, bg:GREEN}, {text:"€ 215.000", bold:true, bg:LIGHT}]
  ],
  [2800, 2075, 2076, 2075]
));

content.push(h2("5.3 Breakdown per Modulo (Recommended)"));
content.push(makeTable(
  ["Componente", "Investimento", "% sul totale"],
  [
    ["Modulo Logistica & Stock Management", "€ 62.000", "37%"],
    ["Modulo Gestione Vendite", "€ 72.000", "43%"],
    ["Dashboard & Analytics (trasversale)", "€ 18.000", "11%"],
    ["Project Management, Training, Hypercare", "€ 16.000", "9%"],
    [{text:"TOTALE", bold:true, bg:GREEN}, {text:"€ 168.000", bold:true, bg:GREEN}, {text:"100%", bold:true, bg:GREEN}]
  ],
  [4000, 2513, 2513]
));

content.push(h2("5.4 Coerenza con Business Case e Affordability"));
content.push(makeTable(
  ["Metrica", "Valore"],
  [
    ["Saving annuo a regime (realistico)", "€ 214.268"],
    ["Saving cumulato 3 anni (realistico)", "€ 557.097"],
    [{text:"Investimento Recommended", bold:true}, {text:"€ 168.000", bold:true}],
    [{text:"Payback (mesi dalla messa in produzione)", bold:true, bg:GREEN}, {text:"~ 9-10 mesi", bold:true, bg:GREEN}],
    ["ROI a 3 anni", "3,3x"],
    ["% EBITDA annuo assorbito (su €1,44-1,80M)", "9-12%"],
    ["Collocazione nel range affordability (€150-270K Fase 1)", "Entro range realistico"],
  ],
  [5500, 3526]
));

content.push(p("L'investimento Recommended si posiziona nel cuore del range di Fase 1 dello scenario realistico di affordability (€ 150.000-270.000), con un impatto sull'EBITDA annuo contenuto (9-12%) e un payback inferiore a 12 mesi. Il rapporto investimento/saving cumulato a 3 anni (30%) è ampiamente nella fascia attraente (30-50% del saving) identificata nel business case."));

content.push(br());

// ===== 6. ASSUNZIONI, ESCLUSIONI, RISCHI =====
content.push(h1("6. Assunzioni, Esclusioni, Rischi e Change Control"));

content.push(h2("6.1 Assunzioni"));
content.push(p("Dati: NOT fornisce dati storici vendite (5 anni) e giacenze iniziali in formato Excel strutturato entro il kick-off. La qualità e completezza dei dati storici è responsabilità del cliente. I dati sono sufficienti per addestrare il modello predittivo (volume, granularità per prodotto/colore/pop-up)."));
content.push(p("Stakeholder: Carmen e Laila sono disponibili come product owner per 4-8 ore/settimana durante lo sviluppo. Le approvazioni su wireframe, backlog e UAT avvengono entro 5 giorni lavorativi dalla sottomissione."));
content.push(p("Infrastruttura: Il sistema viene deployato su infrastruttura cloud gestita da HeyAI. NOT fornisce accesso ai propri sistemi necessari per le integrazioni incluse nello scope."));
content.push(p("Integrazioni: Le API Shopify per K-ippun Haru sono disponibili e documentate. L'integrazione con BAT e Pard NON è inclusa nel pacchetto Recommended (vedi Advanced). Il form vendita nel pacchetto Recommended gestisce i dati per NOT; la compilazione automatica verso piattaforme terze è quotata nel pacchetto Advanced."));
content.push(p("Operatività: Ogni pop-up dispone di connettività internet sufficiente (Wi-Fi o rete mobile). I dispositivi degli operatori sono smartphone con fotocamera di qualità adeguata per la scansione prodotti."));

content.push(h2("6.2 Esclusioni esplicite"));
content.push(makeTable(
  ["Esclusione", "Motivazione", "Opzione futura"],
  [
    ["Integrazione API diretta con BAT/Pard", "In attesa verifica disponibilità API da parte di NOT", "Inclusa nel pacchetto Advanced o quotabile separatamente"],
    ["Gestione GDPR / data processing dati clienti finali", "Tema legale in carico a reparto legale Noloop", "Se risolto, il form unificato copre anche dati BAT"],
    ["Scansione barcode a magazzino (prodotto per prodotto)", "Esclusa per decisione operativa presa in call", "Non prevista"],
    ["Integrazione Google Trends", "Evoluzione futura", "Quotabile come add-on"],
    ["Calendario turni collettivo", "Nice-to-have non prioritario", "Incluso nel pacchetto Advanced"],
    ["Formazione operatori strutturata", "NOT gestisce internamente con Train Champion", "Quotabile separatamente"],
    ["Migrazione dati da sistemi diversi da Excel", "Fuori perimetro", "Quotabile su analisi"],
    ["Licenze cloud, device, hardware", "A carico NOT", "Non applicabile"],
    ["Manutenzione integrazioni non ufficiali (RPA/bot)", "Se BAT/Pard non forniscono API", "Fix a pagamento one-shot"],
    ["Modalità offline completa", "Evoluzione futura", "Quotabile come evolutiva Fase 2"],
  ],
  [2800, 3113, 3113]
));

content.push(h2("6.3 Rischi principali e mitigazioni"));
content.push(makeTable(
  ["Rischio", "Probabilità", "Impatto", "Mitigazione"],
  [
    ["Dati storici incompleti o di bassa qualità", "Media", "Alto", "Fase 0 include data audit. Se i dati sono insufficienti, il modello predittivo parte con regole base e migliora progressivamente con dati reali"],
    ["Ritardo consegna dati/materiali da NOT", "Alta", "Medio", "Clausola di slittamento timeline proporzionale. Sprint parallelizzabili non bloccati"],
    ["Scope creep (nuovi requisiti durante sviluppo)", "Alta", "Alto", "Change control formale (vedi sotto). Backlog congelato per sprint. Nuovi requisiti entrano nel backlog successivo"],
    ["API BAT/Pard non disponibili", "Media", "Medio", "Non impatta pacchetto Recommended. Per Advanced: fallback RPA quotato nel prezzo"],
    ["Resistenza al cambiamento da parte operatori", "Media", "Medio", "Training dedicato. Go-live graduale su pop-up pilota. Feedback loop continuo"],
    ["Performance modello predittivo iniziale", "Bassa", "Medio", "Parametri regolabili. Fine-tuning continuo. Il modello migliora con volume dati reali"],
    ["Qualità scansione AI dipendente da device", "Media", "Basso", "Fallback manuale sempre disponibile. Approccio ibrido (CV + OCR + selezione)"],
    ["Complessità multi-tenant superiore alle attese", "Bassa", "Medio", "Architettura validata in Discovery. Buffer di 15% incluso nella stima"],
  ],
  [2200, 1000, 1000, 4826]
));

content.push(h2("6.4 Change Control"));
content.push(p("Qualsiasi modifica al perimetro concordato viene gestita tramite il seguente processo:"));
content.push(p("1. NOT formalizza la richiesta di change per iscritto (email o tool di PM)."));
content.push(p("2. HeyAI valuta l'impatto in termini di effort, costi e timeline entro 5 giorni lavorativi."));
content.push(p("3. Se l'impatto è inferiore al 5% dell'effort totale di fase e non modifica deliverable core, HeyAI assorbe il change nel buffer di progetto."));
content.push(p("4. Se l'impatto è superiore, HeyAI produce una variante con costi e timeline aggiornati. La variante richiede approvazione scritta prima dell'esecuzione."));
content.push(p("5. Change request non approvate vengono inserite nel backlog per fasi successive."));

content.push(br());

// ===== 7. GOVERNANCE E PAGAMENTO =====
content.push(h1("7. Governance e Piano di Pagamento"));

content.push(h2("7.1 Governance di progetto"));
content.push(makeTable(
  ["Cerimonia", "Frequenza", "Partecipanti", "Obiettivo"],
  [
    ["Steering Committee", "Mensile", "Germano/Massi (NOT), Carlo (HeyAI)", "Avanzamento, decisioni strategiche, escalation"],
    ["Weekly sync", "Settimanale", "Carmen/Laila (NOT), Carlo (HeyAI)", "Stato sprint, backlog, bloccanti"],
    ["Sprint Review / Demo", "Bi-settimanale", "Team NOT + HeyAI", "Demo funzionalità sviluppate"],
    ["UAT", "Fine Fase 1B e 1C", "Carmen/Laila + AM pilota", "Validazione funzionale"],
    ["Go/No-Go", "Pre go-live", "Germano + Carmen + Carlo", "Decisione rilascio in produzione"],
  ],
  [1800, 1400, 2813, 3013]
));

content.push(h2("7.2 Piano di pagamento — Pacchetto Recommended"));
content.push(makeTable(
  ["Milestone", "% Importo", "Importo", "Trigger"],
  [
    ["Firma contratto", "30%", "€ 50.400", "Sottoscrizione proposta"],
    ["Completamento Discovery (sett. 4)", "20%", "€ 33.600", "Backlog approvato e architettura validata"],
    ["Demo intermedia (sett. 14)", "30%", "€ 50.400", "Core funzionante in staging"],
    ["Go-live e sign-off UAT (sett. 20)", "20%", "€ 33.600", "Rilascio in produzione + UAT superata"],
  ],
  [2800, 1200, 1513, 3513]
));

content.push(h3("Condizioni"));
content.push(p("Validità offerta: 30 giorni dalla data di emissione. Pagamento: 30 giorni dalla data di fatturazione per ogni milestone. La quotazione non include IVA (22%). La quotazione non include eventuali licenze software di terze parti, servizi cloud o infrastruttura che verranno dettagliati in fase di Discovery. Ritardi nella consegna dei dati o nelle approvazioni da parte del cliente comportano slittamento proporzionale della timeline senza costi aggiuntivi."));

content.push(br());

// ===== 8. NOTE PER LA CHAT DI PROGETTO =====
content.push(h1("8. Punti Aperti e Informazioni Mancanti"));

content.push(h2("8.1 Decisioni aperte"));
content.push(makeTable(
  ["#", "Punto aperto", "Impatto", "Chi risolve", "Quando"],
  [
    ["1", "API BAT e Pard: disponibilità e documentazione", "Determina se integrazione è API o RPA (delta effort ~15-20 gg)", "NOT verifica con BAT/Pard", "Prima di eventuale upgrade ad Advanced"],
    ["2", "GDPR — transito dati clienti nel form unico", "Se non risolvibile, il form copre solo NOT+Pard (2 piattaforme su 3)", "Legale Noloop", "Prima dello sviluppo del form unificato"],
    ["3", "Lista completa campi dei 3 form attuali", "Dimensiona il form unico e il mapping", "Carmen invia a HeyAI", "Entro kick-off"],
    ["4", "Gestione sostituzione dispositivi difettosi (F5.10)", "Se richiede logiche complesse, potrebbe generare effort aggiuntivo", "Da definire in call tecnica", "Entro fine Discovery"],
    ["5", "Tracciamento NEO/VELO senza codice univoco (F5.12)", "Logica specifica da definire per prodotti monopolio di Stato", "Da definire in call tecnica", "Entro fine Discovery"],
    ["6", "Foto packaging e posizione codici per training modello CV", "Serve per calibrare effort riconoscimento prodotto", "NOT invia foto", "Entro settimana 2"],
    ["7", "Connettività nei centri commerciali: Wi-Fi disponibile?", "Impatta architettura offline/recovery", "NOT verifica", "Entro kick-off"],
    ["8", "Catalogo prodotti completo con casistiche", "Dimensiona flussi vendita configurabili", "NOT invia", "Entro kick-off"],
  ],
  [400, 2800, 2413, 1613, 1800]
));

content.push(h2("8.2 Assunzioni che impattano il prezzo"));
content.push(p("Se una delle seguenti assunzioni si rivela non valida, il prezzo potrebbe variare:"));
content.push(makeTable(
  ["Assunzione", "Se non valida", "Impatto stimato"],
  [
    ["Dati storici in formato Excel strutturato e pulito", "Serve fase di data cleaning/normalizzazione", "+€ 5.000-10.000"],
    ["4 profili utente standard sufficienti", "Profili aggiuntivi o permessi granulari custom", "+€ 3.000-5.000"],
    ["Catalogo prodotti con massimo 50-80 SKU attivi", "SKU > 100 con logiche complesse", "+€ 2.000-4.000"],
    ["Massimo 2-3 tipologie di pop-up", "Più tipologie con regole dedicate", "+€ 3.000-6.000"],
    ["API Shopify documentata e stabile", "Integrazione Shopify non standard", "+€ 3.000-5.000"],
    ["Scansione AI con 7-8 foto per prodotto sufficienti", "Modello richiede training estensivo", "+€ 5.000-8.000"],
  ],
  [3500, 3013, 2513]
));

content.push(new Paragraph({ spacing: { before: 400, after: 200 } }));
content.push(new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "— Fine Documento —", size: 22, font: "Arial", color: "999999", italics: true })] }));
content.push(new Paragraph({ spacing: { before: 200 }, alignment: AlignmentType.CENTER, children: [new TextRun({ text: "HeyAI — Digital Strategy & AI Solutions", size: 20, font: "Arial", color: ACCENT, bold: true })] }));
content.push(new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Febbraio 2026", size: 20, font: "Arial", color: "999999" })] }));


// ===================== BUILD DOCUMENT =====================
const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 22 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 32, bold: true, font: "Arial", color: PRIMARY },
        paragraph: { spacing: { before: 360, after: 200 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, font: "Arial", color: ACCENT },
        paragraph: { spacing: { before: 280, after: 160 }, outlineLevel: 1 } },
    ]
  },
  sections: [{
    properties: {
      page: {
        margin: { top: 1200, right: 1440, bottom: 1200, left: 1440 }
      }
    },
    children: content
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/home/claude/Quotazione_NOT_Logistica_Vendite.docx", buffer);
  console.log("Documento creato con successo!");
});