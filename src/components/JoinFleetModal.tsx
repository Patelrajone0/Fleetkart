import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  MapPin, 
  CheckCircle2, 
  Check, 
  Users,
  Building2,
  BadgePercent
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Fleet, ReadinessStatus, User } from '../types';
import { CustomSelect } from './CustomSelect';

interface JoinFleetModalProps {
  fleet: Fleet;
  currentUser: User;
  onClose: () => void;
  onConfirmJoin: (fleetId: string, memberDetails: any) => void;
}

export const JoinFleetModal: React.FC<JoinFleetModalProps> = ({
  fleet,
  currentUser,
  onClose,
  onConfirmJoin,
}) => {
  const [selectedVariant, setSelectedVariant] = useState(fleet.variant);
  const [selectedColor, setSelectedColor] = useState('Polar White');
  const [selectedArea, setSelectedArea] = useState(currentUser.city === 'Ahmedabad' ? 'Satellite / SG Highway' : 'Central Area');
  const [readiness, setReadiness] = useState<ReadinessStatus>('Token Ready (₹25k)');

  const currentCount = fleet.joinedMembers.length;
  const isFinalSpot = currentCount === fleet.targetSize - 1;

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();

    const memberDetails = {
      id: currentUser.id,
      name: currentUser.name,
      city: currentUser.city,
      area: selectedArea,
      variant: selectedVariant,
      fuel: fleet.fuelType,
      transmission: fleet.transmission,
      color: selectedColor,
      readiness,
      joinedAt: 'Just Now',
      avatar: currentUser.avatar,
      isCurrentUser: true,
    };

    if (isFinalSpot) {
      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.55 },
      });
    }

    onConfirmJoin(fleet.id, memberDetails);
  };

  const colorsList = [
    'Polar White / Arctic White',
    'Abyss Black / Midnight Black',
    'Titan Grey / Daytona Grey',
    'Ranger Khaki / Olive Green',
    'Fiery Red / Flame Red'
  ];

  return (
    <div className="fixed inset-0 z-50 bg-[#3D52A0]/40 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="w-full max-w-lg bg-white border border-[#ADBBDA] rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Header */}
        <div className="bg-[#3D52A0] border-b border-[#3D52A0] p-5 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#7091E6]/30 text-white flex items-center justify-center border border-[#ADBBDA]/40">
              <Users className="w-5 h-5 text-[#EDE8F5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#ADBBDA] uppercase tracking-wide">
                  Join Active Buying Fleet
                </span>
                {isFinalSpot && (
                  <span className="bg-[#7091E6] text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full animate-pulse">
                    5th Final Spot!
                  </span>
                )}
              </div>
              <h3 className="text-lg font-black text-white">
                {fleet.brand} {fleet.model} ({fleet.city})
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-white hover:text-white p-2 rounded-xl bg-[#7091E6]/30 hover:bg-[#7091E6] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Pricing & Dealer Bidding banner */}
        <div className="bg-[#EDE8F5] px-5 py-3 border-b border-[#ADBBDA] flex items-center justify-between text-xs">
          <div>
            <span className="text-[#3D52A0] flex items-center gap-1 font-semibold">
              <Building2 className="w-3.5 h-3.5 text-[#7091E6]" />
              Pricing Model:
            </span>
            <div className="text-[#3D52A0] font-extrabold text-sm sm:text-base mt-0.5">
              Competitive Dealer Quotation
            </div>
          </div>
          <div className="text-right">
            <span className="text-[#3D52A0] flex items-center gap-1 justify-end font-semibold">
              <BadgePercent className="w-3.5 h-3.5 text-[#7091E6]" />
              Est. Dealer Discount:
            </span>
            <div className="text-white font-black text-xs sm:text-sm bg-[#7091E6] px-2.5 py-0.5 rounded shadow-xs mt-0.5 inline-block">
              {fleet.estimatedSavingsBadge}
            </div>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleJoin} className="p-6 space-y-4 text-xs sm:text-sm bg-white">
          {/* Preferred Area / Locality */}
          <div>
            <label className="block text-[#3D52A0] font-semibold mb-1">
              Your Locality in {fleet.city}
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-[#8697C4] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                placeholder="e.g. Satellite / Bopal / SG Highway"
                className="w-full bg-[#EDE8F5] border border-[#ADBBDA] rounded-xl pl-9 pr-3 py-2.5 text-[#3D52A0] placeholder-[#8697C4] focus:outline-none focus:border-[#7091E6]"
              />
            </div>
          </div>

          {/* Color Preference */}
          <div>
            <label className="block text-[#3D52A0] font-semibold mb-1">
              Preferred Exterior Color
            </label>
            <CustomSelect
              value={selectedColor}
              onChange={(val) => setSelectedColor(val)}
              options={colorsList.map((col) => ({ value: col, label: col }))}
              searchable={false}
            />
          </div>

          {/* Variant confirmation */}
          <div>
            <label className="block text-[#3D52A0] font-semibold mb-1">
              Preferred Variant / Trim
            </label>
            <input
              type="text"
              value={selectedVariant}
              onChange={(e) => setSelectedVariant(e.target.value)}
              className="w-full bg-[#EDE8F5] border border-[#ADBBDA] rounded-xl px-3 py-2.5 text-[#3D52A0] focus:outline-none focus:border-[#7091E6]"
            />
          </div>

          {/* Booking Token Readiness */}
          <div>
            <label className="block text-[#3D52A0] font-semibold mb-1.5">
              Your Booking Readiness
            </label>
            <div className="grid grid-cols-2 gap-2">
              {(
                [
                  'Token Ready (₹25k)',
                  'Loan Pre-Approved',
                  'Cash Ready',
                  'Negotiating Token'
                ] as ReadinessStatus[]
              ).map((status) => (
                <button
                  type="button"
                  key={status}
                  onClick={() => setReadiness(status)}
                  className={`p-2.5 rounded-xl border text-xs font-semibold text-left transition-all cursor-pointer ${
                    readiness === status
                      ? 'bg-[#7091E6] border-[#7091E6] text-white shadow-xs'
                      : 'bg-[#EDE8F5] border-[#ADBBDA] text-[#3D52A0] hover:border-[#7091E6]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{status}</span>
                    {readiness === status && (
                      <Check className="w-3.5 h-3.5 text-white" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Escrow & Zero Risk Guarantee */}
          <div className="p-3 rounded-2xl bg-[#EDE8F5] border border-[#ADBBDA] text-[#1E293B]/80 text-xs flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#7091E6] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#3D52A0]">No Upfront Obligation:</strong> Joining reserves your slot in the group. Local dealers submit sealed bulk tenders once 5 buyers lock, and you vote on the winning dealer before depositing any token.
            </div>
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#7091E6] hover:bg-[#3D52A0] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-[#7091E6]/25 transition-all cursor-pointer"
            >
              <CheckCircle2 className="w-5 h-5" />
              <span>
                {isFinalSpot
                  ? 'Join as 5th Buyer & Unlock Dealer Tenders!'
                  : 'Confirm & Join This Fleet'}
              </span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
