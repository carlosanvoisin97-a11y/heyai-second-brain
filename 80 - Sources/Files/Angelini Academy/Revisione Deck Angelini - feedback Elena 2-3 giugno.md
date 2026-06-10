# Revisione Deck Angelini Academy — feedback Elena (2-3 giugno)

> **Per Carlo.** Change-list slide-per-slide del deck `Angelini Academy Pitch Deck (standalone).html` (24 slide), dal feedback email Elena Chiti 2/6 + Log progetto 2/6 + sessione di lavoro congiunta 3/6. In coda: **Master Prompt per Claude Design** + note su come ri-renderizzare.
>
> **Pitch live: venerdì 5/6/2026 — zero margine.** Tutto in italiano. Decisioni bloccate, non derogare.
>
> ⚠️ **Le "frasi ad effetto" NON si riscrivono qui**: si segnalano (sezione dedicata in fondo). Elena le rivede con Carlo il 3/6.

---

## 0. METODO — come è fatto il deck e perché si lavora così (decisione motivata)

**Cos'è il file.** `Angelini Academy Pitch Deck (standalone).html` (9,2 MB) **non è una React app compilata né un PPTX**: è un *bundle auto-contenuto*. Dentro ci sono due `<script>` — un `manifest` (14 asset: font Barlow/Merriweather + 2 loghi, base64) e un `template` (il deck vero, **HTML+CSS statico editabile**, 314 KB). All'apertura, un piccolo loader scompatta gli asset in blob-URL e inietta il template dentro un web-component `<deck-stage>` (navigazione, scaling 1920×1080, print-to-PDF, rail thumbnail). **Le 24 slide sono 24 `<section>` di HTML puro** con `class="slide"`: titoli, testi, tabelle, SVG inline. Niente JSX, niente runtime React nel contenuto.

**Conseguenza operativa.** Il testo si modifica con **find/replace chirurgico nell'HTML** — è il 70-80% del feedback Elena (rinomine, lessico, de-densify testuale, fix numeri). NON serve un designer per quelli. Serve il designer (Claude Design) solo dove cambia il **layout** (accorpare 2 slide, ricostruire la slide Team, alleggerire griglie spostando dettaglio in appendice).

**Perché HTML-edit e non "ricostruisco in Claude Design da zero":**
1. Il deck è già a uno stadio molto avanzato e coerente (palette, griglia, footer, eyebrow, SO WHAT ricorrenti). Ripartire = buttare lavoro buono e introdurre regressioni a 3 giorni dal pitch.
2. Il 70% delle modifiche è testo puro: rischiarle a un re-design è sproporzionato.
3. Il bundle si **decodifica** in HTML leggibile (l'ho fatto): si edita quello, si riapre nel browser, Stampa → PDF. Vedi §"Come ri-renderizzare".

**Cosa ti ho prodotto (file):**
- **Questo documento** (change-list + Master Prompt) — in `~/Downloads/` e copiato in vault `00 - Inbox/`.
- **`Angelini-deck-EDITABILE.html`** in `~/Downloads/` — il **template del deck già decodificato in HTML leggibile e apribile nel browser**, con applicate le **modifiche testuali sicure** (rinomine pilastri + Hub Editoriale Permanente + Percorsi utente + bonifiche P1/P3/nomi-prodotto). È la base su cui lavorare il layout. Gli originali (`Angelini Academy Pitch Deck (standalone).html` + backup `~/Downloads/angelini-backup-20260602-193944/`) **non sono toccati**.

**Limite dichiarato (onesto).** Non ho il tool che ri-impacchetta il bundle standalone (manifest+template+loader). Quindi `Angelini-deck-EDITABILE.html` **non incorpora i font/loghi come blob** come l'originale: usa gli stessi `@font-face`/`<img>` con riferimenti agli UUID che però puntano al bundle. **Per vederlo renderizzato fedele servono i font e i 2 loghi accanto al file** (li estraggo se mi dici di procedere) **oppure** si riapplicano le stesse modifiche testuali al bundle originale via find/replace (i testi "COSA DIVENTA" qui sotto sono pensati per quello). Per il pitch del 5/6 la via più sicura è: Carlo apre l'HTML editabile, controlla, e poi un giro di Claude Design per il layout delle 4-5 slide che lo richiedono.

---

## 1. DECISIONI BLOCCATE (applicate ovunque — fonte: email Elena 2/6 + Log 2/6)

Queste valgono **trasversalmente** su tutte le slide. Nella change-list le richiamo per sigla.

| # | Regola bloccata | Da → A |
|---|---|---|
| **D1** | Pilastro 01 | `Hub Digitale Omnicanale` → **`Presenza Digitale Omnicanale`** |
| **D2** | Pilastro 02 | `Regia e Creazione Contenuti` / `Regia editoriale` / `Laboratorio Editoriale Permanente` → **`Hub Editoriale Permanente`** (servizio di FuturItaly) |
| **D3** | Pilastro 03 | `Tecnologia e AI` → **`Tecnologia e AI per esperienza smart`** |
| **D4** | Nav sito | `Percorsi` → **`Percorsi utente`** |
| **D5** | Divisione lavoro | HeyAI = **"architettura, tecnologia e intelligenza del sistema"** (MAI la parola "manutenzione"); FuturItaly = **Hub Editoriale Permanente + coordinamento** (Key Account FuturItaly coordina). Framing **team integrato peer**, non subordinato. |
| **D6** | Densità | A schermo **LOGICA + 1-2 esempi**; il dettaglio (tabelle, breakdown) va in **leave-behind/appendice**. De-densify = alleggerire **preservando** l'analisi, NON tagliare il lavoro. |
| **D7** | Riservatezze | MAI nominare fornitori (Soolutions/Silencio/Jakala/Tokio/Aegiscore) → **"team tecnico"**. MAI pricing interno/margini/costo fornitore/markup. |
| **D8** | Reveal strategia | MAI esporre codici interni: **P1/P3**, "Pain Point", "2 di 5", tag-slide, nomi-prodotto interni (Galileo, Reading Room, Research Engine, Tutor AI, Personal Learning Record, Engaged Network come *brand*, PersonaSelect, Sage/Magician come label esposte). |

> **Nota su D2 (importante).** "Hub Editoriale Permanente" (Pilastro 02, FuturItaly) **ha lo stesso sostantivo "Hub"** del Pilastro 01 ("Presenza Digitale Omnicanale", che internamente chiamavamo "Hub Omnicanale"). Per non confondere: il **Pilastro 01 NON va più chiamato "Hub"** in client-facing — è "Presenza Digitale Omnicanale". L'unico "Hub" client-facing nei nomi-pilastro è ora l'editoriale (P02). Dove il testo diceva "l'Hub fa convergere…" (affondo P01), va riferito a "la Presenza Digitale Omnicanale" o "il sistema/l'ecosistema", non "l'Hub".

> **Nota su D5 (mostra il dito).** L'email Elena dice testualmente HeyAI = *"infrastruttura, evoluzione e **manutenzione** sito"*. La **decisione bloccata di Carlo** è di NON usare "manutenzione" e di descrivere HeyAI come **"architettura, tecnologia e intelligenza del sistema"** (footprint più alto, peer non subordinato). Questa è una **scelta consapevole che si discosta dalla parola di Elena**: va allineata con lei nella sessione 3/6 (rischio: Elena si aspetta il framing "manutenzione"). La slide Capability attuale dice "HeyAI presidia strategia, comunicazione e tecnologia/AI" — anche questo è un footprint diverso (più ampio) da entrambe le formule. Vedi slide 18.

---

## 2. MAPPA SLIDE — numerazione reale del deck vs riferimenti Elena

Il deck ha **24 sezioni**. Elena numera le slide-contenuto (salta i 2 divisori), quindi i suoi numeri sono sfasati di +1/+2 rispetto all'indice reale. Tabella di riconciliazione (uso l'**indice reale 1-24** nella change-list):

| Reale | Titolo slide | Rif. Elena |
|---|---|---|
| 1 | Cover | — |
| 2 | Indice (3 atti) | slide 2 |
| 3 | Executive Summary — "Da sito vetrina a infrastruttura strategica" | slide 3 |
| 4 | Analisi tecnica del sito (SEO + visibilità AI) | slide 4 |
| 5 | Insight + Matrice di posizionamento | slide 5 |
| 6 | Utenti target × 3 Voci | slide 6 |
| 7 | Aree di miglioramento | (slide 7) |
| 8 | **Divisorio Atto 2** | — |
| 9 | I 3 Pilastri | (slide 9) |
| 10 | Mappa di impatto | slide 10 |
| 11 | Affondo P02 · Regia editoriale | slide 11/13 |
| 12 | Affondo P03 · Tecnologia e AI | slide 11/13 |
| 13 | Affondo P01 · Hub omnicanale | slide 11/13 |
| 14 | Customer Journey · Sara (Talent) | slide 14 |
| 15 | KPI Scorecard executive | slide 15 |
| 16 | Concept & Voce (molecola + ToV) | — |
| 17 | Architettura del sito | slide 17 |
| 18 | **Divisorio Atto 3** | — |
| 19 | Capability HeyAI + FuturItaly | slide 19 |
| 20 | Case history | — |
| 21 | Roadmap di progetto (Gantt) | — |
| 22 | Team & Governance | slide 22 |
| 23 | Proposta di investimento (pricing) | slide 23 |
| 24 | Chiusura | — |

