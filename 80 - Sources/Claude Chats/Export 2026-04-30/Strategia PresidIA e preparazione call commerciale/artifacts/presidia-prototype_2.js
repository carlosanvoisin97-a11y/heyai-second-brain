import { useState, useEffect, useRef, useCallback } from "react";

/* ─── DESIGN TOKENS ─── */
const C = {
  bg: "#080C14", surface: "#0F1520", surfaceAlt: "#161D2E", surfaceHover: "#1C2539",
  border: "#1B2336", borderLight: "#2A3550",
  text: "#EDF2F7", textMuted: "#8B9BB4", textDim: "#5A6A84",
  accent: "#4F8EF7", accentDim: "#2D5AA0", accentGlow: "rgba(79,142,247,0.15)",
  green: "#34D399", greenBg: "rgba(52,211,153,0.08)", greenBorder: "rgba(52,211,153,0.25)",
  yellow: "#FBBF24", yellowBg: "rgba(251,191,36,0.08)", yellowBorder: "rgba(251,191,36,0.25)",
  red: "#F87171", redBg: "rgba(248,113,113,0.08)", redBorder: "rgba(248,113,113,0.25)",
  blue: "#60A5FA", blueBg: "rgba(96,165,250,0.08)",
};
const FONT = `'DM Sans', -apple-system, sans-serif`;
const MONO = `'JetBrains Mono', monospace`;

/* ─── MOCK DATA ─── */
const COMPANY = {
  name: "Caffè Roma S.r.l.", piva: "IT 12345678901", ccnl: "CCNL Commercio — Terziario",
  settore: "Pubblici Esercizi — Bar / Caffetteria", sedi: "1 — Via del Corso 42, Roma",
  dipendenti: 8, fatturato: "500.000 – 1.000.000 €",
  orarioGiorni: "Lunedì – Sabato", orarioApertura: "06:30", orarioChiusura: "21:00",
  consulente: "Dott. Marco Murolo", studio: "Studio Murolo & Associati",
  emailConsulente: "m.murolo@studiomurolo.it",
  rspp: "Dott. Ing. Ferri Paolo", rsppTipo: "Esterno",
  superficieFascia: "50 – 100 mq",
};

const EMP = [
  { id:"D001", nome:"Bianchi L.", livello:"4°", contratto:"Indeterminato", tipo:"Full-time", assunzione:"12/03/2019", scadenza:"—", lordo:1820, strao:14, fM:26, fG:8, fR:18, status:"yellow" },
  { id:"D002", nome:"Rossi M.", livello:"5°", contratto:"Indeterminato", tipo:"Full-time", assunzione:"05/09/2020", scadenza:"—", lordo:1650, strao:6, fM:26, fG:18, fR:8, status:"green" },
  { id:"D003", nome:"Verdi A.", livello:"6°S", contratto:"Apprendistato", tipo:"Full-time", assunzione:"15/01/2025", scadenza:"14/01/2028", lordo:1380, strao:0, fM:26, fG:22, fR:4, status:"green" },
  { id:"D004", nome:"Neri F.", livello:"5°", contratto:"Determinato", tipo:"Part-time 24h", assunzione:"01/06/2025", scadenza:"31/05/2026", lordo:990, strao:22, fM:17, fG:4, fR:13, status:"red" },
  { id:"D005", nome:"Colombo S.", livello:"3°", contratto:"Indeterminato", tipo:"Full-time", assunzione:"22/11/2017", scadenza:"—", lordo:2180, strao:8, fM:26, fG:14, fR:12, status:"green" },
  { id:"D006", nome:"Fontana R.", livello:"4°", contratto:"Indeterminato", tipo:"Part-time 20h", assunzione:"03/04/2022", scadenza:"—", lordo:1090, strao:18, fM:22, fG:6, fR:16, status:"yellow" },
  { id:"D007", nome:"Greco P.", livello:"6°S", contratto:"Determinato", tipo:"Full-time", assunzione:"01/10/2025", scadenza:"30/09/2026", lordo:1380, strao:2, fM:26, fG:20, fR:6, status:"green" },
  { id:"D008", nome:"Moretti G.", livello:"5°", contratto:"Indeterminato", tipo:"Full-time", assunzione:"18/07/2021", scadenza:"—", lordo:1650, strao:10, fM:26, fG:12, fR:14, status:"yellow" },
];

const ALERTS = [
  { type:"red", area:"Straordinari", msg:"Neri F. (D004): part-time 24h con 22 ore di straordinario nel mese. Pattern ricorrente da 3 mesi consecutivi.", action:"Notifica inviata al consulente del lavoro", time:"Oggi, 09:14" },
  { type:"red", area:"Ferie", msg:"Bianchi L. (D001): 18 giorni di ferie residue. Rischio superamento limite 18 mesi per godimento residuo.", action:"Notifica inviata al consulente del lavoro", time:"Oggi, 09:14" },
  { type:"yellow", area:"Scadenze", msg:"Neri F. (D004): contratto a termine in scadenza il 31/05/2026. Mancano 78 giorni.", action:"Monitoraggio attivo", time:"Ieri, 14:30" },
  { type:"yellow", area:"Ferie", msg:"Fontana R. (D006): 16 giorni ferie residue su 22 maturate. Valutare piano godimento ferie.", action:"Monitoraggio attivo", time:"Ieri, 14:30" },
  { type:"yellow", area:"Straordinari", msg:"Fontana R. (D006): part-time 20h con 18 ore straordinarie. Presenza ricorrente di ore supplementari.", action:"Monitoraggio attivo", time:"Ieri, 14:30" },
  { type:"blue", area:"Voci retributive", msg:"Rimborsi spese registrati per 3 dipendenti nel mese corrente. Voce non incidente su imponibile contributivo.", action:"Decisione organizzativa registrata: documentazione presente", time:"08/03/2026" },
];

