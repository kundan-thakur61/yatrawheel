'use client';

import Link from 'next/link';
import Image from 'next/image';
import WhatsAppButton from '../components/WhatsAppButton';
// import {  } from '../utils/translations';

const HomePage = () => {
  // Popular vehicle types
  const vehicleTypes = [
  
    {
      name: 'Tempo Travellers',
      image: 'https://res.cloudinary.com/dwmytphop/image/upload/v1766311084/TWO_w7vuj3.png',
      description: 'Perfect for group travel and family trips',
      count: 85,
      icon: '🚐',
      color: 'from-purple-500 to-purple-600',
    },
    {
      name: 'Buses',
      image: 'https://res.cloudinary.com/dwmytphop/image/upload/v1766311084/THREE_hhcx1t.png',
      description: 'For large groups and corporate travel',
      count: 45,
      icon: '🚌',
      color: 'from-amber-500 to-amber-600',
    },
    {
      name: 'Bikes',
      image: 'https://res.cloudinary.com/dwmytphop/image/upload/v1766311083/FOUR_x4ebda.png',
      description: 'Two-wheelers for adventure and short trips',
      count: 200,
      icon: '🏍️',
      color: 'from-green-500 to-green-600',
    },
    {
      name: 'Trucks',
      image: 'https://res.cloudinary.com/dwmytphop/image/upload/v1766311083/FIVE_g4ndly.png',
      description: 'Commercial vehicles for cargo and logistics',
      count: 65,
      icon: '🚚',
      color: 'from-red-500 to-red-600',
    },
    {
      name: 'Auto Rickshaws',
      image: 'https://res.cloudinary.com/dwmytphop/image/upload/v1766311083/SIX_hhibvm.png',
      description: 'Perfect for short distance travel in cities',
      count: 120,
      icon: '🛺',
      color: 'from-yellow-500 to-yellow-600',
    },
   
  ];

  // Popular cities
  const popularCities = [
    { name: 'Delhi', state: 'Delhi', vehicleCount: 120, emoji: '🏛️' },
    { name: 'Mumbai', state: 'Maharashtra', vehicleCount: 180, emoji: '🌊' },
    { name: 'Bangalore', state: 'Karnataka', vehicleCount: 150, emoji: '💻' },
    { name: 'Chennai', state: 'Tamil Nadu', vehicleCount: 95, emoji: '🏖️' },
    { name: 'Kolkata', state: 'West Bengal', vehicleCount: 80, emoji: '🌉' },
    { name: 'Hyderabad', state: 'Telangana', vehicleCount: 110, emoji: '🕌' },
  ];

  // Why choose us features
  const features = [
    {
      icon: '✅',
      title: 'Verified Vehicles',
      description: 'All vehicles are thoroughly verified for safety and quality',
      color: 'bg-green-100',
    },
    {
      icon: '💰',
      title: 'Best Prices',
      description: 'Competitive pricing with no hidden charges',
      color: 'bg-blue-100',
    },
    {
      icon: '🛡️',
      title: 'Secure Booking',
      description: 'Safe and secure booking process',
      color: 'bg-purple-100',
    },
    {
      icon: '📞',
      title: '24/7 Support',
      description: 'Round the clock customer support',
      color: 'bg-amber-100',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative gradient-hero bg-[radial-gradient(circle,rgba(63,94,251,1)_0%,rgba(252,70,107,1)_100%)] text-white py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fadeIn max-w-4xl mx-auto">
            <span className="inline-block px-6 py-3 bg-white/20 rounded-full text-sm font-semibold mb-6 backdrop-blur-md shadow-lg border border-white/30">
              🇮🇳 India&apos;s Leading Vehicle Rental Platform
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              
            </h1>
            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-95 font-light">
             
            </p>
            
            {/* Search Box */}
            <div className="max-w-4xl mx-auto glass rounded-2xl p-6 md:p-8 mb-10 shadow-2xl border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  {/* <label className="block text-left text-sm font-semibold mb-2 opacity-90">📍 Location</label> */}
                  <input 
                    type="text" 
                    placeholder="Search By City or Location" 
                    className=" text-center w-full px-5 py-3.5 rounded-xl bg-white/95 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-white font-medium shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-left text-sm font-semibold mb-2 opacity-90">select</label>
                  <select className=" text-center w-full px-5 py-3.5 rounded-xl bg-white/95 text-gray-800 font-medium shadow-sm">
                    <option>All Types</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <Link href="/vehicles" className="w-full btn-primary text-center py-3.5 rounded-xl font-bold shadow-lg hover:shadow-xl">
                    Search 
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <Link 
                href="/vehicles" 
                className="btn-primary px-10 py-4 text-lg font-bold shadow-xl hover:shadow-2xl"
              >
                Browse All 
              </Link>
              
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="animate-fadeIn p-6" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl md:text-5xl font-extrabold text-gradient mb-2">500+</div>
              <div className="text-gray-700 font-medium text-sm md:text-base"> Vehicles Available</div>
            </div>
            <div className="animate-fadeIn p-6" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl md:text-5xl font-extrabold text-gradient mb-2">50+</div>
              <div className="text-gray-700 font-medium text-sm md:text-base">Cities Covered</div>
            </div>
            <div className="animate-fadeIn p-6" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl md:text-5xl font-extrabold text-gradient mb-2">10K+</div>
              <div className="text-gray-700 font-medium text-sm md:text-base">Happy Customers</div>
            </div>
            <div className="animate-fadeIn p-6" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl md:text-5xl font-extrabold text-gradient mb-2">4.8★</div>
              <div className="text-gray-700 font-medium text-sm md:text-base">Average Rating</div>
            </div>
          </div>
        </div>
      </section>
      
     {/* Vehicle Types */}

     
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-4">
  {vehicleTypes.map((type) => (
    <div key={type.name} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden">
      {/* Image */}
      <div className="relative h-48 bg-gray-100">
        <Image
          src={type.image}
          alt={type.name}
          fill
  className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-gray-800 mb-2">
          {type.name}
        </h3>

        <p className="text-sm text-gray-600 mb-4">
          {type.description}
        </p>

        {/* Bottom row */}
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 text-xs font-semibold text-pink-600 border border-pink-300 rounded-full">
            {type.count}+ available
          </span>

          <Link
            href={`/vehicles?type=${type.name.toLowerCase()}
              .toLowerCase()
              .replace(/\s+/g, '_')}`}
            className="text-pink-600 font-bold hover:text-pink-700 transition"
          >
            Explore →
          </Link>
        </div>
      </div>
    </div>
  ))}
</div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col md:flex-row gap-8 rounded-2xl p-8 text-white
          bg-[radial-gradient(circle,rgb(141, 143, 153)_0%,rgba(252,70,107,1)_100%)] opacity-75">

  <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
    {/* Row 1 – 4 buttons */}

    <Link
  href="/vehicles"
  className="w-full text-center py-3.5 rounded-xl font-bold
  bg-white text-pink-600 border-2 border-pink-500
  shadow-lg hover:bg-pink-500 hover:text-white hover:border-pink-500
  transition-all duration-300"
>
  abc
</Link>

   <Link
  href="/vehicles"
  className="w-full text-center py-3.5 rounded-xl font-bold
  bg-white text-pink-600 border-2 border-pink-500
  shadow-lg hover:bg-pink-500 hover:text-white hover:border-pink-500
  transition-all duration-300"
>
  abc
</Link>

   <Link
  href="/vehicles"
  className="w-full text-center py-3.5 rounded-xl font-bold
  bg-white text-pink-600 border-2 border-pink-500
  shadow-lg hover:bg-pink-500 hover:text-white hover:border-pink-500
  transition-all duration-300"
>
  abc
</Link>

   <Link
  href="/vehicles"
  className="w-full text-center py-3.5 rounded-xl font-bold
  bg-white text-pink-600 border-2 border-pink-500
  shadow-lg hover:bg-pink-500 hover:text-white hover:border-pink-500
  transition-all duration-300"
>
  abc
</Link>

   <Link
  href="/vehicles"
  className="w-full text-center py-3.5 rounded-xl font-bold
  bg-white text-pink-600 border-2 border-pink-500
  shadow-lg hover:bg-pink-500 hover:text-white hover:border-pink-500
  transition-all duration-300"
>
  abc
</Link>


    {/* Row 2 – 3 buttons */}
   <Link
  href="/vehicles"
  className="w-full text-center py-3.5 rounded-xl font-bold
  bg-white text-pink-600 border-2 border-pink-500
  shadow-lg hover:bg-pink-500 hover:text-white hover:border-pink-500
  transition-all duration-300"
>
  abc
</Link>

   <Link
  href="/vehicles"
  className="w-full text-center py-3.5 rounded-xl font-bold
  bg-white text-pink-600 border-2 border-pink-500
  shadow-lg hover:bg-pink-500 hover:text-white hover:border-pink-500
  transition-all duration-300"
>
  abc
</Link>

   <Link
  href="/vehicles"
  className="w-full text-center py-3.5 rounded-xl font-bold
  bg-white text-pink-600 border-2 border-pink-500
  shadow-lg hover:bg-pink-500 hover:text-white hover:border-pink-500
  transition-all duration-300"
>
  abc
</Link>

  </div>

</div>




 <div className="flex flex-col md:flex-row gap-8 rounded-2xl p-8 text-white
  bg-[radial-gradient(circle,rgb(112, 112, 116)_0%,rgba(252,70,107,1)_100%)] opacity-75">

  <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
    {/* Row 1 – 4 buttons */}
   <Link
  href="/vehicles"
  className="w-full text-center py-3.5 rounded-xl font-bold
  bg-white text-pink-600 border-2 border-pink-500
  shadow-lg hover:bg-pink-500 hover:text-white hover:border-pink-500
  transition-all duration-300"
>
  abc
</Link>

   <Link
  href="/vehicles"
  className="w-full text-center py-3.5 rounded-xl font-bold
  bg-white text-pink-600 border-2 border-pink-500
  shadow-lg hover:bg-pink-500 hover:text-white hover:border-pink-500
  transition-all duration-300"
>
  abc
</Link>

   <Link
  href="/vehicles"
  className="w-full text-center py-3.5 rounded-xl font-bold
  bg-white text-pink-600 border-2 border-pink-500
  shadow-lg hover:bg-pink-500 hover:text-white hover:border-pink-500
  transition-all duration-300"
>
  abc
</Link>

   <Link
  href="/vehicles"
  className="w-full text-center py-3.5 rounded-xl font-bold
  bg-white text-pink-600 border-2 border-pink-500
  shadow-lg hover:bg-pink-500 hover:text-white hover:border-pink-500
  transition-all duration-300"
>
  abc
</Link>


    {/* Row 2 – 3 buttons */}
   <Link
  href="/vehicles"
  className="w-full text-center py-3.5 rounded-xl font-bold
  bg-white text-pink-600 border-2 border-pink-500
  shadow-lg hover:bg-pink-500 hover:text-white hover:border-pink-500
  transition-all duration-300"
>
  abc
</Link>

   <Link
  href="/vehicles"
  className="w-full text-center py-3.5 rounded-xl font-bold
  bg-white text-pink-600 border-2 border-pink-500
  shadow-lg hover:bg-pink-500 hover:text-white hover:border-pink-500
  transition-all duration-300"
>
  abc
</Link>

   <Link
  href="/vehicles"
  className="w-full text-center py-3.5 rounded-xl font-bold
  bg-white text-pink-600 border-2 border-pink-500
  shadow-lg hover:bg-pink-500 hover:text-white hover:border-pink-500
  transition-all duration-300"
>
  abc
</Link>

  </div>

</div>




 <div className="flex flex-col md:flex-row gap-8 rounded-2xl p-8 text-white
  bg-[radial-gradient(circle,rgb(104, 105, 110)_0%,rgba(252,70,107,1)_100%)] opacity-75">

  <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
    {/* Row 1 – 4 buttons */}
   <Link
  href="/vehicles"
  className="w-full text-center py-3.5 rounded-xl font-bold
  bg-white text-pink-600 border-2 border-pink-500
  shadow-lg hover:bg-pink-500 hover:text-white hover:border-pink-500
  transition-all duration-300"
>
  abc
</Link>

   <Link
  href="/vehicles"
  className="w-full text-center py-3.5 rounded-xl font-bold
  bg-white text-pink-600 border-2 border-pink-500
  shadow-lg hover:bg-pink-500 hover:text-white hover:border-pink-500
  transition-all duration-300"
>
  abc
</Link>

   <Link
  href="/vehicles"
  className="w-full text-center py-3.5 rounded-xl font-bold
  bg-white text-pink-600 border-2 border-pink-500
  shadow-lg hover:bg-pink-500 hover:text-white hover:border-pink-500
  transition-all duration-300"
>
  abc
</Link>

   <Link
  href="/vehicles"
  className="w-full text-center py-3.5 rounded-xl font-bold
  bg-white text-pink-600 border-2 border-pink-500
  shadow-lg hover:bg-pink-500 hover:text-white hover:border-pink-500
  transition-all duration-300"
>
  abc
</Link>


    {/* Row 2 – 3 buttons */}
   <Link
  href="/vehicles"
  className="w-full text-center py-3.5 rounded-xl font-bold
  bg-white text-pink-600 border-2 border-pink-500
  shadow-lg hover:bg-pink-500 hover:text-white hover:border-pink-500
  transition-all duration-300"
>
  abc
</Link>

   <Link
  href="/vehicles"
  className="w-full text-center py-3.5 rounded-xl font-bold
  bg-white text-pink-600 border-2 border-pink-500
  shadow-lg hover:bg-pink-500 hover:text-white hover:border-pink-500
  transition-all duration-300"
>
  abc
</Link>

   <Link
  href="/vehicles"
  className="w-full text-center py-3.5 rounded-xl font-bold
  bg-white text-pink-600 border-2 border-pink-500
  shadow-lg hover:bg-pink-500 hover:text-white hover:border-pink-500
  transition-all duration-300"
>
  abc
</Link>

  </div>

</div>




 <div className="flex flex-col md:flex-row gap-8 rounded-2xl p-8 text-white
  bg-[radial-gradient(circle,rgb(227, 228, 237)_0%,rgb(221, 212, 213)_100%)] opacity-75">

  <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
    {/* Row 1 – 4 buttons */}
   <Link
  href="/vehicles"
  className="w-full text-center py-3.5 rounded-xl font-bold
  bg-white text-pink-600 border-2 border-pink-500
  shadow-lg hover:bg-pink-500 hover:text-white hover:border-pink-500
  transition-all duration-300"
>
  abc
</Link>

   <Link
  href="/vehicles"
  className="w-full text-center py-3.5 rounded-xl font-bold
  bg-white text-pink-600 border-2 border-pink-500
  shadow-lg hover:bg-pink-500 hover:text-white hover:border-pink-500
  transition-all duration-300"
>
  abc
</Link>

   <Link
  href="/vehicles"
  className="w-full text-center py-3.5 rounded-xl font-bold
  bg-white text-pink-600 border-2 border-pink-500
  shadow-lg hover:bg-pink-500 hover:text-white hover:border-pink-500
  transition-all duration-300"
>
  abc
</Link>

   <Link
  href="/vehicles"
  className="w-full text-center py-3.5 rounded-xl font-bold
  bg-white text-pink-600 border-2 border-pink-500
  shadow-lg hover:bg-pink-500 hover:text-white hover:border-pink-500
  transition-all duration-300"
>
  abc
</Link>


    {/* Row 2 – 3 buttons */}
   <Link
  href="/vehicles"
  className="w-full text-center py-3.5 rounded-xl font-bold
  bg-white text-pink-600 border-2 border-pink-500
  shadow-lg hover:bg-pink-500 hover:text-white hover:border-pink-500
  transition-all duration-300"
>
  abc
</Link>

   <Link
  href="/vehicles"
  className="w-full text-center py-3.5 rounded-xl font-bold
  bg-white text-pink-600 border-2 border-pink-500
  shadow-lg hover:bg-pink-500 hover:text-white hover:border-pink-500
  transition-all duration-300"
>
  abc
</Link>

   <Link
  href="/vehicles"
  className="w-full text-center py-3.5 rounded-xl font-bold
  bg-white text-pink-600 border-2 border-pink-500
  shadow-lg hover:bg-pink-500 hover:text-white hover:border-pink-500
  transition-all duration-300"
>
  abc
</Link>

  </div>

</div>


</div>



            

      {/* About Section - Redesigned */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your Trusted Vehicle Rental Partner Across India
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                At YatraWheels, we provide premium vehicle rental services across India, offering a diverse fleet of cars, buses, tempo travellers, bikes, and commercial vehicles. Our platform connects travelers with verified vehicle owners, ensuring a seamless and reliable rental experience.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose YatraWheels</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3 mt-1">✓</span>
                    <span><strong>Verified Fleet:</strong> All vehicles undergo thorough verification for safety and quality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3 mt-1">✓</span>
                    <span><strong>Competitive Pricing:</strong> Best rates with transparent pricing and no hidden charges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3 mt-1">✓</span>
                    <span><strong>24/7 Support:</strong> Round-the-clock customer assistance for a worry-free experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3 mt-1">✓</span>
                    <span><strong>Easy Booking:</strong> Simple, secure, and instant booking process</span>
                  </li>
                </ul>
              </div>

              {/* Our Fleet */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🚗</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Comprehensive Fleet</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <span className="text-2xl mb-2 block">🚗</span>
                    <span className="text-sm font-medium text-gray-700">Cars & SUVs</span>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <span className="text-2xl mb-2 block">🚐</span>
                    <span className="text-sm font-medium text-gray-700">Tempo Travellers</span>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <span className="text-2xl mb-2 block">🚌</span>
                    <span className="text-sm font-medium text-gray-700">Buses</span>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <span className="text-2xl mb-2 block">🏍️</span>
                    <span className="text-sm font-medium text-gray-700">Bikes</span>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Complete Protection</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3 mt-1">🛡️</span>
                    <span>Comprehensive insurance coverage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3 mt-1">📱</span>
                    <span>24/7 roadside assistance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3 mt-1">🔧</span>
                    <span>Regular maintenance & safety checks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3 mt-1">📞</span>
                    <span>Dedicated customer support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Key Statistics */}
           
          </div>
        </div>
      </section>

      {/* SEO Content Section - Redesigned */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Industry Evolution */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Evolution of Vehicle Rental in India
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                The vehicle rental industry in India has undergone significant transformation in recent years. From traditional rental agencies to modern digital platforms, the sector has embraced technology to provide better services. YatraWheels represents this evolution, combining traditional reliability with cutting-edge digital solutions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                  <h4 className="font-bold text-blue-800 mb-2">Digital Transformation</h4>
                  <p className="text-sm text-blue-700">Our platform leverages advanced technology to connect vehicle owners with renters, creating a marketplace that benefits both parties.</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                  <h4 className="font-bold text-purple-800 mb-2">Instant Booking</h4>
                  <p className="text-sm text-purple-700">Through our app and website, customers can browse, compare, and book vehicles instantly with just a few clicks.</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                  <h4 className="font-bold text-green-800 mb-2">Growing Demand</h4>
                  <p className="text-sm text-green-700">The growth of India's tourism industry and increasing business travel has created a booming demand for flexible transportation solutions.</p>
                </div>
              </div>
            </div>

            {/* Cost Understanding */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Understanding Vehicle Rental Costs in India
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg text-gray-800 mb-3">Cost Factors</h4>
                  <p className="text-gray-700 mb-4">
                    Vehicle rental costs in India vary based on several factors including vehicle type, rental duration, fuel efficiency, and seasonal demand. Understanding these cost components helps customers make informed decisions and plan their budgets effectively.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Base rental rates by vehicle type</li>
                    <li>• Fuel charges and mileage limits</li>
                    <li>• Insurance and security deposits</li>
                    <li>• Seasonal demand variations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-800 mb-3">Our Pricing Advantage</h4>
                  <p className="text-gray-700 mb-4">
                    Our transparent pricing model ensures that customers know exactly what they're paying for. We provide detailed breakdowns of all costs with no hidden charges.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Long-term discounts</span>
                      <span className="font-bold text-green-600">Up to 30% off</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Corporate rates</span>
                      <span className="font-bold text-green-600">Bulk savings</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Loyalty program</span>
                      <span className="font-bold text-green-600">Exclusive benefits</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Future Vision */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                The Future of Vehicle Rental in India
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                The vehicle rental industry in India is poised for significant growth, driven by increasing tourism, urbanization, and digital transformation. YatraWheels is at the forefront of this evolution, embracing emerging technologies and innovative business models to provide superior rental experiences.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔋</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Electric Vehicles</h4>
                  <p className="text-sm text-gray-600">Expanding our eco-friendly fleet to reduce carbon emissions and promote sustainable travel.</p>
                </div>
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">AI Technology</h4>
                  <p className="text-sm text-gray-600">Advanced analytics and AI-powered customer service for personalized experiences.</p>
                </div>
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📱</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Mobile Innovation</h4>
                  <p className="text-sm text-gray-600">Seamless booking experiences with real-time tracking and digital documentation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      


      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-gradient text-3xl md:text-4xl">{('Why Choose YatraWheels')}</h2>
          <p className="section-subtitle text-gray-600 text-base md:text-lg mb-12">We provide the best vehicle rental experience in India</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="feature-card bg-white rounded-2xl p-6 text-center transition-all hover:shadow-xl animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`icon w-20 h-20 rounded-2xl ${feature.color} text-4xl flex items-center justify-center shadow-md mx-auto mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Cities */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-gradient text-3xl md:text-4xl">{('Popular Cities')}</h2>
          <p className="section-subtitle text-gray-600 text-base md:text-lg mb-12">Find vehicles in these popular destinations</p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {popularCities.map((city, index) => (
              <Link 
                key={index} 
                href={`/vehicles?city=${city.name}`}
                className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-center animate-fadeIn border border-gray-100 hover:border-blue-300"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="text-5xl mb-3 block group-hover:scale-110 transition-transform duration-300">{city.emoji}</span>
                <h3 className="font-bold text-lg group-hover:text-blue-600 transition-colors duration-300">{city.name}</h3>
                <p className="text-gray-500 text-sm font-medium">{city.state}</p>
                <p className="text-blue-600 text-sm font-bold mt-2">{city.vehicleCount}+ vehicles</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      

      {/* Testimonials Section */}
      
    </div>
  );
};

export default HomePage;