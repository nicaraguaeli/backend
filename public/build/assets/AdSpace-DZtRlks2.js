import{j as e,L as c}from"./app-Co3sZ-ds.js";import{a as d,E as m}from"./MainLayout-mU8mOhut.js";import{s as h}from"./index-BsxvijQw.js";import{T as x}from"./trending-up-C4Jhnzk2.js";function g({items:r,className:s=""}){const a=r||[];return a.length===0?null:e.jsxs("div",{className:`most-read-widget bg-white rounded-lg shadow-sm border ${s}`,children:[e.jsxs("div",{className:"p-3 border-bottom d-flex align-items-center justify-content-between",children:[e.jsxs("h3",{className:"h6 mb-0 fw-bold text-dark font-serif d-flex align-items-center gap-2",children:[e.jsx(x,{size:18,className:"text-abc-red"}),"LO MÁS LEÍDO"]}),e.jsx("span",{className:"badge bg-light text-secondary border",children:"Semana"})]}),e.jsx("div",{children:a.slice(0,5).map((t,o)=>{const i=t.image_path?d(`storage/${t.image_path}`):`https://placehold.co/100x100/eee/ccc?text=${encodeURIComponent(t.categories?.[0]?.name.charAt(0)||"N")}`;return e.jsxs(c,{href:h("news.show",{slug:t.slug}),className:"most-read-item d-flex align-items-center gap-3 text-decoration-none p-3",children:[e.jsx("div",{className:`rank-number rank-${o+1} flex-shrink-0 fw-bold font-serif d-flex align-items-center justify-content-center rounded-circle`,children:o+1}),e.jsx("img",{src:i,alt:t.title,className:"flex-shrink-0 rounded",width:"60",height:"60",style:{objectFit:"cover",background:"#f0f0f0"},onError:n=>{const l=n.target;l.onerror=null,l.src="https://placehold.co/100x100/eee/ccc?text=Error"}}),e.jsxs("div",{className:"flex-grow-1",style:{minWidth:0},children:[e.jsx("h6",{className:"mb-1 text-dark fw-bold line-clamp-2 lh-sm small",children:t.title}),e.jsxs("div",{className:"d-flex align-items-center gap-1 text-muted",style:{fontSize:"0.7rem"},children:[e.jsx(m,{size:11}),`${t.views||0} lecturas`]})]})]},t.id)})}),e.jsx("style",{children:`
        .most-read-widget {
          border-color: #f0f0f0 !important;
        }
        .most-read-item {
          border-bottom: 1px solid #f0f0f0;
          transition: background-color 0.2s ease-in-out;
        }
        .most-read-item:last-child {
          border-bottom: none;
        }
        .most-read-item:hover {
          background-color: #fafafa;
        }
        .most-read-item:hover h6 {
          color: var(--abc-red) !important;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .rank-number {
          width: 32px;
          height: 32px;
          font-size: 1rem;
          color: #fff !important;
          transition: all 0.3s ease;
          background-color: #6c757d;
        }
        .rank-number.rank-1 { background-color: #d90429; }
        .rank-number.rank-2 { background-color: #ef233c; }
        .rank-number.rank-3 { background-color: #f05365; }
        
        .most-read-item:hover .rank-number {
            transform: scale(1.1) rotate(5deg);
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
      `})]})}function j({variant:r="sidebar",imageUrl:s,link:a="#",label:t="Publicidad",className:o=""}){const n=(()=>{switch(r){case"horizontal":return{minHeight:"120px",width:"100%"};case"square":return{minHeight:"250px",width:"100%"};case"sidebar":default:return{minHeight:"300px",width:"100%"}}})();return e.jsxs("div",{className:`ad-space-container ${o} mb-4`,children:[e.jsx("span",{className:"d-block text-end text-muted text-uppercase mb-1",style:{fontSize:"0.6rem",letterSpacing:"1px"},children:t}),s?e.jsx("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:"d-block shadow-sm hover-opacity",children:e.jsx("img",{src:s,alt:"Anuncio",className:"w-100 h-100 object-fit-cover rounded",style:{...n,objectFit:r==="horizontal"?"cover":"contain",backgroundColor:"#fff"}})}):e.jsx("a",{href:"/contacto-publicidad",className:"d-block text-decoration-none",children:e.jsxs("div",{className:"rounded overflow-hidden position-relative d-flex flex-column align-items-center justify-content-center text-center p-4 shadow-sm group-hover",style:{...n,background:"linear-gradient(135deg, #212529 0%, #343a40 100%)",border:"1px solid rgba(255,255,255,0.1)"},children:[e.jsx("div",{className:"position-absolute top-0 start-0 w-100 h-100 opacity-10",style:{backgroundImage:"radial-gradient(circle, #ffffff 1px, transparent 1px)",backgroundSize:"10px 10px"}}),e.jsxs("div",{className:"position-relative z-2",children:[e.jsx("h5",{className:"text-white fw-bold mb-2 text-uppercase",children:"Espacio Disponible"}),e.jsx("p",{className:"text-white-50 small mb-3",children:"Anuncia tu marca aquí y llega a miles de personas."}),e.jsx("span",{className:"btn btn-light btn-sm fw-bold text-abc-blue rounded-pill px-3 shadow",children:"Contáctanos"})]}),e.jsx("div",{className:"position-absolute bottom-0 end-0 p-3 opacity-25",children:e.jsxs("svg",{width:"60",height:"60",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),e.jsx("line",{x1:"8",y1:"12",x2:"16",y2:"12"})]})})]})}),e.jsx("style",{children:`
        .hover-opacity { transition: opacity 0.2s; }
        .hover-opacity:hover { opacity: 0.9; }
        
        .group-hover { transition: transform 0.3s; }
        .group-hover:hover { transform: translateY(-3px); }
        .group-hover:hover .btn { transform: scale(1.05); }
      `})]})}export{j as A,g as M};
