const pptxgen = require("pptxgenjs");

async function main() {
  let pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.author = "HeyAI";
  pres.title = "Noloop - Evoluzioni Wave 1";

  const BG = "000000";
  const CARD = "232831";
  const CARD_BORDER = "2A2A3A";
  const PURPLE_L = "BAA4EB";
  const PURPLE_D = "5728B8";
  const GREEN = "66DDAB";
  const WHITE = "FFFFFF";
  const GRAY = "CCCCCC";
  const MUTED = "9090A8";
  const FONT = "Calibri";

  let s = pres.addSlide();
  s.background = { color: BG };

  // Title
  s.addText("Le Evoluzioni delle Soluzioni Attive", {
    x: 0.5, y: 0.15, w: 9, h: 0.65,
    fontSize: 36, fontFace: FONT, color: WHITE, bold: true, margin: 0
  });

  s.addText("Tre interventi mirati sugli strumenti già in produzione per rimuovere limitazioni operative e sbloccare nuove opportunità.", {
    x: 0.5, y: 0.78, w: 9, h: 0.3,
    fontSize: 11.5, fontFace: FONT, color: GRAY, margin: 0
  });

  // === 3 COLUMNS ===
  const colW = 2.9;
  const colGap = 0.15;
  const colStartX = 0.5;
  const colY = 1.25;
  const colH = 4.0;

  const columns = [
    {
      icon: "📍",
      name: "Venue Finder",
      tagline: "Da ricerca manuale a presentazione automatica",
      oggi: "Ricerca location per eventi con proposta automatica di strutture, fornitori e testi per presentazioni.",
      evoluzione: "Creazione automatica della presentazione grafica completa (copy + foto + layout), memoria storica aziendale consultabile, integrazione nell'ecosistema AI.",
      perche: "1.500+ ore/anno in impaginazione manuale. Anche per location già proposte si riparte da zero ogni volta.",
      invest: "€9.000 → €8.000",
      kpi: "€36.400/anno | ROI 708% | Payback 3 mesi"
    },
    {
      icon: "👥",
      name: "Crowd",
      tagline: "Da piattaforma interna a prodotto vendibile",
      oggi: "Gestione eventi end-to-end: registrazioni, liste, comunicazioni WhatsApp/email, dashboard, agente WhatsApp.",
      evoluzione: "Integrazione gestione pagamenti (es. Stripe) per abilitare la vendita in subscription ad altre agenzie con Noloop come partner commerciale.",
      perche: "Senza pagamenti integrati, Crowd non è vendibile sul mercato. Con questa funzionalità diventa un asset commerciale a revenue ricorrente.",
      invest: "€15.000",
      kpi: "Revenue ricorrente | Prodotto vendibile a terzi"
    },
    {
      icon: "🎙",
      name: "Minutes",
      tagline: "Da tool limitato a copertura completa",
      oggi: "Trascrizione e riepilogo automatico delle call, minute e next steps, archiviazione GDPR-compliant. Lo strumento più apprezzato dai reparti.",
      evoluzione: "Agente AI che partecipa alla call o registra esternamente, con riconoscimento e distinzione delle voci dei partecipanti.",
      perche: "Oggi inutilizzabile quando il cliente non abilita la trascrizione Teams o in riunioni in presenza — circa il 40% delle call operative.",
      invest: "€9.000",
      kpi: "+40% copertura call | Max. ROI investimento esistente"
    }
  ];

  columns.forEach((col, i) => {
    const cx = colStartX + i * (colW + colGap);

    // Card background
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: cx, y: colY, w: colW, h: colH,
      fill: { color: CARD }, rectRadius: 0.06
    });

    // Top accent
    s.addShape(pres.shapes.RECTANGLE, {
      x: cx, y: colY, w: colW, h: 0.04,
      fill: { color: GREEN }
    });

    // Solution name
    s.addText(col.name, {
      x: cx + 0.15, y: colY + 0.12, w: colW - 0.3, h: 0.3,
      fontSize: 16, fontFace: FONT, color: WHITE, bold: true, margin: 0
    });

    // Tagline
    s.addText(col.tagline, {
      x: cx + 0.15, y: colY + 0.4, w: colW - 0.3, h: 0.22,
      fontSize: 8, fontFace: FONT, color: GREEN, bold: true, italic: true, margin: 0
    });

    // Separator
    s.addShape(pres.shapes.LINE, {
      x: cx + 0.15, y: colY + 0.67, w: colW - 0.3, h: 0,
      line: { color: CARD_BORDER, width: 0.5 }
    });

    // "Oggi" section
    let yPos = colY + 0.75;
    s.addText("OGGI", {
      x: cx + 0.15, y: yPos, w: colW - 0.3, h: 0.18,
      fontSize: 7, fontFace: FONT, color: PURPLE_L, bold: true, charSpacing: 1.5, margin: 0
    });
    s.addText(col.oggi, {
      x: cx + 0.15, y: yPos + 0.18, w: colW - 0.3, h: 0.52,
      fontSize: 7.5, fontFace: FONT, color: MUTED, lineSpacingMultiple: 1.25, margin: 0
    });

    // "Evoluzione" section
    yPos = colY + 1.5;
    s.addText("L'EVOLUZIONE", {
      x: cx + 0.15, y: yPos, w: colW - 0.3, h: 0.18,
      fontSize: 7, fontFace: FONT, color: GREEN, bold: true, charSpacing: 1.5, margin: 0
    });
    s.addText(col.evoluzione, {
      x: cx + 0.15, y: yPos + 0.18, w: colW - 0.3, h: 0.6,
      fontSize: 7.5, fontFace: FONT, color: GRAY, lineSpacingMultiple: 1.25, margin: 0
    });

    // "Perché" section
    yPos = colY + 2.35;
    s.addText("PERCHÉ SERVE", {
      x: cx + 0.15, y: yPos, w: colW - 0.3, h: 0.18,
      fontSize: 7, fontFace: FONT, color: PURPLE_L, bold: true, charSpacing: 1.5, margin: 0
    });
    s.addText(col.perche, {
      x: cx + 0.15, y: yPos + 0.18, w: colW - 0.3, h: 0.6,
      fontSize: 7.5, fontFace: FONT, color: MUTED, lineSpacingMultiple: 1.25, margin: 0
    });

    // Investment box at bottom
    const invY = colY + colH - 0.65;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: cx + 0.12, y: invY, w: colW - 0.24, h: 0.55,
      fill: { color: "1A1A2E" }, rectRadius: 0.04
    });
    s.addText(col.invest, {
      x: cx + 0.15, y: invY + 0.04, w: colW - 0.3, h: 0.22,
      fontSize: 13, fontFace: FONT, color: WHITE, bold: true, align: "center", margin: 0
    });
    s.addText(col.kpi, {
      x: cx + 0.15, y: invY + 0.27, w: colW - 0.3, h: 0.22,
      fontSize: 7, fontFace: FONT, color: GREEN, align: "center", margin: 0
    });
  });

  // HeyAI + page
  s.addText([
    { text: "Hey", options: { color: WHITE, bold: true, fontSize: 11 } },
    { text: "AI", options: { color: PURPLE_L, bold: true, fontSize: 11 } }
  ], {
    x: 9.0, y: 5.15, w: 0.7, h: 0.35,
    fontFace: FONT, align: "right", margin: 0
  });

  await pres.writeFile({ fileName: "/home/claude/Noloop_Evoluzioni_Overview.pptx" });
  console.log("Done!");
}

main().catch(console.error);