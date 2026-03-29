import React, { useState, useMemo, useRef, useCallback, useEffect } from 'react';
import { Play, Search, Filter, Calendar, Eye, Clock, ArrowLeft, Grid, List, ChevronRight, X, Video as VideoIcon } from 'lucide-react';
import ShareButton from './ShareButton';

interface VideoReportaje {
  id: number;
  slug?: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  category: string;
  date: string;
  duration: string;
  views: string;
  featured?: boolean;
}

interface VideoReportajesProps {
  onBack: () => void;
}

// Datos temporales
const TEMP_VIDEOS: VideoReportaje[] = [
  {
    id: 1,
    slug: "crisis-politica-nicaragua-analisis-completo",
    title: "Especial: Crisis Política en Nicaragua - Análisis Completo",
    description: "Un análisis profundo sobre la situación política actual del país y sus implicaciones para el futuro.",
    thumbnail: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=800&h=450&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "Política",
    date: "3 Feb 2026",
    duration: "15:30",
    views: "45.2K",
    featured: true
  },
  {
    id: 2,
    slug: "economia-nacional-inflacion-perspectivas-2026",
    title: "Economía Nacional: Inflación y Perspectivas 2026",
    description: "Expertos analizan el comportamiento de la economía nacional y las proyecciones para este año.",
    thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=450&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "Economía",
    date: "2 Feb 2026",
    duration: "12:45",
    views: "32.1K"
  },
  {
    id: 3,
    slug: "investigacion-corrupcion-obras-publicas",
    title: "Investigación Especial: Corrupción en Obras Públicas",
    description: "Revelamos irregularidades en la construcción de infraestructura pública en varias ciudades.",
    thumbnail: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=450&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "Investigación",
    date: "1 Feb 2026",
    duration: "22:15",
    views: "78.5K",
    featured: true
  },
  {
    id: 4,
    slug: "deportes-resumen-jornada-futbolistica",
    title: "Deportes: Resumen de la Jornada Futbolística",
    description: "Lo mejor del fútbol nacional e internacional en un solo reportaje.",
    thumbnail: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=450&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "Deportes",
    date: "31 Ene 2026",
    duration: "18:20",
    views: "56.3K"
  },
  {
    id: 5,
    slug: "salud-nuevos-tratamientos-enfermedades-cronicas",
    title: "Salud: Nuevos Tratamientos para Enfermedades Crónicas",
    description: "Avances médicos que están cambiando la vida de miles de pacientes en el país.",
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=450&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "Salud",
    date: "30 Ene 2026",
    duration: "14:50",
    views: "41.7K"
  },
  {
    id: 6,
    slug: "cultura-festival-arte-contemporaneo",
    title: "Cultura: Festival Internacional de Arte Contemporáneo",
    description: "Cobertura completa del evento cultural más importante del año.",
    thumbnail: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=450&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "Cultura",
    date: "29 Ene 2026",
    duration: "16:35",
    views: "28.9K"
  },
  {
    id: 7,
    slug: "tecnologia-inteligencia-artificial-nicaragua",
    title: "Tecnología: Inteligencia Artificial en Nicaragua",
    description: "Cómo la IA está transformando diferentes sectores de la economía nacional.",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "Tecnología",
    date: "28 Ene 2026",
    duration: "13:25",
    views: "52.4K"
  },
  {
    id: 8,
    slug: "medio-ambiente-crisis-lago-nicaragua",
    title: "Medio Ambiente: Crisis del Lago de Nicaragua",
    description: "Reportaje sobre la contaminación y las medidas urgentes que se necesitan.",
    thumbnail: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=450&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "Medio Ambiente",
    date: "27 Ene 2026",
    duration: "19:40",
    views: "64.2K",
    featured: true
  },
  {
    id: 9,
    slug: "educacion-reforma-sistema-educativo",
    title: "Educación: Reforma del Sistema Educativo Nacional",
    description: "Análisis de los cambios propuestos y su impacto en estudiantes y maestros.",
    thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=450&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "Educación",
    date: "26 Ene 2026",
    duration: "17:15",
    views: "38.6K"
  }
];

