import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const COLORS = {
  prospect: "#8b5cf6",
  contatto: "#3b82f6",
  followup: "#06b6d4",
  incontro: "#10b981",
  brief: "#22c55e",
  freddo: "#9ca3af",
  chiuso_neg: "#ef4444",
  chiuso_pos: "#16a34a",
  attivo: "#22c55e",
  fermo: "#eab308",
  inattivo: "#ef4444",
  riattivare: "#3b82f6",
  attivazione: "#8b5cf6",
};

const NB_STAGES = [
  { id: "prospect", label: "Prospect", color: COLORS.prospect },
  { id: "contatto", label: "Primo contatto", color: COLORS.contatto },
  { id: "followup", label: "Follow-up", color: COLORS.followup },
  { id: "incontro", label: "Incontro / call", color: COLORS.incontro },
  { id: "brief", label: "Brief / gara", color: COLORS.brief },
  { id: "chiuso_pos", label: "Chiuso +", color: COLORS.chiuso_pos },
  { id: "freddo", label: "Freddo", color: COLORS.freddo },
  { id: "chiuso_neg", label: "Chiuso −", color: COLORS.chiuso_neg },
];

const CL_STAGES = [
  { id: "attivazione", label: "Attivazione", color: COLORS.attivazione },
  { id: "attivo", label: "Attivo", color: COLORS.attivo },
  { id: "fermo", label: "Fermo", color: COLORS.fermo },
  { id: "inattivo", label: "Inattivo", color: COLORS.inattivo },
  { id: "riattivare", label: "Da riattivare", color: COLORS.riattivare },
];

const REPS = ["Simona Marani", "Ilia Gardelli", "Matteo Cosma", "Luca Candiani", "Marco Pasquali"];

const nb_contacts = [
  { name: "Marco Bellini", co: "Enel", rep: "Simona Marani", stage: "prospect", status: "nuovo", days: 5, note: "Identificato su SN, da contattare" },
  { name: "Giulia Ferretti", co: "Unicredit", rep: "Ilia Gardelli", stage: "prospect", status: "nuovo", days: 42, note: "Profilo interessante, settore bancario" },
  { name: "Andrea Colombo", co: "Barilla", rep: "Matteo Cosma", stage: "prospect", status: "nuovo", days: 8, note: "Food & beverage, eventi corporate" },
  { name: "Luca Marini", co: "Prada", rep: "Simona Marani", stage: "prospect", status: "nuovo", days: 60, note: "Fashion week contact" },
  { name: "Valentina Ricci", co: "Mastercard", rep: "Simona Marani", stage: "contatto", status: "in corso", days: 8, note: "Email inviata 05/03 — attendo risposta" },
  { name: "Lorenzo Galli", co: "Campari", rep: "Ilia Gardelli", stage: "contatto", status: "in corso", days: 23, note: "LinkedIn msg 18/02, nessuna risposta" },
  { name: "Federica Conti", co: "Lavazza", rep: "Matteo Cosma", stage: "contatto", status: "positivo", days: 3, note: "Telefonata positiva, vuole info" },
  { name: "Chiara Bianchi", co: "Luxottica", rep: "Luca Candiani", stage: "followup", status: "in corso", days: 45, note: "Da richiamare — interessata ma sparita" },
  { name: "Paolo Marchetti", co: "Ferrari", rep: "Simona Marani", stage: "followup", status: "positivo", days: 3, note: "Interessato, risentire lunedì" },
  { name: "Anna Moretti", co: "Generali", rep: "Ilia Gardelli", stage: "followup", status: "in corso", days: 15, note: "Inviata presentazione, attendo feedback" },
  { name: "Stefano Russo", co: "Maserati", rep: "Marco Pasquali", stage: "followup", status: "in corso", days: 30, note: "2° follow-up fatto, da richiamare" },
  { name: "Carla De Luca", co: "Bulgari", rep: "Simona Marani", stage: "followup", status: "positivo", days: 7, note: "Molto interessata a evento lancio" },
  { name: "Silvia Cantini", co: "Pirelli", rep: "Ilia Gardelli", stage: "incontro", status: "positivo", days: 3, note: "Pres. fatta 10/03 — ottimo feedback" },
  { name: "Matteo Bianchi", co: "Intimissimi", rep: "Simona Marani", stage: "incontro", status: "in corso", days: 10, note: "Call 03/03, stanno valutando budget" },
  { name: "Roberto Conti", co: "Nissan", rep: "Simona Marani", stage: "brief", status: "positivo", days: 2, note: "Brief ricevuto 11/03 — gara attiva" },
  { name: "Francesca Villa", co: "Zanichelli", rep: "Ilia Gardelli", stage: "brief", status: "positivo", days: 5, note: "Brief ricevuto 08/03" },
  { name: "Elisa Moretti", co: "Gucci", rep: "Luca Candiani", stage: "chiuso_pos", status: "positivo", days: 14, note: "Gara vinta → diventa Cliente" },
  { name: "Davide Russo", co: "TIM", rep: "Matteo Cosma", stage: "freddo", status: "negativo", days: 120, note: "Non risponde da 4 mesi" },
  { name: "Monica Ferri", co: "Wind Tre", rep: "Simona Marani", stage: "freddo", status: "negativo", days: 95, note: "Aveva detto di risentirci, poi silenzio" },
  { name: "Sara Lombardi", co: "Vodafone", rep: "Ilia Gardelli", stage: "chiuso_neg", status: "negativo", days: 67, note: "Reparto marketing interno, non esternalizzano" },
  { name: "Giuseppe Farina", co: "Rai", rep: "Marco Pasquali", stage: "chiuso_neg", status: "negativo", days: 40, note: "Budget bloccato fino a Q3" },
];

