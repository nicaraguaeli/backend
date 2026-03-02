import React from 'react';
import { Head, router } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import ArticleDetail from '@/Components/ArticleDetail';
import { ArticleData } from '@/types';

interface Banner {
    id: number;
    file_path: string;
    link: string | null;
    position: string | null;
    mime_type: string;
    is_active: boolean;
}

interface Props {
    article: ArticleData;
    relatedNews?: ArticleData[];
    mostReadNews?: ArticleData[];
    authorNews?: ArticleData[];
    categoryRecommendations?: ArticleData[];
    banners?: Banner[];
}

const ArticlePage = ({
    article,
    relatedNews = [],
    mostReadNews = [],
    authorNews = [],
    categoryRecommendations = [],
    banners = [],
}: Props) => {
    return (
        <>
            <Head title={article.title} />
            <div className="container py-5">
                <ArticleDetail
                    article={article}
                    relatedNews={relatedNews}
                    mostReadNews={mostReadNews}
                    authorNews={authorNews}
                    categoryRecommendations={categoryRecommendations}
                    banners={banners}
                    onBack={() => router.visit('/')}
                />
            </div>
        </>
    );
};

ArticlePage.layout = (page: React.ReactNode) => <MainLayout>{page}</MainLayout>;

export default ArticlePage;
