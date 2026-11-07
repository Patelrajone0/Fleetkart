import React from 'react';
import { 
  Check, 
  Fuel, 
  ArrowUpDown, 
  SlidersHorizontal 
} from 'lucide-react';
import { FuelType } from '../types';
import { CustomSelect } from './CustomSelect';

export interface BudgetDiscoveryProps {
  selectedCity: string;
  budgetValue: number;
  setBudgetValue: (val: number) => void;
  selectedBudgetPreset: string;
  setSelectedBudgetPreset: (preset: string) => void;
  selectedFuel: string;
  setSelectedFuel: (fuel: string) => void;
  sortBy: 'price-asc' | 'price-desc' | 'popular' | 'savings';
  setSortBy: (sort: 'price-asc' | 'price-desc' | 'popular' | 'savings') => void;
  availableModelsCount: number;
  availableBrandsCount: number;
}

export const BUDGET_PRESETS = [
  { label: 'All Budgets', min: 0, max: 200 },
  { label: 'Under ₹8L', min: 0, max: 8 },
  { label: '₹8–10L', min: 8, max: 10 },
  { label: '₹10–15L', min: 10, max: 15 },
  { label: '₹15–20L', min: 15, max: 20 },
  { label: '₹20–30L', min: 20, max: 30 },
  { label: '₹30–60L', min: 30, max: 60 },
  { label: '₹60L+', min: 60, max: 200 },
];

export const FUEL_OPTIONS: { label: string; value: string; icon?: string }[] = [
  { label: 'All Types', value: 'All' },
  { label: 'Petrol', value: 'Petrol', icon: '⛽' },
  { label: 'Diesel', value: 'Diesel', icon: '⛽' },
  { label: 'CNG', value: 'CNG', icon: '🟢' },
  { label: 'Electric', value: 'Electric', icon: '⚡' },
  { label: 'Hybrid', value: 'Hybrid', icon: '🔋' },
];

