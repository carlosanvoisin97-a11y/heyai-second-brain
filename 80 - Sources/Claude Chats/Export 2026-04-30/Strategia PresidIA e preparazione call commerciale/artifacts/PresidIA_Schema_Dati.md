# SCHEMA DATI LOGICO — PRESIDIA

**Documento di riferimento tecnico per lo sviluppo**
**Fonte: requisitazione cliente, aprile 2026**

---

## 1. Principio generale

Il sistema è separato in due livelli:

- **Archivio A – identificativo**: contiene i dati che identificano azienda e lavoratori.
- **Archivio B – analitico pseudonimizzato**: contiene i dati usati dal motore di analisi.

Il collegamento tra i due archivi avviene tramite un **ID pseudonimo del lavoratore** (`worker_pseudo_id`).

---

## 2. Entità principali

### 2.1 Azienda

Rappresenta l'impresa che usa PresidIA.

| Campo | Note |
|---|---|
| azienda_id | PK |
| ragione_sociale | |
| partita_iva | |
| email | |
| password_hash | |
| mfa_enabled | |
| stato_account | |
| data_creazione | |
| consenso_privacy | |
| consenso_condizioni_uso | |

### 2.2 Configurazione azienda

Dati organizzativi iniziali.

| Campo | Note |
|---|---|
| configurazione_id | PK |
| azienda_id | FK → Azienda |
| tipo_attivita | |
| giorni_apertura_settimana | |
| ora_apertura | |
| ora_chiusura | |
| giorni_lavoro_settimana | Valori: 5 o 6 |
| fascia_fatturato | |

**Parametri dimensionali settore** (non tutti valorizzati — dipendono dal settore):

| Campo | Settore |
|---|---|
| numero_coperti | Ristorazione / pubblici esercizi |
| numero_tavoli | Ristorazione / pubblici esercizi |
| numero_camere | Strutture ricettive |
| numero_posti_letto | Strutture ricettive |
| superficie_locale_fascia | Negozi |
| numero_postazioni_lavoro | Servizi alla persona |

### 2.3 Consulente del lavoro

| Campo | Note |
|---|---|
| consulente_id | PK |
| nome | |
| cognome | |
| studio | |
| email | |
| telefono | Opzionale |
| attivo | |

### 2.4 Collegamento azienda-consulente

Un consulente può seguire più aziende.

| Campo | Note |
|---|---|
| azienda_consulente_id | PK |
| azienda_id | FK → Azienda |
| consulente_id | FK → Consulente |
| data_collegamento | |
| attivo | |

### 2.5 Referente sicurezza

| Campo | Note |
|---|---|
| referente_sicurezza_id | PK |
| azienda_id | FK → Azienda |
| tipologia_referente | Valori: RSPP / consulente sicurezza / società specializzata |
| denominazione | |
| email | |
| telefono | |
| attivo | |

### 2.6 Associazione di categoria

| Campo | Note |
|---|---|
| associazione_id | PK |
| denominazione | |
| sede_territoriale | |
| referente | |
| email | |
| attiva | |

### 2.7 Collegamento azienda-associazione

| Campo | Note |
|---|---|
| azienda_associazione_id | PK |
| azienda_id | FK → Azienda |
| associazione_id | FK → Associazione |
| consenso_alert_associazione | |
| data_consenso | |
| attivo | |

---

## 3. Archivio A – dati identificativi lavoratori

### 3.1 Dipendente

Tabella nell'archivio aziendale.

| Campo | Note |
|---|---|
| dipendente_id | PK |
| azienda_id | FK → Azienda |
| worker_pseudo_id | FK → chiave di collegamento con Archivio B |
| nome | |
| cognome | |
| codice_fiscale | Opzionale |
| data_nascita | Opzionale, se necessaria |
| mansione_effettiva | Associata alla persona identificata |
| attivo | |
| data_inserimento | |

**Nota**: la mansione effettiva deve stare in Archivio A perché è associata alla persona identificata.

### 3.2 Documenti caricati

| Campo | Note |
|---|---|
| documento_id | PK |
| azienda_id | FK → Azienda |
| dipendente_id | FK → Dipendente (opzionale) |
| tipo_documento | |
| nome_file | |
| percorso_file | |
| data_caricamento | |
| caricato_da | |
| documentazione_idonea_flag | Opzionale |

Può essere usata anche per documentazione a supporto di voci retributive particolari.

---

## 4. Archivio B – dati analitici pseudonimizzati

### 4.1 Anagrafica lavoro pseudonimizzata

