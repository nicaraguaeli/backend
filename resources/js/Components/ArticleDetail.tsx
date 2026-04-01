import React, { useState, useEffect } from 'react';
import { Link as InertiaLink } from '@inertiajs/react';
import { asset } from '@/url';
import { route } from 'ziggy-js';
import {
  Calendar, User, MapPin, Share2, ArrowLeft,
  Check, Eye, Volume2, CircleStop, Printer, ArrowRight,
  BookOpen, Tag, Clock, TrendingUp, ChevronRight, Newspaper
} from 'lucide-react';

import { ArticleData } from '../types';
import MostRead from './MostRead';
import AdSpace from './AdSpace';


interface Banner {
  id: number;
  file_path: string;
  link: string | null;
  position: string | null;
  mime_type: string;
  is_active: boolean;
}

interface ArticleDetailProps {
  article: ArticleData;
  relatedNews?: ArticleData[];
  mostReadNews?: ArticleData[];
  authorNews?: ArticleData[];
  categoryRecommendations?: ArticleData[];
  banners?: Banner[];
  onBack: () => void;
}


// ─── Helper: category badge color ───────────────────────────────────────────
const getCategoryColor = (name: string) => {
  const n = (name || '').toLowerCase();
  if (n.includes('sucesos')) return { bg: '#dc3545', label: '#fff' };
  if (n.includes('deport')) return { bg: '#198754', label: '#fff' };
  if (n.includes('econom') || n.includes('empresarial')) return { bg: '#0d6efd', label: '#fff' };
  if (n.includes('cultura') || n.includes('arte')) return { bg: '#6f42c1', label: '#fff' };
  if (n.includes('salud')) return { bg: '#20c997', label: '#fff' };
  if (n.includes('entrete') || n.includes('social')) return { bg: '#0dcaf0', label: '#000' };
  if (n.includes('judicial')) return { bg: '#6c757d', label: '#fff' };
  if (n.includes('politic')) return { bg: '#b02a37', label: '#fff' };
  return { bg: '#003087', label: '#fff' }; // abc-blue default
};

// ─── Mini Article Card (horizontal, compact) ─────────────────────────────────
const MiniCard = ({ post }: { post: ArticleData }) => {
  const catName = post.categories?.[0]?.name || 'General';
  const color = getCategoryColor(catName);
  const imgSrc = post.image_path ? asset(`storage/${post.image_path}`) : 'https://placehold.co/160x100?text=ABC';

  return (
    <InertiaLink
      href={route('news.show', { slug: post.slug })}
      className="text-decoration-none d-flex gap-3 align-items-start article-mini-card"
      style={{ padding: '12px 0', borderBottom: '1px solid #f0f0f0' }}
    >
      <div style={{ flexShrink: 0, width: 88, height: 66, borderRadius: 8, overflow: 'hidden', position: 'relative' }}>
        <img src={imgSrc} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/160x100?text=Sin+Imagen'; }} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <span
          className="badge text-uppercase mb-1"
          style={{ backgroundColor: color.bg, color: color.label, fontSize: '0.65rem', letterSpacing: '0.5px' }}
        >
          {catName}
        </span>
        <p className="mb-1 fw-semibold text-dark lh-sm mini-card-title">{post.title}</p>
        <span className="text-muted d-flex align-items-center gap-1" style={{ fontSize: '0.72rem' }}>
          <Clock size={11} />
          {new Date(post.published_at).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })}
        </span>
      </div>
    </InertiaLink>
  );
};


