'use client';

import Link from 'next/link';
import { getBilingualText } from '../../utils/translations';

const AboutPage = () => {
  const stats = [
    { number: '500+', label: 'Vehicles', icon: '🚗' },
    { number: '50+', label: 'Cities', icon: '📍' },
    { number: '10K+', label: 'Happy Customers', icon: '😊' },
    { number: '24/7', label: 'Support', icon: '💬' },
  ];

  const values = [
    {
      icon: '🛡️',
      title: 'Trust & Safety',
      description: 'Every vehicle is verified and inspected for your safety',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '💯',
      title: 'Quality Service',
      description: 'We ensure top-notch service quality at every step',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '💰',
      title: 'Fair Pricing',
      description: 'Transparent pricing with no hidden charges',
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: '🤝',
      title: 'Customer First',
      description: 'Your satisfaction is our top priority',
      color: 'from-purple-500 to-purple-600'
    },
  ];

  const team = [
    { name: 'Rajesh Kumar', role: 'Founder & CEO', emoji: '👨‍💼' },
    { name: 'Priya Sharma', role: 'Operations Head', emoji: '👩‍💼' },
    { name: 'Amit Singh', role: 'Technical Lead', emoji: '👨‍💻' },
    { name: 'Sneha Patel', role: 'Customer Success', emoji: '👩‍🔧' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="gradient-hero text-white py-24 relative overflow-hidden">
        <div className="floating-shape w-64 h-64 bg-white top-10 left-10" style={{ animationDelay: '0s' }}></div>
        <div className="floating-shape w-48 h-48 bg-white bottom-10 right-20" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-6xl mb-6 block animate-float">🚗</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
            {getBilingualText('About YatraWheels')}
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto animate-fadeIn">
            {getBilingualText('Your Trusted Vehicle Rental Platform')}
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 -mt-12 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
              <span className="text-4xl mb-2 block">{stat.icon}</span>
              <div className="text-3xl font-bold text-gradient">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-fadeIn">
                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Started with a Vision to Transform Travel
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  YatraWheels was founded with a simple vision - to make vehicle rentals easy, transparent, and accessible for everyone across India. We understand the challenges of finding reliable vehicles for travel.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our platform connects vehicle owners with customers looking for reliable and affordable travel solutions. We believe in building trust through transparency, quality, and exceptional service.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 text-center animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                <span className="text-9xl">🚀</span>
                <p className="text-xl font-semibold text-gray-800 mt-4">Since 2020</p>
                <p className="text-gray-600">Serving customers across India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="section-title">What We Stand For</h2>
            <p className="section-subtitle">Our core values guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={index}
                className="feature-card hover-lift animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`icon bg-gradient-to-br ${value.color} text-white text-4xl shadow-lg`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="section-title">What We Offer</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-blue-50 rounded-2xl p-8 hover-lift animate-fadeIn">
              <span className="text-5xl mb-4 block">🧑‍🤝‍🧑</span>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Customers</h3>
              <ul className="space-y-3">
                {[
                  'Wide variety of vehicles to choose from',
                  'Transparent pricing with no hidden charges',
                  'Verified and quality vehicles',
                  'Easy booking process',
                  '24/7 customer support'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <span className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-green-50 rounded-2xl p-8 hover-lift animate-fadeIn" style={{ animationDelay: '0.1s' }}>
              <span className="text-5xl mb-4 block">🚗</span>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Vehicle Owners</h3>
              <ul className="space-y-3">
                {[
                  'Opportunity to earn by renting your vehicle',
                  'Simple registration process',
                  'Marketing your vehicle to a wide audience',
                  'Secure payment processing',
                  'Admin support for approvals'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <span className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-600 rounded-full text-sm font-medium mb-4">
              Our Team
            </span>
            <h2 className="section-title">Meet the Team</h2>
            <p className="section-subtitle">The passionate people behind YatraWheels</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div 
                key={index}
                className="text-center bg-gray-50 rounded-2xl p-6 hover-lift animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-4xl">
                  {member.emoji}
                </div>
                <h3 className="font-bold text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-white relative overflow-hidden">
        <div className="floating-shape w-48 h-48 bg-white top-10 right-10" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re looking to rent a vehicle or list yours, we&apos;re here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/vehicles"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
            >
              Browse Vehicles
            </Link>
            <Link 
              href="/owner/register-vehicle"
              className="btn-outline px-8 py-4 text-lg"
            >
              List Your Vehicle
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;