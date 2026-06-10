// Test end-to-end pipeline Proposta di Investimento HeyAI
// Design token: .claude/skills/investment-proposal-drafting/SKILL.md (14/5/2026)
const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, ImageRun,
  Header, Footer, AlignmentType, BorderStyle, WidthType, ShadingType,
  HorizontalPositionRelativeFrom, VerticalPositionRelativeFrom, TextWrappingType,
} = require("docx");

// ---- Token tipografici (SKILL §4) ----
const FONT_BODY = "Aptos";
const FONT_CORP = "Acre Medium"; // header/footer (§2-§3); installato sul Mac di Carlo
const TEAL = "2B8C96";      // titolo, highlight, cifre
const TEAL_DARK = "156082"; // footer
const BODY_COLOR = "1A1A1A";
const CALLOUT_FILL = "E8F4F6";

const aptos = (opts) => ({ font: { ascii: FONT_BODY, hAnsi: FONT_BODY }, ...opts });

// ---- Header (§2): logo flottante sx + blocco testo dx indent 7080 twips ----
const logo = new ImageRun({
  type: "png",
  data: fs.readFileSync("/tmp/test-proposta/logo.png"),
  transformation: { width: 199, height: 141 }, // 1898650x1343660 EMU ≈ 5.01x3.55 cm
  floating: {
    horizontalPosition: { relative: HorizontalPositionRelativeFrom.PAGE, offset: 180000 },
    verticalPosition: { relative: VerticalPositionRelativeFrom.PAGE, offset: 120000 },
    wrap: { type: TextWrappingType.NONE },
    behindDocument: false,
  },
  altText: { title: "Logo HeyAI", description: "Logo HeyAI", name: "HeyAI" },
});

const headerLine = (text) =>
  new Paragraph({
    indent: { left: 7080 },
    spacing: { after: 0, line: 240 },
    children: [new TextRun({ text, size: 21, font: { ascii: FONT_CORP, hAnsi: FONT_CORP } })], // 10.5pt
  });

const header = new Header({
  children: [
    new Paragraph({ children: [logo], spacing: { after: 0 } }),
    headerLine("HeyAI S.r.l."),
    headerLine("Sede legale: Via Parigi 11, 00185 Roma (RM)"),
    headerLine("info@heyaidigital.it"),
    headerLine("www.heyaidigital.it"),
  ],
});

// ---- Footer (§3): bordo top #156082 size 6 + testo legale Acre 9pt #156082, centrato ----
const footer = new Footer({
  children: [
    new Paragraph({
      alignment: AlignmentType.CENTER,
      border: { top: { style: BorderStyle.SINGLE, size: 6, color: TEAL_DARK, space: 10 } },
      spacing: { before: 240, after: 0 },
      children: [
        new TextRun({
          text: "PEC: heyai@pec.it | REA RM – 1751505 | Cod. Fiscale: 17947791004 | Amministratore Unico: Ing. Bruno Mattucci",
          size: 18, // 9pt
          color: TEAL_DARK,
          font: { ascii: FONT_CORP, hAnsi: FONT_CORP },
        }),
      ],
    }),
  ],
});

// ---- Contenuti ----
const titolo = new Paragraph({
  spacing: { after: 200 },
  children: [new TextRun(aptos({ text: "Proposta di Investimento: Test Pipeline Generazione Documenti", bold: true, size: 40, color: TEAL }))], // 20pt
});

const h1 = (text) =>
  new Paragraph({
    spacing: { before: 200, after: 200 },
    children: [new TextRun(aptos({ text, bold: true, size: 32, color: "000000" }))], // 16pt nero
  });

const body = (text) =>
  new Paragraph({
    spacing: { after: 80, line: 240 },
    children: [new TextRun(aptos({ text, size: 22, color: BODY_COLOR }))], // 11pt
  });

