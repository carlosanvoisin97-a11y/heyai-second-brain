import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const C = { prospect:"#8b5cf6", contatto:"#3b82f6", followup:"#06b6d4", incontro:"#10b981", brief:"#22c55e", freddo:"#9ca3af", chiuso_neg:"#ef4444", chiuso_pos:"#16a34a", attivo:"#22c55e", fermo:"#eab308", inattivo:"#ef4444", riattivare:"#3b82f6", attivazione:"#8b5cf6" };

const TBC = ({id, children}) => (
  <div style={{background:"#fce4ec",border:"1.5px dashed #e91e63",borderRadius:8,padding:"6px 10px",margin:"6px 0",fontSize:11,color:"#880e4f",lineHeight:1.5}}>
    <span style={{background:"#e91e63",color:"#fff",fontSize:9,fontWeight:500,padding:"1px 6px",borderRadius:4,marginRight:6}}>TBC {id}</span>
    {children}
  </div>
);

const Phase2 = ({children}) => (
  <div style={{background:"#f3f4f6",border:"1px dashed #9ca3af",borderRadius:8,padding:"6px 10px",margin:"6px 0",fontSize:11,color:"#6b7280",lineHeight:1.5}}>
    <span style={{background:"#6b7280",color:"#fff",fontSize:9,fontWeight:500,padding:"1px 6px",borderRadius:4,marginRight:6}}>FASE 2</span>
    {children}
  </div>
);

const Pill = ({bg,color,children}) => <span style={{fontSize:9,padding:"2px 7px",borderRadius:5,fontWeight:500,background:bg,color}}>{children}</span>;
const SemDot = ({color,label}) => <span style={{display:"flex",alignItems:"center",gap:3,fontSize:10}}><span style={{width:7,height:7,borderRadius:"50%",background:color,display:"inline-block"}}/>{label}</span>;

const Card = ({name,co,rep,sem,semLabel,status,note,type,onClick}) => (
  <div onClick={onClick} style={{background:"#fff",border:"0.5px solid #e5e7eb",borderRadius:8,padding:"8px 8px 8px 12px",marginBottom:5,fontSize:11,cursor:onClick?"pointer":"default",borderLeft:`3px solid ${sem}`,position:"relative"}}>
    <div style={{fontWeight:500,fontSize:12}}>{name}</div>
    <div style={{color:"#6b7280",fontSize:10}}>{co}</div>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:4}}>
      <span style={{color:"#3b82f6",fontSize:10}}>{rep}</span>
      <SemDot color={sem} label={semLabel}/>
    </div>
    {status && <div style={{marginTop:3}}><Pill bg={status==="positivo"?"#dcfce7":status==="in corso"?"#dbeafe":"#fee2e2"} color={status==="positivo"?"#166534":status==="in corso"?"#1e40af":"#991b1b"}>{status}</Pill></div>}
    {type && <div style={{marginTop:2}}><Pill bg={type==="Gara"?"#fef3c7":"#e0e7ff"} color={type==="Gara"?"#92400e":"#3730a3"}>{type}</Pill></div>}
    {note && <div style={{color:"#9ca3af",fontSize:10,marginTop:3}}>{note}</div>}
  </div>
);

const KanbanCol = ({label,color,bg,count,children}) => (
  <div style={{minWidth:140,flex:1,background:bg||"#f8fafc",borderRadius:8,padding:8}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6,fontSize:11,fontWeight:500,color}}>
      {label}<span style={{fontSize:9,background:"rgba(0,0,0,.05)",padding:"1px 5px",borderRadius:8}}>{count}</span>
    </div>
    {children}
  </div>
);

// === SCREENS ===

const Screen1_Home = ({go}) => (
  <div>
    <h2 style={{fontSize:17,fontWeight:500,marginBottom:12}}>LeadMe Evolution — Home</h2>
    <p style={{fontSize:12,color:"#6b7280",marginBottom:16}}>Seleziona la vista principale. Il sistema distingue strutturalmente New Business da Clienti (MA1.1).</p>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:16}}>
      <div onClick={()=>go("nb")} style={{background:"#f8fafc",border:"0.5px solid #e5e7eb",borderRadius:12,padding:20,cursor:"pointer",textAlign:"center"}}>
        <div style={{fontSize:28,fontWeight:500,color:C.prospect}}>556</div>
        <div style={{fontSize:13,fontWeight:500,marginTop:4}}>New Business</div>
        <div style={{fontSize:11,color:"#6b7280",marginTop:4}}>Pipeline contatti da prospect a cliente</div>
        <div style={{display:"flex",gap:6,justifyContent:"center",marginTop:8,fontSize:10,color:"#9ca3af"}}>
          <span>284 attivi</span><span>·</span><span>120 freddi</span><span>·</span><span>152 chiusi</span>
        </div>
      </div>
      <div onClick={()=>go("cl_kanban")} style={{background:"#f0fdf4",border:"0.5px solid #e5e7eb",borderRadius:12,padding:20,cursor:"pointer",textAlign:"center"}}>
        <div style={{fontSize:28,fontWeight:500,color:C.attivo}}>67</div>
        <div style={{fontSize:13,fontWeight:500,marginTop:4}}>Clienti</div>
        <div style={{fontSize:11,color:"#6b7280",marginTop:4}}>Pipeline aziende clienti con commesse</div>
        <div style={{display:"flex",gap:6,justifyContent:"center",marginTop:8,fontSize:10,color:"#9ca3af"}}>
          <span>42 attivi</span><span>·</span><span>11 fermi</span><span>·</span><span>8 inattivi</span>
        </div>
      </div>
    </div>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10,marginBottom:16}}>
      <div onClick={()=>go("aziende")} style={{background:"#fff",border:"0.5px solid #e5e7eb",borderRadius:8,padding:12,cursor:"pointer",fontSize:12}}>
        <div style={{fontWeight:500}}>Aziende</div><div style={{fontSize:10,color:"#6b7280",marginTop:2}}>594 aziende · alias · gruppi</div>
      </div>
      <div onClick={()=>go("dashboard")} style={{background:"#fff",border:"0.5px solid #e5e7eb",borderRadius:8,padding:12,cursor:"pointer",fontSize:12}}>
        <div style={{fontWeight:500}}>Dashboard direzione</div><div style={{fontSize:10,color:"#6b7280",marginTop:2}}>KPI · allarmi · performance</div>
      </div>
      <div onClick={()=>go("filtri")} style={{background:"#fff",border:"0.5px solid #e5e7eb",borderRadius:8,padding:12,cursor:"pointer",fontSize:12}}>
        <div style={{fontWeight:500}}>Calendario · Filtri · Export</div><div style={{fontSize:10,color:"#6b7280",marginTop:2}}>Range picker · export xlsx</div>
      </div>
    </div>
  </div>
);

