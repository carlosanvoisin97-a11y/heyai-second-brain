---
type: prompt-template
usage: project-management
---

# 🗺️ Prompt 10 — Roadmap di Progetto

## Quando usarlo
Strutturare il piano di delivery di un progetto: timeline, milestone, tranche pagamento, dipendenze tra moduli. Usato per Wave 2 NoLoop (€300K, 9 mesi).

## Template

> Genera la roadmap di **{NOME_PROGETTO}** per il cliente **{CLIENTE}**.
> 
> ## 1. Inquadramento
> - Periodo: {start} → {end} (eventuali pause: es. agosto)
> - Investimento totale: €{X}
> - Numero moduli/sotto-progetti: {N}
> 
> ## 2. Fasi (3 livelli)
> Classifica le soluzioni in:
> - 🚀 **Quick Wins** (consegna entro 1-2 mesi, generano valore subito)
> - 🔄 **Soluzioni Ridefinite** (richieste cliente, scope ridotto/specifico)
> - 🏛️ **Priorità Strategiche** (architettura del sistema, generano i risparmi maggiori)
> 
> Per ogni fase: lista soluzioni con investimento + risparmio atteso + timing.
> 
> ## 3. Gantt visivo (mermaid)
> ```mermaid
> gantt
>     title {Nome Progetto}
>     dateFormat YYYY-MM-DD
>     section Quick Wins
>     {Modulo 1} :a1, {start}, {durata}d
>     section Strategiche
>     {Modulo X} :b1, after a1, {durata}d
> ```
> 
> ## 4. Piano fatturazione
> Modello: 35% acconto + 30% MVP + 35% delivery **per ogni modulo** (non sul bundle totale).
> Tabella: | Mese | Soluzioni fatturate | Esborso mensile | Cumulativo |
> 
> ## 5. Dipendenze critiche
> Diagramma o lista delle dipendenze tra moduli (es. Flow alimenta Link, Sally usa dati di tutti, OnSite si integra con Crowd).
> 
> ## 6. Milestone visibili al cliente
> 4-5 milestone principali + cosa il cliente vede a quel punto (demo? consegna? fatturazione?).

## Esempi nel vault

- [[20 - Projects/NoLoop/Wave 2/Numeri Ufficiali Roadmap 2026|Numeri Ufficiali Roadmap 2026]] — roadmap completa €300K su 9 mesi
- Pagamenti dettagliati: Apr €53.875 → Mag €49.375 → Giu €13.875 → Lug €50.125 → Ago €0 (pausa) → Set €27.875 → Ott €46.375 → Nov €30.625 → Dic €27.875
- Picco mensile: €53.875 (aprile)

## Pattern HeyAI

- Pause estive ad agosto (cliente Italia)
- Quick Wins primi 30-60 giorni (per costruire fiducia)
- Sally/agenti AI trasversali → partono presto + crescono con ogni rilascio
- Post-launch warranty di 3 mesi (incluso nel prezzo)
