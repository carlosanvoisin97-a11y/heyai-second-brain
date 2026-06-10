# Domande Analytics - Portale B2B Elettrodomestici

## DOMANDE PER IL CLIENTE

### Obiettivi e Priorità
1. Qual è l'obiettivo principale? (conversioni, UX, comprensione clienti)
2. Quali KPI contano di più? (tasso conversione, valore ordine, frequenza)
3. Chi userà i dati e per quali decisioni?

### Metriche Vendite
4. Cosa volete sapere sulle vendite? (top prodotti, performance categorie, geografia, stagionalità)
5. Serve tracciare carrelli abbandonati e revenue per sessione?
6. Volete segmentare i clienti? (mobilieri vs rivenditori, volume, zona)

### Comportamento Utenti
7. Quali comportamenti tracciare? (navigazione, scroll, click, ricerca interna, download documenti)
8. Volete session replay / heatmap? (attenzione GDPR)
9. Quali funnel analizzare? (login→checkout, ricerca→acquisto)

### Engagement
10. Metriche importanti: durata sessione, pagine visitate, bounce rate, permanenza su prodotti
11. Distinguere nuovi clienti da abituali?

### Privacy e Strumenti
12. Utenti autenticati o anonimi? Tracciamento nominativo?
13. Come gestire GDPR? (consenso, anonimizzazione IP, retention dati)
14. Preferenze su tool? (GA4, Matomo, altro)
15. Sistemi già in uso? (CRM, email marketing, BI)

### Report
16. Come visualizzare? (dashboard real-time, report automatici, alert)
17. Report prioritari? (vendite per cliente, performance prodotti, funnel, geografico)

---

## DOMANDE PER GLI INFORMATICI

### Architettura
1. Stack tecnologico? (frontend framework, backend, database)
2. SPA o multi-page? Come gestite il routing?
3. Dove possiamo iniettare gli script analytics?

### Tag Management
4. C'è Google Tag Manager o altro TMS?
5. Accesso a header/footer? Serve rebuild per modifiche?
6. Restrizioni sicurezza? (CSP, whitelist domini, ambiente test)

### Data Layer ed Eventi
7. Possibile implementare data layer strutturato?
8. Quali dati disponibili lato client? (user ID, tipo cliente, info prodotto, carrello)
9. Tracciare eventi custom? (click, form, download, ricerche, errori)

### E-commerce
10. Struttura processo acquisto? (step funnel, tipo carrello, checkout)
11. Dati prodotto/ordine disponibili? (ID, categoria, prezzo, quantità, transaction ID)
12. Gestione sconti/promozioni?

### Autenticazione
13. Sistema login? (proprio, SSO, JWT, OAuth)
14. User ID disponibile lato client per tracking?
15. Come riconoscete utenti nuovi vs ritorno?

### Performance e Integrazioni
16. Vincoli performance? (peso pagina, script async)
17. Traffico mensile stimato?
18. API disponibili? Integrazioni necessarie? (CRM, ERP, BI)

### Deploy e Privacy
19. Processo deploy? (CI/CD, frequenza)
20. Ambiente staging per test?
21. Banner cookie già presente? Gli analytics aspettano consenso?
22. Dati in EU? Self-hosted o cloud?

### Debug
23. Tool monitoraggio errori? (Sentry, altro)
24. Come debuggare eventi analytics?

---

## PIANO IMPLEMENTAZIONE

**Fase 1 - Base** (1-2 settimane)
→ Tool analytics, pageview, eventi principali (acquisti)

**Fase 2 - E-commerce** (2-3 settimane)  
→ Product tracking, carrello, checkout funnel, transazioni

**Fase 3 - Comportamentale** (2-3 settimane)
→ Click, scroll, download, ricerca interna

**Fase 4 - Advanced** (opzionale)
→ Session replay, heatmap, A/B test, integrazioni

**Key points B2B:**
- Utenti autenticati = tracking preciso
- Attenzione GDPR con dati nominativi
- Custom portal = massima flessibilità
- Focus su funnel e conversioni