const Screen2_NB = ({go}) => (
  <div>
    <h2 style={{fontSize:17,fontWeight:500,marginBottom:4}}>Pipeline new business <Pill bg="#ede9fe" color="#5b21b6">Kanban</Pill></h2>
    <p style={{fontSize:11,color:"#6b7280",marginBottom:10}}>MA1.2 · MA1.3 · MA1.4 · MA3.4</p>
    <div style={{display:"flex",gap:6,marginBottom:10,fontSize:11}}>
      <select style={{fontSize:11,padding:"3px 6px",borderRadius:4}}><option>Tutti i commerciali</option><option>S.M.</option><option>I.G.</option><option>L.C.</option></select>
      <select style={{fontSize:11,padding:"3px 6px",borderRadius:4}}><option>Tutti i settori</option></select>
      <input type="date" style={{fontSize:11,padding:"3px 6px",borderRadius:4,width:100}}/><span style={{lineHeight:"24px"}}>→</span><input type="date" style={{fontSize:11,padding:"3px 6px",borderRadius:4,width:100}}/>
    </div>
    <div style={{display:"flex",gap:6,overflowX:"auto",paddingBottom:6}}>
      <KanbanCol label="Prospect" color={C.prospect} count="4">
        <Card name="M. Bellini" co="Enel" rep="S.M." sem="#22c55e" semLabel="5gg" note="Identificato su SN"/>
        <Card name="G. Ferretti" co="Unicredit" rep="I.G." sem="#eab308" semLabel="42gg" note="Settore bancario"/>
      </KanbanCol>
      <KanbanCol label="Primo contatto" color={C.contatto} count="3">
        <Card name="V. Ricci" co="Mastercard" rep="S.M." sem="#22c55e" semLabel="8gg" status="in corso" note="Email inviata 05/03"/>
        <Card name="L. Galli" co="Campari" rep="I.G." sem="#eab308" semLabel="23gg" status="in corso" note="LinkedIn msg 18/02"/>
      </KanbanCol>
      <KanbanCol label="Follow-up" color={C.followup} count="5">
        <Card name="C. Bianchi" co="Luxottica" rep="L.C." sem="#ef4444" semLabel="45gg" status="in corso" note="Da richiamare — fermo"/>
        <Card name="P. Marchetti" co="Ferrari" rep="S.M." sem="#22c55e" semLabel="3gg" status="positivo" note="Interessato, risentire lun"/>
      </KanbanCol>
      <KanbanCol label="Incontro / call" color={C.incontro} count="2">
        <Card name="S. Cantini" co="Pirelli" rep="I.G." sem="#22c55e" semLabel="3gg" status="positivo" note="Pres. 10/03 — ottimo" onClick={()=>go("dettaglio_nb")}/>
      </KanbanCol>
      <KanbanCol label="Brief / gara" color={C.brief} count="2">
        <Card name="R. Conti" co="Nissan" rep="S.M." sem="#22c55e" semLabel="2gg" status="positivo" type="Gara" note="Brief 11/03 — gara attiva"/>
        <Card name="F. Villa" co="Zanichelli" rep="I.G." sem="#22c55e" semLabel="5gg" status="positivo" type="Aff. diretto" note="Brief ricevuto 08/03"/>
      </KanbanCol>
      <KanbanCol label="Chiuso +" color="#166534" bg="#f0fdf4" count="2">
        <Card name="E. Moretti" co="Gucci" rep="L.C." sem="#22c55e" semLabel="14gg" note="→ diventa Cliente"/>
      </KanbanCol>
      <KanbanCol label="Freddo" color="#6b7280" bg="#f3f4f6" count="8">
        <Card name="D. Russo" co="TIM" rep="M.C." sem="#ef4444" semLabel="120gg"/>
      </KanbanCol>
      <KanbanCol label="Chiuso −" color="#991b1b" bg="#f3f4f6" count="3">
        <Card name="S. Lombardi" co="Vodafone" rep="I.G." sem="#9ca3af" semLabel="" note="Mktg interno"/>
      </KanbanCol>
    </div>
    <TBC id="1">Regola passaggio NB→Cliente: a) quale evento lo trigger? b) chi effettua il cambio? c) se perde la gara ma ha partecipato (es. Brembo) diventa comunque Cliente?</TBC>
    <TBC id="2">Validazione stadi: a) lista corretta? b) Brief e Gara unico stadio o separati? c) reversibilità confermata? d) approcci paralleli stessa azienda (caso Poste): 2 contatti separati o 1 con più attività?</TBC>
    <TBC id="3">Gara vs Affidamento diretto: a) sono le 2 casistiche principali o ce ne sono altre? b) gara sempre via portale o anche email? c) accordi quadro come si tracciano? d) clienti che fanno entrambi?</TBC>
    <Phase2>Sally email giornaliera: ogni mattina recap azioni pending per commerciale. Scraping proattivo: lista lead suggeriti ogni mattina. Icebreaker: messaggio personalizzato per primo contatto.</Phase2>
  </div>
);

