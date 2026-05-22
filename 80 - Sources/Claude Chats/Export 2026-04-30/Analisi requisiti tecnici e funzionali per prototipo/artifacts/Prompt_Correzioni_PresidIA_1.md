Devo applicare 5 correzioni puntuali al prototipo PresidIA. Sono il risultato di un audit incrociato tra il codice, il documento funzionale del cliente e il CCNL Commercio Terziario. Ogni correzione ha il riferimento alla riga del codice attuale. Applicale tutte mantenendo intatto lo stile e la struttura esistente. Non modificare nient'altro.

---

## 1 — Proiezione annua: da ×13 a ×14 (quattordicesima CCNL Commercio)

Il CCNL Commercio Terziario prevede 14 mensilità (Art. 220 tredicesima + Art. 221 quattordicesima). Il prototipo calcola ×13.

Correggere in 3 punti:

1. **Dashboard (riga ~261)**: cambiare `tot * 13` in `tot * 14`
2. **Pagina Costi (riga ~391)**: cambiare `tot * 13` in `tot * 14` e la sub da `"Include tredicesima"` a `"Include tredicesima e quattordicesima"`
3. **Report Annuale modal (riga ~903)**: cambiare `totLordo * 13` in `totLordo * 14`

---

## 2 — Alert superamento tetto 250h straordinari annui per Neri F.

Il Q&A del prototipo stesso (riga ~73) dichiara che il limite CCNL è 250 ore annue. Neri F. proietta 264h (22h × 12) ma nessun alert lo segnala. Contraddizione interna.

1. **Aggiungere un alert nell'array ALERTS** (dopo l'alert straordinari esistente per Neri):
```
{ type: "red", area: "Straordinari", msg: "Neri F. (D004): proiezione annua straordinari 264h. Il CCNL Commercio prevede un limite massimo di 250 ore annue (Rif. Artt. 136–137).", action: "Notifica inviata al consulente del lavoro", time: "Oggi, 09:14" },
```

2. **Nella pagina Straordinari**, nella card di segnalazione critica (riga ~512-514), aggiungere un secondo paragrafo sotto quello esistente:
```
La proiezione annua di Neri F. (264 ore) supera il limite massimo di 250 ore annue previsto dal CCNL Commercio (Rif. Artt. 136–137). Verifica opportuna con il consulente del lavoro.
```

---

## 3 — Sicurezza: stati adempimento da allineare al documento funzionale

Il documento del cliente definisce 3 stati: "presente" / "non presente" / "non applicabile". Il prototipo usa "Presente" / "Da verificare" / "Assente".

1. **Riga ~567**, cambiare la label del badge rosso da `"Assente"` a `"Non presente"`:
```
label={it.status === "green" ? "Presente" : it.status === "yellow" ? "Da verificare" : "Non presente"}
```

2. **Aggiungere un item nell'array SICUREZZA** per mostrare lo stato "Non applicabile":
```
{ nome: "Formazione specifica rischio alto", status: "na", note: "Non applicabile — attività classificata a rischio basso", doc: "—" },
```

3. **Aggiungere il caso `"na"` nella logica badge e nel Dot**, con colore grigio neutro:
```
label={it.status === "green" ? "Presente" : it.status === "yellow" ? "Da verificare" : it.status === "na" ? "Non applicabile" : "Non presente"}
```
Per il Dot, quando `status === "na"` usa un colore grigio (es. `#6B7280`).

---

## 4 — Conteggio ferie "3 dipendenti oltre soglia" incoerente + alert mancante Fontana

Con la logica semaforo del prototipo (>15 = rosso, >10 = giallo), i dipendenti con residuo elevato sono 5, non 3. E Fontana R. (16gg, rossa) non ha nessun alert ferie.

1. **Dashboard (riga ~262)**: cambiare `sub="3 dipendenti oltre soglia"` in `sub="5 dipendenti con residuo elevato"`

2. **Pagina Ferie (riga ~455)**: cambiare criticità da `value="1"` e `sub="Bianchi L. — 18gg"` a `value="2"` e `sub="Bianchi L., Fontana R."`

3. **Aggiungere nell'array ALERTS** un alert ferie per Fontana:
```
{ type: "red", area: "Ferie", msg: "Fontana R. (D006): 16 giorni di ferie residue su 22 maturate. Basso tasso di godimento su profilo part-time. Rischio superamento limite 18 mesi.", action: "Notifica inviata al consulente del lavoro", time: "Oggi, 09:14" },
```

---

## 5 — Correggere durata apprendistato Verdi A. (6°S = 24 mesi, non 36)

Il CCNL Commercio prevede per il 6° livello durata massima apprendistato di 24 mesi. I dati mock dicono 36 mesi (15/01/2025 – 14/01/2028). Il Q&A del prototipo dice correttamente 24 mesi. Contraddizione interna.

1. **Array EMP (riga ~33)**: cambiare scadenza Verdi A. da `"14/01/2028"` a `"14/01/2027"`

2. **Array scadenze in PScadenze (riga ~525)**: aggiornare la riga Verdi:
   - `data` da `"14/01/2028"` a `"14/01/2027"`
   - `gg` da `672` a `304`

---

## VERIFICA POST-CORREZIONE

Dopo aver applicato tutto, controlla che:
1. Il conteggio alert rossi nella dashboard si aggiorni (ALERTS.filter con type "red" — ora saranno 4: Neri straord. pattern + Neri 250h + Bianchi ferie + Fontana ferie)
2. Il report annuale usi `tot * 14`
3. Le date di Verdi siano coerenti tra array EMP e PScadenze
4. L'item sicurezza "Non applicabile" abbia il colore grigio coerente nel Dot e nel Badge