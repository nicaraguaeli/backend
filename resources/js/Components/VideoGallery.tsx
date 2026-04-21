import React, { useState, useEffect } from 'react';
import { Play, Calendar, ListVideo, ChevronRight, Tv } from 'lucide-react';
import { Video } from '../types';

interface VideoGalleryProps {
    title?: string;
    videos: Video[];
    className?: string;
    compact?: boolean;
    onSeeMore?: () => void;
}

export default function VideoGallery({
    title = "Videos de Actualidad",
    videos,
    className = "",
    compact = false,
    onSeeMore,
}: VideoGalleryProps) {
    const [activeVideo, setActiveVideo] = useState<Video | undefined>(videos?.[0]);

    useEffect(() => {
        if (videos && videos.length > 0) setActiveVideo(videos[0]);
    }, [videos]);

    if (!videos || videos.length === 0) return null;
    const currentVideo = activeVideo || videos[0];
    if (!currentVideo) return null;

    return (
        <section className={`vg-wrap ${className}`}>
            <style>{`
        /* ── Root ────────────────────────────────────── */
        .vg-wrap {
          background: #0b1c3a;
          border-radius: 4px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.07);
          box-shadow: 0 20px 60px rgba(0,0,0,0.45);
        }

        /* ── Header ──────────────────────────────────── */
        .vg-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 22px;
          background: #002060; /* --abc-blue */
          border-bottom: 3px solid #FF0000; /* --abc-red accent */
        }
        .vg-head-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .vg-head-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px; height: 34px;
          border-radius: 4px;
          background: #FF0000;
          color: #fff;
          flex-shrink: 0;
        }
        .vg-head-title {
          font-family: 'Merriweather', serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: #fff;
          margin: 0;
          letter-spacing: -0.01em;
        }
        .vg-head-meta {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'Inter', sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
        }

        /* ── Body (grid) ─────────────────────────────── */
        .vg-body {
          display: grid;
          grid-template-columns: 1fr 320px;
        }
        @media (max-width: 991px) {
          .vg-body { grid-template-columns: 1fr; }
          .vg-playlist {
            max-height: 260px;
            border-left: none !important;
            border-top: 1px solid rgba(255,255,255,0.07);
          }
        }

        /* ── Player ──────────────────────────────────── */
        .vg-player { background: #000; }
        .vg-player-ratio {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
        }
        .vg-player-ratio iframe {
          position: absolute; inset: 0;
          width: 100%; height: 100%; border: 0;
        }
        .vg-player-info {
          padding: 18px 22px 20px;
          background: #060f22;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .vg-player-meta {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 8px;
        }
        .vg-cat-badge {
          font-family: 'Inter', sans-serif;
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          background: #FF0000;
          color: #fff;
          padding: 2px 8px;
          border-radius: 2px;
        }
        .vg-date {
          display: flex;
          align-items: center;
          gap: 4px;
          font-family: 'Inter', sans-serif;
          font-size: 0.72rem;
          color: rgba(255,255,255,0.38);
        }
        .vg-player-title {
          font-family: 'Merriweather', serif;
          font-size: 1.05rem;
          font-weight: 700;
          color: #fff;
          margin: 0 0 6px;
          line-height: 1.4;
          letter-spacing: -0.01em;
        }
        .vg-player-desc {
          font-family: 'Inter', sans-serif;
          font-size: 0.82rem;
          color: rgba(255,255,255,0.4);
          line-height: 1.6;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* ── Playlist ────────────────────────────────── */
        .vg-playlist {
          display: flex;
          flex-direction: column;
          border-left: 1px solid rgba(255,255,255,0.07);
          background: #081325;
          overflow: hidden;
        }
        .vg-pl-header {
          padding: 12px 16px;
          font-family: 'Inter', sans-serif;
          font-size: 0.62rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          background: rgba(0,32,96,0.4);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          flex-shrink: 0;
        }
        .vg-pl-scroll {
          overflow-y: auto;
          flex: 1;
          padding: 6px;
        }
        .vg-pl-scroll::-webkit-scrollbar { width: 3px; }
        .vg-pl-scroll::-webkit-scrollbar-track { background: transparent; }
        .vg-pl-scroll::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.12);
          border-radius: 4px;
        }

        /* ── Playlist Item ───────────────────────────── */
        .vg-item {
          display: flex;
          gap: 10px;
          padding: 8px;
          border-radius: 4px;
          cursor: pointer;
          border: 1px solid transparent;
          transition: background 0.18s ease, border-color 0.18s ease;
          margin-bottom: 3px;
        }
        .vg-item:last-child { margin-bottom: 0; }
        .vg-item:hover {
          background: rgba(255,255,255,0.04);
          border-color: rgba(255,255,255,0.07);
        }
        .vg-item-active {
          background: rgba(0,32,96,0.5) !important;   /* abc-blue tint */
          border-color: rgba(255,215,0,0.25) !important; /* abc-gold rim */
        }

        /* Thumbnail */
        .vg-thumb {
          position: relative;
          flex-shrink: 0;
          width: 112px; height: 63px;
          border-radius: 3px;
          overflow: hidden;
          background: #000;
        }
        .vg-thumb img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.3s ease;
        }
        .vg-item:hover .vg-thumb img { transform: scale(1.06); }
        .vg-thumb-overlay {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          background: rgba(0,0,0,0.35);
          transition: background 0.18s ease;
        }
        .vg-item-active .vg-thumb-overlay { background: rgba(0,32,96,0.55); }
        .vg-item:hover .vg-thumb-overlay { background: rgba(0,0,0,0.5); }
        .vg-play-btn {
          width: 24px; height: 24px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          display: flex; align-items: center; justify-content: center;
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255,255,255,0.2);
          transition: transform 0.2s ease, background 0.2s ease;
        }
        .vg-item:hover .vg-play-btn { transform: scale(1.15); background: rgba(255,0,0,0.7); }
        .vg-item-active .vg-play-btn { background: rgba(255,215,0,0.25); border-color: rgba(255,215,0,0.4); }
        .vg-duration {
          position: absolute; bottom: 3px; right: 4px;
          background: rgba(0,0,0,0.82);
          color: #fff;
          font-family: monospace;
          font-size: 0.58rem; font-weight: 700;
          padding: 1px 4px; border-radius: 2px;
        }

        /* Item info */
        .vg-item-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-width: 0;
        }
        .vg-item-title {
          font-family: 'Inter', sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          line-height: 1.35;
          color: rgba(255,255,255,0.8);
          margin: 0 0 4px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: color 0.15s ease;
        }
        .vg-item-active .vg-item-title { color: #FFD700; } /* abc-gold */
        .vg-item:hover .vg-item-title { color: #fff; }
        .vg-item-date {
          font-family: 'Inter', sans-serif;
          font-size: 0.65rem;
          color: rgba(255,255,255,0.28);
        }

        /* ── Footer ──────────────────────────────────── */
        .vg-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 13px 22px;
          background: #002060;
          border-top: 1px solid rgba(255,255,255,0.07);
        }
        .vg-footer-text {
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          color: rgba(255,255,255,0.4);
        }
        .vg-cta {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: #FF0000;
          color: #fff !important;
          font-family: 'Inter', sans-serif;
          font-size: 0.73rem;
          font-weight: 700;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          text-decoration: none !important;
          padding: 8px 18px;
          border-radius: 3px;
          transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 4px 14px rgba(255,0,0,0.35);
        }
        .vg-cta:hover {
          background: #cc0000;
          transform: translateY(-1px);
          box-shadow: 0 7px 20px rgba(255,0,0,0.45);
        }
        .vg-cta:active { transform: translateY(0); }
      `}</style>

            {/* ── Header ── */}
            <div className="vg-head">
                <div className="vg-head-left">
                    <div className="vg-head-icon">
                        <Tv size={16} />
                    </div>
                    <h2 className="vg-head-title">{title}</h2>
                </div>
                {!compact && (
                    <div className="vg-head-meta">
                        <ListVideo size={14} />
                        <span>{videos.length} videos</span>
                    </div>
                )}
            </div>

            {/* ── Body ── */}
            <div className="vg-body">
                {/* Player */}
                <div className="vg-player">
                    <div className="vg-player-ratio">
                        <iframe
                            src={`${currentVideo.videoUrl}?rel=0&modestbranding=1`}
                            title={currentVideo.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div className="vg-player-info">
                        <div className="vg-player-meta">
                            {currentVideo.category && (
                                <span className="vg-cat-badge">{currentVideo.category}</span>
                            )}
                            <span className="vg-date">
                                <Calendar size={11} />
                                {currentVideo.date?.split('•')[0]?.trim()}
                            </span>
                        </div>
                        <h3 className="vg-player-title">{currentVideo.title}</h3>
                        {currentVideo.description && (
                            <p className="vg-player-desc">{currentVideo.description}</p>
                        )}
                    </div>
                </div>

                {/* Playlist */}
                <div className="vg-playlist">
                    <div className="vg-pl-header">Siguiente en lista</div>
                    <div className="vg-pl-scroll">
                        {videos.map((video) => {
                            const isActive = currentVideo.id === video.id;
                            return (
                                <div
                                    key={video.id}
                                    className={`vg-item ${isActive ? 'vg-item-active' : ''}`}
                                    onClick={() => setActiveVideo(video)}
                                >
                                    <div className="vg-thumb">
                                        <img src={video.thumbnail} alt={video.title} />
                                        <div className="vg-thumb-overlay">
                                            <div className="vg-play-btn">
                                                <Play size={10} fill="currentColor" color="#fff" />
                                            </div>
                                        </div>
                                        {video.duration && (
                                            <span className="vg-duration">{video.duration}</span>
                                        )}
                                    </div>
                                    <div className="vg-item-info">
                                        <h5 className="vg-item-title">{video.title}</h5>
                                        <span className="vg-item-date">{video.date?.split('•')[0]?.trim()}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* ── Footer CTA ── */}
            <div className="vg-footer">
                <span className="vg-footer-text">Más contenido en ABC TV</span>
                <button className="vg-cta" onClick={onSeeMore}>
                    Ver todos los videos
                    <ChevronRight size={14} />
                </button>
            </div>
        </section>
    );
}