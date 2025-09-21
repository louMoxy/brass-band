import Link from 'next/link';
import Layout from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import Image from 'next/image';

export default function Index() {
  return (
    <Layout>
      <SEO 
        title="Graiguenamanagh Brass Band - 260+ Years of Music" 
        description="Welcome to the Graiguenamanagh Brass Band, believed to be the oldest continuously performing brass band in Ireland. Founded in 1760, we&apos;ve been making music for over 260 years."
      />
      
      <div className="w-full max-w-5xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gunmetal mb-6">
            Graiguenamanagh Brass Band
        </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-light-sea-green to-air-force-blue mx-auto rounded-full mb-8"></div>
          <p className="text-xl md:text-2xl text-dark-slate-gray mb-8 max-w-3xl mx-auto leading-relaxed">
            <strong className="text-light-sea-green">260+ years</strong> of continuous music making in the heart of Kilkenny
          </p>
          <p className="text-lg text-air-force-blue mb-12 max-w-2xl mx-auto">
            Believed to be the oldest continuously performing brass band in Ireland
          </p>
        </div>

        {/* Featured Image Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-full bg-gradient-to-br from-gunmetal via-dark-slate-gray to-light-sea-green flex items-center justify-center">
                <div className="text-center p-8">
                  <Image src="/images/Band-4.jpeg" alt="Band in Performance" fill={true} />
                </div>
              </div>
            </div>
          </div>

          {/* Welcome Text */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gunmetal mb-6">
              Welcome to Our Musical Community
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-dark-slate-gray">
                On a quiet bend of the River Barrow, in the shadow of a medieval abbey, 
                a remarkable sound has echoed through the centuries. Since 1760, through 
                revolutions, famines, and the rise and fall of empires, we have never missed a beat.
              </p>
              
              <blockquote className="border-l-4 border-light-sea-green pl-6 italic text-xl text-gunmetal bg-light-sky-blue/10 py-4 rounded-r-lg">
                &quot;The band is something alive. It walks with us through the town. 
                It changes. It grows. And it keeps playing.&quot;
              </blockquote>
              
              <p className="text-lg leading-relaxed text-dark-slate-gray">
                From first-time players to seasoned musicians, we welcome all ages and abilities. 
                Whether you want to pick up an instrument, reconnect with your musical roots, 
                or simply enjoy our performances, there&apos;s a place for you here.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Links Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Join Us */}
          <div className="bg-light-sky-blue/20 rounded-xl p-6 border border-air-force-blue/30 hover:bg-light-sky-blue/30 transition-all duration-200 group flex flex-col h-full">
            <div className="text-center flex flex-col h-full">
              <div className="btn-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gunmetal mb-3">Join Our Band</h3>
              <p className="text-dark-slate-gray mb-4 flex-1">
                Monday rehearsals at 7:00 PM. All ages and abilities welcome!
              </p>
              <Link href="/about" className="text-irish-gold hover:text-heritage-red font-medium transition-all duration-200 hover:underline underline-offset-2 hover:scale-105 mt-auto">
                Learn More →
              </Link>
            </div>
          </div>

          {/* Our Music */}
          <div className="bg-light-sky-blue/20 rounded-xl p-6 border border-air-force-blue/30 hover:bg-light-sky-blue/30 transition-all duration-200 group flex flex-col h-full">
            <div className="text-center flex flex-col h-full">
              <div className="btn-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gunmetal mb-3">Our Music</h3>
              <p className="text-dark-slate-gray mb-4 flex-1">
                From classic marches to modern arrangements. Over 500 charts in our library!
              </p>
              <Link href="/music" className="text-irish-gold hover:text-heritage-red font-medium transition-all duration-200 hover:underline underline-offset-2 hover:scale-105 mt-auto">
                Listen Now →
              </Link>
            </div>
          </div>

          {/* Our History */}
          <div className="bg-light-sky-blue/20 rounded-xl p-6 border border-air-force-blue/30 hover:bg-light-sky-blue/30 transition-all duration-200 group md:col-span-2 lg:col-span-1 flex flex-col h-full">
            <div className="text-center flex flex-col h-full">
              <div className="btn-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gunmetal mb-3">Our History</h3>
              <p className="text-dark-slate-gray mb-4 flex-1">
                260+ years of making music. Discover our remarkable journey through time.
              </p>
              <Link href="/history" className="text-irish-gold hover:text-heritage-red font-medium transition-all duration-200 hover:underline underline-offset-2 hover:scale-105 mt-auto">
                Read More →
              </Link>
            </div>
          </div>
        </div>

        {/* Image Gallery Preview */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gunmetal mb-4">
              Moments from Our Musical Journey
            </h3>
            <p className="text-lg text-dark-slate-gray">
              Capturing memories from rehearsals, performances, and community events
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {/* Image 1 */}
            <div className="relative aspect-square w-full max-w-xs mx-auto rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="absolute inset-0 bg-gradient-to-br from-light-sea-green/30 to-air-force-blue/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <Image src="/images/Band-art-1.jpeg" alt="Band in Performance" fill={true} className="object-cover" />
                </div>
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative aspect-square w-full max-w-xs mx-auto rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="absolute inset-0 bg-gradient-to-br from-air-force-blue/30 to-light-sky-blue/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                <Image src="/images/Band-5.jpg" alt="Band in Performance" fill={true} className="object-cover" />
                </div>
              </div>
            </div>

            {/* Image 3 */}
            <div className="relative aspect-square w-full max-w-xs mx-auto rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="absolute inset-0 bg-gradient-to-br from-gunmetal/20 to-dark-slate-gray/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <Image src="/images/Band-2.jpg" alt="Band in Performance" fill={true} className="object-cover" />
                </div>
              </div>
            </div>

            {/* Image 4 */}
            <div className="relative aspect-square w-full max-w-xs mx-auto rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="absolute inset-0 bg-gradient-to-br from-light-sky-blue/30 to-light-sea-green/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                      <Image src="/images/Band-art-2.jpeg" alt="Band in Performance" fill={true} className="object-cover" />     
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link 
              href="/gallery" 
              className="inline-flex items-center text-irish-gold hover:text-heritage-red font-medium transition-all duration-200 hover:underline underline-offset-2 hover:scale-105"
            >
              View Full Gallery
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-gunmetal/5 via-light-sea-green/5 to-air-force-blue/5 rounded-2xl p-8 md:p-12 border border-light-sea-green/30">
          <h3 className="text-3xl font-bold text-gunmetal mb-6">
            Ready to Make Music With Us?
          </h3>
          <p className="text-lg text-dark-slate-gray mb-8 max-w-2xl mx-auto">
            Join a tradition that&apos;s been thriving for over 260 years. Whether you&apos;re a beginner 
            or an experienced musician, we&apos;d love to welcome you to our musical family.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
              <Link
              href="/about" 
              className="btn-gradient inline-flex items-center px-8 py-4 text-white font-semibold rounded-lg text-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              Join the Band
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-warm-cream/80 text-warm-brown font-semibold rounded-lg border border-irish-gold/30 hover:bg-irish-gold/20 hover:shadow-lg transition-all duration-200 hover:scale-105 text-lg"
            >
              Contact Us
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export function getStaticProps() {
  const globalData = getGlobalData();

  return { props: { globalData } };
}
