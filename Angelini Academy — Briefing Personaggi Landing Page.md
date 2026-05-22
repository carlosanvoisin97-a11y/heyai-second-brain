# Angelini Academy — Briefing Personaggi Landing Page
**Destinatario**: agente di sviluppo sito
**Componente**: Character Selection Screen — sezione iniziale della landing page
**Data**: 2026-05-14

---

## Contesto e obiettivo

La landing page di Angelini Academy inizia con una schermata di selezione personaggio stile videogioco RPG, in cui il visitatore sceglie il profilo che lo rappresenta. Questa scelta segmenta l'utente e personalizza il percorso nel sito.

Il componente esiste già con personaggi e grafica precedenti. **Il task è sostituire i personaggi esistenti con i 4 nuovi descritti in questo documento**, adattando la grafica 3D alle reference visive allegate (illustrazioni 2D semi-realistiche generate come base stilistica).

I 4 personaggi sono ordinati per priorità strategica: la gerarchia deve riflettersi nella disposizione visiva (es. Persona 1 centrale o più grande, Persona 4 meno prominente).

---

## Stile visivo di riferimento

Le immagini allegate sono illustrazioni 2D semi-realistiche in stile **European Institutional Graphic Novel**: pittorico, linee nette, palette istituzionale premium.

Per la versione 3D del sito, lo stile deve:
- Tradurre la stessa atmosfera in forma tridimensionale
- Mantenere palette coerente: **navy #1B2D5A**, ivory/cream, warm gold, accenti secondari per personaggio
- Evitare stile cartoon/giocoso o estetica gaming casual — il brand è istituzionale-accademico
- Proporzioni realistiche (non stilizzate), illuminazione cinematografica da upper-left
- Ogni personaggio in posa 3/4, leggermente verso l'alto (slight upward viewing angle), sfondo minimalista coerente con il setting del personaggio

---

## Personaggio 1 — GIULIA
**Priorità**: primaria — posizione centrale o di maggiore prominenza nel layout

**Target rappresentato**: Media, giornalisti, opinion leader, community accademica e professionale che seguono Angelini Academy come voce nel settore education e innovation.

**Chi è**: Giulia ha 38 anni, è una giornalista o opinion leader nel mondo education/innovation/pharma. Ha un'energia curiosa e decisa. Non è né corporate né casual: è la persona che fa le domande giuste agli eventi giusti. Porta sempre taccuino e badge stampa, si muove con senso di direzione.

**Tratti visivi chiave**:
- Blazer strutturato su turtleneck minimale, slim trousers
- Borsa a spalla in pelle qualitativa, taccuino in mano + penna
- Badge stampa visibile sul bavero
- Posa aperta e leggermente in avanti, aria da reporter
- Sfondo: auditorium o sala conferenze, luce calda da palco

**Accent color**: amber-gold / warm ivory
**Reference image**: `persona-1-giulia.png` (allegata)

---

## Personaggio 2 — MARCO
**Priorità**: secondaria

**Target rappresentato**: Ricercatori, professori universitari, partner accademici, esperti in innovazione pedagogica ed edTech. Cluster accademico-scientifico, il cuore intellettuale di Angelini Academy.

**Chi è**: Marco ha 46 anni, è un professore o ricercatore universitario — pensa a UCL o IE Madrid come profilo di riferimento. Specializzato in innovazione educativa o edTech. Ha un'autorevolezza tranquilla, non arrogante. Porta i segni della ricerca: libri, journal aperti, badge universitario. È formale ma non rigido.

**Tratti visivi chiave**:
- Blazer tweed-navy su camicia pulita, no cravatta, pantaloni scuri
- Stack di documenti e journal accademico aperto in mano
- Lanyard/badge universitario al petto
- Occhiali a montatura sottile
- Posa composta, peso su un lato, autorità rilassata
- Sfondo: aula universitaria moderna o laboratorio di ricerca, luce naturale da finestra

**Accent color**: deep sage green / parchment
**Reference image**: `persona-2-marco.png` (allegata)

---

## Personaggio 3 — SOFIA
**Priorità**: terziaria

**Target rappresentato**: Giovani talenti early-career in life sciences e industrial robotics. Neolaureati, giovani manager, candidati MBA Gateway. Il cluster di talent acquisition della holding Angelini Industries.

**Chi è**: Sofia ha 26 anni, è una ricercatrice o giovane professionista nel settore life sciences o robotics industriale. Ambiziosa e concentrata, non esibisce entusiasmo generico ma ha una precisione silenziosa. Porta il camice come simbolo di appartenenza al mondo scientifico, non come divisa.

**Tratti visivi chiave**:
- Camice bianco-cream aperto su blusa navy, pantaloni sartoriali
- Tablet in mano con dati scientifici visualizzati
- Pin accademico sul bavero del camice
- Posa sicura, peso leggermente spostato in avanti
- Sfondo: pannelli di vetro da laboratorio, luce blu-teal con striatura gold calda

**Accent color**: warm gold / sage green
**Reference image**: `persona-3-sofia.png` (allegata)

---

## Personaggio 4 — LUCA
**Priorità**: quaternaria — meno prominente nel layout

**Target rappresentato**: Founder di startup, innovatori, attori della filiera che cercano connessione con un partner industriale per validare o scalare la propria ricerca. Cluster "transfer technology": ricerca accademica che incontra il mercato via Angelini Ventures o le OpCo.

**Chi è**: Luca ha 32 anni, è un founder o innovatore nel settore biotech, edtech o industrial tech. Ha l'energia di chi ha una tesi da dimostrare, non da vendere. Non è il founder-influencer dei social: è quello che ha un prototipo in tasca e un pitch annotato a mano. Smart ma non corporate.

**Tratti visivi chiave**:
- Crewneck scuro minimale, slim trousers scuri, sneaker qualitative (non sportive)
- Pitch deck piegato e annotato a mano in mano
- Piccolo componente prototipale nel taschino della giacca
- Posa grounded, leggero lean forward, energia trattenuta
- Sfondo: innovation lab o co-working con elementi industriali, luce calda Edison

**Accent color**: warm amber / dark charcoal
**Reference image**: `persona-4-luca.png` (allegata)

---

## Istruzioni operative per l'agente

1. **Le reference image allegate sono la fonte di verità stilistica.** Ogni scelta di caratterizzazione 3D (espressione, posa, abbigliamento, luce) deve essere coerente con le illustrazioni, non reinterpretarle liberamente.

2. **Sostituire i personaggi esistenti mantenendo la struttura del componente.** Non alterare la logica di selezione, le animazioni di hover/click, o il layout della schermata se non esplicitamente richiesto.

3. **Rispettare la gerarchia visiva**: Giulia (1) deve avere la posizione più prominente; Luca (4) la meno prominente. La soluzione esatta (dimensioni, posizione centrale, ordine) è a discrezione del developer purché la gerarchia sia percepibile.

4. **Nomi display nei character card**: usare solo il nome (Giulia / Marco / Sofia / Luca) — niente ruolo o label testuale nel card, il personaggio deve comunicare da solo visivamente.

5. **Palette**: ogni personaggio ha un accent color secondario (vedi schede). Usarlo per l'highlight del card quando selezionato o in hover, mantenendo navy e ivory come base comune a tutti e 4.

6. **Mobile**: le reference sono in formato 2:3 portrait. Assicurarsi che il componente funzioni sia in layout 4-colonne (desktop) che in scroll orizzontale o griglia 2×2 (mobile).
