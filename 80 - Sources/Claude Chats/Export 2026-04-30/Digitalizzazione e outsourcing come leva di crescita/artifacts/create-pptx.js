const pptxgen = require("pptxgenjs");
const { html2pptx } = require("./html2pptx");

async function main() {
  const pptx = new pptxgen();
  pptx.layout = "LAYOUT_16x9";
  pptx.title = "Implicazioni Strategiche per NOT";
  
  // Add slide from HTML
  await html2pptx("slide1.html", pptx);
  
  // Save
  await pptx.writeFile("implicazioni_strategiche_NOT.pptx");
  console.log("Presentation created: implicazioni_strategiche_NOT.pptx");
}

main().catch(console.error);