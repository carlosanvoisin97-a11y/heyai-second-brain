# Audit critico della quotazione progettuale

**Created:** 27/02/2026, 23:06:35
**Updated:** 27/02/2026, 23:10:44
**Exported:** 30/04/2026, 03:30:42
**Model:** claude-opus-4-6
**Link:** [https://claude.ai/chat/9f7f086e-88e2-4e20-8ace-fcfec3725843](https://claude.ai/chat/9f7f086e-88e2-4e20-8ace-fcfec3725843)

---

## User
**2026-02-27T22:06:36.548Z**

Ho allegato il documento della quotazione (versione finale con layout aggiornato).
Il tuo compito è analizzarla in modo critico e completo per identificare ogni possibile:
* rischio (tecnico, operativo, commerciale, legale/contrattuale, delivery, dati/AI, sicurezza, integrazioni, governance)
* implicazione e conseguenza (per noi e per NOT)
* elemento mancante, ambiguo o non specificato
* assunzione implicita non dichiarata
* possibile area di scope creep / fraintendimento
* incoerenza interna (tra sezioni, numeri, fasi, deliverable, tempi, dipendenze)
* punto che potrebbe essere contestato dal cliente o creare problemi in fase di delivery o negoziazione
Non riscrivere la quotazione. Devi solo fare una revisione di qualità “da audit”.
Output richiesto (obbligatorio)
1. Lista prioritaria dei rischi e gap (Alta / Media / Bassa) Per ogni punto indica:
* dove si trova nel documento (sezione/titolo/paragrafo)
* perché è un rischio/gap
* quale impatto potrebbe avere
* cosa suggerisci di aggiungere/chiarire (testo o clausola suggerita, in modo pratico)
1. Sezione “mancanze critiche” Elenca le 5–10 cose più importanti che, se non sistemate, possono generare problemi seri.
2. Checklist finale Una checklist sintetica (max 20 punti) da spuntare prima di inviare al cliente.
Se qualcosa non è verificabile dal documento, segnalo esplicitamente come “non determinabile” e cosa servirebbe per verificarlo.

## Claude
**2026-02-27T22:10:44.908Z**

### Thinking
````
The user wants me to analyze a quotation document critically. Let me first read the document to understand its contents, then provide a comprehensive audit review.
````

### Thinking
````
Now let me read the uploaded document to analyze it.
````

### Thinking
````
Let me read the extracted text.
````

### Thinking
````
Let me see the truncated portion of the document.
````

### Thinking
````
Let me read the remaining portion.
````

### Thinking
````
I now have a comprehensive view of the entire document. Let me create a thorough audit review as requested. Let me organize my analysis.

Key observations and issues I'm finding:

1. **WBS numbers don't add up to the financial breakdown**: 205 GG total at €168,000 = ~€819/GG. Need to check consistency.

2. **Timeline vs effort mismatch**: 24 weeks with 205 GG and a 3-person team (2 devs + 1 PM). 24 weeks × 5 days = 120 working days per person. 3 people × 120 = 360 available GG. 

205 GG used represents 57% utilization, which seems reasonable given the phase distribution.

3. **Financial verification**: The phase breakdown (Discovery €28K, Dev €92K, Dashboard/Test €38K, Hypercare €10K) and module breakdown (Logistica €62K, Vendite €72K, Dashboard €18K, PM/Training/Hypercare €16K) both reconcile to €168K.

4. **Effort allocation across modules**: Discovery accounts for 25 GG, Logistica development for 45 GG, and Vendite development for 55 GG, with the remaining effort distributed across testing, dashboards, and support activities.

5. **Payment schedule validation**: The four milestone payments (30%, 20%, 30%, 20%) correctly total 100% and €168,000.

Now I'm flagging some critical gaps—there's no SLA framework defining response times, uptime commitments, or severity classifications for the hypercare phase, and the recurring costs for cloud infrastructure and AI APIs haven't been specified.

The contract also lacks penalty clauses if HeyAI misses deadlines or quality targets, and the IP clause is extremely broad, giving the client exclusive ownership of all code and algorithms including the AI model itself, which prevents HeyAI from reusing any of this work. There's a 15% buffer mentioned in the risk section for multi-tenant complexity but it's not integrated into the WBS, and there are no acceptance criteria defined for the predictive model's accuracy threshold.

The hypercare period is poorly defined—8 hours weekly for 4 weeks doesn't specify what's actually covered or what happens if issues emerge afterward. The 20-week timeline for development, testing, and launch with just 2 developers feels unrealistic for this scope, and the document's framing heavily favors the Recommended package while making the Base option sound inadequate, which could pressure the client. The 5% change control threshold could be gamed through multiple small requests, and multi-tenant architecture seems unnecessary for an MVP, adding complexity without immediate benefit.

There's no data backup or disaster recovery plan outlined, the ROI projections of €214K annually lack clear methodology, and the security approach is minimal for a system handling financial and personal data—just OWASP basics and load testing with 4 GG. GDPR compliance is flagged as open for the client's data but there's no mention of how NOT's own employee data (location tracking via timbratura) fits into GDPR requirements. The team structure is a single point of failure with only 2 developers and no contingency if someone leaves. I'm also noticing the 3-year savings calculation appears off—€214,268 × 3 should equal €642,804, not the €557,097 shown.

Looking at the timeline inconsistencies, the WBS allocates 4 GG for hypercare (32 hours over 4 weeks), which aligns with the stated 4-week hypercare period but seems tight. There's also a mismatch where DevOps is referenced in the WBS but the team section only lists Tech Lead, AI Engineer, and PM. And there's no clarity on what happens after hypercare ends—if bugs surface after those 4 weeks, there's no warranty or support plan defined.
````

Now let me create the comprehensive audit document.

### Thinking
````
Now I have all the information I need. Let me create a comprehensive audit document. Given the complexity and length needed, I'll create a professional Word document.
````

### Thinking
````
Let me create a comprehensive audit document. I'll make it as a .md file first for readability, and also provide a docx version.
````

### Thinking
````
Now let me also create a DOCX version for professional output.
````

### Thinking
````
Let me present the file to the user. But first, let me also provide a clear summary in my response.
````

### Thinking
````
Done. Let me provide a concise summary.
````

Ecco l'audit completo. Ti sintetizzo le scoperte principali:

**22 rischi/gap identificati** — 10 ad alta priorità, 7 media, 5 bassa.

I problemi più critici da affrontare prima dell'invio:

1. **Zero SLA** — nessun tempo di risposta, severità o copertura oraria definiti. Il primo punto che un ufficio acquisti segnalerà.

2. **Costi ricorrenti totalmente indefiniti** — NOT approva €168K senza sapere quanto pagherà ogni mese dopo il go-live. Serve almeno un range.

3. **IP ceduta al 100%** — inclusa l'architettura multi-tenant che avete esplicitamente progettato "per futuri clienti." Contraddizione strategica pesante.

4. **Nessun criterio di accettazione per AI** — né per il modello predittivo né per la computer vision. Senza soglie misurabili, le dispute su "funziona / non funziona" saranno infinite.

5. **Saving 3 anni che non torna** — €214K × 3 = €643K, ma voi scrivete €557K. La differenza (~€86K) non è spiegata. In uno steering committee verrà notata.

6. **GDPR dipendenti ignorato** — la timbratura con geolocalizzazione è un tema giuslavoristico serio (art. 4 Statuto dei Lavoratori) completamente assente dai punti aperti.

7. **Contraddizione Shopify** — la Sez. 7.4 la esclude, la Sez. 10.2 la include. Ambiguità che va risolta in una riga.

La checklist finale ha 20 punti da spuntare prima dell'invio. Ti consiglio di partire dai primi 7 che sono quelli ad impatto più alto sia verso il cliente che per la tutela di HeyAI.

