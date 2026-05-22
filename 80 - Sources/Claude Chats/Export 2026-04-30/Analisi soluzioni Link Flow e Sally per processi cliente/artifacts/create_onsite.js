const pptxgen = require("pptxgenjs");

async function createSlide() {
  let pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.author = "HeyAI";
  pres.title = "OnSite - AI Event Companion";

  let slide = pres.addSlide();
  slide.background = { color: "0D0D14" };

  // Title
  slide.addText("Onsite - AI Event Companion", {
    x: 0.5, y: 0.25, w: 9, h: 0.75,
    fontSize: 38, fontFace: "Arial Black", color: "FFFFFF", margin: 0
  });

  // Subtitle
  slide.addText(
    "Applicazione nativa (iOS + Android) per i partecipanti agli eventi: assistenza in tempo reale, informazioni personalizzate, raccolta feedback strutturata e riduzione del carico operativo sullo staff on-site.",
    { x: 0.5, y: 1.05, w: 9, h: 0.55, fontSize: 12.5, fontFace: "Calibri", color: "A0A0B8", margin: 0 }
  );

  // ===== FUNZIONALITÀ CHIAVE (left column) =====
  const boxFill = () => ({ color: "1A1A2E" });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.8, w: 3.8, h: 3.1, fill: boxFill(), rectRadius: 0.08
  });

  slide.addText("FUNZIONALITÀ CHIAVE", {
    x: 0.75, y: 1.9, w: 3.3, h: 0.25,
    fontSize: 10, fontFace: "Arial", color: "7B5EA7", bold: true, margin: 0
  });

  slide.addText([
    { text: "Risposte immediate h24 e agenda personalizzata: ogni partecipante vede il proprio programma, con notifiche push per sessioni e cambiamenti", options: { bullet: true, breakLine: true, fontSize: 10, color: "C8C8D8" } },
    { text: "Logistica sempre a portata: mappe della venue, indicazioni, dettagli su transfer e alloggi", options: { bullet: true, breakLine: true, fontSize: 10, color: "C8C8D8" } },
    { text: "Networking facilitato: suggerimenti su persone da incontrare basati su profilo e interessi, chat diretta", options: { bullet: true, breakLine: true, fontSize: 10, color: "C8C8D8" } },
    { text: "Survey e feedback strutturati: form personalizzabili durante e dopo l'evento — NPS, valutazione sessioni, dati aggregati per il report al cliente", options: { bullet: true, fontSize: 10, color: "C8C8D8" } }
  ], {
    x: 0.75, y: 2.2, w: 3.35, h: 2.55,
    fontFace: "Calibri", paraSpaceAfter: 6, margin: 0, valign: "top"
  });

  // ===== IMPATTO DI BUSINESS (center top) =====
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 4.55, y: 1.8, w: 2.5, h: 1.15, fill: boxFill(), rectRadius: 0.08
  });

  slide.addText("IMPATTO DI BUSINESS", {
    x: 4.75, y: 1.9, w: 2.1, h: 0.22,
    fontSize: 10, fontFace: "Arial", color: "FFFFFF", bold: true, margin: 0
  });

  // Slider bar
  slide.addShape(pres.shapes.LINE, {
    x: 4.85, y: 2.35, w: 1.8, h: 0,
    line: { color: "606070", width: 2 }
  });
  slide.addShape(pres.shapes.OVAL, {
    x: 6.15, y: 2.28, w: 0.14, h: 0.14,
    fill: { color: "7B5EA7" }
  });
  slide.addText("Basso", {
    x: 4.75, y: 2.48, w: 0.8, h: 0.2,
    fontSize: 8, fontFace: "Calibri", color: "707080", margin: 0
  });
  slide.addText("Alto", {
    x: 6.35, y: 2.48, w: 0.5, h: 0.2,
    fontSize: 8, fontFace: "Calibri", color: "707080", margin: 0
  });

  // ===== PAIN POINT RISOLTO (center middle) =====
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 4.55, y: 3.1, w: 2.5, h: 1.3, fill: boxFill(), rectRadius: 0.08
  });

  slide.addText("PAIN POINT RISOLTO", {
    x: 4.75, y: 3.2, w: 2.1, h: 0.22,
    fontSize: 10, fontFace: "Arial", color: "FFFFFF", bold: true, margin: 0
  });

  slide.addText(
    "Staff on-site impegnato su richieste informative ripetitive anziché sulla gestione dell'esperienza. Feedback raccolti in modo destrutturato o non raccolti affatto, senza dati aggregabili per il report al cliente.",
    { x: 4.75, y: 3.45, w: 2.1, h: 0.85, fontSize: 9.5, fontFace: "Calibri", color: "9090A8", margin: 0 }
  );

  // ===== INVESTIMENTO (center bottom) =====
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 4.55, y: 4.55, w: 2.5, h: 0.55, fill: boxFill(), rectRadius: 0.08
  });

  slide.addText("INVESTIMENTO", {
    x: 4.75, y: 4.6, w: 1.2, h: 0.2,
    fontSize: 10, fontFace: "Arial", color: "4CAF50", bold: true, margin: 0
  });

  slide.addText("XX.000 €", {
    x: 4.75, y: 4.8, w: 2.1, h: 0.22,
    fontSize: 11, fontFace: "Calibri", color: "C8C8D8", margin: 0
  });

  // ===== KPI CHIAVE & TAKE AWAY (right column) =====
  slide.addText("KPI CHIAVE & TAKE AWAY", {
    x: 7.3, y: 1.85, w: 2.5, h: 0.25,
    fontSize: 10, fontFace: "Arial", color: "FFFFFF", bold: true, margin: 0
  });

  // Takeaway 1
  slide.addText("Revenue aggiuntiva per evento", {
    x: 7.3, y: 2.2, w: 2.4, h: 0.22,
    fontSize: 11, fontFace: "Calibri", color: "4CAF50", bold: true, margin: 0
  });
  slide.addText(
    "OnSite come servizio premium al committente: up-sell per ogni commessa che migliora il margine senza costi variabili.",
    { x: 7.3, y: 2.42, w: 2.4, h: 0.55, fontSize: 9.5, fontFace: "Calibri", color: "9090A8", margin: 0 }
  );

  // Takeaway 2
  slide.addText("Da operativo a esperienziale", {
    x: 7.3, y: 3.05, w: 2.4, h: 0.22,
    fontSize: 11, fontFace: "Calibri", color: "4CAF50", bold: true, margin: 0
  });
  slide.addText(
    "Lo staff si libera dalle richieste ripetitive e si concentra sulla qualità dell'evento. Impatto diretto sulla soddisfazione del committente.",
    { x: 7.3, y: 3.27, w: 2.4, h: 0.55, fontSize: 9.5, fontFace: "Calibri", color: "9090A8", margin: 0 }
  );

  // Takeaway 3
  slide.addText("Dati che chiudono il cerchio", {
    x: 7.3, y: 3.9, w: 2.4, h: 0.22,
    fontSize: 11, fontFace: "Calibri", color: "4CAF50", bold: true, margin: 0
  });
  slide.addText(
    "Feedback strutturati, NPS e engagement diventano il report post-evento che dimostra al committente il valore del lavoro svolto.",
    { x: 7.3, y: 4.12, w: 2.4, h: 0.55, fontSize: 9.5, fontFace: "Calibri", color: "9090A8", margin: 0
  });

  // Takeaway 4
  slide.addText("App nativa = credibilità", {
    x: 7.3, y: 4.75, w: 2.4, h: 0.22,
    fontSize: 11, fontFace: "Calibri", color: "4CAF50", bold: true, margin: 0
  });
  slide.addText(
    "Un'app brandizzata sugli store comunica al partecipante un livello di servizio premium che una PWA non trasmette.",
    { x: 7.3, y: 4.97, w: 2.4, h: 0.4, fontSize: 9.5, fontFace: "Calibri", color: "9090A8", margin: 0
  });

  // Page number
  slide.addText("XX", {
    x: 9.3, y: 5.25, w: 0.4, h: 0.25,
    fontSize: 10, fontFace: "Calibri", color: "505060", align: "right", margin: 0
  });

  await pres.writeFile({ fileName: "/home/claude/OnSite_Wave2.pptx" });
  console.log("Done");
}

createSlide().catch(console.error);