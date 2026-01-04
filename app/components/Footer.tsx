import Link from 'next/link';
import { getBilingualText } from '../../utils/translations';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: getBilingualText('Home'), path: '/' },
      { name: getBilingualText('Vehicles List'), path: '/vehicles' },
      { name: getBilingualText('About'), path: '/about' },
      { name: getBilingualText('Contact'), path: '/contact' },
    ],
    
    legal: [
      { name: 'Privacy Policy', path: '/privacy-policy' },
      { name: 'Terms of Service', path: '/terms' },
      
    ],
  };



  

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden" role="contentinfo">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group" aria-label="YatraWheels homepage">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-2xl shadow-xl group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300">
                Y
              </div>
              <span className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Yatra</span>
                <span className="text-white">Wheels</span>
              </span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-sm leading-relaxed">
              Your trusted partner for vehicle rentals across India. Find the perfect vehicle for your travel needs with our verified fleet of cars, tempo travellers, and buses.
            </p>
              
            
          </div>
            
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white" id="quick-links">{getBilingualText('Quick Links')}</h3>
            <ul className="space-y-4" aria-labelledby="quick-links">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.path} 
                    className="text-gray-300 hover:text-blue-400 transition-all duration-200 flex items-center gap-2 hover:translate-x-1"
                  >
                    <span className="text-blue-400" aria-hidden="true">→</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
            
          
            
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white" id="contact-info">{getBilingualText('Contact Info')}</h3>
            <ul className="space-y-4 text-gray-300" aria-labelledby="contact-info">
              <li className="flex items-start gap-3 group">
                <span className="text-2xl group-hover:scale-110 transition-transform" aria-hidden="true">📧</span>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email</p>
                  <a href="mailto:info@yatrawheels.com" className="hover:text-blue-400 transition-colors font-medium">
                    info@yatrawheels.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="text-2xl group-hover:scale-110 transition-transform" aria-hidden="true">📞</span>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Phone</p>
                  <a href="tel:+919876543210" className="hover:text-blue-400 transition-colors font-medium">
                    +91 98765 43210
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="text-2xl group-hover:scale-110 transition-transform" aria-hidden="true">📍</span>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Address</p>
                  <p className="font-medium">New Delhi, India</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
        
      {/* Bottom Bar */}
      <div className="border-t border-gray-700/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} YatraWheels. {getBilingualText('All rights reserved')}.
            </p>
            <div className="flex gap-6" aria-label="Legal links">
              {footerLinks.legal.map((link, index) => (
                <Link 
                  key={index} 
                  href={link.path}
                  className="text-gray-400 text-sm hover:text-blue-400 transition-colors hover:underline"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;