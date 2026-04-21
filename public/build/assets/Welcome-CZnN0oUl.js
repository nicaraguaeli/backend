import{j as e,r as p,L as $,H as U,a as y}from"./app-C5mwasJ4.js";import{c as w,a as m,C as A,M as Y,X as O,d as B,l as q,m as I,t as _,n as M,R as W,H as G,o as X,p as K,k as J,P as Z,e as Q,q as ee,w as ae}from"./MainLayout-aCAnaCDi.js";import{U as te}from"./user-DVX4oMz7.js";import{A as v}from"./arrow-right-GED4-sUf.js";import{A as j,M as re}from"./AdSpace-G5lNexx8.js";import{P as se}from"./PostGrid-CJcau1FO.js";import{T as ie}from"./trending-up-MasAnrPm.js";import{S as H}from"./sparkles-BmI1p1fr.js";import{s as f}from"./index-BsxvijQw.js";import{M as V,T,N as oe}from"./trophy-aIcN5SKj.js";import{M as ne}from"./mic-vocal-gadDEsTE.js";import{B as le}from"./briefcase-CPCQ7Ti2.js";/* empty css            *//**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=[["path",{d:"M21 5H3",key:"1fi0y6"}],["path",{d:"M10 12H3",key:"1ulcyk"}],["path",{d:"M10 19H3",key:"108z41"}],["path",{d:"M15 12.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z",key:"ms4nik"}]],de=w("list-video",ce);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],pe=w("star",me);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=[["path",{d:"m17 2-5 5-5-5",key:"16satq"}],["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",key:"1e6viu"}]],R=w("tv",ge);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],he=w("zap",xe);function be({post:a,onReadMore:i}){return a?e.jsxs("div",{className:"hero-section position-relative d-flex align-items-center",style:{backgroundImage:`url("${a.image_path?m(`storage/${a.image_path}`):""}")`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",minHeight:"80vh"},children:[e.jsx("div",{className:"hero-overlay",style:{background:"linear-gradient(90deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 32, 96, 0.5) 50%, rgba(0, 32, 96, 0.3) 100%)"}}),e.jsx("div",{className:"position-absolute top-0 end-0 h-100 w-25 bg-abc-red opacity-25",style:{transform:"skewX(-12deg) translateX(50%)",zIndex:2}}),e.jsx("div",{className:"container position-relative z-3 py-5 mt-5",children:e.jsx("div",{className:"row",children:e.jsxs("div",{className:"col-lg-8 col-xl-7",children:[a.categories&&a.categories.length>0&&e.jsx("span",{className:"badge bg-abc-gold text-dark text-uppercase px-3 py-2 mb-3 fs-6 shadow-sm fw-bold",children:a.categories[0].name}),e.jsx("h1",{className:"display-3 fw-bold mb-3 font-serif",children:e.jsx("a",{href:"#",onClick:l=>{l.preventDefault(),i&&i()},className:"text-white text-decoration-none",style:{cursor:"pointer",transition:"opacity 0.2s"},onMouseEnter:l=>l.currentTarget.style.opacity="0.85",onMouseLeave:l=>l.currentTarget.style.opacity="1",title:"Leer Noticia Completa",children:a.title})}),e.jsxs("div",{className:"d-flex flex-wrap align-items-center gap-3 text-white-50 mb-4 small fw-medium",children:[e.jsxs("div",{className:"d-flex align-items-center gap-1",children:[e.jsx(A,{size:16,className:"text-abc-gold"}),e.jsx("span",{children:new Date(a.published_at).toLocaleDateString("es-ES",{day:"numeric",month:"long",year:"numeric"})})]}),e.jsxs("div",{className:"d-flex align-items-center gap-1",children:[e.jsx(te,{size:16,className:"text-abc-gold"}),e.jsxs("span",{children:["Por ",a.author?.name||"Redacción"]})]}),e.jsxs("div",{className:"d-flex align-items-center gap-1",children:[e.jsx(Y,{size:16,className:"text-abc-gold"}),e.jsxs("span",{children:[a.city||a.country||"Nicaragua","-",a.country]})]})]}),e.jsx("p",{className:"lead text-light mb-5 ps-4 border-start border-4 border-abc-red bg-black bg-opacity-50 py-3 pe-3 rounded-end d-none d-md-block",children:a.excerpt}),e.jsx("div",{className:"d-flex flex-column flex-sm-row gap-3",children:e.jsxs("button",{onClick:i,className:"btn btn-abc-blue text-white fw-bold px-4 py-3 text-uppercase shadow-lg border-0 rounded-2 d-flex align-items-center justify-content-center gap-2",children:["Leer Noticia Completa ",e.jsx(v,{size:18})]})})]})})})]}):e.jsx("div",{className:"hero-section position-relative d-flex align-items-center bg-abc-blue",style:{minHeight:"80vh"},children:e.jsx("div",{className:"container text-center text-white",children:e.jsx("div",{className:"spinner-border",role:"status"})})})}function fe({news:a,onPostClick:i}){const[l,c]=p.useState(!0),[d,r]=p.useState(0),[t,s]=p.useState(!1);if(p.useEffect(()=>{if(t)return;const n=setInterval(()=>{r(g=>(g+1)%a.length)},1e4);return()=>clearInterval(n)},[a.length,t]),!a||a.length===0||!l)return null;const o=a[d];return e.jsxs("div",{className:"news-ticker-container position-fixed d-none d-md-block animate-slide-up",style:{bottom:"90px",right:"20px",zIndex:1070,maxWidth:"350px",width:"100%",position:"fixed"},onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),children:[e.jsx("button",{type:"button",onClick:n=>{n.stopPropagation(),c(!1)},className:"btn btn-sm btn-light border rounded-circle p-0 d-flex align-items-center justify-content-center hover-red",title:"Cerrar notificación",style:{position:"absolute",top:"-10px",right:"-10px",zIndex:10,width:"24px",height:"24px"},children:e.jsx(O,{size:14})}),e.jsxs("div",{className:"card border-0 shadow-lg overflow-hidden cursor-pointer",onClick:()=>i(o.slug),style:{borderLeft:"4px solid var(--abc-red)"},children:[e.jsxs("div",{className:"card-body p-3 d-flex gap-3 align-items-start bg-white",children:[e.jsx("div",{className:"flex-shrink-0 pt-1",children:e.jsx("div",{className:"bg-abc-red bg-opacity-10 text-abc-red p-2 rounded-circle animate-pulse-slow",children:e.jsx(he,{size:20,fill:"currentColor"})})}),e.jsxs("div",{className:"flex-grow-1 overflow-hidden",children:[e.jsx("span",{className:"badge bg-abc-blue text-uppercase mb-1",style:{fontSize:"0.6rem"},children:o.categories?.[0]?.name||"Noticias"}),e.jsx("h6",{className:"fw-bold text-dark mb-1 line-clamp-2 font-serif",style:{fontSize:"0.9rem",lineHeight:"1.3"},children:o.title}),e.jsxs("div",{className:"d-flex align-items-center gap-1 text-abc-red small fw-bold mt-2",style:{fontSize:"0.75rem"},children:["Leer ahora ",e.jsx(v,{size:12})]})]}),e.jsx("div",{className:"d-none d-sm-block flex-shrink-0",style:{width:"60px",height:"60px"},children:e.jsx("img",{src:o.image_path?m(`storage/${o.image_path}`):"",alt:o.title,className:"w-100 h-100 object-fit-cover rounded"})})]}),!t&&e.jsx("div",{className:"progress-bar-ticker bg-abc-red opacity-50"})]}),e.jsx("style",{children:`
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
      `})]})}function ue({posts:a,onPostClick:i,isFallback:l=!1}){if(!a||a.length<4)return null;const c=a[0],d=a.slice(1,4),r=t=>{if(!t.categories||t.categories.length===0)return"Noticias";const s=t.categories.find(o=>o.slug==="reportajes-abc");return s?s.name:t.categories[0].name};return e.jsxs("section",{className:"featured-section-enhanced py-5 position-relative overflow-hidden",children:[e.jsxs("div",{className:"bg-decoration",children:[e.jsx("div",{className:"decoration-circle decoration-1"}),e.jsx("div",{className:"decoration-circle decoration-2"}),e.jsx("div",{className:"decoration-circle decoration-3"})]}),e.jsx("div",{className:"position-absolute top-0 end-0 p-5 opacity-3",children:e.jsx(ie,{size:350,strokeWidth:.3,color:"rgba(255, 255, 255, 0.1)"})}),e.jsxs("div",{className:"container position-relative z-3",children:[e.jsxs("div",{className:"section-header mb-5",children:[e.jsxs("div",{className:"d-flex align-items-center gap-2 mb-2",children:[e.jsx(H,{size:20,className:"text-abc-gold sparkle-icon"}),e.jsx("span",{className:"text-abc-gold text-uppercase fw-bold small letter-spacing-3",children:"Contenido de Valor"})]}),e.jsx("h2",{className:"display-4 fw-bold text-white font-serif mb-2 header-title",children:l?"Reportajes ABC":"Reportajes Destacados"}),e.jsx("div",{className:"header-underline"})]}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"featured-card-main cursor-pointer",onClick:()=>i(c.slug),children:e.jsxs("div",{className:"featured-image-wrapper",children:[e.jsx("img",{src:c.image_path?m(`storage/${c.image_path}`):"https://placehold.co/1200x500?text=ABC",alt:c.title,className:"featured-image",onError:t=>t.target.src="https://placehold.co/1200x500?text=ABC"}),e.jsx("div",{className:"featured-overlay"}),e.jsx("div",{className:"featured-shine"}),e.jsxs("div",{className:"featured-content",children:[e.jsxs("div",{className:"d-flex align-items-center gap-3 mb-3",children:[!l&&e.jsxs("span",{className:"premium-badge d-none d-md-inline-flex",children:[e.jsx(pe,{size:16,className:"me-2 fill-current"}),"Destacado"]}),(c.categories?.length??0)>0&&e.jsx("span",{className:"category-badge",children:r(c)})]}),e.jsx("h3",{className:"featured-title",children:c.title}),e.jsx("p",{className:"featured-excerpt",children:c.excerpt}),e.jsx("div",{className:"featured-meta",children:e.jsxs("div",{className:"d-flex align-items-center gap-3 flex-wrap",children:[e.jsx("span",{className:"author-name",children:c.author?.name||"Redacción"}),e.jsx("span",{className:"meta-separator",children:"•"}),e.jsxs("div",{className:"d-flex align-items-center gap-2 date-info",children:[e.jsx(B,{size:15}),e.jsx("span",{children:new Date(c.published_at).toLocaleDateString("es-ES",{day:"numeric",month:"long",year:"numeric"})})]})]})})]})]})})}),d.map((t,s)=>e.jsx("div",{className:"col-lg-4 col-md-6 col-12",children:e.jsxs("div",{className:"secondary-card cursor-pointer",onClick:()=>i(t.slug),style:{animationDelay:`${s*.1}s`},children:[e.jsxs("div",{className:"secondary-image-wrapper d-none d-md-block",children:[e.jsx("img",{src:t.image_path?m(`storage/${t.image_path}`):"https://placehold.co/400x250?text=ABC",alt:t.title,className:"secondary-image",onError:o=>o.target.src="https://placehold.co/400x250?text=ABC"}),e.jsx("div",{className:"secondary-overlay"}),e.jsx("span",{className:"secondary-category-badge",children:r(t)})]}),e.jsxs("div",{className:"secondary-card-mobile d-flex d-md-none",children:[e.jsxs("div",{className:"secondary-image-mobile",children:[e.jsx("img",{src:t.image_path?m(`storage/${t.image_path}`):"https://placehold.co/400x250?text=ABC",alt:t.title,className:"secondary-image",onError:o=>o.target.src="https://placehold.co/400x250?text=ABC"}),e.jsx("span",{className:"secondary-category-badge-mobile",children:r(t)})]}),e.jsxs("div",{className:"secondary-body-mobile",children:[e.jsx("h5",{className:"secondary-title-mobile",children:t.title}),e.jsxs("span",{className:"read-more-link",children:[e.jsx("span",{children:"Leer más"}),e.jsx(v,{size:14,className:"arrow-icon"})]})]})]}),e.jsxs("div",{className:"secondary-body d-none d-md-flex",children:[e.jsx("h5",{className:"secondary-title",children:t.title}),e.jsx("div",{className:"secondary-footer",children:e.jsxs("span",{className:"read-more-link",children:[e.jsx("span",{children:"Leer más"}),e.jsx(v,{size:16,className:"arrow-icon"})]})})]})]})},t.id))]})]}),e.jsx("style",{children:`
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
      `})]})}const L={news:e.jsx(oe,{size:13}),sports:e.jsx(T,{size:13}),show:e.jsx(ne,{size:13}),music:e.jsx(V,{size:13})};function ve(){const a=q(),i=M[a]??M.Lunes,[l,c]=p.useState(()=>I(i));p.useEffect(()=>{const n=()=>c(I(i));n();const g=setInterval(n,3e4);return()=>clearInterval(g)},[]);const d=l?.title??"La radio que nunca duerme",r=l?.slogan??"Música continua",t=new Date,s=_(t.getHours(),t.getMinutes()),o=i.filter(n=>(n.endH===24?1440:_(n.endH,n.endM))>s).slice(0,5);return e.jsxs("div",{className:"card border-0 shadow-sm h-100 overflow-hidden bg-white",children:[e.jsxs("div",{className:"card-header bg-abc-blue text-white p-3 border-0 d-flex justify-content-between align-items-center",children:[e.jsxs("div",{className:"d-flex align-items-center gap-2",children:[e.jsx(W,{size:20,className:"text-abc-red"}),e.jsx("h3",{className:"h5 mb-0 fw-bold font-serif",children:"Programación"})]}),e.jsx("span",{className:"badge bg-abc-red rs-pulse",children:"EN VIVO"})]}),e.jsxs("div",{className:"p-3 bg-light border-bottom",children:[e.jsxs("p",{className:"text-uppercase text-muted small fw-bold mb-1",children:["Sonando ahora · ",a]}),e.jsxs("div",{className:"d-flex align-items-center gap-3",children:[e.jsx("div",{className:"bg-white p-2 rounded-circle shadow-sm text-abc-blue",children:L[l?.type??"music"]}),e.jsxs("div",{children:[e.jsx("h5",{className:"fw-bold mb-0 text-dark",style:{fontSize:"0.95rem"},children:d}),e.jsx("small",{className:"text-secondary",style:{fontSize:"0.75rem"},children:r})]})]}),e.jsx("div",{className:"progress mt-3",style:{height:"3px"},children:e.jsx("div",{className:"progress-bar bg-abc-red w-100 progress-bar-striped progress-bar-animated",role:"progressbar"})})]}),e.jsx("div",{className:"card-body p-0 overflow-auto",style:{maxHeight:"360px"},children:e.jsx("div",{className:"list-group list-group-flush",children:o.map((n,g)=>{const h=l?.title===n.title&&l?.timeLabel===n.timeLabel;return e.jsx("div",{className:`list-group-item border-0 border-bottom p-3 ${h?"rs-active-row":""}`,children:e.jsxs("div",{className:"d-flex gap-3 align-items-start",children:[e.jsxs("div",{className:"text-center pt-1 flex-shrink-0",style:{minWidth:"52px"},children:[e.jsx(B,{size:11,className:h?"text-abc-red":"text-muted"}),e.jsx("span",{className:"d-block fw-bold",style:{fontSize:"0.68rem",color:h?"var(--abc-red)":"var(--abc-blue)"},children:n.timeLabel.split("–")[0].trim()})]}),e.jsxs("div",{className:"border-start ps-3 flex-grow-1",style:{borderColor:"#e5e7eb"},children:[e.jsxs("div",{className:"d-flex align-items-center gap-1 mb-1",children:[h&&e.jsx("span",{className:"badge bg-abc-red",style:{fontSize:"0.55rem"},children:"AL AIRE"}),e.jsx("span",{className:"opacity-50",children:L[n.type]})]}),e.jsx("h6",{className:"fw-bold mb-0",style:{fontSize:"0.8rem",color:h?"var(--abc-blue)":"#1f2937"},children:n.title}),e.jsx("p",{className:"mb-0 text-muted",style:{fontSize:"0.7rem"},children:n.slogan})]})]})},g)})})}),e.jsx("div",{className:"card-footer bg-white p-3 text-center border-0",children:e.jsx($,{href:f("corporate.programming"),className:"btn btn-outline-secondary btn-sm rounded-pill px-4 fw-bold w-100",children:"Ver Parrilla Completa"})}),e.jsx("style",{children:`
                .rs-pulse { animation: rs-pulse-anim 2s infinite; }
                @keyframes rs-pulse-anim {
                    0%,100% { opacity: 1; }
                    50%      { opacity: 0.5; }
                }
                .rs-active-row { background-color: #f0f9ff !important; }
                .list-group-item { transition: background-color 0.2s; }
                .list-group-item:hover { background-color: #fafafa; }
            `})]})}const P=[G,X,V,T,K,R,H],E=["#6f42c1","#ffc107","#0dcaf0","#198754","#d63384","#dc3545"];function ye({categories:a=[],onCategoryClick:i,onNavigate:l}){const c=a.map((r,t)=>({id:r.id,title:r.name,subtitle:"Explora más",icon:P[t%P.length],color:r.theme_color||E[t%E.length],colorSecondary:r.theme_color_secondary,image:r.image_path?m(`storage/${r.image_path}`):"https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop",target:r.slug})),d=(r,t)=>{r.preventDefault(),i&&i(t)};return e.jsxs("section",{className:"featured-categories-section py-5 position-relative overflow-hidden w-100",children:[e.jsx("div",{className:"position-absolute top-0 start-0 w-100 h-100 z-0",style:{background:"radial-gradient(ellipse at bottom, #0f172a 0%, #020617 100%)"}}),e.jsx("div",{className:"position-absolute top-0 start-0 w-100 h-100 z-0 opacity-20",style:{backgroundImage:"linear-gradient(rgba(255, 215, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 215, 0, 0.1) 1px, transparent 1px)",backgroundSize:"40px 40px"}}),e.jsx("div",{className:"position-absolute top-0 start-50 translate-middle w-75 h-50 bg-abc-blue rounded-circle blur-4xl opacity-10"}),e.jsxs("div",{className:"container position-relative z-1",children:[e.jsxs("div",{className:"text-center mb-5",children:[e.jsx("span",{className:"text-abc-gold text-uppercase fw-bold small letter-spacing-2 mb-2 d-block",children:"Explora Nuestro Contenido"}),e.jsxs("h2",{className:"display-5 fw-bold text-white font-serif mb-0 d-flex align-items-center justify-content-center gap-3",children:[e.jsx("span",{className:"d-none d-md-block",style:{height:"1px",width:"50px",background:"var(--abc-gold)"}}),"DE INTERES",e.jsx("span",{className:"d-none d-md-block",style:{height:"1px",width:"50px",background:"var(--abc-gold)"}})]})]}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-lg-8",children:e.jsx("div",{className:"row g-2 g-md-4",children:c.length>0?c.map((r,t)=>{const s=t<2,o=r.colorSecondary?`linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 50%, ${r.color} 80%, ${r.colorSecondary} 100%)`:`linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 50%, ${r.color} 100%)`,n=r.colorSecondary?`linear-gradient(to right, ${r.color}, ${r.colorSecondary})`:r.color;return e.jsx("div",{className:s?"col-6 col-md-6":"col-6 col-md-4",children:e.jsx("a",{href:"#",onClick:g=>d(g,r.target),className:"text-decoration-none h-100 d-block",children:e.jsxs("div",{className:"vertical-card position-relative rounded-1 overflow-hidden h-100 border border-secondary border-opacity-25",style:{minHeight:s?"450px":"280px",background:"#000"},children:[e.jsx("div",{className:"bg-image position-absolute top-0 start-0 w-100 h-100",style:{backgroundImage:`url(${r.image})`,backgroundSize:"cover",backgroundPosition:"center",transition:"transform 0.8s ease"}}),e.jsx("div",{className:"overlay position-absolute top-0 start-0 w-100 h-100",style:{background:o,opacity:.85}}),e.jsxs("div",{className:"card-content position-relative h-100 d-flex flex-column justify-content-center align-items-center p-4 z-2 text-white text-center",children:[e.jsx("div",{className:`icon-container ${s?"mb-4":"mb-3"}`}),e.jsxs("div",{className:"text-container",children:[e.jsx("h3",{className:`${s?"h3":"h5"} fw-bold font-serif mb-2 lh-1 text-shadow`,children:r.title}),e.jsx("p",{className:"text-white-75 mb-4 text-uppercase tracking-wider fw-bold letter-spacing-2",style:{fontSize:s?"0.8rem":"0.7rem"},children:r.subtitle}),e.jsx("div",{className:"btn-wrapper opacity-0 translate-y-4",children:e.jsx("span",{className:`btn btn-outline-light rounded-0 ${s?"px-4 py-2":"px-3 py-1"} fw-bold text-uppercase border-2 btn-sm`,children:"Explorar"})})]})]}),e.jsx("div",{className:"position-absolute bottom-0 start-0 w-100",style:{height:"6px",background:n}})]})})},r.id)}):e.jsx("div",{className:"col-12 text-center text-white py-5",children:e.jsx("p",{className:"h5",children:"No hay categorías destacadas disponibles."})})})}),e.jsx("div",{className:"col-lg-4",children:e.jsx(ve,{})})]})]}),e.jsx("style",{children:`
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

      `})]})}function je(){return e.jsxs("section",{className:"py-5 bg-light my-5",children:[e.jsx("div",{className:"container",children:e.jsx("div",{className:"row justify-content-center",children:e.jsx("div",{className:"col-lg-10",children:e.jsx("div",{className:"card border-0 shadow-sm overflow-hidden bg-white",children:e.jsx("div",{className:"card-body p-0",children:e.jsxs("div",{className:"row g-0 align-items-center",children:[e.jsxs("div",{className:"col-md-8 p-4 p-md-5",children:[e.jsxs("div",{className:"d-flex align-items-center gap-3 mb-3",children:[e.jsx("div",{className:"bg-abc-blue text-white p-3 rounded-circle",children:e.jsx(le,{size:24})}),e.jsx("span",{className:"text-abc-blue fw-bold text-uppercase small ls-1",children:"Oportunidades Laborales"})]}),e.jsx("h2",{className:"display-6 fw-bold text-dark font-serif mb-3",children:"¿Buscas tu próximo empleo?"}),e.jsx("p",{className:"lead text-muted mb-4",children:"Explora nuestra bolsa de trabajo y descubre los empleos disponibles en las mejores empresas de la región."}),e.jsx("div",{className:"d-flex flex-wrap gap-3",children:e.jsxs($,{href:f("jobs.index"),className:"btn btn-abc-blue px-4 py-2 rounded-pill fw-bold d-flex align-items-center gap-2 hover-scale",children:["Ver Empleos Disponibles",e.jsx(v,{size:18})]})})]}),e.jsx("div",{className:"col-md-4 bg-abc-blue p-4 text-center d-flex align-items-center justify-content-center",style:{minHeight:"200px"},children:e.jsx("div",{className:"text-white opacity-25",children:e.jsx(J,{size:120,strokeWidth:1})})})]})})})})})}),e.jsx("style",{children:`
                .hover-scale {
                    transition: transform 0.2s ease;
                }
                .hover-scale:hover {
                    transform: translateY(-2px);
                }
                .ls-1 {
                    letter-spacing: 1px;
                }
            `})]})}function we({title:a="Videos de Actualidad",videos:i,className:l="",compact:c=!1,onSeeMore:d}){const[r,t]=p.useState(i?.[0]);if(p.useEffect(()=>{i&&i.length>0&&t(i[0])},[i]),!i||i.length===0)return null;const s=r||i[0];return s?e.jsxs("section",{className:`vg-wrap ${l}`,children:[e.jsx("style",{children:`
        /* ── Root ────────────────────────────────────── */
        .vg-wrap {
          background: #0b1c3a;
          border-radius: 4px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.07);
          box-shadow: 0 20px 60px rgba(0,0,0,0.45);
        }

        /* ── Header ──────────────────────────────────── */
        .vg-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 22px;
          background: #002060; /* --abc-blue */
          border-bottom: 3px solid #FF0000; /* --abc-red accent */
        }
        .vg-head-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .vg-head-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px; height: 34px;
          border-radius: 4px;
          background: #FF0000;
          color: #fff;
          flex-shrink: 0;
        }
        .vg-head-title {
          font-family: 'Merriweather', serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: #fff;
          margin: 0;
          letter-spacing: -0.01em;
        }
        .vg-head-meta {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'Inter', sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
        }

        /* ── Body (grid) ─────────────────────────────── */
        .vg-body {
          display: grid;
          grid-template-columns: 1fr 320px;
        }
        @media (max-width: 991px) {
          .vg-body { grid-template-columns: 1fr; }
          .vg-playlist {
            max-height: 260px;
            border-left: none !important;
            border-top: 1px solid rgba(255,255,255,0.07);
          }
        }

        /* ── Player ──────────────────────────────────── */
        .vg-player { background: #000; }
        .vg-player-ratio {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
        }
        .vg-player-ratio iframe {
          position: absolute; inset: 0;
          width: 100%; height: 100%; border: 0;
        }
        .vg-player-info {
          padding: 18px 22px 20px;
          background: #060f22;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .vg-player-meta {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 8px;
        }
        .vg-cat-badge {
          font-family: 'Inter', sans-serif;
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          background: #FF0000;
          color: #fff;
          padding: 2px 8px;
          border-radius: 2px;
        }
        .vg-date {
          display: flex;
          align-items: center;
          gap: 4px;
          font-family: 'Inter', sans-serif;
          font-size: 0.72rem;
          color: rgba(255,255,255,0.38);
        }
        .vg-player-title {
          font-family: 'Merriweather', serif;
          font-size: 1.05rem;
          font-weight: 700;
          color: #fff;
          margin: 0 0 6px;
          line-height: 1.4;
          letter-spacing: -0.01em;
        }
        .vg-player-desc {
          font-family: 'Inter', sans-serif;
          font-size: 0.82rem;
          color: rgba(255,255,255,0.4);
          line-height: 1.6;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* ── Playlist ────────────────────────────────── */
        .vg-playlist {
          display: flex;
          flex-direction: column;
          border-left: 1px solid rgba(255,255,255,0.07);
          background: #081325;
          overflow: hidden;
        }
        .vg-pl-header {
          padding: 12px 16px;
          font-family: 'Inter', sans-serif;
          font-size: 0.62rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          background: rgba(0,32,96,0.4);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          flex-shrink: 0;
        }
        .vg-pl-scroll {
          overflow-y: auto;
          flex: 1;
          padding: 6px;
        }
        .vg-pl-scroll::-webkit-scrollbar { width: 3px; }
        .vg-pl-scroll::-webkit-scrollbar-track { background: transparent; }
        .vg-pl-scroll::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.12);
          border-radius: 4px;
        }

        /* ── Playlist Item ───────────────────────────── */
        .vg-item {
          display: flex;
          gap: 10px;
          padding: 8px;
          border-radius: 4px;
          cursor: pointer;
          border: 1px solid transparent;
          transition: background 0.18s ease, border-color 0.18s ease;
          margin-bottom: 3px;
        }
        .vg-item:last-child { margin-bottom: 0; }
        .vg-item:hover {
          background: rgba(255,255,255,0.04);
          border-color: rgba(255,255,255,0.07);
        }
        .vg-item-active {
          background: rgba(0,32,96,0.5) !important;   /* abc-blue tint */
          border-color: rgba(255,215,0,0.25) !important; /* abc-gold rim */
        }

        /* Thumbnail */
        .vg-thumb {
          position: relative;
          flex-shrink: 0;
          width: 112px; height: 63px;
          border-radius: 3px;
          overflow: hidden;
          background: #000;
        }
        .vg-thumb img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.3s ease;
        }
        .vg-item:hover .vg-thumb img { transform: scale(1.06); }
        .vg-thumb-overlay {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          background: rgba(0,0,0,0.35);
          transition: background 0.18s ease;
        }
        .vg-item-active .vg-thumb-overlay { background: rgba(0,32,96,0.55); }
        .vg-item:hover .vg-thumb-overlay { background: rgba(0,0,0,0.5); }
        .vg-play-btn {
          width: 24px; height: 24px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          display: flex; align-items: center; justify-content: center;
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255,255,255,0.2);
          transition: transform 0.2s ease, background 0.2s ease;
        }
        .vg-item:hover .vg-play-btn { transform: scale(1.15); background: rgba(255,0,0,0.7); }
        .vg-item-active .vg-play-btn { background: rgba(255,215,0,0.25); border-color: rgba(255,215,0,0.4); }
        .vg-duration {
          position: absolute; bottom: 3px; right: 4px;
          background: rgba(0,0,0,0.82);
          color: #fff;
          font-family: monospace;
          font-size: 0.58rem; font-weight: 700;
          padding: 1px 4px; border-radius: 2px;
        }

        /* Item info */
        .vg-item-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-width: 0;
        }
        .vg-item-title {
          font-family: 'Inter', sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          line-height: 1.35;
          color: rgba(255,255,255,0.8);
          margin: 0 0 4px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: color 0.15s ease;
        }
        .vg-item-active .vg-item-title { color: #FFD700; } /* abc-gold */
        .vg-item:hover .vg-item-title { color: #fff; }
        .vg-item-date {
          font-family: 'Inter', sans-serif;
          font-size: 0.65rem;
          color: rgba(255,255,255,0.28);
        }

        /* ── Footer ──────────────────────────────────── */
        .vg-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 13px 22px;
          background: #002060;
          border-top: 1px solid rgba(255,255,255,0.07);
        }
        .vg-footer-text {
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          color: rgba(255,255,255,0.4);
        }
        .vg-cta {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: #FF0000;
          color: #fff !important;
          font-family: 'Inter', sans-serif;
          font-size: 0.73rem;
          font-weight: 700;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          text-decoration: none !important;
          padding: 8px 18px;
          border-radius: 3px;
          transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 4px 14px rgba(255,0,0,0.35);
        }
        .vg-cta:hover {
          background: #cc0000;
          transform: translateY(-1px);
          box-shadow: 0 7px 20px rgba(255,0,0,0.45);
        }
        .vg-cta:active { transform: translateY(0); }
      `}),e.jsxs("div",{className:"vg-head",children:[e.jsxs("div",{className:"vg-head-left",children:[e.jsx("div",{className:"vg-head-icon",children:e.jsx(R,{size:16})}),e.jsx("h2",{className:"vg-head-title",children:a})]}),!c&&e.jsxs("div",{className:"vg-head-meta",children:[e.jsx(de,{size:14}),e.jsxs("span",{children:[i.length," videos"]})]})]}),e.jsxs("div",{className:"vg-body",children:[e.jsxs("div",{className:"vg-player",children:[e.jsx("div",{className:"vg-player-ratio",children:e.jsx("iframe",{src:`${s.videoUrl}?rel=0&modestbranding=1`,title:s.title,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),e.jsxs("div",{className:"vg-player-info",children:[e.jsxs("div",{className:"vg-player-meta",children:[s.category&&e.jsx("span",{className:"vg-cat-badge",children:s.category}),e.jsxs("span",{className:"vg-date",children:[e.jsx(A,{size:11}),s.date?.split("•")[0]?.trim()]})]}),e.jsx("h3",{className:"vg-player-title",children:s.title}),s.description&&e.jsx("p",{className:"vg-player-desc",children:s.description})]})]}),e.jsxs("div",{className:"vg-playlist",children:[e.jsx("div",{className:"vg-pl-header",children:"Siguiente en lista"}),e.jsx("div",{className:"vg-pl-scroll",children:i.map(o=>{const n=s.id===o.id;return e.jsxs("div",{className:`vg-item ${n?"vg-item-active":""}`,onClick:()=>t(o),children:[e.jsxs("div",{className:"vg-thumb",children:[e.jsx("img",{src:o.thumbnail,alt:o.title}),e.jsx("div",{className:"vg-thumb-overlay",children:e.jsx("div",{className:"vg-play-btn",children:e.jsx(Z,{size:10,fill:"currentColor",color:"#fff"})})}),o.duration&&e.jsx("span",{className:"vg-duration",children:o.duration})]}),e.jsxs("div",{className:"vg-item-info",children:[e.jsx("h5",{className:"vg-item-title",children:o.title}),e.jsx("span",{className:"vg-item-date",children:o.date?.split("•")[0]?.trim()})]})]},o.id)})})]})]}),e.jsxs("div",{className:"vg-footer",children:[e.jsx("span",{className:"vg-footer-text",children:"Más contenido en ABC TV"}),e.jsxs("button",{className:"vg-cta",onClick:d,children:["Ver todos los videos",e.jsx(Q,{size:14})]})]})]}):null}const Ne=({latestNews:a,mostReadNews:i=[],featuredNews:l=[],moreNews:c=[],featuredCategories:d=[],nacionalesNews:r=[],internationalNews:t=[],banners:s=[],isFallbackFeatured:o=!1})=>{const[n,g]=p.useState([]),[h,F]=p.useState(!0);p.useEffect(()=>{(async()=>{try{const b=await ee("",6);g(b)}catch(b){console.error("Error loading videos:",b)}finally{F(!1)}})()},[]);const u=x=>{const b=s.filter(D=>D.position===x);return b.length===0?null:b[Math.floor(Math.random()*b.length)]},N=u("home_top"),k=u("sidebar_home"),z=u("content_home"),S=u("footer"),C=u("billboard");return e.jsxs(e.Fragment,{children:[e.jsx(U,{title:"PORTADA"}),N&&e.jsx("div",{className:"container mt-4 mb-2",children:e.jsx(j,{variant:"horizontal",imageUrl:m(`storage/${N.file_path}`),link:N.link||"#",label:"Publicidad"})}),e.jsx(be,{post:a,onReadMore:()=>a&&y.visit(f("news.show",{slug:a.slug}))}),e.jsx("div",{className:"container py-5",children:e.jsxs("div",{className:"row g-4",children:[e.jsxs("div",{className:"col-lg",children:[e.jsx("div",{className:"d-flex align-items-center justify-content-between mb-4 border-bottom pb-3",children:e.jsx("h2",{className:"h2 mb-0 fw-bold text-abc-blue font-serif ps-3 border-start border-4 border-secondary",children:e.jsx("a",{href:"/seccion/noticias-abc",className:"text-decoration-none text-abc-blue",children:" Noticias ABC"})})}),e.jsx(se,{posts:c||[],columns:3}),z&&e.jsx("div",{className:"mt-5",children:e.jsx(j,{variant:"horizontal",imageUrl:m(`storage/${z.file_path}`),link:z.link||"#",label:"Publicidad"})})]}),e.jsx("aside",{className:"col-lg-auto",style:{width:"350px"},children:e.jsxs("div",{className:"d-flex flex-column gap-4 sticky-top",style:{top:"100px",zIndex:10},children:[e.jsx(re,{items:i||[]}),k&&e.jsx(j,{variant:"square",imageUrl:m(`storage/${k.file_path}`),link:k.link||"#",label:"Publicidad"})]})})]})}),e.jsx(ue,{posts:l||[],onPostClick:x=>y.visit(f("news.show",{slug:x})),isFallback:o}),e.jsx(ye,{categories:d,onCategoryClick:x=>y.visit(f("category.show",{slug:x}))}),!h&&n.length>0&&e.jsx("div",{style:{background:"linear-gradient(180deg, #080f1e 0%, #0c1530 100%)",padding:"60px 0"},children:e.jsx("div",{className:"container",children:e.jsx(we,{title:"Reportajes ABC TV",videos:n,onSeeMore:()=>{window.history.pushState(null,"","#videos"),window.dispatchEvent(new PopStateEvent("popstate"))}})})}),S&&e.jsx("div",{className:"container my-5",children:e.jsx(j,{variant:"horizontal",imageUrl:m(`storage/${S.file_path}`),link:S.link||"#",label:"Publicidad"})}),C&&e.jsxs("div",{className:"container-fluid px-0 my-4",children:[e.jsx("a",{href:C.link||"#",target:"_blank",rel:"noopener noreferrer",className:"d-block",children:e.jsx("img",{src:m(`storage/${C.file_path}`),alt:"Publicidad",className:"w-100",style:{maxHeight:"250px",objectFit:"cover",display:"block"}})}),e.jsx("p",{className:"text-center text-muted mb-0",style:{fontSize:"0.6rem",letterSpacing:"1px",textTransform:"uppercase"},children:"Publicidad"})]}),e.jsx(je,{}),e.jsx(fe,{news:[...a?[a]:[],...l,...c].slice(0,5),onPostClick:x=>y.visit(f("news.show",{slug:x}))})]})};Ne.layout=ae;export{Ne as default};
