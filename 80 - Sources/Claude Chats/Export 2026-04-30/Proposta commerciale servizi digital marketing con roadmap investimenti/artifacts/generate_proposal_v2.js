const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, 
        Header, Footer, AlignmentType, BorderStyle, WidthType, ShadingType,
        HeadingLevel, PageNumber, PageBreak } = require('docx');
const fs = require('fs');

// Colors
const PRIMARY_BLUE = "1E3A5F";
const ACCENT_BLUE = "2563EB";
const LIGHT_BLUE = "E8F0FE";
const DARK_GRAY = "374151";
const MEDIUM_GRAY = "6B7280";
const LIGHT_GRAY = "F3F4F6";
const PURPLE = "7C3AED";
const LIGHT_PURPLE = "EDE9FE";
const ORANGE = "EA580C";
const LIGHT_ORANGE = "FFF7ED";

// Table border style
const thinBorder = { style: BorderStyle.SINGLE, size: 8, color: "E5E7EB" };
const borders = { top: thinBorder, bottom: thinBorder, left: thinBorder, right: thinBorder };
const noBorder = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
const noBorders = { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder };

const doc = new Document({
  styles: {
    default: { 
      document: { 
        run: { font: "Arial", size: 22, color: DARK_GRAY } 
      } 
    },
    paragraphStyles: [
      { 
        id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 36, bold: true, font: "Arial", color: PRIMARY_BLUE },
        paragraph: { spacing: { before: 400, after: 200 }, outlineLevel: 0 } 
      },
      { 
        id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, font: "Arial", color: PRIMARY_BLUE },
        paragraph: { spacing: { before: 300, after: 150 }, outlineLevel: 1 } 
      },
      { 
        id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, font: "Arial", color: ACCENT_BLUE },
        paragraph: { spacing: { before: 200, after: 100 }, outlineLevel: 2 } 
      },
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 }, // A4
        margin: { top: 1134, right: 1134, bottom: 1134, left: 1134 } // 2cm margins
      }
    },
    headers: {
      default: new Header({
        children: [
          new Paragraph({
            alignment: AlignmentType.RIGHT,
            children: [
              new TextRun({ text: "Proposta Commerciale | HeyAI per Noloop On Trade", size: 18, color: MEDIUM_GRAY, italics: true })
            ]
          })
        ]
      })
    },
    footers: {
      default: new Footer({
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({ text: "Pagina ", size: 18, color: MEDIUM_GRAY }),
              new TextRun({ children: [PageNumber.CURRENT], size: 18, color: MEDIUM_GRAY }),
              new TextRun({ text: " | Documento Confidenziale", size: 18, color: MEDIUM_GRAY })
            ]
          })
        ]
      })
    },
    children: [
      // ============== COVER PAGE ==============
      new Paragraph({ spacing: { after: 600 }, children: [] }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 100 },
        children: [
          new TextRun({ text: "PROPOSTA COMMERCIALE", size: 48, bold: true, color: PRIMARY_BLUE })
        ]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 600 },
        children: [
          new TextRun({ text: "Servizi di Digital Marketing & Lead Generation", size: 32, color: ACCENT_BLUE })
        ]
      }),
      new Paragraph({ spacing: { after: 200 }, children: [] }),
      
      // Client info box
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        columnWidths: [9638],
        rows: [
          new TableRow({
            children: [
              new TableCell({
                borders: noBorders,
                shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
                margins: { top: 300, bottom: 300, left: 400, right: 400 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    spacing: { after: 100 },
                    children: [new TextRun({ text: "Preparata per", size: 22, color: MEDIUM_GRAY })]
                  }),
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    spacing: { after: 50 },
                    children: [new TextRun({ text: "NOLOOP ON TRADE", size: 36, bold: true, color: PRIMARY_BLUE })]
                  }),
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [new TextRun({ text: "Full Service Retail Operator per Pop-Up Store e Attivazioni", size: 20, color: DARK_GRAY })]
                  })
                ]
              })
            ]
          })
        ]
      }),
      
      new Paragraph({ spacing: { after: 600 }, children: [] }),
      
      // HeyAI info
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 50 },
        children: [new TextRun({ text: "Presentata da", size: 20, color: MEDIUM_GRAY })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 100 },
        children: [new TextRun({ text: "HeyAI", size: 32, bold: true, color: ACCENT_BLUE })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 50 },
        children: [new TextRun({ text: "Digital Strategy & Marketing B2B", size: 20, color: DARK_GRAY })]
      }),
      
      new Paragraph({ spacing: { after: 400 }, children: [] }),
      
      // Date and version
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 50 },
        children: [new TextRun({ text: "Data: Gennaio 2026", size: 20, color: MEDIUM_GRAY })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: "Versione: 2.0", size: 20, color: MEDIUM_GRAY })]
      }),
      
      // Page break
      new Paragraph({ children: [new PageBreak()] }),
      
      // ============== EXECUTIVE SUMMARY ==============
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("1. Executive Summary")]
      }),
      
      new Paragraph({
        spacing: { after: 200 },
        children: [
          new TextRun({ 
            text: "La presente proposta definisce un piano di Digital Marketing strutturato per colmare il gap di visibilit\u00E0 digitale di Noloop On Trade (NOT) e supportare il raggiungimento dell'obiettivo dichiarato: ", 
            size: 22 
          }),
          new TextRun({ 
            text: "acquisire almeno 2 nuovi clienti nei prossimi 6 mesi.", 
            size: 22, 
            bold: true 
          })
        ]
      }),
      
      new Paragraph({
        spacing: { after: 200 },
        children: [
          new TextRun({ 
            text: "NOT \u00E8 oggi un full service retail operator con track record comprovato (150+ centri commerciali per British American Tobacco, caso di successo K-ippun Haru con espansione da 1 a 4 location + negozio), ma con una criticit\u00E0 strategica: ", 
            size: 22 
          }),
          new TextRun({ 
            text: "assenza di percezione del brand e visibilit\u00E0 online.", 
            size: 22, 
            bold: true 
          })
        ]
      }),
      
      // Key insight box
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        columnWidths: [9638],
        rows: [
          new TableRow({
            children: [
              new TableCell({
                borders: noBorders,
                shading: { fill: "FEF3C7", type: ShadingType.CLEAR },
                margins: { top: 200, bottom: 200, left: 300, right: 300 },
                children: [
                  new Paragraph({
                    spacing: { after: 50 },
                    children: [new TextRun({ text: "\u26A0\uFE0F Pain Point identificato:", size: 22, bold: true, color: "92400E" })]
                  }),
                  new Paragraph({
                    children: [new TextRun({ text: "\"Facciamo troppo digitale, dobbiamo stare di pi\u00F9 sul territorio e fare pi\u00F9 networking. Assenza di percezione del Brand NOT, non siamo posizionati, non siamo visibili.\" - Germano, NOT", size: 22, italics: true, color: "92400E" })]
                  })
                ]
              })
            ]
          })
        ]
      }),
      
      new Paragraph({ spacing: { after: 200 }, children: [] }),
      
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Struttura della Proposta")]
      }),
      
      new Paragraph({
        spacing: { after: 150 },
        children: [new TextRun({ text: "La proposta si articola in due macro-aree:", size: 22 })]
      }),
      
      // Structure table
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        columnWidths: [4819, 4819],
        rows: [
          new TableRow({
            children: [
              new TableCell({
                borders,
                shading: { fill: "065F46", type: ShadingType.CLEAR },
                margins: { top: 150, bottom: 150, left: 200, right: 200 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [new TextRun({ text: "SERVIZI CORE", size: 22, bold: true, color: "FFFFFF" })]
                  }),
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [new TextRun({ text: "Attivazione Immediata", size: 18, color: "D1FAE5" })]
                  })
                ]
              }),
              new TableCell({
                borders,
                shading: { fill: PURPLE, type: ShadingType.CLEAR },
                margins: { top: 150, bottom: 150, left: 200, right: 200 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [new TextRun({ text: "SERVIZI ADVANCED", size: 22, bold: true, color: "FFFFFF" })]
                  }),
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [new TextRun({ text: "Lead Generation & AI Tools", size: 18, color: "EDE9FE" })]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders,
                margins: { top: 150, bottom: 150, left: 200, right: 200 },
                children: [
                  new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "\u2022 Sito Web Istituzionale", size: 20 })] }),
                  new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "\u2022 Gestione LinkedIn", size: 20 })] }),
                  new Paragraph({ children: [new TextRun({ text: "\u2022 Asset Commerciali (Presentazione + Business Case)", size: 20 })] })
                ]
              }),
              new TableCell({
                borders,
                margins: { top: 150, bottom: 150, left: 200, right: 200 },
                children: [
                  new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "\u2022 AI Pitch Accelerator", size: 20 })] }),
                  new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "\u2022 Content Marketing & Lead Magnet", size: 20 })] }),
                  new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "\u2022 LinkedIn Advertising", size: 20 })] }),
                  new Paragraph({ children: [new TextRun({ text: "\u2022 NOT Opportunity Finder", size: 20 })] })
                ]
              })
            ]
          })
        ]
      }),
      
      new Paragraph({ children: [new PageBreak()] }),
      
      // ============== SERVIZI CORE ==============
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("2. Servizi Core")]
      }),
      
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun({ text: "I servizi core rappresentano la base fondamentale per costruire la presenza digitale di NOT e dotare il team commerciale degli strumenti necessari per la conversione.", size: 22 })]
      }),
      
      // SITO WEB
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("2.1 Realizzazione Sito Web Istituzionale")]
      }),
      
      new Paragraph({
        spacing: { after: 200 },
        children: [
          new TextRun({ text: "Obiettivo: ", size: 22, bold: true }),
          new TextRun({ text: "Creare una presenza web professionale che comunichi immediatamente il posizionamento di NOT come leader italiano nel retail activation e pop-up store management.", size: 22 })
        ]
      }),
      
      // Options table for website
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        columnWidths: [4819, 4819],
        rows: [
          new TableRow({
            children: [
              new TableCell({
                borders,
                shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
                margins: { top: 150, bottom: 150, left: 200, right: 200 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [new TextRun({ text: "OPZIONE BASE", size: 24, bold: true, color: PRIMARY_BLUE })]
                  })
                ]
              }),
              new TableCell({
                borders,
                shading: { fill: PRIMARY_BLUE, type: ShadingType.CLEAR },
                margins: { top: 150, bottom: 150, left: 200, right: 200 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [new TextRun({ text: "OPZIONE ADVANCED", size: 24, bold: true, color: "FFFFFF" })]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders,
                margins: { top: 150, bottom: 150, left: 200, right: 200 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [new TextRun({ text: "\u20AC 2.000,00", size: 32, bold: true, color: ACCENT_BLUE })]
                  }),
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [new TextRun({ text: "(oltre IVA)", size: 18, color: MEDIUM_GRAY })]
                  })
                ]
              }),
              new TableCell({
                borders,
                margins: { top: 150, bottom: 150, left: 200, right: 200 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [new TextRun({ text: "\u20AC 10.000,00", size: 32, bold: true, color: ACCENT_BLUE })]
                  }),
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [new TextRun({ text: "(oltre IVA)", size: 18, color: MEDIUM_GRAY })]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders,
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                margins: { top: 100, bottom: 100, left: 200, right: 200 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "Tempistiche: ", size: 20, bold: true }),
                      new TextRun({ text: "1 settimana lavorativa", size: 20 })
                    ]
                  })
                ]
              }),
              new TableCell({
                borders,
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                margins: { top: 100, bottom: 100, left: 200, right: 200 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "Tempistiche: ", size: 20, bold: true }),
                      new TextRun({ text: "2-3 settimane lavorative", size: 20 })
                    ]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders,
                margins: { top: 150, bottom: 150, left: 200, right: 200 },
                children: [
                  new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Cosa include:", size: 20, bold: true })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "\u2022 Sito vetrina professionale", size: 20 })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "\u2022 Design pulito e moderno", size: 20 })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "\u2022 Sezioni: Chi siamo, Servizi, Contatti", size: 20 })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "\u2022 Responsive mobile-first", size: 20 })] }),
                  new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "\u2022 Ottimizzazione SEO base", size: 20 })] }),
                  new Paragraph({ children: [new TextRun({ text: "Reference: Sito HeyAI", size: 18, italics: true, color: MEDIUM_GRAY })] })
                ]
              }),
              new TableCell({
                borders,
                margins: { top: 150, bottom: 150, left: 200, right: 200 },
                children: [
                  new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Cosa include:", size: 20, bold: true })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "\u2022 Design premium \"wow effect\"", size: 20 })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "\u2022 Animazioni e micro-interazioni", size: 20 })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "\u2022 Case study interattivi", size: 20 })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "\u2022 Sezione ROI calculator", size: 20 })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "\u2022 Blog/News section", size: 20 })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "\u2022 Form lead generation avanzato", size: 20 })] }),
                  new Paragraph({ children: [new TextRun({ text: "\u2022 SEO avanzata + Analytics", size: 20 })] })
                ]
              })
            ]
          })
        ]
      }),
      
      new Paragraph({ spacing: { after: 300 }, children: [] }),
      
      // LINKEDIN
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("2.2 Gestione LinkedIn")]
      }),
      
      new Paragraph({
        spacing: { after: 200 },
        children: [
          new TextRun({ text: "Obiettivo: ", size: 22, bold: true }),
          new TextRun({ text: "Costruire thought leadership nel settore retail activation e raggiungere decision maker di brand consumer, beauty, tech e food che cercano soluzioni di accesso al canale fisico.", size: 22 })
        ]
      }),
      
      new Paragraph({
        spacing: { after: 200 },
        children: [
          new TextRun({ text: "LinkedIn \u00E8 l'unico canale social strategico per NOT: ", size: 22, bold: true }),
          new TextRun({ text: "\u00E8 dove si trovano i decision maker B2B (Marketing Director, Retail Manager, Country Manager) dei brand target.", size: 22 })
        ]
      }),
      
      // LinkedIn pricing table
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        columnWidths: [9638],
        rows: [
          new TableRow({
            children: [
              new TableCell({
                borders,
                shading: { fill: PRIMARY_BLUE, type: ShadingType.CLEAR },
                margins: { top: 150, bottom: 150, left: 200, right: 200 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [new TextRun({ text: "GESTIONE LINKEDIN - SERVIZIO RECURRING", size: 24, bold: true, color: "FFFFFF" })]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders,
                margins: { top: 200, bottom: 200, left: 300, right: 300 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    spacing: { after: 100 },
                    children: [new TextRun({ text: "\u20AC 600,00 / mese", size: 32, bold: true, color: ACCENT_BLUE })]
                  }),
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [new TextRun({ text: "(oltre IVA)", size: 18, color: MEDIUM_GRAY })]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders,
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                margins: { top: 150, bottom: 150, left: 300, right: 300 },
                children: [
                  new Paragraph({ spacing: { after: 150 }, children: [new TextRun({ text: "Piano Editoriale:", size: 22, bold: true })] }),
                  new Paragraph({
                    spacing: { after: 100 },
                    children: [
                      new TextRun({ text: "\u2022 Primo mese (lancio): ", size: 20, bold: true }),
                      new TextRun({ text: "16 post per popolare la pagina e creare base contenuti", size: 20 })
                    ]
                  }),
                  new Paragraph({
                    spacing: { after: 150 },
                    children: [
                      new TextRun({ text: "\u2022 Dal secondo mese: ", size: 20, bold: true }),
                      new TextRun({ text: "12 post/mese (3 post/settimana)", size: 20 })
                    ]
                  }),
                  new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Tipologie di contenuti:", size: 22, bold: true })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "\u2022 Success stories e case study (es. K-ippun Haru)", size: 20 })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "\u2022 Insight sul retail fisico vs. digitale", size: 20 })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "\u2022 Behind the scenes delle attivazioni", size: 20 })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "\u2022 Dati e trend del settore centri commerciali", size: 20 })] }),
                  new Paragraph({ children: [new TextRun({ text: "\u2022 Thought leadership del team NOT", size: 20 })] })
                ]
              })
            ]
          })
        ]
      }),
      
      new Paragraph({ children: [new PageBreak()] }),
      
      // ASSET COMMERCIALI
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("2.3 Creazione Asset Commerciali")]
      }),
      
      new Paragraph({
        spacing: { after: 200 },
        children: [
          new TextRun({ text: "Obiettivo: ", size: 22, bold: true }),
          new TextRun({ text: "Fornire al team commerciale (Massimiliano, Germano, Andrea) materiali professionali per aumentare il tasso di conversione nelle fasi di primo contatto e follow-up.", size: 22 })
        ]
      }),
      
      // Asset table
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        columnWidths: [4819, 4819],
        rows: [
          new TableRow({
            children: [
              new TableCell({
                borders,
                shading: { fill: PRIMARY_BLUE, type: ShadingType.CLEAR },
                margins: { top: 150, bottom: 150, left: 200, right: 200 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [new TextRun({ text: "PRESENTAZIONE NOT", size: 22, bold: true, color: "FFFFFF" })]
                  })
                ]
              }),
              new TableCell({
                borders,
                shading: { fill: PRIMARY_BLUE, type: ShadingType.CLEAR },
                margins: { top: 150, bottom: 150, left: 200, right: 200 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [new TextRun({ text: "BUSINESS CASE K-IPPUN HARU", size: 22, bold: true, color: "FFFFFF" })]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders,
                margins: { top: 150, bottom: 150, left: 200, right: 200 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [new TextRun({ text: "\u20AC 700,00", size: 28, bold: true, color: ACCENT_BLUE })]
                  }),
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [new TextRun({ text: "(oltre IVA)", size: 18, color: MEDIUM_GRAY })]
                  })
                ]
              }),
              new TableCell({
                borders,
                margins: { top: 150, bottom: 150, left: 200, right: 200 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [new TextRun({ text: "\u20AC 700,00", size: 28, bold: true, color: ACCENT_BLUE })]
                  }),
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [new TextRun({ text: "(oltre IVA)", size: 18, color: MEDIUM_GRAY })]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders,
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                margins: { top: 150, bottom: 150, left: 200, right: 200 },
                children: [
                  new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Effort: ~10 ore di lavoro", size: 18, color: MEDIUM_GRAY })] }),
                  new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Deliverable:", size: 20, bold: true })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "\u2022 Deck corporate professionale", size: 20 })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "\u2022 Value proposition chiara", size: 20 })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "\u2022 Servizi e modello di pricing", size: 20 })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "\u2022 Referenze e success stories", size: 20 })] }),
                  new Paragraph({ children: [new TextRun({ text: "\u2022 Call to action efficaci", size: 20 })] })
                ]
              }),
              new TableCell({
                borders,
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                margins: { top: 150, bottom: 150, left: 200, right: 200 },
                children: [
                  new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Effort: ~10 ore di lavoro", size: 18, color: MEDIUM_GRAY })] }),
                  new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Deliverable:", size: 20, bold: true })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "\u2022 Caso di successo documentato", size: 20 })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "\u2022 Challenge \u2192 Solution \u2192 Results", size: 20 })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "\u2022 KPI e metriche di ROI", size: 20 })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "\u2022 Espansione 1\u21924 location", size: 20 })] }),
                  new Paragraph({ children: [new TextRun({ text: "\u2022 Formato riutilizzabile", size: 20 })] })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders,
                margins: { top: 100, bottom: 100, left: 200, right: 200 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [
                      new TextRun({ text: "Consegna: ", size: 20, bold: true }),
                      new TextRun({ text: "2 settimane", size: 20 })
                    ]
                  })
                ]
              }),
              new TableCell({
                borders,
                margins: { top: 100, bottom: 100, left: 200, right: 200 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [
                      new TextRun({ text: "Consegna: ", size: 20, bold: true }),
                      new TextRun({ text: "2 settimane", size: 20 })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      }),
      
      new Paragraph({ children: [new PageBreak()] }),
      
      // ============== AI PITCH ACCELERATOR ==============
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("2.4 AI Pitch Accelerator")]
      }),
      
      // Label box
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        columnWidths: [9638],
        rows: [
          new TableRow({
            children: [
              new TableCell({
                borders: noBorders,
                shading: { fill: LIGHT_PURPLE, type: ShadingType.CLEAR },
                margins: { top: 100, bottom: 100, left: 200, right: 200 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [
                      new TextRun({ text: "\uD83E\uDD16 SVILUPPO TECNOLOGICO | ", size: 20, bold: true, color: PURPLE }),
                      new TextRun({ text: "Quotazione su richiesta in caso di accettazione servizi core", size: 20, color: PURPLE })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      }),
      
      new Paragraph({ spacing: { after: 200 }, children: [] }),
      
      new Paragraph({
        spacing: { after: 200 },
        children: [
          new TextRun({ text: "Obiettivo: ", size: 22, bold: true }),
          new TextRun({ text: "Sviluppare uno strumento AI personalizzato (GPT custom) che accelera la preparazione delle presentazioni strategiche per nuovi clienti, automatizzando le attivit\u00E0 di ricerca e analisi che oggi richiedono tempo significativo al team commerciale.", size: 22 })
        ]
      }),
      
      // AI Pitch Accelerator features
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        columnWidths: [9638],
        rows: [
          new TableRow({
            children: [
              new TableCell({
                borders,
                shading: { fill: PURPLE, type: ShadingType.CLEAR },
                margins: { top: 150, bottom: 150, left: 200, right: 200 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [new TextRun({ text: "FUNZIONALIT\u00C0 PRINCIPALI", size: 24, bold: true, color: "FFFFFF" })]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders,
                margins: { top: 200, bottom: 200, left: 300, right: 300 },
                children: [
                  // Feature 1
                  new Paragraph({
                    spacing: { after: 100 },
                    children: [new TextRun({ text: "1. Ricerca Preliminare Automatizzata", size: 22, bold: true, color: PURPLE })]
                  }),
                  new Paragraph({
                    spacing: { after: 50 },
                    children: [new TextRun({ text: "Analisi automatica di brief, posizionamento del prospect, trend di mercato rilevanti, competitor diretti e indiretti, storico delle comunicazioni e iniziative marketing gi\u00E0 implementate dal potenziale cliente.", size: 20 })]
                  }),
                  new Paragraph({ spacing: { after: 150 }, children: [] }),
                  
                  // Feature 2
                  new Paragraph({
                    spacing: { after: 100 },
                    children: [new TextRun({ text: "2. Generazione Contenuti Multimediali per Gare", size: 22, bold: true, color: PURPLE })]
                  }),
                  new Paragraph({
                    spacing: { after: 50 },
                    children: [new TextRun({ text: "Creazione accelerata di materiali visivi: mockup di stand, post-produzione di render, video teaser per presentazioni. Riduzione drastica dei tempi di produzione per proposal complesse.", size: 20 })]
                  }),
                  new Paragraph({ spacing: { after: 150 }, children: [] }),
                  
                  // Feature 3
                  new Paragraph({
                    spacing: { after: 100 },
                    children: [new TextRun({ text: "3. Assistente alla Creazione di Copy", size: 22, bold: true, color: PURPLE })]
                  }),
                  new Paragraph({
                    children: [new TextRun({ text: "Supporto nella generazione di bozze di testi (naming, payoff, key messages) a partire dal concept definito dal team. Lo strumento apprende lo stile e il tone of voice di NOT per garantire coerenza.", size: 20 })]
                  })
                ]
              })
            ]
          })
        ]
      }),
      
      new Paragraph({ spacing: { after: 200 }, children: [] }),
      
      // Benefits box
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        columnWidths: [4819, 4819],
        rows: [
          new TableRow({
            children: [
              new TableCell({
                borders,
                shading: { fill: "F0FDF4", type: ShadingType.CLEAR },
                margins: { top: 150, bottom: 150, left: 200, right: 200 },
                children: [
                  new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Benefici attesi:", size: 20, bold: true, color: "065F46" })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "\u2022 Riduzione 60-70% tempo prep. pitch", size: 18 })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "\u2022 Qualit\u00E0 ricerca pi\u00F9 approfondita", size: 18 })] }),
                  new Paragraph({ children: [new TextRun({ text: "\u2022 Standardizzazione output", size: 18 })] })
                ]
              }),
              new TableCell({
                borders,
                shading: { fill: LIGHT_PURPLE, type: ShadingType.CLEAR },
                margins: { top: 150, bottom: 150, left: 200, right: 200 },
                children: [
                  new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Pricing:", size: 20, bold: true, color: PURPLE })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "Setup iniziale: ____________", size: 18 })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "Manutenzione mensile: ____________", size: 18 })] }),
                  new Paragraph({ children: [new TextRun({ text: "Da quotare su specifica richiesta", size: 18, italics: true, color: MEDIUM_GRAY })] })
                ]
              })
            ]
          })
        ]
      }),
      
      new Paragraph({ children: [new PageBreak()] }),
      
      // ============== SERVIZI ADVANCED - LEAD GENERATION ==============
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("3. Servizi Advanced - Lead Generation")]
      }),
      
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun({ text: "I servizi advanced sono pensati per amplificare l'impatto della presenza digitale e automatizzare il processo di lead generation, riducendo il carico operativo sul team commerciale.", size: 22 })]
      }),
      
      // ============== SERVIZIO 1: CONTENT MARKETING ==============
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("3.1 Content Marketing & Lead Magnet")]
      }),
      
      new Paragraph({
        spacing: { after: 200 },
        children: [
          new TextRun({ text: "Obiettivo: ", size: 22, bold: true }),
          new TextRun({ text: "Creare contenuti di valore per brand digital-native e aziende in settori regolamentati, posizionando NOT come partner strategico per chi vuole espandere la propria presenza dal digitale al fisico.", size: 22 })
        ]
      }),
      
      // Two models table
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        columnWidths: [4819, 4819],
        rows: [
          new TableRow({
            children: [
              new TableCell({
                borders,
                shading: { fill: ACCENT_BLUE, type: ShadingType.CLEAR },
                margins: { top: 150, bottom: 150, left: 200, right: 200 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [new TextRun({ text: "MODELLO 1", size: 20, bold: true, color: "FFFFFF" })]
                  }),
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [new TextRun({ text: "Brand DTC / Digital-Native", size: 18, color: "DBEAFE" })]
                  })
                ]
              }),
              new TableCell({
                borders,
                shading: { fill: ORANGE, type: ShadingType.CLEAR },
                margins: { top: 150, bottom: 150, left: 200, right: 200 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [new TextRun({ text: "MODELLO 2", size: 20, bold: true, color: "FFFFFF" })]
                  }),
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [new TextRun({ text: "Settori Regolamentati", size: 18, color: "FED7AA" })]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders,
                margins: { top: 150, bottom: 150, left: 200, right: 200 },
                children: [
                  new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Contenuti suggeriti:", size: 20, bold: true })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "\u2022 \"Dal DTC al retail fisico: quando e come fare il salto\"", size: 18 })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "\u2022 \"Customer Acquisition offline: strategie per brand nativi digitali\"", size: 18 })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "\u2022 \"Il ROI dell'esperienza fisica: perch\u00E9 il touch & feel converte\"", size: 18 })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "\u2022 \"Come testare il mercato italiano senza negozi permanenti\"", size: 18 })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "\u2022 \"Case study: brand DTC con crescita accelerata via retail temporaneo\"", size: 18 })] }),
                  new Paragraph({ children: [new TextRun({ text: "\u2022 \"Omnichannel per brand emergenti\"", size: 18 })] })
                ]
              }),
              new TableCell({
                borders,
                margins: { top: 150, bottom: 150, left: 200, right: 200 },
                children: [
                  new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Contenuti suggeriti:", size: 20, bold: true })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "\u2022 \"Brand building senza ADV: strategie per settori con restrizioni\"", size: 18 })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "\u2022 \"Education marketing: costruire fiducia senza vendita diretta\"", size: 18 })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "\u2022 \"Experiential marketing per tabacco, gaming e crypto in Italia\"", size: 18 })] }),
                  new Paragraph({ children: [new TextRun({ text: "\u2022 \"Lead generation fisica: raccogliere contatti qualificati in-store\"", size: 18 })] })
                ]
              })
            ]
          })
        ]
      }),
      
      new Paragraph({ spacing: { after: 200 }, children: [] }),
      
      // Pricing table for Content Marketing
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        columnWidths: [4819, 4819],
        rows: [
          new TableRow({
            children: [
              new TableCell({
                borders,
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                margins: { top: 150, bottom: 150, left: 200, right: 200 },
                children: [
                  new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Output da quotare:", size: 20, bold: true })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "\u2022 Creazione singolo Lead Magnet (ricerca + copy + design)", size: 18 })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "\u2022 Setup landing page e form", size: 18 })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "\u2022 Setup sequenza email automation (3-5 email)", size: 18 })] }),
                  new Paragraph({ children: [new TextRun({ text: "\u2022 Gestione mensile/trimestrale continuativa", size: 18 })] })
                ]
              }),
              new TableCell({
                borders,
                shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
                margins: { top: 150, bottom: 150, left: 200, right: 200 },
                children: [
                  new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Pricing:", size: 20, bold: true, color: PRIMARY_BLUE })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "Lead Magnet singolo: ____________", size: 18 })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "Landing page + form: ____________", size: 18 })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "Email automation setup: ____________", size: 18 })] }),
                  new Paragraph({ children: [new TextRun({ text: "Fee gestione mensile: ____________", size: 18 })] })
                ]
              })
            ]
          })
        ]
      }),
      
      new Paragraph({ children: [new PageBreak()] }),
      
      // ============== SERVIZIO 2: LINKEDIN ADVERTISING ==============
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("3.2 LinkedIn Advertising")]
      }),
      
      new Paragraph({
        spacing: { after: 200 },
        children: [
          new TextRun({ text: "Obiettivo: ", size: 22, bold: true }),
          new TextRun({ text: "Campagne ADV su LinkedIn per generare lead qualificati (brand manager, marketing director, retail manager di aziende target), capitalizzando sulla pagina LinkedIn aziendale gi\u00E0 curata.", size: 22 })
        ]
      }),
      
      // Context box
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        columnWidths: [9638],
        rows: [
          new TableRow({
            children: [
              new TableCell({
                borders: noBorders,
                shading: { fill: "FEF3C7", type: ShadingType.CLEAR },
                margins: { top: 150, bottom: 150, left: 200, right: 200 },
                children: [
                  new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Contesto:", size: 20, bold: true, color: "92400E" })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "\u2022 NOT avr\u00E0 una pagina LinkedIn attiva con contenuti regolari (thought leadership, case study, trend)", size: 18, color: "92400E" })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "\u2022 L'ADV amplifica la reach e converte il traffico in lead", size: 18, color: "92400E" })] }),
                  new Paragraph({ children: [new TextRun({ text: "\u2022 Target gi\u00E0 profilato: brand digital-native, settori Beauty, Fashion, Food, Pet, Fitness, Tobacco/regulated industries", size: 18, color: "92400E" })] })
                ]
              })
            ]
          })
        ]
      }),
      
      new Paragraph({ spacing: { after: 200 }, children: [] }),
      
      // LinkedIn Ads details
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        columnWidths: [4819, 4819],
        rows: [
          new TableRow({
            children: [
              new TableCell({
                borders,
                shading: { fill: PRIMARY_BLUE, type: ShadingType.CLEAR },
                margins: { top: 150, bottom: 150, left: 200, right: 200 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [new TextRun({ text: "COSA INCLUDE", size: 22, bold: true, color: "FFFFFF" })]
                  })
                ]
              }),
              new TableCell({
                borders,
                shading: { fill: ACCENT_BLUE, type: ShadingType.CLEAR },
                margins: { top: 150, bottom: 150, left: 200, right: 200 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [new TextRun({ text: "PRICING", size: 22, bold: true, color: "FFFFFF" })]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders,
                margins: { top: 150, bottom: 150, left: 200, right: 200 },
                children: [
                  new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "\u2022 Setup campagne LinkedIn Ads", size: 18 })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "  (Sponsored Content, Lead Gen Forms, Message Ads)", size: 16, color: MEDIUM_GRAY })] }),
                  new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "\u2022 Creazione creativit\u00E0 e copy per annunci", size: 18 })] }),
                  new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "\u2022 Definizione audience e targeting", size: 18 })] }),
                  new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "\u2022 Gestione e ottimizzazione mensile", size: 18 })] }),
                  new Paragraph({ children: [new TextRun({ text: "\u2022 Reporting performance", size: 18 })] })
                ]
              }),
              new TableCell({
                borders,
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                margins: { top: 150, bottom: 150, left: 200, right: 200 },
                children: [
                  new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "Fee setup iniziale:", size: 18, bold: true })] }),
                  new Paragraph({ spacing: { after: 120 }, children: [new TextRun({ text: "____________", size: 18 })] }),
                  new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "Fee gestione mensile:", size: 18, bold: true })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "____________ (escluso budget media)", size: 18 })] }),
                  new Paragraph({ spacing: { after: 120 }, children: [] }),
                  new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "Budget media consigliato:", size: 18, bold: true })] }),
                  new Paragraph({ children: [new TextRun({ text: "Min: ________ | Ottimale: ________", size: 18 })] })
                ]
              })
            ]
          })
        ]
      }),
      
      new Paragraph({ spacing: { after: 200 }, children: [] }),
      
      // KPI box
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        columnWidths: [9638],
        rows: [
          new TableRow({
            children: [
              new TableCell({
                borders,
                shading: { fill: "F0FDF4", type: ShadingType.CLEAR },
                margins: { top: 150, bottom: 150, left: 200, right: 200 },
                children: [
                  new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "KPI Attesi (da definire):", size: 20, bold: true, color: "065F46" })] }),
                  new Paragraph({
                    children: [
                      new TextRun({ text: "CPL stimato: ________ | Lead/mese stimati: ________", size: 18 })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      }),
      
      new Paragraph({ children: [new PageBreak()] }),
      
      // ============== SERVIZIO 3: NOT OPPORTUNITY FINDER ==============
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("3.3 NOT Opportunity Finder")]
      }),
      
      new Paragraph({
        spacing: { after: 200 },
        children: [
          new TextRun({ text: "Obiettivo: ", size: 22, bold: true }),
          new TextRun({ text: "Sviluppare uno strumento automatizzato di scouting lead che, partendo da keyword e settori target gi\u00E0 definiti per NOT, effettua ricerche automatiche e restituisce al reparto commerciale una lista di aziende/contatti da approcciare.", size: 22 })
        ]
      }),
      
      // Features table
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        columnWidths: [9638],
        rows: [
          new TableRow({
            children: [
              new TableCell({
                borders,
                shading: { fill: "7C3AED", type: ShadingType.CLEAR },
                margins: { top: 150, bottom: 150, left: 200, right: 200 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [new TextRun({ text: "FUNZIONALIT\u00C0 PRINCIPALI", size: 24, bold: true, color: "FFFFFF" })]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders,
                margins: { top: 200, bottom: 200, left: 300, right: 300 },
                children: [
                  new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "\u2022 Scraping automatizzato di fonti rilevanti (news, press release, funding round, annunci hiring, espansioni retail)", size: 20 })] }),
                  new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "\u2022 Notifiche periodiche con nuove opportunit\u00E0", size: 20 })] }),
                  new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "\u2022 Per ogni lead: nome azienda, referente/decision maker, snapshot situazione, messaggio di outreach suggerito", size: 20 })] }),
                  new Paragraph({ children: [new TextRun({ text: "\u2022 Dashboard centralizzata per consultazione e gestione lead", size: 20 })] })
                ]
              })
            ]
          })
        ]
      }),
      
      new Paragraph({ spacing: { after: 200 }, children: [] }),
      
      // Input and benefits
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        columnWidths: [4819, 4819],
        rows: [
          new TableRow({
            children: [
              new TableCell({
                borders,
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                margins: { top: 150, bottom: 150, left: 200, right: 200 },
                children: [
                  new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Input gi\u00E0 disponibili:", size: 20, bold: true })] }),
                  new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "\u2022 Lista industry target: Beauty, K-Beauty, Moda Sostenibile, Fitness, Pet, Food, Home, Tech, Tobacco, Gaming, Crypto", size: 18 })] }),
                  new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "\u2022 Lista brand target prioritari (gi\u00E0 mappati)", size: 18 })] }),
                  new Paragraph({ children: [new TextRun({ text: "\u2022 Keyword di segnale: lancio prodotto, espansione Italia, funding round, hiring retail/marketing, ricerca partner retail", size: 18 })] })
                ]
              }),
              new TableCell({
                borders,
                shading: { fill: "F0FDF4", type: ShadingType.CLEAR },
                margins: { top: 150, bottom: 150, left: 200, right: 200 },
                children: [
                  new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Benefici attesi:", size: 20, bold: true, color: "065F46" })] }),
                  new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "\u2022 Riduzione attivit\u00E0 manuali di scouting", size: 18 })] }),
                  new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "\u2022 Rapidit\u00E0 nella raccolta informazioni", size: 18 })] }),
                  new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "\u2022 Aggiornamento costante e centralizzato", size: 18 })] }),
                  new Paragraph({ children: [new TextRun({ text: "\u2022 Aumento opportunit\u00E0 identificate", size: 18 })] })
                ]
              })
            ]
          })
        ]
      }),
      
      new Paragraph({ spacing: { after: 200 }, children: [] }),
      
      // Pricing table
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        columnWidths: [9638],
        rows: [
          new TableRow({
            children: [
              new TableCell({
                borders,
                shading: { fill: LIGHT_PURPLE, type: ShadingType.CLEAR },
                margins: { top: 150, bottom: 150, left: 200, right: 200 },
                children: [
                  new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Output da quotare:", size: 20, bold: true, color: PURPLE })] }),
                  new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "Effort sviluppo MVP: ____________", size: 18 })] }),
                  new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "Fonti da integrare: ____________", size: 18 })] }),
                  new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "Frequenza aggiornamento (giornaliero/settimanale): ____________", size: 18 })] }),
                  new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "Costo gestione/manutenzione mensile: ____________", size: 18 })] }),
                  new Paragraph({ children: [new TextRun({ text: "Timeline stimata per delivery: ____________", size: 18 })] })
                ]
              })
            ]
          })
        ]
      }),
      
      new Paragraph({ children: [new PageBreak()] }),
      
      // ============== ROADMAP E PIANO DI INVESTIMENTO ==============
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("4. Roadmap e Piano di Investimento")]
      }),
      
      new Paragraph({
        spacing: { after: 200 },
        children: [
          new TextRun({ text: "Di seguito la roadmap dettagliata con timing e investimenti per i ", size: 22 }),
          new TextRun({ text: "Servizi Core", size: 22, bold: true }),
          new TextRun({ text: ", suddivisa tra attivit\u00E0 ", size: 22 }),
          new TextRun({ text: "One-Shot", size: 22, bold: true }),
          new TextRun({ text: " e ", size: 22 }),
          new TextRun({ text: "Recurring", size: 22, bold: true }),
          new TextRun({ text: ".", size: 22 })
        ]
      }),
      
      new Paragraph({
        spacing: { after: 100 },
        children: [new TextRun({ text: "Data inizio attivit\u00E0: 01 Febbraio 2026", size: 22, bold: true, color: ACCENT_BLUE })]
      }),
      
      new Paragraph({ spacing: { after: 200 }, children: [] }),
      
      // ROADMAP TABLE - Finance style
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("4.1 Servizi Core - Dettaglio Investimenti")]
      }),
      
      // ONE-SHOT Section
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        columnWidths: [1800, 2100, 3338, 2400],
        rows: [
          new TableRow({
            children: [
              new TableCell({
                borders,
                columnSpan: 4,
                shading: { fill: "065F46", type: ShadingType.CLEAR },
                margins: { top: 120, bottom: 120, left: 200, right: 200 },
                children: [
                  new Paragraph({
                    children: [new TextRun({ text: "ONE-SHOT | Investimenti Una Tantum", size: 22, bold: true, color: "FFFFFF" })]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders,
                shading: { fill: "D1FAE5", type: ShadingType.CLEAR },
                margins: { top: 100, bottom: 100, left: 150, right: 150 },
                children: [new Paragraph({ children: [new TextRun({ text: "INIZIATIVA", size: 18, bold: true, color: "065F46" })] })]
              }),
              new TableCell({
                borders,
                shading: { fill: "D1FAE5", type: ShadingType.CLEAR },
                margins: { top: 100, bottom: 100, left: 150, right: 150 },
                children: [new Paragraph({ children: [new TextRun({ text: "TIMING", size: 18, bold: true, color: "065F46" })] })]
              }),
              new TableCell({
                borders,
                shading: { fill: "D1FAE5", type: ShadingType.CLEAR },
                margins: { top: 100, bottom: 100, left: 150, right: 150 },
                children: [new Paragraph({ children: [new TextRun({ text: "COSA \u00C8 COMPRESO", size: 18, bold: true, color: "065F46" })] })]
              }),
              new TableCell({
                borders,
                shading: { fill: "D1FAE5", type: ShadingType.CLEAR },
                margins: { top: 100, bottom: 100, left: 150, right: 150 },
                children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "INVESTIMENTO", size: 18, bold: true, color: "065F46" })] })]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders,
                margins: { top: 100, bottom: 100, left: 150, right: 150 },
                children: [new Paragraph({ children: [new TextRun({ text: "Sito Web BASE", size: 20, bold: true })] })]
              }),
              new TableCell({
                borders,
                margins: { top: 100, bottom: 100, left: 150, right: 150 },
                children: [new Paragraph({ children: [new TextRun({ text: "Feb 2026\nSettimana 1", size: 18 })] })]
              }),
              new TableCell({
                borders,
                margins: { top: 100, bottom: 100, left: 150, right: 150 },
                children: [new Paragraph({ children: [new TextRun({ text: "Sito vetrina responsive, SEO base, sezioni standard", size: 18 })] })]
              }),
              new TableCell({
                borders,
                margins: { top: 100, bottom: 100, left: 150, right: 150 },
                children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "\u20AC 2.000,00", size: 20, bold: true })] })]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders,
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                margins: { top: 100, bottom: 100, left: 150, right: 150 },
                children: [new Paragraph({ children: [new TextRun({ text: "Sito Web ADVANCED", size: 20, bold: true })] })]
              }),
              new TableCell({
                borders,
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                margins: { top: 100, bottom: 100, left: 150, right: 150 },
                children: [new Paragraph({ children: [new TextRun({ text: "Feb 2026\nSettimane 1-3", size: 18 })] })]
              }),
              new TableCell({
                borders,
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                margins: { top: 100, bottom: 100, left: 150, right: 150 },
                children: [new Paragraph({ children: [new TextRun({ text: "Design premium, animazioni, ROI calculator, blog, form avanzati", size: 18 })] })]
              }),
              new TableCell({
                borders,
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                margins: { top: 100, bottom: 100, left: 150, right: 150 },
                children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "\u20AC 10.000,00", size: 20, bold: true })] })]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders,
                margins: { top: 100, bottom: 100, left: 150, right: 150 },
                children: [new Paragraph({ children: [new TextRun({ text: "Presentazione NOT", size: 20, bold: true })] })]
              }),
              new TableCell({
                borders,
                margins: { top: 100, bottom: 100, left: 150, right: 150 },
                children: [new Paragraph({ children: [new TextRun({ text: "Feb 2026\nSettimane 1-2", size: 18 })] })]
              }),
              new TableCell({
                borders,
                margins: { top: 100, bottom: 100, left: 150, right: 150 },
                children: [new Paragraph({ children: [new TextRun({ text: "Deck corporate, value proposition, servizi, referenze (~10h)", size: 18 })] })]
              }),
              new TableCell({
                borders,
                margins: { top: 100, bottom: 100, left: 150, right: 150 },
                children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "\u20AC 700,00", size: 20, bold: true })] })]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders,
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                margins: { top: 100, bottom: 100, left: 150, right: 150 },
                children: [new Paragraph({ children: [new TextRun({ text: "Business Case K-ippun Haru", size: 20, bold: true })] })]
              }),
              new TableCell({
                borders,
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                margins: { top: 100, bottom: 100, left: 150, right: 150 },
                children: [new Paragraph({ children: [new TextRun({ text: "Feb 2026\nSettimane 1-2", size: 18 })] })]
              }),
              new TableCell({
                borders,
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                margins: { top: 100, bottom: 100, left: 150, right: 150 },
                children: [new Paragraph({ children: [new TextRun({ text: "Caso successo documentato, KPI, ROI, formato riutilizzabile (~10h)", size: 18 })] })]
              }),
              new TableCell({
                borders,
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                margins: { top: 100, bottom: 100, left: 150, right: 150 },
                children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "\u20AC 700,00", size: 20, bold: true })] })]
              })
            ]
          })
        ]
      }),
      
      new Paragraph({ spacing: { after: 300 }, children: [] }),
      
      // RECURRING Section
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        columnWidths: [1800, 2100, 3338, 2400],
        rows: [
          new TableRow({
            children: [
              new TableCell({
                borders,
                columnSpan: 4,
                shading: { fill: "1E40AF", type: ShadingType.CLEAR },
                margins: { top: 120, bottom: 120, left: 200, right: 200 },
                children: [
                  new Paragraph({
                    children: [new TextRun({ text: "RECURRING | Investimenti Mensili Continuativi", size: 22, bold: true, color: "FFFFFF" })]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders,
                shading: { fill: "DBEAFE", type: ShadingType.CLEAR },
                margins: { top: 100, bottom: 100, left: 150, right: 150 },
                children: [new Paragraph({ children: [new TextRun({ text: "INIZIATIVA", size: 18, bold: true, color: "1E40AF" })] })]
              }),
              new TableCell({
                borders,
                shading: { fill: "DBEAFE", type: ShadingType.CLEAR },
                margins: { top: 100, bottom: 100, left: 150, right: 150 },
                children: [new Paragraph({ children: [new TextRun({ text: "TIMING", size: 18, bold: true, color: "1E40AF" })] })]
              }),
              new TableCell({
                borders,
                shading: { fill: "DBEAFE", type: ShadingType.CLEAR },
                margins: { top: 100, bottom: 100, left: 150, right: 150 },
                children: [new Paragraph({ children: [new TextRun({ text: "COSA \u00C8 COMPRESO", size: 18, bold: true, color: "1E40AF" })] })]
              }),
              new TableCell({
                borders,
                shading: { fill: "DBEAFE", type: ShadingType.CLEAR },
                margins: { top: 100, bottom: 100, left: 150, right: 150 },
                children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "INVESTIMENTO", size: 18, bold: true, color: "1E40AF" })] })]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders,
                margins: { top: 100, bottom: 100, left: 150, right: 150 },
                children: [new Paragraph({ children: [new TextRun({ text: "Gestione LinkedIn", size: 20, bold: true })] })]
              }),
              new TableCell({
                borders,
                margins: { top: 100, bottom: 100, left: 150, right: 150 },
                children: [new Paragraph({ children: [new TextRun({ text: "Da Feb 2026\nContinuativo", size: 18 })] })]
              }),
              new TableCell({
                borders,
                margins: { top: 100, bottom: 100, left: 150, right: 150 },
                children: [new Paragraph({ children: [new TextRun({ text: "M1: 16 post lancio | M2+: 12 post/mese, piano editoriale, content creation", size: 18 })] })]
              }),
              new TableCell({
                borders,
                margins: { top: 100, bottom: 100, left: 150, right: 150 },
                children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "\u20AC 600,00/mese", size: 20, bold: true })] })]
              })
            ]
          })
        ]
      }),
      
      new Paragraph({ children: [new PageBreak()] }),
      
      // ============== TIMELINE MENSILE ==============
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("4.2 Timeline e Cash Flow (Scenario Base)")]
      }),
      
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun({ text: "Ipotesi: Sito Web opzione BASE (\u20AC 2.000)", size: 20, italics: true, color: MEDIUM_GRAY })]
      }),
      
      // Monthly timeline table
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        columnWidths: [1500, 1400, 1400, 1400, 1400, 1400, 1138],
        rows: [
          new TableRow({
            children: [
              new TableCell({
                borders,
                shading: { fill: PRIMARY_BLUE, type: ShadingType.CLEAR },
                margins: { top: 80, bottom: 80, left: 100, right: 100 },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "VOCE", size: 16, bold: true, color: "FFFFFF" })] })]
              }),
              new TableCell({
                borders,
                shading: { fill: PRIMARY_BLUE, type: ShadingType.CLEAR },
                margins: { top: 80, bottom: 80, left: 100, right: 100 },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "FEB 26", size: 16, bold: true, color: "FFFFFF" })] })]
              }),
              new TableCell({
                borders,
                shading: { fill: PRIMARY_BLUE, type: ShadingType.CLEAR },
                margins: { top: 80, bottom: 80, left: 100, right: 100 },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "MAR 26", size: 16, bold: true, color: "FFFFFF" })] })]
              }),
              new TableCell({
                borders,
                shading: { fill: PRIMARY_BLUE, type: ShadingType.CLEAR },
                margins: { top: 80, bottom: 80, left: 100, right: 100 },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "APR 26", size: 16, bold: true, color: "FFFFFF" })] })]
              }),
              new TableCell({
                borders,
                shading: { fill: PRIMARY_BLUE, type: ShadingType.CLEAR },
                margins: { top: 80, bottom: 80, left: 100, right: 100 },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "MAG 26", size: 16, bold: true, color: "FFFFFF" })] })]
              }),
              new TableCell({
                borders,
                shading: { fill: PRIMARY_BLUE, type: ShadingType.CLEAR },
                margins: { top: 80, bottom: 80, left: 100, right: 100 },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "GIU 26", size: 16, bold: true, color: "FFFFFF" })] })]
              }),
              new TableCell({
                borders,
                shading: { fill: "059669", type: ShadingType.CLEAR },
                margins: { top: 80, bottom: 80, left: 100, right: 100 },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "TOTALE", size: 16, bold: true, color: "FFFFFF" })] })]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ children: [new TextRun({ text: "Sito Web", size: 18 })] })] }),
              new TableCell({ borders, shading: { fill: "D1FAE5", type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "\u20AC 2.000", size: 18, bold: true })] })] }),
              new TableCell({ borders, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "-", size: 18, color: MEDIUM_GRAY })] })] }),
              new TableCell({ borders, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "-", size: 18, color: MEDIUM_GRAY })] })] }),
              new TableCell({ borders, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "-", size: 18, color: MEDIUM_GRAY })] })] }),
              new TableCell({ borders, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "-", size: 18, color: MEDIUM_GRAY })] })] }),
              new TableCell({ borders, shading: { fill: "D1FAE5", type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "\u20AC 2.000", size: 18, bold: true })] })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders, shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ children: [new TextRun({ text: "Presentazione", size: 18 })] })] }),
              new TableCell({ borders, shading: { fill: "D1FAE5", type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "\u20AC 700", size: 18, bold: true })] })] }),
              new TableCell({ borders, shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "-", size: 18, color: MEDIUM_GRAY })] })] }),
              new TableCell({ borders, shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "-", size: 18, color: MEDIUM_GRAY })] })] }),
              new TableCell({ borders, shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "-", size: 18, color: MEDIUM_GRAY })] })] }),
              new TableCell({ borders, shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "-", size: 18, color: MEDIUM_GRAY })] })] }),
              new TableCell({ borders, shading: { fill: "D1FAE5", type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "\u20AC 700", size: 18, bold: true })] })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ children: [new TextRun({ text: "Business Case", size: 18 })] })] }),
              new TableCell({ borders, shading: { fill: "D1FAE5", type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "\u20AC 700", size: 18, bold: true })] })] }),
              new TableCell({ borders, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "-", size: 18, color: MEDIUM_GRAY })] })] }),
              new TableCell({ borders, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "-", size: 18, color: MEDIUM_GRAY })] })] }),
              new TableCell({ borders, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "-", size: 18, color: MEDIUM_GRAY })] })] }),
              new TableCell({ borders, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "-", size: 18, color: MEDIUM_GRAY })] })] }),
              new TableCell({ borders, shading: { fill: "D1FAE5", type: ShadingType.CLEAR }, margins: { top