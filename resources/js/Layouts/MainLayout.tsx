import React, { useState } from 'react';
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

    // Podcast info & playback states for the sheet and global player
    const [viewingPodcast, setViewingPodcast] = useState<any | null>(null);
    const [isPodcastInfoOpen, setIsPodcastInfoOpen] = useState(false);

    const handleNavigation = (page: string) => {
        if (page === 'podcast' || page === 'podcastview') {
            setCurrentView('podcastview');
            return;
        }
        if (page === 'videos' || page === 'videoreportajes') {
            setCurrentView('videoreportajes');
            return;
        }
        // Reset to default for any other view (preserve current behavior)
        setCurrentView('default');
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
        setViewingPodcast(episode);
        setIsPodcastInfoOpen(true);
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
