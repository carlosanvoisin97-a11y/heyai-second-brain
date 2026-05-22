---
type: person
role: Fornitore esterno cliente
company: Esterno (consulente Eldis)
created: 2026-05-05
updated: 2026-05-05
---

# 👤 Luciano (sistemista Eldis)

- **Ruolo**: **Sistemista esterno** che lavora con Eldis (non dipendente) _[conferma Carlo 5/5/2026]_
- **Azienda di appartenenza**: TBD — opera come consulente IT esterno per Eldis
- **Cognome**: TBD
- **Email diretta**: TBD (non risulta in CC nei thread email recenti — Stefania fa da intermediaria)

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

- Cognome
- Azienda di consulenza (se ha una società di riferimento o è freelance)
- Email diretta (per i casi in cui serva contatto rapido senza passare da Stefania)

## Riferimenti

- Confermato come "sistemista esterno che lavora con Eldis" da [[60 - People/Carlo Sanvoisin|Carlo Sanvoisin]] in chat 5/5/2026 (con suggerimento "vedi tu come gestirlo nel modo migliore")
