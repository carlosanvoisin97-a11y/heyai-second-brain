---
type: email-inviata
date: 2026-05-13
to: [Federico Saladino, Simone Montanari]
project: "Allineamento interno HeyAI/Soolutions — Wave 2 + ecosistema (Eldis, NOT)"
status: testo-finale-Carlo
created: 2026-05-13
updated: 2026-05-13
meeting_context: 2026-05-13 — Allineamento interno HeyAI+Soolutions (13:32-14:35; call assorbita nelle schede per convenzione §4, no file separato)
notes: "v2 — riscritta da Carlo 13/5 sera. La v1 di Claude era OK come struttura ma troppo lunga, troppo ricca di rationale ed esplicitava i carry-over con tag — Carlo li ha integrati senza qualificatore. Lezioni di stile propagate in CLAUDE.md §2.1 (vedi diff sotto)."
---

# Email recap interno post-call Federico+Simone — versione FINALE Carlo (13/5/2026)

> Testo finale prodotto da Carlo. Sostituisce la v1 prodotta da Claude. Tenere SOLO questa versione come reference per future bozze interne a Federico+Simone.

---

## Testo email FINALE (versione Carlo)

bella raga, metto il follow-up della call di oggi.

**Wave 2 NoLoop & NOT — pagamenti e cash-flow**

* @Andrea Pazienza prepara un foglio condiviso con la simulazione cash-flow così ne ragioniamo tutti insieme con Elena e troviamo la soluzione migliore per tutti
* NOT (Operation Transformation + Eye Cookies) è stato pagato: appena decidiamo la formula pagamenti vi giriamo il bonifico
* Lato mio: continuo a pushare Garbarino/Donzelli su attivazione effettiva pagamenti Wave 2, se entro fine settimana non si muove nulla chiamo direttamente

**Wave 2 NoLoop — operativo**

