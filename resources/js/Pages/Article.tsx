import React from 'react';
import { Head, router } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import ArticleDetail from '@/Components/ArticleDetail';
import { ArticleData } from '@/types';

interface Props {
    article: ArticleData;
    relatedNews?: ArticleData[];
    mostReadNews?: ArticleData[];
}

const ArticlePage = ({ article, relatedNews = [], mostReadNews = [] }: Props) => {
    return (
        <>
            <Head title={article.title} />
            <div className="container py-5">
                <ArticleDetail 
                    article={article} 
                    relatedNews={relatedNews}
                    mostReadNews={mostReadNews}
                    onBack={() => router.visit('/')}
                />
            </div>
        </>
    );
};

ArticlePage.layout = (page: React.ReactNode) => <MainLayout>{page}</MainLayout>;

export default ArticlePage;
