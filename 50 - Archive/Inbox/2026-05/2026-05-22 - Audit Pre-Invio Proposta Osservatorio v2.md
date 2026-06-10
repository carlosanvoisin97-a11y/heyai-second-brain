---
type: audit
date: 2026-05-22
target: HeyAI_Futuritaly_Proposta_Osservatorio_v2.docx
projects: [Osservatorio Strategico]
stakeholders: [Claudia Bugno, Lavinia Ferrari]
status: draft (in attesa decisioni Carlo sui fix)
created: 2026-05-22
updated: 2026-05-22
reference_skill: investment-proposal-drafting (14/5/2026)
---

> ⏩ **SUPERSEDED — 10/6/2026 (consolidamento sera-2).** Proposta v2 inviata (19/5, €45K); audit storico. Stato corrente: [[2026-06-10 - HANDOVER — consolidamento completo 10-6 (per nuova sessione)|HANDOVER 10/6]] + [[2026-06-10 - PUNTI APERTI — decisioni Carlo (post-consolidamento)|PUNTI APERTI]].

# 🔍 Audit Pre-Invio Proposta Osservatorio v2 (22/5/2026)

> Revisione sistematica e approfondita richiesta da Carlo prima dell'invio a [[Claudia Bugno]] (CEO FuturItaly) con [[Lavinia Ferrari]] in CC. Target: zero errori / incongruenze / rischi reputazionali o contrattuali. Skill di riferimento: `investment-proposal-drafting` §9 checklist anti-errori + Master Facts §pricing.

