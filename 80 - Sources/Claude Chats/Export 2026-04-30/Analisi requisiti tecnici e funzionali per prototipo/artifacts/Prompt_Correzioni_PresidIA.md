# PROMPT DA INCOLLARE NELLA CHAT DEL PROTOTIPO

---

Devo applicare una serie di correzioni al prototipo PresidIA. Sono il risultato di un audit incrociato tra il codice, il documento funzionale del cliente e il CCNL Commercio Terziario. Ogni correzione ha il riferimento alla riga del codice attuale. Applicale tutte mantenendo intatto lo stile e la struttura esistente.

## CORREZIONI CRITICHE (4)

### F-001 — Proiezione annua: da ×13 a ×14 (quattordicesima CCNL Commercio)

Il CCNL Commercio Terziario prevede 14 mensilità (Art. 220 tredicesima + Art. 221 quattordicesima). Il prototipo attualmente calcola ×13.

Correggere in **3 punti**:

1. **Dashboard (riga ~261)**: cambiare `tot * 13` in `tot * 14` e la label `Proiezione annua` rimane uguale
2. **Pagina Costi (riga ~391)**: cambiare `tot * 13` in `tot * 14` e la sub da `"Include tredicesima"` a `"Include tredicesima e quattordicesima"`
3. **Report Annuale nel modal (riga ~903)**: cambiare `totLordo * 13` in `totLordo * 14`

### F-002 — Alert superamento tetto 250h straordinari annui per Neri F.

Il Q&A del prototipo stesso (riga ~73) dichiara che il limite CCNL è 250 ore annue. Neri F. proietta 264h (22h × 12). Ma nessun alert segnala questo superamento. Contraddizione interna.

1. **Aggiungere un alert nell'array ALERTS** (dopo riga ~42), subito dopo l'alert straordinari esistente per Neri:
```
{ type: "red", area: "Straordinari", msg: "Neri F. (D004): proiezione annua straordinari 264h. Il CCNL Commercio prevede un limite massimo di 250 ore annue (Rif. Artt. 136–137).", action: "Notifica inviata al consulente del lavoro", time: "Oggi, 09:14" },
```

2. **Nella pagina Straordinari**, nella card di segnalazione critica (riga ~512-514), aggiungere un secondo paragrafo sotto quello esistente:
```
La proiezione annua di Neri F. (264 ore) supera il limite massimo di 250 ore annue previsto dal CCNL Commercio (Rif. Artt. 136–137). Verifica opportuna con il consulente del lavoro.
```

3. **Aggiornare il conteggio** nella dashboard: le criticità rosse passeranno automaticamente da 2 a 3 perché l'array ALERTS avrà un alert rosso in più.

### F-003 — Sicurezza: stati adempimento da allineare al documento funzionale

Il documento del cliente definisce esplicitamente 3 stati: **"presente" / "non presente" / "non applicabile"**. Il prototipo usa "Presente" / "Da verificare" / "Assente". "Da verificare" NON corrisponde a "non applicabile".

1. **Nella pagina Sicurezza (riga ~567)**, cambiare la logica dei badge da:
```
label={it.status === "green" ? "Presente" : it.status === "yellow" ? "Da verificare" : "Assente"}
```
a:
```
label={it.status === "green" ? "Presente" : it.status === "yellow" ? "Da verificare" : "Non presente"}
```

2. **Aggiungere un quarto stato "Non applicabile"** nella legenda concettuale. Per farlo, aggiungere nel commento o nella UI un badge grigio/neutro per "Non applicabile" (nessun adempimento nel mock attuale usa questo stato, ma il sistema deve mostrare che esiste). Puoi aggiungere un item nell'array SICUREZZA come:
```
{ nome: "Formazione specifica rischio alto", status: "na", note: "Non applicabile — attività classificata a rischio basso", doc: "—" },
```
E nella logica badge aggiungere il caso `"na"`:
```
label={it.status === "green" ? "Presente" : it.status === "yellow" ? "Da verificare" : it.status === "na" ? "Non applicabile" : "Non presente"}
```
Con un colore neutro (grigio) per il dot e il badge quando status === "na".

### F-004 — Conteggio ferie "3 dipendenti oltre soglia" incoerente

La dashboard (riga ~262) dice `sub="3 dipendenti oltre soglia"`. Ma con la soglia del semaforo (>15 = rosso, >10 = giallo):
- Rossi (fR > 15): Bianchi 18gg, Fontana 16gg = **2 persone**
- Gialli (fR > 10): Neri 13, Colombo 12, Moretti 14 = **3 persone**
- Totale "oltre soglia": **5 persone**

Il "3" conta solo i gialli escludendo i rossi, che è incoerente con "oltre soglia".

