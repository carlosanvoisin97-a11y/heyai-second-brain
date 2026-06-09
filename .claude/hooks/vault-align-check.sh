#!/bin/bash
# ─────────────────────────────────────────────────────────────────────────────
# vault-align-check.sh — SessionStart: ricorda all'agente di ALLINEARSI al vault
# (main) PRIMA di lavorare. Rete automatica per F4 / CLAUDE.md §9ter.
#
# PERCHÉ ESISTE:
#   Le sessioni Code vengono spesso spawnate (da app desktop / agent mode) in una
#   WORKTREE isolata (ramo claude/*). I file della worktree sono una FOTO CONGELATA
#   e il suo ramo NON rientra in Obsidian. Per il VAULT il lavoro deve stare su main
#   (git -C /Users/carlosanvoisin/claude), altrimenti diventa invisibile (è il "leak"
#   chiuso in F4). Questo hook inietta il promemoria a OGNI avvio, così l'allineamento
#   non dipende dal ricordarselo.
#
# COSA FA: solo additionalContext (iniettato all'agente). NON esegue git da solo —
#   il pull/commit lo fa l'agente, che sa gestire eventuali conflitti con modifiche
#   non committate. Zero rete, zero side-effect. Silenzioso in UI per Carlo.
#
# COME DISATTIVARLO: rimuovi il blocco dal SessionStart in .claude/settings.json,
#   oppure cancella questo file, oppure /hooks in Claude Code.
# ─────────────────────────────────────────────────────────────────────────────

VAULT="/Users/carlosanvoisin/claude"
CWD="$(pwd)"

case "$CWD" in
  *"/.claude/worktrees/"*)
    CTX="ALLINEAMENTO VAULT (hook §9ter): questa sessione gira in una WORKTREE isolata ($CWD) — i suoi file sono una foto congelata e il suo ramo NON rientra in Obsidian. Per il vault HeyAI: (1) PRIMA di scrivere esegui 'git -C $VAULT pull --no-edit origin main' (allinea col cloud/digest); (2) leggi/scrivi SEMPRE i file sotto $VAULT/... e committa con 'git -C $VAULT' su main ('git -C $VAULT push origin HEAD:main') — MAI sul ramo della worktree. Rif: CLAUDE.md §9ter."
    ;;
  "$VAULT"|"$VAULT"/*)
    CTX="ALLINEAMENTO VAULT (hook §9ter): sei nella cartella del vault. PRIMA di scrivere esegui 'git -C $VAULT pull --no-edit origin main' per allinearti col cloud (digest/routine); commit e push su main. Rif: CLAUDE.md §9ter."
    ;;
  *)
    CTX="ALLINEAMENTO VAULT (hook §9ter): per lavorare sul vault HeyAI opera sempre su $VAULT (git -C $VAULT), fai pull prima di scrivere e commit/push su main. Rif: CLAUDE.md §9ter."
    ;;
esac

jq -nc --arg c "$CTX" '{hookSpecificOutput: {hookEventName: "SessionStart", additionalContext: $c}}'
exit 0
