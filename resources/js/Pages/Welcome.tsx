import { Head, router } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
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
import { ArticleData, Category } from '@/types';
import { Calendar } from 'lucide-react';

interface WelcomeProps {
    latestNews: ArticleData | null;
    mostReadNews?: ArticleData[];
    featuredNews?: ArticleData[];
    moreNews?: ArticleData[];
    featuredCategories?: Category[];
    nacionalesNews?: ArticleData[];
    internationalNews?: ArticleData[];
}

const Welcome = ({ latestNews, mostReadNews = [], featuredNews = [], moreNews = [], featuredCategories = [], nacionalesNews = [], internationalNews = [] }: WelcomeProps) => {
    return (
          <>
         <Head title="Radio ABC Stereo | Inicio | ABC Stereo" />
        
         <Hero 
                post={latestNews} 
                onReadMore={() => latestNews && router.visit(`/news/${latestNews.slug}`)}
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
                    </div>

                    {/* Sidebar: Most Read & Widgets */}
                    <aside className="col-lg-auto" style={{ width: '350px' }}>
                        <div className="d-flex flex-column gap-4 sticky-top" style={{ top: '100px', zIndex: 10 }}>
                            {/* Most Read Widget */}
                            <MostRead items={mostReadNews || []} />

                            {/* International News Widget */}
                            <InternationalNews items={internationalNews || []} />
                            
                            {/* Ad Space Placeholder */}
                            <div className="bg-light p-5 text-center rounded border border-dashed d-flex flex-column align-items-center justify-content-center text-muted" style={{ height: '250px' }}>
                                <span className="fw-bold mb-1">ESPACIO PUBLICITARIO</span>
                                <small>300 x 250</small>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
       
          <FeaturedSection 
                posts={featuredNews || []} 
                onPostClick={(slug) => router.visit(`/news/${slug}`)} 
            />
             <FeaturedCategories 
                categories={featuredCategories}
                onCategoryClick={(slug) => router.visit(`/category/${slug}`)}
            />

            <NacionalesSection news={nacionalesNews} />
        </>
      
    );
};

Welcome.layout = (page: React.ReactNode) => <MainLayout>{page}</MainLayout>;

export default Welcome;
