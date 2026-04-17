import React from 'react';
import { Link } from '@inertiajs/react';
import { asset } from '@/url';
import { route } from 'ziggy-js';
import { ArticleData } from '../types';
import { Clock, ArrowRight } from 'lucide-react';

interface PostGridProps {
  posts: ArticleData[];
  columns?: number;
  compact?: boolean;
}

const getCategoryBadgeStyle = (cat: string) => {
  if (!cat) return 'bg-abc-blue text-white';
  const normalizedCat = cat.toLowerCase();

  if (normalizedCat.includes('sucesos'))       return 'bg-abc-red text-white';
  if (normalizedCat.includes('judiciales'))    return 'bg-secondary text-white';
  if (normalizedCat.includes('sociales'))      return 'bg-info text-dark';
  if (normalizedCat.includes('entretenimiento')) return 'bg-info text-dark';
  if (normalizedCat.includes('arte'))          return 'bg-abc-indigo text-white';
  if (normalizedCat.includes('cultura'))       return 'bg-abc-indigo text-white';
  if (normalizedCat.includes('empresarial'))   return 'bg-abc-blue text-white';
  if (normalizedCat.includes('economía'))      return 'bg-abc-blue text-white';
  if (normalizedCat.includes('emprendim'))     return 'bg-abc-orange text-white';
  if (normalizedCat.includes('deport'))        return 'bg-success text-white';
  if (normalizedCat.includes('salud'))         return 'bg-abc-green text-white';
  if (normalizedCat.includes('historia'))      return 'bg-primary text-white';
  if (normalizedCat.includes('entre nos'))     return 'bg-warning text-dark';
  if (normalizedCat.includes('nacional'))      return 'bg-dark text-white';
  if (normalizedCat.includes('internacional')) return 'bg-dark text-white';

  return 'bg-abc-blue text-white';
};

/* Devuelve un color hex según categoría para el borde de acento en compact */
const getCategoryAccentColor = (cat: string): string => {
  if (!cat) return '#1a73e8';
  const n = cat.toLowerCase();
  if (n.includes('sucesos'))       return '#d32f2f';
  if (n.includes('judiciales'))    return '#555';
  if (n.includes('sociales') || n.includes('entretenimiento')) return '#0288d1';
  if (n.includes('arte') || n.includes('cultura'))             return '#5c35cc';
  if (n.includes('empresarial') || n.includes('economía'))     return '#1a73e8';
  if (n.includes('emprendim'))     return '#e65100';
  if (n.includes('deport'))        return '#2e7d32';
  if (n.includes('salud'))         return '#00897b';
  if (n.includes('historia'))      return '#1565c0';
  if (n.includes('entre nos'))     return '#f9a825';
  if (n.includes('nacional') || n.includes('internacional')) return '#212121';
  return '#1a73e8';
};

export default function PostGrid({ posts, columns, compact = false }: PostGridProps) {
  if (!posts || posts.length === 0) {
    return (
      <div className="text-center text-muted py-5" style={{ fontSize: '0.92rem', letterSpacing: '0.3px' }}>
        No hay publicaciones recientes.
      </div>
    );
  }

  const gridClass = `row-cols-1 row-cols-md-${columns || 2}`;

  return (
    <>
      <style>{`
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
      `}</style>

      <div className={`row ${gridClass} g-3 g-md-4`}>
        {posts.map((post) => {
          const categoryName = post.categories && post.categories.length > 0
            ? post.categories[0].name
            : 'General';
          const authorName  = post.author?.name || 'Redacción';
          const imageUrl    = post.image_path
            ? asset(`storage/${post.image_path}`)
            : asset('img/placeholder.jpg');
          const accentColor = getCategoryAccentColor(categoryName);
          const formattedDate = new Date(post.published_at).toLocaleDateString('es-ES', {
            day: 'numeric', month: 'short', year: 'numeric',
          });

          /* ── COMPACT ── */
          if (compact) {
            return (
              <div key={post.id} className="col">
                <article
                  className="pg-compact-card card h-100 border-0 shadow-sm bg-white"
                  style={{ borderLeft: `3px solid ${accentColor}` }}
                >
                  <div className="d-flex pg-compact-inner h-100">

                    {/* Imagen */}
                    <div className="pg-img-compact">
                      <img
                        src={imageUrl}
                        alt={post.title}
                        loading="lazy"
                        onError={(e) => {
                          const t = e.target as HTMLImageElement;
                          t.onerror = null;
                          t.src = 'https://placehold.co/400x400?text=ABC';
                        }}
                      />
                    </div>

                    {/* Body */}
                    <div className="pg-body-compact flex-grow-1">
                      <span
                        className="d-inline-block mb-1"
                        style={{
                          fontSize: '0.6rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          color: accentColor,
                        }}
                      >
                        {categoryName}
                      </span>

                      <h3 className="fw-bold font-serif text-dark mb-0 pg-title-compact">
                        <Link
                          href={route('news.show', { slug: post.slug })}
                          className="stretched-link"
                        >
                          {post.title}
                        </Link>
                      </h3>

                      <div className="mt-auto pt-2 position-relative" style={{ zIndex: 2 }}>
                        <Link
                          href={route('news.show', { slug: post.slug })}
                          className="pg-read-link"
                          style={{ color: accentColor }}
                        >
                          Leer <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            );
          }

          /* ── FULL ── */
          return (
            <div key={post.id} className="col">
              <article className="pg-card card h-100 border-0 shadow-sm">

                {/* Imagen 16:9 con gradiente */}
                <div className="pg-img">
                  <img
                    src={imageUrl}
                    alt={post.title}
                    loading="lazy"
                    onError={(e) => {
                      const t = e.target as HTMLImageElement;
                      t.onerror = null;
                      t.src = 'https://placehold.co/600x338?text=ABC';
                    }}
                  />
                  <span className={`pg-category ${getCategoryBadgeStyle(categoryName)}`}>
                    {categoryName}
                  </span>
                  <span className="pg-date">
                    <Clock size={10} />
                    {formattedDate}
                  </span>
                </div>

                {/* Body */}
                <div className="card-body d-flex flex-column pg-body">
                  <div className="pg-author text-abc-blue">
                    {authorName}
                  </div>

                  <h3 className="fw-bold font-serif text-dark pg-title">
                    <Link
                      href={route('news.show', { slug: post.slug })}
                      className="stretched-link"
                    >
                      {post.title}
                    </Link>
                  </h3>

                  <p className="pg-excerpt line-clamp-3 flex-grow-1">
                    {post.excerpt}
                  </p>

                  <div className="pt-1 position-relative" style={{ zIndex: 2 }}>
                    <Link
                      href={route('news.show', { slug: post.slug })}
                      className="pg-read-link text-abc-red"
                    >
                      Leer Noticia <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </>
  );
}