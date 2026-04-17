import React from 'react';
import { Head, router } from '@inertiajs/react';
import { withMainLayout } from '@/Layouts/MainLayout';
import CategoryView from '@/Components/CategoryView';
import { ArticleData } from '../types';
import { route } from 'ziggy-js';

interface Props {
    category: string;
    categoryName?: string;
    posts: ArticleData[];
}

const CategoryPage = ({ category, categoryName, posts }: Props) => {
    return (
        <>
            <Head title={categoryName || category} />
            <CategoryView
                category={category}
                categoryName={categoryName}
                posts={posts}
                onBack={() => router.visit(route('home'))}
                onPostClick={(slug) => router.visit(route('news.show', { slug }))}
            />
        </>
    );
};

CategoryPage.layout = withMainLayout;

export default CategoryPage;
