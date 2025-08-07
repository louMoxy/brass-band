import Layout, { GradientBackground } from '../components/Layout';
import SEO from '../components/SEO';
import Link from 'next/link';
import { getGlobalData } from '../utils/global-data';

export default function History({ globalData }) {
  const timelineEvents = [
    {
      year: '1760',
      era: 'Foundation',
      title: 'The Beginning',
      description: 'The Graiguenamanagh Brass Band is founded, marking the start of what is believed to be the oldest continuously performing brass band in Ireland.',
      details: 'No written charter marks its founding. Instead, the story has been passed from player to player, father to son, mother to daughter.'
    },
    {
      year: '1820s',
      era: 'Early Years',
      title: 'Establishing Tradition',
      description: 'Local records show the band was already performing regularly, becoming a staple at public readings, church gatherings, and town fairs.',
      details: 'Long before Ireland was a nation, the band was already part of the fabric of Graig, with families having five generations of band members.',
    },
    {
      year: '1840s',
      era: 'Mid-19th Century',
      title: 'Civic Recognition',
      description: 'The band plays for major civic and religious events. Surviving journals tell of performances for the Graiguenamanagh Reading Society.',
      details: 'During the Great Famine, the band continued to play at church services and funerals, offering musical resilience as hardship gripped the region.'
    },
    {
      year: '1912',
      era: 'Early 20th Century',
      title: 'Titanic Memorial',
      description: 'Under band leader Willie Flood, the band solemnly played the &quot;Dead March&quot; through the town after the sinking of the Titanic.',
      details: 'Willie Flood joined in the early 1900s and remained involved for most of his life. This moment is still remembered in local lore.'
    },
    {
      year: '1920s',
      era: 'Independence Era',
      title: 'Through the Upheavals',
      description: 'Through the upheavals of Irish independence, the band marched on, playing at both nationalist gatherings and community processions.',
      details: 'The band remained, above all, a band for the people of Graig, careful to serve the entire community.'
    },
    {
      year: '1950',
      era: 'Mid-20th Century',
      title: 'Mount Brandon Performance',
      description: 'For the Marian Year, the band climbed Mount Brandon to play beneath a newly raised wooden cross.',
      details: '&quot;We weren&apos;t tired; we were young and full of craic,&quot; recalled Noel Coady, who played second cornet as a teenager that year.'
    },
    {
      year: '1970s-80s',
      era: 'Challenging Times',
      title: 'Keeping the Dream Alive',
      description: 'Numbers dwindled, and at times only a handful of players turned up to rehearsals. But the band never folded.',
      details: '&quot;There was always someone who would turn the key in the door. Even if it was just a few of us, we kept it going.&quot;'
    },
    {
      year: '2014',
      era: 'Modern Revival',
      title: 'New Rehearsal Space',
      description: 'A new rehearsal space was officially opened by then-Minister Phil Hogan, who praised the band as &quot;a vital part of our heritage.&quot;',
      details: 'The 21st century has seen a quiet revival, with support from local arts groups and a fiercely loyal community.'
    },
    {
      year: '2024',
      era: 'Present Day',
      title: '260+ Years Strong',
      description: 'The band now includes players from age 9 to over 90, playing at over 30 events a year.',
      details: 'Monday night rehearsals are again lively affairs. The repertoire spans from traditional marches to modern arrangements.'
    }
  ];

  return (
    <Layout>
      <SEO 
        title={`Our History - ${globalData.name}`} 
        description="Discover the remarkable 260+ year history of the Graiguenamanagh Brass Band, believed to be the oldest continuously performing brass band in Ireland."
      />
      
      <div className="w-full max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gunmetal mb-6">
            Our History
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-light-sea-green to-air-force-blue mx-auto rounded-full mb-8"></div>
          
          <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-air-force-blue/20 shadow-lg max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gunmetal mb-6">
              In a Kilkenny Town, the Brass Keeps Playing After 260 Years
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-dark-slate-gray mb-6">
                <strong className="text-light-sea-green">Graiguenamanagh, Ireland</strong> — On a quiet bend of the River Barrow, 
                in the shadow of a medieval abbey, a remarkable sound has echoed through the centuries.
              </p>
              
              <p className="text-lg leading-relaxed text-dark-slate-gray mb-6">
                The Graiguenamanagh Brass Band, founded in <strong className="text-air-force-blue">1760</strong> in this small Kilkenny town, 
                is widely believed to be the <strong className="text-light-sea-green">oldest continuously performing brass band in Ireland</strong> — 
                and perhaps the British Isles. For more than 260 years, through revolutions, famines, and the rise and fall of empires, 
                it has never missed a beat.
              </p>
              
              <blockquote className="border-l-4 border-light-sea-green pl-6 my-8 italic text-xl text-gunmetal bg-light-sky-blue/10 py-6 rounded-r-lg">
                &quot;People say tradition is something fixed, but for us, it&apos;s something alive. 
                It walks with us through the town. It changes. It grows. And it keeps playing.&quot;
              </blockquote>
            </div>
          </div>
        </div>



        {/* Timeline Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gunmetal mb-12 text-center">
            260+ Years of Music
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-light-sea-green via-air-force-blue to-light-sea-green"></div>
            
            {timelineEvents.map((event, index) => (
              <div key={event.year} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}>
                {/* Timeline dot */}
                <div className={`absolute w-4 h-4 bg-light-sea-green rounded-full border-4 border-white shadow-lg ${
                  index % 2 === 0 ? 'left-6 md:right-0 md:left-auto md:-mr-2' : 'left-6 md:left-0 md:-ml-2'
                }`}></div>
                
                {/* Content card */}
                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="bg-white/60 backdrop-blur-lg rounded-xl p-6 border border-air-force-blue/20 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="btn-gradient text-white text-sm font-bold px-3 py-1 rounded-full">
                        {event.year}
                      </span>
                      <span className="text-air-force-blue text-sm font-medium">
                        {event.era}
                      </span>
                    </div>
                    
                    <h4 className="text-xl font-bold text-gunmetal mb-3">
                      {event.title}
                    </h4>
                    
                    <p className="text-dark-slate-gray mb-4">
                      {event.description}
                    </p>
                    
                    <div className="bg-light-sky-blue/10 rounded-lg p-4 border-l-4 border-light-sea-green">
                      <p className="text-gunmetal text-sm italic">
                        {event.details}
                      </p>
                    </div>
                    

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legacy Section */}
        <div className="bg-gradient-to-r from-gunmetal/5 via-light-sea-green/5 to-air-force-blue/5 rounded-2xl p-8 md:p-12 border border-light-sea-green/30">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gunmetal mb-6">
              The Sound of Home
            </h3>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-dark-slate-gray mb-6">
                Ask any local, and they&apos;ll tell you: the Graiguenamanagh Brass Band is more than just music. 
                <strong className="text-light-sea-green"> It&apos;s the sound of home.</strong>
              </p>
              
              <p className="text-lg leading-relaxed text-dark-slate-gray mb-8">
                The repertoire has expanded too. Alongside marches and hymns are modern arrangements and Irish ballads. 
                It&apos;s not unusual to hear a medley that jumps from &quot;O Danny Boy&quot; to Coldplay — 
                with a stop at &quot;The Rose of Mooncoin&quot; along the way.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/about" 
                className="btn-gradient inline-flex items-center px-6 py-3 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                Join Our Legacy
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link 
                href="/music" 
                className="inline-flex items-center px-6 py-3 bg-warm-cream/80 text-warm-brown font-semibold rounded-lg border border-irish-gold/30 hover:bg-irish-gold/20 hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                Hear Our Music
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
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