| Campo | Note |
|---|---|
| worker_pseudo_id | PK |
| azienda_id | FK → Azienda |
| livello | |
| tipo_contratto | |
| data_assunzione | |
| data_scadenza | |
| part_time_full_time | |
| ore_settimanali_contrattuali | Opzionale |
| apprendista_flag | |
| tempo_determinato_flag | |

### 4.2 Cedolino elaborato

Un record per ciascun dipendente e per ciascun mese.

| Campo | Note |
|---|---|
| cedolino_elaborato_id | PK |
| azienda_id | FK → Azienda |
| worker_pseudo_id | FK → Anagrafica lavoro |
| anno | |
| mese | |
| retribuzione_lorda | |
| ore_lavorate | |
| ore_straordinarie | |
| ferie_maturate | |
| ferie_godute | |
| ferie_residue | |
| giorni_malattia | |
| ore_permessi | |
| ore_ferie | Se disponibili in forma distinta |
| trasferte_importo | |
| rimborsi_spese_importo | |
| voci_variabili_importo | |
| voci_non_imponibili_importo | |
| frequenza_voci_non_imponibili | |
| fonte_file_id | |

**Nota**: se ferie e permessi arrivano dal cedolino in formato diverso, lo sviluppatore dovrà mappare i campi reali nella struttura logica.

---

## 5. Tabelle di qualificazione aziendale

### 5.1 Qualificazione voci retributive

Fondamentale per rispettare la logica del modulo voci retributive particolari.

| Campo | Note |
|---|---|
| qualificazione_voce_id | PK |
| azienda_id | FK → Azienda |
| worker_pseudo_id | FK |
| anno | |
| mese | |
| presenza_voci_non_imponibili | |
| opzione_azienda | Valori: `verifica_con_consulente` / `supportate_da_documentazione` / `scelta_organizzativa_aziendale` |
| note_azienda | |
| documentazione_presente_flag | |
| data_registrazione | |
| registrato_da | |

### 5.2 Registro scelte organizzative

Storicizza tutte le decisioni esplicite dell'azienda.

| Campo | Note |
|---|---|
| scelta_organizzativa_id | PK |
| azienda_id | FK → Azienda |
| worker_pseudo_id | FK (opzionale) |
| categoria_scelta | Valori: `voci_retributive` / `ferie` / `struttura` / `altro` |
| descrizione | |
| data_registrazione | |
| utente_registrazione | |

---

## 6. Indicatori

### 6.1 Indicatori mensili per dipendente

Esiti analitici del motore, per singolo lavoratore.

| Campo | Note |
|---|---|
| indicatore_dipendente_id | PK |
| azienda_id | FK → Azienda |
| worker_pseudo_id | FK |
| anno | |
| mese | |
| categoria_indicatore | Es: `mansioni`, `ferie`, `assenze`, `struttura_retributiva` |
| nome_indicatore | |
| valore_calcolato | |
| stato_semaforo | Valori: verde / giallo / rosso / blu |
| messaggio_sintetico | |
| richiede_verifica_consulente_flag | |

### 6.2 Indicatori aziendali mensili

Tabella centrale — indicatori aggregati a livello azienda.

| Campo | Note |
|---|---|
| indicatore_azienda_id | PK |
| azienda_id | FK → Azienda |
| anno | |
| mese | |
| categoria_indicatore | Vedi categorie tipiche sotto |
| valore_calcolato | |
| stato_semaforo | |
| messaggio_sintetico | |
| dettaglio_interno | |
| richiede_alert_flag | |

**Categorie tipiche**: `dimensione_organico`, `utilizzo_personale`, `copertura_attivita`, `continuita`, `coerenza_organizzativa`, `assenteismo`, `parita_genere`.

---

## 7. Gestione mansioni

### 7.1 Declaratorie CCNL

Tabella di riferimento per il confronto mansione/livello.

| Campo | Note |
|---|---|
| declaratoria_id | PK |
| ccnl | |
| livello | |
| descrizione_declaratoria | |
| parole_chiave | Opzionale |
| attiva | |

### 7.2 Esito coerenza mansioni

| Campo | Note |
|---|---|
| esito_mansione_id | PK |
| azienda_id | FK → Azienda |
| worker_pseudo_id | FK |
| anno | |
| mese | |
| livello_cedolino | |
| mansione_effettiva | |
| declaratoria_riferimento | |
| esito_coerenza | Valori: `coerente` / `merita_attenzione` / `da_verificare` |
| messaggio_output | |
| richiede_verifica_consulente_flag | |

---

## 8. Alert e notifiche

### 8.1 Alert

