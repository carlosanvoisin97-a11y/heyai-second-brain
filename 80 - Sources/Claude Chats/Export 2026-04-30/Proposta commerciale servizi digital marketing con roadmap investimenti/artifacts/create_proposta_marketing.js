const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, 
        AlignmentType, LevelFormat, BorderStyle, WidthType, ShadingType,
        HeadingLevel, PageBreak } = require('docx');
const fs = require('fs');

// Configurazione bordi tabella
const border = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const borders = { top: border, bottom: border, left: border, right: border };
const noBorder = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
const noBorders = { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder };

// Colori
const headerBg = "1E3A5F";  // Navy
const lightBg = "F5F7FA";   // Light gray

const doc = new Document({
    styles: {
        default: { 
            document: { 
                run: { font: "Arial", size: 22 } // 11pt
            } 
        },
        paragraphStyles: [
            { 
                id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
                run: { size: 32, bold: true, font: "Arial", color: "1E3A5F" },
                paragraph: { spacing: { before: 400, after: 200 }, outlineLevel: 0 }
            },
            { 
                id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
                run: { size: 26, bold: true, font: "Arial", color: "1E3A5F" },
                paragraph: { spacing: { before: 300, after: 150 }, outlineLevel: 1 }
            },
            { 
                id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
                run: { size: 24, bold: true, font: "Arial", color: "333333" },
                paragraph: { spacing: { before: 200, after: 100 }, outlineLevel: 2 }
            },
        ]
    },
    numbering: {
        config: [
            {
                reference: "bullets",
                levels: [{
                    level: 0,
                    format: LevelFormat.BULLET,
                    text: "•",
                    alignment: AlignmentType.LEFT,
                    style: { paragraph: { indent: { left: 720, hanging: 360 } } }
                }]
            },
        ]
    },
    sections: [{
        properties: {
            page: {
                size: { width: 11906, height: 16838 }, // A4
                margin: { top: 1134, right: 1134, bottom: 1134, left: 1134 } // ~2cm margins
            }
        },
        children: [
            // TITOLO
            new Paragraph({
                heading: HeadingLevel.HEADING_1,
                children: [
                    new TextRun({ text: "Proposta di Investimento: ", bold: true }),
                    new TextRun({ text: "Servizi di Digital Marketing per Pop-Up Store", bold: true })
                ]
            }),

            // 1. EXECUTIVE SUMMARY
            new Paragraph({
                heading: HeadingLevel.HEADING_2,
                children: [new TextRun({ text: "1. Executive Summary" })]
            }),
            new Paragraph({
                spacing: { after: 120 },
                children: [
                    new TextRun("NOT offre ai brand internazionali un servizio full-service per lanciare pop-up store nei centri commerciali italiani. Per massimizzare il ritorno di ogni attivazione, i brand hanno bisogno di "),
                    new TextRun({ text: "visibilità digitale prima, durante e dopo l'apertura.", bold: true })
                ]
            }),
            new Paragraph({
                spacing: { after: 120 },
                children: [
                    new TextRun("Questa proposta presenta "),
                    new TextRun({ text: "tre pacchetti modulari di Digital Marketing", bold: true }),
                    new TextRun(" pensati per supportare il lancio e la gestione continuativa dei pop-up store dei clienti NOT.")
                ]
            }),
            new Paragraph({
                spacing: { after: 120 },
                children: [
                    new TextRun("I servizi coprono l'intero funnel: dalla "),
                    new TextRun({ text: "creazione di contenuti social autentici", bold: true }),
                    new TextRun(" con riprese in loco, alle "),
                    new TextRun({ text: "campagne advertising geo-targetizzate", bold: true }),
                    new TextRun(" per portare traffico al punto vendita, fino alla "),
                    new TextRun({ text: "produzione di materiali grafici", bold: true }),
                    new TextRun(" per l'allestimento fisico.")
                ]
            }),
            new Paragraph({
                spacing: { after: 200 },
                children: [
                    new TextRun({ text: "L'obiettivo: ", bold: true }),
                    new TextRun("trasformare ogni pop-up in un'esperienza digitale che genera awareness, traffico e conversioni misurabili.")
                ]
            }),

            // 2. SERVIZI
            new Paragraph({
                heading: HeadingLevel.HEADING_2,
                children: [new TextRun({ text: "2. Servizi" })]
            }),

            // 2.0 STRATEGIC ANALYSIS
            new Paragraph({
                heading: HeadingLevel.HEADING_3,
                children: [new TextRun({ text: "2.0 Strategic Analysis (Setup Iniziale)" })]
            }),
            new Paragraph({
                spacing: { after: 120 },
                children: [
                    new TextRun({ text: "Obiettivo: ", bold: true }),
                    new TextRun("Analizzare il brand, il mercato e i competitor per costruire una strategia di lancio personalizzata.")
                ]
            }),

            // Tabella Strategic Analysis
            new Table({
                width: { size: 9638, type: WidthType.DXA },
                columnWidths: [9638],
                rows: [
                    new TableRow({
                        children: [
                            new TableCell({
                                borders,
                                width: { size: 9638, type: WidthType.DXA },
                                shading: { fill: headerBg, type: ShadingType.CLEAR },
                                margins: { top: 100, bottom: 100, left: 150, right: 150 },
                                children: [new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [new TextRun({ text: "STRATEGIC ANALYSIS", bold: true, color: "FFFFFF", size: 24 })]
                                })]
                            })
                        ]
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                borders,
                                width: { size: 9638, type: WidthType.DXA },
                                margins: { top: 100, bottom: 100, left: 150, right: 150 },
                                children: [
                                    new Paragraph({
                                        alignment: AlignmentType.CENTER,
                                        spacing: { after: 60 },
                                        children: [
                                            new TextRun({ text: "€ 900,00", bold: true, size: 28 })
                                        ]
                                    }),
                                    new Paragraph({
                                        alignment: AlignmentType.CENTER,
                                        children: [new TextRun({ text: "(oltre IVA) — Una Tantum", size: 20, italics: true })]
                                    })
                                ]
                            })
                        ]
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                borders,
                                width: { size: 9638, type: WidthType.DXA },
                                shading: { fill: lightBg, type: ShadingType.CLEAR },
                                margins: { top: 100, bottom: 100, left: 150, right: 150 },
                                children: [
                                    new Paragraph({
                                        spacing: { after: 100 },
                                        children: [new TextRun({ text: "Cosa è incluso:", bold: true })]
                                    }),
                                    new Paragraph({
                                        numbering: { reference: "bullets", level: 0 },
                                        children: [new TextRun({ text: "Brand Analysis: ", bold: true }), new TextRun("Deep dive su identità, valori, posizionamento e target audience")]
                                    }),
                                    new Paragraph({
                                        numbering: { reference: "bullets", level: 0 },
                                        children: [new TextRun({ text: "Market Context: ", bold: true }), new TextRun("Analisi del mercato italiano, comportamento consumatori e landscape retail")]
                                    }),
                                    new Paragraph({
                                        numbering: { reference: "bullets", level: 0 },
                                        children: [new TextRun({ text: "Competitor Mapping: ", bold: true }), new TextRun("Analisi competitor diretti e indiretti, gap di posizionamento")]
                                    }),
                                    new Paragraph({
                                        numbering: { reference: "bullets", level: 0 },
                                        children: [new TextRun({ text: "Trend Analysis: ", bold: true }), new TextRun("Trend di settore, social media e formati contenuto performanti")]
                                    }),
                                    new Paragraph({
                                        numbering: { reference: "bullets", level: 0 },
                                        spacing: { after: 150 },
                                        children: [new TextRun({ text: "Custom Strategy: ", bold: true }), new TextRun("Strategia di lancio personalizzata con channel mix, messaggi chiave e KPI")]
                                    }),
                                    new Paragraph({
                                        spacing: { before: 100 },
                                        children: [new TextRun({ text: "Nota: ", bold: true, italics: true }), new TextRun({ text: "La Strategic Analysis è obbligatoria e propedeutica all'attivazione di qualsiasi pacchetto.", italics: true })]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),

            new Paragraph({ children: [] }), // Spacer

            // 2.1 PACCHETTO STARTER
            new Paragraph({
                heading: HeadingLevel.HEADING_3,
                children: [new TextRun({ text: "2.1 Pacchetto STARTER" })]
            }),
            new Paragraph({
                spacing: { after: 120 },
                children: [
                    new TextRun({ text: "Per chi è: ", bold: true }),
                    new TextRun("Brand che vogliono testare il mercato italiano con un investimento contenuto. Copertura essenziale su Instagram con contenuti autentici dal pop-up.")
                ]
            }),

            // Tabella Starter
            new Table({
                width: { size: 9638, type: WidthType.DXA },
                columnWidths: [9638],
                rows: [
                    new TableRow({
                        children: [
                            new TableCell({
                                borders,
                                width: { size: 9638, type: WidthType.DXA },
                                shading: { fill: headerBg, type: ShadingType.CLEAR },
                                margins: { top: 100, bottom: 100, left: 150, right: 150 },
                                children: [new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [new TextRun({ text: "PACCHETTO STARTER", bold: true, color: "FFFFFF", size: 24 })]
                                })]
                            })
                        ]
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                borders,
                                width: { size: 9638, type: WidthType.DXA },
                                margins: { top: 100, bottom: 100, left: 150, right: 150 },
                                children: [
                                    new Paragraph({
                                        alignment: AlignmentType.CENTER,
                                        spacing: { after: 60 },
                                        children: [new TextRun({ text: "€ 2.600,00 / mese", bold: true, size: 28 })]
                                    }),
                                    new Paragraph({
                                        alignment: AlignmentType.CENTER,
                                        children: [new TextRun({ text: "(oltre IVA) + spese extra", size: 20, italics: true })]
                                    })
                                ]
                            })
                        ]
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                borders,
                                width: { size: 9638, type: WidthType.DXA },
                                shading: { fill: lightBg, type: ShadingType.CLEAR },
                                margins: { top: 100, bottom: 100, left: 150, right: 150 },
                                children: [
                                    new Paragraph({
                                        spacing: { after: 100 },
                                        children: [new TextRun({ text: "Cosa è incluso:", bold: true })]
                                    }),
                                    new Paragraph({
                                        numbering: { reference: "bullets", level: 0 },
                                        children: [new TextRun({ text: "Social Media (Instagram): ", bold: true }), new TextRun("10 post/mese, gestione community, stories")]
                                    }),
                                    new Paragraph({
                                        numbering: { reference: "bullets", level: 0 },
                                        children: [new TextRun({ text: "Advertising (Meta): ", bold: true }), new TextRun("Setup campagne, 3-4 post selezionati dal PED usati come creatività Ads, gestione e ottimizzazione campagne geo-targetizzate")]
                                    }),
                                    new Paragraph({
                                        numbering: { reference: "bullets", level: 0 },
                                        children: [new TextRun({ text: "Content Production: ", bold: true }), new TextRun("1 giornata/mese di riprese in loco al pop-up* + montaggio base")]
                                    }),
                                    new Paragraph({
                                        numbering: { reference: "bullets", level: 0 },
                                        children: [new TextRun({ text: "Graphics: ", bold: true }), new TextRun("Materiali digitali base (visual concept, template grafici per totem/banner, adattamento formati stampa)")]
                                    }),
                                    new Paragraph({
                                        numbering: { reference: "bullets", level: 0 },
                                        spacing: { after: 150 },
                                        children: [new TextRun({ text: "Report: ", bold: true }), new TextRun("Mensile")]
                                    }),
                                    new Paragraph({
                                        spacing: { before: 100 },
                                        children: [new TextRun({ text: "Cosa è escluso:", bold: true })]
                                    }),
                                    new Paragraph({
                                        numbering: { reference: "bullets", level: 0 },
                                        children: [new TextRun("TikTok")]
                                    }),
                                    new Paragraph({
                                        numbering: { reference: "bullets", level: 0 },
                                        children: [new TextRun("Influencer Marketing")]
                                    }),
                                    new Paragraph({
                                        numbering: { reference: "bullets", level: 0 },
                                        children: [new TextRun("Video commercial professionale")]
                                    }),
                                    new Paragraph({
                                        spacing: { before: 150 },
                                        children: [
                                            new TextRun({ text: "*Per singolo pop-up store. ", bold: true, italics: true }),
                                            new TextRun({ text: "Se il cliente ha 2 pop-up attivi, le giornate diventano 2/mese, e così via.", italics: true })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),

            new Paragraph({ children: [new PageBreak()] }),

            // 2.2 PACCHETTO GROWTH
            new Paragraph({
                heading: HeadingLevel.HEADING_3,
                children: [new TextRun({ text: "2.2 Pacchetto GROWTH" })]
            }),
            new Paragraph({
                spacing: { after: 120 },
                children: [
                    new TextRun({ text: "Per chi è: ", bold: true }),
                    new TextRun("Brand che vogliono presenza su più piattaforme e iniziare a costruire awareness anche su TikTok, mantenendo i costi sotto controllo.")
                ]
            }),

            // Tabella Growth
            new Table({
                width: { size: 9638, type: WidthType.DXA },
                columnWidths: [9638],
                rows: [
                    new TableRow({
                        children: [
                            new TableCell({
                                borders,
                                width: { size: 9638, type: WidthType.DXA },
                                shading: { fill: headerBg, type: ShadingType.CLEAR },
                                margins: { top: 100, bottom: 100, left: 150, right: 150 },
                                children: [new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [new TextRun({ text: "PACCHETTO GROWTH", bold: true, color: "FFFFFF", size: 24 })]
                                })]
                            })
                        ]
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                borders,
                                width: { size: 9638, type: WidthType.DXA },
                                margins: { top: 100, bottom: 100, left: 150, right: 150 },
                                children: [
                                    new Paragraph({
                                        alignment: AlignmentType.CENTER,
                                        spacing: { after: 60 },
                                        children: [new TextRun({ text: "€ 3.900,00 / mese", bold: true, size: 28 })]
                                    }),
                                    new Paragraph({
                                        alignment: AlignmentType.CENTER,
                                        children: [new TextRun({ text: "(oltre IVA) + spese extra", size: 20, italics: true })]
                                    })
                                ]
                            })
                        ]
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                borders,
                                width: { size: 9638, type: WidthType.DXA },
                                shading: { fill: lightBg, type: ShadingType.CLEAR },
                                margins: { top: 100, bottom: 100, left: 150, right: 150 },
                                children: [
                                    new Paragraph({
                                        spacing: { after: 100 },
                                        children: [new TextRun({ text: "Cosa è incluso:", bold: true })]
                                    }),
                                    new Paragraph({
                                        numbering: { reference: "bullets", level: 0 },
                                        children: [new TextRun({ text: "Social Media (Instagram + TikTok): ", bold: true }), new TextRun("12 post/mese (stessi contenuti adattati nel formato per entrambe le piattaforme), gestione community, stories")]
                                    }),
                                    new Paragraph({
                                        numbering: { reference: "bullets", level: 0 },
                                        children: [new TextRun({ text: "Advertising (Meta + TikTok Ads): ", bold: true }), new TextRun("Setup campagne su entrambe le piattaforme, gestione base con 2-3 campagne attive per piattaforma, ottimizzazione settimanale")]
                                    }),
                                    new Paragraph({
                                        numbering: { reference: "bullets", level: 0 },
                                        children: [new TextRun({ text: "Content Production: ", bold: true }), new TextRun("1 giornata/mese di riprese in loco al pop-up* + montaggio per social")]
                                    }),
                                    new Paragraph({
                                        numbering: { reference: "bullets", level: 0 },
                                        children: [new TextRun({ text: "Graphics: ", bold: true }), new TextRun("Pacchetto completo materiali pop-up (visual system, totem, banner, vetrofanie, materiali promo, QR code)")]
                                    }),
                                    new Paragraph({
                                        numbering: { reference: "bullets", level: 0 },
                                        spacing: { after: 150 },
                                        children: [new TextRun({ text: "Report: ", bold: true }), new TextRun("Mensile")]
                                    }),
                                    new Paragraph({
                                        spacing: { before: 100 },
                                        children: [new TextRun({ text: "Cosa è escluso:", bold: true })]
                                    }),
                                    new Paragraph({
                                        numbering: { reference: "bullets", level: 0 },
                                        children: [new TextRun("Influencer Marketing")]
                                    }),
                                    new Paragraph({
                                        numbering: { reference: "bullets", level: 0 },
                                        children: [new TextRun("Video commercial professionale")]
                                    }),
                                    new Paragraph({
                                        numbering: { reference: "bullets", level: 0 },
                                        children: [new TextRun("Contenuti customizzati per piattaforma")]
                                    }),
                                    new Paragraph({
                                        spacing: { before: 150 },
                                        children: [
                                            new TextRun({ text: "*Per singolo pop-up store. ", bold: true, italics: true }),
                                            new TextRun({ text: "Se il cliente ha 2 pop-up attivi, le giornate diventano 2/mese, e così via.", italics: true })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),

            new Paragraph({ children: [] }), // Spacer

            // 2.3 PACCHETTO PREMIUM
            new Paragraph({
                heading: HeadingLevel.HEADING_3,
                children: [new TextRun({ text: "2.3 Pacchetto PREMIUM" })]
            }),
            new Paragraph({
                spacing: { after: 120 },
                children: [
                    new TextRun({ text: "Per chi è: ", bold: true }),
                    new TextRun("Brand che vogliono massimizzare l'impatto con contenuti nativi per ogni piattaforma e una gestione advertising avanzata.")
                ]
            }),

            // Tabella Premium
            new Table({
                width: { size: 9638, type: WidthType.DXA },
                columnWidths: [9638],
                rows: [
                    new TableRow({
                        children: [
                            new TableCell({
                                borders,
                                width: { size: 9638, type: WidthType.DXA },
                                shading: { fill: headerBg, type: ShadingType.CLEAR },
                                margins: { top: 100, bottom: 100, left: 150, right: 150 },
                                children: [new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [new TextRun({ text: "PACCHETTO PREMIUM", bold: true, color: "FFFFFF", size: 24 })]
                                })]
                            })
                        ]
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                borders,
                                width: { size: 9638, type: WidthType.DXA },
                                margins: { top: 100, bottom: 100, left: 150, right: 150 },
                                children: [
                                    new Paragraph({
                                        alignment: AlignmentType.CENTER,
                                        spacing: { after: 60 },
                                        children: [new TextRun({ text: "€ 5.400,00 / mese", bold: true, size: 28 })]
                                    }),
                                    new Paragraph({
                                        alignment: AlignmentType.CENTER,
                                        children: [new TextRun({ text: "(oltre IVA) + spese extra", size: 20, italics: true })]
                                    })
                                ]
                            })
                        ]
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                borders,
                                width: { size: 9638, type: WidthType.DXA },
                                shading: { fill: lightBg, type: ShadingType.CLEAR },
                                margins: { top: 100, bottom: 100, left: 150, right: 150 },
                                children: [
                                    new Paragraph({
                                        spacing: { after: 100 },
                                        children: [new TextRun({ text: "Cosa è incluso:", bold: true })]
                                    }),
                                    new Paragraph({
                                        numbering: { reference: "bullets", level: 0 },
                                        children: [new TextRun({ text: "Social Media (Instagram + TikTok): ", bold: true }), new TextRun("20 post/mese (10 per canale, contenuti customizzati per lo stile comunicativo di ogni piattaforma), gestione community premium, stories quotidiane in fase lancio")]
                                    }),
                                    new Paragraph({
                                        numbering: { reference: "bullets", level: 0 },
                                        children: [new TextRun({ text: "Advertising (Meta + TikTok Ads): ", bold: true }), new TextRun("Gestione avanzata con campagne multiple (awareness, consideration, conversion), A/B test strutturati, retargeting, ottimizzazione per budget elevati")]
                                    }),
                                    new Paragraph({
                                        numbering: { reference: "bullets", level: 0 },
                                        children: [new TextRun({ text: "Content Production: ", bold: true }), new TextRun("2 giornate/mese di riprese in loco al pop-up* + montaggio avanzato multi-formato")]
                                    }),
                                    new Paragraph({
                                        numbering: { reference: "bullets", level: 0 },
                                        children: [new TextRun({ text: "Graphics: ", bold: true }), new TextRun("Pacchetto completo + materiali evento apertura + press kit digitale")]
                                    }),
                                    new Paragraph({
                                        numbering: { reference: "bullets", level: 0 },
                                        spacing: { after: 150 },
                                        children: [new TextRun({ text: "Report: ", bold: true }), new TextRun("Mensile con insights strategici")]
                                    }),
                                    new Paragraph({
                                        spacing: { before: 100 },
                                        children: [new TextRun({ text: "Cosa è escluso:", bold: true })]
                                    }),
                                    new Paragraph({
                                        numbering: { reference: "bullets", level: 0 },
                                        children: [new TextRun("Influencer Marketing")]
                                    }),
                                    new Paragraph({
                                        numbering: { reference: "bullets", level: 0 },
                                        children: [new TextRun("Video commercial professionale")]
                                    }),
                                    new Paragraph({
                                        spacing: { before: 150 },
                                        children: [
                                            new TextRun({ text: "*Per singolo pop-up store. ", bold: true, italics: true }),
                                            new TextRun({ text: "Se il cliente ha 2 pop-up attivi, le giornate diventano 4/mese, e così via.", italics: true })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),

            new Paragraph({ children: [new PageBreak()] }),

            // 3. TABELLA COMPARATIVA
            new Paragraph({
                heading: HeadingLevel.HEADING_2,
                children: [new TextRun({ text: "3. Tabella Comparativa" })]
            }),

            new Table({
                width: { size: 9638, type: WidthType.DXA },
                columnWidths: [3213, 2141, 2142, 2142],
                rows: [
                    // Header
                    new TableRow({
                        children: [
                            new TableCell({
                                borders,
                                width: { size: 3213, type: WidthType.DXA },
                                shading: { fill: headerBg, type: ShadingType.CLEAR },
                                margins: { top: 80, bottom: 80, left: 100, right: 100 },
                                children: [new Paragraph({ children: [new TextRun({ text: "", color: "FFFFFF", bold: true })] })]
                            }),
                            new TableCell({
                                borders,
                                width: { size: 2141, type: WidthType.DXA },
                                shading: { fill: headerBg, type: ShadingType.CLEAR },
                                margins: { top: 80, bottom: 80, left: 100, right: 100 },
                                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "STARTER", color: "FFFFFF", bold: true })] })]
                            }),
                            new TableCell({
                                borders,
                                width: { size: 2142, type: WidthType.DXA },
                                shading: { fill: headerBg, type: ShadingType.CLEAR },
                                margins: { top: 80, bottom: 80, left: 100, right: 100 },
                                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "GROWTH", color: "FFFFFF", bold: true })] })]
                            }),
                            new TableCell({
                                borders,
                                width: { size: 2142, type: WidthType.DXA },
                                shading: { fill: headerBg, type: ShadingType.CLEAR },
                                margins: { top: 80, bottom: 80, left: 100, right: 100 },
                                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "PREMIUM", color: "FFFFFF", bold: true })] })]
                            })
                        ]
                    }),
                    // Row: Fee mensile
                    createComparisonRow("Fee mensile", "€ 2.600", "€ 3.900", "€ 5.400"),
                    // Row: Canali social
                    createComparisonRow("Canali social", "1 (IG)", "2 (IG+TikTok)", "2 (IG+TikTok)"),
                    // Row: Post/mese
                    createComparisonRow("Post/mese", "10", "12 (stessi)", "20 (10+10 custom)"),
                    // Row: Advertising
                    createComparisonRow("Advertising", "Meta", "Meta + TikTok (base)", "Meta + TikTok (avanzato)"),
                    // Row: Giornate riprese
                    createComparisonRow("Giornate riprese/mese*", "1", "1", "2"),
                    // Row: Grafiche pop-up
                    createComparisonRow("Grafiche pop-up", "Base", "Complete", "Complete + press kit"),
                    // Row: Report
                    createComparisonRow("Report", "Mensile", "Mensile", "Mensile + insights"),
                ]
            }),

            new Paragraph({
                spacing: { before: 150 },
                children: [new TextRun({ text: "*Per singolo pop-up store", italics: true, size: 20 })]
            }),

            new Paragraph({ children: [] }), // Spacer

            // 4. COSTI EXTRA
            new Paragraph({
                heading: HeadingLevel.HEADING_2,
                children: [new TextRun({ text: "4. Costi Extra (esclusi dal pacchetto)" })]
            }),

            new Table({
                width: { size: 9638, type: WidthType.DXA },
                columnWidths: [3000, 2319, 4319],
                rows: [
                    // Header
                    new TableRow({
                        children: [
                            new TableCell({
                                borders,
                                width: { size: 3000, type: WidthType.DXA },
                                shading: { fill: headerBg, type: ShadingType.CLEAR },
                                margins: { top: 80, bottom: 80, left: 100, right: 100 },
                                children: [new Paragraph({ children: [new TextRun({ text: "Voce", color: "FFFFFF", bold: true })] })]
                            }),
                            new TableCell({
                                borders,
                                width: { size: 2319, type: WidthType.DXA },
                                shading: { fill: headerBg, type: ShadingType.CLEAR },
                                margins: { top: 80, bottom: 80, left: 100, right: 100 },
                                children: [new Paragraph({ children: [new TextRun({ text: "Costo", color: "FFFFFF", bold: true })] })]
                            }),
                            new TableCell({
                                borders,
                                width: { size: 4319, type: WidthType.DXA },
                                shading: { fill: headerBg, type: ShadingType.CLEAR },
                                margins: { top: 80, bottom: 80, left: 100, right: 100 },
                                children: [new Paragraph({ children: [new TextRun({ text: "Note", color: "FFFFFF", bold: true })] })]
                            })
                        ]
                    }),
                    createExtraRow("Strategic Analysis", "€ 900 una tantum", "Obbligatorio, da pagare all'avvio"),
                    createExtraRow("Budget media", "Variabile", "Pagato dal cliente direttamente a Meta/TikTok"),
                    createExtraRow("Influencer Marketing", "€ 800-2.000 per wave", "Scouting, briefing, coordinamento + fee influencer"),
                    createExtraRow("Video commercial", "€ 3.500 una tantum", "Video professionale con rendering prodotto"),
                    createExtraRow("Shooting prodotto", "€ 1.000-2.500", "Se il brand non ha asset fotografici"),
                    createExtraRow("Trasferte content creator", "A consuntivo", "Per pop-up fuori area (>100km)"),
                    createExtraRow("Stampa materiali fisici", "A consuntivo", "File grafici inclusi, stampa esclusa"),
                ]
            }),

            new Paragraph({ children: [] }), // Spacer

            // 5. BUDGET MEDIA CONSIGLIATO
            new Paragraph({
                heading: HeadingLevel.HEADING_2,
                children: [new TextRun({ text: "5. Budget Media Consigliato" })]
            }),

            new Table({
                width: { size: 9638, type: WidthType.DXA },
                columnWidths: [4819, 4819],
                rows: [
                    new TableRow({
                        children: [
                            new TableCell({
                                borders,
                                width: { size: 4819, type: WidthType.DXA },
                                shading: { fill: headerBg, type: ShadingType.CLEAR },
                                margins: { top: 80, bottom: 80, left: 100, right: 100 },
                                children: [new Paragraph({ children: [new TextRun({ text: "Pacchetto", color: "FFFFFF", bold: true })] })]
                            }),
                            new TableCell({
                                borders,
                                width: { size: 4819, type: WidthType.DXA },
                                shading: { fill: headerBg, type: ShadingType.CLEAR },
                                margins: { top: 80, bottom: 80, left: 100, right: 100 },
                                children: [new Paragraph({ children: [new TextRun({ text: "Budget media/mese", color: "FFFFFF", bold: true })] })]
                            })
                        ]
                    }),
                    createBudgetRow("STARTER", "€ 800 - 1.500"),
                    createBudgetRow("GROWTH", "€ 1.500 - 2.500"),
                    createBudgetRow("PREMIUM", "€ 3.000 - 5.000"),
                ]
            }),

            new Paragraph({ children: [] }), // Spacer

            // 6. NOTE IMPORTANTI
            new Paragraph({
                heading: HeadingLevel.HEADING_2,
                children: [new TextRun({ text: "6. Note Importanti" })]
            }),
            new Paragraph({
                numbering: { reference: "bullets", level: 0 },
                children: [
                    new TextRun({ text: "Giornate riprese in loco: ", bold: true }),
                    new TextRun("il numero indicato è per singolo pop-up store. Se il cliente ha più pop-up attivi contemporaneamente, le giornate si moltiplicano di conseguenza.")
                ]
            }),
            new Paragraph({
                numbering: { reference: "bullets", level: 0 },
                children: [
                    new TextRun({ text: "Durata progetto: ", bold: true }),
                    new TextRun("i prezzi sono su base mensile. I progetti variano tipicamente da 3 a 12 mesi. Per progetti lunghi (6+ mesi) possiamo valutare condizioni dedicate.")
                ]
            }),
            new Paragraph({
                numbering: { reference: "bullets", level: 0 },
                children: [
                    new TextRun({ text: "Influencer Marketing: ", bold: true }),
                    new TextRun("non è incluso in nessun pacchetto base. Va quotato separatamente in base al numero di influencer, tipo di campagna e fee richieste dai creator.")
                ]
            }),

            new Paragraph({ children: [] }), // Spacer

            // 7. NEXT STEPS
            new Paragraph({
                heading: HeadingLevel.HEADING_2,
                children: [new TextRun({ text: "7. Next Steps" })]
            }),
            new Paragraph({
                spacing: { after: 120 },
                children: [new TextRun("Per procedere con l'attivazione dei servizi proposti, si richiede di seguire i seguenti passaggi:")]
            }),
            new Paragraph({
                numbering: { reference: "bullets", level: 0 },
                children: [new TextRun("Selezione del pacchetto e conferma servizi extra")]
            }),
            new Paragraph({
                numbering: { reference: "bullets", level: 0 },
                children: [new TextRun("Firma contratto e accettazione condizioni")]
            }),
            new Paragraph({
                numbering: { reference: "bullets", level: 0 },
                children: [new TextRun("Pagamento Strategic Analysis (€ 900 + IVA)")]
            }),
            new Paragraph({
                numbering: { reference: "bullets", level: 0 },
                children: [new TextRun("Kick-off meeting e raccolta materiali (brand assets, accessi, brief)")]
            }),
            new Paragraph({
                numbering: { reference: "bullets", level: 0 },
                children: [new TextRun("Avvio operativo dei lavori")]
            }),
            new Paragraph({
                spacing: { before: 200 },
                children: [
                    new TextRun({ text: "Nota: ", bold: true }),
                    new TextRun("La presente proposta ha validità di 30 giorni dalla data di invio. Decorso tale termine, i prezzi e le tempistiche potrebbero essere soggetti a revisione.")
                ]
            }),
        ]
    }]
});

