import { Head, router } from '@inertiajs/react';
import { asset } from '@/url';
import MainLayout, { withMainLayout } from '@/Layouts/MainLayout';
import React from 'react';
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
import AudioreportajesCTA from '@/Components/AudioreportajesCTA';
import VideoGallery from '@/Components/VideoGallery';
import { ArticleData, Category, Video } from '@/types';
import { Calendar } from 'lucide-react';
import { route } from 'ziggy-js';

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
    isFallbackFeatured?: boolean;
    videos?: Video[]; // Fix 3: videos now passed from server
}

const Welcome = ({ latestNews, mostReadNews = [], featuredNews = [], moreNews = [], featuredCategories = [], nacionalesNews = [], internationalNews = [], banners = [], isFallbackFeatured = false, videos = [] }: WelcomeProps) => {

    const getBanner = (position: string) => {
        const positionBanners = banners.filter(b => b.position === position);
        if (positionBanners.length === 0) return null;
        // Return a random banner from the available ones for this position
        return positionBanners[Math.floor(Math.random() * positionBanners.length)];
    };

    const homeTopBanner = getBanner('home_top');
    const sidebarBanner = getBanner('sidebar_home');
    const contentBanner = getBanner('content_home');
    const footerBanner = getBanner('footer');
    const billboardBanner = getBanner('billboard');


    return (
        <>
            <Head title="Radio ABC Stereo - Noticias, música y entretenimiento" />

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
                                <a href="/seccion/noticias-abc" className='text-decoration-none text-abc-blue'> Noticias ABC</a>
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

                    {/* Sidebar: wider sticky column */}
                    <aside className="col-lg-auto" style={{ width: '350px' }}>
                        <div className="d-flex flex-column gap-4 sticky-top" style={{ top: '100px', zIndex: 10 }}>

                            {/* Most Read Widget */}
                            <MostRead items={mostReadNews || []} />

                            {/* International News Widget */}
                            <InternationalNews items={internationalNews || []} />

                            {/* ── SIDEBAR BANNER (300×250) ── */}
                            {sidebarBanner && (
                                <AdSpace
                                    variant="square"
                                    imageUrl={asset(`storage/${sidebarBanner.file_path}`)}
                                    link={sidebarBanner.link || '#'}
                                    label="Publicidad"
                                />
                            )}


                        </div>
                    </aside>

                </div>
            </div>

            <FeaturedSection
                posts={featuredNews || []}
                onPostClick={(slug) => router.visit(route('news.show', { slug }))}
                isFallback={isFallbackFeatured}
            />
            <FeaturedCategories
                categories={featuredCategories}
                onCategoryClick={(slug) => router.visit(route('category.show', { slug }))}
            />

            {/* ── Video Gallery ABC TV ──────────────────────────────── */}
            {videos.length > 0 && (
                <div style={{ background: 'linear-gradient(180deg, #080f1e 0%, #0c1530 100%)', padding: '60px 0' }}>
                    <div className="container">
                        <VideoGallery
                            title="Reportajes ABC TV"
                            videos={videos}
                            onSeeMore={() => {
                                window.history.pushState(null, '', '#videos');
                                window.dispatchEvent(new PopStateEvent('popstate'));
                            }}
                        />
                    </div>
                </div>
            )}

            <AudioreportajesCTA
                onNavigate={() => {
                    window.history.pushState(null, '', '#audioreportajes');
                    window.dispatchEvent(new PopStateEvent('popstate'));
                }}
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

            {/* ── BILLBOARD 970×250 — before NacionalesSection ── */}
            {billboardBanner && (
                <div className="container-fluid px-0 my-4">
                    <a href={billboardBanner.link || '#'} target="_blank" rel="noopener noreferrer" className="d-block">
                        <img
                            src={asset(`storage/${billboardBanner.file_path}`)}
                            alt="Publicidad"
                            className="w-100"
                            style={{ maxHeight: '250px', objectFit: 'cover', display: 'block' }}
                        />
                    </a>
                    <p className="text-center text-muted mb-0" style={{ fontSize: '0.6rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Publicidad</p>
                </div>
            )}




            <NacionalesSection news={nacionalesNews} />

            <JobsCallToAction />
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

Welcome.layout = withMainLayout;


export default Welcome;
