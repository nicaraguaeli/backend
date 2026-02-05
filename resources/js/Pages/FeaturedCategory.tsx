import React from 'react';
import { Head, router } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import FeaturedCategoryView from '@/Components/FeaturedCategoryView';

interface Category {
    id: number;
    name: string;
    slug: string;
    description?: string;
    image_path?: string;
    is_featured: boolean;
}

interface Props {
    category: Category;
}

const FeaturedCategoryPage = ({ category }: Props) => {
    return (
        <>
            <Head title={category.name} />
            <FeaturedCategoryView
                category={category}
                onBack={() => router.visit('/')}
                onPostClick={(slug) => router.visit(`/news/${slug}`)}
            />
        </>
    );
};

FeaturedCategoryPage.layout = (page: React.ReactNode) => <MainLayout>{page}</MainLayout>;

export default FeaturedCategoryPage;
