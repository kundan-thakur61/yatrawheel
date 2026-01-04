import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: 'cars',
    title: 'Complete Guide to Car Rental in India: Everything You Need to Know',
    excerpt: 'Discover the best car rental options in India with our comprehensive guide covering popular models, pricing, safety tips, and booking strategies for 2024.',
    image: 'https://res.cloudinary.com/dwmytphop/image/upload/v1766311083/ONE_wwadwu.png',
    category: 'Cars',
    readTime: '8 min read',
    date: '2024-01-15'
  },
  {
    slug: 'tempo-travellers',
    title: 'Tempo Traveller Rental Guide: Perfect for Group Travel and Family Trips',
    excerpt: 'Learn about tempo traveller rentals in India, including capacity options, pricing, popular routes, and tips for comfortable group travel experiences.',
    image: 'https://res.cloudinary.com/dwmytphop/image/upload/v1766311084/TWO_w7vuj3.png',
    category: 'Tempo Travellers',
    readTime: '6 min read',
    date: '2024-01-12'
  },
  {
    slug: 'buses',
    title: 'Bus Rental Services in India: Corporate Events and Large Group Transportation',
    excerpt: 'Comprehensive guide to bus rentals for corporate events, school trips, weddings, and large group travel across India with pricing and availability details.',
    image: 'https://res.cloudinary.com/dwmytphop/image/upload/v1766311084/THREE_hhcx1t.png',
    category: 'Buses',
    readTime: '7 min read',
    date: '2024-01-10'
  },
  {
    slug: 'bikes',
    title: 'Bike Rental in India: Adventure and City Exploration on Two Wheels',
    excerpt: 'Explore bike rental options for adventure travel, city exploration, and short trips across India\'s diverse landscapes and urban centers.',
    image: 'https://res.cloudinary.com/dwmytphop/image/upload/v1766311083/FOUR_x4ebda.png',
    category: 'Bikes',
    readTime: '5 min read',
    date: '2024-01-08'
  },
  {
    slug: 'trucks',
    title: 'Commercial Truck Rental: Logistics and Cargo Transportation Solutions',
    excerpt: 'Professional truck rental services for commercial logistics, cargo transportation, and business needs across India with reliable fleet options.',
    image: 'https://res.cloudinary.com/dwmytphop/image/upload/v1766311083/FIVE_g4ndly.png',
    category: 'Trucks',
    readTime: '6 min read',
    date: '2024-01-05'
  },
  {
    slug: 'auto-rickshaws',
    title: 'Auto Rickshaw Rental: Convenient City Transportation Solutions',
    excerpt: 'Guide to auto rickshaw rentals for short distance travel in cities, local transportation needs, and cost-effective mobility solutions.',
    image: 'https://res.cloudinary.com/dwmytphop/image/upload/v1766311083/SIX_hhibvm.png',
    category: 'Auto Rickshaws',
    readTime: '4 min read',
    date: '2024-01-03'
  },
  {
    slug: 'electric-vehicles',
    title: 'Electric Vehicle Rental: Eco-Friendly Transportation for Modern Travel',
    excerpt: 'Sustainable electric vehicle rental options including e-cars and e-bikes for environmentally conscious travelers across India.',
    image: 'https://res.cloudinary.com/dwmytphop/image/upload/v1766311084/SEVEN_g0ijic.png',
    category: 'Electric Vehicles',
    readTime: '5 min read',
    date: '2024-01-01'
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">YatraWheels Blog</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Insights, guides, and tips for vehicle rental in India. Discover the best practices for safe, affordable, and convenient travel.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="h-48 relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Rent Your Perfect Vehicle?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Browse our extensive collection of verified vehicles across India and book your next adventure today.
          </p>
          <Link
            href="/vehicles"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Browse Vehicles
          </Link>
        </div>
      </section>
    </div>
  );
}
