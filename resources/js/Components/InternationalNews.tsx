import React from 'react';
import { Link } from '@inertiajs/react';
import { route } from 'ziggy-js';
import { Globe, ArrowRight } from 'lucide-react';
import { ArticleData } from '@/types';
import PostGrid from './PostGrid';

interface InternationalNewsProps {
    items: ArticleData[];
}

export default function InternationalNews({ items }: InternationalNewsProps) {

    return (
        <div className="bg-white rounded-3 shadow-sm border overflow-hidden">
            {/* Header */}
            <div className="p-3 border-bottom d-flex align-items-center justify-content-between bg-abc-green text-white">
                <h3 className="h6 fw-bold text-uppercase m-0 d-flex align-items-center gap-2 ls-1 text-white">
                    <Globe size={18} className="text-white" />
                    Internacionales
                </h3>
                <span className="badge bg-abc-gold text-abc-blue rounded-pill px-2 py-1" style={{ fontSize: '10px' }}>Global</span>
            </div>

            {/* List */}
            <div className="p-3 bg-light">
                <PostGrid posts={items.slice(0, 5)} columns={1} compact={true} horizontalScrollMobile={true} />
            </div>

            {/* Footer */}
            <div className="p-3 bg-light text-center border-top">
                <Link href={route('category.show', { slug: 'internacionales' })} className="text-decoration-none fw-bold text-abc-green d-flex align-items-center justify-content-center gap-1 hover-opacity small">
                    Ver todas las internacionales <ArrowRight size={14} />
                </Link>
            </div>

            <style>{`
        .ls-1 { letter-spacing: 0.5px; }
        .hover-opacity:hover {
          opacity: 0.8;
        }
      `}</style>
        </div>
    );
}