const cl_contacts = [
  { name: "Roberto Conti", co: "Nissan", rep: "Simona Marani", stage: "attivazione", days: 2, note: "Primo brief ricevuto — gara attiva" },
  { name: "Francesca Villa", co: "Zanichelli", rep: "Ilia Gardelli", stage: "attivazione", days: 5, note: "Brief ricevuto 08/03" },
  { name: "Elisa Moretti", co: "Gucci", rep: "Luca Candiani", stage: "attivazione", days: 14, note: "Gara vinta, kick-off in corso" },
  { name: "Laura Neri", co: "Campari", rep: "Luca Candiani", stage: "attivo", days: 8, note: "3 gare in corso — ultimo brief feb 2026" },
  { name: "Marco Trevisan", co: "Luxottica", rep: "Luca Candiani", stage: "attivo", days: 12, note: "Evento Cannes confermato" },
  { name: "Sofia Rizzo", co: "Ferragamo", rep: "Simona Marani", stage: "attivo", days: 20, note: "2 eventi annuali confermati" },
  { name: "Giacomo Landi", co: "Pirelli", rep: "Luca Candiani", stage: "attivo", days: 5, note: "Accordo quadro attivo" },
  { name: "Teresa Gallo", co: "Kiko", rep: "Simona Marani", stage: "attivo", days: 30, note: "Convention annuale in planning" },
  { name: "Alessia Greco", co: "ACEA", rep: "Simona Marani", stage: "fermo", days: 180, note: "Ultimo brief: settembre 2025" },
  { name: "Giovanni Ferri", co: "Intesa Sanpaolo", rep: "Ilia Gardelli", stage: "fermo", days: 120, note: "Ultimo contatto: 4 mesi fa" },
  { name: "Rita Colombo", co: "Banca Mediolanum", rep: "Luca Candiani", stage: "fermo", days: 150, note: "Nessun brief da 5 mesi" },
  { name: "Davide Colombo", co: "Ferrovie dello Stato", rep: "Luca Candiani", stage: "inattivo", days: 420, note: "Nessun brief da 14 mesi" },
  { name: "Elena Basso", co: "Enel", rep: "Simona Marani", stage: "inattivo", days: 330, note: "Nessun contatto da 11 mesi" },
  { name: "Fabio Gentile", co: "Telecom Italia", rep: "Marco Pasquali", stage: "inattivo", days: 365, note: "Silenzio totale da 12 mesi" },
  { name: "Paola Vitale", co: "Vorwerk", rep: "", stage: "riattivare", days: 540, note: "Ex fidelizzato — fermo da 18 mesi" },
  { name: "Bruno Costa", co: "Henkel", rep: "", stage: "riattivare", days: 480, note: "Non assegnato, ultimo brief 16 mesi fa" },
];

const getSemaphore = (days) => {
  if (days <= 30) return { color: "#22c55e", label: "Recente" };
  if (days <= 90) return { color: "#eab308", label: "Attenzione" };
  return { color: "#ef4444", label: "Fermo" };
};

const getClientSem = (days) => {
  if (days <= 90) return { color: "#22c55e", label: "Attivo" };
  if (days <= 180) return { color: "#eab308", label: "Fermo" };
  return { color: "#ef4444", label: "Inattivo" };
};

