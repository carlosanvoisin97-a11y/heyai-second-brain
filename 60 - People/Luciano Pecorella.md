---
type: person
role: Fornitore esterno cliente — GM ONCE SRLs (IT Eldis)
company: ONCE SRLs (consulente IT esterno Eldis)
email: l.pecorella@oncesrl.it
created: 2026-05-05
updated: 2026-06-10
aliases:
  - Luciano (sistemista Eldis)
  - Luciano Pecorella (ONCE SRL)
---

# 👤 Luciano Pecorella — GM ONCE SRLs (sistemista esterno Eldis)

> 🔄 **Rename 10/6/2026**: scheda rinominata al canonico Nome Cognome (regola §4) da "Luciano (sistemista Eldis)" dopo la risoluzione identità dell'8/6. I wikilink `[[Luciano Pecorella]]` di Open Tasks e daily ora risolvono qui.

- **Ruolo**: **Sistemista esterno** che lavora con Eldis (non dipendente) _[conferma Carlo 5/5/2026]_ — **General Manager di ONCE Srl** _[identità risolta 8/6/2026 via thread email]_
- **Azienda di appartenenza**: **ONCE SRLs** — via Luca Signorelli 11, Roma · tel +39 063234655 · `www.oncesrl.it`. Società IT esterna, non freelance.
- **Cognome**: **Pecorella** (Luciano Pecorella)
- **Email diretta**: `l.pecorella@oncesrl.it` _[ora scrive direttamente nei thread, con Stefania/Giovanna/Carlo/Soolutions in CC]_

## Progetti in comune

- [[Eldis Compilatore]] — referente tecnico per la sincronizzazione file tra Compilatore AI e server fisico Eldis (`172.16.20.8`). Responsabile del setup dell'app **Eldis Synchronizer.exe** sul server.

## Profilo / pattern di interazione

- **Tecnico operativo, non interlocutore commerciale**: nelle interazioni Soolutions ↔ Luciano si parla di percorsi SMB, sync, setup server. Carlo lo coinvolge solo per il setup tecnico, non per le decisioni commerciali.
- **Stefania fa da ponte**: organizza le call con Luciano e gli inoltra le info. Pattern ricorrente da febbraio 2026.
- **Disponibilità ondivaga**: Stefania ha più volte segnalato attese ("Luciano mi ha assicurato che ci lavora domani e appena pronto, domani stesso, ci scrive" — 5/2/2026; "anche Luciano è pronto per cui confido che oggi ti dia riscontro" — 16/2/2026). Tipico pattern fornitore esterno con altri impegni.
- **Non è coinvolto nelle decisioni di prodotto**: il suo perimetro è strettamente sistemistico (server, share di rete, app Synchronizer).

## Tracce nelle comunicazioni

- 22/01/2026 — Carlo richiede "call tecnica per integrazione app sincronizzazione e server Eldis" → fissata 27/01
- 03/02/2026 — Stefania scrive direttamente a Luciano per aggiornamenti su sync (in carica del set-up cartella TEST_COMPILATORE)
- 05/02/2026 — Stefania conferma a Simone che "Luciano mi ha assicurato che ci lavora domani"
- 12/02/2026 — Stefania chiarisce i percorsi PROD: `W:\\ImmaginiB2B` (immagini/PDF) + `W:\\Company\\IMPORTLISTINI_NONTOCCARE\\COMPILATORE` (excel)
- 16/02/2026 — Stefania conferma cartella immagini/pdf creata dentro TEST_COMPILATORE, attende riscontro Luciano
- **26/05–8/06/2026 — Thread "Valutazione installazione Compilatore-Builder su infrastruttura Eldis"**: Stefania apre (26/5) chiedendo a Luciano di valutare l'**installazione dell'intero applicativo sulla VM Eldis** (alternativa al canone hosting €130/mese di HeyAI). Contatto ora **diretto Soolutions↔Luciano** (Stefania/Giovanna/Carlo in CC). Simone (28/5) gli passa le specs (RAM 4→6GB, disco a 200GB perché PDF+immagini risiederebbero sul server, port forwarding 80/443, esposizione su dominio `catalogue.eldisnet.it`). Luciano (8/6) sta già attrezzando: +2GB RAM, +20GB vSSD, **sostituzione SSD fisici** del server per arrivare a 200GB ("avrò bisogno di tempo"). → self-host in corso d'opera.

- **Tempistica (call 9/6, da Stefania)**: attrezzaggio server ad **agosto** (spegnere macchine, inserire dischi) → ambiente pronto ad accogliere l'app **da settembre**. Decisione finale Eldis sul self-host entro 1-2 settimane. Luciano gestirà **struttura/infrastruttura** (≠ manutenzione software, che resta a HeyAI/Soolutions).

## Architettura tecnica gestita da Luciano

```
Server fisico Eldis: 172.16.20.8
Share PROD: W:\ImmaginiB2B + W:\Company\IMPORTLISTINI_NONTOCCARE\COMPILATORE
Share TEST: W:\Company\IMPORTLISTINI_NONTOCCARE\TEST_COMPILATORE\PDF-JPG
              W:\Company\IMPORTLISTINI_NONTOCCARE\TEST_COMPILATORE\ImportNuoviArticoli.xlsx

App: Eldis Synchronizer.exe (avvio automatico, sync notturna + manuale on-demand)
```

## Note PM (gestione)

**Strategia consigliata**: trattarlo come un fornitore esterno con cui Eldis ha un rapporto di consulenza, NON come parte del team Eldis. Implicazioni:
- Le chat tecniche con lui restano in cc a Stefania (lei orchestra)
- Eventuali ritardi di Luciano vanno condivisi con Stefania, non escalati direttamente
- Non includere Luciano nei recap commerciali o nelle proposte economiche (non rilevante per lui)
- Se in futuro emergono ritardi sistemistici lato Eldis che bloccano il progetto, è una questione che Stefania deve gestire col suo fornitore — non un problema che HeyAI può risolvere
- Mantenere scheda **stub** finché non emerge necessità di tracciare di più

## Open questions

- ~~Cognome~~ → **Pecorella** _[risolto 8/6]_
- ~~Azienda di consulenza~~ → **ONCE SRLs** (società IT, lui è GM) _[risolto 8/6]_
- ~~Email diretta~~ → `l.pecorella@oncesrl.it` _[risolto 8/6]_
- **#L1** Se Eldis self-hosta l'applicativo su VM ONCE/Eldis: confini di responsabilità (uptime/SLA lato Luciano vs manutenzione software lato HeyAI) e accesso persistente di Soolutions alla VM per deploy/aggiornamenti — da definire in call 9/6

## Riferimenti

- Confermato come "sistemista esterno che lavora con Eldis" da [[60 - People/Carlo Sanvoisin|Carlo Sanvoisin]] in chat 5/5/2026 (con suggerimento "vedi tu come gestirlo nel modo migliore")
