---
type: dashboard
updated: 2026-06-11
---

# ✅ Open Tasks

Vista aggregata di tutti i task aperti nel vault. Aggiornata dal task ricorrente PM Digest (8:02 lun-ven).

> **Nota reconcile manuale 29/5 (audit vault — Front 1)**: ripuliti i **41 task chiusi** (`- [x]`/`- [-]`) che erano rimasti nelle sezioni Priorità #p1/#p2 (residuo accumulato perché il PM Digest, che fa questo reconcile allo step 5e, non gira da 26/5). 11 erano duplicati già presenti in "Recentemente chiusi" → rimossi; 30 relocati lì preservando testo+provenienza. Le sezioni Priorità ora elencano **solo task realmente aperti**. Nessun checkbox cambiato di stato, nessun task aperto toccato. I task chiusi >7gg verranno archiviati in `50 - Archive/Open Tasks/2026-05.md` al prossimo run del Digest.

> **Nota PM Digest 11/6/2026 08:02**: 9 email lorde, 7 filtrate (LinkedIn ×5, SP recording scaduto, job listing), **2 email rilevanti**: Andrea Pazienza declinazione retainer Morbinati&Longo [64508] Wave 2, Jakala Scaramuzzi follow-up proposta quotazioni. 1 meeting oggi (Eye Cookies bisettimanale 15:30 CEST). 4 file SP (sicurezza sul lavoro HeyAI — DVR+Nomina medico+Protocollo+fascicolo Pazienza, nessun progetto cliente). 0 chat Teams. **8 task nuovi aggiunti** (+6 in #p1, +2 in #p2) da email + vault scan [[Operation Transformation]] call 9/6. **Reconcile 11/6**: ~58 task [x] spostati in Recentemente chiusi (gap recovery 9/6). **Alert critici**: 🔴 Andrea Pazienza ha inviato ieri declinazione retainer legale a Morbinati&Longo (thread Wave 2) — verificare se impatta solo retainer o anche impegno Wave 2 specifico; 🔴 F24 MAGGIO scade 16/06 (5 giorni); 🔴 Contratto Quadro Soolutions + OE OT con 5 nodi critici pre-firma non ancora in Open Tasks; 🟠 Jakala Scaramuzzi chiede aggiornamento proposta (stale 3 settimane); 🟠 Eye Cookies bisettimanale OGGI 15:30 CEST.

> **Nota PM Digest 10/6/2026 08:02**: 7 email rilevanti (17 lorde, 10 filtrate: LinkedIn ×2, tldv, Italotreno, SP recording, Wrike, Nimble ×2, LinkedIn connection), 0 meeting oggi, 0 file SP, 0 chat Teams rilevanti. **3 task nuovi aggiunti** (+2 in #p1, +1 in #p2). **0 task chiusi** (dichiarazioni detassazione già [x] da ieri). **Alert critici**: 🔴 Lorena Cavecchi escalation rooming Crowd — "non è utilizzabile", richiede call urgente Carlo+Arianna+Lorena; 🔴 F24 MAGGIO scade 16/06 (6 giorni); 🟠 Germano Marano ha risposto OT con note inline 9/6 — leggere; 🟠 Angelini Academy: Tiziana Carnicelli condivide roadmap, meeting luglio da confermare; 🟠 Achipont LOST confermato definitivamente 9/6.

> **Nota PM Digest 9/6/2026 08:02**: 13 email rilevanti (19 lorde, 6 filtrate: 3 LinkedIn, 2 Nimble, 1 tldv), 2 meeting oggi (Visite mediche 09:30 + Eldis canone 13:00), 0 file SP, 0 chat Teams. **3 task nuovi aggiunti** (+2 in #p1, +1 in #p2). **1 task chiuso** (#p2 verifica VM ONCE SRL → Simone aveva risposto con specs, Luciano in implementazione). **Alert critici**: 🔴 F24 MAGGIO scade 16/06 (7 giorni); 🟠 Eldis rinegoziazione canone call OGGI 13:00 (Stefania Solidoro); 🟠 Angelini Academy economics da verificare (lab editoriale €40K separazione quota FuturItaly); 🟠 Carmen re-sync stale da ieri.

> **Nota cleanup 14/5 sera**: rimosse sotto-sezioni "Mergerati da Aggiunte X/5" e sezione "Aggiunte dal PM Digest 14/5" — i task vivono ora come flat list direttamente nelle sezioni Priorità, con marker `_da PM Digest X/5_` in coda a preservare provenienza. Patch SKILL `pm-digest-mattutino` aggiornata per non ricreare il pattern nei prossimi run.

## Priorità alta (#p1)

- [ ] **#p1** Carlo: **verificare con [[Andrea Pazienza]] email declinazione retainer Morbinati & Longo** (10/6) — Andrea ha comunicato a "Mauro" (studio legale) che HeyAI non può sostenere i costi del retainer annuale; confermare se il rifiuto riguarda solo il retainer o impatta anche l'impegno specifico Wave 2 con Avv. [[Marco Longo (Morbinati & Longo)|Marco Longo]]; eventuale allineamento pre-call _da email Andrea Pazienza 10/6 — PM Digest 11/6_
- [ ] **#p1** Carlo: **rispondere a [[Luigiandrea Scaramuzzi (Jakala)|Scaramuzzi]] (Jakala) — follow-up proposta quotazioni** (email 10/6); Carlo aveva promesso risposta entro prima settimana giugno (stale 3 settimane); con Achipont LOST il bundle €50K Osservatorio+Achipont non è più applicabile — comunicare tempistica o decisione _da email Scaramuzzi 10/6 — PM Digest 11/6_
- [ ] **#p1** Carlo: **review e firma bozze Contratto Quadro Soolutions + OE Operation Transformation** — 5 nodi critici aperti pre-firma: entità cliente NOT/NoLoop, contratto cliente non firmato, cap responsabilità art. 12.1, royalty/riuso art. 6.2-6.3, GDPR art. 10 vs esclusione E.2. Checklist → [[2026-06-08 - Review Contratto Quadro + OE Soolutions]] _(9/6: nodo #4 royalty/riuso parzialmente sciolto — cessione IP circoscritta all'ecosistema custom, modelli AI esclusi ma con uso illimitato al cliente)_ _da [[Operation Transformation]] — vault scan 11/6_
- [ ] **#p1** Federico+Simone: produrre **lista componenti tecniche di terzi/open-source NON cedibili come IP** + spec modello/LLM base + **spec retraining da parte di terzi** (condizione vincolante Bruno) → serve a Carlo per comunicare perimetro IP a [[Germano Marano|Germano]] e al cliente _da [[Operation Transformation]] — call 9/6, vault scan 11/6_
- [ ] **#p1** Carlo: **inviare a Federico+Simone email con condizione vincolante sine qua non** (codice sorgente + spec modello base + spec training di terzi, così che un altro sviluppatore possa ritrainare) e attendere conferma scritta _[decisione team 9/6 — il lock-in è rischio HeyAI, non NoLoop]_ _da [[Operation Transformation]] — vault scan 11/6_
- [ ] **#p1** [[Andrea Pazienza]]: **inviare a Soolutions i 3 documenti** (Accordo Quadro + scheletro OE + OE Operation Transformation) per review — dichiarato "ve lo mando subito" in call 9/6, da confermare invio _da [[Operation Transformation]] — call 9/6, vault scan 11/6_
- [ ] **#p1** Carlo: **rispondere a [[Lorena Cavecchi]] e organizzare call urgente** con Lorena+Arianna Giordanella — escalation diretta (solo a Carlo, 9/6 16:32): rooming NON UTILIZZABILE ("rallenta il lavoro in maniera esponenziale, va cambiato"), vuole mostrare il problema live; chiedere anche aggiornamento sulle altre modifiche Arianna _da email Lorena 9/6 — PM Digest 10/6_
- [ ] **#p1** Carlo: **leggere note inline di [[Germano Marano|Germano]]** nella risposta OT (9/6 14:20, "note in giallo in linea") all'email recap Carlo 8/6 — verificare action items su API BAT/PARD, prioritizzazione form, call Carmen, doc _da email Germano 9/6 — PM Digest 10/6_
- [ ] **#p1** Carlo: verificare con [[Elena Chiti]] se slide pricing inviata 8/6 risolve separazione lab editoriale €40K da quota FuturItaly in economics Angelini Academy — se no, correggere prima della risposta di [[Caterina Caboni]] _da email Elena 8/6 — PM Digest 9/6_
- [ ] **#p1** Carlo+[[Andrea Pazienza]]: **call Eldis** (Teams) — [[Stefania Solidoro]] ha aperto rinegoziazione canone mensile post-onboarding; presidiare margini _(call era 9/6 13:00 — verificare esito e prossimi passi)_ _da email Stefania 8/6 + calendar 9/6 — PM Digest 9/6_
- [ ] **#p1** Carlo ↔ [[Carmen Compare|Carmen]]: **re-sync** su esito visita BAT in sede (ven 5/6) + escalation [[Massi Sinigaglia|Massi]] per sblocco API BAT/PARD _(stale da lun 8/6)_ _da [[Operation Transformation]] — PM Digest 8/6_
- [ ] **#p1** Carlo + [[Massi Sinigaglia|Massi]]: **conferma formale prioritizzazione** registrazione dati vs modello predittivo (via email a Germano+Massi) _da [[Operation Transformation]] — PM Digest 8/6_
- [ ] **#p1** Federico+Simone: **valutazione tecnica richiesta Carmen+Justin** (strumento automazione inserimento dati — candidata a priorità partenza sviluppi) _da [[Operation Transformation]] — PM Digest 8/6_
- [ ] **#p1** Carlo: **organizzare call con [[Carmen Compare|Carmen]] (questa settimana)** per ingestion dati storici NOT (copre anche [[Eye Cookies]]) _da [[Operation Transformation]] — PM Digest 8/6_
- [ ] **#p1** 🔴 **F24 MAGGIO 2026 DA VERSARE ENTRO 16/06/2026** — Simona Velotta FMA (5/6 10:04, NON LETTA): LUL+F24 maggio inviati, scadenza versamento 16/6 — coordinare con [[Andrea Pazienza]] _da PM Digest gap 27/5-7/6_
- [ ] **#p1** Carlo: **follow-up call automazione NOT** (Carmen Compare+Justin Lauro, avvenuta 4/6) — verificare esito e prossimi passi tool automazione BAT/PARD _da calendar 4/6 — PM Digest gap 27/5-7/6_
- [ ] **#p1** Carlo + [[Laila El Zieny]]: coordinamento spedizione **prodotti fisici NOT/BAT** verso team di sviluppo HeyAI → setup per **riconoscimento prodotti tramite IA** (training computer vision). Necessario indirizzo di spedizione da team di sviluppo, poi Carlo coordina con Laila la consegna _da [[Operation Transformation]]_
- [ ] **#p1** Federico+Simone: **indirizzo di spedizione per i prodotti fisici Operation Transformation** (riconoscimento prodotti tramite IA) → comunicarlo a Carlo per organizzare consegna con Laila _da [[Operation Transformation]]_
- [ ] **#p1** Carlo: continuare **push lato [[Justin Lauro]] sulle API BAT/PARD** (carry-over dal 6/5, ribadito in call interna 13/5 — owner Carlo, NON Soolutions) _da [[Operation Transformation]]_
- [ ] **#p1** Carlo: **gestire chain setup tecnico NOT** — call Germano live Microlog per Eye Cookies + call Microlog payload/API Eye Cookies + call team operativo Carmen Compare per ingestion dati storici BAT (base modello predittivo) — entro questa settimana _da [[Operation Transformation]]_
- [ ] **#p1** [[Arianna Giordanella]] (25/5 16:52) — nuovo segnale Crowd: mail singola OK, lista ospiti form ancora ko → escalare a Federico+Simone con dettaglio specifico (distinguere bug singolo vs lista ospiti) _da email Arianna 25/5 — PM Digest 26/5_
- [ ] **#p1** Carlo: leggere offerta Aegiscore v5 (allegato PDF `Aegiscore_Offerta_OsservatorioAI_Aggiornata_Mag2026_v5.pdf`, ricevuto 25/5 09:16 da [[Luca Fratini (Aegiscore)]]) — valutare tempistiche + clausola ownership codice sorgente → rispondere con feedback + chiudere trattativa. Sblocca decisione Jakala vs Silencio/Aegiscore. _da email Luca Fratini 25/5 — PM Digest 25/5_
- [ ] **#p1** Carlo: rispondere a [[Germano Marano]] (email 25/5 08:19) — mandare 2-3 opzioni orarie per video call con Microlog (Germano coordina e propone) + condividere roadmap aggiornata Eye Cookies. Germano ha già richiesto a Microlog preventivo per componente near real-time API. _da email Germano 25/5 — PM Digest 25/5_
- [ ] **#p1** Carlo: rispondere ad [[Arianna Giordanella]] (email 21/5 17:16, **non letta**) su difficoltà end-to-end Crowd + decidere con [[Lorena Cavecchi]] su video tutorial (Lorena: "effettivamente ci aiuterebbe ad accelerare") _da email Arianna+Lorena 21/5 — PM Digest 22/5_
- [ ] **#p1** Carlo: **confrontare quotazione Jakala vs Silencio/Aegiscore** e decidere allocazione — Jakala (Luigiandrea Scaramuzzi, 15/5 08:17): Osservatorio €32K · Achipoint €30K · **bundle €50K se entrambi** (⚠️ bundle non applicabile: Achipont LOST 9/6) · PresidIA €25K · HoReCa disponibile altro dipartimento. Silencio/Aegiscore (bundle 4 proj €100K): PresidIA €35K · OssAI €20K · HoReCa €27K · Achipont €18K. Nuovo contatto Jakala: `luigiandrea.scaramuzzi@jakala.com` | +393317090996 _da PM Digest 15/5_
- [ ] **#p1** Carlo: rispondere a [[Germano Marano]] (NOT) su Eye Cookies — roadmap da condividere + proposta call bisettimanale + aggiornamento totem _da email Germano 19/5 11:27 — PM Digest 20/5_
- [ ] **#p1** Push pagamenti NoLoop — se entro fine settimana non si muove nulla, chiamare [[Laura Garbarino]] direttamente _da [[_Wave 2 NoLoop|Wave 2 NoLoop]]_
- [ ] **#p1** Federico+Simone: lista criticità/deep dive necessari dal Requirement Log Wave 2 (priorità VF→LeadMe→OnSite→Progress) _da [[_Wave 2 NoLoop|Wave 2 NoLoop]]_
- [ ] **#p1** Carlo: organizzare sessioni deep dive Wave 2 per reparto/persone post-lista Federico+Simone _da [[_Wave 2 NoLoop|Wave 2 NoLoop]]_
- [ ] **#p1** Federico+Simone: review finale Venue Finder + OK per comunicare MVP al team NoLoop _da [[_Wave 2 NoLoop|Wave 2 NoLoop]]_
- [ ] **#p1** Federico: implementazione multi-location consecutivo Venue Finder _da [[_Wave 2 NoLoop|Wave 2 NoLoop]]_
- [ ] **#p1** Federico: settings prompt Sally in sola visualizzazione abilitato a Carlo _da [[_Wave 2 NoLoop|Wave 2 NoLoop]]_
- [ ] **#p1** Federico+Simone: fix flow saltato Venue Finder — sezioni Attività/Trasporti/Ristoranti mancanti dopo Venue+Hotel (riprodotto su 2 ricerche) _da [[Venue Finder]]_
- [ ] **#p1** Federico+Simone: fix mapping link fonti Venue Finder → strutture sbagliate (es. "Hyatt Milano" apre resort Taormina) _da [[Venue Finder]]_
- [ ] **#p1** Federico+Simone: fix link fonti Venue Finder che aprono pagine vuote (sezione Attività) _da [[Venue Finder]]_
- [ ] **#p1** Federico+Simone: fix risposte vuote Sally chat (`[]` a video poi recovery con "intoppo tecnico"); pattern ricorrente _da [[Venue Finder]]_
- [ ] **#p1** Federico+Simone: fix rendering JSON grezzo Venue Finder per lista requisiti critici → bullet list formattati _da [[Venue Finder]]_
- [ ] **#p1** Soolutions: chiusura mancanze Builder Eldis (pulsante export + altra) entro 7/5 _(stale)_ _da [[Eldis Compilatore]]_
- [ ] **#p1** Aggiornare offerta cliente Futuritaly a €42K (era €40K) prima dell'invio _da [[_Futuritaly|Futuritaly]]_

## Priorità media (#p2)

- [ ] **#p2** Andrea + Elena (Soolutions): **call di 10 min per chiudere dicitura fattura** (riferimento a OE firmato + cessione IP al saldo ultima tranche) _da [[Operation Transformation]] — call 9/6, vault scan 11/6_
- [ ] **#p2** Carlo: **valutare accesso al gestionale commesse Soolutions** (Simone pubblica su produzione, fornisce CLI/MCP + skill) come possibile evoluzione della Delivery Board _da [[Operation Transformation]] — call 9/6, vault scan 11/6_
- [ ] **#p2** Carlo+Michele: **confermare date meeting luglio Angelini Academy** con [[Tiziana Carnicelli]] — [[Elena Chiti]] propone 8/7 ore 11 o 15 oppure 9/7 ore 11 o 16:30; [[Caterina Caboni]] suggerisce seconda settimana luglio; rispondere ad Elena con slot confermato. Tiziana condivide la roadmap — segnale positivo. _da email Elena+Caterina 9/6 — PM Digest 10/6_
- [ ] **#p2** Simone+Carlo: monitorare completamento espansione VM [[Luciano Pecorella]] (ONCE SRL) verso 200GB target per installazione Builder Eldis — già aggiunti 2GB RAM + 20GB vSSD (email 8/6) _da email Luciano 8/6 — PM Digest 9/6_
- [ ] **#p2** [[Germano Marano|Germano]] (NoLoop): **verifica interna stato API BAT** (esistono / perché non esposte) + interesse BAT modulo tracking prodotti per tabacchini _da [[Operation Transformation]] — PM Digest 8/6_
- [ ] **#p2** Aspettare risposta [[Marco Murolo]] a email 13/5 22:48 per slot call settimana 18/5 — ⚠️ Marco fuori Roma ultime 2 settimane di maggio: finestra disponibile SOLO ~18-22/5. Se non si chiude entro metà settimana 18/5, il progetto slitta a giugno _(stale, verificare)_ _da PM Digest 14/5_
- [ ] **#p2** **Calibrare `cadence_days`** con Carlo sulle 15 schede CRM (5-10 min) — farlo prima del run `crm-velocity` lun 18/5 per evitare falsi positivi _da deployment PKM 12/5_
- [ ] **#p2** Completare quotazione Multi-tenant Osservatorio completo (richiesto 27/04) _da [[_Futuritaly|Futuritaly]]_
- [ ] **#p2** Formalizzare contratto IP con [[Federico Saladino (Soolutions)]] + [[Simone Montanari (Soolutions)]] _da [[_Wave 2 NoLoop|Wave 2 NoLoop]]_
- [ ] **#p2** Registrazione call esterne Minutes (Simone, parte appena Wave 2 ufficialmente attiva) _da [[_Wave 2 NoLoop|Wave 2 NoLoop]]_
- [ ] **#p2** Caching DB minute executive (Federico, enhancement) _da [[_Wave 2 NoLoop|Wave 2 NoLoop]]_
- [ ] **#p2** Plenaria utenti Minutes — Carlo richiede data a Garbarino per demo + reminder uso corretto _da [[_Wave 2 NoLoop|Wave 2 NoLoop]]_
- [ ] **#p2** Carlo: testare il prompt Sally Venue Finder (sola visualizzazione) e proporre riformulazione _da [[_Wave 2 NoLoop|Wave 2 NoLoop]]_
- [ ] **#p2** Federico+Simone: proposta scritta totem + kit multi-SIM/connettività per NOT _da [[Operation Transformation]]_
- [ ] **#p2** Marco Murolo deve scegliere fra i 3 scenari _da [[PresidIa]]_
- [ ] **#p2** Analizzare format cedolini ricevuti da Marco (29/04) prima del prossimo incontro _da [[PresidIa]]_
- [ ] **#p2** Fattura prossima Eldis: includere consuntivo token AI fino a oggi _da [[Eldis Compilatore]]_
- [ ] **#p2** Preparare proposta TOTEM per Germano _da [[Eye Cookies]]_
- [ ] **#p2** Se attivazione RPA: stima sviluppo da Federico Saladino + Simone Montanari _da [[Operation Transformation]]_

## Priorità bassa (#p3)

- [ ] **#p3** Quantificare scope e produrre quotazione HoReCa (prezzo di favore) _da [[HoReCa]]_

## Senza priorità esplicita

- [ ] Verificare licenza API Microlog Eye Cookies (in scadenza, NoLoop deve rinnovare) _da [[Eye Cookies]]_

## Recentemente chiusi (storico ultimi 7gg)

<!-- Reconcile batch 11/6/2026: ~58 task [x]/[-] spostati dalle sezioni Priorità #p1/#p2/#p3/Senza-priorità. Tutti chiusi 2026-06-09 nel gap recovery 27/5→9/6. Per categoria:
- Angelini Academy (pitch 5/6, mockup, economics, review interna, reel, slide patches, prototipo sito, pitch deck, proposta economica, consegna cliente) ✅ 2026-06-09
- Eldis Builder (9 modifiche light, studi fattibilità 6 CR, documento aggregato proposte, fix BUG TIFF, quotazione CR, hosting, supporto operativo, Marta Garrafa risposta, export selettivo, fix persistenza filtri, verifica codice gamma UnicTable, lista campi scheda prodotto) ✅ 2026-06-09
- Venue Finder (fix duplicazione blocco requisiti, fix rendering markdown chat Sally) ✅ 2026-06-09
- Soolutions Lists (setup, viste kanban/progetto/P1/scadenza, guest access, notifica, doppio check 30 righe, link a Federico+Simone) ✅ 2026-06-09
- Wave 2 NoLoop (DPA ex novo, cash-flow Andrea, contratti a Velotta, email Longo letta, AWS thread, bozza contratto Longo letta, Jakala PQ rebalance attesa, milestone Gantt, batch task contratto 14-15/5) ✅ 2026-06-09
- Operation Transformation NOT (scope update BAT solo, Carmen dubbi struttura dati, scope update Laila, dichiarazioni detassazione, email recap Germano inviata 8/6, Federico validazione architettura, inviato form maschera unica, verifica PARD, batch task 7/5, Justin switch BAT) ✅ 2026-06-09
- Eye Cookies (lettura mail Germano, lancio fase operativa coordinato, Federico+Simone risposta mail) ✅ 2026-06-09
- Angelini Academy post-call (feedback UCL, tassonomia OpCo, test form, test HeroBridgeConstellation, architettura doppio binario, reel Veo, CapCut montaggio, cronometrare pitch, esercizio pre-call, bio Morbidelli, fix /engaged-network, decisione editoriale, copy hero, microcopy sito, firma slide, feature AI ribaltamento NO) ✅ 2026-06-09
- CRM velocity (ping Garbarino, touchpoint Donzelli, chiamata Pasquali) ✅ 2026-06-09
- Futuritaly (mockup design, logo e Company Profile archiviati) ✅ 2026-06-09
- HoReCa (MVP definito, fonti dati, decisione outsource, ruolo HeyAI interfaccia cliente, passaggio Silencio) ✅ 2026-06-09
- Achipoint (analisi preventivo Soolutions vs Jakala, accessibilità BDNCP, architetto amico, albi fornitori, prefiltri restrittivi) ✅ 2026-06-09
- PresidIA (partnership agenzie, scraping senato, proposta a Luigi) ✅ 2026-06-09
- NOT Marketing (verifica chiusura delivery Michele+Andrea) ✅ 2026-06-09
- Jakala (conferma PresidIA+Achipont, comunicazione "ne riparliamo settembre", Scaramuzzi attesa) ✅ 2026-06-09
- Sistema (scheduler drift chiuso, sharepoint_search riverificato, Triage Aegiscore eseguita, Obsidian Git sync) ✅ 2026-06-09
-->

- [x] ~~Carlo+Simone: verifica risposta Luciano Pecorella (ONCE SRL, IT Eldis) su specs VM~~ → ✅ Simone aveva risposto con specs; Luciano ha aggiunto RAM+vSSD e sta completando espansione verso 200GB — installazione Builder Eldis in corso _da PM Digest 9/6_
- [x] ~~Carlo+team: Allineamento di Team HeyAI ore 19:30~~ → ✅ 25/5 sera: meeting avvenuto, recap Fireflies pervenuto 19:31 CET _da PM Digest 26/5_
- [x] ~~Carlo: rispondere a [[Marco Merli]] su AWS/OpenRouter~~ → ✅ 21/5: AWS approvato, noloop.eu fuori sandbox, quote 50.000 invii/giorno attive in produzione _da PM Digest 22/5_
- [x] ~~Carlo: inviare email recap call 18/5 a Elena Chiti + Daniele Caporale~~ → ✅ inviata 2026-05-19 14:27 (verificata in Outlook) _da PM Digest 20/5_
- [x] ~~Carlo: invio Proposta Achipont a Luigi (deadline 18/5)~~ → ✅ Luigi ha risposto "R: Proposta di quotazioni" il 19/5 17:09 — proposta ricevuta _da PM Digest 20/5_
- [x] ~~Call allineamento Proposta Sito Angelini Academy ore 17:00 con Elena Chiti + Daniele Caporale + Michele~~ → ✅ avvenuta 2026-05-18 17:00; post-mortem Sessione 5 + coaching note `30-Areas/Area - Performance & Coaching/2026-05-19` _da PM Digest 19/5_
- [x] ~~Call Avv. Longo ore 16:00 contratto Wave 2 fine tuning Art. 4.5/DPA/refuso~~ → ✅ avvenuta 2026-05-18 16:00 (confermata da calendar entry Daily Note 18/5) _da PM Digest 19/5_
- [x] ~~Rispondere a Elena Chiti su slot call Angelini Academy sito~~ → ✅ risolto — call avvenuta 18/5 _da PM Digest 19/5_
- [x] ~~Scegliere slot Avv. Longo (opzioni lun 16/5 o mar 19/5)~~ → ✅ call avvenuta 18/5 16:00 _da PM Digest 19/5_
- [x] ~~Accettare invito Teams "Review Contratto Avv. Longo" — call 14/5 13:00~~ → ✅ chiuso 2026-05-15: call avvenuta, Andrea ha inviato risposta a Longo 14/5 15:12, Longo ha risposto 14/5 16:20 _da PM Digest 15/5_
- [x] ~~Verificare se Longo ha emesso quotazione/preventivo Wave 2~~ → ✅ chiuso 2026-05-15: confermato tramite scambio email 13-14/5 _da PM Digest 15/5_
- [x] ~~Quando arriva quotazione: confrontare Jakala vs Silencio~~ → ✅ chiuso 2026-05-15: quotazione Jakala arrivata, nuovo task con numeri in cima a #p1 _da PM Digest 15/5_

- [x] ~~Bozza contratto Wave 2 da [[Marco Longo (Morbinati & Longo)]] — milestone calendario **7/5**~~ → ✅ chiuso 2026-05-08: bozza ricevuta 7/5 ore 10:22 _da [[_Wave 2 NoLoop|Wave 2 NoLoop]]_
- [x] ~~Ricevere quotazione finale scritta da [[Andrea Pasquali]] (entro 6/5 mattina)~~ → ✅ chiuso 7/5 _da [[Jakala]]_
- [x] ~~Inviare email a Justin con check-point + decisione attivazione piano B~~ → ✅ chiuso 7/5 _da [[Operation Transformation]]_
- [x] ~~Insistere con BAT per API native (Justin in lavorazione)~~ → ✅ chiuso 7/5 _da [[Operation Transformation]]_
- [x] ~~Carlo fa push fornitori mercoledì 6/5~~ → ✅ chiuso 7/5 _da [[Achipoint]]_
- [x] ~~Andrea Pazienza coinvolto su business case Achipont~~ → ✅ chiuso 7/5 _da [[Achipoint]]_
- [-] ~~Uscita proposta cliente mercoledì sera Achipont~~ → ❌ annullato 7/5 _da [[Achipoint]]_
- [x] ~~Preparare proposta commerciale Achipont~~ → ✅ chiuso 7/5 sera _da [[Achipoint]]_
- [x] ~~Carlo gira a Michele i 4 deliverable Angelini Academy entro stasera 5/5~~ → ✅ chiuso 7/5 _da [[_Angelini Academy|Angelini Academy]]_
- [-] ~~Michele produce mockup navigabile mercoledì 6/5~~ → ❌ annullato 7/5 _da [[_Angelini Academy|Angelini Academy]]_
- [-] ~~Review congiunta mercoledì 6/5 sera Angelini~~ → ❌ annullato 7/5 _da [[_Angelini Academy|Angelini Academy]]_
- [-] ~~Rifinitura Angelini Academy giovedì 7/5~~ → ❌ annullato 7/5 _da [[_Angelini Academy|Angelini Academy]]_
- [x] ~~Confermare a Elena Chiti ok per video call 7/5 ore 16:30~~ → ✅ chiuso 7/5 _da [[2026-05-06]]_
- [x] ~~Decidere footer template Proposta Investimento~~ → ✅ deciso 7/5 sera _da template_
- [x] ~~Verificare disponibilità font Acre Medium~~ → ✅ deciso 7/5 sera: Aptos sempre _da template_
- [x] ~~Decidere se rigenerare Proposta Achipoint v1~~ → ✅ deciso 7/5 sera: si rigenera v2 _da [[Achipoint]]_
- [x] ~~Setup Microsoft Lists "Soolutions Delivery Board"~~ ✅ creata 6/5 sera _da [[99 - System/Workflow Delivery Soolutions]]_
- [x] ~~Vista Board (kanban per Stato)~~ ✅ creata 6/5 sera _da [[99 - System/Workflow Delivery Soolutions]]_
- [x] ~~Inviare fattura/importo a Massi Sinigaglia~~ → ✅ chiuso 7/5 _da [[Eye Cookies]]_
- [x] ~~Aggiornare Massi sullo stato sviluppo~~ → ✅ chiuso 7/5 _da [[Eye Cookies]]_
- [x] ~~Allineare con Justin Lauro tramite Carmen Compare~~ → ✅ chiuso 7/5 _da [[Operation Transformation]]_
- [x] ~~Allineamento con Michele su dimensionamento ore Angelini Academy~~ → ✅ chiuso 7/5 _da [[_Angelini Academy|Angelini Academy]]_
- [x] ~~Predisporre lista AI autorizzate per firma separata~~ → ✅ chiuso 7/5 _da [[_Wave 2 NoLoop|Wave 2 NoLoop]]_
- [x] ~~Preparare Requirement Log Wave 2~~ → ✅ chiuso 7/5 _da [[_Wave 2 NoLoop|Wave 2 NoLoop]]_
- ✅ ~~Riaprire Wrike~~ → superato dalla decisione 6/5 di adottare Microsoft Lists

<!-- relocati dal reconcile manuale 29/5 — erano [x]/[-] stale nelle sezioni Priorità #p1/#p2; spostati qui per ripulire la vista Priorità. Provenienza originale preservata nel marker _da ..._ -->
- [x] **#p1** Carlo: confermare a [[Elena Chiti]] touchpoint venerdì 15/5 pomeriggio (richiesto nell'email 13/5 21:38); in agenda: feedback framework strategico + mockup, brand book Angelini 2024 ancora da ricevere _da PM Digest 14/5_
- [x] **#p1** Call interna Carlo+[[Andrea Pazienza]] sui commenti da girare a Longo — entro **gio 14/5** _da [[_Wave 2 NoLoop|Wave 2 NoLoop]]_
- [x] **#p1** Email a [[Marco Longo (Morbinati & Longo)|Avv. Longo]] con commenti consolidati: (a) costi escrow a carico cliente Art. 4.5; (b) refuso "1.2"→"2.2" Art. 2; (c) DPA timing; (d) eventuale chiarimento "concorrente" Art. 4.4 — entro **ven 15/5** _da [[_Wave 2 NoLoop|Wave 2 NoLoop]]_
- [x] **#p1** Elena: **consolidare target + insight Angelini Academy su laboratorio editoriale** (scaduto 12/5, verificare se fatto) _da call 11/5_
- [x] **#p1** Elena: invio docx domande tecniche v1.1 a [[Caterina Caboni]] (bozza email già pronta da Carlo) — atteso, verificare se inviato _da call 11/5_
- [x] **#p1** Allineamento HeyAI+FuturItaly Angelini Academy → **giovedì 14/5** (data da fissare con Elena — oggi!) _da call 11/5_
- [x] **#p1** Attesa risposta [[Danilo Piersanti (Silencio)|Silencio]] con tempistiche indicative per ciascun progetto _da [[Jakala]] / [[PresidIa]] / [[Osservatorio Strategico]]_
- [x] **#p1** Target mapping consolidato Angelini (1 slide, 15-25 nomi/aziende/network) — Carlo + [[Elena Chiti|Elena Chiti (Futuritaly)]], entro **17/5** _da prep call 11/5_
- [x] **#p1** Mandare recap WhatsApp post-call 11/5 a Daniele + Elena _(stale — verificare se fatto)_ _da prep call 11/5_
- [x] **#p1** **Kickoff Wave 2 con Federico+Simone** (era 7/5 sera, stale — verificare stato) _da [[_Wave 2 NoLoop|Wave 2 NoLoop]]_
- [x] **#p1** OnSite MVP per evento Generali **20/5** (interfaccia OK, senza social/condivisione) _da [[_Wave 2 NoLoop|Wave 2 NoLoop]]_
- [x] **#p1** Federico+Simone: fix bug bucket / applicativi giù in test (intercettato 6/5) _da [[_Wave 2 NoLoop|Wave 2 NoLoop]]_
- [x] **#p1** Federico: edit manuale task/assegnatari Minutes — push in prod _da [[_Wave 2 NoLoop|Wave 2 NoLoop]]_
- [x] **#p1** **Federico** (7/5): registrare video grouping + roaming per Crowd, mandarlo prima della sessione 12/5 _da Crowd_
- [x] **#p1** **Federico** (7/5): chiusura feature mancanti Crowd entro la sessione del 12/5 _da Crowd_
- [x] **#p1** Simone: agenda + conduzione call formativa Builder 8/5 _(stale)_ _da [[Eldis Compilatore]]_
- [x] **#p1** Chiarire con [[Andrea Pasquali]] l'annullamento del "Punto HeyAi" e rifissare slot per smarcare domande commerciali _da [[Jakala]]_
- [x] **#p1** Recepire (se arriva) brand book Angelini + video AA da Elena prima del Q&A _da [[_Angelini Academy|Angelini Academy]]_
- [x] **#p1** Gestione call Q&A: Carlo a supporto su HeyAI/sito, regia a [[Daniele Caporale]] e [[Elena Chiti|Elena Chiti (Futuritaly)]] _da [[_Angelini Academy|Angelini Academy]]_
- [x] **#p1** Porre domande prioritarie A1, A2, A3 (scope, sezioni nuove, lingua) + F1, F2 (decisori e modello fornitori) _da [[_Angelini Academy|Angelini Academy]]_
- [x] **#p1** Debrief interno con Daniele/Elena entro 48h dalla call _da [[_Angelini Academy|Angelini Academy]]_
- [x] **#p1** Trigger manuale `pm-digest-mattutino` dal pannello Scheduled per recuperare il digest non eseguito stamattina _da [[2026-05-07]]_
- [x] **#p1** Carlo+Michele rivedono la Proposta Achipont v1 prima dell'invio cliente; allineare con Andrea per sostituire placeholder sezione 8.3 _da [[Achipoint]] + [[2026-05-07]]_
- [x] **#p1** Verifica a campione che gli edit del 7/5 sera siano stati append-only _da [[2026-05-07]]_
- [x] **#p1** Leggere la bozza contratto Wave 2 da [[Marco Longo (Morbinati & Longo)|Avv. Longo]] (7/5 10:22) e preparare riscontro _da [[_Wave 2 NoLoop|Wave 2 NoLoop]] + [[2026-05-08]]_
- [x] **#p1** Verificare l'orario reale del Q&A Angelini Academy (delta vault vs calendar) _da [[_Angelini Academy|Angelini Academy]] + [[2026-05-08]]_
- [x] **#p2** **Triage scheda Aegiscore**: ✅ eseguita 14/5/2026 — create schede [[60 - People/Luca Fratini (Aegiscore)|Luca Fratini]] (persona, consolidata 14/5 sera con pre-esistente `Luca (Silencio)` — stessa persona dual affiliation) + [[30 - Areas/Area - Partnership Fornitori/Aegiscore|Aegiscore]] (fornitore). Cascata §10bis: aggiunto in CLAUDE.md §7 + MOC. Task #p1 (rispondere mail 12/5) resta attivo.
- [x] **#p2** Definire scope **OnSite** (AI Event Companion PWA) — €35K, integrazione con Crowd _da [[_Wave 2 NoLoop|Wave 2 NoLoop]]_
- [x] **#p2** Preparare proposta economica modulare Achipoint (Luigi accetta meglio €X+€X+€X) _da [[Achipoint]]_
- [x] **#p2** Verificare se ci sono novità da PARD (collegata a BAT) _da [[Operation Transformation]]_

---

> **Come usare**: scrivi i task come checkbox `- [ ]` in qualsiasi nota del vault, con tag di priorità (`#p1`, `#p2`, `#p3`) e contesto (es. `#progetto/x` o link `[[Persona]]`). Questa vista li raccoglie tutti in automatico.

> Stati supportati: `- [ ]` aperto · `- [/]` in corso · `- [x]` chiuso · `- [-]` annullato · `- [>]` rimandato · `- [?]` in attesa
