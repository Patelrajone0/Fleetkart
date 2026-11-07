import React from 'react';
import { 
  Building2, 
  TrendingUp, 
  Gift, 
  ShieldCheck, 
  Unlock 
} from 'lucide-react';

export const WhyFleetkartSection: React.FC = () => {
  const benefits = [
    {
      icon: '🏢',
      title: 'Pre-Negotiated Dealer Tie-Ups',
      description:
        'We partner with authorized dealers in advance. You arrive with leverage already built in — not just hope. Every deal is city-specific and fully verified.',
    },
    {
      icon: '📈',
      title: 'Bigger Group = Stronger Deal',
      description:
        'The more buyers who join, the stronger the collective power. Every new member benefits everyone — total transparency always.',
    },
    {
      icon: '🎁',
      title: 'Perks Beyond Just Discounts',
      description:
        'Extended warranties, accessories bundles, priority delivery — included in group deals. Things solo buyers almost never get for free.',
    },
    {
      icon: '🔓',
      title: 'Zero Commitment, Ever',
      description:
        "Free to join, no deposits, no contracts. See the deal, review it, decide when you're ready. You're always in complete control.",
    },
  ];

  return (
    <section className="my-16 lg:my-20">
      {/* Header Eyebrow & Title */}
      <div className="text-center max-w-3xl mx-auto mb-10 px-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EDE8F5] border border-[#ADBBDA]/70 text-[#3D52A0] text-xs font-bold uppercase tracking-wider mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7091E6]" />
          <span>WHY FLEETKART</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-black text-[#1E2E4E] tracking-tight">
          Collective buying power. <span className="text-[#3D52A0]">Real benefits.</span>
        </h2>

        <p className="text-xs sm:text-sm text-[#475569] mt-2 max-w-lg mx-auto">
          Everything you rarely get buying alone — built into every group deal
        </p>
      </div>

      {/* 2x2 Classic Benefit Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-6xl mx-auto">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="bg-white border border-[#ADBBDA]/70 rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="text-2xl sm:text-3xl mb-4 select-none">
                {b.icon}
              </div>
              <h3 className="text-base sm:text-lg font-black text-[#1E2E4E] leading-snug">
                {b.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] mt-2.5 leading-relaxed">
                {b.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
