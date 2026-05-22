# REPORT PM — Call Ilia Gardelli × Carlo Sanvoisin
**18 marzo 2026, 09:08 – ~11:40 | Durata: ~2h30**

---

## 1. DECISIONI PRESE

**1.1 — Architettura complessiva confermata**
- LeadMe diventa il CRM operativo con due viste principali: New Business e Clienti
- La vista Clienti NON è solo una pipeline di stato ma include il dettaglio commesse (ispirato al Progress)
- Il Progress Excel resta come vista finanziaria per la direzione — NON va sostituito ma alimentato da LeadMe
- Minutes resta il raccoglitore di informazioni (call, email, note, appunti) che alimenta LeadMe
- Flusso dati: Minutes → LeadMe (NB + Clienti) → Vista direzionale (Progress digitale)

**1.2 — Fase 1 vs Fase 2**
- **Fase 1 (scope 15 aprile)**: ottimizzazione base con indicatori visivi, semafori, alert manuali, pipeline visiva, filtri evoluti. Passaggi di stato MANUALI con suggerimenti/avvisi dal sistema
- **Fase 2 (evolutiva futura)**: automatismi di passaggio stato (inoltro email → aggiornamento automatico, integrazione portale fornitori, scraping proattivo, AI icebreaker). Il sistema si allena nella fase 1 per poi automatizzare nella fase 2

**1.3 — Approccio semafori confermato**
- Semafori = indicatori temporali automatici (nessuno li tocca)
- Funzionano come alert: se un lead/cliente resta troppo a lungo in uno stato senza azioni, diventa rosso
- La direzione (Garbarino) vede i rossi e può chiedere conto al commerciale responsabile → leva di pressione per l'adoption
- Ilia conferma: NON automatismi di passaggio stato in fase 1, ma avvisi che educano le persone a usare il sistema

**1.4 — Vista aziende = vista Cliente**
- Confermato: la pipeline Clienti deve essere per AZIENDA, non per contatto singolo
- Dentro l'azienda: più referenti con ruoli diversi (es. Nissan: marketing, quality, ufficio stampa, comunicazione interna = budget separati)
- Dentro l'azienda: più commesse/progetti ciascuno con il proprio status di lavorazione
- La card azienda nella Kanban mostra info aggregate; il click apre il dettaglio con referenti + commesse

---

## 2. NUOVE CASISTICHE EMERSE (non presenti nel requirement log precedente)

**2.1 — Più referenti per azienda con budget separati**
Ilia ha spiegato con l'esempio Nissan: un'azienda fidelizzata può avere 3-4 referenti interni che gestiscono budget diversi (marketing → convention/fiere, quality → formazione, ufficio stampa → press events, comunicazione interna → employee meeting). Ognuno di questi è un "cliente interno" con il proprio flusso di brief e gare. Il sistema deve poter tracciare più referenti sotto la stessa azienda, ciascuno con le proprie attività e commesse.
→ **Impatto su requisiti**: MA4 (gestione aziende) va arricchito. La scheda azienda deve avere una sezione referenti con ruolo e area di competenza.

**2.2 — Gara vs Affidamento diretto**
Due modalità di ingresso lavoro completamente diverse:
- **Gara**: brief ricevuto → sviluppo progetto creativo + preventivo → presentazione → vinta/persa. Concorrenza con altre agenzie (3-4 max). Può passare da portale fornitori o da email.
- **Affidamento diretto**: il cliente ti chiama direttamente, ti manda un brief, tu fai la proposta. Nessuna concorrenza. Può essere da accordo quadro o da buona relazione.
→ **Impatto su requisiti**: nello stadio "Brief/Gara" della pipeline NB e nella pipeline Clienti va distinto il tipo di ingaggio. Punto aperto per Zaghi.

**2.3 — Portale fornitori**
Molte grandi aziende (Vodafone, banche, ENI) richiedono iscrizione all'albo fornitori come prerequisito. La gara viene gestita interamente tramite portale. Questo è un trigger tracciabile informaticamente per il passaggio di stato.
→ **Fase 2**: integrazione con portali fornitori per aggiornamento automatico stato. **Fase 1**: aggiornamento manuale con avviso se scade deadline.

**2.4 — Inoltro email come metodo di aggiornamento**
Idea emersa in call e validata con entusiasmo da Ilia: l'utente inoltra il thread email a un indirizzo dedicato (es. leadme@noloop.eu), il sistema legge il contenuto + allegati e aggiorna lo stato del contatto/commessa.
→ **Fase 2**: evolutiva molto apprezzata ("questa è una figata" — Ilia). Da includere nel documento come prossimo sviluppo.

**2.5 — Contratti e documenti di riferimento per commessa**
Ilia ha menzionato che alcuni clienti hanno accordi quadro / contratti. Il sistema potrebbe archiviare questi documenti nella scheda cliente e usarli come contesto per l'agente AI.
→ **Fase 2**: archiviazione documenti per commessa + agente che risponde con contesto contrattuale.

