import React from 'react';
import { asset } from '@/url';
import { route } from 'ziggy-js';
import { ArticleData } from '../types';
import { Clock, ArrowRight, Star, TrendingUp } from 'lucide-react';

interface FeaturedSectionProps {
  posts: ArticleData[];
  onPostClick: (slug: string) => void;
}

export default function FeaturedSection({ posts, onPostClick }: FeaturedSectionProps) {
  // Layout: 1 large main post + 3 secondary posts below.
  if (!posts || posts.length < 4) return null;

  const mainPost = posts[0];
  const secondaryPosts = posts.slice(1, 4);

  return (
    <section className="featured-section-dark py-5 bg-abc-blue position-relative overflow-hidden">
      {/* Decorative BG */}
      <div className="position-absolute top-0 end-0 p-5 opacity-5">
        <TrendingUp size={400} strokeWidth={0.4} color="white" />
      </div>

      <div className="container position-relative z-2">
        {/* Section Header */}
        <div className="d-flex align-items-end justify-content-between mb-4 border-bottom border-white border-opacity-25 pb-3">
          <div>
            <span className="text-abc-gold text-uppercase fw-bold small letter-spacing-2 mb-1 d-block">
              Contenido Exclusivo
            </span>
            <h2 className="display-5 fw-bold text-white font-serif mb-0">
              Noticias Destacadas
            </h2>
          </div>
        </div>

        <div className="row g-4">

          {/* Main Featured Article (Full width) */}
          <div className="col-12">
            <div
              className="card text-white border-0 rounded-4 overflow-hidden shadow-lg featured-card-main-dark cursor-pointer"
              onClick={() => onPostClick(mainPost.slug)}
            >
              <div className="position-relative" style={{ minHeight: '500px' }}>
                <img
                  src={mainPost.image_path ? asset(`storage/${mainPost.image_path}`) : 'https://placehold.co/1200x500?text=ABC'}
                  alt={mainPost.title}
                  className="w-100 h-100 object-fit-cover transition-transform position-absolute top-0 start-0"
                  onError={(e) => (e.target as HTMLImageElement).src = 'https://placehold.co/1200x500?text=ABC'}
                />
                <div className="overlay-gradient-dark position-absolute top-0 start-0 w-100 h-100"></div>

                <div className="card-content position-absolute bottom-0 start-0 w-100 p-4 p-md-5">
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <span className="badge bg-abc-red shadow-sm text-uppercase px-3 py-2 rounded-pill">
                      <Star size={14} className="me-1 fill-white" /> Destacado
                    </span>
                  </div>
                  <h3 className="display-4 fw-bold font-serif mb-3 text-shadow lh-sm" style={{ maxWidth: '85%' }}>
                    {mainPost.title}
                  </h3>
                  <p className="lead fs-5 text-white-75 mb-4 d-none d-md-block" style={{ maxWidth: '70%' }}>
                    {mainPost.excerpt}
                  </p>
                  <div className="d-flex align-items-center gap-3 small fw-medium">
                    <span className="text-abc-gold fw-bold text-uppercase">{mainPost.author?.[0]?.name || 'Redacción'}</span>
                    <span className="text-white-50">•</span>
                    <div className="d-flex align-items-center gap-1 text-white-50">
                      <Clock size={14} /> {new Date(mainPost.published_at).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Articles */}
          {secondaryPosts.map((post) => (
            <div key={post.id} className="col-lg-4 col-md-6">
              <div
                className="card h-100 border-0 rounded-4 overflow-hidden shadow-sm glass-card cursor-pointer"
                onClick={() => onPostClick(post.slug)}
              >
                <div className="position-relative overflow-hidden" style={{ height: '200px' }}>
                  <img
                    src={post.image_path ? asset(`storage/${post.image_path}`) : 'https://placehold.co/400x250?text=ABC'}
                    alt={post.title}
                    className="w-100 h-100 object-fit-cover transition-transform"
                    onError={(e) => (e.target as HTMLImageElement).src = 'https://placehold.co/400x250?text=ABC'}
                  />
                  <div className="overlay-gradient-sm position-absolute top-0 start-0 w-100 h-100"></div>
                  <span className="position-absolute top-0 end-0 m-2 badge bg-white bg-opacity-10 text-white shadow-sm small">
                    {post.categories?.[0]?.name || 'Noticias'}
                  </span>
                </div>

                <div className="card-body d-flex flex-column p-3">
                  <h5 className="h6 fw-bold font-serif mb-2 text-white lh-base flex-grow-1">
                    {post.title}
                  </h5>

                  <div className="mt-auto pt-2">
                    <a href={route('news.show', { slug: post.slug })} className="text-abc-gold fw-bold d-flex align-items-center gap-1 small text-decoration-none stretched-link-surface">
                      LEER MÁS <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

      <style>{`
        .featured-section-dark {
             background: #0f172a; /* bg-abc-blue */
             background-image: radial-gradient(circle at 10% 20%, rgba(30, 41, 59, 0.5) 0%, transparent 50%);
        }
        .cursor-pointer { cursor: pointer; }
        .text-shadow { text-shadow: 0 2px 15px rgba(0,0,0,0.6); }
        .fill-white { fill: white; }
        .letter-spacing-2 { letter-spacing: 2px; }
        .object-fit-cover { object-fit: cover; }

        .overlay-gradient-dark {
            background: linear-gradient(to top, rgba(15, 23, 42, 1) 10%, rgba(15, 23, 42, 0.7) 40%, transparent 80%);
        }
        .overlay-gradient-sm {
            background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 70%);
        }

        .transition-transform {
            transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .featured-card-main-dark:hover .transition-transform {
            transform: scale(1.04);
        }
        
        .glass-card {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1) !important;
            transition: background 0.3s ease, border 0.3s ease, transform 0.3s ease;
        }
        .glass-card:hover {
            background: rgba(255, 255, 255, 0.1);
            border-color: rgba(255, 255, 255, 0.2) !important;
            transform: translateY(-5px);
        }
        .glass-card:hover .transition-transform {
            transform: scale(1.08);
        }
        .stretched-link-surface::after {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 1;
            content: "";
        }
      `}</style>
    </section>
  );
}
