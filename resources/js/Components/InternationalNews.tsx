import React from 'react';
import { router } from '@inertiajs/react';
import { route } from 'ziggy-js';
import { ArticleData } from '@/types';

interface InternationalNewsProps {
    items: ArticleData[];
}

export default function InternationalNews({ items }: InternationalNewsProps) {
    const onNewsClick = (slug: string) => {
        router.visit(route('news.show', { slug }));
    };

    return (
        <div className="card border-0 shadow-sm bg-white rounded-lg overflow-hidden">
            <h3 className="h5 mb-0 fw-bold font-serif text-white bg-abc-blue p-3">
                Internacionales
            </h3>
            <div className="card-body p-0">
                <ul className="list-group list-group-flush">
                    {items.map((news, index) => (
                        <li key={news.id}
                            className={`list-group-item bg-transparent py-3 px-3 border-bottom-0 ${index < items.length - 1 ? 'border-bottom' : ''}`}
                        >
                            <a
                                href={route('news.show', { slug: news.slug })}
                                onClick={(e) => { e.preventDefault(); onNewsClick(news.slug); }}
                                className="text-decoration-none text-secondary hover-red d-block"
                            >
                                {news.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
