import React from 'react';
import { ArticleData } from '../types';
import { Calendar, ArrowRight, MapPin } from 'lucide-react';

interface NacionalesSectionProps {
  news: ArticleData[];
}

export default function NacionalesSection({ news }: NacionalesSectionProps) {
  if (!news || news.length === 0) return null;

  return (
    <section className="py-5 bg-light border-top">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="h3 fw-bold text-abc-blue font-serif border-start border-4 border-abc-red ps-3 mb-0">
            Nacionales
          </h2>
          <a href="/category/nacionales" className="btn btn-link text-decoration-none text-secondary d-flex align-items-center gap-1 small fw-bold">
            Ver más <ArrowRight size={16} />
          </a>
        </div>

        <div className="row g-4">
          {news.map((item) => (
            <div key={item.id} className="col-md-6 col-lg-3">
              <article className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                <div className="position-relative overflow-hidden" style={{ paddingTop: '60%' }}>
                  <img 
                    src={item.image_path ? `/storage/${item.image_path}` : 'https://via.placeholder.com/400x300?text=No+Image'} 
                    alt={item.title}
                    className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover transition-transform hover-scale"
                  />
                  {item.categories && item.categories.length > 0 && (
                    <span className="position-absolute top-0 start-0 m-3 badge bg-abc-blue shadow-sm">
                      {item.categories[0].name}
                    </span>
                  )}
                </div>
                <div className="card-body d-flex flex-column">
                  <div className="d-flex align-items-center gap-3 text-muted small mb-2">
                    <span className="d-flex align-items-center gap-1">
                      <Calendar size={14} />
                      {new Date(item.published_at).toLocaleDateString()}
                    </span>
                    {item.city && (
                        <span className="d-flex align-items-center gap-1">
                            <MapPin size={14} /> {item.city}
                        </span>
                    )}
                  </div>
                  <h3 className="h6 fw-bold text-dark mb-3 line-clamp-3 flex-grow-1 font-serif">
                    <a href={`/news/${item.slug}`} className="text-decoration-none text-dark stretched-link hover-text-red">
                      {item.title}
                    </a>
                  </h3>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .hover-shadow:hover { box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important; }
        .transition-all { transition: all .3s ease; }
        .hover-scale:hover { transform: scale(1.05); }
        .transition-transform { transition: transform .5s ease; }
        .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
        .hover-text-red:hover { color: var(--abc-red) !important; }
      `}</style>
    </section>
  );
}
