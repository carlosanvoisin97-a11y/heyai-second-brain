# KICKOFF — nuova sessione: rifinitura deck pitch Angelini Academy (v2)

> **Leggi questo file per intero come primo atto.** Ti dà contesto, fonti, regole e metodo per continuare senza errori.
> **Pitch live: venerdì 5/6/2026 — zero margine.** (Oggi è ~2/6.)
> Questo file aggiorna e sostituisce il vecchio `KICKOFF prossima sessione.md`.

---

## 0. Cosa stiamo facendo
Rifiniamo **slide per slide** il deck con cui HeyAI (con FuturItaly) si propone ad **Angelini Academy** (corporate academy di **Angelini Industries**) per strategia + nuovo sito. Ogni slide deve essere chiara, **difendibile in sala**, executive, coerente con la strategia e con i **contenuti reali del sito**.

**Workflow di consegna (cambiato, importante):** NON si edita il PPTX. Carlo ti dà l'**immagine della slide vecchia + le correzioni**; tu **proponi**, lui dà l'**OK**, e tu aggiorni i **due documenti-modifiche per l'editor di slide** (Claude Design). Claude Design vede **solo la vecchia presentazione**: i blocchi che gli passi devono essere **self-contained** (niente riferimenti a slide numerate, niente rimandi a file esterni; slide citate per **titolo/concetto**). Carlo gli dà i blocchi un po' alla volta.

---

## 1. Fonti di verità + PATH ESATTI (verificati questa sessione)
- **DOC EDITOR · vecchie slide** (5 slide, VERSIONE DEFINITIVA): `/Users/carlosanvoisin/Downloads/Modifiche per editor - Deck Angelini (vecchie slide).md`
- **DOC EDITOR · nuove slide** (6 blocchi, VERSIONE DEFINITIVA): `/Users/carlosanvoisin/Downloads/Modifiche per editor - Deck Angelini (nuove slide).md`
  → Questi DUE file sono il **deliverable vivo**: si arricchiscono qui. Formato di ogni blocco: `## SLIDE — <Titolo>` + **Testo nuovo** / **Note grafiche** / **Note strategiche**.
- **Brief ufficiale del cliente** (autoritativo): `/Users/carlosanvoisin/Downloads/Academy Evolution_Comm briefing.pdf` (estrai testo con `pdftotext -layout`).
- **Excel pricing / catalogo iniziative** (per scope reale, descrizioni, cadenze): `/Users/carlosanvoisin/Downloads/Angelini_Academy_Pricing_vdef 01.xlsx`
- **Scheda vault progetto** (stato, stakeholder, Log): `/Users/carlosanvoisin/claude/20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy.md`
- **RIEPILOGO** (vecchio recap + lista CASCATA): `/Users/carlosanvoisin/Downloads/RIEPILOGO sessione - modifiche per editor.md`
- **Codebase sito reale** (verifica contenuti per slide): `/Users/carlosanvoisin/code/angelini-academy` — **branch `angelini-website-dev`** (è la versione più aggiornata; verificato 1/6). 5 percorsi reali: `src/pages/percorsi/{talent,researcher,hr-business,media,imprese}.astro`.
- **Screenshot Laboratorio (testo Elena)** e immagini slide: te le passa Carlo in chat quando serve.

