import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { CarModel, Fleet } from '../types';

interface CarCardProps {
  car: CarModel;
  fleet?: Fleet;
  isUserMember?: boolean;
  selectedCity: string;
  onJoinDeal: (car: CarModel, fleet?: Fleet) => void;
}

export const CarCard: React.FC<CarCardProps> = ({
  car,
  fleet,
  isUserMember = false,
  selectedCity,
  onJoinDeal,
}) => {
  const minPrice = car.minPriceLakh || 8.0;
  const maxPrice = car.maxPriceLakh || 12.0;
  const variants = car.variantsCount || 12;

  // Status badge logic
  let statusText = 'Group forming';
  if (isUserMember) {
    statusText = 'You Joined';
  } else if (fleet) {
    const spotsLeft = fleet.targetSize - fleet.joinedMembers.length;
    if (spotsLeft <= 1) {
      statusText = '1 Spot Left!';
    } else {
      statusText = `${fleet.joinedMembers.length}/${fleet.targetSize} Joined`;
    }
  }

  return (
    <div className="group bg-white border border-[#ADBBDA]/60 hover:border-[#0284C7] rounded-3xl p-5 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1">
      
      {/* Top Header: Brand Monogram/Badge & Status Pill */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="text-[11px] font-black uppercase tracking-wider text-[#3D52A0] bg-[#EDE8F5]/80 border border-[#ADBBDA]/40 px-2.5 py-1 rounded-lg">
          {car.brand}
        </span>

        <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-2xs ${
          isUserMember 
            ? 'bg-emerald-600 text-white' 
            : 'bg-[#1E2E4E] text-white'
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full ${
            isUserMember ? 'bg-white' : 'bg-emerald-400 animate-pulse'
          }`} />
          <span>{statusText}</span>
        </span>
      </div>

      {/* Car Studio Showcase Image */}
      <div className="relative h-36 sm:h-40 w-full overflow-hidden rounded-2xl bg-gradient-to-b from-[#F8FAFC] to-white flex items-center justify-center p-2 mb-4 border border-slate-100">
        <img
          src={fleet?.carImageUrl || car.imageUrl}
          alt={`${car.brand} ${car.model}`}
          className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
          loading="lazy"
        />
      </div>

      {/* Car Info */}
      <div className="space-y-2 mb-4">
        <div>
          <h3 className="text-lg font-black text-[#1E2E4E] leading-tight group-hover:text-[#0284C7] transition-colors">
            {car.model}
          </h3>
          <p className="text-xs font-semibold text-[#64748B] mt-0.5">
            {car.brand}
          </p>
        </div>

        {/* On-Road Price Range in Blue (matching screenshot) */}
        <div>
          <div className="text-sm font-black text-[#0284C7]">
            ₹{minPrice.toFixed(1)}L – ₹{maxPrice.toFixed(1)}L
            <span className="text-[11px] font-normal text-[#64748B] ml-1.5">
              on-road {selectedCity}
            </span>
          </div>
        </div>

        {/* Fuel Badges & Variants */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          {car.fuelTypes.map((fuel) => (
            <span
              key={fuel}
              className="text-[10px] font-semibold text-[#64748B] bg-[#F1F5F9] border border-slate-200/80 px-2 py-0.5 rounded-md"
            >
              {fuel}
            </span>
          ))}
          <span className="text-[10px] font-semibold text-[#94A3B8] px-1 py-0.5">
            {variants} variants
          </span>
        </div>
      </div>

      {/* Bottom Action Button (Vibrant Teal/Cyan matching screenshot) */}
      <button
        type="button"
        onClick={() => onJoinDeal(car, fleet)}
        className={`w-full py-2.5 px-4 rounded-xl text-white font-black text-xs tracking-wide flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer transform active:scale-95 group-hover:shadow-md ${
          isUserMember
            ? 'bg-emerald-600 hover:bg-emerald-700'
            : 'bg-[#0089A5] hover:bg-[#00738C]'
        }`}
      >
        {isUserMember ? (
          <>
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Open Fleet Room</span>
          </>
        ) : (
          <>
            <span>Join Group Deal</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>

    </div>
  );
};
