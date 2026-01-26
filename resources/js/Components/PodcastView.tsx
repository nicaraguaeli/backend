import React, { useState, useEffect } from 'react';
import { Play, Clock, ChevronRight, Search, Mic2, ArrowLeft, Info } from 'lucide-react';
import { fetchPodcasts, PodcastEpisode } from '../services/podcastService';
import TopEpisodes from './TopEpisodes';

const CATEGORIES = ['Todos', 'Noticias', 'Economía', 'Cultura', 'Salud', 'Deportes'];

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

  const filteredEpisodes = episodes.filter(ep => {
    const matchesSearch = ep.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'Todos' || ep.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handlePlayFromList = (e: React.MouseEvent, episode: PodcastEpisode) => {
    e.stopPropagation(); 
    if (onPlayPodcast) {
      onPlayPodcast(episode);
    }
  };

  const handleCardClick = (episode: PodcastEpisode) => {
      onOpenPodcastInfo(episode);
  };

  return (
    <div className="bg-light min-vh-100 animate-fade-in pb-5 position-relative">
      
      {/* 1. Minimalist Header */}
      <div className="bg-white sticky-top shadow-sm border-bottom border-light">
        <div className="container py-3">
          <div className="d-flex align-items-center justify-content-between mb-3">
             <button 
               onClick={onBack} 
               className="btn btn-light rounded-circle p-2 text-secondary hover-bg-gray transition"
             >
               <ArrowLeft size={24} />
             </button>
             <h1 className="h5 fw-bold font-serif text-abc-blue m-0 tracking-wide">PODCAST ABC</h1>
             <button className="btn btn-light rounded-circle p-2 text-secondary hover-bg-gray transition">
                <Search size={24} />
             </button>
          </div>

          <div className="mb-4 px-2">
             <h2 className="display-6 fw-bold text-dark mb-1 font-serif">Escucha. Conecta.</h2>
             <p className="text-muted small mb-0">Las mejores historias del norte de Nicaragua.</p>
          </div>

          <div className="d-flex gap-2 overflow-auto pb-2 scrollbar-hide px-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`btn rounded-pill px-4 py-2 small fw-bold text-nowrap transition border-0 ${
                  activeCategory === cat 
                    ? 'bg-abc-blue text-white shadow-md' 
                    : 'bg-light text-secondary hover-bg-gray'
                }`}
                style={{ fontSize: '0.85rem' }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container py-4">
        {/* Top Episodes section: show first 9 as highlighted rankings */}
        {episodes.length > 0 && (
          <div className="mb-4">
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
                <div 
                    className="card border-0 rounded-4 shadow-lg overflow-hidden position-relative text-white cursor-pointer hover-card-transform"
                    onClick={() => handleCardClick(episodes[0])}
                    style={{ minHeight: '320px' }}
                >
                    <img 
                        src={episodes[0].image} 
                        className="w-100 h-100 object-fit-cover position-absolute top-0 start-0" 
                        alt="Featured" 
                        onError={(e) => (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x600?text=Audio'}
                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                    <div className="card-body position-relative z-1 d-flex flex-column justify-content-end p-4 h-100">
                        <span className="badge bg-abc-red align-self-start mb-2 text-uppercase letter-spacing-1">Nuevo Episodio</span>
                        <h3 className="fw-bold font-serif display-6 mb-2 lh-sm">{episodes[0].title}</h3>
                        <p className="text-white-75 line-clamp-2 mb-3">{episodes[0].excerpt}</p>
                        <div className="d-flex align-items-center gap-3">
                        <button 
                            onClick={(e) => handlePlayFromList(e, episodes[0])}
                            className="btn btn-light rounded-circle p-3 text-abc-red shadow-lg hover-scale"
                        >
                            <Play size={24} fill="currentColor" />
                        </button>
                        <span className="fw-bold small">{episodes[0].duration} • {episodes[0].date}</span>
                        </div>
                    </div>
                </div>
            </div>
            )}

            {/* Episode List */}
            <div className="px-2">
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <h3 className="h5 fw-bold text-secondary font-serif mb-0">
                        {activeCategory === 'Todos' ? 'Recientes' : activeCategory}
                    </h3>
                </div>

                <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
                    {filteredEpisodes.map(episode => (
                        <div key={episode.id} className="col">
                            <div 
                            className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden bg-white hover-card-lift transition cursor-pointer"
                            onClick={() => handleCardClick(episode)}
                            >
                                <div className="d-flex flex-row flex-md-column h-100">
                                    {/* Image */}
                                    <div className="position-relative" style={{ width: '130px', minWidth: '130px', height: 'auto', minHeight: '130px' }}>
                                        <img 
                                            src={episode.image} 
                                            alt={episode.title}
                                            className="w-100 h-100 object-fit-cover d-md-none"
                                            onError={(e) => (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400?text=Audio'}
                                        />
                                        <img 
                                            src={episode.image} 
                                            alt={episode.title}
                                            className="w-100 h-100 object-fit-cover d-none d-md-block"
                                            style={{ maxHeight: '200px' }}
                                            onError={(e) => (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400?text=Audio'}
                                        />
                                        <div 
                                            className="position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-30 d-none d-md-flex align-items-center justify-content-center opacity-0 hover-opacity-100 transition"
                                        >
                                            <div className="bg-white bg-opacity-25 rounded-circle p-3 backdrop-blur border border-white border-opacity-50">
                                                <Info size={32} className="text-white" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="card-body p-3 d-flex flex-column justify-content-center">
                                        <div className="d-flex justify-content-between align-items-start mb-1">
                                            <span className="badge bg-light text-secondary border fw-normal" style={{fontSize: '0.65rem'}}>{episode.category}</span>
                                            <span className="text-muted small" style={{fontSize: '0.7rem'}}>{episode.date}</span>
                                        </div>
                                        
                                        <h5 
                                            className="card-title fw-bold text-abc-blue font-serif mb-1 line-clamp-2 hover-text-red transition"
                                            style={{ fontSize: '1rem', lineHeight: '1.4' }}
                                        >
                                            {episode.title}
                                        </h5>
                                        
                                        <p className="card-text text-muted small line-clamp-2 mb-3 d-none d-md-block">
                                            {episode.excerpt}
                                        </p>

                                        <div className="mt-auto d-flex align-items-center justify-content-between pt-md-2 pt-2">
                                            <div className="d-flex align-items-center gap-2 text-muted small">
                                                <Clock size={14} /> <span>{episode.duration}</span>
                                            </div>
                                            
                                            <button 
                                                onClick={(e) => handlePlayFromList(e, episode)}
                                                className="btn btn-abc-red rounded-circle p-2 d-md-none shadow-sm active-scale"
                                                style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                            >
                                                <Play size={16} fill="white" />
                                            </button>
                                            
                                            <div className="d-none d-md-flex align-items-center gap-1 text-abc-blue small fw-bold hover-text-red">
                                                Más información <ChevronRight size={16} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
        )}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        
        .hover-bg-gray:hover { background-color: #f1f5f9 !important; }
        .hover-card-lift { transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease; }
        .hover-card-lift:hover { transform: translateY(-4px); box-shadow: 0 10px 30px rgba(0,0,0,0.08) !important; }
        
        .hover-text-red:hover { color: var(--abc-red) !important; }
        .hover-scale:hover { transform: scale(1.05); }
        .active-scale:active { transform: scale(0.95); }
        
        .bg-gradient-to-t { background: linear-gradient(to top, var(--tw-gradient-stops)); }
        .from-black { --tw-gradient-from: #000; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(0, 0, 0, 0)); }
        
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .cursor-pointer { cursor: pointer; }
      `}</style>
    </div>
  );
}