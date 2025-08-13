import { useState } from 'react';
import Layout, { GradientBackground } from '../components/Layout';
import SEO from '../components/SEO';
import Link from 'next/link';
import { getGlobalData } from '../utils/global-data';
import Image from 'next/image';

export default function Gallery({ globalData }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: '/images/Band-art-1.jpeg',
      alt: 'Band in Performance',
    },
    {
      id: 2,
      src: '/images/Band-art-2.jpeg',
      alt: 'Band in Performance',
    },
    {
      id: 3,
      src: '/images/Band-art-3.jpeg',
      alt: 'Band in Performance',
    },
    {
      id: 4,
      src: '/images/Band-art-4.jpeg',
      alt: 'Band in Performance',
    },
    {
      id: 5,
      src: '/images/Band-2.jpg',
      alt: 'Band in Performance',
    },
    {
      id: 6,
      src: '/images/Band-4.jpeg',
      alt: 'Band in Performance',
    },
    {
      id: 7,
      src: '/images/Band-5.jpg',
      alt: 'Band in Performance',
    },
    {
      id: 8,
      src: '/images/Band-6.jpeg',
      alt: 'Band in Performance',
    },
    {
      id: 9,
      src: '/images/Denise.jpg',
      alt: 'Denise',
    }
  ];



  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
  };

  return (
    <Layout>
      <SEO 
        title={`Gallery - ${globalData.name}`} 
        description="Browse photos from Graiguenamanagh Brass Band performances, rehearsals, parades, and special events."
      />
      
      <div className="w-full max-w-7xl mx-auto px-6 py-12">
        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => openLightbox(image)}
            >
              <div className="relative aspect-square bg-gradient-to-br from-light-sky-blue/30 to-air-force-blue/20">
                {/* Placeholder for actual images */}
                <Image src={image.src} alt={image.alt} fill={true} className="object-cover" />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gunmetal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-sm mb-1">{image.title}</h3>
                    <p className="text-light-sky-blue text-xs">{image.description}</p>
                  </div>
                </div>

                {/* View icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 rounded-full p-2">
                    <svg className="w-4 h-4 text-gunmetal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Upload Prompt */}
        <div className="text-center bg-gradient-to-r from-light-sea-green/10 to-air-force-blue/10 rounded-2xl p-8 border border-light-sea-green/30">
          <h3 className="text-2xl font-bold text-gunmetal mb-4">
            Have Photos to Share?
          </h3>
          <p className="text-dark-slate-gray mb-6 max-w-2xl mx-auto">
            If you&apos;ve captured moments from our performances or events, we&apos;d love to feature them in our gallery!
          </p>
          <Link 
            href="/contact" 
            className="btn-gradient inline-flex items-center px-6 py-3 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
          >
            Contact Us
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-8">
          <div className="relative w-full h-full max-w-7xl max-h-full">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-20 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image container - takes up most of the screen */}
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                fill={true} 
                className="object-contain" 
                priority
              />
            </div>
          </div>
        </div>
      )}

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
