import { useState } from 'react';
import Layout, { GradientBackground } from '../components/Layout';
import SEO from '../components/SEO';
import { getGlobalData } from '../utils/global-data';

export default function Music({ globalData }) {
  const [currentTrack, setCurrentTrack] = useState(null);

  const tracks = [
    {
      id: 1,
      title: "Graiguenamanagh Brass Band Beatles Medley",
      description: "Graiguenamanagh Brass Band Performing in Duiske Abbey on the 17th of December",
      duration: "3:45",
      audioSrc: "/audio/o-danny-boy.mp3" 
    },
    {
      id: 2,
      title: "Performing in Duiske Abbey",
      description: "Graiguenamanagh Brass Band Performing in Duiske Abbey on the 17th of December",
      duration: "4:12",
      audioSrc: "/audio/rose-of-mooncoin.mp3"
    }
  ];

  const playTrack = (track) => {
    setCurrentTrack(track);
  };

  return (
    <Layout>
      <SEO 
        title={`Music & Sound Clips - ${globalData.name}`} 
        description="Listen to the varied repertoire of Graiguenamanagh Brass Band, from classic marches to contemporary arrangements."
      />
      
      <div className="w-full max-w-6xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gunmetal mb-6">
            Music & Sound Clips
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-light-sea-green to-air-force-blue mx-auto rounded-full"></div>
        </div>

        {/* Repertoire Description */}
        <div className="mb-16">
          <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-air-force-blue/20 shadow-lg">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gunmetal mb-8 text-center">
                Our Repertoire
              </h2>
              
              <div className="prose prose-lg max-w-none text-center">
                <p className="text-lg leading-relaxed text-dark-slate-gray mb-6">
                  Spanning several decades and many styles, the band's repertoire is ever growing with 
                  <span className="font-semibold text-light-sea-green"> over 500 charts</span> in our library.
                </p>
                
                <p className="text-lg leading-relaxed text-dark-slate-gray mb-6">
                  From the classic marches of the 1940s through to current day brass band charts, we have a 
                  varied and contemporary repertoire covering the styles of 
                  <span className="font-semibold text-air-force-blue"> military, swing, Latin and funk</span>.
                </p>
                
                <blockquote className="border-l-4 border-light-sea-green pl-6 my-8 italic text-xl text-gunmetal bg-light-sky-blue/10 py-6 rounded-r-lg">
                  "It's not unusual to hear a medley that jumps from 'O Danny Boy' to Coldplay — 
                  with a stop at 'The Rose of Mooncoin' along the way."
                </blockquote>
              </div>
            </div>
          </div>
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
                    {currentTrack?.id === track.id ? (
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
                        style={{ width: currentTrack?.id === track.id ? '35%' : '0%' }}
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
            <div className="flex items-center justify-between max-w-6xl mx-auto">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setCurrentTrack(null)}
                  className="btn-gradient flex items-center justify-center w-12 h-12 rounded-full text-white"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
                
                <div>
                  <h4 className="font-bold text-gunmetal">{currentTrack.title}</h4>
                  <p className="text-dark-slate-gray text-sm">{currentTrack.description}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-air-force-blue text-sm font-medium">
                  0:00 / {currentTrack.duration}
                </span>
                <button
                  onClick={() => setCurrentTrack(null)}
                  className="text-gunmetal hover:text-light-sea-green transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
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
          <a 
            href="/upcoming-gigs" 
            className="btn-gradient inline-flex items-center px-6 py-3 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
          >
            View Upcoming Gigs
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
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
