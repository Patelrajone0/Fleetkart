import React, { useState } from 'react';
import { X, Search, Map, Check } from 'lucide-react';
import { INDIAN_STATES_LIST } from '../data/carBrandsData';

interface StateSelectorModalProps {
  currentState: string;
  onSelectState: (state: string) => void;
  onClose: () => void;
}

export const StateSelectorModal: React.FC<StateSelectorModalProps> = ({
  currentState,
  onSelectState,
  onClose,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStates = INDIAN_STATES_LIST.filter((item) => {
    const term = searchTerm.toLowerCase().trim();
    return (
      item.name.toLowerCase().includes(term) ||
      item.region.toLowerCase().includes(term) ||
      item.type.toLowerCase().includes(term)
    );
  }).sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="fixed inset-0 z-50 bg-[#1E2E4E]/40 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-150">
      <div className="w-full max-w-md bg-white border border-[#ADBBDA] rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[70vh] animate-dropdown">
        
        {/* Top Header */}
        <div className="bg-[#3D52A0] border-b border-[#3D52A0] p-5 flex items-center justify-between text-white shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#7091E6]/30 text-white flex items-center justify-center border border-[#ADBBDA]/40">
              <Map className="w-5 h-5 text-[#EDE8F5]" />
            </div>
            <div>
              <h3 className="text-lg font-black text-white leading-tight">
                Select Your Indian State
              </h3>
              <p className="text-xs text-[#ADBBDA]">
                Dealer fleets and tender discounts are organized by state.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-white hover:text-white p-2 rounded-xl bg-[#7091E6]/30 hover:bg-[#7091E6] transition-colors cursor-pointer shrink-0"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-4 bg-[#EDE8F5] border-b border-[#ADBBDA] shrink-0">
          <div className="relative">
            <Search className="w-4 h-4 text-[#8697C4] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Find your State here"
              className="w-full bg-white border border-[#ADBBDA] rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-[#3D52A0] placeholder-[#8697C4] font-medium focus:outline-none focus:border-[#7091E6] focus:ring-2 focus:ring-[#7091E6]/20 shadow-2xs"
            />
          </div>
        </div>

        {/* States List */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 divide-y divide-[#ADBBDA]/30 bg-white">
          {filteredStates.length === 0 ? (
            <div className="text-center py-10 text-[#8697C4] text-xs space-y-1">
              <p className="font-bold text-[#3D52A0] text-sm">No Indian state found</p>
              <p>Try searching for Gujarat, Maharashtra, Karnataka, or Rajasthan</p>
            </div>
          ) : (
            filteredStates.map((st) => {
              const isSelected = currentState.toLowerCase() === st.name.toLowerCase();
              return (
                <button
                  type="button"
                  key={st.name}
                  onClick={() => {
                    onSelectState(st.name);
                    onClose();
                  }}
                  className={`w-full flex items-center justify-between p-3 rounded-2xl transition-all cursor-pointer text-left my-1 ${
                    isSelected
                      ? 'bg-[#EDE8F5] border border-[#7091E6]/40'
                      : 'hover:bg-[#EDE8F5]/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs ${
                        isSelected
                          ? 'bg-[#7091E6] text-white'
                          : 'bg-[#EDE8F5] text-[#3D52A0]'
                      }`}
                    >
                      {st.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-[#3D52A0]">
                          {st.name}
                        </span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white border border-[#ADBBDA]/60 text-[#8697C4]">
                          {st.type}
                        </span>
                      </div>
                      <span className="text-[11px] text-[#8697C4]">
                        {st.region}
                      </span>
                    </div>
                  </div>

                  {isSelected && (
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#7091E6] bg-white px-2.5 py-1 rounded-full border border-[#7091E6]/30">
                      <Check className="w-3.5 h-3.5" />
                      <span>Active</span>
                    </div>
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
