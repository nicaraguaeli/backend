
import React, { useState, useEffect } from 'react';
import { BlogPost } from '../types';
import { Clock, ArrowRight, ChevronLeft, ChevronRight, Home, Hash } from 'lucide-react';
import { fetchNewsByCategory } from '../services/newsService';

interface CategoryViewProps {
  category: string;
  categoryName?: string;
  onPostClick: (slug: string) => void;
  onBack: () => void;
}

export default function CategoryView({ category, categoryName, onPostClick, onBack }: CategoryViewProps) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 7; // 1 Destacada + 6 en Grilla
  
  const displayName = categoryName || category;

  useEffect(() => {
    const loadCategoryNews = async () => {
      setLoading(true);
      // Simulamos una pequeña pausa para que se aprecie la transición si la API es muy rápida
      const data = await fetchNewsByCategory(category);
      setPosts(data);
      setCurrentPage(1);
      setLoading(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    loadCategoryNews();
  }, [category]);

  // Lógica de Paginación
  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / itemsPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const featuredPost = currentPosts[0];
  const gridPosts = currentPosts.slice(1);

  if (loading) {
    return (
        <div className="container py-5">
            {/* Skeleton Loader para dar sensación de velocidad */}
            <div className="d-flex align-items-center gap-2 mb-4 text-muted opacity-50">
               <div style={{width: '20px', height: '20px', background: '#e0e0e0', borderRadius: '50%'}}></div>
               <div style={{width: '100px', height: '14px', background: '#e0e0e0', borderRadius: '4px'}}></div>
            </div>
            <div className="row mb-5">
               <div className="col-lg-8">
                  <div style={{width: '100%', height: '400px', background: '#f0f0f0', borderRadius: '8px'}}></div>
               </div>
               <div className="col-lg-4 d-flex flex-column gap-3 justify-content-center">
                  <div style={{width: '60%', height: '20px', background: '#e0e0e0', borderRadius: '4px'}}></div>
                  <div style={{width: '90%', height: '30px', background: '#e0e0e0', borderRadius: '4px'}}></div>
                  <div style={{width: '80%', height: '15px', background: '#e0e0e0', borderRadius: '4px'}}></div>
               </div>
            </div>
        </div>
    );
  }

  return (
    <div className="animate-fade-in pb-5">
      {/* Breadcrumb Header Mejorado */}
      <div className="bg-light border-bottom py-3 mb-4 sticky-top" style={{top: '70px', zIndex: 900}}>
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 align-items-center">
              <li className="breadcrumb-item">
                <button onClick={onBack} className="btn btn-link p-0 text-decoration-none text-secondary d-flex align-items-center gap-1 hover-primary">
                  <Home size={16} /> Inicio
                </button>
              </li>
              <li className="breadcrumb-item active fw-bold text-abc-blue text-uppercase" aria-current="page">{displayName}</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container">
        
        {/* Título de la Sección con Estilo */}
        <div className="d-flex align-items-center gap-3 mb-4">
            <div className="bg-abc-blue text-white p-2 rounded-2">
                <Hash size={24} />
            </div>
            <div>
                <span className="text-uppercase text-muted small fw-bold letter-spacing-1 d-block">Sección Informativa</span>
                <h1 className="display-5 fw-bold font-serif text-dark m-0 lh-1">
                {displayName}
                </h1>
            </div>
        </div>
        
        {/* Línea divisoria decorativa */}
        <div className="mb-5 border-bottom border-2 border-light position-relative">
            <div className="position-absolute bottom-0 start-0 bg-abc-red" style={{width: '100px', height: '2px'}}></div>
        </div>

        {posts.length === 0 ? (
           <div className="alert alert-light border shadow-sm text-center py-5">
              <h4 className="text-muted">No hay noticias disponibles</h4>
              <p className="mb-0">Lo sentimos, no hemos encontrado artículos en la categoría <strong>{category}</strong>.</p>
           </div>
        ) : (
        <>
            {/* Noticia Principal Destacada (Estilo Hero Card) */}
            {featuredPost && (
              <div className="card border-0 shadow-lg mb-5 overflow-hidden rounded-4 hover-lift">
                <div className="row g-0">
                  <div className="col-lg-8 position-relative">
                    <div className="h-100" style={{ minHeight: '400px' }}>
                      <img 
                        src={featuredPost.imageUrl} 
                        className="w-100 h-100 object-fit-cover transition-transform" 
                        alt={featuredPost.title} 
                        onError={(e) => (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x600?text=Sin+Imagen'}
                      />
                      <div className="position-absolute bottom-0 start-0 bg-abc-red text-white px-3 py-2 fw-bold text-uppercase shadow rounded-end-pill mb-4">
                        Destacado
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 bg-white">
                    <div className="card-body p-4 p-lg-5 d-flex flex-column h-100 justify-content-center">
                      <div className="d-flex align-items-center gap-2 mb-3 text-muted small text-uppercase fw-bold">
                        <span className="text-abc-blue">{featuredPost.author}</span>
                        <span>•</span>
                        <Clock size={14} />
                        <span>{featuredPost.date}</span>
                      </div>
                      <h2 className="card-title fw-bold font-serif mb-3 display-6 lh-sm">
                        <a href="#" onClick={(e) => { e.preventDefault(); onPostClick(featuredPost.slug); }} className="text-decoration-none text-dark hover-blue transition-colors">
                          {featuredPost.title}
                        </a>
                      </h2>
                      <p className="card-text text-secondary mb-4 line-clamp-3 fs-5">
                        {featuredPost.excerpt}
                      </p>
                      <button 
                        onClick={() => onPostClick(featuredPost.slug)} 
                        className="btn btn-outline-dark rounded-pill fw-bold text-uppercase px-4 py-2 w-auto align-self-start hover-bg-dark hover-text-white transition-all"
                      >
                        Leer Artículo Completo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Grilla de Noticias Secundarias */}
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-5">
              {gridPosts.map((post) => (
                <div key={post.id} className="col">
                  <div className="card h-100 border-0 shadow-sm hover-card bg-white rounded-3 overflow-hidden">
                    <div className="position-relative overflow-hidden" style={{ height: '220px' }}>
                      <img 
                        src={post.imageUrl} 
                        className="w-100 h-100 object-fit-cover transition-transform" 
                        alt={post.title} 
                        onError={(e) => (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x400?text=Sin+Imagen'}
                      />
                    </div>
                    <div className="card-body p-4">
                      <div className="mb-2 text-muted small d-flex align-items-center gap-2">
                        <Clock size={12} /> {post.date}
                      </div>
                      <h5 className="card-title fw-bold font-serif mb-3 lh-sm">
                        <a href="#" onClick={(e) => { e.preventDefault(); onPostClick(post.slug); }} className="text-decoration-none text-dark hover-blue transition-colors">
                          {post.title}
                        </a>
                      </h5>
                      <p className="card-text text-secondary small line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="card-footer bg-white border-0 pt-0 pb-4 px-4">
                      <button 
                          onClick={() => onPostClick(post.slug)}
                          className="btn btn-link p-0 text-decoration-none text-abc-red fw-bold text-uppercase d-flex align-items-center gap-1 hover-arrow"
                          style={{ fontSize: '0.8rem' }}
                        >
                          Leer más <ArrowRight size={14} className="arrow-icon" />
                        </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Paginación */}
            {totalPages > 1 && (
              <nav aria-label="Page navigation" className="d-flex justify-content-center pt-4 border-top">
                <ul className="pagination pagination-lg">
                  <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button 
                      className="page-link border-0 text-secondary" 
                      onClick={() => paginate(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      <ChevronLeft size={20} />
                    </button>
                  </li>
                  
                  {Array.from({ length: totalPages }).map((_, idx) => (
                    <li key={idx} className={`page-item ${currentPage === idx + 1 ? 'active' : ''}`}>
                      <button 
                        className={`page-link border-0 rounded-circle mx-1 d-flex align-items-center justify-content-center fw-bold ${currentPage === idx + 1 ? 'bg-abc-blue text-white shadow' : 'text-secondary bg-light'}`}
                        style={{ width: '45px', height: '45px' }}
                        onClick={() => paginate(idx + 1)}
                      >
                        {idx + 1}
                      </button>
                    </li>
                  ))}

                  <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button 
                      className="page-link border-0 text-secondary" 
                      onClick={() => paginate(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      <ChevronRight size={20} />
                    </button>
                  </li>
                </ul>
              </nav>
            )}
        </>
        )}
      </div>

      <style>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .hover-blue:hover {
          color: var(--abc-blue) !important;
        }
        .hover-primary:hover {
          color: var(--abc-blue) !important;
        }
        .hover-lift {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
            transform: translateY(-5px);
            box-shadow: 0 1rem 3rem rgba(0,0,0,.175)!important;
        }
        .hover-card:hover .transition-transform {
            transform: scale(1.05);
        }
        .transition-transform {
            transition: transform 0.5s ease;
        }
        .hover-arrow:hover .arrow-icon {
            transform: translateX(3px);
        }
        .arrow-icon {
            transition: transform 0.2s ease;
        }
        .letter-spacing-1 {
            letter-spacing: 1px;
        }
      `}</style>
    </div>
  );
}
