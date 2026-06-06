---
type: session-recap
source: claude-code
session_id: 2694bff1
project_path: ~/code/angelini-academy (worktree: affectionate-blackwell-009be5)
date_last_activity: 2026-05-28
size_mb: 0.7
status: vault-worthy
created: 2026-05-28
tags: [code-session, recovery-2026-05-28]
---

# Recap Code session — angelini-academy wt affectionate-blackwell (2694bff1)

## Cosa è stato fatto

Sessione "long-lived" attiva da 26/5 sera a 28/5 notte. Tre fasi distinte sulla deck Pitch Angelini Academy (gara, pitch finale 31/5):

1. **Audit incoerenze HTML deck vs MD source v3.3** (26/5). Carlo passa URL design file e chiede confronto con `00 - Inbox/2026-05-23 - Pitch Angelini v3.3 - Atto 1 Ristrutturato.md`. Agente fetcha HTML, lo confronta con il MD e produce report strutturato per gravità: 3 critiche (indice 02 Proposta obsoleto con 5 voci vs 11 reali; contatore pagine /19 Atto 1 vs /21 Atto 2; durata pitch 55 min vs 70-78 min); copertina riscritta (titolo, sottotitolo, autori, footer divergenti); 2 action title divergenti (S3 manca "Communication Plan"; S5 manca "tre modelli archetipici"); contenuto minore S2 nomina "Galileo" — nome obsoleto v3.2, da sostituire con agenti AI.

