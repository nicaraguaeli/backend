import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { Play, Clock, ChevronRight, Search, ArrowLeft, Radio, Headphones, Share2, ChevronLeft, X } from 'lucide-react';
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
  const [headerTop, setHeaderTop] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Data States
  const [episodes, setEpisodes] = useState<PodcastEpisode[]>([]);
  const [loading, setLoading] = useState(true);

  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

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

  // Detectar altura del header del sitio para calcular el sticky offset
  useEffect(() => {
    const measureHeader = () => {
      const siteHeader = document.querySelector('header.fixed-top') as HTMLElement;
      if (siteHeader) setHeaderTop(siteHeader.offsetHeight);
    };
    measureHeader();
    window.addEventListener('resize', measureHeader);
    return () => window.removeEventListener('resize', measureHeader);
  }, []);

  // Detectar scroll para efecto shrink y botón volver arriba
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 60);
      setShowScrollTop(y > 300);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
    window.location.href = url(`audioreportaje/${episode.slug}`);
  };

  const handleCardClick = (episode: PodcastEpisode) => {
    window.location.href = url(`audioreportaje/${episode.slug}`);
  };

  const handleShare = (e: React.MouseEvent, episode: PodcastEpisode) => {
    e.stopPropagation();
    const shareUrl = url(`audioreportaje/${episode.slug}`);
    if (navigator.share) {
      navigator.share({
        title: episode.title,
        text: episode.excerpt,
        url: shareUrl,
      }).catch((error) => console.log('Error sharing:', error));
    } else {
      navigator.clipboard.writeText(shareUrl).then(() => {
        alert('¡Link copiado al portapapeles!');
      });
    }
  };

  // ── Dynamic card colorization (Spotify-style) ──────────────────────────
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const getAverageColor = (img: HTMLImageElement): { r: number; g: number; b: number } | null => {
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;
      const size = 24;
      canvas.width = size;
      canvas.height = size;
      ctx.drawImage(img, 0, 0, size, size);
      const data = ctx.getImageData(0, 0, size, size).data;
      let r = 0, g = 0, b = 0, count = 0;
      for (let i = 0; i < data.length; i += 4) {
        if (data[i + 3] < 128) continue;
        const rr = data[i], gg = data[i + 1], bb = data[i + 2];
        const brightness = (rr + gg + bb) / 3;
        if (brightness > 225 || brightness < 15) continue; // skip near-white / near-black
        r += rr; g += gg; b += bb; count++;
      }
      if (count === 0) return null;
      return { r: Math.round(r / count), g: Math.round(g / count), b: Math.round(b / count) };
    } catch {
      return null;
    }
  };

  const applyCardColor = useCallback((id: string | number, img: HTMLImageElement) => {
    const card = cardRefs.current[String(id)];
    if (!card) return;

    let col = getAverageColor(img);

    // Fallback: deterministic color from URL when canvas/CORS fails
    if (!col) {
      const hash = Array.from(img.src).reduce((h, ch) => (h * 31 + ch.charCodeAt(0)) | 0, 0);
      const hue = Math.abs(hash) % 360;
      col = {
        r: Math.round(80  + Math.sin(hue * 0.017) * 50),
        g: Math.round(60  + Math.cos(hue * 0.017) * 40),
        b: Math.round(120 + Math.sin(hue * 0.025) * 60),
      };
    }

    const { r, g, b } = col;
    const f = 0.28; // darkness factor — produces Spotify-style deep tones
    const dr = Math.round(r * f);
    const dg = Math.round(g * f);
    const db = Math.round(b * f);

    // Tint the card wrapper
    card.style.background = `rgb(${dr}, ${dg}, ${db})`;
    card.style.borderColor = `rgba(${r}, ${g}, ${b}, 0.28)`;

    // Tint the body section (slightly different shade for depth)
    const body = card.querySelector('.ar-body') as HTMLElement | null;
    if (body) {
      const df = 0.22;
      body.style.background = `linear-gradient(180deg,
        rgb(${Math.round(r*f)},${Math.round(g*f)},${Math.round(b*f)}) 0%,
        rgb(${Math.round(r*df)},${Math.round(g*df)},${Math.round(b*df)}) 100%)`;
    }
  }, []);

  return (
    <div className="bg-gradient-page min-vh-100 animate-fade-in pb-5 position-relative">

      {/* Sticky section header – sits right below the site header */}
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
          {/* Top row: back button + title (centrado) + spacer */}
          <div className="d-flex align-items-center justify-content-between mb-2">
            <button
              onClick={onBack}
              className="btn btn-glass rounded-circle p-2 text-white hover-scale transition"
            >
              <ArrowLeft size={22} />
            </button>

            <div className="text-center">
              <div className="d-flex align-items-center gap-2 justify-content-center mb-1">
                <Radio size={18} className="text-warning animate-pulse" />
                <h1 className="h5 fw-bold font-serif text-white m-0 tracking-wide text-shadow">AUDIO REPORTAJES</h1>
                <Headphones size={18} className="text-warning animate-pulse" />
              </div>
              {/* Subtitle hidden when scrolled */}
              {!isScrolled && (
                <p className="text-white-75 small mb-0">Escucha historias, reportes especiales y mucho más.
                </p>
              )}
            </div>

            {/* Spacer invisible – igual tamaño que el botón volver para centrar el título */}
            <div style={{ width: '42px', height: '42px', flexShrink: 0 }} />
          </div>

          {/* Inline search – always visible */}
          <div className="podcast-search-wrap mb-2">
            <div className="input-group podcast-search-group">
              <span className="input-group-text podcast-search-icon">
                <Search size={16} />
              </span>
              <input
                type="text"
                className="form-control podcast-search-input"
                placeholder="Buscar audioreportajes..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button className="btn podcast-search-clear" onClick={() => setSearchTerm('')}>
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Category Pills with Counts */}
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

      {/* Scroll-to-top floating button */}
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

      <div className="container py-4">
        {/* Top Audioreportajes section */}
        {episodes.length > 0 && activeCategory === 'Todos' && (
          <div className="mb-5">
            <div className="d-flex align-items-center gap-2 mb-3 px-2">
              <div className="badge-glow"></div>
              <h3 className="h5 fw-bold text-dark mb-0">🎙️ Todos los Audioreportajes</h3>
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
                    {activeCategory === 'Todos' ? '📻 Todos los Audioreportajes' : `📂 ${activeCategory}`}
                  </h3>
                </div>
                <span className="badge bg-light text-secondary px-3 py-2">{filteredEpisodes.length} audioreportajes</span>
              </div>

              {filteredEpisodes.length === 0 ? (
                <div className="text-center py-5">
                  <div className="text-muted mb-2" style={{ fontSize: '3rem' }}>🔍</div>
                  <h4 className="text-secondary">No se encontraron audioreportajes</h4>
                  <p className="text-muted">Intenta con otra categoría o término de búsqueda</p>
                </div>
              ) : (
                <>
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4">
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
                          ref={(el) => { cardRefs.current[String(episode.id)] = el; }}
                        >
                          {/* ── IMAGE AREA ── */}
                          <div className="ar-img-wrap">
                            <img
                              src={episode.image}
                              alt={episode.title}
                              className="ar-img"
                              crossOrigin="anonymous"
                              onLoad={(e) => applyCardColor(episode.id, e.currentTarget)}
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                if (!target.dataset.errorHandled) {
                                  target.dataset.errorHandled = 'true';
                                  target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="450"%3E%3Crect fill="%231e1e2e" width="800" height="450"/%3E%3Ctext fill="%23555" font-family="sans-serif" font-size="28" font-weight="bold" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3E🎙 Audioreportaje%3C/text%3E%3C/svg%3E';
                                }
                              }}
                            />
                            <div className="ar-img-scrim" />
                            <span className="ar-cat-badge">{episode.category}</span>
                            <span className="ar-duration-badge">
                              <Clock size={11} />
                              {episode.duration}
                            </span>
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

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="mt-5">
                      <nav aria-label="Paginación de audioreportajes">

                        {/* ── Mobile: solo Anterior / X de Y / Siguiente ── */}
                        <div className="d-flex d-sm-none align-items-center justify-content-between gap-2 px-1">
                          <button
                            className="btn btn-sm border-0 bg-abc-blue text-white rounded-pill px-3 py-2 shadow-sm"
                            onClick={() => paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                            style={{ minWidth: '90px' }}
                          >
                            <ChevronLeft size={16} className="me-1" />
                            Anterior
                          </button>
                          <span className="text-muted small fw-semibold">
                            {currentPage} / {totalPages}
                          </span>
                          <button
                            className="btn btn-sm border-0 bg-abc-blue text-white rounded-pill px-3 py-2 shadow-sm"
                            onClick={() => paginate(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            style={{ minWidth: '90px' }}
                          >
                            Siguiente
                            <ChevronRight size={16} className="ms-1" />
                          </button>
                        </div>

                        {/* ── Desktop: paginación numerada completa ── */}
                        <ul className="pagination justify-content-center gap-2 d-none d-sm-flex">
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
          to   { transform: rotate(360deg); }
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
          font-size: 0.82rem;
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
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2) !important;
        }
        .featured-overlay {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
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
          width: 8px; height: 8px;
          background: white;
          border-radius: 50%;
          animation: pulse-animation 2s infinite;
        }
        @keyframes pulse-animation {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(1.2); }
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
           PODCAST SEARCH BAR
           ═══════════════════════════════════════ */
        .podcast-search-wrap {
          width: 100%;
          max-width: 480px;
          margin: 0 auto;
        }
        .podcast-search-group {
          background: rgba(255,255,255,0.18);
          border-radius: 30px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.4);
          backdrop-filter: blur(10px);
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
        .podcast-search-input::placeholder {
          color: rgba(255,255,255,0.6);
        }
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
        .podcast-search-clear:hover {
          color: white;
        }

        /* ═══════════════════════════════════════
           AUDIOREPORTAJE CARDS — Streaming style
           ═══════════════════════════════════════ */
        .ar-card {
          background: #1e2245;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 6px 24px rgba(0, 0, 0, 0.22);
          border: 1px solid rgba(255,255,255,0.08);
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
                      box-shadow 0.3s ease,
                      border-color 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .ar-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 52px rgba(102, 126, 234, 0.28);
          border-color: rgba(102, 126, 234, 0.3);
        }

        /* ── Image area ── */
        .ar-img-wrap {
          position: relative;
          overflow: hidden;
          aspect-ratio: 16 / 9;
          flex-shrink: 0;
        }
        .ar-img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      filter 0.4s ease;
          display: block;
        }
        .ar-card:hover .ar-img {
          transform: scale(1.08);
          filter: brightness(0.8);
        }

        /* Cinematic gradient scrim */
        .ar-img-scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(8, 6, 20, 0.92) 0%,
            rgba(8, 6, 20, 0.45) 38%,
            rgba(8, 6, 20, 0.08) 65%,
            transparent 100%
          );
          pointer-events: none;
        }

        /* Category badge — glassmorphism */
        .ar-cat-badge {
          position: absolute;
          top: 11px; left: 11px;
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.22);
          color: #fff;
          font-size: 0.58rem; font-weight: 800;
          letter-spacing: 0.08em; text-transform: uppercase;
          padding: 4px 9px; border-radius: 5px;
        }

        /* Duration — bottom-left, clean pill */
        .ar-duration-badge {
          position: absolute;
          bottom: 10px; left: 11px;
          display: inline-flex; align-items: center; gap: 4px;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          color: rgba(255,255,255,0.9);
          font-size: 0.68rem; font-weight: 700;
          padding: 4px 9px; border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.12);
        }

        /* ── Play button — always visible, bottom-right of image ── */
        .ar-play-btn {
          position: absolute;
          bottom: 10px; right: 12px;
          top: auto; left: auto;
          transform: scale(0.85);
          opacity: 1;
          width: 42px; height: 42px;
          border-radius: 50%;
          border: none;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1),
                      box-shadow 0.25s ease;
          box-shadow: 0 4px 18px rgba(102, 126, 234, 0.55);
          z-index: 4;
        }
        .ar-card:hover .ar-play-btn {
          transform: scale(1);
          box-shadow: 0 8px 28px rgba(102, 126, 234, 0.7);
        }
        .ar-play-btn:hover {
          background: linear-gradient(135deg, #7c91f9 0%, #9b6fcc 100%);
        }

        /* ── Content body ── */
        .ar-body {
          padding: 14px 16px 13px;
          display: flex; flex-direction: column; flex: 1;
          background: #1a2040;
        }

        /* Date — accent colored */
        .ar-date {
          font-size: 0.63rem; color: #818cf8; font-weight: 700;
          letter-spacing: 0.06em; text-transform: uppercase;
          margin: 0 0 6px;
        }

        /* Title — lighter for dark bg */
        .ar-title {
          font-size: 0.96rem; font-weight: 700; line-height: 1.35;
          color: #f1f5f9; margin: 0 0 7px;
          display: -webkit-box;
          -webkit-line-clamp: 2; -webkit-box-orient: vertical;
          overflow: hidden;
          transition: color 0.2s ease;
          font-family: Inter, 'Segoe UI', system-ui, sans-serif;
        }
        .ar-card:hover .ar-title { color: #a5b4fc; }

        /* Excerpt */
        .ar-excerpt {
          font-size: 0.8rem; color: rgba(148,163,184,0.85); line-height: 1.5;
          margin: 0 0 13px;
          display: -webkit-box;
          -webkit-line-clamp: 2; -webkit-box-orient: vertical;
          overflow: hidden; flex: 1;
        }

        /* Footer */
        .ar-footer {
          display: flex; align-items: center; justify-content: space-between;
          border-top: 1px solid rgba(255,255,255,0.07);
          padding-top: 10px; margin-top: auto;
        }

        /* "Escuchar" CTA */
        .ar-read-more {
          display: inline-flex; align-items: center; gap: 4px;
          font-size: 0.75rem; font-weight: 700; color: #818cf8;
          letter-spacing: 0.02em;
          transition: gap 0.2s ease, color 0.2s ease;
        }
        .ar-card:hover .ar-read-more { gap: 7px; color: #a5b4fc; }

        /* Share button */
        .ar-share-btn {
          width: 28px; height: 28px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.12); background: transparent;
          display: flex; align-items: center; justify-content: center;
          color: rgba(148,163,184,0.7); cursor: pointer;
          transition: all 0.2s ease;
        }
        .ar-share-btn:hover {
          border-color: #818cf8; color: #818cf8;
          background: rgba(129, 140, 248, 0.1);
          transform: scale(1.1);
        }

        /* ═══════════════════════════════════════
           SCROLL-TO-TOP BUTTON
           ═══════════════════════════════════════ */
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

        /* Animations */
        .animate-pulse {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.5; }
        }

        .hover-scale { transition: transform 0.3s ease; }
        .hover-scale:hover { transform: scale(1.05); }

        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2; -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .cursor-pointer { cursor: pointer; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Pagination */
        .pagination .page-link {
          display: flex; align-items: center; justify-content: center;
          transition: all 0.2s ease;
        }
        .pagination .page-link:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
        }

        @media (max-width: 768px) {
          .featured-card { min-height: 320px !important; }
          /* Always show search bar on mobile */
          .podcast-search-wrap { max-width: 100%; }
        }
      `}</style>
    </div>
  );
}