> Nota: la scheda vault può essere indietro come Log (manca l'entry di questa sessione 1-2/6). La **verità viva del deck sono i due editor doc**, non la scheda.

---

## 1-bis. STORYLINE del deck (per NON spezzare il filo narrativo)
Il deck è in 3 Atti. Ogni slide nuova deve incastrarsi nel flusso e **capitalizzare** (non ripetere) ciò che viene prima.
- **ATTO 1 · ANALISI** (capire cliente e mercato): Executive Summary → Anatomia operativa/BMC → Mercato e contesto competitivo (3 forze) → Insight + Matrice di posizionamento (3 archetipi) → Analisi tecnica SEO+Visibilità AI → Utenti target × 3 Voci → Aree di miglioramento. *(Chiude impostando le 5 aree che la proposta risolverà.)*
- **ATTO 2 · PROPOSTA** (la nostra risposta): I 3 Pilastri (panoramica Hub/Regia/Tecnologia) → Mappa di impatto (pilastri × obiettivi) → **Affondo 1 Customer Journeys/Hub** + esempio Sara → **Affondo 2 Laboratorio/Regia** → **Affondo 3 Agenti AI/Tecnologia** (+ affondo Eventi). *(Gli affondi seguono l'ordine dei pilastri.)*
- **ATTO 3 · ESECUZIONE** (come e a quanto): Roadmap/Quotazione + Slide del NO → Case history (NOT, + 2° case FuturItaly) → linkage criteri di gara.

Il **contenuto completo** delle slide già fatte è nei due editor doc (§1): leggili per ricostruire tono, claim e filo. La **sequenza autoritativa completa** è nel vault (Story Map / "Sintesi Strategica Pre-PPTX" e "Pitch Deck Scaletta McKinsey", cartella Angelini Academy) se serve l'ordine esatto.

---

## 2. STATO — slide FATTE vs DA FARE

### ✅ FATTE (già nei due editor doc — NON rifarle, semmai ritoccare su richiesta)
**vecchie slide:** Executive Summary · Analisi tecnica SEO+Visibilità AI · Insight + Matrice di posizionamento · Utenti target × 3 Voci · Aree di miglioramento.
**nuove slide (in ordine deck):** I 3 Pilastri (panoramica) · Mappa di impatto · **Affondo 1 Customer Journeys / Hub** · Esempio Sara (Talent) · **Affondo 2 Laboratorio Editoriale / Regia** · **Affondo 3 Agenti AI / Tecnologia**.
→ Gli **affondi seguono l'ordine dei pilastri**: 1 Hub = Customer Journeys, 2 Regia = Laboratorio, 3 Tecnologia = AI.

### ⏳ DA FARE — te le passa Carlo
Le slide ancora da rilavorare (la cascata) **te le fornisce Carlo una alla volta**, con immagine + correzioni. Non c'è bisogno di una lista qui.

### Già applicate da Carlo (nel deck live, non rifarle)
Carlo ha già applicato direttamente: gli **agganci al brief** (attribuzione "dimensione umana = vostro dato" + "**building bridges in education**" sull'Executive Summary; "**cointelligenza umano-IA**" nell'AI) e l'**integrazione delle "3 forze" di mercato nella Matrice di posizionamento**. Sono nel deck live: tienine conto per coerenza, non riproporle.

---

## 3. LE 7 REGOLE BLOCCANTI (verso il cliente — sempre attive)
1. **Linguaggio positivo:** "aree di miglioramento", MAI "pain / pain point / problema / fallisce".
2. **Mai rivelare strategia interna:** no "gancio", no tag-slide (S4·BMC), no "asse vincente", no codici "Pain 1/4/5".
3. **Mai "quadrante libero / spazio bianco"** → "spazio ancora poco presidiato".
4. **Partner accademici MAI come competitor:** UCL, SDA Bocconi, IMD, LBS, IE, RCA, Stockholm SSE, LUISS, POLIMI, BBS, Imperial, ESPC, H-Farm, Talent Garden.
5. **AI calibrata:** MAI "nessuno ce l'ha" (MIT ha AskTIM, IE ha un AI Tutor) → "non risulta un equivalente diretto, aperto e rivolto all'esterno, tra le corporate academy europee comparabili".
6. **Numeri verificati** (vedi §4); KPI inventati → marcare "illustrativi".
7. **Nessun nome-prodotto interno né vendor:** niente "Galileo", "PersonaSelect", "EOI", "Engaged Network" come brand, niente nomi di lab/vendor AI (DeepMind, Anthropic, iGenius, Cineca) né fornitori HeyAI (Soolutions, Silencio, Jakala). OK termini cliente: MBA Gateway, Engaged Research, Cattedra LUISS, masterclass, Founder Story, Casa Angelini, "Angelini People", cointelligenza umano-IA.
+ **Linguaggio EXECUTIVE:** vietati "hype", "una fetta", "layer", gergo. Voce Sage: sobria, autorevole, italiana, **semplice e chiara**.

---

## 4. Dove trovare le informazioni VERE (verifica alle fonti, mai a memoria)
Per OGNI fatto su Angelini Academy (numeri, offerta, partner, eventi, posizionamento) **verifica alle fonti**, non a memoria. In particolare:
- **BRIEF del cliente** (`/Users/carlosanvoisin/Downloads/Academy Evolution_Comm briefing.pdf`) = **fonte autoritativa**: purpose, i 4 pilastri di contenuto dell'Academy, offerta formativa, communication plan, target, eventi 2026, criteri di gara. **Fai SEMPRE riferimento al brief e parla la loro lingua** (es. obiettivi "Presentare / Consolidare / Valorizzare", "cointelligenza umano-IA", "building bridges in education").
- **STRUTTURA DEL SITO** (codebase `/Users/carlosanvoisin/code/angelini-academy`, branch **`angelini-website-dev`**) = cosa esiste DAVVERO, a cui allineare sempre il copy: i **5 percorsi** pubblici (`/percorsi/talent · researcher · hr-business · media · imprese`), le **3 Voci** (Pubblica · Community `/engaged-network` · Riservata `/angelini-people`), la **Casa Angelini** 3D con avatar-testimonial, le funzionalità AI. *(Capisci bene questa struttura PRIMA di scrivere copy su percorsi, Voci o AI.)*
- **Excel pricing** (`Angelini_Academy_Pricing_vdef 01.xlsx`) per scope reale e cadenze delle iniziative.
- **Scheda vault** + i **due editor doc** per tono e scelte già consolidate.

**Regola d'oro:** se un dato non è verificabile in queste fonti → **non inventarlo**, scrivi "da confermare con Carlo". (Coerente con la regola 6 del §3: numeri verificati, KPI "illustrativi".)

---

## 5. Decisioni — tutte risolte da Carlo
Le decisioni che erano aperte (numerazione pilastri, Imprese sul mockup, IE Insights, "4 modalità", KPI, BAT nel case NOT, ecc.) sono **già state risolte da Carlo**. Per ogni slide nuova, lavora sull'**immagine live** che Carlo fornisce (riflette già le scelte fatte) e chiedi conferma solo se emerge un'ambiguità **nuova**. *(Il 2° case FuturItaly resta tra le slide da produrre — vedi §2.)*

---

## 6. METODO OPERATIVO (il workflow che funziona — usalo)
Per ogni slide: Carlo dà **immagine vecchia + correzioni**. Tu:
1. **Workflow dinamico** (usa il tool Workflow): (a) **verifica** fatti/codebase/Excel/brief con un agente; (b) **rework** del copy in parallelo (consulting + copywriting + marketing + brainstorm dove serve); (c) **audit avversariale** contro le 7 regole bloccanti.
2. **Sintetizza**, applica le correzioni del critico, **scrivi nel doc giusto** (blocco `## SLIDE — …` self-contained), **presenta** a Carlo (sintesi + decisioni da chiudere).
3. Mostra il dito sui **rischi/decisioni**; non inventare numeri; KPI "illustrativi".
- Regola anti-ripetizione: ogni slide **capitalizza** su ciò che il deck già dice, **non ripete** (panoramica I 3 Pilastri / Mappa / SEO già coprono certi temi).

---

## 7. SKILL da invocare all'inizio
`marketing-skills:copywriting` · `marketing-skills:content-strategy` · `marketing-skills:customer-research` · `management-consulting` · `superpowers:brainstorming` · `superpowers:dispatching-parallel-agents` (+ tool **Workflow**) · `WebSearch`/`WebFetch` per fact-check (carica via ToolSearch). `pptx` solo se devi leggere un `.pptx` (di norma leggi le immagini direttamente).

---

## 8. COME PARTIRE (primi passi)
1. Leggi: questo KICKOFF → la scheda vault (`_Angelini Academy.md`, sezione Log) → i **due editor doc**.
2. Invoca le skill (§7).
3. Chiedi a Carlo: **quale slide** (immagine + correzioni) o se procedere con la **cascata** (consiglio: **slide EVENTI** prima, è priorità e rimandata; serve che Carlo passi la slide eventi).
4. Per ogni slide → applica il **metodo §6**. Verifica sempre contro le **7 regole** (§3) e le **calibrazioni** (§4) prima di consegnare.
5. Lingua: **italiano**, tono PM/executive, risposte chat brevi e chirurgiche; il lavoro lungo va nei doc.
