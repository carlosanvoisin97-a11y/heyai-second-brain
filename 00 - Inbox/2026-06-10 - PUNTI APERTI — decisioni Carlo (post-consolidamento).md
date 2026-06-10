---
type: dashboard
status: live
created: 2026-06-10
updated: 2026-06-10
tags: [system, decisioni, punti-aperti, consolidamento]
aliases: [Punti aperti 10-6, Decisioni Carlo post-consolidamento]
---

# 🎯 PUNTI APERTI — tutto ciò che dipende da Carlo (10/6/2026, sera)

> Consolidato finale dopo: overnight (F3/F6/F7+broken) → mining brain 2 (15 sessioni, 168 item) → esecuzione Pacchetti A+B (14/14 fronti chiusi). **Qui c'è SOLO ciò che resta in capo a te** — niente è andato perso, tutto il resto è fatto e committato. Spunta o rispondi per punti, anche a blocchi.

## 🔴 Business — bloccanti o con scadenza

1. **Fornitori Jakala vs Silencio/Aegiscore** (fermo da 26gg, blocca PresidIA+OssAI+HoReCa): leggere **Aegiscore v5** (PDF 25/5 in Inbox) e decidere il bundle. _(la Weekly System Review la indica come "l'unica cosa da fare questa settimana")_
2. **OQ#70 — condizione Bruno su lock-in modelli**: l'email a Soolutions (spec modello base + spec retraining come sine-qua-non) è stata inviata? Se no, la bozza la preparo io con `email-drafting`.
3. **OQ#69 — perimetro IP Soolutions**: sollecito a Federico/Simone per la lista componenti terze non cedibili (pendente da call 9/6).
4. **Eye Cookies**: chiarire con Federico se "più soldi" = scope aggiuntivo o ripricing del perimetro €36K; poi produrre il contratto ex novo (mai prodotto).
5. **Conferme numeri**: (a) 4 checkbox OT `[reconciled — verificare]`; (b) numeri `[PROPOSTA]` PresidIA (€15-20K integrazione · €7K/agente · 96-98%); (c) **PresidIA €40K vs €44K** Revenue Share (Master dice €44K provvisorio 7/6) e **costo Jakala €25K vs €27K** (drift interno al Master) — dal primo run di [[99 - System/Contradictions Audit|contradictions]]; (d) task stale in `_Futuritaly` («aggiornare offerta a €42K») da chiudere: l'offerta v2 è €45K.
6. **Due diligence Verrengia — DA RIFARE con la grafia giusta**: il match coi procedimenti 2011/2017 era su "Verrangia" (omografo possibile). Verifiche: ODCEC Roma su **Paolo Verrengia** + CCIAA "VSign Srl" + messaggio a Roberta Calajò (già pronto). Invio documenti resta SOSPESO. _(il PDF da inviargli è pronto: `updated_6_20260610`, copertina corretta €300K)_
7. **Morbidelli**: CEO Angelini Academy (vault) o Group CHRO Angelini Industries (web)? Con la risposta allineo le schede.
8. **axel.txt** (conflitto Bruno): distillo la sola cronologia fattuale in Area Governance, o resta tutto fuori dal vault?
9. **HeyAI Job descriptions.txt** arrivato vuoto (8KB di spazi): ri-esporti il file?

## 🟡 Sistema — decisioni di architettura

