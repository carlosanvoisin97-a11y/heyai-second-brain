---
type: dashboard
created: 2026-05-08
updated: 2026-05-08
purpose: vista PM consolidata di tutto ciò che Carlo deve sapere e monitorare alla data
audience: Carlo Sanvoisin (PM HeyAI)
related:
  - "[[Open Tasks]]"
  - "[[Master Facts Sheet]]"
  - "[[MOC - Home]]"
  - "[[2026-05-08]]"
  - "[[Open Questions]]"
---

# 📊 PM Dashboard — Venerdì 8 Maggio 2026, sera

> Consolidamento di tutto ciò che da PM Carlo deve sapere e monitorare. Snapshot generato dopo l'ultima sessione audit/v3 Achipoint.
> **Gerarchia di urgenza**: 🔴 da chiudere oggi/domani · 🟡 settimana prossima · 🟢 prossime 2 settimane · ⚪ in monitoraggio.

---

## 🎯 Sintesi del giorno (snapshot)

- **Task aperti totali in vault**: 100 (39 #p1 · 37 #p2 · 4 #p3 · 20 senza priorità).
- **Progetti P1 attivi**: 5 (Wave 2 NoLoop, Operation Transformation, Eye Cookies, Eldis Compilatore, Achipoint).
- **Progetti P2 attivi**: 4 (PresidIa, Futuritaly Osservatorio, Angelini Academy, HoReCa).
- **Esposizione contrattuale firmata**: €484K (Wave 2 €300K + Operation Transformation €109K + Eye Cookies €75K).
- **Pipeline in proposta o negoziazione**: ~€175K (Achipoint €38-45K + Futuritaly Osservatorio €42K + PresidIA €40-55K + HoReCa €25K + Angelini €4-5K + add-on Wave 2/Fase 2 vari).
- **Scheduled task health**: ✅ tutti girati oggi (PM Digest 06:11 UTC, Cowork Sessions Index 11:18 UTC).
- **Patch SKILL `cowork-sessions-index`**: ❌ ancora non applicata — da fare manualmente, vedi sezione Decisioni pending.

---

## 🔴 5 priorità della settimana (cosa NON deve sfuggirti)

1. **Bozza contratto Wave 2 da [[Marco Longo (Morbinati & Longo)]]** — ricevuta 7/5 10:22, da leggere e dare riscontro. Allineare con [[Andrea Pazienza]] prima del riscontro all'avvocato. _Progetto: [[_Wave 2 NoLoop|Wave 2 NoLoop]]_
2. **Decisione fornitore Achipoint Soolutions vs Jakala** — preventivo Soolutions arrivato 7/5 17:02 (€10K MVP + opzionali singoli, es. aggiornamento auto periodico €1.600). Cambia il margine: €35K se Soolutions vs €25K se Jakala. Da chiudere prima di mandare la Proposta v3 al cliente. _Progetto: [[Achipoint]] + [[Jakala]]_
3. **Concept proposta Angelini Academy entro fine maggio** — call cliente 8/5 ha ribaltato lo scope (restyling rapido fase 1 + ristrutturazione fase 2, AI ridotta a 1 feature, e-commerce predisposto+oscurato, MBA dimensionato su 45 candidati max, NO chatbot/agente percorsi/calcolatore borse complesso). 3 settimane di tempo. Allineamento Carlo+Daniele+Elena lunedì 11/5 12:00 per ridiscutere pitch finale. _Progetto: [[_Angelini Academy|Angelini Academy]]_
4. **Sessione finale Crowd martedì 12/5** — chiusura formale Wave 1 + saldo. Federico deve consegnare video grouping/roaming + chiusura feature mancanti prima della call. _Progetto: [[Crowd]]_
5. **Evento Generali OnSite MVP 20/5** — interfaccia OK, senza social/condivisione. 12 giorni di tempo. _Progetto: [[_Wave 2 NoLoop|Wave 2 NoLoop]]_

---

## 📅 Calendario critico (prossimi 14 giorni)

| Quando | Cosa | Owner | Status |
|---|---|---|---|
| **8/5 oggi 15:30** | Call formativa Builder Eldis (Stefania, Marta, Giovanna, Alessandra + Simone) | Simone gestisce, Carlo a supporto | 🟡 BUG TIFF da chiudere prima |
| **lun 11/5 12:00** | Allineamento Carlo + [[Daniele Caporale]] + [[Elena Chiti]] — ricalibrare pitch finale Angelini | Carlo organizza | 🔴 critico per pitch finale |
| **lun 11/5 09:00** | `weekly-digest` automatico | scheduled | ⚪ |
| **mar 12/5** | Sessione finale Crowd (chiusura formale Wave 1 + saldo) | Carlo | 🔴 |
| **entro fine maggio** | Concept proposta Angelini Academy (3 settimane dalla call 8/5) | Carlo + Michele | 🔴 |
| **20/5** | Evento Generali — OnSite MVP deve essere pronto | Federico | 🔴 |
| **metà giugno** | Stagione estiva francese (HoReCa) — milestone temporale | TBD | 🟢 |

---

## 📁 Stato per progetto

### 🟢 Wave 2 NoLoop — €300K firmato

- **Status**: Active, kickoff 29/04 ✅, kickoff Soolutions 7/5 sera ✅
- **Eventi**: bozza contratto avv. Longo arrivata 7/5 10:22 → da leggere + riscontro
- **Open task #p1**: 12 (avv. Longo riscontro · approvazione cliente 20/04 · push pagamenti · OnSite MVP 20/5 · lista criticità Federico+Simone · sessioni deep dive · review Venue Finder · multi-location · prompt Sally · fix bug bucket · edit Minutes · firme AI autorizzate)
- **Open task #p2**: 7 (scope OnSite €35K · contratto IP Soolutions · registrazione Minutes · caching DB Minutes · plenaria utenti · prompt Sally · totem NOT)
- **Senza priorità**: 3 (lista AI autorizzate firme · milestone Gantt · Requirement Log → ✅ già caricato 7/5)
- **Blocker attivi**: pagamenti NoLoop in stallo (bando di finanziamento intestazione fatture); Justin out-of-office (canale alternativo Carmen Compare attivato); 11 task Microsoft Lists Soolutions ancora `[ ]`
- **Riferimento**: [[_Wave 2 NoLoop|Wave 2 NoLoop]] · [[Wave2_RequirementLog_FINAL.xlsx]]

### 🟢 Operation Transformation NOT — €109K firmato

- **Status**: Active, contratto firmato 03/04, fase operativa
- **Decisione attiva**: piano B RPA contrattualizzato, attivazione TBD se BAT non dà API
- **Open task #p2**: 3 (verifiche PARD · stima RPA Federico+Simone se attivato)
- **Senza priorità**: 1 (coordinamento Laila spedizioni)
- **Blocker**: API BAT/PARD ancora in attesa risposta cliente (rischio "concreto che non ce le diano" — Justin 30/04)
- **Riferimento**: [[Operation Transformation]]

### 🟢 Eye Cookies (NOT) — €75K Full Ownership firmato

- **Status**: Active, fase operativa, fatture inviate
- **Open task #p2**: 1 (proposta TOTEM per Germano, decisione interna pronta, attesa Germano)
- **Senza priorità**: 2 (licenza API Microlog scadenza · coordinamento lancio fase operativa Germano)
- **Riferimento**: [[Eye Cookies]]

### 🔴 Eldis Compilatore — €130/mese ⏳ NON ancora validato + bug bloccante

- **Status**: Active con BUG TIFF rendering bloccante
- **Open task #p1**: 8 (BUG TIFF · CR descrizione catalogo · hosting/manutenzione €130/mese · supporto operativo €180/h · doc aggregato proposte · mancanze Builder · agenda call 8/5 Simone · risposta Marta Unik Table+RAEE)
- **Open task #p2**: 4 (export selettivo · filtri Builder · fattura token AI · codice gamma UnicTable)
- **Senza priorità**: 1 (documentazione/screen recording)
- **Blocker critico**: BUG TIFF (8 escalation) + Marta non ha completato i test
- **Riferimento**: [[Eldis Compilatore]]

### 🟢 Achipoint — Proposta v3 prodotta, in review pre-invio

- **Status**: Proposta v3 prodotta 8/5 sera, allineata al template PresidIA
- **Pricing cliente**: €38K MVP Essenziale / €45K MVP Completo
- **Pricing fornitore**: ⚠️ **NUOVO 8/5** — preventivo Soolutions €10K MVP arrivato (mail Simone 7/5 17:02) → margine €35K vs €25K se Jakala. Decisione fornitore TBD.
- **Open task #p1**: 1 (Carlo+Michele rivedono v3 prima invio + business case Andrea Pazienza per placeholder sezione 2.2)
- **Open task #p2**: 1 (proposta economica modulare €X+€X+€X — dovrebbe essere chiusa, era anomalia audit ieri sera)
- **Senza priorità**: 4 (BDNCP accessibilità · architetto amico validazione · albi privati · prefiltri restrittivi)
- **Riferimento**: [[Achipoint]] · [v3.docx](computer:///Users/carlosanvoisin/claude/20%20-%20Projects/Achipont/HeyAI_Achipoint_Proposta_Investimento_v3.docx) · [Requirement Log v1](computer:///Users/carlosanvoisin/claude/20%20-%20Projects/Achipont/Achipoint_RequirementLog_v1.xlsx)

### 🔴 Angelini Academy — call cliente 8/5 fatta, scope ribaltato

- **Status**: Active — concept proposta da consegnare entro fine maggio, allineamento interno lunedì 11/5 12:00
- **Cambio scope chiave 8/5**: sito = restyling fase 1 entro giugno + ristrutturazione fase 2; e-commerce predisposto+oscurato (2 opzioni custom vs gateway); MBA dimensionato 45 candidati max; AI ridotta a 1 feature; brand book 2024 confermato; bilinguismo IT/EN mantenuto; copywriting HeyAI in scope; 80-90% eventi interni → no area pubblica
- **Open task #p1**: 7 (recepire brand book Angelini · regia call Q&A → fatta · domande prioritarie A1/A2/A3+F1/F2 → portate · debrief con Daniele/Elena 48h · decisione finale scope sito · email Elena con recap call · target mapping serio · allineamento lunedì 11/5)
- **Open task #p2**: 5 (allineamento Michele dimensionamento ore · delivery FuturItaly o secondo fornitore · pitch ampliato · modulo intelligenza editoriale (A/B test target-based) · pricing modulare con margine FuturItaly esplicito · verifica IT Angelini sviluppo tecnico)
- **#p3**: 2 (Tiziana Carnicelli alleata? · fornitore storico holding contestato)
- **Senza priorità**: 3 (preparazione documento proposta layout navy/teal · mockup come "prova esecuzione" · invio Daniele per validazione)
- **Performance review HeyAI/Carlo**: voto 6.5/10 — 5 pattern Carlo da migliorare (apertura "rifare from scratch" pre-confezionata · 3 NO consecutivi sull'AI in 4 minuti · assunzioni non verificate dimensionamenti · connessione+video off in pitch competitivo · Daniele non ha tenuto la regia, Carlo ha portato avanti la maggior parte delle domande · Michele ha letto fili rossi del brief come categorie editoriali). 3 lezioni operative pitch finale: arrivare con domande non con tesi · AI come leva strategica non shopping list (UNA feature ben dimensionata) · ricalibrare rapporto Carlo/Daniele/Elena (Carlo target ≤30% tempo parlato vs ~70% in call 8/5)
- **Riferimento**: [[_Angelini Academy|Angelini Academy]] + [[2026-05-08 - Indice sessioni#Sessione 6]]

### 🟡 PresidIa — race Silencio vs Jakala

- **Status**: in negoziazione fornitore (€55K Full / €40K Rev Share target)
- **Open task #p2**: 2 (Marco Murolo deve scegliere tra 3 scenari · analizzare format cedolini ricevuti 29/04)
- **Senza priorità**: 2 (fattibilità tecnica scraping siti · partnership modello agenzie subappalto)
- **Riferimento**: [[PresidIa]]

### 🟡 Futuritaly Osservatorio — quotazione consegnata €42K

- **Status**: Active, mockup design committed 02/05 scadenza superata
- **Open task #p1**: 2 (mockup design · aggiornare offerta cliente a €42K era €40K)
- **Open task #p2**: 1 (completare quotazione Multi-tenant Osservatorio)
- **Senza priorità**: 1 (archiviare logo aggiornato + Company Profile)
- **Riferimento**: [[_Futuritaly|Futuritaly]]

### 🟡 Jakala — fornitore in lead per 4 progetti

- **Status**: quotazione finale ricevuta 5/5 sera (€75K totale, allocazione sbilanciata: Achipont €15K + Osservatorio €35K + PresidIA €25K). Rebalance richiesto da Carlo: Achipont €22K + Osservatorio €28K + PresidIA €25K (totale invariato).
- **Open task #p1**: 2 (decidere allocazione 4 progetti dopo confronto Silencio · chiarire annullamento "Punto HeyAi" e rifissare slot)
- **Open task #p2**: 2 (conferma Andrea per PresidIA + Achipont · "ne riparliamo a settembre" se non scelti)
- **Senza priorità**: 1 (modello "interfaccia cliente unica" HeyAI)
- **Decisione tattica recente (8/5)**: NON mandare messaggio rassicurazione "evolutive in pipeline" ad Andrea Pasquali — pattern "parli troppo dopo aver ottenuto quello che vuoi" da rompere. Le evolutive restano leva flessibile (PresidIA/Achipont) per non vincolarle a Jakala per default.
- **Riferimento**: [[Jakala]] · [[Andrea Pasquali]]

### 🟢 HoReCa (Matteo Cosma) — early stage, prezzo di favore

- **Status**: in attesa risposta Silencio (5/5) su disponibilità a prendere il cliente in toto
- **Open task #p2**: 2 (attendere risposta Silencio · se Silencio accetta organizzare passaggio)
- **#p3**: 1 (quantificare scope e produrre quotazione prezzo di favore)
- **Senza priorità**: 3 (definire MVP · verificare fonti dati · interno vs outsourceabile)
- **Riferimento**: [[HoReCa]]

### ✅ NOT Marketing LinkedIn/Sito — saldo fatturato

- **Status**: in consegna, 1 fattura cortesia 29/04 (saldo)
- **Senza priorità**: 2 (verifica chiusura formale · documentare deliverable finali sito + LinkedIn)
- **Riferimento**: [[NOT Marketing - LinkedIn e Sito]]

---

## ⚖️ Decisioni pending (cose che richiedono tu OK Carlo)

1. **Decisione fornitore Achipoint** (Soolutions €10K vs Jakala €20K target) — impatta margine HeyAI €35K vs €25K. Da chiudere prima di mandare Proposta v3 al cliente.
2. **Font header Proposta Investimento** — ieri 7/5 deciso "Aptos sempre". Oggi 8/5 ho usato Acre Medium 10.5pt nella v3 perché PresidIA (template di riferimento che mi hai dato) lo usa. Da confermare: tengo Acre Medium come da PresidIA, oppure ribalto a Aptos come da decisione 7/5?
3. **Footer Proposta Investimento** — ieri 7/5 deciso "solo numerazione pagine centrata". PresidIA invece ha footer **vuoto**. Confermo numerazione (decisione 7/5 esplicita) oppure rimuovo per allinearmi 100% a PresidIA?
4. **Identità "Davide" presente in call cliente Angelini 8/5** — citato da te come FuturItaly ma CLAUDE.md §7 ha solo Daniele Caporale + Elena Chiti. Possibile typo Daniele→Davide, o nuova risorsa FuturItaly? Da chiarire prima di toccare cluster stakeholder.
5. **Patch SKILL `cowork-sessions-index`** — ancora da applicare manualmente (4 sostituzioni guidate, ~15 minuti). Finché non applichi, il task notturno gira con append-only puro e non chiude i checkbox quando la prosa li implica chiusi.
6. **Promozione coaching note "post-mortem call cliente Angelini 8/5"** in scheda dedicata `30 - Areas/Area - Performance & Coaching/` — voto 6.5/10, 5 pattern, 3 lezioni. Sessione index non l'ha creata per policy "mai creare schede automaticamente". Tu decidi se promuovere il contenuto o lasciarlo nell'indice giornaliero.
7. **Bozza email Elena con recap call Angelini girable a Caterina** — pronta in chat sessione 6, non ancora inviata. Decidi firma (congiunto Carlo+Elena vs solo Elena) e timing (subito vs dopo allineamento lunedì 11/5).
8. **Aggiornamento template `90 - Templates/Proposta Investimento.md`** — il template attuale dice "Aptos sempre" e "footer numerazione pagine". Se ribalti su Acre Medium / footer vuoto, va sincronizzato.
---

## ⚠️ Anomalie / debiti tecnici (da audit 7-8/5)

1. **File orfani in root vault**: 1 file riservato gestito fuori archivio operativo (chiuso 8/5 quality check); 1 file ancora in root (gestione manuale Carlo).
2. **Lock files Office non chiusi**: `.~lock.Soolutions Delivery Board - Tasks da importare.xlsx#` (root) + `~$26-05-07 - Prep call FuturItaly Angelini Academy.docx` (00-Inbox). Probabile chiusura impropria.
3. **Inconsistenza checkbox vs prosa Achipont**: task `[ ] Preparare proposta economica modulare (Luigi accetta meglio €X+€X+€X)` aperto in scheda Achipont ma in Eventi chiave c'è "2026-05-07 sera — Prodotti i due deliverable v1: Requirement Log e Proposta di Investimento" e in Open Tasks è già `[x]`. Da riconciliare.
4. **Task ambiguo Wave 2**: `[ ] #p1 Attendere bozza contratto avvocato (Marco Longo, ricezione confermata 28/04)` testo ambiguo + bozza arrivata 7/5. Da riformulare/chiudere.
5. **Doppio run PM Digest 7/5**: 08:02 + re-run no-op alle 08:57 (54 min dopo, fuori jitter 145s). No danno, ma da monitorare nei prossimi giorni se si ripete (possibile bug scheduler).
6. **Categorizzazione Open Tasks**: 11 task setup Microsoft Lists Soolutions etichettati `**#p1**` ma in sezione `## Priorità media (#p2)` — mismatch.
7. **Patch SKILL cowork-sessions-index** ancora non applicata (vedi Decisioni pending #5).
8. **Open Question #34 (scheduler 7/5 non eseguito mattina)**: chiusa dai run regolari di oggi, ma archiviare come risolta in [[Open Questions]].

---

## 💰 Numeri ufficiali di riferimento (snapshot Master Facts)

| Voce | Valore | Note |
|---|---|---|
| **Wave 2 NoLoop bundle** | €300.000 | PDF Proposta Investimento updated 5, 13/04/2026 (€327K listino - €27K sconto ecosistema) |
| **NOT Operation Transformation** | €109.000 | Contratto firmato 03/04 da Paolo Donzelli (Modulo Vendite + Modulo Logistica) |
| **NOT Eye Cookies** | €75.000 | Full Ownership firmato 03/04 |
| **PresidIa** | €55K Full O €40K Rev Share | In trattativa Silencio vs Jakala |
| **Futuritaly Osservatorio** | €42K | Alzato post Silencio 4/5; multi-tenant; mockup committed 2/5 |
| **Achipoint** | **€38K MVP Essenziale / €45K MVP Completo** (cliente) | Proposta v3 prodotta 8/5 sera. Costo HeyAI: Soolutions €10K (NUOVO 7/5) o Jakala €20K target. Margine 67% se Soolutions, 56% se Jakala (su €45K) |
| **HoReCa** | €25K target massimo | Prezzo di favore Garbarino, in valutazione passaggio totale Silencio |
| **Angelini Academy** | €4-5K opzione B pre-Q&A | Range da affinare con Michele dopo 8/5 — concept entro fine maggio |
| **Floor margine HeyAI hard** | €15K | Regola ferma |
| **Markup target** | 1.7-2.0-2.2x | Sweet spot 2.0x default |

---

## 🤖 Stato scheduled task (tutti girati oggi 8/5)

| Task | Schedule | Last run | Stato |
|---|---|---|---|
| `pm-digest-mattutino` | Lun-Ven 08:02 CEST | 2026-05-08 06:11 UTC | ✅ |
| `cowork-sessions-index` | 13:00 + 22:00 ogni giorno | 2026-05-08 11:18 UTC | ✅ — 6 sessioni indicizzate |
| `friday-wrap-up` | Ven 17:00 | 2026-05-04 (next: 8/5 17:00) | ⏳ in arrivo oggi |
| `weekly-digest` | Lun 09:00 | — (next: 11/5 09:00) | ⚪ |
| `dashboard-refresh-manual` | manual on-demand | 2026-05-07 01:16 UTC | ⚪ |
| `claude-chats-sync` | disabilitato 6/5 | — | ❌ |

⚠️ **Patch SKILL `cowork-sessions-index`**: ancora da applicare (decisione #5 sopra).

---

## 🟦 Tematiche sensibili (da gestire con attenzione)

- **Marco Pasquali (NoLoop) ↔ Andrea Pasquali (Jakala)**: relazione padre-figlio. Evitare di mettere Marco in posizione conflittuale; coltivare relazione direttamente.
- **Performance Carlo in call cliente**: voto 6.5/10 per call Angelini 8/5 (pattern recurring "parli troppo", "tre NO consecutivi", "regia non tenuta dai colleghi"). Eventualmente promuovere coaching note in `30 - Areas/Area - Performance & Coaching/`.
- **Pagamenti NoLoop in stallo**: bando di finanziamento intestazione fatture. Se 7-8/5 non si muove, chiamare Garbarino direttamente (decisione esplicita).
- **Flusso fatture attive NoLoop** (operativi → email → Elisa Remigi → BC manuale): classificato, non menzionare apertamente con il cliente (CLAUDE.md §13).

---

## 📋 Open Tasks aggregati (riepilogo per sezione)

> Vista completa in [[Open Tasks]] — qui solo conteggio e top item per sezione.

### 🔴 Priorità alta (#p1) — 39 task

Top item da chiudere oggi/domani 8-9/5:
- Bozza contratto Wave 2 Longo + riscontro
- BUG TIFF Eldis prima call 15:30
- Decisione fornitore Achipoint (Soolutions vs Jakala)
- Email Elena recap call Angelini girable Caterina
- Allineamento lunedì 11/5 12:00 Carlo+Daniele+Elena
- Carlo+Michele review Proposta Achipont v3 + business case Andrea Pazienza
- Trigger digest manuale (se non parte automatico)
- Patch SKILL cowork-sessions-index manuale
- Verifica file campione append-only (audit di te su edit 7/5 sera)
- Recepire brand book Angelini se arriva

### 🟡 Priorità media (#p2) — 37 task

Aggregati per progetto: Wave 2 (8) · Microsoft Lists Soolutions (12 di cui 11 mis-etichettati come `**#p1**`) · NOT (3) · Eldis (4) · Eye Cookies (1) · Achipoint (1) · Angelini (3) · Jakala (2) · HoReCa (2) · PresidIa (1)

### 🟢 Priorità bassa (#p3) — 4 task

- Quotazione HoReCa
- Tiziana Carnicelli alleata Angelini
- Fornitore storico holding Angelini
- Documentazione Eldis

### ⚪ Senza priorità — 20 task

- 4 Achipoint operativi (BDNCP · architetto · albi privati · prefiltri)
- 4 HoReCa setup (MVP · fonti dati · interno/outsource · ruolo HeyAI vs Jakala)
- 3 Wave 2 (firme AI · Gantt · Requirement Log → caricato)
- 3 Angelini (proposta layout · mockup esecuzione · invio Daniele)
- 2 NOT Marketing (chiusura · documentare deliverable)
- 2 PresidIa (scraping · agenzie subappalto)
- 2 Eye Cookies (licenza Microlog · lancio Germano)
- 1 Operation Transformation (Laila spedizioni)

---

## 🔁 Open Questions correlate

- **#30 Stipendi Bruno** (in pausa) — vedi Tematiche sensibili
- **#31 Angelini Academy gara competitiva — scope finale** → in via di chiusura post call 8/5
- **#32 Daniele Caporale ruolo lato FuturItaly** → emerso in call: regia da ricalibrare lunedì 11/5
- **#33 Brand book Angelini** → confermato 2024 ereditato, no rebranding
- **#34 Scheduler Cowork** → chiusa dai run regolari oggi, da archiviare come risolta

---

## 📌 Riferimenti rapidi

- [[Open Tasks]] — vista aggregata 100 task aperti
- [[Master Facts Sheet]] — numeri ufficiali
- [[Open Questions]] — domande aperte
- [[MOC - Home]] — mappa di tutti i progetti/persone/aree
- [[2026-05-08]] — Daily Note di oggi
- [[2026-05-08 - Indice sessioni]] — 6 sessioni indicizzate da `cowork-sessions-index`
- [[CLAUDE]] — istruzioni di sistema
- [[Patch SKILL cowork-sessions-index 2026-05-07]] — patch da applicare manualmente
- [[Audit Claude Chats Estrazione 2026-05-07]] — audit estrazione iniziale
- [[Proposta Investimento]] — template ufficiale aggiornato

---

> **Nota**: questa dashboard è uno snapshot manuale del 8/5 sera. Per stato real-time, [[Open Tasks]] è aggiornato dal `pm-digest-mattutino` ogni mattina lun-ven alle 08:02. Aggiornamenti rapidi al volo: aprire questo file e fare append in fondo.