const StatusPill = ({ status }) => {
  const styles = {
    "positivo": { bg: "#dcfce7", color: "#166534" },
    "in corso": { bg: "#dbeafe", color: "#1e40af" },
    "negativo": { bg: "#fee2e2", color: "#991b1b" },
    "nuovo": { bg: "#f3f4f6", color: "#4b5563" },
  };
  const s = styles[status] || styles["nuovo"];
  return <span className="inline-block text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: s.bg, color: s.color }}>{status}</span>;
};

const SemDot = ({ days, isClient }) => {
  const s = isClient ? getClientSem(days) : getSemaphore(days);
  return <span className="inline-block w-2 h-2 rounded-full" style={{ background: s.color }} title={`${days}gg — ${s.label}`} />;
};

const Card = ({ c, isClient }) => {
  const sem = isClient ? getClientSem(c.days) : getSemaphore(c.days);
  return (
    <div className="bg-white rounded-lg border border-gray-100 p-2.5 mb-1.5 text-xs" style={{ borderLeft: `3px solid ${sem.color}` }}>
      <div className="font-medium text-gray-900 text-xs">{c.name}</div>
      <div className="text-gray-500 text-xs">{c.co}</div>
      <div className="flex items-center justify-between mt-1.5">
        <span className="text-blue-600 text-xs">{c.rep || "Non assegnato"}</span>
        {!isClient && <StatusPill status={c.status} />}
      </div>
      {c.note && <div className="text-gray-400 text-xs mt-1.5 leading-relaxed">{c.note}</div>}
    </div>
  );
};