**2.6 — Un contatto può avere esiti diversi su più approcci**
Esempio Fidelity International: 3 contatti nella stessa azienda, uno negativo, due in corso. Lo stato dell'AZIENDA non è = allo stato del CONTATTO. L'azienda resta "in corso" finché almeno un approccio è attivo.
→ **Impatto su requisiti**: lo stato azienda deve essere calcolato aggregando gli stati dei contatti sottostanti. Il più avanzato vince (es. se 1 negativo + 1 in corso → azienda = in corso).

**2.7 — Esempio Poste Italiane: approccio multi-canale su stessa azienda**
Ilia contatta la segretaria del direttore via telefono + contemporaneamente cerca referenti su Sales Navigator per approccio trasversale. Due linee di contatto parallele sulla stessa azienda.
→ **Il sistema deve supportare più linee di approccio attive sulla stessa azienda senza confonderle.**

---

## 3. PROBLEMI DATI EMERSI

**3.1 — 300 aziende senza settore**
Su 594 aziende totali, ~300 non hanno settore assegnato. Causa: lo scraper prende dati del contatto ma non dell'azienda, e la compilazione manuale non viene fatta.
→ **Conferma necessità scraper aziende (fase 2)** e **pulizia dati da fare prima del go-live fase 1**.

**3.2 — Nomenclatura settori incoerente**
Esistono "Finance" e "Finanziario" come settori separati. Mancano settori come "Associazioni di categoria".
→ **Pulizia e standardizzazione nomenclatura settori da fare con Zaghi. Aggiungere settori mancanti.**

**3.3 — Aziende duplicate con nomi diversi**
BCC → Gruppo BCC, BCC Leasing, BCC Fondi, BCC Mutui. BNP Paribas → BNL, Cardiff, Arval, Findomestic. Generali → Generali SPA, Generali Italia, Generali Mestre.
→ **Conferma critica della necessità MA4.1 (alias) + MA4.2 (madre-figlia). Senza questo il database è innavigabile per la direzione.**

**3.4 — Confronto Progress vs LeadMe incompleto**
Ilia ha fatto un lavoro manuale di confronto tra il file facing (previsionale luglio 2025) e il Progress (attività in corso) e i dati in LeadMe. Risultato: molti clienti del facing/progress non sono in LeadMe, e viceversa molti contatti in LeadMe non hanno corrispondenza nel progress.
→ **Allineamento dati necessario prima del go-live. Ilia ha un file Excel con il mapping — farselo mandare.**

**3.5 — 390 contatti in status "Nuovo" mai lavorati**
Su 623 contatti, 390 sono "Nuovo" = importati e mai toccati. 233 in corso ma molti sono duplicati sulla stessa azienda.
→ **LeadMe è usato come rubrica, non come CRM. L'efficientamento deve trasformarlo in strumento di lavoro operativo — questo è il messaggio chiave per Garbarino.**

---

## 4. INSIGHT SU MINUTES (utilizzo inaspettato di Ilia)

Ilia sta usando Minutes NON solo per trascrizioni call ma anche per:
- Appunti personali e memo interni
- Categorizzazione per "Cliente NB" e "Commessa NB"
- Archivio di ragionamenti strategici

Ha riscontrato che lo strumento non la "conosce" ancora bene perché non è stato pensato per questo uso. Carlo ha suggerito di:
- Splittare ulteriormente le categorie (per cliente specifico, es. "New Business Sky")
- Usare Minutes come archivio strutturato con contesto persistente
- Prevedere un'evoluzione di Minutes che accetti anche email, note vocali, documenti oltre alle trascrizioni

→ **Azione: creare guida di utilizzo avanzato Minutes per il team. Ilia può diventare case study di utilizzo evoluto.**
→ **Prodotto: valutare di aggiungere a Minutes la possibilità di caricare input non-call (email, note, documenti) con categorizzazione.**

---

## 5. DINAMICHE STAKEHOLDER (note PM)

**5.1 — Ilia è l'alleata strategica**
- È senior, ha visione da product manager, ragiona per ecosistema
- Ha dedicato 2.5 ore di brainstorming senza che glielo chiedessero
- Vede LeadMe come la base dell'operatività dell'agenzia, non come una rubrica
- Crede fortemente negli strumenti digitali ("la tecnologia deve aiutarmi a lavorare meglio")
- Ha il rispetto della Garbarino che le ha dato delega sul tema
- Va tenuta informata PRIMA di chiunque altro, altrimenti si sente bypassata

**5.2 — Zaghi non disponibile oggi**
- Ha tre gare in chiusura, non può partecipare alla call
- Ha proposto: "sentiamoci domani e mi dici dove ha dei dubbi"
- Il suo input è indispensabile per le regole di business, va bloccata DOMANI (19 marzo)
- Rischio: se le mandi un Excel lungo non lo legge. Meglio call di 30 min con domande puntuali

