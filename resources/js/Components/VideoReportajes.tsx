import React, { useState, useMemo, useRef, useCallback, useEffect } from 'react';
import { Play, Search, Filter, Calendar, Eye, Clock, ArrowLeft, Grid, List, ChevronRight, Video as VideoIcon } from 'lucide-react';
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

      {/* Header */}
      <div className="video-header sticky-top shadow-lg">
        <div className="animated-bg"></div>
        <div className="container py-4 position-relative" style={{ zIndex: 2 }}>
          <div className="d-flex align-items-center justify-content-between mb-4">
            <button
              onClick={onBack}
              className="btn btn-glass-dark rounded-circle p-2 text-white"
            >
              <ArrowLeft size={24} />
            </button>
            <div className="text-center">
              <div className="d-flex align-items-center gap-2 justify-content-center mb-1">
                <VideoIcon size={24} className="text-abc-red animate-pulse-slow" />
                <h1 className="h4 fw-bold text-white m-0">VIDEO REPORTAJES</h1>
                <VideoIcon size={24} className="text-abc-red animate-pulse-slow" />
              </div>
              <p className="text-white-75 small mb-0">ABC TV - Periodismo de Investigación</p>
            </div>
            <div className="d-flex gap-2">
              <button
                className={`btn btn-glass-dark rounded-circle p-2 ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
              >
                <Grid size={20} />
              </button>
              <button
                className={`btn btn-glass-dark rounded-circle p-2 ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
              >
                <List size={20} />
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="search-bar-container mb-3">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Buscar reportajes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filters */}
          <div className="d-flex gap-2 overflow-auto pb-2 scrollbar-hide">
            {categories.map(cat => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`category-btn ${activeCategory === cat.name ? 'active' : ''}`}
              >
                <span>{cat.name}</span>
                <span className="badge bg-white bg-opacity-20 ms-2">{cat.count}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container py-4">
        {/* Stats */}
        <div className="d-flex align-items-center justify-content-between mb-4 px-2">
          <div className="d-flex align-items-center gap-2">
            <div className="stat-badge"></div>
            <h3 className="h5 fw-bold text-dark mb-0">
              {activeCategory === 'Todos' ? '🎬 Todos los Reportajes' : `📂 ${activeCategory}`}
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
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }

        /* Header */
        .video-header {
          background: linear-gradient(135deg, #dc2626 0%, #991b1b 50%, #7f1d1d 100%);
          position: relative;
          overflow: hidden;
        }

        .animated-bg {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          animation: rotate-slow 30s linear infinite;
        }

        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .text-white-75 {
          color: rgba(255, 255, 255, 0.75);
        }

        .btn-glass-dark {
          background: rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          transition: all 0.3s ease;
        }

        .btn-glass-dark:hover {
          background: rgba(0, 0, 0, 0.3);
          transform: scale(1.05);
        }

        .btn-glass-dark.active {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.4);
        }

        .animate-pulse-slow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        /* Search Bar */
        .search-bar-container {
          position: relative;
          max-width: 600px;
          margin: 0 auto;
        }

        .search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: rgba(255, 255, 255, 0.6);
          pointer-events: none;
        }

        .search-input {
          width: 100%;
          padding: 12px 16px 12px 48px;
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          color: white;
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }

        .search-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .search-input:focus {
          outline: none;
          background: rgba(255, 255, 255, 0.25);
          border-color: rgba(255, 255, 255, 0.4);
        }

        /* Category Buttons */
        .category-btn {
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          white-space: nowrap;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .category-btn:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(-2px);
        }

        .category-btn.active {
          background: rgba(255, 255, 255, 0.3);
          border-color: rgba(255, 255, 255, 0.5);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
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
      `}</style>
    </div>
  );
}
