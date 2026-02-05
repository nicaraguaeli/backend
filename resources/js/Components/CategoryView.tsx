import React, { useState, useEffect } from 'react';
import { BlogPost } from '../types';
import { Clock, ArrowRight, ChevronLeft, ChevronRight, Home, TrendingUp, Calendar, Eye, User } from 'lucide-react';
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
  const itemsPerPage = 7; // 1 Destacada + 6 en Grid

  const displayName = categoryName || category;

  useEffect(() => {
    const loadCategoryNews = async () => {
      setLoading(true);
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const featuredPost = currentPosts[0];
  const gridPosts = currentPosts.slice(1);

  if (loading) {
    return (
      <div className="container py-5">
        <div className="text-center py-5">
          <div className="spinner-border text-abc-red" role="status" style={{ width: '3rem', height: '3rem' }}>
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p className="mt-3 text-muted fw-bold">Cargando noticias...</p>
        </div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="container py-5">
        <div className="mb-4">
          <button onClick={onBack} className="btn btn-link text-decoration-none text-secondary ps-0 d-flex align-items-center gap-2">
            <Home size={18} /> Volver al inicio
          </button>
        </div>
        <div className="text-center py-5">
          <div className="bg-light rounded-circle d-inline-flex p-4 mb-3">
            <TrendingUp size={48} className="text-muted" />
          </div>
          <h3 className="text-abc-blue fw-bold">No hay noticias disponibles</h3>
          <p className="text-muted">Aún no se han publicado noticias en esta categoría</p>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in pb-5">
      {/* Breadcrumb Header */}
      <div className="bg-light border-bottom py-3 mb-4 sticky-top" style={{ top: '70px', zIndex: 900 }}>
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 align-items-center">
              <li className="breadcrumb-item">
                <button onClick={onBack} className="btn btn-link p-0 text-decoration-none text-secondary d-flex align-items-center gap-1">
                  <Home size={16} /> Inicio
                </button>
              </li>
              <li className="breadcrumb-item active fw-bold text-abc-blue text-uppercase" aria-current="page">
                {displayName}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container">
        {/* Category Header */}
        <div className="mb-5">
          <div className="d-flex align-items-center gap-3 mb-3">
            <div className="bg-abc-red text-white p-3 rounded-3 shadow">
              <TrendingUp size={32} />
            </div>
            <div>
              <span className="text-uppercase text-muted small fw-bold d-block mb-1">Categoría</span>
              <h1 className="display-5 fw-bold font-serif text-abc-blue m-0">{displayName}</h1>
            </div>
          </div>
          <div className="border-top border-3 border-abc-gold pt-3">
            <p className="text-muted mb-0">
              <strong>{posts.length}</strong> {posts.length === 1 ? 'noticia encontrada' : 'noticias encontradas'}
            </p>
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-5">
            <div className="row g-0 bg-white shadow-lg rounded-3 overflow-hidden hover-card border border-2 border-abc-blue">
              <div className="col-lg-7">
                <div className="position-relative" style={{ height: '100%', minHeight: '400px' }}>
                  <img
                    src={featuredPost.imageUrl || 'https://placehold.co/800x600?text=Sin+Imagen'}
                    alt={featuredPost.title}
                    className="w-100 h-100 object-fit-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://placehold.co/800x600?text=Sin+Imagen';
                    }}
                  />
                  <span className="position-absolute top-0 start-0 m-3 badge bg-abc-red text-white px-3 py-2 shadow">
                    DESTACADA
                  </span>
                  <span className="position-absolute bottom-0 start-0 m-3 badge bg-abc-blue text-white px-3 py-2 shadow">
                    {featuredPost.category}
                  </span>
                </div>
              </div>
              <div className="col-lg-5 d-flex flex-column justify-content-center p-4 p-lg-5">
                <div className="d-flex align-items-center gap-3 mb-3 text-muted small">
                  <div className="d-flex align-items-center gap-1">
                    <Calendar size={14} />
                    <span>{formatDate(featuredPost.date)}</span>
                  </div>
                  {featuredPost.views && (
                    <div className="d-flex align-items-center gap-1">
                      <Eye size={14} />
                      <span>{featuredPost.views.toLocaleString()}</span>
                    </div>
                  )}
                </div>

                <h2 className="display-6 fw-bold font-serif text-abc-blue mb-3 lh-sm">
                  {featuredPost.title}
                </h2>

                <p className="text-secondary mb-4 fs-6 lh-base">
                  {featuredPost.excerpt}
                </p>

                <div className="d-flex align-items-center justify-content-between border-top pt-3">
                  <div className="d-flex align-items-center gap-2 text-muted small">
                    <User size={16} />
                    <span className="fw-bold">{featuredPost.author}</span>
                  </div>
                  <button
                    onClick={() => onPostClick(featuredPost.slug)}
                    className="btn btn-abc-red text-white fw-bold px-4 py-2 rounded-pill d-flex align-items-center gap-2 shadow"
                  >
                    Leer Noticia <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Grid Posts */}
        {gridPosts.length > 0 && (
          <>
            <div className="d-flex align-items-center gap-2 mb-4">
              <div className="bg-abc-gold" style={{ width: '4px', height: '24px' }}></div>
              <h3 className="h5 fw-bold text-abc-blue mb-0 font-serif">Más Noticias</h3>
            </div>

            <div className="row g-4 mb-5">
              {gridPosts.map((post) => (
                <div key={post.id} className="col-md-6 col-lg-4">
                  <article className="card h-100 border-0 shadow hover-card bg-white">
                    <div className="card-img-top-wrapper position-relative">
                      <img
                        src={post.imageUrl || 'https://placehold.co/600x400?text=Sin+Imagen'}
                        className="card-img-top"
                        alt={post.title}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://placehold.co/600x400?text=Sin+Imagen';
                        }}
                      />
                      <span className="category-badge bg-abc-blue">{post.category}</span>
                      <span className="position-absolute bottom-0 end-0 m-2 badge bg-dark bg-opacity-75 text-white shadow-sm d-flex align-items-center gap-1" style={{ fontSize: '0.7rem' }}>
                        <Clock size={12} />
                        {formatDate(post.date)}
                      </span>
                    </div>

                    <div className="card-body d-flex flex-column p-4">
                      <div className="d-flex align-items-center gap-2 mb-3 text-muted small">
                        {post.views && (
                          <div className="d-flex align-items-center gap-1">
                            <Eye size={12} />
                            <span>{post.views.toLocaleString()}</span>
                          </div>
                        )}
                        <span className="text-abc-blue fw-bold">• {post.author}</span>
                      </div>

                      <h3 className="card-title fw-bold font-serif mb-3 text-abc-blue h5 lh-sm">
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            onPostClick(post.slug);
                          }}
                          className="text-decoration-none text-abc-blue stretched-link"
                        >
                          {post.title}
                        </a>
                      </h3>

                      <p className="card-text text-secondary small flex-grow-1 lh-base" style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}>
                        {post.excerpt}
                      </p>

                      <div className="mt-3 position-relative" style={{ zIndex: 2 }}>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            onPostClick(post.slug);
                          }}
                          className="text-decoration-none text-abc-red fw-bold text-uppercase d-inline-flex align-items-center gap-1 small"
                        >
                          Leer Más <ArrowRight size={14} />
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <nav aria-label="Paginación de noticias">
            <ul className="pagination justify-content-center gap-2">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button
                  className="page-link border-0 bg-abc-blue text-white rounded-pill px-4 shadow-sm"
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft size={18} className="me-1" />
                  Anterior
                </button>
              </li>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                  <button
                    className={`page-link rounded-circle border-2 ${currentPage === number
                        ? 'bg-abc-red text-white border-abc-red shadow'
                        : 'bg-white text-abc-blue border-abc-blue'
                      }`}
                    onClick={() => paginate(number)}
                    style={{ width: '40px', height: '40px', fontWeight: 'bold' }}
                  >
                    {number}
                  </button>
                </li>
              ))}

              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button
                  className="page-link border-0 bg-abc-blue text-white rounded-pill px-4 shadow-sm"
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Siguiente
                  <ChevronRight size={18} className="ms-1" />
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
}
