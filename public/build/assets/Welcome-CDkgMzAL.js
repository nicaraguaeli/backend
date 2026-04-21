import{j as e,r as p,L as B,H as O,a as w}from"./app-Bnnpwpu1.js";import{c as j,a as g,C as H,M as q,X as G,d as V,l as X,m as A,t as E,n as _,R,H as K,o as J,p as I,k as Z,P as T,e as Q,q as ee,w as ae}from"./MainLayout-4-eKCem2.js";import{U as re}from"./user-lyqiGx3U.js";import{A as y}from"./arrow-right-o7xyffCC.js";import{A as N,M as te}from"./AdSpace-6zSte42T.js";import{P as ie}from"./PostGrid-DBH8sO-G.js";import{T as se}from"./trending-up-D0yvEfb5.js";import{S as F}from"./sparkles-DQ41n24n.js";import{s as v}from"./index-BsxvijQw.js";import{M as D,T as U,N as ne}from"./trophy-BrFxxuS1.js";import{M as oe}from"./mic-vocal-BrT9KRaC.js";import{B as le}from"./briefcase-C7tqxeLj.js";/* empty css            *//**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=[["path",{d:"M21 5H3",key:"1fi0y6"}],["path",{d:"M10 12H3",key:"1ulcyk"}],["path",{d:"M10 19H3",key:"108z41"}],["path",{d:"M15 12.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z",key:"ms4nik"}]],de=j("list-video",ce);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],me=j("mic",pe);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],ge=j("star",xe);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=[["path",{d:"m17 2-5 5-5-5",key:"16satq"}],["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",key:"1e6viu"}]],Y=j("tv",he);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],fe=j("zap",be);function ue({post:r,onReadMore:s}){return r?e.jsxs("div",{className:"hero-section position-relative d-flex align-items-center",style:{backgroundImage:`url("${r.image_path?g(`storage/${r.image_path}`):""}")`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",minHeight:"80vh"},children:[e.jsx("div",{className:"hero-overlay",style:{background:"linear-gradient(90deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 32, 96, 0.5) 50%, rgba(0, 32, 96, 0.3) 100%)"}}),e.jsx("div",{className:"position-absolute top-0 end-0 h-100 w-25 bg-abc-red opacity-25",style:{transform:"skewX(-12deg) translateX(50%)",zIndex:2}}),e.jsx("div",{className:"container position-relative z-3 py-5 mt-5",children:e.jsx("div",{className:"row",children:e.jsxs("div",{className:"col-lg-8 col-xl-7",children:[r.categories&&r.categories.length>0&&e.jsx("span",{className:"badge bg-abc-gold text-dark text-uppercase px-3 py-2 mb-3 fs-6 shadow-sm fw-bold",children:r.categories[0].name}),e.jsx("h1",{className:"display-3 fw-bold mb-3 font-serif",children:e.jsx("a",{href:"#",onClick:l=>{l.preventDefault(),s&&s()},className:"text-white text-decoration-none",style:{cursor:"pointer",transition:"opacity 0.2s"},onMouseEnter:l=>l.currentTarget.style.opacity="0.85",onMouseLeave:l=>l.currentTarget.style.opacity="1",title:"Leer Noticia Completa",children:r.title})}),e.jsxs("div",{className:"d-flex flex-wrap align-items-center gap-3 text-white-50 mb-4 small fw-medium",children:[e.jsxs("div",{className:"d-flex align-items-center gap-1",children:[e.jsx(H,{size:16,className:"text-abc-gold"}),e.jsx("span",{children:new Date(r.published_at).toLocaleDateString("es-ES",{day:"numeric",month:"long",year:"numeric"})})]}),e.jsxs("div",{className:"d-flex align-items-center gap-1",children:[e.jsx(re,{size:16,className:"text-abc-gold"}),e.jsxs("span",{children:["Por ",r.author?.name||"Redacción"]})]}),e.jsxs("div",{className:"d-flex align-items-center gap-1",children:[e.jsx(q,{size:16,className:"text-abc-gold"}),e.jsxs("span",{children:[r.city||r.country||"Nicaragua","-",r.country]})]})]}),e.jsx("p",{className:"lead text-light mb-5 ps-4 border-start border-4 border-abc-red bg-black bg-opacity-50 py-3 pe-3 rounded-end d-none d-md-block",children:r.excerpt}),e.jsx("div",{className:"d-flex flex-column flex-sm-row gap-3",children:e.jsxs("button",{onClick:s,className:"btn btn-abc-blue text-white fw-bold px-4 py-3 text-uppercase shadow-lg border-0 rounded-2 d-flex align-items-center justify-content-center gap-2",children:["Leer Noticia Completa ",e.jsx(y,{size:18})]})})]})})})]}):e.jsx("div",{className:"hero-section position-relative d-flex align-items-center bg-abc-blue",style:{minHeight:"80vh"},children:e.jsx("div",{className:"container text-center text-white",children:e.jsx("div",{className:"spinner-border",role:"status"})})})}function ve({news:r,onPostClick:s}){const[l,c]=p.useState(!0),[m,t]=p.useState(0),[a,i]=p.useState(!1);if(p.useEffect(()=>{if(a)return;const o=setInterval(()=>{t(x=>(x+1)%r.length)},1e4);return()=>clearInterval(o)},[r.length,a]),!r||r.length===0||!l)return null;const n=r[m];return e.jsxs("div",{className:"news-ticker-container position-fixed d-none d-md-block animate-slide-up",style:{bottom:"90px",right:"20px",zIndex:1070,maxWidth:"350px",width:"100%",position:"fixed"},onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:[e.jsx("button",{type:"button",onClick:o=>{o.stopPropagation(),c(!1)},className:"btn btn-sm btn-light border rounded-circle p-0 d-flex align-items-center justify-content-center hover-red",title:"Cerrar notificación",style:{position:"absolute",top:"-10px",right:"-10px",zIndex:10,width:"24px",height:"24px"},children:e.jsx(G,{size:14})}),e.jsxs("div",{className:"card border-0 shadow-lg overflow-hidden cursor-pointer",onClick:()=>s(n.slug),style:{borderLeft:"4px solid var(--abc-red)"},children:[e.jsxs("div",{className:"card-body p-3 d-flex gap-3 align-items-start bg-white",children:[e.jsx("div",{className:"flex-shrink-0 pt-1",children:e.jsx("div",{className:"bg-abc-red bg-opacity-10 text-abc-red p-2 rounded-circle animate-pulse-slow",children:e.jsx(fe,{size:20,fill:"currentColor"})})}),e.jsxs("div",{className:"flex-grow-1 overflow-hidden",children:[e.jsx("span",{className:"badge bg-abc-blue text-uppercase mb-1",style:{fontSize:"0.6rem"},children:n.categories?.[0]?.name||"Noticias"}),e.jsx("h6",{className:"fw-bold text-dark mb-1 line-clamp-2 font-serif",style:{fontSize:"0.9rem",lineHeight:"1.3"},children:n.title}),e.jsxs("div",{className:"d-flex align-items-center gap-1 text-abc-red small fw-bold mt-2",style:{fontSize:"0.75rem"},children:["Leer ahora ",e.jsx(y,{size:12})]})]}),e.jsx("div",{className:"d-none d-sm-block flex-shrink-0",style:{width:"60px",height:"60px"},children:e.jsx("img",{src:n.image_path?g(`storage/${n.image_path}`):"",alt:n.title,className:"w-100 h-100 object-fit-cover rounded"})})]}),!a&&e.jsx("div",{className:"progress-bar-ticker bg-abc-red opacity-50"})]}),e.jsx("style",{children:`
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
      `})]})}function ye({posts:r,onPostClick:s,isFallback:l=!1}){if(!r||r.length<4)return null;const c=r[0],m=r.slice(1,4),t=a=>{if(!a.categories||a.categories.length===0)return"Noticias";const i=a.categories.find(n=>n.slug==="reportajes-abc");return i?i.name:a.categories[0].name};return e.jsxs("section",{className:"featured-section-enhanced py-5 position-relative overflow-hidden",children:[e.jsxs("div",{className:"bg-decoration",children:[e.jsx("div",{className:"decoration-circle decoration-1"}),e.jsx("div",{className:"decoration-circle decoration-2"}),e.jsx("div",{className:"decoration-circle decoration-3"})]}),e.jsx("div",{className:"position-absolute top-0 end-0 p-5 opacity-3",children:e.jsx(se,{size:350,strokeWidth:.3,color:"rgba(255, 255, 255, 0.1)"})}),e.jsxs("div",{className:"container position-relative z-3",children:[e.jsxs("div",{className:"section-header mb-5",children:[e.jsxs("div",{className:"d-flex align-items-center gap-2 mb-2",children:[e.jsx(F,{size:20,className:"text-abc-gold sparkle-icon"}),e.jsx("span",{className:"text-abc-gold text-uppercase fw-bold small letter-spacing-3",children:"Contenido de Valor"})]}),e.jsx("h2",{className:"display-4 fw-bold text-white font-serif mb-2 header-title",children:l?"Reportajes ABC":"Reportajes Destacados"}),e.jsx("div",{className:"header-underline"})]}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"featured-card-main cursor-pointer",onClick:()=>s(c.slug),children:e.jsxs("div",{className:"featured-image-wrapper",children:[e.jsx("img",{src:c.image_path?g(`storage/${c.image_path}`):"https://placehold.co/1200x500?text=ABC",alt:c.title,className:"featured-image",onError:a=>a.target.src="https://placehold.co/1200x500?text=ABC"}),e.jsx("div",{className:"featured-overlay"}),e.jsx("div",{className:"featured-shine"}),e.jsxs("div",{className:"featured-content",children:[e.jsxs("div",{className:"d-flex align-items-center gap-3 mb-3",children:[!l&&e.jsxs("span",{className:"premium-badge d-none d-md-inline-flex",children:[e.jsx(ge,{size:16,className:"me-2 fill-current"}),"Destacado"]}),(c.categories?.length??0)>0&&e.jsx("span",{className:"category-badge",children:t(c)})]}),e.jsx("h3",{className:"featured-title",children:c.title}),e.jsx("p",{className:"featured-excerpt",children:c.excerpt}),e.jsx("div",{className:"featured-meta",children:e.jsxs("div",{className:"d-flex align-items-center gap-3 flex-wrap",children:[e.jsx("span",{className:"author-name",children:c.author?.name||"Redacción"}),e.jsx("span",{className:"meta-separator",children:"•"}),e.jsxs("div",{className:"d-flex align-items-center gap-2 date-info",children:[e.jsx(V,{size:15}),e.jsx("span",{children:new Date(c.published_at).toLocaleDateString("es-ES",{day:"numeric",month:"long",year:"numeric"})})]})]})})]})]})})}),m.map((a,i)=>e.jsx("div",{className:"col-lg-4 col-md-6 col-12",children:e.jsxs("div",{className:"secondary-card cursor-pointer",onClick:()=>s(a.slug),style:{animationDelay:`${i*.1}s`},children:[e.jsxs("div",{className:"secondary-image-wrapper d-none d-md-block",children:[e.jsx("img",{src:a.image_path?g(`storage/${a.image_path}`):"https://placehold.co/400x250?text=ABC",alt:a.title,className:"secondary-image",onError:n=>n.target.src="https://placehold.co/400x250?text=ABC"}),e.jsx("div",{className:"secondary-overlay"}),e.jsx("span",{className:"secondary-category-badge",children:t(a)})]}),e.jsxs("div",{className:"secondary-card-mobile d-flex d-md-none",children:[e.jsxs("div",{className:"secondary-image-mobile",children:[e.jsx("img",{src:a.image_path?g(`storage/${a.image_path}`):"https://placehold.co/400x250?text=ABC",alt:a.title,className:"secondary-image",onError:n=>n.target.src="https://placehold.co/400x250?text=ABC"}),e.jsx("span",{className:"secondary-category-badge-mobile",children:t(a)})]}),e.jsxs("div",{className:"secondary-body-mobile",children:[e.jsx("h5",{className:"secondary-title-mobile",children:a.title}),e.jsxs("span",{className:"read-more-link",children:[e.jsx("span",{children:"Leer más"}),e.jsx(y,{size:14,className:"arrow-icon"})]})]})]}),e.jsxs("div",{className:"secondary-body d-none d-md-flex",children:[e.jsx("h5",{className:"secondary-title",children:a.title}),e.jsx("div",{className:"secondary-footer",children:e.jsxs("span",{className:"read-more-link",children:[e.jsx("span",{children:"Leer más"}),e.jsx(y,{size:16,className:"arrow-icon"})]})})]})]})},a.id))]})]}),e.jsx("style",{children:`
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
      `})]})}const L={news:e.jsx(ne,{size:13}),sports:e.jsx(U,{size:13}),show:e.jsx(oe,{size:13}),music:e.jsx(D,{size:13})};function je(){const r=X(),s=_[r]??_.Lunes,[l,c]=p.useState(()=>A(s));p.useEffect(()=>{const o=()=>c(A(s));o();const x=setInterval(o,3e4);return()=>clearInterval(x)},[]);const m=l?.title??"La radio que nunca duerme",t=l?.slogan??"Música continua",a=new Date,i=E(a.getHours(),a.getMinutes()),n=s.filter(o=>(o.endH===24?1440:E(o.endH,o.endM))>i).slice(0,5);return e.jsxs("div",{className:"card border-0 shadow-sm h-100 overflow-hidden bg-white",children:[e.jsxs("div",{className:"card-header bg-abc-blue text-white p-3 border-0 d-flex justify-content-between align-items-center",children:[e.jsxs("div",{className:"d-flex align-items-center gap-2",children:[e.jsx(R,{size:20,className:"text-abc-red"}),e.jsx("h3",{className:"h5 mb-0 fw-bold font-serif",children:"Programación"})]}),e.jsx("span",{className:"badge bg-abc-red rs-pulse",children:"EN VIVO"})]}),e.jsxs("div",{className:"p-3 bg-light border-bottom",children:[e.jsxs("p",{className:"text-uppercase text-muted small fw-bold mb-1",children:["Sonando ahora · ",r]}),e.jsxs("div",{className:"d-flex align-items-center gap-3",children:[e.jsx("div",{className:"bg-white p-2 rounded-circle shadow-sm text-abc-blue",children:L[l?.type??"music"]}),e.jsxs("div",{children:[e.jsx("h5",{className:"fw-bold mb-0 text-dark",style:{fontSize:"0.95rem"},children:m}),e.jsx("small",{className:"text-secondary",style:{fontSize:"0.75rem"},children:t})]})]}),e.jsx("div",{className:"progress mt-3",style:{height:"3px"},children:e.jsx("div",{className:"progress-bar bg-abc-red w-100 progress-bar-striped progress-bar-animated",role:"progressbar"})})]}),e.jsx("div",{className:"card-body p-0 overflow-auto",style:{maxHeight:"360px"},children:e.jsx("div",{className:"list-group list-group-flush",children:n.map((o,x)=>{const d=l?.title===o.title&&l?.timeLabel===o.timeLabel;return e.jsx("div",{className:`list-group-item border-0 border-bottom p-3 ${d?"rs-active-row":""}`,children:e.jsxs("div",{className:"d-flex gap-3 align-items-start",children:[e.jsxs("div",{className:"text-center pt-1 flex-shrink-0",style:{minWidth:"52px"},children:[e.jsx(V,{size:11,className:d?"text-abc-red":"text-muted"}),e.jsx("span",{className:"d-block fw-bold",style:{fontSize:"0.68rem",color:d?"var(--abc-red)":"var(--abc-blue)"},children:o.timeLabel.split("–")[0].trim()})]}),e.jsxs("div",{className:"border-start ps-3 flex-grow-1",style:{borderColor:"#e5e7eb"},children:[e.jsxs("div",{className:"d-flex align-items-center gap-1 mb-1",children:[d&&e.jsx("span",{className:"badge bg-abc-red",style:{fontSize:"0.55rem"},children:"AL AIRE"}),e.jsx("span",{className:"opacity-50",children:L[o.type]})]}),e.jsx("h6",{className:"fw-bold mb-0",style:{fontSize:"0.8rem",color:d?"var(--abc-blue)":"#1f2937"},children:o.title}),e.jsx("p",{className:"mb-0 text-muted",style:{fontSize:"0.7rem"},children:o.slogan})]})]})},x)})})}),e.jsx("div",{className:"card-footer bg-white p-3 text-center border-0",children:e.jsx(B,{href:v("corporate.programming"),className:"btn btn-outline-secondary btn-sm rounded-pill px-4 fw-bold w-100",children:"Ver Parrilla Completa"})}),e.jsx("style",{children:`
                .rs-pulse { animation: rs-pulse-anim 2s infinite; }
                @keyframes rs-pulse-anim {
                    0%,100% { opacity: 1; }
                    50%      { opacity: 0.5; }
                }
                .rs-active-row { background-color: #f0f9ff !important; }
                .list-group-item { transition: background-color 0.2s; }
                .list-group-item:hover { background-color: #fafafa; }
            `})]})}const P=[K,J,D,U,I,Y,F],$=["#6f42c1","#ffc107","#0dcaf0","#198754","#d63384","#dc3545"];function we({categories:r=[],onCategoryClick:s,onNavigate:l}){const c=r.map((t,a)=>({id:t.id,title:t.name,subtitle:"Explora más",icon:P[a%P.length],color:t.theme_color||$[a%$.length],colorSecondary:t.theme_color_secondary,image:t.image_path?g(`storage/${t.image_path}`):"https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop",target:t.slug})),m=(t,a)=>{t.preventDefault(),s&&s(a)};return e.jsxs("section",{className:"featured-categories-section py-5 position-relative overflow-hidden w-100",children:[e.jsx("div",{className:"position-absolute top-0 start-0 w-100 h-100 z-0",style:{background:"radial-gradient(ellipse at bottom, #0f172a 0%, #020617 100%)"}}),e.jsx("div",{className:"position-absolute top-0 start-0 w-100 h-100 z-0 opacity-20",style:{backgroundImage:"linear-gradient(rgba(255, 215, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 215, 0, 0.1) 1px, transparent 1px)",backgroundSize:"40px 40px"}}),e.jsx("div",{className:"position-absolute top-0 start-50 translate-middle w-75 h-50 bg-abc-blue rounded-circle blur-4xl opacity-10"}),e.jsxs("div",{className:"container position-relative z-1",children:[e.jsxs("div",{className:"text-center mb-5",children:[e.jsx("span",{className:"text-abc-gold text-uppercase fw-bold small letter-spacing-2 mb-2 d-block",children:"Explora Nuestro Contenido"}),e.jsxs("h2",{className:"display-5 fw-bold text-white font-serif mb-0 d-flex align-items-center justify-content-center gap-3",children:[e.jsx("span",{className:"d-none d-md-block",style:{height:"1px",width:"50px",background:"var(--abc-gold)"}}),"DE INTERES",e.jsx("span",{className:"d-none d-md-block",style:{height:"1px",width:"50px",background:"var(--abc-gold)"}})]})]}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-lg-8",children:e.jsx("div",{className:"row g-2 g-md-4",children:c.length>0?c.map((t,a)=>{const i=a<2,n=t.colorSecondary?`linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 50%, ${t.color} 80%, ${t.colorSecondary} 100%)`:`linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 50%, ${t.color} 100%)`,o=t.colorSecondary?`linear-gradient(to right, ${t.color}, ${t.colorSecondary})`:t.color;return e.jsx("div",{className:i?"col-6 col-md-6":"col-6 col-md-4",children:e.jsx("a",{href:"#",onClick:x=>m(x,t.target),className:"text-decoration-none h-100 d-block",children:e.jsxs("div",{className:"vertical-card position-relative rounded-1 overflow-hidden h-100 border border-secondary border-opacity-25",style:{minHeight:i?"450px":"280px",background:"#000"},children:[e.jsx("div",{className:"bg-image position-absolute top-0 start-0 w-100 h-100",style:{backgroundImage:`url(${t.image})`,backgroundSize:"cover",backgroundPosition:"center",transition:"transform 0.8s ease"}}),e.jsx("div",{className:"overlay position-absolute top-0 start-0 w-100 h-100",style:{background:n,opacity:.85}}),e.jsxs("div",{className:"card-content position-relative h-100 d-flex flex-column justify-content-center align-items-center p-4 z-2 text-white text-center",children:[e.jsx("div",{className:`icon-container ${i?"mb-4":"mb-3"}`}),e.jsxs("div",{className:"text-container",children:[e.jsx("h3",{className:`${i?"h3":"h5"} fw-bold font-serif mb-2 lh-1 text-shadow`,children:t.title}),e.jsx("p",{className:"text-white-75 mb-4 text-uppercase tracking-wider fw-bold letter-spacing-2",style:{fontSize:i?"0.8rem":"0.7rem"},children:t.subtitle}),e.jsx("div",{className:"btn-wrapper opacity-0 translate-y-4",children:e.jsx("span",{className:`btn btn-outline-light rounded-0 ${i?"px-4 py-2":"px-3 py-1"} fw-bold text-uppercase border-2 btn-sm`,children:"Explorar"})})]})]}),e.jsx("div",{className:"position-absolute bottom-0 start-0 w-100",style:{height:"6px",background:o}})]})})},t.id)}):e.jsx("div",{className:"col-12 text-center text-white py-5",children:e.jsx("p",{className:"h5",children:"No hay categorías destacadas disponibles."})})})}),e.jsx("div",{className:"col-lg-4",children:e.jsx(je,{})})]})]}),e.jsx("style",{children:`
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

      `})]})}function Ne(){return e.jsxs("section",{className:"py-5 bg-light my-5",children:[e.jsx("div",{className:"container",children:e.jsx("div",{className:"row justify-content-center",children:e.jsx("div",{className:"col-lg-10",children:e.jsx("div",{className:"card border-0 shadow-sm overflow-hidden bg-white",children:e.jsx("div",{className:"card-body p-0",children:e.jsxs("div",{className:"row g-0 align-items-center",children:[e.jsxs("div",{className:"col-md-8 p-4 p-md-5",children:[e.jsxs("div",{className:"d-flex align-items-center gap-3 mb-3",children:[e.jsx("div",{className:"bg-abc-blue text-white p-3 rounded-circle",children:e.jsx(le,{size:24})}),e.jsx("span",{className:"text-abc-blue fw-bold text-uppercase small ls-1",children:"Oportunidades Laborales"})]}),e.jsx("h2",{className:"display-6 fw-bold text-dark font-serif mb-3",children:"¿Buscas tu próximo empleo?"}),e.jsx("p",{className:"lead text-muted mb-4",children:"Explora nuestra bolsa de trabajo y descubre los empleos disponibles en las mejores empresas de la región."}),e.jsx("div",{className:"d-flex flex-wrap gap-3",children:e.jsxs(B,{href:v("jobs.index"),className:"btn btn-abc-blue px-4 py-2 rounded-pill fw-bold d-flex align-items-center gap-2 hover-scale",children:["Ver Empleos Disponibles",e.jsx(y,{size:18})]})})]}),e.jsx("div",{className:"col-md-4 bg-abc-blue p-4 text-center d-flex align-items-center justify-content-center",style:{minHeight:"200px"},children:e.jsx("div",{className:"text-white opacity-25",children:e.jsx(Z,{size:120,strokeWidth:1})})})]})})})})})}),e.jsx("style",{children:`
                .hover-scale {
                    transition: transform 0.2s ease;
                }
                .hover-scale:hover {
                    transform: translateY(-2px);
                }
                .ls-1 {
                    letter-spacing: 1px;
                }
            `})]})}function ke({onNavigate:r}){const[s,l]=p.useState(!1),[c,m]=p.useState(0),t=p.useRef(null),a=p.useRef(0);p.useEffect(()=>{const d=new IntersectionObserver(([h])=>{h.isIntersecting&&l(!0)},{threshold:.15});return t.current&&d.observe(t.current),()=>d.disconnect()},[]),p.useEffect(()=>{const d=()=>{m(h=>h+1),a.current=requestAnimationFrame(d)};return a.current=requestAnimationFrame(d),()=>cancelAnimationFrame(a.current)},[]);const i=()=>{if(r){r();return}window.history.pushState(null,"","#audioreportajes"),window.dispatchEvent(new PopStateEvent("popstate"))},n=40,o=c*.05,x=Array.from({length:n},(d,h)=>{const f=18+Math.abs(Math.sin(o+h*.25))*32+Math.abs(Math.sin(o*.7+h*.5))*16;return Math.min(68,Math.max(8,f))});return e.jsxs("section",{ref:t,className:`arc2-section ${s?"arc2-visible":""}`,children:[e.jsx("div",{className:"arc2-bg"}),e.jsx("div",{className:"arc2-stripe"}),e.jsx("div",{className:"container position-relative",style:{zIndex:2},children:e.jsxs("div",{className:"arc2-inner",children:[e.jsxs("div",{className:"arc2-left",children:[e.jsxs("div",{className:"arc2-eyebrow",children:[e.jsx("span",{className:"arc2-eyebrow-icon",children:e.jsx(R,{size:14})}),e.jsx("span",{children:"PodcastABC: Historias, reportajes y temas de interés"})]}),e.jsxs("h2",{className:"arc2-headline font-serif",children:["Escucha nuestros",e.jsx("br",{}),e.jsx("span",{className:"arc2-headline-accent",children:"Audioreportajes"})]}),e.jsx("div",{className:"arc2-divider"}),e.jsx("p",{className:"arc2-desc",children:'Vive la magia de la radio con nuestros reportajes especiales, historias que inspiran, contenidos de actualidad y nuestro original radiodrama: "Una historia, una canción".'}),e.jsx("ul",{className:"arc2-features",children:[{icon:e.jsx(me,{size:15}),label:"Producción de estudio profesional"},{icon:e.jsx(I,{size:15}),label:"Siempre disponible y al alcance"},{icon:e.jsx(T,{size:15}),label:"Nuevos episodios cada semana"}].map(d=>e.jsxs("li",{className:"arc2-feature-item",children:[e.jsx("span",{className:"arc2-feature-icon",children:d.icon}),e.jsx("span",{className:"arc2-feature-label",children:d.label})]},d.label))}),e.jsx("button",{id:"cta-audioreportajes-btn",className:"arc2-btn",onClick:i,"aria-label":"Explorar Audioreportajes",children:e.jsxs("span",{className:"arc2-btn-inner",children:[e.jsx(I,{size:18,strokeWidth:2.2}),e.jsx("span",{children:"Explorar Audioreportajes"}),e.jsx(y,{size:18,strokeWidth:2.2,className:"arc2-btn-arrow"})]})})]}),e.jsxs("div",{className:"arc2-right",children:[e.jsxs("div",{className:"arc2-mic-wrap",children:[e.jsx("div",{className:"arc2-mic-halo arc2-halo-3"}),e.jsx("div",{className:"arc2-mic-halo arc2-halo-2"}),e.jsx("div",{className:"arc2-mic-halo arc2-halo-1"}),e.jsx("div",{className:"arc2-mic-core",children:e.jsxs("svg",{width:"44",height:"44",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[e.jsx("rect",{x:"9",y:"2",width:"6",height:"12",rx:"3",fill:"white"}),e.jsx("path",{d:"M5 10a7 7 0 0 0 14 0",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",fill:"none"}),e.jsx("line",{x1:"12",y1:"17",x2:"12",y2:"21",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round"}),e.jsx("line",{x1:"8",y1:"21",x2:"16",y2:"21",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round"})]})})]}),e.jsxs("div",{className:"arc2-live",children:[e.jsx("span",{className:"arc2-live-dot"}),e.jsx("span",{className:"arc2-live-text",children:"NUESTRAS PRODUCCIONES"})]}),e.jsx("div",{className:"arc2-wave","aria-hidden":"true",children:x.map((d,h)=>e.jsx("div",{className:"arc2-wave-bar",style:{height:`${d}%`}},h))}),e.jsx("div",{className:"arc2-stats",children:[{value:"100+",label:"Episodios"},{value:"HD",label:"Audio"},{value:"24/7",label:"Acceso"}].map(d=>e.jsxs("div",{className:"arc2-stat",children:[e.jsx("strong",{className:"arc2-stat-value",children:d.value}),e.jsx("span",{className:"arc2-stat-label",children:d.label})]},d.label))})]})]})}),e.jsx("style",{children:`
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
      `})]})}function ze({title:r="Videos de Actualidad",videos:s,className:l="",compact:c=!1,onSeeMore:m}){const[t,a]=p.useState(s?.[0]);if(p.useEffect(()=>{s&&s.length>0&&a(s[0])},[s]),!s||s.length===0)return null;const i=t||s[0];return i?e.jsxs("section",{className:`vg-wrap ${l}`,children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"vg-head",children:[e.jsxs("div",{className:"vg-head-left",children:[e.jsx("div",{className:"vg-head-icon",children:e.jsx(Y,{size:16})}),e.jsx("h2",{className:"vg-head-title",children:r})]}),!c&&e.jsxs("div",{className:"vg-head-meta",children:[e.jsx(de,{size:14}),e.jsxs("span",{children:[s.length," videos"]})]})]}),e.jsxs("div",{className:"vg-body",children:[e.jsxs("div",{className:"vg-player",children:[e.jsx("div",{className:"vg-player-ratio",children:e.jsx("iframe",{src:`${i.videoUrl}?rel=0&modestbranding=1`,title:i.title,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),e.jsxs("div",{className:"vg-player-info",children:[e.jsxs("div",{className:"vg-player-meta",children:[i.category&&e.jsx("span",{className:"vg-cat-badge",children:i.category}),e.jsxs("span",{className:"vg-date",children:[e.jsx(H,{size:11}),i.date?.split("•")[0]?.trim()]})]}),e.jsx("h3",{className:"vg-player-title",children:i.title}),i.description&&e.jsx("p",{className:"vg-player-desc",children:i.description})]})]}),e.jsxs("div",{className:"vg-playlist",children:[e.jsx("div",{className:"vg-pl-header",children:"Siguiente en lista"}),e.jsx("div",{className:"vg-pl-scroll",children:s.map(n=>{const o=i.id===n.id;return e.jsxs("div",{className:`vg-item ${o?"vg-item-active":""}`,onClick:()=>a(n),children:[e.jsxs("div",{className:"vg-thumb",children:[e.jsx("img",{src:n.thumbnail,alt:n.title}),e.jsx("div",{className:"vg-thumb-overlay",children:e.jsx("div",{className:"vg-play-btn",children:e.jsx(T,{size:10,fill:"currentColor",color:"#fff"})})}),n.duration&&e.jsx("span",{className:"vg-duration",children:n.duration})]}),e.jsxs("div",{className:"vg-item-info",children:[e.jsx("h5",{className:"vg-item-title",children:n.title}),e.jsx("span",{className:"vg-item-date",children:n.date?.split("•")[0]?.trim()})]})]},n.id)})})]})]}),e.jsxs("div",{className:"vg-footer",children:[e.jsx("span",{className:"vg-footer-text",children:"Más contenido en ABC TV"}),e.jsxs("button",{className:"vg-cta",onClick:m,children:["Ver todos los videos",e.jsx(Q,{size:14})]})]})]}):null}const Se=({latestNews:r,mostReadNews:s=[],featuredNews:l=[],moreNews:c=[],featuredCategories:m=[],nacionalesNews:t=[],internationalNews:a=[],banners:i=[],isFallbackFeatured:n=!1})=>{const[o,x]=p.useState([]),[d,h]=p.useState(!0);p.useEffect(()=>{(async()=>{try{const u=await ee("",6);x(u)}catch(u){console.error("Error loading videos:",u)}finally{h(!1)}})()},[]);const f=b=>{const u=i.filter(W=>W.position===b);return u.length===0?null:u[Math.floor(Math.random()*u.length)]},k=f("home_top"),z=f("sidebar_home"),S=f("content_home"),C=f("footer"),M=f("billboard");return e.jsxs(e.Fragment,{children:[e.jsx(O,{title:"PORTADA"}),k&&e.jsx("div",{className:"container mt-4 mb-2",children:e.jsx(N,{variant:"horizontal",imageUrl:g(`storage/${k.file_path}`),link:k.link||"#",label:"Publicidad"})}),e.jsx(ue,{post:r,onReadMore:()=>r&&w.visit(v("news.show",{slug:r.slug}))}),e.jsx("div",{className:"container py-5",children:e.jsxs("div",{className:"row g-4",children:[e.jsxs("div",{className:"col-lg",children:[e.jsx("div",{className:"d-flex align-items-center justify-content-between mb-4 border-bottom pb-3",children:e.jsx("h2",{className:"h2 mb-0 fw-bold text-abc-blue font-serif ps-3 border-start border-4 border-secondary",children:e.jsx("a",{href:"/seccion/noticias-abc",className:"text-decoration-none text-abc-blue",children:" Noticias ABC"})})}),e.jsx(ie,{posts:c||[],columns:3}),S&&e.jsx("div",{className:"mt-5",children:e.jsx(N,{variant:"horizontal",imageUrl:g(`storage/${S.file_path}`),link:S.link||"#",label:"Publicidad"})})]}),e.jsx("aside",{className:"col-lg-auto",style:{width:"350px"},children:e.jsxs("div",{className:"d-flex flex-column gap-4 sticky-top",style:{top:"100px",zIndex:10},children:[e.jsx(te,{items:s||[]}),z&&e.jsx(N,{variant:"square",imageUrl:g(`storage/${z.file_path}`),link:z.link||"#",label:"Publicidad"})]})})]})}),e.jsx(ye,{posts:l||[],onPostClick:b=>w.visit(v("news.show",{slug:b})),isFallback:n}),e.jsx(we,{categories:m,onCategoryClick:b=>w.visit(v("category.show",{slug:b}))}),!d&&o.length>0&&e.jsx("div",{style:{background:"linear-gradient(180deg, #080f1e 0%, #0c1530 100%)",padding:"60px 0"},children:e.jsx("div",{className:"container",children:e.jsx(ze,{title:"Reportajes ABC TV",videos:o,onSeeMore:()=>{window.history.pushState(null,"","#videos"),window.dispatchEvent(new PopStateEvent("popstate"))}})})}),e.jsx(ke,{onNavigate:()=>{window.history.pushState(null,"","#audioreportajes"),window.dispatchEvent(new PopStateEvent("popstate"))}}),C&&e.jsx("div",{className:"container my-5",children:e.jsx(N,{variant:"horizontal",imageUrl:g(`storage/${C.file_path}`),link:C.link||"#",label:"Publicidad"})}),M&&e.jsxs("div",{className:"container-fluid px-0 my-4",children:[e.jsx("a",{href:M.link||"#",target:"_blank",rel:"noopener noreferrer",className:"d-block",children:e.jsx("img",{src:g(`storage/${M.file_path}`),alt:"Publicidad",className:"w-100",style:{maxHeight:"250px",objectFit:"cover",display:"block"}})}),e.jsx("p",{className:"text-center text-muted mb-0",style:{fontSize:"0.6rem",letterSpacing:"1px",textTransform:"uppercase"},children:"Publicidad"})]}),e.jsx(Ne,{}),e.jsx(ve,{news:[...r?[r]:[],...l,...c].slice(0,5),onPostClick:b=>w.visit(v("news.show",{slug:b}))})]})};Se.layout=ae;export{Se as default};
