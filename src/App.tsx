import React, { useState, useEffect } from 'react';
import { 
  Car, 
  PlusCircle, 
  Users, 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Fleet, User } from './types';
import { INITIAL_FLEETS, DEMO_USER, INDIAN_CITIES } from './data/mockData';
import { AuthGate } from './components/AuthGate';
import { Navbar } from './components/Navbar';
import { FleetFilterSection } from './components/FleetFilterSection';
import { FleetCard } from './components/FleetCard';
import { FleetRoomModal } from './components/FleetRoomModal';
import { JoinFleetModal } from './components/JoinFleetModal';
import { CreateFleetModal } from './components/CreateFleetModal';
import { StateSelectorModal } from './components/StateSelectorModal';
import { CitySelectorModal } from './components/CitySelectorModal';
import { ProfileModal } from './components/ProfileModal';
import { ToastContainer, ToastMessage } from './components/Toast';
import { HeroSection } from './components/HeroSection';
import { HowItWorksModal } from './components/HowItWorksModal';
import { BudgetDiscoverySection } from './components/BudgetDiscoverySection';
import { CarCard } from './components/CarCard';
import { WhyFleetkartSection } from './components/WhyFleetkartSection';
import { FleetkartComparisonSection } from './components/FleetkartComparisonSection';
import { Footer } from './components/Footer';
import { CAR_CATALOG } from './data/mockData';
import { CarModel } from './types';

