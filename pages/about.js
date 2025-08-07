import Layout, { GradientBackground } from '../components/Layout';
import SEO from '../components/SEO';
import Link from 'next/link';
import { getGlobalData } from '../utils/global-data';

export default function About({ globalData }) {
  return (
    <Layout>
      <SEO 
        title={`About Us & Vacancies - ${globalData.name}`} 
        description="Learn about the Graiguenamanagh Brass Band and current vacancies for musicians of all abilities."
      />
      
      <div className="w-full max-w-4xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About Us
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-gradient-3 to-gradient-4 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-dark-slate-gray">
                The Graiguenamanagh Brass Band is more than music — it&apos;s a living part of our town. 
                From first-time players to seasoned musicians, we welcome all ages and abilities to 
                share in something truly special.
              </p>
              
              <blockquote className="border-l-4 border-light-sea-green pl-6 my-8 italic text-xl text-gunmetal bg-light-sky-blue/10 py-4 rounded-r-lg">
                &quot;The band is something alive. It walks with us through the town. It changes. 
                It grows. And it keeps playing.&quot;
              </blockquote>
              
              <p className="text-lg leading-relaxed text-dark-slate-gray">
                Whether you want to pick up an instrument, reconnect with your musical roots, or 
                enjoy powerful performances throughout the year, there&apos;s a place for you here. 
                Come be part of the tradition that&apos;s shaping the future — one note at a time.
              </p>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="w-full h-full bg-gradient-to-br from-gunmetal via-dark-slate-gray to-light-sea-green flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <svg className="w-16 h-16 mx-auto mb-4 opacity-80" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm opacity-90">Add your band image here</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vacancies Section */}
        <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-air-force-blue/20 shadow-lg">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gunmetal mb-4">
              Join Our Band
            </h2>
            <p className="text-lg text-dark-slate-gray">
              All are welcome — particularly musicians who play:
            </p>
          </div>

          {/* Instruments Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { name: 'Cornets', icon: '🎺' },
              { name: 'Tenor, Baritone & Flugel Horns', icon: '🎺' },
              { name: 'Euphoniums', icon: '🎺' },
              { name: 'Tenor & Bass Trombones', icon: '🎺' },
              { name: 'Basses (Eb and Bb tubas)', icon: '🎺' },
              { name: 'Percussionists', icon: '🥁' },
            ].map((instrument, index) => (
              <div 
                key={index}
                className="bg-light-sky-blue/20 rounded-xl p-6 text-center hover:bg-light-sky-blue/30 transition-colors duration-200 border border-air-force-blue/30 shadow-sm flex flex-col h-full"
              >
                <div className="text-3xl mb-3 flex-1 flex items-center justify-center">{instrument.icon}</div>
                <h3 className="font-semibold text-gunmetal text-sm mt-auto">
                  {instrument.name}
                </h3>
              </div>
            ))}
          </div>

          {/* Rehearsal Info */}
          <div className="text-center bg-gradient-to-r from-light-sea-green/20 to-air-force-blue/20 rounded-xl p-8 border border-light-sea-green/30">
            <h3 className="text-2xl font-bold text-gunmetal mb-4">
              Rehearsals
            </h3>
            <div className="space-y-2">
              <p className="text-lg font-semibold text-dark-slate-gray">
                Mondays at 7:00 PM
              </p>
              <p className="text-air-force-blue">
                Graiguenamanagh Band Room
              </p>
            </div>
            <div className="mt-6">
              <Link 
                href="/contact" 
                className="btn-gradient inline-flex items-center px-6 py-3 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                Get in Touch
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
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
