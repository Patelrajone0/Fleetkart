export type FuelType = 'Petrol' | 'Diesel' | 'CNG' | 'Electric' | 'Hybrid';
export type Transmission = 'Manual' | 'Automatic';
export type BuyingTimeline = 'Ready to book in 7 days' | 'Within 30 days' | 'Just researching';
export type ReadinessStatus = 'Token Ready (₹25k)' | 'Loan Pre-Approved' | 'Cash Ready' | 'Negotiating Token';

export interface User {
  id: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  state: string;
  timeline: BuyingTimeline;
  isVerified: boolean;
  avatar: string;
}

export interface CityOption {
  city: string;
  state: string;
  tier: 'Tier-1' | 'Tier-2' | 'Tier-3';
  popular?: boolean;
}

export interface CarModel {
  id: string;
  brand: string;
  model: string;
  tagline: string;
  bodyType: 'SUV' | 'Sedan' | 'Hatchback' | 'MPV';
  fuelTypes: FuelType[];
  transmissions: Transmission[];
  estimatedSavingsRange: string; // e.g. "Up to ₹1.50 Lakh+"
  discountTier: string; // e.g. "Corporate Fleet Tier 1"
  imageUrl: string;
  colorOptions: string[];
  popularVariant: string;
  minPriceLakh?: number; // e.g. 8.5
  maxPriceLakh?: number; // e.g. 11.3
  variantsCount?: number; // e.g. 14
  groupDealStatus?: string; // e.g. "Group forming"
}

export interface FleetMember {
  id: string;
  name: string;
  city: string;
  area: string;
  variant: string;
  fuel: FuelType;
  transmission: Transmission;
  color: string;
  readiness: ReadinessStatus;
  joinedAt: string;
  avatar: string;
  isCurrentUser?: boolean;
}

export interface DealerQuote {
  id: string;
  dealerName: string;
  dealerLocation: string; // e.g. SG Highway, Ahmedabad
  city: string;
  rating: number;
  reviewsCount: number;
  discountOfferText: string; // e.g. "Maximum Fleet Discount: Up to ₹1.50 Lakh Off + Perks"
  estimatedSavings: string; // e.g. "Up to ₹1.50 Lakh"
  perks: string[]; // e.g. "Free 3-Yr Nil-Dep Insurance", "₹25k Accessories kit", "Immediate Delivery"
  deliveryDays: number;
  votes: number;
  voters: string[]; // user IDs or member names
  isVerifiedDealer: boolean;
  badge?: string; // e.g. "Highest Discount Bid" or "Fastest Delivery"
  quoteStatus: 'Active Bid' | 'Accepted' | 'Under Review';
}

export interface ChatMessage {
  id: string;
  senderId: string;
  senderName: string;
  senderAvatar: string;
  text: string;
  timestamp: string;
  isSystem?: boolean;
  isDealerQuoteShare?: boolean;
  quoteData?: {
    dealerName: string;
    discountOffer: string;
    notes: string;
  };
}

export interface Fleet {
  id: string;
  carId: string;
  brand: string;
  model: string;
  variant: string;
  fuelType: FuelType;
  transmission: Transmission;
  city: string;
  state: string;
  creatorId: string;
  creatorName?: string;
  targetSize: number; // e.g. 5
  joinedMembers: FleetMember[];
  status: 'Open' | 'Almost Full' | 'Locked' | 'Deal Confirmed';
  pricingModel: 'Competitive Dealer Quotation';
  estimatedSavingsBadge: string; // e.g. "Save Up to ₹1.50 Lakh+"
  createdAt: string;
  deadlineHours: number;
  dealerQuotes: DealerQuote[];
  chatMessages: ChatMessage[];
  description?: string;
  carImageUrl: string;
}
