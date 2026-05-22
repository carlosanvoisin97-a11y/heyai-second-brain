# LEADME — Prep Meeting Training + Feedback

---

## 1. QUICK RECAP FUNZIONALITÀ ATTUALI
*Passare velocemente, verificare che le usino tutte*

- **Add Contact via link LinkedIn** — import singolo, 60-120 sec, scraper simula navigazione umana
- **Estensione browser** — stato? È stata rilasciata? La usano?
- **Ricerca e filtri** — 3 barre (Sales Rep, Company, Lead) + filtro Status combinabili
- **Logging attività** — tipologie (primo contatto, presentazione, brief, esito...), status automatico in base all'ultima attività, note + due date
- **Cronologia modifiche + Ripristina** — tutto tracciato, chi/quando/cosa
- **Vista Aziende** — ricerca per nome/industry, scheda company con lead associati
- **Vista Commerciale** — portafoglio completo con metriche aggregate
- **Vacancies** — scraper rileva cambio azienda, crea posizione vacante, assign nuovo contatto
- **Lead vacanti** — lead senza commerciale, vista riservata a Laura
- **Scraper automatico ogni 15gg** — aggiorna ruolo, azienda, sede. NON aggiorna email/telefono

**Domanda aperta:** C'è qualcosa che non vi è chiaro o che non state usando? Problemi riscontrati dall'ultima volta?

---

## 2. CHECK PROBLEMI NOTI
*Verificare cosa è stato risolto e cosa ancora aperto*

- Paginazione oltre 10 risultati (segnalato da Simona e da noi)
- Ricerca Companies che si blocca cancellando il testo
- Filtri che si azzerano tornando dal dettaglio lead
- "Add contact" che sembra bloccato (lavora in background ma non dà feedback visivo)
- Note duplicate nell'import
- Contatti con "TBD - linkedin profile" ancora presenti?
- Situazione ambienti: test vs dev, è stato allineato?

---

## 3. EVOLUTIVE PROPOSTE — Valutazione priorità 1-2-3
*Esporre ciascuna, chiedere: "Da 1 a 3, quanto è prioritario per voi?" (1 = nice to have, 3 = urgente/fondamentale)*

**3.1 — Scraping attivo lead**
Oggi importate i lead manualmente. L'evoluzione prevede una ricerca proattiva giornaliera su LinkedIn Sales Navigator: ogni mattina trovate una lista di nuovi lead suggeriti, da confermare o scartare. Non dovete più cercare voi.
→ Priorità 1-2-3?

**3.2 — Scraping Company**
Oggi i dati aziendali li compilate a mano (sede, settore, dimensione). L'evoluzione fa sì che lo scraper raccolga automaticamente anche i dati delle company da LinkedIn, eliminando la compilazione manuale e il problema delle nomenclature diverse.
→ Priorità 1-2-3?

**3.3 — Studio profilo + Icebreaker**
Per ogni lead importato, l'AI analizza il profilo LinkedIn e vi suggerisce un messaggio personalizzato per il primo contatto. Non un template generico: un messaggio contestualizzato basato su ruolo, azienda, pubblicazioni, interessi.
→ Priorità 1-2-3?

**3.4 — Gestione naming Company**
Risolve il problema delle aziende con nomi diversi che sono lo stesso soggetto (es. "Pirelli" vs "Pirelli SPA") tramite alias, e la gestione delle holding come cappello su più company collegate.
→ Priorità 1-2-3?

**3.5 — Apertura commessa da LeadMe**
Quando arriva un brief e l'esito è positivo, un bottone in LeadMe crea direttamente la commessa su Link, pre-popolando i campi disponibili. Evita il doppio inserimento manuale.
→ Priorità 1-2-3?

**3.6 — Ricezione status commessa**
Flusso bidirezionale: LeadMe riceve indietro gli aggiornamenti da Link — brief ricevuto, gara vinta, progetto chiuso. Lo status del lead si aggiorna automaticamente senza che dobbiate farlo voi.
→ Priorità 1-2-3?

**3.7 — Check lead dormienti (Sally)**
Sally (l'assistente AI) verifica ogni giorno i lead con ultimo aggiornamento > 3 settimane. Se trova azioni pendenti (call, email, follow-up non fatto), manda un recap al commerciale di riferimento. Notifica in-app + email.
→ Priorità 1-2-3?

**3.8 — Reportistica NLP (Sally)**
Possibilità di interrogare i dati commerciali in linguaggio naturale: "Quanti lead positivi ha Simona nell'ultimo trimestre?", "Quali aziende Finance hanno lead in corso?", "Lead non contattati da più di 30 giorni?"
→ Priorità 1-2-3?

---

## 4. ALTRE TEMATICHE DA TRATTARE (se avanza tempo)

- **Il vostro processo commerciale nel dettaglio** — Raccontateci step by step come lavorate da quando identificate un potenziale lead a quando chiudete (o perdete) l'opportunità. Ci serve per calibrare meglio le soluzioni 2026 sulle vostre reali esigenze operative
- **Rapporto con Sales Navigator** — Lo state usando regolarmente? Come lo integrate con LeadMe? Ci sono frizioni nel passaggio tra i due?
- **Gestione permessi** — Il passaggio da super user a user standard è avvenuto? Laura ha le funzionalità admin che le servono? Ci sono cose che vi mancano con i permessi attuali?
- **Adoption e abitudini** — Con che frequenza aprite LeadMe? Quotidianamente? Settimanalmente? Cosa vi spingerebbe a usarlo di più?
- **Dati mancanti** — Quanto è un problema per voi la compilazione manuale di email e telefono? È un collo di bottiglia?
- **Desiderata liberi** — C'è qualcosa che vorreste fare con LeadMe che oggi non potete? Anche cose che vi sembrano impossibili, ditecele

---

## NOTE PER TE

- Tieni il recap funzionalità a max 10 minuti, scorri veloce e chiedi se tutto chiaro
- Sulla parte evolutive, lascia parlare loro dopo che esponi — il valore è nel loro feedback
- Prendi nota delle priorità: se 3+ commerciali dicono "3" su una feature, quella va in cima alla roadmap
- I bug segnalati da Simona (paginazione, ricerca, filtri) sono cose concrete: se non sono risolti, aspettati che li ri-segnalino. Meglio anticipare con un "sappiamo che c'era X, è stato sistemato / ci stiamo lavorando"
- Il racconto del processo commerciale è oro per la proposta 2026 — se il tempo lo permette, punta forte su quello