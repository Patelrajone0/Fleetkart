import React, { useMemo } from 'react';
import { 
  Car, 
  MapPin, 
  Map, 
  Fuel, 
  Tag, 
  PlusCircle, 
  RotateCcw, 
  Users, 
  Sparkles
} from 'lucide-react';
import { INDIAN_CITIES } from '../data/mockData';
import { ALL_CAR_BRANDS_MODELS, ALL_INDIAN_STATES } from '../data/carBrandsData';
import { CustomSelect } from './CustomSelect';

interface FleetFilterSectionProps {
  activeTab: 'fleets' | 'my-fleets';
  setActiveTab: (tab: 'fleets' | 'my-fleets') => void;
  myFleetsCount: number;
  onOpenCreateFleet: () => void;
  
  // Filter States
  selectedState: string;
  setSelectedState: (state: string) => void;
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  selectedBrand: string;
  setSelectedBrand: (brand: string) => void;
  selectedModel: string;
  setSelectedModel: (model: string) => void;
  selectedFuel: string;
  setSelectedFuel: (fuel: string) => void;
  onResetFilters: () => void;
  totalResultsCount: number;
}

export const FleetFilterSection: React.FC<FleetFilterSectionProps> = ({
  activeTab,
  setActiveTab,
  myFleetsCount,
  onOpenCreateFleet,
  selectedState,
  setSelectedState,
  selectedCity,
  setSelectedCity,
  selectedBrand,
  setSelectedBrand,
  selectedModel,
  setSelectedModel,
  selectedFuel,
  setSelectedFuel,
  onResetFilters,
  totalResultsCount,
}) => {
  // Available cities dynamically based on selectedState, sorted A-to-Z
  const rawCities = selectedState === 'All States'
    ? INDIAN_CITIES
    : INDIAN_CITIES.filter((c) => c.state.toLowerCase() === selectedState.toLowerCase());
  const availableCities = [...rawCities].sort((a, b) => a.city.localeCompare(b.city));

  // Available brands sorted A-to-Z
  const sortedBrandsList = [...ALL_CAR_BRANDS_MODELS].sort((a, b) => a.brand.localeCompare(b.brand));

  // Available models dynamically based on selectedBrand, sorted A-to-Z
  const selectedBrandData = ALL_CAR_BRANDS_MODELS.find(
    (b) => b.brand.toLowerCase() === selectedBrand.toLowerCase()
  );
  const rawModels = selectedBrandData
    ? selectedBrandData.models.map((m) => m.name)
    : ALL_CAR_BRANDS_MODELS.flatMap((b) => b.models.map((m) => m.name));
  const availableModels = [...rawModels].sort((a, b) => a.localeCompare(b));

  const isFiltered =
    selectedState !== 'All States' ||
    selectedCity !== 'All Cities' ||
    selectedBrand !== 'All Brands' ||
    selectedModel !== 'All Models' ||
    selectedFuel !== 'All';

  // Memoized formatted options for custom animated select dropdowns
  const stateOptions = useMemo(() => {
    return ALL_INDIAN_STATES.map((state) => ({
      value: state,
      label: state,
      badge: state === 'All States' ? '🇮🇳 Pan-India' : undefined,
    }));
  }, []);

  const cityOptions = useMemo(() => {
    return [
      {
        value: 'All Cities',
        label: selectedState === 'All States' ? 'All Indian Cities' : `All Cities in ${selectedState}`,
      },
      ...availableCities.map((c) => ({
        value: c.city,
        label: c.city,
        subLabel: c.state,
        badge: c.tier,
      })),
    ];
  }, [availableCities, selectedState]);

  const brandOptions = useMemo(() => {
    return [
      { value: 'All Brands', label: 'All Indian Brands' },
      ...sortedBrandsList.map((b) => ({
        value: b.brand,
        label: b.brand,
        badge: `${b.models.length} Models`,
      })),
    ];
  }, [sortedBrandsList]);

  const modelOptions = useMemo(() => {
    const uniqueModels = Array.from(new Set(availableModels));
    return [
      {
        value: 'All Models',
        label: selectedBrand === 'All Brands' ? 'All Models' : `All ${selectedBrand} Models`,
      },
      ...uniqueModels.map((m) => ({
        value: m,
        label: m,
      })),
    ];
  }, [availableModels, selectedBrand]);

  return (
    <div className="bg-white border border-[#ADBBDA] rounded-3xl p-5 sm:p-6 shadow-md mb-8 space-y-6">
      
      {/* 1. Sub-Header: Tabs View Switcher & '+ Start a Fleet' Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#ADBBDA]/60">
        
        {/* Navigation Tabs */}
        <div className="flex items-center gap-1.5 bg-[#EDE8F5] p-1.5 rounded-2xl border border-[#ADBBDA]">
          <button
            type="button"
            onClick={() => setActiveTab('fleets')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'fleets'
                ? 'bg-[#3D52A0] text-white shadow-sm'
                : 'text-[#3D52A0] hover:bg-[#ADBBDA]/30'
            }`}
          >
            <Car className="w-4 h-4" />
            <span>Explore Fleets</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('my-fleets')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer relative ${
              activeTab === 'my-fleets'
                ? 'bg-[#3D52A0] text-white shadow-sm'
                : 'text-[#3D52A0] hover:bg-[#ADBBDA]/30'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>My Fleets</span>
            {myFleetsCount > 0 && (
              <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-black ${
                activeTab === 'my-fleets' ? 'bg-[#7091E6] text-white' : 'bg-[#ADBBDA] text-[#3D52A0]'
              }`}>
                {myFleetsCount}
              </span>
            )}
          </button>
        </div>

        {/* Start a Fleet Button */}
        <button
          type="button"
          onClick={onOpenCreateFleet}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl bg-[#7091E6] hover:bg-[#3D52A0] text-white text-xs sm:text-sm font-black shadow-md shadow-[#7091E6]/20 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <PlusCircle className="w-4 h-4" />
          <span>+ Start a Fleet</span>
        </button>
      </div>

      {/* 2. Cascading Selectors: State, City, Car Brand, Car Model, Fuel Type */}
      <div className="space-y-4">
        
        {/* Section Title */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-bold text-[#3D52A0] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#7091E6]" />
            <span>Filter by Location &amp; Vehicle:</span>
          </div>

          {isFiltered && (
            <button
              type="button"
              onClick={onResetFilters}
              className="text-xs text-[#7091E6] hover:text-[#3D52A0] font-semibold flex items-center gap-1 cursor-pointer transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

        {/* Selectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          
          {/* 1. STATE SELECTOR */}
          <div>
            <label className="block text-[11px] font-bold text-[#3D52A0] uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Map className="w-3.5 h-3.5 text-[#7091E6]" />
              <span>1. State</span>
            </label>
            <CustomSelect
              value={selectedState}
              onChange={(val) => {
                setSelectedState(val);
                setSelectedCity('All Cities');
              }}
              options={stateOptions}
              placeholder="Select State"
              searchPlaceholder="Find your state..."
            />
          </div>

          {/* 2. CITY SELECTOR */}
          <div>
            <label className="block text-[11px] font-bold text-[#3D52A0] uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#7091E6]" />
              <span>2. City</span>
            </label>
            <CustomSelect
              value={selectedCity}
              onChange={(val) => setSelectedCity(val)}
              options={cityOptions}
              placeholder="Select City"
              searchPlaceholder="Find your city..."
            />
          </div>

          {/* 3. CAR BRAND SELECTOR */}
          <div>
            <label className="block text-[11px] font-bold text-[#3D52A0] uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Car className="w-3.5 h-3.5 text-[#7091E6]" />
              <span>3. Car Brand</span>
            </label>
            <CustomSelect
              value={selectedBrand}
              onChange={(val) => {
                setSelectedBrand(val);
                setSelectedModel('All Models');
              }}
              options={brandOptions}
              placeholder="Select Brand"
              searchPlaceholder="Find brand..."
            />
          </div>

          {/* 4. CAR MODEL SELECTOR */}
          <div>
            <label className="block text-[11px] font-bold text-[#3D52A0] uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-[#7091E6]" />
              <span>4. Car Model</span>
            </label>
            <CustomSelect
              value={selectedModel}
              onChange={(val) => setSelectedModel(val)}
              options={modelOptions}
              placeholder="Select Model"
              searchPlaceholder="Find model..."
            />
          </div>

        </div>

        {/* 5. FUEL TYPE SELECTOR ROW */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            <span className="text-[11px] font-bold text-[#3D52A0] uppercase tracking-wider flex items-center gap-1 mr-1 shrink-0">
              <Fuel className="w-3.5 h-3.5 text-[#7091E6]" />
              Fuel Type:
            </span>
            {['All', 'Petrol', 'Diesel', 'Hybrid', 'CNG', 'Electric'].map((fuel) => (
              <button
                type="button"
                key={fuel}
                onClick={() => setSelectedFuel(fuel)}
                className={`text-xs px-3 py-1.5 rounded-xl border font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedFuel === fuel
                    ? 'bg-[#3D52A0] text-white font-bold border-[#3D52A0] shadow-sm'
                    : 'bg-[#EDE8F5] border-[#ADBBDA] text-[#3D52A0] hover:border-[#7091E6]'
                }`}
              >
                {fuel}
              </button>
            ))}
          </div>

          {/* Active Results Counter Pill */}
          <div className="text-xs text-[#1E293B]/80 font-medium">
            Showing <strong className="text-[#3D52A0] font-bold">{totalResultsCount}</strong> Active Fleets
          </div>
        </div>

      </div>

    </div>
  );
};
