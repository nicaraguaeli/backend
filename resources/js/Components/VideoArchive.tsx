import React, { useEffect, useState } from 'react';
import VideoGallery from './VideoGallery';
import { Video } from '../types';
import { ArrowLeft, PlayCircle, Folder } from 'lucide-react';
import { fetchYoutubeVideos } from '../services/youtubeService';

interface VideoArchiveProps {
    onBack: () => void;
}

export default function VideoArchive({ onBack }: VideoArchiveProps) {
    const [featuredVideos, setFeaturedVideos] = useState<Video[]>([]);
    const [recentVideos, setRecentVideos] = useState<Video[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadArchiveVideos = async () => {
            // Pedimos más videos para llenar ambas secciones
            const allVideos = await fetchYoutubeVideos('Radio ABC Stereo reportajes documentales', 12);

            if (allVideos.length > 0) {
                // Los primeros 3 para el reproductor principal
                setFeaturedVideos(allVideos.slice(0, 3));
                // El resto para las categorías de abajo
                setRecentVideos(allVideos.slice(3));
            }
            setIsLoading(false);
        };

        loadArchiveVideos();
    }, []);

    return (
        <div className="animate-fade-in pb-5">
            {/* Header Section */}
            <div className="bg-abc-blue text-white py-5 mb-4 position-relative overflow-hidden">
                {/* Only show decorative icon on EXTRA large screens (d-none d-xl-block) */}
                <div className="position-absolute top-0 end-0 opacity-10 d-none d-xl-block">
                    <PlayCircle size={300} strokeWidth={0.5} />
                </div>
                <div className="container position-relative z-2">
                    <button
                        onClick={onBack}
                        className="btn btn-outline-light btn-sm mb-3 border-0 ps-0 d-flex align-items-center gap-2 text-white-50 hover-white"
                    >
                        <ArrowLeft size={18} /> Volver al Inicio
                    </button>
                    <h1 className="display-4 fw-bold font-serif mb-2">Reportajes ABC</h1>
                    <p className="lead text-white-50">Explora nuestra videoteca con los mejores reportajes, documentales y entrevistas exclusivas.</p>
                </div>
            </div>

            <div className="container">

                {/* Main Gallery Component */}
                <div className="mb-5">
                    {isLoading ? (
                        <div className="text-center py-5 bg-light rounded">
                            <div className="spinner-border text-primary mb-3" role="status"></div>
                            <p className="text-muted">Cargando galería...</p>
                        </div>
                    ) : (
                        <VideoGallery title="Destacados de la Semana" videos={featuredVideos} />
                    )}
                </div>

                {/* Secondary Categories Grid */}
                <div className="d-flex align-items-center justify-content-between mb-4 border-bottom pb-2">
                    <h3 className="h4 fw-bold text-abc-blue font-serif d-flex align-items-center gap-2">
                        <Folder size={24} className="text-abc-red" />
                        Explorar por Categoría
                    </h3>
                </div>

                <div className="row g-4 mb-5">
                    {/* Reportajes */}
                    <div className="col-md-6 col-lg-4">
                        <div className="card h-100 border-0 shadow-sm">
                            <div className="card-header bg-white border-0 pt-3">
                                <h5 className="fw-bold text-abc-blue mb-0">Nacionales</h5>
                            </div>
                            <div className="card-body p-0">
                                {isLoading ? (
                                    <div className="p-4 text-center text-muted">Cargando...</div>
                                ) : (
                                    <ul className="list-group list-group-flush">
                                        {recentVideos.slice(0, 3).map(video => (
                                            <li key={video.id} className="list-group-item border-0 d-flex gap-3 py-3 hover-bg-light cursor-pointer">
                                                <div className="position-relative flex-shrink-0" style={{ width: '80px', height: '50px' }}>
                                                    <img src={video.thumbnail} className="w-100 h-100 object-fit-cover rounded" alt="" />
                                                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-black bg-opacity-25 rounded">
                                                        <PlayCircle size={16} className="text-white" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <h6 className="mb-1 small fw-bold text-dark line-clamp-2">{video.title}</h6>
                                                    <small className="text-muted">{video.duration}</small>
                                                </div>
                                            </li>
                                        ))}
                                        {recentVideos.length === 0 && <li className="list-group-item">No hay videos disponibles</li>}
                                    </ul>
                                )}
                            </div>
                            <div className="card-footer bg-white border-0 text-center pb-3">
                                <button className="btn btn-sm btn-outline-primary rounded-pill px-3">Ver todos</button>
                            </div>
                        </div>
                    </div>

                    {/* Entrevistas */}
                    <div className="col-md-6 col-lg-4">
                        <div className="card h-100 border-0 shadow-sm">
                            <div className="card-header bg-white border-0 pt-3">
                                <h5 className="fw-bold text-abc-blue mb-0">Entrevistas</h5>
                            </div>
                            <div className="card-body p-0">
                                {isLoading ? (
                                    <div className="p-4 text-center text-muted">Cargando...</div>
                                ) : (
                                    <>
                                        <ul className="list-group list-group-flush">
                                            {recentVideos.slice(3, 6).map(video => (
                                                <li key={video.id} className="list-group-item border-0 d-flex gap-3 py-3 hover-bg-light cursor-pointer">
                                                    <div className="position-relative flex-shrink-0" style={{ width: '80px', height: '50px' }}>
                                                        <img src={video.thumbnail} className="w-100 h-100 object-fit-cover rounded" alt="" />
                                                        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-black bg-opacity-25 rounded">
                                                            <PlayCircle size={16} className="text-white" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h6 className="mb-1 small fw-bold text-dark line-clamp-2">{video.title}</h6>
                                                        <small className="text-muted">{video.duration}</small>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                        {recentVideos.length < 4 && (
                                            <div className="d-flex flex-column align-items-center justify-content-center py-4 text-muted text-center border-top">
                                                <Folder size={32} className="mb-2 opacity-25" />
                                                <p className="small mb-0">Más contenido pronto</p>
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Podcast */}
                    <div className="col-md-6 col-lg-4">
                        <div className="card h-100 border-0 shadow-sm">
                            <div className="card-header bg-white border-0 pt-3">
                                <h5 className="fw-bold text-abc-blue mb-0">Podcast Video</h5>
                            </div>
                            <div className="card-body p-0">
                                <div className="d-flex flex-column align-items-center justify-content-center h-100 text-muted p-4 text-center">
                                    <Folder size={48} className="mb-2 opacity-25" />
                                    <p className="small">Próximamente más contenido en esta sección</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Ad Space */}
                <div className="my-5 p-5 bg-light rounded text-center border border-dashed text-muted">
                    <p className="mb-0 text-uppercase small tracking-wide">Espacio Publicitario</p>
                </div>

            </div>

            <style>{`
        .cursor-pointer { cursor: pointer; }
        .hover-bg-light:hover { background-color: #f8f9fa; }
        .hover-white:hover { color: white !important; }
      `}</style>
        </div>
    );
}