const Screen3_Dettaglio = ({go}) => (
  <div>
    <div style={{fontSize:12,color:"#3b82f6",cursor:"pointer",marginBottom:8}} onClick={()=>go("nb")}>← Pipeline NB</div>
    <h2 style={{fontSize:17,fontWeight:500,marginBottom:4}}>Dettaglio contatto — 3 indicatori</h2>
    <p style={{fontSize:11,color:"#6b7280",marginBottom:12}}>MA1.4 · MA1.8 · MA3.4</p>
    <div style={{background:"#fff",border:"0.5px solid #e5e7eb",borderRadius:12,padding:14,marginBottom:12}}>
      <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
        <div style={{width:40,height:40,borderRadius:"50%",background:"#dbeafe",color:"#1e40af",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:500,fontSize:13}}>SC</div>
        <div><div style={{fontWeight:500,fontSize:14}}>S. Cantini</div><div style={{fontSize:11,color:"#6b7280"}}>Pirelli · I.G.</div></div>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:5,marginBottom:10}}>
        <div style={{display:"flex",alignItems:"center",gap:6,fontSize:11}}><span style={{color:"#9ca3af",width:60}}>Pipeline</span><Pill bg="#ede9fe" color="#5b21b6">Incontro / call</Pill></div>
        <div style={{display:"flex",alignItems:"center",gap:6,fontSize:11}}><span style={{color:"#9ca3af",width:60}}>Ultimo esito</span><Pill bg="#dcfce7" color="#166534">positivo</Pill></div>
        <div style={{display:"flex",alignItems:"center",gap:6,fontSize:11}}><span style={{color:"#9ca3af",width:60}}>Freschezza</span><SemDot color="#22c55e" label="3 giorni fa"/></div>
      </div>
      <div style={{fontSize:12,fontWeight:500,marginBottom:6}}>Attività</div>
      {[
        {date:"10/03/26",tipo:"Presentazione aziendale",status:"positivo",note:"Ottimo feedback, ci risentono per il brief"},
        {date:"28/02/26",tipo:"Follow-up telefonico",status:"in corso",note:"Interessata, chiede presentazione"},
        {date:"15/02/26",tipo:"Primo contatto",status:"positivo",note:"LinkedIn msg, ha risposto subito"},
      ].map((a,i)=>(
        <div key={i} style={{background:"#f8fafc",borderRadius:6,padding:8,marginBottom:4,fontSize:11}}>
          <div style={{display:"flex",justifyContent:"space-between"}}><span style={{fontWeight:500}}>{a.tipo}</span><span style={{color:"#9ca3af"}}>{a.date}</span></div>
          <div style={{marginTop:2}}><Pill bg={a.status==="positivo"?"#dcfce7":"#dbeafe"} color={a.status==="positivo"?"#166534":"#1e40af"}>{a.status}</Pill></div>
          <div style={{color:"#6b7280",marginTop:3}}>{a.note}</div>
        </div>
      ))}
      <div style={{fontSize:11,color:"#9ca3af",marginTop:8}}>Cronologia completa visibile anche dopo passaggio a Cliente (MA1.8)</div>
    </div>
    <Phase2>Inoltro email: inoltrare thread a leadme@noloop.eu per aggiornamento automatico stato e archiviazione. Documenti: caricare contratti/brief nella scheda per contesto AI.</Phase2>
  </div>
);

const Screen4_Aziende = ({go}) => (
  <div>
    <div style={{fontSize:12,color:"#3b82f6",cursor:"pointer",marginBottom:8}} onClick={()=>go("home")}>← Home</div>
    <h2 style={{fontSize:17,fontWeight:500,marginBottom:4}}>Vista aziende</h2>
    <p style={{fontSize:11,color:"#6b7280",marginBottom:12}}>MA4.1 · MA4.2 · MA4.3</p>
    <div style={{display:"flex",gap:6,marginBottom:10,fontSize:11}}>
      <select style={{fontSize:11,padding:"3px 6px"}}><option>Tutti i settori</option><option>Automotive</option><option>Fashion & luxury</option><option>Bancario assicurativo</option></select>
      <select style={{fontSize:11,padding:"3px 6px"}}><option>Tutte</option><option>Solo clienti</option><option>Solo NB</option><option>Solo gruppi (madri)</option></select>
      <input placeholder="Cerca azienda..." style={{fontSize:11,padding:"3px 6px",flex:1}}/>
    </div>
    <div style={{fontSize:12,fontWeight:500,marginBottom:8}}>Gruppi aziendali (madre-figlia)</div>
    {[
      {madre:"BNP Paribas",figlie:["BNL","Cardiff","Arval","Findomestic"],contatti:12,stato:"Attivo",rep:"L.C."},
      {madre:"Generali",figlie:["Generali SPA","Generali Italia","Generali Mestre"],contatti:8,stato:"Fermo",rep:"I.G."},
      {madre:"BCC",figlie:["BCC Leasing","BCC Fondi","BCC Mutui","Gruppo BCC"],contatti:15,stato:"Attivo",rep:"L.C."},
    ].map((g,i)=>(
      <div key={i} style={{background:"#fff",border:"0.5px solid #e5e7eb",borderRadius:8,padding:10,marginBottom:6}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <div><span style={{fontWeight:500,fontSize:12}}>{g.madre}</span> <span style={{fontSize:10,color:"#9ca3af"}}>· {g.contatti} contatti</span></div>
          <div style={{display:"flex",gap:4}}><Pill bg={g.stato==="Attivo"?"#dcfce7":"#fefce8"} color={g.stato==="Attivo"?"#166534":"#854d0e"}>{g.stato}</Pill><span style={{fontSize:10,color:"#3b82f6"}}>{g.rep}</span></div>
        </div>
        <div style={{display:"flex",gap:4,marginTop:4,flexWrap:"wrap"}}>{g.figlie.map((f,j)=><span key={j} style={{fontSize:9,background:"#f3f4f6",padding:"1px 6px",borderRadius:4,color:"#6b7280"}}>{f}</span>)}</div>
      </div>
    ))}
    <div style={{fontSize:12,fontWeight:500,margin:"12px 0 8px"}}>Alias configurati</div>
    <div style={{background:"#fff",border:"0.5px solid #e5e7eb",borderRadius:8,padding:10,fontSize:11}}>
      <div style={{display:"flex",justifyContent:"space-between",padding:"3px 0",borderBottom:"0.5px solid #f3f4f6"}}><span>Pirelli</span><span style={{color:"#9ca3af"}}>= Pirelli SPA, PIRELLI S.p.A., pirelli spa</span></div>
      <div style={{display:"flex",justifyContent:"space-between",padding:"3px 0",borderBottom:"0.5px solid #f3f4f6"}}><span>Unicredit</span><span style={{color:"#9ca3af"}}>= UniCredit SPA, UNICREDIT S.p.A.</span></div>
      <div style={{display:"flex",justifyContent:"space-between",padding:"3px 0"}}><span>Ferragamo</span><span style={{color:"#9ca3af"}}>= Salvatore Ferragamo, Ferragamo SPA</span></div>
    </div>
    <div style={{fontSize:11,color:"#ef4444",background:"#fef2f2",padding:8,borderRadius:6,marginTop:10}}>⚠ 300 aziende senza settore assegnato — pulizia dati necessaria prima del go-live</div>
    <TBC id="11">Raggruppamenti: a) confermare gruppi principali da configurare — quanti sono? b) ufficio acquisti centralizzato o per entità? c) stato gruppo = aggregato delle figlie?</TBC>
    <TBC id="12">Settori: a) lista ufficiale attuale è completa? b) aggiungere "Associazioni di categoria"? c) "Finance" vs "Finanziario" — quale teniamo? d) altri settori mancanti?</TBC>
    <Phase2>Scraper aziende: compilazione automatica settore, sede HQ, dimensione, sito web da LinkedIn. Risolve il problema delle 300 aziende senza settore.</Phase2>
  </div>
);

