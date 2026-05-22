---
type: teams-chat
date: 2026-04-24
project: Eldis Compilatore
participants: [Stefania Solidoro, Simone M]
---

# 💬 Chat Teams — Eldis Compilatore (env vars)

- **Data**: 2026-04-24
- **Contesto**: durante meeting `Eldis | Allineamento Compilatore`
- **Progetto**: [[Eldis Compilatore]]

## Contenuto chiave

### Simone M (Soolutions) — 11:08
```
TEST_ENV_SMB_MEDIA = //172.16.20.8/Archivio/DATI/Company/IMPORTLISTINI_NONTOCCARE/TEST_COMPILATORE/PDF-JPG
TEST_ENV_SMB_XLSX  = //172.16.20.8/Archivio/DATI/Company/IMPORTLISTINI_NONTOCCARE/TEST_COMPILATORE/ImportNuoviArticoli.xlsx
PROD_ENV_SMB_MEDIA = //172.16.20.8/Archivio/DATI/ImmaginiB2B
```

### Stefania Solidoro (Eldis) — 11:08
```
PROD_ENV_SMB_MEDIA = //172.16.20.8/Archivio/DATI/ImmaginiB2B
```

## Significato

Configurazione ambienti TEST/PROD per il [[20 - Projects/Eldis/Eldis Compilatore|AI Product Catalogue]] presso Eldis.
Server SMB cliente: `172.16.20.8`. Le path differiscono tra TEST (sotto `IMPORTLISTINI_NONTOCCARE/TEST_COMPILATORE/`) e PROD (sotto `DATI/ImmaginiB2B/`).
