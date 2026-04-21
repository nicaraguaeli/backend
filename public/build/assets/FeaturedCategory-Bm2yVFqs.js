import{r as a,b as v,j as e,H as j,a as c}from"./app-BLEtjmEk.js";import{a as d,A as w,G as y,L as N,C as k,w as z}from"./MainLayout-BfNK_LON.js";import{g as C,a as S,b as A}from"./categoryTheme-B1N2LLjE.js";import{S as m}from"./sparkles-Dt1ceCgs.js";import{T as L}from"./trending-up-Cusc15ov.js";import{U as E}from"./user-ViWGVaYG.js";import{s as g}from"./index-BsxvijQw.js";/* empty css            */function _({category:r,onBack:i,onPostClick:p}){const[s,h]=a.useState([]),[x,n]=a.useState(!0),[o,l]=a.useState("grid");C(r),S(r);const f=A(r);a.useEffect(()=>{b()},[r.slug]);const b=async()=>{try{n(!0);const t=await v.get(`/api/news?category=${r.slug}`);h(t.data.data||[])}catch(t){console.error("Error fetching articles:",t)}finally{n(!1)}},u=t=>new Date(t).toLocaleDateString("es-ES",{year:"numeric",month:"long",day:"numeric"});return e.jsxs("div",{className:"featured-category-page",style:f,children:[e.jsxs("div",{className:"category-hero",children:[e.jsx("div",{className:"hero-overlay"}),r.image_path&&e.jsx("img",{src:d(`storage/${r.image_path}`),alt:r.name,className:"hero-bg-image"}),e.jsxs("div",{className:"container hero-content",children:[e.jsxs("button",{onClick:i,className:"back-button",children:[e.jsx(w,{size:20}),e.jsx("span",{children:"Volver al inicio"})]}),e.jsxs("div",{className:"hero-text",children:[e.jsxs("div",{className:"category-badge",children:[e.jsx(m,{size:18}),e.jsx("span",{children:"Categoría Destacada"})]}),e.jsx("h1",{className:"category-title",children:r.name}),r.description&&e.jsx("p",{className:"category-description",children:r.description})]})]})]}),e.jsxs("div",{className:"container content-section",children:[e.jsxs("div",{className:"content-toolbar",children:[e.jsxs("div",{className:"toolbar-left",children:[e.jsxs("h2",{className:"section-title",children:[e.jsx(L,{size:24}),"Artículos Recientes"]}),e.jsxs("span",{className:"article-count",children:[s.length," artículos"]})]}),e.jsxs("div",{className:"view-toggle",children:[e.jsx("button",{className:`toggle-btn ${o==="grid"?"active":""}`,onClick:()=>l("grid"),children:e.jsx(y,{size:18})}),e.jsx("button",{className:`toggle-btn ${o==="list"?"active":""}`,onClick:()=>l("list"),children:e.jsx(N,{size:18})})]})]}),x?e.jsxs("div",{className:"loading-state",children:[e.jsx("div",{className:"spinner"}),e.jsx("p",{children:"Cargando artículos..."})]}):s.length===0?e.jsxs("div",{className:"empty-state",children:[e.jsx(m,{size:48}),e.jsx("h3",{children:"No hay artículos disponibles"}),e.jsx("p",{children:"Pronto habrá contenido nuevo en esta categoría."})]}):e.jsx("div",{className:`articles-container ${o}`,children:s.map(t=>e.jsxs("article",{className:"article-card",onClick:()=>p(t.slug),children:[t.image_path&&e.jsxs("div",{className:"article-image",children:[e.jsx("img",{src:d(`storage/${t.image_path}`),alt:t.title}),e.jsx("div",{className:"image-overlay"})]}),e.jsxs("div",{className:"article-content",children:[e.jsx("h3",{className:"article-title",children:t.title}),e.jsx("p",{className:"article-excerpt",children:t.excerpt}),e.jsxs("div",{className:"article-meta",children:[e.jsxs("span",{className:"meta-item",children:[e.jsx(k,{size:14}),u(t.published_at)]}),t.author&&e.jsxs("span",{className:"meta-item",children:[e.jsx(E,{size:14}),t.author.name]})]})]})]},t.id))})]}),e.jsx("style",{children:`
                /* Hero Section */
                .category-hero {
                    position: relative;
                    min-height: 400px;
                    display: flex;
                    align-items: center;
                    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
                    overflow: hidden;
                }

                .hero-bg-image {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    opacity: 0.5;
                }

                .hero-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(
                        135deg,
                        rgba(15, 23, 42, 0.6) 0%,
                        rgba(30, 41, 59, 0.5) 100%
                    );
                }

                .hero-content {
                    position: relative;
                    z-index: 2;
                    padding: 3rem 1rem;
                }

                .back-button {
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

                .back-button:hover {
                    background: rgba(255, 255, 255, 0.2);
                    transform: translateX(-4px);
                }

                .hero-text {
                    max-width: 800px;
                }

                .category-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: var(--category-gradient);
                    color: white;
                    padding: 0.5rem 1rem;
                    border-radius: 50px;
                    font-size: 0.875rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    margin-bottom: 1.5rem;
                    box-shadow: 0 4px 15px var(--category-medium);
                }

                .category-title {
                    font-size: 3.5rem;
                    font-weight: 800;
                    color: white;
                    margin: 0 0 1rem 0;
                    font-family: 'Georgia', serif;
                    line-height: 1.2;
                }

                .category-description {
                    font-size: 1.25rem;
                    color: rgba(255, 255, 255, 0.8);
                    line-height: 1.6;
                    margin: 0;
                }

                /* Content Section */
                .content-section {
                    padding: 3rem 1rem;
                }

                .content-toolbar {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 2rem;
                    padding-bottom: 1.5rem;
                    border-bottom: 2px solid #e2e8f0;
                }

                .toolbar-left {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }

                .section-title {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    font-size: 1.75rem;
                    font-weight: 700;
                    color: #0f172a;
                    margin: 0;
                }

                .article-count {
                    background: #f1f5f9;
                    color: #64748b;
                    padding: 0.375rem 0.875rem;
                    border-radius: 50px;
                    font-size: 0.875rem;
                    font-weight: 600;
                }

                .view-toggle {
                    display: flex;
                    gap: 0.5rem;
                    background: #f1f5f9;
                    padding: 0.25rem;
                    border-radius: 8px;
                }

                .toggle-btn {
                    background: transparent;
                    border: none;
                    padding: 0.5rem 0.75rem;
                    border-radius: 6px;
                    color: #64748b;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .toggle-btn:hover {
                    color: #0f172a;
                }

                .toggle-btn.active {
                    background: white;
                    color: #0f172a;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }

                /* Articles Container */
                .articles-container {
                    display: grid;
                    gap: 2rem;
                }

                .articles-container.grid {
                    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
                }

                .articles-container.list {
                    grid-template-columns: 1fr;
                }

                /* Article Card */
                .article-card {
                    background: white;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                    cursor: pointer;
                    transition: all 0.3s ease;
                    border: 1px solid #e2e8f0;
                }

                .article-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
                    border-color: var(--category-primary);
                }

                .articles-container.list .article-card {
                    display: flex;
                    flex-direction: row;
                }

                .article-image {
                    position: relative;
                    width: 100%;
                    height: 240px;
                    overflow: hidden;
                    background: #f1f5f9;
                }

                .articles-container.list .article-image {
                    width: 300px;
                    height: auto;
                    flex-shrink: 0;
                }

                .article-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.4s ease;
                }

                .article-card:hover .article-image img {
                    transform: scale(1.1);
                }

                .image-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(
                        180deg,
                        transparent 0%,
                        rgba(0, 0, 0, 0.3) 100%
                    );
                }

                .article-content {
                    padding: 1.5rem;
                }

                .article-title {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: #0f172a;
                    margin: 0 0 0.75rem 0;
                    font-family: 'Georgia', serif;
                    line-height: 1.4;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .article-excerpt {
                    font-size: 0.95rem;
                    color: #64748b;
                    line-height: 1.6;
                    margin: 0 0 1rem 0;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .article-meta {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1rem;
                    padding-top: 1rem;
                    border-top: 1px solid #e2e8f0;
                }

                .meta-item {
                    display: flex;
                    align-items: center;
                    gap: 0.375rem;
                    font-size: 0.875rem;
                    color: #64748b;
                }

                /* Loading State */
                .loading-state {
                    text-align: center;
                    padding: 4rem 2rem;
                }

                .spinner {
                    width: 48px;
                    height: 48px;
                    border: 4px solid #e2e8f0;
                    border-top-color: var(--category-primary);
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin: 0 auto 1rem;
                }

                @keyframes spin {
                    to { transform: rotate(360deg); }
                }

                /* Empty State */
                .empty-state {
                    text-align: center;
                    padding: 4rem 2rem;
                    color: #64748b;
                }

                .empty-state svg {
                    color: var(--category-primary);
                    margin-bottom: 1rem;
                }

                .empty-state h3 {
                    font-size: 1.5rem;
                    color: #0f172a;
                    margin: 0 0 0.5rem 0;
                }

                /* Responsive */
                @media (max-width: 768px) {
                    .category-title {
                        font-size: 2.5rem;
                    }

                    .category-description {
                        font-size: 1rem;
                    }

                    .content-toolbar {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 1rem;
                    }

                    .articles-container.grid {
                        grid-template-columns: 1fr;
                    }

                    .articles-container.list .article-card {
                        flex-direction: column;
                    }

                    .articles-container.list .article-image {
                        width: 100%;
                        height: 240px;
                    }
                }
            `})]})}const $=({category:r})=>e.jsxs(e.Fragment,{children:[e.jsx(j,{title:r.name}),e.jsx(_,{category:r,onBack:()=>c.visit(g("home")),onPostClick:i=>c.visit(g("news.show",{slug:i}))})]});$.layout=z;export{$ as default};