// ─── Full Article Card (grid) ─────────────────────────────────────────────────
const GridCard = ({ post, accentColor }: { post: ArticleData; accentColor?: string }) => {
  const catName = post.categories?.[0]?.name || 'General';
  const color = getCategoryColor(catName);
  const accent = accentColor || color.bg;
  const imgSrc = post.image_path ? asset(`storage/${post.image_path}`) : 'https://placehold.co/400x240?text=ABC';

  return (
    // Envuelve toda la tarjeta: evita stretched-link que escapa al contenedor padre
    <InertiaLink
      href={route('news.show', { slug: post.slug })}
      className="text-decoration-none d-block"
      style={{ color: 'inherit' }}
    >
      <article
        className="grid-news-card h-100 d-flex flex-column"
        style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', background: '#fff', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}
      >
        <div style={{ position: 'relative', paddingBottom: '60%', overflow: 'hidden' }}>
          <img
            src={imgSrc}
            alt={post.title}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
            className="grid-card-img"
            onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/400x240?text=Sin+Imagen'; }}
          />
          <span
            className="badge position-absolute text-uppercase"
            style={{ top: 10, left: 10, backgroundColor: accent, color: color.label, fontSize: '0.68rem', letterSpacing: '0.5px', zIndex: 1 }}
          >
            {catName}
          </span>
          <span className="position-absolute d-flex align-items-center gap-1 text-white" style={{ bottom: 8, right: 10, fontSize: '0.7rem', textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}>
            <Clock size={11} />
            {new Date(post.published_at).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })}
          </span>
        </div>
        <div className="p-3 d-flex flex-column flex-grow-1">
          {post.author?.name && (
            <p className="mb-1 text-muted d-flex align-items-center gap-1" style={{ fontSize: '0.72rem' }}>
              <User size={11} /> {post.author.name}
            </p>
          )}
          <h3 className="fw-bold mb-2 lh-sm flex-grow-1 grid-card-link" style={{ fontSize: '0.92rem', color: '#1a1a2e' }}>
            {post.title}
          </h3>
          <span className="text-abc-red fw-bold d-inline-flex align-items-center gap-1 mt-auto" style={{ fontSize: '0.75rem' }}>
            Leer más <ChevronRight size={13} />
          </span>
        </div>
      </article>
    </InertiaLink>
  );
};

// ─── Section Header ───────────────────────────────────────────────────────────
const SectionHeader = ({ icon: Icon, title, color = '#003087' }: { icon: any; title: string; color?: string }) => (
  <div className="d-flex align-items-center gap-3 mb-4">
    <div className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: 38, height: 38, background: color, flexShrink: 0 }}>
      <Icon size={18} color="#fff" />
    </div>
    <h2 className="h5 fw-bold mb-0 font-serif" style={{ color: '#1a1a2e', letterSpacing: '-0.2px' }}>{title}</h2>
    <div style={{ flex: 1, height: 2, background: `linear-gradient(90deg, ${color}55, transparent)` }} />
  </div>
);


