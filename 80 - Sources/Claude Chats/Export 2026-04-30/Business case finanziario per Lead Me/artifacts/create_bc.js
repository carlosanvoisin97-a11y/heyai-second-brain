const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, HeadingLevel, BorderStyle, WidthType,
  ShadingType, PageNumber, PageBreak, LevelFormat
} = require("docx");

// ── Colors ──
const DARK_BLUE = "1B3A5C";
const MID_BLUE = "2E75B6";
const LIGHT_BLUE = "D6E4F0";
const VERY_LIGHT = "F2F6FA";
const ACCENT_GREEN = "2E8B57";
const ACCENT_ORANGE = "D4760A";
const DARK_GRAY = "333333";
const MID_GRAY = "666666";
const LIGHT_GRAY = "E8E8E8";

// ── Table helpers ──
const border = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const borders = { top: border, bottom: border, left: border, right: border };
const noBorder = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
const noBorders = { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder };
const cellMargins = { top: 60, bottom: 60, left: 100, right: 100 };

const TABLE_WIDTH = 9026; // A4 with 1" margins

function headerCell(text, width, opts = {}) {
  return new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    shading: { fill: DARK_BLUE, type: ShadingType.CLEAR },
    margins: cellMargins,
    verticalAlign: "center",
    children: [new Paragraph({
      alignment: opts.align || AlignmentType.LEFT,
      children: [new TextRun({ text, bold: true, color: "FFFFFF", font: "Arial", size: 18 })]
    })]
  });
}

function dataCell(text, width, opts = {}) {
  return new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    shading: opts.shading ? { fill: opts.shading, type: ShadingType.CLEAR } : undefined,
    margins: cellMargins,
    verticalAlign: "center",
    children: [new Paragraph({
      alignment: opts.align || AlignmentType.LEFT,
      children: [new TextRun({
        text,
        bold: opts.bold || false,
        color: opts.color || DARK_GRAY,
        font: "Arial",
        size: opts.size || 18
      })]
    })]
  });
}

function totalCell(text, width, opts = {}) {
  return new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    shading: { fill: opts.fill || LIGHT_BLUE, type: ShadingType.CLEAR },
    margins: cellMargins,
    verticalAlign: "center",
    children: [new Paragraph({
      alignment: opts.align || AlignmentType.LEFT,
      children: [new TextRun({
        text,
        bold: true,
        color: opts.color || DARK_BLUE,
        font: "Arial",
        size: 18
      })]
    })]
  });
}

function spacer(size = 120) {
  return new Paragraph({ spacing: { after: size }, children: [] });
}

function bodyText(text, opts = {}) {
  return new Paragraph({
    spacing: { after: opts.after || 120, line: 276 },
    alignment: opts.align || AlignmentType.JUSTIFIED,
    children: [new TextRun({
      text,
      font: "Arial",
      size: 20,
      color: opts.color || DARK_GRAY,
      bold: opts.bold || false,
      italics: opts.italic || false
    })]
  });
}

function multiRunParagraph(runs, opts = {}) {
  return new Paragraph({
    spacing: { after: opts.after || 120, line: 276 },
    alignment: opts.align || AlignmentType.JUSTIFIED,
    children: runs.map(r => new TextRun({
      text: r.text,
      font: "Arial",
      size: r.size || 20,
      color: r.color || DARK_GRAY,
      bold: r.bold || false,
      italics: r.italic || false
    }))
  });
}

// ── Financial calculations ──
const INVESTMENT = 55000;
const DISCOUNT_RATE = 0.08;
const SAVINGS_FULL = 64165;
const SCENARIOS = {
  conservative: { rate: 0.70, annual: 44900, rampup: 0.60 },
  realistic:    { rate: 0.85, annual: 54500, rampup: 0.70 },
  optimistic:   { rate: 1.00, annual: 64200, rampup: 0.80 }
};

function calcNPV(scenario) {
  const s = SCENARIOS[scenario];
  const y1 = s.annual * s.rampup;
  const y2 = s.annual;
  const y3 = s.annual;
  return -INVESTMENT + y1/1.08 + y2/(1.08**2) + y3/(1.08**3);
}

function calcPaybackMonths(scenario) {
  const s = SCENARIOS[scenario];
  const y1 = s.annual * s.rampup;
  if (y1 >= INVESTMENT) return (INVESTMENT / y1) * 12;
  const remaining = INVESTMENT - y1;
  const monthlyY2 = s.annual / 12;
  return 12 + (remaining / monthlyY2);
}

function calcIRR(scenario) {
  const s = SCENARIOS[scenario];
  const y1 = s.annual * s.rampup;
  const y2 = s.annual;
  const y3 = s.annual;
  // Newton's method
  let r = 0.3;
  for (let i = 0; i < 100; i++) {
    const f = -INVESTMENT + y1/(1+r) + y2/((1+r)**2) + y3/((1+r)**3);
    const fp = -y1/((1+r)**2) - 2*y2/((1+r)**3) - 3*y3/((1+r)**4);
    const rNew = r - f/fp;
    if (Math.abs(rNew - r) < 0.0001) return rNew;
    r = rNew;
  }
  return r;
}

function calcROI3yr(scenario) {
  const s = SCENARIOS[scenario];
  const y1 = s.annual * s.rampup;
  const totalBenefit = y1 + s.annual + s.annual;
  return (totalBenefit - INVESTMENT) / INVESTMENT;
}

const fmt = (n) => n.toLocaleString("it-IT", { maximumFractionDigits: 0 });
const fmtEur = (n) => "\u20AC" + fmt(Math.round(n));
const fmtPct = (n) => (n * 100).toFixed(1) + "%";

