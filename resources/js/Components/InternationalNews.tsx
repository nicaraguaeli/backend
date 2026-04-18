import React from 'react';
import { Link } from '@inertiajs/react';
import { route } from 'ziggy-js';
import { Globe, Clock, ChevronRight, ArrowRight } from 'lucide-react';
import { ArticleData } from '@/types';
import { asset } from '@/url';

interface InternationalNewsProps {
    items: ArticleData[];
}

export default function InternationalNews({ items }: InternationalNewsProps) {
    const getRelativeTime = (dateString: string | Date) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffInMs = now.getTime() - date.getTime();
        const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
        const diffInDays = Math.floor(diffInHours / 24);

        if (diffInHours < 1) return 'Hace menos de 1h';
        if (diffInHours < 24) return `Hace ${diffInHours}h`;
        if (diffInDays === 1) return 'Hace 1 día';
        if (diffInDays < 7) return `Hace ${diffInDays} días`;
        return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' });
    };

    return (
        <div className="bg-white rounded-3 shadow-sm border overflow-hidden">
            {/* Header */}
            <div className="p-3 border-bottom d-flex align-items-center justify-content-between bg-abc-green text-white">
                <h3 className="h6 fw-bold text-uppercase m-0 d-flex align-items-center gap-2 ls-1 text-white">
                    <Globe size={18} className="text-white" />
                    Internacionales
                </h3>
                <span className="badge bg-abc-gold text-abc-blue rounded-pill px-2 py-1" style={{ fontSize: '10px' }}>Global</span>
            </div>

            {/* List — vertical desktop, horizontal scroll mobile */}
            <div className="intl-list-wrap">
                {items.slice(0, 5).map((news) => (
                    <Link
                        key={news.id}
                        href={route('news.show', { slug: news.slug })}
                        className="intl-news-item text-decoration-none"
                    >
                        <div className="intl-thumb">
                            <img
                                src={news.image_path ? asset(`storage/${news.image_path}`) : 'https://via.placeholder.com/100?text=News'}
                                alt={news.title}
                                onError={(e) => (e.target as HTMLImageElement).src = 'https://via.placeholder.com/100?text=ABC'}
                            />
                        </div>
                        <div className="intl-body">
                            <h6 className="news-title fw-bold text-dark mb-1 lh-sm">
                                {news.title}
                            </h6>
                            <div className="d-flex align-items-center gap-1 text-muted">
                                <Clock size={11} />
                                <span>{news.published_at ? getRelativeTime(news.published_at) : 'Reciente'}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Footer */}
            <div className="p-3 bg-light text-center border-top">
                <Link href={route('category.show', { slug: 'internacionales' })} className="text-decoration-none fw-bold text-abc-green d-flex align-items-center justify-content-center gap-1 hover-opacity small">
                    Ver todas las internacionales <ArrowRight size={14} />
                </Link>
            </div>

            <style>{`
        .ls-1 { letter-spacing: 0.5px; }
        .hover-opacity:hover { opacity: 0.8; }

        /* ── Desktop: listado vertical ── */
        .intl-list-wrap {
          display: flex;
          flex-direction: column;
        }
        .intl-news-item {
          display: flex;
          gap: 12px;
          padding: 12px 14px;
          border-bottom: 1px solid #f0f0f0;
          transition: background .18s ease;
        }
        .intl-news-item:last-child { border-bottom: none; }
        .intl-news-item:hover { background: #f8f9fa; }
        .intl-news-item:hover .news-title { color: var(--abc-green) !important; }
        .intl-thumb {
          flex-shrink: 0;
          width: 70px;
          height: 70px;
          border-radius: 4px;
          overflow: hidden;
        }
        .intl-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .intl-body {
          flex: 1;
          min-width: 0;
        }
        .intl-body .news-title { font-size: 0.88rem; }
        .intl-body .text-muted { font-size: 0.72rem; }

        /* ── Mobile: fila horizontal con scroll ── */
        @media (max-width: 767.98px) {
          .intl-list-wrap {
            flex-direction: row !important;
            overflow-x: auto;
            overflow-y: hidden;
            scroll-snap-type: x mandatory;
            scrollbar-width: none;
            -ms-overflow-style: none;
            gap: 10px;
            padding: 12px;
          }
          .intl-list-wrap::-webkit-scrollbar { display: none; }
          .intl-news-item {
            flex: 0 0 200px;
            flex-direction: column !important;
            gap: 8px;
            padding: 10px;
            border-bottom: none !important;
            border-radius: 6px;
            background: #fff;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            scroll-snap-align: start;
          }
          .intl-thumb {
            width: 100%;
            height: 110px;
            border-radius: 4px;
          }
          .intl-body .news-title { font-size: 0.82rem; -webkit-line-clamp: 3; display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden; }
        }
      `}</style>
        </div>
    );
}
