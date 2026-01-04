'use client';

import { useState } from 'react';
import WhatsAppButton from '../../components/WhatsAppButton';
import { getBilingualText } from '../../utils/translations';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const contactInfo = [
    {
      icon: '📞',
      title: getBilingualText('Phone'),
      details: ['+91 98765 43210', '+91 91234 56789'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '📧',
      title: getBilingualText('Email'),
      details: ['info@yatrawheels.com', 'support@yatrawheels.com'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '📍',
      title: getBilingualText('Address'),
      details: ['123, Business Park', 'Connaught Place, New Delhi - 110001'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '⏰',
      title: 'Business Hours',
      details: ['Mon - Sat: 9:00 AM - 8:00 PM', 'Sunday: 10:00 AM - 6:00 PM'],
      color: 'from-amber-500 to-amber-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="text-5xl mb-4 block animate-float">📞</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
            {getBilingualText('Contact')}
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto animate-fadeIn">
            {getBilingualText('Have questions or want to list your vehicle?')} We&apos;re here to help!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-16 mb-16 relative z-10">
          {contactInfo.map((info, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover-lift animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center text-3xl text-white shadow-lg`}>
                {info.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600 text-sm">{detail}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 animate-fadeIn">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-xl">✉️</span>
              Send us a Message
            </h2>

            {submitted ? (
              <div className="text-center py-12">
                <span className="text-6xl mb-4 block">✅</span>
                <h3 className="text-2xl font-bold text-green-600 mb-2">Message Sent!</h3>
                <p className="text-gray-600 mb-6">We&apos;ll get back to you within 24 hours.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="btn-primary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {getBilingualText('Full Name')} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {getBilingualText('Phone Number')} *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {getBilingualText('Email Address')} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="owner">List My Vehicle</option>
                    <option value="support">Customer Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {getBilingualText('Message')} *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary py-4 text-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message →'
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Quick Contact */}
          <div className="space-y-6">
            {/* WhatsApp Card */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-lg p-8 text-white animate-fadeIn">
              <span className="text-5xl mb-4 block">💬</span>
              <h3 className="text-2xl font-bold mb-3">Quick Response via WhatsApp</h3>
              <p className="opacity-90 mb-6">
                Get instant support! Chat with us on WhatsApp for quick queries and bookings.
              </p>
              <WhatsAppButton
                phoneNumber="+91 98765 43210"
                message="Hello, I need help with YatraWheels"
                className="!bg-white !text-green-600 hover:!bg-gray-100 w-full justify-center"
              >
                Start WhatsApp Chat
              </WhatsAppButton>
            </div>

            {/* For Vehicle Owners */}
            <div className="bg-white rounded-2xl shadow-lg p-8 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <span className="text-4xl mb-4 block">🚗</span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {getBilingualText('For Vehicle Owners')}
              </h3>
              <p className="text-gray-600 mb-6">
                Want to list your vehicle and start earning? Contact us to learn more about our partnership program.
              </p>
              <WhatsAppButton
                phoneNumber="+91 98765 43210"
                message="I am a vehicle owner interested in listing my vehicle on your platform"
                className="w-full justify-center"
              >
                Partner With Us
              </WhatsAppButton>
            </div>

            {/* FAQ Card */}
            <div className="bg-blue-50 rounded-2xl p-8 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span>❓</span> Frequently Asked Questions
              </h3>
              <ul className="space-y-3">
                {[
                  'How do I book a vehicle?',
                  'What documents are required?',
                  'Is there a cancellation policy?',
                  'How do I become a vehicle owner?'
                ].map((q, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <span className="text-blue-500">→</span>
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;