const Screen5_Clienti = ({go}) => (
  <div>
    <div style={{fontSize:12,color:"#3b82f6",cursor:"pointer",marginBottom:8}} onClick={()=>go("home")}>← Home</div>
    <h2 style={{fontSize:17,fontWeight:500,marginBottom:4}}>Pipeline clienti <Pill bg="#dcfce7" color="#166534">67 clienti</Pill></h2>
    <p style={{fontSize:11,color:"#6b7280",marginBottom:10}}>MA1.5 · MA1.6 · MA1.9</p>
    <div style={{display:"flex",gap:4,marginBottom:6,fontSize:10,color:"#6b7280"}}>
      <span><span style={{display:"inline-block",width:7,height:7,borderRadius:"50%",background:"#22c55e",marginRight:3,verticalAlign:"middle"}}/> Attività recente</span>
      <span><span style={{display:"inline-block",width:7,height:7,borderRadius:"50%",background:"#eab308",marginRight:3,verticalAlign:"middle"}}/> Fermo</span>
      <span><span style={{display:"inline-block",width:7,height:7,borderRadius:"50%",background:"#ef4444",marginRight:3,verticalAlign:"middle"}}/> Inattivo</span>
    </div>
    <div style={{display:"flex",gap:8,overflowX:"auto",paddingBottom:6}}>
      <KanbanCol label="Attivazione" color="#6b21a8" bg="#f8fafc" count="3">
        <Card name="Nissan" co="R. Conti · Brand Mgr" rep="S.M." sem="#22c55e" semLabel="2gg" type="Gara" note="Primo brief ricevuto"/>
        <Card name="Gucci" co="E. Moretti · Events" rep="L.C." sem="#22c55e" semLabel="14gg" type="Aff. diretto" note="Gara vinta, kick-off"/>
      </KanbanCol>
      <KanbanCol label="Attivo" color="#166534" bg="#f0fdf4" count="42">
        <Card name="Campari" co="L. Neri · Event Mgr" rep="L.C." sem="#22c55e" semLabel="8gg" note="3 gare in corso" onClick={()=>go("dettaglio_cl")}/>
        <Card name="Luxottica" co="M. Trevisan · Mktg Dir" rep="L.C." sem="#22c55e" semLabel="12gg" note="Cannes confermato"/>
        <Card name="Pirelli" co="G. Landi · Procurement" rep="L.C." sem="#22c55e" semLabel="5gg" note="Accordo quadro"/>
        <div style={{textAlign:"center",fontSize:10,color:"#9ca3af",padding:3}}>+39 altri</div>
      </KanbanCol>
      <KanbanCol label="Fermo" color="#854d0e" bg="#fefce8" count="11">
        <Card name="ACEA" co="A. Greco · Resp. Eventi" rep="S.M." sem="#eab308" semLabel="6 mesi" note="Ultimo brief: set '25"/>
        <Card name="Intesa Sanpaolo" co="G. Ferri · Corp Events" rep="I.G." sem="#eab308" semLabel="4 mesi"/>
      </KanbanCol>
      <KanbanCol label="Inattivo" color="#991b1b" bg="#fef2f2" count="8">
        <Card name="Ferrovie dello Stato" co="D. Colombo" rep="L.C." sem="#ef4444" semLabel="14 mesi"/>
        <Card name="Enel" co="E. Basso" rep="S.M." sem="#ef4444" semLabel="11 mesi"/>
      </KanbanCol>
      <KanbanCol label="Da riattivare" color="#1e40af" bg="#eff6ff" count="5">
        <Card name="Vorwerk" co="P. Vitale" rep="—" sem="#ef4444" semLabel="18 mesi" note="Non assegnato"/>
      </KanbanCol>
    </div>
    <TBC id="4">Pipeline clienti: a) soglie fermo (3-6 mesi?) vs inattivo (6-12 mesi?) — conferma b) brief/anno per restare attivo? c) "Da riattivare" torna NB o resta qui? d) stati lavorazione Progress corretti? e) azienda con 1 void + 1 in corso = Attivo? f) chi aggiorna stato commesse?</TBC>
    <TBC id="5">Stato azienda aggregato: a) il più avanzato vince? b) 1 negativo + 1 in corso = azienda in corso? c) tutte commesse chiuse + 6 mesi silenzio = Fermo automatico?</TBC>
    <TBC id="7">Reversibilità: a) storico Cliente visibile se torna NB? b) limite temporale per spostamento automatico in "Da riattivare"?</TBC>
    <Phase2>Automatismi: passaggio stato automatico da trigger (portale fornitori, inoltro email). Alert dormienti: notifica a direzione per clienti premium inattivi.</Phase2>
  </div>
);