export default function VideoReportajes({ onBack }: VideoReportajesProps) {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedVideo, setSelectedVideo] = useState<VideoReportaje | null>(null);
  const [displayedCount, setDisplayedCount] = useState(6);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [headerTop, setHeaderTop] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const observerTarget = useRef<HTMLDivElement>(null);

  // Generate dynamic categories
  const categories = useMemo(() => {
    const categoryCounts: Record<string, number> = {};
    TEMP_VIDEOS.forEach(video => {
      categoryCounts[video.category] = (categoryCounts[video.category] || 0) + 1;
    });

    const uniqueCategories = Object.keys(categoryCounts).sort();
    return [
      { name: 'Todos', count: TEMP_VIDEOS.length },
      ...uniqueCategories.map(cat => ({ name: cat, count: categoryCounts[cat] }))
    ];
  }, []);

  // Filter videos
  const filteredVideos = useMemo(() => {
    return TEMP_VIDEOS.filter(video => {
      const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        video.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'Todos' || video.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [activeCategory, searchTerm]);

  // Paginated videos
  const displayedVideos = filteredVideos.slice(0, displayedCount);
  const hasMore = displayedCount < filteredVideos.length;

  // Reset pagination when filters change
  useEffect(() => {
    setDisplayedCount(6);
  }, [activeCategory, searchTerm]);

  // Detectar altura del header del sitio para sticky offset
  useEffect(() => {
    const measureHeader = () => {
      const siteHeader = document.querySelector('header.fixed-top') as HTMLElement;
      if (siteHeader) setHeaderTop(siteHeader.offsetHeight);
    };
    measureHeader();
    window.addEventListener('resize', measureHeader);
    return () => window.removeEventListener('resize', measureHeader);
  }, []);

  // Scroll tracking para shrink effect y botón volver arriba
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 60);
      setShowScrollTop(y > 300);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Load more function
  const loadMore = useCallback(() => {
    if (isLoadingMore || !hasMore) return;

    setIsLoadingMore(true);
    setTimeout(() => {
      setDisplayedCount(prev => prev + 6);
      setIsLoadingMore(false);
    }, 500);
  }, [isLoadingMore, hasMore]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoadingMore) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [hasMore, isLoadingMore, loadMore]);

  const handleVideoClick = (video: VideoReportaje) => {
    setSelectedVideo(video);
  };

  const handleClosePlayer = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="video-reportajes-container min-vh-100 pb-5">
      {/* Video Player Modal */}
      {selectedVideo && (
        <div className="video-player-modal" onClick={handleClosePlayer}>
          <div className="video-player-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-player-btn" onClick={handleClosePlayer}>
              ✕
            </button>
            <div className="ratio ratio-16x9 mb-3">
              <iframe
                src={`${selectedVideo.videoUrl}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className="badge bg-abc-red">{selectedVideo.category}</span>
                <span className="text-muted small">{selectedVideo.date}</span>
                <span className="text-muted small">• {selectedVideo.duration}</span>
                <span className="text-muted small">• {selectedVideo.views} vistas</span>
                <div className="ms-auto">
                  {selectedVideo.slug && (
                    <ShareButton
                      content={{
                        title: selectedVideo.title,
                        slug: selectedVideo.slug,
                        type: 'video'
                      }}
                      variant="button"
                    />
                  )}
                </div>
              </div>
              <h3 className="h4 fw-bold mb-2">{selectedVideo.title}</h3>
              <p className="text-muted">{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Header – sticky debajo del header del sitio */}
      <div
        className="header-gradient shadow-lg border-0"
        style={{
          position: 'sticky',
          top: headerTop,
          zIndex: 1020,
          transition: 'padding 0.3s ease'
        }}
      >
        <div className="animated-header-bg"></div>
        <div
          className="container position-relative"
          style={{ zIndex: 2, paddingTop: isScrolled ? '10px' : '24px', paddingBottom: isScrolled ? '10px' : '24px', transition: 'padding 0.3s ease' }}
        >
          {/* Top row: back button + title + view-mode toggles */}
          <div className="d-flex align-items-center justify-content-between mb-2">
            <button
              onClick={onBack}
              className="btn btn-glass rounded-circle p-2 text-white hover-scale transition"
            >
              <ArrowLeft size={22} />
            </button>

            <div className="text-center">
              <div className="d-flex align-items-center gap-2 justify-content-center mb-1">
                <VideoIcon size={18} className="text-warning animate-pulse" />
                <h1 className="h5 fw-bold font-serif text-white m-0 tracking-wide text-shadow">VIDEO REPORTAJES</h1>
                <VideoIcon size={18} className="text-warning animate-pulse" />
              </div>
              {!isScrolled && (
                <p className="text-white-75 small mb-0">Mira nuestros trabajos audiovisuales: noticias, reportajes especiales y más.
                </p>
              )}
            </div>

            {/* View-mode toggles */}
            <div className="d-flex gap-2">
              <button
                className={`btn btn-glass rounded-circle p-2 text-white hover-scale${viewMode === 'grid' ? ' active' : ''}`}
                onClick={() => setViewMode('grid')}
                title="Vista cuadrícula"
              >
                <Grid size={20} />
              </button>
              <button
                className={`btn btn-glass rounded-circle p-2 text-white hover-scale${viewMode === 'list' ? ' active' : ''}`}
                onClick={() => setViewMode('list')}
                title="Vista lista"
              >
                <List size={20} />
              </button>
            </div>
          </div>

          {/* Inline search – always visible (matches PodcastView) */}
          <div className="podcast-search-wrap mb-2">
            <div className="input-group podcast-search-group">
              <span className="input-group-text podcast-search-icon">
                <Search size={16} />
              </span>
              <input
                type="text"
                className="form-control podcast-search-input"
                placeholder="Buscar reportajes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button className="btn podcast-search-clear" onClick={() => setSearchTerm('')}>
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Category Pills */}
          <div className="d-flex gap-2 overflow-auto pb-1 scrollbar-hide">
            {categories.map(cat => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`btn category-pill rounded-pill px-3 py-1 small fw-bold text-nowrap transition border-0 ${activeCategory === cat.name
                  ? 'category-active'
                  : 'category-inactive'
                  }`}
              >
                <span>{cat.name}</span>
                <span className="badge bg-white bg-opacity-25 ms-2">{cat.count}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Botón flotante: volver arriba */}
      <button
        className="scroll-top-btn"
        style={{
          opacity: showScrollTop ? 1 : 0,
          pointerEvents: showScrollTop ? 'auto' : 'none',
          transform: showScrollTop ? 'translateY(0)' : 'translateY(20px)',
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Volver arriba"
      >
        ↑
      </button>

      {/* Content */}
      <div className="container py-4">
        {/* Stats */}
        <div className="d-flex align-items-center justify-content-between mb-4 px-2">
          <div className="d-flex align-items-center gap-2">
            <div className="stat-badge"></div>
            <h3 className="h5 fw-bold text-dark mb-0">
              {activeCategory === 'Todos' ? '🎬 Todos los Videos' : `📂 ${activeCategory}`}
            </h3>
          </div>
          <span className="badge bg-light text-secondary px-3 py-2">
            {filteredVideos.length} videos
          </span>
        </div>

        {/* Video Grid/List */}
        {filteredVideos.length === 0 ? (
          <div className="text-center py-5">
            <div className="text-muted mb-2" style={{ fontSize: '3rem' }}>🔍</div>
            <h4 className="text-secondary">No se encontraron videos</h4>
            <p className="text-muted">Intenta con otra categoría o búsqueda</p>
          </div>
        ) : (
          <>
            <div className={viewMode === 'grid' ? 'row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4' : 'd-flex flex-column gap-3'}>
              {displayedVideos.map((video, index) => (
                <div
                  key={video.id}
                  className={viewMode === 'grid' ? 'col' : ''}
                  style={{
                    animationDelay: `${(index % 6) * 0.1}s`,
                    opacity: 0,
                    animation: 'fadeInUp 0.6s ease forwards'
                  }}
                >
                  {viewMode === 'grid' ? (
                    // Grid View
                    <div
                      className="video-card"
                      onClick={() => handleVideoClick(video)}
                    >
                      <div className="video-thumbnail">
                        <img src={video.thumbnail} alt={video.title} />
                        <div className="video-overlay">
                          <div className="play-button">
                            <Play size={40} fill="white" />
                          </div>
                        </div>
                        <span className="duration-badge">{video.duration}</span>
                        {video.featured && <span className="featured-badge">⭐ Destacado</span>}
                        {video.slug && (
                          <div className="share-btn-overlay" onClick={(e) => e.stopPropagation()}>
                            <ShareButton
                              content={{
                                title: video.title,
                                slug: video.slug,
                                type: 'video'
                              }}
                              variant="icon"
                            />
                          </div>
                        )}
                      </div>
                      <div className="video-info">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <span className="category-badge">{video.category}</span>
                          <span className="views-count">
                            <Eye size={14} /> {video.views}
                          </span>
                        </div>
                        <h5 className="video-title">{video.title}</h5>
                        <p className="video-description">{video.description}</p>
                        <div className="video-meta">
                          <span><Calendar size={14} /> {video.date}</span>
                          <span><Clock size={14} /> {video.duration}</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // List View
                    <div
                      className="video-card-list"
                      onClick={() => handleVideoClick(video)}
                    >
                      <div className="video-thumbnail-list">
                        <img src={video.thumbnail} alt={video.title} />
                        <div className="video-overlay">
                          <Play size={32} fill="white" />
                        </div>
                        <span className="duration-badge">{video.duration}</span>
                      </div>
                      <div className="video-info-list">
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <span className="category-badge">{video.category}</span>
                          {video.featured && <span className="featured-badge-small">⭐</span>}
                        </div>
                        <h5 className="video-title-list">{video.title}</h5>
                        <p className="video-description-list">{video.description}</p>
                        <div className="d-flex align-items-center gap-3 text-muted small">
                          <span><Calendar size={14} /> {video.date}</span>
                          <span><Eye size={14} /> {video.views}</span>
                          <span><Clock size={14} /> {video.duration}</span>
                        </div>
                      </div>
                      {video.slug && (
                        <div onClick={(e) => e.stopPropagation()}>
                          <ShareButton
                            content={{
                              title: video.title,
                              slug: video.slug,
                              type: 'video'
                            }}
                            variant="icon"
                          />
                        </div>
                      )}
                      <ChevronRight size={24} className="text-muted" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Infinite Scroll Observer */}
            <div ref={observerTarget} className="py-4">
              {isLoadingMore && (
                <div className="text-center">
                  <div className="spinner-border text-abc-red" role="status">
                    <span className="visually-hidden">Cargando más...</span>
                  </div>
                  <p className="text-muted mt-2 small">Cargando más videos...</p>
                </div>
              )}
              {!hasMore && displayedVideos.length > 0 && (
                <div className="text-center text-muted">
                  <p className="small">✨ Has visto todos los videos</p>
                </div>
              )}
            </div>
          </>
        )}
      </div>

      <style>{`
        .video-reportajes-container {
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }

        /* ── Header (matches PodcastView exactly) ── */
        .header-gradient {
          background: linear-gradient(135deg, #dc2626 0%, #991b1b 50%, #7f1d1d 100%);
          position: relative;
          overflow: hidden;
        }

        .animated-header-bg {
          position: absolute;
          top: -50%; left: -50%;
          width: 200%; height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%);
          animation: rotate-slow 30s linear infinite;
        }

        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .text-shadow      { text-shadow: 2px 2px 4px rgba(0,0,0,0.2); }
        .text-white-75    { color: rgba(255,255,255,0.75); }

        /* Glass button */
        .btn-glass {
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
        }
        .btn-glass:hover    { background: rgba(255,255,255,0.3); }
        .btn-glass.active   { background: rgba(255,255,255,0.35); border-color: rgba(255,255,255,0.5); }

        .hover-scale               { transition: transform 0.3s ease; }
        .hover-scale:hover         { transform: scale(1.05); }

        /* Pulse animation */
        .animate-pulse {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.5; }
        }

        /* Search bar (identical to PodcastView) */
        .podcast-search-wrap {
          width: 100%;
          max-width: 480px;
          margin: 0 auto;
          display: flex;
        }
        .podcast-search-group {
          background: rgba(255,255,255,0.18);
          border-radius: 30px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.4);
          backdrop-filter: blur(10px);
          flex: 1;
        }
        .podcast-search-icon {
          background: transparent;
          border: none;
          color: rgba(255,255,255,0.8);
          padding-left: 14px;
        }
        .podcast-search-input {
          background: transparent;
          border: none;
          color: white;
          padding: 8px 4px;
          font-size: 0.88rem;
        }
        .podcast-search-input::placeholder { color: rgba(255,255,255,0.6); }
        .podcast-search-input:focus {
          background: transparent;
          box-shadow: none;
          color: white;
        }
        .podcast-search-clear {
          background: transparent;
          border: none;
          color: rgba(255,255,255,0.7);
          padding-right: 12px;
        }
        .podcast-search-clear:hover { color: white; }

        /* Category pills (identical to PodcastView) */
        .category-pill {
          font-size: 0.82rem;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .category-active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          box-shadow: 0 4px 12px rgba(102,126,234,0.4);
          transform: translateY(-2px);
        }
        .category-inactive {
          background: rgba(255,255,255,0.9);
          color: #64748b;
        }
        .category-inactive:hover {
          background: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }

        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

        /* Scroll-to-top (identical to PodcastView) */
        .scroll-top-btn {
          position: fixed;
          bottom: 28px; right: 24px;
          z-index: 2000;
          width: 46px; height: 46px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          font-size: 1.1rem; font-weight: bold;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(102, 126, 234, 0.45);
          transition: opacity 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }
        .scroll-top-btn:hover {
          box-shadow: 0 6px 24px rgba(102, 126, 234, 0.65);
          transform: translateY(-3px) !important;
        }

        /* Stat Badge */
        .stat-badge {
          width: 4px;
          height: 24px;
          background: linear-gradient(180deg, #dc2626 0%, #991b1b 100%);
          border-radius: 2px;
          box-shadow: 0 0 10px rgba(220, 38, 38, 0.5);
        }

        /* Video Card - Grid View */
        .video-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .video-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        }

        .video-thumbnail {
          position: relative;
          padding-top: 56.25%; /* 16:9 */
          overflow: hidden;
          background: #000;
        }

        .video-thumbnail img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .video-card:hover .video-thumbnail img {
          transform: scale(1.05);
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .video-card:hover .video-overlay {
          opacity: 1;
        }

        .play-button {
          background: rgba(220, 38, 38, 0.9);
          border-radius: 50%;
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: scale(0.8);
          transition: transform 0.3s ease;
        }

        .video-card:hover .play-button {
          transform: scale(1);
        }

        .duration-badge {
          position: absolute;
          bottom: 12px;
          right: 12px;
          background: rgba(0, 0, 0, 0.85);
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .featured-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
          color: white;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.7rem;
          font-weight: 700;
          box-shadow: 0 2px 8px rgba(251, 191, 36, 0.4);
        }

        .share-btn-overlay {
          position: absolute;
          top: 12px;
          right: 12px;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 5;
        }

        .video-card:hover .share-btn-overlay {
          opacity: 1;
        }

        .video-info {
          padding: 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .category-badge {
          background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
          color: white;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 600;
          display: inline-block;
        }

        .views-count {
          color: #6b7280;
          font-size: 0.8rem;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .video-title {
          font-size: 1rem;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 8px;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: color 0.3s ease;
        }

        .video-card:hover .video-title {
          color: #dc2626;
        }

        .video-description {
          font-size: 0.85rem;
          color: #6b7280;
          margin-bottom: 12px;
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          flex: 1;
        }

        .video-meta {
          display: flex;
          align-items: center;
          gap: 16px;
          font-size: 0.75rem;
          color: #9ca3af;
        }

        .video-meta span {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        /* List View */
        .video-card-list {
          background: white;
          border-radius: 12px;
          padding: 16px;
          display: flex;
          align-items: center;
          gap: 20px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .video-card-list:hover {
          transform: translateX(8px);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
        }

        .video-thumbnail-list {
          position: relative;
          width: 240px;
          min-width: 240px;
          height: 135px;
          border-radius: 8px;
          overflow: hidden;
          background: #000;
        }

        .video-thumbnail-list img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .video-info-list {
          flex: 1;
        }

        .featured-badge-small {
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
          color: white;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 700;
        }

        .video-title-list {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 8px;
          line-height: 1.4;
        }

        .video-description-list {
          font-size: 0.9rem;
          color: #6b7280;
          margin-bottom: 12px;
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Video Player Modal */
        .video-player-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.95);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .video-player-content {
          background: white;
          border-radius: 16px;
          max-width: 1200px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          animation: slideUp 0.3s ease;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .close-player-btn {
          position: absolute;
          top: 16px;
          right: 16px;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          font-size: 24px;
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s ease;
        }

        .close-player-btn:hover {
          background: rgba(220, 38, 38, 0.9);
          transform: scale(1.1);
        }

        /* Fade In Animation */
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

        /* Responsive */
        @media (max-width: 768px) {
          .video-thumbnail-list {
            width: 160px;
            min-width: 160px;
            height: 90px;
          }

          .video-card-list {
            flex-direction: column;
            align-items: flex-start;
          }

          .video-thumbnail-list {
            width: 100%;
          }
        }

        /* Botón flotante volver arriba */
        .scroll-top-btn {
          position: fixed;
          bottom: 28px;
          right: 24px;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          border: none;
          background: linear-gradient(135deg, #dc2626, #991b1b);
          color: white;
          font-size: 1.3rem;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 18px rgba(220,38,38,0.5);
          z-index: 9999;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          animation: fadeInScroll 0.3s ease;
        }
        .scroll-top-btn:hover {
          transform: translateY(-3px) scale(1.08);
          box-shadow: 0 8px 24px rgba(220,38,38,0.65);
        }
        @keyframes fadeInScroll {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