* Lista criticità e deep dive necessari (priorità: Venue Finder → LeadMe → OnSite → Link) — voi mi segnalate, io organizzo le sessioni dividendole per reparto/persone/tempo.
* Aggiungiamo nel requirement log Wave 2 una pagina dove voi annotate le domande che vi vengono on the fly mentre leggete i moduli — così a partenza ufficiale ce le troviamo già tutte e non ricominciamo da zero per i deep dive
* Già abbiamo dei punti TBD per Leadme che vorrei guardaste anche voi: [Wave2_RequirementLog_Soolutions.xlsx](https://heyai.sharepoint.com/:x:/s/HeyAIxSoolutions/IQD7zd44IUIrTrDFlUxoHzBUAS5wMx_MaBgBm1hwJv8tvIA)
* Business Central per Link: prima cosa da approfondire appena Wave 2 parte ufficialmente

**Crowd**

* Setup email base in prod: un mittente unico no-reply + un indirizzo back-office per le risposte, entrambi sotto `@noloop.eu`. I sistemisti hanno dato risposta @Simone Montanari quando puoi fai check
* Personalizzazione mittenti/reply-to per singolo evento: fuori perimetro. Quotiamo le due strade di cui abbiamo parlato — (i) consulenza dedicata evento per evento, (ii) CR per pannello configuratore interno a Crowd — voi mi mandate le stime di entrambe così le metto al cliente come opzioni extra
* DUS vs doppie in export verso gli hotel: Federico, ci pensi tu alla soluzione di override solo in fase di export (esporta come DUS le doppie occupate da un solo ospite senza modificare il dato a sistema)
* Guida utente Crowd da produrre
* Per altri punti pending lato sviluppo fate riferimento alla mia minuta condivisa anche con Lorena e Arianna

**Venue Finder**

* Fede abilitami i permessi prompt/settings su Venue Finder
* Lista fix completa già nella mail di ieri, fammi sapere data di consegna realistica (devo dare comunicazione a cliente su disponibilità MVP)
* Sviluppo feature ricerca multi-location
* Migliorare flessibilità e estetica presentazioni

**Minutes**

* Nuova versione in prod ASAP — chiudo io la mail "tutto in produzione" a Laura per la plenaria
* Registrazione call esterne: prima cosa che parte appena Wave 2 è ufficialmente attiva
* Caching DB minute executive
* Password reset massivo

**Eldis**

* Simone, mi mandi i prezzi delle evolutive di cui abbiamo parlato così le porto a Stefania: (i) CR descrizioni con campi extra B2B, (ii) export con la nuova logica semiautomatica / nuovo bridge, (iii) builder PDF stile Canva
* Prospetto hosting + manutenzione + tariffa consulenza con voci distinte (manutenzione / consulenza / CR)
* Per altri punti pending lato sviluppo fate riferimento alla mia minuta condivisa anche con Stefania e Marta

**NOT — Eye Cookies + Operation Transformation**

* Per partire sugli sviluppi Eye Cookies serve: (i) call con Germano per vedere live l'applicativo Microlog, (ii) call tecnica con Microlog, (iii) call con il data analyst per ingestion dello storico. Le organizzo io questa settimana/prossima
* Totem + kit multi-SIM/connettività: mandatemi la proposta scritta
* API BAT/PARD + spedizione prodotti: il push su Justin lo continuo io
* Comunico al cliente che siamo ufficialmente partiti!

**Operativo**

* Wrike lo abbandoniamo: confermo che passiamo su Microsoft Lists SharePoint (board "Soolutions Delivery Board") collegato al mio second brain. Lo finisco di settare prima del prossimo allineamento e vi giro l'accesso
* Se già mi volete dare un indirizzo di spedizione per i prodotti foto del setup Eye Cookies, datemelo che lo metto in lista

Fatemi sapere appena potete boys, per qualsiasi cosa resto a disposizione!

A presto,
Carlo

---

## Diff sostanziale — v1 (Claude) → v2 (Carlo riscrittura)

### Cose che Carlo ha **TOLTO** rispetto alla mia v1 (lezioni di stile)

1. **Preambolo metodologico**: "ho tolto i punti chiusi, ho mantenuto gli aperti e ho aggiunto..." → eliminato. Carlo apre dritto sui contenuti. Solo "metto il follow-up della call di oggi."
2. **Qualificatori "carry-over dal X/5"**: rimossi ovunque. Carlo non spiega in mail interna cosa è nuovo e cosa è vecchio — lo gestisce il lettore.
3. **Rationale operativi**: tolti i pezzi tipo "su €160K spalmati una bella ruota in un colpo non regge per nessuno", "il blocco è tecnico, non commerciale", "non collegato a impostazioni Brain che ho toccato io". Restano solo le azioni.
4. **Nota interna su godmode admin**: tolta dall'email (è nota interna Federico→Carlo, non va neppure in mail interna a Federico+Simone — solo in scheda vault).
5. **Sezione OnSite Generali 27/5**: tolta. La decisione "ci tiriamo fuori" è stata presa in call, nessuno deve fare niente → nessun bullet email.
6. **Sezione HoReCa**: tolta dall'email. Probabilmente Carlo gestisce a voce con Federico/Simone perché "quotazione fuori margine" è sensibile.
7. **Bullet "ore consulenza già smarcate" Eldis**: tolto. Restano 3 evolutive (CR descrizioni / export semiautomatico / builder PDF), non 4. Le ore già smarcate sono fatturazione interna, non item della call.
8. **Citazione interna Eldis "lo sanno perfettamente..."**: tolta dall'email, resta nelle schede vault.

### Cose che Carlo ha **AGGIUNTO/MODIFICATO** rispetto alla mia v1

1. **@mention diretti**: `@Andrea Pazienza`, `@Simone Montanari` per delegare azioni specifiche (notifica Teams/Outlook).
2. **Bonifico NOT condizionato**: "appena decidiamo la formula pagamenti vi giriamo il bonifico" (NON "tra oggi e domani come da accordi" che avevo scritto io). Implicazione: il bonifico Soolutions NOT è gated al foglio Excel di Andrea.
3. **Link al Requirement Log Soolutions** con punti TBD LeadMe: link SharePoint inserito direttamente nella mail (azione pre-letta da Federico+Simone).
4. **Setup email Crowd**: cambio sostanziale → "I sistemisti hanno dato risposta @Simone Montanari quando puoi fai check". I sistemisti NoLoop hanno effettivamente risposto al follow-up di Simone post-call → il blocco di 13gg sul DNS è **sciolto**, palla a Simone per il check.
5. **Comunicazione cliente Venue Finder**: "devo dare comunicazione a cliente su disponibilità MVP" — Carlo informa il team che la deadline ha urgenza cliente, non solo interna.
6. **Enhancement Venue Finder "flessibilità + estetica presentazioni"**: ripristinato come bullet attivo (era #p2 post-MVP nelle mie schede).
7. **Minutes "password reset massivo"**: ripristinato come bullet — era carry-over dal 5/5 che io avevo perso nella v1.
8. **Combinazione "NOT — Eye Cookies + Operation Transformation"** in unica sezione email (anche se restano schede separate nel vault).
9. **"API BAT/PARD + spedizione prodotti"** uniti come bullet unico — push lato Carlo, due workstream gestiti insieme.
10. **"Comunico al cliente che siamo ufficialmente partiti!"** — Carlo intende mandare email proattiva a Massi/Justin/Germano per dichiarare ufficialmente la partenza degli sviluppi NOT (milestone commerciale, non solo tecnico).
11. **Rimando alla minuta esterna**: "Per altri punti pending lato sviluppo fate riferimento alla mia minuta condivisa anche con Lorena e Arianna" (per Crowd) e "anche con Stefania e Marta" (per Eldis). Pattern: evita di duplicare contenuti tra mail interna Soolutions e mail cliente.

### Sezioni eliminate del tutto

- OnSite Generali (decisione presa, no azione)
- HoReCa (gestita a voce)
- Diff vs follow-up del 6/5 (era nelle note interne della v1, non email)

---

## Stato

✅ **Mail inviata** (o pronta per invio) il 13/5/2026 sera. Cancellata la v1 di Claude — questa è la versione di riferimento per future bozze a Federico+Simone.
