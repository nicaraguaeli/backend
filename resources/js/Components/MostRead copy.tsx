import React from 'react';
import { Eye, TrendingUp } from 'lucide-react';
import { ArticleData } from '../types';

interface MostReadProps {
  items: ArticleData[];
  className?: string;
}

// Fallback data for development/preview
const MOCK_ITEMS: ArticleData[] = [
    {
        id: 101,
        title: 'El nuevo puente que conectará la zona norte con el pacífico',
        slug: 'puente-zona-norte',
        excerpt: '',
        content: '',
        published_at: new Date().toISOString(),
        image_path: '',
        categories: [{ id: 1, name: 'Nacionales', slug: 'nacionales', is_active: 1, is_featured: 0, show_in_menu: 1, menu_order: 1 }]
    },
    {
        id: 102,
        title: 'Precio del combustible baja por tercera semana consecutiva',
        slug: 'precio-combustible-baja',
        excerpt: '',
        content: '',
        published_at: new Date().toISOString(),
        image_path: '',
        categories: [{ id: 2, name: 'Economía', slug: 'economia', is_active: 1, is_featured: 0, show_in_menu: 1, menu_order: 2 }]
    },
    {
        id: 103,
        title: 'Artista nacional gana premio Grammy Latino',
        slug: 'artista-grammy',
        excerpt: '',
        content: '',
        published_at: new Date().toISOString(),
        image_path: '',
        categories: [{ id: 3, name: 'Farándula', slug: 'farandula', is_active: 1, is_featured: 0, show_in_menu: 1, menu_order: 3 }]
    },
    {
        id: 104,
        title: 'Descubren sitio arqueológico en el occidente del país',
        slug: 'sitio-arqueologico',
        excerpt: '',
        content: '',
        published_at: new Date().toISOString(),
        image_path: '',
        categories: [{ id: 4, name: 'Cultura', slug: 'cultura', is_active: 1, is_featured: 0, show_in_menu: 1, menu_order: 4 }]
    },
    {
        id: 105,
        title: 'La selección nacional avanza a la siguiente ronda',
        slug: 'seleccion-nacional',
        excerpt: '',
        content: '',
        published_at: new Date().toISOString(),
        image_path: '',
        categories: [{ id: 5, name: 'Deportes', slug: 'deportes', is_active: 1, is_featured: 0, show_in_menu: 1, menu_order: 5 }]
    }
];

export default function MostRead({ items, className = '' }: MostReadProps) {
  // Use provided items or fallback to mock data if empty
  const displayItems = (items && items.length > 0) ? items : MOCK_ITEMS;

  if (!displayItems || displayItems.length === 0) return null;

  return (
    <div className={`bg-white rounded shadow-sm border-top border-4 border-abc-gold ${className}`}>
      <div className="p-3 border-bottom">
        <h3 className="h5 sidebar-widget-title text-abc-blue mb-0 d-flex align-items-center gap-2">
          <TrendingUp size={20} className="text-abc-gold" /> Lo Más Leído
        </h3>
      </div>
      
      <div className="list-group list-group-flush">
        {displayItems.map((item, index) => (
          <a key={item.id} href={`/news/${item.slug}`} className="list-group-item list-group-item-action py-3 border-bottom-dashed hover-bg-light bg-white">
            <div className="d-flex gap-3 align-items-start">
              {/* Number Rank */}
              <div className="flex-shrink-0">
                <span 
                  className="d-flex align-items-center justify-content-center fw-bold font-serif"
                  style={{ 
                    fontSize: '2rem', 
                    lineHeight: 1, 
                    color: index < 3 ? 'var(--abc-red)' : '#dee2e6',
                    width: '30px'
                  }}
                >
                  {index + 1}
                </span>
              </div>
              
              {/* Content */}
              <div>
                {item.categories && item.categories.length > 0 && (
                    <span className="badge bg-light text-secondary border mb-1" style={{fontSize: '0.65rem'}}>
                    {item.categories[0].name}
                    </span>
                )}
                <h6 className="mb-1 text-dark fw-bold line-clamp-2" style={{ fontSize: '0.95rem' }}>
                  {item.title}
                </h6>
                {/* Note: Views are not in ArticleData yet, assuming we might add it or just hide it for now if not available */}
                <div className="d-flex align-items-center gap-1 text-muted small" style={{ fontSize: '0.75rem' }}>
                  <Eye size={12} /> {15000 - (index * 2000)} lecturas
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
      
      <style>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .border-bottom-dashed {
          border-bottom: 1px dashed #dee2e6;
        }
        .border-bottom-dashed:last-child {
          border-bottom: none;
        }
        .hover-bg-light:hover {
          background-color: #f8f9fa;
        }
        .hover-bg-light:hover h6 {
          color: var(--abc-blue) !important;
        }
      `}</style>
    </div>
  );
}