// Helper function per righe tabella comparativa
function createComparisonRow(label, starter, growth, premium) {
    return new TableRow({
        children: [
            new TableCell({
                borders,
                width: { size: 3213, type: WidthType.DXA },
                margins: { top: 60, bottom: 60, left: 100, right: 100 },
                children: [new Paragraph({ children: [new TextRun({ text: label, bold: true, size: 20 })] })]
            }),
            new TableCell({
                borders,
                width: { size: 2141, type: WidthType.DXA },
                margins: { top: 60, bottom: 60, left: 100, right: 100 },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: starter, size: 20 })] })]
            }),
            new TableCell({
                borders,
                width: { size: 2142, type: WidthType.DXA },
                margins: { top: 60, bottom: 60, left: 100, right: 100 },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: growth, size: 20 })] })]
            }),
            new TableCell({
                borders,
                width: { size: 2142, type: WidthType.DXA },
                margins: { top: 60, bottom: 60, left: 100, right: 100 },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: premium, size: 20 })] })]
            })
        ]
    });
}

// Helper function per righe costi extra
function createExtraRow(voce, costo, note) {
    return new TableRow({
        children: [
            new TableCell({
                borders,
                width: { size: 3000, type: WidthType.DXA },
                margins: { top: 60, bottom: 60, left: 100, right: 100 },
                children: [new Paragraph({ children: [new TextRun({ text: voce, size: 20 })] })]
            }),
            new TableCell({
                borders,
                width: { size: 2319, type: WidthType.DXA },
                margins: { top: 60, bottom: 60, left: 100, right: 100 },
                children: [new Paragraph({ children: [new TextRun({ text: costo, bold: true, size: 20 })] })]
            }),
            new TableCell({
                borders,
                width: { size: 4319, type: WidthType.DXA },
                margins: { top: 60, bottom: 60, left: 100, right: 100 },
                children: [new Paragraph({ children: [new TextRun({ text: note, size: 20, italics: true })] })]
            })
        ]
    });
}

// Helper function per righe budget
function createBudgetRow(pacchetto, budget) {
    return new TableRow({
        children: [
            new TableCell({
                borders,
                width: { size: 4819, type: WidthType.DXA },
                margins: { top: 60, bottom: 60, left: 100, right: 100 },
                children: [new Paragraph({ children: [new TextRun({ text: pacchetto, bold: true, size: 20 })] })]
            }),
            new TableCell({
                borders,
                width: { size: 4819, type: WidthType.DXA },
                margins: { top: 60, bottom: 60, left: 100, right: 100 },
                children: [new Paragraph({ children: [new TextRun({ text: budget, size: 20 })] })]
            })
        ]
    });
}

// Genera il file
Packer.toBuffer(doc).then(buffer => {
    fs.writeFileSync("/home/claude/NOT_Proposta_Marketing_PopUp.docx", buffer);
    console.log("Documento creato con successo!");
}).catch(err => {
    console.error("Errore:", err);
});