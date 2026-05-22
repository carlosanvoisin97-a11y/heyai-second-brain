---
name: transcript-processing
description: "Protocollo per processare trascrizioni di call/meeting caricate da Carlo. Estrae decisioni, numeri, task, citazioni e li committa nelle schede vault. Usa quando Carlo carica una trascrizione o dice 'recap call'."
---

# §15.bis — Protocollo "trascrizione caricata" + audit post-commit obbligatorio

Quando Carlo carica una **trascrizione** di call/meeting/audio (file .docx/.txt/.md uploaded o testo incollato in chat), il protocollo vault-live update generico (CLAUDE.md §15) non basta: una trascrizione contiene decine di fatti vault-worthy in un colpo solo, quindi serve una **checklist deterministica** per non perdere nulla e un **audit esplicito** prima di chiudere.

Eseguire **in ordine** i seguenti step PRIMA di scrivere la risposta finale all'utente:

1. **Estrarre i partecipanti**: chi ha parlato + chi è citato anche se non presente. Per ciascuno → identificare scheda in `60 - People/`. Se manca, segnalare "Da triagiare: persona X" (CLAUDE.md §10bis: non creare schede automaticamente).
2. **Estrarre i progetti citati** (Wave 2, Eldis, NOT, Futuritaly, Crowd, Minutes, …). Per ciascuno → identificare scheda in `20 - Projects/<Cliente>/<Progetto>/…md`. Se path incerto, **Glob prima dell'Edit** per verificare il filename corrente.
3. **Estrarre numeri / decisioni / cambi di stato vault-worthy** (§15 trigger): nuovo numero ufficiale → Master Facts Sheet (con conferma esplicita di Carlo); cambio di status → frontmatter `status:` della scheda.
4. **Estrarre task operativi** assegnati a Carlo / Federico / Simone / terzi. Scriverli come `- [ ]` con priorità (`#p1/#p2/#p3`) nella scheda pertinente. PM Digest li raccoglie in Open Tasks.
5. **Estrarre eventi calendario nuovi** (date confermate, slittamenti, milestone) → sezione `## Eventi calendario` della scheda progetto.
6. **Estrarre citazioni testuali strategiche** → sezione `## Citazioni testuali da preservare` della scheda persona.
7. **Estrarre pattern di interazione/negoziazione** emersi → sezione `## Pattern di interazione` della scheda persona.
8. **Aggiornare `updated:` nel frontmatter** di ogni scheda toccata.
9. **Sync Microsoft Lists** (CLAUDE.md §8bis): per ogni task con owner Federico/Simone → scriverlo sulla Lists "Soolutions Delivery Board", rispettando i filtri di privacy.
10. **Audit post-commit OBBLIGATORIO**: prima di scrivere la risposta in chat, dichiarare:

    > **Vault commit completo**:
    > - Toccate: `[[scheda1]]` (1 riga sintesi), `[[scheda2]]` (1 riga sintesi), …
    > - Saltate volutamente: `[[schedaX]]` (motivo)
    > - Master Facts: aggiornato (delta) / non toccato
    > - Microsoft Lists: aggiornata con N task / non toccata (motivo)
    > - Schede attese non toccate per dimenticanza: nessuna ✅

Se l'audit dichiara schede non toccate per dimenticanza, **completare i commit prima di rispondere**.