const Screen6_DettaglioCl = ({go}) => (
  <div>
    <div style={{fontSize:12,color:"#3b82f6",cursor:"pointer",marginBottom:8}} onClick={()=>go("cl_kanban")}>← Pipeline clienti</div>
    <h2 style={{fontSize:17,fontWeight:500,marginBottom:4}}>Campari — dettaglio cliente</h2>
    <p style={{fontSize:11,color:"#6b7280",marginBottom:12}}>MA1.5 · MA1.3 · MA1.7</p>
    <div style={{background:"#fff",border:"0.5px solid #e5e7eb",borderRadius:12,overflow:"hidden",marginBottom:12}}>
      <div style={{padding:14,borderBottom:"0.5px solid #e5e7eb",display:"flex",alignItems:"center",gap:10}}>
        <div style={{width:40,height:40,borderRadius:"50%",background:"#dcfce7",color:"#166534",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:500}}>CA</div>
        <div style={{flex:1}}>
          <div style={{fontWeight:500,fontSize:15}}>Campari</div>
          <div style={{fontSize:11,color:"#6b7280"}}>Food & beverage · Accordo quadro attivo</div>
          <div style={{display:"flex",gap:5,marginTop:4}}><Pill bg="#dcfce7" color="#166534">Attivo</Pill><Pill bg="#dbeafe" color="#1e40af">L.C.</Pill><SemDot color="#22c55e" label="8gg fa"/></div>
        </div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:8,padding:"12px 14px",background:"#f8fafc",borderBottom:"0.5px solid #e5e7eb",textAlign:"center"}}>
        <div><div style={{fontSize:18,fontWeight:500}}>8</div><div style={{fontSize:10,color:"#6b7280"}}>Commesse totali</div></div>
        <div><div style={{fontSize:18,fontWeight:500}}>3</div><div style={{fontSize:10,color:"#6b7280"}}>Attive</div></div>
        <div><div style={{fontSize:18,fontWeight:500}}>4</div><div style={{fontSize:10,color:"#6b7280"}}>Consegnate</div></div>
        <div><div style={{fontSize:18,fontWeight:500}}>1</div><div style={{fontSize:10,color:"#6b7280"}}>Fatturate</div></div>
      </div>
      <div style={{padding:"10px 14px 4px",fontSize:12,fontWeight:500}}>Referenti interni</div>
      <div style={{padding:"0 14px 10px",display:"flex",gap:6,flexWrap:"wrap"}}>
        {[{n:"L. Neri",r:"Event Manager",a:"Convention & fiere"},{n:"M. Rossi",r:"Quality Manager",a:"Formazione"},{n:"A. Bianchi",r:"Comunicazione interna",a:"Employee meeting"}].map((ref,i)=>(
          <div key={i} style={{background:"#f8fafc",borderRadius:6,padding:"5px 8px",fontSize:10,border:"0.5px solid #e5e7eb"}}>
            <span style={{fontWeight:500}}>{ref.n}</span> · {ref.r} <span style={{color:"#9ca3af"}}>({ref.a})</span>
          </div>
        ))}
      </div>
      <div style={{padding:"6px 14px",fontSize:12,fontWeight:500,display:"flex",justifyContent:"space-between"}}><span>Commesse</span><span style={{fontWeight:400,fontSize:10,color:"#6b7280"}}>8 risultati</span></div>
      <table style={{width:"100%",fontSize:10,borderCollapse:"collapse"}}>
        <thead><tr style={{background:"#f8fafc"}}>{["COM","Cat.","Evento","Tipo","Stato","Mese","Luogo"].map((h,i)=><th key={i} style={{textAlign:"left",padding:"4px 8px",color:"#6b7280",fontWeight:500,fontSize:9,borderBottom:"0.5px solid #e5e7eb"}}>{h}</th>)}</tr></thead>
        <tbody>
          {[
            ["26N00017","Viaggio","ANAGINA VIAGGIO","Aff. diretto","IN CORSO","Mag","EGITTO"],
            ["26N00156","Evento","ASSEMBLEA AZIONISTI","Aff. diretto","In Corso","Apr","BRESCIA"],
            ["26N00164","Meeting","ApproFONDIamo 2026","Gara","CONSEGNATO","Mag","VENEZIA"],
            ["26N00215","Meeting","VIAGGIO FORMATIVO","Gara","IN LAVORAZIONE","Set","ISTANBUL"],
            ["26N00245","Evento","MEETING DIRETTORI","Aff. diretto","IN CORSO","Apr","ROMA"],
            ["26N00147","Viaggio","ASSICURATI LA VITTORIA","Gara","IN CORSO","Mag","BILBAO"],
            ["25N00320","Evento","CENA NATALE CORPORATE","Aff. diretto","Terminato","Dic","MILANO"],
            ["26N00213","Meeting","EVENTO EXPO","Gara","CONSEGNATO","Giu","SICILIA"],
          ].map((r,i)=>(
            <tr key={i} style={{borderBottom:"0.5px solid #f3f4f6"}}>{r.map((c,j)=>(
              <td key={j} style={{padding:"5px 8px"}}>{
                j===0?<span style={{fontFamily:"monospace",fontSize:9,color:"#9ca3af"}}>{c}</span>:
                j===1?<Pill bg="#f3f4f6" color="#6b7280">{c}</Pill>:
                j===3?<Pill bg={c==="Gara"?"#fef3c7":"#e0e7ff"} color={c==="Gara"?"#92400e":"#3730a3"}>{c}</Pill>:
                j===4?<Pill bg={c.includes("CORSO")?"#dbeafe":c==="CONSEGNATO"?"#dcfce7":c==="IN LAVORAZIONE"?"#f3e8ff":c==="Terminato"?"#f3f4f6":"#f3f4f6"} color={c.includes("CORSO")?"#1e40af":c==="CONSEGNATO"?"#166534":c==="IN LAVORAZIONE"?"#6b21a8":"#4b5563"}>{c}</Pill>:
                j===2?<span style={{fontWeight:500}}>{c}</span>:c
              }</td>
            ))}</tr>
          ))}
        </tbody>
      </table>
    </div>
    <TBC id="6">Referenti multipli: a) casistica comune per i clienti Noloop? Quanti hanno più referenti? b) referenti seguiti da commerciali diversi? c) brief dal referente o da ufficio acquisti centralizzato?</TBC>
    <TBC id="3">Nella tabella commesse: la distinzione Gara vs Aff. diretto è corretta? Ci sono altre tipologie di ingaggio?</TBC>
    <Phase2>Archiviazione: caricare contratti/accordi quadro/brief nella scheda. L'AI usa questi documenti come contesto per rispondere a domande operative del commerciale.</Phase2>
  </div>
);