const KanbanView = ({ stages, contacts, isClient, title }) => {
  const [repFilter, setRepFilter] = useState("all");
  const filtered = repFilter === "all" ? contacts : contacts.filter(c => c.rep === repFilter);
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-medium text-gray-900">{title}</h2>
        <select className="text-xs border rounded px-2 py-1" value={repFilter} onChange={e => setRepFilter(e.target.value)}>
          <option value="all">Tutti i commerciali</option>
          {REPS.map(r => <option key={r} value={r}>{r}</option>)}
        </select>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-2" style={{ minHeight: 400 }}>
        {stages.map(st => {
          const cards = filtered.filter(c => c.stage === st.id);
          return (
            <div key={st.id} className="flex-1 rounded-lg p-2" style={{ minWidth: 150, background: st.id === "chiuso_neg" || st.id === "freddo" ? "#f9fafb" : st.id === "chiuso_pos" ? "#f0fdf4" : st.id === "inattivo" ? "#fef2f2" : st.id === "fermo" ? "#fefce8" : st.id === "attivo" ? "#f0fdf4" : "#f8fafc" }}>
              <div className="flex items-center justify-between mb-2 px-1">
                <span className="text-xs font-medium" style={{ color: st.color }}>{st.label}</span>
                <span className="text-xs bg-white rounded-full px-1.5 py-0.5 text-gray-500">{cards.length}</span>
              </div>
              {cards.map((c, i) => <Card key={i} c={c} isClient={isClient} />)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const DashboardView = () => {
  const kpis = [
    { label: "Totale contatti", value: "623", sub: "67 clienti · 556 NB" },
    { label: "Pipeline NB attiva", value: "284", sub: "51% del totale NB" },
    { label: "Brief / gare in corso", value: "12", sub: "+3 vs mese scorso" },
    { label: "Clienti fermi / inattivi", value: "19", sub: "11 fermi · 8 inattivi", alert: true },
    { label: "Conversioni NB→Cliente", value: "4", sub: "ultimi 90 giorni" },
  ];

  const repData = [
    { name: "Simona M.", Prospect: 38, Contatto: 48, Followup: 29, Incontro: 15, Brief: 9 },
    { name: "Ilia G.", Prospect: 22, Contatto: 20, Followup: 18, Incontro: 10, Brief: 3 },
    { name: "Matteo C.", Prospect: 9, Contatto: 6, Followup: 3, Incontro: 0, Brief: 0 },
    { name: "Luca C.", Prospect: 8, Contatto: 5, Followup: 3, Incontro: 0, Brief: 0 },
    { name: "Marco P.", Prospect: 5, Contatto: 4, Followup: 6, Incontro: 2, Brief: 0 },
  ];

  const sectorData = [
    { name: "Fashion", value: 142 },
    { name: "Automotive", value: 98 },
    { name: "Bancario", value: 74 },
    { name: "Food", value: 61 },
    { name: "Tech", value: 52 },
    { name: "Energy", value: 43 },
    { name: "Altri", value: 153 },
  ];
  const pieColors = ["#8b5cf6", "#3b82f6", "#06b6d4", "#10b981", "#f59e0b", "#ef4444", "#9ca3af"];

  const alerts = [
    { name: "Ferrovie dello Stato", status: "Inattivo", months: 14, rep: "Luca C." },
    { name: "Enel", status: "Inattivo", months: 11, rep: "Simona M." },
    { name: "Vorwerk", status: "Inattivo", months: 18, rep: "—" },
    { name: "Telecom Italia", status: "Inattivo", months: 12, rep: "Marco P." },
    { name: "ACEA", status: "Fermo", months: 6, rep: "Simona M." },
    { name: "Intesa Sanpaolo", status: "Fermo", months: 4, rep: "Ilia G." },
    { name: "Banca Mediolanum", status: "Fermo", months: 5, rep: "Luca C." },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-gray-900">Dashboard direzione</h2>
        <span className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded">Vista Garbarino</span>
      </div>
      <div className="grid grid-cols-5 gap-2 mb-5">
        {kpis.map((k, i) => (
          <div key={i} className={`rounded-lg p-3 ${k.alert ? "bg-red-50 border-l-3 border-red-400" : "bg-gray-50"}`} style={k.alert ? { borderLeft: "3px solid #ef4444" } : {}}>
            <div className="text-xs text-gray-500 mb-1">{k.label}</div>
            <div className={`text-xl font-medium ${k.alert ? "text-red-600" : "text-gray-900"}`}>{k.value}</div>
            <div className="text-xs text-gray-400 mt-0.5">{k.sub}</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">Pipeline per commerciale</h3>
          <div style={{ height: 220 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={repData} layout="vertical" margin={{ left: 10, right: 10 }}>
                <XAxis type="number" tick={{ fontSize: 10 }} />
                <YAxis type="category" dataKey="name" tick={{ fontSize: 11 }} width={70} />
                <Tooltip contentStyle={{ fontSize: 11 }} />
                <Bar dataKey="Prospect" stackId="a" fill={COLORS.prospect} />
                <Bar dataKey="Contatto" stackId="a" fill={COLORS.contatto} />
                <Bar dataKey="Followup" stackId="a" fill={COLORS.followup} />
                <Bar dataKey="Incontro" stackId="a" fill={COLORS.incontro} />
                <Bar dataKey="Brief" stackId="a" fill={COLORS.brief} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">Distribuzione per settore</h3>
          <div className="flex items-center">
            <div style={{ width: 160, height: 160 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={sectorData} cx="50%" cy="50%" innerRadius={35} outerRadius={70} dataKey="value" stroke="none">
                    {sectorData.map((_, i) => <Cell key={i} fill={pieColors[i]} />)}
                  </Pie>
                  <Tooltip contentStyle={{ fontSize: 11 }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="text-xs ml-2 space-y-1">
              {sectorData.map((s, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-sm inline-block" style={{ background: pieColors[i] }}></span>
                  <span className="text-gray-600">{s.name}</span>
                  <span className="text-gray-400">({s.value})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Segnali di allarme — clienti fermi e inattivi</h3>
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left py-1.5 px-2 text-gray-500 font-medium"></th>
              <th className="text-left py-1.5 px-2 text-gray-500 font-medium">Cliente</th>
              <th className="text-left py-1.5 px-2 text-gray-500 font-medium">Stato</th>
              <th className="text-left py-1.5 px-2 text-gray-500 font-medium">Mesi</th>
              <th className="text-left py-1.5 px-2 text-gray-500 font-medium">Commerciale</th>
            </tr>
          </thead>
          <tbody>
            {alerts.map((a, i) => (
              <tr key={i} className={`border-b border-gray-50 ${a.status === "Inattivo" ? "bg-red-50" : "bg-amber-50"}`}>
                <td className="py-1.5 px-2"><span className="w-2 h-2 rounded-full inline-block" style={{ background: a.status === "Inattivo" ? "#ef4444" : "#eab308" }} /></td>
                <td className="py-1.5 px-2 font-medium text-gray-900">{a.name}</td>
                <td className="py-1.5 px-2 text-gray-600">{a.status}</td>
                <td className="py-1.5 px-2 text-gray-600">{a.months}</td>
                <td className="py-1.5 px-2 text-gray-500">{a.rep}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const ContactListView = () => {
  const [filter, setFilter] = useState("all");
  const [repF, setRepF] = useState("all");
  const all = [...nb_contacts.map(c => ({ ...c, tipo: "NB" })), ...cl_contacts.map(c => ({ ...c, tipo: "Cliente", status: c.stage === "attivo" ? "attivo" : c.stage }))];
  const filtered = all.filter(c => {
    if (filter !== "all" && c.tipo !== filter) return false;
    if (repF !== "all" && c.rep !== repF) return false;
    return true;
  });
  const stageLabel = (c) => {
    const all_stages = [...NB_STAGES, ...CL_STAGES];
    const st = all_stages.find(s => s.id === c.stage);
    return st ? st.label : c.stage;
  };
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-medium text-gray-900">Contatti</h2>
        <div className="flex gap-2">
          <select className="text-xs border rounded px-2 py-1" value={filter} onChange={e => setFilter(e.target.value)}>
            <option value="all">Tutti</option>
            <option value="NB">New Business</option>
            <option value="Cliente">Clienti</option>
          </select>
          <select className="text-xs border rounded px-2 py-1" value={repF} onChange={e => setRepF(e.target.value)}>
            <option value="all">Tutti i commerciali</option>
            {REPS.map(r => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
      </div>
      <table className="w-full text-xs">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-2 px-2 text-gray-500 font-medium w-4"></th>
            <th className="text-left py-2 px-2 text-gray-500 font-medium">Nome</th>
            <th className="text-left py-2 px-2 text-gray-500 font-medium">Azienda</th>
            <th className="text-left py-2 px-2 text-gray-500 font-medium">Tipo</th>
            <th className="text-left py-2 px-2 text-gray-500 font-medium">Pipeline</th>
            <th className="text-left py-2 px-2 text-gray-500 font-medium">Status</th>
            <th className="text-left py-2 px-2 text-gray-500 font-medium">Commerciale</th>
            <th className="text-left py-2 px-2 text-gray-500 font-medium">Ultimo contatto</th>
          </tr>
        </thead>
        <tbody>
          {filtered.slice(0, 25).map((c, i) => (
            <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 cursor-pointer">
              <td className="py-1.5 px-2"><SemDot days={c.days} isClient={c.tipo === "Cliente"} /></td>
              <td className="py-1.5 px-2 font-medium text-gray-900">{c.name}</td>
              <td className="py-1.5 px-2 text-gray-600">{c.co}</td>
              <td className="py-1.5 px-2"><span className={`text-xs px-1.5 py-0.5 rounded-full ${c.tipo === "NB" ? "bg-purple-50 text-purple-700" : "bg-green-50 text-green-700"}`}>{c.tipo}</span></td>
              <td className="py-1.5 px-2 text-gray-600">{stageLabel(c)}</td>
              <td className="py-1.5 px-2">{c.status && <StatusPill status={c.status} />}</td>
              <td className="py-1.5 px-2 text-blue-600">{c.rep || "—"}</td>
              <td className="py-1.5 px-2 text-gray-400">{c.days}gg fa</td>
            </tr>
          ))}
        </tbody>
      </table>
      {filtered.length > 25 && <div className="text-center text-xs text-gray-400 py-2">+{filtered.length - 25} altri contatti</div>}
    </div>
  );
};

const TABS = [
  { id: "dash", label: "Dashboard", icon: "◻" },
  { id: "nb", label: "Pipeline NB", icon: "▸" },
  { id: "cl", label: "Pipeline Clienti", icon: "★" },
  { id: "list", label: "Contatti", icon: "☰" },
];

export default function App() {
  const [tab, setTab] = useState("dash");
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900" style={{ fontSize: 14 }}>
      <div className="w-44 bg-white border-r border-gray-100 p-3 flex flex-col gap-1">
        <div className="font-semibold text-sm text-gray-900 mb-3 px-2">LeadMe <span className="text-xs font-normal text-blue-600">Evolution</span></div>
        {TABS.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} className={`text-left text-xs px-2.5 py-1.5 rounded-md w-full transition-colors ${tab === t.id ? "bg-blue-50 text-blue-700 font-medium" : "text-gray-600 hover:bg-gray-50"}`}>
            <span className="mr-1.5">{t.icon}</span>{t.label}
          </button>
        ))}
        <div className="mt-auto pt-4 border-t border-gray-100 text-xs text-gray-400 px-2">
          <div>Noloop S.r.l.</div>
          <div className="mt-1">Prototipo v1.0</div>
        </div>
      </div>
      <div className="flex-1 p-4 overflow-auto">
        {tab === "dash" && <DashboardView />}
        {tab === "nb" && <KanbanView stages={NB_STAGES} contacts={nb_contacts} isClient={false} title="Pipeline new business" />}
        {tab === "cl" && <KanbanView stages={CL_STAGES} contacts={cl_contacts} isClient={true} title="Pipeline clienti" />}
        {tab === "list" && <ContactListView />}
      </div>
    </div>
  );
}