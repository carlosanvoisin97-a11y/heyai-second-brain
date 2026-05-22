---
type: meeting
date: 2026-04-24
time: 10:30 - 11:00
project: Eldis Compilatore
client: Eldis Net
attendees: [Carlo Sanvoisin, Stefania Solidoro, Marta Garrafa, Simone Montanari, Federico Saladino]
modality: Microsoft Teams
status: completed
created: 2026-05-05
updated: 2026-05-05
---

# Eldis | Allineamento Compilatore

> Sessione voluta da Carlo per **analizzare gli ultimi punti emersi e decidere come procedere su ciascuna richiesta** (anomalia / consulenza / change request). Output: modello commerciale a 3 tipologie + decisione export selettivo + Builder catalogo (CR descrizione + persistenza filtri + formazione).

## Partecipanti

- **HeyAI**: Carlo Sanvoisin (PM), Simone Montanari (Soolutions, dev lead), Federico Saladino (Soolutions, project coordinator), Simone (Tokio Studio = stesso Simone Montanari sotto altro brand)
- **Eldis**: Stefania Solidoro (Direzione Marketing), Marta Garrafa (Ufficio Marketing — TBD se realmente presente, calendar la includeva)

## 1. Modalità operative — modello a 3 tipologie

Tipologia | Trattamento economico
---|---
**Anomalie e malfunzionamenti rispetto ai requisiti originali** | Inclusi nel progetto, gestiti senza costi aggiuntivi
**Supporto operativo e consulenza** (attività gestibili dall'admin: aggiunta marchi, modifica regole, nuove codifiche — ma per cui Eldis preferisce supporto HeyAI) | Proposta economica con tariffa/pacchetto in arrivo
**Nuove funzionalità o modifiche non previste nella requisitazione iniziale** | Analizzate, quotate e concordate prima dello sviluppo

**Token AI**: confermato consuntivo quadrimestrale; nella prossima fattura verranno inclusi anche i costi sostenuti fino ad oggi.

## 2. Compilatore

- **Marchio UnicTable / tavoli**: gestibile in autonomia dall'admin. Per il **codice gamma** (logica diversa dagli altri marchi), Eldis invierà le specifiche, HeyAI verifica compatibilità.
- **Prodotti senza barcode** (tavoli, sedie): il sistema dovrebbe accettare l'import senza barcode → Eldis testa il comportamento e dà feedback.
- **Importazione massiva per aggiornamento descrizioni**: confermato il flusso. I tempi di elaborazione saranno proporzionali al numero di prodotti.

## 3. Gestione file — modifica concordata

Decisione: passare da export automatico giornaliero dell'intero catalogo a **export manuale selettivo**.

- L'utente seleziona i prodotti, esporta
- Il sistema deposita SOLO i file corrispondenti (PDF + immagini) nella cartella di produzione
- L'export giornaliero dell'Excel resta come backup
- HeyAI prepara il piano di implementazione

**Razionale**: l'export giornaliero massivo non è funzionale al flusso operativo Eldis.

## 4. Builder catalogo

- **CR descrizione catalogo**: aggiunta nuovo campo "descrizione catalogo" che rielabora automaticamente la descrizione estesa tramite prompt dedicato (sintetica + commerciale, vs B2B-funzionale dell'attuale). Prompt editabile dall'interfaccia, esempi per categoria prodotto. → **Quotazione in arrivo da Simone**.
- **Persistenza filtri**: oggi si resettano → fix gratuito (anomalia).
- **Formazione**: sessione dedicata Builder da schedulare → poi fissata 8/5/2026 ore 15:30-16:30.

## 5. Prossimi passi

### Team Eldis
- Completamento test sul compilatore + invio feedback
- Invio specifiche codice gamma UnicTable
- Test import senza barcode (tavoli, sedie)

### Team HeyAI
- Piano di implementazione export selettivo
- Quotazione descrizione catalogo Builder
- Proposta supporto operativo / pacchetto consulenza
- Formazione Builder da schedulare a stretto giro → fissato 8/5

## Decisioni con impatto economico

1. €130/mese hosting/manutenzione — proposta da formalizzare con voci incluse
2. €180/h consulenza — pacchetto da formalizzare
3. CR descrizione catalogo — quotazione TBD (Simone)
4. Token AI — consuntivo quadrimestrale (no canone fisso, fatturazione su consumi)

## Riferimenti

- Email recap inviata da Carlo il 24/04 ore 22:43 a Stefania, Marta, Simone (Soolutions), Simone (Tokio), Federico
- Email di follow-up interno HeyAI/Soolutions inviata da Carlo il 27/04 e poi 29/04
- Chat Teams scambio variabili d'ambiente: vedi [[80 - Sources/Teams/2026-04-24 - Chat Eldis Compilatore (env vars)]]
- Scheda progetto: [[Eldis Compilatore]]
