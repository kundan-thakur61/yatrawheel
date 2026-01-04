import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  image?: string;
  type?: string;
}

export const generateSEOMetadata = ({
  title,
  description,
  keywords = 'vehicle rental, car rental, tempo traveller, bus rental, travel India, vehicle booking',
  url = 'https://www.yatrawheels.com',
  image = 'https://www.yatrawheels.com/images/og-image.jpg',
  type = 'website',
}: SEOProps): Metadata => {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url,
      type: (type || 'website') as 'website' | 'article' | 'book' | 'profile' | 'music.song' | 'music.album' | 'music.playlist' | 'music.radio_station' | 'video.movie' | 'video.episode' | 'video.tv_show' | 'video.other',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  };
};

// SEO keywords for different cities
export const cityKeywords = {
  delhi: [
    'Delhi car rental',
    'Delhi tempo traveller booking',
    'Delhi vehicle rental service',
    'Delhi car hire',
    'Delhi taxi service',
    'Delhi bike rental',
    'Delhi bus rental',
    'Delhi vehicle on rent',
    'Delhi travel vehicle',
    'Delhi local transport'
  ],
  mumbai: [
    'Mumbai car rental',
    'Mumbai tempo traveller booking',
    'Mumbai vehicle rental service',
    'Mumbai car hire',
    'Mumbai taxi service',
    'Mumbai bike rental',
    'Mumbai bus rental',
    'Mumbai vehicle on rent',
    'Mumbai travel vehicle',
    'Mumbai local transport'
  ],
  bangalore: [
    'Bangalore car rental',
    'Bangalore tempo traveller booking',
    'Bangalore vehicle rental service',
    'Bangalore car hire',
    'Bangalore taxi service',
    'Bangalore bike rental',
    'Bangalore bus rental',
    'Bangalore vehicle on rent',
    'Bangalore travel vehicle',
    'Bangalore local transport'
  ],
  // Add more cities as needed
};

// SEO keywords for different vehicle types
export const vehicleTypeKeywords = {
  car: [
    'car rental',
    'car hire',
    'self drive car',
    'car on rent',
    'car booking',
    'car rental service',
    'car rental India',
    'affordable car rental',
    'best car rental',
    'car rental deals'
  ],
  tempo_traveller: [
    'tempo traveller rental',
    'tempo traveller hire',
    'tempo traveller on rent',
    'tempo traveller booking',
    'tempo traveller service',
    'tempo traveller India',
    'group travel vehicle',
    'family trip vehicle',
    'tempo traveller deals'
  ],
  bus: [
    'bus rental',
    'bus hire',
    'bus on rent',
    'bus booking',
    'bus rental service',
    'bus rental India',
    'corporate bus rental',
    'school bus rental',
    'tourist bus rental'
  ],
  
  bike: [
    'bike rental',
    'bike hire',
    'bike on rent',
    'bike booking',
    'bike rental service',
    'bike rental India',
    'scooter rental',
    'motorcycle rental',
    'bike rental deals'
  ]
};

