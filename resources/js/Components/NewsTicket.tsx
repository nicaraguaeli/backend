import React, { useState, useEffect } from 'react';
import { asset } from '@/url';
import { ArticleData } from '../types';
import { X, Zap, ArrowRight, TrendingUp } from 'lucide-react';

interface NewsTickerProps {
  news: ArticleData[];
  onPostClick: (slug: string) => void;
}

export default function NewsTicker({ news, onPostClick }: NewsTickerProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // No renderizar si no hay noticias o el usuario lo cerró
  if (!news || news.length === 0 || !isVisible) return null;

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      // Selección secuencial
      setCurrentIndex((prevIndex) => (prevIndex + 1) % news.length);
    }, 10000); // Cambiar cada 10 segundos

    return () => clearInterval(interval);
  }, [news.length, isHovered]);

  const currentPost = news[currentIndex];

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
  };

  return (
    <div
      className="news-ticker-container position-fixed d-none d-md-block animate-slide-up"
      style={{
        bottom: '90px', // Ajustado para estar encima del reproductor
        right: '20px',
        zIndex: 1070, // Mayor que AudioPlayer (1060)
        maxWidth: '350px',
        width: '100%'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="card border-0 shadow-lg overflow-hidden cursor-pointer"
        onClick={() => onPostClick(currentPost.slug)}
        style={{ borderLeft: '4px solid var(--abc-red)' }}
      >
        <div className="card-body p-3 d-flex gap-3 align-items-start bg-white">

          {/* Icon Section */}
          <div className="flex-shrink-0 pt-1">
            <div className="bg-abc-red bg-opacity-10 text-abc-red p-2 rounded-circle animate-pulse-slow">
              <Zap size={20} fill="currentColor" />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-grow-1 overflow-hidden">
            <div className="d-flex justify-content-between align-items-start mb-1">
              <span className="badge bg-abc-blue text-uppercase" style={{ fontSize: '0.6rem' }}>
                {currentPost.categories?.[0]?.name || 'Noticias'}
              </span>
              <button
                onClick={handleClose}
                className="btn btn-link p-0 text-muted hover-red"
                title="Cerrar notificación"
              >
                <X size={16} />
              </button>
            </div>

            <h6 className="fw-bold text-dark mb-1 line-clamp-2 font-serif" style={{ fontSize: '0.9rem', lineHeight: '1.3' }}>
              {currentPost.title}
            </h6>

            <div className="d-flex align-items-center gap-1 text-abc-red small fw-bold mt-2" style={{ fontSize: '0.75rem' }}>
              Leer ahora <ArrowRight size={12} />
            </div>
          </div>

          {/* Image Thumbnail */}
          <div className="d-none d-sm-block flex-shrink-0" style={{ width: '60px', height: '60px' }}>
            <img
              src={currentPost.image_path ? asset(`storage/${currentPost.image_path}`) : ''}
              alt={currentPost.title}
              className="w-100 h-100 object-fit-cover rounded"
            />
          </div>
        </div>

        {/* Progress Bar Animation */}
        {!isHovered && (
          <div className="progress-bar-ticker bg-abc-red opacity-50"></div>
        )}
      </div>

      <style>{`
        .cursor-pointer { cursor: pointer; }
        .hover-red:hover { color: var(--abc-red) !important; }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .animate-slide-up {
          animation: slideUp 0.5s ease-out;
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-pulse-slow {
          animation: pulse 2s infinite;
        }
        
        .progress-bar-ticker {
            height: 3px;
            width: 0%;
            animation: progress 6s linear infinite;
        }
        @keyframes progress {
            0% { width: 0%; }
            100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}