const SICUREZZA = [
  { nome:"DVR — Documento Valutazione Rischi", status:"green", note:"Aggiornato il 15/01/2026", doc:"DVR_CaffeRoma_2026.pdf" },
  { nome:"Nomina RSPP", status:"green", note:"Dott. Ing. Ferri Paolo — esterno", doc:"Nomina_RSPP.pdf" },
  { nome:"Formazione lavoratori (rischio basso)", status:"yellow", note:"2 dipendenti con attestato scaduto (Neri F., Greco P.)", doc:"—" },
  { nome:"Addetti antincendio", status:"green", note:"Bianchi L., Colombo S. — attestati validi", doc:"Att_antincendio.pdf" },
  { nome:"Addetti primo soccorso", status:"green", note:"Rossi M., Colombo S. — attestati validi", doc:"Att_primosoccorso.pdf" },
  { nome:"Sorveglianza sanitaria / Medico competente", status:"red", note:"Nessun medico competente nominato", doc:"—" },
  { nome:"Formazione datore di lavoro", status:"yellow", note:"Attestato del 2020 — verificare necessità aggiornamento", doc:"Form_DDL_2020.pdf" },
];

const COSTS = [{m:"Ott",v:18200},{m:"Nov",v:18800},{m:"Dic",v:22100},{m:"Gen",v:17900},{m:"Feb",v:18400},{m:"Mar",v:18600}];

const CEDOLINI_LOG = [
  { mese:"Marzo 2026", file:"cedolini_mar2026.pdf", pagine:8, stato:"Elaborato", data:"10/03/2026 08:42" },
  { mese:"Febbraio 2026", file:"cedolini_feb2026.pdf", pagine:8, stato:"Elaborato", data:"08/02/2026 09:15" },
  { mese:"Gennaio 2026", file:"cedolini_gen2026.pdf", pagine:8, stato:"Elaborato", data:"09/01/2026 10:03" },
  { mese:"Dicembre 2025", file:"cedolini_dic2025.pdf", pagine:8, stato:"Elaborato", data:"10/12/2025 08:55" },
  { mese:"Novembre 2025", file:"cedolini_nov2025.pdf", pagine:8, stato:"Elaborato", data:"07/11/2025 09:30" },
  { mese:"Ottobre 2025", file:"cedolini_ott2025.pdf", pagine:8, stato:"Elaborato", data:"09/10/2025 11:20" },
];

const QA_FLOW = [
  { q:"Quanti giorni di preavviso per licenziamento al 4° livello?", a:"Il CCNL Commercio prevede, per i lavoratori inquadrati al 4° livello:\n\n• Fino a 5 anni di anzianità: 20 giorni di calendario\n• Da 5 a 10 anni: 30 giorni di calendario\n• Oltre 10 anni: 45 giorni di calendario\n\n(Rif. Art. 234 — CCNL Terziario, Distribuzione e Servizi)\n\nPer eventuali valutazioni specifiche è opportuno confrontarsi con il consulente del lavoro." },
  { q:"Quante ore di straordinario massime in un anno?", a:"Il CCNL Commercio stabilisce un limite massimo di 250 ore annue di lavoro straordinario per ciascun lavoratore. Le prestazioni straordinarie devono essere compensate con le maggiorazioni retributive previste.\n\n(Rif. Artt. 136–137 — CCNL Terziario, Distribuzione e Servizi)\n\nPer eventuali valutazioni specifiche è opportuno confrontarsi con il consulente del lavoro." },
  { q:"Qual è la durata massima dell'apprendistato professionalizzante?", a:"L'apprendistato professionalizzante nel CCNL Commercio ha durata massima di 36 mesi. Per il livello di destinazione finale 6°S, la durata è ridotta a 24 mesi.\n\n(Rif. Art. 50 — CCNL Terziario, Distribuzione e Servizi)\n\nPer eventuali valutazioni specifiche è opportuno confrontarsi con il consulente del lavoro." },
];

/* ─── REUSABLE COMPONENTS ─── */
const Dot = ({s,sz=9}) => <span style={{display:"inline-block",width:sz,height:sz,borderRadius:"50%",background:s==="green"?C.green:s==="yellow"?C.yellow:s==="red"?C.red:C.blue,boxShadow:`0 0 ${sz+2}px ${(s==="green"?C.green:s==="yellow"?C.yellow:s==="red"?C.red:C.blue)}44`,flexShrink:0}} />;

const Card = ({children,style,onClick,glow}) => {
  const [h,setH]=useState(false);
  return <div onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{background:C.surface,border:`1px solid ${h&&onClick?C.borderLight:C.border}`,borderRadius:10,padding:"18px 22px",transition:"all 0.2s",cursor:onClick?"pointer":"default",transform:h&&onClick?"translateY(-1px)":"none",boxShadow:h&&onClick?`0 6px 20px rgba(0,0,0,0.35)`:"none",...style}}>{children}</div>;
};

const Stat = ({label,value,sub,s,onClick}) => (
  <Card onClick={onClick} style={{flex:1,minWidth:155}}>
    <div style={{fontSize:10.5,color:C.textDim,textTransform:"uppercase",letterSpacing:1.2,marginBottom:8,fontFamily:MONO}}>{label}</div>
    <div style={{fontSize:26,fontWeight:700,color:C.text,lineHeight:1,display:"flex",alignItems:"center",gap:8}}>{s&&<Dot s={s} sz={8}/>}{value}</div>
    {sub&&<div style={{fontSize:12.5,color:C.textMuted,marginTop:7}}>{sub}</div>}
  </Card>
);

const Label = ({children}) => <span style={{fontSize:10,fontFamily:MONO,color:C.textDim,textTransform:"uppercase",letterSpacing:1.2}}>{children}</span>;
const Val = ({children}) => <span style={{fontSize:13.5,color:C.text}}>{children}</span>;

const Heading = ({children,sub}) => (
  <div style={{marginBottom:22}}>
    <h2 style={{fontSize:21,fontWeight:700,color:C.text,margin:0,letterSpacing:-0.3}}>{children}</h2>
    {sub&&<p style={{fontSize:13,color:C.textMuted,margin:"5px 0 0"}}>{sub}</p>}
  </div>
);

const Badge = ({s,label}) => {
  const bg = s==="green"?C.greenBg:s==="yellow"?C.yellowBg:s==="red"?C.redBg:C.blueBg;
  const co = s==="green"?C.green:s==="yellow"?C.yellow:s==="red"?C.red:C.blue;
  const bd = s==="green"?C.greenBorder:s==="yellow"?C.yellowBorder:s==="red"?C.redBorder:"rgba(96,165,250,0.25)";
  return <span style={{fontSize:10.5,fontWeight:600,padding:"3px 9px",borderRadius:5,background:bg,color:co,border:`1px solid ${bd}`}}>{label}</span>;
};

