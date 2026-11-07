import { FuelType } from '../types';

export interface CarBrandModel {
  brand: string;
  models: {
    name: string;
    bodyType: 'SUV' | 'Sedan' | 'Hatchback' | 'MPV' | 'EV';
    fuelTypes: FuelType[];
    savingsBadge: string;
    imageUrl?: string;
  }[];
}

export const ALL_CAR_BRANDS_MODELS: CarBrandModel[] = [
  {
    brand: 'Hyundai',
    models: [
      { name: 'Creta', bodyType: 'SUV', fuelTypes: ['Petrol', 'Diesel'], savingsBadge: 'Save Up to ₹1.50 Lakh+' },
      { name: 'Venue', bodyType: 'SUV', fuelTypes: ['Petrol', 'Diesel'], savingsBadge: 'Save Up to ₹95,000+' },
      { name: 'Verna', bodyType: 'Sedan', fuelTypes: ['Petrol'], savingsBadge: 'Save Up to ₹1.30 Lakh+' },
      { name: 'Exter', bodyType: 'SUV', fuelTypes: ['Petrol', 'CNG'], savingsBadge: 'Save Up to ₹70,000+' },
      { name: 'Alcazar', bodyType: 'SUV', fuelTypes: ['Petrol', 'Diesel'], savingsBadge: 'Save Up to ₹1.45 Lakh+' },
      { name: 'Tucson', bodyType: 'SUV', fuelTypes: ['Petrol', 'Diesel'], savingsBadge: 'Save Up to ₹2.10 Lakh+' },
      { name: 'Grand i10 Nios', bodyType: 'Hatchback', fuelTypes: ['Petrol', 'CNG'], savingsBadge: 'Save Up to ₹55,000+' },
      { name: 'Aura', bodyType: 'Sedan', fuelTypes: ['Petrol', 'CNG'], savingsBadge: 'Save Up to ₹60,000+' },
      { name: 'Ioniq 5', bodyType: 'EV', fuelTypes: ['Electric'], savingsBadge: 'Save Up to ₹3.00 Lakh+' }
    ]
  },
  {
    brand: 'Tata',
    models: [
      { name: 'Nexon', bodyType: 'SUV', fuelTypes: ['Petrol', 'Diesel', 'Electric', 'CNG'], savingsBadge: 'Save Up to ₹1.20 Lakh+' },
      { name: 'Punch', bodyType: 'SUV', fuelTypes: ['Petrol', 'CNG', 'Electric'], savingsBadge: 'Save Up to ₹75,000+' },
      { name: 'Harrier', bodyType: 'SUV', fuelTypes: ['Diesel'], savingsBadge: 'Save Up to ₹1.90 Lakh+' },
      { name: 'Safari', bodyType: 'SUV', fuelTypes: ['Diesel'], savingsBadge: 'Save Up to ₹2.20 Lakh+' },
      { name: 'Curvv', bodyType: 'SUV', fuelTypes: ['Petrol', 'Diesel', 'Electric'], savingsBadge: 'Save Up to ₹1.35 Lakh+' },
      { name: 'Altroz', bodyType: 'Hatchback', fuelTypes: ['Petrol', 'Diesel', 'CNG'], savingsBadge: 'Save Up to ₹80,000+' },
      { name: 'Tiago', bodyType: 'Hatchback', fuelTypes: ['Petrol', 'CNG', 'Electric'], savingsBadge: 'Save Up to ₹50,000+' },
      { name: 'Tigor', bodyType: 'Sedan', fuelTypes: ['Petrol', 'CNG', 'Electric'], savingsBadge: 'Save Up to ₹55,000+' }
    ]
  },
  {
    brand: 'Mahindra',
    models: [
      { name: 'Scorpio-N', bodyType: 'SUV', fuelTypes: ['Diesel', 'Petrol'], savingsBadge: 'Save Up to ₹1.70 Lakh+' },
      { name: 'XUV700', bodyType: 'SUV', fuelTypes: ['Diesel', 'Petrol'], savingsBadge: 'Save Up to ₹1.90 Lakh+' },
      { name: 'Thar Roxx', bodyType: 'SUV', fuelTypes: ['Diesel', 'Petrol'], savingsBadge: 'Save Up to ₹1.60 Lakh+' },
      { name: 'Thar', bodyType: 'SUV', fuelTypes: ['Diesel', 'Petrol'], savingsBadge: 'Save Up to ₹1.25 Lakh+' },
      { name: 'XUV 3XO', bodyType: 'SUV', fuelTypes: ['Petrol', 'Diesel'], savingsBadge: 'Save Up to ₹85,000+' },
      { name: 'Scorpio Classic', bodyType: 'SUV', fuelTypes: ['Diesel'], savingsBadge: 'Save Up to ₹1.10 Lakh+' },
      { name: 'Bolero Neo', bodyType: 'SUV', fuelTypes: ['Diesel'], savingsBadge: 'Save Up to ₹75,000+' },
      { name: 'BE 6e', bodyType: 'EV', fuelTypes: ['Electric'], savingsBadge: 'Save Up to ₹2.50 Lakh+' }
    ]
  },
  {
    brand: 'Maruti Suzuki',
    models: [
      { name: 'Grand Vitara', bodyType: 'SUV', fuelTypes: ['Hybrid', 'Petrol', 'CNG'], savingsBadge: 'Save Up to ₹1.40 Lakh+' },
      { name: 'Brezza', bodyType: 'SUV', fuelTypes: ['Petrol', 'CNG'], savingsBadge: 'Save Up to ₹90,000+' },
      { name: 'Fronx', bodyType: 'SUV', fuelTypes: ['Petrol', 'CNG'], savingsBadge: 'Save Up to ₹75,000+' },
      { name: 'Baleno', bodyType: 'Hatchback', fuelTypes: ['Petrol', 'CNG'], savingsBadge: 'Save Up to ₹65,000+' },
      { name: 'Swift', bodyType: 'Hatchback', fuelTypes: ['Petrol', 'CNG'], savingsBadge: 'Save Up to ₹60,000+' },
      { name: 'Dzire', bodyType: 'Sedan', fuelTypes: ['Petrol', 'CNG'], savingsBadge: 'Save Up to ₹65,000+' },
      { name: 'Ertiga', bodyType: 'MPV', fuelTypes: ['Petrol', 'CNG'], savingsBadge: 'Save Up to ₹80,000+' },
      { name: 'XL6', bodyType: 'MPV', fuelTypes: ['Petrol', 'CNG'], savingsBadge: 'Save Up to ₹95,000+' },
      { name: 'Jimny', bodyType: 'SUV', fuelTypes: ['Petrol'], savingsBadge: 'Save Up to ₹1.50 Lakh+' },
      { name: 'Invicto', bodyType: 'MPV', fuelTypes: ['Hybrid'], savingsBadge: 'Save Up to ₹2.00 Lakh+' }
    ]
  },
  {
    brand: 'Kia',
    models: [
      { name: 'Seltos', bodyType: 'SUV', fuelTypes: ['Petrol', 'Diesel'], savingsBadge: 'Save Up to ₹1.40 Lakh+' },
      { name: 'Sonet', bodyType: 'SUV', fuelTypes: ['Petrol', 'Diesel'], savingsBadge: 'Save Up to ₹1.05 Lakh+' },
      { name: 'Carens', bodyType: 'MPV', fuelTypes: ['Petrol', 'Diesel'], savingsBadge: 'Save Up to ₹1.15 Lakh+' },
      { name: 'Carnival', bodyType: 'MPV', fuelTypes: ['Diesel'], savingsBadge: 'Save Up to ₹2.80 Lakh+' },
      { name: 'EV6', bodyType: 'EV', fuelTypes: ['Electric'], savingsBadge: 'Save Up to ₹3.20 Lakh+' }
    ]
  },
  {
    brand: 'Toyota',
    models: [
      { name: 'Innova Hycross', bodyType: 'MPV', fuelTypes: ['Hybrid', 'Petrol'], savingsBadge: 'Save Up to ₹1.80 Lakh+' },
      { name: 'Fortuner', bodyType: 'SUV', fuelTypes: ['Diesel', 'Petrol'], savingsBadge: 'Save Up to ₹2.50 Lakh+' },
      { name: 'Urban Cruiser Hyryder', bodyType: 'SUV', fuelTypes: ['Hybrid', 'Petrol', 'CNG'], savingsBadge: 'Save Up to ₹1.35 Lakh+' },
      { name: 'Innova Crysta', bodyType: 'MPV', fuelTypes: ['Diesel'], savingsBadge: 'Save Up to ₹1.50 Lakh+' },
      { name: 'Glanza', bodyType: 'Hatchback', fuelTypes: ['Petrol', 'CNG'], savingsBadge: 'Save Up to ₹60,000+' },
      { name: 'Rumion', bodyType: 'MPV', fuelTypes: ['Petrol', 'CNG'], savingsBadge: 'Save Up to ₹75,000+' },
      { name: 'Hilux', bodyType: 'SUV', fuelTypes: ['Diesel'], savingsBadge: 'Save Up to ₹3.00 Lakh+' },
      { name: 'Camry', bodyType: 'Sedan', fuelTypes: ['Hybrid'], savingsBadge: 'Save Up to ₹2.50 Lakh+' }
    ]
  },
  {
    brand: 'Honda',
    models: [
      { name: 'Elevate', bodyType: 'SUV', fuelTypes: ['Petrol'], savingsBadge: 'Save Up to ₹1.25 Lakh+' },
      { name: 'City', bodyType: 'Sedan', fuelTypes: ['Petrol', 'Hybrid'], savingsBadge: 'Save Up to ₹1.35 Lakh+' },
      { name: 'Amaze', bodyType: 'Sedan', fuelTypes: ['Petrol'], savingsBadge: 'Save Up to ₹70,000+' }
    ]
  },
  {
    brand: 'Volkswagen',
    models: [
      { name: 'Taigun', bodyType: 'SUV', fuelTypes: ['Petrol'], savingsBadge: 'Save Up to ₹1.45 Lakh+' },
      { name: 'Virtus', bodyType: 'Sedan', fuelTypes: ['Petrol'], savingsBadge: 'Save Up to ₹1.40 Lakh+' },
      { name: 'Tiguan', bodyType: 'SUV', fuelTypes: ['Petrol'], savingsBadge: 'Save Up to ₹2.60 Lakh+' }
    ]
  },
  {
    brand: 'Skoda',
    models: [
      { name: 'Kushaq', bodyType: 'SUV', fuelTypes: ['Petrol'], savingsBadge: 'Save Up to ₹1.50 Lakh+' },
      { name: 'Slavia', bodyType: 'Sedan', fuelTypes: ['Petrol'], savingsBadge: 'Save Up to ₹1.40 Lakh+' },
      { name: 'Kylaq', bodyType: 'SUV', fuelTypes: ['Petrol'], savingsBadge: 'Save Up to ₹85,000+' },
      { name: 'Kodiaq', bodyType: 'SUV', fuelTypes: ['Petrol'], savingsBadge: 'Save Up to ₹2.75 Lakh+' }
    ]
  },
  {
    brand: 'MG',
    models: [
      { name: 'Hector', bodyType: 'SUV', fuelTypes: ['Petrol', 'Diesel'], savingsBadge: 'Save Up to ₹1.60 Lakh+' },
      { name: 'Windsor EV', bodyType: 'EV', fuelTypes: ['Electric'], savingsBadge: 'Save Up to ₹1.20 Lakh+' },
      { name: 'ZS EV', bodyType: 'EV', fuelTypes: ['Electric'], savingsBadge: 'Save Up to ₹2.20 Lakh+' },
      { name: 'Comet EV', bodyType: 'EV', fuelTypes: ['Electric'], savingsBadge: 'Save Up to ₹80,000+' },
      { name: 'Astor', bodyType: 'SUV', fuelTypes: ['Petrol'], savingsBadge: 'Save Up to ₹1.30 Lakh+' },
      { name: 'Gloster', bodyType: 'SUV', fuelTypes: ['Diesel'], savingsBadge: 'Save Up to ₹2.80 Lakh+' }
    ]
  },
  {
    brand: 'Renault',
    models: [
      { name: 'Kiger', bodyType: 'SUV', fuelTypes: ['Petrol'], savingsBadge: 'Save Up to ₹85,000+' },
      { name: 'Triber', bodyType: 'MPV', fuelTypes: ['Petrol'], savingsBadge: 'Save Up to ₹70,000+' },
      { name: 'Kwid', bodyType: 'Hatchback', fuelTypes: ['Petrol'], savingsBadge: 'Save Up to ₹45,000+' }
    ]
  },
  {
    brand: 'Nissan',
    models: [
      { name: 'Magnite', bodyType: 'SUV', fuelTypes: ['Petrol', 'CNG'], savingsBadge: 'Save Up to ₹85,000+' },
      { name: 'X-Trail', bodyType: 'SUV', fuelTypes: ['Petrol'], savingsBadge: 'Save Up to ₹2.50 Lakh+' }
    ]
  }
];

