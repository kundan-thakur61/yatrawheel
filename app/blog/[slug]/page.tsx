import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
  content?: string; // Add content for full post
}

const blogPosts: BlogPost[] = [
  {
    slug: 'cars',
    title: 'Complete Guide to Car Rental in India: Everything You Need to Know',
    excerpt: 'Discover the best car rental options in India with our comprehensive guide covering popular models, pricing, safety tips, and booking strategies for 2024.',
    image: 'https://res.cloudinary.com/dwmytphop/image/upload/v1766311083/ONE_wwadwu.png',
    category: 'Cars',
    readTime: '8 min read',
    date: '2024-01-15',
    content: `
      <h2>Introduction to Car Rental in India</h2>
      <p>Car rental services in India have revolutionized the way people travel, offering flexibility, convenience, and cost-effectiveness for both tourists and locals. With the rise of digital platforms and a growing fleet of modern vehicles, renting a car has never been easier.</p>

      <h2>Popular Car Models Available</h2>
      <p>From compact hatchbacks perfect for city driving to spacious SUVs ideal for family trips, Indian car rental companies offer a wide range of options:</p>
      <ul>
        <li><strong>Economy Cars:</strong> Maruti Swift, Hyundai i10 - Perfect for budget-conscious travelers</li>
        <li><strong>Sedan:</strong> Honda City, Toyota Camry - Comfortable for long-distance travel</li>
        <li><strong>SUV:</strong> Mahindra Scorpio, Toyota Fortuner - Ideal for off-road adventures</li>
        <li><strong>Luxury:</strong> Mercedes-Benz, BMW - For premium travel experiences</li>
      </ul>

      <h2>Pricing and Booking Tips</h2>
      <p>Car rental prices in India typically range from ₹1,500 to ₹5,000 per day, depending on the vehicle type and location. Always compare prices across multiple platforms and read reviews before booking.</p>

      <h2>Safety and Insurance</h2>
      <p>Ensure your rental includes comprehensive insurance coverage. Most reputable companies provide collision damage waiver and personal accident insurance.</p>
    `
  },
  {
    slug: 'tempo-travellers',
    title: 'Tempo Traveller Rental Guide: Perfect for Group Travel and Family Trips',
    excerpt: 'Learn about tempo traveller rentals in India, including capacity options, pricing, popular routes, and tips for comfortable group travel experiences.',
    image: 'https://res.cloudinary.com/dwmytphop/image/upload/v1766311084/TWO_w7vuj3.png',
    category: 'Tempo Travellers',
    readTime: '6 min read',
    date: '2024-01-12',
    content: `
      <h2>Why Choose Tempo Travellers?</h2>
      <p>Tempo travellers are the perfect solution for group travel in India. These spacious vehicles can accommodate 12-20 passengers comfortably, making them ideal for family reunions, corporate outings, and adventure trips.</p>

      <h2>Capacity Options</h2>
      <ul>
        <li><strong>12-Seater:</strong> Compact option for small groups</li>
        <li><strong>17-Seater:</strong> Most popular choice for medium-sized groups</li>
        <li><strong>20-Seater:</strong> Spacious option for large families or teams</li>
      </ul>

      <h2>Popular Routes and Destinations</h2>
      <p>Tempo travellers are commonly used for:</p>
      <ul>
        <li>Hill station trips (Shimla, Manali, Darjeeling)</li>
        <li>Religious pilgrimages (Vaishno Devi, Amarnath)</li>
        <li>Corporate team-building activities</li>
        <li>School and college excursions</li>
      </ul>
    `
  },
  {
    slug: 'buses',
    title: 'Bus Rental Services in India: Corporate Events and Large Group Transportation',
    excerpt: 'Comprehensive guide to bus rentals for corporate events, school trips, weddings, and large group travel across India with pricing and availability details.',
    image: 'https://res.cloudinary.com/dwmytphop/image/upload/v1766311084/THREE_hhcx1t.png',
    category: 'Buses',
    readTime: '7 min read',
    date: '2024-01-10',
    content: `
      <h2>Bus Rental for Large Groups</h2>
      <p>Bus rental services cater to groups of 30+ passengers, making them perfect for corporate events, weddings, school trips, and large-scale transportation needs.</p>

      <h2>Types of Buses Available</h2>
      <ul>
        <li><strong>Volvo Buses:</strong> Luxury AC buses with modern amenities</li>
        <li><strong>Sleeper Buses:</strong> For overnight journeys</li>
        <li><strong>Semi-Sleeper Buses:</strong> Comfortable day travel option</li>
        <li><strong>Non-AC Buses:</strong> Budget-friendly option for short distances</li>
      </ul>

      <h2>Corporate and Event Transportation</h2>
      <p>Many companies prefer bus rentals for:</p>
      <ul>
        <li>Corporate retreats and team outings</li>
        <li>Wedding guest transportation</li>
        <li>Airport transfers for large groups</li>
        <li>Concert and event shuttles</li>
      </ul>
    `
  },
  {
    slug: 'bikes',
    title: 'Bike Rental in India: Adventure and City Exploration on Two Wheels',
    excerpt: 'Explore bike rental options for adventure travel, city exploration, and short trips across India\'s diverse landscapes and urban centers.',
    image: 'https://res.cloudinary.com/dwmytphop/image/upload/v1766311083/FOUR_x4ebda.png',
    category: 'Bikes',
    readTime: '5 min read',
    date: '2024-01-08',
    content: `
      <h2>Bike Rental for Adventure Seekers</h2>
      <p>Bike rentals offer the ultimate freedom for exploring India's diverse landscapes, from bustling city streets to scenic mountain roads.</p>

      <h2>Popular Bike Models</h2>
      <ul>
        <li><strong>Royal Enfield:</strong> Classic bikes for long-distance touring</li>
        <li><strong>KTM and Bajaj:</strong> Adventure bikes for off-road exploration</li>
        <li><strong>Honda Activa:</strong> Scooters for city commuting</li>
        <li><strong>Electric Bikes:</strong> Eco-friendly urban mobility</li>
      </ul>

      <h2>Popular Destinations for Bike Travel</h2>
      <p>India offers incredible biking routes:</p>
      <ul>
        <li>Ladakh circuit for high-altitude adventure</li>
        <li>Western Ghats for scenic coastal riding</li>
        <li>Rajasthan desert circuits</li>
        <li>Himalayan routes in Uttarakhand and Himachal</li>
      </ul>
    `
  },
  {
    slug: 'trucks',
    title: 'Commercial Truck Rental: Logistics and Cargo Transportation Solutions',
    excerpt: 'Professional truck rental services for commercial logistics, cargo transportation, and business needs across India with reliable fleet options.',
    image: 'https://res.cloudinary.com/dwmytphop/image/upload/v1766311083/FIVE_g4ndly.png',
    category: 'Trucks',
    readTime: '6 min read',
    date: '2024-01-05',
    content: `
      <h2>Commercial Truck Rental Services</h2>
      <p>Truck rental services provide reliable transportation solutions for businesses, e-commerce companies, and logistics operations across India.</p>

      <h2>Types of Trucks Available</h2>
      <ul>
        <li><strong>Light Commercial Vehicles (LCV):</strong> For small cargo loads</li>
        <li><strong>Medium Duty Trucks:</strong> 5-10 ton capacity</li>
        <li><strong>Heavy Duty Trucks:</strong> 10+ ton capacity for large shipments</li>
        <li><strong>Refrigerated Trucks:</strong> For temperature-sensitive goods</li>
      </ul>

      <h2>Logistics and Supply Chain Solutions</h2>
      <p>Truck rentals support various business needs:</p>
      <ul>
        <li>E-commerce delivery services</li>
        <li>Construction material transportation</li>
        <li>Agricultural product distribution</li>
        <li>Industrial equipment movement</li>
      </ul>
    `
  },
  {
    slug: 'auto-rickshaws',
    title: 'Auto Rickshaw Rental: Convenient City Transportation Solutions',
    excerpt: 'Guide to auto rickshaw rentals for short distance travel in cities, local transportation needs, and cost-effective mobility solutions.',
    image: 'https://res.cloudinary.com/dwmytphop/image/upload/v1766311083/SIX_hhibvm.png',
    category: 'Auto Rickshaws',
    readTime: '4 min read',
    date: '2024-01-03',
    content: `
      <h2>Auto Rickshaw Rentals for Urban Mobility</h2>
      <p>Auto rickshaws provide convenient, cost-effective transportation solutions for short-distance travel in Indian cities.</p>

      <h2>Types of Auto Rickshaws</h2>
      <ul>
        <li><strong>Three-Wheeler Auto Rickshaws:</strong> Traditional yellow and black rickshaws</li>
        <li><strong>E-Rickshaws:</strong> Electric, eco-friendly options</li>
        <li><strong>Shared Auto Rickshaws:</strong> For route-based travel</li>
      </ul>

      <h2>Best Use Cases</h2>
      <p>Auto rickshaws are ideal for:</p>
      <ul>
        <li>Short city commutes</li>
        <li>Airport and railway station transfers</li>
        <li>Local sightseeing in tourist areas</li>
        <li>Last-mile connectivity</li>
      </ul>
    `
  },
  {
    slug: 'electric-vehicles',
    title: 'Electric Vehicle Rental: Eco-Friendly Transportation for Modern Travel',
    excerpt: 'Sustainable electric vehicle rental options including e-cars and e-bikes for environmentally conscious travelers across India.',
    image: 'https://res.cloudinary.com/dwmytphop/image/upload/v1766311084/SEVEN_g0ijic.png',
    category: 'Electric Vehicles',
    readTime: '5 min read',
    date: '2024-01-01',
    content: `
      <h2>The Rise of Electric Vehicle Rentals</h2>
      <p>Electric vehicle rentals represent the future of sustainable transportation, offering eco-friendly alternatives to traditional fuel-based vehicles.</p>

      <h2>Types of Electric Vehicles</h2>
      <ul>
        <li><strong>Electric Cars:</strong> Tesla Model 3, Tata Nexon EV</li>
        <li><strong>Electric Bikes:</strong> Ather, Ola Electric scooters</li>
        <li><strong>Electric Scooters:</strong> For urban commuting</li>
      </ul>

      <h2>Benefits of Electric Vehicle Rentals</h2>
      <p>EV rentals provide:</p>
      <ul>
        <li>Lower operating costs</li>
        <li>Zero emissions</li>
        <li>Quiet and smooth ride experience</li>
        <li>Government incentives and subsidies</li>
      </ul>
    `
  }
];

interface PageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4">
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">{post.title}</h1>
            <div className="flex items-center justify-center text-white/80 text-lg">
              <span>{post.date}</span>
              <span className="mx-4">•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {post.excerpt}
                </p>
                {post.content && (
                  <div
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts / CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Explore More Vehicle Rental Guides
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Discover comprehensive guides for all types of vehicle rentals across India.
          </p>
          <Link
            href="/blog"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            View All Articles
          </Link>
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