const Row = ({children,style}) => <div style={{display:"flex",gap:12,flexWrap:"wrap",...style}}>{children}</div>;

const TH = ({children}) => <th style={{textAlign:"left",padding:"9px 12px",color:C.textDim,fontSize:10,textTransform:"uppercase",letterSpacing:0.8,borderBottom:`1px solid ${C.border}`,fontFamily:MONO,fontWeight:500}}>{children}</th>;

const Table = ({cols,data}) => (
  <div style={{overflowX:"auto"}}>
    <table style={{width:"100%",borderCollapse:"collapse",fontSize:13}}>
      <thead><tr>{cols.map((c,i)=><TH key={i}>{c.label}</TH>)}</tr></thead>
      <tbody>{data.map((r,i)=>(
        <tr key={i} onMouseEnter={e=>e.currentTarget.style.background=C.surfaceHover} onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
          {cols.map((c,j)=><td key={j} style={{padding:"11px 12px",borderBottom:`1px solid ${C.border}`,color:C.text,whiteSpace:"nowrap"}}>{c.render?c.render(r):r[c.key]}</td>)}
        </tr>
      ))}</tbody>
    </table>
  </div>
);

const InfoRow = ({label,value,last}) => (
  <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",padding:"10px 0",borderBottom:last?"none":`1px solid ${C.border}`}}>
    <Label>{label}</Label><Val>{value}</Val>
  </div>
);

const Disclaimer = ({children}) => (
  <div style={{fontSize:11,color:C.textDim,lineHeight:1.6,fontStyle:"italic",padding:"10px 14px",background:C.surfaceAlt,borderRadius:6,marginTop:16,borderLeft:`2px solid ${C.borderLight}`}}>{children}</div>
);

const AlertRow = ({a}) => (
  <div style={{display:"flex",gap:12,padding:"13px 18px",alignItems:"flex-start",borderBottom:`1px solid ${C.border}`,background:a.type==="red"?"rgba(248,113,113,0.03)":a.type==="yellow"?"rgba(251,191,36,0.02)":"transparent"}}>
    <Dot s={a.type} sz={9}/>
    <div style={{flex:1,minWidth:0}}>
      <div style={{fontSize:10.5,color:C.textDim,fontFamily:MONO,marginBottom:3}}>{a.area} · {a.time}</div>
      <div style={{fontSize:13,color:C.text,lineHeight:1.55}}>{a.msg}</div>
      <div style={{fontSize:12,color:C.textMuted,marginTop:4,fontStyle:"italic"}}>{a.action}</div>
    </div>
  </div>
);

const NavItem = ({icon,label,active,onClick,badge:b}) => (
  <div onClick={onClick} style={{display:"flex",alignItems:"center",gap:11,padding:"9px 14px",borderRadius:7,cursor:"pointer",transition:"all 0.15s",background:active?C.accentGlow:"transparent",color:active?C.accent:C.textMuted,fontWeight:active?600:400,fontSize:13.5,position:"relative"}}>
    <span style={{fontSize:15,width:22,textAlign:"center"}}>{icon}</span><span>{label}</span>
    {b&&<span style={{marginLeft:"auto",background:C.red,color:"#fff",fontSize:10,fontWeight:700,borderRadius:10,padding:"2px 7px",minWidth:16,textAlign:"center"}}>{b}</span>}
  </div>
);

const Divider = ({label}) => (
  <div style={{padding:"14px 14px 6px",fontSize:9.5,color:C.textDim,textTransform:"uppercase",letterSpacing:1.5,fontFamily:MONO}}>{label}</div>
);

/* ─── PAGE: PROFILO AZIENDALE ─── */
const PProfilo = () => (
  <div>
    <Heading sub="Dati di profilazione aziendale — configurazione iniziale">Profilo Aziendale</Heading>
    <Row>
      <Card style={{flex:1,minWidth:280}}>
        <div style={{fontSize:13,fontWeight:600,color:C.text,marginBottom:14}}>Anagrafica</div>
        <InfoRow label="Ragione sociale" value={COMPANY.name}/>
        <InfoRow label="Partita IVA" value={COMPANY.piva}/>
        <InfoRow label="CCNL applicato" value={COMPANY.ccnl}/>
        <InfoRow label="Tipologia attività" value={COMPANY.settore}/>
        <InfoRow label="Sedi operative" value={COMPANY.sedi}/>
        <InfoRow label="Fascia fatturato" value={COMPANY.fatturato} last/>
      </Card>
      <Card style={{flex:1,minWidth:280}}>
        <div style={{fontSize:13,fontWeight:600,color:C.text,marginBottom:14}}>Organizzazione</div>
        <InfoRow label="Giorni apertura" value={COMPANY.orarioGiorni}/>
        <InfoRow label="Orario apertura" value={COMPANY.orarioApertura}/>
        <InfoRow label="Orario chiusura" value={COMPANY.orarioChiusura}/>
        <InfoRow label="Superficie locale" value={COMPANY.superficieFascia}/>
        <InfoRow label="N. dipendenti attivi" value={COMPANY.dipendenti} last/>
      </Card>
    </Row>
    <Row style={{marginTop:12}}>
      <Card style={{flex:1,minWidth:280}}>
        <div style={{fontSize:13,fontWeight:600,color:C.text,marginBottom:14}}>Consulente del lavoro</div>
        <InfoRow label="Professionista" value={COMPANY.consulente}/>
        <InfoRow label="Studio" value={COMPANY.studio}/>
        <InfoRow label="Email" value={COMPANY.emailConsulente} last/>
      </Card>
      <Card style={{flex:1,minWidth:280}}>
        <div style={{fontSize:13,fontWeight:600,color:C.text,marginBottom:14}}>Referente sicurezza</div>
        <InfoRow label="RSPP" value={COMPANY.rspp}/>
        <InfoRow label="Tipologia" value={COMPANY.rsppTipo} last/>
      </Card>
    </Row>
    <Disclaimer>I dati del profilo aziendale vengono inseriti in fase di prima configurazione e possono essere aggiornati in qualsiasi momento. Sulla base di questo profilo, PresidIA attiva le regole e gli indicatori pertinenti.</Disclaimer>
  </div>
);

