import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { ArticleData } from '../types';
import { ChevronLeft, ChevronRight, Home, TrendingUp, Calendar, User, ArrowRight } from 'lucide-react';
import { asset } from '@/url';
import { route } from 'ziggy-js';
import PostGrid from './PostGrid';

interface CategoryViewProps {
  category: string;
  categoryName?: string;
  posts: ArticleData[];
  onPostClick: (slug: string) => void;
  onBack: () => void;
}

export default function CategoryView({ category, categoryName, posts, onPostClick, onBack }: CategoryViewProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7; // 1 Destacada + 6 en Grid

  const displayName = categoryName || category;

  // Paginación
  const indexOfLastPost  = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentPosts     = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages       = Math.ceil(posts.length / itemsPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString('es-ES', {
      day: 'numeric', month: 'long', year: 'numeric',
    });

  const featuredPost = currentPosts[0] ?? null;
  const gridPosts    = currentPosts.slice(1);

  // ─── Estado vacío ────────────────────────────────────────────────────────
  if (posts.length === 0) {
    return (
      <div className="container py-5">
        <div className="mb-4">
          <button onClick={onBack} className="btn btn-link text-decoration-none text-secondary ps-0 d-flex align-items-center gap-2">
            <Home size={18} /> Volver al inicio
          </button>
        </div>
        <div className="text-center py-5">
          <div className="bg-light rounded-circle d-inline-flex p-4 mb-3">
            <TrendingUp size={48} className="text-muted" />
          </div>
          <h3 className="text-abc-blue fw-bold">No hay noticias disponibles</h3>
          <p className="text-muted">Aún no se han publicado noticias en esta categoría</p>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in pb-5">

      {/* Breadcrumb Header */}
      <div className="bg-light border-bottom py-3 mb-4 sticky-top" style={{ top: '70px', zIndex: 900 }}>
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 align-items-center">
              <li className="breadcrumb-item">
                <button onClick={onBack} className="btn btn-link p-0 text-decoration-none text-secondary d-flex align-items-center gap-1">
                  <Home size={16} /> Inicio
                </button>
              </li>
              <li className="breadcrumb-item active fw-bold text-abc-blue text-uppercase" aria-current="page">
                {displayName}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container">

        {/* Category Header */}
        <div className="mb-5">
          <div className="d-flex align-items-center gap-3 mb-3">
            <div className="bg-abc-red text-white p-3 rounded-3 shadow">
              <TrendingUp size={32} />
            </div>
            <div>
              <span className="text-uppercase text-muted small fw-bold d-block mb-1">Categoría</span>
              <h1 className="display-5 fw-bold font-serif text-abc-blue m-0">{displayName}</h1>
            </div>
          </div>
          <div className="border-top border-3 border-abc-gold pt-3">
            <p className="text-muted mb-0">
              <strong>{posts.length}</strong> {posts.length === 1 ? 'noticia encontrada' : 'noticias encontradas'}
            </p>
          </div>
        </div>

        {/* ── Primera Noticia ───────────────────────────────────────────── */}
        {featuredPost && (
          <div className="mb-5">
            <article
              className="row g-0 bg-white shadow-lg overflow-hidden"
              style={{ borderRadius: '3px', border: '1px solid #e8e8e8' }}
            >
              {/* Imagen — ocupa todo el alto del card */}
              <div className="col-lg-7" style={{ minHeight: '480px', position: 'relative' }}>
                <img
                  src={featuredPost.image_path ? asset(`storage/${featuredPost.image_path}`) : 'https://placehold.co/800x600?text=ABC'}
                  alt={featuredPost.title}
                  loading="lazy"
                  onError={(e) => {
                    const t = e.target as HTMLImageElement;
                    t.src = 'https://placehold.co/800x600?text=ABC';
                  }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
                {/* Gradiente oscuro inferior */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.05) 55%, transparent 100%)',
                  pointerEvents: 'none',
                }} />
                {/* Categoría sobre imagen */}
                {featuredPost.categories && featuredPost.categories.length > 0 && (
                  <span style={{
                    position: 'absolute', bottom: 14, left: 0,
                    background: 'var(--abc-red, #c0392b)', color: '#fff',
                    fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase',
                    letterSpacing: '0.5px', padding: '4px 12px',
                    borderRadius: '0 3px 3px 0', boxShadow: '2px 1px 6px rgba(0,0,0,0.25)',
                  }}>
                    {featuredPost.categories[0].name}
                  </span>
                )}
              </div>

              {/* Panel de contenido */}
              <div className="col-lg-5 d-flex flex-column justify-content-between p-4 p-lg-5">

                {/* Fecha */}
                <div className="d-flex align-items-center gap-1 mb-3 text-muted" style={{ fontSize: '0.78rem' }}>
                  <Calendar size={13} />
                  <span>{formatDate(featuredPost.published_at)}</span>
                </div>

                {/* Título */}
                <h2 className="fw-bold font-serif text-dark lh-sm mb-3" style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.7rem)' }}>
                  {featuredPost.title}
                </h2>

                {/* Excerpt */}
                <p className="text-secondary lh-base mb-4" style={{
                  fontSize: '0.92rem',
                  display: '-webkit-box', WebkitLineClamp: 4,
                  WebkitBoxOrient: 'vertical', overflow: 'hidden',
                }}>
                  {featuredPost.excerpt}
                </p>

                {/* Autor + CTA */}
                <div className="mt-auto pt-3 d-flex align-items-center justify-content-between" style={{ borderTop: '1px solid #eee' }}>
                  {featuredPost.author && (
                    <div className="d-flex align-items-center gap-2">
                      <div style={{
                        width: '30px', height: '30px', borderRadius: '50%',
                        background: 'var(--abc-blue, #1a3c6b)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                      }}>
                        <User size={14} color="#fff" />
                      </div>
                      <div>
                        <span style={{ fontSize: '0.65rem', color: '#999', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', lineHeight: 1 }}>
                          Autor
                        </span>
                        <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#333' }}>
                          {featuredPost.author.name}
                        </span>
                      </div>
                    </div>
                  )}
                  <Link
                    href={route('news.show', { slug: featuredPost.slug })}
                    className="btn btn-abc-red text-white fw-bold px-4 py-2 d-inline-flex align-items-center gap-2 shadow-sm"
                    style={{ borderRadius: '3px', fontSize: '0.82rem', letterSpacing: '0.3px' }}
                  >
                    Leer Noticia <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        )}


        {/* ── Grid Posts → PostGrid ─────────────────────────────────────── */}
        {gridPosts.length > 0 && (
          <>
            <div className="d-flex align-items-center gap-2 mb-4">
              <div className="bg-abc-gold" style={{ width: '4px', height: '24px' }}></div>
              <h3 className="h5 fw-bold text-abc-blue mb-0 font-serif">Más Noticias</h3>
            </div>

            <div className="mb-5">
              <PostGrid posts={gridPosts} columns={3} />
            </div>
          </>
        )}

        {/* ── Paginación ───────────────────────────────────────────────── */}
        {totalPages > 1 && (() => {
          // Construye la lista de páginas con ellipsis
          const buildPages = (): (number | '...')[] => {
            if (totalPages <= 7) {
              return Array.from({ length: totalPages }, (_, i) => i + 1);
            }
            const pages: (number | '...')[] = [1];
            const left  = Math.max(2, currentPage - 1);
            const right = Math.min(totalPages - 1, currentPage + 1);

            if (left > 2)  pages.push('...');
            for (let i = left; i <= right; i++) pages.push(i);
            if (right < totalPages - 1) pages.push('...');
            pages.push(totalPages);
            return pages;
          };

          return (
            <nav aria-label="Paginación de noticias">
              <ul className="pagination justify-content-center flex-wrap gap-2" style={{ rowGap: '8px' }}>
                {/* Anterior */}
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <button
                    className="page-link border-0 bg-abc-blue text-white rounded-pill px-3 shadow-sm d-flex align-items-center gap-1"
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    style={{ fontSize: '0.85rem' }}
                  >
                    <ChevronLeft size={16} /> Ant.
                  </button>
                </li>

                {buildPages().map((item, idx) =>
                  item === '...' ? (
                    <li key={`ellipsis-${idx}`} className="page-item disabled">
                      <span className="page-link border-0 bg-transparent text-muted px-1" style={{ fontWeight: 700 }}>
                        …
                      </span>
                    </li>
                  ) : (
                    <li key={item} className={`page-item ${currentPage === item ? 'active' : ''}`}>
                      <button
                        className={`page-link rounded-circle border-2 ${
                          currentPage === item
                            ? 'bg-abc-red text-white border-abc-red shadow'
                            : 'bg-white text-abc-blue border-abc-blue'
                        }`}
                        onClick={() => paginate(item)}
                        style={{ width: '40px', height: '40px', fontWeight: 'bold', fontSize: '0.85rem' }}
                      >
                        {item}
                      </button>
                    </li>
                  )
                )}

                {/* Siguiente */}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                  <button
                    className="page-link border-0 bg-abc-blue text-white rounded-pill px-3 shadow-sm d-flex align-items-center gap-1"
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    style={{ fontSize: '0.85rem' }}
                  >
                    Sig. <ChevronRight size={16} />
                  </button>
                </li>
              </ul>
            </nav>
          );
        })()}

      </div>
    </div>
  );
}
