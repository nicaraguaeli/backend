import{r,j as e,L as M,R as F,H as q,a as G}from"./app-CMxdqxAU.js";import{c as I,a as w,A as O,C as Z,M as W,V as K,b as Q,S as J,X as ee,d as H,e as te,w as ae}from"./MainLayout-CWjDQeLT.js";import{s as z}from"./index-BsxvijQw.js";import{A as V,M as ne}from"./AdSpace-DIi9l8O-.js";import{U as L}from"./user-fWC4TVzE.js";import{C as se,T as ie}from"./tag-wVA8AKq4.js";import{A as oe}from"./arrow-right-BWmH358E.js";import{T as re}from"./trending-up-BBPwR-xR.js";/* empty css            *//**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],ce=I("book-open",le);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]],me=I("printer",de);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],he=I("zoom-in",pe),Y=t=>{const s=(t||"").toLowerCase();return s.includes("sucesos")?{bg:"#dc3545",label:"#fff"}:s.includes("deport")?{bg:"#198754",label:"#fff"}:s.includes("econom")||s.includes("empresarial")?{bg:"#0d6efd",label:"#fff"}:s.includes("cultura")||s.includes("arte")?{bg:"#6f42c1",label:"#fff"}:s.includes("salud")?{bg:"#20c997",label:"#fff"}:s.includes("entrete")||s.includes("social")?{bg:"#0dcaf0",label:"#000"}:s.includes("judicial")?{bg:"#6c757d",label:"#fff"}:s.includes("politic")?{bg:"#b02a37",label:"#fff"}:{bg:"#003087",label:"#fff"}},U=({post:t})=>{const s=t.categories?.[0]?.name||"General",d=Y(s),l=t.image_path?w(`storage/${t.image_path}`):"https://placehold.co/160x100?text=ABC";return e.jsxs(M,{href:z("news.show",{slug:t.slug}),className:"text-decoration-none d-flex gap-3 align-items-start article-mini-card",style:{padding:"12px 0",borderBottom:"1px solid #f0f0f0"},children:[e.jsx("div",{style:{flexShrink:0,width:88,height:66,borderRadius:8,overflow:"hidden",position:"relative"},children:e.jsx("img",{src:l,alt:t.title,style:{width:"100%",height:"100%",objectFit:"cover"},onError:i=>{i.target.src="https://placehold.co/160x100?text=Sin+Imagen"}})}),e.jsxs("div",{style:{flex:1,minWidth:0},children:[e.jsx("span",{className:"badge text-uppercase mb-1",style:{backgroundColor:d.bg,color:d.label,fontSize:"0.65rem",letterSpacing:"0.5px"},children:s}),e.jsx("p",{className:"mb-1 fw-semibold text-dark lh-sm mini-card-title",children:t.title}),e.jsxs("span",{className:"text-muted d-flex align-items-center gap-1",style:{fontSize:"0.72rem"},children:[e.jsx(H,{size:11}),new Date(t.published_at).toLocaleDateString("es-ES",{day:"numeric",month:"short",year:"numeric"})]})]})]})},X=({post:t,accentColor:s})=>{const d=t.categories?.[0]?.name||"General",l=Y(d),i=s||l.bg,m=t.image_path?w(`storage/${t.image_path}`):"https://placehold.co/400x240?text=ABC";return e.jsx(M,{href:z("news.show",{slug:t.slug}),className:"text-decoration-none d-block",style:{color:"inherit"},children:e.jsxs("article",{className:"grid-news-card h-100 d-flex flex-column",style:{position:"relative",borderRadius:12,overflow:"hidden",background:"#fff",boxShadow:"0 2px 12px rgba(0,0,0,0.08)",transition:"transform 0.2s ease, box-shadow 0.2s ease"},children:[e.jsxs("div",{style:{position:"relative",paddingBottom:"60%",overflow:"hidden"},children:[e.jsx("img",{src:m,alt:t.title,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.4s ease"},className:"grid-card-img",onError:h=>{h.target.src="https://placehold.co/400x240?text=Sin+Imagen"}}),e.jsx("span",{className:"badge position-absolute text-uppercase",style:{top:10,left:10,backgroundColor:i,color:l.label,fontSize:"0.68rem",letterSpacing:"0.5px",zIndex:1},children:d}),e.jsxs("span",{className:"position-absolute d-flex align-items-center gap-1 text-white",style:{bottom:8,right:10,fontSize:"0.7rem",textShadow:"0 1px 4px rgba(0,0,0,0.7)"},children:[e.jsx(H,{size:11}),new Date(t.published_at).toLocaleDateString("es-ES",{day:"numeric",month:"short"})]})]}),e.jsxs("div",{className:"p-3 d-flex flex-column flex-grow-1",children:[t.author?.name&&e.jsxs("p",{className:"mb-1 text-muted d-flex align-items-center gap-1",style:{fontSize:"0.72rem"},children:[e.jsx(L,{size:11})," ",t.author.name]}),e.jsx("h3",{className:"fw-bold mb-2 lh-sm flex-grow-1 grid-card-link",style:{fontSize:"0.92rem",color:"#1a1a2e"},children:t.title}),e.jsxs("span",{className:"text-abc-red fw-bold d-inline-flex align-items-center gap-1 mt-auto",style:{fontSize:"0.75rem"},children:["Leer más ",e.jsx(te,{size:13})]})]})]})})},D=({icon:t,title:s,color:d="#003087",linkHref:l})=>e.jsxs("div",{className:"d-flex align-items-center gap-3 mb-4",children:[e.jsx("div",{className:"d-flex align-items-center justify-content-center rounded-circle",style:{width:38,height:38,background:d,flexShrink:0},children:e.jsx(t,{size:18,color:"#fff"})}),l?e.jsx(M,{href:l,className:"text-decoration-none h5 fw-bold mb-0 font-serif section-header-link",style:{color:"#1a1a2e",letterSpacing:"-0.2px"},children:s}):e.jsx("h2",{className:"h5 fw-bold mb-0 font-serif",style:{color:"#1a1a2e",letterSpacing:"-0.2px"},children:s}),e.jsx("div",{style:{flex:1,height:2,background:`linear-gradient(90deg, ${d}55, transparent)`}})]});function xe({src:t,alt:s,caption:d,onClose:l}){const[i,m]=r.useState(1),[h,x]=r.useState({x:0,y:0}),[b,v]=r.useState(!1),y=r.useRef({sx:0,sy:0,px:0,py:0}),S=r.useRef(0),p=r.useRef(0);r.useEffect(()=>{document.body.style.overflow="hidden";const a=c=>{c.key==="Escape"&&l()};return window.addEventListener("keydown",a),()=>{document.body.style.overflow="",window.removeEventListener("keydown",a)}},[l]);const g=r.useCallback(()=>{m(1),x({x:0,y:0})},[]),A=()=>{i<=1?l():g()},B=a=>{a.stopPropagation(),i>1?g():m(2.5)},E=a=>{if(a.changedTouches.length===1){const c=Date.now();c-S.current<300&&(a.preventDefault(),i>1?g():m(2.5)),S.current=c}},N=r.useCallback(a=>{a.preventDefault(),m(c=>{const f=Math.min(5,Math.max(1,c+(a.deltaY<0?.3:-.3)));return f<=1&&x({x:0,y:0}),f})},[]),C=r.useRef(null);r.useEffect(()=>{const a=C.current;if(a)return a.addEventListener("wheel",N,{passive:!1}),()=>a.removeEventListener("wheel",N)},[N]);const _=a=>{i<=1||(a.preventDefault(),v(!0),y.current={sx:a.clientX,sy:a.clientY,px:h.x,py:h.y})},R=a=>{b&&x({x:y.current.px+(a.clientX-y.current.sx),y:y.current.py+(a.clientY-y.current.sy)})},j=()=>v(!1),k=a=>{if(a.touches.length===2){const c=a.touches[0].clientX-a.touches[1].clientX,f=a.touches[0].clientY-a.touches[1].clientY;p.current=Math.hypot(c,f)}},n=a=>{if(a.touches.length===2){a.preventDefault();const c=a.touches[0].clientX-a.touches[1].clientX,f=a.touches[0].clientY-a.touches[1].clientY,u=Math.hypot(c,f);if(p.current>0){const T=u/p.current;m($=>{const P=Math.min(5,Math.max(1,$*T));return P<=1&&x({x:0,y:0}),P})}p.current=u}},o={maxWidth:"90vw",maxHeight:"85vh",objectFit:"contain",userSelect:"none",touchAction:"none",display:"block",transform:`translate(${h.x}px, ${h.y}px) scale(${i})`,transformOrigin:"center center",transition:b?"none":"transform 0.22s ease",cursor:i>1?b?"grabbing":"grab":"zoom-in",borderRadius:i<=1?10:0,boxShadow:i<=1?"0 12px 60px rgba(0,0,0,0.8)":"none"};return F.createPortal(e.jsxs("div",{ref:C,className:"article-lightbox-overlay",onClick:A,onMouseMove:R,onMouseUp:j,onMouseLeave:j,role:"dialog","aria-modal":"true","aria-label":"Imagen ampliada",children:[e.jsx("button",{className:"article-lightbox-close",onClick:a=>{a.stopPropagation(),l()},"aria-label":"Cerrar",children:e.jsx(ee,{size:26})}),i>1&&e.jsxs("div",{className:"article-lightbox-zoom-badge",children:[Math.round(i*100),"%"]}),e.jsx("img",{src:t,alt:s,style:o,onClick:a=>a.stopPropagation(),onDoubleClick:B,onMouseDown:_,onTouchStart:k,onTouchMove:n,onTouchEnd:E,onError:a=>{a.target.src="https://via.placeholder.com/1200x800?text=Sin+Imagen"},draggable:!1}),d&&i<=1&&e.jsx("p",{className:"article-lightbox-caption",onClick:a=>a.stopPropagation(),children:d})]}),document.body)}function ge({article:t,relatedNews:s=[],mostReadNews:d=[],authorNews:l=[],categoryRecommendations:i=[],banners:m=[],onBack:h}){const x=n=>{const o=m.filter(a=>a.position===n&&a.is_active);return o.length>0?o[Math.floor(Math.random()*o.length)]:null},b=x("article_sidebar"),v=x("article_mid");x("article_bottom");const[y,S]=r.useState(!1),[p,g]=r.useState(!1),[A,B]=r.useState(18),[E,N]=r.useState(!1),C=r.useCallback(()=>N(!1),[]);r.useEffect(()=>{if(!t)return;const n=document.title;document.title=`${t.title} | Radio ABC Stereo`;const o=(a,c,f)=>{let u=document.querySelector(a);if(!u){u=document.createElement("meta");const[T,$]=a.replace("meta[","").replace("]","").split("=");u.setAttribute(T,$.replace(/"/g,"")),document.head.appendChild(u)}u.setAttribute("content",f)};return o('meta[property="og:title"]',"content",t.title),o('meta[property="og:description"]',"content",t.excerpt),o('meta[property="og:image"]',"content",t.image_path?`/storage/${t.image_path}`:""),o('meta[property="og:url"]',"content",window.location.href),o('meta[property="og:type"]',"content","article"),o('meta[name="twitter:title"]',"content",t.title),o('meta[name="twitter:description"]',"content",t.excerpt),o('meta[name="twitter:image"]',"content",t.image_path?`/storage/${t.image_path}`:""),()=>{document.title=n,o('meta[property="og:title"]',"content","Radio ABC Stereo - La voz del norte"),o('meta[property="og:description"]',"content","Noticias de última hora, deportes, farándula y la mejor programación musical."),o('meta[property="og:image"]',"content",w("storage/logotipo.png"))}},[t]),r.useEffect(()=>{if(t?.content&&t.content.includes("twitter-tweet"))if(document.querySelector('script[src="https://platform.twitter.com/widgets.js"]'))window.twttr?.widgets?.load();else{const n=document.createElement("script");n.src="https://platform.twitter.com/widgets.js",n.async=!0,document.body.appendChild(n)}},[t]),r.useEffect(()=>()=>{window.speechSynthesis.cancel()},[]);const _=()=>{if(p){window.speechSynthesis.cancel(),g(!1);return}if(!t)return;window.dispatchEvent(new CustomEvent("abc:stop-audio"));const n=document.createElement("div");n.innerHTML=t.content||"";const o=n.textContent||n.innerText||"",a=`${t.title}. ${t.lead||t.excerpt}. ${o}`,c=new SpeechSynthesisUtterance(a);c.lang="es-ES",c.rate=.9,c.onend=()=>g(!1),c.onerror=()=>g(!1),window.speechSynthesis.speak(c),g(!0)},R=async()=>{if(navigator.share)try{await navigator.share({title:t.title,text:t.excerpt||t.lead||"",url:window.location.href})}catch{}else navigator.clipboard.writeText(window.location.href),S(!0),setTimeout(()=>S(!1),2e3)};if(!t)return e.jsxs("div",{className:"text-center py-5",children:[e.jsx("h3",{children:"Noticia no encontrada"}),e.jsx("button",{onClick:h,className:"btn btn-primary mt-3",children:"Volver al inicio"})]});const j=t.author?.name||"Redacción",k=t.categories?.[0]?.name||"";return e.jsxs("article",{className:"animate-fade-in",children:[e.jsx("div",{className:"mb-4",children:e.jsxs("button",{onClick:h,className:"btn btn-link text-decoration-none text-secondary ps-0 d-flex align-items-center gap-2 hover-red",children:[e.jsx(O,{size:18})," Volver a Portada"]})}),e.jsxs("div",{className:"row g-4",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("header",{className:"mb-4",children:[k&&e.jsx("span",{className:"badge bg-abc-red mb-2 text-uppercase",children:k}),e.jsx("h1",{className:"fw-bold display-5 font-serif text-abc-blue mb-3",children:t.title}),e.jsx("p",{className:"lead fs-4 text-secondary font-serif mb-4 border-start border-4 border-warning ps-3 fst-italic",children:t.lead||t.excerpt}),e.jsxs("div",{className:"d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between border-top border-bottom py-3 mt-4 gap-3",children:[e.jsxs("div",{className:"d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-3 gap-lg-4 text-muted small w-100",children:[e.jsxs("div",{className:"d-flex align-items-center gap-2",children:[e.jsx("div",{className:"bg-light rounded-circle p-2 border",children:e.jsx(L,{size:20,className:"text-abc-blue"})}),e.jsx("div",{children:t.coAuthors&&t.coAuthors.length>0?e.jsxs("span",{className:"d-block",style:{fontSize:"0.85rem"},children:[e.jsxs("span",{className:"fw-semibold text-dark",children:[1+t.coAuthors.length>1?"Autores":"Autor",":"]})," ",e.jsx("span",{className:"text-muted",children:[t.author?.name||"Redacción",...t.coAuthors.map(n=>n.name)].join(", ")})]}):e.jsxs("span",{className:"d-block",style:{fontSize:"0.85rem"},children:[e.jsx("span",{className:"fw-semibold text-dark",children:"Autor:"})," ",e.jsx("span",{className:"text-muted",children:j})]})})]}),e.jsxs("div",{className:"d-flex flex-wrap align-items-center gap-3 gap-md-4 opacity-75 pt-1 pt-sm-0",children:[e.jsxs("div",{className:"d-flex align-items-center gap-1 bg-light rounded px-2 py-1",children:[e.jsx(Z,{size:14}),e.jsx("span",{children:new Date(t.published_at).toLocaleDateString("es-ES",{day:"numeric",month:"long",year:"numeric"})})]}),e.jsxs("div",{className:"d-flex align-items-center gap-1 bg-light rounded px-2 py-1",children:[e.jsx(W,{size:14}),e.jsxs("span",{children:[t.city?`${t.city}, `:"",t.country||"Nicaragua"]})]})]})]}),e.jsxs("div",{className:"d-flex gap-2 align-self-start align-self-md-center pt-2 pt-md-0 flex-wrap",children:[e.jsxs("button",{onClick:_,className:`btn btn-sm rounded-pill px-3 d-flex align-items-center gap-2 fw-bold transition-all ${p?"btn-abc-red text-white":"btn-outline-dark hover-red"}`,title:p?"Detener lectura":"Escuchar noticia",children:[p?e.jsx(se,{size:18}):e.jsx(K,{size:18}),e.jsx("span",{className:"d-none d-sm-inline",children:p?"Detener":"Escuchar"})]}),e.jsx("div",{className:"vr mx-2 d-none d-md-block"}),e.jsx("button",{onClick:()=>window.print(),className:"btn btn-outline-secondary btn-sm rounded-circle p-2 border-0 bg-light",title:"Imprimir",children:e.jsx(me,{size:18})}),e.jsx("div",{className:"vr mx-2 d-none d-md-block"}),e.jsx("button",{onClick:R,className:"btn btn-outline-dark btn-sm rounded-circle p-2 border-0 bg-light position-relative",title:"Compartir",children:y?e.jsx(Q,{size:18,className:"text-success"}):e.jsx(J,{size:18})})]})]})]}),e.jsxs("div",{className:"mb-5 position-relative article-hero-img-wrap",children:[e.jsxs("button",{className:"article-img-expand-btn",onClick:()=>N(!0),"aria-label":"Ver imagen completa",title:"Ver imagen completa",children:[e.jsx("img",{src:t.image_path?w(`storage/${t.image_path}`):"",alt:t.title,className:"img-fluid rounded shadow-sm w-100 article-hero-img",onError:n=>n.target.src="https://via.placeholder.com/1200x800?text=Sin+Imagen"}),e.jsx("span",{className:"article-img-zoom-icon",children:e.jsx(he,{size:22})})]}),t.caption&&e.jsx("figcaption",{className:"figure-caption mt-2 text-end fst-italic",children:t.caption})]}),E&&e.jsx(xe,{src:t.image_path?w(`storage/${t.image_path}`):"",alt:t.title,caption:t.caption||void 0,onClose:C}),e.jsx("div",{className:"article-content fs-5 text-dark",style:{lineHeight:"1.8",fontSize:`${A}px`},dangerouslySetInnerHTML:{__html:t.content||""}}),!t.content&&e.jsx("div",{className:"alert alert-warning mt-4",children:"Contenido no disponible para esta noticia."}),e.jsxs("div",{className:"mt-5 pt-3 border-top",children:[e.jsx("span",{className:"fw-bold me-2 text-secondary small",children:"ETIQUETAS:"}),t.tags&&t.tags.map(n=>e.jsxs("a",{href:"#",className:"badge bg-light text-secondary text-decoration-none border me-1",children:["#",n.name]},n.id))]}),v&&e.jsx("div",{className:"my-5",children:e.jsx(V,{variant:"horizontal",imageUrl:w(`storage/${v.file_path}`),link:v.link||"#",label:"Publicidad"})}),s.length>0&&e.jsxs("section",{className:"mt-5 pt-4 border-top","aria-label":"Noticias relacionadas",children:[e.jsx(D,{icon:ce,title:"Noticias Relacionadas",color:"#003087"}),e.jsx("div",{className:"row row-cols-1 row-cols-sm-2 g-3",children:s.map(n=>e.jsx("div",{className:"col",children:e.jsx(X,{post:n,accentColor:"#003087"})},n.id))})]}),l.length>0&&t.author&&e.jsxs("section",{className:"mt-5 pt-4 border-top","aria-label":`Más de ${j}`,children:[e.jsx(D,{icon:L,title:`Más de ${j}`,color:"#8B1A1A",linkHref:z("author.news",{id:t.author.id})}),e.jsx("div",{className:"author-news-strip",children:l.map(n=>e.jsx(U,{post:n},n.id))}),e.jsx("div",{className:"mt-3 text-end",children:e.jsxs(M,{href:z("author.news",{id:t.author.id}),className:"d-inline-flex align-items-center gap-2 fw-bold text-decoration-none",style:{color:"#8B1A1A",fontSize:"0.88rem"},children:["Ver todas las notas de ",j,e.jsx(oe,{size:15})]})})]}),i.length>0&&e.jsxs("section",{className:"mt-5 pt-4 border-top","aria-label":"Recomendaciones",children:[e.jsx(D,{icon:re,title:k?`Más en ${k}`:"También te puede interesar",color:"#C9992A"}),e.jsx("div",{className:"row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3",children:i.map(n=>e.jsx("div",{className:"col",children:e.jsx(X,{post:n,accentColor:"#C9992A"})},n.id))})]})]}),e.jsx("aside",{className:"col-lg-3",children:e.jsxs("div",{className:"sticky-top",style:{top:"100px"},children:[b&&e.jsx(V,{variant:"square",imageUrl:w(`storage/${b.file_path}`),link:b.link||"#",label:"Publicidad",className:"mb-4"}),e.jsx(ne,{items:d}),s.length>0&&e.jsxs("div",{className:"mt-4 p-3 rounded-3",style:{background:"#f8f9fa",border:"1px solid #e9ecef"},children:[e.jsxs("h3",{className:"h6 fw-bold text-abc-blue mb-3 d-flex align-items-center gap-2",children:[e.jsx(ie,{size:15,className:"text-abc-red"})," Te puede interesar"]}),s.slice(0,3).map(n=>e.jsx(U,{post:n},n.id))]})]})})]}),e.jsx("style",{children:`
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

        /* Section header link hover */
        .section-header-link:hover { color: #8B1A1A !important; text-decoration: underline !important; }

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

        /* ── Lightbox with Zoom ── */
        .article-lightbox-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(0,0,0,0.93);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          animation: lightbox-fadein 0.18s ease;
          cursor: default;
          user-select: none;
        }
        @keyframes lightbox-fadein {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .article-lightbox-close {
          position: fixed;
          top: 0.875rem;
          right: 0.875rem;
          background: rgba(255,255,255,0.13);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.22);
          color: #fff;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          z-index: 10001;
        }
        .article-lightbox-close:hover {
          background: rgba(255,255,255,0.26);
          transform: scale(1.1);
        }
        .article-lightbox-zoom-badge {
          position: fixed;
          bottom: 1.25rem;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(255,255,255,0.13);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2);
          color: rgba(255,255,255,0.9);
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.3px;
          padding: 0.35rem 1rem;
          border-radius: 50px;
          pointer-events: none;
          z-index: 10001;
          white-space: nowrap;
        }
        .article-lightbox-caption {
          position: fixed;
          bottom: 3.5rem;
          left: 50%;
          transform: translateX(-50%);
          color: rgba(255,255,255,0.75);
          font-size: 0.85rem;
          font-style: italic;
          text-align: center;
          max-width: min(600px, 90vw);
          pointer-events: none;
          z-index: 10001;
        }
      `})]})}const fe=({article:t,relatedNews:s=[],mostReadNews:d=[],authorNews:l=[],categoryRecommendations:i=[],banners:m=[]})=>e.jsxs(e.Fragment,{children:[e.jsx(q,{title:t.title}),e.jsx("div",{className:"container py-5",children:e.jsx(ge,{article:t,relatedNews:s,mostReadNews:d,authorNews:l,categoryRecommendations:i,banners:m,onBack:()=>G.visit(z("home"),{replace:!1})})})]});fe.layout=ae;export{fe as default};
