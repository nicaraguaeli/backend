import React, { useEffect, useRef } from 'react';
import { Play, Clock, Heart, Share2, Minimize2, FileText } from 'lucide-react';
import { PodcastEpisode } from '../services/podcastService';

interface PodcastInfoSheetProps {
  episode: PodcastEpisode | null;
  isOpen: boolean;
  onClose: () => void;
  onPlay: (episode: PodcastEpisode) => void;
}

export default function PodcastInfoSheet({ episode, isOpen, onClose, onPlay }: PodcastInfoSheetProps) {
    const sheetRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            window.addEventListener('keydown', handleKey);
            // focus the sheet for accessibility
            setTimeout(() => sheetRef.current?.focus(), 50);
        }
        return () => window.removeEventListener('keydown', handleKey);
    }, [isOpen, onClose]);

    if (!episode || !isOpen) return null;

  return (
    <>
      {/* Backdrop with Blur */}
      <div 
           className="fixed-top w-100 h-100 backdrop-modern"
           style={{ zIndex: 1075 }}
           onClick={onClose}
      ></div>
      
            {/* Sheet Container */}
            <div 
                 ref={sheetRef}
                 tabIndex={-1}
                 role="dialog"
                 aria-modal="true"
                 aria-label={episode.title}
                 className="fixed-bottom w-100 bg-white shadow-lg info-sheet-container"
                 style={{ 
                     borderTopLeftRadius: '24px', 
                     borderTopRightRadius: '24px', 
                     zIndex: 1080
                 }}
            >
            <div className="d-flex flex-column h-100">
                {/* Header Fixed Inside Sheet */}
                <div className="px-4 pt-3 pb-2 border-bottom sticky-top bg-white rounded-top-4">
                    <div className="w-100 d-flex justify-content-center mb-2" onClick={onClose}>
                       <div className="bg-secondary bg-opacity-25 rounded-pill cursor-pointer hover-darker transition" style={{width: '40px', height: '5px'}}></div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex gap-3 align-items-center">
                            <img 
                                src={episode.image} 
                                className="rounded shadow-sm object-fit-cover" 
                                style={{width: '50px', height: '50px'}}
                                alt={episode.title}
                                onError={(e) => (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400?text=Audio'}
                            />
                            <div className="d-flex flex-column">
                                <span className="badge bg-abc-blue align-self-start" style={{fontSize: '0.6rem'}}>{episode.category}</span>
                                <h6 className="fw-bold m-0 line-clamp-1">{episode.title}</h6>
                            </div>
                        </div>
                        <div className="d-flex gap-2">
                            <button onClick={onClose} className="btn btn-light rounded-circle p-2 text-secondary hover-bg-gray transition" title="Minimizar / Cerrar">
                                <Minimize2 size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Scrollable Content Area */}
                <div className="p-4 pt-2 overflow-auto custom-scroll" style={{ flexGrow: 1 }}>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            
                            {/* Main Action Area */}
                            <div className="d-flex align-items-center gap-3 my-4 bg-light p-3 rounded-4 border border-light">
                               <div className="d-flex flex-column flex-grow-1">
                                  <small className="text-muted text-uppercase fw-bold mb-1" style={{fontSize: '0.7rem', letterSpacing: '0.5px'}}>Escuchar Ahora</small>
                                  <div className="d-flex align-items-center gap-2 small text-secondary">
                                     <Clock size={14}/> <span className="fw-medium">{episode.duration}</span>
                                     <span className="text-black-50">•</span>
                                     <span>{episode.date}</span>
                                  </div>
                               </div>
                               <button 
                                  onClick={() => onPlay(episode)}
                                  className="btn btn-abc-red text-white fw-bold rounded-pill px-4 py-3 d-flex align-items-center gap-2 shadow-sm hover-scale transition-all"
                               >
                                  <Play size={20} fill="currentColor" /> <span className="d-none d-sm-inline">Reproducir</span>
                               </button>
                            </div>

                            {/* HTML Content */}
                            <div className="pt-2">
                                <h5 className="fw-bold mb-4 font-serif text-secondary d-flex align-items-center gap-2 border-bottom pb-2">
                                    <FileText size={20} className="text-abc-blue" /> Detalles del Episodio
                                </h5>
                                <div 
                                    className="text-secondary lh-lg fs-6 article-content"
                                    // fallback to empty string if content missing
                                    dangerouslySetInnerHTML={{ __html: String(episode.content || '') }}
                                />
                            </div>
                            
                            {/* Footer Actions */}
                            <div className="d-flex justify-content-center gap-4 mt-5 pt-4 border-top">
                                <button className="btn btn-outline-light text-secondary border-secondary rounded-circle p-3 hover-bg-gray transition"><Heart size={22} /></button>
                                <button className="btn btn-outline-light text-secondary border-secondary rounded-circle p-3 hover-bg-gray transition"><Share2 size={22} /></button>
                            </div>
                            <div className="text-center mt-3 mb-5 pb-5">
                                <small className="text-muted opacity-50">Radio ABC Stereo Podcast</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
      <style>{`
        .cursor-pointer { cursor: pointer; }
        .hover-scale:hover { transform: scale(1.03); }
        .hover-darker:hover { background-color: rgba(0,0,0,0.4) !important; }
        .hover-bg-gray:hover { background-color: #f1f5f9; color: var(--abc-blue) !important; border-color: var(--abc-blue) !important; }
        .transition { transition: all 0.2s ease; }
        .transition-all { transition: all 0.3s ease; }

        .backdrop-modern {
            background-color: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            animation: fadeInBackdrop 0.4s cubic-bezier(0.33, 1, 0.68, 1) forwards;
        }

        @keyframes fadeInBackdrop {
            from { opacity: 0; backdrop-filter: blur(0px); -webkit-backdrop-filter: blur(0px); }
            to { opacity: 1; backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); }
        }

        .info-sheet-container {
            height: 85vh;
            animation: slideUpSheet 0.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
            /* Force hardware acceleration */
            transform: translate3d(0, 100%, 0);
        }

        @keyframes slideUpSheet {
            from { transform: translate3d(0, 100%, 0); }
            to { transform: translate3d(0, 0, 0); }
        }
        
        /* Responsive Modal width for Desktop Expanded */
        @media (min-width: 992px) {
           .info-sheet-container {
              width: 650px !important;
              left: 50%;
              transform: translateX(-50%) translate3d(0, 100%, 0); /* Initial state for animation */
              bottom: 24px !important;
              border-radius: 24px !important;
              max-height: 85vh !important;
              animation: slideUpSheetDesktop 0.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
           }

           @keyframes slideUpSheetDesktop {
              from { transform: translateX(-50%) translate3d(0, 100%, 0); }
              to { transform: translateX(-50%) translate3d(0, 0, 0); }
           }
        }
        
        .custom-scroll::-webkit-scrollbar { width: 6px; }
        .custom-scroll::-webkit-scrollbar-track { background: transparent; }
        .custom-scroll::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        .custom-scroll::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
        
        .article-content p { margin-bottom: 1.25rem; color: #334155; }
        .article-content ul { padding-left: 1.5rem; margin-bottom: 1.25rem; }
        .article-content li { margin-bottom: 0.5rem; }
      `}</style>
    </>
  );
}