---
type: prompt-template
usage: quality-check
source: insights 2026-06-02
---

# ✅ Prompt 14 — Fact-Check Pre-Consegna Deliverable Cliente

## Quando usarlo
Prima di consegnare qualsiasi deliverable destinato (anche indirettamente) a un cliente: proposta, email, slide, recap, memo. Blocca errori di nomi, prezzi e attribuzioni di competenze che altrimenti tocca correggere a mano.

## Template

> Prima di considerare pronto **{DELIVERABLE}** per **{NOME_CLIENTE} / {NOME_PROGETTO}**, fai un passaggio di verifica e riportami l'esito:
> - **Nomi** (persone, aziende, prodotti): corretti e in forma canonica? (controlla `60 - People/` + scheda progetto)
> - **Numeri e prezzi**: verificati su [[Master Facts Sheet]] + scheda progetto? Ricostruisci i calcoli, non copiarli.
> - **Attribuzione competenze/servizi**: ogni cosa attribuita all'attore giusto (HeyAI vs partner vs cliente vs intermediario)? Niente competenze altrui prese per nostre.
> - **Riservatezze (CLAUDE.md §13)**: nessun fornitore HeyAI nominato, nessun dato commerciale interno esposto.
> - Marca ogni dato non verificabile come **"DA CONFERMARE"**. Mai inventare numeri o citazioni.

## Come customizzarlo
- Per i numeri puri di una presentazione, abbina il **Prompt 02 — Audit Numerico**.
- Per le gare: aggiungi "ogni claim regge se il cliente lo contesta in call?".
- Inserisci gli attori specifici del caso (es. "regia editoriale = FuturItaly, non HeyAI").

## Perché esiste
Insights 2/6/2026: friction ricorrente da attribuzioni errate (es. "regia editoriale" attribuita a HeyAI invece che a FuturItaly), nomi sbagliati, prezzi non verificati. Rafforza CLAUDE.md §2 (audit-first) e §11 (mai inventare numeri/citazioni).
