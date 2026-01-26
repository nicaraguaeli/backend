import React, { useState, useEffect } from 'react';
import { Calendar, User, MapPin, Share2, Facebook, Twitter, ArrowLeft, MessageSquare, Link, Check, Eye } from 'lucide-react';

import { ArticleData } from '../types';
import MostRead from './MostRead';
import PostGrid from './PostGrid';

interface ArticleDetailProps {
  article: ArticleData;
  relatedNews?: ArticleData[];
  mostReadNews?: ArticleData[];
  onBack: () => void;
}

export default function ArticleDetail({ article, relatedNews = [], mostReadNews = [], onBack }: ArticleDetailProps) {
  const [copied, setCopied] = useState(false);

  // SEO & Social Sharing Metadata Injection
  useEffect(() => {
    if (!article) return;

    // 1. Update Document Title
    const previousTitle = document.title;
    document.title = `${article.title} | Radio ABC Stereo`;

    // 2. Helper to update meta tags safely
    const setMetaTag = (selector: string, attribute: string, content: string) => {
        let element = document.querySelector(selector);
        if (!element) {
            // If tag doesn't exist, create it (fallback for some environments)
            element = document.createElement('meta');
            const [attrName, attrValue] = selector.replace('meta[', '').replace(']', '').split('=');
            element.setAttribute(attrName, attrValue.replace(/"/g, ''));
            document.head.appendChild(element);
        }
        element.setAttribute('content', content);
    };

    // 3. Update Social Metadata (Open Graph & Twitter)
    setMetaTag('meta[property="og:title"]', 'content', article.title);
    setMetaTag('meta[property="og:description"]', 'content', article.excerpt);
    setMetaTag('meta[property="og:image"]', 'content', article.image_path ? `/storage/${article.image_path}` : '');
    setMetaTag('meta[property="og:url"]', 'content', window.location.href);
    setMetaTag('meta[property="og:type"]', 'content', 'article');
    
    setMetaTag('meta[name="twitter:title"]', 'content', article.title);
    setMetaTag('meta[name="twitter:description"]', 'content', article.excerpt);
    setMetaTag('meta[name="twitter:image"]', 'content', article.image_path ? `/storage/${article.image_path}` : '');

    // Cleanup: Revert title and reset generic metadata when leaving article
    return () => {
        document.title = previousTitle;
        setMetaTag('meta[property="og:title"]', 'content', 'Radio ABC Stereo - La voz del norte');
        setMetaTag('meta[property="og:description"]', 'content', 'Noticias de última hora, deportes, farándula y la mejor programación musical.');
        setMetaTag('meta[property="og:image"]', 'content', 'https://radioabcstereo.com/img/brand.png');
    };
  }, [article]);

  // Handle Twitter/X Embeds
  useEffect(() => {
    if (article?.content && article.content.includes('twitter-tweet')) {
        if (!document.querySelector('script[src="https://platform.twitter.com/widgets.js"]')) {
            const script = document.createElement('script');
            script.src = "https://platform.twitter.com/widgets.js";
            script.async = true;
            document.body.appendChild(script);
        } else {
            // @ts-ignore
            window.twttr?.widgets?.load();
        }
    }
  }, [article]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!article) {
      return (
          <div className="text-center py-5">
              <h3>Noticia no encontrada</h3>
              <button onClick={onBack} className="btn btn-primary mt-3">Volver al inicio</button>
          </div>
      );
  }

  return (
    <article className="animate-fade-in">
      {/* Breadcrumb / Back Button */}
      <div className="mb-4">
        <button 
          onClick={onBack} 
          className="btn btn-link text-decoration-none text-secondary ps-0 d-flex align-items-center gap-2 hover-red"
        >
          <ArrowLeft size={18} /> Volver a Portada
        </button>
      </div>

      <div className="row">
        {/* Main Content Column */}
        <div className="col-lg-9">
          {/* Article Header */}
          <header className="mb-4">
            {article.categories && article.categories.length > 0 && (
                <span className="badge bg-abc-red mb-2 text-uppercase">{article.categories[0].name}</span>
            )}
            
            <h1 className="fw-bold display-5 font-serif text-abc-blue mb-3">
              {article.title}
            </h1>

            {/* Entradilla / Summary Section */}
            <p className="lead fs-4 text-secondary font-serif mb-4 border-start border-4 border-warning ps-3 fst-italic">
              {article.lead || article.excerpt}
            </p>
            
            {/* Metadata Section - Optimized for Mobile */}
            <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between border-top border-bottom py-3 mt-4 gap-3">
              
              <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-3 gap-lg-4 text-muted small w-100">
                
                {/* Author Block */}
                <div className="d-flex align-items-center gap-2">
                  <div className="bg-light rounded-circle p-2 border">
                    <User size={20} className="text-abc-blue" />
                  </div>
                  <div>
                    <span className="d-block fw-bold text-dark lh-1">
                        {article.author && article.author.length > 0 
                            ? article.author.map(a => a.name).join(', ') 
                            : 'Redacción'}
                    </span>
                    <span className="text-secondary" style={{fontSize: '0.75rem'}}>
                        {article.author && article.author.length > 0 
                            ? article.author.map(a => a.type).join(', ') 
                            : 'Periodista'}
                    </span>
                  </div>
                </div>

                {/* Stats Block (Date, Views, Location) */}
                <div className="d-flex flex-wrap align-items-center gap-3 gap-md-4 opacity-75 pt-1 pt-sm-0">
                    <div className="d-flex align-items-center gap-1 bg-light rounded px-2 py-1">
                      <Calendar size={14} />
                      <span>{new Date(article.published_at).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    </div>
                    
                    <div className="d-flex align-items-center gap-1 bg-light rounded px-2 py-1">
                      <MapPin size={14} />
                      <span>{article.city ? `${article.city}, ` : ''}{article.country || 'Nicaragua'}</span>
                    </div>
                </div>
              </div>
              
              {/* Social Actions */}
              <div className="d-flex gap-2 align-self-start align-self-md-center pt-2 pt-md-0">
                <button 
                  onClick={handleCopyLink} 
                  className="btn btn-outline-dark btn-sm rounded-circle p-2 border-0 bg-light position-relative"
                  title="Copiar enlace"
                >
                  {copied ? <Check size={18} className="text-success" /> : <Link size={18}/>}
                </button>
                <button className="btn btn-outline-primary btn-sm rounded-circle p-2 border-0 bg-light"><Facebook size={18}/></button>
                <button className="btn btn-outline-info btn-sm rounded-circle p-2 border-0 bg-light"><Twitter size={18}/></button>
                <button className="btn btn-outline-secondary btn-sm rounded-circle p-2 border-0 bg-light"><Share2 size={18}/></button>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-5 position-relative">
            <img 
              src={article.image_path ? `/storage/${article.image_path}` : ''} 
              alt={article.title} 
              className="img-fluid rounded shadow-sm w-100"
              onError={(e) => (e.target as HTMLImageElement).src = 'https://via.placeholder.com/1200x800?text=Sin+Imagen'}
            />
            {article.caption && (
                <figcaption className="figure-caption mt-2 text-end fst-italic">
                {article.caption}
                </figcaption>
            )}
          </div>

          {/* Article Body */}
          <div 
            className="article-content fs-5 text-dark" 
            style={{ lineHeight: '1.8' }}
            dangerouslySetInnerHTML={{ __html: article.content || '' }}
          />
          
          {!article.content && (
            <div className="alert alert-warning mt-4">Contenido no disponible para esta noticia.</div>
          )}

          {/* Tags */}
          <div className="mt-5 pt-3 border-top">
            <span className="fw-bold me-2 text-secondary small">ETIQUETAS:</span>
            {article.tags && article.tags.map(tag => (
                <a key={tag.id} href="#" className="badge bg-light text-secondary text-decoration-none border me-1">#{tag.name}</a>
            ))}
          </div>

          <style>{`
            /* Styles for injected HTML content */
            .article-content p { margin-bottom: 1.5rem; }
            .article-content h2, .article-content h3 { 
                color: var(--abc-blue); 
                font-family: 'Merriweather', serif; 
                font-weight: bold; 
                margin-top: 2rem; 
                margin-bottom: 1rem;
            }
            .article-content ul, .article-content ol { margin-bottom: 1.5rem; }
            .article-content img { max-width: 100%; height: auto; border-radius: 8px; margin: 1rem 0; }
            .article-content blockquote {
                border-left: 4px solid var(--abc-red);
                padding-left: 1rem;
                margin-left: 0;
                font-style: italic;
                color: #555;
                background: #f8f9fa;
                padding: 1.5rem;
            }
          `}</style>
        </div>

        {/* Sidebar: Related News */}
        <aside className="col-lg-3">
          <div className="sticky-top" style={{ top: '100px' }}>
              <MostRead items={mostReadNews} />

              <div className="mt-5">
                  <h3 className="h5 fw-bold font-serif mb-3 border-start border-4 border-abc-red ps-2 text-abc-blue">
                    Te puede interesar
                  </h3>
                  <PostGrid posts={relatedNews} columns={1} compact={true} />
              </div>
          </div>
        </aside>
      </div>
    </article>
  );
}