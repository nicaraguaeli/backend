import React from 'react';
import { Head, router } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import FeaturedCategoryView from '@/Components/FeaturedCategoryView';
import { route } from 'ziggy-js';
import { Category } from '@/types';

interface Props {
    category: Category;
}

const FeaturedCategoryPage = ({ category }: Props) => {
    return (
        <>
            <Head title={category.name} />
            <FeaturedCategoryView
                category={category}
                onBack={() => router.visit(route('home'))}
                onPostClick={(slug) => router.visit(route('news.show', { slug }))}
            />
        </>
    );
};

FeaturedCategoryPage.layout = (page: React.ReactNode) => <MainLayout>{page}</MainLayout>;

export default FeaturedCategoryPage;
