import React from 'react';
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

  // Categorías de Alerta / Impacto
  if (normalizedCat.includes('sucesos')) return 'bg-abc-red text-white';

  // Categorías Serias / Legales
  if (normalizedCat.includes('judiciales')) return 'bg-secondary text-white';

  // Categorías Sociales / Lifestyle
  if (normalizedCat.includes('sociales')) return 'bg-info text-dark';
  if (normalizedCat.includes('entretenimiento')) return 'bg-info text-dark';

  // Cultura y Arte
  if (normalizedCat.includes('arte')) return 'bg-abc-indigo text-white';
  if (normalizedCat.includes('cultura')) return 'bg-abc-indigo text-white';

  // Negocios
  if (normalizedCat.includes('empresarial')) return 'bg-abc-blue text-white';
  if (normalizedCat.includes('economía')) return 'bg-abc-blue text-white';
  if (normalizedCat.includes('emprendim')) return 'bg-abc-orange text-white';

  // Deportes y Salud
  if (normalizedCat.includes('deport')) return 'bg-success text-white';
  if (normalizedCat.includes('salud')) return 'bg-abc-green text-white';

  // Programas Especiales
  if (normalizedCat.includes('historia')) return 'bg-primary text-white';
  if (normalizedCat.includes('entre nos')) return 'bg-warning text-dark';

  // Noticias Generales
  if (normalizedCat.includes('nacional')) return 'bg-dark text-white';
  if (normalizedCat.includes('internacional')) return 'bg-dark text-white';

  // Fallback por defecto
  return 'bg-abc-blue text-white';
};

export default function PostGrid({ posts, columns, compact = false }: PostGridProps) {
  if (!posts || posts.length === 0) {
    return <div className="text-center text-muted py-4">No hay publicaciones recientes.</div>;
  }

  const gridClass = `row-cols-1 row-cols-md-${columns || 2}`;

  return (
    <div className={`row ${gridClass} g-4`}>
      {posts.map((post) => {
        const categoryName = post.categories && post.categories.length > 0 ? post.categories[0].name : 'General';
        const authorName = post.author && post.author.length > 0 ? post.author.map(a => a.name).join(', ') : 'Redacción';
        const imageUrl = post.image_path ? asset(`storage/${post.image_path}`) : asset('img/placeholder.jpg');

        return (
          <div key={post.id} className="col">
            <article className="card h-100 border-0 shadow-sm hover-card bg-white">
              <div className="card-img-top-wrapper position-relative">
                <img
                  src={imageUrl}
                  className="card-img-top"
                  alt={post.title}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null; // Prevent infinite loop
                    target.src = 'https://placehold.co/600x400?text=Sin+Imagen';
                  }}
                />
                {!compact && (
                  <>
                    <span className={`category-badge ${getCategoryBadgeStyle(categoryName)}`}>
                      {categoryName}
                    </span>
                    <span className="position-absolute bottom-0 end-0 m-2 badge bg-dark bg-opacity-50 text-white shadow-sm d-flex align-items-center gap-1" style={{ fontSize: '0.75rem', backdropFilter: 'blur(4px)' }}>
                      <Clock size={12} />
                      {new Date(post.published_at).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </span>
                  </>
                )}
              </div>

              <div className={`card-body d-flex flex-column ${compact ? 'p-3' : 'p-4'}`}>
                {!compact && (
                  <div className="d-flex align-items-center gap-2 mb-3 text-uppercase" style={{ fontSize: '0.75rem', fontWeight: 600 }}>
                    <span className="text-abc-blue">{authorName}</span>
                  </div>
                )}

                <h3 className={`card-title fw-bold font-serif mb-3 text-dark ${compact ? 'h6' : 'h5'}`}>
                  <a href={route('news.show', { slug: post.slug })} className="text-decoration-none text-dark stretched-link hover-text-abc-blue">
                    {post.title}
                  </a>
                </h3>

                {!compact && (
                  <p className="card-text text-secondary small flex-grow-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                )}

                <div className="mt-3 position-relative" style={{ zIndex: 2 }}>
                  <a
                    href={route('news.show', { slug: post.slug })}
                    className="text-decoration-none text-abc-red fw-bold text-uppercase d-inline-flex align-items-center gap-1"
                    style={{ fontSize: '0.8rem', letterSpacing: '0.5px' }}
                  >
                    Leer Noticia <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </article>
          </div>
        );
      })}
      <style>{`
        .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
      `}</style>
    </div>
  );
}