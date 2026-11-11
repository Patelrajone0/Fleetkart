import React from 'react';
import { Car, Users, Plus, User as UserIcon } from 'lucide-react';
import { User } from '../types';

interface MobileNavProps {
  activeTab: 'fleets' | 'my-fleets';
  setActiveTab: (tab: 'fleets' | 'my-fleets') => void;
  myFleetsCount: number;
  onOpenCreateFleet: () => void;
  onOpenProfile: () => void;
  currentUser: User;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  activeTab,
  setActiveTab,
  myFleetsCount,
  onOpenCreateFleet,
  onOpenProfile,
  currentUser,
}) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#3D52A0] backdrop-blur-lg border-t border-[#ADBBDA]/30 px-3 py-2 shadow-lg">
      <div className="flex items-center justify-around">
        
        {/* Explore Fleets */}
        <button
          type="button"
          onClick={() => setActiveTab('fleets')}
          className={`flex flex-col items-center gap-1 py-1 px-2 transition-all cursor-pointer ${
            activeTab === 'fleets' ? 'text-white font-black' : 'text-[#ADBBDA] hover:text-white'
          }`}
        >
          <Car className="w-5 h-5" />
          <span className="text-[10px]">Fleets</span>
        </button>

        {/* Center Start Fleet FAB button */}
        <button
          type="button"
          onClick={onOpenCreateFleet}
          className="-mt-5 w-12 h-12 rounded-full bg-[#7091E6] hover:bg-white text-white hover:text-[#3D52A0] flex items-center justify-center shadow-lg shadow-[#7091E6]/40 font-black border-4 border-[#3D52A0] active:scale-95 transition-all cursor-pointer"
          title="Start a Fleet"
        >
          <Plus className="w-6 h-6 stroke-[3]" />
        </button>

        {/* My Fleets */}
        <button
          type="button"
          onClick={() => setActiveTab('my-fleets')}
          className={`flex flex-col items-center gap-1 py-1 px-2 relative transition-all cursor-pointer ${
            activeTab === 'my-fleets' ? 'text-white font-black' : 'text-[#ADBBDA] hover:text-white'
          }`}
        >
          <Users className="w-5 h-5" />
          <span className="text-[10px]">My Fleets</span>
          {myFleetsCount > 0 && (
            <span className="absolute top-0 right-1 w-4 h-4 bg-[#7091E6] text-white text-[10px] rounded-full font-black flex items-center justify-center">
              {myFleetsCount}
            </span>
          )}
        </button>

        {/* Profile / City */}
        <button
          type="button"
          onClick={onOpenProfile}
          className="flex flex-col items-center gap-1 py-1 px-2 text-[#ADBBDA] hover:text-white cursor-pointer"
        >
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="w-5 h-5 rounded-full object-cover border border-[#7091E6]"
          />
          <span className="text-[10px] truncate max-w-[50px]">{currentUser.city}</span>
        </button>

      </div>
    </div>
  );
};
