import React, { useState, useMemo } from 'react';
import { Head } from '@inertiajs/react';
import { withMainLayout } from '@/Layouts/MainLayout';
import { Briefcase, MapPin, Clock, Building, ChevronDown, ChevronUp, Search, Filter } from 'lucide-react';
import DOMPurify from 'dompurify';
import { asset } from '@/url';

interface Vacancy {
    id: number;
    title: string;
    company: string;
    city: string;
    country: string;
    employment_type: string;
    description: string;
    file_path: string | null;
    is_active: boolean;
    created_at: string;
    expires_at: string;
}

interface Props {
    vacancies: Vacancy[];
}

// ─── Helpers ────────────────────────────────────────────────────────────────

const EMPLOYMENT_TYPE_LABELS: Record<string, string> = {
    con_experiencia: 'Con Experiencia',
    sin_experiencia: 'Sin Experiencia',
    con_sin_experiencia: 'Con y Sin Experiencia',
    disponibilidad_inmediata: 'Disponibilidad Inmediata',
};

function formatEmploymentType(type: string | null | undefined): string {
    if (!type) return 'Tiempo Completo';
    return EMPLOYMENT_TYPE_LABELS[type] ?? type;
}

function formatExpiresAt(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString('es-NI', { day: 'numeric', month: 'long', year: 'numeric' });
}

