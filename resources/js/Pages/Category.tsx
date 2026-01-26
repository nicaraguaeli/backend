import React from 'react';
import { Head, router } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import CategoryView from '@/Components/CategoryView';

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
                onBack={() => router.visit('/')}
                onPostClick={(slug) => router.visit(`/news/${slug}`)}
            />
        </>
    );
};

CategoryPage.layout = (page: React.ReactNode) => <MainLayout>{page}</MainLayout>;

export default CategoryPage;
