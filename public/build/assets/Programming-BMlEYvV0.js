import{r as n,j as e,H as m}from"./app-CSlbsTpN.js";import{D as h,R as f,d as c,C as u,j as i,k as j,w}from"./MainLayout-S4ssVCMe.js";import{M as y,T as N,N as v}from"./trophy-DDQ3qjc5.js";import{M as k}from"./mic-vocal-CbskgeEq.js";/* empty css            */import"./index-BsxvijQw.js";const z=["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"],E={news:e.jsx(v,{size:15}),sports:e.jsx(N,{size:15}),show:e.jsx(k,{size:15}),music:e.jsx(y,{size:15})},L={news:"#1d4ed8",sports:"#15803d",show:"#7c3aed",music:"#dc2626"},A={news:"Noticias",sports:"Deportes",show:"Programa",music:"Música"};function D({title:p}){const a=h[new Date().getDay()],[s,g]=n.useState(a),[o,x]=n.useState(null);n.useEffect(()=>{const r=()=>{const t=i[a]??i.Lunes;x(j(t))};r();const l=setInterval(r,3e4);return()=>clearInterval(l)},[a]);const b=i[s]??i.Lunes,d=s===a;return e.jsxs(e.Fragment,{children:[e.jsx(m,{title:p}),e.jsxs("div",{className:"prog-page",children:[e.jsx("div",{className:"prog-hero",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"row justify-content-center text-center",children:e.jsxs("div",{className:"col-lg-7",children:[e.jsx("div",{className:"d-flex justify-content-center align-items-center gap-3 mb-3",children:e.jsx(f,{size:36,color:"rgba(255,255,255,0.8)"})}),e.jsx("h1",{className:"display-4 fw-bold text-white mb-3",children:"Programación"}),e.jsx("p",{className:"lead prog-hero-sub",children:"Música, noticias, deportes y entretenimiento — toda la semana en Radio ABC Stereo 99.7 FM"})]})})})}),e.jsxs("div",{className:"container py-5",children:[e.jsx("div",{className:"prog-day-bar mb-4",children:e.jsx("div",{className:"d-flex gap-2 flex-wrap justify-content-center p-3",children:z.map(r=>e.jsxs("button",{className:`prog-day-btn ${s===r?"active":""} ${r===a?"today":""}`,onClick:()=>g(r),children:[r,r===a&&e.jsx("span",{className:"prog-today-dot"})]},r))})}),d&&o&&e.jsx("div",{className:"prog-now-banner mb-4",children:e.jsxs("div",{className:"d-flex align-items-center gap-3",children:[e.jsx("span",{className:"badge bg-abc-red prog-live-badge",children:"AL AIRE"}),e.jsxs("div",{children:[e.jsx("div",{className:"fw-bold text-white",children:o.title}),e.jsx("div",{className:"prog-now-slogan",children:o.slogan})]}),e.jsxs("div",{className:"ms-auto prog-now-time",children:[e.jsx(c,{size:14,className:"me-1"}),o.timeLabel]})]})}),e.jsxs("div",{className:"d-flex align-items-center gap-2 mb-3",children:[e.jsx(u,{size:22,className:"text-abc-red"}),e.jsxs("h2",{className:"h4 fw-bold mb-0",children:["Parrilla del ",s]})]}),e.jsx("div",{className:"prog-table-wrap",children:e.jsxs("table",{className:"prog-table w-100",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"180px"},children:"Horario"}),e.jsx("th",{style:{width:"120px"},children:"Tipo"}),e.jsx("th",{children:"Programa"}),e.jsx("th",{className:"prog-slogan-col",children:"Eslogan"})]})}),e.jsx("tbody",{children:b.map((r,l)=>{const t=d&&o?.title===r.title&&o?.timeLabel===r.timeLabel;return e.jsxs("tr",{className:t?"prog-row-active":"",children:[e.jsxs("td",{className:"prog-time-cell",children:[e.jsx(c,{size:13,className:"me-1 opacity-50"}),r.timeLabel,t&&e.jsx("span",{className:"badge bg-abc-red ms-2",style:{fontSize:"0.55rem",verticalAlign:"middle"},children:"AHORA"})]}),e.jsx("td",{children:e.jsxs("span",{className:"prog-type-pill",style:{"--tc":L[r.type]},children:[E[r.type],e.jsx("span",{children:A[r.type]})]})}),e.jsx("td",{className:"prog-name-cell fw-bold",children:r.title}),e.jsx("td",{className:"prog-slogan-col text-muted",style:{fontSize:"0.85rem"},children:r.slogan})]},l)})})]})})]})]}),e.jsx("style",{children:`
                .prog-page { min-height: 100vh; background: #f3f4f6; }

                /* Hero */
                .prog-hero {
                    background: linear-gradient(135deg, #dc2626 0%, #991b1b 50%, #1e3a5f 100%);
                    padding: 110px 0 70px;
                }
                .prog-hero-sub { color: rgba(255,255,255,0.78); }

                /* Note */
                .prog-note {
                    background: #eff6ff;
                    border: 1px solid #bfdbfe;
                    border-radius: 10px;
                    padding: 14px 18px;
                    color: #1e40af;
                }

                /* Day bar */
                .prog-day-bar {
                    background: white;
                    border-radius: 14px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.07);
                }
                .prog-day-btn {
                    position: relative;
                    padding: 10px 22px;
                    border: 2px solid #e5e7eb;
                    background: white;
                    border-radius: 50px;
                    font-weight: 600;
                    font-size: 0.9rem;
                    color: #6b7280;
                    cursor: pointer;
                    transition: all 0.25s;
                }
                .prog-day-btn:hover { border-color: #dc2626; color: #dc2626; }
                .prog-day-btn.active {
                    background: linear-gradient(135deg, #dc2626, #991b1b);
                    border-color: #dc2626;
                    color: white;
                    box-shadow: 0 4px 12px rgba(220,38,38,0.3);
                }
                .prog-today-dot {
                    position: absolute;
                    top: 4px; right: 6px;
                    width: 7px; height: 7px;
                    border-radius: 50%;
                    background: #22c55e;
                    border: 1px solid white;
                }
                .prog-day-btn.active .prog-today-dot { border-color: rgba(255,255,255,0.6); }

                /* Now banner */
                .prog-now-banner {
                    background: linear-gradient(135deg, #1e3a5f, #0f2847);
                    border-radius: 12px;
                    padding: 18px 24px;
                    color: white;
                }
                .prog-live-badge { font-size: 0.7rem; animation: pulse-anim 2s infinite; }
                @keyframes pulse-anim { 0%,100%{opacity:1} 50%{opacity:.5} }
                .prog-now-slogan { font-size: 0.78rem; color: rgba(255,255,255,0.65); }
                .prog-now-time { font-size: 0.78rem; color: rgba(255,255,255,0.6); display:flex; align-items:center; }

                /* Alias note */
                .prog-alias-note {
                    background: #fefce8;
                    border: 1px solid #fde68a;
                    border-radius: 8px;
                    padding: 10px 16px;
                    font-size: 0.85rem;
                    color: #92400e;
                    display: flex;
                    align-items: center;
                }

                /* Table */
                .prog-table-wrap {
                    background: white;
                    border-radius: 14px;
                    box-shadow: 0 4px 14px rgba(0,0,0,0.07);
                    overflow: hidden;
                }
                .prog-table { border-collapse: collapse; }
                .prog-table thead tr {
                    background: linear-gradient(135deg, #1e3a5f, #0f2847);
                    color: white;
                }
                .prog-table thead th {
                    padding: 14px 18px;
                    font-size: 0.8rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
                .prog-table tbody tr {
                    border-bottom: 1px solid #f3f4f6;
                    transition: background 0.15s;
                }
                .prog-table tbody tr:last-child { border-bottom: none; }
                .prog-table tbody tr:hover { background: #f9fafb; }
                .prog-table tbody td { padding: 14px 18px; vertical-align: middle; }

                .prog-row-active { background: #eff6ff !important; }
                .prog-row-active .prog-name-cell { color: #1d4ed8 !important; }

                .prog-time-cell {
                    font-size: 0.82rem;
                    font-weight: 600;
                    color: #374151;
                    white-space: nowrap;
                    font-family: 'Courier New', monospace;
                }

                .prog-type-pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                    font-size: 0.75rem;
                    font-weight: 600;
                    padding: 4px 10px;
                    border-radius: 20px;
                    color: var(--tc);
                    background: color-mix(in srgb, var(--tc) 12%, white);
                    border: 1px solid color-mix(in srgb, var(--tc) 25%, transparent);
                }

                .prog-slogan-col { font-style: italic; }

                @media (max-width: 768px) {
                    .prog-slogan-col { display: none; }
                    .prog-time-cell { font-size: 0.72rem; }
                    .prog-table thead th, .prog-table tbody td { padding: 10px 12px; }
                }
            `})]})}D.layout=w;export{D as default};