export interface IndianStateInfo {
  name: string;
  type: 'State' | 'Union Territory';
  popular?: boolean;
  region: string;
}

// The exact 28 Indian States in strict A-to-Z ascending sequence
export const INDIAN_STATES_LIST: IndianStateInfo[] = [
  { name: 'Andhra Pradesh', type: 'State', region: 'Southern India' },
  { name: 'Arunachal Pradesh', type: 'State', region: 'North-Eastern India' },
  { name: 'Assam', type: 'State', region: 'North-Eastern India' },
  { name: 'Bihar', type: 'State', region: 'Eastern India' },
  { name: 'Chhattisgarh', type: 'State', region: 'Central India' },
  { name: 'Goa', type: 'State', region: 'Western India' },
  { name: 'Gujarat', type: 'State', region: 'Western India' },
  { name: 'Haryana', type: 'State', region: 'Northern India' },
  { name: 'Himachal Pradesh', type: 'State', region: 'Northern India' },
  { name: 'Jharkhand', type: 'State', region: 'Eastern India' },
  { name: 'Karnataka', type: 'State', region: 'Southern India' },
  { name: 'Kerala', type: 'State', region: 'Southern India' },
  { name: 'Madhya Pradesh', type: 'State', region: 'Central India' },
  { name: 'Maharashtra', type: 'State', region: 'Western India' },
  { name: 'Manipur', type: 'State', region: 'North-Eastern India' },
  { name: 'Meghalaya', type: 'State', region: 'North-Eastern India' },
  { name: 'Mizoram', type: 'State', region: 'North-Eastern India' },
  { name: 'Nagaland', type: 'State', region: 'North-Eastern India' },
  { name: 'Odisha', type: 'State', region: 'Eastern India' },
  { name: 'Punjab', type: 'State', region: 'Northern India' },
  { name: 'Rajasthan', type: 'State', region: 'Northern India' },
  { name: 'Sikkim', type: 'State', region: 'North-Eastern India' },
  { name: 'Tamil Nadu', type: 'State', region: 'Southern India' },
  { name: 'Telangana', type: 'State', region: 'Southern India' },
  { name: 'Tripura', type: 'State', region: 'North-Eastern India' },
  { name: 'Uttar Pradesh', type: 'State', region: 'Northern India' },
  { name: 'Uttarakhand', type: 'State', region: 'Northern India' },
  { name: 'West Bengal', type: 'State', region: 'Eastern India' }
];

export const ALL_INDIAN_STATES = [
  'All States',
  ...INDIAN_STATES_LIST.map((s) => s.name)
];
