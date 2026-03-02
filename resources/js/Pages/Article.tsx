import React from 'react';
import { Head, router } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import ArticleDetail from '@/Components/ArticleDetail';
import { ArticleData } from '@/types';

interface Props {
    article: ArticleData;
    relatedNews?: ArticleData[];
    mostReadNews?: ArticleData[];
    authorNews?: ArticleData[];
    categoryRecommendations?: ArticleData[];
}

const ArticlePage = ({ article, relatedNews = [], mostReadNews = [], authorNews = [], categoryRecommendations = [] }: Props) => {
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
                    onBack={() => router.visit('/')}
                />
            </div>
        </>
    );
};

ArticlePage.layout = (page: React.ReactNode) => <MainLayout>{page}</MainLayout>;

export default ArticlePage;
