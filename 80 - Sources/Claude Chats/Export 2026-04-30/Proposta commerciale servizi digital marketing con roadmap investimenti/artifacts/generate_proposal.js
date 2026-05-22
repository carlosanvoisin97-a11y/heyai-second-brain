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
          new TextRun({ text: "Servizi di Digital Marketing", size: 32, color: ACCENT_BLUE })
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
        children: [new TextRun({ text: "Versione: 1.0", size: 20, color: MEDIUM_GRAY })]
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
        children: [new TextRun("I 3 Pilastri della Proposta")]
      }),
      
      // Three pillars table
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        columnWidths: [3213, 3213, 3212],
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
                    children: [new TextRun({ text: "SITO WEB", size: 22, bold: true, color: "FFFFFF" })]
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
                    children: [new TextRun({ text: "LINKEDIN", size: 22, bold: true, color: "FFFFFF" })]
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
                    children: [new TextRun({ text: "ASSET COMMERCIALI", size: 22, bold: true, color: "FFFFFF" })]
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
                    spacing: { after: 100 },
                    children: [new TextRun({ text: "Presenza Online", size: 20, color: ACCENT_BLUE, bold: true })]
                  }),
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [new TextRun({ text: "Vetrina digitale professionale per credibilit\u00E0 e inbound lead", size: 20, color: MEDIUM_GRAY })]
                  })
                ]
              }),
              new TableCell({
                borders,
                margins: { top: 150, bottom: 150, left: 200, right: 200 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    spacing: { after: 100 },
                    children: [new TextRun({ text: "Thought Leadership", size: 20, color: ACCENT_BLUE, bold: true })]
                  }),
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [new TextRun({ text: "Posizionamento B2B e visibilit\u00E0 verso decision maker", size: 20, color: MEDIUM_GRAY })]
                  })
                ]
              }),
              new TableCell({
                borders,
                margins: { top: 150, bottom: 150, left: 200, right: 200 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    spacing: { after: 100 },
                    children: [new TextRun({ text: "Sales Enablement", size: 20, color: ACCENT_BLUE, bold: true })]
                  }),
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [new TextRun({ text: "Materiali professionali per conversione lead", size: 20, color: MEDIUM_GRAY })]
                  })
                ]
              })
            ]
          })
        ]
      }),
      
      new Paragraph({ children: [new PageBreak()] }),
      
      // ============== SERVIZI PROPOSTI ==============
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("2. Servizi Proposti")]
      }),
      
      // SITO WEB
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("2.1 Realizzazione Sito Web Istituzionale")]
      }),
      
      new Paragraph({
        spacing: { after: 200 },
        children: [
          new TextRun({ 
            text: "Obiettivo: ", 
            size: 22, 
            bold: true 
          }),
          new TextRun({ 
            text: "Creare una presenza web professionale che comunichi immediatamente il posizionamento di NOT come leader italiano nel retail activation e pop-up store management.", 
            size: 22 
          })
        ]
      }),
      
      // Options table for website
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        columnWidths: [4819, 4819],
        rows: [
          // Header row
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
          // Price row
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
          // Timing row
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
          // Description row
          new TableRow({
            children: [
              new TableCell({
                borders,
                margins: { top: 150, bottom: 150, left: 200, right: 200 },
                children: [
                  new Paragraph({
                    spacing: { after: 100 },
                    children: [new TextRun({ text: "Cosa include:", size: 20, bold: true })]
                  }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "\u2022 Sito vetrina professionale", size: 20 })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "\u2022 Design pulito e moderno", size: 20 })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "\u2022 Sezioni: Chi siamo, Servizi, Contatti", size: 20 })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "\u2022 Responsive mobile-first", size: 20 })] }),
                  new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "\u2022 Ottimizzazione SEO base", size: 20 })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "Reference: Sito HeyAI", size: 18, italics: true, color: MEDIUM_GRAY })] })
                ]
              }),
              new TableCell({
                borders,
                margins: { top: 150, bottom: 150, left: 200, right: 200 },
                children: [
                  new Paragraph({
                    spacing: { after: 100 },
                    children: [new TextRun({ text: "Cosa include:", size: 20, bold: true })]
                  }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "\u2022 Design premium \"wow effect\"", size: 20 })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "\u2022 Animazioni e micro-interazioni", size: 20 })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "\u2022 Case study interattivi", size: 20 })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "\u2022 Sezione ROI calculator", size: 20 })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "\u2022 Blog/News section", size: 20 })] }),
                  new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "\u2022 Form lead generation avanzato", size: 20 })] }),
                  new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "\u2022 SEO avanzata + Analytics", size: 20 })] })
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
          new TextRun({ 
            text: "Obiettivo: ", 
            size: 22, 
            bold: true 
          }),
          new TextRun({ 
            text: "Costruire thought leadership nel settore retail activation e raggiungere decision maker di brand consumer, beauty, tech e food che cercano soluzioni di accesso al canale fisico.", 
            size: 22 
          })
        ]
      }),
      
      new Paragraph({
        spacing: { after: 100 },
        children: [
          new TextRun({ text: "LinkedIn \u00E8 l'unico canale social strategico per NOT: ", size: 22, bold: true }),
          new TextRun({ text: "\u00E8 dove si trovano i decision maker B2B (Marketing Director, Retail Manager, Country Manager) dei brand target.", size: 22 })
        ]
      }),
      
      new Paragraph({ spacing: { after: 200 }, children: [] }),
      
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
                  new Paragraph({
                    spacing: { after: 150 },
                    children: [new TextRun({ text: "Piano Editoriale:", size: 22, bold: true })]
                  }),
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
                  new Paragraph({
                    spacing: { after: 100 },
                    children: [new TextRun({ text: "Tipologie di contenuti:", size: 22, bold: true })]
                  }),
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
          new TextRun({ 
            text: "Obiettivo: ", 
            size: 22, 
            bold: true 
          }),
          new TextRun({ 
            text: "Fornire al team commerciale (Massimiliano, Germano, Andrea) materiali professionali per aumentare il tasso di conversione nelle fasi di primo contatto e follow-up.", 
            size: 22 
          })
        ]
      }),
      
      // Asset table
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        columnWidths: [4819, 4819],
        rows: [
          // Headers
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
          // Prices
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
          // Details
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
          // Timing
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
      
      // ============== ROADMAP E PIANO DI INVESTIMENTO ==============
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("3. Roadmap e Piano di Investimento")]
      }),
      
      new Paragraph({
        spacing: { after: 200 },
        children: [
          new TextRun({ 
            text: "Di seguito la roadmap dettagliata con timing e investimenti, suddivisa tra attivit\u00E0 ", 
            size: 22 
          }),
          new TextRun({ text: "One-Shot", size: 22, bold: true }),
          new TextRun({ text: " (investimento una tantum) e ", size: 22 }),
          new TextRun({ text: "Recurring", size: 22, bold: true }),
          new TextRun({ text: " (investimento mensile continuativo).", size: 22 })
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
        children: [new TextRun("3.1 Dettaglio Investimenti per Tipologia")]
      }),
      
      // ONE-SHOT Section
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        columnWidths: [1800, 2100, 3338, 2400],
        rows: [
          // Section Header
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
          // Column headers
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
          // Website Base
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
          // Website Advanced (alternative)
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
          // Presentation
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
                children: [new Paragraph({ children: [new TextRun({ text: "Deck corporate, value proposition, servizi, referenze (~10h lavoro)", size: 18 })] })]
              }),
              new TableCell({
                borders,
                margins: { top: 100, bottom: 100, left: 150, right: 150 },
                children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "\u20AC 700,00", size: 20, bold: true })] })]
              })
            ]
          }),
          // Business Case
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
                children: [new Paragraph({ children: [new TextRun({ text: "Caso di successo documentato, KPI, ROI, formato riutilizzabile (~10h)", size: 18 })] })]
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
          // Section Header
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
          // Column headers
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
          // LinkedIn
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
        children: [new TextRun("3.2 Timeline e Cash Flow (Scenario Base)")]
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
          // Header
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
          // Sito Web
          new TableRow({
            children: [
              new TableCell({
                borders,
                margins: { top: 80, bottom: 80, left: 100, right: 100 },
                children: [new Paragraph({ children: [new TextRun({ text: "Sito Web", size: 18 })] })]
              }),
              new TableCell({
                borders,
                shading: { fill: "D1FAE5", type: ShadingType.CLEAR },
                margins: { top: 80, bottom: 80, left: 100, right: 100 },
                children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "\u20AC 2.000", size: 18, bold: true })] })]
              }),
              new TableCell({ borders, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "-", size: 18, color: MEDIUM_GRAY })] })] }),
              new TableCell({ borders, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "-", size: 18, color: MEDIUM_GRAY })] })] }),
              new TableCell({ borders, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "-", size: 18, color: MEDIUM_GRAY })] })] }),
              new TableCell({ borders, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "-", size: 18, color: MEDIUM_GRAY })] })] }),
              new TableCell({
                borders,
                shading: { fill: "D1FAE5", type: ShadingType.CLEAR },
                margins: { top: 80, bottom: 80, left: 100, right: 100 },
                children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "\u20AC 2.000", size: 18, bold: true })] })]
              })
            ]
          }),
          // Presentazione
          new TableRow({
            children: [
              new TableCell({
                borders,
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                margins: { top: 80, bottom: 80, left: 100, right: 100 },
                children: [new Paragraph({ children: [new TextRun({ text: "Presentazione", size: 18 })] })]
              }),
              new TableCell({
                borders,
                shading: { fill: "D1FAE5", type: ShadingType.CLEAR },
                margins: { top: 80, bottom: 80, left: 100, right: 100 },
                children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "\u20AC 700", size: 18, bold: true })] })]
              }),
              new TableCell({ borders, shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "-", size: 18, color: MEDIUM_GRAY })] })] }),
              new TableCell({ borders, shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "-", size: 18, color: MEDIUM_GRAY })] })] }),
              new TableCell({ borders, shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "-", size: 18, color: MEDIUM_GRAY })] })] }),
              new TableCell({ borders, shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "-", size: 18, color: MEDIUM_GRAY })] })] }),
              new TableCell({
                borders,
                shading: { fill: "D1FAE5", type: ShadingType.CLEAR },
                margins: { top: 80, bottom: 80, left: 100, right: 100 },
                children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "\u20AC 700", size: 18, bold: true })] })]
              })
            ]
          }),
          // Business Case
          new TableRow({
            children: [
              new TableCell({
                borders,
                margins: { top: 80, bottom: 80, left: 100, right: 100 },
                children: [new Paragraph({ children: [new TextRun({ text: "Business Case", size: 18 })] })]
              }),
              new TableCell({
                borders,
                shading: { fill: "D1FAE5", type: ShadingType.CLEAR },
                margins: { top: 80, bottom: 80, left: 100, right: 100 },
                children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "\u20AC 700", size: 18, bold: true })] })]
              }),
              new TableCell({ borders, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "-", size: 18, color: MEDIUM_GRAY })] })] }),
              new TableCell({ borders, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "-", size: 18, color: MEDIUM_GRAY })] })] }),
              new TableCell({ borders, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "-", size: 18, color: MEDIUM_GRAY })] })] }),
              new TableCell({ borders, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "-", size: 18, color: MEDIUM_GRAY })] })] }),
              new TableCell({
                borders,
                shading: { fill: "D1FAE5", type: ShadingType.CLEAR },
                margins: { top: 80, bottom: 80, left: 100, right: 100 },
                children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "\u20AC 700", size: 18, bold: true })] })]
              })
            ]
          }),
          // LinkedIn
          new TableRow({
            children: [
              new TableCell({
                borders,
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                margins: { top: 80, bottom: 80, left: 100, right: 100 },
                children: [new Paragraph({ children: [new TextRun({ text: "LinkedIn", size: 18 })] })]
              }),
              new TableCell({
                borders,
                shading: { fill: "DBEAFE", type: ShadingType.CLEAR },
                margins: { top: 80, bottom: 80, left: 100, right: 100 },
                children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "\u20AC 600", size: 18, bold: true })] })]
              }),
              new TableCell({
                borders,
                shading: { fill: "DBEAFE", type: ShadingType.CLEAR },
                margins: { top: 80, bottom: 80, left: 100, right: 100 },
                children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "\u20AC 600", size: 18, bold: true })] })]
              }),
              new TableCell({
                borders,
                shading: { fill: "DBEAFE", type: ShadingType.CLEAR },
                margins: { top: 80, bottom: 80, left: 100, right: 100 },
                children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "\u20AC 600", size: 18, bold: true })] })]
              }),
              new TableCell({
                borders,
                shading: { fill: "DBEAFE", type: ShadingType.CLEAR },
                margins: { top: 80, bottom: 80, left: 100, right: 100 },
                children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "\u20AC 600", size: 18, bold: true })] })]
              }),
              new TableCell({
                borders,
                shading: { fill: "DBEAFE", type: ShadingType.CLEAR },
                margins: { top: 80, bottom: 80, left: 100, right: 100 },
                children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "\u20AC 600", size: 18, bold: true })] })]
              }),
              new TableCell({
                borders,
                shading: { fill: "DBEAFE", type: ShadingType.CLEAR },
                margins: { top: 80, bottom: 80, left: 100, right: 100 },
                children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "\u20AC 3.000", size: 18, bold: true })] })]
              })
            ]
          }),
          // TOTALE MENSILE
          new TableRow({
            children: [
              new TableCell({
                borders,
                shading: { fill: PRIMARY_BLUE, type: ShadingType.CLEAR },
                margins: { top: 100, bottom: 100, left: 100, right: 100 },
                children: [new Paragraph({ children: [new TextRun({ text: "TOTALE MESE", size: 18, bold: true, color: "FFFFFF" })] })]
              }),
              new TableCell({
                borders,
                shading: { fill: PRIMARY_BLUE, type: ShadingType.CLEAR },
                margins: { top: 100, bottom: 100, left: 100, right: 100 },
                children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "\u20AC 4.000", size: 18, bold: true, color: "FFFFFF" })] })]
              }),
              new TableCell({
                borders,
                shading: { fill: PRIMARY_BLUE, type: ShadingType.CLEAR },
                margins: { top: 100, bottom: 100, left: 100, right: 100 },
                children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "\u20AC 600", size: 18, bold: true, color: "FFFFFF" })] })]
              }),
              new TableCell({
                borders,
                shading: { fill: PRIMARY_BLUE, type: ShadingType.CLEAR },
                margins: { top: 100, bottom: 100, left: 100, right: 100 },
                children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "\u20AC 600", size: 18, bold: true, color: "FFFFFF" })] })]
              }),
              new TableCell({
                borders,
                shading: { fill: PRIMARY_BLUE, type: ShadingType.CLEAR },
                margins: { top: 100, bottom: 100, left: 100, right: 100 },
                children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "\u20AC 600", size: 18, bold: true, color: "FFFFFF" })] })]
              }),
              new TableCell({
                borders,
                shading: { fill: PRIMARY_BLUE, type: ShadingType.CLEAR },
                margins: { top: 100, bottom: 100, left: 100, right: 100 },
                children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "\u20AC 600", size: 18, bold: true, color: "FFFFFF" })] })]
              }),
              new TableCell({
                borders,
                shading: { fill: "059669", type: ShadingType.CLEAR },
                margins: { top: 100, bottom: 100, left: 100, right: 100 },
                children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "\u20AC 6.400", size: 18, bold: true, color: "FFFFFF" })] })]
              })
            ]
          })
        ]
      }),
      
      new Paragraph({ spacing: { after: 300 }, children: [] }),
      
      // Summary box
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        columnWidths: [9638],
        rows: [
          new TableRow({
            children: [
              new TableCell({
                borders,
                shading: { fill: "F0FDF4", type: ShadingType.CLEAR },
                margins: { top: 200, bottom: 200, left: 300, right: 300 },
                children: [
                  new Paragraph({
                    spacing: { after: 150 },
                    children: [new TextRun({ text: "RIEPILOGO INVESTIMENTO (5 mesi | Scenario Base)", size: 24, bold: true, color: "065F46" })]
                  }),
                  new Paragraph({
                    spacing: { after: 100 },
                    children: [
                      new TextRun({ text: "One-Shot: ", size: 22, bold: true }),
                      new TextRun({ text: "\u20AC 3.400,00 (Sito Base + Presentazione + Business Case)", size: 22 })
                    ]
                  }),
                  new Paragraph({
                    spacing: { after: 100 },
                    children: [
                      new TextRun({ text: "Recurring: ", size: 22, bold: true }),
                      new TextRun({ text: "\u20AC 3.000,00 (LinkedIn \u20AC 600/mese x 5 mesi)", size: 22 })
                    ]
                  }),
                  new Paragraph({
                    children: [
                      new TextRun({ text: "TOTALE 5 MESI: \u20AC 6.400,00 ", size: 24, bold: true, color: "065F46" }),
                      new TextRun({ text: "(oltre IVA)", size: 20, color: MEDIUM_GRAY })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      }),
      
      new Paragraph({ children: [new PageBreak()] }),
      
      // ============== SCENARIO ADVANCED ==============
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("3.3 Scenario Advanced")]
      }),
      
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun({ text: "Ipotesi: Sito Web opzione ADVANCED (\u20AC 10.000)", size: 20, italics: true, color: MEDIUM_GRAY })]
      }),
      
      // Summary box Advanced
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        columnWidths: [9638],
        rows: [
          new TableRow({
            children: [
              new TableCell({
                borders,
                shading: { fill: "EEF2FF", type: ShadingType.CLEAR },
                margins: { top: 200, bottom: 200, left: 300, right: 300 },
                children: [
                  new Paragraph({
                    spacing: { after: 150 },
                    children: [new TextRun({ text: "RIEPILOGO INVESTIMENTO (5 mesi | Scenario Advanced)", size: 24, bold: true, color: "3730A3" })]
                  }),
                  new Paragraph({
                    spacing: { after: 100 },
                    children: [
                      new TextRun({ text: "One-Shot: ", size: 22, bold: true }),
                      new TextRun({ text: "\u20AC 11.400,00 (Sito Advanced + Presentazione + Business Case)", size: 22 })
                    ]
                  }),
                  new Paragraph({
                    spacing: { after: 100 },
                    children: [
                      new TextRun({ text: "Recurring: ", size: 22, bold: true }),
                      new TextRun({ text: "\u20AC 3.000,00 (LinkedIn \u20AC 600/mese x 5 mesi)", size: 22 })
                    ]
                  }),
                  new Paragraph({
                    children: [
                      new TextRun({ text: "TOTALE 5 MESI: \u20AC 14.400,00 ", size: 24, bold: true, color: "3730A3" }),
                      new TextRun({ text: "(oltre IVA)", size: 20, color: MEDIUM_GRAY })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      }),
      
      new Paragraph({ spacing: { after: 400 }, children: [] }),
      
      // ============== NEXT STEPS ==============
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("4. Next Steps")]
      }),
      
      new Paragraph({
        spacing: { after: 150 },
        children: [new TextRun({ text: "Per procedere con l'attivazione dei servizi:", size: 22 })]
      }),
      
      new Paragraph({
        spacing: { after: 100 },
        children: [new TextRun({ text: "1. Selezione opzione sito web (Base vs. Advanced)", size: 22 })]
      }),
      new Paragraph({
        spacing: { after: 100 },
        children: [new TextRun({ text: "2. Conferma avvio lavori e firma contratto di servizio", size: 22 })]
      }),
      new Paragraph({
        spacing: { after: 100 },
        children: [new TextRun({ text: "3. Kick-off meeting per raccolta materiali e brief", size: 22 })]
      }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun({ text: "4. Avvio lavori: 01 Febbraio 2026", size: 22 })]
      }),
      
      new Paragraph({ spacing: { after: 300 }, children: [] }),
      
      // Contact box
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        columnWidths: [9638],
        rows: [
          new TableRow({
            children: [
              new TableCell({
                borders,
                shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
                margins: { top: 200, bottom: 200, left: 300, right: 300 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    spacing: { after: 100 },
                    children: [new TextRun({ text: "Per qualsiasi domanda o chiarimento", size: 22, bold: true, color: PRIMARY_BLUE })]
                  }),
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    spacing: { after: 50 },
                    children: [new TextRun({ text: "HeyAI | Digital Strategy & Marketing B2B", size: 22 })]
                  }),
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [new TextRun({ text: "Siamo a disposizione per una call di approfondimento", size: 20, color: MEDIUM_GRAY })]
                  })
                ]
              })
            ]
          })
        ]
      }),
      
      new Paragraph({ spacing: { after: 200 }, children: [] }),
      
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: "Documento redatto da HeyAI | Gennaio 2026", size: 18, italics: true, color: MEDIUM_GRAY })]
      })
    ]
  }]
});

// Generate document
Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/home/claude/Proposta_Commerciale_NOT_Digital_Marketing.docx", buffer);
  console.log("Document created successfully!");
});