import React from 'react';
import { X, Car, Users, Building2, CheckCircle2, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

interface HowItWorksModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartFleet: () => void;
}

export const HowItWorksModal: React.FC<HowItWorksModalProps> = ({
  isOpen,
  onClose,
  onStartFleet,
}) => {
  if (!isOpen) return null;

  const steps = [
    {
      step: '01',
      icon: Car,
      title: 'Pick Your Car & City',
      description:
        'Choose the brand, model, and fuel variant you want to purchase in your city. Browse active buying groups or create a new one in 30 seconds.',
      badge: 'Zero Commitment to Browse',
    },
    {
      step: '02',
      icon: Users,
      title: 'Pool 5 Verified Buyers',
      description:
        'Dealerships treat 5 bookings as a corporate wholesale purchase. As fellow buyers join your fleet room, your collective bargaining power multiplies.',
      badge: 'Corporate Sweet Spot',
    },
    {
      step: '03',
      icon: Building2,
      title: 'Authorized Showrooms Bid',
      description:
        'General managers from authorized brand dealerships in your city compete to win your 5-car order by offering maximum cash subsidies, free insurance, and accessories.',
      badge: 'Competitive Tenders',
    },
    {
      step: '04',
      icon: ShieldCheck,
      title: 'Direct Showroom Delivery',
      description:
        'Your fleet reviews and locks the winning dealer tender. You pay the authorized showroom directly with official invoicing, standard warranty, and fast-track delivery.',
      badge: '100% Safe & Direct',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-[#3D52A0]/40 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-white border border-[#ADBBDA] rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-[#3D52A0] border-b border-[#3D52A0] p-5 sm:p-6 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#7091E6]/30 border border-[#ADBBDA]/40 text-white flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#EDE8F5]" />
            </div>
            <div>
              <h3 className="text-xl font-black text-white">How FleetKart Works</h3>
              <p className="text-xs text-[#ADBBDA]">
                Simple group buying power. Real showroom discounts.
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

        {/* Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {steps.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="p-4 rounded-2xl bg-[#EDE8F5] border border-[#ADBBDA] flex flex-col justify-between hover:border-[#7091E6] transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-black text-white bg-[#7091E6] px-2 py-0.5 rounded-lg shadow-xs">
                        Step {item.step}
                      </span>
                      <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-[#3D52A0] border border-[#ADBBDA]">
                        <Icon className="w-4 h-4 text-[#7091E6]" />
                      </div>
                    </div>
                    <h4 className="text-sm font-bold text-[#3D52A0] mb-1.5">{item.title}</h4>
                    <p className="text-xs text-[#1E293B]/80 leading-relaxed">{item.description}</p>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-[#ADBBDA]/60 flex items-center gap-1.5 text-[11px] font-semibold text-[#3D52A0]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7091E6]" />
                    <span>{item.badge}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Value Proposition Callout */}
          <div className="p-4 rounded-2xl bg-[#EDE8F5] border border-[#ADBBDA] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold text-[#3D52A0]">
                Why do dealerships give such big discounts to 5 buyers?
              </p>
              <p className="text-[11px] text-[#1E293B]/75 mt-0.5 leading-relaxed">
                Authorized showroom General Managers have monthly volume quota targets from car manufacturers (OEMs). Delivering 5 units in a single invoice unlocks factory incentives that individual walk-in buyers never see.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#EDE8F5] border-t border-[#ADBBDA] p-4 sm:p-5 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white hover:bg-[#EDE8F5] text-[#3D52A0] border border-[#ADBBDA] text-xs font-semibold transition-colors cursor-pointer"
          >
            Close
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onStartFleet();
            }}
            className="px-5 py-2.5 rounded-xl bg-[#7091E6] hover:bg-[#3D52A0] text-white text-xs font-black inline-flex items-center gap-2 shadow-md shadow-[#7091E6]/20 cursor-pointer transition-all"
          >
            <span>Start a 5-Buyer Fleet</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
