const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, 
        Header, Footer, AlignmentType, PageOrientation, LevelFormat, 
        HeadingLevel, BorderStyle, WidthType, ShadingType, PageNumber, PageBreak } = require('docx');
const fs = require('fs');

// Define colors
const PRIMARY_COLOR = "1F4788"; // Blue scuro professionale
const ACCENT_COLOR = "4A90E2";  // Azzurro
const LIGHT_GRAY = "F5F5F5";
const MEDIUM_GRAY = "E0E0E0";
const DARK_GRAY = "666666";

// Helper function for borders
const tableBorder = { style: BorderStyle.SINGLE, size: 1, color: MEDIUM_GRAY };
const tableBorders = { 
  top: tableBorder, 
  bottom: tableBorder, 
  left: tableBorder, 
  right: tableBorder 
};

// Helper for section titles
function createSectionTitle(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    children: [
      new TextRun({
        text: text,
        bold: true,
        size: 32,
        color: PRIMARY_COLOR
      })
    ],
    spacing: { before: 400, after: 240 }
  });
}

// Helper for subsection titles
function createSubsectionTitle(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    children: [
      new TextRun({
        text: text,
        bold: true,
        size: 28,
        color: PRIMARY_COLOR
      })
    ],
    spacing: { before: 320, after: 180 }
  });
}

// Helper for body text
function createBodyText(text) {
  return new Paragraph({
    children: [
      new TextRun({
        text: text,
        size: 22
      })
    ],
    spacing: { after: 140 }
  });
}

// Helper for bullet points
function createBulletPoint(text, bulletRef = "bullets") {
  return new Paragraph({
    numbering: { reference: bulletRef, level: 0 },
    children: [
      new TextRun({
        text: text,
        size: 22
      })
    ],
    spacing: { after: 80 }
  });
}

// Helper for highlight box
function createHighlightBox(text, bgColor = LIGHT_GRAY) {
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.NONE, size: 0 },
      bottom: { style: BorderStyle.NONE, size: 0 },
      left: { style: BorderStyle.SINGLE, size: 6, color: ACCENT_COLOR },
      right: { style: BorderStyle.NONE, size: 0 }
    },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            shading: { fill: bgColor, type: ShadingType.CLEAR },
            margins: { top: 200, bottom: 200, left: 200, right: 200 },
            borders: {
              top: { style: BorderStyle.NONE, size: 0 },
              bottom: { style: BorderStyle.NONE, size: 0 },
              left: { style: BorderStyle.NONE, size: 0 },
              right: { style: BorderStyle.NONE, size: 0 }
            },
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: text,
                    size: 22
                  })
                ],
                spacing: { after: 0 }
              })
            ]
          })
        ]
      })
    ]
  });
}