// Homepage comprehensive keyword list
export const homepageKeywords = [
  // Primary keywords
  'vehicle rental India',
  'car rental',
  'tempo traveller booking',
  'bus rental',
  'travel India',
  'vehicle booking',
  'rent car online',
  'affordable vehicle rental',
  
  // Vehicle type keywords
  'car rental India',
  'SUV rental',
  'hatchback rental',
  'sedan rental',
  'luxury car rental',
  'tempo traveller rental',
  '12 seater tempo traveller',
  '17 seater tempo traveller',
  'bus rental India',
  'minibus rental',
  'coach rental',
  'bike rental India',
  'scooter rental',
  'motorcycle rental',
  'truck rental',
  'commercial vehicle rental',
  'auto rickshaw rental',
  'electric vehicle rental',
  
  // Location-based keywords
  'Delhi car rental',
  'Mumbai car rental',
  'Bangalore car rental',
  'Chennai car rental',
  'Kolkata car rental',
  'Hyderabad car rental',
  'Pune car rental',
  'Ahmedabad car rental',
  'Jaipur car rental',
  'Lucknow car rental',
  'vehicle rental Delhi NCR',
  'vehicle rental Mumbai',
  'vehicle rental Bangalore',
  'vehicle rental Chennai',
  'vehicle rental Kolkata',
  'vehicle rental Hyderabad',
  
  // Service-related keywords
  'self drive car rental',
  'driver included car rental',
  'one way car rental',
  'long term car rental',
  'weekly car rental',
  'monthly car rental',
  'hourly car rental',
  'outstation car rental',
  'local car rental',
  'intercity travel',
  'corporate vehicle rental',
  'event vehicle rental',
  'wedding car rental',
  'tourist vehicle rental',
  'holiday vehicle rental',
  'festival vehicle rental',
  
  // Price and convenience keywords
  'cheap car rental',
  'budget vehicle rental',
  'best car rental deals',
  'affordable car hire',
  'discount car rental',
  'car rental offers',
  'vehicle rental coupons',
  'low cost vehicle rental',
  'no deposit car rental',
  'instant car booking',
  '24/7 vehicle rental service',
  'online vehicle booking',
  'easy vehicle rental',
  'quick car rental',
  'instant vehicle booking',
  
  // Safety and quality keywords
  'verified vehicle rental',
  'safe car rental',
  'insured vehicle rental',
  'well maintained vehicles',
  'professional driver service',
  'background checked drivers',
  'GPS enabled vehicles',
  '24/7 roadside assistance',
  'vehicle safety check',
  'sanitized vehicles',
  'contactless car rental',
  'hygienic vehicle service',
  
  // Industry-specific keywords
  'vehicle aggregation platform',
  'car rental marketplace',
  'vehicle sharing service',
  'fleet management service',
  'transportation service provider',
  'logistics solution',
  'last mile connectivity',
  'shared mobility service',
  'on-demand vehicle service',
  'digital vehicle rental',
  'technology enabled transport',
  
  // Tourism and travel keywords
  'tourist vehicle rental',
  'hill station vehicle rental',
  'beach destination car rental',
  'adventure travel vehicle',
  'road trip vehicle rental',
  'family vacation vehicles',
  'group travel vehicle',
  'sightseeing vehicle rental',
  'local tour vehicle rental',
  'customized travel packages',
  'travel planning service',
  'holiday travel solution',
  
  // Business keywords
  'commercial vehicle hire',
  'logistics vehicle rental',
  'cargo transportation',
  'goods carrier rental',
  'delivery vehicle rental',
  'business travel vehicle',
  'corporate fleet service',
  'employee transportation',
  'office vehicle rental',
  'business vehicle solution',
  'fleet outsourcing',
  
  // Specialized services
  'luxury car rental India',
  'wedding car rental service',
  'party bus rental',
  'festival vehicle rental',
  'event transportation',
  'airport transfer service',
  'railway station pickup',
  'medical emergency vehicle',
  'ambulance service alternative',
  'pet friendly vehicle rental',
  'luggage friendly vehicle',
  
  // Competitive keywords
  'best vehicle rental service',
  'top car rental company',
  'reliable vehicle rental',
  'trusted car rental',
  'premium vehicle rental',
  'affordable luxury car rental',
  'customer rated vehicle rental',
  'award winning car rental',
  'recommended vehicle service',
  'top rated car rental',
  
  // Long-tail keywords
  'affordable car rental service in India',
  'best tempo traveller for family trip',
  'reliable bus rental for school trip',
  'cheap vehicle rental with driver',
  'online car booking with instant confirmation',
  'verified vehicle rental with insurance',
  'safe and affordable car rental service',
  '24/7 customer support vehicle rental',
  'no hidden charges car rental',
  'transparent pricing vehicle rental',
  'verified owner vehicle rental platform',
  'secure online vehicle booking system',
  'best vehicle rental app India',
  'mobile friendly car rental service',
  'instant vehicle booking app',
  'digital vehicle rental solution',
  'technology enabled car rental service',
  'innovative vehicle rental platform',
  'modern car rental solution India',
  'next generation vehicle rental service'
];

// Generate keywords string from an array
export const generateKeywordsString = (keywords: string[]): string => {
  return keywords.join(', ');
};