const Screen7_Dashboard = ({go}) => {
  const repData=[{name:"S.M.",Prospect:38,Contatto:48,Followup:29,Incontro:15,Brief:9},{name:"I.G.",Prospect:22,Contatto:20,Followup:18,Incontro:10,Brief:3},{name:"M.C.",Prospect:9,Contatto:6,Followup:3,Incontro:0,Brief:0},{name:"L.C.",Prospect:8,Contatto:5,Followup:3,Incontro:0,Brief:0},{name:"M.P.",Prospect:5,Contatto:4,Followup:6,Incontro:2,Brief:0}];
  const sectorData=[{name:"Fashion",value:142},{name:"Automotive",value:98},{name:"Bancario",value:74},{name:"Food",value:61},{name:"Tech",value:52},{name:"Energy",value:43},{name:"Altri",value:153}];
  const pieC=["#8b5cf6","#3b82f6","#06b6d4","#10b981","#f59e0b","#ef4444","#9ca3af"];
  return (
    <div>
      <div style={{fontSize:12,color:"#3b82f6",cursor:"pointer",marginBottom:8}} onClick={()=>go("home")}>← Home</div>
      <h2 style={{fontSize:17,fontWeight:500,marginBottom:4}}>Dashboard direzione <Pill bg="#fef3c7" color="#92400e">Vista L.G.</Pill></h2>
      <p style={{fontSize:11,color:"#6b7280",marginBottom:10}}>MA2.4 · MA2.5</p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:8,marginBottom:14}}>
        {[{l:"Totale contatti",v:"623",s:"67 clienti · 556 NB"},{l:"Pipeline NB attiva",v:"284",s:"51% del totale NB"},{l:"Brief/gare in corso",v:"12",s:"+3 vs mese scorso"},{l:"Clienti fermi/inattivi",v:"19",s:"11 fermi · 8 inattivi",alert:true},{l:"Conversioni NB→Cl.",v:"4",s:"ultimi 90 giorni"}].map((k,i)=>(
          <div key={i} style={{background:k.alert?"#fef2f2":"#f8fafc",borderRadius:8,padding:10,borderLeft:k.alert?"3px solid #ef4444":"none"}}>
            <div style={{fontSize:10,color:"#6b7280"}}>{k.l}</div>
            <div style={{fontSize:20,fontWeight:500,color:k.alert?"#ef4444":"#1a1a1a"}}>{k.v}</div>
            <div style={{fontSize:9,color:"#9ca3af"}}>{k.s}</div>
          </div>
        ))}
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:12}}>
        <div>
          <div style={{fontSize:12,fontWeight:500,marginBottom:6}}>Pipeline per commerciale</div>
          <div style={{height:180}}><ResponsiveContainer><BarChart data={repData} layout="vertical" margin={{left:5,right:5}}><XAxis type="number" tick={{fontSize:9}}/><YAxis type="category" dataKey="name" tick={{fontSize:10}} width={35}/><Tooltip contentStyle={{fontSize:10}}/><Bar dataKey="Prospect" stackId="a" fill={C.prospect}/><Bar dataKey="Contatto" stackId="a" fill={C.contatto}/><Bar dataKey="Followup" stackId="a" fill={C.followup}/><Bar dataKey="Incontro" stackId="a" fill={C.incontro}/><Bar dataKey="Brief" stackId="a" fill={C.brief}/></BarChart></ResponsiveContainer></div>
        </div>
        <div>
          <div style={{fontSize:12,fontWeight:500,marginBottom:6}}>Distribuzione per settore</div>
          <div style={{display:"flex",alignItems:"center"}}><div style={{width:140,height:140}}><ResponsiveContainer><PieChart><Pie data={sectorData} cx="50%" cy="50%" innerRadius={30} outerRadius={60} dataKey="value" stroke="none">{sectorData.map((_,i)=><Cell key={i} fill={pieC[i]}/>)}</Pie></PieChart></ResponsiveContainer></div>
          <div style={{fontSize:10,marginLeft:8}}>{sectorData.map((s,i)=><div key={i} style={{display:"flex",alignItems:"center",gap:4,lineHeight:1.8}}><span style={{width:6,height:6,borderRadius:2,background:pieC[i],display:"inline-block"}}/><span style={{color:"#6b7280"}}>{s.name}</span><span style={{color:"#9ca3af"}}>({s.value})</span></div>)}</div></div>
        </div>
      </div>
      <div style={{fontSize:12,fontWeight:500,marginBottom:6}}>Segnali di allarme</div>
      <table style={{width:"100%",fontSize:10,borderCollapse:"collapse",marginBottom:12}}>
        <thead><tr>{["","Cliente","Stato","Mesi","Comm."].map((h,i)=><th key={i} style={{textAlign:"left",padding:"4px 8px",color:"#6b7280",fontWeight:500,borderBottom:"0.5px solid #e5e7eb",fontSize:9}}>{h}</th>)}</tr></thead>
        <tbody>
          {[["Ferrovie dello Stato","Inattivo",14,"L.C."],["Vorwerk","Inattivo",18,"—"],["Enel","Inattivo",11,"S.M."],["ACEA","Fermo",6,"S.M."],["Intesa Sanpaolo","Fermo",4,"I.G."]].map((r,i)=>(
            <tr key={i} style={{background:r[1]==="Inattivo"?"#fef2f2":"#fefce8",borderBottom:"0.5px solid #f3f4f6"}}>
              <td style={{padding:"4px 8px"}}><span style={{width:6,height:6,borderRadius:"50%",display:"inline-block",background:r[1]==="Inattivo"?"#ef4444":"#eab308"}}/></td>
              <td style={{padding:"4px 8px",fontWeight:500}}>{r[0]}</td><td style={{padding:"4px 8px"}}>{r[1]}</td><td style={{padding:"4px 8px"}}>{r[2]}</td><td style={{padding:"4px 8px",color:"#3b82f6"}}>{r[3]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <TBC id="8">Dashboard: a) settori prioritari per Noloop? b) classificazione "premium" — quali criteri? c) altri segnali di allarme? d) dati finanziari (Progress) nella stessa dashboard o vista separata?</TBC>
      <TBC id="9">Criteri "premium": fatturato annuo? Numero brief? Storicità rapporto? Settore strategico?</TBC>
      <TBC id="10">Soglie semafori: a) NB: verde &lt;30gg, giallo 30-90gg, rosso &gt;90gg — ok? b) Clienti: verde &lt;3mesi, giallo 3-6, rosso &gt;6 — ok? c) soglie differenziate per stadio pipeline?</TBC>
      <Phase2>Sally NLP: interrogazione in linguaggio naturale ("quanti clienti automotive fermi da più di 6 mesi?"). Report automatico periodico per email alla direzione.</Phase2>
    </div>
  );
};