1. **Riga ~262**: cambiare `sub="3 dipendenti oltre soglia"` in `sub="5 dipendenti con residuo elevato"` (oppure calcolare dinamicamente con `EMP.filter(e => e.fR > 10).length`)

2. **Pagina Ferie (riga ~455)**: cambiare `value="1"` e `sub="Bianchi L. — 18gg"` per includere anche Fontana: `value="2"` e `sub="Bianchi L., Fontana R."` — perché Fontana ha 16gg e supera la soglia rossa (>15) definita a riga 437.

## CORREZIONI IMPORTANTI (7)

### F-005 — Aggiungere alert ferie per Fontana R.

Fontana R. ha fR=16 (sopra soglia rossa >15) ma non ha nessun alert ferie nell'array ALERTS. Bianchi (18gg) ce l'ha.

**Aggiungere nell'array ALERTS** (dopo l'alert ferie di Bianchi):
```
{ type: "red", area: "Ferie", msg: "Fontana R. (D006): 16 giorni di ferie residue su 22 maturate. Basso tasso di godimento su profilo part-time. Rischio superamento limite 18 mesi.", action: "Notifica inviata al consulente del lavoro", time: "Oggi, 09:14" },
```

### F-007 — Feedback visivo su "Verifica consulente" nelle Voci Retributive

Quando l'utente clicca "Verifica consulente" nella pagina Voci, il badge cambia ma non c'è conferma visiva che una notifica è stata inviata.

**Nella pagina PVoci**, quando `dec === "consulente"` viene settato, aggiungere un testo di conferma accanto al badge, tipo:
```
if (dec === "consulente") return <><Badge s="green" label="Inviata al consulente" /> <span style={{ fontSize: 10, color: C.textMuted, fontStyle: "italic", marginLeft: 4 }}>Segnalazione registrata</span></>;
```

### F-008 — Riformulare copy "suggerisce" nell'Osservatorio

**Riga ~286**, cambiare da:
```
La presenza ricorrente di straordinari su profili part-time suggerisce una possibile sottodimensione rispetto alle esigenze operative.
```
a:
```
Si rileva una presenza ricorrente di ore straordinarie su contratti part-time in rapporto all'orario di apertura e alla dimensione operativa dell'attività.
```

### F-009 — Riformulare copy sicurezza "esposta a contestazioni"

**Riga ~572**, cambiare da:
```
La sorveglianza sanitaria risulta non attivata. In assenza di nomina del medico competente, l'azienda potrebbe essere esposta a contestazioni in caso di ispezione. Notifica inviata al referente sicurezza.
```
a:
```
La sorveglianza sanitaria risulta non attivata. Nessun medico competente nominato. È stato inviato un avviso al referente sicurezza per un confronto sulla situazione.
```

### F-010 — Correggere durata apprendistato Verdi A. (6°S = 24 mesi, non 36)

Il CCNL Commercio prevede per il 6° livello una durata massima dell'apprendistato di 24 mesi (non 36). I dati mock di Verdi A. dicono 36 mesi (15/01/2025 – 14/01/2028). Il Q&A del prototipo dice correttamente 24 mesi.

**Riga ~33 (array EMP)**: cambiare la scadenza di Verdi A. da `"14/01/2028"` a `"14/01/2027"`

**Riga ~525 (array scadenze in PScadenze)**: aggiornare la riga di Verdi:
- `data` da `"14/01/2028"` a `"14/01/2027"`
- `gg` da `672` a ricalcolare (da 16/03/2026 a 14/01/2027 = circa 304 giorni)

### F-011 — Riformulare tono consulenziale nelle letture incrociate consulente

**Riga ~843**, cambiare da:
```
Potrebbe essere utile pianificare un intervento coordinato prima della scadenza dei 18 mesi.
```
a:
```
Elemento da monitorare in vista della scadenza dei 18 mesi per il godimento delle ferie residue.
```

### F-012 — Sostituire icona ₿ (Bitcoin) per Voci Retributive

**Riga ~1037**, cambiare l'icona da `₿` a `§` (oppure `💰`):
```
{ key: "voci", icon: "§", label: "Voci Retributive" },
```

## NOTA FINALE

Dopo aver applicato tutte le correzioni, verifica che:
1. Il conteggio alert rossi nella dashboard si aggiorni correttamente (dovrebbero diventare 4: 2 straordinari Neri + 2 ferie Bianchi e Fontana)
2. La card riepilogativa criticità nella dashboard (riga ~250) prenda il conteggio da ALERTS.filter(a => a.type === "red").length — quindi si aggiornerà automaticamente
3. Il report annuale (modal) usi `tot * 14` e non `tot * 13`
4. Le date di Verdi A. siano coerenti tra array EMP, PScadenze e qualsiasi altro punto in cui appare

Non modificare nient'altro — struttura, stile, componenti, navigazione, tutte le altre pagine rimangono identiche.