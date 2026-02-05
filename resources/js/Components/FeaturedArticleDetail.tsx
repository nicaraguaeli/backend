import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, User, Eye, Share2, Bookmark, Clock, Tag, TrendingUp, Sparkles } from 'lucide-react';
import { asset } from '@/url';
import { ArticleData } from '@/types';
import axios from 'axios';
import { getCategoryThemeColors, getCategoryGradient, getCategoryCSSVariables } from '@/utils/categoryTheme';

interface Props {
    article: ArticleData;
    onBack: () => void;
}

export default function FeaturedArticleDetail({ article, onBack }: Props) {
    const [relatedArticles, setRelatedArticles] = useState<ArticleData[]>([]);
    const [loading, setLoading] = useState(true);

    // Get the featured category from the article
    const featuredCategory = article.categories?.find(cat => cat.is_featured) || article.categories?.[0];

    // Get theme colors for this category
    const themeColors = getCategoryThemeColors(featuredCategory);
    const themeGradient = getCategoryGradient(featuredCategory);
    const cssVars = getCategoryCSSVariables(featuredCategory);

    useEffect(() => {
        if (featuredCategory) {
            fetchRelatedArticles();
        }
    }, [featuredCategory?.slug]);

    const fetchRelatedArticles = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`/api/news?category=${featuredCategory?.slug}`);
            const items = response.data.data || response.data;
            // Filter out current article and take first 4
            const filtered = items.filter((item: ArticleData) => item.id !== article.id).slice(0, 4);
            setRelatedArticles(filtered);
        } catch (error) {
            console.error('Error fetching related articles:', error);
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

    const handleArticleClick = (slug: string) => {
        window.location.href = `/news/${slug}`;
    };

    return (
        <div className="featured-article-detail" style={cssVars as React.CSSProperties}>
            {/* Hero Header with Category Badge */}
            <div className="article-hero">
                <div className="hero-overlay"></div>
                {article.image_path && (
                    <img
                        src={asset(`storage/${article.image_path}`)}
                        alt={article.title}
                        className="hero-image"
                    />
                )}

                <div className="container hero-content">
                    <button onClick={onBack} className="back-btn">
                        <ArrowLeft size={20} />
                        <span>Volver</span>
                    </button>

                    {featuredCategory && (
                        <div className="category-badge-hero">
                            <Sparkles size={16} />
                            <span>{featuredCategory.name}</span>
                        </div>
                    )}

                    <h1 className="article-hero-title">{article.title}</h1>

                    <div className="article-meta-hero">
                        <div className="meta-item">
                            <User size={18} />
                            <span>{article.author?.name || 'Redacción'}</span>
                        </div>
                        <div className="meta-divider">•</div>
                        <div className="meta-item">
                            <Calendar size={18} />
                            <span>{formatDate(article.published_at)}</span>
                        </div>
                        <div className="meta-divider">•</div>
                        <div className="meta-item">
                            <Eye size={18} />
                            <span>{article.views?.toLocaleString() || 0} vistas</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container article-container">
                <div className="row">
                    {/* Article Content */}
                    <div className="col-lg-8">
                        <article className="article-content-card">
                            {/* Lead/Excerpt */}
                            {article.lead && (
                                <div className="article-lead">
                                    {article.lead}
                                </div>
                            )}

                            {/* Main Content */}
                            <div
                                className="article-body"
                                dangerouslySetInnerHTML={{ __html: article.content }}
                            />

                            {/* Tags */}
                            {article.tags && article.tags.length > 0 && (
                                <div className="article-tags">
                                    <Tag size={18} />
                                    <div className="tags-list">
                                        {article.tags.map((tag) => (
                                            <span key={tag.id} className="tag-item">
                                                {tag.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Share Section */}
                            <div className="article-actions">
                                <button className="action-btn">
                                    <Share2 size={20} />
                                    <span>Compartir</span>
                                </button>
                                <button className="action-btn">
                                    <Bookmark size={20} />
                                    <span>Guardar</span>
                                </button>
                            </div>
                        </article>
                    </div>

                    {/* Sidebar */}
                    <div className="col-lg-4">
                        <div className="sidebar-sticky">
                            {/* Category Info Card */}
                            {featuredCategory && (
                                <div className="category-info-card">
                                    <div className="category-info-header">
                                        <Sparkles size={24} />
                                        <h3>Más en {featuredCategory.name}</h3>
                                    </div>
                                    <p className="category-description">
                                        Explora más contenido especializado en esta categoría
                                    </p>
                                    <button
                                        onClick={() => window.location.href = `/category/${featuredCategory.slug}`}
                                        className="view-category-btn"
                                    >
                                        Ver toda la categoría
                                        <TrendingUp size={16} />
                                    </button>
                                </div>
                            )}

                            {/* Related Articles */}
                            <div className="related-section">
                                <h3 className="related-title">
                                    <TrendingUp size={20} />
                                    Artículos Relacionados
                                </h3>

                                {loading ? (
                                    <div className="loading-related">
                                        <div className="spinner-small"></div>
                                        <p>Cargando...</p>
                                    </div>
                                ) : (
                                    <div className="related-articles">
                                        {relatedArticles.map((relatedArticle) => (
                                            <div
                                                key={relatedArticle.id}
                                                className="related-card"
                                                onClick={() => handleArticleClick(relatedArticle.slug)}
                                            >
                                                {relatedArticle.image_path && (
                                                    <div className="related-image">
                                                        <img
                                                            src={asset(`storage/${relatedArticle.image_path}`)}
                                                            alt={relatedArticle.title}
                                                        />
                                                    </div>
                                                )}
                                                <div className="related-content">
                                                    <h4 className="related-title-text">
                                                        {relatedArticle.title}
                                                    </h4>
                                                    <div className="related-meta">
                                                        <Clock size={12} />
                                                        <span>{formatDate(relatedArticle.published_at)}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                /* Hero Section */
                .article-hero {
                    position: relative;
                    min-height: 500px;
                    display: flex;
                    align-items: flex-end;
                    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
                    overflow: hidden;
                    margin-bottom: 3rem;
                }

                .hero-image {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    opacity: 0.4;
                }

                .hero-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(
                        180deg,
                        rgba(15, 23, 42, 0.3) 0%,
                        rgba(15, 23, 42, 0.9) 100%
                    );
                }

                .hero-content {
                    position: relative;
                    z-index: 2;
                    padding: 3rem 1rem;
                    max-width: 900px;
                }

                .back-btn {
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

                .back-btn:hover {
                    background: rgba(255, 255, 255, 0.2);
                    transform: translateX(-4px);
                }

                .category-badge-hero {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: var(--category-gradient);
                    color: white;
                    padding: 0.5rem 1.25rem;
                    border-radius: 50px;
                    font-size: 0.875rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    margin-bottom: 1.5rem;
                    box-shadow: 0 4px 15px var(--category-medium);
                }

                .article-hero-title {
                    font-size: 3rem;
                    font-weight: 800;
                    color: white;
                    margin: 0 0 1.5rem 0;
                    font-family: 'Georgia', serif;
                    line-height: 1.2;
                    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
                }

                .article-meta-hero {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    gap: 1rem;
                    color: rgba(255, 255, 255, 0.9);
                    font-size: 0.95rem;
                }

                .meta-item {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .meta-divider {
                    color: rgba(255, 255, 255, 0.5);
                }

                /* Main Content */
                .article-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1rem 4rem;
                }

                .article-content-card {
                    background: white;
                    border-radius: 12px;
                    padding: 2.5rem;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                    margin-bottom: 2rem;
                }

                .article-lead {
                    font-size: 1.25rem;
                    font-weight: 500;
                    color: #475569;
                    line-height: 1.8;
                    margin-bottom: 2rem;
                    padding-bottom: 2rem;
                    border-bottom: 2px solid #e2e8f0;
                    font-style: italic;
                }

                .article-body {
                    font-size: 1.1rem;
                    line-height: 1.8;
                    color: #334155;
                }

                .article-body p {
                    margin-bottom: 1.5rem;
                }

                .article-body h2 {
                    font-size: 1.75rem;
                    font-weight: 700;
                    color: #0f172a;
                    margin: 2rem 0 1rem;
                    font-family: 'Georgia', serif;
                }

                .article-body h3 {
                    font-size: 1.5rem;
                    font-weight: 600;
                    color: #1e293b;
                    margin: 1.5rem 0 1rem;
                }

                .article-body img {
                    max-width: 100%;
                    height: auto;
                    border-radius: 8px;
                    margin: 2rem 0;
                }

                .article-tags {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    padding: 1.5rem 0;
                    border-top: 2px solid #e2e8f0;
                    margin-top: 2rem;
                    color: #64748b;
                }

                .tags-list {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                }

                .tag-item {
                    background: #f1f5f9;
                    color: #475569;
                    padding: 0.375rem 0.875rem;
                    border-radius: 50px;
                    font-size: 0.875rem;
                    font-weight: 600;
                    transition: all 0.2s ease;
                }

                .tag-item:hover {
                    background: #e2e8f0;
                    color: #0f172a;
                }

                .article-actions {
                    display: flex;
                    gap: 1rem;
                    padding-top: 1.5rem;
                    border-top: 2px solid #e2e8f0;
                    margin-top: 1.5rem;
                }

                .action-btn {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: #f1f5f9;
                    color: #475569;
                    border: none;
                    padding: 0.75rem 1.5rem;
                    border-radius: 50px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .action-btn:hover {
                    background: var(--category-primary);
                    color: white;
                    transform: translateY(-2px);
                }

                /* Sidebar */
                .sidebar-sticky {
                    position: sticky;
                    top: 100px;
                }

                .category-info-card {
                    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
                    color: white;
                    border-radius: 12px;
                    padding: 2rem;
                    margin-bottom: 2rem;
                    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
                }

                .category-info-header {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    margin-bottom: 1rem;
                }

                .category-info-header h3 {
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin: 0;
                    font-family: 'Georgia', serif;
                }

                .category-description {
                    color: rgba(255, 255, 255, 0.8);
                    margin-bottom: 1.5rem;
                    line-height: 1.6;
                }

                .view-category-btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    width: 100%;
                    background: var(--category-gradient);
                    color: white;
                    border: none;
                    padding: 0.875rem 1.5rem;
                    border-radius: 50px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .view-category-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 20px var(--category-medium);
                }

                .related-section {
                    background: white;
                    border-radius: 12px;
                    padding: 1.5rem;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                }

                .related-title {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: #0f172a;
                    margin: 0 0 1.5rem 0;
                }

                .loading-related {
                    text-align: center;
                    padding: 2rem;
                    color: #64748b;
                }

                .spinner-small {
                    width: 32px;
                    height: 32px;
                    border: 3px solid #e2e8f0;
                    border-top-color: var(--category-primary);
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin: 0 auto 1rem;
                }

                @keyframes spin {
                    to { transform: rotate(360deg); }
                }

                .related-articles {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .related-card {
                    display: flex;
                    gap: 1rem;
                    padding: 1rem;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    border: 1px solid #e2e8f0;
                }

                .related-card:hover {
                    background: #f8fafc;
                    border-color: var(--category-primary);
                    transform: translateX(4px);
                }

                .related-image {
                    width: 80px;
                    height: 80px;
                    flex-shrink: 0;
                    border-radius: 6px;
                    overflow: hidden;
                    background: #f1f5f9;
                }

                .related-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.3s ease;
                }

                .related-card:hover .related-image img {
                    transform: scale(1.1);
                }

                .related-content {
                    flex: 1;
                    min-width: 0;
                }

                .related-title-text {
                    font-size: 0.95rem;
                    font-weight: 700;
                    color: #0f172a;
                    margin: 0 0 0.5rem 0;
                    line-height: 1.4;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .related-meta {
                    display: flex;
                    align-items: center;
                    gap: 0.375rem;
                    font-size: 0.8rem;
                    color: #64748b;
                }

                /* Responsive */
                @media (max-width: 768px) {
                    .article-hero-title {
                        font-size: 2rem;
                    }

                    .article-content-card {
                        padding: 1.5rem;
                    }

                    .article-lead {
                        font-size: 1.1rem;
                    }

                    .article-body {
                        font-size: 1rem;
                    }

                    .sidebar-sticky {
                        position: static;
                    }
                }
            `}</style>
        </div>
    );
}
