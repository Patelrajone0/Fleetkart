import React from 'react';
import { 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  LogOut,
  HelpCircle,
  Info
} from 'lucide-react';
import { User as UserType } from '../types';

interface ProfileModalProps {
  user: UserType;
  onClose: () => void;
  onLogout: () => void;
  onChangeState?: () => void;
  onChangeCity?: () => void;
  onOpenHowItWorks?: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  user,
  onClose,
  onLogout,
  onChangeState,
  onChangeCity,
  onOpenHowItWorks,
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-[#3D52A0]/40 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="w-full max-w-md bg-white border border-[#ADBBDA] rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#3D52A0] border-b border-[#3D52A0] p-5 flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#EDE8F5]" />
            <h3 className="text-base font-bold text-white">
              Verified Buyer Profile
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-white hover:text-white p-2 rounded-xl bg-[#7091E6]/30 hover:bg-[#7091E6] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Profile Content */}
        <div className="p-6 text-center bg-white">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-20 h-20 rounded-full object-cover mx-auto mb-3 border-2 border-[#7091E6] shadow-md"
          />
          <h2 className="text-xl font-black text-[#3D52A0]">{user.name}</h2>
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#EDE8F5] text-[#3D52A0] text-xs font-semibold mt-1 border border-[#ADBBDA]">
            <span className="w-2 h-2 rounded-full bg-[#7091E6] animate-pulse" />
            Verified Fleet Member
          </div>

          {/* Details list */}
          <div className="mt-6 space-y-3 text-left text-xs sm:text-sm bg-[#EDE8F5] p-4 rounded-2xl border border-[#ADBBDA]">
            <div className="flex items-center justify-between py-1 border-b border-[#ADBBDA]/60">
              <span className="text-[#1E293B]/70 flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#8697C4]" />
                Mobile:
              </span>
              <span className="font-semibold text-[#3D52A0]">{user.phone}</span>
            </div>

            <div className="flex items-center justify-between py-1 border-b border-[#ADBBDA]/60">
              <span className="text-[#1E293B]/70 flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#8697C4]" />
                Email:
              </span>
              <span className="font-semibold text-[#3D52A0]">{user.email}</span>
            </div>

            <div className="flex items-center justify-between py-1 border-b border-[#ADBBDA]/60">
              <span className="text-[#1E293B]/70 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#8697C4]" />
                Active State:
              </span>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#3D52A0]">{user.state || 'Gujarat'}</span>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    if (onChangeState) onChangeState();
                    else if (onChangeCity) onChangeCity();
                  }}
                  className="text-[10px] text-[#7091E6] underline font-semibold cursor-pointer"
                >
                  Change
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between py-1">
              <span className="text-[#1E293B]/70 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#8697C4]" />
                Timeline:
              </span>
              <span className="font-semibold text-[#3D52A0]">{user.timeline}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="mt-5 pt-4 border-t border-[#ADBBDA]/60 text-left">
            <div className="text-[10px] font-black uppercase tracking-wider text-[#8697C4] mb-2 px-1">
              Quick Links
            </div>
            <div className="grid grid-cols-2 gap-2">
              {onOpenHowItWorks && (
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenHowItWorks();
                  }}
                  className="p-2.5 rounded-xl bg-[#EDE8F5] hover:bg-[#ADBBDA]/40 text-xs font-bold text-[#3D52A0] flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <HelpCircle className="w-3.5 h-3.5 text-[#7091E6] shrink-0" />
                  <span className="truncate">How It Works</span>
                </button>
              )}
              {onOpenHowItWorks && (
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenHowItWorks();
                  }}
                  className="p-2.5 rounded-xl bg-[#EDE8F5] hover:bg-[#ADBBDA]/40 text-xs font-bold text-[#3D52A0] flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5 text-[#7091E6] shrink-0" />
                  <span className="truncate">About</span>
                </button>
              )}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-2">
            <button
              type="button"
              onClick={onClose}
              className="w-full py-2.5 rounded-xl bg-[#7091E6] hover:bg-[#3D52A0] text-white font-bold text-xs shadow-md transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              type="button"
              onClick={onLogout}
              className="w-full py-2.5 rounded-xl bg-[#EDE8F5] hover:bg-[#ADBBDA]/40 text-[#3D52A0] border border-[#ADBBDA] font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <LogOut className="w-4 h-4 text-[#8697C4]" />
              <span>Log Out of FleetKart</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
