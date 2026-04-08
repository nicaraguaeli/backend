import{r as o,j as e,R as q,L as T,H as F,a as G}from"./app-9mCyccWl.js";import{c as z,a as d,A as O,C as K,M as Q,V as W,b as X,S as Y,X as Z,d as L,e as J,w as ee}from"./MainLayout-CaieNFbc.js";import{s as C}from"./index-BsxvijQw.js";import{A as E,M as te}from"./AdSpace-CoBeL5Nc.js";import{U as S}from"./user-CwQCJfbB.js";import{C as ae,T as ie}from"./tag-B9m3tsZT.js";import{T as se}from"./trending-up-qR2NzbqW.js";/* empty css            *//**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],ne=z("book-open",re);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]],le=z("printer",oe);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],de=z("zoom-in",ce),R=t=>{const i=(t||"").toLowerCase();return i.includes("sucesos")?{bg:"#dc3545",label:"#fff"}:i.includes("deport")?{bg:"#198754",label:"#fff"}:i.includes("econom")||i.includes("empresarial")?{bg:"#0d6efd",label:"#fff"}:i.includes("cultura")||i.includes("arte")?{bg:"#6f42c1",label:"#fff"}:i.includes("salud")?{bg:"#20c997",label:"#fff"}:i.includes("entrete")||i.includes("social")?{bg:"#0dcaf0",label:"#000"}:i.includes("judicial")?{bg:"#6c757d",label:"#fff"}:i.includes("politic")?{bg:"#b02a37",label:"#fff"}:{bg:"#003087",label:"#fff"}},M=({post:t})=>{const i=t.categories?.[0]?.name||"General",r=R(i),n=t.image_path?d(`storage/${t.image_path}`):"https://placehold.co/160x100?text=ABC";return e.jsxs(T,{href:C("news.show",{slug:t.slug}),className:"text-decoration-none d-flex gap-3 align-items-start article-mini-card",style:{padding:"12px 0",borderBottom:"1px solid #f0f0f0"},children:[e.jsx("div",{style:{flexShrink:0,width:88,height:66,borderRadius:8,overflow:"hidden",position:"relative"},children:e.jsx("img",{src:n,alt:t.title,style:{width:"100%",height:"100%",objectFit:"cover"},onError:l=>{l.target.src="https://placehold.co/160x100?text=Sin+Imagen"}})}),e.jsxs("div",{style:{flex:1,minWidth:0},children:[e.jsx("span",{className:"badge text-uppercase mb-1",style:{backgroundColor:r.bg,color:r.label,fontSize:"0.65rem",letterSpacing:"0.5px"},children:i}),e.jsx("p",{className:"mb-1 fw-semibold text-dark lh-sm mini-card-title",children:t.title}),e.jsxs("span",{className:"text-muted d-flex align-items-center gap-1",style:{fontSize:"0.72rem"},children:[e.jsx(L,{size:11}),new Date(t.published_at).toLocaleDateString("es-ES",{day:"numeric",month:"short",year:"numeric"})]})]})]})},$=({post:t,accentColor:i})=>{const r=t.categories?.[0]?.name||"General",n=R(r),l=i||n.bg,p=t.image_path?d(`storage/${t.image_path}`):"https://placehold.co/400x240?text=ABC";return e.jsx(T,{href:C("news.show",{slug:t.slug}),className:"text-decoration-none d-block",style:{color:"inherit"},children:e.jsxs("article",{className:"grid-news-card h-100 d-flex flex-column",style:{position:"relative",borderRadius:12,overflow:"hidden",background:"#fff",boxShadow:"0 2px 12px rgba(0,0,0,0.08)",transition:"transform 0.2s ease, box-shadow 0.2s ease"},children:[e.jsxs("div",{style:{position:"relative",paddingBottom:"60%",overflow:"hidden"},children:[e.jsx("img",{src:p,alt:t.title,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.4s ease"},className:"grid-card-img",onError:g=>{g.target.src="https://placehold.co/400x240?text=Sin+Imagen"}}),e.jsx("span",{className:"badge position-absolute text-uppercase",style:{top:10,left:10,backgroundColor:l,color:n.label,fontSize:"0.68rem",letterSpacing:"0.5px",zIndex:1},children:r}),e.jsxs("span",{className:"position-absolute d-flex align-items-center gap-1 text-white",style:{bottom:8,right:10,fontSize:"0.7rem",textShadow:"0 1px 4px rgba(0,0,0,0.7)"},children:[e.jsx(L,{size:11}),new Date(t.published_at).toLocaleDateString("es-ES",{day:"numeric",month:"short"})]})]}),e.jsxs("div",{className:"p-3 d-flex flex-column flex-grow-1",children:[t.author?.name&&e.jsxs("p",{className:"mb-1 text-muted d-flex align-items-center gap-1",style:{fontSize:"0.72rem"},children:[e.jsx(S,{size:11})," ",t.author.name]}),e.jsx("h3",{className:"fw-bold mb-2 lh-sm flex-grow-1 grid-card-link",style:{fontSize:"0.92rem",color:"#1a1a2e"},children:t.title}),e.jsxs("span",{className:"text-abc-red fw-bold d-inline-flex align-items-center gap-1 mt-auto",style:{fontSize:"0.75rem"},children:["Leer más ",e.jsx(J,{size:13})]})]})]})})},k=({icon:t,title:i,color:r="#003087"})=>e.jsxs("div",{className:"d-flex align-items-center gap-3 mb-4",children:[e.jsx("div",{className:"d-flex align-items-center justify-content-center rounded-circle",style:{width:38,height:38,background:r,flexShrink:0},children:e.jsx(t,{size:18,color:"#fff"})}),e.jsx("h2",{className:"h5 fw-bold mb-0 font-serif",style:{color:"#1a1a2e",letterSpacing:"-0.2px"},children:i}),e.jsx("div",{style:{flex:1,height:2,background:`linear-gradient(90deg, ${r}55, transparent)`}})]});function me({article:t,relatedNews:i=[],mostReadNews:r=[],authorNews:n=[],categoryRecommendations:l=[],banners:p=[],onBack:g}){const j=a=>{const s=p.filter(c=>c.position===a&&c.is_active);return s.length>0?s[Math.floor(Math.random()*s.length)]:null},y=j("article_sidebar"),w=j("article_mid");j("article_bottom");const[I,_]=o.useState(!1),[x,f]=o.useState(!1),[B,xe]=o.useState(18),[v,A]=o.useState(!1),b=o.useCallback(()=>A(!1),[]);o.useEffect(()=>{if(!v)return;const a=s=>{s.key==="Escape"&&b()};return window.addEventListener("keydown",a),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",a),document.body.style.overflow=""}},[v,b]),o.useEffect(()=>{if(!t)return;const a=document.title;document.title=`${t.title} | Radio ABC Stereo`;const s=(c,m,V)=>{let h=document.querySelector(c);if(!h){h=document.createElement("meta");const[H,U]=c.replace("meta[","").replace("]","").split("=");h.setAttribute(H,U.replace(/"/g,"")),document.head.appendChild(h)}h.setAttribute("content",V)};return s('meta[property="og:title"]',"content",t.title),s('meta[property="og:description"]',"content",t.excerpt),s('meta[property="og:image"]',"content",t.image_path?`/storage/${t.image_path}`:""),s('meta[property="og:url"]',"content",window.location.href),s('meta[property="og:type"]',"content","article"),s('meta[name="twitter:title"]',"content",t.title),s('meta[name="twitter:description"]',"content",t.excerpt),s('meta[name="twitter:image"]',"content",t.image_path?`/storage/${t.image_path}`:""),()=>{document.title=a,s('meta[property="og:title"]',"content","Radio ABC Stereo - La voz del norte"),s('meta[property="og:description"]',"content","Noticias de última hora, deportes, farándula y la mejor programación musical."),s('meta[property="og:image"]',"content",d("storage/logotipo.png"))}},[t]),o.useEffect(()=>{if(t?.content&&t.content.includes("twitter-tweet"))if(document.querySelector('script[src="https://platform.twitter.com/widgets.js"]'))window.twttr?.widgets?.load();else{const a=document.createElement("script");a.src="https://platform.twitter.com/widgets.js",a.async=!0,document.body.appendChild(a)}},[t]),o.useEffect(()=>()=>{window.speechSynthesis.cancel()},[]);const D=()=>{if(x){window.speechSynthesis.cancel(),f(!1);return}if(!t)return;window.dispatchEvent(new CustomEvent("abc:stop-audio"));const a=document.createElement("div");a.innerHTML=t.content||"";const s=a.textContent||a.innerText||"",c=`${t.title}. ${t.lead||t.excerpt}. ${s}`,m=new SpeechSynthesisUtterance(c);m.lang="es-ES",m.rate=.9,m.onend=()=>f(!1),m.onerror=()=>f(!1),window.speechSynthesis.speak(m),f(!0)},P=async()=>{if(navigator.share)try{await navigator.share({title:t.title,text:t.excerpt||t.lead||"",url:window.location.href})}catch{}else navigator.clipboard.writeText(window.location.href),_(!0),setTimeout(()=>_(!1),2e3)};if(!t)return e.jsxs("div",{className:"text-center py-5",children:[e.jsx("h3",{children:"Noticia no encontrada"}),e.jsx("button",{onClick:g,className:"btn btn-primary mt-3",children:"Volver al inicio"})]});const N=t.author?.name||"Redacción",u=t.categories?.[0]?.name||"";return e.jsxs("article",{className:"animate-fade-in",children:[e.jsx("div",{className:"mb-4",children:e.jsxs("button",{onClick:g,className:"btn btn-link text-decoration-none text-secondary ps-0 d-flex align-items-center gap-2 hover-red",children:[e.jsx(O,{size:18})," Volver a Portada"]})}),e.jsxs("div",{className:"row g-4",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("header",{className:"mb-4",children:[u&&e.jsx("span",{className:"badge bg-abc-red mb-2 text-uppercase",children:u}),e.jsx("h1",{className:"fw-bold display-5 font-serif text-abc-blue mb-3",children:t.title}),e.jsx("p",{className:"lead fs-4 text-secondary font-serif mb-4 border-start border-4 border-warning ps-3 fst-italic",children:t.lead||t.excerpt}),e.jsxs("div",{className:"d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between border-top border-bottom py-3 mt-4 gap-3",children:[e.jsxs("div",{className:"d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-3 gap-lg-4 text-muted small w-100",children:[e.jsxs("div",{className:"d-flex align-items-center gap-2",children:[e.jsx("div",{className:"bg-light rounded-circle p-2 border",children:e.jsx(S,{size:20,className:"text-abc-blue"})}),e.jsx("div",{children:t.coAuthors&&t.coAuthors.length>0?e.jsxs("span",{className:"d-block",style:{fontSize:"0.85rem"},children:[e.jsxs("span",{className:"fw-semibold text-dark",children:[1+t.coAuthors.length>1?"Autores":"Autor",":"]})," ",e.jsx("span",{className:"text-muted",children:[t.author?.name||"Redacción",...t.coAuthors.map(a=>a.name)].join(", ")})]}):e.jsxs("span",{className:"d-block",style:{fontSize:"0.85rem"},children:[e.jsx("span",{className:"fw-semibold text-dark",children:"Autor:"})," ",e.jsx("span",{className:"text-muted",children:N})]})})]}),e.jsxs("div",{className:"d-flex flex-wrap align-items-center gap-3 gap-md-4 opacity-75 pt-1 pt-sm-0",children:[e.jsxs("div",{className:"d-flex align-items-center gap-1 bg-light rounded px-2 py-1",children:[e.jsx(K,{size:14}),e.jsx("span",{children:new Date(t.published_at).toLocaleDateString("es-ES",{day:"numeric",month:"long",year:"numeric"})})]}),e.jsxs("div",{className:"d-flex align-items-center gap-1 bg-light rounded px-2 py-1",children:[e.jsx(Q,{size:14}),e.jsxs("span",{children:[t.city?`${t.city}, `:"",t.country||"Nicaragua"]})]})]})]}),e.jsxs("div",{className:"d-flex gap-2 align-self-start align-self-md-center pt-2 pt-md-0 flex-wrap",children:[e.jsxs("button",{onClick:D,className:`btn btn-sm rounded-pill px-3 d-flex align-items-center gap-2 fw-bold transition-all ${x?"btn-abc-red text-white":"btn-outline-dark hover-red"}`,title:x?"Detener lectura":"Escuchar noticia",children:[x?e.jsx(ae,{size:18}):e.jsx(W,{size:18}),e.jsx("span",{className:"d-none d-sm-inline",children:x?"Detener":"Escuchar"})]}),e.jsx("div",{className:"vr mx-2 d-none d-md-block"}),e.jsx("button",{onClick:()=>window.print(),className:"btn btn-outline-secondary btn-sm rounded-circle p-2 border-0 bg-light",title:"Imprimir",children:e.jsx(le,{size:18})}),e.jsx("div",{className:"vr mx-2 d-none d-md-block"}),e.jsx("button",{onClick:P,className:"btn btn-outline-dark btn-sm rounded-circle p-2 border-0 bg-light position-relative",title:"Compartir",children:I?e.jsx(X,{size:18,className:"text-success"}):e.jsx(Y,{size:18})})]})]})]}),e.jsxs("div",{className:"mb-5 position-relative article-hero-img-wrap",children:[e.jsxs("button",{className:"article-img-expand-btn",onClick:()=>A(!0),"aria-label":"Ver imagen completa",title:"Ver imagen completa",children:[e.jsx("img",{src:t.image_path?d(`storage/${t.image_path}`):"",alt:t.title,className:"img-fluid rounded shadow-sm w-100 article-hero-img",onError:a=>a.target.src="https://via.placeholder.com/1200x800?text=Sin+Imagen"}),e.jsx("span",{className:"article-img-zoom-icon",children:e.jsx(de,{size:22})})]}),t.caption&&e.jsx("figcaption",{className:"figure-caption mt-2 text-end fst-italic",children:t.caption})]}),v&&q.createPortal(e.jsxs("div",{className:"article-lightbox-overlay",onClick:b,role:"dialog","aria-modal":"true","aria-label":"Imagen ampliada",children:[e.jsx("button",{className:"article-lightbox-close",onClick:b,"aria-label":"Cerrar",children:e.jsx(Z,{size:28})}),e.jsx("img",{src:t.image_path?d(`storage/${t.image_path}`):"",alt:t.title,className:"article-lightbox-img",onClick:a=>a.stopPropagation(),onError:a=>a.target.src="https://via.placeholder.com/1200x800?text=Sin+Imagen"}),t.caption&&e.jsx("p",{className:"article-lightbox-caption",onClick:a=>a.stopPropagation(),children:t.caption})]}),document.body),e.jsx("div",{className:"article-content fs-5 text-dark",style:{lineHeight:"1.8",fontSize:`${B}px`},dangerouslySetInnerHTML:{__html:t.content||""}}),!t.content&&e.jsx("div",{className:"alert alert-warning mt-4",children:"Contenido no disponible para esta noticia."}),e.jsxs("div",{className:"mt-5 pt-3 border-top",children:[e.jsx("span",{className:"fw-bold me-2 text-secondary small",children:"ETIQUETAS:"}),t.tags&&t.tags.map(a=>e.jsxs("a",{href:"#",className:"badge bg-light text-secondary text-decoration-none border me-1",children:["#",a.name]},a.id))]}),w&&e.jsx("div",{className:"my-5",children:e.jsx(E,{variant:"horizontal",imageUrl:d(`storage/${w.file_path}`),link:w.link||"#",label:"Publicidad"})}),i.length>0&&e.jsxs("section",{className:"mt-5 pt-4 border-top","aria-label":"Noticias relacionadas",children:[e.jsx(k,{icon:ne,title:"Noticias Relacionadas",color:"#003087"}),e.jsx("div",{className:"row row-cols-1 row-cols-sm-2 g-3",children:i.map(a=>e.jsx("div",{className:"col",children:e.jsx($,{post:a,accentColor:"#003087"})},a.id))})]}),n.length>0&&e.jsxs("section",{className:"mt-5 pt-4 border-top","aria-label":`Más de ${N}`,children:[e.jsx(k,{icon:S,title:`Más de ${N}`,color:"#8B1A1A"}),e.jsx("div",{className:"author-news-strip",children:n.map(a=>e.jsx(M,{post:a},a.id))})]}),l.length>0&&e.jsxs("section",{className:"mt-5 pt-4 border-top","aria-label":"Recomendaciones",children:[e.jsx(k,{icon:se,title:u?`Más en ${u}`:"También te puede interesar",color:"#C9992A"}),e.jsx("div",{className:"row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3",children:l.map(a=>e.jsx("div",{className:"col",children:e.jsx($,{post:a,accentColor:"#C9992A"})},a.id))})]})]}),e.jsx("aside",{className:"col-lg-3",children:e.jsxs("div",{className:"sticky-top",style:{top:"100px"},children:[y&&e.jsx(E,{variant:"square",imageUrl:d(`storage/${y.file_path}`),link:y.link||"#",label:"Publicidad",className:"mb-4"}),e.jsx(te,{items:r}),i.length>0&&e.jsxs("div",{className:"mt-4 p-3 rounded-3",style:{background:"#f8f9fa",border:"1px solid #e9ecef"},children:[e.jsxs("h3",{className:"h6 fw-bold text-abc-blue mb-3 d-flex align-items-center gap-2",children:[e.jsx(ie,{size:15,className:"text-abc-red"})," Te puede interesar"]}),i.slice(0,3).map(a=>e.jsx(M,{post:a},a.id))]})]})})]}),e.jsx("style",{children:`
        /* Article body content */
        .article-content p { margin-bottom: 1.5rem; }
        .article-content h2, .article-content h3 {
          color: var(--abc-blue);
          font-family: 'Merriweather', serif;
          font-weight: bold;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .article-content ul, .article-content ol { margin-bottom: 1.5rem; }
        .article-content img { max-width: 100%; height: auto; border-radius: 8px; margin: 1rem 0; }
        .article-content blockquote {
          border-left: 4px solid var(--abc-red);
          padding-left: 1rem;
          margin-left: 0;
          font-style: italic;
          color: #555;
          background: #f8f9fa;
          padding: 1.5rem;
        }

        /* Mini card (horizontal) */
        .article-mini-card { transition: background 0.15s; border-radius: 8px; padding-left: 4px !important; padding-right: 4px !important; }
        .article-mini-card:hover { background: #f5f7fa; }
        .article-mini-card:last-child { border-bottom: none !important; }
        .mini-card-title {
          font-size: 0.82rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Grid card hover effects */
        .grid-news-card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,0,0,0.14) !important; }
        .grid-news-card:hover .grid-card-img { transform: scale(1.05); }
        .grid-news-card:hover .grid-card-link { color: var(--abc-blue) !important; }

        /* Author news mini strip */
        .author-news-strip { background: #f8f9fa; border-radius: 12px; padding: 8px 16px; border: 1px solid #e9ecef; }
        .author-news-strip .article-mini-card { border-bottom-color: #e2e8f0 !important; }

        /* Responsive adjustments */
        @media (max-width: 767.98px) {
          .sticky-top { position: static !important; }
          .article-mini-card { padding-top: 10px !important; padding-bottom: 10px !important; }
        }

        /* ── Image expand / lightbox ── */
        .article-hero-img-wrap { position: relative; }
        .article-img-expand-btn {
          display: block;
          width: 100%;
          padding: 0;
          border: none;
          background: transparent;
          cursor: zoom-in;
          position: relative;
          border-radius: 8px;
          overflow: hidden;
        }
        .article-hero-img {
          display: block;
          width: 100%;
          transition: transform 0.35s ease, filter 0.35s ease;
        }
        .article-img-expand-btn:hover .article-hero-img {
          transform: scale(1.02);
          filter: brightness(0.88);
        }
        .article-img-zoom-icon {
          position: absolute;
          bottom: 12px;
          right: 12px;
          background: rgba(0,0,0,0.55);
          backdrop-filter: blur(6px);
          color: #fff;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: scale(0.8);
          transition: opacity 0.25s ease, transform 0.25s ease;
          pointer-events: none;
        }
        .article-img-expand-btn:hover .article-img-zoom-icon {
          opacity: 1;
          transform: scale(1);
        }
        /* Always show zoom icon on touch/mobile */
        @media (hover: none) {
          .article-img-zoom-icon { opacity: 0.8; transform: scale(1); }
          .article-img-expand-btn:active .article-hero-img { filter: brightness(0.88); }
        }

        /* Lightbox overlay */
        .article-lightbox-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(0,0,0,0.92);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          animation: lightbox-in 0.2s ease;
          cursor: zoom-out;
        }
        @keyframes lightbox-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .article-lightbox-img {
          max-width: 100%;
          max-height: 85vh;
          object-fit: contain;
          border-radius: 10px;
          box-shadow: 0 8px 48px rgba(0,0,0,0.7);
          cursor: default;
          animation: lightbox-scale 0.25s ease;
        }
        @keyframes lightbox-scale {
          from { transform: scale(0.93); }
          to   { transform: scale(1); }
        }
        .article-lightbox-caption {
          margin-top: 0.75rem;
          color: rgba(255,255,255,0.75);
          font-size: 0.875rem;
          font-style: italic;
          text-align: center;
          max-width: 700px;
          cursor: default;
        }
        .article-lightbox-close {
          position: fixed;
          top: 1rem;
          right: 1rem;
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.2);
          color: #fff;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s;
          z-index: 10000;
        }
        .article-lightbox-close:hover { background: rgba(255,255,255,0.25); }
      `})]})}const pe=({article:t,relatedNews:i=[],mostReadNews:r=[],authorNews:n=[],categoryRecommendations:l=[],banners:p=[]})=>e.jsxs(e.Fragment,{children:[e.jsx(F,{title:t.title}),e.jsx("div",{className:"container py-5",children:e.jsx(me,{article:t,relatedNews:i,mostReadNews:r,authorNews:n,categoryRecommendations:l,banners:p,onBack:()=>G.visit(C("home"),{replace:!1})})})]});pe.layout=ee;export{pe as default};
