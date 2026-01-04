import { Metadata } from 'next';
import { generateSEOMetadata, cityKeywords, generateKeywordsString } from '../../../utils/SEO';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Define supported cities
const SUPPORTED_CITIES = [
  'delhi', 'mumbai', 'bangalore', 'chennai', 'kolkata', 
  'hyderabad', 'pune', 'ahmedabad', 'jaipur', 'lucknow'
];

// Function to get city display name
const getCityDisplayName = (city: string): string => {
  const cityMap: Record<string, string> = {
    'delhi': 'Delhi',
    'mumbai': 'Mumbai',
    'bangalore': 'Bangalore',
    'chennai': 'Chennai',
    'kolkata': 'Kolkata',
    'hyderabad': 'Hyderabad',
    'pune': 'Pune',
    'ahmedabad': 'Ahmedabad',
    'jaipur': 'Jaipur',
    'lucknow': 'Lucknow',
  };
  
  return cityMap[city.toLowerCase()] || city;
};

// Generate metadata for the city page
export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const city = params.city.toLowerCase();
  
  if (!SUPPORTED_CITIES.includes(city)) {
    return {};
  }
  
  const displayName = getCityDisplayName(city);
  const keywords = cityKeywords[city as keyof typeof cityKeywords] || 
                   ['vehicle rental', 'car rental', 'tempo traveller', 'bus rental', 'travel India'];
  
  return generateSEOMetadata({
    title: `Book Vehicles in ${displayName} - Car, Tempo Traveller, Bus Rental | YatraWheels`,
    description: `Find and book the best vehicles in ${displayName} at affordable prices. Cars, tempo travellers, buses and more available for rent in ${displayName}. Book now!`,
    keywords: generateKeywordsString(keywords),
    url: `https://www.yatrawheels.com/cities/${city}`,
    image: `https://www.yatrawheels.com/images/${city}-vehicles.jpg`,
  });
}

export default function CityPage({ params }: { params: { city: string } }) {
  const city = params.city.toLowerCase();
  
  if (!SUPPORTED_CITIES.includes(city)) {
    notFound();
  }
  
  const displayName = getCityDisplayName(city);
  const vehicles = [
    { type: 'car', count: 120, name: 'Cars' },
    { type: 'tempo_traveller', count: 45, name: 'Tempo Travellers' },
    { type: 'bus', count: 15, name: 'Buses' },
    { type: 'bike', count: 80, name: 'Bikes' },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Vehicle Rental in {displayName}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find and book the perfect vehicle for your travel needs in {displayName}. 
            We offer a wide range of vehicles at competitive prices.
          </p>
        </div>

        {/* City Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {vehicles.map((vehicle) => (
            <div key={vehicle.type} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{vehicle.count}+</div>
              <div className="text-lg font-medium">{vehicle.name}</div>
              <div className="text-gray-600">available</div>
            </div>
          ))}
        </div>

        {/* Popular Vehicle Types */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Popular Vehicle Types in {displayName}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicles.map((vehicle) => (
              <Link 
                key={vehicle.type}
                href={`/vehicles?city=${city}&type=${vehicle.type}`}
                className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-40 bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">
                      {vehicle.type === 'car' && '🚗'}
                      {vehicle.type === 'tempo_traveller' && '🚐'}
                      {vehicle.type === 'bus' && '🚌'}
                      {vehicle.type === 'bike' && '🏍️'}
                    </div>
                    <h3 className="text-xl font-semibold">{vehicle.name}</h3>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <p className="text-gray-600">{vehicle.count}+ vehicles available</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-blue-50 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Why Choose YatraWheels in {displayName}?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Verified Vehicles</h3>
              <p className="text-gray-600">All vehicles are verified and well-maintained for your safety</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Best Prices</h3>
              <p className="text-gray-600">Competitive rates with no hidden charges</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Easy Booking</h3>
              <p className="text-gray-600">Simple and quick booking process</p>
            </div>
          </div>
        </div>
        
        {/* Category-Specific Content */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Vehicle Rental Solutions in {displayName}</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Car Rental in {displayName}</h3>
              <p className="text-gray-700">
                Looking for a car rental in {displayName}? Our extensive fleet includes sedans, SUVs, hatchbacks, and luxury vehicles to suit your travel needs. Whether you need a compact car for city exploration or an SUV for family travel, we have the perfect vehicle for you. Our cars are well-maintained, regularly serviced, and equipped with modern amenities to ensure a comfortable journey.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tempo Traveller Rental in {displayName}</h3>
              <p className="text-gray-700">
                Planning a group trip in {displayName}? Our tempo traveller rental service offers comfortable and cost-effective transportation for groups. With seating capacities ranging from 9 to 17 seats, our tempo travellers are ideal for family vacations, corporate events, and sightseeing tours. Each vehicle comes with air conditioning, comfortable seating, and professional drivers familiar with {displayName}'s routes.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bus Rental in {displayName}</h3>
              <p className="text-gray-700">
                For larger groups, our bus rental service in {displayName} provides reliable transportation solutions. We offer various bus sizes from 20 to 50+ seats, perfect for corporate events, school trips, weddings, and religious pilgrimages. Our buses are equipped with comfortable seating, air conditioning, and safety features to ensure a pleasant journey for all passengers.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bike and Scooter Rental in {displayName}</h3>
              <p className="text-gray-700">
                Experience {displayName} on two wheels with our bike and scooter rental service. Perfect for city exploration, short trips, and navigating through traffic, our two-wheelers provide an economical and flexible way to travel. We offer fuel-efficient scooters and adventure bikes, all well-maintained and equipped with safety gear for a secure riding experience.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Book Your Vehicle in {displayName}?</h2>
          <p className="text-gray-600 mb-6">Find the perfect vehicle for your travel needs in {displayName}</p>
          <Link 
            href={`/vehicles?city=${city}`}
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700"
          >
            Browse All Vehicles in {displayName}
          </Link>
        </div>
      </div>
    </div>
  );
}