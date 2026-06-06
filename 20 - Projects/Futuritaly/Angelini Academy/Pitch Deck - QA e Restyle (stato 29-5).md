---
type: nota
project: Angelini Academy
client: Angelini Academy
created: 2026-05-29
updated: 2026-05-29
related: "[[_Angelini Academy]] · [[2026-05-23 - Pitch Angelini v3.3 - Atto 1 Ristrutturato]]"
deadline: 2026-05-31
---

# Pitch Deck Angelini — QA e Restyle (stato 29/5)

> Consolidamento del deck HTML v3.3 (zip "Atto 1" + "Atto 2 (Copy)") in **un unico PPTX** + QA + rifinitura. Fonte: deck HTML (`atto1.html` 11 slide + `atto2.html` 17 slide incl. Atto 3). Lavoro su snapshot zip datato 29/5 01:21.

## Consegnato
- **`Angelini_Academy_Pitch.pptx`** in questa cartella — **28 slide**, 15,5 MB, 16:9 (33,87×19,05 cm). Una immagine full-bleed ad alta risoluzione per slide (fedeltà pixel-perfect al deck HTML) + **note relatore** su tutte le 28 (talking track dai JSON `speaker-notes`). Verificato: 28 slide / 28 note / apertura corretta in motore PowerPoint-compatibile (LibreOffice).
- Pipeline rigenerabile: cartella `~/Downloads/deck-build/` → `node build-pptx.js render-final Angelini_Academy_Pitch.pptx` (rende l'HTML via Chrome headless → 150dpi → PPTX).

## Modifiche applicate al sorgente HTML (P0 + difetti layout)
1. **Placeholder rimossi** (client-facing): `[TBD · Master Catalog v4.2]` sul prezzo add-on Customer Journeys → "a preventivo"; `Financial Times TBD` → rimosso (S18).
2. **Riservatezza prezzi (§13)**: tolta la composizione costo `(mix Carlo PM senior + Michele dev senior)` dalla riga €650/g (S27) — resta solo la tariffa.
3. **Paginazione** unificata: Atto 1 era "/19" (stale) → "/28".
4. **Collisione Matrice (S7)**: la pill "OGGI · Angelini" copriva la label FOUNDATION → spostata a centro-sinistra (anche narrativamente corretta: posizionamento ibrido indifferenziato); freccia ri-ancorata.
5. **Sitemap (S20)**: le voci andavano a capo una-parola-per-riga (3 nodi figli vs 2 colonne grid → testo in colonna min-content). Risolto: voci ora su riga singola.

## Analisi a tappeto (sintesi per dimensione)
- **Riservatezza/permessi** — Case history S23 nomina NOT/NoLoop on Trade/BAT/Eye Cookies: **Carlo conferma di avere i permessi** → mantenuto. (Nota: BAT = tabacco accanto a brand pharma; tenuto su sua decisione.)
- **Leggibilità/densità (rischio #1 pitch live)** — 4 slide illeggibili a distanza: **S4 Exec Summary · S6 BMC · S8 Tecnica SEO/UX · S10 Personas 7×3 · S17 KPI Scorecard**. Borderline: Fondamenti, Pain, Journey Sara, Concept, Quotazione.
- **Spazi vuoti sbilanciati** (banda inferiore ~30-40% vuota): Indice, Mercato, Pain, Lab Editoriale, Sinottico, Roadmap, Team.
- **Action title sopra le righe (S5 Mercato)**: promette "3 modelli archetipici" mostrati però sulla slide successiva (Matrice).
- **Dati** — pricing risolto (€49.500 core, somma corretta 22+4,5+15+3+5) + add-on; un solo prezzo add-on "a preventivo".

## Restyle profondo rimanente (raccomandato — tocca contenuto/narrativa)
> Non applicato unilateralmente: incide sul contenuto parlato e sul sorgente HTML che è in lavorazione anche nel thread parallelo. Da confermare quale snapshot è canonico prima di procedere.
- **De-densify "deck a due livelli"**: versione hero sintetica nel flusso + dettaglio completo (BMC, audit SEO/UX, 7 personas, KPI scorecard) in **Appendice** navigabile. Risolve il rischio #1 senza perdere la profondità (fotografabile).
- **Ribilanciamento bande vuote** (layout-only, sicuro): distribuire verticalmente Mercato, Roadmap, Team, Sinottico.
- **Action-title pyramid** (1 takeaway/slide); allineare S5.
- **Bridge demo** esplicito tra Atto 2 (S21) e Atto 3.

## Flag
- **Divergenza sorgente**: il deck è stato editato su uno snapshot; se il thread parallelo è la fonte canonica, le 5 modifiche sopra vanno riportate lì (o si elegge questo snapshot come canonico).
