import React from 'react';
import { Check, X } from 'lucide-react';

export const FleetkartComparisonSection: React.FC = () => {
  const comparisonRows = [
    {
      feature: 'Price advantage',
      withFleetkart: 'Collective group leverage',
      buyingSolo: 'Negotiate alone',
    },
    {
      feature: 'Free accessories',
      withFleetkart: 'Often bundled in the deal',
      buyingSolo: 'Rarely offered free',
    },
    {
      feature: 'Priority delivery',
      withFleetkart: 'Secured for the group',
      buyingSolo: 'Depends on dealer',
    },
    {
      feature: 'Extended warranty',
      withFleetkart: 'Negotiated as a group',
      buyingSolo: 'Standard terms only',
    },
    {
      feature: 'Full pricing transparency',
      withFleetkart: 'Everything shared openly',
      buyingSolo: 'Hidden margins common',
    },
  ];

  return (
    <section className="my-16 lg:my-20">
      {/* Header Eyebrow & Title */}
      <div className="text-center max-w-3xl mx-auto mb-10 px-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EDE8F5] border border-[#ADBBDA]/70 text-[#3D52A0] text-xs font-bold uppercase tracking-wider mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7091E6]" />
          <span>THE DIFFERENCE</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-black text-[#1E2E4E] tracking-tight">
          FleetKart vs. <span className="text-[#3D52A0]">Going Alone</span>
        </h2>
      </div>

      {/* Comparison Table Card */}
      <div className="max-w-4xl mx-auto bg-white border border-[#ADBBDA]/70 rounded-3xl shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#ADBBDA]/60">
                <th className="py-4 px-6 text-xs sm:text-sm font-black text-[#1E2E4E] w-1/3">
                  What you get
                </th>
                <th className="py-4 px-6 text-xs sm:text-sm font-black text-emerald-800 bg-emerald-50/70 w-1/3">
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                    <span>With FleetKart</span>
                  </span>
                </th>
                <th className="py-4 px-6 text-xs sm:text-sm font-black text-rose-800 bg-rose-50/60 w-1/3">
                  <span className="inline-flex items-center gap-1.5">
                    <X className="w-4 h-4 text-rose-600 stroke-[3]" />
                    <span>Buying Solo</span>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {comparisonRows.map((row, idx) => (
                <tr 
                  key={row.feature}
                  className={idx % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]/50'}
                >
                  <td className="py-3.5 px-6 text-xs sm:text-sm font-semibold text-[#1E2E4E]">
                    {row.feature}
                  </td>
                  <td className="py-3.5 px-6 text-xs sm:text-sm font-bold text-emerald-900 bg-emerald-50/30">
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{row.withFleetkart}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-6 text-xs sm:text-sm text-[#64748B] bg-rose-50/20">
                    <div className="flex items-center gap-2">
                      <X className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                      <span>{row.buyingSolo}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