// ── Build document ──
const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 20, color: DARK_GRAY } } },
    paragraphStyles: [
      {
        id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 32, bold: true, font: "Arial", color: DARK_BLUE },
        paragraph: { spacing: { before: 360, after: 200 }, outlineLevel: 0 }
      },
      {
        id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, font: "Arial", color: MID_BLUE },
        paragraph: { spacing: { before: 240, after: 160 }, outlineLevel: 1 }
      },
      {
        id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 22, bold: true, font: "Arial", color: DARK_BLUE },
        paragraph: { spacing: { before: 200, after: 120 }, outlineLevel: 2 }
      }
    ]
  },
  numbering: {
    config: [
      {
        reference: "bullets",
        levels: [{
          level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } }
        }]
      },
      {
        reference: "numbers",
        levels: [{
          level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } }
        }]
      }
    ]
  },
  sections: [
    // ═══════════════════════════════════════════════════════════════
    // COVER PAGE
    // ═══════════════════════════════════════════════════════════════
    {
      properties: {
        page: {
          size: { width: 11906, height: 16838 },
          margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
        }
      },
      children: [
        spacer(2400),
        new Paragraph({
          alignment: AlignmentType.LEFT,
          spacing: { after: 80 },
          children: [new TextRun({ text: "BUSINESS CASE", font: "Arial", size: 22, color: MID_BLUE, bold: true })]
        }),
        new Paragraph({
          alignment: AlignmentType.LEFT,
          spacing: { after: 200 },
          border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: MID_BLUE, space: 8 } },
          children: [new TextRun({ text: "LeadMe Evolution & CRM", font: "Arial", size: 52, bold: true, color: DARK_BLUE })]
        }),
        new Paragraph({
          alignment: AlignmentType.LEFT,
          spacing: { after: 120 },
          children: [new TextRun({ text: "Analisi del Risparmio Operativo e dell\u2019Accelerazione Commerciale", font: "Arial", size: 24, color: MID_GRAY })]
        }),
        spacer(600),
        new Paragraph({
          alignment: AlignmentType.LEFT,
          spacing: { after: 60 },
          children: [new TextRun({ text: "Preparato per:", font: "Arial", size: 18, color: MID_GRAY })]
        }),
        new Paragraph({
          alignment: AlignmentType.LEFT,
          spacing: { after: 200 },
          children: [new TextRun({ text: "Noloop S.r.l. \u2014 Direzione Generale", font: "Arial", size: 22, bold: true, color: DARK_BLUE })]
        }),
        new Paragraph({
          alignment: AlignmentType.LEFT,
          spacing: { after: 60 },
          children: [new TextRun({ text: "Preparato da:", font: "Arial", size: 18, color: MID_GRAY })]
        }),
        new Paragraph({
          alignment: AlignmentType.LEFT,
          spacing: { after: 400 },
          children: [new TextRun({ text: "HeyAI \u2014 AI Solutions Consulting", font: "Arial", size: 22, bold: true, color: DARK_BLUE })]
        }),
        new Paragraph({
          alignment: AlignmentType.LEFT,
          children: [new TextRun({ text: "Marzo 2026 \u2014 Confidenziale", font: "Arial", size: 18, color: MID_GRAY, italics: true })]
        })
      ]
    },
    // ═══════════════════════════════════════════════════════════════
    // MAIN CONTENT
    // ═══════════════════════════════════════════════════════════════
    {
      properties: {
        page: {
          size: { width: 11906, height: 16838 },
          margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
        }
      },
      headers: {
        default: new Header({
          children: [new Paragraph({
            alignment: AlignmentType.RIGHT,
            children: [new TextRun({ text: "LeadMe Evolution \u2014 Business Case  |  Confidenziale", font: "Arial", size: 16, color: MID_GRAY, italics: true })]
          })]
        })
      },
      footers: {
        default: new Footer({
          children: [new Paragraph({
            alignment: AlignmentType.CENTER,
            border: { top: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC", space: 4 } },
            children: [
              new TextRun({ text: "HeyAI \u2014 AI Solutions Consulting  |  Pagina ", font: "Arial", size: 16, color: MID_GRAY }),
              new TextRun({ children: [PageNumber.CURRENT], font: "Arial", size: 16, color: MID_GRAY })
            ]
          })]
        })
      },
      children: [
        // ─── 1. EXECUTIVE SUMMARY ───
        new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("1. Executive Summary")] }),

        bodyText("Il presente documento analizza il valore economico generato dall\u2019implementazione di LeadMe Evolution, la piattaforma CRM basata su intelligenza artificiale progettata per ottimizzare i processi commerciali di Noloop S.r.l."),

        bodyText("L\u2019analisi si fonda su dati operativi raccolti direttamente dal team commerciale (benchmark Simona, Analyst di ricerca attiva) e su parametri retributivi standard del mercato italiano. Il metodo adottato segue un approccio bottom-up: ogni risparmio \u00E8 calcolato a partire da attivit\u00E0 specifiche, tempi misurati e costi orari verificabili."),

        // Key metrics box
        new Table({
          width: { size: TABLE_WIDTH, type: WidthType.DXA },
          columnWidths: [TABLE_WIDTH / 2, TABLE_WIDTH / 2],
          rows: [
            new TableRow({
              children: [
                new TableCell({
                  borders, columnSpan: 2,
                  width: { size: TABLE_WIDTH, type: WidthType.DXA },
                  shading: { fill: DARK_BLUE, type: ShadingType.CLEAR },
                  margins: cellMargins,
                  children: [new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [new TextRun({ text: "SINTESI DEI RISULTATI CHIAVE", bold: true, color: "FFFFFF", font: "Arial", size: 20 })]
                  })]
                })
              ]
            }),
            ...[
              ["Risparmio operativo annuale (scenario realistico)", fmtEur(54500) + "/anno"],
              ["Ore di lavoro liberate", "~2.240 ore/anno (~1,3 FTE)"],
              ["Investimento totale", fmtEur(INVESTMENT)],
              ["Payback Period (scenario realistico)", Math.round(calcPaybackMonths("realistic")) + " mesi"],
              ["ROI a 3 anni (scenario realistico)", fmtPct(calcROI3yr("realistic"))],
              ["NPV a 3 anni (tasso 8%)", fmtEur(calcNPV("realistic"))],
              ["Capacit\u00E0 scouting aggiuntiva", "+60% profili analizzati/settimana"],
              ["Revenue a rischio recuperabile", "\u20AC210K \u2013 \u20AC840K/anno"]
            ].map(([k, v], i) => new TableRow({
              children: [
                dataCell(k, TABLE_WIDTH / 2, { shading: i % 2 === 0 ? VERY_LIGHT : undefined }),
                dataCell(v, TABLE_WIDTH / 2, { align: AlignmentType.RIGHT, bold: true, shading: i % 2 === 0 ? VERY_LIGHT : undefined })
              ]
            }))
          ]
        }),

        spacer(),

        multiRunParagraph([
          { text: "Nota metodologica: ", bold: true, italic: true, size: 18, color: MID_GRAY },
          { text: "I calcoli di payback e ROI includono una curva di ramp-up prudenziale (70% del beneficio nel primo anno per lo scenario realistico) per riflettere i tempi di adozione, onboarding e change management.", italic: true, size: 18, color: MID_GRAY }
        ]),

        new Paragraph({ children: [new PageBreak()] }),

        // ─── 2. CONTESTO OPERATIVO ───
        new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("2. Comprensione del Contesto Operativo")] }),

        new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("2.1 L\u2019azienda")] }),
        bodyText("Noloop S.r.l. \u00E8 un\u2019agenzia di eventi corporate con sede a Milano, circa 150 dipendenti, ~\u20AC55M di fatturato annuo e ~260 commesse gestite ogni anno. L\u2019attivit\u00E0 commerciale \u00E8 il motore del business: dalla generazione del lead alla conversione in commessa, ogni fase richiede interazioni personalizzate, follow-up sistematici e gestione relazionale di lungo periodo."),

        new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("2.2 Struttura del team commerciale")] }),
        bodyText("Il team commerciale si articola in due gruppi funzionali distinti:"),

        new Table({
          width: { size: TABLE_WIDTH, type: WidthType.DXA },
          columnWidths: [1800, 1200, 1200, 2513, 2313],
          rows: [
            new TableRow({
              children: [
                headerCell("Gruppo", 1800),
                headerCell("Persone", 1200, { align: AlignmentType.CENTER }),
                headerCell("Livello", 1200),
                headerCell("Attivit\u00E0 principale", 2513),
                headerCell("Volume vs benchmark", 2313, { align: AlignmentType.CENTER })
              ]
            }),
            ...[
              ["A \u2014 Ricerca attiva", "2", "Analyst", "Scouting, profilazione, primo contatto", "100%"],
              ["A \u2014 Ricerca attiva", "1", "Analyst", "Stesso tipo, volume ridotto", "35%"],
              ["A \u2014 Ricerca attiva", "1", "Manager", "Ricerca + gestione, meno scouting", "35%"],
              ["A \u2014 Ricerca attiva", "1", "Director", "Ricerca mirata, lead strategici", "12%"],
              ["B \u2014 Gestione relazioni", "7", "Manager", "Lead caldi, clienti, funnel, follow-up", "2\u20133h/sett"]
            ].map((row, i) => new TableRow({
              children: row.map((cell, j) => dataCell(cell, [1800, 1200, 1200, 2513, 2313][j], {
                shading: i % 2 === 0 ? VERY_LIGHT : undefined,
                align: [1, 4].includes(j) ? AlignmentType.CENTER : AlignmentType.LEFT
              }))
            }))
          ]
        }),

        spacer(),

        new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("2.3 Benchmark operativo (Simona, Analyst)")] }),
        bodyText("Il dato di partenza \u00E8 il profilo operativo di Simona, ricercatrice attiva full-time, che costituisce il benchmark per l\u2019intera analisi. I dati sono stati raccolti direttamente e validati:"),

        new Table({
          width: { size: TABLE_WIDTH, type: WidthType.DXA },
          columnWidths: [4513, 2513, 2000],
          rows: [
            new TableRow({
              children: [
                headerCell("Parametro", 4513),
                headerCell("Valore", 2513, { align: AlignmentType.CENTER }),
                headerCell("Fonte", 2000)
              ]
            }),
            ...[
              ["Profili analizzati/settimana", "25 (media)", "Dato diretto"],
              ["Tempo medio per profilo", "17,5 min", "Dato diretto"],
              ["Tasso di contatto (su analizzati)", "1 su 3 (~8/sett)", "Dato diretto"],
              ["Tasso di risposta (su contattati)", "60% (~5/sett)", "Dato diretto"],
              ["Lead totali gestiti", "290 (di cui 60 in esclusione)", "Dato diretto"],
              ["Tempo settimanale lead-related", "13,5h/settimana", "Calcolato"],
              ["Difficolt\u00E0 principale", "Gestione ricontatti ad alti volumi", "Dato diretto"]
            ].map((row, i) => new TableRow({
              children: row.map((cell, j) => dataCell(cell, [4513, 2513, 2000][j], {
                shading: i % 2 === 0 ? VERY_LIGHT : undefined,
                align: j === 1 ? AlignmentType.CENTER : AlignmentType.LEFT
              }))
            }))
          ]
        }),

        spacer(),

        new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("2.4 Costo orario aziendale")] }),
        bodyText("I costi orari sono calcolati secondo la formula standard italiana: RAL \u00D7 1,40 (costo azienda) / 1.720 ore lavorative annue. Questi parametri sono coerenti con i benchmark del mercato italiano per il settore eventi/comunicazione."),

        new Table({
          width: { size: TABLE_WIDTH, type: WidthType.DXA },
          columnWidths: [2256, 2257, 2257, 2256],
          rows: [
            new TableRow({
              children: [
                headerCell("Profilo", 2256),
                headerCell("RAL", 2257, { align: AlignmentType.CENTER }),
                headerCell("Costo azienda", 2257, { align: AlignmentType.CENTER }),
                headerCell("Costo orario", 2256, { align: AlignmentType.CENTER })
              ]
            }),
            ...[
              ["Analyst", "\u20AC30.000", "\u20AC42.000", "\u20AC24/h"],
              ["Manager", "\u20AC42.000", "\u20AC59.000", "\u20AC34/h"],
              ["Director", "\u20AC65.000", "\u20AC91.000", "\u20AC53/h"]
            ].map((row, i) => new TableRow({
              children: row.map((cell, j) => dataCell(cell, [2256, 2257, 2257, 2256][j], {
                shading: i % 2 === 0 ? VERY_LIGHT : undefined,
                align: j > 0 ? AlignmentType.CENTER : AlignmentType.LEFT,
                bold: j === 3
              }))
            }))
          ]
        }),

        new Paragraph({ children: [new PageBreak()] }),

        // ─── 3. PROCESSI ANALIZZATI ───
        new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("3. Processi Analizzati e Opportunit\u00E0 di Automazione")] }),

        bodyText("Sono state identificate cinque aree operative principali in cui LeadMe genera un impatto misurabile. Per ciascuna area, la tabella seguente riporta il processo, le attivit\u00E0 coinvolte, i ruoli impattati e il livello di automazione atteso."),

        new Table({
          width: { size: TABLE_WIDTH, type: WidthType.DXA },
          columnWidths: [1500, 2500, 1800, 1600, 1626],
          rows: [
            new TableRow({
              children: [
                headerCell("Area", 1500),
                headerCell("Attivit\u00E0 automatizzata", 2500),
                headerCell("Ruoli coinvolti", 1800),
                headerCell("Automazione", 1600, { align: AlignmentType.CENTER }),
                headerCell("Ore/anno", 1626, { align: AlignmentType.CENTER })
              ]
            }),
            ...[
              ["1. Profilazione", "Scraping LinkedIn, analisi fit, pre-qualifica AI", "Gruppo A (5)", "Da 17,5 a 5 min/profilo (~71%)", "710h"],
              ["2. Messaggistica", "Generazione icebreaker/messaggi personalizzati", "Gruppo A (5)", "Da 15 a 4 min/msg (~73%)", "203h"],
              ["3. Tracking", "Eliminazione Excel manuale, dashboard automatica", "Gruppo A+B (12)", "~90% automatico", "736h"],
              ["4. Task/Notifiche", "Push task da Minutes, recap giornaliero Sally", "Gruppo B (7)", "Da 15 a 5 min/giorno (~67%)", "257h"],
              ["5. Scraper", "Ricerca proattiva lead su Sales Navigator", "Gruppo A (4)", "Da 1,5h a 10 min/sett (~89%)", "333h"]
            ].map((row, i) => new TableRow({
              children: row.map((cell, j) => dataCell(cell, [1500, 2500, 1800, 1600, 1626][j], {
                shading: i % 2 === 0 ? VERY_LIGHT : undefined,
                align: [3, 4].includes(j) ? AlignmentType.CENTER : AlignmentType.LEFT,
                size: 17
              }))
            })),
            new TableRow({
              children: [
                totalCell("TOTALE", 1500),
                totalCell("", 2500),
                totalCell("12 risorse", 1800),
                totalCell("", 1600),
                totalCell("2.239h", 1626, { align: AlignmentType.CENTER })
              ]
            })
          ]
        }),

        new Paragraph({ children: [new PageBreak()] }),

        // ─── 4. IPOTESI UTILIZZATE ───
        new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("4. Ipotesi di Calcolo")] }),

        bodyText("Ogni stima del presente business case si fonda su ipotesi esplicite e verificabili. Di seguito l\u2019elenco completo delle assunzioni adottate, suddivise per categoria."),

        new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("4.1 Parametri generali")] }),

        ...[
          "Settimane lavorative/anno: 48 (escludendo ferie, festivit\u00E0, malattie)",
          "Giorni lavorativi/anno: 220 (utilizzato per Area 4 \u2014 task giornalieri)",
          "Ore lavorative/anno per FTE: 1.720 (standard ISTAT per impiegati)",
          "Moltiplicatore costo azienda: 1,40\u00D7 sulla RAL (contributi + TFR + INAIL + oneri accessori)"
        ].map(t => new Paragraph({
          numbering: { reference: "bullets", level: 0 },
          spacing: { after: 60 },
          children: [new TextRun({ text: t, font: "Arial", size: 20, color: DARK_GRAY })]
        })),

        spacer(),
        new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("4.2 Ipotesi di volume e riduzione tempi")] }),

        ...[
          "Volumi Analyst 2: pari a Simona (100%). Analyst 3 e Manager Gruppo A: 35%. Director: 12%.",
          "Riduzione tempo profilazione: da 17,5 min a 5 min per profilo (risparmio 12,5 min, -71%)",
          "Riduzione tempo messaggistica: da 15 min a 4 min per messaggio (risparmio 11 min, -73%)",
          "Tracking automatico: riduzione ~90% del tempo di gestione Excel manuale",
          "Organizzazione giornaliera (Gruppo B): da 15 min/giorno a 5 min/giorno (-67%)",
          "Browsing Sales Navigator: da 1,5h/settimana a 10 min/settimana per Analyst full-time"
        ].map(t => new Paragraph({
          numbering: { reference: "bullets", level: 0 },
          spacing: { after: 60 },
          children: [new TextRun({ text: t, font: "Arial", size: 20, color: DARK_GRAY })]
        })),

        spacer(),
        new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("4.3 Ipotesi finanziarie")] }),

        ...[
          "Investimento una tantum: \u20AC55.000 (sviluppo e implementazione piattaforma)",
          "Tasso di sconto (WACC proxy): 8% annuo, coerente con il costo del capitale per PMI italiane",
          "Orizzonte di analisi: 3 anni",
          "Curva di ramp-up Anno 1: conservativo 60%, realistico 70%, ottimistico 80% del beneficio a regime",
          "Costi ricorrenti: non inclusi nel presente modello (da quantificare \u2014 vedasi sezione 8)"
        ].map(t => new Paragraph({
          numbering: { reference: "bullets", level: 0 },
          spacing: { after: 60 },
          children: [new TextRun({ text: t, font: "Arial", size: 20, color: DARK_GRAY })]
        })),

        new Paragraph({ children: [new PageBreak()] }),

        // ─── 5. CALCOLO RISPARMIO FTE ───
        new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("5. Calcolo del Risparmio Operativo per Area")] }),

        // Area 1
        new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Area 1: Profilazione Automatizzata (Gruppo A)")] }),
        bodyText("Oggi ogni profilo richiede 15\u201320 minuti di analisi manuale: navigazione LinkedIn, verifica azienda, controllo eventi, ricerca divisioni interne. Con LeadMe, lo scraper raccoglie automaticamente i dati e l\u2019AI pre-valuta il fit. L\u2019analyst rivede e conferma in ~5 minuti."),

        new Table({
          width: { size: TABLE_WIDTH, type: WidthType.DXA },
          columnWidths: [1800, 1000, 1200, 1000, 1000, 1026, 1000, 1000],
          rows: [
            new TableRow({
              children: [
                headerCell("Risorsa", 1800),
                headerCell("Profili/s", 1000, { align: AlignmentType.CENTER }),
                headerCell("\u0394/profilo", 1200, { align: AlignmentType.CENTER }),
                headerCell("Ore/s", 1000, { align: AlignmentType.CENTER }),
                headerCell("Sett.", 1000, { align: AlignmentType.CENTER }),
                headerCell("Ore/a", 1026, { align: AlignmentType.CENTER }),
                headerCell("\u20AC/h", 1000, { align: AlignmentType.CENTER }),
                headerCell("Risparmio", 1000, { align: AlignmentType.CENTER })
              ]
            }),
            ...[
              ["Simona (Analyst)", "25", "12,5 min", "5,2h", "48", "250h", "\u20AC24", "\u20AC6.000"],
              ["Analyst 2", "25", "12,5 min", "5,2h", "48", "250h", "\u20AC24", "\u20AC6.000"],
              ["Analyst 3 (35%)", "9", "12,5 min", "1,9h", "48", "90h", "\u20AC24", "\u20AC2.160"],
              ["Manager (35%)", "9", "12,5 min", "1,9h", "48", "90h", "\u20AC34", "\u20AC3.060"],
              ["Director (12%)", "3", "12,5 min", "0,6h", "48", "30h", "\u20AC53", "\u20AC1.590"]
            ].map((row, i) => new TableRow({
              children: row.map((cell, j) => dataCell(cell, [1800, 1000, 1200, 1000, 1000, 1026, 1000, 1000][j], {
                shading: i % 2 === 0 ? VERY_LIGHT : undefined,
                align: j > 0 ? AlignmentType.CENTER : AlignmentType.LEFT,
                size: 17
              }))
            })),
            new TableRow({
              children: [
                totalCell("TOTALE AREA 1", 1800),
                totalCell("", 1000),
                totalCell("", 1200),
                totalCell("", 1000),
                totalCell("", 1000),
                totalCell("710h", 1026, { align: AlignmentType.CENTER }),
                totalCell("", 1000),
                totalCell("\u20AC18.810", 1000, { align: AlignmentType.CENTER })
              ]
            })
          ]
        }),

        spacer(),

        // Area 2
        new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Area 2: Scrittura Messaggi AI-Assisted (Gruppo A)")] }),
        bodyText("Per ogni lead contattato, il commerciale compone un messaggio personalizzato (~15 min). Con LeadMe, l\u2019AI genera un draft basato su profilo e storico; il commerciale rivede e personalizza in ~4 minuti."),

        new Table({
          width: { size: TABLE_WIDTH, type: WidthType.DXA },
          columnWidths: [1800, 1200, 1200, 1226, 1000, 1000, 1600],
          rows: [
            new TableRow({
              children: [
                headerCell("Risorsa", 1800),
                headerCell("Msg/sett", 1200, { align: AlignmentType.CENTER }),
                headerCell("\u0394/msg", 1200, { align: AlignmentType.CENTER }),
                headerCell("Ore/sett", 1226, { align: AlignmentType.CENTER }),
                headerCell("Ore/anno", 1000, { align: AlignmentType.CENTER }),
                headerCell("\u20AC/h", 1000, { align: AlignmentType.CENTER }),
                headerCell("Risparmio", 1600, { align: AlignmentType.CENTER })
              ]
            }),
            ...[
              ["Simona (Analyst)", "8", "11 min", "1,5h", "71h", "\u20AC24", "\u20AC1.699"],
              ["Analyst 2", "8", "11 min", "1,5h", "71h", "\u20AC24", "\u20AC1.699"],
              ["Analyst 3 (35%)", "3", "11 min", "0,6h", "26h", "\u20AC24", "\u20AC634"],
              ["Manager (35%)", "3", "11 min", "0,6h", "26h", "\u20AC34", "\u20AC898"],
              ["Director (12%)", "1", "11 min", "0,2h", "9h", "\u20AC53", "\u20AC466"]
            ].map((row, i) => new TableRow({
              children: row.map((cell, j) => dataCell(cell, [1800, 1200, 1200, 1226, 1000, 1000, 1600][j], {
                shading: i % 2 === 0 ? VERY_LIGHT : undefined,
                align: j > 0 ? AlignmentType.CENTER : AlignmentType.LEFT,
                size: 17
              }))
            })),
            new TableRow({
              children: [
                totalCell("TOTALE AREA 2", 1800),
                totalCell("", 1200),
                totalCell("", 1200),
                totalCell("", 1226),
                totalCell("203h", 1000, { align: AlignmentType.CENTER }),
                totalCell("", 1000),
                totalCell("\u20AC5.396", 1600, { align: AlignmentType.CENTER })
              ]
            })
          ]
        }),

        spacer(),

        // Area 3
        new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Area 3: Eliminazione Tracking Manuale (Gruppo A + B)")] }),
        bodyText("Oggi il tracking di 290+ lead attivi per persona avviene su Excel: date di contatto, risposte, status, follow-up. Con LeadMe, il tracking \u00E8 completamente automatico con dashboard in tempo reale e alert su scadenze."),

        multiRunParagraph([
          { text: "Gruppo A (ricercatori attivi): ", bold: true },
          { text: "risparmio da 2,5h/settimana (Simona) a 15 min/settimana. Totale Gruppo A: 316h/anno, \u20AC8.564." }
        ]),
        multiRunParagraph([
          { text: "Gruppo B (7 Manager relazioni): ", bold: true },
          { text: "risparmio su verifica funnel (-30 min/sett), aggiornamento status (-25 min/sett), preparazione call (-15 min/sett). Totale: 1,25h/sett per persona \u00D7 7 \u00D7 48 = 420h/anno, \u20AC14.280." }
        ]),
        multiRunParagraph([
          { text: "Totale Area 3: 736h \u2192 \u20AC22.844/anno", bold: true, color: DARK_BLUE }
        ]),

        spacer(),

        // Area 4
        new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Area 4: Task da Minutes + Notifiche Giornaliere (Gruppo B)")] }),
        bodyText("I 7 Manager oggi ricevono action item a voce o via email. Devono organizzarsi autonomamente. Con LeadMe + Minutes + Sally, ogni mattina ricevono un recap automatico con le azioni del giorno. Tempo di organizzazione: da 15 min/giorno a 5 min/giorno."),
        multiRunParagraph([
          { text: "Calcolo: ", bold: true },
          { text: "7 persone \u00D7 10 min risparmiati/giorno \u00D7 220 giorni = 257h/anno \u00D7 \u20AC34/h = " },
          { text: "\u20AC8.738/anno", bold: true, color: DARK_BLUE }
        ]),

        spacer(),

        // Area 5
        new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Area 5: Scraper Proattivo (Gruppo A)")] }),
        bodyText("Prima di analizzare i profili, i ricercatori devono trovarli navigando manualmente Sales Navigator (~1,5h/settimana). Lo scraper proattivo automatizza questa ricerca: ogni mattina il commerciale trova una lista di lead pre-qualificati."),
        multiRunParagraph([
          { text: "Totale Area 5: 333h \u2192 \u20AC8.377/anno", bold: true, color: DARK_BLUE }
        ]),

        new Paragraph({ children: [new PageBreak()] }),

        // ─── 6. VALORIZZAZIONE ECONOMICA ───
        new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("6. Valorizzazione Economica del Risparmio")] }),

        new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("6.1 Riepilogo per area")] }),

        new Table({
          width: { size: TABLE_WIDTH, type: WidthType.DXA },
          columnWidths: [500, 3500, 1513, 1500, 2013],
          rows: [
            new TableRow({
              children: [
                headerCell("#", 500, { align: AlignmentType.CENTER }),
                headerCell("Area di risparmio", 3500),
                headerCell("Ore/anno", 1513, { align: AlignmentType.CENTER }),
                headerCell("Risparmio", 1500, { align: AlignmentType.CENTER }),
                headerCell("% sul totale", 2013, { align: AlignmentType.CENTER })
              ]
            }),
            ...[
              ["1", "Profilazione automatizzata", "710h", "\u20AC18.810", "29%"],
              ["2", "Scrittura messaggi AI-assisted", "203h", "\u20AC5.396", "8%"],
              ["3", "Eliminazione tracking manuale", "736h", "\u20AC22.844", "36%"],
              ["4", "Task da Minutes + notifiche", "257h", "\u20AC8.738", "14%"],
              ["5", "Scraper proattivo", "333h", "\u20AC8.377", "13%"]
            ].map((row, i) => new TableRow({
              children: row.map((cell, j) => dataCell(cell, [500, 3500, 1513, 1500, 2013][j], {
                shading: i % 2 === 0 ? VERY_LIGHT : undefined,
                align: j !== 1 ? AlignmentType.CENTER : AlignmentType.LEFT
              }))
            })),
            new TableRow({
              children: [
                totalCell("", 500),
                totalCell("TOTALE", 3500),
                totalCell("2.239h", 1513, { align: AlignmentType.CENTER }),
                totalCell("\u20AC64.165", 1500, { align: AlignmentType.CENTER }),
                totalCell("100%", 2013, { align: AlignmentType.CENTER })
              ]
            })
          ]
        }),

        spacer(),

        new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("6.2 Composizione per profilo")] }),

        new Table({
          width: { size: TABLE_WIDTH, type: WidthType.DXA },
          columnWidths: [2006, 1200, 1800, 2020, 2000],
          rows: [
            new TableRow({
              children: [
                headerCell("Profilo", 2006),
                headerCell("Persone", 1200, { align: AlignmentType.CENTER }),
                headerCell("Ore liberate", 1800, { align: AlignmentType.CENTER }),
                headerCell("Valore", 2020, { align: AlignmentType.CENTER }),
                headerCell("% sul totale", 2000, { align: AlignmentType.CENTER })
              ]
            }),
            ...[
              ["Analyst", "3", "1.347h", "\u20AC32.480", "51%"],
              ["Manager", "8", "813h", "\u20AC27.316", "42%"],
              ["Director", "1", "59h", "\u20AC4.369", "7%"]
            ].map((row, i) => new TableRow({
              children: row.map((cell, j) => dataCell(cell, [2006, 1200, 1800, 2020, 2000][j], {
                shading: i % 2 === 0 ? VERY_LIGHT : undefined,
                align: j > 0 ? AlignmentType.CENTER : AlignmentType.LEFT
              }))
            })),
            new TableRow({
              children: [
                totalCell("TOTALE", 2006),
                totalCell("12", 1200, { align: AlignmentType.CENTER }),
                totalCell("2.219h", 1800, { align: AlignmentType.CENTER }),
                totalCell("\u20AC64.165", 2020, { align: AlignmentType.CENTER }),
                totalCell("100%", 2000, { align: AlignmentType.CENTER })
              ]
            })
          ]
        }),

        spacer(),
        bodyText("Il risparmio equivale a circa 1,3 FTE (2.239h / 1.720h per FTE). Questo tempo non si traduce necessariamente in riduzione di organico, ma in riallocazione della capacit\u00E0 lavorativa verso attivit\u00E0 a maggior valore aggiunto: pi\u00F9 lead analizzati, pi\u00F9 relazioni coltivate, pi\u00F9 conversioni."),

        new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("6.3 Scenari di adozione")] }),
        bodyText("Il risparmio effettivo dipende dal tasso di adozione della piattaforma da parte del team. Sono stati modellati tre scenari:"),

        new Table({
          width: { size: TABLE_WIDTH, type: WidthType.DXA },
          columnWidths: [3009, 3009, 3008],
          rows: [
            new TableRow({
              children: [
                headerCell("Scenario", 3009),
                headerCell("Tasso di adozione", 3009, { align: AlignmentType.CENTER }),
                headerCell("Risparmio annuale", 3008, { align: AlignmentType.CENTER })
              ]
            }),
            ...[
              ["Conservativo", "70%", "\u20AC44.900"],
              ["Realistico", "85%", "\u20AC54.500"],
              ["Ottimistico", "100%", "\u20AC64.200"]
            ].map((row, i) => new TableRow({
              children: row.map((cell, j) => dataCell(cell, [3009, 3009, 3008][j], {
                shading: i === 1 ? LIGHT_BLUE : (i % 2 === 0 ? VERY_LIGHT : undefined),
                align: j > 0 ? AlignmentType.CENTER : AlignmentType.LEFT,
                bold: i === 1
              }))
            }))
          ]
        }),

        new Paragraph({ children: [new PageBreak()] }),

        // ─── 7. STRUTTURA FINANZIARIA ───
        new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("7. Struttura del Business Case Finanziario")] }),

        new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("7.1 Investimento")] }),
        bodyText("L\u2019investimento totale per lo sviluppo e l\u2019implementazione della piattaforma LeadMe Evolution \u00E8 di \u20AC55.000 (una tantum). Questo importo copre progettazione, sviluppo software, integrazione con i sistemi esistenti (LinkedIn, Sales Navigator, Minutes) e deployment."),

        new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("7.2 Modello finanziario a 3 anni")] }),
        bodyText("Il modello incorpora una curva di ramp-up prudenziale per il primo anno, riflettendo i tempi necessari per onboarding, formazione e adozione progressiva da parte del team."),

        // 3-year model table - REALISTIC
        new Table({
          width: { size: TABLE_WIDTH, type: WidthType.DXA },
          columnWidths: [3200, 1456, 1456, 1458, 1456],
          rows: [
            new TableRow({
              children: [
                headerCell("SCENARIO REALISTICO (85%)", 3200),
                headerCell("Anno 0", 1456, { align: AlignmentType.CENTER }),
                headerCell("Anno 1", 1456, { align: AlignmentType.CENTER }),
                headerCell("Anno 2", 1458, { align: AlignmentType.CENTER }),
                headerCell("Anno 3", 1456, { align: AlignmentType.CENTER })
              ]
            }),
            ...[
              ["Investimento", "-\u20AC55.000", "", "", ""],
              ["Beneficio a regime (\u20AC54.500)", "", "70%", "100%", "100%"],
              ["Beneficio effettivo", "", "\u20AC38.150", "\u20AC54.500", "\u20AC54.500"],
              ["Cash flow cumulato", "-\u20AC55.000", "-\u20AC16.850", "\u20AC37.650", "\u20AC92.150"]
            ].map((row, i) => new TableRow({
              children: row.map((cell, j) => dataCell(cell, [3200, 1456, 1456, 1458, 1456][j], {
                shading: i === 3 ? LIGHT_BLUE : (i % 2 === 0 ? VERY_LIGHT : undefined),
                align: j > 0 ? AlignmentType.CENTER : AlignmentType.LEFT,
                bold: i === 3
              }))
            }))
          ]
        }),

        spacer(),

        new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("7.3 KPI finanziari per scenario")] }),

        new Table({
          width: { size: TABLE_WIDTH, type: WidthType.DXA },
          columnWidths: [2600, 2142, 2142, 2142],
          rows: [
            new TableRow({
              children: [
                headerCell("KPI", 2600),
                headerCell("Conservativo", 2142, { align: AlignmentType.CENTER }),
                headerCell("Realistico", 2142, { align: AlignmentType.CENTER }),
                headerCell("Ottimistico", 2142, { align: AlignmentType.CENTER })
              ]
            }),
            ...[
              ["Risparmio annuale a regime", fmtEur(44900), fmtEur(54500), fmtEur(64200)],
              ["Ramp-up Anno 1", "60%", "70%", "80%"],
              ["Beneficio Anno 1", fmtEur(44900 * 0.60), fmtEur(54500 * 0.70), fmtEur(64200 * 0.80)],
              ["Payback Period", Math.round(calcPaybackMonths("conservative")) + " mesi", Math.round(calcPaybackMonths("realistic")) + " mesi", Math.round(calcPaybackMonths("optimistic")) + " mesi"],
              ["ROI a 3 anni", fmtPct(calcROI3yr("conservative")), fmtPct(calcROI3yr("realistic")), fmtPct(calcROI3yr("optimistic"))],
              ["NPV a 3 anni (8%)", fmtEur(calcNPV("conservative")), fmtEur(calcNPV("realistic")), fmtEur(calcNPV("optimistic"))],
              ["IRR", fmtPct(calcIRR("conservative")), fmtPct(calcIRR("realistic")), fmtPct(calcIRR("optimistic"))]
            ].map((row, i) => new TableRow({
              children: row.map((cell, j) => dataCell(cell, [2600, 2142, 2142, 2142][j], {
                shading: j === 2 ? LIGHT_BLUE : (i % 2 === 0 ? VERY_LIGHT : undefined),
                align: j > 0 ? AlignmentType.CENTER : AlignmentType.LEFT,
                bold: [3, 4, 5].includes(i)
              }))
            }))
          ]
        }),

        spacer(),
        bodyText("Anche nello scenario conservativo (70% di adozione, 60% di ramp-up al primo anno), l\u2019investimento si ripaga entro 20 mesi e genera un NPV positivo a 3 anni. Lo scenario realistico mostra un payback di circa 16 mesi con un ROI triennale superiore al 165%."),

        new Paragraph({ children: [new PageBreak()] }),

        // ─── ACCELERAZIONE COMMERCIALE ───
        new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("8. Accelerazione Commerciale (Benefici Indiretti)")] }),
        bodyText("Oltre al risparmio operativo diretto (hard savings), LeadMe genera benefici indiretti sulla capacit\u00E0 di revenue generation. Questi benefici non sono inclusi nel calcolo del ROI per prudenza, ma rappresentano il vero moltiplicatore strategico dell\u2019investimento."),

        new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("8.1 Aumento capacit\u00E0 di scouting")] }),

        new Table({
          width: { size: TABLE_WIDTH, type: WidthType.DXA },
          columnWidths: [3500, 1842, 1842, 1842],
          rows: [
            new TableRow({
              children: [
                headerCell("Metrica", 3500),
                headerCell("Oggi", 1842, { align: AlignmentType.CENTER }),
                headerCell("Con LeadMe", 1842, { align: AlignmentType.CENTER }),
                headerCell("Delta", 1842, { align: AlignmentType.CENTER })
              ]
            }),
            ...[
              ["Profili analizzati/settimana (team)", "~72", "~115", "+60%"],
              ["Lead contattati/settimana", "~24", "~38", "+58%"],
              ["Risposte ricevute/settimana (60%)", "~14", "~23", "+64%"]
            ].map((row, i) => new TableRow({
              children: row.map((cell, j) => dataCell(cell, [3500, 1842, 1842, 1842][j], {
                shading: i % 2 === 0 ? VERY_LIGHT : undefined,
                align: j > 0 ? AlignmentType.CENTER : AlignmentType.LEFT,
                bold: j === 3
              }))
            }))
          ]
        }),

        spacer(),
        new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("8.2 Revenue a rischio recuperabile")] }),
        bodyText("Con ~700\u2013800 lead attivi nel team e un tasso stimato del 5\u201310% di follow-up persi per gestione manuale, si perdono 35\u201380 lead/anno. Applicando un tasso di conversione lead\u2192commessa del 3\u20135% e un valore medio commessa di ~\u20AC210K (\u20AC55M / 260 COM), il range di revenue a rischio recuperabile \u00E8 di \u20AC210K\u2013\u20AC840K/anno."),

        multiRunParagraph([
          { text: "Nota: ", bold: true, italic: true, color: MID_GRAY, size: 18 },
          { text: "Questo range \u00E8 indicativo e andrebbe validato con dati storici sulla conversione lead\u2192commessa. Anche assumendo solo l\u2019estremo inferiore (\u20AC210K), il recupero di una singola commessa persa ripagherebbe quasi 4 volte l\u2019intero investimento nella piattaforma.", italic: true, color: MID_GRAY, size: 18 }
        ]),

        spacer(),
        new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("8.3 Time-to-first-contact")] }),
        bodyText("Il tempo dalla scoperta del lead al primo contatto si riduce da 2\u20133 giorni a meno di 24 ore. Nel mercato B2B eventi, la velocit\u00E0 di primo contatto \u00E8 un fattore competitivo significativo."),

        new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("8.4 Intelligence competitiva continua")] }),
        bodyText("Lo scraper monitora automaticamente cambi di ruolo e azienda (~10\u201315% dei profili/anno = 80\u2013120 cambi rilevati, di cui ~30% rilevanti commercialmente). Queste opportunit\u00E0 oggi vengono scoperte in ritardo o mai."),

        new Paragraph({ children: [new PageBreak()] }),

        // ─── 9. INFORMAZIONI MANCANTI ───
        new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("9. Informazioni Mancanti e Raccomandazioni")] }),
        bodyText("Per aumentare l\u2019accuratezza del modello e rafforzarne la difendibilit\u00E0, si raccomanda di acquisire i seguenti dati:"),

        new Table({
          width: { size: TABLE_WIDTH, type: WidthType.DXA },
          columnWidths: [500, 3200, 3000, 2326],
          rows: [
            new TableRow({
              children: [
                headerCell("#", 500, { align: AlignmentType.CENTER }),
                headerCell("Informazione", 3200),
                headerCell("Perch\u00E9 serve", 3000),
                headerCell("Impatto", 2326, { align: AlignmentType.CENTER })
              ]
            }),
            ...[
              ["1", "Costi ricorrenti (hosting, API, manutenzione)", "Per calcolare il costo totale di ownership (TCO)", "Alto"],
              ["2", "Tasso storico conversione lead\u2192commessa", "Per validare il range di revenue recuperabile", "Alto"],
              ["3", "Volumi effettivi Analyst 2 e Analyst 3", "Oggi ipotizzati, da confermare con dati reali", "Medio"],
              ["4", "Costi di change management e formazione", "Per includere nel TCO", "Medio"],
              ["5", "% effettiva di follow-up persi", "Per quantificare con precisione il mancato fatturato", "Medio"],
              ["6", "Costi licenze Sales Navigator (invariati)", "Per completezza del modello comparativo", "Basso"],
              ["7", "Distribuzione valore commesse (mediana vs media)", "Il valore medio (\u20AC210K) include outlier; la mediana potrebbe essere inferiore", "Medio"]
            ].map((row, i) => new TableRow({
              children: row.map((cell, j) => dataCell(cell, [500, 3200, 3000, 2326][j], {
                shading: i % 2 === 0 ? VERY_LIGHT : undefined,
                align: [0, 3].includes(j) ? AlignmentType.CENTER : AlignmentType.LEFT,
                size: 17
              }))
            }))
          ]
        }),

        spacer(300),

        // ─── DISCLAIMER ───
        new Paragraph({
          border: { top: { style: BorderStyle.SINGLE, size: 2, color: MID_BLUE, space: 8 } },
          spacing: { before: 200, after: 60 },
          children: [new TextRun({ text: "Disclaimer", bold: true, font: "Arial", size: 18, color: MID_BLUE })]
        }),
        new Paragraph({
          spacing: { after: 60, line: 240 },
          children: [new TextRun({
            text: "Il presente business case si basa su dati operativi raccolti direttamente dal team commerciale Noloop e su parametri retributivi standard del mercato italiano. Le stime di risparmio rappresentano il potenziale calcolato in base alle ipotesi dichiarate. I benefici di accelerazione commerciale (Sezione 8) sono indicativi e non sono inclusi nel calcolo del ROI. I risultati effettivi dipenderanno dal livello di adozione della piattaforma, dalla qualit\u00E0 dell\u2019implementazione e dall\u2019efficacia del change management.",
            font: "Arial", size: 17, color: MID_GRAY, italics: true
          })]
        })
      ]
    }
  ]
});

// Generate
Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/home/claude/LeadMe_BusinessCase.docx", buffer);
  console.log("Document created successfully");
  console.log("Size:", buffer.length, "bytes");
  
  // Print financial summary
  console.log("\n=== FINANCIAL SUMMARY ===");
  for (const [name, s] of Object.entries(SCENARIOS)) {
    console.log(`\n${name.toUpperCase()}:`);
    console.log(`  Annual savings: ${fmtEur(s.annual)}`);
    console.log(`  Year 1 (ramp-up ${s.rampup*100}%): ${fmtEur(s.annual * s.rampup)}`);
    console.log(`  Payback: ${calcPaybackMonths(name).toFixed(1)} months`);
    console.log(`  ROI 3yr: ${fmtPct(calcROI3yr(name))}`);
    console.log(`  NPV 3yr: ${fmtEur(calcNPV(name))}`);
    console.log(`  IRR: ${fmtPct(calcIRR(name))}`);
  }
});