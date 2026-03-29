import React, { useState, useEffect } from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import AudioPlayer from '../Components/AudioPlayer';
import { AudioState } from '../types';
import PodcastView from '../Components/PodcastView';
import PodcastInfoSheet from '../Components/PodcastInfoSheet';
import VideoReportajes from '../Components/VideoReportajes';

interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    const [audioState, setAudioState] = useState<AudioState>({
        isPlaying: false,
        type: 'live',
        data: {
            title: 'Radio ABC',
            audioUrl: '', // Placeholder
        }
    });

    const handlePlayLive = () => {
        setAudioState(prev => ({
            ...prev,
            isPlaying: !prev.isPlaying,
            type: 'live'
        }));
    };

    const handleTogglePlay = () => {
        setAudioState(prev => ({
            ...prev,
            isPlaying: !prev.isPlaying
        }));
    };

    // Simple in-layout view switcher to support Header onNavigate actions (e.g., podcast view, video reportajes)
    const [currentView, setCurrentView] = useState<'default' | 'podcastview' | 'videoreportajes'>('default');

    // On mount: read URL hash to restore view (e.g., after navigating back from detail page)
    useEffect(() => {
        const hash = window.location.hash;
        if (hash === '#audioreportajes') {
            setCurrentView('podcastview');
        } else if (hash === '#videos') {
            setCurrentView('videoreportajes');
        }

        // Also listen for popstate so the back/forward browser buttons work
        const onPop = () => {
            const h = window.location.hash;
            if (h === '#audioreportajes') setCurrentView('podcastview');
            else if (h === '#videos') setCurrentView('videoreportajes');
            else setCurrentView('default');
        };
        window.addEventListener('popstate', onPop);
        return () => window.removeEventListener('popstate', onPop);
    }, []);

    // Listen for TTS "stop audio" event fired by ArticleDetail
    useEffect(() => {
        const stopGlobalAudio = () => {
            setAudioState(prev => ({ ...prev, isPlaying: false }));
        };
        window.addEventListener('abc:stop-audio', stopGlobalAudio);
        return () => window.removeEventListener('abc:stop-audio', stopGlobalAudio);
    }, []);

    // Podcast info & playback states for the sheet and global player
    const [viewingPodcast, setViewingPodcast] = useState<any | null>(null);
    const [isPodcastInfoOpen, setIsPodcastInfoOpen] = useState(false);

    const handleNavigation = (page: string) => {
        if (page === 'podcast' || page === 'podcastview') {
            setCurrentView('podcastview');
            window.history.pushState(null, '', '#audioreportajes');
            return;
        }
        if (page === 'videos' || page === 'videoreportajes') {
            setCurrentView('videoreportajes');
            window.history.pushState(null, '', '#videos');
            return;
        }
        // Home / default: clear hash
        setCurrentView('default');
        window.history.pushState(null, '', window.location.pathname);
    };

    const openPodcastInfo = (episode: any) => {
        setViewingPodcast(episode);
        setIsPodcastInfoOpen(true);
    };

    const playPodcast = (episode: any) => {
        setAudioState({
            type: 'podcast',
            isPlaying: true,
            data: {
                id: episode.id,
                title: episode.title,
                subtitle: episode.author || episode.subtitle,
                imageUrl: episode.image || episode.imageUrl,
                audioUrl: episode.audioUrl || episode.audio
            }
        });
        // No abrimos el sheet: los botones de play navegan directo al detalle
    };

    return (
        <div className="d-flex flex-column min-vh-100 bg-light">
            <Header
                audioState={audioState}
                onPlayLive={handlePlayLive}
                onNavigate={handleNavigation}
            />
            <main className="flex-grow-1 main-content-offset" style={{ paddingBottom: '100px' }}>
                {currentView === 'podcastview' ? (
                    <PodcastView
                        onBack={() => setCurrentView('default')}
                        onOpenPodcastInfo={(ep: any) => openPodcastInfo(ep)}
                        onPlayPodcast={(ep: any) => playPodcast(ep)}
                    />
                ) : currentView === 'videoreportajes' ? (
                    <VideoReportajes
                        onBack={() => setCurrentView('default')}
                    />
                ) : (
                    children
                )}
            </main>
            {/* Global Podcast Info Sheet connected to AudioPlayer */}
            <PodcastInfoSheet
                episode={viewingPodcast}
                isOpen={isPodcastInfoOpen}
                onClose={() => setIsPodcastInfoOpen(false)}
                onPlay={(ep: any) => playPodcast(ep)}
            />
            <Footer />

            {/* Persistent Audio Player */}
            <AudioPlayer
                audioState={audioState}
                onTogglePlay={handleTogglePlay}
            />
        </div>
    );
}

/**
 * Persistent layout component for Inertia v2.
 *
 * IMPORTANT: This must be a stable React component reference defined at
 * module level (outside any other component). Inertia v2 compares layout
 * references: when two consecutive pages assign the same component reference,
 * the layout is NOT unmounted on navigation — preserving:
 *   - audioState in AudioPlayer (music doesn't stop)
 *   - Header navItems (no re-fetch, no menu flicker)
 *   - currentView (podcast/videos/default)
 *
 * Usage in every public page:
 *   MyPage.layout = (page: React.ReactNode) => <MainLayout>{page}</MainLayout>;
 *   export default MyPage;
 */
export function withMainLayout(page: React.ReactNode): React.ReactElement {
    return <MainLayout>{page}</MainLayout>;
}
