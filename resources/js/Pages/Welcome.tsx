import { Head, router } from '@inertiajs/react';
import { asset } from '@/url';
import MainLayout from '@/Layouts/MainLayout';
import React, { useState, useEffect } from 'react';
import Hero from '@/Components/Hero';
import MostRead from '@/Components/MostRead';
import InternationalNews from '@/Components/InternationalNews';
import PostGrid from '@/Components/PostGrid';
import AdSpace from '@/Components/AdSpace';
import NewsTicker from '@/Components/NewsTicket';
import FeaturedSection from '@/Components/FeaturedSection';
import FeaturedCategories from '@/Components/FeaturedCategories';
import NacionalesSection from '@/Components/NacionalesSection';
import JobsCallToAction from '@/Components/JobsCallToAction';
import VideoGallery from '@/Components/VideoGallery';
import { ArticleData, Category, Video } from '@/types';
import { Calendar } from 'lucide-react';
import { route } from 'ziggy-js';
import { fetchYoutubeVideos } from '@/services/youtubeService';

interface Banner {
    id: number;
    file_path: string;
    link: string | null;
    position: string | null;
    mime_type: string;
    is_active: boolean;
}

interface WelcomeProps {
    latestNews: ArticleData | null;
    mostReadNews?: ArticleData[];
    featuredNews?: ArticleData[];
    moreNews?: ArticleData[];
    featuredCategories?: Category[];
    nacionalesNews?: ArticleData[];
    internationalNews?: ArticleData[];
    banners?: Banner[];
}

const Welcome = ({ latestNews, mostReadNews = [], featuredNews = [], moreNews = [], featuredCategories = [], nacionalesNews = [], internationalNews = [], banners = [] }: WelcomeProps) => {

    const [videos, setVideos] = useState<Video[]>([]);
    const [videosLoading, setVideosLoading] = useState(true);

    // Load videos on mount
    useEffect(() => {
        const loadVideos = async () => {
            try {
                const fetchedVideos = await fetchYoutubeVideos('Radio ABC Stereo reportajes', 6);
                setVideos(fetchedVideos);
            } catch (error) {
                console.error('Error loading videos:', error);
            } finally {
                setVideosLoading(false);
            }
        };
        loadVideos();
    }, []);

    const getBanner = (position: string) => {
        const positionBanners = banners.filter(b => b.position === position);
        if (positionBanners.length === 0) return null;
        // Return a random banner from the available ones for this position
        return positionBanners[Math.floor(Math.random() * positionBanners.length)];
    };

    const homeTopBanner = getBanner('home_top');
    const sidebarBanner = getBanner('sidebar');
    const contentBanner = getBanner('content');
    const footerBanner = getBanner('footer');

    return (
        <>
            <Head title="Radio ABC Stereo | Inicio | ABC Stereo" />

            {homeTopBanner && (
                <div className="container mt-4 mb-2">
                    <AdSpace
                        variant="horizontal"
                        imageUrl={asset(`storage/${homeTopBanner.file_path}`)}
                        link={homeTopBanner.link || '#'}
                        label="Publicidad"
                    />
                </div>
            )}

            <Hero
                post={latestNews}
                onReadMore={() => latestNews && router.visit(route('news.show', { slug: latestNews.slug }))}
            />


            <div className="container py-5">
                <div className="row g-4">
                    {/* Main Content: More News */}
                    <div className="col-lg">


                        <div className="d-flex align-items-center justify-content-between mb-4 border-bottom pb-3">
                            <h2 className="h2 mb-0 fw-bold text-abc-blue font-serif ps-3 border-start border-4 border-secondary">
                                Más Noticias
                            </h2>
                        </div>

                        <PostGrid posts={moreNews || []} columns={3} />

                        {contentBanner && (
                            <div className="mt-5">
                                <AdSpace
                                    variant="horizontal"
                                    imageUrl={asset(`storage/${contentBanner.file_path}`)}
                                    link={contentBanner.link || '#'}
                                    label="Publicidad"
                                />
                            </div>
                        )}
                    </div>

                    {/* Sidebar: Most Read & Widgets */}
                    <aside className="col-lg-auto" style={{ width: '350px' }}>
                        <div className="d-flex flex-column gap-4 sticky-top" style={{ top: '100px', zIndex: 10 }}>


                            {/* Most Read Widget */}
                            <MostRead items={mostReadNews || []} />

                            {/* International News Widget */}
                            <InternationalNews items={internationalNews || []} />

                            {/* Ad Space Sidebar */}
                            <AdSpace
                                variant="sidebar"
                                imageUrl={sidebarBanner ? asset(`storage/${sidebarBanner.file_path}`) : undefined}
                                link={sidebarBanner?.link || '#'}
                                label="Publicidad"
                            />

                        </div>
                    </aside>
                </div>
            </div>

            <FeaturedSection
                posts={featuredNews || []}
                onPostClick={(slug) => router.visit(route('news.show', { slug }))}
            />
            <FeaturedCategories
                categories={featuredCategories}
                onCategoryClick={(slug) => router.visit(route('category.show', { slug }))}
            />

            {footerBanner && (
                <div className="container my-5">
                    <AdSpace
                        variant="horizontal"
                        imageUrl={asset(`storage/${footerBanner.file_path}`)}
                        link={footerBanner.link || '#'}
                        label="Publicidad"
                    />
                </div>
            )}

            <JobsCallToAction />

            <NacionalesSection news={nacionalesNews} />

            {/* Video Gallery Section */}
            {!videosLoading && videos.length > 0 && (
                <div className="container my-5">
                    <VideoGallery
                        title="Reportajes ABC TV"
                        videos={videos}
                    />
                </div>
            )}

            <NewsTicker
                news={[
                    ...(latestNews ? [latestNews] : []),
                    ...featuredNews,
                    ...moreNews
                ].slice(0, 5)}
                onPostClick={(slug) => router.visit(route('news.show', { slug }))}
            />

        </>

    );
};

Welcome.layout = (page: React.ReactNode) => <MainLayout>{page}</MainLayout>;

export default Welcome;
