import{j as t,L as o}from"./app-D5SARNJD.js";import{a as p,d as f}from"./MainLayout-BItNDyj8.js";import{s}from"./index-BsxvijQw.js";import{A as m}from"./arrow-right-8t8aymCn.js";const b=i=>{if(!i)return"bg-abc-blue text-white";const e=i.toLowerCase();return e.includes("sucesos")?"bg-abc-red text-white":e.includes("judiciales")?"bg-secondary text-white":e.includes("sociales")||e.includes("entretenimiento")?"bg-info text-dark":e.includes("arte")||e.includes("cultura")?"bg-abc-indigo text-white":e.includes("empresarial")||e.includes("economía")?"bg-abc-blue text-white":e.includes("emprendim")?"bg-abc-orange text-white":e.includes("deport")?"bg-success text-white":e.includes("salud")?"bg-abc-green text-white":e.includes("historia")?"bg-primary text-white":e.includes("entre nos")?"bg-warning text-dark":e.includes("nacional")||e.includes("internacional")?"bg-dark text-white":"bg-abc-blue text-white"},w=i=>{if(!i)return"#1a73e8";const e=i.toLowerCase();return e.includes("sucesos")?"#d32f2f":e.includes("judiciales")?"#555":e.includes("sociales")||e.includes("entretenimiento")?"#0288d1":e.includes("arte")||e.includes("cultura")?"#5c35cc":e.includes("empresarial")||e.includes("economía")?"#1a73e8":e.includes("emprendim")?"#e65100":e.includes("deport")?"#2e7d32":e.includes("salud")?"#00897b":e.includes("historia")?"#1565c0":e.includes("entre nos")?"#f9a825":e.includes("nacional")||e.includes("internacional")?"#212121":"#1a73e8"};function N({posts:i,columns:e,compact:g=!1}){if(!i||i.length===0)return t.jsx("div",{className:"text-center text-muted py-5",style:{fontSize:"0.92rem",letterSpacing:"0.3px"},children:"No hay publicaciones recientes."});const x=`row-cols-1 row-cols-md-${e||2}`;return t.jsxs(t.Fragment,{children:[t.jsx("style",{children:`
        /* ─── Clamp ─────────────────────────────────── */
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* ─── Card base ──────────────────────────────── */
        .pg-card {
          border-radius: 2px !important;
          overflow: hidden;
          transition: box-shadow 0.28s ease, transform 0.28s ease;
          will-change: box-shadow, transform;
          background: #fff;
        }
        @media (hover: hover) {
          .pg-card:hover {
            box-shadow: 0 10px 32px rgba(0,0,0,0.11) !important;
            transform: translateY(-3px);
          }
          .pg-card:hover .pg-img img {
            transform: scale(1.04);
          }
        }
        /* Feedback táctil en touch */
        @media (hover: none) {
          .pg-card:active {
            transform: scale(0.982);
            box-shadow: 0 3px 12px rgba(0,0,0,0.1) !important;
            transition: transform 0.1s ease;
          }
        }

        /* ─── Imagen full (más alta) ───────────────────── */
        .pg-img {
          position: relative;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: #ebebeb;
        }
        .pg-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.38s ease;
          display: block;
        }
        /* Gradiente sutil sobre la imagen */
        .pg-img::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.01) 40%,
            rgba(0,0,0,0.38) 100%
          );
          pointer-events: none;
        }

        /* ─── Badge categoría (pegado borde izquierdo) ─── */
        .pg-category {
          position: absolute;
          bottom: 14px;
          left: 0;
          z-index: 3;
          padding: 4px 10px 4px 8px;
          border-radius: 0 4px 4px 0; /* solo lado derecho redondeado */
          font-size: clamp(0.58rem, 2.2vw, 0.68rem);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          line-height: 1.5;
          white-space: nowrap;
          box-shadow: 2px 1px 5px rgba(0,0,0,0.22);
        }

        /* ─── Badge fecha (inferior derecha) ─────────── */
        .pg-date {
          position: absolute;
          bottom: 10px;
          right: 10px;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 4px;
          background: rgba(0,0,0,0.42);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          color: #fff;
          font-size: 0.68rem;
          border-radius: 4px;
          padding: 3px 9px;
          letter-spacing: 0.2px;
        }

        /* ─── Card body (full) ───────────────────────── */
        .pg-body {
          padding: 14px 16px 16px !important;
        }
        @media (min-width: 768px) {
          .pg-body {
            padding: 18px 20px 20px !important;
          }
        }

        /* ─── Autor ──────────────────────────────────── */
        .pg-author {
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          margin-bottom: 6px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .pg-author::before {
          content: '';
          display: inline-block;
          width: 18px;
          height: 2px;
          background: currentColor;
          border-radius: 2px;
          flex-shrink: 0;
        }

        /* ─── Título ─────────────────────────────────── */
        .pg-title {
          font-size: clamp(0.9rem, 3vw, 1.08rem);
          line-height: 1.35;
          margin-bottom: 8px;
        }
        .pg-title a {
          text-decoration: none;
          color: inherit;
          transition: color 0.18s ease;
        }
        @media (hover: hover) {
          .pg-title a:hover {
            color: var(--abc-blue, #1a73e8);
          }
        }

        /* ─── Excerpt ────────────────────────────────── */
        .pg-excerpt {
          font-size: 0.83rem;
          line-height: 1.55;
          color: #6c757d;
          margin-bottom: 0;
        }

        /* ─── "Leer Noticia" link con animación ──────── */
        .pg-read-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.76rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          text-decoration: none;
          min-height: 44px;          /* área táctil mínima */
          padding: 0 2px;
          position: relative;
        }
        .pg-read-link::after {
          content: '';
          position: absolute;
          bottom: 10px;
          left: 2px;
          right: 2px;
          height: 1.5px;
          background: currentColor;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.22s ease;
          border-radius: 2px;
        }
        @media (hover: hover) {
          .pg-read-link:hover::after {
            transform: scaleX(1);
          }
          .pg-read-link:hover svg {
            transform: translateX(3px);
          }
        }
        .pg-read-link svg {
          transition: transform 0.22s ease;
          flex-shrink: 0;
        }

        /* ─── Modo compact ───────────────────────────── */
        .pg-compact-card {
          border-radius: 2px !important;
          overflow: hidden;
          transition: box-shadow 0.25s ease, transform 0.25s ease;
          will-change: box-shadow, transform;
        }
        @media (hover: hover) {
          .pg-compact-card:hover {
            box-shadow: 0 6px 20px rgba(0,0,0,0.1) !important;
            transform: translateY(-2px);
          }
          .pg-compact-card:hover .pg-img-compact img {
            transform: scale(1.06);
          }
        }
        @media (hover: none) {
          .pg-compact-card:active {
            transform: scale(0.982);
            transition: transform 0.1s ease;
          }
        }

        /* Imagen cuadrada compact */
        .pg-img-compact {
          flex-shrink: 0;
          width: 110px;
          min-width: 110px;
          overflow: hidden;
          background: #ebebeb;
        }
        .pg-img-compact img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.35s ease;
          display: block;
        }

        /* Body compact */
        .pg-body-compact {
          padding: 10px 12px !important;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .pg-title-compact {
          font-size: clamp(0.8rem, 2.8vw, 0.92rem);
          line-height: 1.3;
          margin-bottom: 5px;
          /* clamp en 3 líneas */
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .pg-title-compact a {
          text-decoration: none;
          color: inherit;
        }

        /* layout horizontal en móvil */
        @media (max-width: 767.98px) {
          .pg-compact-inner {
            flex-direction: row !important;
          }
          .pg-img-compact {
            width: 100px;
            min-width: 100px;
          }
        }
        @media (min-width: 768px) {
          .pg-compact-inner {
            flex-direction: column !important;
          }
          .pg-img-compact {
            width: 100%;
            aspect-ratio: 16 / 9;
          }
        }

        /* Divisor inferior en compact body en móvil */
        @media (max-width: 767.98px) {
          .pg-compact-card + .pg-compact-card {
            border-top: 1px solid #f0f0f0;
          }
        }
      `}),t.jsx("div",{className:`row ${x} g-3 g-md-4`,children:i.map(r=>{const n=r.categories&&r.categories.length>0?r.categories[0].name:"General",h=r.author?.name||"Redacción",d=r.image_path?p(`storage/${r.image_path}`):p("img/placeholder.jpg"),c=w(n),u=new Date(r.published_at).toLocaleDateString("es-ES",{day:"numeric",month:"short",year:"numeric"});return g?t.jsx("div",{className:"col",children:t.jsx("article",{className:"pg-compact-card card h-100 border-0 shadow-sm bg-white",style:{borderLeft:`3px solid ${c}`},children:t.jsxs("div",{className:"d-flex pg-compact-inner h-100",children:[t.jsx("div",{className:"pg-img-compact",children:t.jsx("img",{src:d,alt:r.title,loading:"lazy",onError:l=>{const a=l.target;a.onerror=null,a.src="https://placehold.co/400x400?text=ABC"}})}),t.jsxs("div",{className:"pg-body-compact flex-grow-1",children:[t.jsx("span",{className:"d-inline-block mb-1",style:{fontSize:"0.6rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.5px",color:c},children:n}),t.jsx("h3",{className:"fw-bold font-serif text-dark mb-0 pg-title-compact",children:t.jsx(o,{href:s("news.show",{slug:r.slug}),className:"stretched-link",children:r.title})}),t.jsx("div",{className:"mt-auto pt-2 position-relative",style:{zIndex:2},children:t.jsxs(o,{href:s("news.show",{slug:r.slug}),className:"pg-read-link",style:{color:c},children:["Leer ",t.jsx(m,{size:12})]})})]})]})})},r.id):t.jsx("div",{className:"col",children:t.jsxs("article",{className:"pg-card card h-100 border-0 shadow-sm",children:[t.jsxs("div",{className:"pg-img",children:[t.jsx("img",{src:d,alt:r.title,loading:"lazy",onError:l=>{const a=l.target;a.onerror=null,a.src="https://placehold.co/600x338?text=ABC"}}),t.jsx("span",{className:`pg-category ${b(n)}`,children:n}),t.jsxs("span",{className:"pg-date",children:[t.jsx(f,{size:10}),u]})]}),t.jsxs("div",{className:"card-body d-flex flex-column pg-body",children:[t.jsx("div",{className:"pg-author text-abc-blue",children:h}),t.jsx("h3",{className:"fw-bold font-serif text-dark pg-title",children:t.jsx(o,{href:s("news.show",{slug:r.slug}),className:"stretched-link",children:r.title})}),t.jsx("p",{className:"pg-excerpt line-clamp-3 flex-grow-1",children:r.excerpt}),t.jsx("div",{className:"pt-1 position-relative",style:{zIndex:2},children:t.jsxs(o,{href:s("news.show",{slug:r.slug}),className:"pg-read-link text-abc-red",children:["Leer Noticia ",t.jsx(m,{size:13})]})})]})]})},r.id)})})]})}export{N as P};
