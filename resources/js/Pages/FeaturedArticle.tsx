import React from 'react';
import { Head, router } from '@inertiajs/react';
import MainLayout, { withMainLayout } from '@/Layouts/MainLayout';
import FeaturedArticleDetail from '@/Components/FeaturedArticleDetail';
import { ArticleData } from '@/types';

interface Props {
    article: ArticleData;
    relatedNews?: ArticleData[];
}

const FeaturedArticlePage = ({ article, relatedNews = [] }: Props) => {
    return (
        <>
            <FeaturedArticleDetail
                article={article}
                relatedNews={relatedNews}
                onBack={() => router.visit('/')}
            />
        </>
    );
};

FeaturedArticlePage.layout = withMainLayout;


export default FeaturedArticlePage;