function daysRemaining(dateStr: string): number {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const expires = new Date(dateStr);
    expires.setHours(0, 0, 0, 0);
    return Math.ceil((expires.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
}

// ─── Sub-components ─────────────────────────────────────────────────────────

interface VacancyCardProps {
    vacancy: Vacancy;
    isExpanded: boolean;
    onToggle: () => void;
}

function VacancyCard({ vacancy, isExpanded, onToggle }: VacancyCardProps) {
    const remaining = daysRemaining(vacancy.expires_at);
    const isUrgent = remaining <= 5;
    const cleanHtml = DOMPurify.sanitize(vacancy.description ?? '');

    return (
        <article className="jobs-card animate-fade-in" aria-label={`Vacante: ${vacancy.title}`}>
            <div className="jobs-card__inner">

                {/* ── Logo / Imagen de empresa ── */}
                <div className="jobs-card__logo-col">
                    {vacancy.file_path ? (
                        <img
                            src={asset(`storage/${vacancy.file_path}`)}
                            alt={`Logo de ${vacancy.company || 'empresa'}`}
                            className="jobs-card__logo"
                        />
                    ) : (
                        <div className="jobs-card__logo-placeholder" aria-hidden="true">
                            <Building size={28} strokeWidth={1.5} />
                        </div>
                    )}
                </div>

                {/* ── Contenido principal ── */}
                <div className="jobs-card__body">
                    <div className="jobs-card__header">
                        <div>
                            <h2 className="jobs-card__title">{vacancy.title}</h2>
                            <div className="jobs-card__meta">
                                {(vacancy.company) && (
                                    <span className="jobs-card__meta-item">
                                        <Building size={14} aria-hidden="true" />
                                        {vacancy.company}
                                    </span>
                                )}
                                {(vacancy.city) && (
                                    <span className="jobs-card__meta-item">
                                        <MapPin size={14} aria-hidden="true" />
                                        {vacancy.city}
                                    </span>
                                )}
                                <span className="jobs-card__meta-item">
                                    <Briefcase size={14} aria-hidden="true" />
                                    {formatEmploymentType(vacancy.employment_type)}
                                </span>
                                <span className={`jobs-card__meta-item ${isUrgent ? 'jobs-card__meta-item--urgent' : ''}`}>
                                    <Clock size={14} aria-hidden="true" />
                                    Expiración: {formatExpiresAt(vacancy.expires_at)}
                                    {isUrgent && <strong> · ¡{remaining}d!</strong>}
                                </span>
                            </div>
                        </div>

                        {/* ── Badge tipo de empleo ── */}
                        <span className="jobs-card__type-badge">
                            {formatEmploymentType(vacancy.employment_type)}
                        </span>
                    </div>

                    {/* ── Descripción expandible ── */}
                    <div className={`jobs-card__description ${isExpanded ? 'jobs-card__description--expanded' : ''}`}>
                        <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />
                    </div>

                    {/* ── Toggle ver más / ver menos ── */}
                    <button
                        type="button"
                        className="jobs-card__toggle"
                        onClick={onToggle}
                        aria-expanded={isExpanded}
                        aria-controls={`vacancy-desc-${vacancy.id}`}
                        id={`vacancy-toggle-${vacancy.id}`}
                    >
                        {isExpanded ? (
                            <>Ver menos <ChevronUp size={16} aria-hidden="true" /></>
                        ) : (
                            <>Ver descripción completa <ChevronDown size={16} aria-hidden="true" /></>
                        )}
                    </button>
                </div>
            </div>
        </article>
    );
}

// ─── Main Page ───────────────────────────────────────────────────────────────

const JobsPage = ({ vacancies }: Props) => {
    const [expandedId, setExpandedId] = useState<number | null>(null);
    const [search, setSearch] = useState('');
    const [filterType, setFilterType] = useState('');

    // Unique employment types present in the data (for filter dropdown)
    const availableTypes = useMemo(() => {
        const types = new Set(vacancies.map(v => v.employment_type).filter(Boolean));
        return Array.from(types);
    }, [vacancies]);

    const filtered = useMemo(() => {
        return vacancies.filter(v => {
            const matchesSearch =
                search === '' ||
                v.title.toLowerCase().includes(search.toLowerCase()) ||
                (v.company ?? '').toLowerCase().includes(search.toLowerCase()) ||
                (v.city ?? '').toLowerCase().includes(search.toLowerCase());

            const matchesType =
                filterType === '' || v.employment_type === filterType;

            return matchesSearch && matchesType;
        });
    }, [vacancies, search, filterType]);

    const toggleExpand = (id: number) => {
        setExpandedId(prev => (prev === id ? null : id));
    };

    return (
        <>
            <Head title="Empleos | Radio ABC Stereo">
                <meta name="description" content="Explora las oportunidades de empleo publicadas en Radio ABC Stereo. Encuentra vacantes en Nicaragua y postúlate hoy." />
            </Head>

            {/* ── Hero header ── */}
            <div className="jobs-hero">
                <div className="container">
                    <div className="jobs-hero__content">
                        <div className="jobs-hero__icon" aria-hidden="true">
                            <Briefcase size={32} strokeWidth={1.5} />
                        </div>
                        <h1 className="jobs-hero__title">Oportunidades de Empleo</h1>
                        <p className="jobs-hero__subtitle">
                            Encuentra tu próximo trabajo entre los empleos activos publicados en ABC Stereo.
                        </p>
                        <span className="jobs-hero__count">
                            {vacancies.length} {vacancies.length === 1 ? 'empleo disponible' : 'empleos disponibles'}
                        </span>
                    </div>
                </div>
            </div>

            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10">

                        {/* ── Barra de búsqueda y filtros ── */}
                        {vacancies.length > 0 && (
                            <div className="jobs-filters mb-4" role="search" aria-label="Filtros de búsqueda de empleo">
                                <div className="jobs-filters__search">
                                    <Search size={18} className="jobs-filters__search-icon" aria-hidden="true" />
                                    <input
                                        id="jobs-search-input"
                                        type="search"
                                        className="jobs-filters__input"
                                        placeholder="Buscar por título…"
                                        value={search}
                                        onChange={e => setSearch(e.target.value)}
                                        aria-label="Buscar vacantes"
                                    />
                                </div>
                                {availableTypes.length > 1 && (
                                    <div className="jobs-filters__select-wrapper">
                                        <Filter size={16} className="jobs-filters__filter-icon" aria-hidden="true" />
                                        <select
                                            id="jobs-type-filter"
                                            className="jobs-filters__select"
                                            value={filterType}
                                            onChange={e => setFilterType(e.target.value)}
                                            aria-label="Filtrar por tipo de empleo"
                                        >
                                            <option value="">Todos los tipos</option>
                                            {availableTypes.map(type => (
                                                <option key={type} value={type}>
                                                    {formatEmploymentType(type)}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* ── Lista de vacantes / estado vacío ── */}
                        {filtered.length > 0 ? (
                            <div className="jobs-list" role="list" aria-label="Lista de vacantes">
                                {filtered.map(vacancy => (
                                    <VacancyCard
                                        key={vacancy.id}
                                        vacancy={vacancy}
                                        isExpanded={expandedId === vacancy.id}
                                        onToggle={() => toggleExpand(vacancy.id)}
                                    />
                                ))}
                            </div>
                        ) : vacancies.length === 0 ? (
                            /* Sin vacantes en el servidor */
                            <div className="jobs-empty" role="status">
                                <div className="jobs-empty__icon" aria-hidden="true">
                                    <Briefcase size={52} strokeWidth={1} />
                                </div>
                                <h2 className="jobs-empty__title">No hay empleos disponibles</h2>
                                <p className="jobs-empty__text">
                                    Por el momento no hay vacantes activas. Vuelve pronto para nuevas oportunidades.
                                </p>
                                <a href="/" className="btn btn-abc-blue rounded-pill px-4 py-2 mt-2">
                                    Volver al inicio
                                </a>
                            </div>
                        ) : (
                            /* Sin resultados para la búsqueda */
                            <div className="jobs-empty" role="status">
                                <div className="jobs-empty__icon" aria-hidden="true">
                                    <Search size={48} strokeWidth={1} />
                                </div>
                                <h2 className="jobs-empty__title">Sin resultados</h2>
                                <p className="jobs-empty__text">
                                    No encontramos vacantes que coincidan con "{search}".
                                    Intenta con otros términos o quita el filtro.
                                </p>
                                <button
                                    type="button"
                                    className="btn btn-abc-blue rounded-pill px-4 py-2 mt-2"
                                    onClick={() => { setSearch(''); setFilterType(''); }}
                                >
                                    Limpiar búsqueda
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* ── Estilos (BEM, sin Bootstrap para esta sección) ── */}
            <style>{`
                /* ── Hero ── */
                .jobs-hero {
                    background: linear-gradient(135deg, var(--abc-blue) 0%, #001444 60%, #002a7a 100%);
                    padding: 3.5rem 0 3rem;
                    color: #fff;
                    position: relative;
                    overflow: hidden;
                }
                .jobs-hero::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='20' cy='20' r='3'/%3E%3C/g%3E%3C/svg%3E");
                }
                .jobs-hero__content {
                    position: relative;
                    z-index: 1;
                    text-align: center;
                    max-width: 640px;
                    margin: 0 auto;
                }
                .jobs-hero__icon {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 64px;
                    height: 64px;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.12);
                    margin-bottom: 1.25rem;
                    backdrop-filter: blur(4px);
                }
                .jobs-hero__title {
                    font-family: var(--font-heading);
                    font-size: clamp(1.75rem, 4vw, 2.75rem);
                    font-weight: 700;
                    letter-spacing: -0.02em;
                    margin-bottom: 0.75rem;
                    color: #fff;
                }
                .jobs-hero__subtitle {
                    font-family: var(--font-body);
                    color: rgba(255,255,255,0.78);
                    font-size: 1.05rem;
                    margin-bottom: 1.25rem;
                }
                .jobs-hero__count {
                    display: inline-block;
                    background: rgba(255,255,255,0.15);
                    border: 1px solid rgba(255,255,255,0.25);
                    border-radius: 100px;
                    padding: 0.35rem 1.1rem;
                    font-size: 0.85rem;
                    font-family: var(--font-ui);
                    font-weight: 600;
                    letter-spacing: 0.04em;
                    backdrop-filter: blur(4px);
                }

                /* ── Filtros ── */
                .jobs-filters {
                    display: flex;
                    gap: 0.75rem;
                    flex-wrap: wrap;
                }
                .jobs-filters__search {
                    position: relative;
                    flex: 1;
                    min-width: 220px;
                }
                .jobs-filters__search-icon {
                    position: absolute;
                    left: 0.9rem;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #6c757d;
                    pointer-events: none;
                }
                .jobs-filters__input {
                    width: 100%;
                    padding: 0.65rem 1rem 0.65rem 2.6rem;
                    border: 1.5px solid #dee2e6;
                    border-radius: 10px;
                    font-family: var(--font-ui);
                    font-size: 0.9rem;
                    background: #fff;
                    color: #212529;
                    transition: border-color 0.2s, box-shadow 0.2s;
                }
                .jobs-filters__input:focus {
                    outline: none;
                    border-color: var(--abc-blue);
                    box-shadow: 0 0 0 3px rgba(0, 32, 96, 0.08);
                }
                .jobs-filters__select-wrapper {
                    position: relative;
                    min-width: 190px;
                }
                .jobs-filters__filter-icon {
                    position: absolute;
                    left: 0.9rem;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #6c757d;
                    pointer-events: none;
                }
                .jobs-filters__select {
                    width: 100%;
                    appearance: none;
                    padding: 0.65rem 2.5rem 0.65rem 2.4rem;
                    border: 1.5px solid #dee2e6;
                    border-radius: 10px;
                    font-family: var(--font-ui);
                    font-size: 0.9rem;
                    background: #fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236c757d' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E") right 0.9rem center no-repeat;
                    cursor: pointer;
                    transition: border-color 0.2s, box-shadow 0.2s;
                }
                .jobs-filters__select:focus {
                    outline: none;
                    border-color: var(--abc-blue);
                    box-shadow: 0 0 0 3px rgba(0, 32, 96, 0.08);
                }

                /* ── Lista ── */
                .jobs-list {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                /* ── Card ── */
                .jobs-card {
                    background: #fff;
                    border-radius: 14px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
                    overflow: hidden;
                    transition: box-shadow 0.25s ease, transform 0.25s ease;
                }
                .jobs-card:hover {
                    box-shadow: 0 8px 24px rgba(0, 32, 96, 0.12);
                    transform: translateY(-2px);
                }
                .jobs-card__inner {
                    display: flex;
                    gap: 0;
                }

                /* Logo column */
                .jobs-card__logo-col {
                    flex-shrink: 0;
                    width: 88px;
                    background: #f8f9fc;
                    display: flex;
                    align-items: flex-start;
                    justify-content: center;
                    padding: 1.25rem 0.5rem;
                    border-right: 1px solid #eef0f4;
                }
                .jobs-card__logo {
                    width: 56px;
                    height: 56px;
                    object-fit: contain;
                    border-radius: 8px;
                    border: 1px solid #e9ecef;
                    background: #fff;
                    padding: 4px;
                }
                .jobs-card__logo-placeholder {
                    width: 56px;
                    height: 56px;
                    border-radius: 8px;
                    border: 1.5px dashed #d1d5db;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #9ca3af;
                    background: #fff;
                }

                /* Body */
                .jobs-card__body {
                    flex: 1;
                    padding: 1.25rem 1.5rem;
                    min-width: 0;
                }
                .jobs-card__header {
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: 1rem;
                    flex-wrap: wrap;
                    margin-bottom: 0.75rem;
                }
                .jobs-card__title {
                    font-family: var(--font-heading);
                    font-size: 1.1rem;
                    font-weight: 700;
                    color: var(--abc-blue);
                    margin: 0 0 0.4rem 0;
                    line-height: 1.3;
                }
                .jobs-card__meta {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem 1.1rem;
                    font-size: 0.82rem;
                    color: #6c757d;
                    font-family: var(--font-ui);
                }
                .jobs-card__meta-item {
                    display: flex;
                    align-items: center;
                    gap: 0.3rem;
                }
                .jobs-card__meta-item--urgent {
                    color: #d9534f;
                    font-weight: 600;
                }
                .jobs-card__type-badge {
                    flex-shrink: 0;
                    font-size: 0.73rem;
                    font-family: var(--font-ui);
                    font-weight: 600;
                    letter-spacing: 0.04em;
                    text-transform: uppercase;
                    color: var(--abc-blue);
                    background: rgba(0, 32, 96, 0.07);
                    border: 1px solid rgba(0, 32, 96, 0.15);
                    padding: 0.25rem 0.75rem;
                    border-radius: 100px;
                    white-space: nowrap;
                }

                /* Description accordion */
                .jobs-card__description {
                    font-family: var(--font-body);
                    font-size: 0.9rem;
                    color: #495057;
                    line-height: 1.7;
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.4s ease, opacity 0.3s ease;
                    opacity: 0;
                }
                .jobs-card__description--expanded {
                    max-height: 9999px; /* large enough */
                    opacity: 1;
                    padding-top: 0.75rem;
                    border-top: 1px solid #f0f2f5;
                    margin-top: 0.75rem;
                }
                .jobs-card__description ul,
                .jobs-card__description ol {
                    padding-left: 1.4rem;
                    margin-bottom: 0.5rem;
                }
                .jobs-card__description p:last-child { margin-bottom: 0; }

                /* Toggle button */
                .jobs-card__toggle {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.35rem;
                    margin-top: 0.85rem;
                    background: none;
                    border: none;
                    padding: 0;
                    cursor: pointer;
                    font-family: var(--font-ui);
                    font-size: 0.83rem;
                    font-weight: 600;
                    color: var(--abc-blue);
                    text-decoration: underline;
                    text-underline-offset: 3px;
                    transition: opacity 0.2s;
                }
                .jobs-card__toggle:hover { opacity: 0.7; }

                /* ── Empty state ── */
                .jobs-empty {
                    text-align: center;
                    padding: 4rem 1.5rem;
                    background: #fff;
                    border-radius: 14px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
                }
                .jobs-empty__icon {
                    color: #ced4da;
                    margin-bottom: 1.25rem;
                }
                .jobs-empty__title {
                    font-family: var(--font-heading);
                    font-size: 1.4rem;
                    color: #343a40;
                    margin-bottom: 0.5rem;
                }
                .jobs-empty__text {
                    font-family: var(--font-body);
                    color: #6c757d;
                    font-size: 0.95rem;
                    max-width: 400px;
                    margin: 0 auto;
                }

                /* ── Responsive ── */
                @media (max-width: 576px) {
                    .jobs-card__logo-col {
                        width: 64px;
                        padding: 1rem 0.4rem;
                    }
                    .jobs-card__logo,
                    .jobs-card__logo-placeholder {
                        width: 44px;
                        height: 44px;
                    }
                    .jobs-card__body {
                        padding: 1rem 1rem;
                    }
                    .jobs-card__type-badge {
                        display: none;
                    }
                    .jobs-hero {
                        padding: 2.5rem 0 2rem;
                    }
                }
            `}</style>
        </>
    );
};

JobsPage.layout = withMainLayout;

export default JobsPage;