/* ─── PAGE: CARICAMENTO CEDOLINI ─── */
const PCedolini = () => (
  <div>
    <Heading sub="Caricamento mensile dei cedolini paga — unica attività periodica richiesta">Caricamento Cedolini</Heading>
    <Card style={{marginBottom:16,border:`1px dashed ${C.borderLight}`,background:C.surfaceAlt,textAlign:"center",padding:"32px 22px"}}>
      <div style={{fontSize:36,marginBottom:10,opacity:0.4}}>📄</div>
      <div style={{fontSize:14,color:C.text,fontWeight:600,marginBottom:4}}>Trascina qui i cedolini paga in PDF</div>
      <div style={{fontSize:12.5,color:C.textMuted,marginBottom:14}}>oppure invia a <span style={{color:C.accent,fontFamily:MONO,fontSize:12}}>cafferoma@upload.presidia.it</span></div>
      <div style={{display:"inline-block",padding:"8px 20px",borderRadius:6,background:C.accent,color:"#fff",fontSize:13,fontWeight:600,cursor:"default"}}>Seleziona file</div>
    </Card>
    <Card style={{marginBottom:16,borderLeft:`3px solid ${C.green}`}}>
      <div style={{display:"flex",alignItems:"center",gap:10}}>
        <Dot s="green" sz={10}/>
        <div>
          <div style={{fontSize:13.5,fontWeight:600,color:C.text}}>Ultimo caricamento: 10 Marzo 2026, 08:42</div>
          <div style={{fontSize:12.5,color:C.textMuted,marginTop:2}}>8 cedolini elaborati con successo · 56 dati estratti · Dashboard aggiornata</div>
        </div>
      </div>
    </Card>
    <Card style={{padding:0,overflow:"hidden"}}>
      <div style={{padding:"14px 18px",borderBottom:`1px solid ${C.border}`}}>
        <div style={{fontSize:13,fontWeight:600,color:C.text}}>Storico caricamenti</div>
      </div>
      <Table cols={[
        {label:"Mese",key:"mese"},
        {label:"File",render:r=><span style={{fontFamily:MONO,fontSize:12,color:C.accent}}>{r.file}</span>},
        {label:"Cedolini",key:"pagine"},
        {label:"Stato",render:r=><Badge s="green" label={r.stato}/>},
        {label:"Data elaborazione",render:r=><span style={{fontFamily:MONO,fontSize:12}}>{r.data}</span>},
      ]} data={CEDOLINI_LOG}/>
    </Card>
    <Disclaimer>PresidIA estrae dai cedolini esclusivamente i dati necessari all'analisi organizzativa (dati contrattuali, retributivi e organizzativi). I dati personali vengono pseudonimizzati nell'archivio di analisi secondo l'architettura privacy by design del sistema.</Disclaimer>
  </div>
);