**File analizzato**: [HeyAI_Futuritaly_Proposta_Osservatorio_v2.docx](computer:///Users/carlosanvoisin/claude/20%20-%20Projects/Futuritaly/HeyAI_Futuritaly_Proposta_Osservatorio_v2.docx)

**Identità upload vs vault**: contenuto testuale identico (251 paragrafi entrambi, SHA diversa solo per metadata XML di Word — last saved timestamp). Stessa versione, audit valido per entrambi.

**Metodologia**: inspection XML diretta via python-docx (margini, font, color, footer, header, stili) + grep nomi fornitori + math check tranche/payback/ROI + diff semantico tra sezioni + checklist skill §9 (4 macro-aree: Grafica · Numeri · Linguaggio · Contenuti).

---

## 🔴 Bloccanti (3) — da fixare PRIMA dell'invio

### B1. §11 "Governance e Presidi Contrattuali" è VUOTA

- **Evidenza**: P84 = `Heading 1 "11. Governance e Presidi Contrattuali"` → P85 = paragrafo `Normal` **vuoto** → P86 = `Heading 1 "12. Impegni di FuturItaly"`. La sezione 11 contiene **solo il titolo, zero contenuto**.
- **Impatto**: Claudia legge un titolo "Governance e Presidi Contrattuali" e sotto trova il nulla. Errore inaccettabile per un documento commerciale (signal di sciatteria o di copia-incolla non finito).
- **Fix richiesto** (3 opzioni):
  - (a) Aggiungere il contenuto previsto: Requirement Log come parte integrante dell'offerta + Change Request management + SLA su risposta correttiva/adeguativa + cadenza steering committee
  - (b) Rimuovere la sezione e rinumerare 12→11, 13→12
  - (c) Compattare i contenuti dentro §9 (Condizioni Generali) e §12 (Impegni)
- **Raccomandazione**: (a) — aggiungere 4-6 righe sostanziali. La sezione è valore aggiunto per un cliente come Claudia (segnala maturità di processo).

### B2. Color titolo proposta `#074F6A` invece di `#2B8C96` (palette HeyAI)

- **Evidenza**: P1 "Proposta di Investimento | Osservatorio Strategico AI" ha colore `#074F6A` (variante del default Word Heading), non `#2B8C96` (teal HeyAI ufficiale palette §4.2 skill).
- **Impatto**: errore grafico ricorrente flaggato in skill §10 errore 2. Visivamente è simile (entrambi teal scuri) ma è una violazione del design system. Per un occhio attento al brand (Claudia ha standard alti) è una falla di rigore.
- **Fix richiesto**: override inline color a `#2B8C96` sul run del titolo. Una riga di XML.

### B3. Math Payback "14–20 mesi" non quadra nello scenario worst

- **Evidenza** (§8.5 P72): "investimento di € 45.000 si ripaga indicativamente in 14 – 20 mesi".
- **Verifica matematica**:
  - Worst case Y1: €12K efficienza + €5K ricavi = €17K/anno → payback puro = 45/17 × 12 = **31,8 mesi**
  - Mid case Y1: €13K + €11,5K = €24,5K → 22 mesi
  - Best case Y1: €14K + €18K = €32K → **16,9 mesi**
  - Anche includendo Y2 worst (€21,6K), cumulativo a 24 mesi = €38,6K → ancora **sotto €45K**
- **Impatto**: il range "14–20 mesi" è coerente solo per scenari **mid-best**, non per worst puro. Donzelli-equivalent (CFO che fa la math) trova l'incongruenza e perde credibilità il numero.
- **Fix opzioni**:
  - (a) Allargare il range a "14–28 mesi" per coprire anche scenari prudenziali
  - (b) Rifrasare: "tra 14 e 20 mesi nello scenario mediano-positivo, fino a 28-30 mesi in scenario prudente di sola rampa lenta"
  - (c) Eliminare il range puntuale e usare un "tipicamente entro 24 mesi" più morbido
- **Raccomandazione**: (a) o (b). Mai (c) — Claudia vuole vedere un numero.

---

## 🟡 High (4) — da affrontare prima dell'invio, fix consigliato

### H1. Math automazione 80–90% non coerente con risparmio €12–14K

- **Evidenza** (§8.5 P68): "L'automazione attesa dell'80–90% genera un risparmio prudenziale stimato in € 12.000 – 14.000/anno", calcolato su base €20.000/anno teorica (10 h/sett × €40/h × 50 sett).
- **Verifica**: 80% × €20K = €16K · 90% × €20K = €18K. Il range dichiarato €12–14K è inferiore: corrisponde a un'automazione 60–70%, non 80–90%.
- **Impatto**: contraddizione interna nello stesso paragrafo. Un lettore math-attento (Claudia, Donzelli o consulente) vede l'incongruenza.
- **Fix opzioni**:
  - (a) Allineare la percentuale: "automazione attesa del 60–70% → €12–14K"
  - (b) Esplicitare la prudenza: "automazione tecnica attesa dell'80–90%, ridotta del 25% in via prudenziale → €12–14K/anno"
  - (c) Allineare i numeri: "€16–18K/anno"
- **Raccomandazione**: (b). Salva la credibilità tecnica (l'automazione È 80–90%) e dichiara la prudenza commerciale (saving applicato è -25%). Coerente con prompt 01 Senior Strategy Finance Consultant.

### H2. Non-circumvention senza durata definita

- **Evidenza** (§9 tabella Condizioni Generali, riga "Non-circumvention"): "FuturItaly non replica autonomamente o tramite terzi soluzione equivalente sul medesimo verticale". **Nessuna scadenza**.
- **Confronto**: la riga "Riservatezza" stessa tabella dice "Obbligo reciproco per durata rapporto + 36 mesi". Incongruenza interna.
- **Impatto**: una non-circumvention perpetua è clausola pesante che un avvocato (Claudia è in studio legale, sa leggere queste cose) può contestare come abusiva e chiedere di stralciare integralmente.
- **Fix**: aggiungere durata. Standard: "per la durata del rapporto + 36 mesi" (allinea a riservatezza). Versione difensiva: "per la durata del rapporto + 5 anni" se vogliamo proteggere più aggressivamente.
- **Raccomandazione**: "durata rapporto + 36 mesi" per coerenza.

### H3. Riferimento esplicito al "bando MEF" in §7 può creare imbarazzo

- **Evidenza** (§7 P30): "In conformità al bando MEF, trasferimento completo della proprietà intellettuale in capo a FuturItaly".
- **Master Facts** dice: "Bando MEF richiede IP full-transfer al cliente (constraint non negoziabile). Implicazione: SE HeyAI partecipa via Futuritaly al bando MEF, perde la possibilità di mantenere IP".
- **Issue**: il vincolo MEF si applica **solo se** FuturItaly partecipa con il prodotto a quel bando. Se Claudia chiede "ma noi al MEF non ci stiamo guardando in questo momento", la motivazione dichiarata cade e l'IP full-transfer perde la sua razionalizzazione esterna (resta solo come scelta nostra unilaterale).
- **Fix opzioni**:
  - (a) Rimuovere il riferimento MEF: "Trasferimento completo della proprietà intellettuale in capo a FuturItaly:"
  - (b) Renderlo condizionale: "Coerentemente con i requisiti tipici dei bandi pubblici di riferimento (es. MEF), trasferimento completo..."
  - (c) Lasciare se la partecipazione al MEF è confermata
- **Raccomandazione**: (b). Mantiene il giustificativo esterno senza vincolarsi al singolo bando. **Da verificare con Lavinia** se FuturItaly è effettivamente sul MEF.

### H4. "Tempi di analisi drasticamente ridotti" in §1 (avverbio rafforzativo)

- **Evidenza** (§1 P5): "Il risultato è un vantaggio competitivo concreto: tempi di analisi drasticamente ridotti, risparmio significativo di ore/uomo, maggiore probabilità di conversione".
- **Skill `email-drafting` §2026-05-20**: "Cut: 'particolarmente', 'estremamente', 'incredibilmente', qualsiasi avverbio rafforzativo". Applicabile per coerenza anche a deliverable scritti (la skill `investment-proposal-drafting` §7 dice "linguaggio coerente con email-drafting").
- **Impatto**: "drasticamente" suona da pitch da venditore. Per un cliente come Claudia, attenuare il claim e renderlo numerico aumenta la credibilità.
- **Fix opzioni**:
  - (a) Sostituire con dato: "tempi di analisi ridotti del 70–90%"
  - (b) Eliminare l'avverbio: "tempi di analisi ridotti"
  - (c) Riformulare in termini di outcome: "tempi di analisi che passano da ore a minuti per ogni opportunità valutata"
- **Raccomandazione**: (c) — outcome concreto, niente percentuale inventata, narrativa pulita.

---

## 🟢 Medium (4) — fix rapidi che alzano la qualità percepita

### M1. Heading 1 vuoto P28 (residuo tra §6 e §7)

- **Evidenza**: P28 ha style `Heading 1` ma testo vuoto. Probabile residuo di un'iterazione precedente.
- **Impatto**: nel TOC e nell'outline Word appare una voce vuota, e il layout ha uno spazio bianco anomalo prima del titolo "7. Proprietà Intellettuale".
- **Fix**: rimuovere il paragrafo, oppure cambiare style a `Normal`.

### M2. Color grigio `#666666` invece di `#606060` (palette)

- **Evidenza**: 5 paragrafi note/disclaimer (P40, P49, P77, P83, P99) hanno color `#666666`. Palette skill §4.2 prevede `#606060`.
- **Impatto**: differenza minima a occhio (~3% di luminanza), ma viola palette ufficiale.
- **Fix**: replace_all `#666666` → `#606060` nel docx, o lasciare se la differenza percepita non è significativa (decisione Carlo).

### M3. Mix apostrofi ASCII vs tipografici

- **Evidenza**: 50 apostrofi ASCII (`'`) + 9 tipografici (`’`). Standard tipografico italiano: tutti tipografici. Word di default usa autocorrect → tipografico, quindi il mix indica copia-incolla da sorgenti eterogenee.
- **Fix**: replace_all `'` → `’` (verificando di non sostituire dentro nomi tecnici o code-like). Coerente con resto del documento.

### M4. Componente 2 lower bound ricavi: dichiarato €5.000, math dà €3.600

- **Evidenza** (§8.5 P70): "anno 1 (rampa, 3–5 tenant attivi) i ricavi attesi si collocano nell'ordine di € 5.000 – 18.000". Math: 3 tenant × €100/mese × 12 = €3.600 (lower) → dichiarato €5.000.
- **Impatto**: lower bound leggermente inflato di ~€1.400. Un lettore che ricostruisce il calcolo vede una piccola discrepanza.
- **Fix opzioni**:
  - (a) "€ 4.000 – 18.000" (più coerente con math)
  - (b) Spiegare la rampa: "considerando che la rampa di acquisizione tipica non parte da gennaio, il floor realistico è € 5.000 anno 1"
  - (c) Lasciare (€5K vs €3.6K è dentro tolleranza pitch)
- **Raccomandazione**: (a). Allinea la math e mostra rigore.

---

## 🔵 Low (3) — cosmetici, opzionali

### L1. Mix trattini: 40 hyphen + 16 en-dash + 6 em-dash

- **Convenzione italiana**:
  - `-` (hyphen) per parole composte: "multi-tenant", "fondo-perduto"
  - `–` (en-dash) per intervalli: "€20–30K", "10–13 settimane"
  - `—` (em-dash) per inciso: "— anche solo 30 minuti —"
- **Issue**: alcuni intervalli usano hyphen invece di en-dash (es. "10-13 settimane" dovrebbe essere "10–13 settimane"). Cosmetico.
- **Fix**: pass di trovasostituisci sui pattern `\d+-\d+` numerici.

### L2. Costi LLM/API non quantificati in §8.4

- **Evidenza** (§8.4): "Costi operativi non inclusi → Cloud e API AI a carico del Cliente". Tabella infrastruttura dà solo cloud (€150–900/mese a seconda dei tenant). Niente stima LLM tokens.
- **Impatto**: il cliente può ricevere una bolletta OpenAI/Anthropic inattesa al primo mese e percepirlo come "non ce l'avete detto".
- **Fix**: aggiungere una riga in tabella T6: "Costi LLM (token AI) — stima € 100 – 400/mese in funzione del volume ricerche, da ri-quantificare in fase di kick-off".

### L3. Sezione "Cosa NON è incluso" diffusa, non centralizzata

- **Evidenza**: le esclusioni sono distribuite tra §8.4 (cloud + API), §9 (change request, interventi extra), §12 (marketing/go-to-market). Non c'è una sezione singola "Cosa NON è incluso" come richiesto da skill §10 errore 6.
- **Impatto**: basso — sono tutte presenti, solo non in un unico punto.
- **Fix**: aggiungere una callout o un mini-box in §8 con bullet riassuntivi delle 4 esclusioni. Opzionale.

---

## 📋 Punti strategici (no fix, ma preparare difesa per la call con Claudia)

### S1. Change of control 12% / €50K, retroattiva 18 mesi (§8.1 P46)

Clausola molto pro-HeyAI. Claudia ha "standard alti" e questa è la classica clausola che CFO oppongono. **Preparare razionale**: la nostra IP è valore residuo che vale anche dopo la fine della partnership; la retroattività protegge da scenari di vendita "pulita prima della cessione". Compromesso accettabile: scendere a 9% / €40K, retroattiva 12 mesi.

### S2. Riserva HeyAI componenti generiche (§7 P35)

L'elenco è dettagliato ("framework agente conversazionale, pipeline ingestion multi-formato, libreria scoring, componenti multi-tenant, wrapper LLM"). Un letto stretto può percepirlo come "ci tenete tutto, ci date solo la skin". **Preparare distinzione esplicita**: il codice sorgente di tutto è FuturItaly (P31 è chiaro), la Reserve è solo sul diritto di HeyAI di riutilizzare i **pattern architetturali** su altri progetti **non in competizione**. Esempio concreto: lo stesso framework agente AI lo riusiamo su un progetto HR, che non compete con Osservatorio bandi.

### S3. Floor anno 2+ senza importo dichiarato (§8.1 P43)

Volontariamente lasciato aperto come anchor di negoziazione. Da gestire in call: proporre un floor in funzione del numero di tenant attivi (es. €5K/anno se ≥5 tenant, €10K/anno se ≥10), oppure un floor fisso che HeyAI considera accettabile (es. €8K/anno).

### S4. Gateway Pagamento Stripe come add-on €4–6K (§9 add-on)

La proposta vende "multi-tenant per commercializzazione in subscription ai vostri clienti" (§3 + §8.3) ma il gateway necessario PER farlo è add-on a parte. Possibile percezione bait-and-switch. **Mitigazione**: in call esplicitare che il multi-tenant è infrastruttura per gestire i tenant; lo Stripe è solo se vogliono billing automatizzato (in alternativa possono fatturare manualmente i 3-5 tenant del primo anno).

---

## ✅ Check superati (12) — nessuna azione richiesta

- **Layout margini**: top 2,50cm · R/B/L 2,00cm ✓ (skill §1)
- **Header**: presente su tutte le pagine, logo + dati legali HeyAI completi, font Acre Medium ✓ (skill §2)
- **Footer**: bordo `#156082` + ornamento + testo legale completo "PEC: heyai@pec.it | REA RM – 1751505 | Cod. Fiscale: 17947791004 | Amministratore Unico: Ing. Bruno Mattucci" + Acre Medium 9pt ✓ (skill §3)
- **Font body**: Aptos override esplicito (90 run, 0 Arial leftover) ✓ (skill §4.1)
- **Color teal `#2B8C96`** usato correttamente nei sotto-titoli §8.5 (Componente 1, Componente 2, Payback) ✓ (skill §4.2)
- **Tranche math**: 45% + 30% + 25% = €20.250 + €13.500 + €11.250 = €45.000 ✓
- **No fornitori nominati**: Soolutions, Silencio, Jakala, Aegiscore, Tokio — 0 occorrenze ✓ (regola §13)
- **No nomi+cognome HeyAI interni nel body**: Carlo, Michele, Andrea, Federico, Simone, Danilo — 0 occorrenze ✓ (eccezione Bruno Mattucci AU correttamente solo nel footer)
- **No marketing speak**: game-changer, cutting-edge, unlock, empower, seamless, best-in-class — 0 occorrenze ✓
- **Validità offerta**: 30 giorni dichiarata ✓ (skill §9 condizioni)
- **Foro competente**: Roma, legge italiana ✓
- **Identità file upload vs vault**: contenuto testuale identico, audit valido ✓

---

## 🧮 Riepilogo decisionale per Carlo

| Priorità | Item | Effort fix | Va fatto prima dell'invio? |
|---|---|---|---|
| 🔴 B1 | §11 Governance vuota | 15-20 min (scrittura + paste) | **SÌ** |
| 🔴 B2 | Color titolo `#074F6A` → `#2B8C96` | 2 min (override XML) | **SÌ** |
| 🔴 B3 | Payback math 14–20 mesi non quadra | 5 min (rifrasare) | **SÌ** |
| 🟡 H1 | Math automazione 80–90% vs €12–14K | 3 min (esplicitare prudenza) | **SÌ** |
| 🟡 H2 | Non-circumvention senza durata | 1 min (aggiungere "+36 mesi") | **SÌ** |
| 🟡 H3 | Riferimento MEF (rischio se non partecipano) | 2 min (rendere condizionale) | SÌ (con verifica Lavinia) |
| 🟡 H4 | "drasticamente ridotti" | 2 min (sostituire con outcome) | SÌ |
| 🟢 M1 | Heading 1 vuoto P28 | 30 sec (rimuovere) | SÌ se hai 30 sec |
| 🟢 M2 | Grigio `#666666` → `#606060` | 1 min (replace_all) | Opzionale |
| 🟢 M3 | Mix apostrofi | 1 min (replace_all) | Opzionale |
| 🟢 M4 | Lower bound ricavi €5K → €4K | 30 sec | Opzionale |
| 🔵 L1-L3 | Trattini · costi LLM · sezione esclusioni | 5-10 min totali | Opzionali |
| 📋 S1-S4 | Punti strategici per la call | 0 min (preparazione mentale) | NO fix, preparare difesa |

**Effort totale fix bloccanti + high**: ~30 min di lavoro chirurgico sul docx.

**Effort totale fix completo (incluso medium/low)**: ~45-60 min.

**Cosa raccomando**: fixare tutti i bloccanti (B1-B3) e tutti gli high (H1-H4) prima di mandare a Claudia. I medium/low possono passare in v3 se mai servirà. I punti strategici (S1-S4) restano in tasca per la call.

---

## 🔗 Riferimenti

- [Osservatorio Strategico](computer:///Users/carlosanvoisin/claude/20%20-%20Projects/Futuritaly/Osservatorio%20Strategico.md)
- [Bozza email Claudia v2](computer:///Users/carlosanvoisin/claude/00%20-%20Inbox/2026-05-22%20-%20BOZZA%20Email%20Claudia%20Bugno%20Proposta%20Osservatorio%20+%20Incontro%20Bruno.md)
- [Master Facts Sheet](computer:///Users/carlosanvoisin/claude/99%20-%20System/Master%20Facts%20Sheet.md) §"Pricing target altri progetti" → "Futuritaly Osservatorio AI" + §"Bando MEF"
- Skill `investment-proposal-drafting` §9 (checklist anti-errori)
- Skill `email-drafting` §"2026-05-20 — Apertura 'come da accordi'" + §"Riscrittura email Laura Zaghi" (avverbi rafforzativi)
