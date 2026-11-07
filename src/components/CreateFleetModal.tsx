import React, { useState, useMemo, useEffect } from 'react';
import { 
  X, 
  PlusCircle, 
  Sparkles, 
  Building2,
  Car,
  Users,
  Calendar,
  Map,
  MapPin
} from 'lucide-react';
import { CAR_CATALOG, INDIAN_CITIES } from '../data/mockData';
import { ALL_INDIAN_STATES } from '../data/carBrandsData';
import { ALL_LIBRARY_BRANDS, getModelsForBrand, getCarImageUrl } from '../data/carsLibrary';
import { getCarModelMetadata } from '../utils/carMetadata';
import { Fleet, FuelType, Transmission, User } from '../types';
import { CustomSelect } from './CustomSelect';

interface CreateFleetModalProps {
  currentUser: User;
  initialCarId?: string;
  onClose: () => void;
  onCreateFleet: (newFleet: Fleet) => void;
}

// Major carmakers operating in India prioritized at the top of the dropdown
const MAJOR_INDIAN_BRANDS = [
  'Maruti Suzuki',
  'Hyundai',
  'Tata',
  'Mahindra',
  'Toyota',
  'Kia',
  'Honda',
  'Volkswagen',
  'Skoda',
  'MG',
  'Renault',
  'Nissan',
  'BYD',
  'Citroen',
  'Force Motors',
  'Jeep'
];

