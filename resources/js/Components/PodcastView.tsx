import React, { useState, useEffect, useMemo } from 'react';
import { Play, Clock, ChevronRight, Search, ArrowLeft, Radio, Headphones, Share2, ChevronLeft } from 'lucide-react';
import { url } from '@/url';
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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

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

  // Reset pagination when category or search changes
  useEffect(() => {
    setCurrentPage(1);
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

  // Pagination logic
  const totalPages = Math.ceil(filteredEpisodes.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const displayedEpisodes = filteredEpisodes.slice(indexOfFirst, indexOfLast);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePlayFromList = (e: React.MouseEvent, episode: PodcastEpisode) => {
    e.stopPropagation();
    // Navigate to detail page — same as clicking the card
    window.location.href = url(`audioreportaje/${episode.slug}`);
  };

  const handleCardClick = (episode: PodcastEpisode) => {
    // Navigate to the detail page
    window.location.href = url(`audioreportaje/${episode.slug}`);
  };

  const handleShare = (e: React.MouseEvent, episode: PodcastEpisode) => {
    e.stopPropagation();
    const shareUrl = url(`audioreportaje/${episode.slug}`);

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
                className={`btn category-pill rounded-pill px-4 py-2 small fw-bold text-nowrap transition border-0 ${activeCategory === cat.name
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

      <div className="container py-4">
        {/* Top Audioreportajes section */}
        {episodes.length > 0 && activeCategory === 'Todos' && (
          <div className="mb-5">
            <div className="d-flex align-items-center gap-2 mb-3 px-2">
              <div className="badge-glow"></div>
              <h3 className="h5 fw-bold text-dark mb-0">🎙️ Audioreportajes</h3>
            </div>
            <TopEpisodes episodes={episodes.slice(0, 9)} />
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
                      NUEVO AUDIOREPORTAJE
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
                    {activeCategory === 'Todos' ? '📻 Todos los Audioreportajes' : `📂 ${activeCategory} `}
                  </h3>
                </div>
                <span className="badge bg-light text-secondary px-3 py-2">{filteredEpisodes.length} audioreportajes</span>
              </div>

              {filteredEpisodes.length === 0 ? (
                <div className="text-center py-5">
                  <div className="text-muted mb-2" style={{ fontSize: '3rem' }}>🔍</div>
                  <h4 className="text-secondary">No se encontraron audioreportajes</h4>
                  <p className="text-muted">Intenta con otra categoría</p>
                </div>
              ) : (
                <>
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-3 g-4">
                    {displayedEpisodes.map((episode, index) => (
                      <div
                        key={episode.id}
                        className="col"
                        style={{
                          animationDelay: `${(index % 6) * 0.08}s`,
                          opacity: 0,
                          animation: 'fadeInUp 0.55s ease forwards'
                        }}
                      >
                        <div
                          className="ar-card h-100 cursor-pointer"
                          onClick={() => handleCardClick(episode)}
                        >
                          {/* ── IMAGE AREA ── */}
                          <div className="ar-img-wrap">
                            <img
                              src={episode.image}
                              alt={episode.title}
                              className="ar-img"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                if (!target.dataset.errorHandled) {
                                  target.dataset.errorHandled = 'true';
                                  target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="450"%3E%3Crect fill="%231e1e2e" width="800" height="450"/%3E%3Ctext fill="%23555" font-family="sans-serif" font-size="28" font-weight="bold" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3E🎙 Audioreportaje%3C/text%3E%3C/svg%3E';
                                }
                              }}
                            />

                            {/* Dark gradient scrim over bottom of image */}
                            <div className="ar-img-scrim" />

                            {/* Category badge – top left */}
                            <span className="ar-cat-badge">{episode.category}</span>

                            {/* Duration – bottom left inside image */}
                            <span className="ar-duration-badge">
                              <Clock size={11} />
                              {episode.duration}
                            </span>

                            {/* Play button – centered, appears on hover */}
                            <button
                              className="ar-play-btn"
                              onClick={(e) => handlePlayFromList(e, episode)}
                              aria-label={`Reproducir ${episode.title}`}
                            >
                              <Play size={22} fill="white" className="text-white" />
                            </button>
                          </div>

                          {/* ── CONTENT AREA ── */}
                          <div className="ar-body">
                            <p className="ar-date">{episode.date}</p>

                            <h5 className="ar-title">{episode.title}</h5>

                            <p className="ar-excerpt">{episode.excerpt}</p>

                            <div className="ar-footer">
                              <span className="ar-read-more">
                                Escuchar <ChevronRight size={15} />
                              </span>
                              <button
                                className="ar-share-btn"
                                onClick={(e) => handleShare(e, episode)}
                                title="Compartir"
                              >
                                <Share2 size={14} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pagination - Same style as CategoryView */}
                  {totalPages > 1 && (
                    <div className="mt-5">
                      <nav aria-label="Paginación de audioreportajes">
                        <ul className="pagination justify-content-center gap-2">
                          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                            <button
                              className="page-link border-0 bg-abc-blue text-white rounded-pill px-4 shadow-sm"
                              onClick={() => paginate(currentPage - 1)}
                              disabled={currentPage === 1}
                            >
                              <ChevronLeft size={18} className="me-1" />
                              Anterior
                            </button>
                          </li>

                          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                            <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                              <button
                                className={`page-link rounded-circle border-2 ${currentPage === number
                                  ? 'bg-abc-red text-white border-abc-red shadow'
                                  : 'bg-white text-abc-blue border-abc-blue'
                                  }`}
                                onClick={() => paginate(number)}
                                style={{ width: '40px', height: '40px', fontWeight: 'bold' }}
                              >
                                {number}
                              </button>
                            </li>
                          ))}

                          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                            <button
                              className="page-link border-0 bg-abc-blue text-white rounded-pill px-4 shadow-sm"
                              onClick={() => paginate(currentPage + 1)}
                              disabled={currentPage === totalPages}
                            >
                              Siguiente
                              <ChevronRight size={18} className="ms-1" />
                            </button>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  )}

                  {filteredEpisodes.length > 0 && totalPages <= 1 && (
                    <div className="text-center text-muted mt-4">
                      <p className="small">✨ Has visto todos los audioreportajes</p>
                    </div>
                  )}
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

        /* ═══════════════════════════════════════
           AUDIOREPORTAJE CARDS
        ═══════════════════════════════════════ */

        .ar-card {
          background: #ffffff;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.07);
          transition: transform 0.32s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.32s ease;
          display: flex;
          flex-direction: column;
        }

        .ar-card:hover {
          transform: translateY(-8px) scale(1.01);
          box-shadow: 0 20px 48px rgba(102,126,234,0.18);
        }

        /* Image */
        .ar-img-wrap {
          position: relative;
          overflow: hidden;
          height: 210px;
          flex-shrink: 0;
        }

        .ar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94);
          display: block;
        }

        .ar-card:hover .ar-img {
          transform: scale(1.07);
        }

        /* Bottom gradient scrim */
        .ar-img-scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(10,10,30,0.75) 0%,
            rgba(10,10,30,0.15) 45%,
            transparent 70%
          );
          pointer-events: none;
        }

        /* Category badge */
        .ar-cat-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #fff;
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 20px;
          box-shadow: 0 2px 8px rgba(102,126,234,0.35);
          backdrop-filter: blur(4px);
        }

        /* Duration badge */
        .ar-duration-badge {
          position: absolute;
          bottom: 10px;
          left: 12px;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: rgba(0,0,0,0.55);
          backdrop-filter: blur(8px);
          color: #fff;
          font-size: 0.72rem;
          font-weight: 600;
          padding: 4px 9px;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.15);
        }

        /* Play button */
        .ar-play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0.7);
          opacity: 0;
          width: 54px;
          height: 54px;
          border-radius: 50%;
          border: 2.5px solid rgba(255,255,255,0.9);
          background: rgba(255,255,255,0.18);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: opacity 0.28s ease, transform 0.28s cubic-bezier(0.34,1.56,0.64,1);
          box-shadow: 0 4px 24px rgba(0,0,0,0.3);
          z-index: 4;
        }

        .ar-card:hover .ar-play-btn {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }

        .ar-play-btn:hover {
          background: rgba(102,126,234,0.85);
          border-color: transparent;
        }

        /* Body */
        .ar-body {
          padding: 16px 18px 14px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .ar-date {
          font-size: 0.7rem;
          color: #94a3b8;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin: 0 0 6px;
        }

        .ar-title {
          font-size: 0.98rem;
          font-weight: 700;
          line-height: 1.35;
          color: #0f172a;
          margin: 0 0 8px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: color 0.2s ease;
          font-family: Georgia, 'Times New Roman', serif;
        }

        .ar-card:hover .ar-title {
          color: #667eea;
        }

        .ar-excerpt {
          font-size: 0.82rem;
          color: #64748b;
          line-height: 1.5;
          margin: 0 0 14px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          flex: 1;
        }

        /* Footer row */
        .ar-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid #f1f5f9;
          padding-top: 11px;
          margin-top: auto;
        }

        .ar-read-more {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          font-size: 0.78rem;
          font-weight: 700;
          color: #667eea;
          letter-spacing: 0.02em;
          transition: gap 0.2s ease, color 0.2s ease;
        }

        .ar-card:hover .ar-read-more {
          gap: 6px;
          color: #764ba2;
        }

        .ar-share-btn {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 1.5px solid #e2e8f0;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94a3b8;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .ar-share-btn:hover {
          border-color: #667eea;
          color: #667eea;
          background: rgba(102,126,234,0.06);
          transform: scale(1.1);
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

        /* Pagination styles */
        .pagination .page-link {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .pagination .page-link:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;
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