'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import { getBilingualText } from '../../utils/translations';

interface Vehicle {
  _id: string;
  name: string;
  brand: string;
  model: string;
  type: string;
  year: number;
  age: number;
  dailyRent: number;
  perKmRate: number;
  location: {
    city: string;
    state: string;
  };
  images: string[];
  features: string[];
  rating: number;
  totalReviews: number;
}

const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    city: '',
    type: '',
    minPrice: '',
    maxPrice: '',
    minSeats: '',
    search: '',
  });

  // Mock data for now
  useEffect(() => {
    const fetchVehicles = async () => {
      setLoading(true);
      
      const mockVehicles: Vehicle[] = [
        {
          _id: '1',
          name: 'riya',
          brand: 'Maruti',
          model: 'Dzire',
          type: 'car',
          year: 2020,
          age: 6,
          dailyRent: 1200,
          perKmRate: 12,
          location: { city: 'Delhi', state: 'Delhi' },
          images: ['https://res.cloudinary.com/dwmytphop/image/upload/v1766311083/ONE_wwadwu.png'],
          features: ['AC', 'Power Steering', 'Power Windows'],
          rating: 4.5,
          totalReviews: 24,
        },
        {
          _id: '2',
          name: 'Toyota Innova',
          brand: 'Toyota',
          model: 'Innova',
          type: 'tempo_traveller',
          year: 2019,
          age: 7,
          dailyRent: 2500,
          perKmRate: 18,
          location: { city: 'Mumbai', state: 'Maharashtra' },
          images: ['https://res.cloudinary.com/dwmytphop/image/upload/v1766311084/TWO_w7vuj3.png'],
          features: ['AC', 'Leather Seats', 'Entertainment System'],
          rating: 4.7,
          totalReviews: 32,
        },
        {
          _id: '3',
          name: 'Tata Winger',
          brand: 'Tata',
          model: 'Winger',
          type: 'tempo_traveller',
          year: 2021,
          age: 12,
          dailyRent: 2800,
          perKmRate: 20,
          location: { city: 'Bangalore', state: 'Karnataka' },
          images: ['https://res.cloudinary.com/dwmytphop/image/upload/v1766311084/THREE_hhcx1t.png'],
          features: ['AC', 'Comfortable Seating', 'Large Luggage Space'],
          rating: 4.3,
          totalReviews: 18,
        },
        {
          _id: '4',
          name: 'Scania Bus',
          brand: 'Scania',
          model: 'Interlink',
          type: 'bus',
          year: 2020,
          age: 45,
          dailyRent: 8000,
          perKmRate: 35,
          location: { city: 'Chennai', state: 'Tamil Nadu' },
          images: ['https://res.cloudinary.com/dwmytphop/image/upload/v1766311084/SEVEN_g0ijic.png'],
          features: ['AC', 'Reclining Seats', 'Entertainment System', 'Toilet'],
          rating: 4.8,
          totalReviews: 15,
        },
      ];

      setVehicles(mockVehicles);
      setLoading(false);
    };

    fetchVehicles();
  }, []);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const clearFilters = () => {
    setFilters({ city: '', type: '', minPrice: '', maxPrice: '', minSeats: '', search: '' });
  };

  const filteredVehicles = vehicles.filter(vehicle => {
    return (
      (filters.city ? vehicle.location.city.toLowerCase().includes(filters.city.toLowerCase()) : true) &&
      (filters.type ? vehicle.type === filters.type : true) &&
      (filters.minPrice ? vehicle.dailyRent >= Number(filters.minPrice) : true) &&
      (filters.maxPrice ? vehicle.dailyRent <= Number(filters.maxPrice) : true) &&
      (filters.minSeats ? vehicle.age >= Number(filters.minSeats) : true) &&
      (filters.search ? 
        vehicle.name.toLowerCase().includes(filters.search.toLowerCase()) || 
        vehicle.brand.toLowerCase().includes(filters.search.toLowerCase()) : true
      )
    );
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="gradient-hero text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
            Find the Perfect Vehicle for Your Journey
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Discover the perfect vehicle for your needs from our verified collection of cars, buses, tempo travellers and more.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg mb-8 -mt-12 relative z-10 animate-fadeIn">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
            <h2 className="text-xl font-bold flex items-center gap-2 text-gray-800">
              <span>🔍</span> Filter Vehicles
            </h2>
            <div className="flex gap-3">
              <button 
                onClick={clearFilters}
                className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all"
              >
                Clear All
              </button>
              <div className="relative">
                
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">📍 City</label>
              <input
                type="text"
                name="city"
                value={filters.city}
                onChange={handleFilterChange}
                placeholder="Enter city"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">🚗 Type</label>
              <select
                name="type"
                value={filters.type}
                onChange={handleFilterChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="">All Types</option>
                <option value="car">Car</option>
                <option value="tempo_traveller">Tempo Traveller</option>
                <option value="bus">Bus</option>
                <option value="bike">Bike</option>
                <option value="truck">Truck</option>
                <option value="auto_rickshaw">Auto Rickshaw</option>
                <option value="electric_vehicle">Electric Vehicle</option>
              </select>
            </div>
           
            
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">🔎 Search</label>
              <input
                type="text"
                name="search"
                value={filters.search}
                onChange={handleFilterChange}
                placeholder="Search..."
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredVehicles.length}</span> Vehicle
          </p>
          
        </div>

        {/* Vehicle List */}
        {loading ? (
          <div className="flex flex-col items-center justify-center h-64">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-gray-500">Loading vehicles...</p>
          </div>
        ) : filteredVehicles.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl shadow-sm">
            <span className="text-6xl mb-4 block">🔍</span>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">No Vehicles found</h2>
            <p className="text-gray-500 mb-6">Try adjusting your search or filters</p>
            <button 
              onClick={clearFilters}
              className="btn-primary"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVehicles.map((vehicle, index) => (
              <div 
                key={vehicle._id} 
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                  <div className="absolute inset-0">
                    <Image
                      src={vehicle.images[0] || '/images/default-vehicle.svg'}
                      alt={vehicle.name}
                      fill={true}
                      className="object-fill drop-shadow-lg"
                    />
                  </div>
                  {/* <div className="absolute top-4 right-4">
                    <span className="price-tag">₹{vehicle.dailyRent}/day</span>
                  </div> */}
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{vehicle.name}</h3>
                      {/* <p className="text-gray-500 text-sm">{vehicle.brand} {vehicle.model} • {vehicle.year}</p> */}
                    </div>
                  </div>
{/*                   
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      <span className="text-yellow-400">★</span>
                      <span className="font-semibold ml-1">{vehicle.rating}</span>
                    </div>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-500 text-sm">{vehicle.totalReviews} reviews</span>
                  </div> */}
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="badge badge-primary">
                      age {vehicle.age} 
                    </span>
                    <span className="badge badge-success">
                      📍 {vehicle.location.city}
                    </span>
                  </div>
                  
                  {/* <div className="flex flex-wrap gap-2 mb-6">
                    {vehicle.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-lg">
                        {feature}
                      </span>
                    ))}
                    {vehicle.features.length > 3 && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-lg">
                        +{vehicle.features.length - 3} more
                      </span>
                    )}
                  </div> */}
                  
                  <Link 
                    href={`/vehicles/${vehicle._id}`}
                    className="block w-full text-center btn-primary py-3"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default VehiclesPage;