2. **Decisioni di Carlo + prompt patch per editor cloud** (26/5). Carlo decide: aggiornare indice rimuovendo mappa di impatto, esempio customer journey, mapping strategia, concept, sinottico finale; rinominare "affondo" → "deep dive"; sostituire "agenti AI" con wording migliore; aggiungere capitolo "demo live"; tralasciare contatore pagine e copertina e S3 action title; rimettere S5 dal MD; togliere "Galileo". Agente conferma di non poter modificare direttamente (HTML è export scaricato, non collegato all'editor cloud) e produce 3 prompt copia-incolla per l'editor del design tool.

3. **Prompt generation per grafiche Nano Banana / Gemini 2.5 Flash Image** (27-28/5). Carlo chiede prompt in inglese per molecola stilizzata Angelini + ponte derivato per la cover slide. Output: due prompt long-form coordinati (palette navy #003087 + orange #FF8200 + sage #7A8E7E, geometria molecolare, sfondo paper #FAFAF7). Carlo poi chiede kit iconografia di supporto: agente produce 6 grafiche aggiuntive (icone capitolo, concept "3 Voci", background rete sparsa, sidebar verticale, stamp d'angolo, connettore orizzontale). Carlo poi pivot: "risultato venuto molto male, riparto da zero senza reference, voglio effetto wow 3D futuristico impossibile da fare da umano". Agente riprende come art director editorial: prompt composizione asimmetrica unificata (molecola + ponte come unica rete continua, non due stickers), poi prompt alternativo cover 3D fotoreale materia impossibile scala monumentale.

## Progetti / aree vault toccate

angelini-academy → [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|Angelini Academy]].

Documento di riferimento letto dalla sessione: `00 - Inbox/2026-05-23 - Pitch Angelini v3.3 - Atto 1 Ristrutturato.md`.

## Decisioni / Numeri / Output (file) / Task / Schede vault da aggiornare (§15) / Citazioni / Note di flag

### Decisioni di Carlo emerse in sessione (vault-worthy)

- **Indice deck v3.3 Atto 1**: rimuovere mappa di impatto, esempio customer journey (Sara), mapping strategia → mockup, concept stilistico, sinottico finale. Sostituire "affondo" con "deep dive" (o termine equivalente migliore). Sostituire "agenti AI" con wording meno riduttivo. Aggiungere capitolo "demo live" dopo gli affondi.
- **Slide tralasciate volutamente**: contatore pagine, copertina, S3 action title (Carlo dichiara non rilevanti per durata pitch).
- **S5 action title**: rimettere wording esatto dal file MD (tre modelli archetipici · ricerca autonoma · forza ecosistema).
- **S2 Pilastro 3**: sostituire menzione "Galileo assistente verticale" (eredità v3.2, non esiste in v3.3) con riferimento corretto ai 4 agenti AI (Tutor · Reading Room · Research Engine · Career Path Navigator).
- **Cover slide direzione visiva**: pivot da molecola+ponte stilizzati editorial a cover 3D fotoreale "effetto wow" (materia impossibile, scala monumentale, richiamo palette navy/orange/sage).

### Output prodotti dalla sessione (testuali, non file)

- Report incoerenze HTML vs MD (3 critiche, copertina, 2 action title, S2 Galileo, lista OK).
- 3 prompt copia-incolla per editor design tool cloud: Indice (S1), S2 Executive Summary Pilastro 3, S5 Action title.
- 2 prompt Nano Banana long-form: Molecola Angelini (cover) + Ponte derivato.
- Kit 6 grafiche aggiuntive: icone capitolo, concept 3 Voci, background rete sparsa, sidebar verticale, stamp d'angolo, connettore orizzontale.
- 1 prompt Cover Slide editorial (sistema molecolare unificato, asimmetria, palette esatta, tipografia display serif italic).
- 1 prompt Cover Hero 3D fotoreale wow (registro opposto, futuristico).

### Numeri / fatti vault-worthy

- Conta voci indice deck: HTML attuale **5 voci**, struttura v3.3 reale **11 voci**, post-trim Carlo (decisioni di sessione) **6 voci** (3 Pilastri + Deep Dive Lab Editoriale + Deep Dive Agenti AI + Deep Dive Customer Journeys + KPI Scorecard + Architettura sito + Demo live).
- Contatore pagine: Atto 1 /19, Atto 2 /21. Totale corretto post-Atto-3 sarebbe /25.
- Durata pitch: discrepanza fra HTML (55 min + 15-20 Q&A), MD talking track (70 min + Q&A), MD architettura (74-78 min). Carlo dichiara non rilevante.

### Schede vault da aggiornare (§15)

- `[[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy]]` → **Log 28/5**: decisioni di trim indice deck v3.3 + direzione cover slide 3D wow + sostituzione "Galileo" con agenti AI in S2. Riferimento alla sessione code 2694bff1.
- `00 - Inbox/2026-05-23 - Pitch Angelini v3.3 - Atto 1 Ristrutturato.md` → **non toccare automaticamente**, ma Carlo potrebbe voler aggiornare indice e S2/S5 in linea con le decisioni di sessione (segnalare a Carlo, non sovrascrivere).
- `99 - System/Open Tasks` (auto-aggregata da PM Digest) → genera task automatico dai checkbox sopra al prossimo run.

### Task aperti per Carlo (da committare come `- [ ]` nella scheda Angelini Academy)

- [ ] Applicare i 3 prompt patch (Indice S1 · S2 Pilastro 3 · S5 Action title) nell'editor design tool cloud
- [ ] Generare cover hero 3D wow via Nano Banana/Gemini con prompt long-form prodotto
- [ ] Decidere se generare anche il kit iconografia (6 grafiche aggiuntive) o restare con cover hero solo
- [ ] Verificare in editor cloud che Atto 2 (S10-S21) rifletta gli stessi trim/rename concordati per S1
- [ ] Aggiornare MD source v3.3 con i trim indice se le decisioni di sessione sono definitive

### Note di flag

- **Sessione long-lived** spalmata su 3 giorni (26/5 sera → 28/5 notte). Pre-deadline pitch finale gara Angelini Academy del 31/5 — alta densità decisionale.
- **Strumenti tool**: 17 Bash + 4 Read + WebFetch. Nessun Edit/Write su file vault o repo angelini-academy: agente ha lavorato in lettura+analisi+prompt-generation, mai modifica diretta.
- **File HTML del design tool** fetched via URL `api.anthropic.com/v1/design/h/UPMbGJTfuvyMzp7f59oSlw` — export scaricato in `/tmp/design_extract/angelini-pitch-deck-atto-2/`. Non sincronizzato con editor cloud di Carlo.
- **Persone implicate**: Lavinia Ferrari + Claudia Bugno (FuturItaly) + Elena Chiti (FuturItaly) + Caterina Caboni (cliente, owner gara) + Marco Morbidelli (CEO Angelini Academy) — nessuna citazione testuale di loro in sessione, lavoro solo su artefatto deck.
- **Daniele Caporale (FuturItaly)** menzionato nel MD source come co-autore proposta — verificare in scheda persona se è presente o se serve creare.

### Citazioni testuali da preservare (Carlo)

- "Il risultato è venuto molto male e vorrei ripartire da zero senza dargli la reference e far creare a lui qualcosa di veramente... Con effetto wow, qualcosa di tridimensionale, qualcosa di... futuristico, di impossibile da creare da un umano, che solo l'intelligenza artificiale può fare anche se si slega dal resto della presentazione, quantomeno deve richiamare i colori e il concept, deve essere una una prima slide a effetto wow." (28/5)
- "agenti AI mi sembra un po' riduttivo" (26/5) — segnale di insoddisfazione sul wording corrente del deck, da rivedere prima del 31/5.
- "non voglio chiamare a fondo, magari scegliamo una parola più bella tipo deep dive" (26/5).
