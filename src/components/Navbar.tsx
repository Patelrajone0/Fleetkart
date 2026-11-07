import React, { useState, useRef, useEffect, useMemo } from 'react';
import { 
  ChevronDown, 
  MoreVertical, 
  HelpCircle, 
  Info, 
  User as UserIcon, 
  LogOut, 
  MapPin,
  Search,
  Check,
  X,
  Map,
  Sparkles
} from 'lucide-react';
import { User } from '../types';
import { INDIAN_STATES_LIST } from '../data/carBrandsData';

interface NavbarProps {
  currentUser: User;
  onOpenProfile: () => void;
  onLogoClick?: () => void;
  selectedState?: string;
  onSelectState?: (state: string) => void;
  onOpenStateModal?: () => void;
  selectedCity?: string;
  onOpenCityModal?: () => void;
  onOpenHowItWorks?: () => void;
  onOpenCreateFleet?: () => void;
  onBrowseFleets?: () => void;
  onFindByBudget?: () => void;
  onLogout?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentUser,
  onOpenProfile,
  onLogoClick,
  selectedState,
  onSelectState,
  onOpenStateModal,
  selectedCity,
  onOpenCityModal,
  onOpenHowItWorks,
  onLogout,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStateMenuOpen, setIsStateMenuOpen] = useState(false);
  const [stateSearchTerm, setStateSearchTerm] = useState('');
  
  const menuRef = useRef<HTMLDivElement>(null);
  const stateMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (menuRef.current && !menuRef.current.contains(target)) {
        setIsMenuOpen(false);
      }
      if (stateMenuRef.current && !stateMenuRef.current.contains(target)) {
        setIsStateMenuOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        setIsStateMenuOpen(false);
      }
    };

    if (isMenuOpen || isStateMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen, isStateMenuOpen]);

  const filteredStates = useMemo(() => {
    const term = stateSearchTerm.toLowerCase().trim();
    if (!term) return INDIAN_STATES_LIST;
    return INDIAN_STATES_LIST.filter(
      (s) =>
        s.name.toLowerCase().includes(term) ||
        s.region.toLowerCase().includes(term)
    );
  }, [stateSearchTerm]);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#ADBBDA] shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo */}
          <div 
            onClick={() => {
              if (onLogoClick) {
                onLogoClick();
              } else {
                window.location.reload();
              }
            }}
            className="flex items-center gap-2.5 cursor-pointer select-none shrink-0 group"
            title="Refresh FleetKart"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[#7091E6] group-hover:scale-125 transition-transform" />
            <span className="text-xl font-black tracking-tight text-[#3D52A0]">
              FLEETKART
            </span>
            <span className="text-[10px] text-[#8697C4] font-bold uppercase tracking-widest pl-2 border-l border-[#ADBBDA]">
              INDIA
            </span>
          </div>

          {/* Actions on the right */}
          <div className="flex items-center gap-3">
            {(selectedState || selectedCity) && (
              <div className="relative" ref={stateMenuRef}>
                <button
                  type="button"
                  onClick={() => {
                    setIsStateMenuOpen(!isStateMenuOpen);
                    setIsMenuOpen(false);
                  }}
                  className={`inline-flex items-center gap-1.5 text-xs font-bold transition-all cursor-pointer px-3 py-1.5 rounded-xl border ${
                    isStateMenuOpen
                      ? 'bg-[#EDE8F5] border-[#7091E6] text-[#3D52A0] ring-2 ring-[#7091E6]/20 shadow-xs'
                      : 'bg-white hover:bg-[#EDE8F5] border-[#ADBBDA]/60 hover:border-[#7091E6] text-[#3D52A0]'
                  }`}
                  title="Select Indian State"
                  aria-expanded={isStateMenuOpen}
                >
                  <span>📍 {selectedState || selectedCity}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isStateMenuOpen ? 'rotate-180 text-[#7091E6]' : 'text-[#8697C4]'}`} />
                </button>

                {/* Small Window Dropdown Popover (No Full-Screen Overlay) */}
                {isStateMenuOpen && (
                  <div className="absolute right-0 top-full mt-2 w-72 sm:w-80 bg-white border border-[#ADBBDA] rounded-2xl shadow-2xl z-50 overflow-hidden animate-dropdown origin-top">
                    {/* Small Header */}
                    <div className="p-3 bg-[#3D52A0] text-white flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Map className="w-4 h-4 text-[#EDE8F5]" />
                        <span className="text-xs font-bold">Select Indian State</span>
                      </div>
                      <span className="text-[10px] text-[#ADBBDA] font-medium">28 States</span>
                    </div>

                    {/* Search Bar */}
                    <div className="p-2.5 bg-[#EDE8F5]/80 border-b border-[#ADBBDA]/60">
                      <div className="relative">
                        <Search className="w-3.5 h-3.5 text-[#8697C4] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="text"
                          autoFocus
                          value={stateSearchTerm}
                          onChange={(e) => setStateSearchTerm(e.target.value)}
                          placeholder="Find your State here..."
                          className="w-full bg-white border border-[#ADBBDA]/70 rounded-xl pl-8 pr-7 py-1.5 text-xs text-[#3D52A0] placeholder-[#8697C4] font-medium focus:outline-none focus:border-[#7091E6] focus:ring-1 focus:ring-[#7091E6]"
                        />
                        {stateSearchTerm && (
                          <button
                            type="button"
                            onClick={() => setStateSearchTerm('')}
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-[#8697C4] hover:text-[#3D52A0] p-0.5"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                    </div>

                    {/* States List */}
                    <div className="max-h-64 overflow-y-auto p-1.5 space-y-0.5">
                      {filteredStates.length === 0 ? (
                        <div className="py-6 px-3 text-center text-xs text-[#8697C4]">
                          No state matching "{stateSearchTerm}"
                        </div>
                      ) : (
                        filteredStates.map((st) => {
                          const isSelected = (selectedState || currentUser.state || 'Gujarat').toLowerCase() === st.name.toLowerCase();
                          return (
                            <button
                              key={st.name}
                              type="button"
                              onClick={() => {
                                if (onSelectState) {
                                  onSelectState(st.name);
                                } else if (onOpenStateModal) {
                                  onOpenStateModal();
                                }
                                setIsStateMenuOpen(false);
                                setStateSearchTerm('');
                              }}
                              className={`w-full flex items-center justify-between p-2 rounded-xl text-left text-xs transition-all duration-150 cursor-pointer ${
                                isSelected
                                  ? 'bg-[#EDE8F5] text-[#3D52A0] font-bold border border-[#7091E6]/40 shadow-2xs'
                                  : 'text-[#1E2E4E] hover:bg-[#EDE8F5]/70 hover:translate-x-0.5'
                              }`}
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                <span className={`w-6 h-6 rounded-lg font-black text-[10px] flex items-center justify-center shrink-0 border ${
                                  isSelected
                                    ? 'bg-[#7091E6] text-white border-[#7091E6]'
                                    : 'bg-[#EDE8F5] text-[#3D52A0] border-[#ADBBDA]/50'
                                }`}>
                                  {st.name.slice(0, 2).toUpperCase()}
                                </span>
                                <div className="flex flex-col min-w-0">
                                  <span className="truncate font-bold text-xs">{st.name}</span>
                                  <span className="text-[10px] text-[#8697C4] truncate">{st.region}</span>
                                </div>
                              </div>
                              {isSelected && (
                                <Check className="w-4 h-4 text-[#7091E6] shrink-0" />
                              )}
                            </button>
                          );
                        })
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Profile & 3-Dots Menu Trigger */}
            <div className="relative" ref={menuRef}>
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`flex items-center gap-1.5 sm:gap-2 p-1 pl-1.5 pr-2 sm:pr-2.5 rounded-full sm:rounded-2xl transition-all cursor-pointer border ${
                  isMenuOpen 
                    ? 'bg-[#EDE8F5] border-[#7091E6] ring-2 ring-[#7091E6]/20' 
                    : 'bg-white hover:bg-[#EDE8F5] border-[#ADBBDA]/60 hover:border-[#7091E6]'
                } shadow-xs group`}
                title="Profile & Options Menu"
                aria-expanded={isMenuOpen}
                aria-haspopup="true"
              >
                <div className="relative">
                  <img
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    className="w-8 h-8 rounded-full object-cover border-2 border-[#3D52A0]"
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white" />
                </div>
                
                <div className="hidden sm:block text-left">
                  <div className="text-xs font-bold text-[#3D52A0] leading-tight">{currentUser.name}</div>
                  <div className="text-[10px] text-[#8697C4] leading-tight font-medium">
                    {selectedState || currentUser.state || currentUser.city}
                  </div>
                </div>

                {/* 3 Dots Icon */}
                <div className="pl-0.5 text-[#3D52A0] group-hover:text-[#7091E6] transition-colors">
                  <MoreVertical className="w-4 h-4" />
                </div>
              </button>

              {/* Profile & Navigation Dropdown Menu */}
              {isMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-[#ADBBDA] rounded-2xl shadow-xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
                  {/* User Profile Summary Header */}
                  <div className="p-3.5 bg-[#EDE8F5]/60 border-b border-[#ADBBDA]/60">
                    <div className="flex items-center gap-3">
                      <img
                        src={currentUser.avatar}
                        alt={currentUser.name}
                        className="w-10 h-10 rounded-full object-cover border-2 border-[#3D52A0] shadow-xs"
                      />
                      <div className="overflow-hidden">
                        <div className="text-xs font-bold text-[#3D52A0] truncate">{currentUser.name}</div>
                        <div className="text-[11px] text-[#1E293B]/70 truncate">{currentUser.email}</div>
                        <div className="text-[10px] text-[#7091E6] font-semibold mt-0.5 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          <span>{currentUser.city}</span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setIsMenuOpen(false);
                        onOpenProfile();
                      }}
                      className="mt-2.5 w-full py-1.5 px-3 rounded-xl bg-white hover:bg-[#3D52A0] text-[#3D52A0] hover:text-white border border-[#ADBBDA] text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <UserIcon className="w-3.5 h-3.5" />
                      <span>View Full Profile</span>
                    </button>
                  </div>

                  {/* Options */}
                  <div className="p-2 space-y-0.5">
                    <div className="px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-[#8697C4]">
                      Explore FleetKart
                    </div>

                    {onOpenHowItWorks && (
                      <button
                        type="button"
                        onClick={() => {
                          setIsMenuOpen(false);
                          onOpenHowItWorks();
                        }}
                        className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-xs font-bold text-[#3D52A0] hover:bg-[#EDE8F5] hover:text-[#7091E6] transition-colors cursor-pointer text-left"
                      >
                        <HelpCircle className="w-4 h-4 text-[#7091E6] shrink-0" />
                        <span>How It Works</span>
                      </button>
                    )}

                    {onOpenHowItWorks && (
                      <button
                        type="button"
                        onClick={() => {
                          setIsMenuOpen(false);
                          onOpenHowItWorks();
                        }}
                        className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-xs font-bold text-[#3D52A0] hover:bg-[#EDE8F5] hover:text-[#7091E6] transition-colors cursor-pointer text-left"
                      >
                        <Info className="w-4 h-4 text-[#7091E6] shrink-0" />
                        <span>About FleetKart</span>
                      </button>
                    )}

                    <a
                      href="/logos/index.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMenuOpen(false)}
                      className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-xs font-bold text-[#3D52A0] hover:bg-[#EDE8F5] hover:text-[#7091E6] transition-colors cursor-pointer text-left"
                    >
                      <Sparkles className="w-4 h-4 text-[#7091E6] shrink-0" />
                      <span>Download Brand Logos</span>
                    </a>
                  </div>

                  {/* Quick Actions / Logout Footer */}
                  {onLogout && (
                    <div className="p-2 border-t border-[#ADBBDA]/50 space-y-0.5">
                      <button
                        type="button"
                        onClick={() => {
                          setIsMenuOpen(false);
                          onLogout();
                        }}
                        className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-xs font-bold text-red-600 hover:bg-red-50 transition-colors cursor-pointer text-left"
                      >
                        <LogOut className="w-4 h-4 text-red-500 shrink-0" />
                        <span>Log Out</span>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};