> ⚠️ L'ordine degli **affondi** nel deck è **02 Regia → 03 AI → 01 Hub** (slide 11-12-13), NON 01→02→03. Coerente con la scelta "Hub come affondo-sistema che chiude e introduce Sara". Lasciato così (è una scelta, non un errore).

---

# 3. CHANGE-LIST SLIDE PER SLIDE

> Legenda: **COSA C'È ORA** = testo/elemento attuale nel deck · **COSA DIVENTA** = testo esatto da mettere · **NOTA GRAFICA** = intervento di layout (per Claude Design) · **DETTAGLIO** = dove va il materiale rimosso (leave-behind/appendice/a-voce).

---

## SLIDE 2 — Indice

**COSA C'È ORA**
- Titolo: *"Il percorso di oggi, in tre atti: analisi, proposta, esecuzione."*
- Eyebrow: "5 giugno 2026" (nessun titolo "CONTENUTI DEL DOCUMENTO").
- 3 colonne: 01 Analisi (6 voci) · 02 Proposta (5 voci) · 03 Esecuzione (5 voci).
- Voce colonna 02: *"Affondo Pilastro 01 · Hub Digitale Omnicanale"*, *"Affondo Pilastro 02 · Laboratorio Editoriale"*.

**COSA DIVENTA**
- **Titolo (Elena: retitle):** sopra il titolo attuale, aggiungere occhiello-sezione **`CONTENUTI DEL DOCUMENTO`** e sottotitolo **`Cosa proponiamo all'Academy Angelini`**. Il titolo "Il percorso di oggi, in tre atti…" può restare come riga descrittiva sotto.
- **Evidenziare i 3 conteggi** (Elena vuole leggibile la struttura): accanto a ogni numero di sezione, il conteggio slide → **`01 · Analisi (5)`** · **`02 · Proposta (9)`** · **`03 · Chi siamo e Operatività (5)`**. *(Sono i conteggi che Elena cita: 5 / 9 / 5 = 19 slide-contenuto + cover/divisori/chiusura.)*
- Rinominare nelle voci colonna 02: "Hub Digitale Omnicanale" → **"Presenza Digitale Omnicanale"** [D1]; "Laboratorio Editoriale" → **"Hub Editoriale Permanente"** [D2]; "Tecnologia e AI" → **"Tecnologia e AI per esperienza smart"** [D3] (dove compare).
- Rinominare la sezione 03 da "Esecuzione" → **"Chi siamo e Operatività"** (allinea al divisorio Atto 3, che già dice "Chi Siamo & Operatività").

**NOTA GRAFICA**
- Aggiungere occhiello + chip-conteggio per sezione (stile coerente con gli eyebrow esistenti). **Copertina blu anche per la sezione Analisi** (Elena): oggi i divisori Atto 2/3 hanno sfondo blu; l'Analisi (Atto 1) non ha un divisore proprio. → introdurre un **divisorio Atto 1 blu** (stesso template dei divisori 8 e 18) prima della slide 3, con kicker "Atto 01 · Analisi". *(Questo aggiunge 1 slide: porta i divisori a 3, uno per atto.)*

**DETTAGLIO** — nessuno (slide di navigazione).

---

## SLIDE 3 — Executive Summary ("Da sito vetrina a infrastruttura strategica")

**COSA C'È ORA**
- Titolo: *"Da sito vetrina a infrastruttura strategica."*
- Struttura: Sezione A "Dalla vostra ambizione alla proposta" → **5 stop** (01 L'ambizione · 02 L'opportunità · 03 Il vantaggio · 04 La distanza · 05 LA PROPOSTA) → Sezione B "I tre pilastri" con 3 card.
- Card pilastri: **"Hub digitale omnicanale"** (far convergere) · **"Regia e creazione contenuti"** (far emergere) · **"Tecnologia e AI"** (far fruttare).
- **NON c'è alcuna "fascia rosa ambizione"** nel deck attuale.

**COSA DIVENTA**
- **Rinominare le 3 card** [D1/D2/D3]: **"Presenza digitale omnicanale"** · **"Hub Editoriale Permanente"** · **"Tecnologia e AI per esperienza smart"**. I verbi-guida (far convergere/emergere/fruttare) restano.
- ⚠️ **Fascia rosa ambizione — già risolta.** Elena chiede "togliere la fascia rosa ambizione (a voce)". Nel **deck standalone attuale la fascia rosa NON esiste più**: è già stata sostituita dal flusso a 5 stop. **Azione: verificare che la versione che Carlo mostrerà sia questa** (non una vecchia con la band rosa). Se la band rosa ricompare in un'altra build, rimuoverla. Il punto "ambizione a voce" resta: lo speaker la introduce parlando, lo stop 01 "L'ambizione" sulla slide va bene così.
- Card P02: nel corpo, "Una **regia editoriale permanente** trasforma…" → **"Un **Hub Editoriale Permanente** trasforma…"** (allinea il sostantivo al nome bloccato; il concetto resta).

**NOTA GRAFICA**
- Solo testo nelle 3 card. "Hub Editoriale Permanente" è più lungo di "Regia e creazione contenuti": verificare che non vada a 3 righe rompendo l'allineamento delle card; eventualmente ridurre il corpo o il leading del titolo card.

**DETTAGLIO** — nessuno.

---

## SLIDE 4 — Analisi tecnica del sito (SEO + visibilità AI)

**COSA C'È ORA**
- Titolo: *"Tre opportunità tecniche e uno spazio organico da occupare, dall'analisi del vostro sito e dei principali player di mercato."*
- Colonna dx: "Player osservati: **UCL Knowledge Lab · SDA Bocconi · MIT Open Learning**".
- Claim AI bloccati (ChatGPT/Perplexity/Gemini/Claude fuori dai contenuti) — verificato vero.
- SO WHAT executive + N.B. "analisi preliminare".

**COSA DIVENTA**
- **Accorpamento con slide 5 (Matrice): vedi NOTA GRAFICA sotto** — Elena chiede "accorpare slide4(SEO)+5(Matrice)".
- Testo **sostanzialmente confermato** (è già la versione executive bonificata). Nessuna rinomina-pilastro qui.
- "Player osservati: UCL/SDA Bocconi/MIT" → **tenere così** (sono "osservati", non "competitor"; lo status di partner NON va esposto sulla slide — si gestisce a voce). *Conferma: scelta deliberata da `seo - modifiche per editor.md`.*

**NOTA GRAFICA — ACCORPAMENTO 4+5 (decisione che spetta a Carlo)**
Elena vuole **una sola slide** "analisi tecnica + posizionamento". Due opzioni — mostra il dito:
- **Opzione A (consigliata): NON fondere il contenuto, ma creare una slide-ponte "Analisi → Mappa"** che mette in fila in due bande: (alto) i 3 quick-win SEO sintetizzati a 1 riga ciascuno + lo spazio organico; (basso) la matrice di posizionamento. Il **dettaglio SEO completo** (schema markup, long-tail, perché 6-9 mesi) va in **leave-behind/appendice**. Così rispetti D6 (logica a schermo, dettaglio in appendice) e accorpi davvero.
- **Opzione B: tenerle separate** e dire a Elena che sono due analisi diverse (tecnica vs mercato) che meritano spazio. Rischio: contraddice la richiesta.
→ **Serve OK Carlo.** Se A: è lavoro da Claude Design (ricomposizione). La matrice (slide 5) è già ottima e bonificata: si "incolla" sotto la sintesi SEO.

**DETTAGLIO** — schema markup, long-tail dominance, "perché 6-9 mesi", lista keyword → **appendice/leave-behind** (testo completo già in `seo - modifiche per editor.md`).

---

## SLIDE 5 — Insight + Matrice di posizionamento

**COSA C'È ORA**
- Titolo: *"La mappa del mercato apre uno spazio ancora poco presidiato — ed è lì che Angelini Academy può posizionarsi."*
- Banda "3 driver" (skill mismatch €43,9 mld · longevità 68 anni · spostamento investimento — FT 2024).
- 3 insight (dalla domanda alla mappa · dimensione umana · AI sui contenuti).
- Matrice 2×2: assi "Ricerca autonoma" × "Ecosistema di filiera"; quadranti **Hyper Island · OECD CERI · Fondazione Agnelli** (alto-sx) / "Spazio poco presidiato + Destinazione Angelini" (alto-dx) / "Fornitori generalisti" (basso-sx) / **Brembo · Pirelli** (basso-dx). Angelini "OGGI" in basso. **Già bonificata** (no UCL/SDA/Bracco, no "Territorio libero").

**COSA DIVENTA**
- 🔴 **RIMUOVERE "Hyper Island"** dal quadrante alto-sx [Log 2/6 — landmine]. **Hyper Island è controllata al 54% da Talent Garden** (partner bloccante). Sostituire con un esempio sicuro: **"OECD CERI · Fondazione Agnelli"** (bastano questi due) oppure aggiungere **"Festo Didactic"** o **"Enel Foundation"** *(fanno ricerca di dominio, non pedagogica → non occupano lo spazio)*. **Consiglio: lasciare solo "OECD CERI · Fondazione Agnelli"** (2 esempi bastano, D6).
- Resto **confermato** (versione validata dal workflow 10 agenti). Assi ancorati alla domanda (3 driver) ✓; Angelini "già avviata in alto-destra allo stato latente" è già reso da "In sintesi: avete già, allo stato latente, le tre condizioni…".

