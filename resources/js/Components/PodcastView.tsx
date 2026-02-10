import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { Play, Clock, ChevronRight, Search, Mic2, ArrowLeft, Info, Radio, Headphones, Share2 } from 'lucide-react';
import { router } from '@inertiajs/react';
import { fetchPodcasts, PodcastEpisode } from '../services/podcastService';
import TopEpisodes from './TopEpisodes';

interface PodcastViewProps {
  onBack: () => void;
  onPlayPodcast?: (episode: PodcastEpisode) => void;
  onOpenPodcastInfo: (episode: PodcastEpisode) => void;
}

export default function PodcastView({
  onBack,
  onPlayPodcast,
  onOpenPodcastInfo
}: PodcastViewProps) {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  // Data States
  const [episodes, setEpisodes] = useState<PodcastEpisode[]>([]);
  const [loading, setLoading] = useState(true);

  // Pagination States
  const [displayedCount, setDisplayedCount] = useState(6);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const observerTarget = useRef<HTMLDivElement>(null);

  // Load Data from API
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const data = await fetchPodcasts();
      setEpisodes(data);
      setLoading(false);
    };
    loadData();
  }, []);

  // Reset pagination when category changes
  useEffect(() => {
    setDisplayedCount(6);
  }, [activeCategory, searchTerm]);

  // Generate dynamic categories from episodes with counts
  const categories = useMemo(() => {
    const categoryCounts: Record<string, number> = {};
    episodes.forEach(ep => {
      if (ep.category) {
        categoryCounts[ep.category] = (categoryCounts[ep.category] || 0) + 1;
      }
    });

    const uniqueCategories = Object.keys(categoryCounts).sort();
    return [
      { name: 'Todos', count: episodes.length },
      ...uniqueCategories.map(cat => ({ name: cat, count: categoryCounts[cat] }))
    ];
  }, [episodes]);

  const filteredEpisodes = episodes.filter(ep => {
    const matchesSearch = ep.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'Todos' || ep.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Episodes to display with pagination
  const displayedEpisodes = filteredEpisodes.slice(0, displayedCount);
  const hasMore = displayedCount < filteredEpisodes.length;

  // Load more episodes
  const loadMore = useCallback(() => {
    if (isLoadingMore || !hasMore) return;

    setIsLoadingMore(true);
    setTimeout(() => {
      setDisplayedCount(prev => prev + 6);
      setIsLoadingMore(false);
    }, 500); // Simulate loading delay for smooth animation
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

  const handlePlayFromList = (e: React.MouseEvent, episode: PodcastEpisode) => {
    e.stopPropagation();
    if (onPlayPodcast) {
      onPlayPodcast(episode);
    }
  };

  const handleCardClick = (episode: PodcastEpisode) => {
    // Use Inertia router for proper navigation in subdirectories
    router.visit(`/audioreportaje/${episode.slug}`);
  };

  const handleShare = (e: React.MouseEvent, episode: PodcastEpisode) => {
    e.stopPropagation();
    // Use APP_URL from window to build correct URL for subdirectories
    const baseUrl = (window as any).APP_URL || window.location.origin;
    const shareUrl = `${baseUrl}/audioreportaje/${episode.slug}`;

    // Try to use native share API if available
    if (navigator.share) {
      navigator.share({
        title: episode.title,
        text: episode.excerpt,
        url: shareUrl,
      }).catch((error) => console.log('Error sharing:', error));
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(shareUrl).then(() => {
        alert('¡Link copiado al portapapeles!');
      });
    }
  };


  return (
    <div className="bg-gradient-page min-vh-100 animate-fade-in pb-5 position-relative">

      {/* Modern Gradient Header */}
      <div className="header-gradient sticky-top shadow-lg border-0">
        <div className="animated-header-bg"></div>
        <div className="container py-4 position-relative" style={{ zIndex: 2 }}>
          <div className="d-flex align-items-center justify-content-between mb-4">
            <button
              onClick={onBack}
              className="btn btn-glass rounded-circle p-2 text-white hover-scale transition"
            >
              <ArrowLeft size={24} />
            </button>
            <div className="text-center">
              <div className="d-flex align-items-center gap-2 justify-content-center mb-1">
                <Radio size={20} className="text-warning animate-pulse" />
                <h1 className="h5 fw-bold font-serif text-white m-0 tracking-wide text-shadow">AUDIO REPORTAJES</h1>
                <Headphones size={20} className="text-warning animate-pulse" />
              </div>
              <p className="text-white-75 small mb-0">Escucha las mejores historias</p>
            </div>
            <button className="btn btn-glass rounded-circle p-2 text-white hover-scale transition">
              <Search size={24} />
            </button>
          </div>

          {/* Category Pills with Counts */}
          <div className="d-flex gap-2 overflow-auto pb-2 scrollbar-hide">
            {categories.map(cat => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`btn category - pill rounded - pill px - 4 py - 2 small fw - bold text - nowrap transition border - 0 ${activeCategory === cat.name
                  ? 'category-active'
                  : 'category-inactive'
                  } `}
              >
                <span>{cat.name}</span>
                <span className="badge bg-white bg-opacity-25 ms-2">{cat.count}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container py-4">
        {/* Top Episodes section */}
        {episodes.length > 0 && activeCategory === 'Todos' && (
          <div className="mb-5">
            <div className="d-flex align-items-center gap-2 mb-3 px-2">
              <div className="badge-glow"></div>
              <h3 className="h5 fw-bold text-dark mb-0">🔥 Top Episodios</h3>
            </div>
            <TopEpisodes episodes={episodes.slice(0, 9)} onPlay={onPlayPodcast} />
          </div>
        )}

        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-abc-blue" role="status"></div>
            <p className="text-muted mt-2">Cargando audioreportajes...</p>
          </div>
        ) : (
          <>
            {/* Featured Episode */}
            {activeCategory === 'Todos' && !searchTerm && episodes.length > 0 && (
              <div className="mb-5 px-2">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <div className="badge-glow"></div>
                  <h3 className="h5 fw-bold text-dark mb-0">✨ Destacado</h3>
                </div>
                <div
                  className="card border-0 rounded-4 shadow-xl overflow-hidden position-relative text-white cursor-pointer featured-card"
                  onClick={() => handleCardClick(episodes[0])}
                  style={{ minHeight: '380px' }}
                >
                  <img
                    src={episodes[0].image}
                    className="w-100 h-100 object-fit-cover position-absolute top-0 start-0"
                    alt="Featured"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (!target.dataset.errorHandled) {
                        target.dataset.errorHandled = 'true';
                        target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23e0e0e0" width="800" height="600"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="32" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3EAudio%3C/text%3E%3C/svg%3E';
                      }
                    }}
                  />
                  <div className="featured-overlay"></div>
                  <div className="card-body position-relative z-1 d-flex flex-column justify-content-end p-4 h-100">
                    <span className="badge badge-featured align-self-start mb-3">
                      <span className="pulse-dot"></span>
                      NUEVO EPISODIO
                    </span>
                    <h3 className="fw-bold font-serif display-6 mb-2 lh-sm text-shadow-strong">{episodes[0].title}</h3>
                    <p className="text-white-75 line-clamp-2 mb-4">{episodes[0].excerpt}</p>
                    <div className="d-flex align-items-center gap-3">
                      <button
                        onClick={(e) => handlePlayFromList(e, episodes[0])}
                        className="btn btn-play-featured rounded-circle p-3 shadow-lg hover-scale"
                      >
                        <Play size={28} fill="currentColor" />
                      </button>
                      <div>
                        <div className="fw-bold">{episodes[0].duration}</div>
                        <div className="small text-white-75">{episodes[0].date}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Episode List */}
            <div className="px-2">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="d-flex align-items-center gap-2">
                  <div className="badge-glow"></div>
                  <h3 className="h5 fw-bold text-dark mb-0">
                    {activeCategory === 'Todos' ? '📻 Todos los Episodios' : `📂 ${activeCategory} `}
                  </h3>
                </div>
                <span className="badge bg-light text-secondary px-3 py-2">{filteredEpisodes.length} episodios</span>
              </div>

              {filteredEpisodes.length === 0 ? (
                <div className="text-center py-5">
                  <div className="text-muted mb-2" style={{ fontSize: '3rem' }}>🔍</div>
                  <h4 className="text-secondary">No se encontraron episodios</h4>
                  <p className="text-muted">Intenta con otra categoría</p>
                </div>
              ) : (
                <>
                  <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
                    {displayedEpisodes.map((episode, index) => (
                      <div
                        key={episode.id}
                        className="col episode-fade-in"
                        style={{
                          animationDelay: `${(index % 6) * 0.1} s`,
                          opacity: 0,
                          animation: 'fadeInUp 0.6s ease forwards'
                        }}
                      >
                        <div
                          className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden bg-white episode-card transition cursor-pointer"
                          onClick={() => handleCardClick(episode)}
                        >
                          <div className="d-flex flex-row flex-md-column h-100">
                            {/* Image */}
                            <div className="position-relative episode-image-wrapper" style={{ width: '130px', minWidth: '130px', height: 'auto', minHeight: '130px' }}>
                              <img
                                src={episode.image}
                                alt={episode.title}
                                className="w-100 h-100 object-fit-cover d-md-none"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  if (!target.dataset.errorHandled) {
                                    target.dataset.errorHandled = 'true';
                                    target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23e0e0e0" width="400" height="400"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="24" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3EAudio%3C/text%3E%3C/svg%3E';
                                  }
                                }}
                              />
                              <img
                                src={episode.image}
                                alt={episode.title}
                                className="w-100 h-100 object-fit-cover d-none d-md-block"
                                style={{ maxHeight: '200px' }}
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  if (!target.dataset.errorHandled) {
                                    target.dataset.errorHandled = 'true';
                                    target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23e0e0e0" width="400" height="400"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="24" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3EAudio%3C/text%3E%3C/svg%3E';
                                  }
                                }}
                              />
                              <div className="image-overlay">
                                <div className="play-overlay">
                                  <Info size={32} className="text-white" />
                                </div>
                              </div>
                            </div>

                            {/* Content */}
                            <div className="card-body p-3 d-flex flex-column justify-content-center">
                              <div className="d-flex justify-content-between align-items-start mb-2">
                                <span className="badge badge-category">{episode.category}</span>
                                <span className="text-muted small fw-bold">{episode.date}</span>
                              </div>

                              <h5
                                className="card-title fw-bold text-dark font-serif mb-2 line-clamp-2 episode-title"
                                style={{ fontSize: '1rem', lineHeight: '1.4' }}
                              >
                                {episode.title}
                              </h5>

                              <p className="card-text text-muted small line-clamp-2 mb-3 d-none d-md-block">
                                {episode.excerpt}
                              </p>

                              <div className="mt-auto d-flex align-items-center justify-content-between pt-2">
                                <div className="d-flex align-items-center gap-2 text-muted small">
                                  <Clock size={14} className="text-abc-blue" />
                                  <span className="fw-semibold">{episode.duration}</span>
                                </div>

                                <div className="d-flex align-items-center gap-2">
                                  <button
                                    onClick={(e) => handleShare(e, episode)}
                                    className="btn btn-outline-secondary btn-sm rounded-circle p-2 d-flex align-items-center justify-content-center"
                                    style={{ width: '32px', height: '32px' }}
                                    title="Compartir"
                                  >
                                    <Share2 size={14} />
                                  </button>

                                  <button
                                    onClick={(e) => handlePlayFromList(e, episode)}
                                    className="btn btn-play-small rounded-circle p-2 d-md-none shadow-sm"
                                  >
                                    <Play size={16} fill="white" />
                                  </button>

                                  <div className="d-none d-md-flex align-items-center gap-1 text-abc-blue small fw-bold episode-more">
                                    Ver más <ChevronRight size={16} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Infinite Scroll Observer Target */}
                  <div ref={observerTarget} className="py-4">
                    {isLoadingMore && (
                      <div className="text-center">
                        <div className="spinner-border text-abc-blue" role="status">
                          <span className="visually-hidden">Cargando más...</span>
                        </div>
                        <p className="text-muted mt-2 small">Cargando más episodios...</p>
                      </div>
                    )}
                    {!hasMore && displayedEpisodes.length > 0 && (
                      <div className="text-center text-muted">
                        <p className="small">✨ Has visto todos los episodios</p>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </div>

      <style>{`
        /* Page Background */
        .bg-gradient-page {
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }

        /* Header Gradient */
        .header-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          position: relative;
          overflow: hidden;
        }

        .animated-header-bg {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%);
          animation: rotate-slow 30s linear infinite;
        }

        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .text-shadow {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        }

        .text-shadow-strong {
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
        }

        .text-white-75 {
          color: rgba(255, 255, 255, 0.75);
        }

        /* Glass Effect */
        .btn-glass {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .btn-glass:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        /* Category Pills */
        .category-pill {
          font-size: 0.85rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .category-active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
          transform: translateY(-2px);
        }

        .category-inactive {
          background: rgba(255, 255, 255, 0.9);
          color: #64748b;
        }

        .category-inactive:hover {
          background: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }

        /* Badge Glow */
        .badge-glow {
          width: 4px;
          height: 24px;
          background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
          border-radius: 2px;
          box-shadow: 0 0 10px rgba(102, 126, 234, 0.5);
        }

        /* Featured Card */
        .featured-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .featured-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.2) !important;
        }

        .featured-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 100%);
        }

        .badge-featured {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          color: white;
          padding: 8px 16px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          background: white;
          border-radius: 50%;
          animation: pulse-animation 2s infinite;
        }

        @keyframes pulse-animation {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }

        .btn-play-featured {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          color: white;
          border: 3px solid white;
          transition: all 0.3s ease;
        }

        .btn-play-featured:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 24px rgba(245, 87, 108, 0.5);
        }

        /* Episode Cards */
        .episode-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          background: white;
        }

        .episode-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.12) !important;
        }

        .episode-image-wrapper {
          position: relative;
          overflow: hidden;
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.5);
          opacity: 0;
          transition: opacity 0.3s ease;
          display: none;
        }

        @media (min-width: 768px) {
          .image-overlay {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        .episode-card:hover .image-overlay {
          opacity: 1;
        }

        .play-overlay {
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(10px);
          border-radius: 50%;
          padding: 16px;
          border: 2px solid rgba(255, 255, 255, 0.5);
          transform: scale(0.8);
          transition: transform 0.3s ease;
        }

        .episode-card:hover .play-overlay {
          transform: scale(1);
        }

        .badge-category {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          font-size: 0.65rem;
          padding: 4px 10px;
          font-weight: 600;
        }

        .episode-title {
          transition: color 0.3s ease;
        }

        .episode-card:hover .episode-title {
          color: #667eea;
        }

        .btn-play-small {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          color: white;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .btn-play-small:hover {
          transform: scale(1.1);
        }

        .episode-more {
          transition: all 0.3s ease;
        }

        .episode-card:hover .episode-more {
          color: #f5576c !important;
          transform: translateX(4px);
        }

        /* Animations */
        .animate-pulse {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .hover-scale {
          transition: transform 0.3s ease;
        }

        .hover-scale:hover {
          transform: scale(1.05);
        }

        /* Scrollbar */
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        
        .line-clamp-2 { 
          display: -webkit-box; 
          -webkit-line-clamp: 2; 
          -webkit-box-orient: vertical; 
          overflow: hidden; 
        }
        
        .cursor-pointer { cursor: pointer; }

        /* Fade In Animation for Pagination */
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
          .featured-card {
            min-height: 320px !important;
          }
        }
      `}</style>
    </div>
  );
}