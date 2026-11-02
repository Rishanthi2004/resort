import { ResortItem } from '../types/resort';

export const RESORTS_DATA: ResortItem[] = [
  {
    id: 'maldives-beach-villa',
    name: 'Beach Villa',
    subTitle: 'Private Beach & Turquoise Lagoon Sanctuary',
    location: 'Baa Atoll',
    country: 'Maldives',
    pricePerNight: 1450,
    currency: 'USD',
    rating: 4.98,
    reviewsCount: 142,
    badge: '100% Halal Friendly',
    mainImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=1600&q=85'
    ],
    description: 'Surrounded by lush coconut palms and powder-white sand, this beachfront haven offers an unoverlooked private plunge pool, secluded sun deck, and direct steps to crystalline lagoon waters. Complete with dedicated butler service and in-villa halal fine dining under the stars.',
    bedrooms: 2,
    maxGuests: 4,
    poolType: 'Secluded Beachfront Plunge Pool',
    privacyLevel: '100% Fully Secluded',
    highlights: [
      'Zero outside visibility pool perimeter with tropical flora',
      'In-villa floating breakfast & gourmet halal dining',
      'Private sunset catamaran excursion without alcohol onboard',
      'Dedicated female villa attendant on request'
    ],
    features: {
      privatePool: true,
      halalDining: true,
      alcoholFree: true,
      womenSpa: true,
      prayerFacilities: true,
      butlerService: true,
      oceanView: true,
    },
    dimensions: '320 m² / 3,445 sq.ft'
  },
  {
    id: 'antalya-pool-stay',
    name: 'Private Pool Stay',
    subTitle: 'Mediterranean Pine Cliffside Sanctuary',
    location: 'Kalkan, Antalya',
    country: 'Antalya',
    pricePerNight: 890,
    currency: 'USD',
    rating: 4.96,
    reviewsCount: 98,
    badge: '100% Halal Friendly',
    mainImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85'
    ],
    description: 'Perched on the sun-drenched Turkish Riviera hillside, this modern architectural villa is designed from the ground up for absolute family seclusion. Featuring high privacy stone walls, an infinity pool with sheltered sun loungers, and sweeping views of the turquoise Mediterranean bay.',
    bedrooms: 3,
    maxGuests: 6,
    poolType: 'Perimeter-Shielded Infinity Pool',
    privacyLevel: '100% Fully Secluded',
    highlights: [
      'Stone terrace with 100% sheltered sunbathing space',
      'Private traditional Turkish hammam & heated sauna',
      'Chef-prepared organic halal farm-to-table breakfast',
      'High-speed optic fiber and smart entertainment'
    ],
    features: {
      privatePool: true,
      halalDining: true,
      alcoholFree: true,
      womenSpa: true,
      prayerFacilities: true,
      butlerService: true,
      oceanView: true,
    },
    dimensions: '410 m² / 4,413 sq.ft'
  },
  {
    id: 'bali-nature-retreat',
    name: 'Nature Retreat',
    subTitle: 'Tropical Jungle & Waterfall Valley Villa',
    location: 'Ubud Highlands',
    country: 'Bali',
    pricePerNight: 720,
    currency: 'USD',
    rating: 4.95,
    reviewsCount: 114,
    badge: '100% Halal Friendly',
    mainImage: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=1600&q=85'
    ],
    description: 'Immerse your senses in the serene sounds of Ayung river waterfalls and jungle birdsong. Handcrafted teak and volcanic stone architecture blend with modern luxury, surrounded by private verdant ravine gardens, infinity-edge freshwater pool, and yoga pavilion.',
    bedrooms: 2,
    maxGuests: 4,
    poolType: 'Jungle Edge Springwater Infinity Pool',
    privacyLevel: '100% Fully Secluded',
    highlights: [
      'Private waterfall garden and meditation platform',
      'Certified organic Indonesian halal dining & cooking classes',
      'Private in-villa traditional herbal spa rituals',
      'Complementary daily afternoon tea with Balinese sweets'
    ],
    features: {
      privatePool: true,
      halalDining: true,
      alcoholFree: true,
      womenSpa: true,
      prayerFacilities: true,
      butlerService: false,
      oceanView: false,
    },
    dimensions: '280 m² / 3,014 sq.ft'
  },
  {
    id: 'dubai-desert-palace',
    name: 'Desert Oasis Sanctuary',
    subTitle: 'Royal Bedouin Dunes & Private Spa Estate',
    location: 'Al Maha Reserve',
    country: 'Dubai, UAE',
    pricePerNight: 1680,
    currency: 'USD',
    rating: 4.99,
    reviewsCount: 88,
    badge: '100% Halal Friendly',
    mainImage: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85'
    ],
    description: 'An ethereal palace tucked among rolling terracotta dunes where Arabian gazelles wander freely. Complete with temperature-controlled private pool overlooking endless horizons, bespoke falconry, and authentic Emirati culinary banquets.',
    bedrooms: 3,
    maxGuests: 6,
    poolType: 'Desert Mirage Heated Infinity Pool',
    privacyLevel: '100% Fully Secluded',
    highlights: [
      'Private dune panorama with zero surrounding structures',
      'Astronomy & stargazing telescope on private deck',
      'Private gourmet halal barbecue under desert constellations',
      'Rolls-Royce desert transport transfer'
    ],
    features: {
      privatePool: true,
      halalDining: true,
      alcoholFree: true,
      womenSpa: true,
      prayerFacilities: true,
      butlerService: true,
      oceanView: false,
    },
    dimensions: '520 m² / 5,597 sq.ft'
  },
  {
    id: 'langkawi-coral-overwater',
    name: 'Coral Lagoon Villa',
    subTitle: 'Andaman Sea Overwater Villa with Glass Floor',
    location: 'Datai Bay',
    country: 'Malaysia',
    pricePerNight: 1120,
    currency: 'USD',
    rating: 4.97,
    reviewsCount: 106,
    badge: '100% Halal Friendly',
    mainImage: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85'
    ],
    description: 'Suspended above turquoise coral reefs, this overwater villa features complete private screening, an infinity pool extending towards the open horizon, and direct sea stairways. Certified 100% halal kitchen and non-alcoholic beverage bar.',
    bedrooms: 2,
    maxGuests: 4,
    poolType: 'Overwater Lagoon Infinity Pool',
    privacyLevel: '100% Fully Secluded',
    highlights: [
      'Glass viewing floor panel in master living salon',
      'Private overwater hammock net suspended over the sea',
      'Snorkeling gear & private marine biologist tour',
      '100% Halal room service 24/7'
    ],
    features: {
      privatePool: true,
      halalDining: true,
      alcoholFree: true,
      womenSpa: true,
      prayerFacilities: true,
      butlerService: true,
      oceanView: true,
    },
    dimensions: '360 m² / 3,875 sq.ft'
  }
];

export const UNIQUE_FEATURES = [
  {
    id: 'private-pools',
    title: '100% Secluded Private Pools',
    description: 'Complete visual privacy with protected sunbathing terraces, ensuring peace of mind for you and your family.',
    iconType: 'pool',
    tag: 'Guaranteed Seclusion'
  },
  {
    id: 'halal-dining',
    title: 'Alcohol-Free & Halal Dining',
    description: 'Only 100% certified halal gourmet cuisine prepared by world-class chefs, served in completely alcohol-free settings.',
    iconType: 'dining',
    tag: 'Gourmet Certified'
  },
  {
    id: 'family-privacy',
    title: 'Family & Women Privacy',
    description: 'Dedicated women-only private spa times, secluded beach coves, and respectful hospitality tailored for modest families.',
    iconType: 'family',
    tag: 'Family Centered'
  },
  {
    id: 'prayer-facilities',
    title: 'Prayer Facilities & Qibla',
    description: 'Precise Qibla direction indicators, plush prayer rugs, Quran copies, and serene prayer spaces in every villa.',
    iconType: 'prayer',
    tag: 'Peace & Serenity'
  }
];
