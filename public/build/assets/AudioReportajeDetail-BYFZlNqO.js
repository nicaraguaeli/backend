import{r as l,j as e,H as j}from"./app-Cfkb6Dhy.js";import{c as f,a as d,A as N,C as v,P as y,S as k,F as C,T as S,w as z}from"./MainLayout-CPECed5V.js";import{U as T}from"./user-D4iq6gwM.js";/* empty css            */import"./index-BsxvijQw.js";/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]],$=f("link-2",U);function E({audioReport:t}){const[c,a]=l.useState(!1),[m,h]=l.useState(!1),x=s=>{try{const n=s.replace(" ","T"),r=new Date(n);return isNaN(r.getTime())?s:r.toLocaleDateString("es-ES",{year:"numeric",month:"long",day:"numeric"})}catch{return s}},o=()=>{const s=window.APP_URL||window.location.origin,n=t.url||"",r=n.startsWith("http")?n:`${s}/${n.replace(/^\//,"")}`,u=t.imagen?.startsWith("http")?t.imagen:`${s}/${(t.imagen||"").replace(/^\//,"")}`;window.dispatchEvent(new CustomEvent("abc:play-podcast",{detail:{id:String(t.id),title:t.titulo,autor:t.autor,imageUrl:u,audioUrl:r}})),h(!0)};l.useEffect(()=>{const s=setTimeout(()=>o(),200);return()=>clearTimeout(s)},[]);const i=typeof window<"u"?window.location.href:"",g=()=>{navigator.clipboard.writeText(i),alert("¡Link copiado al portapapeles!"),a(!1)},b=()=>{window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(i)}`,"_blank"),a(!1)},p=()=>{const s=`Escucha: ${t.titulo}`;window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(i)}&text=${encodeURIComponent(s)}`,"_blank"),a(!1)},w=()=>{const s=`Escucha: ${t.titulo} - ${i}`;window.open(`https://wa.me/?text=${encodeURIComponent(s)}`,"_blank"),a(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(j,{title:t.titulo}),e.jsxs("div",{className:"min-vh-100 bg-light",children:[e.jsxs("div",{className:"position-relative overflow-hidden",style:{backgroundColor:"#1a1a2e"},children:[e.jsx("div",{className:"position-absolute top-0 start-0 w-100 h-100",style:{backgroundImage:`url(${d(t.imagen)})`,backgroundSize:"cover",backgroundPosition:"center",filter:"blur(20px)",opacity:.3,transform:"scale(1.1)"}}),e.jsxs("div",{className:"container position-relative py-5",children:[e.jsxs("button",{onClick:()=>window.history.back(),className:"btn btn-light btn-sm rounded-pill mb-4 d-inline-flex align-items-center gap-2",children:[e.jsx(N,{size:16}),"Volver a Audioreportajes"]}),e.jsxs("div",{className:"row g-4 align-items-center",children:[e.jsx("div",{className:"col-lg-5",children:e.jsx("div",{className:"card border-0 shadow-lg rounded-4 overflow-hidden",children:e.jsx("img",{src:d(t.imagen),alt:t.titulo,className:"w-100",style:{aspectRatio:"1/1",objectFit:"cover"}})})}),e.jsxs("div",{className:"col-lg-7 text-white",children:[e.jsx("span",{className:"badge bg-warning text-dark px-3 py-2 mb-3",children:t.categoria}),e.jsx("h1",{className:"display-5 fw-bold mb-3",children:t.titulo}),e.jsx("p",{className:"lead mb-4 text-white-50",children:t.entrada}),e.jsxs("div",{className:"d-flex flex-wrap gap-4 mb-4 text-white-50",children:[t.autor&&e.jsxs("div",{className:"d-flex align-items-center gap-2",children:[e.jsx(T,{size:18}),e.jsx("span",{children:t.autor})]}),e.jsxs("div",{className:"d-flex align-items-center gap-2",children:[e.jsx(v,{size:18}),e.jsx("span",{children:x(t.created_at)})]})]}),e.jsx("div",{className:"card bg-dark bg-opacity-50 border-0 backdrop-blur rounded-4 p-4",children:e.jsxs("div",{className:"d-flex align-items-center gap-4",children:[e.jsx("button",{onClick:o,className:"btn btn-primary rounded-circle d-flex align-items-center justify-content-center flex-shrink-0",style:{width:"64px",height:"64px",background:"linear-gradient(135deg,#667eea,#764ba2)",border:"none",boxShadow:"0 6px 24px rgba(102,126,234,0.5)"},"aria-label":"Reproducir audioreportaje",children:e.jsx(y,{size:28,fill:"white",className:"text-white",style:{marginLeft:"3px"}})}),e.jsx("div",{className:"text-white flex-grow-1",children:m?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"d-flex align-items-center gap-2 mb-1",children:e.jsx("span",{className:"badge bg-danger",style:{fontSize:"0.6rem",animation:"pulse-dot 1.5s ease infinite"},children:"▶ REPRODUCIENDO"})}),e.jsx("div",{className:"text-white-50 small mt-1",children:"Puedes seguir leyendo mientras escuchas"})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fw-bold",style:{fontSize:"0.95rem"},children:"Escuchar audioreportaje"}),e.jsx("div",{className:"text-white-50 small mt-1",children:"Se reproducirá en el player global inferior"})]})})]})}),e.jsxs("div",{className:"position-relative mt-3",children:[e.jsxs("button",{onClick:()=>a(!c),className:"btn btn-light btn-sm rounded-pill d-flex align-items-center gap-2",children:[e.jsx(k,{size:16}),"Compartir"]}),c&&e.jsxs("div",{className:"position-absolute start-0 mt-2 bg-white rounded-3 shadow-lg p-2",style:{minWidth:"200px",zIndex:1e3},children:[e.jsxs("button",{onClick:g,className:"btn btn-sm btn-light w-100 text-start d-flex align-items-center gap-2 mb-1",children:[e.jsx($,{size:16})," Copiar enlace"]}),e.jsxs("button",{onClick:b,className:"btn btn-sm btn-light w-100 text-start d-flex align-items-center gap-2 mb-1",children:[e.jsx(C,{size:16})," Facebook"]}),e.jsxs("button",{onClick:p,className:"btn btn-sm btn-light w-100 text-start d-flex align-items-center gap-2 mb-1",children:[e.jsx(S,{size:16})," Twitter"]}),e.jsxs("button",{onClick:w,className:"btn btn-sm btn-light w-100 text-start d-flex align-items-center gap-2",children:[e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"})}),"WhatsApp"]})]})]})]})]})]})]}),e.jsx("div",{className:"container py-5",children:e.jsx("div",{className:"row justify-content-center",children:e.jsx("div",{className:"col-lg-8",children:e.jsx("div",{className:"card border-0 shadow-sm rounded-4 p-4 p-lg-5",children:e.jsx("div",{className:"article-content",dangerouslySetInnerHTML:{__html:t.contenido}})})})})})]}),e.jsx("style",{children:`
                .backdrop-blur {
                    backdrop-filter: blur(10px);
                }
                
                .article-content {
                    font-size: 1.1rem;
                    line-height: 1.8;
                    color: #333;
                }
                
                .article-content p {
                    margin-bottom: 1.5rem;
                }
                
                .article-content h2,
                .article-content h3 {
                    margin-top: 2rem;
                    margin-bottom: 1rem;
                    font-weight: 700;
                }
                
                .article-content img {
                    max-width: 100%;
                    height: auto;
                    border-radius: 0.5rem;
                    margin: 2rem 0;
                }
                
                .form-range::-webkit-slider-thumb {
                    background: #0d6efd;
                }
                
                .form-range::-moz-range-thumb {
                    background: #0d6efd;
                }
            `})]})}E.layout=z;export{E as default};
