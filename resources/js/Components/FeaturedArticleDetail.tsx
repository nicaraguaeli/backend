import React, { useState, useEffect } from 'react';
import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, Calendar, User, Share2, Clock, Tag, TrendingUp, Sparkles, Volume2, CircleStop } from 'lucide-react';
import { asset } from '@/url';
import { ArticleData } from '@/types';
import { getCategoryThemeColors, getCategoryGradient, getCategoryCSSVariables } from '@/utils/categoryTheme';
import { shareViaWebShare, shareOnFacebook, ShareableContent } from '@/utils/shareUtils';
import '../../css/featured-article.css';
import { route } from 'ziggy-js';

interface Props {
    article: ArticleData;
    relatedNews?: ArticleData[];
    onBack: () => void;
}

export default function FeaturedArticleDetail({ article, relatedNews = [], onBack }: Props) {
    const [isReading, setIsReading] = useState(false);

    // Get the featured category from the article
    const featuredCategory = article.categories?.find(cat => cat.is_featured) || article.categories?.[0];

    // Get theme colors for this category
    const themeColors = getCategoryThemeColors(featuredCategory);
    const themeGradient = getCategoryGradient(featuredCategory);
    const cssVars = getCategoryCSSVariables(featuredCategory);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const handleShare = async () => {
        const shareContent: ShareableContent = {
            title: article.title,
            slug: article.slug,
            type: 'article'
        };
        
        try {
            const shared = await shareViaWebShare(shareContent);
            if (!shared) {
                shareOnFacebook(shareContent);
            }
        } catch (error) {
            shareOnFacebook(shareContent);
        }
    };

    // Speech functionality
    useEffect(() => {
        return () => { window.speechSynthesis.cancel(); };
    }, []);

    const handleSpeech = () => {
        if (isReading) {
            window.speechSynthesis.cancel();
            setIsReading(false);
            return;
        }
        if (!article) return;
        window.dispatchEvent(new CustomEvent('abc:stop-audio'));
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = article.content || '';
        const contentText = tempDiv.textContent || tempDiv.innerText || "";
        const textToRead = `${article.title}. ${article.lead || article.excerpt}. ${contentText}`;
        const utterance = new SpeechSynthesisUtterance(textToRead);
        utterance.lang = 'es-ES';
        utterance.rate = 0.9;
        utterance.onend = () => setIsReading(false);
        utterance.onerror = () => setIsReading(false);
        window.speechSynthesis.speak(utterance);
        setIsReading(true);
    };


    if (!article) return null;

    const coAuthorsNames = article.coAuthors?.map((a: any) => a.name) || [];
    const mainAuthorName = article.author?.name || 'Redacción';
    const hasCoAuthors = coAuthorsNames.length > 0;

    return (
        <div className="featured-article-detail" style={cssVars as React.CSSProperties}>
            <Head title={`${article.title} | Radio ABC Stereo`}>
                <meta property="og:title" content={article.title} />
                <meta property="og:description" content={article.lead || article.excerpt || ''} />
                <meta property="og:image" content={article.image_path ? asset(`storage/${article.image_path}`) : asset('storage/logotipo.png')} />
                <meta property="og:type" content="article" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={article.title} />
                <meta name="twitter:description" content={article.lead || article.excerpt || ''} />
                <meta name="twitter:image" content={article.image_path ? asset(`storage/${article.image_path}`) : asset('storage/logotipo.png')} />
            </Head>

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
                            <span>
                                {hasCoAuthors ? [mainAuthorName, ...coAuthorsNames].join(', ') : mainAuthorName}
                            </span>
                        </div>
                        <div className="meta-divider">•</div>
                        <div className="meta-item">
                            <Calendar size={18} />
                            <span>{formatDate(article.published_at)}</span>
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
                            {/* Actions Top (New) */}
                            <div className="article-actions mb-4 pb-4 border-bottom" style={{ marginTop: 0, paddingTop: 0 }}>
                                <button className={`action-btn ${isReading ? 'active' : ''}`} onClick={handleSpeech} title={isReading ? "Detener lectura" : "Escuchar noticia"}>
                                    {isReading ? <CircleStop size={18} /> : <Volume2 size={18} />}
                                    <span className="d-none d-sm-inline">{isReading ? 'Detener' : 'Escuchar'}</span>
                                </button>
                                <button className="action-btn ms-auto" onClick={handleShare}>
                                    <Share2 size={20} />
                                    <span>Compartir</span>
                                </button>
                            </div>

                            {/* Lead/Excerpt */}
                            {article.lead && (
                                <div className="article-lead">
                                    {article.lead}
                                </div>
                            )}

                            {/* Main Content */}
                            <div
                                className="article-body"
                                dangerouslySetInnerHTML={{ __html: article.content || '' }}
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
                                    <Link
                                        href={`/category/${featuredCategory.slug}`}
                                        className="view-category-btn"
                                    >
                                        Ver toda la categoría
                                        <TrendingUp size={16} />
                                    </Link>
                                </div>
                            )}

                            {/* Related Articles */}
                            {relatedNews && relatedNews.length > 0 && (
                                <div className="related-section">
                                    <h3 className="related-title">
                                        <TrendingUp size={20} />
                                        Artículos Relacionados
                                    </h3>

                                    <div className="related-articles">
                                        {relatedNews.slice(0, 4).map((relatedArticle) => (
                                            <Link
                                                key={relatedArticle.id}
                                                href={route('news.show', { slug: relatedArticle.slug })}
                                                className="related-card"
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
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
