import React from 'react';
import { Head, router } from '@inertiajs/react';
import { route } from 'ziggy-js';
import { url } from '@/url';
import { withMainLayout } from '@/Layouts/MainLayout';
import { User, Clock, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface NewsItem {
    id: number;
    title: string;
    slug: string;
    excerpt?: string;
    image_path?: string;
    published_at?: string;
    categories?: Array<{ id: number; name: string; slug: string }>;
}

interface AuthorData {
    id: number;
    name: string;
    bio?: string;
    avatar?: string;
    type?: string;
}

interface PaginatedResults {
    data: NewsItem[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    from: number;
    to: number;
}

interface Props {
    author: AuthorData;
    news: PaginatedResults;
}

function formatDate(dateStr?: string) {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('es-NI', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    });
}

const AuthorNewsPage = ({ author, news }: Props) => {
    const goToPage = (page: number) => {
        router.visit(route('author.news', { id: author.id, page }), {
            preserveScroll: false,
        });
    };

    return (
        <>
            <Head title={`Noticias de ${author.name} | Radio ABC Stereo`} />

            <div style={{ backgroundColor: '#f4f6f9', minHeight: '100vh', paddingBottom: '3rem' }}>

                {/* Author Hero Banner */}
                <div style={{
                    background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)',
                    padding: '3rem 0 2.5rem',
                    marginBottom: '2rem',
                }}>
                    <div className="container" style={{ maxWidth: '860px' }}>
                        <div className="d-flex align-items-center gap-4">
                            {/* Avatar */}
                            <div style={{
                                width: 80,
                                height: 80,
                                borderRadius: '50%',
                                background: 'rgba(255,255,255,0.12)',
                                border: '3px solid rgba(255,255,255,0.25)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                overflow: 'hidden',
                            }}>
                                {author.avatar ? (
                                    <img
                                        src={`/storage/${author.avatar}`}
                                        alt={author.name}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                                    />
                                ) : (
                                    <User size={36} color="rgba(255,255,255,0.7)" />
                                )}
                            </div>

                            {/* Info */}
                            <div>
                                <p style={{
                                    color: 'rgba(255,255,255,0.55)',
                                    fontSize: '0.75rem',
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    letterSpacing: '2px',
                                    marginBottom: '0.3rem',
                                }}>
                                    Autor
                                </p>
                                <h1 style={{
                                    color: '#fff',
                                    fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
                                    fontWeight: 800,
                                    marginBottom: author.bio ? '0.5rem' : 0,
                                    lineHeight: 1.2,
                                }}>
                                    {author.name}
                                </h1>
                                {author.bio && (
                                    <p style={{
                                        color: 'rgba(255,255,255,0.65)',
                                        fontSize: '0.9rem',
                                        marginBottom: 0,
                                        maxWidth: 560,
                                    }}>
                                        {author.bio}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Count badge */}
                        <div className="mt-3">
                            <span style={{
                                background: 'rgba(255,255,255,0.1)',
                                border: '1px solid rgba(255,255,255,0.2)',
                                color: 'rgba(255,255,255,0.8)',
                                padding: '4px 14px',
                                borderRadius: 50,
                                fontSize: '0.8rem',
                                fontWeight: 600,
                            }}>
                                {news.total.toLocaleString()} {news.total === 1 ? 'nota publicada' : 'notas publicadas'}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Articles List */}
                <div className="container" style={{ maxWidth: '860px' }}>

                    {news.data.length > 0 ? (
                        <>
                            <div className="d-flex flex-column gap-3">
                                {news.data.map((item) => (
                                    <a
                                        key={item.id}
                                        href={route('news.show', { slug: item.slug })}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            router.visit(route('news.show', { slug: item.slug }));
                                        }}
                                        className="text-decoration-none"
                                    >
                                        <div
                                            className="card border-0 shadow-sm"
                                            style={{
                                                borderRadius: 12,
                                                overflow: 'hidden',
                                                transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                                                cursor: 'pointer',
                                            }}
                                            onMouseEnter={e => {
                                                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)';
                                                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 10px 28px rgba(0,0,0,0.12)';
                                            }}
                                            onMouseLeave={e => {
                                                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                                                (e.currentTarget as HTMLDivElement).style.boxShadow = '';
                                            }}
                                        >
                                            <div className="row g-0">
                                                {/* Imagen */}
                                                {item.image_path && (
                                                    <div className="col-md-3" style={{ minHeight: 120 }}>
                                                        <img
                                                            src={`/storage/${item.image_path}`}
                                                            alt={item.title}
                                                            style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: 120, display: 'block' }}
                                                            onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/400x240?text=ABC'; }}
                                                        />
                                                    </div>
                                                )}
                                                {/* Contenido */}
                                                <div className={item.image_path ? 'col-md-9' : 'col-12'}>
                                                    <div className="card-body py-3 px-4 d-flex flex-column h-100">
                                                        {/* Categoría */}
                                                        {item.categories?.[0] && (
                                                            <span className="badge mb-2 text-uppercase" style={{
                                                                background: '#e8edf8',
                                                                color: '#1a3a6b',
                                                                fontSize: '0.65rem',
                                                                letterSpacing: '0.5px',
                                                                alignSelf: 'flex-start',
                                                            }}>
                                                                {item.categories[0].name}
                                                            </span>
                                                        )}
                                                        <h6
                                                            className="card-title fw-bold mb-1 text-dark"
                                                            style={{ fontSize: '1rem', lineHeight: 1.4 }}
                                                        >
                                                            {item.title}
                                                        </h6>
                                                        {item.excerpt && (
                                                            <p className="text-muted mb-2" style={{ fontSize: '0.85rem', lineHeight: 1.5 }}>
                                                                {item.excerpt.length > 140 ? item.excerpt.slice(0, 140) + '…' : item.excerpt}
                                                            </p>
                                                        )}
                                                        <div className="d-flex align-items-center justify-content-between mt-auto">
                                                            <div className="d-flex align-items-center gap-2 text-muted" style={{ fontSize: '0.78rem' }}>
                                                                <Clock size={12} />
                                                                <span>{formatDate(item.published_at)}</span>
                                                            </div>
                                                            <span style={{ color: '#8B1A1A', fontSize: '0.78rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 4 }}>
                                                                Leer más <ArrowRight size={13} />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            {/* Paginación */}
                            {news.last_page > 1 && (
                                <div className="d-flex justify-content-between align-items-center mt-4">
                                    <span className="text-muted" style={{ fontSize: '0.85rem' }}>
                                        Página <strong>{news.current_page}</strong> de <strong>{news.last_page}</strong>
                                        {' '}· Mostrando {news.from}–{news.to} de {news.total.toLocaleString()}
                                    </span>
                                    <div className="d-flex gap-2">
                                        <button
                                            className="btn btn-outline-secondary btn-sm d-flex align-items-center gap-1"
                                            disabled={news.current_page === 1}
                                            onClick={() => goToPage(news.current_page - 1)}
                                            style={{ borderRadius: 8 }}
                                        >
                                            <ChevronLeft size={16} /> Anterior
                                        </button>
                                        <button
                                            className="btn btn-outline-secondary btn-sm d-flex align-items-center gap-1"
                                            disabled={news.current_page === news.last_page}
                                            onClick={() => goToPage(news.current_page + 1)}
                                            style={{ borderRadius: 8 }}
                                        >
                                            Siguiente <ChevronRight size={16} />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-5 text-muted">
                            <User size={48} className="mb-3 opacity-25" />
                            <h5>No hay notas publicadas por {author.name} aún.</h5>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

AuthorNewsPage.layout = withMainLayout;

export default AuthorNewsPage;
