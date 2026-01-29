import React from 'react';
import { asset } from '@/url';
import { Calendar, User, MapPin, ArrowRight } from 'lucide-react';
import { ArticleData } from '../types';

interface HeroProps {
  post: ArticleData | null;
  onReadMore?: () => void;
}

export default function Hero({ post, onReadMore }: HeroProps) {
  if (!post) {
    return (
      <div className="hero-section position-relative d-flex align-items-center bg-abc-blue" style={{ minHeight: '80vh' }}>
        <div className="container text-center text-white">
          <div className="spinner-border" role="status"></div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="hero-section position-relative d-flex align-items-center"
      style={{
        backgroundImage: `url("${post.image_path ? asset(`storage/${post.image_path}`) : ''}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '80vh'
      }}
    >
      {/* Dark overlay with gradient to ensure text readability over the image */}
      <div
        className="hero-overlay"
        style={{
          background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 32, 96, 0.5) 50%, rgba(0, 32, 96, 0.3) 100%)'
        }}
      ></div>

      {/* Decorative shape */}
      <div className="position-absolute top-0 end-0 h-100 w-25 bg-abc-red opacity-25" style={{ transform: 'skewX(-12deg) translateX(50%)', zIndex: 2 }}></div>

      <div className="container position-relative z-3 py-5 mt-5">
        <div className="row">
          <div className="col-lg-8 col-xl-7">

            {/* Category Badge */}
            {post.categories && post.categories.length > 0 && (
              <span className="badge bg-abc-gold text-dark text-uppercase px-3 py-2 mb-3 fs-6 shadow-sm fw-bold">
                {post.categories[0].name}
              </span>
            )}

            {/* Title */}
            <h1 className="display-3 fw-bold mb-3 font-serif text-white">
              {post.title}
            </h1>

            {/* Metadata (Author, Date, Location) */}
            <div className="d-flex flex-wrap align-items-center gap-3 text-white-50 mb-4 small fw-medium">
              <div className="d-flex align-items-center gap-1">
                <Calendar size={16} className="text-abc-gold" />
                <span>{new Date(post.published_at).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              </div>
              <div className="d-flex align-items-center gap-1">
                <User size={16} className="text-abc-gold" />
                <span>Por {post.author && post.author.length > 0 ? post.author.map(a => a.name).join(', ') : 'Redacción'}</span>
              </div>
              <div className="d-flex align-items-center gap-1">
                <MapPin size={16} className="text-abc-gold" />
                <span>{post.city || post.country || 'Nicaragua'}-{post.country}</span>
              </div>
            </div>

            {/* Excerpt - Hidden on mobile (d-none d-md-block) */}
            <p className="lead text-light mb-5 ps-4 border-start border-4 border-abc-red bg-black bg-opacity-50 py-3 pe-3 rounded-end d-none d-md-block">
              {post.excerpt}
            </p>

            {/* Actions */}
            <div className="d-flex flex-column flex-sm-row gap-3">
              <button
                onClick={onReadMore}
                className="btn btn-abc-red text-white fw-bold px-4 py-3 text-uppercase shadow-lg border-0 rounded-2 d-flex align-items-center justify-content-center gap-2"
              >
                Leer Noticia Completa <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}