**5.3 — Marco da allineare**
- Ilia insiste che Marco deve sapere tutto PRIMA che arrivi alla Zaghi
- Motivo: la Zaghi fa forward alla Garbarino in un secondo, e se Garbarino chiama Marco e lui non sa → problema
- Flusso concordato: Carlo + Ilia validano → passaggio con Marco → call con Zaghi → Garbarino

**5.4 — Garbarino: leva dei semafori**
- Ilia conferma: se Garbarino vede i semafori rossi nel sistema, le persone si sbrigheranno ad aggiornare
- "Tutti quanti faranno moda e maniera per accontentare la Garbarino"
- Questo è l'argomento di vendita per la fase 1: non serve l'automatismo, basta la visibilità

---

## 6. FILE DA RECUPERARE

- [ ] **Facing** (previsionale clienti luglio 2025) — chiedere a Ilia, lei ce l'ha
- [ ] **Progress** aggiornato — Carlo dice di averlo ma verificare versione
- [ ] **Excel di mapping di Ilia** — il file con 587 aziende categorizzate (giallo = facing, arancione = progress, senza colore = senza settore)
- [ ] **Lista settori da aggiornare** — aggiungere "Associazioni di categoria", risolvere "Finance" vs "Finanziario"

---

## 7. AGGIORNAMENTI AL REQUIREMENT LOG

Sulla base di questa call, i requisiti da aggiornare/aggiungere:

**Nuovi requisiti:**
- MA1.X — Stato azienda aggregato (calcolato dal più avanzato dei contatti sottostanti)
- MA1.X — Distinzione gara vs affidamento diretto nella pipeline
- MA1.X — Più referenti per azienda con ruolo e area di competenza
- MA2.X — Dettaglio commesse sotto scheda cliente (collegamento con Progress)
- MA5.X — Inoltro email come metodo di aggiornamento (fase 2)
- MA5.X — Archiviazione documenti/contratti per commessa (fase 2)

**Requisiti da arricchire:**
- MA1.2 (Pipeline NB) — aggiungere distinzione gara/affidamento diretto come sotto-tipo dello stadio Brief
- MA1.4 (Pipeline Cliente) — gli stati devono allinearsi a quelli del Progress (In Corso, Consegnato, In Lavorazione, Terminato, Void, Fatturato)
- MA4.2 (Madre-figlia) — casi concreti: BNP Paribas (BNL, Cardiff, Arval, Findomestic), Generali (SPA, Italia, Mestre), BCC (Leasing, Fondi, Mutui)

**Nuovi punti TBC per Zaghi:**
- TBC 10 — Come distinguere gara vs affidamento diretto nel sistema? Serve come campo o come sotto-stadio?
- TBC 11 — Quando un cliente fidelizzato perde una gara (void) ma ne ha altre in corso, che stato ha l'azienda?
- TBC 12 — Quali sono gli stati di lavorazione ufficiali del Progress? (In Corso, Consegnato, In Lavorazione, Terminato, Void, Fatturato — confermare)
- TBC 13 — Chi effettua il passaggio di stato delle commesse? Il commerciale, il PM, Laura Zaghi?
- TBC 14 — Portale fornitori: quali clienti lo usano? È un prerequisito da tracciare?
- TBC 15 — Accordi quadro: come si tracciano? Campo dedicato sulla scheda azienda?

---

## 8. PROSSIMI PASSI (concordati in call)

1. **Oggi pomeriggio**: Carlo aggiorna Excel requirement log con nuovi requisiti + punti TBC emersi → invia a Ilia per validazione
2. **Oggi/domani**: Carlo scrive a Marco per allineamento, propone call a tre
3. **Domani (19 marzo)**: Call con Zaghi — portare domande puntuali, NON email lunghissima
4. **Post-Zaghi**: stime e tempi dagli sviluppatori
5. **Entro martedì/mercoledì**: pacchetto chiuso (cosa facciamo, quanto costa, per quando) alla Garbarino
6. **Deadline sviluppo**: 15 aprile (Garbarino parte il 18, vuole vederlo funzionante)

---

## 9. RISCHI IDENTIFICATI

| Rischio | Probabilità | Impatto | Mitigazione |
|---------|------------|---------|-------------|
| Zaghi non riesce a dare input in tempo | Alta | Alto | Bloccarla domani, domande puntualissime, max 30 min |
| Scope creep da brainstorming Ilia | Alta | Medio | Fase 1 vs Fase 2 ben separati nel documento. Non aggiungere nulla alla fase 1 |
| Database sporco al go-live | Alta | Alto | Pulizia dati parallela allo sviluppo. Coinvolgere Simona per i settori mancanti |
| Budget insufficiente per fase 1 completa | Media | Alto | Presentare MUST vs SHOULD separati. La Garbarino decide cosa taglia |
| Zaghi fa forward alla Garbarino prima del tempo | Alta | Medio | Allineare Marco PRIMA di mandare qualsiasi cosa alla Zaghi |
| Persone non aggiornano il sistema | Certa | Alto | Semafori visibili alla direzione = pressione sociale. Fase 2 = automatismi |