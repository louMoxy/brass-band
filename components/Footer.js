import Link from 'next/link';

export default function Footer({ copyrightText }) {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Music', href: '/music' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Our History', href: '/history' },
    { name: 'Upcoming Gigs', href: '/upcoming-gigs' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/people/Graignamanagh-Brass-Band-Established-1760/100090331908692/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-warm-brown text-warm-cream w-full">
      <div className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Band Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-irish-gold mb-4">
              Graiguenamanagh Brass Band
            </h3>
            <p className="text-warm-cream/90 mb-4 leading-relaxed">
              Ireland's oldest continuously performing brass band, making music for over 260 years 
              in the heart of Kilkenny.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-irish-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Graiguenamanagh, Co. Kilkenny, Ireland</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-irish-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Rehearsals: Mondays at 7:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-irish-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                                         <Link 
                         href={link.href}
                         className="text-warm-cream/80 hover:text-irish-gold transition-all duration-200 text-sm hover:underline underline-offset-2 hover:scale-105"
                       >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h4 className="text-lg font-bold text-irish-gold mb-4">Connect With Us</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                                             className="w-10 h-10 bg-deep-forest/30 rounded-lg flex items-center justify-center text-warm-cream/80 hover:bg-irish-gold hover:text-warm-brown transition-all duration-200 hover:scale-110 hover:shadow-lg hover:rotate-6"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              
              <div className="text-sm">
                <p className="text-warm-cream/80 mb-2">Join Our Band</p>
                                     <Link 
                       href="/about"
                       className="btn-gradient inline-flex items-center px-4 py-2 text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:scale-105"
                     >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

          {/* Bottom Bar */}
          <div className="border-t border-deep-forest/30 pt-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="text-sm text-warm-cream/80">
                <p>&copy; {currentYear} Graiguenamanagh Brass Band. All rights reserved.</p>
                {copyrightText && (
                  <p className="mt-1 opacity-75">{copyrightText}</p>
                )}
              </div>
              
              <div className="text-sm text-warm-cream/80">
                <p>Founded in 1760 • 260+ Years of Music</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
