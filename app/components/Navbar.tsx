'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getBilingualText } from '../../utils/translations';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: getBilingualText('Home'), path: '/', icon: '🏠' },
    { name: getBilingualText(' List'), path: '/vehicles', icon: '🚗' },
    { name: getBilingualText('About'), path: '/about', icon: '📖' },
    { name: getBilingualText('Contact'), path: '/contact', icon: '📞' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className={` top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/98 backdrop-blur-xl shadow-xl border-b border-gray-100' : 'bg-white shadow-md'
    }`} role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-12">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 group" aria-label="YatraWheels homepage">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                Y
              </div>
              <span className="text-2xl font-bold">
                <span className="text-gradient">Yatra</span>
                <span className="text-gray-800">Wheels</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isActive(link.path)
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
                aria-current={isActive(link.path) ? 'page' : undefined}
              >
                <span className="mr-2">{link.icon}</span>
                {link.name}
              </Link>
            ))}
            
            <div className="ml-4 flex items-center gap-3">
              <Link 
                href="/owner/register-vehicle" 
                className="px-5 py-2.5 text-sm font-semibold text-blue-600 border-2 border-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
              >
                List Vehicle
              </Link>
              <Link 
                href="/login" 
                className="btn-primary px-6 py-2.5 text-sm shadow-md"
              >
                {getBilingualText('Login')}
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-xl text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              <svg
                className={`h-6 w-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`} role="dialog" aria-modal="true" aria-label="Mobile navigation menu">
        <div className="px-4 pt-2 pb-4 space-y-2 bg-gradient-to-b from-white to-gray-50 border-t shadow-lg" tabIndex={-1}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                isActive(link.path)
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
              aria-current={isActive(link.path) ? 'page' : undefined}
            >
              <span>{link.icon}</span>
              {link.name}
            </Link>
          ))}
          
          <div className="pt-4 border-t border-gray-200 space-y-3">
            <Link
              href="/owner/register-vehicle"
              className="block w-full text-center px-4 py-3 text-blue-600 font-semibold border-2 border-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              List Your Vehicle
            </Link>
            <Link 
              href="/login" 
              className="block w-full text-center btn-primary py-3 shadow-md"
              onClick={() => setIsMenuOpen(false)}
            >
              {getBilingualText('Login')}
            </Link>
            <Link 
              href="/register" 
              className="block w-full text-center px-4 py-3 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 font-semibold rounded-xl hover:from-gray-200 hover:to-gray-300 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;