'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getBilingualText } from '../../../utils/translations';
import { useParams } from 'next/navigation';
import WhatsAppButton from '../../../components/WhatsAppButton';

interface Vehicle {
  _id: string;
  name: string;
  brand: string;
  model: string;
  type: string;
  year: number;
  dailyRent: number;
  perKmRate: number;
  seatingCapacity: number;
  fuelType: string;
  transmission: string;
  location: {
    city: string;
    state: string;
    address: string;
  };
  images: string[];
  features: string[];
  description: string;
  rating: number;
  totalReviews: number;
  ownerId: {
    name: string;
    businessName: string;
    phone: string;
  };
}
const VehicleDetailPage = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [bookingData, setBookingData] = useState({
    startDate: '',
    endDate: '',
    pickupLocation: '',
    dropLocation: '',
    totalDays: 0,
    totalAmount: 0,
  });

  const getVehicleIcon = (type: string) => {
    switch (type) {
      case 'car': return '🚗';
      case 'tempo_traveller': return '🚐';
      case 'bus': return '🚌';
      case 'bike': return '🏍️';
      default: return '🚗';
    }
  };

  useEffect(() => {
    const fetchVehicle = async () => {
      setLoading(true);
      
      const mockVehicle: Vehicle = {
        _id: id as string,
        name: id === '1' ? 'riya' : id === '2' ? 'Toyota Innova' : id === '3' ? 'Tata Winger' : 'Scania Bus',
        brand: id === '1' ? 'Maruti' : id === '2' ? 'Toyota' : id === '3' ? 'Tata' : 'Scania',
        model: id === '1' ? 'Dzire' : id === '2' ? 'Innova' : id === '3' ? 'Winger' : 'Interlink',
        type: id === '1' ? 'car' : id === '2' ? 'tempo_traveller' : id === '3' ? 'tempo_traveller' : 'bus',
        year: id === '1' ? 2020 : id === '2' ? 2019 : id === '3' ? 2021 : 2020,
        seatingCapacity: id === '1' ? 5 : id === '2' ? 7 : id === '3' ? 12 : 45,
        dailyRent: id === '1' ? 1200 : id === '2' ? 2500 : id === '3' ? 2800 : 8000,
        perKmRate: id === '1' ? 12 : id === '2' ? 18 : id === '3' ? 20 : 35,
        fuelType: 'Diesel',
        transmission: 'Manual',
        location: {
          city: id === '1' ? 'Delhi' : id === '2' ? 'Mumbai' : id === '3' ? 'Bangalore' : 'Chennai',
          state: id === '1' ? 'Delhi' : id === '2' ? 'Maharashtra' : id === '3' ? 'Karnataka' : 'Tamil Nadu',
          address: id === '1' ? 'Connaught Place, New Delhi' : id === '2' ? 'Andheri West, Mumbai' : id === '3' ? 'MG Road, Bangalore' : 'T. Nagar, Chennai',
        },
        images: id === '1' ? [
          'https://res.cloudinary.com/dwmytphop/image/upload/v1766311083/ONE_wwadwu.png',
          'https://res.cloudinary.com/dwmytphop/image/upload/v1766311084/TWO_w7vuj3.png',
          'https://res.cloudinary.com/dwmytphop/image/upload/v1766311084/THREE_hhcx1t.png'
        ] : id === '2' ? [
          'https://res.cloudinary.com/dwmytphop/image/upload/v1766311084/TWO_w7vuj3.png',
          'https://res.cloudinary.com/dwmytphop/image/upload/v1766311084/THREE_hhcx1t.png',
          'https://res.cloudinary.com/dwmytphop/image/upload/v1766311084/SEVEN_g0ijic.png'
        ] : id === '3' ? [
          'https://res.cloudinary.com/dwmytphop/image/upload/v1766311084/THREE_hhcx1t.png',
          'https://res.cloudinary.com/dwmytphop/image/upload/v1766311084/SEVEN_g0ijic.png',
          'https://res.cloudinary.com/dwmytphop/image/upload/v1766311083/ONE_wwadwu.png'
        ] : [
          'https://res.cloudinary.com/dwmytphop/image/upload/v1766311084/SEVEN_g0ijic.png',
          'https://res.cloudinary.com/dwmytphop/image/upload/v1766311083/ONE_wwadwu.png',
          'https://res.cloudinary.com/dwmytphop/image/upload/v1766311084/TWO_w7vuj3.png',
          'https://res.cloudinary.com/dwmytphop/image/upload/v1766311084/THREE_hhcx1t.png'
        ],
        features: [
          'Air Conditioning',
          'Power Steering',
          'Power Windows',
          'Central Locking',
          'FM Radio',
          'USB Port',
          'Rear Camera',
          'Cruise Control',
          'Cruise Control',
          'Cruise Control',
          'Cruise Control',
          'Cruise Control',
          'Cruise Control',
          'Cruise Control',
          
        ],
        description: id === '1' ? 'A comfortable and reliable car for city driving and short trips. Well-maintained with all modern amenities. Perfect for family trips and business travel.' : id === '2' ? 'Spacious MPV perfect for family outings and group travel. Excellent mileage and comfortable seating.' : id === '3' ? 'Large tempo traveller ideal for group tours and corporate events. Spacious interior with modern amenities.' : 'Premium bus for long-distance travel. Luxury seating, entertainment system, and restroom facilities.',
        rating: id === '1' ? 4.5 : id === '2' ? 4.7 : id === '3' ? 4.3 : 4.8,
        totalReviews: id === '1' ? 24 : id === '2' ? 32 : id === '3' ? 18 : 15,
        ownerId: {
          name: id === '1' ? 'Rajesh Kumar' : id === '2' ? 'Amit Singh' : id === '3' ? 'Vijay Patel' : 'Suresh Reddy',
          businessName: id === '1' ? 'Delhi Car Rentals' : id === '2' ? 'Mumbai Vehicle Services' : id === '3' ? 'Bangalore Tours' : 'Chennai Bus Rentals',
          phone: id === '1' ? '+91 9876543210' : id === '2' ? '+91 9876543211' : id === '3' ? '+91 9876543212' : '+91 9876543213',
        },
      };

      setVehicle(mockVehicle);
      setLoading(false);
    };

    fetchVehicle();
  }, [id]);

  useEffect(() => {
    if (bookingData.startDate && bookingData.endDate) {
      const start = new Date(bookingData.startDate);
      const end = new Date(bookingData.endDate);

      if (start && end) {
        const timeDiff = end.getTime() - start.getTime();
        const totalDays = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;
        const totalAmount = totalDays * (vehicle?.dailyRent || 0);

        setBookingData(prev => ({
          ...prev,
          totalDays,
          totalAmount
        }));
      }
    }
  }, [bookingData.startDate, bookingData.endDate, vehicle?.dailyRent]);

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoPlay && vehicle && vehicle.images.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % vehicle.images.length);
      }, 3000); // Change image every 3 seconds
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoPlay, vehicle, currentImageIndex]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-gray-500">Loading vehicle details...</p>
      </div>
    );
  }

  if (!vehicle) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center bg-white p-12 rounded-2xl shadow-lg">
          <span className="text-6xl mb-4 block">🔍</span>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Vehicle not found</h2>
          <p className="text-gray-500 mb-6">The vehicle you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/vehicles" className="btn-primary inline-block">
            ← Back to Vehicles
          </Link>
        </div>
      </div>
    );
  }

  const handleCall = () => {
    window.open(`tel:${vehicle.ownerId.phone}`, '_self');
  };

  const nextImage = () => {
    setAutoPlay(false);
    setCurrentImageIndex((prev) => (prev + 1) % vehicle.images.length);
  };

  const prevImage = () => {
    setAutoPlay(false);
    setCurrentImageIndex((prev) => (prev - 1 + vehicle.images.length) % vehicle.images.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="gradient-hero text-white py-12">
        <div className="container mx-auto px-4">
          <Link href="/vehicles" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-all">
            <span>←</span> {getBilingualText('Back to Vehicles')}
          </Link>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                {vehicle.name}
              </h1>
              <p className="text-xl font-bold text-gray-900">{vehicle.brand} {vehicle.model} • {vehicle.year}</p>
            </div>
            <div className="flex items-center gap-4">
             
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 -mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Vehicle Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Vehicle Image Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fadeIn relative">
              <div className="relative h-80">
                <Image
                  src={vehicle.images[currentImageIndex]}
                  alt={`${vehicle.name} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                  priority
                />
                {/* Navigation Buttons */}
                {vehicle.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                    >
                      <span className="text-xl">‹</span>
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                    >
                      <span className="text-xl">›</span>
                    </button>
                  </>
                )}
                {/* Image Indicators */}
                {vehicle.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {vehicle.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setAutoPlay(false);
                          setCurrentImageIndex(index);
                        }}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
              {[
                { icon: '👥', label: 'Seats', value: `${vehicle.seatingCapacity} Seater` },
                { icon: '⛽', label: 'Fuel', value: vehicle.fuelType },
                { icon: '⚙️', label: 'Transmission', value: vehicle.transmission },
                { icon: '📅', label: 'Year', value: vehicle.year },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-5 shadow-sm text-center hover:shadow-xl transition-all border border-gray-100">
                  <span className="text-3xl mb-2 block">{item.icon}</span>
                  <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                  <p className="font-bold text-gray-900">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl shadow-sm p-6 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span>📝</span> Description
              </h2>
              <p className="text-gray-600 leading-relaxed">{vehicle.description}</p>
              
            </div>
            
            {/* Category-Specific Content */}
            <div className="bg-white rounded-2xl shadow-sm p-6 animate-fadeIn" style={{ animationDelay: '0.25s' }}>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span>🚗</span> About {getVehicleIcon(vehicle.type)} {vehicle.type.replace('_', ' ').toUpperCase()} Rental
              </h2>
              <div className="space-y-4">
                {vehicle.type === 'car' && (
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Car Rental Benefits</h3>
                    <p className="text-gray-600 mb-3">Renting a car provides the freedom and flexibility to travel at your own pace. Our cars are well-maintained, fuel-efficient, and perfect for city exploration, business trips, or family vacations. Each vehicle comes with essential features like air conditioning, power steering, and modern safety equipment.</p>
                    <p className="text-gray-600">Whether you need a compact car for solo travel or a spacious SUV for family trips, our diverse fleet ensures you find the perfect match for your needs.</p>
                  </div>
                )}
                
                {vehicle.type === 'tempo_traveller' && (
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Tempo Traveller Rental Benefits</h3>
                    <p className="text-gray-600 mb-3">Our tempo travellers are ideal for group travel, offering comfortable seating for 9-17 passengers. Perfect for family trips, corporate outings, and sightseeing tours, these vehicles provide an economical alternative to multiple car rentals.</p>
                    <p className="text-gray-600">Equipped with air conditioning, comfortable seats, and ample luggage space, our tempo travellers ensure a pleasant journey for all passengers.</p>
                  </div>
                )}
                
                {vehicle.type === 'bus' && (
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Bus Rental Benefits</h3>
                    <p className="text-gray-600 mb-3">For larger groups, our buses offer reliable transportation with capacities from 20 to 50+ seats. Ideal for school trips, corporate events, weddings, and long-distance travel.</p>
                    <p className="text-gray-600">Our buses come with comfortable seating, air conditioning, entertainment systems, and safety features to ensure a comfortable journey for all passengers.</p>
                  </div>
                )}
                
                {vehicle.type === 'bike' && (
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Bike Rental Benefits</h3>
                    <p className="text-gray-600 mb-3">Experience the freedom of exploring on two wheels with our bike rental service. Perfect for city exploration, adventure rides, and navigating through traffic.</p>
                    <p className="text-gray-600">Our bikes are well-maintained, fuel-efficient, and equipped with safety gear for a secure riding experience.</p>
                  </div>
                )}
                
                {vehicle.type !== 'car' && vehicle.type !== 'tempo_traveller' && vehicle.type !== 'bus' && vehicle.type !== 'bike' && (
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Vehicle Rental Benefits</h3>
                    <p className="text-gray-600">Our {vehicle.type.replace('_', ' ')} rentals provide the perfect solution for your transportation needs. Well-maintained and reliable, these vehicles ensure a comfortable journey.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl shadow-sm p-6 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span>✨</span> {getBilingualText('Features')}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {vehicle.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-2 rounded-lg border border-green-100">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-2xl shadow-sm p-6 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span>📍</span> {getBilingualText('Location')}
              </h2>
              <div className="bg-blue-50 rounded-xl p-4">
                <p className="font-medium text-gray-900">{vehicle.location.address}</p>
                <p className="text-gray-600">{vehicle.location.city}, {vehicle.location.state}</p>
              </div>
             
            </div>

            {/* Owner Info */}
            <div className="bg-white rounded-2xl shadow-sm p-6 animate-fadeIn" style={{ animationDelay: '0.5s' }}>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span>👤</span> Owner Information
              </h2>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">Owner Name</p>
                  <p className="font-medium">{vehicle.ownerId.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Business Name</p>
                  <p className="font-medium">{vehicle.ownerId.businessName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">{vehicle.ownerId.phone}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-4">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">₹{vehicle.dailyRent}/day</h2>
                <p className="text-gray-600 text-sm">+ ₹{vehicle.perKmRate}/km</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pick-up Date</label>
                  <input
                    type="date"
                    value={bookingData.startDate}
                    onChange={(e) => setBookingData({...bookingData, startDate: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Drop-off Date</label>
                  <input
                    type="date"
                    value={bookingData.endDate}
                    onChange={(e) => setBookingData({...bookingData, endDate: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-sm text-gray-600">Days</p>
                    <p className="font-bold">{bookingData.totalDays}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total</p>
                    <p className="font-bold">₹{bookingData.totalAmount}</p>
                  </div>
                </div>
                
                <WhatsAppButton
                  phoneNumber={vehicle.ownerId.phone}
                  vehicleName={`${vehicle.name} (${vehicle.brand} ${vehicle.model})`}
                  message={`Hello, I am interested in booking your ${vehicle.name} (${vehicle.brand} ${vehicle.model}) from ${bookingData.startDate} to ${bookingData.endDate}. Please let me know the availability and process.`}
                  className="w-full justify-center py-4"
                >
                  💬 {getBilingualText('Enquire via WhatsApp')}
                </WhatsAppButton>
                
                <button
                  onClick={handleCall}
                  className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                >
                  📞 {getBilingualText('Call Now')}
                </button>
              </div>

              {/* Trust badges */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="grid grid-cols-3 gap-2 text-center text-xs text-gray-500">
                  <div>
                    <span className="text-lg block mb-1">🔒</span>
                    Secure
                  </div>
                  <div>
                    <span className="text-lg block mb-1">✓</span>
                    Verified
                  </div>
                  <div>
                    <span className="text-lg block mb-1">🛡️</span>
                    Insured
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetailPage;