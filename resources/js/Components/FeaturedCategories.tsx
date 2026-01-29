import React from 'react';
import { asset } from '@/url';
import { Heart, MessageCircle, Music, Trophy, Headphones, Tv, ArrowRight, Sparkles } from 'lucide-react';
import RadioSchedule from './RadioSchedule';
import { Category } from '@/types';

interface FeaturedCategoriesProps {
  categories?: Category[];
  onCategoryClick?: (slug: string) => void;
  onNavigate?: (view: string) => void;
}

const ICONS = [Heart, MessageCircle, Music, Trophy, Headphones, Tv, Sparkles];
const COLORS = ['#6f42c1', '#ffc107', '#0dcaf0', '#198754', '#d63384', '#dc3545'];

export default function FeaturedCategories({ categories = [], onCategoryClick, onNavigate }: FeaturedCategoriesProps) {

  const displayCategories = categories.map((cat, index) => ({
    id: cat.id,
    title: cat.name,
    subtitle: 'Explora más', // Default subtitle since DB doesn't have it
    icon: ICONS[index % ICONS.length],
    color: COLORS[index % COLORS.length],
    image: cat.image_path ? asset(`storage/${cat.image_path}`) : 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop',
    target: cat.slug
  }));

  const handleClick = (e: React.MouseEvent, slug: string) => {
    e.preventDefault();
    if (onCategoryClick) {
      onCategoryClick(slug);
    }
  };

  return (
    <section className="featured-categories-section py-5 position-relative overflow-hidden w-100">

      {/* New Elegant Background - Deep Royal Night with Gold Mesh */}
      <div className="position-absolute top-0 start-0 w-100 h-100 z-0"
        style={{
          background: 'radial-gradient(ellipse at bottom, #0f172a 0%, #020617 100%)'
        }}>
      </div>

      {/* Elegant Mesh Texture */}
      <div className="position-absolute top-0 start-0 w-100 h-100 z-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 215, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 215, 0, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}>
      </div>

      {/* Decorative Light Glows */}
      <div className="position-absolute top-0 start-50 translate-middle w-75 h-50 bg-abc-blue rounded-circle blur-4xl opacity-10"></div>

      <div className="container position-relative z-1">

        {/* Section Header */}
        <div className="text-center mb-5">
          <span className="text-abc-gold text-uppercase fw-bold small letter-spacing-2 mb-2 d-block">Explora Nuestro Contenido</span>
          <h2 className="display-5 fw-bold text-white font-serif mb-0 d-flex align-items-center justify-content-center gap-3">
            <span className="d-none d-md-block" style={{ height: '1px', width: '50px', background: 'var(--abc-gold)' }}></span>
            DE INTERES
            <span className="d-none d-md-block" style={{ height: '1px', width: '50px', background: 'var(--abc-gold)' }}></span>
          </h2>
        </div>

        <div className="row g-4">
          {/* Left Column: Categories Grid (8 cols) */}
          <div className="col-lg-8">
            <div className="row g-4">
              {displayCategories.length > 0 ? (
                displayCategories.map((cat, index) => {
                  const isLarge = index < 2;
                  return (
                    <div key={cat.id} className={isLarge ? "col-md-6" : "col-md-4"}>
                      <a href="#" onClick={(e) => handleClick(e, cat.target)} className="text-decoration-none h-100 d-block">
                        <div
                          className="vertical-card position-relative rounded-1 overflow-hidden h-100 border border-secondary border-opacity-25"
                          style={{
                            minHeight: isLarge ? '450px' : '280px',
                            background: '#000'
                          }}
                        >
                          <div
                            className="bg-image position-absolute top-0 start-0 w-100 h-100"
                            style={{ backgroundImage: `url(${cat.image})`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 0.8s ease' }}
                          ></div>
                          <div
                            className="overlay position-absolute top-0 start-0 w-100 h-100"
                            style={{ background: `linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 50%, ${cat.color} 100%)`, opacity: 0.85 }}
                          ></div>

                          {/* Content Vertical - Centered */}
                          <div className="card-content position-relative h-100 d-flex flex-column justify-content-center align-items-center p-4 z-2 text-white text-center">
                            <div className={`icon-container ${isLarge ? 'mb-4' : 'mb-3'}`}>
                              <div className={`${isLarge ? 'p-4' : 'p-3'} rounded-circle border border-white border-opacity-25 backdrop-blur shadow-sm bg-white bg-opacity-10`}>
                                <cat.icon size={isLarge ? 32 : 24} style={{ color: '#fff' }} />
                              </div>
                            </div>
                            <div className="text-container">
                              <h3 className={`${isLarge ? 'h3' : 'h5'} fw-bold font-serif mb-2 lh-1 text-shadow`}>{cat.title}</h3>
                              <p className="text-white-75 mb-4 text-uppercase tracking-wider fw-bold letter-spacing-2" style={{ fontSize: isLarge ? '0.8rem' : '0.7rem' }}>{cat.subtitle}</p>
                              <div className="btn-wrapper opacity-0 translate-y-4">
                                <span className={`btn btn-outline-light rounded-0 ${isLarge ? 'px-4 py-2' : 'px-3 py-1'} fw-bold text-uppercase border-2 btn-sm`}>Explorar</span>
                              </div>
                            </div>
                          </div>
                          <div className="position-absolute bottom-0 start-0 w-100" style={{ height: '6px', backgroundColor: cat.color }}></div>
                        </div>
                      </a>
                    </div>
                  );
                })
              ) : (
                <div className="col-12 text-center text-white py-5">
                  <p className="h5">No hay categorías destacadas disponibles.</p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Radio Schedule (4 cols) */}
          <div className="col-lg-4">
            <RadioSchedule />
          </div>
        </div>

      </div>

      <style>{`
        .blur-4xl { filter: blur(100px); }
        .letter-spacing-2 { letter-spacing: 2px; }
        .backdrop-blur { backdrop-filter: blur(4px); background: rgba(255,255,255,0.1); }
        .text-shadow { text-shadow: 0 2px 10px rgba(0,0,0,0.5); }
        
        /* General Card Styles */
        .vertical-card {
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .vertical-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.6);
          border-color: rgba(255,255,255,0.5) !important;
        }

        .vertical-card:hover .bg-image {
          transform: scale(1.1);
          filter: saturate(1.2);
        }

        /* Vertical Specific */
        .vertical-card:hover .icon-container { transform: scale(1.1); }
        .vertical-card .icon-container, .vertical-card .text-container { transition: transform 0.4s ease; }
        .vertical-card .btn-wrapper { transition: all 0.4s ease; transform: translateY(20px); }
        .vertical-card:hover .btn-wrapper { opacity: 1; transform: translateY(0); }

      `}</style>
    </section>
  );
}