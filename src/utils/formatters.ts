/**
 * Currency & Number formatters strictly localized for the Indian market
 */

export function formatPriceLakh(lakh: number): string {
  if (lakh >= 100) {
    return `₹${(lakh / 100).toFixed(2)} Crore`;
  }
  if (lakh < 1) {
    const thousands = Math.round(lakh * 100000);
    return `₹${thousands.toLocaleString('en-IN')}`;
  }
  return `₹${lakh.toFixed(2)} Lakh`;
}

export function formatSavingsLakh(lakh: number): string {
  if (lakh < 1) {
    const thousands = Math.round(lakh * 100000);
    return `Save ₹${thousands.toLocaleString('en-IN')}`;
  }
  return `Save ₹${lakh.toFixed(2)} Lakh`;
}

export function formatIndianCurrency(amount: number): string {
  return `₹${amount.toLocaleString('en-IN')}`;
}

export function calculateTierSavings(basePriceLakh: number, buyersCount: number): {
  pricePerCarLakh: number;
  savingsPerCarLakh: number;
  totalGroupSavingsLakh: number;
  discountPercentage: number;
} {
  // Base dealer margin on Indian new cars is approx 8-12%
  // 1 buyer: 0% fleet discount
  // 2 buyers: 3% discount
  // 3 buyers: 5.5% discount
  // 4 buyers: 6.8% discount
  // 5 buyers: 7.5% - 8.5% discount (The sweet spot - corporate fleet tier)
  // 10 buyers: 9.5% discount
  let discountRate = 0;
  if (buyersCount === 2) discountRate = 0.03;
  else if (buyersCount === 3) discountRate = 0.055;
  else if (buyersCount === 4) discountRate = 0.068;
  else if (buyersCount >= 5 && buyersCount < 10) discountRate = 0.075;
  else if (buyersCount >= 10) discountRate = 0.095;

  const savingsPerCarLakh = Math.round(basePriceLakh * discountRate * 100) / 100;
  const pricePerCarLakh = Math.round((basePriceLakh - savingsPerCarLakh) * 100) / 100;
  const totalGroupSavingsLakh = Math.round((savingsPerCarLakh * buyersCount) * 100) / 100;
  const discountPercentage = Math.round(discountRate * 1000) / 10;

  return {
    pricePerCarLakh,
    savingsPerCarLakh,
    totalGroupSavingsLakh,
    discountPercentage
  };
}
