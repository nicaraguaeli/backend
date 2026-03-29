import React, { useState } from 'react';
import { Head, router } from '@inertiajs/react';
import { route } from 'ziggy-js';
import { url } from '@/url';
import { withMainLayout } from '@/Layouts/MainLayout';
import { Search, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

interface NewsItem {
    id: number;
    title: string;
    slug: string;
    excerpt?: string;
    image_path?: string;
    published_at?: string;
    city?: string;
    country?: string;
}

interface PaginatedResults {
    data: NewsItem[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    from: number;
    to: number;
    links: Array<{ url: string | null; label: string; active: boolean }>;
}

interface Props {
    query: string;
    results: PaginatedResults | null;
    total: number;
}

function formatDate(dateStr?: string) {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleDateString('es-NI', { day: '2-digit', month: 'short', year: 'numeric' });
}

const SearchPage = ({ query: initialQuery, results, total }: Props) => {
    const [inputValue, setInputValue] = useState(initialQuery);

    const handleNewSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const q = inputValue.trim();
        if (!q) return;
        router.visit(route('search', { q }));
    };

    const goToPage = (page: number) => {
        if (!initialQuery) return;
        router.visit(route('search', { q: initialQuery, page }));
    };

    return (
        <>
            <Head title={initialQuery ? `Resultados: "${initialQuery}"` : 'Búsqueda'} />

            <div style={{ backgroundColor: '#f4f6f9', minHeight: '100vh', paddingTop: '2rem', paddingBottom: '3rem' }}>
                <div className="container" style={{ maxWidth: '860px' }}>

                    {/* Header de búsqueda */}
                    <div className="mb-4">
                        <form onSubmit={handleNewSearch} className="input-group input-group-lg shadow-sm">
                            <input
                                type="text"
                                className="form-control border-end-0"
                                placeholder="Buscar noticias..."
                                value={inputValue}
                                onChange={e => setInputValue(e.target.value)}
                                autoFocus
                                style={{ borderRadius: '50px 0 0 50px', paddingLeft: '1.5rem' }}
                            />
                            <button
                                type="submit"
                                className="btn btn-primary border-start-0"
                                style={{ borderRadius: '0 50px 50px 0', paddingRight: '1.5rem', background: 'var(--abc-blue, #1a3a6b)', borderColor: 'var(--abc-blue, #1a3a6b)' }}
                            >
                                <Search size={20} />
                            </button>
                        </form>

                        {/* Resumen de resultados */}
                        {initialQuery && (
                            <div className="mt-3 d-flex align-items-center gap-2 text-muted" style={{ fontSize: '0.9rem' }}>
                                <Search size={14} />
                                {total > 0
                                    ? <span>Se encontraron <strong>{total.toLocaleString()}</strong> resultado{total !== 1 ? 's' : ''} para <strong>"{initialQuery}"</strong></span>
                                    : <span>No se encontraron resultados para <strong>"{initialQuery}"</strong></span>
                                }
                            </div>
                        )}
                    </div>

                    {/* Listado de resultados */}
                    {results && results.data.length > 0 ? (
                        <>
                            <div className="d-flex flex-column gap-3">
                                {results.data.map((item) => (
                                    <a
                                        key={item.id}
                                        href={route('news.show', { slug: item.slug })}
                                        onClick={(e) => { e.preventDefault(); router.visit(route('news.show', { slug: item.slug })); }}
                                        className="text-decoration-none"
                                    >
                                        <div
                                            className="card border-0 shadow-sm"
                                            style={{
                                                borderRadius: '12px',
                                                overflow: 'hidden',
                                                transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                                                cursor: 'pointer',
                                            }}
                                            onMouseEnter={e => {
                                                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)';
                                                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
                                            }}
                                            onMouseLeave={e => {
                                                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                                                (e.currentTarget as HTMLDivElement).style.boxShadow = '';
                                            }}
                                        >
                                            <div className="row g-0">
                                                {/* Imagen */}
                                                {item.image_path && (
                                                    <div className="col-md-3" style={{ minHeight: '120px' }}>
                                                        <img
                                                            src={`/storage/${item.image_path}`}
                                                            alt={item.title}
                                                            style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '120px' }}
                                                        />
                                                    </div>
                                                )}
                                                {/* Contenido */}
                                                <div className={item.image_path ? 'col-md-9' : 'col-12'}>
                                                    <div className="card-body py-3 px-4">
                                                        <h6
                                                            className="card-title fw-bold mb-1 text-dark"
                                                            style={{ fontSize: '1rem', lineHeight: '1.4' }}
                                                        >
                                                            {item.title}
                                                        </h6>
                                                        {item.excerpt && (
                                                            <p className="text-muted mb-2" style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
                                                                {item.excerpt.length > 150 ? item.excerpt.slice(0, 150) + '...' : item.excerpt}
                                                            </p>
                                                        )}
                                                        <div className="d-flex align-items-center gap-2 text-muted" style={{ fontSize: '0.78rem' }}>
                                                            <Clock size={12} />
                                                            <span>{formatDate(item.published_at)}</span>
                                                            {item.city && <><span>·</span><span>{item.city}</span></>}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            {/* Paginación */}
                            {results.last_page > 1 && (
                                <div className="d-flex justify-content-between align-items-center mt-4">
                                    <span className="text-muted" style={{ fontSize: '0.85rem' }}>
                                        Página <strong>{results.current_page}</strong> de <strong>{results.last_page}</strong>
                                        {' '}· Mostrando {results.from}–{results.to} de {results.total.toLocaleString()}
                                    </span>
                                    <div className="d-flex gap-2">
                                        <button
                                            className="btn btn-outline-secondary btn-sm d-flex align-items-center gap-1"
                                            disabled={results.current_page === 1}
                                            onClick={() => goToPage(results.current_page - 1)}
                                            style={{ borderRadius: '8px' }}
                                        >
                                            <ChevronLeft size={16} /> Anterior
                                        </button>
                                        <button
                                            className="btn btn-outline-secondary btn-sm d-flex align-items-center gap-1"
                                            disabled={results.current_page === results.last_page}
                                            onClick={() => goToPage(results.current_page + 1)}
                                            style={{ borderRadius: '8px' }}
                                        >
                                            Siguiente <ChevronRight size={16} />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </>
                    ) : initialQuery && (
                        <div className="text-center py-5 text-muted">
                            <Search size={48} className="mb-3 opacity-25" />
                            <h5>No encontramos resultados para "{initialQuery}"</h5>
                            <p style={{ fontSize: '0.9rem' }}>Intenta con otras palabras clave.</p>
                        </div>
                    )}

                </div>
            </div>
        </>
    );
};

SearchPage.layout = withMainLayout;

export default SearchPage;
