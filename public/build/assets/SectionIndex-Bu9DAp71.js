import{j as e,H as n,L as t}from"./app-D5SARNJD.js";import{c,e as d,w as m}from"./MainLayout-BItNDyj8.js";import{P as x}from"./PostGrid-_LMC36Do.js";import{s as l}from"./index-BsxvijQw.js";import{H as b}from"./house-tSSdcYRb.js";/* empty css            */import"./arrow-right-8t8aymCn.js";/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],o=c("layers",h),p=({parentCategory:a,subcategories:r})=>{const i=a.theme_color||"var(--abc-red)";return e.jsxs("div",{className:"animate-fade-in pb-5",children:[e.jsx(n,{title:a.name}),e.jsx("div",{className:"bg-light border-bottom py-3 mb-4 sticky-top",style:{top:"70px",zIndex:900},children:e.jsx("div",{className:"container",children:e.jsx("nav",{"aria-label":"breadcrumb",children:e.jsxs("ol",{className:"breadcrumb mb-0 align-items-center",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(t,{href:l("home"),className:"btn btn-link p-0 text-decoration-none text-secondary d-flex align-items-center gap-1",children:[e.jsx(b,{size:16})," Inicio"]})}),e.jsx("li",{className:"breadcrumb-item active fw-bold text-abc-blue text-uppercase","aria-current":"page",children:a.name})]})})})}),e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"d-flex align-items-center gap-3 mb-3",children:[e.jsx("div",{className:"text-white p-3 rounded-3 shadow",style:{backgroundColor:i},children:e.jsx(o,{size:32})}),e.jsxs("div",{children:[e.jsx("span",{className:"text-uppercase text-muted small fw-bold d-block mb-1",children:"Sección Principal"}),e.jsx("h1",{className:"display-5 fw-bold font-serif text-abc-blue m-0",style:{color:"var(--abc-blue)"},children:a.name})]})]}),e.jsx("div",{className:"border-top border-3 border-abc-gold pt-3",children:e.jsx("p",{className:"text-muted mb-0",children:"Explora las noticias organizadas por categoría"})})]}),r.map(s=>s.recent_news&&s.recent_news.length>0?e.jsxs("section",{className:"mb-5 pb-4 border-bottom",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-4",children:[e.jsxs("h2",{className:"h4 fw-bold text-dark m-0 d-flex align-items-center gap-2",children:[e.jsx("span",{style:{width:"6px",height:"20px",backgroundColor:i,display:"inline-block",borderRadius:"4px"}}),e.jsx(t,{href:l("category.show",{slug:s.slug}),className:"text-decoration-none text-abc-blue hover-opacity",children:s.name})]}),e.jsxs(t,{href:l("category.show",{slug:s.slug}),className:"btn btn-sm d-flex align-items-center text-uppercase fw-bold text-abc-blue",style:{fontSize:"0.75rem",border:"1px solid var(--abc-blue)",borderRadius:"20px"},children:["Ver más ",e.jsx(d,{size:14,className:"ms-1"})]})]}),e.jsx("div",{className:"section-mobile-scroll",children:e.jsx(x,{posts:s.recent_news,columns:4,compact:!0})})]},s.id):null),r.filter(s=>s.recent_news&&s.recent_news.length>0).length===0&&e.jsxs("div",{className:"text-center text-muted py-5 my-5 bg-light rounded-4",children:[e.jsx(o,{size:48,className:"text-muted opacity-50 mb-3"}),e.jsx("h4",{className:"fw-bold",children:"No hay noticias organizadas en esta sección"}),e.jsx("p",{children:"Se mostrarán las noticias tan pronto sean publicadas."})]})]}),e.jsx("style",{children:`
        .hover-opacity:hover { opacity: 0.8; }
        
        @media (max-width: 767.98px) {
          .section-mobile-scroll .row {
            flex-wrap: nowrap !important;
            overflow-x: auto !important;
            overflow-y: hidden !important;
            padding-bottom: 1.5rem !important;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none; /* Firefox */
          }
          .section-mobile-scroll .row::-webkit-scrollbar {
            display: none; /* Chrome/Safari */
          }
          .section-mobile-scroll .row > .col {
            flex: 0 0 85% !important;
            max-width: 85% !important;
          }
        }
      `})]})};p.layout=m;export{p as default};
