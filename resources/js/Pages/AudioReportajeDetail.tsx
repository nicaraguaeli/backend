import React, { useEffect, useState } from 'react';
import { Head } from '@inertiajs/react';
import { Play, Share2, Facebook, Twitter, Link2, ArrowLeft, User, Calendar } from 'lucide-react';
import { withMainLayout } from '@/Layouts/MainLayout';
import { asset, url } from '@/url';

interface AudioReportaje {
    id: number;
    slug: string;
    titulo: string;
    entrada: string;
    contenido: string;
    categoria: string;
    imagen: string;
    autor: string;
    url: string;
    created_at: string;
}

interface Props {
    audioReport: AudioReportaje;
}

function AudioReportajeDetail({ audioReport }: Props) {
    const [showShareMenu, setShowShareMenu] = useState(false);
    const [isTriggered, setIsTriggered] = useState(false);

    // Helpers
    const formatDate = (dateString: string) => {
        try {
            const safeDateString = dateString.replace(' ', 'T');
            const date = new Date(safeDateString);
            if (isNaN(date.getTime())) return dateString;
            return date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
        } catch { return dateString; }
    };

    const handlePlay = () => {
        // Build a full absolute audio URL
        const base = (window as any).APP_URL || window.location.origin;
        const rawUrl = audioReport.url || '';
        const audioUrl = rawUrl.startsWith('http') ? rawUrl : `${base}/${rawUrl.replace(/^\//, '')}`;
        const imageUrl = audioReport.imagen?.startsWith('http')
            ? audioReport.imagen
            : `${base}/${(audioReport.imagen || '').replace(/^\//, '')}`;

        window.dispatchEvent(new CustomEvent('abc:play-podcast', {
            detail: {
                id: String(audioReport.id),
                title: audioReport.titulo,
                autor: audioReport.autor,
                imageUrl,
                audioUrl,
            }
        }));
        setIsTriggered(true);
    };

    // Auto-play on mount — delay ensures MainLayout's listener is registered
    // (needed for direct-URL / full-page-load navigations)
    useEffect(() => {
        const timer = setTimeout(() => handlePlay(), 200);
        return () => clearTimeout(timer);
    }, []);

    // SEO & Social sharing — same pattern as ArticleDetail.tsx
    useEffect(() => {
        const previousTitle = document.title;
        const base = (window as any).APP_URL || window.location.origin;
        const imageUrl = audioReport.imagen?.startsWith('http')
            ? audioReport.imagen
            : `${base}/${(audioReport.imagen || '').replace(/^\//, '')}`;
        const description = audioReport.entrada
            ? audioReport.entrada.replace(/<[^>]*>/g, '').slice(0, 160)
            : `Audioreportaje de ABC Stereo: ${audioReport.titulo}`;

        document.title = `${audioReport.titulo} | ABC Stereo Audioreportajes`;

        const setMetaTag = (selector: string, attribute: string, content: string) => {
            let el = document.querySelector(selector);
            if (!el) {
                el = document.createElement('meta');
                const [attrName, attrValue] = selector.replace('meta[', '').replace(']', '').split('=');
                el.setAttribute(attrName, attrValue.replace(/"/g, ''));
                document.head.appendChild(el);
            }
            el.setAttribute(attribute, content);
        };

        // Open Graph
        setMetaTag('meta[property="og:title"]',       'content', audioReport.titulo);
        setMetaTag('meta[property="og:description"]', 'content', description);
        setMetaTag('meta[property="og:image"]',       'content', imageUrl);
        setMetaTag('meta[property="og:url"]',         'content', window.location.href);
        setMetaTag('meta[property="og:type"]',        'content', 'article');
        setMetaTag('meta[property="og:site_name"]',   'content', 'ABC Stereo 99.7 FM');
        setMetaTag('meta[property="og:locale"]',      'content', 'es_NI');

        // Twitter / X
        setMetaTag('meta[name="twitter:card"]',        'content', 'summary_large_image');
        setMetaTag('meta[name="twitter:title"]',       'content', audioReport.titulo);
        setMetaTag('meta[name="twitter:description"]', 'content', description);
        setMetaTag('meta[name="twitter:image"]',       'content', imageUrl);

        // Meta description standard
        setMetaTag('meta[name="description"]', 'content', description);

        // Restore defaults on unmount
        return () => {
            document.title = previousTitle;
            setMetaTag('meta[property="og:title"]',       'content', 'Radio ABC Stereo - La voz del norte');
            setMetaTag('meta[property="og:description"]', 'content', 'Noticias, deportes, farándula y la mejor programación musical.');
            setMetaTag('meta[property="og:image"]',       'content', asset('storage/logotipo.png'));
            setMetaTag('meta[property="og:url"]',         'content', window.location.href);
            setMetaTag('meta[property="og:type"]',        'content', 'website');
        };
    }, [audioReport]);

    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

    const copyToClipboard = () => {
        navigator.clipboard.writeText(shareUrl);
        alert('¡Link copiado al portapapeles!');
        setShowShareMenu(false);
    };

    const shareOnFacebook = () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
        setShowShareMenu(false);
    };

    const shareOnTwitter = () => {
        const text = `Escucha: ${audioReport.titulo}`;
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(text)}`, '_blank');
        setShowShareMenu(false);
    };

    const shareOnWhatsApp = () => {
        const text = `Escucha: ${audioReport.titulo} - ${shareUrl}`;
        window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
        setShowShareMenu(false);
    };

    return (
        <>
            <Head title={audioReport.titulo} />

            <div className="min-vh-100 bg-light">
                {/* Hero Section with Audio Player */}
                <div className="position-relative overflow-hidden" style={{ backgroundColor: '#1a1a2e' }}>
                    {/* Background Image with Overlay */}
                    <div
                        className="position-absolute top-0 start-0 w-100 h-100"
                        style={{
                            backgroundImage: `url(${asset(audioReport.imagen)})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: 'blur(20px)',
                            opacity: 0.3,
                            transform: 'scale(1.1)'
                        }}
                    />

                    <div className="container position-relative py-5">
                        {/* Back Button */}
                        <button
                            onClick={() => window.history.back()}
                            className="btn btn-light btn-sm rounded-pill mb-4 d-inline-flex align-items-center gap-2"
                        >
                            <ArrowLeft size={16} />
                            Volver a Audioreportajes
                        </button>

                        <div className="row g-4 align-items-center">
                            {/* Image */}
                            <div className="col-lg-5">
                                <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
                                    <img
                                        src={asset(audioReport.imagen)}
                                        alt={audioReport.titulo}
                                        className="w-100"
                                        style={{ aspectRatio: '1/1', objectFit: 'cover' }}
                                    />
                                </div>
                            </div>

                            {/* Info & Player */}
                            <div className="col-lg-7 text-white">
                                <span className="badge bg-warning text-dark px-3 py-2 mb-3">
                                    {audioReport.categoria}
                                </span>

                                <h1 className="display-5 fw-bold mb-3">{audioReport.titulo}</h1>

                                <p className="lead mb-4 text-white-50">{audioReport.entrada}</p>

                                {/* Metadata */}
                                <div className="d-flex flex-wrap gap-4 mb-4 text-white-50">
                                    {audioReport.autor && (
                                        <div className="d-flex align-items-center gap-2">
                                            <User size={18} />
                                            <span>{audioReport.autor}</span>
                                        </div>
                                    )}
                                    <div className="d-flex align-items-center gap-2">
                                        <Calendar size={18} />
                                        <span>{formatDate(audioReport.created_at)}</span>
                                    </div>
                                </div>

                                {/* Global Player Trigger */}
                                <div className="card bg-dark bg-opacity-50 border-0 backdrop-blur rounded-4 p-4">
                                    <div className="d-flex align-items-center gap-4">
                                        {/* Big play button */}
                                        <button
                                            onClick={handlePlay}
                                            className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                                            style={{ width: '64px', height: '64px', background: 'linear-gradient(135deg,#667eea,#764ba2)', border: 'none', boxShadow: '0 6px 24px rgba(102,126,234,0.5)' }}
                                            aria-label="Reproducir audioreportaje"
                                        >
                                            <Play size={28} fill="white" className="text-white" style={{ marginLeft: '3px' }} />
                                        </button>

                                        <div className="text-white flex-grow-1">
                                            {isTriggered ? (
                                                <>
                                                    <div className="d-flex align-items-center gap-2 mb-1">
                                                        <span className="badge bg-danger" style={{ fontSize: '0.6rem', animation: 'pulse-dot 1.5s ease infinite' }}>▶ REPRODUCIENDO</span>
                                                    </div>

                                                    <div className="text-white-50 small mt-1">Puedes seguir leyendo mientras escuchas</div>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="fw-bold" style={{ fontSize: '0.95rem' }}>Escuchar audioreportaje</div>
                                                    <div className="text-white-50 small mt-1">Se reproducirá en el player global inferior</div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Share Button */}
                                <div className="position-relative mt-3">
                                    <button
                                        onClick={() => setShowShareMenu(!showShareMenu)}
                                        className="btn btn-light btn-sm rounded-pill d-flex align-items-center gap-2"
                                    >
                                        <Share2 size={16} />
                                        Compartir
                                    </button>

                                    {showShareMenu && (
                                        <div
                                            className="position-absolute start-0 mt-2 bg-white rounded-3 shadow-lg p-2"
                                            style={{ minWidth: '200px', zIndex: 1000 }}
                                        >
                                            <button onClick={copyToClipboard} className="btn btn-sm btn-light w-100 text-start d-flex align-items-center gap-2 mb-1"><Link2 size={16} /> Copiar enlace</button>
                                            <button onClick={shareOnFacebook} className="btn btn-sm btn-light w-100 text-start d-flex align-items-center gap-2 mb-1"><Facebook size={16} /> Facebook</button>
                                            <button onClick={shareOnTwitter} className="btn btn-sm btn-light w-100 text-start d-flex align-items-center gap-2 mb-1"><Twitter size={16} /> Twitter</button>
                                            <button onClick={shareOnWhatsApp} className="btn btn-sm btn-light w-100 text-start d-flex align-items-center gap-2">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                                                WhatsApp
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="card border-0 shadow-sm rounded-4 p-4 p-lg-5">
                                <div
                                    className="article-content"
                                    dangerouslySetInnerHTML={{ __html: audioReport.contenido }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .backdrop-blur {
                    backdrop-filter: blur(10px);
                }
                
                .article-content {
                    font-size: 1.1rem;
                    line-height: 1.8;
                    color: #333;
                }
                
                .article-content p {
                    margin-bottom: 1.5rem;
                }
                
                .article-content h2,
                .article-content h3 {
                    margin-top: 2rem;
                    margin-bottom: 1rem;
                    font-weight: 700;
                }
                
                .article-content img {
                    max-width: 100%;
                    height: auto;
                    border-radius: 0.5rem;
                    margin: 2rem 0;
                }
                
                .form-range::-webkit-slider-thumb {
                    background: #0d6efd;
                }
                
                .form-range::-moz-range-thumb {
                    background: #0d6efd;
                }
            `}</style>
        </>
    );
}

AudioReportajeDetail.layout = withMainLayout;

export default AudioReportajeDetail;
