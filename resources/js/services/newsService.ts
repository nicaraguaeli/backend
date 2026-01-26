import axios from 'axios';
import { Category, BlogPost } from '../types';

export const fetchCategories = async (): Promise<Category[]> => {
    try {
        const response = await axios.get('/api/categories');
        return response.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
};

export const fetchNewsByCategory = async (categorySlug: string): Promise<BlogPost[]> => {
    try {
        const response = await axios.get(`/api/news?category=${categorySlug}`);
        return response.data.map((item: any) => ({
            id: item.id.toString(),
            slug: item.slug,
            title: item.title,
            excerpt: item.summary || item.excerpt || '',
            content: item.content,
            author: item.author?.name || 'Redacción',
            date: item.published_at || item.created_at,
            category: item.categories?.[0]?.name || 'General',
            imageUrl: item.image_path ? `/storage/${item.image_path}` : '',
            imageCaption: '',
            views: item.views || 0
        }));
    } catch (error) {
        console.error('Error fetching news by category:', error);
        return [];
    }
};
