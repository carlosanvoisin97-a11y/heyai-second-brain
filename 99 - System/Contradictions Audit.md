---
type: system-audit
created: 2026-06-10
updated: 2026-06-10
---

# 🧭 Contradictions Audit

Report del sub-check `contradictions` di [[../.claude/skills/vault-health/SKILL.md|vault-health]] (creato 10/6/2026). Audit-as-delta: una entry SOLO quando ci sono findings. Flag-only: i fix a numeri/stati sono di Carlo (§5), salvo allineamenti a decisioni già prese.

## Audit 2026-06-10 (primo run — prova end-to-end del sub-check)

Fonti: Master Facts v1.2 (9/6) ↔ 15 schede vive `20 - Projects/**` ↔ CLAUDE.md §5/§6. Esclusi Log/superati/[PROPOSTA].

### 🔴 Contraddizioni (3)

| Progetto | Fonte A | Fonte B | Vincente (§4) | Esito |
|---|---|---|---|---|
| OT — stato contrattuale | `_NOT.md` + `_NoLoop.md`: «€109K firmato 03/04» | Master+scheda+CLAUDE.md: «bozza NON firmata» (rettifica 21/5) | NON firmato | ✅ **bonificato 10/6** (residui grep-on-rename 21/5) |
| Eye Cookies — stato | idem: «firmato 03/04» | «documento MAI prodotto» (rettifica 21/5) | mai prodotto | ✅ **bonificato 10/6** |
| Osservatorio — importo | CLAUDE.md §6 + `_Futuritaly.md`: €42K | Master r.144 + scheda: **€45.000 v2 (19/5)** | €45K | ✅ §6 e `_Futuritaly` **allineati al Master 10/6**; ⚠️ resta a Carlo: task stale nella scheda («aggiornare offerta a €42K») da chiudere/correggere |

### 🟡 Drift minori (7) — flag per Carlo (salvo dove indicato)

1. **Achipoint prosa §Stato** dice ancora «🟢 Active — invio 18/5» vs `status: lost` (9/6) — prosa da aggiornare (append nota lost).
2. **PresidIA €40K vs €44K** Revenue Share: Master dice €44K _(provvisorio 7/6)_ — confermare prima di propagare alle schede.
3. **PresidIA costo Jakala €25K vs €27K** — drift interno al Master stesso; vince €27K (7/6) ma da consolidare.
4. **Eldis canone €130/mese**: Master dice "NON ancora validato", scheda dice presentato 22/5 + in rimodulazione self-host (9/6) — Master da riallineare allo stato 9/6.
5. **Wave 2 r.99: «Donzelli — CEO»** vs canonico CFO → ✅ **bonificato 10/6** (errore materiale).
6. **Wave 2 §Stato stale** («attesa bozza 7/5», ultimo agg. 29/4) — prosa da rinfrescare.
7. **Alias "AI Cookies"** registrato nel frontmatter di Eye Cookies vs divieto §11 — decisione Carlo: rimuovere l'alias?

### Copertura verificata consistente

Wave 2 (€300K/€327K/payback) · OT €109K+€55K (50%) · Eye Cookies €75K+€36K (48%) · PresidIA €55K+ FO · Achipont lost · HoReCa €25K · Angelini €49.500+fasi · Eldis €180/h — triple coerenti su tutte le altre coppie progetto/fatto.