const Screen8_Filtri = ({go}) => (
  <div>
    <div style={{fontSize:12,color:"#3b82f6",cursor:"pointer",marginBottom:8}} onClick={()=>go("home")}>← Home</div>
    <h2 style={{fontSize:17,fontWeight:500,marginBottom:4}}>Filtri, calendario, export</h2>
    <p style={{fontSize:11,color:"#6b7280",marginBottom:12}}>MA3.1-3.6 · MA2.3 · MA6.1</p>
    <div style={{fontSize:12,fontWeight:500,marginBottom:8}}>Filtri combinabili (MA3.1 — MA3.3)</div>
    <div style={{background:"#fff",border:"0.5px solid #e5e7eb",borderRadius:8,padding:12,marginBottom:12}}>
      <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:10}}>
        <select style={{fontSize:11,padding:"4px 6px"}}><option>NB + Clienti</option><option>Solo NB</option><option>Solo Clienti</option></select>
        <select style={{fontSize:11,padding:"4px 6px"}}><option>Tutti gli stadi</option><option>Prospect</option><option>Primo contatto</option><option>Follow-up</option><option>Brief/Gara</option></select>
        <select style={{fontSize:11,padding:"4px 6px"}}><option>Tutti i commerciali</option><option>S.M.</option><option>I.G.</option><option>L.C.</option><option>M.C.</option></select>
        <select style={{fontSize:11,padding:"4px 6px"}}><option>Tutti i settori</option></select>
      </div>
      <div style={{display:"flex",gap:6,alignItems:"center",marginBottom:6}}>
        <span style={{fontSize:11,color:"#6b7280"}}>Ultima attività da</span>
        <input type="date" style={{fontSize:11,padding:"3px 6px",borderRadius:4}} value="2025-09-01"/>
        <span style={{fontSize:11,color:"#6b7280"}}>a</span>
        <input type="date" style={{fontSize:11,padding:"3px 6px",borderRadius:4}} value="2026-03-18"/>
        <button style={{fontSize:10,padding:"3px 10px",borderRadius:4,background:"#3b82f6",color:"#fff",border:"none",cursor:"pointer"}}>Applica</button>
        <button style={{fontSize:10,padding:"3px 10px",borderRadius:4,background:"#fff",border:"0.5px solid #e5e7eb",cursor:"pointer"}}>Export .xlsx</button>
      </div>
      <div style={{fontSize:10,color:"#9ca3af"}}>Tutti i filtri combinabili tra loro. Export scarica i dati con filtri applicati.</div>
    </div>
    <div style={{fontSize:12,fontWeight:500,marginBottom:8}}>Nuove colonne in tabella (MA3.5 — MA3.6)</div>
    <div style={{overflowX:"auto"}}>
      <table style={{width:"100%",fontSize:10,borderCollapse:"collapse",background:"#fff",border:"0.5px solid #e5e7eb",borderRadius:8}}>
        <thead><tr style={{background:"#f8fafc"}}>{["","Nome","Azienda","Tipo","Pipeline","Stato","Comm.","Ultima att."].map((h,i)=><th key={i} style={{textAlign:"left",padding:"5px 8px",color:"#6b7280",fontWeight:500,fontSize:9,borderBottom:"0.5px solid #e5e7eb"}}>{h}</th>)}</tr></thead>
        <tbody>
          {[
            ["#22c55e","S. Cantini","Pirelli","NB","Incontro/call","positivo","I.G.","3gg fa"],
            ["#ef4444","C. Bianchi","Luxottica","NB","Follow-up","in corso","L.C.","45gg fa"],
            ["#22c55e","L. Neri","Campari","Cliente","Attivo","—","L.C.","8gg fa"],
            ["#eab308","A. Greco","ACEA","Cliente","Fermo","—","S.M.","6 mesi fa"],
            ["#ef4444","D. Colombo","Ferrovie dS","Cliente","Inattivo","—","L.C.","14 mesi fa"],
          ].map((r,i)=>(
            <tr key={i} style={{borderBottom:"0.5px solid #f3f4f6"}}>
              <td style={{padding:"5px 8px"}}><span style={{width:7,height:7,borderRadius:"50%",background:r[0],display:"inline-block"}}/></td>
              <td style={{padding:"5px 8px",fontWeight:500}}>{r[1]}</td>
              <td style={{padding:"5px 8px",color:"#6b7280"}}>{r[2]}</td>
              <td style={{padding:"5px 8px"}}><Pill bg={r[3]==="NB"?"#ede9fe":"#dcfce7"} color={r[3]==="NB"?"#5b21b6":"#166534"}>{r[3]}</Pill></td>
              <td style={{padding:"5px 8px"}}><Pill bg="#f3f4f6" color="#4b5563">{r[4]}</Pill></td>
              <td style={{padding:"5px 8px"}}>{r[5]!=="—"&&<Pill bg={r[5]==="positivo"?"#dcfce7":"#dbeafe"} color={r[5]==="positivo"?"#166534":"#1e40af"}>{r[5]}</Pill>}</td>
              <td style={{padding:"5px 8px",color:"#3b82f6"}}>{r[6]}</td>
              <td style={{padding:"5px 8px",color:"#9ca3af"}}>{r[7]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div style={{fontSize:12,fontWeight:500,margin:"14px 0 8px"}}>Vista calendario (MA2.3)</div>
    <div style={{background:"#fff",border:"0.5px solid #e5e7eb",borderRadius:8,padding:12}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
        <span style={{fontSize:12,fontWeight:500}}>Marzo 2026</span>
        <div style={{display:"flex",gap:4}}><button style={{fontSize:10,padding:"2px 8px",borderRadius:4,border:"0.5px solid #e5e7eb",background:"#fff",cursor:"pointer"}}>←</button><button style={{fontSize:10,padding:"2px 8px",borderRadius:4,border:"0.5px solid #e5e7eb",background:"#fff",cursor:"pointer"}}>→</button></div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:4}}>
        {["Lun","Mar","Mer","Gio","Ven"].map(d=><div key={d} style={{fontSize:9,color:"#9ca3af",textAlign:"center",padding:2}}>{d}</div>)}
        {[17,18,19,20,21].map(d=>(
          <div key={d} style={{background:d===19?"#dbeafe":"#f8fafc",borderRadius:4,padding:4,fontSize:10,minHeight:40}}>
            <div style={{fontWeight:500,color:d===19?"#1e40af":"#1a1a1a"}}>{d}</div>
            {d===19&&<div style={{fontSize:8,color:"#1e40af",marginTop:2}}>Richiamare Ferretti</div>}
            {d===20&&<div style={{fontSize:8,color:"#6b21a8",marginTop:2}}>Pres. Mastercard</div>}
            {d===21&&<div style={{fontSize:8,color:"#ef4444",marginTop:2}}>⚠ Scadenza Brembo</div>}
          </div>
        ))}
      </div>
      <div style={{fontSize:10,color:"#9ca3af",marginTop:6}}>Scadenze e date di ricontatto da attività. Navigabile per mese. Non sincronizzato con Outlook/Google (fase 2).</div>
    </div>
    <Phase2>Sincronizzazione calendario esterno (Outlook/Google): ricevere promemoria direttamente nel calendario personale.</Phase2>
  </div>
);

const SCREENS = {
  home: Screen1_Home,
  nb: Screen2_NB,
  dettaglio_nb: Screen3_Dettaglio,
  aziende: Screen4_Aziende,
  cl_kanban: Screen5_Clienti,
  dettaglio_cl: Screen6_DettaglioCl,
  dashboard: Screen7_Dashboard,
  filtri: Screen8_Filtri,
};

const NAV = [
  {id:"home",label:"Home",icon:"◻"},
  {id:"nb",label:"Pipeline NB",icon:"▸"},
  {id:"dettaglio_nb",label:"↳ Dettaglio contatto",icon:""},
  {id:"aziende",label:"Aziende",icon:"⊞"},
  {id:"cl_kanban",label:"Pipeline Clienti",icon:"★"},
  {id:"dettaglio_cl",label:"↳ Dettaglio cliente",icon:""},
  {id:"dashboard",label:"Dashboard",icon:"◈"},
  {id:"filtri",label:"Filtri · Calendario",icon:"☰"},
];

export default function App() {
  const [screen, setScreen] = useState("home");
  const Screen = SCREENS[screen];
  return (
    <div style={{display:"flex",minHeight:"100vh",background:"#f9fafb",fontFamily:"-apple-system,BlinkMacSystemFont,sans-serif",fontSize:14,color:"#1a1a1a"}}>
      <div style={{width:170,background:"#fff",borderRight:"0.5px solid #e5e7eb",padding:10,display:"flex",flexDirection:"column",gap:1}}>
        <div style={{fontWeight:600,fontSize:13,padding:"6px 8px",marginBottom:8}}>LeadMe <span style={{fontWeight:400,fontSize:10,color:"#3b82f6"}}>Evolution</span></div>
        {NAV.map(n=>(
          <button key={n.id} onClick={()=>setScreen(n.id)} style={{textAlign:"left",fontSize:11,padding:n.icon?"5px 8px":"5px 8px 5px 20px",borderRadius:6,border:"none",cursor:"pointer",background:screen===n.id?"#dbeafe":"transparent",color:screen===n.id?"#1e40af":"#4b5563",fontWeight:screen===n.id?500:400,width:"100%"}}>
            {n.icon&&<span style={{marginRight:4}}>{n.icon}</span>}{n.label}
          </button>
        ))}
        <div style={{marginTop:"auto",paddingTop:10,borderTop:"0.5px solid #e5e7eb",fontSize:10,color:"#9ca3af",padding:"8px 8px"}}>
          <div>Noloop S.r.l.</div>
          <div style={{marginTop:2}}>Prototipo v2.0</div>
          <div style={{marginTop:6,fontSize:9}}>13 TBC · 8 evolutive</div>
        </div>
      </div>
      <div style={{flex:1,padding:16,overflowY:"auto"}}>
        <Screen go={setScreen}/>
      </div>
    </div>
  );
}