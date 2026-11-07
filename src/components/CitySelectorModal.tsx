import React, { useState } from 'react';
import { X, Search, MapPin, Check } from 'lucide-react';
import { INDIAN_CITIES } from '../data/mockData';

interface CitySelectorModalProps {
  currentCity: string;
  onSelectCity: (city: string) => void;
  onClose: () => void;
}

export const CitySelectorModal: React.FC<CitySelectorModalProps> = ({
  currentCity,
  onSelectCity,
  onClose,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTier] = useState<string>('all');

  const filteredCities = INDIAN_CITIES.filter((item) => {
    const matchesSearch =
      item.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.state.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTier = filterTier === 'all' || item.tier === filterTier;
    return matchesSearch && matchesTier;
  }).sort((a, b) => a.city.localeCompare(b.city));

  return (
    <div className="fixed inset-0 z-50 bg-[#3D52A0]/40 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="w-full max-w-xl bg-white border border-[#ADBBDA] rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Header */}
        <div className="bg-[#3D52A0] border-b border-[#3D52A0] p-5 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#7091E6]/30 text-white flex items-center justify-center border border-[#ADBBDA]/40">
              <MapPin className="w-5 h-5 text-[#EDE8F5]" />
            </div>
            <div>
              <h3 className="text-lg font-black text-white">
                Select Your Indian City
              </h3>
              <p className="text-xs text-[#ADBBDA]">
                Dealer fleets and delivery are localized to your city.
              </p>
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

        {/* Search Bar */}
        <div className="p-4 bg-[#EDE8F5] border-b border-[#ADBBDA] space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-[#8697C4] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Ahmedabad, Mumbai, Surat, Delhi, Bengaluru..."
              className="w-full bg-white border border-[#ADBBDA] rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-[#3D52A0] placeholder-[#8697C4] focus:outline-none focus:border-[#7091E6] focus:ring-1 focus:ring-[#7091E6]"
            />
          </div>

          {/* Quick Popular Pills */}
          <div>
            <span className="text-[11px] font-semibold text-[#3D52A0] block mb-1.5">
              Popular Automotive Hubs:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {['Ahmedabad', 'Mumbai', 'Delhi NCR', 'Bengaluru', 'Pune', 'Surat', 'Hyderabad', 'Jaipur'].map((popCity) => (
                <button
                  type="button"
                  key={popCity}
                  onClick={() => {
                    onSelectCity(popCity);
                    onClose();
                  }}
                  className={`text-xs px-2.5 py-1 rounded-full border transition-all cursor-pointer ${
                    currentCity === popCity
                      ? 'bg-[#7091E6] text-white font-bold border-[#7091E6]'
                      : 'bg-white border-[#ADBBDA] text-[#3D52A0] hover:border-[#7091E6]'
                  }`}
                >
                  {popCity}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Cities List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-1 divide-y divide-[#ADBBDA]/40 bg-white">
          {filteredCities.length === 0 ? (
            <div className="text-center py-8 text-[#8697C4] text-xs">
              No Indian cities found matching &ldquo;{searchTerm}&rdquo;
            </div>
          ) : (
            filteredCities.map((item) => {
              const isSelected = item.city === currentCity;
              return (
                <button
                  type="button"
                  key={`${item.city}-${item.state}`}
                  onClick={() => {
                    onSelectCity(item.city);
                    onClose();
                  }}
                  className={`w-full flex items-center justify-between p-3 rounded-xl transition-all text-left cursor-pointer ${
                    isSelected
                      ? 'bg-[#EDE8F5] text-[#3D52A0] font-bold'
                      : 'hover:bg-[#EDE8F5]/50 text-[#1E293B]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <MapPin className={`w-4 h-4 ${isSelected ? 'text-[#7091E6]' : 'text-[#8697C4]'}`} />
                    <div>
                      <div className="text-sm font-semibold flex items-center gap-2 text-[#3D52A0]">
                        <span>{item.city}</span>
                        <span className="text-[10px] text-[#3D52A0] bg-[#ADBBDA]/30 px-1.5 py-0.5 rounded">
                          {item.tier}
                        </span>
                      </div>
                      <div className="text-xs text-[#8697C4]">{item.state}</div>
                    </div>
                  </div>

                  {isSelected && (
                    <span className="flex items-center gap-1 text-xs font-bold text-white bg-[#7091E6] px-2.5 py-1 rounded-full shadow-xs">
                      <Check className="w-3.5 h-3.5" />
                      Selected
                    </span>
                  )}
                </button>
              );
            })
          )}
        </div>

      </div>
    </div>
  );
};