/* ─── PAGE: DASHBOARD ─── */
const PDash = ({go}) => {
  const rc=ALERTS.filter(a=>a.type==="red").length, yc=ALERTS.filter(a=>a.type==="yellow").length;
  const tot=EMP.reduce((s,e)=>s+e.lordo,0);
  const frAvg=Math.round(EMP.reduce((s,e)=>s+e.fR,0)/EMP.length);
  const stAvg=Math.round(EMP.reduce((s,e)=>s+e.strao,0)/EMP.length);
  const mx=Math.max(...COSTS.map(x=>x.v));
  return <div>
    <Heading sub={`${COMPANY.ccnl} · Dati aggiornati al 10 Marzo 2026`}>Dashboard Organizzativa</Heading>
    <Row style={{marginBottom:16}}>
      {[{n:rc,c:C.red,l:"Criticità",s:"Richiede attenzione immediata"},{n:yc,c:C.yellow,l:"Monitoraggio",s:"Elementi da osservare"},{n:4,c:C.green,l:"Aree stabili",s:"Situazione regolare"}].map((x,i)=>
        <Card key={i} onClick={i<2?()=>go("notifiche"):undefined} style={{flex:1,minWidth:180,borderLeft:`3px solid ${x.c}`}}>
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <span style={{fontSize:28,fontWeight:800,color:x.c}}>{x.n}</span>
            <div><div style={{fontSize:13,fontWeight:600,color:C.text}}>{x.l}</div><div style={{fontSize:11.5,color:C.textMuted}}>{x.s}</div></div>
          </div>
        </Card>
      )}
    </Row>
    <Row style={{marginBottom:16}}>
      <Stat label="Dipendenti" value={COMPANY.dipendenti} sub="5 FT · 2 PT · 1 App." onClick={()=>go("personale")}/>
      <Stat label="Costo mensile" value={`€${tot.toLocaleString("it")}`} sub={`Proiezione annua: €${(tot*13).toLocaleString("it")}`} onClick={()=>go("costi")}/>
      <Stat label="Ferie residue (Ø)" value={`${frAvg} gg`} s="yellow" sub="3 dipendenti oltre soglia" onClick={()=>go("ferie")}/>
      <Stat label="Straordinari (Ø)" value={`${stAvg} h`} s="yellow" sub="2 pattern anomali" onClick={()=>go("straordinari")}/>
    </Row>
    <Row>
      <Card style={{flex:2,minWidth:260}}>
        <div style={{fontSize:13,fontWeight:600,color:C.text,marginBottom:2}}>Andamento costo del personale</div>
        <div style={{fontSize:11.5,color:C.textMuted,marginBottom:18}}>Ultimi 6 mesi — lordo</div>
        <div style={{display:"flex",alignItems:"end",gap:8,height:100}}>
          {COSTS.map((m,i)=>{const h=(m.v/mx)*100;const isDec=m.m==="Dic";return(
            <div key={i} style={{flex:1,textAlign:"center"}}>
              <div style={{fontSize:10,color:C.textDim,marginBottom:4,fontFamily:MONO}}>€{(m.v/1000).toFixed(1)}k</div>
              <div style={{height:h,background:isDec?`linear-gradient(to top,${C.yellow}88,${C.yellow})`:`linear-gradient(to top,${C.accentDim},${C.accent})`,borderRadius:"4px 4px 0 0",transition:"height 0.6s"}}/>
              <div style={{fontSize:10.5,color:C.textDim,marginTop:6}}>{m.m}</div>
            </div>
          );})}
        </div>
        <div style={{fontSize:10.5,color:C.textDim,marginTop:14,fontStyle:"italic"}}>Picco dicembre: tredicesima mensilità</div>
      </Card>
      <Card style={{flex:3,minWidth:320,padding:0,overflow:"hidden"}}>
        <div style={{padding:"14px 18px 10px",borderBottom:`1px solid ${C.border}`,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <div style={{fontSize:13,fontWeight:600,color:C.text}}>Segnalazioni recenti</div>
          <span onClick={()=>go("notifiche")} style={{fontSize:11.5,color:C.accent,cursor:"pointer",fontWeight:600}}>Vedi tutte →</span>
        </div>
        <div style={{maxHeight:230,overflowY:"auto"}}>{ALERTS.slice(0,4).map((a,i)=><AlertRow key={i} a={a}/>)}</div>
      </Card>
    </Row>
    <Card style={{marginTop:14}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:14}}>
        <div style={{flex:1,minWidth:250}}>
          <div style={{fontSize:13,fontWeight:600,color:C.text,marginBottom:6}}>Osservatorio organizzativo dell'attività</div>
          <div style={{fontSize:13,color:C.yellow,lineHeight:1.6}}>⚠ La distribuzione delle ore lavorate merita attenzione rispetto all'orario di apertura dell'attività.</div>
          <div style={{fontSize:13,color:C.textMuted,lineHeight:1.6,marginTop:3}}>L'organico appare contenuto rispetto alla dimensione operativa dichiarata.</div>
        </div>
        <div style={{fontSize:10,color:C.textDim,maxWidth:280,lineHeight:1.55,fontStyle:"italic",padding:"8px 12px",background:C.surfaceAlt,borderRadius:6}}>
          Gli indicatori sono elaborati sulla base di informazioni organizzative inserite dall'azienda e dei dati contenuti nei cedolini. Non rappresentano una valutazione di conformità normativa.
        </div>
      </div>
    </Card>
  </div>;
};

/* ─── PAGE: PERSONALE ─── */
const PPersonale = () => <div>
  <Heading sub="Struttura attuale dell'organico">Personale</Heading>
  <Row style={{marginBottom:16}}>
    <Stat label="Totale" value="8" sub="dipendenti attivi"/>
    <Stat label="Full-time" value="5"/>
    <Stat label="Part-time" value="2"/>
    <Stat label="Apprendisti" value="1" s="blue"/>
  </Row>
  <Card style={{padding:0,overflow:"hidden"}}>
    <Table cols={[
      {label:"",render:r=><Dot s={r.status}/>},
      {label:"ID",render:r=><span style={{fontFamily:MONO,fontSize:12}}>{r.id}</span>},
      {label:"Dipendente",key:"nome"},
      {label:"Livello",key:"livello"},
      {label:"Contratto",key:"contratto"},
      {label:"Tipo",key:"tipo"},
      {label:"Assunzione",key:"assunzione"},
      {label:"Scadenza",key:"scadenza"},
      {label:"Lordo",render:r=><span style={{fontWeight:600}}>€{r.lordo.toLocaleString("it")}</span>},
    ]} data={EMP}/>
  </Card>
</div>;

/* ─── PAGE: COSTI ─── */
const PCosti = () => {
  const tot=EMP.reduce((s,e)=>s+e.lordo,0);const mx=Math.max(...COSTS.map(x=>x.v));
  return <div>
    <Heading sub="Costo del personale e proiezioni">Costi</Heading>
    <Row style={{marginBottom:16}}>
      <Stat label="Costo mensile" value={`€${tot.toLocaleString("it")}`}/>
      <Stat label="Proiezione annua" value={`€${(tot*13).toLocaleString("it")}`} sub="Include tredicesima"/>
      <Stat label="Costo medio / dip." value={`€${Math.round(tot/EMP.length).toLocaleString("it")}`}/>
    </Row>
    <Card style={{padding:0,overflow:"hidden",marginBottom:14}}>
      <Table cols={[
        {label:"Dipendente",key:"nome"},
        {label:"Livello",key:"livello"},
        {label:"Tipo",key:"tipo"},
        {label:"Lordo mensile",render:r=><span style={{fontWeight:600}}>€{r.lordo.toLocaleString("it")}</span>},
        {label:"Straordinari (h)",render:r=>r.strao>15?<span style={{color:C.red,fontWeight:600}}>{r.strao}</span>:<span>{r.strao}</span>},
      ]} data={EMP}/>
    </Card>
    <Card>
      <div style={{fontSize:13,fontWeight:600,color:C.text,marginBottom:14}}>Andamento ultimi 6 mesi</div>
      <div style={{display:"flex",alignItems:"end",gap:8,height:110}}>
        {COSTS.map((m,i)=><div key={i} style={{flex:1,textAlign:"center"}}>
          <div style={{fontSize:10,color:C.textDim,marginBottom:4,fontFamily:MONO}}>€{(m.v/1000).toFixed(1)}k</div>
          <div style={{height:(m.v/mx)*100,background:`linear-gradient(to top,${C.accentDim},${C.accent})`,borderRadius:"4px 4px 0 0"}}/>
          <div style={{fontSize:10.5,color:C.textDim,marginTop:6}}>{m.m}</div>
        </div>)}
      </div>
    </Card>
  </div>;
};

/* ─── PAGE: FERIE ─── */
const PFerie = () => <div>
  <Heading sub="Monitoraggio ferie maturate, godute e residue">Ferie</Heading>
  <Row style={{marginBottom:16}}>
    <Stat label="Residue totali" value={`${EMP.reduce((s,e)=>s+e.fR,0)} gg`} s="yellow"/>
    <Stat label="Media residua" value={`${Math.round(EMP.reduce((s,e)=>s+e.fR,0)/EMP.length)} gg`}/>
    <Stat label="Criticità" value="1" s="red" sub="Bianchi L. — 18gg"/>
  </Row>
  <Card style={{padding:0,overflow:"hidden"}}>
    <Table cols={[
      {label:"",render:r=><Dot s={r.fR>15?"red":r.fR>10?"yellow":"green"}/>},
      {label:"Dipendente",key:"nome"},
      {label:"Maturate",render:r=>`${r.fM} gg`},
      {label:"Godute",render:r=>`${r.fG} gg`},
      {label:"Residue",render:r=><span style={{fontWeight:600,color:r.fR>15?C.red:r.fR>10?C.yellow:C.text}}>{r.fR} gg</span>},
      {label:"Godimento",render:r=>{const p=Math.round((r.fG/r.fM)*100);return<div style={{display:"flex",alignItems:"center",gap:8}}>
        <div style={{flex:1,height:5,background:C.surfaceAlt,borderRadius:3,maxWidth:70}}>
          <div style={{width:`${p}%`,height:"100%",background:p>60?C.green:p>40?C.yellow:C.red,borderRadius:3,transition:"width 0.5s"}}/>
        </div><span style={{fontSize:11.5,color:C.textMuted,fontFamily:MONO}}>{p}%</span>
      </div>;}},
    ]} data={EMP}/>
  </Card>
  <Card style={{marginTop:14,borderLeft:`3px solid ${C.yellow}`}}>
    <div style={{fontSize:11.5,color:C.yellow,fontWeight:600,marginBottom:4}}>Nota informativa</div>
    <div style={{fontSize:13,color:C.textMuted,lineHeight:1.6}}>Il CCNL Commercio prevede che almeno 2 settimane di ferie siano godute nell'anno di maturazione e il residuo entro 18 mesi successivi. Per eventuali valutazioni specifiche è opportuno confrontarsi con il consulente del lavoro.</div>
  </Card>
</div>;

/* ─── PAGE: STRAORDINARI ─── */
const PStraord = () => <div>
  <Heading sub="Frequenza, andamento mensile e pattern anomali">Straordinari</Heading>
  <Row style={{marginBottom:16}}>
    <Stat label="Ore totali mese" value={`${EMP.reduce((s,e)=>s+e.strao,0)} h`}/>
    <Stat label="Media / dip." value={`${Math.round(EMP.reduce((s,e)=>s+e.strao,0)/EMP.length)} h`}/>
    <Stat label="Pattern anomali" value="2" s="red" sub="Neri F., Fontana R."/>
  </Row>
  <Card style={{padding:0,overflow:"hidden"}}>
    <Table cols={[
      {label:"",render:r=><Dot s={r.strao>18?"red":r.strao>12?"yellow":"green"}/>},
      {label:"Dipendente",key:"nome"},
      {label:"Tipo",key:"tipo"},
      {label:"Ore straord.",render:r=><span style={{fontWeight:600,color:r.strao>18?C.red:r.strao>12?C.yellow:C.text}}>{r.strao} h</span>},
      {label:"Proiezione annua",render:r=>`${r.strao*12} h`},
      {label:"Pattern",render:r=>{
        if(r.tipo.includes("Part-time")&&r.strao>15) return <span style={{color:C.red,fontSize:12,fontWeight:600}}>⚠ PT + straordinari elevati</span>;
        if(r.strao>12) return <span style={{color:C.yellow,fontSize:12}}>Da monitorare</span>;
        return <span style={{color:C.textDim,fontSize:12}}>Regolare</span>;
      }},
    ]} data={[...EMP].sort((a,b)=>b.strao-a.strao)}/>
  </Card>
  <Card style={{marginTop:14,borderLeft:`3px solid ${C.red}`}}>
    <div style={{fontSize:11.5,color:C.red,fontWeight:600,marginBottom:4}}>Segnalazione critica</div>
    <div style={{fontSize:13,color:C.textMuted,lineHeight:1.6}}>Neri F. (D004): part-time 24h con 22 ore straordinarie mensili ricorrenti da 3 mesi. La presenza sistematica di straordinari su contratto part-time merita verifica con il consulente del lavoro.</div>
  </Card>
</div>;

/* ─── PAGE: SCADENZE ─── */
const PScadenze = () => {
  const sc=[
    {dip:"Neri F.",tipo:"Contratto a termine",data:"31/05/2026",gg:78,s:"yellow"},
    {dip:"Greco P.",tipo:"Contratto a termine",data:"30/09/2026",gg:200,s:"green"},
    {dip:"Verdi A.",tipo:"Apprendistato prof.",data:"14/01/2028",gg:672,s:"green"},
  ];
  return <div>
    <Heading sub="Contratti a termine, apprendistati e scadenze attive">Scadenze</Heading>
    <Row style={{marginBottom:16}}>
      <Stat label="Contratti in scadenza" value="2" sub="1 entro 90 giorni"/>
      <Stat label="Apprendistati attivi" value="1" s="blue"/>
      <Stat label="Prossima scadenza" value="78 gg" s="yellow" sub="Neri F. — 31/05/2026"/>
    </Row>
    <Card style={{padding:0,overflow:"hidden"}}>
      <Table cols={[
        {label:"",render:r=><Dot s={r.s}/>},
        {label:"Dipendente",key:"dip"},
        {label:"Tipologia",key:"tipo"},
        {label:"Scadenza",key:"data"},
        {label:"Giorni residui",render:r=><span style={{fontWeight:600,color:r.gg<90?C.yellow:C.text}}>{r.gg} gg</span>},
      ]} data={sc}/>
    </Card>
  </div>;
};

/* ─── PAGE: SICUREZZA ─── */
const PSicurezza = () => <div>
  <Heading sub="Checklist adempimenti principali in materia di sicurezza sul lavoro">Sicurezza</Heading>
  <Row style={{marginBottom:16}}>
    <Stat label="Adempimenti OK" value="3" s="green"/>
    <Stat label="Da verificare" value="2" s="yellow"/>
    <Stat label="Criticità" value="1" s="red" sub="Sorveglianza sanitaria"/>
  </Row>
  <Card style={{padding:0,overflow:"hidden"}}>
    {SICUREZZA.map((it,i)=><div key={i} style={{display:"flex",alignItems:"center",gap:14,padding:"13px 20px",borderBottom:i<SICUREZZA.length-1?`1px solid ${C.border}`:"none"}}>
      <Dot s={it.status} sz={9}/>
      <div style={{flex:1}}>
        <div style={{fontSize:13.5,color:C.text,fontWeight:500}}>{it.nome}</div>
        <div style={{fontSize:12,color:C.textMuted,marginTop:2}}>{it.note}</div>
      </div>
      {it.doc!=="—"&&<span style={{fontSize:11,color:C.accent,fontFamily:MONO}}>{it.doc}</span>}
      <Badge s={it.status} label={it.status==="green"?"Presente":it.status==="yellow"?"Da verificare":"Assente"}/>
    </div>)}
  </Card>
  <Card style={{marginTop:14,borderLeft:`3px solid ${C.red}`}}>
    <div style={{fontSize:11.5,color:C.red,fontWeight:600,marginBottom:4}}>Intervento necessario</div>
    <div style={{fontSize:13,color:C.textMuted,lineHeight:1.6}}>La sorveglianza sanitaria risulta non attivata. In assenza di nomina del medico competente, l'azienda potrebbe essere esposta a contestazioni in caso di ispezione. Notifica inviata al referente sicurezza.</div>
  </Card>
</div>;

/* ─── PAGE: SEGNALAZIONI ─── */
const PNotifiche = () => <div>
  <Heading sub="Tutte le segnalazioni organizzative attive">Segnalazioni</Heading>
  <Row style={{marginBottom:16}}>
    {[{l:"Critiche",n:ALERTS.filter(a=>a.type==="red").length,c:C.red},{l:"Monitoraggio",n:ALERTS.filter(a=>a.type==="yellow").length,c:C.yellow},{l:"Registrate",n:ALERTS.filter(a=>a.type==="blue").length,c:C.blue}].map((g,i)=>
      <Card key={i} style={{flex:1,minWidth:130,borderLeft:`3px solid ${g.c}`}}>
        <div style={{fontSize:24,fontWeight:800,color:g.c}}>{g.n}</div>
        <div style={{fontSize:12,color:C.textMuted}}>{g.l}</div>
      </Card>
    )}
  </Row>
  <Card style={{padding:0,overflow:"hidden"}}>{ALERTS.map((a,i)=><AlertRow key={i} a={a}/>)}</Card>
</div>;

/* ─── PAGE: Q&A NORMATIVO (AUTO-PLAY) ─── */
const PQA = () => {
  const [msgs,setMsgs] = useState([]);
  const [typing,setTyping] = useState(false);
  const [started,setStarted] = useState(false);
  const [done,setDone] = useState(false);
  const chatRef = useRef(null);
  const runRef = useRef(false);

  const addMsg = useCallback((role,text) => {
    setMsgs(p=>[...p,{role,text}]);
  },[]);

  const runFlow = useCallback(()=>{
    if(runRef.current) return;
    runRef.current = true;
    setStarted(true);setMsgs([]);setDone(false);

    let delay = 400;
    QA_FLOW.forEach((item,idx)=>{
      const qDelay = delay;
      setTimeout(()=>addMsg("user",item.q), qDelay);
      delay += 1200;
      const tDelay = delay;
      setTimeout(()=>setTyping(true), tDelay);
      delay += 1800;
      const aDelay = delay;
      setTimeout(()=>{setTyping(false);addMsg("ai",item.a);}, aDelay);
      delay += 2200;
    });
    setTimeout(()=>{setDone(true);runRef.current=false;}, delay);
  },[addMsg]);

  const restart = useCallback(()=>{
    runRef.current = false;
    setStarted(false);setMsgs([]);setTyping(false);setDone(false);
  },[]);

  useEffect(()=>{if(chatRef.current) chatRef.current.scrollTop=chatRef.current.scrollHeight;},[msgs,typing]);

  return <div>
    <Heading sub="Domande informative su CCNL e normativa del lavoro">Q&A Normativo</Heading>
    <Card style={{padding:0,overflow:"hidden",height:480,display:"flex",flexDirection:"column"}}>
      <div style={{padding:"14px 18px",borderBottom:`1px solid ${C.border}`,display:"flex",justifyContent:"space-between",alignItems:"center",flexShrink:0}}>
        <div style={{fontSize:13,fontWeight:600,color:C.text}}>Assistente normativo PresidIA</div>
        <span style={{fontSize:10.5,fontFamily:MONO,color:C.textDim}}>CCNL COMMERCIO · RAG</span>
      </div>
      <div ref={chatRef} style={{flex:1,overflowY:"auto",padding:"18px",display:"flex",flexDirection:"column",gap:14}}>
        {!started && <div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:14}}>
          <div style={{fontSize:40,opacity:0.3}}>💬</div>
          <div style={{fontSize:14,color:C.textMuted,textAlign:"center",maxWidth:340,lineHeight:1.6}}>L'assistente normativo risponde a domande sul CCNL Commercio citando riferimenti agli articoli contrattuali.</div>
          <div onClick={runFlow} style={{padding:"10px 24px",borderRadius:7,background:C.accent,color:"#fff",fontSize:13,fontWeight:600,cursor:"pointer",marginTop:6,transition:"transform 0.15s"}}>
            ▶ &nbsp;Avvia demo Q&A
          </div>
        </div>}
        {msgs.map((m,i)=>(
          <div key={i} style={{display:"flex",justifyContent:m.role==="user"?"flex-end":"flex-start",animation:"fadeIn 0.3s ease"}}>
            <div style={{
              maxWidth:"82%",padding:"12px 16px",borderRadius:m.role==="user"?"12px 12px 2px 12px":"12px 12px 12px 2px",
              background:m.role==="user"?C.accent:C.surfaceAlt,
              color:m.role==="user"?"#fff":C.text,
              fontSize:13.5,lineHeight:1.65,whiteSpace:"pre-wrap",
            }}>
              {m.text}
            </div>
          </div>
        ))}
        {typing && <div style={{display:"flex",justifyContent:"flex-start"}}>
          <div style={{padding:"12px 16px",borderRadius:"12px 12px 12px 2px",background:C.surfaceAlt}}>
            <span style={{color:C.textMuted,fontSize:13,animation:"pulse 1.2s ease infinite",display:"inline-block"}}>Analisi normativa in corso...</span>
          </div>
        </div>}
        {done && <div style={{textAlign:"center",paddingTop:8}}>
          <span onClick={restart} style={{fontSize:12,color:C.accent,cursor:"pointer",fontWeight:600}}>↻ Riavvia demo</span>
        </div>}
      </div>
      <div style={{padding:"12px 18px",borderTop:`1px solid ${C.border}`,display:"flex",gap:10,flexShrink:0}}>
        <div style={{flex:1,padding:"10px 14px",fontSize:13,color:C.textDim,background:C.surfaceAlt,border:`1px solid ${C.border}`,borderRadius:7}}>Fai una domanda sul CCNL Commercio...</div>
        <div style={{padding:"10px 18px",borderRadius:7,background:C.surfaceAlt,color:C.textDim,fontSize:13,fontWeight:600}}>Chiedi</div>
      </div>
    </Card>
    <Disclaimer>Le risposte hanno finalità esclusivamente informativa e riportano riferimenti al CCNL e alla normativa vigente. Non costituiscono consulenza professionale. Per eventuali valutazioni specifiche è opportuno confrontarsi con il consulente del lavoro.</Disclaimer>
  </div>;
};

