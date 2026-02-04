import React from 'react';
import { router } from '@inertiajs/react';
import { route } from 'ziggy-js';
import { Globe, Clock, ChevronRight, ArrowRight } from 'lucide-react';
import { ArticleData } from '@/types';
import { asset } from '@/url';

interface InternationalNewsProps {
    items: ArticleData[];
}

export default function InternationalNews({ items }: InternationalNewsProps) {
    const onNewsClick = (slug: string) => {
        router.visit(route('news.show', { slug }));
    };

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

            {/* List */}
            <div className="list-group list-group-flush">
                {items.slice(0, 5).map((news) => (
                    <a
                        key={news.id}
                        href={route('news.show', { slug: news.slug })}
                        onClick={(e) => { e.preventDefault(); onNewsClick(news.slug); }}
                        className="list-group-item list-group-item-action border-0 border-bottom p-3 news-item-hover"
                    >
                        <div className="d-flex gap-3">
                            {/* Thumbnail */}
                            <div className="flex-shrink-0 position-relative">
                                <img
                                    src={news.image_path ? asset(`storage/${news.image_path}`) : 'https://via.placeholder.com/100?text=News'}
                                    alt={news.title}
                                    className="rounded object-fit-cover"
                                    style={{ width: '70px', height: '70px' }}
                                    onError={(e) => (e.target as HTMLImageElement).src = 'https://via.placeholder.com/100?text=ABC'}
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-grow-1">
                                <h6 className="news-title fw-bold text-dark mb-1 lh-sm" style={{ fontSize: '0.9rem' }}>
                                    {news.title}
                                </h6>
                                <div className="d-flex align-items-center gap-2 text-muted small mt-1">
                                    <Clock size={12} />
                                    <span style={{ fontSize: '0.75rem' }}>
                                        {news.published_at ? getRelativeTime(news.published_at) : 'Reciente'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            {/* Footer */}
            <div className="p-3 bg-light text-center border-top">
                <a href={route('category.show', { slug: 'internacionales' })} className="text-decoration-none fw-bold text-abc-green d-flex align-items-center justify-content-center gap-1 hover-opacity small">
                    Ver todas las internacionales <ArrowRight size={14} />
                </a>
            </div>

            <style>{`
        .ls-1 { letter-spacing: 0.5px; }
        .news-item-hover:hover {
          background-color: #f8f9fa;
        }
        .news-item-hover:hover .news-title {
          color: var(--abc-green) !important;
        }
        .hover-opacity:hover {
          opacity: 0.8;
        }
      `}</style>
        </div>
    );
}
