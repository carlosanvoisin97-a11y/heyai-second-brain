# BRIEF — Chat per email recap + prossimi passi sviluppatori

## PROMPT DA INCOLLARE

Devo scrivere un'email di recap per Federico Saladino e Simone Montanari (sviluppatori senior, i miei partner tecnici) dopo la nostra call del 23 marzo. L'email deve essere diretta, tra colleghi, precisa sui punti ma senza formalità eccessive. Tono: professionale-colloquiale, ma fermo sui punti economici. Lingua: italiano.

L'email deve coprire questi punti in quest'ordine:

---

### PREMESSA ECONOMICA (tono fermo ma non conflittuale)

Aprire con una frase che ricorda la situazione: siccome non ho venduto Flow al cliente e abbiamo tolto Pitch dal perimetro, il mio margine su questo progetto è strettissimo. La loro quotazione è rimasta sostanzialmente invariata nonostante la riduzione di scope. Sono consapevole che anche loro hanno applicato scontistiche importanti, ma è fondamentale che — come ci siamo assicurati in call — venga messo il massimo effort sulla qualità e sulla gestione della complessità tecnica, e che eventuali complicazioni che emergeranno in corso d'opera vengano gestite senza riaprire la discussione economica. Questo è il patto su cui partiamo.

---

### PERIMETRO WAVE 2

1. **Requirement log completo** — In allegato il requirement log definitivo per la Wave 2 + il requirement log specifico del Venue Finder. Questi documenti costituiscono il perimetro contrattuale: tutto ciò che non è presente dovrà essere quotato a parte. Chiedo una revisione e conferma che tutto sia tracciato correttamente.

2. **Pitch ESCLUSO** — il cliente non lo vuole, rimosso dal perimetro.

3. **LeadMe ridefinito** — la parte New Business resta nel core LeadMe. La parte CRM clienti + task viene sviluppata come modulo separato deep-linkable (l'utente non percepisce la differenza). Lo scraping attivo, icebreaker, notifiche proattive Sally → Fase 2 (chiedo quotazione separata per questi requisiti).

4. **Principio proprietà dei dati** — LeadMe possiede contatti/aziende/pipeline, Link possiede commesse/budget/PDP/fatture. Ogni dato ha UNA casa, gli altri leggono. Allegare il diagramma architettura v5.

---

### ARCHITETTURA

5. **Proposta architetturale allegata** — Abbiamo formulato una proposta architetturale (diagramma allegato) basata sul principio di proprietà dei dati. Quello che ci interessa realmente è che: (a) vengano rispettati tutti i requisiti del requirement log, (b) ci sia semplicità d'uso per gli utenti finali — nessuna complessità percepita, navigazione fluida tra i moduli. La scelta tecnica su come implementarlo è a carico loro, ma deve rispettare questi due principi. Chiedo che validino la proposta o propongano modifiche motivate.

---

### VENUE FINDER

6. **Venue Finder — urgenza** — Il requirement log specifico è allegato. L'abbiamo già pagato anticipatamente e dobbiamo accelerare: il cliente lo vuole subito perché è un momento in cui stanno arrivando molti brief e ci serve per generare valore immediato e rafforzare la relazione. Chiedo aggiornamenti sullo stato e sulle tempistiche. Mercoledì sera call con Manuela per dettagli.

---

### CROWD — PROSSIMI PASSI

7. **Crowd** — Allego anche la trascrizione dell'ultima call sulla piattaforma di gestione eventi. Da lì emergono i prossimi passi operativi su Crowd. Chiedo conferma che sia pronto per la consegna e che i punti emersi dalla call siano gestiti.

---

### PROSSIMI PASSI RICHIESTI

8. **A Federico e Simone chiedo:**
   - Revisione e conferma del requirement log Wave 2
   - Quotazione separata requisiti Fase 2 LeadMe (scraping attivo, icebreaker, notifiche, sync Outlook)
   - Validazione proposta architetturale allegata (o controproposta motivata)
   - Timeline per tutti i moduli → serve per il Gantt e per la proposta di dilazione pagamenti a Donzelli. Validare le tempistiche
   - Aggiornamento stato Venue Finder con tempistiche accelerate
   - Stato Crowd e conferma prossimi passi dalla trascrizione allegata

9. **IP / Comproprietà** — Bruno insiste che prima di partire formalmente con Noloop 2026 serve un accordo scritto sulla proprietà intellettuale. Propongo di discuterne a stretto giro con Andrea in una call dedicata questa settimana.

---

### MINUTES — PROSSIMI PASSI (sezione separata nell'email o email separata)

10. **Minutes** — I requisiti dell'evoluzione Minutes sono nel requirement log Wave 2. I prossimi passi sono:
    - Registrazione call esterne = priorità alta, startabile in parallelo
    - Verificare lo stato delle ultime cose su Wrike per chiudere Minutes attuale e fatturare la delivery
    - Chiudere Minutes + Crowd → fatturare, incassare

---

## FILE DA ALLEGARE ALL'EMAIL
- Wave2_RequirementLog_27032026.xlsx
- VenueFinder_ReqLog_v2.xlsx
- Noloop_Architettura_v5_Proprieta_Dati.png
- Trascrizione call Crowd (da caricare nella chat)

## NOTE PER LA CHAT

Nella chat nuova caricherò:
1. Questo brief (come testo)
2. Il requirement log Wave 2 (Excel)
3. Il requirement log Venue Finder (Excel)
4. Il diagramma architettura v5 (PNG)
5. La trascrizione della call su Crowd (per estrarre i prossimi passi)

Chiederò a Claude di: produrre l'email completa con tutti i punti, e separatamente i prossimi passi su Minutes e Crowd estratti dalla trascrizione.