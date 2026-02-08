import React from 'react';
import { Head, router } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import CategoryView from '@/Components/CategoryView';
import { route } from 'ziggy-js';

interface Props {
    category: string;
    categoryName?: string;
}

const CategoryPage = ({ category, categoryName }: Props) => {
    return (
        <>
            <Head title={categoryName || category} />
            <CategoryView
                category={category}
                categoryName={categoryName}
                onBack={() => router.visit(route('home'))}
                onPostClick={(slug) => router.visit(route('news.show', { slug }))}
            />
        </>
    );
};

CategoryPage.layout = (page: React.ReactNode) => <MainLayout>{page}</MainLayout>;

export default CategoryPage;
