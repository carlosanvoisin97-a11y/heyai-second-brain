const pptxgen = require("pptxgenjs");

async function main() {
  let pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.author = "HeyAI";
  pres.title = "Noloop Wave 2 - Next Steps";

  // === EXACT COLOR PALETTE FROM ORIGINAL DECK ===
  const BG = "000000";
  const CARD = "232831";
  const CARD_BORDER = "2A2A3A";
  const PURPLE_L = "BAA4EB";
  const PURPLE_D = "5728B8";
  const PURPLE_M = "7B5EA7";
  const GREEN = "66DDAB";
  const GREEN_ALT = "7DDF80";
  const WHITE = "FFFFFF";
  const GRAY = "CCCCCC";
  const MUTED = "9090A8";

  const FONT = "Calibri";

  const makeCardShadow = () => ({ type: "outer", blur: 4, offset: 1, angle: 135, color: "000000", opacity: 0.25 });

  // ============================================================
  // SLIDE: NEXT STEPS
  // ============================================================
  let s = pres.addSlide();
  s.background = { color: BG };

  // Title
  s.addText("Next Steps", {
    x: 0.55, y: 0.25, w: 9, h: 0.75,
    fontSize: 44, fontFace: FONT, color: WHITE, bold: true, margin: 0
  });

  // Subtitle
  s.addText("Le azioni concordate per procedere con l'implementazione dell'ecosistema Wave 2.", {
    x: 0.55, y: 0.95, w: 8.5, h: 0.35,
    fontSize: 13, fontFace: FONT, color: GRAY, margin: 0
  });

  // === 4 STEP CARDS (horizontal, matching slide 14 Metodologia style) ===
  const steps = [
    {
      num: "01",
      title: "Validazione\nPriorità",
      desc: "Conferma delle soluzioni prioritarie e definizione del perimetro di intervento per la prima fase di implementazione",
      accent: GREEN_ALT,
      when: "Entro 1 settimana"
    },
    {
      num: "02",
      title: "Quotazione\nTecnica",
      desc: "Quotazione tecnica dettagliata da parte del team di sviluppo, con effort, timeline e dipendenze per ciascuna soluzione",
      accent: GREEN,
      when: "Entro 2 settimane"
    },
    {
      num: "03",
      title: "Contratto e\nPianificazione",
      desc: "Formalizzazione dell'accordo, definizione del piano di rilascio e avvio della fase di setup tecnico e organizzativo",
      accent: PURPLE_L,
      when: "Entro 3 settimane"
    },
    {
      num: "04",
      title: "Kick-off\nProgetto",
      desc: "Sessione di avvio con i referenti dei reparti coinvolti, condivisione del piano operativo e attivazione del primo modulo",
      accent: PURPLE_D,
      when: "Entro 4 settimane"
    },
  ];

  const cardW = 2.05;
  const cardH = 2.65;
  const cardGap = 0.17;
  const cardStartX = 0.55;
  const cardY = 1.55;

  for (let i = 0; i < steps.length; i++) {
    const step = steps[i];
    const cx = cardStartX + i * (cardW + cardGap);

    // Card background
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: cx, y: cardY, w: cardW, h: cardH,
      fill: { color: CARD }, rectRadius: 0.06,
      shadow: makeCardShadow()
    });

    // Top accent bar
    s.addShape(pres.shapes.RECTANGLE, {
      x: cx, y: cardY, w: cardW, h: 0.05,
      fill: { color: step.accent }
    });

    // Step number
    s.addText(step.num, {
      x: cx + 0.15, y: cardY + 0.18, w: 0.55, h: 0.45,
      fontSize: 26, fontFace: FONT, color: step.accent, bold: true,
      valign: "middle", margin: 0
    });

    // Title
    s.addText(step.title, {
      x: cx + 0.15, y: cardY + 0.7, w: cardW - 0.3, h: 0.6,
      fontSize: 14, fontFace: FONT, color: WHITE, bold: true,
      valign: "top", lineSpacingMultiple: 1.1, margin: 0
    });

    // Description
    s.addText(step.desc, {
      x: cx + 0.15, y: cardY + 1.35, w: cardW - 0.3, h: 0.85,
      fontSize: 9, fontFace: FONT, color: MUTED,
      valign: "top", lineSpacingMultiple: 1.3, margin: 0
    });

    // When badge
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: cx + 0.15, y: cardY + cardH - 0.45, w: cardW - 0.3, h: 0.28,
      fill: { color: "1A1A2E" }, rectRadius: 0.04
    });
    s.addText(step.when, {
      x: cx + 0.15, y: cardY + cardH - 0.45, w: cardW - 0.3, h: 0.28,
      fontSize: 8.5, fontFace: FONT, color: step.accent, bold: true,
      align: "center", valign: "middle", margin: 0
    });

    // Arrow connector between cards (except last)
    if (i < steps.length - 1) {
      s.addText("›", {
        x: cx + cardW + 0.01, y: cardY + cardH * 0.35, w: cardGap - 0.02, h: 0.4,
        fontSize: 22, fontFace: FONT, color: MUTED,
        align: "center", valign: "middle", margin: 0
      });
    }
  }

  // === BOTTOM: Key action items row ===
  const botY = 4.42;
  const botH = 0.72;

  // Full-width card
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.55, y: botY, w: 8.9, h: botH,
    fill: { color: CARD }, rectRadius: 0.05,
    shadow: makeCardShadow()
  });

  // Left accent
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.55, y: botY, w: 0.05, h: botH,
    fill: { color: PURPLE_D }
  });

  // 3 action items side by side
  const actions = [
    { icon: "Chi", label: "Referenti Noloop", value: "Laura Garbarino + Responsabile Amministrativo", color: PURPLE_L },
    { icon: "Cosa", label: "Output atteso", value: "Conferma perimetro soluzioni + ordine di priorità", color: GREEN },
    { icon: "Come", label: "Modalità", value: "Verifica con il consulente fiscale per Iperammortamento", color: PURPLE_L },
  ];

  const actW = 2.8;
  for (let i = 0; i < actions.length; i++) {
    const a = actions[i];
    const ax = 0.8 + i * actW;

    // Label tag
    s.addText(a.icon, {
      x: ax, y: botY + 0.1, w: 0.55, h: 0.22,
      fontSize: 8, fontFace: FONT, color: a.color, bold: true, charSpacing: 1,
      valign: "middle", margin: 0
    });

    // Label
    s.addText(a.label, {
      x: ax + 0.55, y: botY + 0.1, w: actW - 0.65, h: 0.22,
      fontSize: 9.5, fontFace: FONT, color: WHITE, bold: true,
      valign: "middle", margin: 0
    });

    // Value
    s.addText(a.value, {
      x: ax, y: botY + 0.35, w: actW - 0.1, h: 0.32,
      fontSize: 9, fontFace: FONT, color: MUTED,
      valign: "top", lineSpacingMultiple: 1.2, margin: 0
    });

    // Vertical separator (except last)
    if (i < actions.length - 1) {
      s.addShape(pres.shapes.LINE, {
        x: ax + actW - 0.1, y: botY + 0.12, w: 0, h: botH - 0.24,
        line: { color: CARD_BORDER, width: 0.5 }
      });
    }
  }

  // Footer
  s.addText([
    { text: "Hey", options: { color: WHITE, bold: true, fontSize: 11 } },
    { text: "AI", options: { color: PURPLE_L, bold: true, fontSize: 11 } }
  ], {
    x: 9.0, y: 5.15, w: 0.7, h: 0.35,
    fontFace: FONT, align: "right", margin: 0
  });

  s.addText("31", {
    x: 9.4, y: 5.15, w: 0.35, h: 0.35,
    fontSize: 11, fontFace: FONT, color: WHITE, align: "right", margin: 0
  });

  await pres.writeFile({ fileName: "/home/claude/Noloop_NextSteps.pptx" });
  console.log("Done!");
}

main().catch(console.error);