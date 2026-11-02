export interface ResortItem {
  id: string;
  name: string;
  subTitle: string;
  location: string;
  country: string;
  pricePerNight: number;
  currency: string;
  rating: number;
  reviewsCount: number;
  badge: string;
  mainImage: string;
  gallery: string[];
  description: string;
  bedrooms: number;
  maxGuests: number;
  poolType: string;
  privacyLevel: '100% Fully Secluded' | 'High Privacy Screened' | 'Private Lagoon Access';
  highlights: string[];
  features: {
    privatePool: boolean;
    halalDining: boolean;
    alcoholFree: boolean;
    womenSpa: boolean;
    prayerFacilities: boolean;
    butlerService: boolean;
    oceanView: boolean;
  };
  dimensions: string;
}

export interface BookingFormState {
  resortId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  children: number;
  villasCount: number;
  specialRequests: string;
  privacyScreening: boolean;
  halalGourmetPackage: boolean;
  vipAirportTransfer: boolean;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
}