const doc = new Document({
  styles: {
    default: {
      document: {
        run: { font: "Arial", size: 22 } // 11pt default
      }
    },
    paragraphStyles: [
      {
        id: "Heading1",
        name: "Heading 1",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 32, bold: true, font: "Arial", color: PRIMARY_COLOR },
        paragraph: { spacing: { before: 400, after: 240 }, outlineLevel: 0 }
      },
      {
        id: "Heading2",
        name: "Heading 2",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 28, bold: true, font: "Arial", color: PRIMARY_COLOR },
        paragraph: { spacing: { before: 320, after: 180 }, outlineLevel: 1 }
      },
      {
        id: "Heading3",
        name: "Heading 3",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 24, bold: true, font: "Arial", color: DARK_GRAY },
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 2 }
      }
    ]
  },
  numbering: {
    config: [
      {
        reference: "bullets",
        levels: [
          {
            level: 0,
            format: LevelFormat.BULLET,
            text: "•",
            alignment: AlignmentType.LEFT,
            style: {
              paragraph: {
                indent: { left: 720, hanging: 360 }
              }
            }
          }
        ]
      },
      {
        reference: "numbers",
        levels: [
          {
            level: 0,
            format: LevelFormat.DECIMAL,
            text: "%1.",
            alignment: AlignmentType.LEFT,
            style: {
              paragraph: {
                indent: { left: 720, hanging: 360 }
              }
            }
          }
        ]
      }
    ]
  },
  sections: [{
    properties: {
      page: {
        size: {
          width: 12240,  // US Letter width
          height: 15840  // US Letter height
        },
        margin: {
          top: 1440,    // 1 inch
          right: 1440,
          bottom: 1440,
          left: 1440
        }
      }
    },
    headers: {
      default: new Header({
        children: [
          new Paragraph({
            alignment: AlignmentType.RIGHT,
            children: [
              new TextRun({
                text: "Proposta Tecnico-Commerciale | Eye Cookies",
                size: 18,
                color: DARK_GRAY
              })
            ]
          })
        ]
      })
    },
    footers: {
      default: new Footer({
        children: [
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            borders: {
              top: { style: BorderStyle.NONE, size: 0 },
              bottom: { style: BorderStyle.NONE, size: 0 },
              left: { style: BorderStyle.NONE, size: 0 },
              right: { style: BorderStyle.NONE, size: 0 }
            },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    borders: {
                      top: { style: BorderStyle.NONE, size: 0 },
                      bottom: { style: BorderStyle.NONE, size: 0 },
                      left: { style: BorderStyle.NONE, size: 0 },
                      right: { style: BorderStyle.NONE, size: 0 }
                    },
                    width: { size: 50, type: WidthType.PERCENTAGE },
                    children: [
                      new Paragraph({
                        alignment: AlignmentType.LEFT,
                        children: [
                          new TextRun({
                            text: "HeyAI S.r.l. | c.sanvoisin@heyaidigital.it | +39 393 2527762",
                            size: 16,
                            color: DARK_GRAY
                          })
                        ]
                      })
                    ]
                  }),
                  new TableCell({
                    borders: {
                      top: { style: BorderStyle.NONE, size: 0 },
                      bottom: { style: BorderStyle.NONE, size: 0 },
                      left: { style: BorderStyle.NONE, size: 0 },
                      right: { style: BorderStyle.NONE, size: 0 }
                    },
                    width: { size: 50, type: WidthType.PERCENTAGE },
                    children: [
                      new Paragraph({
                        alignment: AlignmentType.RIGHT,
                        children: [
                          new TextRun({ text: "Pagina ", size: 16, color: DARK_GRAY }),
                          new TextRun({
                            children: [PageNumber.CURRENT],
                            size: 16,
                            color: DARK_GRAY
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      })
    },
    children: [
      // ====== COVER PAGE ======
      new Paragraph({
        children: [new TextRun("")],
        spacing: { after: 800 }
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
          new TextRun({
            text: "PROPOSTA TECNICO-COMMERCIALE",
            bold: true,
            size: 40,
            color: PRIMARY_COLOR
          })
        ],
        spacing: { after: 240 }
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
          new TextRun({
            text: "EYE COOKIES",
            bold: true,
            size: 56,
            color: ACCENT_COLOR
          })
        ],
        spacing: { after: 120 }
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
          new TextRun({
            text: "Sistema di Tracciamento Comportamentale In-Store",
            size: 24,
            italics: true,
            color: DARK_GRAY
          })
        ],
        spacing: { after: 600 }
      }),
      
      // Info box
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: tableBorders,
        rows: [
          new TableRow({
            children: [
              new TableCell({
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                margins: { top: 160, bottom: 160, left: 200, right: 200 },
                borders: tableBorders,
                width: { size: 4680, type: WidthType.DXA },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "Cliente:", bold: true, size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                margins: { top: 160, bottom: 160, left: 200, right: 200 },
                borders: tableBorders,
                width: { size: 4680, type: WidthType.DXA },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "Noloop on Trade (NOT) S.r.l.", size: 22 })
                    ]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                margins: { top: 160, bottom: 160, left: 200, right: 200 },
                borders: tableBorders,
                width: { size: 4680, type: WidthType.DXA },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "Fornitore:", bold: true, size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                margins: { top: 160, bottom: 160, left: 200, right: 200 },
                borders: tableBorders,
                width: { size: 4680, type: WidthType.DXA },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "HeyAI S.r.l.", size: 22 })
                    ]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                margins: { top: 160, bottom: 160, left: 200, right: 200 },
                borders: tableBorders,
                width: { size: 4680, type: WidthType.DXA },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "Data:", bold: true, size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                margins: { top: 160, bottom: 160, left: 200, right: 200 },
                borders: tableBorders,
                width: { size: 4680, type: WidthType.DXA },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "15 Gennaio 2026", size: 22 })
                    ]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                margins: { top: 160, bottom: 160, left: 200, right: 200 },
                borders: tableBorders,
                width: { size: 4680, type: WidthType.DXA },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "Riferimento:", bold: true, size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                margins: { top: 160, bottom: 160, left: 200, right: 200 },
                borders: tableBorders,
                width: { size: 4680, type: WidthType.DXA },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "Proposta MVP Eye Cookies - NOT-HEY-2026-001", size: 22 })
                    ]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                margins: { top: 160, bottom: 160, left: 200, right: 200 },
                borders: tableBorders,
                width: { size: 4680, type: WidthType.DXA },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "Validità Offerta:", bold: true, size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                margins: { top: 160, bottom: 160, left: 200, right: 200 },
                borders: tableBorders,
                width: { size: 4680, type: WidthType.DXA },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "30 giorni dalla data di emissione", size: 22 })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      }),

      new Paragraph({ children: [new PageBreak()] }),

      // ====== EXECUTIVE SUMMARY ======
      createSectionTitle("1. Executive Summary"),
      
      createBodyText("La presente proposta tecnico-commerciale definisce lo sviluppo del Minimum Viable Product (MVP) di Eye Cookies, sistema innovativo di tracciamento comportamentale in-store sviluppato da HeyAI per Noloop on Trade (NOT)."),
      
      createBodyText("Eye Cookies rappresenta la naturale evoluzione del retail fisico verso la misurazione e l&#x2019;ottimizzazione data-driven tipica dell&#x2019;e-commerce. Attraverso l&#x2019;integrazione con i sensori Microlog e l&#x2019;applicazione di algoritmi di Intelligenza Artificiale, il sistema trasforma ogni visita in un pop-up store in dati actionable per remarketing e personalizzazione."),

      createHighlightBox("Eye Cookies colma il gap tra retail fisico e digitale, trasformando l&#x2019;interesse implicito dei visitatori in opportunità di conversione post-visita."),
      
      new Paragraph({ spacing: { after: 240 } }),

      createSubsectionTitle("1.1 Contesto Strategico"),
      
      createBodyText("Noloop on Trade sta evolvendo da operatore full-service di pop-up store a piattaforma tecnologica avanzata per il temporary retail. In questo percorso, Eye Cookies rappresenta:"),
      
      createBulletPoint("Un nuovo servizio differenziante rispetto ai competitor tradizionali"),
      createBulletPoint("Una revenue stream aggiuntiva basata su servizi ad alto valore"),
      createBulletPoint("Un asset proprietario che aumenta il valore percepito dell&#x2019;offerta NOT"),
      createBulletPoint("Una barriera all&#x2019;ingresso per la concorrenza grazie alla proprietà intellettuale"),

      new Paragraph({ spacing: { after: 240 } }),

      createSubsectionTitle("1.2 Obiettivi del Progetto MVP"),

      createBulletPoint("Validare il modello tecnico-funzionale su installazione reale (primo pop-up operativo dal 1° dicembre 2025)"),
      createBulletPoint("Dimostrare l&#x2019;efficacia del tracciamento comportamentale e della generazione del carrello virtuale"),
      createBulletPoint("Creare un caso studio utilizzabile per l&#x2019;acquisizione di nuovi clienti nel 2026"),
      createBulletPoint("Fornire a NOT un vantaggio competitivo immediato nel mercato del temporary retail"),
      createBulletPoint("Gettare le basi tecnologiche per le evoluzioni successive (Fase 2 e oltre)"),

      new Paragraph({ children: [new PageBreak()] }),

      // ====== LA RICHIESTA DEL CLIENTE ======
      createSectionTitle("2. La Richiesta del Cliente"),

      createSubsectionTitle("2.1 Il Problema: I Carrelli Abbandonati nel Retail Fisico"),

      createBodyText("Nel 2024, circa il 70% dei carrelli online viene abbandonato prima del pagamento, generando una perdita stimata di 18 miliardi di dollari all&#x2019;anno per l&#x2019;e-commerce globale. Le piattaforme digitali hanno sviluppato sofisticate strategie di recovery (email, notifiche push, retargeting) che permettono di recuperare tra il 3% e il 7% del valore lasciato nei carrelli, con punte fino al 13% per i migliori performer."),

      createBodyText("Nel retail fisico, invece, non esiste una tecnologia equivalente. Non è possibile sapere chi ha mostrato interesse per un prodotto senza acquistarlo, né tracciare automaticamente il comportamento post-visita. Questa lacuna rappresenta un&#x2019;enorme opportunità inesplorata."),

      new Paragraph({ spacing: { after: 240 } }),

      createSubsectionTitle("2.2 La Vision: Eye Cookies"),

      createBodyText("Eye Cookies nasce per colmare questo gap, trasferendo la logica del &#x201C;carrello abbandonato&#x201D; dall&#x2019;online al mondo fisico. Il sistema:"),

      createBulletPoint("Traccia il comportamento dei visitatori attraverso sensori video intelligenti (forniti da Microlog)"),
      createBulletPoint("Associa i dati comportamentali a un profilo utente (tramite consenso GDPR raccolto all&#x2019;ingresso)"),
      createBulletPoint("Genera automaticamente un carrello virtuale basato sull&#x2019;interesse manifestato (zone visitate, prodotti osservati, tempo di permanenza)"),
      createBulletPoint("Attiva campagne di remarketing personalizzate (email, social ads) per convertire l&#x2019;interesse in acquisto"),

      createHighlightBox("L&#x2019;obiettivo è creare l&#x2019;equivalente fisico del retargeting digitale: riportare sul canale online i visitatori che hanno manifestato interesse in-store ma non hanno convertito."),

      new Paragraph({ spacing: { after: 240 } }),

      createSubsectionTitle("2.3 Posizionamento Strategico NOT"),

      createBodyText("Nel mercato italiano del temporary retail (valore stimato €300-400M nel segmento pop-up + retail activation nei centri commerciali), NOT si posiziona come full-service operator con:"),

      createBulletPoint("~25 persone interne e 33 centri attivi"),
      createBulletPoint("Forte dipendenza da un singolo cliente (BAT: 95% del fatturato)"),
      createBulletPoint("Capacità operativa limitata dalla gestione manuale dei processi"),
      createBulletPoint("Gap di portfolio rispetto ai competitor più strutturati (Pardgroup, CPM Italy, Freeway) che offrono digital marketing, analytics avanzate e experiential marketing"),

      createBodyText("Eye Cookies si inserisce in una strategia più ampia di trasformazione digitale che HeyAI sta supportando per NOT, articolata su quattro pilastri:"),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun({ text: "Automazione Operations - Piattaforma AI per gestione staff, formazione, logistica", size: 22 })]
      }),
      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun({ text: "Attivazione Online - Sito web, LinkedIn, contenuti, PR digitale", size: 22 })]
      }),
      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun({ text: "Lead Generation - Funnel inbound, CRM, automazioni marketing, outreach potenziato", size: 22 })]
      }),
      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun({ text: "Estensione Portfolio - Eye Cookies, experiential marketing, content creation", size: 22 })]
      }),

      new Paragraph({ spacing: { after: 240 } }),

      createBodyText("Eye Cookies rappresenta il primo servizio ad alto valore aggiunto che NOT potrà offrire autonomamente, posizionandosi come partner strategico e non solo operatore logistico."),

      new Paragraph({ children: [new PageBreak()] }),

      // ====== SOLUZIONE PROPOSTA ======
      createSectionTitle("3. Soluzione Proposta: Eye Cookies MVP"),

      createSubsectionTitle("3.1 Architettura e Integrazione Microlog"),

      createBodyText("Eye Cookies si integra con l&#x2019;ecosistema di sensori Microlog già operativo nei pop-up store NOT. Microlog fornisce:"),

      createBulletPoint("Sensori video da soffitto per tracciamento anonimo dei movimenti"),
      createBulletPoint("API per l&#x2019;accesso ai dati elaborati (formato JSON)"),
      createBulletPoint("Dashboard per visualizzazione heatmap e statistiche aggregate"),
      createBulletPoint("Elaborazione batch notturna dei dati (disponibilità giorno successivo)"),

      createBodyText("Eye Cookies si sovrappone a questa infrastruttura fornendo:"),

      createBulletPoint("Sistema di registrazione utente all&#x2019;ingresso (tablet/totem con raccolta email e consenso GDPR)"),
      createBulletPoint("Motore di correlazione timestamp-comportamento per associare profilo utente e dati Microlog"),
      createBulletPoint("Pipeline di normalizzazione e processing dei dati comportamentali"),
      createBulletPoint("Generatore di carrello virtuale basato su AI"),
      createBulletPoint("Targeting engine per remarketing automatizzato"),

      new Paragraph({ spacing: { after: 240 } }),

      createSubsectionTitle("3.2 Flusso Operativo"),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun({ text: "All&#x2019;ingresso del pop-up, il visitatore registra la propria email su tablet/totem e accetta il consenso GDPR. Il sistema memorizza timestamp e identificativo univoco.", size: 22 })],
        spacing: { after: 120 }
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun({ text: "Durante la visita, i sensori Microlog tracciano movimento, zone visitate, tempo di permanenza e interazioni con i prodotti. I dati vengono associati all&#x2019;ID del visitatore tramite matching timestamp.", size: 22 })],
        spacing: { after: 120 }
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun({ text: "Ogni notte, Microlog elabora i dati e li rende disponibili via API. Eye Cookies li preleva, li normalizza e li archivia nel database proprietario.", size: 22 })],
        spacing: { after: 120 }
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun({ text: "Il motore AI analizza i comportamenti e genera un carrello virtuale probabilistico con i prodotti di maggior interesse per ciascun utente.", size: 22 })],
        spacing: { after: 120 }
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun({ text: "Il targeting engine determina la strategia di remarketing ottimale (canale, messaggi, offerte) basandosi su profilo utente, carrello virtuale e pattern comportamentali.", size: 22 })],
        spacing: { after: 120 }
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun({ text: "Campagne personalizzate vengono attivate automaticamente via email e social media (Meta Ads, Google Ads) per riportare l&#x2019;utente sul canale digitale e stimolare la conversione.", size: 22 })],
        spacing: { after: 240 }
      }),

      new Paragraph({ children: [new PageBreak()] }),

      createSubsectionTitle("3.3 Moduli Funzionali MVP"),

      createBodyText("Lo sviluppo MVP si concentra su sei moduli core, come definito nel documento tecnico dello sviluppatore:"),

      // Module 1
      new Paragraph({
        children: [
          new TextRun({ text: "Modulo 1: ", bold: true, size: 22 }),
          new TextRun({ text: "Nightly Post-Processing Data Fetch", bold: true, size: 22, color: ACCENT_COLOR })
        ],
        spacing: { before: 200, after: 120 }
      }),
      createBodyText("Prelievo quotidiano dei dati di tracciamento elaborati da Microlog durante il batch notturno. L&#x2019;applicazione interroga le API il giorno successivo alla visita del cliente per ottenere insight comportamentali anonimizzati provenienti dal tracciamento video in-store."),

      // Module 2
      new Paragraph({
        children: [
          new TextRun({ text: "Modulo 2: ", bold: true, size: 22 }),
          new TextRun({ text: "Registration–Timestamp Association", bold: true, size: 22, color: ACCENT_COLOR })
        ],
        spacing: { before: 200, after: 120 }
      }),
      createBodyText("Il sistema collega il timestamp acquisito al momento dell&#x2019;inserimento dell&#x2019;email e dell&#x2019;accettazione GDPR sul tablet con i dati analitici di Microlog. Questa correlazione identifica lo stesso individuo rilevato nella zona di registrazione in quello specifico momento."),

      // Module 3
      new Paragraph({
        children: [
          new TextRun({ text: "Modulo 3: ", bold: true, size: 22 }),
          new TextRun({ text: "Data Processing and Normalization", bold: true, size: 22, color: ACCENT_COLOR })
        ],
        spacing: { before: 200, after: 120 }
      }),
      createBodyText("I dati di tracciamento recuperati vengono puliti, elaborati e normalizzati per estrarre pattern comportamentali significativi (aree visitate, tempo di permanenza, interesse inferito per i prodotti). Questi data point strutturati alimentano i moduli successivi di generazione carrello e targeting."),

      // Module 4
      new Paragraph({
        children: [
          new TextRun({ text: "Modulo 4: ", bold: true, size: 22 }),
          new TextRun({ text: "Virtual Cart Generation", bold: true, size: 22, color: ACCENT_COLOR })
        ],
        spacing: { before: 200, after: 120 }
      }),
      createBodyText("Sulla base delle interazioni fisiche del cliente (prossimità ai prodotti, durata della sosta, heatmap comportamentali), il sistema genera un carrello virtuale probabilistico che rappresenta gli articoli con maggiore probabilità di interessare il cliente."),

      // Module 5
      new Paragraph({
        children: [
          new TextRun({ text: "Modulo 5: ", bold: true, size: 22 }),
          new TextRun({ text: "AI-Driven Targeting Engine", bold: true, size: 22, color: ACCENT_COLOR })
        ],
        spacing: { before: 200, after: 120 }
      }),
      createBodyText("Un motore di targeting alimentato da algoritmi predittivi e modelli basati su LLM valuta il profilo cliente, il carrello virtuale e i pattern comportamentali per determinare la strategia di remarketing ottimale, inclusi messaggi, offerte e canali preferenziali."),

      // Module 6
      new Paragraph({
        children: [
          new TextRun({ text: "Modulo 6: ", bold: true, size: 22 }),
          new TextRun({ text: "Localized Advertising Activation", bold: true, size: 22, color: ACCENT_COLOR })
        ],
        spacing: { before: 200, after: 120 }
      }),
      createBodyText("Il sistema attiva automaticamente campagne personalizzate via email e social media (ad esempio Meta Ads, Google Ads). L&#x2019;output del targeting AI ottimizza contenuti, frequenza e selezione del pubblico per massimizzare la conversione da clienti precedentemente non convertiti."),

      new Paragraph({ children: [new PageBreak()] }),

      createSubsectionTitle("3.4 Requisiti Funzionali Implementati (MVP)"),

      createBodyText("Sulla base del documento di requisiti del cliente e delle attuali disponibilità dei dati Microlog, l&#x2019;MVP implementerà i seguenti requisiti funzionali:"),

      new Paragraph({ spacing: { after: 160 } }),

      // RF1 - Gestione Accessi
      new Paragraph({
        children: [
          new TextRun({ text: "RF1 - Gestione Accessi e Multiutenza", bold: true, size: 24, color: PRIMARY_COLOR })
        ],
        spacing: { before: 200, after: 120 }
      }),
      createBulletPoint("RF1.1: Registrazione e gestione utenti con ruoli diversi (super-admin, admin tenant, marketing, analyst, client)"),
      createBulletPoint("RF1.2: Accesso con credenziali personali e permessi basati su ruolo"),
      createBulletPoint("RF1.3: Supporto per autenticazione a due fattori (2FA)"),
      createBulletPoint("RF1.5: Gestione utenti da parte dell&#x2019;amministratore (disabilita, reset password, modifica permessi)"),

      // RF2 - Multi-tenant
      new Paragraph({
        children: [
          new TextRun({ text: "RF2 - Gestione Multi-tenant e Organizzazione per Pop-up Store", bold: true, size: 24, color: PRIMARY_COLOR })
        ],
        spacing: { before: 280, after: 120 }
      }),
      createBulletPoint("RF2.2: Configurazione e gestione di multipli pop-up store per tenant con dati, sensori e report dedicati"),
      createBulletPoint("RF2.3: Associazione utenti a uno o più pop-up store con accesso solo ai dati pertinenti"),
      createBulletPoint("RF2.4: Assegnazione di ruoli diversi all&#x2019;interno del tenant e fra i diversi pop-up"),

      // RF3 - Integrazione Microlog
      new Paragraph({
        children: [
          new TextRun({ text: "RF3 - Integrazione con Sensori Microlog", bold: true, size: 24, color: PRIMARY_COLOR })
        ],
        spacing: { before: 280, after: 120 }
      }),
      createBulletPoint("RF3.1: Acquisizione dati sensori Microlog tramite API (batch notturno)"),
      createBulletPoint("RF3.2: Dati includono zone visitate, permanenza, heatmap, interazioni, sosta"),
      createBulletPoint("RF3.3: Modulo per normalizzazione e parsing dei dati al formato interno"),
      createBulletPoint("RF3.4: Gestione buffer/fallback per assenza temporanea di connessione"),

      // RF4 - Profilazione
      new Paragraph({
        children: [
          new TextRun({ text: "RF4 - Profilazione Comportamentale (con AI)", bold: true, size: 24, color: PRIMARY_COLOR })
        ],
        spacing: { before: 280, after: 120 }
      }),
      createBulletPoint("RF4.1: Associazione dati comportamentali a identificatore univoco (email/tag/sessione)"),
      createBulletPoint("RF4.2: Analisi automatica comportamenti (percorso, soste, manipolazione prodotti) con AI/ML"),
      createBulletPoint("RF4.3: Memorizzazione e correlazione storico comportamentale in tempo reale"),

      // RF5 - Carrello Virtuale
      new Paragraph({
        children: [
          new TextRun({ text: "RF5 - Generazione Carrello Virtuale (con AI)", bold: true, size: 24, color: PRIMARY_COLOR })
        ],
        spacing: { before: 280, after: 120 }
      }),
      createBulletPoint("RF5.1: Generazione carrello virtuale per ciascun utente profilato con analisi AI dei comportamenti"),
      createBulletPoint("RF5.2: Correlazione prodotti tramite AI agli oggetti osservati/manipolati, con logiche di raccomandazione predittiva"),
      createBulletPoint("RF5.4: Accesso al carrello tramite QR code, login, SMS/email se identificato"),

      new Paragraph({ spacing: { after: 240 } }),

      createHighlightBox("Nota Tecnica: I requisiti RF3 e RF4 sono parzialmente dipendenti dall&#x2019;evoluzione delle API Microlog. Il sistema è progettato per adattarsi all&#x2019;ampliamento futuro delle funzionalità fornite dal partner tecnologico."),

      new Paragraph({ children: [new PageBreak()] }),

      // ====== ROADMAP ======
      createSectionTitle("4. Roadmap di Sviluppo"),

      createSubsectionTitle("4.1 Approccio Metodologico"),

      createBodyText("Lo sviluppo seguirà un approccio agile con rilasci incrementali:"),

      createBulletPoint("Sviluppo iterativo con feedback continuo da NOT e validazione su installazione reale"),
      createBulletPoint("Architettura modulare per facilitare estensioni future (Fase 2 e oltre)"),
      createBulletPoint("Testing progressivo su dati reali dal 1° dicembre 2025 (primo pop-up operativo)"),
      createBulletPoint("Documentazione tecnica e training on-the-job per il team NOT"),

      new Paragraph({ spacing: { after: 240 } }),

      createSubsectionTitle("4.2 Fasi di Implementazione"),

      // Sprint 1-2
      new Paragraph({
        children: [
          new TextRun({ text: "Sprint 1-2 (Settimane 1-4): ", bold: true, size: 22 }),
          new TextRun({ text: "Foundation e Setup", size: 22 })
        ],
        spacing: { before: 200, after: 120 }
      }),
      createBulletPoint("Setup architettura cloud e ambiente di sviluppo"),
      createBulletPoint("Implementazione autenticazione e gestione utenti (RF1.1, RF1.2, RF1.3, RF1.5)"),
      createBulletPoint("Setup multi-tenancy e struttura organizzativa pop-up (RF2.2, RF2.3, RF2.4)"),
      createBulletPoint("Definizione data model e database schema"),
      createBulletPoint("Integrazione API Microlog (RF3.1) e testing su dati mock"),

      // Sprint 3-4
      new Paragraph({
        children: [
          new TextRun({ text: "Sprint 3-4 (Settimane 5-8): ", bold: true, size: 22 }),
          new TextRun({ text: "Data Pipeline e Processing", size: 22 })
        ],
        spacing: { before: 280, after: 120 }
      }),
      createBulletPoint("Sviluppo modulo di acquisizione dati batch notturno (Modulo 1)"),
      createBulletPoint("Implementazione sistema di registrazione utente (tablet/totem) e associazione timestamp (Modulo 2)"),
      createBulletPoint("Normalizzazione e processing dati comportamentali (RF3.2, RF3.3, RF3.4 - Modulo 3)"),
      createBulletPoint("Storico comportamentale e correlazione dati (RF4.1, RF4.3)"),
      createBulletPoint("Testing su installazione reale dal 1° dicembre 2025"),

      // Sprint 5-6
      new Paragraph({
        children: [
          new TextRun({ text: "Sprint 5-6 (Settimane 9-12): ", bold: true, size: 22 }),
          new TextRun({ text: "AI Engine e Carrello Virtuale", size: 22 })
        ],
        spacing: { before: 280, after: 120 }
      }),
      createBulletPoint("Sviluppo algoritmi di analisi comportamentale con AI/ML (RF4.2)"),
      createBulletPoint("Implementazione generatore carrello virtuale (RF5.1, RF5.2 - Modulo 4)"),
      createBulletPoint("Testing e ottimizzazione algoritmi su dati reali"),
      createBulletPoint("Implementazione accesso carrello (RF5.4)"),

      // Sprint 7-8
      new Paragraph({
        children: [
          new TextRun({ text: "Sprint 7-8 (Settimane 13-16): ", bold: true, size: 22 }),
          new TextRun({ text: "Targeting e Advertising", size: 22 })
        ],
        spacing: { before: 280, after: 120 }
      }),
      createBulletPoint("Sviluppo targeting engine basato su AI e LLM (Modulo 5)"),
      createBulletPoint("Implementazione attivazione campagne email e social ads (Modulo 6)"),
      createBulletPoint("Integrazione con piattaforme advertising (Meta Ads, Google Ads)"),
      createBulletPoint("Testing end-to-end su campagne pilota"),

      // Sprint 9-10
      new Paragraph({
        children: [
          new TextRun({ text: "Sprint 9-10 (Settimane 17-20): ", bold: true, size: 22 }),
          new TextRun({ text: "Finalizzazione e Go-Live", size: 22 })
        ],
        spacing: { before: 280, after: 120 }
      }),
      createBulletPoint("Sviluppo dashboard responsive per visualizzazione metriche e performance"),
      createBulletPoint("Testing UAT (User Acceptance Testing) con team NOT"),
      createBulletPoint("Ottimizzazioni performance e correzione bug critici"),
      createBulletPoint("Training team NOT e documentazione operativa"),
      createBulletPoint("Go-live ufficiale e monitoraggio post-lancio"),

      new Paragraph({ spacing: { after: 240 } }),

      createSubsectionTitle("4.3 Timeline Complessiva"),

      // Timeline table
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        columnWidths: [2800, 3280, 3280],
        borders: tableBorders,
        rows: [
          new TableRow({
            children: [
              new TableCell({
                shading: { fill: PRIMARY_COLOR, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 2800, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "Fase", bold: true, size: 22, color: "FFFFFF" })
                    ]
                  })
                ]
              }),
              new TableCell({
                shading: { fill: PRIMARY_COLOR, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 3280, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "Durata", bold: true, size: 22, color: "FFFFFF" })
                    ]
                  })
                ]
              }),
              new TableCell({
                shading: { fill: PRIMARY_COLOR, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 3280, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "Milestone", bold: true, size: 22, color: "FFFFFF" })
                    ]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders: tableBorders,
                width: { size: 2800, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "Foundation", size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                borders: tableBorders,
                width: { size: 3280, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "4 settimane", size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                borders: tableBorders,
                width: { size: 3280, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "Architettura operativa + Integrazione Microlog", size: 22 })
                    ]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 2800, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "Data Pipeline", size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 3280, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "4 settimane", size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 3280, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "Processing dati comportamentali validato", size: 22 })
                    ]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders: tableBorders,
                width: { size: 2800, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "AI Engine", size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                borders: tableBorders,
                width: { size: 3280, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "4 settimane", size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                borders: tableBorders,
                width: { size: 3280, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "Carrello virtuale generato con AI", size: 22 })
                    ]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 2800, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "Targeting & Ads", size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 3280, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "4 settimane", size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 3280, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "Campagne automatiche attive", size: 22 })
                    ]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders: tableBorders,
                width: { size: 2800, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "Go-Live", size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                borders: tableBorders,
                width: { size: 3280, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "4 settimane", size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                borders: tableBorders,
                width: { size: 3280, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "Sistema production-ready", size: 22 })
                    ]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                shading: { fill: ACCENT_COLOR, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 2800, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "TOTALE", bold: true, size: 22, color: "FFFFFF" })
                    ]
                  })
                ]
              }),
              new TableCell({
                shading: { fill: ACCENT_COLOR, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 3280, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "20 settimane (~5 mesi)", bold: true, size: 22, color: "FFFFFF" })
                    ]
                  })
                ]
              }),
              new TableCell({
                shading: { fill: ACCENT_COLOR, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 3280, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "MVP operativo e testato", bold: true, size: 22, color: "FFFFFF" })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      }),

      new Paragraph({ children: [new PageBreak()] }),

      // ====== OBIETTIVI E KPI ======
      createSectionTitle("5. Obiettivi e KPI di Successo"),

      createSubsectionTitle("5.1 Obiettivi Business"),

      createBulletPoint("Validare il modello tecnico-funzionale su installazione reale entro Q2 2026"),
      createBulletPoint("Creare 1-2 case study utilizzabili per acquisizione clienti nel 2026"),
      createBulletPoint("Generare un ROI positivo entro 6 mesi dal go-live attraverso conversioni incrementali"),
      createBulletPoint("Posizionare NOT come operatore innovativo nel temporary retail con tecnologia proprietaria"),
      createBulletPoint("Costruire le basi per nuovi modelli di business (licensing, SaaS, revenue share con brand)"),

      new Paragraph({ spacing: { after: 240 } }),

      createSubsectionTitle("5.2 Metriche di Performance"),

      new Paragraph({
        children: [
          new TextRun({ text: "Metriche Tecniche:", bold: true, size: 22, color: PRIMARY_COLOR })
        ],
        spacing: { before: 200, after: 120 }
      }),
      createBulletPoint("Tasso di correlazione timestamp-comportamento > 95%"),
      createBulletPoint("Accuratezza del carrello virtuale (validato su acquisti successivi) > 70%"),
      createBulletPoint("Latenza di processing dati < 24 ore dall&#x2019;acquisizione"),
      createBulletPoint("Uptime sistema > 99%"),

      new Paragraph({
        children: [
          new TextRun({ text: "Metriche Marketing:", bold: true, size: 22, color: PRIMARY_COLOR })
        ],
        spacing: { before: 200, after: 120 }
      }),
      createBulletPoint("Tasso di apertura email > 25% (benchmark e-commerce 20-22%)"),
      createBulletPoint("Click-through rate (CTR) > 4% (benchmark 2-3%)"),
      createBulletPoint("Tasso di conversione da remarketing > 5% (benchmark 3-7%)"),
      createBulletPoint("Valore medio carrello recuperato > €50"),

      new Paragraph({
        children: [
          new TextRun({ text: "Metriche Business:", bold: true, size: 22, color: PRIMARY_COLOR })
        ],
        spacing: { before: 200, after: 120 }
      }),
      createBulletPoint("Incremento conversioni complessive pop-up > 10%"),
      createBulletPoint("Riduzione costo acquisizione cliente (CAC) > 15%"),
      createBulletPoint("Customer Lifetime Value (CLTV) aumentato del 20-30%"),

      new Paragraph({ spacing: { after: 240 } }),

      createSubsectionTitle("5.3 Valore Atteso per NOT"),

      createBodyText("Eye Cookies rappresenta un investimento strategico con ritorni su tre dimensioni:"),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [
          new TextRun({ text: "Revenue Diretta: ", bold: true, size: 22 }),
          new TextRun({ text: "Conversioni incrementali dai carrelli recuperati stimabili in €15-25K/mese per pop-up medio (assumendo 500 visitatori/settimana, 5% conversion rate, €60 valore medio ordine).", size: 22 })
        ],
        spacing: { after: 120 }
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [
          new TextRun({ text: "Nuovo Servizio Vendibile: ", bold: true, size: 22 }),
          new TextRun({ text: "Eye Cookies diventa un servizio premium che NOT può offrire ai brand clienti, con pricing stimato €5-8K/mese per pop-up (setup + gestione campagne + analytics).", size: 22 })
        ],
        spacing: { after: 120 }
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [
          new TextRun({ text: "Vantaggio Competitivo: ", bold: true, size: 22 }),
          new TextRun({ text: "Proprietà intellettuale e barriera all&#x2019;ingresso che differenzia NOT dai competitor, facilitando l&#x2019;acquisizione di nuovi clienti premium nel 2026-2027.", size: 22 })
        ],
        spacing: { after: 240 }
      }),

      new Paragraph({ children: [new PageBreak()] }),

      // ====== QUOTAZIONE ======
      createSectionTitle("6. Quotazione e Condizioni Commerciali"),

      createSubsectionTitle("6.1 Struttura della Proposta"),

      createBodyText("Lo sviluppo del MVP Eye Cookies è quotato a corpo, con un modello di pricing che riflette la complessità tecnica dei sei moduli funzionali e l&#x2019;utilizzo di tecnologie AI avanzate."),

      new Paragraph({ spacing: { after: 240 } }),

      createSubsectionTitle("6.2 Dettaglio Costi per Modulo"),

      // Pricing table
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        columnWidths: [4200, 2580, 2580],
        borders: tableBorders,
        rows: [
          new TableRow({
            children: [
              new TableCell({
                shading: { fill: PRIMARY_COLOR, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 4200, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "Modulo / Attività", bold: true, size: 22, color: "FFFFFF" })
                    ]
                  })
                ]
              }),
              new TableCell({
                shading: { fill: PRIMARY_COLOR, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 2580, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "Effort (gg)", bold: true, size: 22, color: "FFFFFF" })
                    ]
                  })
                ]
              }),
              new TableCell({
                shading: { fill: PRIMARY_COLOR, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 2580, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.RIGHT,
                    children: [
                      new TextRun({ text: "Costo (€)", bold: true, size: 22, color: "FFFFFF" })
                    ]
                  })
                ]
              })
            ]
          }),
          
          // Foundation
          new TableRow({
            children: [
              new TableCell({
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 4200, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "Foundation & Setup", bold: true, size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 2580, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "", size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 2580, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "", size: 22 })
                    ]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders: tableBorders,
                width: { size: 4200, type: WidthType.DXA },
                margins: { top: 120, bottom: 120, left: 320, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "• Architettura cloud e infrastruttura", size: 20 })
                    ]
                  })
                ]
              }),
              new TableCell({
                borders: tableBorders,
                width: { size: 2580, type: WidthType.DXA },
                margins: { top: 120, bottom: 120, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "5", size: 20 })
                    ]
                  })
                ]
              }),
              new TableCell({
                borders: tableBorders,
                width: { size: 2580, type: WidthType.DXA },
                margins: { top: 120, bottom: 120, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.RIGHT,
                    children: [
                      new TextRun({ text: "3.500", size: 20 })
                    ]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders: tableBorders,
                width: { size: 4200, type: WidthType.DXA },
                margins: { top: 120, bottom: 120, left: 320, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "• Autenticazione e gestione utenti (RF1)", size: 20 })
                    ]
                  })
                ]
              }),
              new TableCell({
                borders: tableBorders,
                width: { size: 2580, type: WidthType.DXA },
                margins: { top: 120, bottom: 120, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "8", size: 20 })
                    ]
                  })
                ]
              }),
              new TableCell({
                borders: tableBorders,
                width: { size: 2580, type: WidthType.DXA },
                margins: { top: 120, bottom: 120, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.RIGHT,
                    children: [
                      new TextRun({ text: "5.600", size: 20 })
                    ]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders: tableBorders,
                width: { size: 4200, type: WidthType.DXA },
                margins: { top: 120, bottom: 120, left: 320, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "• Multi-tenancy e organizzazione (RF2)", size: 20 })
                    ]
                  })
                ]
              }),
              new TableCell({
                borders: tableBorders,
                width: { size: 2580, type: WidthType.DXA },
                margins: { top: 120, bottom: 120, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "7", size: 20 })
                    ]
                  })
                ]
              }),
              new TableCell({
                borders: tableBorders,
                width: { size: 2580, type: WidthType.DXA },
                margins: { top: 120, bottom: 120, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.RIGHT,
                    children: [
                      new TextRun({ text: "4.900", size: 20 })
                    ]
                  })
                ]
              })
            ]
          }),

          // Modulo 1
          new TableRow({
            children: [
              new TableCell({
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 4200, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "Modulo 1: Nightly Data Fetch (RF3.1)", bold: true, size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 2580, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "6", bold: true, size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 2580, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.RIGHT,
                    children: [
                      new TextRun({ text: "4.200", bold: true, size: 22 })
                    ]
                  })
                ]
              })
            ]
          }),

          // Modulo 2
          new TableRow({
            children: [
              new TableCell({
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 4200, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "Modulo 2: Registration-Timestamp (RF4.1)", bold: true, size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 2580, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "8", bold: true, size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 2580, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.RIGHT,
                    children: [
                      new TextRun({ text: "5.600", bold: true, size: 22 })
                    ]
                  })
                ]
              })
            ]
          }),

          // Modulo 3
          new TableRow({
            children: [
              new TableCell({
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 4200, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "Modulo 3: Data Processing (RF3.2-3.4, RF4.3)", bold: true, size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 2580, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "10", bold: true, size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 2580, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.RIGHT,
                    children: [
                      new TextRun({ text: "7.000", bold: true, size: 22 })
                    ]
                  })
                ]
              })
            ]
          }),

          // Modulo 4
          new TableRow({
            children: [
              new TableCell({
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 4200, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "Modulo 4: Virtual Cart AI (RF4.2, RF5.1-5.2)", bold: true, size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 2580, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "12", bold: true, size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 2580, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.RIGHT,
                    children: [
                      new TextRun({ text: "8.400", bold: true, size: 22 })
                    ]
                  })
                ]
              })
            ]
          }),

          // Modulo 5
          new TableRow({
            children: [
              new TableCell({
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 4200, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "Modulo 5: AI Targeting Engine", bold: true, size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 2580, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "10", bold: true, size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 2580, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.RIGHT,
                    children: [
                      new TextRun({ text: "7.000", bold: true, size: 22 })
                    ]
                  })
                ]
              })
            ]
          }),

          // Modulo 6
          new TableRow({
            children: [
              new TableCell({
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 4200, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "Modulo 6: Advertising Activation (RF5.4)", bold: true, size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 2580, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "9", bold: true, size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 2580, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.RIGHT,
                    children: [
                      new TextRun({ text: "6.300", bold: true, size: 22 })
                    ]
                  })
                ]
              })
            ]
          }),

          // Dashboard e UAT
          new TableRow({
            children: [
              new TableCell({
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 4200, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "Dashboard Responsive & Analytics", bold: true, size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 2580, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "8", bold: true, size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 2580, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.RIGHT,
                    children: [
                      new TextRun({ text: "5.600", bold: true, size: 22 })
                    ]
                  })
                ]
              })
            ]
          }),

          new TableRow({
            children: [
              new TableCell({
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 4200, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "Testing, UAT e Documentazione", bold: true, size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 2580, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "7", bold: true, size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 2580, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.RIGHT,
                    children: [
                      new TextRun({ text: "4.900", bold: true, size: 22 })
                    ]
                  })
                ]
              })
            ]
          }),

          // Project Management
          new TableRow({
            children: [
              new TableCell({
                borders: tableBorders,
                width: { size: 4200, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "Project Management & Coordinamento", size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                borders: tableBorders,
                width: { size: 2580, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "10", size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                borders: tableBorders,
                width: { size: 2580, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.RIGHT,
                    children: [
                      new TextRun({ text: "7.000", size: 22 })
                    ]
                  })
                ]
              })
            ]
          }),

          // SUBTOTALE
          new TableRow({
            children: [
              new TableCell({
                shading: { fill: MEDIUM_GRAY, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 4200, type: WidthType.DXA },
                margins: { top: 160, bottom: 160, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "SUBTOTALE SVILUPPO", bold: true, size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                shading: { fill: MEDIUM_GRAY, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 2580, type: WidthType.DXA },
                margins: { top: 160, bottom: 160, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "100", bold: true, size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                shading: { fill: MEDIUM_GRAY, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 2580, type: WidthType.DXA },
                margins: { top: 160, bottom: 160, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.RIGHT,
                    children: [
                      new TextRun({ text: "70.000", bold: true, size: 22 })
                    ]
                  })
                ]
              })
            ]
          }),

          // Infrastruttura
          new TableRow({
            children: [
              new TableCell({
                borders: tableBorders,
                width: { size: 4200, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "Infrastruttura Cloud (6 mesi)", size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                borders: tableBorders,
                width: { size: 2580, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "—", size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                borders: tableBorders,
                width: { size: 2580, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.RIGHT,
                    children: [
                      new TextRun({ text: "3.600", size: 22 })
                    ]
                  })
                ]
              })
            ]
          }),

          new TableRow({
            children: [
              new TableCell({
                borders: tableBorders,
                width: { size: 4200, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "Servizi AI/ML (LLM API, processing)", size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                borders: tableBorders,
                width: { size: 2580, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "—", size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                borders: tableBorders,
                width: { size: 2580, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.RIGHT,
                    children: [
                      new TextRun({ text: "2.400", size: 22 })
                    ]
                  })
                ]
              })
            ]
          }),

          // TOTALE
          new TableRow({
            children: [
              new TableCell({
                shading: { fill: ACCENT_COLOR, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 4200, type: WidthType.DXA },
                margins: { top: 180, bottom: 180, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "TOTALE PROGETTO MVP", bold: true, size: 24, color: "FFFFFF" })
                    ]
                  })
                ]
              }),
              new TableCell({
                shading: { fill: ACCENT_COLOR, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 2580, type: WidthType.DXA },
                margins: { top: 180, bottom: 180, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "100 gg", bold: true, size: 24, color: "FFFFFF" })
                    ]
                  })
                ]
              }),
              new TableCell({
                shading: { fill: ACCENT_COLOR, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 2580, type: WidthType.DXA },
                margins: { top: 180, bottom: 180, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.RIGHT,
                    children: [
                      new TextRun({ text: "€ 76.000", bold: true, size: 24, color: "FFFFFF" })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      }),

      new Paragraph({ children: [new PageBreak()] }),

      createSubsectionTitle("6.3 Razionale dei Costi"),

      createBodyText("La quotazione riflette:"),

      createBulletPoint("Complessità tecnica elevata: integrazione API Microlog, sviluppo algoritmi AI proprietari, architettura multi-tenant scalabile"),
      createBulletPoint("Team senior: sviluppatori full-stack, data scientist, AI engineer, project manager dedicato"),
      createBulletPoint("Tecnologie all&#x2019;avanguardia: LLM (Large Language Models), machine learning, sistemi di raccomandazione, targeting automatizzato"),
      createBulletPoint("Deliverable completi: codice sorgente, documentazione tecnica, training team NOT, assistenza post-lancio"),
      createBulletPoint("Proprietà intellettuale: codice e algoritmi di proprietà esclusiva NOT al termine del progetto"),

      new Paragraph({ spacing: { after: 240 } }),

      createSubsectionTitle("6.4 Modalità di Pagamento"),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [
          new TextRun({ text: "30% all&#x2019;accettazione della proposta e firma del contratto (€22.800)", size: 22 })
        ],
        spacing: { after: 120 }
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [
          new TextRun({ text: "30% al completamento Sprint 4 (Data Pipeline operativa - €22.800)", size: 22 })
        ],
        spacing: { after: 120 }
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [
          new TextRun({ text: "30% al completamento Sprint 8 (Targeting e Advertising attivi - €22.800)", size: 22 })
        ],
        spacing: { after: 120 }
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [
          new TextRun({ text: "10% al go-live e consegna finale (Sistema production-ready - €7.600)", size: 22 })
        ],
        spacing: { after: 240 }
      }),

      createSubsectionTitle("6.5 Condizioni Generali"),

      createBulletPoint("Validità offerta: 30 giorni dalla data di emissione"),
      createBulletPoint("Tempi di consegna: 20 settimane (circa 5 mesi) dalla firma del contratto"),
      createBulletPoint("Proprietà intellettuale: codice sorgente e algoritmi di proprietà esclusiva NOT al termine del progetto"),
      createBulletPoint("Garanzia: 3 mesi di assistenza post-lancio inclusa (bug fixing e ottimizzazioni minori)"),
      createBulletPoint("Licenze software: open source o già disponibili, nessun costo aggiuntivo"),
      createBulletPoint("Costi infrastruttura post-MVP: stimati €600-800/mese (cloud + AI services) a carico NOT"),

      new Paragraph({ children: [new PageBreak()] }),

      // ====== IMPATTO SUL BUSINESS ======
      createSectionTitle("7. Impatto sul Business NOT"),

      createSubsectionTitle("7.1 Posizionamento Strategico"),

      createBodyText("Eye Cookies trasforma il posizionamento competitivo di NOT su tre dimensioni:"),

      new Paragraph({
        children: [
          new TextRun({ text: "1. Da Operatore Logistico a Partner Strategico", bold: true, size: 24, color: PRIMARY_COLOR })
        ],
        spacing: { before: 200, after: 120 }
      }),
      createBodyText("Attualmente NOT è percepito dai brand come fornitore operativo (gestione spazi, staff, logistica). Con Eye Cookies, l&#x2019;offerta si estende a servizi ad alto valore: data analytics, AI-powered marketing, remarketing automatizzato. Questo eleva il ruolo di NOT a consulente strategico per la crescita dei brand nel retail fisico."),

      new Paragraph({
        children: [
          new TextRun({ text: "2. Differenziazione da Competitor", bold: true, size: 24, color: PRIMARY_COLOR })
        ],
        spacing: { before: 240, after: 120 }
      }),
      createBodyText("I principali competitor (Pardgroup, CPM Italy, Freeway) offrono digital marketing e analytics ma non dispongono di tecnologia proprietaria per il tracciamento in-store. Eye Cookies crea una barriera all&#x2019;ingresso basata su:"),
      createBulletPoint("Proprietà intellettuale (algoritmi AI proprietari)"),
      createBulletPoint("Integrazione profonda con infrastruttura Microlog"),
      createBulletPoint("Know-how specifico su temporary retail + behavioral analytics"),

      new Paragraph({
        children: [
          new TextRun({ text: "3. Scalabilità del Modello di Business", bold: true, size: 24, color: PRIMARY_COLOR })
        ],
        spacing: { before: 240, after: 120 }
      }),
      createBodyText("Eye Cookies abilita nuovi modelli di revenue oltre al fee-per-store tradizionale:"),
      createBulletPoint("Licensing tecnologico ad altri operatori di temporary retail"),
      createBulletPoint("SaaS model per brand con multipli pop-up gestiti in autonomia"),
      createBulletPoint("Revenue share sulle conversioni generate dal remarketing"),
      createBulletPoint("Consulenza strategica su data-driven retail optimization"),

      new Paragraph({ spacing: { after: 240 } }),

      createSubsectionTitle("7.2 Proiezioni Economiche"),

      new Paragraph({
        children: [
          new TextRun({ text: "Scenario Conservativo (12 mesi post-lancio):", bold: true, size: 22, color: PRIMARY_COLOR })
        ],
        spacing: { before: 200, after: 160 }
      }),

      // Economic projections table
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        columnWidths: [5580, 3780],
        borders: tableBorders,
        rows: [
          new TableRow({
            children: [
              new TableCell({
                shading: { fill: PRIMARY_COLOR, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 5580, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "Voce", bold: true, size: 22, color: "FFFFFF" })
                    ]
                  })
                ]
              }),
              new TableCell({
                shading: { fill: PRIMARY_COLOR, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 3780, type: WidthType.DXA },
                margins: { top: 140, bottom: 140, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.RIGHT,
                    children: [
                      new TextRun({ text: "Valore (€/anno)", bold: true, size: 22, color: "FFFFFF" })
                    ]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders: tableBorders,
                width: { size: 5580, type: WidthType.DXA },
                margins: { top: 120, bottom: 120, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "Clienti Vendita Diretta acquisiti (2-3)", size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                borders: tableBorders,
                width: { size: 3780, type: WidthType.DXA },
                margins: { top: 120, bottom: 120, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.RIGHT,
                    children: [
                      new TextRun({ text: "720.000 – 1.080.000", size: 22 })
                    ]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 5580, type: WidthType.DXA },
                margins: { top: 120, bottom: 120, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "Clienti Awareness acquisiti (1)", size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 3780, type: WidthType.DXA },
                margins: { top: 120, bottom: 120, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.RIGHT,
                    children: [
                      new TextRun({ text: "4.000.000 – 4.500.000", size: 22 })
                    ]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders: tableBorders,
                width: { size: 5580, type: WidthType.DXA },
                margins: { top: 120, bottom: 120, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "Revenue da servizio Eye Cookies (6-8K/mese x 10 pop-up)", size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                borders: tableBorders,
                width: { size: 3780, type: WidthType.DXA },
                margins: { top: 120, bottom: 120, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.RIGHT,
                    children: [
                      new TextRun({ text: "720.000 – 960.000", size: 22 })
                    ]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 5580, type: WidthType.DXA },
                margins: { top: 120, bottom: 120, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "Conversioni incrementali da remarketing (stimato)", size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 3780, type: WidthType.DXA },
                margins: { top: 120, bottom: 120, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.RIGHT,
                    children: [
                      new TextRun({ text: "180.000 – 300.000", size: 22 })
                    ]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                shading: { fill: ACCENT_COLOR, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 5580, type: WidthType.DXA },
                margins: { top: 160, bottom: 160, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "TOTALE IMPATTO REVENUE 12 MESI", bold: true, size: 22, color: "FFFFFF" })
                    ]
                  })
                ]
              }),
              new TableCell({
                shading: { fill: ACCENT_COLOR, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 3780, type: WidthType.DXA },
                margins: { top: 160, bottom: 160, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.RIGHT,
                    children: [
                      new TextRun({ text: "€ 5.620.000 – 6.840.000", bold: true, size: 22, color: "FFFFFF" })
                    ]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                shading: { fill: PRIMARY_COLOR, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 5580, type: WidthType.DXA },
                margins: { top: 160, bottom: 160, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "INVESTIMENTO EYE COOKIES MVP", bold: true, size: 22, color: "FFFFFF" })
                    ]
                  })
                ]
              }),
              new TableCell({
                shading: { fill: PRIMARY_COLOR, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 3780, type: WidthType.DXA },
                margins: { top: 160, bottom: 160, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.RIGHT,
                    children: [
                      new TextRun({ text: "€ 76.000", bold: true, size: 22, color: "FFFFFF" })
                    ]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                shading: { fill: "228B22", type: ShadingType.CLEAR }, // Verde scuro
                borders: tableBorders,
                width: { size: 5580, type: WidthType.DXA },
                margins: { top: 160, bottom: 160, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "ROI 12 MESI", bold: true, size: 24, color: "FFFFFF" })
                    ]
                  })
                ]
              }),
              new TableCell({
                shading: { fill: "228B22", type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 3780, type: WidthType.DXA },
                margins: { top: 160, bottom: 160, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.RIGHT,
                    children: [
                      new TextRun({ text: "7.295% – 8.900%", bold: true, size: 24, color: "FFFFFF" })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      }),

      new Paragraph({ spacing: { after: 300 } }),

      createHighlightBox("Nota: Le proiezioni si basano sulle stime conservative presentate nel Business Case HeyAI (Analisi e Proposta Servizi 14/01/2026). I numeri effettivi dipenderanno dall&#x2019;execution commerciale e dall&#x2019;efficacia delle campagne di remarketing."),

      new Paragraph({ spacing: { after: 240 } }),

      createSubsectionTitle("7.3 Benefici Intangibili"),

      createBodyText("Oltre ai ritorni economici diretti, Eye Cookies genera valore su:"),

      createBulletPoint("Brand Reputation: posizionamento come operatore innovativo e tech-forward nel temporary retail italiano"),
      createBulletPoint("Case Study Utilizz abile: materiale concreto per pitch commerciali e PR (pubblicazioni settoriali, eventi, conferenze)"),
      createBulletPoint("Riduzione Dipendenza da BAT: diversificazione clienti e revenue streams"),
      createBulletPoint("Attraction Talenti: capacità di attrarre professionisti qualificati interessati a progetti innovativi"),
      createBulletPoint("Partnership Strategiche: apertura a collaborazioni con tech companies, centri commerciali, brand internazionali"),

      new Paragraph({ children: [new PageBreak()] }),

      // ====== PROSSIMI PASSI ======
      createSectionTitle("8. Prossimi Passi"),

      createSubsectionTitle("8.1 Iter Procedurale"),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [
          new TextRun({ text: "Revisione proposta e Q&A: ", bold: true, size: 22 }),
          new TextRun({ text: "Entro 5 giorni lavorativi dalla ricezione, meeting di allineamento per chiarimenti tecnici e commerciali", size: 22 })
        ],
        spacing: { after: 140 }
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [
          new TextRun({ text: "Accettazione formale: ", bold: true, size: 22 }),
          new TextRun({ text: "Firma del contratto e primo pagamento (30%)", size: 22 })
        ],
        spacing: { after: 140 }
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [
          new TextRun({ text: "Kick-off progetto: ", bold: true, size: 22 }),
          new TextRun({ text: "Entro 1 settimana dalla firma, meeting operativo con team NOT e HeyAI per definire dettagli esecutivi", size: 22 })
        ],
        spacing: { after: 140 }
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [
          new TextRun({ text: "Setup infrastruttura: ", bold: true, size: 22 }),
          new TextRun({ text: "Provisioning cloud, accessi Microlog, configurazione ambienti dev/staging/production", size: 22 })
        ],
        spacing: { after: 140 }
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [
          new TextRun({ text: "Sviluppo iterativo: ", bold: true, size: 22 }),
          new TextRun({ text: "Sprint bisettimanali con demo e feedback continui", size: 22 })
        ],
        spacing: { after: 240 }
      }),

      createSubsectionTitle("8.2 Contatti e Riferimenti"),

      createBodyText("Per qualsiasi chiarimento o richiesta di approfondimento, il referente HeyAI per questo progetto è:"),

      new Paragraph({ spacing: { after: 200 } }),

      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: tableBorders,
        rows: [
          new TableRow({
            children: [
              new TableCell({
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 3120, type: WidthType.DXA },
                margins: { top: 160, bottom: 160, left: 200, right: 200 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "Nome:", bold: true, size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                borders: tableBorders,
                width: { size: 6240, type: WidthType.DXA },
                margins: { top: 160, bottom: 160, left: 200, right: 200 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "Carlo Sanvoisin", size: 22 })
                    ]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 3120, type: WidthType.DXA },
                margins: { top: 160, bottom: 160, left: 200, right: 200 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "Ruolo:", bold: true, size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                borders: tableBorders,
                width: { size: 6240, type: WidthType.DXA },
                margins: { top: 160, bottom: 160, left: 200, right: 200 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "Co-Founder & Chief Strategy Officer", size: 22 })
                    ]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 3120, type: WidthType.DXA },
                margins: { top: 160, bottom: 160, left: 200, right: 200 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "Email:", bold: true, size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                borders: tableBorders,
                width: { size: 6240, type: WidthType.DXA },
                margins: { top: 160, bottom: 160, left: 200, right: 200 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "c.sanvoisin@heyaidigital.it", size: 22 })
                    ]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
                borders: tableBorders,
                width: { size: 3120, type: WidthType.DXA },
                margins: { top: 160, bottom: 160, left: 200, right: 200 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "Telefono:", bold: true, size: 22 })
                    ]
                  })
                ]
              }),
              new TableCell({
                borders: tableBorders,
                width: { size: 6240, type: WidthType.DXA },
                margins: { top: 160, bottom: 160, left: 200, right: 200 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "+39 393 2527762", size: 22 })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      }),

      new Paragraph({ spacing: { after: 400 } }),

      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
          new TextRun({
            text: "* * *",
            size: 28,
            color: ACCENT_COLOR
          })
        ],
        spacing: { before: 200, after: 400 }
      }),

      createBodyText("Ringraziamo Noloop on Trade per la fiducia riposta in HeyAI e restiamo a disposizione per ogni ulteriore chiarimento. Siamo entusiasti di contribuire alla trasformazione digitale di NOT e di costruire insieme Eye Cookies, uno strumento innovativo destinato a ridefinire il temporary retail in Italia."),

      new Paragraph({ spacing: { after: 200 } }),

      new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [
          new TextRun({
            text: "Il Team HeyAI",
            size: 24,
            bold: true,
            color: PRIMARY_COLOR
          })
        ]
      })
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/home/claude/Quotazione_Eye_Cookies_MVP.docx", buffer);
  console.log("Documento creato con successo!");
});