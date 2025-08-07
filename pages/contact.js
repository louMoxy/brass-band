import { useState } from 'react';
import Layout, { GradientBackground } from '../components/Layout';
import SEO from '../components/SEO';
import Link from 'next/link';
import { getGlobalData } from '../utils/global-data';

export default function Contact({ globalData }) {
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormStatus('');

    const myForm = event.target;
    const formData = new FormData(myForm);

    try {
      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
      });
      
      setFormStatus('success');
      myForm.reset();
    } catch (error) {
      setFormStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEO 
        title={`Contact Us - ${globalData.name}`} 
        description="Get in touch with the Graiguenamanagh Brass Band. Join us, book us for events, or share your photos and memories."
      />
      
      <div className="w-full max-w-6xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gunmetal mb-6">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-light-sea-green to-air-force-blue mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-dark-slate-gray max-w-3xl mx-auto">
            Get in touch with us! Whether you&apos;re interested in joining the band, booking us for an event, 
            or just want to share your love of brass band music, we&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gunmetal mb-8">
              Get In Touch
            </h2>
            
            <div className="space-y-8">
              {/* Rehearsals */}
              <div className="bg-white/60 backdrop-blur-lg rounded-xl p-6 border border-air-force-blue/20 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="btn-gradient flex items-center justify-center w-12 h-12 rounded-full text-white flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gunmetal mb-2">
                      Rehearsals
                    </h3>
                    <p className="text-dark-slate-gray mb-1">
                      <strong>Mondays at 7:00 PM</strong>
                    </p>
                    <p className="text-air-force-blue">
                      Graiguenamanagh Band Room
                    </p>
                    <p className="text-dark-slate-gray text-sm mt-2">
                      New members always welcome! Just turn up on a Monday evening.
                    </p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white/60 backdrop-blur-lg rounded-xl p-6 border border-air-force-blue/20 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="btn-gradient flex items-center justify-center w-12 h-12 rounded-full text-white flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gunmetal mb-2">
                      Find Us
                    </h3>
                    <p className="text-dark-slate-gray">
                      Graiguenamanagh, Co. Kilkenny, Ireland
                    </p>
                    <p className="text-air-force-blue">
                      On the banks of the River Barrow
                    </p>
                    <p className="text-dark-slate-gray text-sm mt-2">
                      In the shadow of the medieval abbey
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white/60 backdrop-blur-lg rounded-xl p-6 border border-air-force-blue/20 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="btn-gradient flex items-center justify-center w-12 h-12 rounded-full text-white flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V3a1 1 0 011 1v14a1 1 0 01-1 1H8a1 1 0 01-1-1V4a1 1 0 011-1h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gunmetal mb-2">
                      Stay Connected
                    </h3>
                    <div className="space-y-2">
                      <a href="https://www.facebook.com/people/Graignamanagh-Brass-Band-Established-1760/100090331908692/" className="flex items-center text-irish-gold hover:text-heritage-red transition-all duration-200 hover:underline underline-offset-2 hover:scale-105">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        Like us on Facebook
                      </a>
                      <a href="#" className="flex items-center text-irish-gold hover:text-heritage-red transition-all duration-200 hover:underline underline-offset-2 hover:scale-105">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                        Follow us on Instagram
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gunmetal mb-8">
              Send Us a Message
            </h2>

            {/* Success/Error Messages */}
            {formStatus === 'success' && (
              <div className="mb-6 p-4 bg-light-sea-green/10 border border-light-sea-green/30 rounded-lg">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-light-sea-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gunmetal font-medium">Thank you for your message! We&apos;ll get back to you soon.</p>
                </div>
              </div>
            )}

            {formStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <p className="text-red-700 font-medium">There was an error sending your message. Please try again.</p>
                </div>
              </div>
            )}

            {/* Netlify Form */}
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              onSubmit={handleSubmit}
              className="bg-white/60 backdrop-blur-lg rounded-xl p-8 border border-air-force-blue/20 shadow-sm"
            >
              {/* Hidden input for Netlify */}
              <input type="hidden" name="form-name" value="contact" />
              
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gunmetal mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-air-force-blue/30 rounded-lg focus:ring-2 focus:ring-light-sea-green/50 focus:border-light-sea-green transition-colors bg-white/80"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gunmetal mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-air-force-blue/30 rounded-lg focus:ring-2 focus:ring-light-sea-green/50 focus:border-light-sea-green transition-colors bg-white/80"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gunmetal mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-air-force-blue/30 rounded-lg focus:ring-2 focus:ring-light-sea-green/50 focus:border-light-sea-green transition-colors bg-white/80"
                    placeholder="Your phone number"
                  />
                </div>


                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gunmetal mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-air-force-blue/30 rounded-lg focus:ring-2 focus:ring-light-sea-green/50 focus:border-light-sea-green transition-colors bg-white/80 resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-gradient text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Send Message
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </span>
                  )}
                </button>

                <p className="text-sm text-dark-slate-gray text-center">
                  * Required fields
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Additional Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-light-sea-green/10 to-air-force-blue/10 rounded-2xl p-8 border border-light-sea-green/30">
          <h3 className="text-2xl font-bold text-gunmetal mb-4">
            Ready to Make Music?
          </h3>
          <p className="text-dark-slate-gray mb-6 max-w-2xl mx-auto">
            The best way to get involved is to join us for a Monday night rehearsal. 
            No experience necessary - we welcome musicians of all abilities!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/about" 
              className="btn-gradient inline-flex items-center px-6 py-3 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              Learn More About Joining
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
