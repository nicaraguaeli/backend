import React from 'react';
import { Link } from '@inertiajs/react';
import { route } from 'ziggy-js';
import { ArticleData } from '../types';
import { ArrowRight } from 'lucide-react';
import PostGrid from './PostGrid';

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
          <Link href={route('category.show', { slug: 'nacionales' })} className="btn btn-link text-decoration-none text-secondary d-flex align-items-center gap-1 small fw-bold">
            Ver más <ArrowRight size={16} />
          </Link>
        </div>

        <PostGrid posts={news} columns={4} horizontalScrollMobile={true} />
      </div>
    </section>
  );
}
