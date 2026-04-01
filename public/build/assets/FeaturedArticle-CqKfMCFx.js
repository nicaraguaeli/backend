import{r as o,b as N,j as e,H as g,a as k}from"./app-DiBUFh_5.js";import{a as i,A as z,C,E as S,S as _,d as E,s as $,m as d,w as L}from"./MainLayout-kkIT-RjP.js";import{g as R,a as T,b as V}from"./categoryTheme-B1N2LLjE.js";import{S as c}from"./sparkles-DelI8vt3.js";import{U as D}from"./user-BEOj7WSC.js";import{T as F}from"./tag-Druk497y.js";import{T as m}from"./trending-up-trypWKoe.js";/* empty css            */import"./index-BsxvijQw.js";function G({article:a,onBack:p}){const[h,x]=o.useState([]),[f,n]=o.useState(!0),t=a.categories?.find(r=>r.is_featured)||a.categories?.[0];R(t),T(t);const b=V(t);o.useEffect(()=>{t&&y()},[t?.slug]);const y=async()=>{try{n(!0);const r=await N.get(`/api/news?category=${t?.slug}`),w=(r.data.data||r.data).filter(v=>v.id!==a.id).slice(0,4);x(w)}catch(r){console.error("Error fetching related articles:",r)}finally{n(!1)}},l=r=>new Date(r).toLocaleDateString("es-ES",{year:"numeric",month:"long",day:"numeric"}),j=r=>{window.location.href=`/nota/${r}`},u=async()=>{const r={title:a.title,slug:a.slug,type:"article"};try{await $(r)||d(r)}catch{d(r)}};return e.jsxs("div",{className:"featured-article-detail",style:b,children:[e.jsxs(g,{children:[e.jsx("meta",{property:"og:title",content:a.title}),e.jsx("meta",{property:"og:description",content:a.lead||""}),e.jsx("meta",{property:"og:image",content:a.image_path?i(`storage/${a.image_path}`):i("storage/logotipo.png")}),e.jsx("meta",{property:"og:type",content:"article"}),e.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),e.jsx("meta",{name:"twitter:title",content:a.title}),e.jsx("meta",{name:"twitter:description",content:a.lead||""}),e.jsx("meta",{name:"twitter:image",content:a.image_path?i(`storage/${a.image_path}`):i("storage/logotipo.png")})]}),e.jsxs("div",{className:"article-hero",children:[e.jsx("div",{className:"hero-overlay"}),a.image_path&&e.jsx("img",{src:i(`storage/${a.image_path}`),alt:a.title,className:"hero-image"}),e.jsxs("div",{className:"container hero-content",children:[e.jsxs("button",{onClick:p,className:"back-btn",children:[e.jsx(z,{size:20}),e.jsx("span",{children:"Volver"})]}),t&&e.jsxs("div",{className:"category-badge-hero",children:[e.jsx(c,{size:16}),e.jsx("span",{children:t.name})]}),e.jsx("h1",{className:"article-hero-title",children:a.title}),e.jsxs("div",{className:"article-meta-hero",children:[e.jsxs("div",{className:"meta-item",children:[e.jsx(D,{size:18}),e.jsx("span",{children:a.author?.name||"Redacción"})]}),e.jsx("div",{className:"meta-divider",children:"•"}),e.jsxs("div",{className:"meta-item",children:[e.jsx(C,{size:18}),e.jsx("span",{children:l(a.published_at)})]}),e.jsx("div",{className:"meta-divider",children:"•"}),e.jsxs("div",{className:"meta-item",children:[e.jsx(S,{size:18}),e.jsxs("span",{children:[a.views?.toLocaleString()||0," vistas"]})]})]})]})]}),e.jsx("div",{className:"container article-container",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-8",children:e.jsxs("article",{className:"article-content-card",children:[a.lead&&e.jsx("div",{className:"article-lead",children:a.lead}),e.jsx("div",{className:"article-body",dangerouslySetInnerHTML:{__html:a.content}}),a.tags&&a.tags.length>0&&e.jsxs("div",{className:"article-tags",children:[e.jsx(F,{size:18}),e.jsx("div",{className:"tags-list",children:a.tags.map(r=>e.jsx("span",{className:"tag-item",children:r.name},r.id))})]}),e.jsx("div",{className:"article-actions",children:e.jsxs("button",{className:"action-btn",onClick:u,children:[e.jsx(_,{size:20}),e.jsx("span",{children:"Compartir"})]})})]})}),e.jsx("div",{className:"col-lg-4",children:e.jsxs("div",{className:"sidebar-sticky",children:[t&&e.jsxs("div",{className:"category-info-card",children:[e.jsxs("div",{className:"category-info-header",children:[e.jsx(c,{size:24}),e.jsxs("h3",{children:["Más en ",t.name]})]}),e.jsx("p",{className:"category-description",children:"Explora más contenido especializado en esta categoría"}),e.jsxs("button",{onClick:()=>window.location.href=`/category/${t.slug}`,className:"view-category-btn",children:["Ver toda la categoría",e.jsx(m,{size:16})]})]}),e.jsxs("div",{className:"related-section",children:[e.jsxs("h3",{className:"related-title",children:[e.jsx(m,{size:20}),"Artículos Relacionados"]}),f?e.jsxs("div",{className:"loading-related",children:[e.jsx("div",{className:"spinner-small"}),e.jsx("p",{children:"Cargando..."})]}):e.jsx("div",{className:"related-articles",children:h.map(r=>e.jsxs("div",{className:"related-card",onClick:()=>j(r.slug),children:[r.image_path&&e.jsx("div",{className:"related-image",children:e.jsx("img",{src:i(`storage/${r.image_path}`),alt:r.title})}),e.jsxs("div",{className:"related-content",children:[e.jsx("h4",{className:"related-title-text",children:r.title}),e.jsxs("div",{className:"related-meta",children:[e.jsx(E,{size:12}),e.jsx("span",{children:l(r.published_at)})]})]})]},r.id))})]})]})})]})}),e.jsx("style",{children:`
                /* Hero Section */
                .article-hero {
                    position: relative;
                    min-height: 500px;
                    display: flex;
                    align-items: flex-end;
                    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
                    overflow: hidden;
                    margin-bottom: 3rem;
                }

                .hero-image {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    opacity: 0.4;
                }

                .hero-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(
                        180deg,
                        rgba(15, 23, 42, 0.3) 0%,
                        rgba(15, 23, 42, 0.9) 100%
                    );
                }

                .hero-content {
                    position: relative;
                    z-index: 2;
                    padding: 3rem 1rem;
                    max-width: 900px;
                }

                .back-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    color: white;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    padding: 0.75rem 1.25rem;
                    border-radius: 50px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    margin-bottom: 2rem;
                }

                .back-btn:hover {
                    background: rgba(255, 255, 255, 0.2);
                    transform: translateX(-4px);
                }

                .category-badge-hero {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: var(--category-gradient);
                    color: white;
                    padding: 0.5rem 1.25rem;
                    border-radius: 50px;
                    font-size: 0.875rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    margin-bottom: 1.5rem;
                    box-shadow: 0 4px 15px var(--category-medium);
                }

                .article-hero-title {
                    font-size: 3rem;
                    font-weight: 800;
                    color: white;
                    margin: 0 0 1.5rem 0;
                    font-family: 'Georgia', serif;
                    line-height: 1.2;
                    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
                }

                .article-meta-hero {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    gap: 1rem;
                    color: rgba(255, 255, 255, 0.9);
                    font-size: 0.95rem;
                }

                .meta-item {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .meta-divider {
                    color: rgba(255, 255, 255, 0.5);
                }

                /* Main Content */
                .article-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1rem 4rem;
                }

                .article-content-card {
                    background: white;
                    border-radius: 12px;
                    padding: 2.5rem;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                    margin-bottom: 2rem;
                }

                .article-lead {
                    font-size: 1.25rem;
                    font-weight: 500;
                    color: #475569;
                    line-height: 1.8;
                    margin-bottom: 2rem;
                    padding-bottom: 2rem;
                    border-bottom: 2px solid #e2e8f0;
                    font-style: italic;
                }

                .article-body {
                    font-size: 1.1rem;
                    line-height: 1.8;
                    color: #334155;
                }

                .article-body p {
                    margin-bottom: 1.5rem;
                }

                .article-body h2 {
                    font-size: 1.75rem;
                    font-weight: 700;
                    color: #0f172a;
                    margin: 2rem 0 1rem;
                    font-family: 'Georgia', serif;
                }

                .article-body h3 {
                    font-size: 1.5rem;
                    font-weight: 600;
                    color: #1e293b;
                    margin: 1.5rem 0 1rem;
                }

                .article-body img {
                    max-width: 100%;
                    height: auto;
                    border-radius: 8px;
                    margin: 2rem 0;
                }

                .article-tags {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    padding: 1.5rem 0;
                    border-top: 2px solid #e2e8f0;
                    margin-top: 2rem;
                    color: #64748b;
                }

                .tags-list {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                }

                .tag-item {
                    background: #f1f5f9;
                    color: #475569;
                    padding: 0.375rem 0.875rem;
                    border-radius: 50px;
                    font-size: 0.875rem;
                    font-weight: 600;
                    transition: all 0.2s ease;
                }

                .tag-item:hover {
                    background: #e2e8f0;
                    color: #0f172a;
                }

                .article-actions {
                    display: flex;
                    gap: 1rem;
                    padding-top: 1.5rem;
                    border-top: 2px solid #e2e8f0;
                    margin-top: 1.5rem;
                }

                .action-btn {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: #f1f5f9;
                    color: #475569;
                    border: none;
                    padding: 0.75rem 1.5rem;
                    border-radius: 50px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .action-btn:hover {
                    background: var(--category-primary);
                    color: white;
                    transform: translateY(-2px);
                }

                /* Sidebar */
                .sidebar-sticky {
                    position: sticky;
                    top: 100px;
                }

                .category-info-card {
                    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
                    color: white;
                    border-radius: 12px;
                    padding: 2rem;
                    margin-bottom: 2rem;
                    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
                }

                .category-info-header {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    margin-bottom: 1rem;
                }

                .category-info-header h3 {
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin: 0;
                    font-family: 'Georgia', serif;
                }

                .category-description {
                    color: rgba(255, 255, 255, 0.8);
                    margin-bottom: 1.5rem;
                    line-height: 1.6;
                }

                .view-category-btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    width: 100%;
                    background: var(--category-gradient);
                    color: white;
                    border: none;
                    padding: 0.875rem 1.5rem;
                    border-radius: 50px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .view-category-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 20px var(--category-medium);
                }

                .related-section {
                    background: white;
                    border-radius: 12px;
                    padding: 1.5rem;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                }

                .related-title {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: #0f172a;
                    margin: 0 0 1.5rem 0;
                }

                .loading-related {
                    text-align: center;
                    padding: 2rem;
                    color: #64748b;
                }

                .spinner-small {
                    width: 32px;
                    height: 32px;
                    border: 3px solid #e2e8f0;
                    border-top-color: var(--category-primary);
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin: 0 auto 1rem;
                }

                @keyframes spin {
                    to { transform: rotate(360deg); }
                }

                .related-articles {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .related-card {
                    display: flex;
                    gap: 1rem;
                    padding: 1rem;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    border: 1px solid #e2e8f0;
                }

                .related-card:hover {
                    background: #f8fafc;
                    border-color: var(--category-primary);
                    transform: translateX(4px);
                }

                .related-image {
                    width: 80px;
                    height: 80px;
                    flex-shrink: 0;
                    border-radius: 6px;
                    overflow: hidden;
                    background: #f1f5f9;
                }

                .related-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.3s ease;
                }

                .related-card:hover .related-image img {
                    transform: scale(1.1);
                }

                .related-content {
                    flex: 1;
                    min-width: 0;
                }

                .related-title-text {
                    font-size: 0.95rem;
                    font-weight: 700;
                    color: #0f172a;
                    margin: 0 0 0.5rem 0;
                    line-height: 1.4;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .related-meta {
                    display: flex;
                    align-items: center;
                    gap: 0.375rem;
                    font-size: 0.8rem;
                    color: #64748b;
                }

                /* Responsive */
                @media (max-width: 768px) {
                    .article-hero-title {
                        font-size: 2rem;
                    }

                    .article-content-card {
                        padding: 1.5rem;
                    }

                    .article-lead {
                        font-size: 1.1rem;
                    }

                    .article-body {
                        font-size: 1rem;
                    }

                    .sidebar-sticky {
                        position: static;
                    }
                }
            `})]})}const H=({article:a})=>e.jsxs(e.Fragment,{children:[e.jsx(g,{title:a.title}),e.jsx(G,{article:a,onBack:()=>k.visit("/")})]});H.layout=L;export{H as default};
