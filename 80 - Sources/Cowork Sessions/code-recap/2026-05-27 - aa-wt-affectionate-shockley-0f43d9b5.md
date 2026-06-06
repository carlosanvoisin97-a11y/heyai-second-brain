---
type: session-recap
source: claude-code
session_id: 0f43d9b5
project_path: ~/code/angelini-academy (worktree: affectionate-shockley-bbb8d4)
date_last_activity: 2026-05-27
size_mb: 0.6
status: vault-worthy
created: 2026-05-28
tags: [code-session, recovery-2026-05-28]
---

# Recap Code session — angelini-academy wt affectionate-shockley (0f43d9b5)

Durata sessione: 18:19 → 20:02 (~1h43min). 4 turn utente, 17 invocazioni Bash (tutte Python + openpyxl per leggere/scrivere `.xlsx`), 1 Skill (`anthropic-skills:xlsx`), 1 AskUserQuestion. Sessione parallela esplicita al pitch (l'utente lavora il deck in un'altra chat — questa tocca solo l'Excel).

## Cosa è stato fatto

Iterazione completa del file Excel **Catalogo & Pricing Angelini Academy** lungo tre versioni (v4.2 → v4.3 → vdef → vdef2 review). Filo conduttore: ristrutturazione catalogo per **gara Angelini Academy** (pitch finale 31/5 via FuturItaly).

**Turn 1 (18:19 → ~18:46) — Refactoring v4.2 → v4.3.** Su richiesta utente, applicato bulk di modifiche al foglio `01_Catalogo_Prezzi`: (a) eliminata colonna B "una tantum / continuativo" (info spostata fra parentesi sotto al prezzo); (b) riorganizzata struttura in 3 blocchi (Core → Add-on → Servizi richiesti nel brief ma non per la gara — design brochure, gadget, video); (c) colonna B ora differenzia per **tipo servizio** (Website / Marketing & Content / Strategic Advisory); (d) rimossa colonna C "ownership HeyAI vs FuturItaly" (riservatezza fornitore §13 CLAUDE.md); (e) Riallineamento sito spostato in Core con evidenziazione amber per raccomandare partenza con sito nuovo; (f) wording neutralizzato (no "vostro/vi", solo "da parte del cliente" o "Angelini Academy"). Foglio `02_Pacchetto_Proposto` (ex "Pacchetto Consigliato") rinominato, rimossa dicitura "lato HeyAI" in col B, aggiunte sezioni **Scontistica progressiva** (3/4/all add-on = -5/-10/-15%; impegno annuale -5%) e **Modalità pagamento** (50%+50% una tantum; 30gg fattura per canoni continuativi).

**Turn 2 (18:46) — Rebrand AI Agent.** Su richiesta utente compressione delle 4 modalità dell'agente (Tutor + Career Navigator + Reading Room + Research Engine) in **2 modalità** (Guida formativa + Compagno di ricerca). Proposto nome **"Compagno AI dell'Academy"** (alternative: AI Companion Academy, Aida, Guida AI Academy). Decisione finale utente (esterna alla sessione, evidenziata in vdef): nome adottato **"Agente AI Academy"**.

**Turn 3 (19:25 → ~19:59) — Review iper-dettagliata file vdef.xlsx.** Utente carica `~/Downloads/HeyAI_Angelini_Academy_Catalogo_Pricing_vdef.xlsx` (17KB) per audit pre-cliente. Prodotti **26 findings** strutturati: 5 critici (nome agente non allineato fra fogli, brand "Futuritaly" vs "FuturItaly", freeze panes bug A21, sezione Core non merged, contraddizione "Google Analytics" residua in E19), 10 importanti (descrizioni troppo brevi, "dipendenti e interni" ambiguo, mix IT/EN su Tipo servizio, etichetta "Pacchetto Core" dentro foglio "Pacchetto Proposto", scontistica -15% irrealistica, "TBD" informale), 7 cosmetici (spazi finali, capitalizzazione titoli, colonna F fantasma, freeze panes mancante in proposta), 4 elementi mancanti (data validità offerta, durata contrattuale canoni, T&C). Verificato OK: 22 prezzi allineati catalogo↔proposta, formula `=SUM(B7:B13)=48.500€`, font Arial, palette colori coerente.

**Turn 4 (19:59 → 20:02) — Verifica finale vdef2.** Cross-check su `~/Downloads/Angelini_Academy_Pricing_vdef.xlsx` (versione rinominata, 17KB). **Tutti 22 prezzi allineati**, formula `B14=SUM(B9:B15)=49.500€` corretta (include Batch una tantum, esclude Hub continuativo — design intenzionale). Rilevati 8 problemi residui di wording: (1) "Futuritaly" minuscola in proposta A15; (2) doppio spazio "Totale pacchetto  (una tantum)" introdotto in vdef2; (3) naming Concept divergente fra fogli (manca "creativo"/"design"); (4) descrizione C6 sito tronca; (5) "White paper light" capitalizzato in C8 (lowercase altrove); (6) categoria "Strategic Advisory" singleton (solo 1 voce); (7) "dipendenti e interni" ridondante; (8) note E25-E26 Email perse. Confermati come risolti dalla revisione precedente: nome agente unificato, fill A5 Core OK, "Servizio alternativo (sconsigliato)" → "Servizio alternativo", scontistica realistica, riferimento Google Analytics rimosso.

## Progetti / aree vault toccate

angelini-academy → [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy]].

Cascata stakeholder: [[60 - People/Lavinia Ferrari]] (champion FuturItaly), [[60 - People/Elena Chiti]] (alleata FuturItaly side, contesto "post call Elena 27/5" citato in v4.2), [[60 - People/Caterina Caboni]] (cliente side gara), [[60 - People/Marco Morbidelli]] (CEO Angelini Academy).

