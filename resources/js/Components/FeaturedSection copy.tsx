
import React from 'react';
import { ArticleData } from '../types';
import { Clock, ArrowRight, Star, TrendingUp } from 'lucide-react';

interface FeaturedSectionProps {
  posts: ArticleData[];
  onPostClick: (slug: string) => void;
}

export default function FeaturedSection({ posts, onPostClick }: FeaturedSectionProps) {
  // Necesitamos al menos 3 posts, idealmente 5 (1 principal + 4 abajo)
  if (!posts || posts.length < 3) return null;

  const mainPost = posts[0];
  const horizontalPosts = posts.slice(1, 5); // Toma las siguientes 4 noticias

  return (
    <section className="featured-section py-5 bg-abc-blue position-relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="position-absolute top-0 end-0 p-5 opacity-5">
        <TrendingUp size={300} strokeWidth={0.5} color="white" />
      </div>
      <div className="position-absolute bottom-0 start-0 w-100 h-50" 
           style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)' }}>
      </div>

      <div className="container position-relative z-2">
        {/* Section Header */}
        <div className="d-flex align-items-end justify-content-between mb-4 border-bottom border-white border-opacity-10 pb-3">
            <div>
                <span className="text-abc-gold text-uppercase fw-bold small letter-spacing-2 mb-1 d-block">
                    Selección Editorial
                </span>
                <h2 className="display-6 fw-bold text-white font-serif mb-0">
                    Noticias Destacadas
                </h2>
            </div>
            <div className="d-none d-md-block">
                <button className="btn btn-outline-light rounded-pill btn-sm px-3 hover-gold text-uppercase fw-bold" style={{fontSize: '0.75rem'}}>
                    Ver Todo
                </button>
            </div>
        </div>

        <div className="row g-4">
          
          {/* Main Featured Article (Top - Full Width or Large Central) */}
          <div className="col-12 mb-2">
            <div 
                className="card border-0 rounded-4 overflow-hidden shadow-lg featured-card cursor-pointer"
                onClick={() => onPostClick(mainPost.slug)}
            >
              <div className="position-relative" style={{ minHeight: '500px' }}>
                <img 
                  src={mainPost.image_path ? `/storage/${mainPost.image_path}` : '/img/placeholder.jpg'} 
                  alt={mainPost.title} 
                  className="w-100 h-100 object-fit-cover transition-transform position-absolute top-0 start-0"
                  onError={(e) => (e.target as HTMLImageElement).src = 'https://placehold.co/800x500?text=ABC'}
                />
                <div className="overlay-gradient position-absolute top-0 start-0 w-100 h-100"></div>
                
                <div className="card-content position-absolute bottom-0 start-0 w-100 p-4 p-lg-5 text-white">
                   <div className="d-flex align-items-center gap-2 mb-3">
                        <span className="badge bg-abc-red shadow-sm text-uppercase px-3 py-2">
                            <Star size={14} className="me-1 fill-white" /> Destacado
                        </span>
                        <span className="badge bg-white bg-opacity-20 backdrop-blur text-white text-uppercase px-2 py-2">
                             {mainPost.categories?.[0]?.name || 'Noticias'}
                        </span>
                   </div>
                   <h3 className="display-4 fw-bold font-serif mb-3 text-shadow lh-sm" style={{maxWidth: '900px'}}>
                      {mainPost.title}
                   </h3>
                   <p className="text-white-75 mb-4 d-none d-lg-block lead fs-5" style={{maxWidth: '800px'}}>
                      {mainPost.excerpt}
                   </p>
                   <div className="d-flex align-items-center gap-3 text-white-50 small fw-medium">
                      <span className="text-abc-gold fw-bold text-uppercase">{mainPost.author?.[0]?.name || 'Redacción'}</span>
                      <span>•</span>
                      <div className="d-flex align-items-center gap-1">
                        <Clock size={14} /> {new Date(mainPost.published_at).toLocaleDateString()}
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Articles (Bottom - Horizontal Row of 4) */}
          {horizontalPosts.map((post) => (
            <div key={post.id} className="col-lg-3 col-md-6">
                <div 
                    className="card h-100 border-0 rounded-4 overflow-hidden shadow featured-card cursor-pointer bg-dark text-white hover-lift"
                    onClick={() => onPostClick(post.slug)}
                >
                    <div className="position-relative overflow-hidden" style={{height: '180px'}}>
                        <img 
                           src={post.image_path ? `/storage/${post.image_path}` : '/img/placeholder.jpg'} 
                           alt={post.title} 
                           className="w-100 h-100 object-fit-cover transition-transform"
                           onError={(e) => (e.target as HTMLImageElement).src = 'https://placehold.co/400x300?text=ABC'}
                        />
                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-to-t from-black opacity-50"></div>
                        <span className="position-absolute top-0 end-0 m-2 badge bg-abc-blue text-white shadow-sm" style={{fontSize: '0.65rem'}}>
                            {post.categories?.[0]?.name || 'Noticias'}
                        </span>
                    </div>
                    
                    <div className="card-body d-flex flex-column bg-gradient-dark p-3">
                        <h5 className="h6 fw-bold font-serif mb-2 line-clamp-3 text-white hover-gold-text lh-base flex-grow-1">
                            {post.title}
                        </h5>
                        
                        <div className="mt-3 pt-3 border-top border-secondary border-opacity-25 w-100">
                            <div className="d-flex justify-content-between align-items-center">
                                <small className="text-white-50" style={{fontSize: '0.7rem'}}>
                                    {new Date(post.published_at).toLocaleDateString()}
                                </small>
                                <span className="text-abc-gold text-decoration-none p-0 d-flex align-items-center gap-1 fw-bold" style={{fontSize: '0.7rem'}}>
                                    LEER <ArrowRight size={12} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          ))}
          
        </div>
      </div>

      <style>{`
        .cursor-pointer { cursor: pointer; }
        .text-shadow { text-shadow: 0 2px 10px rgba(0,0,0,0.5); }
        .fill-white { fill: white; }
        .bg-gradient-dark { background: linear-gradient(to bottom, #1e293b, #0f172a); }
        .bg-gradient-to-t { background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); }
        .backdrop-blur { backdrop-filter: blur(4px); }
        
        .overlay-gradient {
            background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,32,96,0.4) 60%, transparent 100%);
        }

        .featured-card .transition-transform {
            transition: transform 0.6s ease;
        }
        .featured-card:hover .transition-transform {
            transform: scale(1.05);
        }
        
        .hover-lift {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.3) !important;
        }

        .hover-gold:hover {
            background-color: var(--abc-gold);
            color: #000;
            border-color: var(--abc-gold);
        }
        .featured-card:hover .hover-gold-text {
            color: var(--abc-gold) !important;
        }
        
        .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
      `}</style>
    </section>
  );
}
