import React from 'react';
import { asset } from '@/url';
import { route } from 'ziggy-js';
import { ArticleData } from '../types';
import { Clock, ArrowRight, Star, TrendingUp, Sparkles, Eye } from 'lucide-react';

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
    <section className="featured-section-enhanced py-5 position-relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="bg-decoration">
        <div className="decoration-circle decoration-1"></div>
        <div className="decoration-circle decoration-2"></div>
        <div className="decoration-circle decoration-3"></div>
      </div>

      {/* Decorative Icon */}
      <div className="position-absolute top-0 end-0 p-5 opacity-3">
        <TrendingUp size={350} strokeWidth={0.3} color="rgba(255, 255, 255, 0.1)" />
      </div>

      <div className="container position-relative z-3">
        {/* Enhanced Section Header */}
        <div className="section-header mb-5">
          <div className="d-flex align-items-center gap-2 mb-2">
            <Sparkles size={20} className="text-abc-gold sparkle-icon" />
            <span className="text-abc-gold text-uppercase fw-bold small letter-spacing-3">
              Contenido Exclusivo
            </span>
          </div>
          <h2 className="display-4 fw-bold text-white font-serif mb-2 header-title">
            Noticias Destacadas
          </h2>
          <div className="header-underline"></div>
        </div>

        <div className="row g-4">
          {/* Main Featured Article (Full width) */}
          <div className="col-12">
            <div
              className="featured-card-main cursor-pointer"
              onClick={() => onPostClick(mainPost.slug)}
            >
              <div className="featured-image-wrapper">
                <img
                  src={mainPost.image_path ? asset(`storage/${mainPost.image_path}`) : 'https://placehold.co/1200x500?text=ABC'}
                  alt={mainPost.title}
                  className="featured-image"
                  onError={(e) => (e.target as HTMLImageElement).src = 'https://placehold.co/1200x500?text=ABC'}
                />
                <div className="featured-overlay"></div>
                <div className="featured-shine"></div>

                <div className="featured-content">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <span className="premium-badge">
                      <Star size={16} className="me-2 fill-current" />
                      Destacado
                    </span>
                    {mainPost.categories?.[0]?.name && (
                      <span className="category-badge">
                        {mainPost.categories[0].name}
                      </span>
                    )}
                  </div>

                  <h3 className="featured-title">
                    {mainPost.title}
                  </h3>

                  <p className="featured-excerpt d-none d-md-block">
                    {mainPost.excerpt}
                  </p>

                  <div className="featured-meta">
                    <div className="d-flex align-items-center gap-3 flex-wrap">
                      <span className="author-name">
                        {mainPost.author?.[0]?.name || 'Redacción'}
                      </span>
                      <span className="meta-separator">•</span>
                      <div className="d-flex align-items-center gap-2 date-info">
                        <Clock size={15} />
                        <span>{new Date(mainPost.published_at).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Articles */}
          {secondaryPosts.map((post, index) => (
            <div key={post.id} className="col-lg-4 col-md-6">
              <div
                className="secondary-card cursor-pointer"
                onClick={() => onPostClick(post.slug)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="secondary-image-wrapper">
                  <img
                    src={post.image_path ? asset(`storage/${post.image_path}`) : 'https://placehold.co/400x250?text=ABC'}
                    alt={post.title}
                    className="secondary-image"
                    onError={(e) => (e.target as HTMLImageElement).src = 'https://placehold.co/400x250?text=ABC'}
                  />
                  <div className="secondary-overlay"></div>
                  <span className="secondary-category-badge">
                    {post.categories?.[0]?.name || 'Noticias'}
                  </span>
                </div>

                <div className="secondary-body">
                  <h5 className="secondary-title">
                    {post.title}
                  </h5>

                  <div className="secondary-footer">
                    <div className="d-flex align-items-center justify-content-between">
                      <span className="read-more-link">
                        <span>Leer más</span>
                        <ArrowRight size={16} className="arrow-icon" />
                      </span>
                      <div className="d-flex align-items-center gap-1 text-white text-opacity-50 small">
                        <Eye size={14} />
                        <span>{Math.floor(Math.random() * 500) + 100}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* Section Background */
        .featured-section-enhanced {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
          position: relative;
        }

        /* Animated Background Decorations */
        .bg-decoration {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }

        .decoration-circle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%);
          animation: float 20s ease-in-out infinite;
        }

        .decoration-1 {
          width: 400px;
          height: 400px;
          top: -100px;
          left: -100px;
          animation-delay: 0s;
        }

        .decoration-2 {
          width: 300px;
          height: 300px;
          top: 50%;
          right: -50px;
          animation-delay: 7s;
        }

        .decoration-3 {
          width: 250px;
          height: 250px;
          bottom: -50px;
          left: 30%;
          animation-delay: 14s;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        /* Section Header */
        .section-header {
          animation: fadeInUp 0.6s ease-out;
        }

        .sparkle-icon {
          animation: sparkle 2s ease-in-out infinite;
        }

        @keyframes sparkle {
          0%, 100% { opacity: 1; transform: rotate(0deg) scale(1); }
          50% { opacity: 0.7; transform: rotate(180deg) scale(1.1); }
        }

        .letter-spacing-3 {
          letter-spacing: 3px;
        }

        .header-title {
          background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .header-underline {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #d4af37 0%, transparent 100%);
          border-radius: 2px;
          animation: expandWidth 0.8s ease-out 0.3s backwards;
        }

        @keyframes expandWidth {
          from { width: 0; }
          to { width: 80px; }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Main Featured Card */
        .featured-card-main {
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          animation: fadeInUp 0.8s ease-out 0.2s backwards;
        }

        .featured-card-main:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
        }

        .featured-image-wrapper {
          position: relative;
          min-height: 550px;
          overflow: hidden;
        }

        .featured-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
          transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .featured-card-main:hover .featured-image {
          transform: scale(1.05);
        }

        .featured-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to top,
            rgba(15, 23, 42, 0.98) 0%,
            rgba(15, 23, 42, 0.85) 30%,
            rgba(15, 23, 42, 0.4) 60%,
            transparent 100%
          );
          z-index: 1;
        }

        .featured-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.1) 50%,
            transparent 100%
          );
          z-index: 2;
          transition: left 0.7s ease;
        }

        .featured-card-main:hover .featured-shine {
          left: 100%;
        }

        .featured-content {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 3rem;
          z-index: 2;
        }

        @media (max-width: 768px) {
          .featured-content {
            padding: 2rem;
          }
        }

        .premium-badge {
          display: inline-flex;
          align-items: center;
          background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
          color: white;
          padding: 0.6rem 1.2rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 4px 15px rgba(220, 38, 38, 0.4);
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { box-shadow: 0 4px 15px rgba(220, 38, 38, 0.4); }
          50% { box-shadow: 0 4px 25px rgba(220, 38, 38, 0.6); }
        }

        .premium-badge .fill-current {
          fill: currentColor;
        }

        .category-badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .featured-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 800;
          color: white;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          max-width: 90%;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.7);
          font-family: 'Georgia', serif;
        }

        .featured-excerpt {
          font-size: 1.15rem;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.7;
          margin-bottom: 2rem;
          max-width: 75%;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }

        .featured-meta {
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          padding-top: 1.5rem;
        }

        .author-name {
          color: #d4af37;
          font-weight: 700;
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .meta-separator {
          color: rgba(255, 255, 255, 0.4);
          font-size: 1.2rem;
        }

        .date-info {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
          font-weight: 500;
        }

        /* Secondary Cards */
        .secondary-card {
          height: 100%;
          border-radius: 20px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          animation: fadeInUp 0.6s ease-out backwards;
        }

        .secondary-card:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.15);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
        }

        .secondary-image-wrapper {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .secondary-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .secondary-card:hover .secondary-image {
          transform: scale(1.1) rotate(1deg);
        }

        .secondary-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.7) 0%,
            rgba(0, 0, 0, 0.3) 50%,
            transparent 100%
          );
          opacity: 0.8;
          transition: opacity 0.4s ease;
        }

        .secondary-card:hover .secondary-overlay {
          opacity: 0.6;
        }

        .secondary-category-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(255, 255, 255, 0.95);
          color: #0f172a;
          padding: 0.4rem 0.9rem;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          z-index: 2;
        }

        .secondary-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          min-height: 160px;
        }

        .secondary-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: white;
          line-height: 1.5;
          margin: 0;
          flex-grow: 1;
          font-family: 'Georgia', serif;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .secondary-footer {
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .read-more-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #d4af37;
          font-weight: 700;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s ease;
        }

        .read-more-link .arrow-icon {
          transition: transform 0.3s ease;
        }

        .secondary-card:hover .read-more-link {
          gap: 0.8rem;
        }

        .secondary-card:hover .arrow-icon {
          transform: translateX(5px);
        }

        /* Utilities */
        .cursor-pointer {
          cursor: pointer;
        }

        /* Responsive */
        @media (max-width: 992px) {
          .featured-title {
            max-width: 100%;
          }
          .featured-excerpt {
            max-width: 100%;
          }
        }

        @media (max-width: 768px) {
          .featured-image-wrapper {
            min-height: 400px;
          }
          .secondary-image-wrapper {
            height: 180px;
          }
        }
      `}</style>
    </section>
  );
}
