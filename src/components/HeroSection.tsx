import React from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Tag, 
  HelpCircle,
  Lock
} from 'lucide-react';

interface HeroSectionProps {
  selectedCity?: string;
  onOpenCityModal?: () => void;
  onExploreFleets: () => void;
  onOpenHowItWorks: () => void;
  onSelectCarFilter?: (brand: string, model: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreFleets,
  onOpenHowItWorks,
  onSelectCarFilter,
}) => {
  const quickBudgets = [
    { label: 'Under ₹12L', brand: 'Tata', model: 'Nexon' },
    { label: '₹12L – ₹20L', brand: 'Hyundai', model: 'Creta' },
    { label: '₹20L – ₹28L', brand: 'Mahindra', model: 'Scorpio-N' },
    { label: '₹28L+ Luxury', brand: 'Toyota', model: 'Innova Hycross' },
  ];

  return (
    <section className="mb-10 lg:mb-12">
      <div className="max-w-3xl flex flex-col justify-between py-2 sm:py-4 space-y-6">
        {/* Bold Headline */}
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-[#3D52A0] leading-[1.08]">
            Buy Smart. <br />
            <span className="text-[#7091E6]">
              Buy Together.
            </span> <br />
            Save Together.
          </h1>
        </div>

        {/* Primary & Secondary Action CTAs */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <button
            type="button"
            onClick={onExploreFleets}
            className="px-6 py-3.5 rounded-2xl bg-[#7091E6] hover:bg-[#3D52A0] text-white font-black text-sm inline-flex items-center gap-2 shadow-lg shadow-[#7091E6]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span>Find Cars in My Budget</span>
          </button>

          <button
            type="button"
            onClick={onOpenHowItWorks}
            className="px-5 py-3.5 rounded-2xl bg-white hover:bg-[#EDE8F5] border border-[#ADBBDA] text-[#3D52A0] font-bold text-sm inline-flex items-center gap-2 transition-all cursor-pointer shadow-sm"
          >
            <HelpCircle className="w-4 h-4 text-[#7091E6]" />
            <span>How It Works</span>
          </button>
        </div>

        {/* Quick Budget Filters */}
        <div className="pt-2">
          <div className="text-[11px] font-semibold text-[#3D52A0] uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Tag className="w-3.5 h-3.5 text-[#7091E6]" />
            <span>Popular Price Budgets:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {quickBudgets.map((b) => (
              <button
                key={b.label}
                type="button"
                onClick={() => {
                  if (onSelectCarFilter) {
                    onSelectCarFilter(b.brand, b.model);
                  }
                  onExploreFleets();
                }}
                className="px-3 py-1.5 rounded-xl bg-white hover:bg-[#EDE8F5] border border-[#ADBBDA] hover:border-[#7091E6] text-xs font-semibold text-[#3D52A0] transition-all cursor-pointer shadow-xs"
              >
                {b.label}
              </button>
            ))}
          </div>
        </div>

        {/* Clean Trust Badges (Human Assurances) */}
        <div className="pt-6 sm:pt-8 mt-6 border-t border-[#ADBBDA] grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-left">
          <div className="flex items-start gap-2">
            <Lock className="w-4 h-4 text-[#7091E6] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-[#3D52A0] leading-tight">100% Privacy Protected</div>
              <div className="text-[11px] text-[#1E293B]/70 hidden sm:block">Zero spam or sales calls</div>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-[#7091E6] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-[#3D52A0] leading-tight">Transparent Pricing</div>
              <div className="text-[11px] text-[#1E293B]/70 hidden sm:block">Zero dealer markups</div>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <span className="text-[#7091E6] text-sm leading-none shrink-0 mt-0.5">🎉</span>
            <div>
              <div className="text-xs font-bold text-[#3D52A0] leading-tight">100% Free to Join</div>
              <div className="text-[11px] text-[#1E293B]/70 hidden sm:block">Zero platform fee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
