import React from 'react';
import { router } from '@inertiajs/react';
import { route } from 'ziggy-js';
import { Globe, Clock, TrendingUp, Zap } from 'lucide-react';
import { ArticleData } from '@/types';

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
        <div className="card border-0 shadow-lg bg-white rounded-lg overflow-hidden international-news-widget">
            {/* Header con gradiente vibrante */}
            <div className="card-header bg-gradient-vibrant text-white border-0 p-4 position-relative">
                <div className="animated-bg"></div>
                <div className="d-flex align-items-center justify-content-between position-relative" style={{ zIndex: 2 }}>
                    <h3 className="h5 mb-0 fw-bold font-serif d-flex align-items-center gap-2">
                        <div className="icon-pulse">
                            <Globe size={22} className="text-warning" />
                        </div>
                        <span className="text-shadow-strong">Internacionales</span>
                    </h3>
                    <div className="trending-badge">
                        <TrendingUp size={18} className="me-1" />
                        <Zap size={14} className="text-warning" />
                    </div>
                </div>
            </div>

            {/* Body con fondo sutil */}
            <div className="card-body p-0 bg-gradient-subtle">
                <ul className="list-group list-group-flush">
                    {items.map((news, index) => (
                        <li key={news.id}
                            className={`list-group-item bg-transparent border-0 international-news-item ${index < items.length - 1 ? 'border-bottom border-light' : ''}`}
                        >
                            <a
                                href={route('news.show', { slug: news.slug })}
                                onClick={(e) => { e.preventDefault(); onNewsClick(news.slug); }}
                                className="text-decoration-none d-block py-3 px-3"
                            >
                                <div className="d-flex align-items-start gap-3">
                                    <div className="news-icon-wrapper">
                                        <div className="news-icon bg-gradient-icon rounded-circle d-flex align-items-center justify-content-center">
                                            <Globe size={18} className="text-white" />
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h6 className="news-title mb-1 fw-semibold text-dark lh-sm">
                                            {news.title}
                                        </h6>
                                        <div className="d-flex align-items-center gap-2 text-muted">
                                            <Clock size={12} className="text-info" />
                                            <small className="news-time">
                                                {news.published_at ? getRelativeTime(news.published_at) : 'Reciente'}
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .international-news-widget {
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                }

                .international-news-widget::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                    background: linear-gradient(90deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3);
                    background-size: 200% 100%;
                    animation: shimmer 3s linear infinite;
                }

                @keyframes shimmer {
                    0% { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }

                .bg-gradient-vibrant {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
                    position: relative;
                    overflow: hidden;
                }

                .animated-bg {
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
                    animation: rotate 20s linear infinite;
                }

                @keyframes rotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                .bg-gradient-subtle {
                    background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
                }

                .icon-pulse {
                    animation: pulse 2s ease-in-out infinite;
                }

                @keyframes pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                }

                .trending-badge {
                    background: rgba(255, 255, 255, 0.2);
                    backdrop-filter: blur(10px);
                    padding: 6px 12px;
                    border-radius: 20px;
                    display: flex;
                    align-items: center;
                    animation: float 3s ease-in-out infinite;
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-5px); }
                }

                .text-shadow-strong {
                    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
                }

                .international-news-item {
                    transition: all 0.3s ease;
                    position: relative;
                }

                .international-news-item::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    height: 100%;
                    width: 4px;
                    background: linear-gradient(180deg, #ff6b6b 0%, #ee5a6f 50%, #c44569 100%);
                    transform: scaleY(0);
                    transition: transform 0.3s ease;
                }

                .international-news-item:hover {
                    background: linear-gradient(90deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
                    transform: translateX(6px);
                }

                .international-news-item:hover::before {
                    transform: scaleY(1);
                }

                .news-icon-wrapper {
                    flex-shrink: 0;
                }

                .news-icon {
                    width: 40px;
                    height: 40px;
                    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                    box-shadow: 0 4px 8px rgba(102, 126, 234, 0.3);
                }

                .bg-gradient-icon {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                }

                .international-news-item:hover .news-icon {
                    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%) !important;
                    transform: rotate(360deg) scale(1.1);
                    box-shadow: 0 6px 16px rgba(240, 147, 251, 0.5);
                }

                .news-title {
                    font-size: 0.9rem;
                    color: #2c3e50;
                    transition: all 0.3s ease;
                    line-height: 1.4;
                }

                .international-news-item:hover .news-title {
                    color: #667eea;
                    transform: translateX(4px);
                }

                .news-time {
                    font-size: 0.75rem;
                    font-weight: 600;
                    transition: all 0.3s ease;
                }

                .international-news-item:hover .news-time {
                    color: #764ba2 !important;
                    transform: scale(1.05);
                }

                @media (max-width: 768px) {
                    .news-icon {
                        width: 36px;
                        height: 36px;
                    }
                    
                    .news-title {
                        font-size: 0.85rem;
                    }

                    .international-news-item:hover {
                        transform: translateX(4px);
                    }
                }
            `}} />
        </div>
    );
}