export const BudgetDiscoverySection: React.FC<BudgetDiscoveryProps> = ({
  selectedCity,
  budgetValue,
  setBudgetValue,
  selectedBudgetPreset,
  setSelectedBudgetPreset,
  selectedFuel,
  setSelectedFuel,
  sortBy,
  setSortBy,
  availableModelsCount,
  availableBrandsCount,
}) => {
  // Format display price (e.g. 10 -> "₹10 Lakh", 120 -> "₹1.20 Crore")
  const formatDisplayBudget = (val: number) => {
    if (val >= 100) {
      return `₹${(val / 100).toFixed(2)} Crore`;
    }
    return `₹${val} Lakh`;
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setBudgetValue(val);
    setSelectedBudgetPreset('');
  };

  const handlePresetClick = (preset: typeof BUDGET_PRESETS[0]) => {
    setSelectedBudgetPreset(preset.label);
    if (preset.label === 'All Budgets') {
      setBudgetValue(60);
    } else if (preset.max === 200) {
      setBudgetValue(80);
    } else {
      setBudgetValue(preset.max);
    }
  };

  // Calculate percentage fill for custom range slider track
  // slider min = 5, max = 60
  const sliderMin = 5;
  const sliderMax = 60;
  const clampedVal = Math.min(Math.max(budgetValue, sliderMin), sliderMax);
  const fillPercentage = ((clampedVal - sliderMin) / (sliderMax - sliderMin)) * 100;

  return (
    <section className="mb-10 lg:mb-12">
      {/* Header Eyebrow & Title */}
      <div className="text-center max-w-3xl mx-auto mb-8 px-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EDE8F5] border border-[#ADBBDA]/70 text-[#3D52A0] text-xs font-bold uppercase tracking-wider mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7091E6]" />
          <span>CARS IN YOUR BUDGET</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#1E2E4E] tracking-tight leading-tight">
          What&apos;s your budget? <span className="text-[#3D52A0]">We&apos;ll find your group.</span>
        </h1>
        
        <p className="text-xs sm:text-sm text-[#475569] mt-2.5 max-w-xl mx-auto leading-relaxed">
          Move the slider to your budget — instantly see every car you can buy, with an active group deal forming for each one.
        </p>
      </div>

      {/* Main Classic Command Card */}
      <div className="bg-[#142138] border border-slate-700/60 rounded-3xl p-6 sm:p-8 lg:p-9 shadow-2xl relative overflow-hidden text-white">
        
        {/* Subtle Architectural Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#7091E6 1px, transparent 1px), linear-gradient(90deg, #7091E6 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />

        {/* Top Info Row: Left Budget details + Right Models Available */}
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#ADBBDA]">
              Your Budget ({selectedCity} on-road)
            </div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mt-1">
              {formatDisplayBudget(budgetValue)}
            </div>
            <p className="text-xs text-[#94A3B8] mt-1">
              Showing all cars with on-road price up to {formatDisplayBudget(budgetValue)}
            </p>
          </div>

          <div className="bg-[#1E2F4C] border border-slate-700 rounded-2xl p-3.5 px-5 shrink-0 sm:text-right shadow-inner">
            <div className="text-[11px] font-semibold text-[#ADBBDA] uppercase tracking-wider">
              Models available for you
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white mt-0.5">
              <span className="text-[#7091E6]">{availableModelsCount}</span> cars
              <span className="text-xs font-normal text-[#94A3B8] ml-2 font-sans">
                across {availableBrandsCount} brands
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Tactile Range Slider */}
        <div className="relative z-10 mb-8">
          <div className="relative w-full">
            <input
              type="range"
              min={sliderMin}
              max={sliderMax}
              step={0.5}
              value={budgetValue}
              onChange={handleSliderChange}
              aria-label="Budget slider"
              className="w-full h-2.5 rounded-lg appearance-none cursor-pointer bg-slate-800 accent-[#7091E6] focus:outline-none focus:ring-2 focus:ring-[#7091E6]/40"
              style={{
                background: `linear-gradient(to right, #7091E6 0%, #7091E6 ${fillPercentage}%, #2A3C5B ${fillPercentage}%, #2A3C5B 100%)`
              }}
            />
          </div>

          {/* Scale Markings */}
          <div className="flex justify-between items-center text-[11px] font-semibold text-[#8697C4] mt-2.5 px-1 select-none">
            <span>₹3L</span>
            <span>₹10L</span>
            <span>₹20L</span>
            <span>₹35L</span>
            <span>₹50L</span>
            <span>₹60L+</span>
          </div>
        </div>

        {/* Quick Budget Preset Pills */}
        <div className="relative z-10">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar flex-wrap">
            {BUDGET_PRESETS.map((preset) => {
              const isSelected = selectedBudgetPreset === preset.label;
              return (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() => handlePresetClick(preset)}
                  className={`text-xs px-3.5 py-2 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap border ${
                    isSelected
                      ? 'bg-white text-[#142138] border-white shadow-md scale-[1.02]'
                      : 'bg-[#1C2C47] text-[#EDE8F5] border-slate-700/80 hover:bg-[#253757] hover:border-[#ADBBDA]/60'
                  }`}
                >
                  {preset.label}
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Summary Assurance Strip */}
      <div className="mt-4 bg-white border border-[#ADBBDA]/70 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Left: Live pulse indicator & copy */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center shrink-0">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping absolute opacity-75" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 relative" />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-bold text-[#1E2E4E] leading-tight">
              Groups forming now for cars in this range
            </div>
            <div className="text-[11px] text-[#64748B]">
              Collective buying power grows with every new member in {selectedCity}
            </div>
          </div>
        </div>

        {/* Middle: Micro Stats */}
        <div className="flex items-center gap-4 sm:gap-6 border-y md:border-y-0 md:border-x border-slate-200 py-2 md:py-0 md:px-6">
          <div className="text-left">
            <div className="text-base sm:text-lg font-black text-[#1E2E4E] leading-none">
              {availableModelsCount}
            </div>
            <div className="text-[10px] uppercase font-bold tracking-wider text-[#8697C4] mt-0.5">
              models
            </div>
          </div>

          <div className="text-left">
            <div className="text-base sm:text-lg font-black text-[#1E2E4E] leading-none">
              {availableBrandsCount}
            </div>
            <div className="text-[10px] uppercase font-bold tracking-wider text-[#8697C4] mt-0.5">
              brands
            </div>
          </div>

          <div className="text-left">
            <div className="text-base sm:text-lg font-black text-emerald-600 leading-none">
              ₹0
            </div>
            <div className="text-[10px] uppercase font-bold tracking-wider text-[#8697C4] mt-0.5">
              to join
            </div>
          </div>
        </div>

        {/* Right: Trust Badge */}
        <div className="shrink-0">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl">
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            <span>Always free to join any group</span>
          </span>
        </div>
      </div>

      {/* Fuel Type Filter & Sort Controls Row */}
      <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Fuel Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          <span className="text-xs font-bold text-[#3D52A0] uppercase tracking-wider flex items-center gap-1.5 mr-1 shrink-0">
            <Fuel className="w-3.5 h-3.5 text-[#7091E6]" />
            <span>Fuel:</span>
          </span>
          {FUEL_OPTIONS.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setSelectedFuel(f.value)}
              className={`text-xs px-3.5 py-1.5 rounded-xl border font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                selectedFuel === f.value
                  ? 'bg-[#1E2E4E] text-white border-[#1E2E4E] shadow-sm'
                  : 'bg-white text-[#3D52A0] border-[#ADBBDA]/70 hover:border-[#7091E6] hover:bg-[#EDE8F5]'
              }`}
            >
              {f.icon && <span>{f.icon}</span>}
              <span>{f.label}</span>
            </button>
          ))}
        </div>

        {/* Sort Select */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-bold text-[#64748B] flex items-center gap-1">
            <ArrowUpDown className="w-3 h-3 text-[#7091E6]" />
            <span>Sort:</span>
          </span>
          <CustomSelect
            value={sortBy}
            onChange={(val) => setSortBy(val as any)}
            options={[
              { value: 'price-asc', label: 'Price: Low to High' },
              { value: 'price-desc', label: 'Price: High to Low' },
              { value: 'popular', label: 'Most Popular' },
              { value: 'savings', label: 'Highest Savings' },
            ]}
            align="right"
            searchable={false}
            buttonClassName="!py-1.5 !px-3 !bg-white !border-[#ADBBDA]/70 !text-[#1E2E4E] !font-bold !text-xs !rounded-xl"
            dropdownClassName="w-48"
          />
        </div>
      </div>
    </section>
  );
};
