import{j as e,L as w,r as m,H as W,a as N}from"./app-Cy2cgjpW.js";import{c as y,a as h,C as O,M as q,d as A,X as F,l as G,m as I,t as L,n as $,R,H as X,o as K,p as E,k as J,P as Z,q as Q,w as ee}from"./MainLayout-COceMcgd.js";import{U as ae}from"./user-hl2o1LT_.js";import{A as u}from"./arrow-right-BQan2p4Q.js";import{A as k,M as te}from"./AdSpace-Ooabpryr.js";import{s as b}from"./index-BsxvijQw.js";import{P as T}from"./PostGrid-Bc5v6-LQ.js";import{T as re}from"./trending-up-IUWT9qgy.js";import{S as D}from"./sparkles-CBdz_RIh.js";import{M as V,T as U,N as se}from"./trophy-YCtYDtno.js";import{M as ie}from"./mic-vocal-B-6atcZ0.js";import{B as ne}from"./briefcase-ObFwoHBo.js";/* empty css            *//**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],le=y("globe",oe);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],de=y("mic",ce);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],pe=y("star",me);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=[["path",{d:"m17 2-5 5-5-5",key:"16satq"}],["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",key:"1e6viu"}]],he=y("tv",xe);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],be=y("zap",ge);function fe({post:a,onReadMore:c}){return a?e.jsxs("div",{className:"hero-section position-relative d-flex align-items-center",style:{backgroundImage:`url("${a.image_path?h(`storage/${a.image_path}`):""}")`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",minHeight:"80vh"},children:[e.jsx("div",{className:"hero-overlay",style:{background:"linear-gradient(90deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 32, 96, 0.5) 50%, rgba(0, 32, 96, 0.3) 100%)"}}),e.jsx("div",{className:"position-absolute top-0 end-0 h-100 w-25 bg-abc-red opacity-25",style:{transform:"skewX(-12deg) translateX(50%)",zIndex:2}}),e.jsx("div",{className:"container position-relative z-3 py-5 mt-5",children:e.jsx("div",{className:"row",children:e.jsxs("div",{className:"col-lg-8 col-xl-7",children:[a.categories&&a.categories.length>0&&e.jsx("span",{className:"badge bg-abc-gold text-dark text-uppercase px-3 py-2 mb-3 fs-6 shadow-sm fw-bold",children:a.categories[0].name}),e.jsx("h1",{className:"display-3 fw-bold mb-3 font-serif",children:e.jsx("a",{href:"#",onClick:s=>{s.preventDefault(),c&&c()},className:"text-white text-decoration-none",style:{cursor:"pointer",transition:"opacity 0.2s"},onMouseEnter:s=>s.currentTarget.style.opacity="0.85",onMouseLeave:s=>s.currentTarget.style.opacity="1",title:"Leer Noticia Completa",children:a.title})}),e.jsxs("div",{className:"d-flex flex-wrap align-items-center gap-3 text-white-50 mb-4 small fw-medium",children:[e.jsxs("div",{className:"d-flex align-items-center gap-1",children:[e.jsx(O,{size:16,className:"text-abc-gold"}),e.jsx("span",{children:new Date(a.published_at).toLocaleDateString("es-ES",{day:"numeric",month:"long",year:"numeric"})})]}),e.jsxs("div",{className:"d-flex align-items-center gap-1",children:[e.jsx(ae,{size:16,className:"text-abc-gold"}),e.jsxs("span",{children:["Por ",a.author?.name||"Redacción"]})]}),e.jsxs("div",{className:"d-flex align-items-center gap-1",children:[e.jsx(q,{size:16,className:"text-abc-gold"}),e.jsxs("span",{children:[a.city||a.country||"Nicaragua","-",a.country]})]})]}),e.jsx("p",{className:"lead text-light mb-5 ps-4 border-start border-4 border-abc-red bg-black bg-opacity-50 py-3 pe-3 rounded-end d-none d-md-block",children:a.excerpt}),e.jsx("div",{className:"d-flex flex-column flex-sm-row gap-3",children:e.jsxs("button",{onClick:c,className:"btn btn-abc-blue text-white fw-bold px-4 py-3 text-uppercase shadow-lg border-0 rounded-2 d-flex align-items-center justify-content-center gap-2",children:["Leer Noticia Completa ",e.jsx(u,{size:18})]})})]})})})]}):e.jsx("div",{className:"hero-section position-relative d-flex align-items-center bg-abc-blue",style:{minHeight:"80vh"},children:e.jsx("div",{className:"container text-center text-white",children:e.jsx("div",{className:"spinner-border",role:"status"})})})}function ue({items:a}){const c=s=>{const i=new Date(s),r=new Date().getTime()-i.getTime(),t=Math.floor(r/(1e3*60*60)),n=Math.floor(t/24);return t<1?"Hace menos de 1h":t<24?`Hace ${t}h`:n===1?"Hace 1 día":n<7?`Hace ${n} días`:i.toLocaleDateString("es-ES",{day:"numeric",month:"short"})};return e.jsxs("div",{className:"bg-white rounded-3 shadow-sm border overflow-hidden",children:[e.jsxs("div",{className:"p-3 border-bottom d-flex align-items-center justify-content-between bg-abc-green text-white",children:[e.jsxs("h3",{className:"h6 fw-bold text-uppercase m-0 d-flex align-items-center gap-2 ls-1 text-white",children:[e.jsx(le,{size:18,className:"text-white"}),"Internacionales"]}),e.jsx("span",{className:"badge bg-abc-gold text-abc-blue rounded-pill px-2 py-1",style:{fontSize:"10px"},children:"Global"})]}),e.jsx("div",{className:"intl-list-wrap",children:a.slice(0,5).map(s=>e.jsxs(w,{href:b("news.show",{slug:s.slug}),className:"intl-news-item text-decoration-none",children:[e.jsx("div",{className:"intl-thumb",children:e.jsx("img",{src:s.image_path?h(`storage/${s.image_path}`):"https://via.placeholder.com/100?text=News",alt:s.title,onError:i=>i.target.src="https://via.placeholder.com/100?text=ABC"})}),e.jsxs("div",{className:"intl-body",children:[e.jsx("h6",{className:"news-title fw-bold text-dark mb-1 lh-sm",children:s.title}),e.jsxs("div",{className:"d-flex align-items-center gap-1 text-muted",children:[e.jsx(A,{size:11}),e.jsx("span",{children:s.published_at?c(s.published_at):"Reciente"})]})]})]},s.id))}),e.jsx("div",{className:"p-3 bg-light text-center border-top",children:e.jsxs(w,{href:b("category.show",{slug:"internacionales"}),className:"text-decoration-none fw-bold text-abc-green d-flex align-items-center justify-content-center gap-1 hover-opacity small",children:["Ver todas las internacionales ",e.jsx(u,{size:14})]})}),e.jsx("style",{children:`
        .ls-1 { letter-spacing: 0.5px; }
        .hover-opacity:hover { opacity: 0.8; }

        /* ── Desktop: listado vertical ── */
        .intl-list-wrap {
          display: flex;
          flex-direction: column;
        }
        .intl-news-item {
          display: flex;
          gap: 12px;
          padding: 12px 14px;
          border-bottom: 1px solid #f0f0f0;
          transition: background .18s ease;
        }
        .intl-news-item:last-child { border-bottom: none; }
        .intl-news-item:hover { background: #f8f9fa; }
        .intl-news-item:hover .news-title { color: var(--abc-green) !important; }
        .intl-thumb {
          flex-shrink: 0;
          width: 70px;
          height: 70px;
          border-radius: 4px;
          overflow: hidden;
        }
        .intl-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .intl-body {
          flex: 1;
          min-width: 0;
        }
        .intl-body .news-title { font-size: 0.88rem; }
        .intl-body .text-muted { font-size: 0.72rem; }

        /* ── Mobile: fila horizontal con scroll ── */
        @media (max-width: 767.98px) {
          .intl-list-wrap {
            flex-direction: row !important;
            overflow-x: auto;
            overflow-y: hidden;
            scroll-snap-type: x mandatory;
            scrollbar-width: none;
            -ms-overflow-style: none;
            gap: 10px;
            padding: 12px;
          }
          .intl-list-wrap::-webkit-scrollbar { display: none; }
          .intl-news-item {
            flex: 0 0 200px;
            flex-direction: column !important;
            gap: 8px;
            padding: 10px;
            border-bottom: none !important;
            border-radius: 6px;
            background: #fff;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            scroll-snap-align: start;
          }
          .intl-thumb {
            width: 100%;
            height: 110px;
            border-radius: 4px;
          }
          .intl-body .news-title { font-size: 0.82rem; -webkit-line-clamp: 3; display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden; }
        }
      `})]})}function je({news:a,onPostClick:c}){const[s,i]=m.useState(!0),[p,r]=m.useState(0),[t,n]=m.useState(!1);if(m.useEffect(()=>{if(t)return;const o=setInterval(()=>{r(x=>(x+1)%a.length)},1e4);return()=>clearInterval(o)},[a.length,t]),!a||a.length===0||!s)return null;const d=a[p];return e.jsxs("div",{className:"news-ticker-container position-fixed d-none d-md-block animate-slide-up",style:{bottom:"90px",right:"20px",zIndex:1070,maxWidth:"350px",width:"100%",position:"fixed"},onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:[e.jsx("button",{type:"button",onClick:o=>{o.stopPropagation(),i(!1)},className:"btn btn-sm btn-light border rounded-circle p-0 d-flex align-items-center justify-content-center hover-red",title:"Cerrar notificación",style:{position:"absolute",top:"-10px",right:"-10px",zIndex:10,width:"24px",height:"24px"},children:e.jsx(F,{size:14})}),e.jsxs("div",{className:"card border-0 shadow-lg overflow-hidden cursor-pointer",onClick:()=>c(d.slug),style:{borderLeft:"4px solid var(--abc-red)"},children:[e.jsxs("div",{className:"card-body p-3 d-flex gap-3 align-items-start bg-white",children:[e.jsx("div",{className:"flex-shrink-0 pt-1",children:e.jsx("div",{className:"bg-abc-red bg-opacity-10 text-abc-red p-2 rounded-circle animate-pulse-slow",children:e.jsx(be,{size:20,fill:"currentColor"})})}),e.jsxs("div",{className:"flex-grow-1 overflow-hidden",children:[e.jsx("span",{className:"badge bg-abc-blue text-uppercase mb-1",style:{fontSize:"0.6rem"},children:d.categories?.[0]?.name||"Noticias"}),e.jsx("h6",{className:"fw-bold text-dark mb-1 line-clamp-2 font-serif",style:{fontSize:"0.9rem",lineHeight:"1.3"},children:d.title}),e.jsxs("div",{className:"d-flex align-items-center gap-1 text-abc-red small fw-bold mt-2",style:{fontSize:"0.75rem"},children:["Leer ahora ",e.jsx(u,{size:12})]})]}),e.jsx("div",{className:"d-none d-sm-block flex-shrink-0",style:{width:"60px",height:"60px"},children:e.jsx("img",{src:d.image_path?h(`storage/${d.image_path}`):"",alt:d.title,className:"w-100 h-100 object-fit-cover rounded"})})]}),!t&&e.jsx("div",{className:"progress-bar-ticker bg-abc-red opacity-50"})]}),e.jsx("style",{children:`
        .cursor-pointer { cursor: pointer; }
        .hover-red:hover { color: var(--abc-red) !important; }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .animate-slide-up {
          animation: slideUp 0.5s ease-out;
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-pulse-slow {
          animation: pulse 2s infinite;
        }
        
        .progress-bar-ticker {
            height: 3px;
            width: 0%;
            animation: progress 6s linear infinite;
        }
        @keyframes progress {
            0% { width: 0%; }
            100% { width: 100%; }
        }
      `})]})}function ve({posts:a,onPostClick:c,isFallback:s=!1}){if(!a||a.length<4)return null;const i=a[0],p=a.slice(1,4),r=t=>{if(!t.categories||t.categories.length===0)return"Noticias";const n=t.categories.find(d=>d.slug==="reportajes-abc");return n?n.name:t.categories[0].name};return e.jsxs("section",{className:"featured-section-enhanced py-5 position-relative overflow-hidden",children:[e.jsxs("div",{className:"bg-decoration",children:[e.jsx("div",{className:"decoration-circle decoration-1"}),e.jsx("div",{className:"decoration-circle decoration-2"}),e.jsx("div",{className:"decoration-circle decoration-3"})]}),e.jsx("div",{className:"position-absolute top-0 end-0 p-5 opacity-3",children:e.jsx(re,{size:350,strokeWidth:.3,color:"rgba(255, 255, 255, 0.1)"})}),e.jsxs("div",{className:"container position-relative z-3",children:[e.jsxs("div",{className:"section-header mb-5",children:[e.jsxs("div",{className:"d-flex align-items-center gap-2 mb-2",children:[e.jsx(D,{size:20,className:"text-abc-gold sparkle-icon"}),e.jsx("span",{className:"text-abc-gold text-uppercase fw-bold small letter-spacing-3",children:"Contenido de Valor"})]}),e.jsx("h2",{className:"display-4 fw-bold text-white font-serif mb-2 header-title",children:s?"Reportajes ABC":"Reportajes Destacados"}),e.jsx("div",{className:"header-underline"})]}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"featured-card-main cursor-pointer",onClick:()=>c(i.slug),children:e.jsxs("div",{className:"featured-image-wrapper",children:[e.jsx("img",{src:i.image_path?h(`storage/${i.image_path}`):"https://placehold.co/1200x500?text=ABC",alt:i.title,className:"featured-image",onError:t=>t.target.src="https://placehold.co/1200x500?text=ABC"}),e.jsx("div",{className:"featured-overlay"}),e.jsx("div",{className:"featured-shine"}),e.jsxs("div",{className:"featured-content",children:[e.jsxs("div",{className:"d-flex align-items-center gap-3 mb-3",children:[!s&&e.jsxs("span",{className:"premium-badge d-none d-md-inline-flex",children:[e.jsx(pe,{size:16,className:"me-2 fill-current"}),"Destacado"]}),(i.categories?.length??0)>0&&e.jsx("span",{className:"category-badge",children:r(i)})]}),e.jsx("h3",{className:"featured-title",children:i.title}),e.jsx("p",{className:"featured-excerpt",children:i.excerpt}),e.jsx("div",{className:"featured-meta",children:e.jsxs("div",{className:"d-flex align-items-center gap-3 flex-wrap",children:[e.jsx("span",{className:"author-name",children:i.author?.name||"Redacción"}),e.jsx("span",{className:"meta-separator",children:"•"}),e.jsxs("div",{className:"d-flex align-items-center gap-2 date-info",children:[e.jsx(A,{size:15}),e.jsx("span",{children:new Date(i.published_at).toLocaleDateString("es-ES",{day:"numeric",month:"long",year:"numeric"})})]})]})})]})]})})}),p.map((t,n)=>e.jsx("div",{className:"col-lg-4 col-md-6 col-12",children:e.jsxs("div",{className:"secondary-card cursor-pointer",onClick:()=>c(t.slug),style:{animationDelay:`${n*.1}s`},children:[e.jsxs("div",{className:"secondary-image-wrapper d-none d-md-block",children:[e.jsx("img",{src:t.image_path?h(`storage/${t.image_path}`):"https://placehold.co/400x250?text=ABC",alt:t.title,className:"secondary-image",onError:d=>d.target.src="https://placehold.co/400x250?text=ABC"}),e.jsx("div",{className:"secondary-overlay"}),e.jsx("span",{className:"secondary-category-badge",children:r(t)})]}),e.jsxs("div",{className:"secondary-card-mobile d-flex d-md-none",children:[e.jsxs("div",{className:"secondary-image-mobile",children:[e.jsx("img",{src:t.image_path?h(`storage/${t.image_path}`):"https://placehold.co/400x250?text=ABC",alt:t.title,className:"secondary-image",onError:d=>d.target.src="https://placehold.co/400x250?text=ABC"}),e.jsx("span",{className:"secondary-category-badge-mobile",children:r(t)})]}),e.jsxs("div",{className:"secondary-body-mobile",children:[e.jsx("h5",{className:"secondary-title-mobile",children:t.title}),e.jsxs("span",{className:"read-more-link",children:[e.jsx("span",{children:"Leer más"}),e.jsx(u,{size:14,className:"arrow-icon"})]})]})]}),e.jsxs("div",{className:"secondary-body d-none d-md-flex",children:[e.jsx("h5",{className:"secondary-title",children:t.title}),e.jsx("div",{className:"secondary-footer",children:e.jsxs("span",{className:"read-more-link",children:[e.jsx("span",{children:"Leer más"}),e.jsx(u,{size:16,className:"arrow-icon"})]})})]})]})},t.id))]})]}),e.jsx("style",{children:`
        /* Section Background */
        .featured-section-enhanced {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
          position: relative;
        }

        /* Animated Background Decorations */
        .bg-decoration {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }

        .decoration-circle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%);
          animation: float 20s ease-in-out infinite;
        }

        .decoration-1 {
          width: 400px;
          height: 400px;
          top: -100px;
          left: -100px;
          animation-delay: 0s;
        }

        .decoration-2 {
          width: 300px;
          height: 300px;
          top: 50%;
          right: -50px;
          animation-delay: 7s;
        }

        .decoration-3 {
          width: 250px;
          height: 250px;
          bottom: -50px;
          left: 30%;
          animation-delay: 14s;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        /* Section Header */
        .section-header {
          animation: fadeInUp 0.6s ease-out;
        }

        .sparkle-icon {
          animation: sparkle 2s ease-in-out infinite;
        }

        @keyframes sparkle {
          0%, 100% { opacity: 1; transform: rotate(0deg) scale(1); }
          50% { opacity: 0.7; transform: rotate(180deg) scale(1.1); }
        }

        .letter-spacing-3 {
          letter-spacing: 3px;
        }

        .header-title {
          background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .header-underline {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #d4af37 0%, transparent 100%);
          border-radius: 2px;
          animation: expandWidth 0.8s ease-out 0.3s backwards;
        }

        @keyframes expandWidth {
          from { width: 0; }
          to { width: 80px; }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Main Featured Card */
        .featured-card-main {
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          animation: fadeInUp 0.8s ease-out 0.2s backwards;
        }

        .featured-card-main:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
        }

        .featured-image-wrapper {
          position: relative;
          min-height: 620px;
          overflow: hidden;
        }

        .featured-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          position: absolute;
          top: 0;
          left: 0;
          transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .featured-card-main:hover .featured-image {
          transform: scale(1.05);
        }

        /* Overlay: zona inferior oscura para leer el texto, zona superior muy ligera para apreciar la imagen */
        .featured-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to top,
            rgba(8, 12, 25, 0.98) 0%,
            rgba(8, 12, 25, 0.88) 28%,
            rgba(8, 12, 25, 0.35) 50%,
            rgba(8, 12, 25, 0.08) 70%,
            transparent 100%
          );
          z-index: 1;
        }

        .featured-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.1) 50%,
            transparent 100%
          );
          z-index: 2;
          transition: left 0.7s ease;
        }

        .featured-card-main:hover .featured-shine {
          left: 100%;
        }

        .featured-content {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 2.75rem 3.5rem;
          z-index: 2;
          /* Limitar el contenido a la mitad izquierda en desktop para dejar ver la imagen */
          max-width: 65%;
        }

        @media (max-width: 992px) {
          .featured-content {
            max-width: 85%;
          }
        }

        @media (max-width: 768px) {
          .featured-content {
            padding: 2rem;
          }
        }

        .premium-badge {
          display: inline-flex;
          align-items: center;
          background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
          color: white;
          padding: 0.6rem 1.2rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 4px 15px rgba(220, 38, 38, 0.4);
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { box-shadow: 0 4px 15px rgba(220, 38, 38, 0.4); }
          50% { box-shadow: 0 4px 25px rgba(220, 38, 38, 0.6); }
        }

        .premium-badge .fill-current {
          fill: currentColor;
        }

        .category-badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .featured-title {
          font-size: clamp(1.5rem, 3.5vw, 3.6rem);
          font-weight: 800;
          color: white;
          line-height: 1.15;
          margin-bottom: 1rem;
          max-width: 100%;
          text-shadow: 0 4px 24px rgba(0, 0, 0, 0.85);
          font-family: 'Georgia', serif;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .featured-excerpt {
          font-size: 1.05rem;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.7;
          margin-bottom: 1.5rem;
          max-width: 100%;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .featured-meta {
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          padding-top: 1.5rem;
        }

        .author-name {
          color: #d4af37;
          font-weight: 700;
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .meta-separator {
          color: rgba(255, 255, 255, 0.4);
          font-size: 1.2rem;
        }

        .date-info {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
          font-weight: 500;
        }

        /* Secondary Cards */
        .secondary-card {
          height: 100%;
          border-radius: 20px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          animation: fadeInUp 0.6s ease-out backwards;
        }

        .secondary-card:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.15);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
        }

        .secondary-image-wrapper {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .secondary-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .secondary-card:hover .secondary-image {
          transform: scale(1.1) rotate(1deg);
        }

        .secondary-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.7) 0%,
            rgba(0, 0, 0, 0.3) 50%,
            transparent 100%
          );
          opacity: 0.8;
          transition: opacity 0.4s ease;
        }

        .secondary-card:hover .secondary-overlay {
          opacity: 0.6;
        }

        .secondary-category-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(255, 255, 255, 0.95);
          color: #0f172a;
          padding: 0.4rem 0.9rem;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          z-index: 2;
        }

        .secondary-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          min-height: 160px;
        }

        .secondary-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: white;
          line-height: 1.5;
          margin: 0;
          flex-grow: 1;
          font-family: 'Georgia', serif;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .secondary-footer {
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .read-more-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #d4af37;
          font-weight: 700;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s ease;
        }

        .read-more-link .arrow-icon {
          transition: transform 0.3s ease;
        }

        .secondary-card:hover .read-more-link {
          gap: 0.8rem;
        }

        .secondary-card:hover .arrow-icon {
          transform: translateX(5px);
        }

        /* Utilities */
        .cursor-pointer {
          cursor: pointer;
        }

        /* Responsive */
        @media (max-width: 992px) {
          .featured-title {
            max-width: 100%;
          }
          .featured-excerpt {
            max-width: 100%;
          }
        }

        @media (max-width: 768px) {
          .featured-image-wrapper {
            min-height: 380px;
          }
          .featured-title {
            font-size: clamp(1.3rem, 5vw, 2rem);
            -webkit-line-clamp: 3;
            margin-bottom: 0.6rem;
          }
          .featured-excerpt {
            font-size: 0.88rem;
            -webkit-line-clamp: 2;
            max-width: 100%;
            margin-bottom: 1rem;
          }
          .featured-content {
            padding: 1.5rem;
          }
          .featured-meta {
            padding-top: 0.8rem;
          }
          .secondary-image-wrapper {
            height: 180px;
          }
        }

        /* Mobile: tarjetas secundarias horizontales */
        .secondary-card-mobile {
          flex-direction: row;
          align-items: stretch;
          min-height: 110px;
        }

        .secondary-image-mobile {
          position: relative;
          width: 130px;
          min-width: 130px;
          flex-shrink: 0;
          overflow: hidden;
          border-radius: 0;
        }

        .secondary-image-mobile .secondary-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .secondary-category-badge-mobile {
          position: absolute;
          bottom: 6px;
          left: 6px;
          background: rgba(255, 255, 255, 0.9);
          color: #0f172a;
          padding: 2px 8px;
          border-radius: 50px;
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          z-index: 2;
        }

        .secondary-body-mobile {
          flex: 1;
          padding: 0.85rem 1rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 0.4rem;
        }

        .secondary-title-mobile {
          font-size: 0.9rem;
          font-weight: 700;
          color: white;
          line-height: 1.4;
          margin: 0;
          font-family: 'Georgia', serif;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `})]})}const P={news:e.jsx(se,{size:13}),sports:e.jsx(U,{size:13}),show:e.jsx(ie,{size:13}),music:e.jsx(V,{size:13})};function we(){const a=G(),c=$[a]??$.Lunes,[s,i]=m.useState(()=>I(c));m.useEffect(()=>{const o=()=>i(I(c));o();const x=setInterval(o,3e4);return()=>clearInterval(x)},[]);const p=s?.title??"La radio que nunca duerme",r=s?.slogan??"Música continua",t=new Date,n=L(t.getHours(),t.getMinutes()),d=c.filter(o=>(o.endH===24?1440:L(o.endH,o.endM))>n).slice(0,5);return e.jsxs("div",{className:"card border-0 shadow-sm h-100 overflow-hidden bg-white",children:[e.jsxs("div",{className:"card-header bg-abc-blue text-white p-3 border-0 d-flex justify-content-between align-items-center",children:[e.jsxs("div",{className:"d-flex align-items-center gap-2",children:[e.jsx(R,{size:20,className:"text-abc-red"}),e.jsx("h3",{className:"h5 mb-0 fw-bold font-serif",children:"Programación"})]}),e.jsx("span",{className:"badge bg-abc-red rs-pulse",children:"EN VIVO"})]}),e.jsxs("div",{className:"p-3 bg-light border-bottom",children:[e.jsxs("p",{className:"text-uppercase text-muted small fw-bold mb-1",children:["Sonando ahora · ",a]}),e.jsxs("div",{className:"d-flex align-items-center gap-3",children:[e.jsx("div",{className:"bg-white p-2 rounded-circle shadow-sm text-abc-blue",children:P[s?.type??"music"]}),e.jsxs("div",{children:[e.jsx("h5",{className:"fw-bold mb-0 text-dark",style:{fontSize:"0.95rem"},children:p}),e.jsx("small",{className:"text-secondary",style:{fontSize:"0.75rem"},children:r})]})]}),e.jsx("div",{className:"progress mt-3",style:{height:"3px"},children:e.jsx("div",{className:"progress-bar bg-abc-red w-100 progress-bar-striped progress-bar-animated",role:"progressbar"})})]}),e.jsx("div",{className:"card-body p-0 overflow-auto",style:{maxHeight:"360px"},children:e.jsx("div",{className:"list-group list-group-flush",children:d.map((o,x)=>{const l=s?.title===o.title&&s?.timeLabel===o.timeLabel;return e.jsx("div",{className:`list-group-item border-0 border-bottom p-3 ${l?"rs-active-row":""}`,children:e.jsxs("div",{className:"d-flex gap-3 align-items-start",children:[e.jsxs("div",{className:"text-center pt-1 flex-shrink-0",style:{minWidth:"52px"},children:[e.jsx(A,{size:11,className:l?"text-abc-red":"text-muted"}),e.jsx("span",{className:"d-block fw-bold",style:{fontSize:"0.68rem",color:l?"var(--abc-red)":"var(--abc-blue)"},children:o.timeLabel.split("–")[0].trim()})]}),e.jsxs("div",{className:"border-start ps-3 flex-grow-1",style:{borderColor:"#e5e7eb"},children:[e.jsxs("div",{className:"d-flex align-items-center gap-1 mb-1",children:[l&&e.jsx("span",{className:"badge bg-abc-red",style:{fontSize:"0.55rem"},children:"AL AIRE"}),e.jsx("span",{className:"opacity-50",children:P[o.type]})]}),e.jsx("h6",{className:"fw-bold mb-0",style:{fontSize:"0.8rem",color:l?"var(--abc-blue)":"#1f2937"},children:o.title}),e.jsx("p",{className:"mb-0 text-muted",style:{fontSize:"0.7rem"},children:o.slogan})]})]})},x)})})}),e.jsx("div",{className:"card-footer bg-white p-3 text-center border-0",children:e.jsx(w,{href:b("corporate.programming"),className:"btn btn-outline-secondary btn-sm rounded-pill px-4 fw-bold w-100",children:"Ver Parrilla Completa"})}),e.jsx("style",{children:`
                .rs-pulse { animation: rs-pulse-anim 2s infinite; }
                @keyframes rs-pulse-anim {
                    0%,100% { opacity: 1; }
                    50%      { opacity: 0.5; }
                }
                .rs-active-row { background-color: #f0f9ff !important; }
                .list-group-item { transition: background-color 0.2s; }
                .list-group-item:hover { background-color: #fafafa; }
            `})]})}const B=[X,K,V,U,E,he,D],H=["#6f42c1","#ffc107","#0dcaf0","#198754","#d63384","#dc3545"];function ye({categories:a=[],onCategoryClick:c,onNavigate:s}){const i=a.map((r,t)=>({id:r.id,title:r.name,subtitle:"Explora más",icon:B[t%B.length],color:r.theme_color||H[t%H.length],colorSecondary:r.theme_color_secondary,image:r.image_path?h(`storage/${r.image_path}`):"https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop",target:r.slug})),p=(r,t)=>{r.preventDefault(),c&&c(t)};return e.jsxs("section",{className:"featured-categories-section py-5 position-relative overflow-hidden w-100",children:[e.jsx("div",{className:"position-absolute top-0 start-0 w-100 h-100 z-0",style:{background:"radial-gradient(ellipse at bottom, #0f172a 0%, #020617 100%)"}}),e.jsx("div",{className:"position-absolute top-0 start-0 w-100 h-100 z-0 opacity-20",style:{backgroundImage:"linear-gradient(rgba(255, 215, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 215, 0, 0.1) 1px, transparent 1px)",backgroundSize:"40px 40px"}}),e.jsx("div",{className:"position-absolute top-0 start-50 translate-middle w-75 h-50 bg-abc-blue rounded-circle blur-4xl opacity-10"}),e.jsxs("div",{className:"container position-relative z-1",children:[e.jsxs("div",{className:"text-center mb-5",children:[e.jsx("span",{className:"text-abc-gold text-uppercase fw-bold small letter-spacing-2 mb-2 d-block",children:"Explora Nuestro Contenido"}),e.jsxs("h2",{className:"display-5 fw-bold text-white font-serif mb-0 d-flex align-items-center justify-content-center gap-3",children:[e.jsx("span",{className:"d-none d-md-block",style:{height:"1px",width:"50px",background:"var(--abc-gold)"}}),"DE INTERES",e.jsx("span",{className:"d-none d-md-block",style:{height:"1px",width:"50px",background:"var(--abc-gold)"}})]})]}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-lg-8",children:e.jsx("div",{className:"row g-2 g-md-4",children:i.length>0?i.map((r,t)=>{const n=t<2,d=r.colorSecondary?`linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 50%, ${r.color} 80%, ${r.colorSecondary} 100%)`:`linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 50%, ${r.color} 100%)`,o=r.colorSecondary?`linear-gradient(to right, ${r.color}, ${r.colorSecondary})`:r.color;return e.jsx("div",{className:n?"col-6 col-md-6":"col-6 col-md-4",children:e.jsx("a",{href:"#",onClick:x=>p(x,r.target),className:"text-decoration-none h-100 d-block",children:e.jsxs("div",{className:"vertical-card position-relative rounded-1 overflow-hidden h-100 border border-secondary border-opacity-25",style:{minHeight:n?"450px":"280px",background:"#000"},children:[e.jsx("div",{className:"bg-image position-absolute top-0 start-0 w-100 h-100",style:{backgroundImage:`url(${r.image})`,backgroundSize:"cover",backgroundPosition:"center",transition:"transform 0.8s ease"}}),e.jsx("div",{className:"overlay position-absolute top-0 start-0 w-100 h-100",style:{background:d,opacity:.85}}),e.jsxs("div",{className:"card-content position-relative h-100 d-flex flex-column justify-content-center align-items-center p-4 z-2 text-white text-center",children:[e.jsx("div",{className:`icon-container ${n?"mb-4":"mb-3"}`}),e.jsxs("div",{className:"text-container",children:[e.jsx("h3",{className:`${n?"h3":"h5"} fw-bold font-serif mb-2 lh-1 text-shadow`,children:r.title}),e.jsx("p",{className:"text-white-75 mb-4 text-uppercase tracking-wider fw-bold letter-spacing-2",style:{fontSize:n?"0.8rem":"0.7rem"},children:r.subtitle}),e.jsx("div",{className:"btn-wrapper opacity-0 translate-y-4",children:e.jsx("span",{className:`btn btn-outline-light rounded-0 ${n?"px-4 py-2":"px-3 py-1"} fw-bold text-uppercase border-2 btn-sm`,children:"Explorar"})})]})]}),e.jsx("div",{className:"position-absolute bottom-0 start-0 w-100",style:{height:"6px",background:o}})]})})},r.id)}):e.jsx("div",{className:"col-12 text-center text-white py-5",children:e.jsx("p",{className:"h5",children:"No hay categorías destacadas disponibles."})})})}),e.jsx("div",{className:"col-lg-4",children:e.jsx(we,{})})]})]}),e.jsx("style",{children:`
        .blur-4xl { filter: blur(100px); }
        .letter-spacing-2 { letter-spacing: 2px; }
        .backdrop-blur { backdrop-filter: blur(4px); background: rgba(255,255,255,0.1); }
        .text-shadow { text-shadow: 0 2px 10px rgba(0,0,0,0.5); }
        
        /* General Card Styles */
        .vertical-card {
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .vertical-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.6);
          border-color: rgba(255,255,255,0.5) !important;
        }

        .vertical-card:hover .bg-image {
          transform: scale(1.1);
          filter: saturate(1.2);
        }

        /* Vertical Specific */
        .vertical-card:hover .icon-container { transform: scale(1.1); }
        .vertical-card .icon-container, .vertical-card .text-container { transition: transform 0.4s ease; }
        .vertical-card .btn-wrapper { transition: all 0.4s ease; transform: translateY(20px); }
        .vertical-card:hover .btn-wrapper { opacity: 1; transform: translateY(0); }

        /* Mobile: 2 por fila con altura reducida */
        @media (max-width: 767.98px) {
          .vertical-card { min-height: 180px !important; }
          .card-content { padding: 1rem !important; }
          .icon-container { margin-bottom: 0.5rem !important; }
          .icon-container > div { padding: 0.5rem !important; }
          .text-container h3 { font-size: 0.85rem !important; margin-bottom: 0 !important; }
          .text-container p { display: none; }
          .btn-wrapper { display: none; }
        }

      `})]})}function Ne({news:a}){return!a||a.length===0?null:e.jsx("section",{className:"py-5 bg-light border-top",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"d-flex align-items-center justify-content-between mb-4",children:[e.jsx("h2",{className:"h3 fw-bold text-abc-blue font-serif border-start border-4 border-abc-red ps-3 mb-0",children:"Nacionales"}),e.jsxs(w,{href:b("category.show",{slug:"nacionales"}),className:"btn btn-link text-decoration-none text-secondary d-flex align-items-center gap-1 small fw-bold",children:["Ver más ",e.jsx(u,{size:16})]})]}),e.jsx(T,{posts:a,columns:4,horizontalScrollMobile:!0})]})})}function ke(){return e.jsxs("section",{className:"py-5 bg-light my-5",children:[e.jsx("div",{className:"container",children:e.jsx("div",{className:"row justify-content-center",children:e.jsx("div",{className:"col-lg-10",children:e.jsx("div",{className:"card border-0 shadow-sm overflow-hidden bg-white",children:e.jsx("div",{className:"card-body p-0",children:e.jsxs("div",{className:"row g-0 align-items-center",children:[e.jsxs("div",{className:"col-md-8 p-4 p-md-5",children:[e.jsxs("div",{className:"d-flex align-items-center gap-3 mb-3",children:[e.jsx("div",{className:"bg-abc-blue text-white p-3 rounded-circle",children:e.jsx(ne,{size:24})}),e.jsx("span",{className:"text-abc-blue fw-bold text-uppercase small ls-1",children:"Oportunidades Laborales"})]}),e.jsx("h2",{className:"display-6 fw-bold text-dark font-serif mb-3",children:"¿Buscas tu próximo empleo?"}),e.jsx("p",{className:"lead text-muted mb-4",children:"Explora nuestra bolsa de trabajo y descubre los empleos disponibles en las mejores empresas de la región."}),e.jsx("div",{className:"d-flex flex-wrap gap-3",children:e.jsxs(w,{href:b("jobs.index"),className:"btn btn-abc-blue px-4 py-2 rounded-pill fw-bold d-flex align-items-center gap-2 hover-scale",children:["Ver Empleos Disponibles",e.jsx(u,{size:18})]})})]}),e.jsx("div",{className:"col-md-4 bg-abc-blue p-4 text-center d-flex align-items-center justify-content-center",style:{minHeight:"200px"},children:e.jsx("div",{className:"text-white opacity-25",children:e.jsx(J,{size:120,strokeWidth:1})})})]})})})})})}),e.jsx("style",{children:`
                .hover-scale {
                    transition: transform 0.2s ease;
                }
                .hover-scale:hover {
                    transform: translateY(-2px);
                }
                .ls-1 {
                    letter-spacing: 1px;
                }
            `})]})}function ze({onNavigate:a}){const[c,s]=m.useState(!1),[i,p]=m.useState(0),r=m.useRef(null),t=m.useRef(0);m.useEffect(()=>{const l=new IntersectionObserver(([g])=>{g.isIntersecting&&s(!0)},{threshold:.15});return r.current&&l.observe(r.current),()=>l.disconnect()},[]),m.useEffect(()=>{const l=()=>{p(g=>g+1),t.current=requestAnimationFrame(l)};return t.current=requestAnimationFrame(l),()=>cancelAnimationFrame(t.current)},[]);const n=()=>{if(a){a();return}window.history.pushState(null,"","#audioreportajes"),window.dispatchEvent(new PopStateEvent("popstate"))},d=40,o=i*.05,x=Array.from({length:d},(l,g)=>{const j=18+Math.abs(Math.sin(o+g*.25))*32+Math.abs(Math.sin(o*.7+g*.5))*16;return Math.min(68,Math.max(8,j))});return e.jsxs("section",{ref:r,className:`arc2-section ${c?"arc2-visible":""}`,children:[e.jsx("div",{className:"arc2-bg"}),e.jsx("div",{className:"arc2-stripe"}),e.jsx("div",{className:"container position-relative",style:{zIndex:2},children:e.jsxs("div",{className:"arc2-inner",children:[e.jsxs("div",{className:"arc2-left",children:[e.jsxs("div",{className:"arc2-eyebrow",children:[e.jsx("span",{className:"arc2-eyebrow-icon",children:e.jsx(R,{size:14})}),e.jsx("span",{children:"PodcastABC: Historias, reportajes y temas de interés"})]}),e.jsxs("h2",{className:"arc2-headline font-serif",children:["Escucha nuestros",e.jsx("br",{}),e.jsx("span",{className:"arc2-headline-accent",children:"Audioreportajes"})]}),e.jsx("div",{className:"arc2-divider"}),e.jsx("p",{className:"arc2-desc",children:'Vive la magia de la radio con nuestros reportajes especiales, historias que inspiran, contenidos de actualidad y nuestro original radiodrama: "Una historia, una canción".'}),e.jsx("ul",{className:"arc2-features",children:[{icon:e.jsx(de,{size:15}),label:"Producción de estudio profesional"},{icon:e.jsx(E,{size:15}),label:"Siempre disponible y al alcance"},{icon:e.jsx(Z,{size:15}),label:"Nuevos episodios cada semana"}].map(l=>e.jsxs("li",{className:"arc2-feature-item",children:[e.jsx("span",{className:"arc2-feature-icon",children:l.icon}),e.jsx("span",{className:"arc2-feature-label",children:l.label})]},l.label))}),e.jsx("button",{id:"cta-audioreportajes-btn",className:"arc2-btn",onClick:n,"aria-label":"Explorar Audioreportajes",children:e.jsxs("span",{className:"arc2-btn-inner",children:[e.jsx(E,{size:18,strokeWidth:2.2}),e.jsx("span",{children:"Explorar Audioreportajes"}),e.jsx(u,{size:18,strokeWidth:2.2,className:"arc2-btn-arrow"})]})})]}),e.jsxs("div",{className:"arc2-right",children:[e.jsxs("div",{className:"arc2-mic-wrap",children:[e.jsx("div",{className:"arc2-mic-halo arc2-halo-3"}),e.jsx("div",{className:"arc2-mic-halo arc2-halo-2"}),e.jsx("div",{className:"arc2-mic-halo arc2-halo-1"}),e.jsx("div",{className:"arc2-mic-core",children:e.jsxs("svg",{width:"44",height:"44",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[e.jsx("rect",{x:"9",y:"2",width:"6",height:"12",rx:"3",fill:"white"}),e.jsx("path",{d:"M5 10a7 7 0 0 0 14 0",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",fill:"none"}),e.jsx("line",{x1:"12",y1:"17",x2:"12",y2:"21",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round"}),e.jsx("line",{x1:"8",y1:"21",x2:"16",y2:"21",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round"})]})})]}),e.jsxs("div",{className:"arc2-live",children:[e.jsx("span",{className:"arc2-live-dot"}),e.jsx("span",{className:"arc2-live-text",children:"NUESTRAS PRODUCCIONES"})]}),e.jsx("div",{className:"arc2-wave","aria-hidden":"true",children:x.map((l,g)=>e.jsx("div",{className:"arc2-wave-bar",style:{height:`${l}%`}},g))}),e.jsx("div",{className:"arc2-stats",children:[{value:"100+",label:"Episodios"},{value:"HD",label:"Audio"},{value:"24/7",label:"Acceso"}].map(l=>e.jsxs("div",{className:"arc2-stat",children:[e.jsx("strong",{className:"arc2-stat-value",children:l.value}),e.jsx("span",{className:"arc2-stat-label",children:l.label})]},l.label))})]})]})}),e.jsx("style",{children:`
        /* ─ Container ─ */
        .arc2-section {
          position: relative;
          overflow: hidden;
          padding: 80px 0;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity .75s ease, transform .75s ease;
        }
        .arc2-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.15) 50%, transparent 100%);
          z-index: 5;
        }
        .arc2-section.arc2-visible {
          opacity: 1;
          transform: none;
        }

        /* ─ Background: same dark navy as FeaturedSection ─ */
        .arc2-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #0f172a 0%, #1a2744 55%, #0f172a 100%);
          z-index: 0;
        }

        /* Diagonal accent stripe using abc-red */
        .arc2-stripe {
          position: absolute;
          top: 0; right: 0;
          width: 340px;
          height: 100%;
          background: linear-gradient(135deg, transparent 40%, rgba(217, 4, 41, 0.07) 100%);
          pointer-events: none;
          z-index: 1;
        }

        /* ─ Inner grid ─ */
        .arc2-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 2;
        }
        @media (max-width: 900px) {
          .arc2-inner {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .arc2-right { order: -1; }
        }

        /* ─ Left panel ─ */
        .arc2-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 4px;
          background: rgba(212, 175, 55, 0.12);
          border: 1px solid rgba(212, 175, 55, 0.3);
          color: #d4af37;
          font-size: .72rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
        }
        .arc2-eyebrow-icon {
          display: flex;
          align-items: center;
        }

        .arc2-headline {
          color: #f1f5f9;
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 1.4rem;
          letter-spacing: -.5px;
        }
        .arc2-headline-accent {
          /* abc-gold underlining */
          background: linear-gradient(90deg, #d4af37 0%, #c49b2e 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .arc2-divider {
          width: 56px;
          height: 4px;
          background: linear-gradient(90deg, #d90429, #d4af37);
          border-radius: 2px;
          margin-bottom: 1.4rem;
        }

        .arc2-desc {
          color: rgba(226, 232, 240, 0.7);
          font-size: 1rem;
          line-height: 1.8;
          max-width: 440px;
          margin-bottom: 1.8rem;
        }

        /* Feature list */
        .arc2-features {
          list-style: none;
          padding: 0;
          margin: 0 0 2.4rem;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .arc2-feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: rgba(226, 232, 240, 0.75);
          font-size: .92rem;
        }
        .arc2-feature-icon {
          width: 30px;
          height: 30px;
          border-radius: 6px;
          background: rgba(217, 4, 41, 0.15);
          border: 1px solid rgba(217, 4, 41, 0.3);
          color: #ef4444;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .arc2-feature-label { font-weight: 500; }

        /* CTA Button */
        .arc2-btn {
          background: #d90429;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          padding: 0;
          overflow: hidden;
          position: relative;
          transition: background .25s ease, transform .25s ease, box-shadow .25s ease;
          box-shadow: 0 6px 24px rgba(217, 4, 41, 0.35);
        }
        .arc2-btn:hover {
          background: #b8021f;
          transform: translateY(-2px);
          box-shadow: 0 12px 36px rgba(217, 4, 41, 0.45);
        }
        .arc2-btn:active { transform: translateY(0); }
        .arc2-btn-inner {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 15px 28px;
          color: #fff;
          font-size: .98rem;
          font-weight: 700;
          letter-spacing: .3px;
        }
        .arc2-btn-arrow {
          transition: transform .25s ease;
        }
        .arc2-btn:hover .arc2-btn-arrow { transform: translateX(5px); }

        /* ─ Right panel ─ */
        .arc2-right {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.8rem;
        }

        /* Mic circle */
        .arc2-mic-wrap {
          position: relative;
          width: 148px;
          height: 148px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .arc2-mic-halo {
          position: absolute;
          border-radius: 50%;
          border: 1.5px solid rgba(212, 175, 55, 0.25);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          animation: arc2-halo 3s ease-in-out infinite;
        }
        .arc2-halo-1 { width: 72px;  height: 72px;  animation-delay: 0s;    border-color: rgba(212, 175, 55, 0.5); }
        .arc2-halo-2 { width: 106px; height: 106px; animation-delay: .5s;   border-color: rgba(212, 175, 55, 0.25); }
        .arc2-halo-3 { width: 148px; height: 148px; animation-delay: 1s;    border-color: rgba(212, 175, 55, 0.12); }
        @keyframes arc2-halo {
          0%,100% { transform: translate(-50%, -50%) scale(1);    opacity: .7; }
          50%      { transform: translate(-50%, -50%) scale(1.06); opacity: 1; }
        }
        .arc2-mic-core {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: linear-gradient(135deg, #002060 0%, #003090 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 32px rgba(0, 48, 144, 0.55), 0 0 60px rgba(212, 175, 55, 0.12);
          position: relative;
          z-index: 2;
        }

        /* Live badge */
        .arc2-live {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 5px 14px;
          border: 1px solid rgba(217, 4, 41, 0.35);
          border-radius: 4px;
          background: rgba(217, 4, 41, 0.1);
        }
        .arc2-live-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #d90429;
          box-shadow: 0 0 8px #d90429;
          animation: arc2-blink 1.3s ease-in-out infinite;
        }
        @keyframes arc2-blink {
          0%,100% { opacity: 1; }
          50%      { opacity: .2; }
        }
        .arc2-live-text {
          color: #ef4444;
          font-size: .68rem;
          font-weight: 700;
          letter-spacing: 2px;
        }

        /* Waveform */
        .arc2-wave {
          display: flex;
          align-items: center;
          gap: 3px;
          height: 72px;
          width: 100%;
          max-width: 340px;
        }
        .arc2-wave-bar {
          flex: 1;
          border-radius: 3px;
          background: linear-gradient(to top, #d90429 0%, #d4af37 100%);
          transition: height .08s ease;
          opacity: .85;
          align-self: center;
        }

        /* Stats */
        .arc2-stats {
          display: flex;
          gap: 2.5rem;
          padding: 18px 28px;
          border-radius: 8px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          width: 100%;
          max-width: 340px;
          justify-content: space-around;
        }
        .arc2-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }
        .arc2-stat-value {
          font-size: 1.4rem;
          font-weight: 800;
          color: #d4af37;
          line-height: 1;
          font-family: Georgia, serif;
        }
        .arc2-stat-label {
          font-size: .68rem;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(226, 232, 240, 0.45);
        }
      `})]})}const Se=({latestNews:a,mostReadNews:c=[],featuredNews:s=[],moreNews:i=[],featuredCategories:p=[],nacionalesNews:r=[],internationalNews:t=[],banners:n=[],isFallbackFeatured:d=!1})=>{const[o,x]=m.useState([]),[l,g]=m.useState(!0);m.useEffect(()=>{(async()=>{try{const v=await Q("Radio ABC Stereo reportajes",6);x(v)}catch(v){console.error("Error loading videos:",v)}finally{g(!1)}})()},[]);const j=f=>{const v=n.filter(Y=>Y.position===f);return v.length===0?null:v[Math.floor(Math.random()*v.length)]},z=j("home_top"),S=j("sidebar_home"),C=j("content_home"),_=j("footer"),M=j("billboard");return e.jsxs(e.Fragment,{children:[e.jsx(W,{title:"PORTADA"}),z&&e.jsx("div",{className:"container mt-4 mb-2",children:e.jsx(k,{variant:"horizontal",imageUrl:h(`storage/${z.file_path}`),link:z.link||"#",label:"Publicidad"})}),e.jsx(fe,{post:a,onReadMore:()=>a&&N.visit(b("news.show",{slug:a.slug}))}),e.jsx("div",{className:"container py-5",children:e.jsxs("div",{className:"row g-4",children:[e.jsxs("div",{className:"col-lg",children:[e.jsx("div",{className:"d-flex align-items-center justify-content-between mb-4 border-bottom pb-3",children:e.jsx("h2",{className:"h2 mb-0 fw-bold text-abc-blue font-serif ps-3 border-start border-4 border-secondary",children:e.jsx("a",{href:"/seccion/noticias-abc",className:"text-decoration-none text-abc-blue",children:" Noticias ABC"})})}),e.jsx(T,{posts:i||[],columns:3}),C&&e.jsx("div",{className:"mt-5",children:e.jsx(k,{variant:"horizontal",imageUrl:h(`storage/${C.file_path}`),link:C.link||"#",label:"Publicidad"})})]}),e.jsx("aside",{className:"col-lg-auto",style:{width:"350px"},children:e.jsxs("div",{className:"d-flex flex-column gap-4 sticky-top",style:{top:"100px",zIndex:10},children:[e.jsx(te,{items:c||[]}),e.jsx(ue,{items:t||[]}),S&&e.jsx(k,{variant:"square",imageUrl:h(`storage/${S.file_path}`),link:S.link||"#",label:"Publicidad"})]})})]})}),e.jsx(ve,{posts:s||[],onPostClick:f=>N.visit(b("news.show",{slug:f})),isFallback:d}),e.jsx(ye,{categories:p,onCategoryClick:f=>N.visit(b("category.show",{slug:f}))}),e.jsx(ze,{onNavigate:()=>{window.history.pushState(null,"","#audioreportajes"),window.dispatchEvent(new PopStateEvent("popstate"))}}),"*/",_&&e.jsx("div",{className:"container my-5",children:e.jsx(k,{variant:"horizontal",imageUrl:h(`storage/${_.file_path}`),link:_.link||"#",label:"Publicidad"})}),M&&e.jsxs("div",{className:"container-fluid px-0 my-4",children:[e.jsx("a",{href:M.link||"#",target:"_blank",rel:"noopener noreferrer",className:"d-block",children:e.jsx("img",{src:h(`storage/${M.file_path}`),alt:"Publicidad",className:"w-100",style:{maxHeight:"250px",objectFit:"cover",display:"block"}})}),e.jsx("p",{className:"text-center text-muted mb-0",style:{fontSize:"0.6rem",letterSpacing:"1px",textTransform:"uppercase"},children:"Publicidad"})]}),e.jsx(Ne,{news:r}),e.jsx(ke,{}),e.jsx(je,{news:[...a?[a]:[],...s,...i].slice(0,5),onPostClick:f=>N.visit(b("news.show",{slug:f}))})]})};Se.layout=ee;export{Se as default};
