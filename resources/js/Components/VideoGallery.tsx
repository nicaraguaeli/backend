import React, { useState, useEffect } from 'react';
import { Play, Calendar, MapPin, ListVideo } from 'lucide-react';
import { Video } from '../types';

interface VideoGalleryProps {
    title?: string;
    videos: Video[];
    className?: string;
    compact?: boolean; // If true, simpler layout
}

export default function VideoGallery({
    title = "Videos de Actualidad",
    videos,
    className = "",
    compact = false
}: VideoGalleryProps) {
    const [activeVideo, setActiveVideo] = useState<Video | undefined>(videos?.[0]);

    // Update active video when videos prop changes
    useEffect(() => {
        if (videos && videos.length > 0) {
            setActiveVideo(videos[0]);
        }
    }, [videos]);

    if (!videos || videos.length === 0) return null;

    // Safe fallback to first video if activeVideo is undefined for some reason
    const currentVideo = activeVideo || videos[0];

    if (!currentVideo) return null;

    return (
        <section className={`video-gallery-section rounded overflow-hidden shadow-lg ${className}`}>
            <style>{`
        .video-gallery-section {
          background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
          color: white;
          border: 1px solid #334155;
        }
        .video-list-container {
          max-height: ${compact ? '350px' : '480px'};
          overflow-y: auto;
        }
        /* Custom Scrollbar */
        .video-list-container::-webkit-scrollbar {
          width: 6px;
        }
        .video-list-container::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.05);
        }
        .video-list-container::-webkit-scrollbar-thumb {
          background: #475569;
          border-radius: 4px;
        }
        .video-item {
          transition: all 0.2s ease;
          cursor: pointer;
          border: 1px solid transparent;
        }
        .video-item:hover {
          background-color: rgba(255,255,255,0.05);
          transform: translateX(4px);
        }
        .video-item.active {
          background-color: rgba(30, 58, 138, 0.3); /* Dark blue tint */
          border-color: rgba(96, 165, 250, 0.3);
        }
        .play-overlay {
          background: rgba(0,0,0,0.4);
          transition: all 0.3s ease;
          backdrop-filter: blur(1px);
        }
        .video-item:hover .play-overlay {
          background: rgba(0,0,0,0.6);
        }
        .video-item.active .play-overlay {
          background: rgba(0, 32, 96, 0.6);
          color: var(--abc-gold);
        }
      `}</style>

            {/* Header */}
            <div className="p-4 border-bottom border-secondary border-opacity-25 d-flex align-items-center justify-content-between bg-black bg-opacity-20">
                <div className="d-flex align-items-center">
                    <div className="bg-abc-red shadow-sm" style={{ width: '4px', height: '28px', marginRight: '12px' }}></div>
                    <h2 className="h4 m-0 text-uppercase fw-bold font-serif text-white">{title}</h2>
                </div>
                {!compact && (
                    <div className="d-flex align-items-center gap-2 small text-white-50">
                        <ListVideo size={18} />
                        <span>{videos.length} videos en lista</span>
                    </div>
                )}
            </div>

            <div className="row g-0">
                {/* Main Player Column */}
                <div className="col-lg-8 border-end border-secondary border-opacity-25 bg-black">
                    <div className="d-flex flex-column h-100">
                        {/* Video Wrapper 16:9 */}
                        <div className="ratio ratio-16x9">
                            <iframe
                                src={`${currentVideo.videoUrl}?autoplay=1&rel=0`}
                                title={currentVideo.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="shadow-sm"
                            ></iframe>
                        </div>

                        {/* Video Info */}
                        <div className="p-4 bg-gradient-to-b from-gray-900">
                            <div className="d-flex flex-wrap align-items-center gap-3 text-abc-gold small mb-2 fw-medium text-uppercase tracking-wide">
                                {currentVideo.category && <span className="badge bg-white bg-opacity-10 text-white border border-white border-opacity-10">{currentVideo.category}</span>}
                                <div className="d-flex align-items-center gap-1"><MapPin size={14} /> <span>{currentVideo.location}</span></div>
                                <div className="d-flex align-items-center gap-1"><Calendar size={14} /> <span>{currentVideo.date}</span></div>
                            </div>
                            <h3 className="h3 fw-bold font-serif mb-3 text-white lh-sm">{currentVideo.title}</h3>
                            <p className="text-white-50 mb-0" style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
                                {currentVideo.description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Playlist Column */}
                <div className="col-lg-4 d-flex flex-column">
                    <div className="p-3 bg-black bg-opacity-20 h-100">
                        <h4 className="h6 text-white-50 fw-bold mb-3 text-uppercase small letter-spacing-1">Siguiente en la lista</h4>

                        <div className="video-list-container pe-1">
                            <div className="d-flex flex-column gap-2">
                                {videos.map((video) => (
                                    <div
                                        key={video.id}
                                        className={`video-item d-flex gap-3 p-2 rounded ${currentVideo.id === video.id ? 'active' : ''}`}
                                        onClick={() => setActiveVideo(video)}
                                    >
                                        {/* Thumbnail */}
                                        <div className="position-relative flex-shrink-0 rounded overflow-hidden shadow-sm" style={{ width: '130px', height: '74px' }}>
                                            <img
                                                src={video.thumbnail}
                                                alt={video.title}
                                                className="w-100 h-100 object-fit-cover"
                                            />
                                            <div className="play-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                                                <Play size={18} fill="currentColor" className={currentVideo.id === video.id ? "text-abc-gold" : "text-white"} />
                                            </div>
                                            <span className="position-absolute bottom-0 end-0 bg-black bg-opacity-75 text-white px-1 m-1 rounded fw-bold font-monospace" style={{ fontSize: '0.65rem' }}>
                                                {video.duration}
                                            </span>
                                        </div>

                                        {/* Info */}
                                        <div className="flex-grow-1 d-flex flex-column justify-content-center">
                                            <h5 className={`mb-1 fw-bold line-clamp-2 ${currentVideo.id === video.id ? 'text-abc-gold' : 'text-white'}`} style={{ fontSize: '0.85rem', lineHeight: '1.3' }}>
                                                {video.title}
                                            </h5>
                                            <span className="text-white-50 small" style={{ fontSize: '0.7rem' }}>
                                                {video.date.split('•')[0]}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}