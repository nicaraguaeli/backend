import React from 'react';
import { Head, router } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import FeaturedArticleDetail from '@/Components/FeaturedArticleDetail';
import { ArticleData } from '@/types';

interface Props {
    article: ArticleData;
}

const FeaturedArticlePage = ({ article }: Props) => {
    return (
        <>
            <Head title={article.title} />
            <FeaturedArticleDetail
                article={article}
                onBack={() => router.visit('/')}
            />
        </>
    );
};

FeaturedArticlePage.layout = (page: React.ReactNode) => <MainLayout>{page}</MainLayout>;

export default FeaturedArticlePage;
