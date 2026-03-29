import React from 'react';
import { Link } from '@inertiajs/react';
import { Eye, TrendingUp } from 'lucide-react';
import { asset } from '@/url';
import { route } from 'ziggy-js';
import { ArticleData } from '../types';

interface MostReadProps {
  items: ArticleData[];
  className?: string;
}

export default function MostRead({ items, className = '' }: MostReadProps) {
  // Use strictly the provided items from the database
  const displayItems = items || [];

  if (displayItems.length === 0) return null;

  return (
    <div className={`most-read-widget bg-white rounded-lg shadow-sm border ${className}`}>
      <div className="p-3 border-bottom d-flex align-items-center justify-content-between">
        <h3 className="h6 mb-0 fw-bold text-dark font-serif d-flex align-items-center gap-2">
          <TrendingUp size={18} className="text-abc-red" />
          LO MÁS LEÍDO
        </h3>
        <span className="badge bg-light text-secondary border">Semana</span>
      </div>

      <div>
        {displayItems.slice(0, 5).map((item, index) => {
          const imageUrl = item.image_path
            ? asset(`storage/${item.image_path}`)
            : `https://placehold.co/100x100/eee/ccc?text=${encodeURIComponent(item.categories?.[0]?.name.charAt(0) || 'N')}`;

          return (
            <Link
              key={item.id}
              href={route('news.show', { slug: item.slug })}
              className="most-read-item d-flex align-items-center gap-3 text-decoration-none p-3"
            >
              <div
                className={`rank-number rank-${index + 1} flex-shrink-0 fw-bold font-serif d-flex align-items-center justify-content-center rounded-circle`}
              >
                {index + 1}
              </div>

              <img
                src={imageUrl}
                alt={item.title}
                className="flex-shrink-0 rounded"
                width="60"
                height="60"
                style={{ objectFit: 'cover', background: '#f0f0f0' }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = 'https://placehold.co/100x100/eee/ccc?text=Error';
                }}
              />

              <div className="flex-grow-1" style={{ minWidth: 0 }}>
                <h6 className="mb-1 text-dark fw-bold line-clamp-2 lh-sm small">
                  {item.title}
                </h6>
                <div className="d-flex align-items-center gap-1 text-muted" style={{ fontSize: '0.7rem' }}>
                  <Eye size={11} />
                  {`${item.views || 0} lecturas`}
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      <style>{`
        .most-read-widget {
          border-color: #f0f0f0 !important;
        }
        .most-read-item {
          border-bottom: 1px solid #f0f0f0;
          transition: background-color 0.2s ease-in-out;
        }
        .most-read-item:last-child {
          border-bottom: none;
        }
        .most-read-item:hover {
          background-color: #fafafa;
        }
        .most-read-item:hover h6 {
          color: var(--abc-red) !important;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .rank-number {
          width: 32px;
          height: 32px;
          font-size: 1rem;
          color: #fff !important;
          transition: all 0.3s ease;
          background-color: #6c757d;
        }
        .rank-number.rank-1 { background-color: #d90429; }
        .rank-number.rank-2 { background-color: #ef233c; }
        .rank-number.rank-3 { background-color: #f05365; }
        
        .most-read-item:hover .rank-number {
            transform: scale(1.1) rotate(5deg);
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
      `}</style>
    </div>
  );
}