| Campo | Note |
|---|---|
| alert_id | PK |
| azienda_id | FK → Azienda |
| worker_pseudo_id | FK (opzionale) |
| anno | |
| mese | |
| tipo_alert | |
| categoria_alert | |
| livello_alert | |
| messaggio | |
| destinatario_tipo | Valori: `azienda` / `consulente` / `associazione` / `referente_sicurezza` |
| destinatario_id | |
| data_generazione | |
| stato_alert | |

### 8.2 Regole invio alert

Tabella configurabile.

| Campo | Note |
|---|---|
| regola_alert_id | PK |
| categoria_alert | |
| invia_a_consulente | Boolean |
| invia_a_azienda | Boolean |
| invia_a_associazione | Boolean |
| invia_a_referente_sicurezza | Boolean |
| richiede_consenso_associazione | Boolean |

**Regole di esempio:**
- `assenteismo` → consulente + azienda + associazione (se consenso)
- `parita_genere` → consulente + azienda + associazione (se consenso)
- `voci_retributive` → consulente + azienda, **mai** associazione

---

## 9. Sicurezza sul lavoro

### 9.1 Checklist sicurezza

| Campo | Note |
|---|---|
| checklist_sicurezza_id | PK |
| azienda_id | FK → Azienda |
| adempimento | |
| stato | Valori: `presente` / `non_presente` / `non_applicabile` |
| documentazione_allegata_flag | |
| note | |
| data_aggiornamento | |

---

## 10. Registro storico

### 10.1 Storico indicatori

| Campo | Note |
|---|---|
| storico_id | PK |
| azienda_id | FK → Azienda |
| worker_pseudo_id | FK (opzionale) |
| anno | |
| mese | |
| tipo_evento | |
| descrizione | |
| utente | |
| timestamp | |

**Contenuto da memorizzare:**
- Indicatori rilevati
- Scelte aziendali
- Qualificazioni delle voci
- Alert generati
- Modifiche mansione effettiva

---

## 11. Reportistica

### 11.1 Report annuale

Può essere una vista o un output generato (non necessariamente una tabella autonoma).

**Deve aggregare:**
- Struttura del personale
- Costo del personale
- Turnover
- Ferie
- Straordinari
- Indicatori emersi
- Decisioni organizzative registrate

---

## 12. Relazioni principali

**Relazione azienda:**
- Una azienda ha una configurazione_azienda
- Una azienda ha molti dipendenti
- Una azienda ha molti cedolini_elaborati
- Una azienda può avere un consulente
- Una azienda può avere una associazione
- Una azienda può avere un referente_sicurezza

**Relazione dipendente:**
- Un dipendente in Archivio A è collegato a un `worker_pseudo_id`
- Il `worker_pseudo_id` è usato in tutte le tabelle analitiche

**Relazione indicatori:**
- Gli indicatori_azienda leggono dati aggregati dai cedolini
- Gli indicatori_dipendente leggono dati del singolo `worker_pseudo_id`
- Gli alert leggono gli indicatori e le regole di invio

---

## 13. Regole da non violare nello sviluppo

### Privacy
- Nome e cognome solo in Archivio A
- Motore analitico solo su `worker_pseudo_id`

### Logica
- Il sistema non produce giudizi di irregolarità
- Il sistema non determina il fabbisogno teorico di personale
- Il sistema evidenzia configurazioni che meritano attenzione

### Voci non imponibili
- Mai trattarle come errore automatico
- Sempre prevedere qualificazione aziendale: documentazione / scelta organizzativa / verifica con consulente

### Mansioni
- La mansione effettiva è input aziendale
- Il confronto con il livello è informativo, non certificativo

### Associazione
- Riceve solo alert selezionati: assenteismo, parità di genere
- Solo con consenso esplicito dell'azienda

---

## 14. Sintesi per sviluppatori

Gli sviluppatori devono costruire un sistema che:

1. Legge i cedolini
2. Struttura i dati in un archivio analitico pseudonimizzato
3. Consente all'azienda di completare i dati mancanti (mansione effettiva)
4. Genera indicatori organizzativi
5. Consente all'azienda di qualificare alcune situazioni
6. Invia alert ai soggetti corretti
7. Mantiene storico e tracciabilità

---

## 15. Principio guida

> PresidIA non deve dire cosa è giusto o sbagliato; deve organizzare i dati, evidenziare configurazioni che meritano attenzione e permettere all'azienda di qualificarle, lasciando al consulente la valutazione professionale.

---

## Disclaimer obbligatorio in piattaforma

> Le informazioni fornite hanno valore informativo e non costituiscono parere professionale. Per un parere ufficiale è necessaria la sottoscrizione del mandato professionale.