10. **Segreti nella history git** (redatti ma nei commit storici): riscrivo la history con filter-repo (re-push forzato + ri-test routine cloud) o basta repo privato?
11. **`PM claude .txt`** (trovato sul Desktop, ora in `~/vault-trash-2026-06-10/desktop-OBSIDIAN-VAULT/`): contiene una stringa hex 64 char — **se è una chiave attiva, spostala nel password manager** e dimmi se va revocata.
12. **radar-competitor**: schedulo il trigger cloud (che cadenza?) o archivio la routine?
13. **M1/M2** (frontmatter fonte unica + viste Bases): riprendere (~1-2 sessioni) o dichiarare superati? _(la [[99 - System/Progetti Live.base|vista .base]] pilota è pronta — aprila in Obsidian e dimmi se la direzione ti piace)_
14. **Architettura GitHub+cloud**: confermi come definitiva? (provata end-to-end più volte; senza GitHub cadono le routine unattended)
15. **Vault-conoscenza separato in `~/2brain`** (pattern Karpathy): avviare lo scaffold o archiviare l'idea?
16. **Test empirico second brain** (~1h con te): farlo o lasciar cadere?
17. **2° vault** `~/Documents/Obsidian Vault`: rimuovilo TU dalla lista vault di Obsidian (Settings → vault switcher → Remove; i file restano su disco). 10 secondi.
18. **Toggle "Command line interface"** in Obsidian: serve solo se teniamo `obsidian-cli` (candidata a dismissione nella skill-strategy) — decidi col punto 22.
19. **Trash e backup**: `~/vault-trash-2026-06-10/` (152 MB+) + tgz 688 MB — svuotare tra ~1 settimana se tutto ok (−840 MB).
20. **Smistamento `_DA_DOWNLOADS_2026-06-06`** (136 file) + consolidamento con `_import` (decisione §6 #16) — la skill `downloads-cleaner-vault-import` è pronta.
21. **Triage 53 .md Angelini**: proposta tieni-18/archivia-33 già nel [[_cleanup-manifest-2026-06-10|manifest]] — un tuo OK e la eseguo (con distillazione key-learnings prima, come da Weekly Review).
22. **Drift minori** dal run contradictions (prosa Achipont/Wave 2 stale, canone Eldis nel Master, alias "AI Cookies" vs divieto §11): li sistemo tutti con un OK unico — sono allineamenti, non numeri nuovi.
23. **Flag MOC** ×3 (dal run §MOC): Verrengia nel cluster NoLoop? · `Mappa Skill e Frammentazione AI` in §Sistema vault? · Achipont LOST: tenere con nota, togliere dal conteggio, o archiviare?

## 🟢 Skill e strumenti — un OK e partono

24. **PROPOSTA skill-strategy** ([[2026-06-10 - PROPOSTA skill-strategy (profilazione overnight)|file]]): variare 6 / dismettere 2 / 5 nuove (deck-iteration in testa). Anche per punti.
25. **Implementazioni già progettate, pronte in <1h ciascuna**: (a) failover digest "degradato" ([[2026-06-10 - DESIGN failover 2 PM Digest (Rischio 1)|design]], pezzo 1 raccomandato); (b) router skill-on-prompt; (c) audio-hook → trascrizione automatica. Per (b) e (c) serve la tua presenza per 2 test.
26. **Review umana di pm-method**: i 6 file di `~/.claude/skills/pm-method/` ti somigliano? Mai validati da te.
27. **Fireflies** per le call: autenticare il connettore (serve consenso cliente) o restare su whisper.cpp/Deepgram?
28. **Suite Tier 3 a Michele/Andrea** (marketing/SEO/Meta Ads): dare accesso + istruzioni?
29. **Microfono ambient**: iPhone Memo Vocali gratis (Livello 0, 1 settimana di prova) o Plaud NotePin (~€150-179)?

---

> **Cosa è stato chiuso oggi** (per riferimento, tutto committato su main): overnight F3/F6/F7 + 40 fix broken link (K azionabili=0, J=0) · mining 15 sessioni brain 2 (85% già assorbito, 0 item persi) · grafia Verrengia bonificata (86 occ.) · schede Pecorella (rename) + Velotta (nuova) · ABSTRACT+branch+igiene fuori-vault · OQ#34 chiusa · sub-check contradictions implementato E provato (3🔴+7🟡 reali trovati, residui rettifica 21/5 bonificati) · prompt 17 overnight · 3 atomic notes · 2 MOC tematici · vista .base · patch CLAUDE.md ×4 · scaffold docx testato · PDF Wave 2 updated_6 con copertina corretta · design failover.
