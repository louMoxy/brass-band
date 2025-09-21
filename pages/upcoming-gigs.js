import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Link from 'next/link';
import { getGlobalData } from '../utils/global-data';

export default function UpcomingGigs({ globalData }) {
  // Upcoming gigs for 2025 and 2026
  const upcomingGigs = [
    {
      id: 1,
      title: 'Inistioge Performance',
      date: '2025-06-28',
      time: 'TBC',
      location: 'Inistioge, Co. Kilkenny',
      description: 'Join us for a special performance in the picturesque village of Inistioge.',
      type: 'Performance',
      year: '2025'
    },
    {
      id: 2,
      title: 'Graiguenamanagh Regatta',
      date: '2025-08-03',
      time: 'TBC',
      location: 'River Barrow, Graiguenamanagh',
      description: 'Providing musical entertainment for the annual Graiguenamanagh Regatta on the River Barrow.',
      type: 'Community Event',
      year: '2025'
    },
    {
      id: 3,
      title: 'Graiguenamanagh Book Festival',
      date: '2025-08-24',
      time: 'TBC',
      location: 'Graiguenamanagh',
      description: 'Musical performances as part of the Graiguenamanagh Book Festival celebrations.',
      type: 'Festival',
      year: '2025'
    },
    {
      id: 4,
      title: 'Christmas Concert',
      date: '2025-12-15',
      time: 'TBC',
      location: 'TBC',
      description: 'Our beloved annual Christmas concert featuring festive favorites and seasonal arrangements.',
      type: 'Christmas',
      year: '2025'
    },
    {
      id: 5,
      title: 'Spring Concert',
      date: '2026-04-15',
      time: 'TBC',
      location: 'TBC',
      description: 'Welcome spring with our annual spring concert featuring a varied repertoire.',
      type: 'Concert',
      year: '2026'
    }
  ];

  const getEventTypeColor = (type) => {
    const colors = {
      'Performance': 'bg-light-sea-green/20 text-light-sea-green border-light-sea-green/30',
      'Festival': 'bg-air-force-blue/20 text-air-force-blue border-air-force-blue/30',
      'Community Event': 'bg-light-sky-blue/30 text-air-force-blue border-light-sky-blue/50',
      'Concert': 'bg-gunmetal/20 text-gunmetal border-gunmetal/30',
      'Christmas': 'bg-air-force-blue/25 text-gunmetal border-air-force-blue/40'
    };
    return colors[type] || 'bg-gray-100 text-gray-600 border-gray-300';
  };

  // Group events by year
  const eventsByYear = upcomingGigs.reduce((acc, gig) => {
    if (!acc[gig.year]) {
      acc[gig.year] = [];
    }
    acc[gig.year].push(gig);
    return acc;
  }, {});

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IE', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Layout>
      <SEO 
        title={`Upcoming Gigs - ${globalData.name}`} 
        description="See where the Graiguenamanagh Brass Band will be performing next. From Easter services to Christmas concerts, join us for live music throughout the year."
      />
      
      <div className="w-full max-w-6xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gunmetal mb-6">
            Upcoming Gigs
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-light-sea-green to-air-force-blue mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-dark-slate-gray max-w-3xl mx-auto">
            Join us for live performances throughout the year. From traditional religious services 
            to community festivals, we bring music to the heart of Graiguenamanagh.
          </p>
        </div>

        {/* Upcoming Events by Year */}
        <div className="space-y-12 mb-16">
          {Object.keys(eventsByYear).sort().map((year) => (
            <div key={year}>
              {/* Year Header */}
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-gunmetal mb-4">{year}</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-light-sea-green to-air-force-blue mx-auto rounded-full"></div>
              </div>
              
              {/* Events for this year */}
              <div className="space-y-6">
                {eventsByYear[year].map((gig) => (
                  <div
                    key={gig.id}
                    className="bg-white/60 backdrop-blur-lg rounded-xl p-6 md:p-8 border border-air-force-blue/20 shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <h3 className="text-2xl font-bold text-gunmetal">
                            {gig.title}
                          </h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getEventTypeColor(gig.type)}`}>
                            {gig.type}
                          </span>
                        </div>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 text-dark-slate-gray">
                            <svg className="w-5 h-5 text-air-force-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="font-medium">{formatDate(gig.date)}</span>
                          </div>
                          
                          <div className="flex items-center gap-2 text-dark-slate-gray">
                            <svg className="w-5 h-5 text-air-force-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className={gig.time === 'TBC' ? 'italic' : ''}>{gig.time}</span>
                          </div>
                          
                          <div className="flex items-center gap-2 text-dark-slate-gray">
                            <svg className="w-5 h-5 text-air-force-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className={gig.location === 'TBC' ? 'italic' : ''}>{gig.location}</span>
                          </div>
                        </div>
                        
                        <p className="text-dark-slate-gray leading-relaxed">
                          {gig.description}
                        </p>
                        
                        {(gig.time === 'TBC' || gig.location === 'TBC') && (
                          <div className="mt-3 inline-flex items-center text-sm text-air-force-blue">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            More details to be confirmed
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-shrink-0">
                        <div className="bg-light-sea-green/10 rounded-lg p-4 text-center min-w-[120px]">
                          <div className="text-2xl font-bold text-gunmetal">
                            {new Date(gig.date).getDate()}
                          </div>
                          <div className="text-sm text-air-force-blue font-medium">
                            {new Date(gig.date).toLocaleDateString('en-IE', { month: 'short' })}
                          </div>
                          <div className="text-sm text-dark-slate-gray">
                            {new Date(gig.date).getFullYear()}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Book Us Section */}
        <div className="bg-gradient-to-r from-light-sea-green/10 to-air-force-blue/10 rounded-2xl p-8 md:p-12 border border-light-sea-green/30">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gunmetal mb-6">
              Book Us for Your Event
            </h3>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg leading-relaxed text-dark-slate-gray mb-6">
                Looking to add the magic of live brass band music to your special occasion? 
                We&apos;re available for weddings, community events, religious services, and private celebrations.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white/40 rounded-lg p-4">
                  <div className="text-2xl mb-2">🎺</div>
                  <h4 className="font-bold text-gunmetal mb-2">Weddings</h4>
                  <p className="text-sm text-dark-slate-gray">Ceremony music and celebration performances</p>
                </div>
                
                <div className="bg-white/40 rounded-lg p-4">
                  <div className="text-2xl mb-2">🎪</div>
                  <h4 className="font-bold text-gunmetal mb-2">Community Events</h4>
                  <p className="text-sm text-dark-slate-gray">Festivals, parades, and public celebrations</p>
                </div>
                
                <div className="bg-white/40 rounded-lg p-4">
                  <div className="text-2xl mb-2">⛪</div>
                  <h4 className="font-bold text-gunmetal mb-2">Religious Services</h4>
                  <p className="text-sm text-dark-slate-gray">Church services and special ceremonies</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact" 
                className="btn-gradient inline-flex items-center px-6 py-3 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                Book the Band
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link 
                href="/music" 
                className="inline-flex items-center px-6 py-3 bg-warm-cream/80 text-warm-brown font-semibold rounded-lg border border-irish-gold/30 hover:bg-irish-gold/20 hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                Listen to Our Music
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
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