## Decisioni

- Catalogo riorganizzato in **3 blocchi**: Pacchetto Core / Add-on opzionali / Servizi citati nel brief gara ma non oggetto della gara.
- Tipo servizio (col B catalogo): tre categorie — **Website**, **Marketing & Content**, **Strategic Advisory**.
- Riallineamento sito: dentro Core con highlight amber (raccomandazione: sito nuovo) — non in sezione "alternativa".
- Wording neutralizzato: niente "vostro/vi", solo "cliente"/"Angelini Academy".
- Ownership fornitore rimossa dall'Excel cliente (riservatezza §13 CLAUDE.md — niente "lato HeyAI" né "FuturItaly" in colonna dedicata; FuturItaly resta visibile solo come team partner nelle note descrittive).
- Agente AI compresso da 4 a 2 modalità (Guida formativa + Compagno di ricerca). Nome finale adottato: **Agente AI Academy** (proposta in chat era "Compagno AI dell'Academy").
- Scontistica progressiva e modalità di pagamento spostate sul foglio Pacchetto Proposto come sezioni dedicate.

## Numeri

- Totale pacchetto Core (formula `=SUM(B9:B15)`): **49.500 €** in vdef2 (vs 48.500€ in vdef precedente).
- Modifiche di prezzo nella revisione finale: **Analytics setup 2.000€ → 2.500€**, **SEO+LLM 4.000€ → 4.500€**, **Riallineamento sito 4.000€ → 5.000€** (tutti coerenti catalogo↔proposta).
- 22 voci totali nel catalogo (8 Core + 11 Add-on + 3 Brief gara non oggetto).
- Scontistica: 3 add-on -5%, 4 add-on -10%, tutti -15% (poi modificato in "4+ add-on -10%" in vdef per realismo), canoni continuativi con impegno annuale -5%.
- Pagamento: una tantum 50%+50% (avvio + consegna); continuativi 30gg fattura.

## Output (file)

- `/Users/carlosanvoisin/claude/20 - Projects/Futuritaly/Angelini Academy/HeyAI_Angelini_Academy_Catalogo_Pricing_v4.3.xlsx` — generato in sessione (turn 1+2).
- `/Users/carlosanvoisin/Downloads/HeyAI_Angelini_Academy_Catalogo_Pricing_vdef.xlsx` — letto in turn 3 (versione utente con modifiche manuali post-v4.3).
- `/Users/carlosanvoisin/Downloads/Angelini_Academy_Pricing_vdef.xlsx` — letto in turn 4 (versione finale post-fix).

## Task / Schede vault da aggiornare (§15)

- [ ] **#p1 Risolvere 8 wording residui prima dell'invio cliente** (referenze al turn 4 review): "Futuritaly" → "FuturItaly" in proposta A15; doppio spazio "Totale pacchetto  (una tantum)" → singolo; allineare naming Concept (creativo/design); completare frase tronca C6 sito; lowercase "white paper light" in C8; rivalutare categoria "Strategic Advisory" singleton; rimuovere "interni" da C7; ripristinare note E25-E26 Email.
- [ ] **#p2 Confermare se freeze panes catalogo è ancora rotto in vdef2** (A23 invece di A5 — verifica strutturale richiesta).
- [ ] **#p3 Aggiungere data validità offerta** (es. "valida fino al…") e riferimento T&C contrattuali.
- [ ] **#p3 Definire durata contrattuale canoni continuativi** (Email, LinkedIn, Hub editoriale) e modalità di disdetta.

Schede da arricchire in `## Log` (Modalità B §15):
- [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy]]: log sessione iterazione v4.2→v4.3→vdef→vdef2 + decisioni strutturali catalogo (3 blocchi, 3 categorie tipo servizio, scontistica, payment terms).
- File esistente `20 - Projects/Futuritaly/Angelini Academy/2026-05-27 - Audit Pricing Angelini Academy.md` (visto in listing turn 0): probabilmente già copre questa sessione — verificare e segnalare cross-reference.

## Citazioni

- Utente turn 1 (18:19): "lavoriamo solo sull'Excel v4.2 [...] sto lavorando IN PARALLELO sul pitch in un'altra sessione".
- Utente turn 3 (19:25): "Devi evitarmi assolutamente di commettere errori di qualsiasi tipo. Devi essere super meticoloso e prevedere qualsiasi tipo di rischio di errore".

## Note di flag

- **Pitch finale 31/5** (gara Angelini Academy via FuturItaly) → questa sessione è asset diretto del deliverable cliente, vault-worthy massimo. Cascata su scheda progetto obbligatoria.
- **Sessioni parallele** dichiarate dall'utente: pitch in altra chat, Excel qui. Coordinarsi via scheda progetto per evitare divergenze.
- **Numeri non in Master Facts Sheet**: il totale Core €49.500 e i prezzi unitari aggiornati (Analytics 2.5K, SEO 4.5K, Riallineamento 5K) non sono ancora nel Master Facts Sheet — verificare se [[99 - System/Master Facts Sheet]] necessita update o se l'audit del file precedente li ha già assorbiti.
- **Riservatezza §13 CLAUDE.md applicata correttamente** in sessione: rimossa colonna ownership "HeyAI vs FuturItaly" dall'Excel cliente. FuturItaly resta visibile come team partner (è co-partecipante della gara, non fornitore opaco) — coerente con la regola "mai citare fornitori HeyAI" che si applica a Soolutions/Silencio/Jakala/Tokio/Aegiscore ma non a FuturItaly (partner di gara).
- **File esce dal vault**: vdef e vdef2 stanno in `~/Downloads/`, non ancora committati nella scheda progetto. A fine pitch, spostare la versione finale in `20 - Projects/Futuritaly/Angelini Academy/`.
