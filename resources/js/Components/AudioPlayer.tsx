import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Radio, SkipBack, SkipForward, FileText, ChevronUp } from 'lucide-react';
import { AudioState } from '../types';

interface AudioPlayerProps {
  audioState: AudioState;
  onTogglePlay: () => void;
  onToggleInfo?: () => void;
}

export default function AudioPlayer({ audioState, onTogglePlay, onToggleInfo }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [error, setError] = useState(false);
  const [currentProgram, setCurrentProgram] = useState('Cargando...');
  
  // Podcast States
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // URL del stream de radio
  const RADIO_STREAM_URL = "https://hoth.alonhosting.com:4205/stream";

  // Lógica de programación horaria (Solo para Radio)
  const getCurrentProgram = () => {
    const now = new Date();
    const hour = now.getHours();
    if (hour === 6) return 'El Espacio Ranchero';
    if (hour === 7) return 'Noticias ABC Matutino';
    if (hour >= 8 && hour < 11) return 'Cumpleañeros';
    if (hour === 11) return 'El Club de la Amistad';
    if (hour === 12) return 'Noticias ABC Meridiano';
    if (hour >= 14 && hour < 16) return 'Tardes Musicales';
    if (hour >= 20 && hour < 22) return 'Clásicos de Siempre';
    return 'Música Continua';
  };

  useEffect(() => {
    setCurrentProgram(getCurrentProgram());
    const interval = setInterval(() => setCurrentProgram(getCurrentProgram()), 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      const newSrc = audioState.type === 'live' ? RADIO_STREAM_URL : (audioState.data?.audioUrl || '');
      
      if (audioRef.current.src !== newSrc) {
        audioRef.current.src = newSrc;
        audioRef.current.load();
        setError(false);
      }

      if (audioState.isPlaying) {
        audioRef.current.play().catch(e => {
            console.error("Error playing:", e);
            setError(true);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [audioState.type, audioState.data?.audioUrl, audioState.isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const handleTimeUpdate = () => {
    if (audioRef.current && audioState.type === 'podcast') {
      const current = audioRef.current.currentTime;
      const total = audioRef.current.duration;
      if (total) {
          setDuration(total);
          setProgress((current / total) * 100);
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current && audioState.type === 'podcast') {
       const seekTime = (parseFloat(e.target.value) / 100) * duration;
       audioRef.current.currentTime = seekTime;
       setProgress(parseFloat(e.target.value));
    }
  };

  const isPodcast = audioState.type === 'podcast';
  const displayImage = isPodcast ? (audioState.data?.imageUrl || "https://radioabcstereo.com/img/brand.png") : "https://radioabcstereo.com/img/brand.png";
  const displayTitle = isPodcast ? audioState.data?.title : currentProgram;
  const displaySubtitle = isPodcast ? audioState.data?.subtitle : "ABC Stereo 99.7 FM";
  const statusLabel = isPodcast ? 'PODCAST' : (error ? 'OFF' : 'ON AIR');
  const statusColor = isPodcast ? 'bg-abc-blue' : (error ? 'bg-secondary' : 'bg-danger');

  return (
    <div className="fixed-bottom bg-abc-blue border-top border-4 border-abc-red shadow-lg text-white" style={{ zIndex: 1060 }}>
      <audio 
        ref={audioRef} 
        onTimeUpdate={handleTimeUpdate}
        onError={() => setError(true)}
      />
      
      {/* Podcast Progress Bar */}
      {isPodcast && (
        <div className="w-100 bg-white bg-opacity-10 position-absolute top-0 start-0" style={{ height: '4px', marginTop: '-4px' }}>
             <input 
               type="range"
               min="0"
               max="100"
               value={progress}
               onChange={handleSeek}
               className="position-absolute top-0 start-0 w-100 h-100 opacity-0 cursor-pointer"
               style={{ zIndex: 10 }}
             />
            <div 
                className="h-100 bg-abc-red transition-all" 
                style={{ width: `${progress}%` }}
            ></div>
        </div>
      )}
      
      <div className="container py-2">
        <div className="row align-items-center">
          
          {/* Left Section: Info & Integrated Info Trigger */}
          <div className="col-7 col-md-4 d-flex align-items-center gap-3">
            <div className={`d-flex align-items-center justify-content-center bg-white rounded overflow-hidden flex-shrink-0 ${!isPodcast && audioState.isPlaying ? 'pulse-animation' : ''}`} style={{width: '45px', height: '45px'}}>
               <img 
                 src={displayImage} 
                 alt="Cover" 
                 className="w-100 h-100 object-fit-cover"
                 onError={(e) => (e.target as HTMLImageElement).src = 'https://radioabcstereo.com/img/brand.png'}
               />
            </div>
            
            <div className="d-flex flex-column justify-content-center overflow-hidden flex-grow-1">
              <div className="d-flex align-items-center gap-2 mb-1">
                 <span className={`badge rounded-pill ${statusColor} px-1`} style={{fontSize: '0.55rem', padding: '2px 4px'}}>
                  {statusLabel}
                </span>
                <span className="text-white-50 small text-truncate" style={{fontSize: '0.7rem'}}>
                  {displaySubtitle}
                </span>
              </div>
              
              <div className="d-flex align-items-center gap-2">
                 <h6 className="m-0 fw-bold text-abc-gold text-truncate" style={{ fontSize: '0.85rem' }}>
                    {displayTitle}
                 </h6>
                 
                 {/* INTEGRATED INFO BUTTON (Parte estructural del reproductor) */}
                 {isPodcast && onToggleInfo && (
                   <button 
                      onClick={onToggleInfo}
                      className="btn btn-sm btn-outline-light border-0 py-0 px-2 d-flex align-items-center gap-1 rounded-pill bg-white bg-opacity-10 hover-bg-opacity-20 transition"
                      style={{ fontSize: '0.65rem', height: '18px' }}
                      title="Leer transcripción"
                   >
                      <FileText size={10} /> <span>LEER</span> <ChevronUp size={10} />
                   </button>
                 )}
              </div>
            </div>
          </div>

          {/* Center Section: Controls */}
          <div className="col-3 col-md-4 d-flex justify-content-center align-items-center gap-3">
             {isPodcast && (
               <button onClick={() => { if(audioRef.current) audioRef.current.currentTime -= 10; }} className="btn btn-link text-white-50 p-0 d-none d-md-block hover-white">
                 <SkipBack size={20} />
               </button>
             )}

             <button 
               onClick={onTogglePlay}
               className="btn btn-light rounded-circle p-0 d-flex align-items-center justify-content-center hover-scale shadow-sm flex-shrink-0"
               style={{ width: '45px', height: '45px' }}
             >
               {audioState.isPlaying ? (
                 <Pause size={20} className="text-abc-blue" fill="currentColor" />
               ) : (
                 <Play size={20} className="text-abc-blue ps-1" fill="currentColor" />
               )}
             </button>

             {isPodcast && (
               <button onClick={() => { if(audioRef.current) audioRef.current.currentTime += 10; }} className="btn btn-link text-white-50 p-0 d-none d-md-block hover-white">
                 <SkipForward size={20} />
               </button>
             )}
          </div>

          {/* Right Section: Volume */}
          <div className="col-2 col-md-4 d-flex justify-content-end align-items-center gap-2">
            <button 
              onClick={() => setIsMuted(!isMuted)}
              className="btn btn-link text-white-50 p-0 hover-white"
            >
              {isMuted || volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
            <input 
              type="range" 
              min="0" 
              max="1" 
              step="0.01" 
              value={isMuted ? 0 : volume}
              onChange={(e) => { setVolume(parseFloat(e.target.value)); if(parseFloat(e.target.value) > 0) setIsMuted(false); }}
              className="form-range d-none d-md-block" 
              style={{ width: '80px' }}
            />
          </div>
        </div>
      </div>
      
      <style>{`
        .pulse-animation {
          animation: pulse-border 2s infinite;
        }
        @keyframes pulse-border {
          0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7); }
          70% { box-shadow: 0 0 0 5px rgba(255, 255, 255, 0); }
          100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
        }
        .hover-scale { transition: transform 0.2s; }
        .hover-scale:active { transform: scale(0.95); }
        .hover-bg-opacity-20:hover { background-color: rgba(255,255,255,0.2) !important; }
        .cursor-pointer { cursor: pointer; }
      `}</style>
    </div>
  );
}