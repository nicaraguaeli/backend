import React from 'react';
import { Head, Link } from '@inertiajs/react';
import MainLayout, { withMainLayout } from '@/Layouts/MainLayout';
import PostGrid from '@/Components/PostGrid';
import { route } from 'ziggy-js';
import { ChevronRight, Layers, Home } from 'lucide-react';

interface Props {
  parentCategory: {
    id: number;
    name: string;
    slug: string;
    theme_color?: string;
  };
  subcategories: {
    id: number;
    name: string;
    slug: string;
    recent_news: any[];
  }[];
}

const SectionIndex = ({ parentCategory, subcategories }: Props) => {
  const themeColor = parentCategory.theme_color || 'var(--abc-red)';

  return (
    <div className="animate-fade-in pb-5">
      <Head title={parentCategory.name} />
      
      {/* Breadcrumb Header */}
      <div className="bg-light border-bottom py-3 mb-4 sticky-top" style={{ top: '70px', zIndex: 900 }}>
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 align-items-center">
              <li className="breadcrumb-item">
                <Link href={route('home')} className="btn btn-link p-0 text-decoration-none text-secondary d-flex align-items-center gap-1">
                  <Home size={16} /> Inicio
                </Link>
              </li>
              <li className="breadcrumb-item active fw-bold text-abc-blue text-uppercase" aria-current="page">
                {parentCategory.name}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container">
        {/* Category Header */}
        <div className="mb-5">
          <div className="d-flex align-items-center gap-3 mb-3">
            <div className="text-white p-3 rounded-3 shadow" style={{ backgroundColor: themeColor }}>
              <Layers size={32} />
            </div>
            <div>
              <span className="text-uppercase text-muted small fw-bold d-block mb-1">Sección Principal</span>
              <h1 className="display-5 fw-bold font-serif text-abc-blue m-0" style={{ color: 'var(--abc-blue)' }}>
                {parentCategory.name}
              </h1>
            </div>
          </div>
          <div className="border-top border-3 border-abc-gold pt-3">
            <p className="text-muted mb-0">Explora las noticias organizadas por categoría</p>
          </div>
        </div>

        {subcategories.map(subcat => {
          if (subcat.recent_news && subcat.recent_news.length > 0) {
            return (
              <section key={subcat.id} className="mb-5 pb-4 border-bottom">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h2 className="h4 fw-bold text-dark m-0 d-flex align-items-center gap-2">
                    <span style={{ width: '6px', height: '20px', backgroundColor: themeColor, display: 'inline-block', borderRadius: '4px' }}></span>
                    <Link href={route('category.show', { slug: subcat.slug })} className="text-decoration-none text-abc-blue hover-opacity">
                        {subcat.name}
                    </Link>
                  </h2>
                  <Link href={route('category.show', { slug: subcat.slug })} className="btn btn-sm d-flex align-items-center text-uppercase fw-bold text-abc-blue" style={{ fontSize: '0.75rem', border: '1px solid var(--abc-blue)', borderRadius: '20px' }}>
                    Ver más <ChevronRight size={14} className="ms-1" />
                  </Link>
                </div>
                
                {/* Horizontal scroll en móviles, grid normal en desktop */}
                <div className="section-mobile-scroll">
                  <PostGrid posts={subcat.recent_news} columns={4} compact={true} />
                </div>
              </section>
            );
          }
          return null;
        })}
        
        {subcategories.filter(s => s.recent_news && s.recent_news.length > 0).length === 0 && (
          <div className="text-center text-muted py-5 my-5 bg-light rounded-4">
            <Layers size={48} className="text-muted opacity-50 mb-3" />
            <h4 className="fw-bold">No hay noticias organizadas en esta sección</h4>
            <p>Se mostrarán las noticias tan pronto sean publicadas.</p>
          </div>
        )}
      </div>

      <style>{`
        .hover-opacity:hover { opacity: 0.8; }
        
        @media (max-width: 767.98px) {
          .section-mobile-scroll .row {
            flex-wrap: nowrap !important;
            overflow-x: auto !important;
            overflow-y: hidden !important;
            padding-bottom: 1.5rem !important;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none; /* Firefox */
          }
          .section-mobile-scroll .row::-webkit-scrollbar {
            display: none; /* Chrome/Safari */
          }
          .section-mobile-scroll .row > .col {
            flex: 0 0 85% !important;
            max-width: 85% !important;
          }
        }
      `}</style>
    </div>
  );
};

SectionIndex.layout = withMainLayout;

export default SectionIndex;
