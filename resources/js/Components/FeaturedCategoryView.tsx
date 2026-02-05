import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, User, Eye, TrendingUp, Sparkles, Grid, List } from 'lucide-react';
import { asset } from '@/url';
import axios from 'axios';
import { getCategoryThemeColors, getCategoryGradient, getCategoryCSSVariables } from '@/utils/categoryTheme';
import { Category } from '@/types';

interface Article {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    image_path?: string;
    published_at: string;
    views: number;
    author?: {
        name: string;
    };
    categories?: Array<{
        id: number;
        name: string;
        slug: string;
    }>;
}

interface Props {
    category: Category;
    onBack: () => void;
    onPostClick: (slug: string) => void;
}

export default function FeaturedCategoryView({ category, onBack, onPostClick }: Props) {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    // Get theme colors for this category
    const themeColors = getCategoryThemeColors(category);
    const themeGradient = getCategoryGradient(category);
    const cssVars = getCategoryCSSVariables(category);

    useEffect(() => {
        fetchArticles();
    }, [category.slug]);

    const fetchArticles = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`/api/news?category=${category.slug}`);
            setArticles(response.data.data || []);
        } catch (error) {
            console.error('Error fetching articles:', error);
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    // Note: The API query already handles multiple categories correctly.
    // When a post has multiple categories (e.g., "Sociales", "Salud", "Nacionales"),
    // the whereHas query in the backend will include the post if ANY of its categories
    // match the slug, not just the first one. This means featured categories will show
    // all posts that have that category, regardless of category order.

    return (
        <div className="featured-category-page" style={cssVars as React.CSSProperties}>
            {/* Hero Header */}
            <div className="category-hero">
                <div className="hero-overlay"></div>
                {category.image_path && (
                    <img
                        src={asset(`storage/${category.image_path}`)}
                        alt={category.name}
                        className="hero-bg-image"
                    />
                )}

                <div className="container hero-content">
                    <button onClick={onBack} className="back-button">
                        <ArrowLeft size={20} />
                        <span>Volver al inicio</span>
                    </button>

                    <div className="hero-text">
                        <div className="category-badge">
                            <Sparkles size={18} />
                            <span>Categoría Destacada</span>
                        </div>
                        <h1 className="category-title">{category.name}</h1>
                        {category.description && (
                            <p className="category-description">{category.description}</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container content-section">
                {/* Toolbar */}
                <div className="content-toolbar">
                    <div className="toolbar-left">
                        <h2 className="section-title">
                            <TrendingUp size={24} />
                            Artículos Recientes
                        </h2>
                        <span className="article-count">{articles.length} artículos</span>
                    </div>
                    <div className="view-toggle">
                        <button
                            className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                            onClick={() => setViewMode('grid')}
                        >
                            <Grid size={18} />
                        </button>
                        <button
                            className={`toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
                            onClick={() => setViewMode('list')}
                        >
                            <List size={18} />
                        </button>
                    </div>
                </div>

                {/* Articles Grid/List */}
                {loading ? (
                    <div className="loading-state">
                        <div className="spinner"></div>
                        <p>Cargando artículos...</p>
                    </div>
                ) : articles.length === 0 ? (
                    <div className="empty-state">
                        <Sparkles size={48} />
                        <h3>No hay artículos disponibles</h3>
                        <p>Pronto habrá contenido nuevo en esta categoría.</p>
                    </div>
                ) : (
                    <div className={`articles-container ${viewMode}`}>
                        {articles.map((article) => (
                            <article
                                key={article.id}
                                className="article-card"
                                onClick={() => onPostClick(article.slug)}
                            >
                                {article.image_path && (
                                    <div className="article-image">
                                        <img
                                            src={asset(`storage/${article.image_path}`)}
                                            alt={article.title}
                                        />
                                        <div className="image-overlay"></div>
                                    </div>
                                )}

                                <div className="article-content">
                                    <h3 className="article-title">{article.title}</h3>
                                    <p className="article-excerpt">{article.excerpt}</p>

                                    <div className="article-meta">
                                        <span className="meta-item">
                                            <Calendar size={14} />
                                            {formatDate(article.published_at)}
                                        </span>
                                        {article.author && (
                                            <span className="meta-item">
                                                <User size={14} />
                                                {article.author.name}
                                            </span>
                                        )}
                                        <span className="meta-item">
                                            <Eye size={14} />
                                            {article.views.toLocaleString()}
                                        </span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </div>

            <style>{`
                /* Hero Section */
                .category-hero {
                    position: relative;
                    min-height: 400px;
                    display: flex;
                    align-items: center;
                    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
                    overflow: hidden;
                }

                .hero-bg-image {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    opacity: 0.5;
                }

                .hero-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(
                        135deg,
                        rgba(15, 23, 42, 0.6) 0%,
                        rgba(30, 41, 59, 0.5) 100%
                    );
                }

                .hero-content {
                    position: relative;
                    z-index: 2;
                    padding: 3rem 1rem;
                }

                .back-button {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    color: white;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    padding: 0.75rem 1.25rem;
                    border-radius: 50px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    margin-bottom: 2rem;
                }

                .back-button:hover {
                    background: rgba(255, 255, 255, 0.2);
                    transform: translateX(-4px);
                }

                .hero-text {
                    max-width: 800px;
                }

                .category-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: var(--category-gradient);
                    color: white;
                    padding: 0.5rem 1rem;
                    border-radius: 50px;
                    font-size: 0.875rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    margin-bottom: 1.5rem;
                    box-shadow: 0 4px 15px var(--category-medium);
                }

                .category-title {
                    font-size: 3.5rem;
                    font-weight: 800;
                    color: white;
                    margin: 0 0 1rem 0;
                    font-family: 'Georgia', serif;
                    line-height: 1.2;
                }

                .category-description {
                    font-size: 1.25rem;
                    color: rgba(255, 255, 255, 0.8);
                    line-height: 1.6;
                    margin: 0;
                }

                /* Content Section */
                .content-section {
                    padding: 3rem 1rem;
                }

                .content-toolbar {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 2rem;
                    padding-bottom: 1.5rem;
                    border-bottom: 2px solid #e2e8f0;
                }

                .toolbar-left {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }

                .section-title {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    font-size: 1.75rem;
                    font-weight: 700;
                    color: #0f172a;
                    margin: 0;
                }

                .article-count {
                    background: #f1f5f9;
                    color: #64748b;
                    padding: 0.375rem 0.875rem;
                    border-radius: 50px;
                    font-size: 0.875rem;
                    font-weight: 600;
                }

                .view-toggle {
                    display: flex;
                    gap: 0.5rem;
                    background: #f1f5f9;
                    padding: 0.25rem;
                    border-radius: 8px;
                }

                .toggle-btn {
                    background: transparent;
                    border: none;
                    padding: 0.5rem 0.75rem;
                    border-radius: 6px;
                    color: #64748b;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .toggle-btn:hover {
                    color: #0f172a;
                }

                .toggle-btn.active {
                    background: white;
                    color: #0f172a;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }

                /* Articles Container */
                .articles-container {
                    display: grid;
                    gap: 2rem;
                }

                .articles-container.grid {
                    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
                }

                .articles-container.list {
                    grid-template-columns: 1fr;
                }

                /* Article Card */
                .article-card {
                    background: white;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                    cursor: pointer;
                    transition: all 0.3s ease;
                    border: 1px solid #e2e8f0;
                }

                .article-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
                    border-color: var(--category-primary);
                }

                .articles-container.list .article-card {
                    display: flex;
                    flex-direction: row;
                }

                .article-image {
                    position: relative;
                    width: 100%;
                    height: 240px;
                    overflow: hidden;
                    background: #f1f5f9;
                }

                .articles-container.list .article-image {
                    width: 300px;
                    height: auto;
                    flex-shrink: 0;
                }

                .article-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.4s ease;
                }

                .article-card:hover .article-image img {
                    transform: scale(1.1);
                }

                .image-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(
                        180deg,
                        transparent 0%,
                        rgba(0, 0, 0, 0.3) 100%
                    );
                }

                .article-content {
                    padding: 1.5rem;
                }

                .article-title {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: #0f172a;
                    margin: 0 0 0.75rem 0;
                    font-family: 'Georgia', serif;
                    line-height: 1.4;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .article-excerpt {
                    font-size: 0.95rem;
                    color: #64748b;
                    line-height: 1.6;
                    margin: 0 0 1rem 0;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .article-meta {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1rem;
                    padding-top: 1rem;
                    border-top: 1px solid #e2e8f0;
                }

                .meta-item {
                    display: flex;
                    align-items: center;
                    gap: 0.375rem;
                    font-size: 0.875rem;
                    color: #64748b;
                }

                /* Loading State */
                .loading-state {
                    text-align: center;
                    padding: 4rem 2rem;
                }

                .spinner {
                    width: 48px;
                    height: 48px;
                    border: 4px solid #e2e8f0;
                    border-top-color: var(--category-primary);
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin: 0 auto 1rem;
                }

                @keyframes spin {
                    to { transform: rotate(360deg); }
                }

                /* Empty State */
                .empty-state {
                    text-align: center;
                    padding: 4rem 2rem;
                    color: #64748b;
                }

                .empty-state svg {
                    color: var(--category-primary);
                    margin-bottom: 1rem;
                }

                .empty-state h3 {
                    font-size: 1.5rem;
                    color: #0f172a;
                    margin: 0 0 0.5rem 0;
                }

                /* Responsive */
                @media (max-width: 768px) {
                    .category-title {
                        font-size: 2.5rem;
                    }

                    .category-description {
                        font-size: 1rem;
                    }

                    .content-toolbar {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 1rem;
                    }

                    .articles-container.grid {
                        grid-template-columns: 1fr;
                    }

                    .articles-container.list .article-card {
                        flex-direction: column;
                    }

                    .articles-container.list .article-image {
                        width: 100%;
                        height: 240px;
                    }
                }
            `}</style>
        </div>
    );
}