// ─── Main Component ──────────────────────────────────────────────────────────
export default function ArticleDetail({
  article,
  relatedNews = [],
  mostReadNews = [],
  authorNews = [],
  categoryRecommendations = [],
  banners = [],
  onBack
}: ArticleDetailProps) {
  const getBanner = (pos: string) => {
    const pool = banners.filter(b => b.position === pos && b.is_active);
    return pool.length > 0 ? pool[Math.floor(Math.random() * pool.length)] : null;
  };
  const sidebarAdBanner = getBanner('article_sidebar');
  const inContentBanner = getBanner('article_mid');
  const bottomBanner = getBanner('article_bottom');

  const [copied, setCopied] = useState(false);
  const [isReading, setIsReading] = useState(false);
  const [fontSize, setFontSize] = useState(18);

  // SEO & Social Sharing Metadata Injection
  useEffect(() => {
    if (!article) return;
    const previousTitle = document.title;
    document.title = `${article.title} | Radio ABC Stereo`;

    const setMetaTag = (selector: string, attribute: string, content: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        const [attrName, attrValue] = selector.replace('meta[', '').replace(']', '').split('=');
        element.setAttribute(attrName, attrValue.replace(/"/g, ''));
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMetaTag('meta[property="og:title"]', 'content', article.title);
    setMetaTag('meta[property="og:description"]', 'content', article.excerpt);
    setMetaTag('meta[property="og:image"]', 'content', article.image_path ? `/storage/${article.image_path}` : '');
    setMetaTag('meta[property="og:url"]', 'content', window.location.href);
    setMetaTag('meta[property="og:type"]', 'content', 'article');
    setMetaTag('meta[name="twitter:title"]', 'content', article.title);
    setMetaTag('meta[name="twitter:description"]', 'content', article.excerpt);
    setMetaTag('meta[name="twitter:image"]', 'content', article.image_path ? `/storage/${article.image_path}` : '');

    return () => {
      document.title = previousTitle;
      setMetaTag('meta[property="og:title"]', 'content', 'Radio ABC Stereo - La voz del norte');
      setMetaTag('meta[property="og:description"]', 'content', 'Noticias de última hora, deportes, farándula y la mejor programación musical.');
      setMetaTag('meta[property="og:image"]', 'content', asset('storage/logotipo.png'));
    };
  }, [article]);

  // Twitter/X Embeds
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

  // Speech cleanup
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

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerpt || article.lead || '',
          url: window.location.href,
        });
      } catch {
        // usuario canceló
      }
    } else {
      // Fallback: copiar enlace
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!article) {
    return (
      <div className="text-center py-5">
        <h3>Noticia no encontrada</h3>
        <button onClick={onBack} className="btn btn-primary mt-3">Volver al inicio</button>
      </div>
    );
  }

  const authorName = article.author?.name || 'Redacción';
  const categoryName = article.categories?.[0]?.name || '';

  return (
    <article className="animate-fade-in">
      {/* ── Breadcrumb ── */}
      <div className="mb-4">
        <button
          onClick={onBack}
          className="btn btn-link text-decoration-none text-secondary ps-0 d-flex align-items-center gap-2 hover-red"
        >
          <ArrowLeft size={18} /> Volver a Portada
        </button>
      </div>

      <div className="row g-4">
        {/* ── Main Content ── */}
        <div className="col-lg-9">
          {/* Article Header */}
          <header className="mb-4">
            {categoryName && (
              <span className="badge bg-abc-red mb-2 text-uppercase">{categoryName}</span>
            )}
            <h1 className="fw-bold display-5 font-serif text-abc-blue mb-3">{article.title}</h1>

            <p className="lead fs-4 text-secondary font-serif mb-4 border-start border-4 border-warning ps-3 fst-italic">
              {article.lead || article.excerpt}
            </p>

            {/* Metadata */}
            <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between border-top border-bottom py-3 mt-4 gap-3">
              <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-3 gap-lg-4 text-muted small w-100">
                {/* Author */}
                <div className="d-flex align-items-center gap-2">
                  <div className="bg-light rounded-circle p-2 border">
                    <User size={20} className="text-abc-blue" />
                  </div>
                  <div>
                    {article.coAuthors && article.coAuthors.length > 0 ? (
                      <span className="d-block" style={{ fontSize: '0.85rem' }}>
                        <span className="fw-semibold text-dark">{1 + article.coAuthors.length > 1 ? 'Autores' : 'Autor'}:</span>{' '}
                        <span className="text-muted">
                          {[article.author?.name || 'Redacción', ...article.coAuthors.map((a: any) => a.name)].join(', ')}
                        </span>
                      </span>
                    ) : (
                      <span className="d-block" style={{ fontSize: '0.85rem' }}>
                        <span className="fw-semibold text-dark">Autor:</span>{' '}
                        <span className="text-muted">{authorName}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Stats */}
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

              {/* Actions */}
              <div className="d-flex gap-2 align-self-start align-self-md-center pt-2 pt-md-0 flex-wrap">
                <button
                  onClick={handleSpeech}
                  className={`btn btn-sm rounded-pill px-3 d-flex align-items-center gap-2 fw-bold transition-all ${isReading ? 'btn-abc-red text-white' : 'btn-outline-dark hover-red'}`}
                  title={isReading ? "Detener lectura" : "Escuchar noticia"}
                >
                  {isReading ? <CircleStop size={18} /> : <Volume2 size={18} />}
                  <span className="d-none d-sm-inline">{isReading ? 'Detener' : 'Escuchar'}</span>
                </button>
                <div className="vr mx-2 d-none d-md-block"></div>
                <button onClick={() => window.print()} className="btn btn-outline-secondary btn-sm rounded-circle p-2 border-0 bg-light" title="Imprimir">
                  <Printer size={18} />
                </button>
                <div className="vr mx-2 d-none d-md-block"></div>
                <button onClick={handleShare} className="btn btn-outline-dark btn-sm rounded-circle p-2 border-0 bg-light position-relative" title="Compartir">
                  {copied ? <Check size={18} className="text-success" /> : <Share2 size={18} />}
                </button>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-5 position-relative">
            <img
              src={article.image_path ? asset(`storage/${article.image_path}`) : ''}
              alt={article.title}
              className="img-fluid rounded shadow-sm w-100"
              onError={(e) => (e.target as HTMLImageElement).src = 'https://via.placeholder.com/1200x800?text=Sin+Imagen'}
            />
            {article.caption && (
              <figcaption className="figure-caption mt-2 text-end fst-italic">{article.caption}</figcaption>
            )}
          </div>

          {/* Article Body */}
          <div
            className="article-content fs-5 text-dark"
            style={{ lineHeight: '1.8', fontSize: `${fontSize}px` }}
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

          {/* ── IN-CONTENT AD (728×90) — entre cuerpo y noticias relacionadas ── */}
          {inContentBanner && (
            <div className="my-5">
              <AdSpace
                variant="horizontal"
                imageUrl={asset(`storage/${inContentBanner.file_path}`)}
                link={inContentBanner.link || '#'}
                label="Publicidad"
              />
            </div>
          )}



          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          {/* WIDGET 1: Noticias Relacionadas (same category) */}
          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          {relatedNews.length > 0 && (
            <section className="mt-5 pt-4 border-top" aria-label="Noticias relacionadas">
              <SectionHeader icon={BookOpen} title="Noticias Relacionadas" color="#003087" />
              <div className="row row-cols-1 row-cols-sm-2 g-3">
                {relatedNews.map(post => (
                  <div key={post.id} className="col">
                    <GridCard post={post} accentColor="#003087" />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          {/* WIDGET 2: Por el mismo autor */}
          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          {authorNews.length > 0 && (
            <section className="mt-5 pt-4 border-top" aria-label={`Más de ${authorName}`}>
              <SectionHeader icon={User} title={`Más de ${authorName}`} color="#8B1A1A" />
              <div className="author-news-strip">
                {authorNews.map(post => (
                  <MiniCard key={post.id} post={post} />
                ))}
              </div>
            </section>
          )}

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          {/* WIDGET 3: Recomendaciones por categoría */}
          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          {categoryRecommendations.length > 0 && (
            <section className="mt-5 pt-4 border-top" aria-label="Recomendaciones">
              <SectionHeader icon={TrendingUp} title={categoryName ? `Más en ${categoryName}` : 'También te puede interesar'} color="#C9992A" />
              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
                {categoryRecommendations.map(post => (
                  <div key={post.id} className="col">
                    <GridCard post={post} accentColor="#C9992A" />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* ── Sidebar ── */}
        <aside className="col-lg-3">
          <div className="sticky-top" style={{ top: '100px' }}>
            {/* ── SIDEBAR AD (300×250) ── */}
            {sidebarAdBanner && (
              <AdSpace
                variant="square"
                imageUrl={asset(`storage/${sidebarAdBanner.file_path}`)}
                link={sidebarAdBanner.link || '#'}
                label="Publicidad"
                className="mb-4"
              />
            )}


            <MostRead items={mostReadNews} />

            {/* Sidebar: Related news mini list */}
            {relatedNews.length > 0 && (
              <div className="mt-4 p-3 rounded-3" style={{ background: '#f8f9fa', border: '1px solid #e9ecef' }}>
                <h3 className="h6 fw-bold text-abc-blue mb-3 d-flex align-items-center gap-2">
                  <Tag size={15} className="text-abc-red" /> Te puede interesar
                </h3>
                {relatedNews.slice(0, 3).map(post => (
                  <MiniCard key={post.id} post={post} />
                ))}
              </div>
            )}
          </div>
        </aside>

      </div>

      {/* ── Article Content Styles ── */}
      <style>{`
        /* Article body content */
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

        /* Mini card (horizontal) */
        .article-mini-card { transition: background 0.15s; border-radius: 8px; padding-left: 4px !important; padding-right: 4px !important; }
        .article-mini-card:hover { background: #f5f7fa; }
        .article-mini-card:last-child { border-bottom: none !important; }
        .mini-card-title {
          font-size: 0.82rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Grid card hover effects */
        .grid-news-card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,0,0,0.14) !important; }
        .grid-news-card:hover .grid-card-img { transform: scale(1.05); }
        .grid-news-card:hover .grid-card-link { color: var(--abc-blue) !important; }

        /* Author news mini strip */
        .author-news-strip { background: #f8f9fa; border-radius: 12px; padding: 8px 16px; border: 1px solid #e9ecef; }
        .author-news-strip .article-mini-card { border-bottom-color: #e2e8f0 !important; }

        /* Responsive adjustments */
        @media (max-width: 767.98px) {
          .sticky-top { position: static !important; }
          .article-mini-card { padding-top: 10px !important; padding-bottom: 10px !important; }
        }
      `}</style>
    </article>
  );
}