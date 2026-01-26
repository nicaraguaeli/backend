import React, { useState, useEffect } from 'react';
import { Play, Pause, X, SkipBack, SkipForward, Volume2, Maximize2 } from 'lucide-react';

interface PodcastEpisode {
  id: string;
  title: string;
  audioUrl: string;
  image: string;
  author?: string;
}

interface PodcastPlayerProps {
  episode: PodcastEpisode | null;
  onClose: () => void;
}

export default function PodcastPlayer({ episode, onClose }: PodcastPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  // Reset state when episode changes
  useEffect(() => {
    if (episode) {
      setIsPlaying(true);
      setProgress(0);
    }
  }, [episode]);

  // Mock progress animation
  useEffect(() => {
    if (!isPlaying || !episode) return;
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
    }, 1000);
    return () => clearInterval(timer);
  }, [isPlaying, episode]);

  if (!episode) return null;

  return (
    <div className="fixed-bottom animate-slide-up px-3 pb-3" style={{ zIndex: 1080, bottom: '80px' }}>
      <div 
        className="podcast-player-glass rounded-4 shadow-lg overflow-hidden border border-white border-opacity-25"
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
      >
        {/* Progress Bar */}
        <div className="w-100 bg-secondary bg-opacity-10" style={{ height: '4px' }}>
          <div 
            className="h-100 bg-abc-red transition-all" 
            style={{ width: `${progress}%`, transition: 'width 1s linear' }}
          ></div>
        </div>

        <div className="p-3 d-flex align-items-center gap-3">
          {/* Cover Art */}
          <div className="position-relative flex-shrink-0">
            <img 
              src={episode.image} 
              alt={episode.title} 
              className="rounded-3 shadow-sm object-fit-cover"
              style={{ width: '56px', height: '56px' }}
            />
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-10 rounded-3 border border-white border-opacity-10"></div>
          </div>

          {/* Info */}
          <div className="flex-grow-1 overflow-hidden">
            <h6 className="mb-0 fw-bold text-abc-blue text-truncate font-serif" style={{ fontSize: '0.95rem' }}>
              {episode.title}
            </h6>
            <p className="mb-0 text-muted small text-truncate" style={{ fontSize: '0.75rem' }}>
              {episode.author || 'Radio ABC Stereo Podcast'}
            </p>
          </div>

          {/* Controls */}
          <div className="d-flex align-items-center gap-2">
             <button className="btn btn-link text-secondary p-1 d-none d-md-block hover-scale">
                <SkipBack size={20} fill="currentColor" />
             </button>

             <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="btn btn-abc-blue rounded-circle p-0 d-flex align-items-center justify-content-center shadow-md hover-scale"
                style={{ width: '48px', height: '48px' }}
             >
                {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ms-1" />}
             </button>

             <button className="btn btn-link text-secondary p-1 d-none d-md-block hover-scale">
                <SkipForward size={20} fill="currentColor" />
             </button>

             <button 
                onClick={onClose}
                className="btn btn-link text-muted p-1 ms-2 hover-red"
             >
                <X size={24} />
             </button>
          </div>
        </div>
      </div>

      <style>{`
        .animate-slide-up {
          animation: slideUpPlayer 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes slideUpPlayer {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .podcast-player-glass {
           /* Glassmorphism fallback done in inline styles, this class is for structure */
        }
        .hover-scale { transition: transform 0.2s; }
        .hover-scale:active { transform: scale(0.9); }
        .hover-red:hover { color: var(--abc-red) !important; }
      `}</style>
    </div>
  );
}