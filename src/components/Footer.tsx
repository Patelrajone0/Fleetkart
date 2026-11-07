import React from 'react';
import { 
  ShieldCheck, 
  Tag, 
  MessageSquare, 
  MapPin, 
  Lock, 
  Mail, 
  CheckCircle2 
} from 'lucide-react';

interface FooterProps {
  onOpenHowItWorks?: () => void;
  onOpenStateModal?: () => void;
  onOpenCityModal?: () => void;
  onScrollToBudget?: () => void;
  onOpenProfile?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenHowItWorks,
  onOpenStateModal,
  onOpenCityModal,
  onScrollToBudget,
  onOpenProfile,
}) => {
  return (
    <footer className="bg-[#121E33] border-t border-slate-700/80 text-white mt-20 pt-8 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Top Trust Badges Row */}
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-4 sm:gap-6 pb-8 border-b border-slate-700/60 text-xs text-[#ADBBDA]">
          <div className="flex items-center gap-1.5">
            <span>🔒</span>
            <span className="font-semibold text-white">Authorized dealers only</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span>✅</span>
            <span className="font-semibold text-white">Transparent pricing</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span>💰</span>
            <span className="font-semibold text-white">Budget-matched deals</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span>💬</span>
            <span className="font-semibold text-white">WhatsApp updates</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span>🔓</span>
            <span className="font-semibold text-white">Zero commitment</span>
          </div>
        </div>

        {/* 2. Main 4-Column Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 py-10">
          
          {/* Column 1: Brand Info & Contact */}
          <div className="md:col-span-5 space-y-4">
            <div 
              onClick={() => window.location.reload()}
              className="flex items-center gap-2.5 cursor-pointer select-none group"
              title="Refresh FleetKart"
            >
              <div className="w-3 h-3 rounded-full bg-[#7091E6]" />
              <span className="text-xl font-black tracking-tight text-white">
                FLEETKART
              </span>
              <span className="text-[10px] text-[#8697C4] font-bold uppercase tracking-widest pl-2 border-l border-slate-700">
                INDIA
              </span>
            </div>

            <p className="text-xs text-[#94A3B8] leading-relaxed max-w-sm">
              India&apos;s group car buying platform. Set your budget, find your car, join the group — get deals you&apos;d never get alone.
            </p>

            <div className="space-y-2 pt-1 text-xs text-[#ADBBDA]">
              <a 
                href="mailto:Patelrajone0@gmail.com" 
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#7091E6] shrink-0" />
                <span className="font-semibold">Patelrajone0@gmail.com</span>
              </a>

              <div className="flex items-start gap-2 text-[#94A3B8]">
                <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                <span>Ahmedabad, Gujarat, India - 380001</span>
              </div>
            </div>
          </div>

          {/* Column 2: PLATFORM */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-[11px] font-black uppercase tracking-wider text-[#ADBBDA]">
              PLATFORM
            </h4>
            <ul className="space-y-2 text-xs text-[#94A3B8]">
              <li>
                <button
                  type="button"
                  onClick={onScrollToBudget}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Find by Budget
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onScrollToBudget}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Browse Cars
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenStateModal || onOpenCityModal}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Indian States
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenProfile}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Sign In
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: COMPANY */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-[11px] font-black uppercase tracking-wider text-[#ADBBDA]">
              COMPANY
            </h4>
            <ul className="space-y-2 text-xs text-[#94A3B8]">
              <li>
                <button
                  type="button"
                  onClick={onOpenHowItWorks}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenHowItWorks}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  How It Works
                </button>
              </li>
              <li>
                <a
                  href="mailto:Patelrajone0@gmail.com"
                  className="hover:text-white transition-colors cursor-pointer block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: ALL-INDIA COVERAGE */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[11px] font-black uppercase tracking-wider text-[#ADBBDA]">
              COVERAGE
            </h4>
            <ul className="space-y-2 text-xs text-[#94A3B8]">
              <li className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <span>Available Pan-India</span>
                <span>🇮🇳</span>
              </li>
              <li>All 28 Indian States Active</li>
            </ul>
          </div>

        </div>

        {/* 3. Bottom Legal Row */}
        <div className="pt-8 mt-4 border-t border-slate-700/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#64748B]">
          <div>
            © 2026 Fleetkart India. All rights reserved.
          </div>
          <div>
            You enjoy the deal. <strong className="text-[#7091E6]">We make the group.</strong>
          </div>
        </div>

      </div>
    </footer>
  );
};
