import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Upcoming Gigs', href: '/upcoming-gigs' },
    { name: 'About Us & Vacancies', href: '/about' },
    { name: 'Music & Sound Clips', href: '/music' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Our History', href: '/history' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className="w-full bg-warm-brown">
      <div className="max-w-6xl mx-auto">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 transition-all duration-200 hover:scale-105">
            <span className="text-2xl font-bold text-irish-gold hover:text-warm-cream transition-colors duration-200">
              Graig Brass
            </span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-warm-cream"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-warm-cream hover:text-irish-gold transition-all duration-200 hover:scale-105 hover:underline underline-offset-4"
            >
              {item.name}
            </Link>
          ))}
        </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-10"></div>
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-warm-cream px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-warm-brown shadow-xl">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 transition-all duration-200 hover:scale-105">
                <span className="text-2xl font-bold text-irish-gold hover:text-warm-brown transition-colors duration-200">
                  Graig Brass
                </span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-warm-brown"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-warm-brown/20">
                <div className="space-y-2 py-6">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-warm-brown hover:bg-irish-gold/20 transition-all duration-200 hover:scale-105 hover:shadow-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}