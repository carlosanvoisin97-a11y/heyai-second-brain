---
type: system-review
created: 2026-06-10
updated: 2026-06-10
tags: [system, weekly-review, F6]
---

# 🩺 Weekly System Review — settimana 4/6–10/6

> Prima esecuzione della routine F6 (weekly-system-review, creata 10/6/2026).

## Verdetto in 3 righe

Il sistema ha retto dopo un recupero difficile: gap digest 11gg chiuso in retrospettiva il 7/6, poi 3 giorni di run regolari. Questa settimana è stata di infrastruttura intensa (F3 vault-health DRY, F4 worktree convention, F6 questa routine, F7 cleanup 500MB). Il debito principale che resta: ~25 file Inbox >14gg (cluster pitch Angelini archivabile in blocco) + decisione Jakala/Silencio/Aegiscore a 26gg che blocca 3 progetti P2. Una cosa da fare: leggere Aegiscore v5 e chiudere quella decisione.

## Battito

- Daily note: 2/5 (lun 9 + mar 10 ✅; sab 7/6 = catch-up retrospettivo per gap 27/5→7/6; mer 4, gio 5, ven 6 = nessuna nota individuale) · Digest: 3 run regolari (8-9-10/6) + catch-up manuale 7/6 (11gg di gap M365) ✅ · Commit: ~70 in 7gg, picco massiccio 9-10/6 (50+ commit: fix link A–E, F3/F4/F6/F7 refactor) · anomalia: 0 commit Code-specifici nei giorni del gap (4-6/6), coerente con la fermata

## Salute strutturale

- Links: K=37 audit cloud 9/6 (ALERT, +429% da K=7 del 7/6; 1→7→37 in 3 settimane) → **risolto overnight 10/6** (fix commit A1+A2+A3+B+C-D+E-J, tutti i cluster). Trend strutturale preoccupante: K torna a crescere a ogni espansione vault; necessita ciclo di fix reattivo. Prossimo audit domenicale (22/6) confermerà il reset.
- MOC: **nessun run dal 24/5 (17gg)** · 1 flag aperto non triagiato ([[99 - System/MOC Refresh Log]]: Paolo Verrangia cluster MOC) · Causa: routine cloud probabilmente falliva silenziosamente; F3 thin-wrapper non ancora testato — verificare a Sab 13/6
- Consistency: ultimo audit 25/5 ✅ pulito — ma **stale da 16gg**: da allora F3 ha refactorizato 3 routine, bridge PM digest ri-armato, Cowork definitivamente dismesso; audit corrente non riflette la realtà
- code-recap: 5/5 ✅ Jun 5–9 presenti · Jun 10 atteso alle 20:35

## Debito e attriti

- **Inbox sovraccarica**: ~25 file con data >14gg, più vecchio [[00 - Inbox/2026-05-11 - Analisi bozza contratto Longo Wave 2|contratto Longo 11/5]] (30gg). Cluster dominante: ~15 file pitch cycle Angelini Academy (v3/v3.1/v3.2/v3.3/v4 + audit + handover + slide-prompt, maggio 2026) — pitch concluso con soft-defer il 5/6, intero cluster archivabile previa distillazione. PDF bruciante: [[00 - Inbox/Angelini Academy — Strategia e architettura del nuovo sito web.pdf]] (854KB, senza elaborazione vault).
- **[[99 - System/Open Questions]] stale (>14gg senza movimento)**:
  - #36 Paolo Verrangia identità (aperta 21/5, 20gg) — invio documenti OT/Eye Cookies **SOSPESO**, 7 verifiche pendenti (ODCEC + CCIAA + Roberta Calajò)
  - #35 Stato contrattuale OT+Eye Cookies (aperta 21/5, 20gg) — zona grigia fatturazione senza contratto firmato, impatto audit Verrangia
  - #34 Scheduler drift (aperta 7/5, 34gg) — quasi certamente superata da F3/F4, da triagire e chiudere
  - #31-33 Angelini Academy gara (aperte 5/5, 36gg) — parzialmente risolte dal pitch 5/6 e call 8/6, da aggiornare stato
- **[[99 - System/Open Tasks]] stale**: #p1 Jakala/Silencio/Aegiscore decisione da PM Digest 15/5 (26gg, bloccante per PresidIA/OssAI/HoReCa — con Achipont LOST 9/6 il bundle è ora 3 progetti) · #p1 Germano Eye Cookies roadmap (multipli aperti da 20/5, ~21gg) · #p1 Arianna Crowd lista ospiti (da 25/5, ora con escalation Lorena Cavecchi 9/6 che la sovrascrive)

## 💡 Raccomandazioni Insight (max 2)

1. **Distill-before-archive — cluster Angelini Inbox**: ~15 file pitch (v3→v4 + audit + handover + slide-prompt, maggio 2026) sono maturi per l'archivio dopo il soft-defer del 5/6. Azione consigliata: creare 1 atomic note in `40 - Resources/Concetti/` con key learnings del pitch (pattern competitor landscape, vincoli pricing con fornitore tecnico, stakeholder quadrilatero Elena/Caterina/Tiziana/Francesco) → poi archive batch. Svuoterebbe ~60% del debito Inbox in un'operazione.
2. **Resurfacing — Jakala/Silencio/Aegiscore (26gg stale, perimetro cambiato)**: la perdita di Achipont il 9/6 ha ridotto il bundle da 4 a 3 progetti (PresidIA €35K + OssAI €20K + HoReCa €27K vs Jakala). L'offerta Aegiscore v5 è sul tavolo dal 25/5 e ancora non letta. Con questa chiarezza di perimetro, la decisione è più semplice di quanto sembrasse a maggio — ma ogni settimana aggiuntiva è costo d'opportunità su PresidIA P2.

## Proposta azioni (checkbox per Carlo — NON eseguite)

- [ ] Leggere Aegiscore v5 (PDF in Inbox 25/5) e decidere Jakala vs Silencio/Aegiscore per PresidIA/OssAI/HoReCa — sblocca 3 progetti P2
- [ ] Procedere verifiche #36 Verrangia: ODCEC Roma + CCIAA + messaggio Roberta Calajò (documenti OT/Eye Cookies SOSPESI fino a chiusura)
- [ ] Archive batch Angelini pitch Inbox (post distillazione 1 atomic note key learnings pitch in `40 - Resources/Concetti/`)
- [ ] Verificare esecuzione moc-refresh cloud a Sab 13/6 → deve comparire entry in [[99 - System/MOC Refresh Log]] (test F3 thin-wrapper in produzione)
- [ ] Rigirare system-consistency-check (stale da 25/5; F3 ha cambiato la struttura scheduler — audit attuale non riflette la realtà)
- [ ] Triagire #34 (scheduler drift, 34gg) → quasi certamente obsoleta post-F3/F4, chiudere formalmente
- [ ] Aggiornare stato #31-33 (Angelini Academy gara) → parzialmente risolte, segnare come closed o collapsed in [[99 - System/Open Questions]]