/* ─── MAIN APP ─── */
export default function App() {
  const [page,setPage] = useState("dashboard");
  const [sidebar,setSidebar] = useState(true);
  const [ready,setReady] = useState(false);
  useEffect(()=>{setReady(true);},[]);

  const nav = [
    {section:"Setup"},
    {key:"profilo",icon:"⚙",label:"Profilo Aziendale"},
    {key:"cedolini",icon:"📄",label:"Caricamento Cedolini"},
    {section:"Monitoraggio"},
    {key:"dashboard",icon:"◉",label:"Dashboard"},
    {key:"personale",icon:"◎",label:"Personale"},
    {key:"costi",icon:"€",label:"Costi"},
    {key:"ferie",icon:"☀",label:"Ferie"},
    {key:"straordinari",icon:"⏱",label:"Straordinari"},
    {key:"scadenze",icon:"⏳",label:"Scadenze"},
    {key:"sicurezza",icon:"⛑",label:"Sicurezza"},
    {section:"Comunicazione"},
    {key:"notifiche",icon:"🔔",label:"Segnalazioni",badge:"2"},
    {key:"qa",icon:"💬",label:"Q&A Normativo"},
  ];

  const pages = {
    profilo:<PProfilo/>,cedolini:<PCedolini/>,dashboard:<PDash go={setPage}/>,
    personale:<PPersonale/>,costi:<PCosti/>,ferie:<PFerie/>,
    straordinari:<PStraord/>,scadenze:<PScadenze/>,sicurezza:<PSicurezza/>,
    notifiche:<PNotifiche/>,qa:<PQA/>,
  };

  return (
    <div style={{fontFamily:FONT,background:C.bg,color:C.text,minHeight:"100vh",display:"flex",opacity:ready?1:0,transition:"opacity 0.4s"}}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet"/>
      <style>{`*{box-sizing:border-box;margin:0;padding:0}::-webkit-scrollbar{width:5px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:${C.borderLight};border-radius:3px}@keyframes pulse{0%,100%{opacity:1}50%{opacity:.35}}@keyframes fadeIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}`}</style>

      {/* Sidebar */}
      <div style={{width:sidebar?232:0,minHeight:"100vh",background:C.surface,borderRight:`1px solid ${C.border}`,display:"flex",flexDirection:"column",transition:"width 0.25s ease",overflow:"hidden",flexShrink:0}}>
        <div style={{padding:"22px 18px 18px",borderBottom:`1px solid ${C.border}`,flexShrink:0}}>
          <div style={{fontSize:21,fontWeight:800,color:C.text,letterSpacing:-0.5,whiteSpace:"nowrap"}}>Presid<span style={{color:C.accent}}>IA</span></div>
          <div style={{fontSize:9,color:C.textDim,marginTop:4,textTransform:"uppercase",letterSpacing:1.8,fontFamily:MONO,whiteSpace:"nowrap"}}>Governance Organizzativa</div>
        </div>
        <div style={{padding:"12px 8px 0",borderBottom:`1px solid ${C.border}`,flexShrink:0}}>
          <div style={{padding:"0 8px 12px"}}>
            <div style={{fontSize:12.5,fontWeight:600,color:C.text,whiteSpace:"nowrap"}}>{COMPANY.name}</div>
            <div style={{fontSize:11,color:C.textDim,marginTop:1,whiteSpace:"nowrap"}}>{COMPANY.settore}</div>
          </div>
        </div>
        <div style={{padding:"6px 8px",flex:1,overflowY:"auto"}}>
          {nav.map((n,i)=>n.section?<Divider key={i} label={n.section}/>:
            <NavItem key={n.key} icon={n.icon} label={n.label} active={page===n.key} badge={n.badge} onClick={()=>setPage(n.key)}/>
          )}
        </div>
        <div style={{padding:"14px 16px",borderTop:`1px solid ${C.border}`,flexShrink:0}}>
          <div style={{fontSize:9,color:C.textDim,textTransform:"uppercase",letterSpacing:1.2,fontFamily:MONO,marginBottom:5,whiteSpace:"nowrap"}}>Consulente</div>
          <div style={{fontSize:12.5,fontWeight:600,color:C.text,whiteSpace:"nowrap"}}>{COMPANY.consulente}</div>
          <div style={{fontSize:11,color:C.textDim,whiteSpace:"nowrap"}}>{COMPANY.studio}</div>
        </div>
      </div>

      {/* Main */}
      <div style={{flex:1,display:"flex",flexDirection:"column",minWidth:0}}>
        <div style={{height:52,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 24px",borderBottom:`1px solid ${C.border}`,background:C.surface,flexShrink:0}}>
          <div style={{display:"flex",alignItems:"center",gap:14}}>
            <span onClick={()=>setSidebar(!sidebar)} style={{cursor:"pointer",fontSize:16,color:C.textMuted,userSelect:"none"}}>☰</span>
            <span style={{fontSize:13.5,color:C.textMuted}}>{nav.find(n=>n.key===page)?.label||"Dashboard"}</span>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:14,fontSize:11,color:C.textDim}}>
            <span style={{fontFamily:MONO,padding:"3px 10px",background:C.surfaceAlt,borderRadius:4,border:`1px solid ${C.border}`}}>DEMO · PROTOTIPO</span>
            <div style={{width:30,height:30,borderRadius:"50%",background:`linear-gradient(135deg,${C.accent},${C.accentDim})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,color:"#fff"}}>CR</div>
          </div>
        </div>
        <div style={{flex:1,overflowY:"auto",padding:"24px 26px"}}>{pages[page]}</div>
      </div>
    </div>
  );
}