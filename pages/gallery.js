import { useState } from 'react';
import Layout, { GradientBackground } from '../components/Layout';
import SEO from '../components/SEO';
import { getGlobalData } from '../utils/global-data';

export default function Gallery({ globalData }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample gallery images - replace with your actual images
  const galleryImages = [
    {
      id: 1,
      src: '/images/gallery/performance-1.jpg',
      alt: 'Band performing at local festival',
      title: 'Summer Festival Performance',
      category: 'performances',
      description: 'The band performing at the annual Graiguenamanagh Summer Festival'
    },
    {
      id: 2,
      src: '/images/gallery/rehearsal-1.jpg',
      alt: 'Band rehearsal session',
      title: 'Monday Night Rehearsal',
      category: 'rehearsals',
      description: 'Weekly rehearsal in the Graiguenamanagh Band Room'
    },
    {
      id: 3,
      src: '/images/gallery/parade-1.jpg',
      alt: 'Band marching in parade',
      title: 'St. Patrick\'s Day Parade',
      category: 'parades',
      description: 'Leading the annual St. Patrick\'s Day parade through town'
    },
    {
      id: 4,
      src: '/images/gallery/instruments-1.jpg',
      alt: 'Collection of brass instruments',
      title: 'Our Brass Collection',
      category: 'instruments',
      description: 'A selection of our cornets, trumpets, and brass instruments'
    },
    {
      id: 5,
      src: '/images/gallery/performance-2.jpg',
      alt: 'Evening concert performance',
      title: 'Evening Concert',
      category: 'performances',
      description: 'Outdoor evening concert in the town square'
    },
    {
      id: 6,
      src: '/images/gallery/group-photo.jpg',
      alt: 'Full band group photo',
      title: 'Band Group Photo 2024',
      category: 'group',
      description: 'Our complete band lineup for 2024'
    },
    {
      id: 7,
      src: '/images/gallery/competition-1.jpg',
      alt: 'Band at competition',
      title: 'Regional Competition',
      category: 'competitions',
      description: 'Competing at the regional brass band championships'
    },
    {
      id: 8,
      src: '/images/gallery/rehearsal-2.jpg',
      alt: 'Conductor leading rehearsal',
      title: 'Conductor in Action',
      category: 'rehearsals',
      description: 'Our conductor working with the brass section'
    },
    {
      id: 9,
      src: '/images/gallery/parade-2.jpg',
      alt: 'Band in Christmas parade',
      title: 'Christmas Parade',
      category: 'parades',
      description: 'Spreading Christmas cheer through the streets'
    },
    {
      id: 10,
      src: '/images/gallery/instruments-2.jpg',
      alt: 'Tuba and euphonium section',
      title: 'Low Brass Section',
      category: 'instruments',
      description: 'Our powerful tuba and euphonium instruments'
    },
    {
      id: 11,
      src: '/images/gallery/performance-3.jpg',
      alt: 'Wedding performance',
      title: 'Wedding Ceremony',
      category: 'performances',
      description: 'Providing music for a local wedding celebration'
    },
    {
      id: 12,
      src: '/images/gallery/youth-band.jpg',
      alt: 'Young musicians learning',
      title: 'Youth Development',
      category: 'group',
      description: 'Teaching the next generation of brass musicians'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Photos', count: galleryImages.length },
    { id: 'performances', name: 'Performances', count: galleryImages.filter(img => img.category === 'performances').length },
    { id: 'rehearsals', name: 'Rehearsals', count: galleryImages.filter(img => img.category === 'rehearsals').length },
    { id: 'parades', name: 'Parades', count: galleryImages.filter(img => img.category === 'parades').length },
    { id: 'instruments', name: 'Instruments', count: galleryImages.filter(img => img.category === 'instruments').length },
    { id: 'group', name: 'Group Photos', count: galleryImages.filter(img => img.category === 'group').length },
    { id: 'competitions', name: 'Competitions', count: galleryImages.filter(img => img.category === 'competitions').length }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <Layout>
      <SEO 
        title={`Gallery - ${globalData.name}`} 
        description="Browse photos from Graiguenamanagh Brass Band performances, rehearsals, parades, and special events."
      />
      
      <div className="w-full max-w-7xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gunmetal mb-6">
            Gallery
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-light-sea-green to-air-force-blue mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-dark-slate-gray max-w-3xl mx-auto">
            Explore moments from our performances, rehearsals, parades, and community events. 
            See the passion and dedication that makes our brass band special.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'btn-gradient text-white shadow-lg'
                    : 'bg-light-sky-blue/20 text-gunmetal hover:bg-light-sky-blue/30 border border-air-force-blue/30'
                }`}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => openLightbox(image)}
            >
              <div className="relative aspect-square bg-gradient-to-br from-light-sky-blue/30 to-air-force-blue/20">
                {/* Placeholder for actual images */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <svg className="w-12 h-12 mx-auto mb-3 text-air-force-blue opacity-60" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                    <h3 className="font-semibold text-gunmetal text-sm mb-1">{image.title}</h3>
                    <p className="text-dark-slate-gray text-xs">{image.category}</p>
                  </div>
                </div>
                
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
            If you've captured moments from our performances or events, we'd love to feature them in our gallery!
          </p>
          <a 
            href="/contact" 
            className="btn-gradient inline-flex items-center px-6 py-3 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
          >
            Contact Us
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image and info */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-light-sky-blue/30 to-air-force-blue/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <svg className="w-16 h-16 mx-auto mb-4 text-white opacity-60" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  <p className="text-white opacity-80">Image placeholder - {selectedImage.title}</p>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{selectedImage.title}</h3>
                <p className="text-light-sky-blue">{selectedImage.description}</p>
              </div>
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