// ---- Tabella dati standard 3x3 (§4.4): bordi size 4 neri, header bold fondo E8E8E8 ----
const COL = [3010, 3008, 3008]; // somma 9026 = content width A4 con margini 2.0cm
const border = { style: BorderStyle.SINGLE, size: 4, color: "000000" };
const borders = { top: border, bottom: border, left: border, right: border };
const cell = (text, colIdx, { headerRow = false } = {}) =>
  new TableCell({
    borders,
    width: { size: COL[colIdx], type: WidthType.DXA },
    shading: headerRow ? { fill: "E8E8E8", type: ShadingType.CLEAR } : undefined,
    margins: { top: 100, bottom: 100, left: 150, right: 150 },
    children: [
      new Paragraph({
        spacing: { after: 0 },
        children: [new TextRun(aptos({ text, bold: headerRow, size: 21, color: BODY_COLOR }))], // 10.5pt
      }),
    ],
  });
const row = (cells, opts) => new TableRow({ children: cells.map((t, i) => cell(t, i, opts)) });
const tabella = new Table({
  width: { size: 9026, type: WidthType.DXA },
  columnWidths: COL,
  rows: [
    row(["Fase", "Durata", "Output"], { headerRow: true }),
    row(["F1 — Setup", "2 settimane", "Validazione requisiti"]),
    row(["F2 — Sviluppo MVP", "6 settimane", "Consegna MVP navigabile"]),
  ],
});

// ---- Tabella-callout mono-cella (§4.3): bordi 2B8C96, fill E8F4F6 ----
const callout = new Table({
  width: { size: 9026, type: WidthType.DXA },
  columnWidths: [9026],
  rows: [
    new TableRow({
      children: [
        new TableCell({
          borders: {
            top: { style: BorderStyle.SINGLE, size: 4, color: TEAL },
            bottom: { style: BorderStyle.SINGLE, size: 4, color: TEAL },
            left: { style: BorderStyle.SINGLE, size: 4, color: TEAL },
            right: { style: BorderStyle.SINGLE, size: 4, color: TEAL },
          },
          shading: { fill: CALLOUT_FILL, type: ShadingType.CLEAR },
          margins: { top: 120, bottom: 120, left: 200, right: 200 },
          children: [
            new Paragraph({
              spacing: { after: 60 },
              children: [new TextRun(aptos({ text: "Investimento complessivo", bold: true, size: 22, color: TEAL }))],
            }),
            new Paragraph({
              spacing: { after: 0 },
              children: [new TextRun(aptos({ text: "€ 23.000 – € 28.000 (test callout cifra economica)", bold: true, size: 22, color: TEAL }))],
            }),
          ],
        }),
      ],
    }),
  ],
});

// ---- Documento: A4, margini top 2.50 / altri 2.00, header/footer offset 708 (§1) ----
const doc = new Document({
  styles: { default: { document: { run: { font: FONT_BODY, size: 22, color: BODY_COLOR } } } },
  sections: [
    {
      properties: {
        page: {
          size: { width: 11906, height: 16838 }, // A4 twips
          margin: { top: 1417, right: 1134, bottom: 1134, left: 1134, header: 708, footer: 708 },
        },
      },
      headers: { default: header },
      footers: { default: footer },
      children: [
        titolo,
        h1("1. Oggetto della Proposta"),
        body("HeyAI propone la realizzazione di un sistema di test end-to-end per la pipeline di generazione documenti. Il presente paragrafo verifica l'applicazione del body Aptos 11pt color #1A1A1A con override inline esplicito, come richiesto dal design system."),
        callout,
        h1("2. Piano di Lavoro"),
        body("Le fasi operative sono riepilogate nella tabella seguente."),
        tabella,
      ],
    },
  ],
});

Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync("/tmp/test-proposta/Test_Proposta_HeyAI.docx", buf);
  console.log("OK — scritto Test_Proposta_HeyAI.docx,", buf.length, "bytes");
});
