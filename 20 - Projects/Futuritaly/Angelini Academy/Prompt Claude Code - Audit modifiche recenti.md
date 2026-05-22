---
type: project-doc
parent_project: _Angelini Academy
client: Angelini Academy
audience: Claude Code (sessione in corso su `/Users/carlosanvoisin/code/angelini-academy/`)
purpose: prompt audit per verificare se le pagine del sito sono state silenziosamente ridotte di contenuti negli ultimi 6 commit (≈ 2 ore di lavoro recente). Esegue git diff esteso + report markdown salvato in /tmp
created: 2026-05-15
updated: 2026-05-15
status: ready-to-paste
---

# Prompt audit modifiche recenti — verifica riduzioni pagine

> Da incollare in sessione Claude Code sul repo. Genera report completo `/tmp/audit-angelini-academy.md` con tutte le riduzioni avvenute negli ultimi 6 commit.

---

## Prompt da incollare

```
Per favore esegui un audit chirurgico CHIRURGICO ed ESTESO delle modifiche fatte agli ultimi 6 commit (≈ 2 ore di lavoro recente). Voglio essere assolutamente sicuro che nessuna pagina o sezione del sito sia stata silenziosamente ridotta di contenuti durante il refactor recente.

ESEGUI QUESTI STEP IN SEQUENZA:

Step 1 — orientamento sulla storia recente
- Esegui: git log --oneline -10
- Esegui: git log --format="%h %ai %s" -6 (per vedere timestamp esatti)

Step 2 — statistiche globali HEAD~6 → HEAD
- Esegui: git diff --shortstat HEAD~6 HEAD
- Esegui: git diff --stat HEAD~6 HEAD -- src/

Step 3 — identificazione file con netto NEGATIVO (più rimozioni che aggiunte)
Per ogni file in src/pages/*.tsx e src/components/*.tsx che compare nello stat:
- Calcola (linee_aggiunte - linee_rimosse) usando l'output di --stat
- Se il risultato è NEGATIVO o se le rimozioni superano le 30 linee (anche con netto positivo, perché potrebbero essere state ricostruite male), aggiungi alla lista "DA INVESTIGARE"

Step 4 — analisi puntuale dei file DA INVESTIGARE
Per ogni file della lista step 3:
- Esegui: git diff HEAD~6 HEAD -- <file>
- Identifica i BLOCCHI rimossi di ≥5 linee consecutive (linee che iniziano con "-")
- Per ogni blocco rimosso, riporta:
  • Range di linee originali
  • Prime 3 linee del blocco rimosso (preview)
  • Stima del tipo di contenuto perso: array di dati / sezione JSX / commento / utility function / altro

Step 5 — file completamente eliminati
- Esegui: git diff --diff-filter=D --name-only HEAD~6 HEAD -- src/
- Se ce ne sono, leggi il contenuto della versione precedente con git show HEAD~6:<file> e riassumi cosa c'era

Step 6 — verifica specifica su pagine Percorsi, Eventi, Blog
Anche se queste pagine non comparissero nella lista "DA INVESTIGARE", fai una verifica specifica per le pagine seguenti perché Carlo è esplicitamente preoccupato su queste:
- src/pages/PercorsiTalent.tsx
- src/pages/PercorsiResearcher.tsx
- src/pages/PercorsiHrBusiness.tsx
- src/pages/PercorsiMedia.tsx
- src/pages/EventiPage.tsx
- src/pages/BlogPage.tsx
- src/components/Events.tsx
- src/components/Blog.tsx
- src/components/People.tsx
- src/components/Pillars.tsx
- src/components/Footer.tsx
- src/components/Hero.tsx

Per ogni file di questa lista, esegui git diff HEAD~6 HEAD -- <file> e dichiara esplicitamente: "Nessuna modifica" oppure "Modifiche: +X linee, -Y linee, blocchi rimossi: Z".

Step 7 — REPORT FINALE in markdown
Crea un file /tmp/audit-angelini-academy.md con questo formato:

# Audit modifiche ultimi 6 commit — Angelini Academy

## Storia commit
[output git log]

## Statistiche globali
[output --shortstat + --stat]

## Pagine RIDOTTE (netto negativo o blocchi rimossi >30 linee)
[lista con dettagli — per ogni: file, +X/-Y, blocchi rimossi, tipo contenuto perso]

## Pagine INVARIATE o SOLO ARRICCHITE
[lista breve]

## File completamente eliminati
[lista o "Nessuno"]

## Verifica esplicita pagine Percorsi/Eventi/Blog
[per ogni file della lista step 6, una riga di esito]

## Verdetto finale
- Se NESSUNA pagina è stata ridotta sostanzialmente: dichiaralo chiaramente
- Se almeno una pagina è stata ridotta: elenca quali e di quanto, raccomanda eventuale revert puntuale o accettazione

Step 8 — restituisci tutto
- Stampa il contenuto di /tmp/audit-angelini-academy.md in chat
- Conferma il path del file salvato così Carlo può rileggerlo

REGOLE
- Non modificare alcun file di codice
- Non eseguire commit, push, checkout o operazioni che cambiano lo stato del repo
- Solo lettura e analisi
- Se incontri un errore git (es. HEAD~6 non esiste), fallback su HEAD~5 o HEAD~4 e segnala
- Se trovi più di 5 file ridotti significativamente, fermati al 5° e segnala "Altri N file da investigare in fase successiva"

Procedi.
```

---

## Note operative per Carlo

**Cosa ti restituisce Claude Code**:
1. Lista esatta delle pagine ridotte (se ce ne sono) con numero linee aggiunte vs rimosse
2. Preview dei blocchi rimossi (senza dover leggere il diff intero)
3. Verdetto finale: tutto a posto / serve revert / serve discussione
4. File `/tmp/audit-angelini-academy.md` salvato per consultazione successiva

**Come usare il report**:
- Se "Verdetto finale: nessuna pagina ridotta sostanzialmente" → tranquillità, le pagine erano corpose anche prima
- Se "Pagine ridotte: X, Y, Z" → guardi i blocchi rimossi e decidi se revertare via `git checkout HEAD~6 -- <file>` (Claude Code può farlo su tua conferma)

**Variante rapida** (se hai fretta), comando shell diretto da terminale:
```bash
cd /Users/carlosanvoisin/code/angelini-academy && git diff --stat HEAD~6 HEAD -- 'src/pages/*.tsx' 'src/components/*.tsx'
```
Restituisce in una sola riga per file il count +/- di linee. Veloce ma meno dettagliato del prompt sopra.

---

*Versione 1.0 — 15/5/2026 (sera tardi). Audit triggerato da preoccupazione Carlo su possibile riduzione silenziosa di contenuti.*
