import React, { useState } from 'react';
import { 
  Users, 
  Clock, 
  ArrowRight, 
  MessageSquare, 
  CheckCircle, 
  Share2, 
  Fuel, 
  ShieldCheck, 
  Trash2,
  AlertTriangle
} from 'lucide-react';
import { Fleet } from '../types';

interface FleetCardProps {
  fleet: Fleet;
  isUserMember: boolean;
  isCreator: boolean;
  onJoinFleet: (fleet: Fleet) => void;
  onOpenFleetRoom: (fleet: Fleet) => void;
  onShareWhatsApp: (fleet: Fleet) => void;
  onDeleteFleet?: (fleetId: string) => void;
}

export const FleetCard: React.FC<FleetCardProps> = ({
  fleet,
  isUserMember,
  isCreator,
  onJoinFleet,
  onOpenFleetRoom,
  onShareWhatsApp,
  onDeleteFleet,
}) => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const currentCount = fleet.joinedMembers.length;
  const targetCount = fleet.targetSize;
  const spotsLeft = targetCount - currentCount;
  const isFull = spotsLeft <= 0;

  const handleDelete = () => {
    if (onDeleteFleet) {
      onDeleteFleet(fleet.id);
      setShowDeleteConfirm(false);
    }
  };

  return (
    <div className={`group relative bg-white border rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col justify-between animate-in fade-in-50 zoom-in-95 duration-200 ${
      spotsLeft === 1 && !isFull
        ? 'border-[#7091E6] ring-2 ring-[#7091E6]/30'
        : 'border-[#ADBBDA] hover:border-[#7091E6]'
    }`}>
      
      {/* 1. Top Banner & Car Studio Image */}
      <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-gradient-to-b from-[#F8FAFC] to-white border-b border-[#ADBBDA]/40 flex items-center justify-center p-4">
        <img
          src={fleet.carImageUrl}
          alt={`${fleet.brand} ${fleet.model}`}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
        />

        {/* Status Badge Top Right: Only shown if full */}
        {isFull && (
          <div className="absolute top-3 right-3">
            <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#3D52A0] text-white text-xs font-extrabold shadow-md border border-[#ADBBDA]/50">
              <CheckCircle className="w-3.5 h-3.5" />
              FLEET LOCKED
            </span>
          </div>
        )}
      </div>

      {/* 2. Compact Card Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3.5">
        
        {/* Car Name, Fuel/Transmission & Variant */}
        <div>
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="text-lg sm:text-xl font-black text-[#1E2E4E] leading-tight">
                {fleet.brand} {fleet.model}
              </h3>
              <p className="text-xs text-[#64748B] line-clamp-1 mt-0.5">
                {fleet.variant}
              </p>
            </div>

            <div className="flex items-center gap-1 text-[11px] font-semibold text-[#64748B] bg-[#EDE8F5] px-2.5 py-1 rounded-lg border border-[#ADBBDA]/50 shrink-0">
              <Fuel className="w-3 h-3 text-[#7091E6]" />
              <span>{fleet.fuelType}</span>
              <span>•</span>
              <span>{fleet.transmission}</span>
            </div>
          </div>
        </div>

        {/* 3. Live Buyer Progress Bar & Members (Compact) */}
        <div className="space-y-2 pt-1">
          <div className="flex items-center justify-between text-xs">
            <div className="font-bold text-[#3D52A0] flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#7091E6]" />
              <span>
                {currentCount}/{targetCount} Buyers Joined
              </span>
            </div>
            <div className="text-[#8697C4] text-[11px] flex items-center gap-1 font-medium">
              <Clock className="w-3 h-3 text-[#8697C4]" />
              <span>{fleet.deadlineHours}h left</span>
            </div>
          </div>

          {/* Smooth Linear Progress Bar */}
          <div className="w-full h-2 rounded-full overflow-hidden bg-[#EDE8F5] border border-[#ADBBDA]/60">
            <div
              className="h-full bg-[#7091E6] rounded-full transition-all duration-300"
              style={{ width: `${Math.max(8, Math.min(100, (currentCount / targetCount) * 100))}%` }}
            />
          </div>

          {/* Member Avatars & Showroom Location */}
          <div className="flex items-center justify-between text-[11px] pt-1">
            <div className="flex items-center gap-1.5">
              <div className="flex items-center -space-x-1.5">
                {fleet.joinedMembers.slice(0, 4).map((m, idx) => (
                  <div
                    key={m.id || idx}
                    title={`${m.name} (${m.city})`}
                    className="w-6 h-6 rounded-full border-2 border-white bg-[#EDE8F5] text-[#3D52A0] font-bold text-[9px] flex items-center justify-center shadow-xs"
                  >
                    {m.name.slice(0, 1).toUpperCase()}
                  </div>
                ))}
              </div>
              <span className="text-[11px] font-semibold text-[#3D52A0]">
                {spotsLeft > 0 ? `${spotsLeft} spots open` : 'Fleet Complete'}
              </span>
            </div>

            <span className="text-[#64748B]">
              <strong className="text-[#3D52A0]">{fleet.city}</strong> Showrooms
            </span>
          </div>
        </div>

        {/* 4. Card Footer Actions */}
        <div className="flex items-center gap-2 pt-3 border-t border-[#ADBBDA]/60">
          {isUserMember ? (
            <button
              type="button"
              onClick={() => onOpenFleetRoom(fleet)}
              className="flex-1 py-2.5 px-4 rounded-xl bg-[#3D52A0] hover:bg-[#3D52A0]/90 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-[#EDE8F5]" />
              <span>Enter Fleet Room &amp; Chat</span>
              <span className="w-2 h-2 rounded-full bg-[#7091E6] animate-ping" />
            </button>
          ) : isFull ? (
            <button
              type="button"
              onClick={() => onOpenFleetRoom(fleet)}
              className="flex-1 py-2.5 px-4 rounded-xl bg-[#3D52A0] hover:bg-[#3D52A0]/90 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
            >
              <ShieldCheck className="w-4 h-4 text-[#7091E6]" />
              <span>View Bids &amp; Fleet Room</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => onJoinFleet(fleet)}
              className="flex-1 py-2.5 px-4 rounded-xl bg-[#7091E6] hover:bg-[#3D52A0] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-[#7091E6]/20 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Join This Fleet</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}

          {/* Share on WhatsApp */}
          <button
            type="button"
            onClick={() => onShareWhatsApp(fleet)}
            title="Share Fleet on WhatsApp with friends"
            className="p-2.5 rounded-xl bg-[#EDE8F5] hover:bg-[#ADBBDA]/40 border border-[#ADBBDA] text-[#3D52A0] transition-colors cursor-pointer"
          >
            <Share2 className="w-4 h-4" />
          </button>

          {/* EXCLUSIVE DELETE OPTION */}
          {isCreator && onDeleteFleet && (
            <button
              type="button"
              onClick={() => setShowDeleteConfirm(true)}
              title="Delete This Fleet (Only available to you as the creator)"
              className="p-2.5 rounded-xl bg-[#EDE8F5] hover:bg-[#ADBBDA]/40 border border-[#ADBBDA] text-[#8697C4] hover:text-[#3D52A0] transition-colors cursor-pointer"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>

      {/* Creator Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 z-50 bg-[#3D52A0]/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-sm bg-white border border-[#ADBBDA] rounded-3xl p-6 text-center shadow-2xl animate-in zoom-in-95">
            <div className="w-12 h-12 rounded-2xl bg-[#EDE8F5] text-[#3D52A0] mx-auto flex items-center justify-center mb-4 border border-[#ADBBDA]">
              <AlertTriangle className="w-6 h-6 text-[#7091E6]" />
            </div>

            <h3 className="text-lg font-bold text-[#3D52A0] mb-1">
              Delete This Fleet?
            </h3>
            <p className="text-xs text-[#1E293B]/70 mb-5 leading-relaxed">
              As the founding creator, deleting this {fleet.brand} {fleet.model} fleet will remove it from the platform and dissolve the buying group.
            </p>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 py-2.5 rounded-xl bg-[#EDE8F5] hover:bg-[#ADBBDA]/40 text-[#3D52A0] border border-[#ADBBDA] font-semibold text-xs transition-colors cursor-pointer"
              >
                Keep Fleet
              </button>
              <button
                type="button"
                onClick={handleDelete}
                className="flex-1 py-2.5 rounded-xl bg-[#3D52A0] hover:bg-[#7091E6] text-white font-bold text-xs transition-colors shadow-md cursor-pointer"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