export function App() {
  // 1. Mandatory Authentication State (defaults to DEMO_USER Raj Patel)
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('fleetkart_user');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return DEMO_USER;
      }
    }
    return DEMO_USER;
  });

  // Fleets state - clean with zero demo fleets
  const [fleets, setFleets] = useState<Fleet[]>(() => {
    try {
      // Clear legacy mock demo fleets from localStorage
      localStorage.removeItem('fleetkart_fleets');
      const saved = localStorage.getItem('fleetkart_live_fleets');
      if (saved) {
        const parsed: Fleet[] = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          // Exclude any legacy demo fleet IDs
          const filtered = parsed.filter(
            (f) =>
              !f.id.startsWith('fleet-creta-amd-') &&
              !f.id.startsWith('fleet-nexon-amd-') &&
              !f.id.startsWith('fleet-scorpio-amd-') &&
              !f.id.startsWith('fleet-xuv-mum-') &&
              !f.id.startsWith('fleet-seltos-blr-') &&
              !f.id.startsWith('fleet-vitara-del-') &&
              !f.id.startsWith('fleet-innova-surat-') &&
              !f.id.startsWith('fleet-thar-raj-')
          );
          return filtered;
        }
      }
    } catch {
      // ignore JSON parse error
    }
    return INITIAL_FLEETS;
  });

  // Navigation & Cascading Multi-Level Filters
  const [activeTab, setActiveTab] = useState<'fleets' | 'my-fleets'>('fleets');
  
  // Cascading Selectors: State, City, Brand, Model, Fuel
  const [selectedState, setSelectedState] = useState<string>('Gujarat');
  const [selectedCity, setSelectedCity] = useState<string>('All Cities');
  const [selectedBrand, setSelectedBrand] = useState<string>('All Brands');
  const [selectedModel, setSelectedModel] = useState<string>('All Models');
  const [selectedFuel, setSelectedFuel] = useState<string>('All');

  // Budget discovery & cars list state
  const [budgetValue, setBudgetValue] = useState<number>(10);
  const [selectedBudgetPreset, setSelectedBudgetPreset] = useState<string>('₹8–10L');
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'popular' | 'savings'>('price-asc');
  const [exploreViewMode, setExploreViewMode] = useState<'cars' | 'fleets'>('cars');

  // Modals
  const [activeFleetRoom, setActiveFleetRoom] = useState<Fleet | null>(null);
  const [joiningFleet, setJoiningFleet] = useState<Fleet | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showStateModal, setShowStateModal] = useState(false);
  const [showCityModal, setShowCityModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showHowItWorksModal, setShowHowItWorksModal] = useState(false);
  const [initialCarForCreate, setInitialCarForCreate] = useState<string | undefined>(undefined);

  // Toasts
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Initialize with user's state when logged in
  useEffect(() => {
    if (currentUser) {
      if (currentUser.state) setSelectedState(currentUser.state);
    }
  }, [currentUser]);

  // Persist live user fleets
  useEffect(() => {
    localStorage.setItem('fleetkart_live_fleets', JSON.stringify(fleets));
  }, [fleets]);

  const addToast = (type: 'success' | 'info' | 'warning', title: string, description?: string) => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`;
    setToasts((prev) => [...prev, { id, type, title, description }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const handleDismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleSelectState = (newState: string) => {
    setSelectedState(newState);
    setSelectedCity('All Cities');
    if (currentUser) {
      const updatedUser: User = { ...currentUser, state: newState };
      setCurrentUser(updatedUser);
      localStorage.setItem('fleetkart_user', JSON.stringify(updatedUser));
    }
    addToast('info', `State Switched to ${newState}`, 'Showing active dealership groups and bulk fleets in this state');
  };

  const handleLoginSuccess = (user: User) => {
    setCurrentUser(user);
    if (user.state) setSelectedState(user.state);
    setSelectedCity('All Cities');
    localStorage.setItem('fleetkart_user', JSON.stringify(user));
    addToast('success', `Welcome to FleetKart, ${user.name}!`, `Showing bulk fleets in ${user.state || 'Gujarat'}`);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('fleetkart_user');
    addToast('info', 'Logged Out', 'You must sign in again to access dealer fleet tenders');
  };

  const handleResetFilters = () => {
    setSelectedState(currentUser?.state || 'Gujarat');
    setSelectedCity('All Cities');
    setSelectedBrand('All Brands');
    setSelectedModel('All Models');
    setSelectedFuel('All');
  };

  // Join fleet workflow
  const handleOpenJoinModal = (fleet: Fleet) => {
    setJoiningFleet(fleet);
  };

  const handleConfirmJoin = (fleetId: string, memberDetails: any) => {
    setFleets((prev) =>
      prev.map((f) => {
        if (f.id === fleetId) {
          const updatedMembers = [...f.joinedMembers, memberDetails];
          const isNowFull = updatedMembers.length >= f.targetSize;
          return {
            ...f,
            joinedMembers: updatedMembers,
            status: isNowFull ? 'Locked' : 'Almost Full',
          };
        }
        return f;
      })
    );

    const targetFleet = fleets.find((f) => f.id === fleetId);
    setJoiningFleet(null);

    // Open Fleet Room immediately
    if (targetFleet) {
      const updatedTargetFleet: Fleet = {
        ...targetFleet,
        joinedMembers: [...targetFleet.joinedMembers, memberDetails],
        status: targetFleet.joinedMembers.length + 1 >= targetFleet.targetSize ? 'Locked' : 'Almost Full'
      };
      setActiveFleetRoom(updatedTargetFleet);

      addToast(
        'success',
        `Joined ${targetFleet.brand} ${targetFleet.model} Fleet!`,
        `You have locked spot #${updatedTargetFleet.joinedMembers.length} of ${targetFleet.targetSize}`
      );
    }
  };

  // Create fleet workflow
  const handleCreateFleet = (newFleet: Fleet) => {
    setFleets((prev) => [newFleet, ...prev]);
    setShowCreateModal(false);
    setActiveFleetRoom(newFleet);
    addToast('success', `Fleet Created for ${newFleet.brand} ${newFleet.model}!`, `You are Buyer #1 in ${newFleet.city}`);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  // Chat message workflow
  const handleSendMessage = (fleetId: string, messageText: string, isQuoteShare?: boolean, quoteData?: any) => {
    if (!currentUser) return;
    const newMessage = {
      id: `msg-${Date.now()}`,
      senderId: currentUser.id,
      senderName: currentUser.name,
      senderAvatar: currentUser.avatar,
      text: messageText,
      timestamp: 'Just Now',
      isDealerQuoteShare: isQuoteShare,
      quoteData
    };

    setFleets((prev) =>
      prev.map((f) => {
        if (f.id === fleetId) {
          return {
            ...f,
            chatMessages: [...f.chatMessages, newMessage]
          };
        }
        return f;
      })
    );

    // Keep activeFleetRoom state synchronized
    if (activeFleetRoom && activeFleetRoom.id === fleetId) {
      setActiveFleetRoom((prev) =>
        prev
          ? {
              ...prev,
              chatMessages: [...prev.chatMessages, newMessage]
            }
          : null
      );
    }

    if (isQuoteShare) {
      addToast('success', 'Showroom Quote Shared', 'Your quote has been posted to the group room');
    }
  };

  // Voting on dealer quotes
  const handleVoteQuote = (fleetId: string, quoteId: string) => {
    if (!currentUser) return;
    setFleets((prev) =>
      prev.map((f) => {
        if (f.id === fleetId) {
          const updatedQuotes = f.dealerQuotes.map((q) => {
            if (q.id === quoteId) {
              const alreadyVoted = q.voters.includes(currentUser.name);
              const newVoters = alreadyVoted
                ? q.voters.filter((v) => v !== currentUser.name)
                : [...q.voters, currentUser.name];
              return {
                ...q,
                votes: newVoters.length,
                voters: newVoters
              };
            }
            return q;
          });
          return { ...f, dealerQuotes: updatedQuotes };
        }
        return f;
      })
    );

    if (activeFleetRoom && activeFleetRoom.id === fleetId) {
      setActiveFleetRoom((prev) => {
        if (!prev) return null;
        const updatedQuotes = prev.dealerQuotes.map((q) => {
          if (q.id === quoteId) {
            const alreadyVoted = q.voters.includes(currentUser.name);
            const newVoters = alreadyVoted
              ? q.voters.filter((v) => v !== currentUser.name)
              : [...q.voters, currentUser.name];
            return {
              ...q,
              votes: newVoters.length,
              voters: newVoters
            };
          }
          return q;
        });
        return { ...prev, dealerQuotes: updatedQuotes };
      });
    }

    addToast('info', 'Vote Recorded', 'Your dealer tender vote has been tallied');
  };

  // Deal Locking
  const handleLockDeal = (fleetId: string, quote: any) => {
    setFleets((prev) =>
      prev.map((f) => (f.id === fleetId ? { ...f, status: 'Deal Confirmed' } : f))
    );
    addToast('success', 'Deal Secured!', `Group token allocated for ${quote.dealerName}`);
  };

  // Delete Fleet - Exclusive to the fleet's creator
  const handleDeleteFleet = (fleetId: string) => {
    if (!currentUser) return;
    const targetFleet = fleets.find((f) => f.id === fleetId);
    if (!targetFleet) return;

    // Strict security check: only the creator can delete!
    if (targetFleet.creatorId !== currentUser.id) {
      addToast('warning', 'Permission Denied', 'Only the creator of this fleet can delete it.');
      return;
    }

    setFleets((prev) => prev.filter((f) => f.id !== fleetId));
    if (activeFleetRoom && activeFleetRoom.id === fleetId) {
      setActiveFleetRoom(null);
    }
    addToast(
      'info',
      'Fleet Deleted',
      `Your ${targetFleet.brand} ${targetFleet.model} fleet in ${targetFleet.city} has been deleted.`
    );
  };

  // Share on WhatsApp
  const handleShareWhatsApp = (fleet: Fleet) => {
    const text = `🚨 *FleetKart Group Booking in ${fleet.city}*\n\nTeaming up 5 buyers for bulk dealer bidding on the new *${fleet.brand} ${fleet.model}*.\n\n• Pricing: Competitive Dealer Quotes\n• *Estimated Discount: ${fleet.estimatedSavingsBadge}*\n\n${fleet.joinedMembers.length}/${fleet.targetSize} buyers joined already. Join before dealer bidding closes!`;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    addToast('info', 'Share link generated', 'Opening WhatsApp invite share...');
  };

  // Filter cars from CAR_CATALOG based on budget, preset, fuel & sort
  const filteredCars = React.useMemo(() => {
    return CAR_CATALOG.filter((car) => {
      const minPrice = car.minPriceLakh || 8;
      const maxPrice = car.maxPriceLakh || 12;

      // 1. Budget filtering
      if (selectedBudgetPreset === 'All Budgets') {
        // show all
      } else if (selectedBudgetPreset === 'Under ₹8L') {
        if (minPrice > 8) return false;
      } else if (selectedBudgetPreset === '₹8–10L') {
        if (minPrice > 10 || maxPrice < 8) return false;
      } else if (selectedBudgetPreset === '₹10–15L') {
        if (minPrice > 15 || maxPrice < 10) return false;
      } else if (selectedBudgetPreset === '₹15–20L') {
        if (minPrice > 20 || maxPrice < 15) return false;
      } else if (selectedBudgetPreset === '₹20–30L') {
        if (minPrice > 30 || maxPrice < 20) return false;
      } else if (selectedBudgetPreset === '₹30–60L') {
        if (minPrice > 60 || maxPrice < 30) return false;
      } else if (selectedBudgetPreset === '₹60L+') {
        if (minPrice < 60) return false;
      } else {
        // Slider value
        if (minPrice > budgetValue) return false;
      }

      // 2. Fuel filtering
      if (selectedFuel !== 'All') {
        const hasFuel = car.fuelTypes.some(
          (f) => f.toLowerCase() === selectedFuel.toLowerCase()
        );
        if (!hasFuel) return false;
      }

      return true;
    }).sort((a, b) => {
      const minA = a.minPriceLakh || 8;
      const minB = b.minPriceLakh || 8;
      if (sortBy === 'price-asc') return minA - minB;
      if (sortBy === 'price-desc') return minB - minA;
      if (sortBy === 'savings') {
        return (b.variantsCount || 10) - (a.variantsCount || 10);
      }
      return 0;
    });
  }, [budgetValue, selectedBudgetPreset, selectedFuel, sortBy]);

  // Filter cars from CAR_CATALOG based on selectedBrand, selectedModel, and selectedFuel
  const displayedCars = React.useMemo(() => {
    return CAR_CATALOG.filter((car) => {
      // 1. Brand filter
      if (selectedBrand !== 'All Brands' && car.brand.toLowerCase() !== selectedBrand.toLowerCase()) {
        return false;
      }
      // 2. Model filter
      if (selectedModel !== 'All Models' && car.model.toLowerCase() !== selectedModel.toLowerCase()) {
        return false;
      }
      // 3. Fuel filter
      if (selectedFuel !== 'All') {
        const matchesFuel = car.fuelTypes.some(
          (f) => f.toLowerCase() === selectedFuel.toLowerCase()
        );
        if (!matchesFuel) return false;
      }
      return true;
    });
  }, [selectedBrand, selectedModel, selectedFuel]);

  // Handle joining a car's group deal
  const handleJoinCarDeal = (car: CarModel, fleet?: Fleet) => {
    const existingFleet = fleet || fleets.find(
      (f) =>
        f.model.toLowerCase() === car.model.toLowerCase() ||
        f.carId.toLowerCase() === car.id.toLowerCase()
    );

    if (existingFleet) {
      if (isMemberOfFleet(existingFleet)) {
        setActiveFleetRoom(existingFleet);
      } else {
        handleOpenJoinModal(existingFleet);
      }
    } else {
      setInitialCarForCreate(car.id);
      setShowCreateModal(true);
      addToast(
        'info',
        `Start ${car.brand} ${car.model} Fleet`,
        `Be the founding buyer in ${selectedState !== 'All States' ? selectedState : (currentUser?.state || 'your state')}! We'll assemble other buyers to unlock bulk dealer tenders.`
      );
    }
  };

  // Filtered community fleets
  const filteredFleets = fleets.filter((fleet) => {
    // 1. State filter
    if (selectedState !== 'All States' && fleet.state.toLowerCase() !== selectedState.toLowerCase()) {
      return false;
    }
    // 2. City filter
    if (selectedCity !== 'All Cities' && fleet.city.toLowerCase() !== selectedCity.toLowerCase()) {
      return false;
    }
    // 3. Brand filter
    if (selectedBrand !== 'All Brands' && fleet.brand.toLowerCase() !== selectedBrand.toLowerCase()) {
      return false;
    }
    // 4. Model filter
    if (selectedModel !== 'All Models' && fleet.model.toLowerCase() !== selectedModel.toLowerCase()) {
      return false;
    }
    // 5. Fuel filter
    if (selectedFuel !== 'All' && fleet.fuelType.toLowerCase() !== selectedFuel.toLowerCase()) {
      return false;
    }
    return true;
  });

  // User's joined fleets
  const myFleets = fleets.filter((f) =>
    currentUser
      ? f.joinedMembers.some(
          (m) => m.id === currentUser.id || m.name === currentUser.name
        )
      : false
  );

  // Check if current user is in a given fleet
  const isMemberOfFleet = (fleet: Fleet) => {
    if (!currentUser) return false;
    return fleet.joinedMembers.some(
      (m) => m.id === currentUser.id || m.name === currentUser.name
    );
  };

  // If user is not authenticated, show mandatory Login / Sign-up Gate
  if (!currentUser) {
    return <AuthGate onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="min-h-screen bg-[#EDE8F5] text-slate-800 flex flex-col selection:bg-[#7091E6] selection:text-white">
      
      {/* 1. UPPER MOST BAR: Clean & Professional Navigation */}
      <Navbar
        currentUser={currentUser}
        onOpenProfile={() => setShowProfileModal(true)}
        onLogoClick={() => {
          window.location.reload();
        }}
        selectedState={selectedState !== 'All States' ? selectedState : (currentUser?.state || 'Gujarat')}
        onSelectState={handleSelectState}
        onOpenStateModal={() => setShowStateModal(true)}
        onOpenHowItWorks={() => setShowHowItWorksModal(true)}
        onOpenCreateFleet={() => {
          setInitialCarForCreate(undefined);
          setShowCreateModal(true);
        }}
        onBrowseFleets={() => {
          setActiveTab('fleets');
          const el = document.getElementById('fleets-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onFindByBudget={() => {
          setActiveTab('fleets');
          const el = document.getElementById('fleets-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onLogout={handleLogout}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 w-full">
        
        {/* FIRST IMPRESSION: Modern Split Hero Section */}
        {activeTab === 'fleets' && (
          <HeroSection
            selectedCity={selectedCity}
            onOpenCityModal={() => setShowCityModal(true)}
            onOpenHowItWorks={() => setShowHowItWorksModal(true)}
            onExploreFleets={() => {
              const el = document.getElementById('fleets-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            onSelectCarFilter={(brand, model) => {
              setSelectedBrand(brand);
              setSelectedModel(model);
            }}
          />
        )}

        {/* 2. LOWER PART: Discovery & Filtering Control Center */}
        <div id="fleets-section">
          <FleetFilterSection
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            myFleetsCount={myFleets.length}
            onOpenCreateFleet={() => {
              setInitialCarForCreate(undefined);
              setShowCreateModal(true);
            }}
            selectedState={selectedState}
            setSelectedState={setSelectedState}
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
            selectedBrand={selectedBrand}
            setSelectedBrand={setSelectedBrand}
            selectedModel={selectedModel}
            setSelectedModel={setSelectedModel}
            selectedFuel={selectedFuel}
            setSelectedFuel={setSelectedFuel}
            onResetFilters={handleResetFilters}
            totalResultsCount={filteredFleets.length}
          />
        </div>

        {/* VIEW 1: FLEETS EXPLORATION */}
        {activeTab === 'fleets' && (
          <div className="space-y-12">
            
            {/* Fleets Grid Header */}
            {(() => {
              const isAllStates = selectedState === 'All States';
              
              // Only display city if a city is actively selected AND matches selectedState
              const isCityMatchingState = !isAllStates && selectedCity !== 'All Cities' && INDIAN_CITIES.some(
                (c) => c.city.toLowerCase() === selectedCity.toLowerCase() && c.state.toLowerCase() === selectedState.toLowerCase()
              );

              const headerTitle = isAllStates
                ? 'Available Car Fleets All Over India'
                : isCityMatchingState
                ? `Available Car Fleets in ${selectedCity}, ${selectedState}`
                : `Available Car Fleets in ${selectedState}`;

              const headerSubtitle = isAllStates
                ? 'Showing active community-created buying fleets all over India'
                : isCityMatchingState
                ? `Showing active community-created buying fleets in ${selectedCity}, ${selectedState}`
                : `Showing active community-created buying fleets in ${selectedState}`;

              return (
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#3D52A0] flex flex-wrap items-center gap-2">
                      <span>{headerTitle}</span>
                      <span className="text-xs bg-[#ADBBDA]/30 text-[#3D52A0] border border-[#ADBBDA] px-2.5 py-0.5 rounded-full font-bold">
                        {filteredFleets.length} Active {filteredFleets.length === 1 ? 'Fleet' : 'Fleets'}
                      </span>
                    </h2>
                    <p className="text-xs text-[#1E293B]/70 mt-0.5">
                      {headerSubtitle}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setInitialCarForCreate(undefined);
                      setShowCreateModal(true);
                    }}
                    className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#7091E6] hover:bg-[#3D52A0] text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                  >
                    <PlusCircle className="w-4 h-4" />
                    <span>+ Start a Fleet</span>
                  </button>
                </div>
              );
            })()}

            {/* Display fleets ONLY if any user makes it; otherwise show informative empty state */}
            {filteredFleets.length === 0 ? (
              <div className="bg-white border border-[#ADBBDA] rounded-3xl p-8 sm:p-12 text-center shadow-xs">
                <div className="w-16 h-16 rounded-2xl bg-[#EDE8F5] border border-[#ADBBDA]/60 flex items-center justify-center mx-auto mb-4">
                  <Car className="w-8 h-8 text-[#7091E6]" />
                </div>

                {(() => {
                  const isAllStates = selectedState === 'All States';
                  const activeSelectedState = !isAllStates ? selectedState : (currentUser?.state || 'Gujarat');

                  const emptyTitle = isAllStates
                    ? selectedModel !== 'All Models'
                      ? `No fleet available for ${selectedBrand} ${selectedModel} all over India`
                      : selectedBrand !== 'All Brands'
                      ? `No fleet available for ${selectedBrand} all over India`
                      : 'No active fleets available all over India'
                    : selectedModel !== 'All Models'
                    ? `No fleet available for ${selectedBrand} ${selectedModel} in ${activeSelectedState}`
                    : selectedBrand !== 'All Brands'
                    ? `No fleet available for ${selectedBrand} in ${activeSelectedState}`
                    : `No fleet available in ${activeSelectedState}`;

                  const emptySubtitle = isAllStates
                    ? 'No buyers have started a group deal for this car all over India yet. Be the founding buyer! Start a new fleet for the car you are looking for — fellow buyers across India will join to unlock OEM dealer bulk tenders!'
                    : `No buyers have started a group deal for this car or in ${activeSelectedState} yet. Be the founding buyer! Start a new fleet for the car you are looking for — fellow local buyers will join to unlock OEM dealer bulk tenders!`;

                  return (
                    <>
                      <h3 className="text-xl sm:text-2xl font-black text-[#1E2E4E] mb-2">
                        {emptyTitle}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#64748B] max-w-lg mx-auto mb-6 leading-relaxed">
                        {emptySubtitle}
                      </p>
                    </>
                  );
                })()}

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      let initId: string | undefined = undefined;
                      if (selectedModel !== 'All Models') {
                        const m = CAR_CATALOG.find((c) => c.model.toLowerCase() === selectedModel.toLowerCase());
                        if (m) initId = m.id;
                      } else if (selectedBrand !== 'All Brands') {
                        const m = CAR_CATALOG.find((c) => c.brand.toLowerCase() === selectedBrand.toLowerCase());
                        if (m) initId = m.id;
                      }
                      setInitialCarForCreate(initId);
                      setShowCreateModal(true);
                    }}
                    className="px-6 py-3.5 rounded-2xl bg-[#7091E6] hover:bg-[#3D52A0] text-white font-black text-xs sm:text-sm inline-flex items-center gap-2 shadow-lg shadow-[#7091E6]/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    <PlusCircle className="w-4 h-4 text-white" />
                    <span>
                      Start a Fleet for {selectedModel !== 'All Models' ? selectedModel : (selectedBrand !== 'All Brands' ? selectedBrand : 'Your Car')}
                    </span>
                  </button>

                  {(selectedBrand !== 'All Brands' || selectedModel !== 'All Models' || selectedCity !== 'All Cities' || selectedFuel !== 'All' || selectedState !== (currentUser?.state || 'Gujarat')) && (
                    <button
                      type="button"
                      onClick={handleResetFilters}
                      className="px-5 py-3.5 rounded-2xl bg-[#EDE8F5] hover:bg-[#ADBBDA]/30 border border-[#ADBBDA] text-[#3D52A0] font-bold text-xs sm:text-sm transition-all cursor-pointer"
                    >
                      Reset Filters
                    </button>
                  )}
                </div>

                {/* Quick suggestions for starting a fleet */}
                <div className="mt-8 pt-6 border-t border-slate-100 max-w-xl mx-auto">
                  <p className="text-[11px] font-bold text-[#8697C4] uppercase tracking-wider mb-3">
                    {selectedState === 'All States'
                      ? 'Or start a fleet for popular models all over India:'
                      : `Or start a fleet for popular models in ${selectedState}:`}
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    {['Creta', 'Swift', 'Nexon', 'Thar Roxx', 'Brezza', 'Dzire', 'Innova Hycross', 'Punch'].map((carName) => {
                      const matchedCar = CAR_CATALOG.find((c) => c.model.toLowerCase() === carName.toLowerCase());
                      return (
                        <button
                          key={carName}
                          type="button"
                          onClick={() => {
                            if (matchedCar) {
                              setInitialCarForCreate(matchedCar.id);
                              setShowCreateModal(true);
                            }
                          }}
                          className="px-3 py-1.5 rounded-xl bg-white hover:bg-[#EDE8F5] border border-[#ADBBDA]/80 hover:border-[#7091E6] text-xs font-semibold text-[#3D52A0] transition-colors cursor-pointer"
                        >
                          + {carName}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredFleets.map((fleet) => (
                  <FleetCard
                    key={fleet.id}
                    fleet={fleet}
                    isUserMember={isMemberOfFleet(fleet)}
                    isCreator={currentUser.id === fleet.creatorId}
                    onJoinFleet={handleOpenJoinModal}
                    onOpenFleetRoom={setActiveFleetRoom}
                    onShareWhatsApp={handleShareWhatsApp}
                    onDeleteFleet={handleDeleteFleet}
                  />
                ))}
              </div>
            )}

            {/* Why FleetKart & Comparison */}
            <WhyFleetkartSection />
            <FleetkartComparisonSection />

          </div>
        )}

        {/* VIEW 2: MY FLEETS TAB */}
        {activeTab === 'my-fleets' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-black text-[#3D52A0]">
                  My Active Buying Fleets
                </h2>
                <p className="text-xs text-[#1E293B]/70 mt-1">
                  Fleets you have joined or founded. Chat with fellow buyers and track dealer tenders.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowCreateModal(true)}
                className="px-4 py-2 rounded-xl bg-[#7091E6] hover:bg-[#3D52A0] text-white font-bold text-xs flex items-center gap-1.5 shadow-md shadow-[#7091E6]/20 cursor-pointer transition-all"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Start New Fleet</span>
              </button>
            </div>

            {myFleets.length === 0 ? (
              <div className="bg-white border border-[#ADBBDA] rounded-3xl p-12 text-center shadow-sm">
                <Users className="w-12 h-12 text-[#8697C4] mx-auto mb-3" />
                <h3 className="text-lg font-bold text-[#3D52A0]">You haven&apos;t joined any fleets yet</h3>
                <p className="text-xs text-[#1E293B]/70 max-w-md mx-auto mt-1 mb-6">
                  Join an active fleet in your city or start a new group to unlock dealer bulk discounts.
                </p>
                <button
                  type="button"
                  onClick={() => setActiveTab('fleets')}
                  className="px-6 py-3 rounded-xl bg-[#7091E6] hover:bg-[#3D52A0] text-white font-bold text-sm inline-flex items-center gap-2 shadow-md shadow-[#7091E6]/20 cursor-pointer transition-all"
                >
                  <Car className="w-4 h-4" />
                  <span>Browse Available Fleets</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
                {myFleets.map((fleet) => {
                  const carModel = CAR_CATALOG.find(
                    (c) =>
                      c.model.toLowerCase() === fleet.model.toLowerCase() ||
                      c.id.toLowerCase() === fleet.carId.toLowerCase()
                  ) || {
                    id: fleet.carId,
                    brand: fleet.brand,
                    model: fleet.model,
                    tagline: fleet.description || '',
                    bodyType: 'SUV' as const,
                    fuelTypes: [fleet.fuelType],
                    transmissions: [fleet.transmission],
                    estimatedSavingsRange: fleet.estimatedSavingsBadge,
                    discountTier: 'Active Fleet',
                    imageUrl: fleet.carImageUrl,
                    colorOptions: ['Standard'],
                    popularVariant: fleet.variant,
                  };

                  return (
                    <CarCard
                      key={`my-${fleet.id}`}
                      car={carModel}
                      fleet={fleet}
                      isUserMember={true}
                      selectedCity={fleet.city}
                      onJoinDeal={() => setActiveFleetRoom(fleet)}
                    />
                  );
                })}
              </div>
            )}
          </div>
        )}

      </main>

      {/* MODALS */}

      {/* Fleet Lobby & Real-Time Group Chat Modal */}
      {activeFleetRoom && (
        <FleetRoomModal
          fleet={activeFleetRoom}
          currentUser={currentUser}
          onClose={() => setActiveFleetRoom(null)}
          onSendMessage={handleSendMessage}
          onVoteQuote={handleVoteQuote}
          onLockDeal={handleLockDeal}
          onShareWhatsApp={handleShareWhatsApp}
          onDeleteFleet={handleDeleteFleet}
        />
      )}

      {/* Join Fleet Confirmation Modal */}
      {joiningFleet && (
        <JoinFleetModal
          fleet={joiningFleet}
          currentUser={currentUser}
          onClose={() => setJoiningFleet(null)}
          onConfirmJoin={handleConfirmJoin}
        />
      )}

      {/* Start a New Fleet Modal */}
      {showCreateModal && (
        <CreateFleetModal
          currentUser={currentUser}
          initialCarId={initialCarForCreate}
          onClose={() => setShowCreateModal(false)}
          onCreateFleet={handleCreateFleet}
        />
      )}

      {/* Comprehensive All-India State Selector Modal */}
      {showStateModal && (
        <StateSelectorModal
          currentState={selectedState !== 'All States' ? selectedState : (currentUser?.state || 'Gujarat')}
          onSelectState={handleSelectState}
          onClose={() => setShowStateModal(false)}
        />
      )}

      {/* Profile Modal */}
      {showProfileModal && (
        <ProfileModal
          user={currentUser}
          onClose={() => setShowProfileModal(false)}
          onLogout={handleLogout}
          onChangeState={() => setShowStateModal(true)}
          onChangeCity={() => setShowStateModal(true)}
          onOpenHowItWorks={() => setShowHowItWorksModal(true)}
        />
      )}

      {/* How It Works Explainer Modal */}
      <HowItWorksModal
        isOpen={showHowItWorksModal}
        onClose={() => setShowHowItWorksModal(false)}
        onStartFleet={() => {
          setInitialCarForCreate(undefined);
          setShowCreateModal(true);
        }}
      />

      {/* Toast Notifications */}
      <ToastContainer toasts={toasts} onDismiss={handleDismissToast} />

      {/* Classic Footer */}
      <Footer
        onOpenHowItWorks={() => setShowHowItWorksModal(true)}
        onOpenStateModal={() => setShowStateModal(true)}
        onScrollToBudget={() => {
          setActiveTab('fleets');
          const el = document.getElementById('budget-discovery-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenProfile={() => setShowProfileModal(true)}
      />

    </div>
  );
}

export default App;