export const CreateFleetModal: React.FC<CreateFleetModalProps> = ({
  currentUser,
  initialCarId,
  onClose,
  onCreateFleet,
}) => {
  // Find initial car details if pre-selected via 'Join Group Deal' button
  const initialCar = initialCarId ? CAR_CATALOG.find((c) => c.id === initialCarId) : undefined;

  const [selectedBrand, setSelectedBrand] = useState<string>(initialCar?.brand || 'Hyundai');
  const [selectedModel, setSelectedModel] = useState<string>(initialCar?.model || 'Creta');
  
  // Location selection: State first, then strictly filtered cities of that state
  const initialUserState = currentUser.state || 'Gujarat';
  const [selectedState, setSelectedState] = useState<string>(initialUserState);

  // Available cities strictly for selectedState in ascending A-to-Z order
  const availableCitiesForState = useMemo(() => {
    const list = INDIAN_CITIES.filter((c) => c.state.toLowerCase() === selectedState.toLowerCase());
    return [...list].sort((a, b) => a.city.localeCompare(b.city));
  }, [selectedState]);

  const [selectedCity, setSelectedCity] = useState<string>(() => {
    const list = INDIAN_CITIES.filter((c) => c.state.toLowerCase() === initialUserState.toLowerCase());
    if (currentUser.city && list.some(c => c.city.toLowerCase() === currentUser.city.toLowerCase())) {
      return currentUser.city;
    }
    const sorted = [...list].sort((a, b) => a.city.localeCompare(b.city));
    return sorted.length > 0 ? sorted[0].city : 'Ahmedabad';
  });

  // When State changes, auto-select the first city of the newly selected state
  const handleStateChange = (newState: string) => {
    setSelectedState(newState);
    const citiesInState = INDIAN_CITIES.filter((c) => c.state.toLowerCase() === newState.toLowerCase());
    if (citiesInState.length > 0) {
      const sorted = [...citiesInState].sort((a, b) => a.city.localeCompare(b.city));
      setSelectedCity(sorted[0].city);
    }
  };
  
  // Dynamic car metadata (fuel types, popular variant, signature colors)
  const meta = useMemo(() => {
    return getCarModelMetadata(selectedBrand, selectedModel);
  }, [selectedBrand, selectedModel]);

  const [fuelType, setFuelType] = useState<FuelType>(meta.defaultFuel);
  const [transmission, setTransmission] = useState<Transmission>(meta.defaultTransmission);
  
  // Target fleet size: simple number input (min 3, max 100)
  const [targetSize, setTargetSize] = useState<number | ''>(5);
  const [bookingDays, setBookingDays] = useState<number>(7);
  const [variantName, setVariantName] = useState<string>('');
  const [colorPref, setColorPref] = useState<string>('Polar White');

  // Sorted list of all 36 brands: Major Indian OEMs first, followed by others alphabetically
  const sortedBrands = useMemo(() => {
    const popularSet = new Set(MAJOR_INDIAN_BRANDS);
    const availablePopular = MAJOR_INDIAN_BRANDS.filter((b) => ALL_LIBRARY_BRANDS.includes(b));
    const others = ALL_LIBRARY_BRANDS.filter((b) => !popularSet.has(b)).sort((a, b) => a.localeCompare(b));
    return [...availablePopular, ...others];
  }, []);

  // Dynamic models strictly for the selected company
  const availableModels = useMemo(() => {
    const models = getModelsForBrand(selectedBrand);
    if (models.length > 0) return models;
    return [selectedModel];
  }, [selectedBrand, selectedModel]);

  // Dynamic background-free car studio image from cars/<Company>/<Model.png>
  const resolvedCarImage = useMemo(() => {
    return getCarImageUrl(selectedBrand, selectedModel);
  }, [selectedBrand, selectedModel]);

  // When Company changes, auto-select its first available model
  const handleBrandChange = (newBrand: string) => {
    setSelectedBrand(newBrand);
    const models = getModelsForBrand(newBrand);
    if (models.length > 0) {
      setSelectedModel(models[0]);
    }
  };

  // Fuel options always includes Electric as requested
  const availableFuels: FuelType[] = useMemo(() => {
    const list = [...meta.fuelTypes];
    if (!list.includes('Electric')) {
      list.push('Electric');
    }
    return list;
  }, [meta.fuelTypes]);

  // Formatted options for custom animated select dropdowns
  const brandOptions = useMemo(() => {
    return [
      ...MAJOR_INDIAN_BRANDS.map((brand) => ({
        value: brand,
        label: brand,
        group: 'Popular Brands in India',
      })),
      ...sortedBrands
        .filter((b) => !MAJOR_INDIAN_BRANDS.includes(b))
        .map((brand) => ({
          value: brand,
          label: brand,
          group: 'Other Operating Brands',
        })),
    ];
  }, [sortedBrands]);

  const modelOptions = useMemo(() => {
    return availableModels.map((model) => ({
      value: model,
      label: `${selectedBrand} ${model}`,
    }));
  }, [availableModels, selectedBrand]);

  const stateOptions = useMemo(() => {
    return ALL_INDIAN_STATES.filter((s) => s !== 'All States').map((st) => ({
      value: st,
      label: st,
    }));
  }, []);

  const cityOptions = useMemo(() => {
    return availableCitiesForState.map((c) => ({
      value: c.city,
      label: c.city,
      badge: c.tier,
    }));
  }, [availableCitiesForState]);

  const fuelOptions = useMemo(() => {
    return availableFuels.map((ft) => ({
      value: ft,
      label: ft,
    }));
  }, [availableFuels]);

  const transmissionOptions = [
    { value: 'Automatic', label: 'Automatic' },
    { value: 'Manual', label: 'Manual' },
  ];

  const bookingDaysOptions = [
    { value: '7', label: 'Within 7 Days (Fastest Deal Closure 🔥)' },
    { value: '15', label: 'Within 15 Days' },
    { value: '30', label: 'Within 30 Days (End of Month Target)' },
  ];

  // Sync default fuel & transmission when metadata updates for selected car
  useEffect(() => {
    if (!availableFuels.includes(fuelType)) {
      setFuelType(meta.defaultFuel);
    }
  }, [availableFuels, meta.defaultFuel, fuelType]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Ensure targetSize is clamped between 3 and 100
    const rawTarget = typeof targetSize === 'number' ? targetSize : parseInt(targetSize, 10);
    const finalTargetSize = isNaN(rawTarget) ? 5 : Math.max(3, Math.min(100, rawTarget));

    const matchedCity = INDIAN_CITIES.find((c) => c.city === selectedCity);
    const cleanBrandId = selectedBrand.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const cleanModelId = selectedModel.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const newFleetId = `fleet-${cleanBrandId}-${cleanModelId}-${Date.now().toString().slice(-4)}`;

    const newFleet: Fleet = {
      id: newFleetId,
      carId: `${cleanBrandId}-${cleanModelId}`,
      brand: selectedBrand,
      model: selectedModel,
      variant: variantName.trim() || meta.popularVariant,
      fuelType,
      transmission,
      city: selectedCity,
      state: selectedState || (matchedCity ? matchedCity.state : 'Gujarat'),
      creatorId: currentUser.id,
      creatorName: currentUser.name,
      targetSize: finalTargetSize,
      pricingModel: 'Competitive Dealer Quotation',
      estimatedSavingsBadge: meta.savingsBadge,
      status: 'Open',
      createdAt: 'Just now',
      deadlineHours: bookingDays * 24,
      carImageUrl: resolvedCarImage,
      description: `${selectedCity} buyers group for ${selectedBrand} ${selectedModel}. Authorized showrooms will submit bulk tenders once ${finalTargetSize} buyers assemble.`,
      joinedMembers: [
        {
          id: currentUser.id,
          name: currentUser.name,
          city: selectedCity,
          area: 'Satellite / Central Area',
          variant: variantName.trim() || meta.popularVariant,
          fuel: fuelType,
          transmission,
          color: colorPref || 'Polar White',
          readiness: 'Token Ready (₹25k)',
          joinedAt: 'Just Now',
          avatar: currentUser.avatar,
          isCurrentUser: true,
        }
      ],
      dealerQuotes: [
        {
          id: `quote-${Date.now()}-1`,
          dealerName: `${selectedCity} Regional ${selectedBrand}`,
          dealerLocation: `Commercial Auto Hub, ${selectedCity}`,
          city: selectedCity,
          rating: 4.8,
          reviewsCount: 450,
          discountOfferText: `High-Volume Fleet Subsidy + Free 3-Yr Maintenance Pack`,
          estimatedSavings: meta.savingsBadge,
          perks: [
            'Direct Dealer Margin Pass-Through',
            'Complimentary Bumper-to-Bumper Insurance',
            'Essential Accessories Pack Included'
          ],
          deliveryDays: 10,
          votes: 1,
          voters: [currentUser.name],
          isVerifiedDealer: true,
          badge: 'Starting Dealer Tender',
          quoteStatus: 'Active Bid'
        }
      ],
      chatMessages: [
        {
          id: `msg-${Date.now()}-1`,
          senderId: currentUser.id,
          senderName: currentUser.name,
          senderAvatar: currentUser.avatar,
          text: `Hi everyone! I just launched this ${selectedBrand} ${selectedModel} fleet for ${selectedCity}. Let's get ${finalTargetSize} buyers together so dealerships can submit their competitive tenders!`,
          timestamp: 'Just now'
        }
      ]
    };

    onCreateFleet(newFleet);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0F172A]/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 lg:p-8 overflow-hidden animate-in fade-in duration-200">
      
      {/* Centered Modal Card with Safe Margins on all 4 Sides */}
      <div className="w-full max-w-xl max-h-[88vh] bg-white border border-[#ADBBDA] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Sticky Header */}
        <div className="shrink-0 bg-[#3D52A0] border-b border-[#3D52A0] p-4 sm:p-5 flex items-center justify-between text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#7091E6]/30 text-white flex items-center justify-center border border-[#ADBBDA]/30">
              <PlusCircle className="w-5 h-5 text-[#EDE8F5]" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-white leading-tight">
                {initialCarId ? `Start ${selectedBrand} ${selectedModel} Fleet` : 'Start a New Buying Fleet'}
              </h3>
              <p className="text-[11px] text-[#ADBBDA]">
                Group car buying with zero dealer negotiation hassle
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-white hover:text-white p-2 rounded-xl bg-[#7091E6]/30 hover:bg-[#7091E6] transition-colors cursor-pointer shrink-0"
            title="Close"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-4 sm:p-5 pb-6 sm:pb-7 space-y-4 text-xs sm:text-sm bg-white">
          
          {/* 1. SELECT COMPANY */}
          <div>
            <label className="block text-[#3D52A0] font-bold mb-1 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs sm:text-sm">
                <Building2 className="w-4 h-4 text-[#7091E6]" />
                Select Company
              </span>
              <span className="text-[11px] font-normal text-[#64748B]">
                {sortedBrands.length} Automobile Brands
              </span>
            </label>
            <CustomSelect
              value={selectedBrand}
              onChange={(val) => handleBrandChange(val)}
              options={brandOptions}
              placeholder="Select Company"
              searchPlaceholder="Find company..."
            />
          </div>

          {/* 2. SELECT MODEL (Strictly shows models of chosen company) */}
          <div>
            <label className="block text-[#3D52A0] font-bold mb-1 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs sm:text-sm">
                <Car className="w-4 h-4 text-[#7091E6]" />
                Select Model
              </span>
              <span className="text-[11px] font-semibold text-[#0284C7]">
                {availableModels.length} models for {selectedBrand}
              </span>
            </label>
            <CustomSelect
              value={selectedModel}
              onChange={(val) => setSelectedModel(val)}
              options={modelOptions}
              placeholder="Select Model"
              searchPlaceholder="Find model..."
            />
          </div>

          {/* 3. CLEAN CAR PHOTO PREVIEW (Minimal, clean, uncluttered) */}
          <div className="rounded-2xl bg-gradient-to-b from-[#F8FAFC] to-white border border-[#ADBBDA]/70 p-3 sm:p-3.5 shadow-2xs flex items-center gap-3.5">
            <div className="w-32 sm:w-36 h-20 sm:h-22 shrink-0 bg-white rounded-xl border border-slate-100 flex items-center justify-center p-1.5 shadow-2xs">
              <img
                src={resolvedCarImage}
                alt={`${selectedBrand} ${selectedModel}`}
                className="max-h-full max-w-full object-contain drop-shadow-sm transition-transform duration-300 hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/cars/Hyundai/Hyundai%20Creta.png';
                }}
              />
            </div>
            <div className="flex-1 space-y-1">
              <span className="text-[10px] font-black uppercase text-[#3D52A0] bg-[#EDE8F5] px-2 py-0.5 rounded-md border border-[#ADBBDA]/50">
                {selectedBrand}
              </span>
              <h4 className="text-base sm:text-lg font-black text-[#1E2E4E] leading-tight">
                {selectedModel}
              </h4>
            </div>
          </div>

          {/* 4. FLEET STATE & FLEET CITY (2 Columns: Cascading by Selected State) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            <div>
              <label className="block text-[#3D52A0] font-bold mb-1 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs sm:text-sm">
                  <Map className="w-3.5 h-3.5 text-[#7091E6]" />
                  Fleet State
                </span>
                <span className="text-[10px] font-normal text-[#64748B]">
                  28 States
                </span>
              </label>
              <CustomSelect
                value={selectedState}
                onChange={(val) => handleStateChange(val)}
                options={stateOptions}
                placeholder="Select State"
                searchPlaceholder="Find state..."
              />
            </div>

            <div>
              <label className="block text-[#3D52A0] font-bold mb-1 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs sm:text-sm">
                  <MapPin className="w-3.5 h-3.5 text-[#7091E6]" />
                  Fleet City
                </span>
                <span className="text-[10px] font-semibold text-[#0284C7]">
                  {availableCitiesForState.length} Cities
                </span>
              </label>
              <CustomSelect
                value={selectedCity}
                onChange={(val) => setSelectedCity(val)}
                options={cityOptions}
                placeholder="Select City"
                searchPlaceholder="Find city..."
              />
            </div>
          </div>

          {/* 5. VARIANT / TRIM & FUEL TYPE (2 columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            <div>
              <label className="block text-[#3D52A0] font-semibold mb-1">
                Variant / Trim
              </label>
              <input
                type="text"
                value={variantName}
                onChange={(e) => setVariantName(e.target.value)}
                placeholder={meta.popularVariant}
                className="w-full bg-[#EDE8F5] border border-[#ADBBDA] rounded-xl px-3.5 py-2 text-[#3D52A0] placeholder-[#8697C4] text-xs sm:text-sm focus:outline-none focus:border-[#7091E6]"
              />
            </div>

            <div>
              <label className="block text-[#3D52A0] font-semibold mb-1 flex items-center justify-between">
                <span>Fuel Type</span>
                <span className="text-[10px] text-[#7091E6] font-normal">{availableFuels.join(' / ')}</span>
              </label>
              <CustomSelect
                value={fuelType}
                onChange={(val) => setFuelType(val as FuelType)}
                options={fuelOptions}
                searchable={false}
              />
            </div>
          </div>

          {/* 6. TRANSMISSION & PREFERRED COLOR (2 columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            <div>
              <label className="block text-[#3D52A0] font-semibold mb-1">
                Transmission
              </label>
              <CustomSelect
                value={transmission}
                onChange={(val) => setTransmission(val as Transmission)}
                options={transmissionOptions}
                searchable={false}
              />
            </div>

            <div>
              <label className="block text-[#3D52A0] font-semibold mb-1">
                Your Preferred Color
              </label>
              <input
                type="text"
                value={colorPref}
                onChange={(e) => setColorPref(e.target.value)}
                placeholder={meta.popularColors}
                className="w-full bg-[#EDE8F5] border border-[#ADBBDA] rounded-xl px-3.5 py-2 text-[#3D52A0] placeholder-[#8697C4] text-xs sm:text-sm focus:outline-none focus:border-[#7091E6]"
              />
            </div>
          </div>

          {/* 7. TARGET FLEET SIZE (Simple Number Input: Min 3, Max 100) */}
          <div>
            <label className="block text-[#3D52A0] font-semibold mb-1 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#7091E6]" />
                Target Fleet Size
              </span>
              <span className="text-[11px] font-semibold text-[#0284C7]">
                Min 3 – Max 100 buyers
              </span>
            </label>
            <div className="relative">
              <input
                type="number"
                min={3}
                max={100}
                value={targetSize}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val === '') {
                    setTargetSize('');
                  } else {
                    const num = parseInt(val, 10);
                    if (!isNaN(num)) setTargetSize(num);
                  }
                }}
                onBlur={() => {
                  if (typeof targetSize !== 'number' || targetSize < 3) {
                    setTargetSize(3);
                  } else if (targetSize > 100) {
                    setTargetSize(100);
                  }
                }}
                placeholder="Enter number (e.g. 5)"
                className="w-full bg-[#EDE8F5] border border-[#ADBBDA] rounded-xl px-3.5 py-2 text-[#3D52A0] font-bold text-xs sm:text-sm focus:outline-none focus:border-[#7091E6] focus:ring-2 focus:ring-[#7091E6]/20 pr-16"
              />
              <span className="absolute right-3.5 top-2 text-xs font-bold text-[#7091E6] pointer-events-none">
                Buyers
              </span>
            </div>
          </div>

          {/* 8. TARGET BOOKING WINDOW */}
          <div>
            <label className="block text-[#3D52A0] font-semibold mb-1 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#7091E6]" />
              Target Booking Window
            </label>
            <CustomSelect
              value={String(bookingDays)}
              onChange={(val) => setBookingDays(parseInt(val, 10))}
              options={bookingDaysOptions}
              searchable={false}
            />
          </div>

          {/* 9. SUBMIT BUTTON (Positioned directly below Target Booking Window) */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#7091E6] hover:bg-[#3D52A0] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-[#7091E6]/25 transition-all cursor-pointer transform active:scale-98"
            >
              <Sparkles className="w-4 h-4" />
              <span>Launch Fleet</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
