import { useState, useRef, useEffect } from 'react';
import Layout, { GradientBackground } from '../components/Layout';
import SEO from '../components/SEO';
import Link from 'next/link';
import { getGlobalData } from '../utils/global-data';

export default function Music({ globalData }) {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const tracks = [
    {
      id: 1,
      title: "Blue Bayou",
      duration: "0:50",
      audioSrc: "/audio/Blue-Bayou.mp3" 
    },
    {
      id: 2,
      title: "March",
      duration: "1:05",
      audioSrc: "/audio/March.mp3"
    },
    {
      id: 3,
      title: "Yesterday",
      duration: "1:12",
      audioSrc: "/audio/Yesterday.mp3"
    }
  ];

  // Audio control functions
  const playTrack = (track) => {
    if (currentTrack?.id === track.id) {
      // Toggle play/pause for current track
      if (isPlaying) {
        audioRef.current?.pause();
      } else {
        audioRef.current?.play();
      }
    } else {
      // Play new track
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  };

  const stopTrack = () => {
    audioRef.current?.pause();
    setCurrentTrack(null);
    setIsPlaying(false);
    setCurrentTime(0);
  };

  // Audio event handlers
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentTrack]);

  // Auto-play when track changes
  useEffect(() => {
    if (currentTrack && audioRef.current) {
      audioRef.current.src = currentTrack.audioSrc;
      audioRef.current.load();
      audioRef.current.play().catch(console.error);
    }
  }, [currentTrack]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSeek = (event) => {
    if (!audioRef.current || duration === 0) return;
    
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const percentage = x / rect.width;
    const newTime = percentage * duration;
    
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <Layout>
      <SEO 
        title={`Music & Sound Clips - ${globalData.name}`} 
      />
      
      <div className="w-full max-w-6xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gunmetal mb-6">
            Music & Sound Clips
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-light-sea-green to-air-force-blue mx-auto rounded-full"></div>
        </div>

        {/* Audio Tracks Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gunmetal mb-8 text-center">
            Listen to Our Music
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tracks.map((track) => (
              <div 
                key={track.id}
                className="bg-light-sky-blue/20 rounded-xl p-6 border border-air-force-blue/30 shadow-sm hover:shadow-md transition-all duration-200 hover:bg-light-sky-blue/30 flex flex-col h-full"
              >
                <div className="flex-1 flex flex-col">
                  <h3 className="font-bold text-gunmetal text-lg mb-2">
                    {track.title}
                  </h3>
                  <p className="text-dark-slate-gray text-sm mb-3 flex-1">
                    {track.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-air-force-blue text-sm font-medium">
                      {track.duration}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 mt-4">
                  <button
                    onClick={() => playTrack(track)}
                    className="btn-gradient flex items-center justify-center w-12 h-12 rounded-full text-white hover:scale-105 transition-transform duration-200"
                    aria-label={`Play ${track.title}`}
                  >
                    {currentTrack?.id === track.id && isPlaying ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                  
                  <div className="flex-1">
                    <div className="text-sm text-gunmetal font-medium mb-1">
                      {currentTrack?.id === track.id ? 'Now Playing' : 'Ready to Play'}
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-light-sea-green to-air-force-blue h-2 rounded-full transition-all duration-300"
                        style={{ 
                          width: currentTrack?.id === track.id && duration > 0 
                            ? `${(currentTime / duration) * 100}%` 
                            : '0%' 
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Track Player */}
        {currentTrack && (
          <div className="fixed bottom-6 left-6 right-6 bg-white/95 backdrop-blur-lg rounded-2xl p-6 border border-air-force-blue/30 shadow-2xl z-50">
            <div className="max-w-6xl mx-auto">
              {/* Top Row - Track Info and Controls */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => playTrack(currentTrack)}
                    className="btn-gradient flex items-center justify-center w-12 h-12 rounded-full text-white"
                  >
                    {isPlaying ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                  
                  <div>
                    <h4 className="font-bold text-gunmetal">{currentTrack.title}</h4>
                    <p className="text-dark-slate-gray text-sm">Graiguenamanagh Brass Band</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="text-air-force-blue text-sm font-medium">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                  <button
                    onClick={stopTrack}
                    className="text-gunmetal hover:text-light-sea-green transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full relative">
                <div 
                  className="w-full bg-gray-200 rounded-full h-3 cursor-pointer hover:bg-gray-300 transition-colors"
                  onClick={handleSeek}
                >
                  <div 
                    className="bg-gradient-to-r from-light-sea-green to-air-force-blue h-3 rounded-full transition-all duration-200"
                    style={{ 
                      width: duration > 0 ? `${(currentTime / duration) * 100}%` : '0%' 
                    }}
                  >
                  </div>
                </div>
                {/* Playhead - positioned absolutely relative to the progress bar container */}
                <div 
                  className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-5 h-5 bg-white rounded-full shadow-lg border-3 border-air-force-blue transition-all duration-200 hover:scale-110 cursor-pointer z-10"
                  style={{ 
                    left: duration > 0 ? `${(currentTime / duration) * 100}%` : '0%' 
                  }}
                  onClick={handleSeek}
                >
                  {/* Inner dot for better visibility */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-air-force-blue rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-light-sea-green/10 to-air-force-blue/10 rounded-2xl p-8 border border-light-sea-green/30">
          <h3 className="text-2xl font-bold text-gunmetal mb-4">
            Want to Hear Us Live?
          </h3>
          <p className="text-dark-slate-gray mb-6 max-w-2xl mx-auto">
            Check out our upcoming performances and events. Nothing beats the experience of live brass band music!
          </p>
          <Link 
            href="/upcoming-gigs" 
            className="btn-gradient inline-flex items-center px-6 py-3 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
          >
            View Upcoming Gigs
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20"
      />
      
      {/* Hidden audio element */}
      <audio ref={audioRef} preload="metadata" />
    </Layout>
  );
}

export function getStaticProps() {
  const globalData = getGlobalData();
  
  return { 
    props: { 
      globalData 
    } 
  };
}