**NOTA GRAFICA**
- Solo togliere "Hyper Island" dalla stringa `<div class="qs">Hyper Island · OECD CERI · Fondazione Agnelli</div>` → `OECD CERI · Fondazione Agnelli`. Banale.
- Se si fa l'accorpamento 4+5 (Opzione A sopra), questa matrice diventa la metà-bassa della slide-ponte.

**DETTAGLIO** — i 3 modelli archetipici (Provider di metodo / Academy industriali / Ricerca istituzionale) restano sulla slide; se serve spazio per l'accorpamento, comprimerli a 1 riga e mandare le descrizioni estese a voce.

---

## SLIDE 6 — Utenti target × 3 Voci

**COSA C'È ORA**
- Titolo: *"Sette utenti target × tre Voci del sito."* + sub.
- **Tabella a 7 righe** (Talent · Researcher · HR & Business · Media·Istituzioni · Impresa Partner · Dipendente Gruppo · Alumni & Ricercatori), 6 colonne (# · Target · Esperienza · Obiettivo · Tono · Voce). Densa.
- Fascia "Dall'analisi all'architettura" + citazione Morbidelli + SO WHAT.

**COSA DIVENTA**
- 🔴 **DE-DENSIFY [D6 — richiesta esplicita Elena "slide6 → LOGICA + 1-2 esempi"].** A schermo resta la **logica** (la segmentazione e perché conta) + **1-2 utenti-esempio sviluppati** (consiglio: **Talent** + **Researcher**, i due percorsi-pilastro). La **tabella completa a 7 righe va in appendice/leave-behind** — NON si taglia, si sposta.
- Struttura proposta a schermo:
  - Titolo invariato (eventualmente "Sette utenti target, un solo sito che li accoglie").
  - **Fascia logica**: "Prima di progettare il sito abbiamo definito chi lo userà → 7 utenti target ricorrenti → base di percorsi e 3 Voci" (è l'intro già presente).
  - **2 card-esempio** (Talent, Researcher) con: chi è + cosa trova + obiettivo + voce. *(Testi già pronti nelle righe 01/02 attuali — riusarli.)*
  - **Mini-strip "altri 5 target"**: solo i nomi in fila (HR & Business · Media·Istituzioni · Impresa Partner · Dipendente Gruppo · Alumni & Ricercatori) con la Voce associata, rimando "il dettaglio nel leave-behind".
  - Fascia "Dall'analisi all'architettura" + SO WHAT: restano.
- Citazione **Morbidelli**: resta.
- Nei testi, dove compare "Percorsi" come nome di navigazione → **"Percorsi utente"** [D4].

**NOTA GRAFICA**
- È il de-densify più importante della richiesta Elena. Lavoro da Claude Design: dalla tabella-7-righe a "logica + 2 card + strip nomi". **Preservare** tutti i 7 contenuti spostandoli nel leave-behind (appendice deck o documento separato).

**DETTAGLIO** — **tabella 7-utenti completa → appendice/leave-behind** (contenuto integrale già nel deck attuale slide 6 + in `utenti - modifiche per editor.md`).

---

## SLIDE 7 — Aree di miglioramento

**COSA C'È ORA**
- Titolo: *"Cinque aree di miglioramento per allineare il valore reale dell'Academy alla sua percezione digitale."*
- Tabella 5 righe (01 Identità · 02 Audience · 03 Patrimonio scientifico · 04 Ecosistema partner · 05 Misurazione), 4 colonne (# · Area · Obiettivo in gioco · La nostra risposta).
- Le risposte citano "**Laboratorio Editoriale Permanente**", "**Hub Omnicanale**", "5 percorsi", "personalizzazione AI", "SEO e visibilità AI", "analytics".
- ✅ Già bonificata (no P1/P5, no "gancio", colonna "La nostra risposta" argomentata).

**COSA DIVENTA**
- Rinomine nei testi-risposta [D2/D1]: "**Laboratorio Editoriale Permanente**" → "**Hub Editoriale Permanente**"; "**Hub Omnicanale**" → "**Presenza Digitale Omnicanale**" (o "l'ecosistema digitale"). Compaiono nelle righe 01, 03, 04.
- Resto confermato. Densità OK (è già 5 righe leggibili); se Elena la trova densa, comprimere le `pdesc` (descrizioni area) di 1 riga ciascuna.

**NOTA GRAFICA** — solo testo. Verificare che "Presenza Digitale Omnicanale" (più lungo di "Hub Omnicanale") non rompa le celle `s11-cogl`.

**DETTAGLIO** — nessuno.

---

## SLIDE 8 — Divisorio Atto 2 · La Proposta

**COSA C'È ORA**
- Sottotitolo divisorio: *"**3 Pilastri integrati** — Hub Digitale Omnicanale, Regia e Creazione Contenuti, Tecnologia e AI. Dalla strategia alla forma."*

**COSA DIVENTA**
- Sottotitolo: *"**3 Pilastri integrati** — Presenza Digitale Omnicanale, Hub Editoriale Permanente, Tecnologia e AI per esperienza smart. Dalla strategia alla forma."* [D1/D2/D3]

**NOTA GRAFICA** — testo. La stringa più lunga potrebbe andare a capo: ridurre leggermente il font del `dv-sub` se necessario.

**DETTAGLIO** — nessuno.

---

## SLIDE 9 — I 3 Pilastri (panoramica)

**COSA C'È ORA**
- Titolo: *"La nostra proposta: tre pilastri integrati, un solo ecosistema."*
- 3 card-pilastro con header **"Hub Digitale Omnicanale"** / **"Regia e Creazione Contenuti"** / **"Tecnologia e AI"** + verbi (far convergere/emergere/fruttare) + liste ON-SITE/SATELLITE + box "La community".
- P02 lista include "**Laboratorio Editoriale Permanente** — regia continua…".
- SO WHAT + footer "circolarità".

**COSA DIVENTA**
- Header card [D1/D2/D3]: **"Presenza Digitale Omnicanale"** · **"Hub Editoriale Permanente"** · **"Tecnologia e AI per esperienza smart"**.
- P01 intro: *"Oggi la vostra presenza vive su molti canali… **L'hub li fa convergere**…"* → riformulare l'incipit del verbo senza la parola "hub" (ora l'Hub è il P02): **"…Le facciamo convergere, dentro e attorno al sito, in un unico sistema…"** *(evita collisione con "Hub Editoriale", nota D2).*
- P02 lista: la voce "**Laboratorio Editoriale Permanente** — regia continua…" → **"**Direzione editoriale permanente** — regia continua…"** *(il nome del pilastro è già "Hub Editoriale Permanente"; la voce-lista interna non deve ripetere "Laboratorio" né "Hub Editoriale" due volte). In alternativa: tenere "Hub Editoriale Permanente" come header e nominare la voce-lista "il presidio editoriale continuo".*
- Box "La community": "i contenuti del **Laboratorio Editoriale** diventano relazione" → "i contenuti dell'**Hub Editoriale** diventano relazione".

**NOTA GRAFICA**
- Solo testo. Attenzione: questa slide è già molto densa (3 colonne piene + box community). Se Elena la segnala densa, il dettaglio ON-SITE/SATELLITE di 3°/4° livello può sintetizzarsi, ma la richiesta Elena su questa slide non c'è esplicitamente → non toccare il layout salvo sua indicazione 3/6.

**DETTAGLIO** — nessuno (è la slide-panoramica, deve restare ricca ma leggibile).

---

## SLIDE 10 — Mappa di impatto

**COSA C'È ORA**
- Titolo: *"Tre pilastri, un solo ecosistema: dove ciascuno crea impatto."*
- Griglia: header colonne **"Hub Digitale Omnicanale" / "Regia e Creazione Contenuti" / "Tecnologia e AI"**; righe Presentare/Consolidare/Valorizzare (barre Alto/Medio) + Posizionamento (slider) + Aree presidiate (chips) + **frase-insight per pilastro** (3 paragrafi lunghi).
- SO WHAT.

**COSA DIVENTA**
- Header colonne [D1/D2/D3]: **"Presenza Digitale Omnicanale" / "Hub Editoriale Permanente" / "Tecnologia e AI per esperienza smart"**. Idem i nomi ripetuti nella riga "In una frase" (`s13-insname`).
- Elena ("slide10 → chiarire o spostare in appendice"): **mostra il dito**. La slide è una matrice ricca (5 righe × 3 colonne + 3 paragrafi-insight). Due vie:
  - **Opzione A (consigliata): alleggerire a schermo** — tenere header colonne + le 3 righe-obiettivo con le barre (Presentare/Consolidare/Valorizzare) + **una riga-sintesi** per pilastro (la "frase-insight" ridotta a 2 righe). Spostare in **appendice**: la riga "Posizionamento target" (slider) e "Aree di miglioramento presidiate" (chips) — sono ribadite altrove (matrice slide 5 + slide 7). I 3 paragrafi-insight lunghi → ridurli (oggi ~80 parole l'uno, troppo per D6).
  - **Opzione B: spostarla interamente in appendice** (Elena la dà come opzione). Rischio: è una slide che dimostra coerenza "proposta↔obiettivi"; toglierla indebolisce l'argomento "non è un pacchetto a catalogo".
- → **Serve OK Carlo** su A vs B. Consiglio A.

**NOTA GRAFICA** — se Opzione A: Claude Design comprime le 2 righe ridondanti e accorcia gli insight. Mantenere l'unica modifica-barre già decisa (Tecnologia&AI su "Presentare" = ALTO).

**DETTAGLIO** — righe "Posizionamento target" + "Aree presidiate" + insight estesi → **appendice/leave-behind**.

---

## SLIDE 11 — Affondo Pilastro 02 · Regia editoriale → **Hub Editoriale Permanente**

**COSA C'È ORA**
- Eyebrow: *"PROPOSTA · AFFONDO PILASTRO 02 — REGIA E CREAZIONE CONTENUTI"*.
- Titolo: *"Regia editoriale: il motore che trasforma la vostra ricerca in contenuti, ogni mese."*
- Catena a 4 nodi (Cos'è · Cosa integra · Come opera · Cosa produce) + axis "Materia prima → Contenuto pubblicato".
- Footer 2 colonne: **"Cosa risolve"** con badge **P1 / P3** (!!) + **"Impatto di business"** con benchmark **"IE Insights"**.

**COSA DIVENTA**
- Eyebrow [D2]: *"PROPOSTA · AFFONDO PILASTRO 02 — **HUB EDITORIALE PERMANENTE**"*.
- Titolo [D2]: *"**Hub Editoriale Permanente**: il motore che trasforma la vostra ricerca in contenuti, ogni mese."* *(curato da FuturItaly — ma il nome-fornitore NON si espone in titolo; il "chi" sta nella slide Capability).*
- Intro: "Non un blog occasionale, ma una **regia editoriale continua**…" → "Non un blog occasionale, ma un **Hub Editoriale Permanente**…" (mantenere "regia" come verbo descrittivo va bene, ma il **nome** dell'asset è quello bloccato).
- 🔴 **D8 — BONIFICA REVEAL (bloccante):** la colonna "Cosa risolve" espone i **codici interni `P1` e `P3`** ("P1 Identità reale ↔ percezione disallineate", "P3 Patrimonio scientifico non scalato"). **RIMUOVERE i badge P1/P3** → sostituire con label parlanti: **"Identità ↔ percezione da allineare"** e **"Patrimonio scientifico da scalare"** (le label della slide 7, senza codice). Togliere anche "disallineate"/"non scalato" (linguaggio negativo → registro positivo).
- 🔴 **Benchmark "IE Insights"** nella colonna Impatto/Reputation ("cadenza editoriale benchmark IE Insights"): **IE è partner** → **rimuovere il nome**. → "consolida il posizionamento da riferimento scientifico, con **una cadenza editoriale costante ispirata ai migliori standard internazionali**".

**NOTA GRAFICA**
- Testo + sostituzione 2 badge. Il titolo "Hub Editoriale Permanente" è lungo: verificare il wrap del `s15-title`.

**DETTAGLIO** — nessuno (la logica del motore resta a schermo, è già il formato giusto).

---

## SLIDE 12 — Affondo Pilastro 03 · Tecnologia e AI

**COSA C'È ORA**
- Eyebrow: *"AFFONDO PILASTRO 03 — TECNOLOGIA E AI"*.
- Titolo lungo (facilitatore + acceleratore) + 4 funzionalità (Guida ai percorsi · Compagno di ricerca · Persone di Casa Angelini · Motore dei contenuti) + "La visione" (agente AI ricerca, timeline Nobel) + aree presidiate + "Perché conta" + SO WHAT.
- ✅ Già molto curata e calibrata (AI come tempismo, visione marcata "evolutiva futura").

**COSA DIVENTA**
- Eyebrow [D3]: *"AFFONDO PILASTRO 03 — **TECNOLOGIA E AI PER ESPERIENZA SMART**"* (o, se troppo lungo per l'eyebrow, tenere "TECNOLOGIA E AI" nell'eyebrow e usare il nome esteso solo dove compaiono i nomi-pilastro completi — **accettabile**: l'eyebrow è un'etichetta, non il nome-pilastro ufficiale. **Decidi tu** se uniformare ovunque o tollerare l'abbreviazione nell'eyebrow).
- Intro: "L'affondo del Pilastro **Tecnologia e AI**" → "…Pilastro **Tecnologia e AI per esperienza smart**".
- "Motore dei contenuti — A monte del **Laboratorio Editoriale**…" → "…A monte dell'**Hub Editoriale**…" [D2].
- Resto **confermato**. Densità OK (4 card max 3 righe già rispettato).

**NOTA GRAFICA** — testo. Verificare wrap eyebrow se si usa il nome esteso.

**DETTAGLIO** — nessuno.

---

## SLIDE 13 — Affondo Pilastro 01 · Hub omnicanale → **Presenza Digitale Omnicanale**

**COSA C'È ORA**
- Eyebrow: *"PROPOSTA · AFFONDO PILASTRO 01 — HUB DIGITALE OMNICANALE"*.
- Titolo: *"Cinque percorsi, una regia. **L'Hub** accoglie ogni pubblico al suo livello e lo porta dove gli serve arrivare."*
- 5 chip percorsi + "Perché cinque" + "Oltre la vetrina" (2 Voci) + KPI illustrativi + take-away "Sara".

**COSA DIVENTA**
- Eyebrow [D1]: *"PROPOSTA · AFFONDO PILASTRO 01 — **PRESENZA DIGITALE OMNICANALE**"*.
- Titolo [D2-nota]: *"Cinque percorsi, una regia. **La Presenza Digitale Omnicanale** accoglie ogni pubblico al suo livello…"* — **OPPURE**, se "Presenza Digitale Omnicanale" appesantisce il titolo: *"Cinque percorsi, una regia. **Il sito** accoglie ogni pubblico al suo livello…"*. ⚠️ **NON lasciare "L'Hub"** come soggetto: ora "Hub" è il Pilastro 02 editoriale → confonde. (Consiglio: "Il sistema" / "Il sito".)
- Nei testi interni, ogni "l'Hub" riferito a questo pilastro → "il sistema / la Presenza Digitale Omnicanale". (Compare in intro e in "Oltre la vetrina · l'Hub non orchestra solo la prima conversione".)
- "Percorsi" come voce di nav → "Percorsi utente" [D4] dove appare come label.

**NOTA GRAFICA** — testo. Il titolo con "Presenza Digitale Omnicanale" è lungo: preferibile "Il sito accoglie…" per leggibilità.

**DETTAGLIO** — nessuno.

---

## SLIDE 14 — Customer Journey · Sara (Talent)

**COSA C'È ORA**
- Titolo: *"Da scoperta su LinkedIn a iscrizione MBA Gateway a community alumni — multi-canale, multi-fase, multi-iniziativa…"*.
- Profilo Sara (27, STEM, "consulenza junior", Journey 01/05) + timeline 5 fasi (Awareness→Advocacy) + tabella (Cosa accade / Stato emotivo / Canale / Macro-iniziativa) + take-away ("replicabile su tutti e 5 i percorsi").
- ✅ Già corretta a "5 percorsi" + nomi-prodotto già bonificati ("agente AI in modalità guida formativa", "form di manifestazione d'interesse", "community alumni", macro-iniziative come label di valore).

**COSA DIVENTA**
- Elena ("slide14 → esempio più leggibile"): **la slide è densa** (tabella 4 righe × 5 colonne + timeline + loop arc). De-densify a schermo:
  - Tenere la **timeline 5 fasi** + la riga **"Cosa accade"** (la narrazione del journey) + **"Macro-iniziativa"** (mostra le 3 leve che si orchestrano). Queste due righe sono il cuore "come Sara attraversa l'ecosistema".
  - Spostare in **appendice/leave-behind** le righe **"Stato emotivo"** e **"Canale/Touchpoint"** (dettaglio che si racconta a voce). In alternativa, comprimerle a icone/mini-testo.
  - Take-away: invariato.
- ⚠️ Nessuna rinomina-pilastro necessaria qui (le macro-iniziative usano già label di valore "Hub del percorso", "Guida AI" ecc.). **"Hub del percorso"** (banda macro-iniziativa fase 02/03/04) — valutare se rinominare in "Percorso dedicato" per non usare "Hub" (collisione D2). Minore; **decidi tu** (è "Hub" inteso come la pagina-hub del percorso, non il pilastro).

**NOTA GRAFICA** — de-densify tabella da 4 a 2 righe a schermo (Claude Design). Preservare le 2 righe spostate in appendice.

**DETTAGLIO** — righe "Stato emotivo" + "Canale" → **appendice/leave-behind**.

---

## SLIDE 15 — KPI Scorecard executive

**COSA C'È ORA**
- Titolo: *"Cosa avete in mano a 6 / 12 / 24 mesi. I KPI del vostro brief e i target che ci diamo noi — una baseline misurabile, non una promessa."*
- 2 sezioni-tabella (Sez.1 KPI brief · Sez.2 target nostri) + Sez.3 "fuori dal nostro mandato" (social + LinkedIn CEO) + take-away "baseline non promessa" + box "Pre-commit".
- Box "Pre-commit": *"…dashboard dedicata + report mensile della **regia editoriale-tecnica**"*.
- Riga "Waitlist community · apertura **Q1 2027**".

**COSA DIVENTA**
- Elena ("slide15 → KPI snella + togliere box blu + versione spiegabile"): **de-densify [D6]**.
  - **"Togliere box blu"**: identificare il box blu (probabilmente il box **"Pre-commit alla misurabilità"** `kp-pc` o la fascia orizzonte `kp-horizon`) → rimuoverlo a schermo (il concetto "ci misuriamo" è già nel take-away). **Da confermare con Carlo quale box** intende Elena (sulla slide ci sono: Sez.3 card, take-away "baseline", strip orizzonte 6/12/24, box pre-commit). Consiglio: togliere il **box "Pre-commit"** (ridondante col take-away) e/o la **strip orizzonte**.
  - **Snellire le tabelle**: Sez.2 ha 8 righe (troppe per D6). Tenere a schermo le **4-5 KPI più forti** (Traffico, Conversioni, Manifestazioni d'interesse MBA Gateway, Lead Imprese, SEO long-tail) + cadenza editoriale; spostare in **appendice** le altre (newsletter HR, proposte Engaged Research, waitlist community, adozione Angelini People).
  - **"Versione spiegabile"**: aggiungere 1 riga-guida che spiega *come leggere* la scorecard ("tre orizzonti, due sezioni sotto il nostro mandato + una di trasparenza"). C'è già nell'intro — renderla più evidente.
- Box "Pre-commit": "**regia editoriale-tecnica**" → **"team editoriale e tecnico"** (allinea linguaggio; "regia editoriale" è ora servizio FuturItaly, e "tecnica" è HeyAI → meglio neutro "team editoriale e tecnico" per non incollare i due ruoli).
- "Waitlist community · **Q1 2027**" → ⚠️ **allineare al Gantt (community ottobre 2026)** [Log 2/6]. Il Gantt (slide 21) mette Community Hub a ottobre 2026. → cambiare "Q1 2027" in **"da fine 2026"** o coerente col Gantt. **Stessa correzione su slide 6** (legenda Voci "'27") **e slide 17** (Engaged Network "preview Q1 2027"). *(Vedi §"Cascata date community".)*

**NOTA GRAFICA** — Claude Design: togliere 1 box + ridurre Sez.2 a 4-5 righe. Etichetta "stime illustrative" resta visibile.

**DETTAGLIO** — righe KPI Sez.2 in eccesso → **appendice/leave-behind**.

---

## SLIDE 16 — Concept & Voce (molecola + ToV)

**COSA C'È ORA**
- Titolo: *"La molecola come metafora strategica. **Sage** primario + **Magician** secondario come archetipi narrativi. **5 ToV verbatim** del vostro brief come gate di qualità."*
- Sx: molecola (Engaged Research nucleo + 4 pilastri + orbita 8 partner) + 3 paragrafi.
- Dx: tabella 5 ToV (Autorevole/Autentico/Vicino/Ispirazionale/Innovativo → traduzione) + gate qualità + split **Sage 70% / Magician 30%** + ancoraggi verbatim ("Building bridges", Vision, "Centralità dimensione umana", "Unwavering Care").

**COSA DIVENTA**
- 🔴 **D8 — Titolo espone archetipi interni "Sage/Magician" e "5 ToV verbatim".** Elena (Log 2/6 §556) ha già declassato l'header a **"I 5 ToV del vostro brief, tradotti in regole di scrittura"** (NON "5 ToV verbatim"). Nel deck **la colonna dx è già "I 5 ToV del vostro brief, tradotti…"** ✓ ma **il TITOLONE in cima dice ancora "5 ToV verbatim" + "Sage/Magician"**. → **Riscrivere il titolo**: *"La **molecola** come metafora strategica, e una **voce controllata frase per frase**: i 5 tono-di-voce del vostro brief come gate di qualità."* Togliere "Sage primario + Magician secondario" e "verbatim" dal titolo.
- Il **blocco Sage/Magician 70/30** resta a schermo? **Mostra il dito**: "Sage" e "Magician" sono archetipi di brand-strategy (Jung/Aaker) — gergo da addetti, e non sono lessico-cliente. Due opzioni: (A) **tradurli** in "voce dell'esperto (prevalente) + voce visionaria (accenti)" togliendo i nomi inglesi degli archetipi; (B) tenerli ma è gergo. **Consiglio A** (coerente con "italiano, no gergo"). I percentuali 70/30 e la regola di mescolanza possono restare come "registro prevalente / accenti".
- "Persona Select" (nel testo Magician "Hero, Persona Select, Founder Stories") → nome interno [D8] → **"le pagine di scelta del percorso, le Founder Stories"**.
- "**5 ToV verbatim**" header colonna dx già OK. Tabella ToV: la riga "Vicino" dice "Registro diretto e accessibile · linguaggio accessibile, non burocratico" ✓ (già bonificato "tu mai Lei"/"zero gergo HR").
- **"Unwavering Care"**: resta (è brand book verbatim, ancoraggio corretto). ✓

**NOTA GRAFICA**
- Riscrittura titolo (testo). Se si traducono Sage/Magician (Opzione A): rinominare le label `sn` "Sage primario"/"Magician secondario" → "Voce dell'esperto · prevalente"/"Voce visionaria · accenti". Layout invariato.
- Densità: la slide è ricca ma a due colonne bilanciate; Elena non l'ha segnalata esplicitamente. Non stravolgere.

**DETTAGLIO** — nessuno.

---

## SLIDE 17 — Architettura del sito

**COSA C'È ORA**
- Titolo: *"Un'architettura che comunica su tre livelli: le 3 Voci del sito modulano la profondità d'accesso e coprono i 3 obiettivi strategici di Angelini."*
- Sitemap: Home → **Academy** (Engaged Research/MBA Gateway/Founder Stories) · **Percorsi** (01-05) · **Esplora** (Eventi/Blog/Press/Chi Siamo/Contatti) + 2 aree protette (**Engaged Network**, **Angelini People**).
- Metà bassa: matrice 3 Voci × 3 ambiti con **nomi-prodotto interni esposti**: "**Reading Room** + Tutor AI", "**Research Engine** AI full", "**Engaged Network** preview Q1 2027", "**Personal Learning Record**", "Bilancio Engaged Research".

**COSA DIVENTA**
- 🟢 **Elena: "slide17 → possibile APERTURA walk-through + base per la Site Map del sito"**. Questa slide è candidata a **spostarsi all'inizio dell'Atto 2** (o come ponte) e a diventare la "come navigare il sito" che Elena chiede anche per il sito. **Decisione Carlo**: spostarla in apertura proposta o lasciarla dov'è. (Non è un taglio: è riposizionamento — valutare 3/6.)
- **D4**: la macroarea **"Percorsi"** → **"Percorsi utente"** (header `an`).
- 🔴 **D8 — bonifica nomi-prodotto interni nella matrice bassa** (sono esposti al cliente):
  - "**Reading Room** + Tutor AI" → **"Libreria dei contenuti + assistente AI"**.
  - "**Research Engine** AI full" → **"Compagno di ricerca AI (completo)"**.
  - "**Engaged Network** preview Q1 2027" → **"Community · anteprima"** (+ correggere data, vedi sotto).
  - "**Personal Learning Record** dipendenti" → **"Percorso formativo personale"**.
  - "Bilancio Engaged Research" → **"Report annuale dell'Engaged Research"**.
  - Le due **aree protette** in alto ("Engaged Network" / "Angelini People"): "Engaged Network" è il path tecnico ma è anche nome-prodotto interno → etichettare **"Community (Engaged Network)"** o solo **"Community"**; "Angelini People" è termine-cliente OK.
- ⚠️ **Data community**: "preview **Q1 2027**" → allineare al Gantt (ottobre 2026) → **"anteprima da fine 2026"** [cascata date].
- I **5 percorsi** in sitemap dicono "01 Giovane Talento · 02 Ricercatore Accademico · 03 HR & Business · 04 Media & Istituzioni · 05 Imprese & Partner" → coerenti col sito reale ✓.

**NOTA GRAFICA**
- Bonifica testo (nomi-prodotto). Se Carlo la sposta in apertura Atto 2: Claude Design la riposiziona e la raccorda come "ecco la mappa di ciò che vi mostro". Buona base anche per la **Site Map del sito** che Elena chiede (riuso 1:1).

**DETTAGLIO** — i dettagli "6 feature MVP", "5 aree post-login" → a voce o appendice.

---

## SLIDE 18 — Divisorio Atto 3 · Chi Siamo & Operatività

**COSA C'È ORA**
- Sottotitolo: *"**HeyAI + FuturItaly** — capability, case history, perimetro, roadmap, team & governance e quotazione. Chi realizza, come e a quali condizioni."*

**COSA DIVENTA**
- Confermato. (Eventualmente, per coerenza D5, l'ordine "HeyAI + FuturItaly" va bene come peer.) Nessuna modifica obbligatoria.

**NOTA GRAFICA** — nessuna.

**DETTAGLIO** — nessuno.

---

## SLIDE 19 — Capability HeyAI + FuturItaly

**COSA C'È ORA**
- Titolo: *"Un team, un metodo integrato: le nostre capability."*
- Intro: *"**HeyAI** presidia **strategia, comunicazione e tecnologia/AI**; **FuturItaly** cura la **regia editoriale** dei contenuti di ricerca e innovazione pedagogica. Al centro resta il successo del cliente."*
- Sx: 3 ring HeyAI (**Strategia / Marketing / AI & Automation**). Dx: card FuturItaly "**Regia editoriale**" + metodo 3 step.
- Sintesi "metodo integrato" + footer "I tre pilastri: Hub Digitale Omnicanale · Regia e Creazione Contenuti · Tecnologia e AI".

**COSA DIVENTA**
- 🔴 **D5 — divisione del lavoro (il punto più delicato).** L'email Elena dà HeyAI = "infrastruttura+manutenzione"; la decisione bloccata di Carlo dà HeyAI = **"architettura, tecnologia e intelligenza del sistema"** (MAI "manutenzione"). La slide attuale dice **"strategia, comunicazione e tecnologia/AI"** (footprint ancora più ampio). **Tre formule diverse in campo.** Da chiudere con Carlo + Elena 3/6. Proposta operativa, peer e senza "manutenzione":
  - **Intro slide → riscrivere**: *"Un unico team con competenze complementari. **HeyAI** porta l'**architettura, la tecnologia e l'intelligenza del sistema** — strategia digitale, sviluppo, AI e dati. **FuturItaly** porta l'**Hub Editoriale Permanente** — la regia continua dei contenuti di ricerca e innovazione pedagogica — e coordina il progetto. Al centro resta il successo del cliente."*
  - **Ring HeyAI**: "Strategia / Marketing / AI & Automation" → valutare se ridenominare il 2° ring. Se si tiene il footprint alto di Carlo, "Marketing/Comunicazione" resta in capo a HeyAI (coerente con la slide attuale). ⚠️ **Ma attenzione**: l'email Elena implica che **comunicazione/contenuti** pendano verso FuturItaly. **Da decidere 3/6**: se HeyAI tiene strategia+marketing+tech, FuturItaly è "solo" Hub Editoriale + coordinamento (peer ma con scope editoriale). Se invece si accetta lo split di Elena, HeyAI scende a tech/architettura e marketing va condiviso. **Consiglio (coerente con la decisione bloccata di Carlo)**: HeyAI = "architettura, tecnologia e intelligenza" + strategia; FuturItaly = Hub Editoriale + coordinamento. Tenere i 3 ring ma rinominare in chiave "sistema": **Strategia & Architettura / Esperienza & Comunicazione / AI & Dati** (evita "manutenzione", alza il footprint tech).
  - **Card FuturItaly**: tag "**Regia editoriale**" → **"Hub Editoriale Permanente"** [D2]. "Key Account FuturItaly coordina" → renderlo esplicito nella card (Elena: il Key Account coordina).
  - **Footer "I tre pilastri"** [D1/D2/D3]: "Hub Digitale Omnicanale · Regia e Creazione Contenuti · Tecnologia e AI" → **"Presenza Digitale Omnicanale · Hub Editoriale Permanente · Tecnologia e AI per esperienza smart"**.
- **D7**: la card FuturItaly e i ring HeyAI NON nominano fornitori tecnici (Soolutions ecc.) ✓ — verificare che resti così.

**NOTA GRAFICA**
- Riscrittura intro + label. Il Venn/ring va tenuto pulito (etichette fuori dai dischi). Aggiungere "Key Account FuturItaly · coordina" come ruolo visibile.
- ⚠️ **Questa slide è il fulcro di D5: NON consegnarla senza che Carlo abbia chiuso la formula della divisione del lavoro con Elena (3/6).** È l'unica slide dove si esplicita chi-fa-cosa.

**DETTAGLIO** — nessuno.

---

## SLIDE 20 — Case history

**COSA C'È ORA**
- Titolo "Case history" + **"— in definizione —"** (placeholder).

**COSA DIVENTA**
- Resta placeholder finché Carlo non decide il caso (NOT/BAT — permesso di citare BAT da verificare [Log 2/6] — + 2° case FuturItaly). **Niente fornitori HeyAI** nel case [D7]. Se si cita NOT/BAT: a voce o con permesso.

**NOTA GRAFICA** — da produrre quando il contenuto è deciso (non bloccante per la struttura).

**DETTAGLIO** — TBD Carlo.

---

## SLIDE 21 — Roadmap di progetto (Gantt)

**COSA C'È ORA**
- Gantt Lug/Ago(pausa)/Set/Ott 2026: Restyling (opzionale) · Creazione nuovo sito (Lug+Set) · SEO+LLM (Lug) · **Laboratorio editoriale** (pianif.→continuativo) · Community Hub (Ott) · Area Riservata (Ott) · Analytics (Ott). Milestone "Sito nuovo live" (Set) · "Ecosistema completo" (Ott). Governance (Progress meeting / SteerCo). Sidebar Fase 2 evolutive.
- ✅ Già allineata: community a ottobre 2026 (no Q1 2027), prezzi assenti.

**COSA DIVENTA**
- Riga Gantt "**Laboratorio editoriale**" → **"Hub Editoriale Permanente"** [D2] (o "Hub editoriale" per stare nella cella).
- Milestone "Primi contenuti del **Laboratorio editoriale**" → "Primi contenuti dell'**Hub Editoriale**".
- Sidebar Fase 2: "**Agente AI dell'Academy**" / "**Gestione LinkedIn**" ecc. — OK (sono add-on, label di valore). Nessun fornitore.
- Resto confermato.

**NOTA GRAFICA** — testo (rinomina nelle celle Gantt). "Hub Editoriale Permanente" è lungo per una cella `tn`: usare "Hub editoriale" (abbreviazione accettabile nel Gantt).

**DETTAGLIO** — nessuno.

---

## SLIDE 22 — Team & Governance

**COSA C'È ORA**
- Titolo "Team & Governance" + **"— in definizione —"** (placeholder vuoto).

**COSA DIVENTA**
- 🟢 **Elena: "slide22 → impostare la STRUTTURA"** (Key Account FuturItaly coordina + profilo scientifico + content creator per Hub + profili HeyAI) **+ un TEMPLATE di testo che Carlo passerà a Elena**.
- **Struttura proposta (da popolare):**
  - **Coordinamento**: **Key Account FuturItaly** (coordina il progetto end-to-end) + **Project Manager HeyAI** (presidio delivery).
  - **Hub Editoriale Permanente (FuturItaly)**: **Profilo scientifico / direzione editoriale** (gestione scientifico-didattica) + **Content creator** (produzione white paper light, video pillole, articoli).
  - **Architettura, tecnologia e intelligenza (HeyAI)**: **Strategia & architettura digitale** · **Sviluppo/tecnologia** (il "team tecnico", **MAI nominare i fornitori** [D7]) · **AI & dati** · **Marketing/comunicazione & SEO**.
  - **Governance**: Progress meeting ogni 2 settimane · SteerCo ogni 2 mesi (coerente col Gantt slide 21).
- **TEMPLATE DI TESTO per Carlo→Elena** (da incollare/riempire — vedi blocco dedicato in §5 "Template Team").

**NOTA GRAFICA**
- Da costruire ex-novo (è placeholder). Layout suggerito: 2 fasce — "Chi" (ruoli/profili in card per organizzazione, peer) + "Come governiamo" (cadenze). Mantenere il framing **team integrato peer** (D5): HeyAI e FuturItaly affiancati, non uno sotto l'altro. **Nessun nome di persona finché Carlo non li fornisce** (placeholder "Profilo …").

**DETTAGLIO** — i nomi/CV delle persone arrivano da Carlo dopo la sessione 3/6.

---

## SLIDE 23 — Proposta di investimento (pricing)

**COSA C'È ORA**
- 3 colonne: **Core** (Sito 22.000 · Area Riservata Semplice 5.500 · Community Engaged Network 15.000 · Analytics 2.500 · SEO+LLM 4.500 = **Totale 49.500** + Hub editoriale continuativo **2.950/mese**) · **Fase 2 add-on** (Customer Journey 4.000 · Agente AI 14.000 · Area Riservata Avanzata 13.000 · Dashboard 6.500 · LinkedIn 4.500/mese · Email 1.800+1.500/mese · Landing 5-10k · CRM/Gateway su quotazione · video/brochure/gadget su quotazione) · **Alternativo** (Riallineamento sito 5.000) + **Scontistica** (-5%/-10%/-5%) + **Pagamento** (50/50 · 30gg).
- ✅ Già allineata all'Excel `vdef 01` (numeri corretti, nessun margine/costo fornitore esposto).

**COSA DIVENTA**
- 🔴 **Elena: "slide23 prezzi → placeholder in attesa markup FuturItaly"** [Log 2/6 §519]. Il prezzo client-facing = **core HeyAI + markup FuturItaly** (numero finale controllato da FuturItaly, "che vi fornisco nelle prossime giornate"). **Azione**: finché Elena non manda il markup, la slide **NON deve esporre il €49.500 come prezzo-cliente finale**. Due vie:
  - **(consigliata) Placeholder pulito**: sostituire i prezzi puntuali con **"In definizione con FuturItaly"** sulle righe-prezzo, OPPURE tenere la struttura/voci ma mettere il totale come **"€ — (in finalizzazione)"**. La logica del pacchetto (cosa include) resta; il numero è in attesa.
  - **(rischiosa) Lasciare €49.500**: solo se Carlo decide che il 5/6 si presenta il core HeyAI come cifra e il markup si gestisce dopo. ⚠️ Ma il €49.500 è il **floor HeyAI→FuturItaly**, NON il prezzo-cliente → esporlo brucia il margine FuturItaly. **NON farlo senza OK esplicito.**
- **D7 — riservatezza pricing**: ✅ già rispettata (nessun margine/costo fornitore/regola ≤60% sulla slide). Mantenere.
- "**Community Engaged Network**" (riga core) → "**Community**" o "**Community (Engaged Network)**" [D8 — Engaged Network è nome interno]. "Hub editoriale & Content Creation continuativo" → coerente con [D2] "**Hub Editoriale Permanente**".

**NOTA GRAFICA** — sostituire i valori con placeholder "in definizione" (Claude Design o find/replace). Tenere la struttura a 3 colonne.

**DETTAGLIO** — il numero finale arriva da FuturItaly (Elena).

---

## SLIDE 24 — Chiusura

**COSA C'È ORA**
- "Cosa mettiamo sul tavolo" — 6 righe: ecosistema · **hub digitale omnicanale** · **laboratorio editoriale-tecnico** · scelta modulare · baseline misurabile · dimensione umana.
- Box "circolarità" + loghi "HeyAI · FuturItaly · Angelini Academy" + cap "Team integrato".

**COSA DIVENTA**
- Riga 2: "Un **hub digitale omnicanale** che fa convergere…" → "Una **Presenza Digitale Omnicanale** che fa convergere…" [D1].
- Riga 3: "Un **laboratorio editoriale-tecnico** che si autoalimenta…" → "Un **Hub Editoriale Permanente** che si autoalimenta dal vostro patrimonio Engaged Research." [D2]. *(Togliere "-tecnico": l'editoriale è FuturItaly; la parte tecnica è HeyAI ma qui si parla del servizio editoriale.)*
- Cap "Team integrato · HeyAI · FuturItaly · Angelini Academy": ✅ coerente con D5 (peer). Mantenere.

**NOTA GRAFICA** — testo.

**DETTAGLIO** — nessuno.

---

# 4. CASCATA TRASVERSALE — fix da applicare ovunque (checklist)

> Find/replace sicuri da fare su **tutto** il deck (case-insensitive dove serve). Sono già inclusi nell'HTML editabile prodotto, qui per audit/replica sul bundle.

**Rinomine pilastri [D1/D2/D3]** — ovunque compaiano:
- `Hub Digitale Omnicanale` / `Hub digitale omnicanale` → **Presenza Digitale Omnicanale** (slide 2,3,8,9,10,19,24 + eyebrow affondo 13)
- `Regia e Creazione Contenuti` / `Regia e creazione contenuti` / `Regia editoriale` (come **nome del pilastro/servizio**) / `Laboratorio Editoriale Permanente` / `Laboratorio Editoriale` / `Laboratorio editoriale` → **Hub Editoriale Permanente** (slide 2,3,7,8,9,10,11,12,15,19,21,24 + eyebrow affondo 11)
- `Tecnologia e AI` (come **nome-pilastro completo**, dove c'è spazio) → **Tecnologia e AI per esperienza smart** (slide 2,3,8,9,10,19,24; eyebrow affondo 12 e 13 → abbreviazione tollerata)

> ⚠️ **Attenzione a "Hub" da solo**: dove "l'Hub" indicava il **Pilastro 01** (affondo 13, panoramica 9), va riscritto come "il sito / il sistema / la Presenza Digitale Omnicanale" — perché ora "Hub" (Editoriale) è il **Pilastro 02**. Non è un replace meccanico: va letto in contesto (le occorrenze critiche sono elencate nelle slide 9 e 13).

**Nav [D4]:** `Percorsi` come **voce di navigazione/macroarea** → **Percorsi utente** (slide 6, 13, 17). *(NON toccare "cinque percorsi", "percorsi dedicati", "customer journey" — quelli restano.)*

**Reveal strategia [D8]** — rimuovere/tradurre:
- Badge `P1` / `P3` (slide 11) → label parlanti senza codice.
- Nomi-prodotto interni (slide 16, 17, + verificare 14): `Reading Room`, `Research Engine`, `Engaged Network` (come brand), `Personal Learning Record`, `Tutor AI` (come nome), `PersonaSelect`/`Persona Select`, `Sage`/`Magician` (come label esposte) → descrizioni di valore (mappatura nelle rispettive slide).
- `Bilancio Engaged Research` → `Report annuale dell'Engaged Research`.

**Partner mai competitor / benchmark sensibili:**
- `Hyper Island` (slide 5) → **rimuovere** (controllata Talent Garden).
- `IE Insights` (slide 11) → rimuovere il nome → "standard internazionali".
- `UCL Knowledge Lab · SDA Bocconi · MIT Open Learning` (slide 4) → **tenere** (sono "player osservati", non competitor; status partner non esposto — gestito a voce). *Decisione deliberata, non un bug.*

**Cascata date community** (Gantt = ottobre 2026, NON Q1 2027):
- Slide 6 legenda Voci "'27" → allineare.
- Slide 15 "Waitlist community · Q1 2027" → "da fine 2026" (coerente Gantt).
- Slide 17 "Engaged Network preview Q1 2027" → "Community · anteprima da fine 2026".

**Linguaggio (D6/registro):**
- Frasi >25 parole o paragrafi >4 righe → spezzare (slide 6, 10, 14, 15, 16 sono le più dense).
- Mai linguaggio negativo ("disallineate", "non scalato", "fallisce", "pain") → registro positivo (slide 11 colonna "Cosa risolve").

---

# 5. TEMPLATE TEAM (slide 22) — testo per Carlo → Elena

> Bozza self-contained che Carlo può passare a Elena per riempire i profili. Framing **team integrato peer** [D5]. Nessun fornitore HeyAI nominato. Nomi delle persone = placeholder finché Carlo non li fornisce.

```
TEAM & GOVERNANCE — un team integrato HeyAI + FuturItaly

COORDINAMENTO DEL PROGETTO
• Key Account FuturItaly — coordina il progetto end-to-end, interfaccia con l'Academy
• Project Manager HeyAI — presidio della delivery, pianificazione e qualità

HUB EDITORIALE PERMANENTE — a cura di FuturItaly
• Direzione editoriale / profilo scientifico — gestione scientifico-didattica dei contenuti
• Content creator — produzione di white paper light, video pillole, articoli divulgativi

ARCHITETTURA, TECNOLOGIA E INTELLIGENZA DEL SISTEMA — a cura di HeyAI
• Strategia e architettura digitale — obiettivi, roadmap, struttura del sito
• Sviluppo e tecnologia — realizzazione del sito e delle integrazioni (team tecnico HeyAI)
• AI e dati — agente AI, personalizzazione, analytics
• Marketing, comunicazione e SEO — distribuzione, visibilità, canali

GOVERNANCE
• Progress meeting — ogni 2 settimane (avanzamento operativo)
• SteerCo — ogni 2 mesi (allineamento strategico)

[Profili e nomi delle persone: da completare con i CV/ruoli che indicherai.]
```

> ⚠️ Da validare con Elena la **ripartizione** marketing/comunicazione (HeyAI vs FuturItaly) — vedi nodo D5 slide 19.

---

# 6. FRASI AD EFFETTO — da segnalare (NON riscritte; Elena le rivede con Carlo 3/6)

> Elena chiede di rivedere le "frasi ad effetto" (verificare se vengono dal brief o se sono modificabili). **NON le tocco in automatico.** Le elenco con un'alternativa sobria *solo come spunto*, marcata **"da validare con Elena 3/6"**. Le frasi-payoff verbatim del brief (Building bridges, Vision, Unwavering Care) **NON si toccano**.

| Slide | Frase ad effetto attuale | Spunto sobrio (da validare 3/6) | Origine |
|---|---|---|---|
| 3 / cover | "Da vetrina ad architettura." / "Da sito vetrina a infrastruttura strategica." | OK / eventualmente "Dal sito vetrina al sistema digitale dell'Academy." | nostra |
| 9 / 24 | "Chiunque può fare un sito. Pochi sanno progettare la **circolarità**." | "Non un sito in più: il sistema digitale che mette a frutto ciò che già siete." | nostra (claim forte) |
| 11 | "il motore che trasforma la vostra ricerca in contenuti, ogni mese." | OK (descrittiva, regge) | nostra |
| 12 | "non un assistente in più, ma un sistema che facilita l'esperienza…" | OK | nostra |
| 13 | "Cinque percorsi, una regia." | OK (forte ma chiara) | nostra |
| 15 | "una baseline misurabile, non una promessa." | OK | nostra |
| 16 | "Lo stile è strategia. La voce è la vostra." | OK (sobria) | nostra |
| 16 | "Building bridges in education" / Vision verbatim | **NON toccare** (brief verbatim) | brief |
| 16 / vari | "Unwavering Care" | **NON toccare** (brand book verbatim) | brand book |
| 21 | "live in circa tre mesi" | OK (verificare aderenza al Gantt: Lug→Set ≈ 2-3 mesi) | nostra |

> **Nota**: la frase "circolarità" (slide 9 e 24) è il claim più "marketing" del deck. Regge bene in sala se detta con sicurezza, ma è la prima candidata se Elena vuole un registro più sobrio. **Decisione a Carlo+Elena 3/6.**

---

# 7. PUNTI APERTI / DECISIONI CHE SPETTANO A CARLO (riepilogo "mostra il dito")

1. **D5 / slide 19 (il più importante)**: formula della divisione del lavoro HeyAI↔FuturItaly. Tre versioni in campo (email Elena "infra+manutenzione" · decisione Carlo "architettura/tecnologia/intelligenza, no manutenzione" · slide attuale "strategia/comunicazione/tech"). **Va chiusa con Elena 3/6 prima di consegnare la slide.** Impatta anche slide 22 (Team) e 23 (chi-fa-cosa nel pricing).
2. **Slide 23 pricing**: mettere placeholder "in attesa markup FuturItaly" (consigliato) vs lasciare €49.500. Il €49.500 è floor HeyAI, non prezzo-cliente → **non esporlo senza OK**.
3. **Accorpamento slide 4+5** (SEO+Matrice): Opzione A (slide-ponte, dettaglio in appendice) vs B (tenere separate). Elena vuole accorpare → consiglio A.
4. **Slide 10 (Mappa impatto)**: alleggerire (A) vs spostare in appendice (B). Consiglio A.
5. **Slide 17 (Architettura)**: spostare in apertura Atto 2 come walk-through (Elena lo propone) vs lasciare dov'è. + riuso come Site Map del sito.
6. **Slide 15 KPI "togliere box blu"**: confermare *quale* box intende Elena (Pre-commit / orizzonte / Sez.3).
7. **Eyebrow affondi (12,13)**: usare il nome-pilastro esteso ("Tecnologia e AI per esperienza smart" / "Presenza Digitale Omnicanale") anche negli eyebrow, o tollerare l'abbreviazione? (Estetica vs coerenza assoluta.)
8. **Divisorio Atto 1**: aggiungere un divisore blu per l'Analisi (per la richiesta Elena "copertina blu anche per Analisi") → porta i divisori a 3 e +1 slide.
9. **Case history (slide 20)** e **Team (slide 22)**: contenuti reali da Carlo (permesso BAT? nomi profili?).
10. **Frasi ad effetto**: §6 — tutte "da validare con Elena 3/6".

---

# 8. COME RI-RENDERIZZARE (per ottenere il PDF/deck aggiornato)

**Via 1 — sul file editabile prodotto (`Angelini-deck-EDITABILE.html`):**
1. Servono i **font Barlow/Merriweather** e i **2 loghi** accanto al file (li estraggo dal bundle se Carlo dà l'OK: 8 font + `logo cover` + `logo footer`).
2. Aprire l'HTML nel browser (Chrome). Il `<deck-stage>` lo renderizza a 1920×1080 con navigazione.
3. **Stampa → Salva come PDF** (il deck ha `@media print` one-page-per-slide).

**Via 2 — sul bundle originale (più sicura per fedeltà font/loghi):**
Riapplicare le modifiche "COSA DIVENTA" via find/replace **dentro il `template` del bundle** (`Angelini Academy Pitch Deck (standalone).html`, lo `<script type="__bundler/template">` alla riga ~178, JSON-escaped). Poiché è una stringa JSON in un'unica riga, conviene farlo con uno script (decode → replace → re-encode). **Posso produrlo io** se Carlo vuole il bundle aggiornato già pronto (non committato).

**Via 3 — Claude Design:** per le slide che richiedono **layout** (4=accorpamento, 6=de-densify, 10=alleggerimento, 14=de-densify, 15=snellire, 19=Capability, 22=Team) → passare a Claude Design i blocchi "COSA DIVENTA + NOTA GRAFICA" di quelle slide (sono self-contained) + il Master Prompt §"MASTER PROMPT" qui sotto.

> **Git**: branch `angelini-website-dev`. **NON committare/pushare** — modifiche lasciate non committate per la review di Carlo. Backup in `~/Downloads/angelini-backup-20260602-193944`. Il repo del **sito non è stato toccato** (ho lavorato solo sui file in `~/Downloads/`).

---

# 9. MASTER PROMPT per Claude Design

> Da incollare in una sessione Claude Design, **insieme ai blocchi "COSA DIVENTA + NOTA GRAFICA" delle sole slide che richiedono layout** (4, 6, 10, 14, 15, 19, 22; + i rinomina-testo di tutte). Claude Design vede solo il deck vecchio: i blocchi sono self-contained.

```
RUOLO
Sei lo slide designer del pitch deck "Angelini Academy · Evolution" (24 slide, HTML/CSS dentro un web-component <deck-stage>, canvas 1920×1080). Applichi modifiche di TESTO e di LAYOUT preservando lo stile esistente del deck. Lavori in italiano. Output: HTML/CSS modificato, una slide (<section>) alla volta, senza rompere la griglia, il footer, gli eyebrow e i SO WHAT ricorrenti.

CONTESTO
È un pitch B2B per Angelini Academy (corporate academy di Angelini Industries). Pitch live venerdì, zero margine. Il deck è già a uno stadio avanzato e coerente: NON ridisegnare da zero, modifica in modo chirurgico. Mantieni palette, tipografia, spaziature, componenti (card, chip, bande, slider, Gantt) già presenti.

REGOLE DI BRAND (vincolanti)
- Tipografia: Barlow (sans, body+UI+titoli) e Merriweather (serif, accenti editoriali). Sono già caricati via @font-face. Non introdurre altri font.
- Palette del deck (usare SOLO queste variabili CSS già definite): --blu:#1d3b73 · --orange:#f47c1f · --green:#036951 · --viola:#840B55 · grigi --grey-sub/--ink · sfondi --paper/--cream. (Sono l'adattamento editoriale del brand Angelini; non cambiarle.)
- Logo Angelini: usare gli <img> già referenziati nel footer/cover. Non alterare il marchio.
- Niente emoji. Niente colori fuori palette. Niente font decorativi.

REGOLE DI CONTENUTO (BLOCCANTI — non derogare)
1. NOMI DEI 3 PILASTRI (client-facing, esatti): "Presenza Digitale Omnicanale" · "Hub Editoriale Permanente" · "Tecnologia e AI per esperienza smart". Sostituiscono ovunque "Hub Digitale Omnicanale", "Regia e Creazione Contenuti", "Regia editoriale", "Laboratorio Editoriale Permanente", "Tecnologia e AI".
2. ATTENZIONE "Hub": l'unico "Hub" nei nomi-pilastro è ora l'Editoriale (Pilastro 02). Dove il testo usava "l'Hub" per il Pilastro 01 (omnicanale), riscrivilo come "il sito" / "il sistema" / "la Presenza Digitale Omnicanale". Non lasciare "Hub" ambiguo.
3. Navigazione sito: la voce "Percorsi" diventa "Percorsi utente". (Non toccare "cinque percorsi", "percorsi dedicati", "customer journey".)
4. Divisione del lavoro (slide Capability + Team): HeyAI = "architettura, tecnologia e intelligenza del sistema" (MAI la parola "manutenzione"); FuturItaly = "Hub Editoriale Permanente" + coordinamento (Key Account FuturItaly coordina). Framing TEAM INTEGRATO PEER, non subordinato.
5. RISERVATEZZE: MAI nominare fornitori tecnici (scrivi "team tecnico" / "il nostro team"). MAI esporre pricing interno, margini, costi fornitore, markup. Dove il pricing è in attesa, usa "in definizione".
6. MAI esporre codici/nomi interni: rimuovi badge "P1"/"P3", e i nomi-prodotto interni (Reading Room, Research Engine, Engaged Network come brand, Personal Learning Record, Tutor AI come nome, Persona Select, Sage/Magician come label) → sostituisci con descrizioni di valore (le trovi nei blocchi "COSA DIVENTA").
7. Partner accademici MAI come competitor; rimuovi "Hyper Island" dalla matrice e "IE Insights" come benchmark. "UCL/SDA Bocconi/MIT" restano solo come "player osservati".
8. Tutto in italiano. Registro executive, sobrio, autorevole: niente hype, niente gergo ("layer", "una fetta"), frasi sotto le 25 parole, paragrafi sotto le 4 righe.

STRATEGIA ESPOSITIVA (densità)
A schermo: LOGICA + 1-2 esempi. Il DETTAGLIO (tabelle lunghe, breakdown, KPI in eccesso, righe ridondanti) va spostato in APPENDICE / leave-behind — NON cancellato. "De-densify" significa alleggerire preservando l'analisi, non tagliare il lavoro. Quando una slide è densa (utenti target, mappa di impatto, customer journey, KPI), tieni la struttura logica e 1-2 esempi sviluppati, sposta il resto in slide di appendice marcate "Appendice / dettaglio".

TONE OF VOICE (gate di qualità — ogni blocco di copy deve far riconoscere almeno 3 dei 5)
Autorevole · Autentico · Vicino · Ispirazionale · Innovativo. Anti-pattern: urlante, corporate, sloganistico, paternalista.

COME LAVORI
- Ti passo i blocchi "COSA DIVENTA + NOTA GRAFICA" slide per slide (self-contained, slide citate per titolo/concetto).
- Per ogni slide: applichi prima le sostituzioni di testo (rinomine + bonifiche), poi gli interventi di layout indicati nella NOTA GRAFICA.
- Preservi footer, eyebrow, numerazione, SO WHAT. Verifichi che i testi più lunghi (es. "Hub Editoriale Permanente", "Presenza Digitale Omnicanale", "Tecnologia e AI per esperienza smart") non rompano l'allineamento delle card/celle: riduci leading o corpo se serve, senza cambiare la griglia.
- Restituisci l'HTML della <section> modificata + una nota di 1-2 righe su cosa hai cambiato e su eventuali rischi di overflow.
- Se un'istruzione è ambigua, chiedi prima di inventare. Non aggiungere numeri o claim non presenti nei blocchi.
```

---

*Fonti: `~/Downloads/Angelini Academy Pitch Deck (standalone).html` (deck 24 slide, decodificato) · `_Angelini Academy.md` Log 2/6 + email Elena 2/6 · `Modifiche per editor - Deck Angelini (nuove/vecchie slide).md` · `RIEPILOGO sessione - modifiche per editor.md` · `utenti/seo - modifiche per editor.md` · Brand Book Angelini Academy 2024 v1.0. Documento prodotto in sessione Code, non committato.*
