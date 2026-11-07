import { FuelType, Transmission } from '../types';

export interface ModelDetails {
  fuelTypes: FuelType[];
  popularVariant: string;
  savingsBadge: string;
  popularColors: string;
  defaultFuel: FuelType;
  defaultTransmission: Transmission;
}

const KNOWN_METADATA: Record<string, Partial<ModelDetails>> = {
  // Hyundai
  'hyundai-creta': {
    fuelTypes: ['Petrol', 'Diesel'],
    popularVariant: 'SX (O) 1.5L Turbo DCT / Diesel AT',
    savingsBadge: 'Save Up to ₹1.50 Lakh+',
    popularColors: 'Polar White / Abyss Black',
    defaultFuel: 'Petrol',
    defaultTransmission: 'Automatic'
  },
  'hyundai-venue': {
    fuelTypes: ['Petrol', 'Diesel'],
    popularVariant: 'SX (O) 1.0 Turbo DCT Dual Tone',
    savingsBadge: 'Save Up to ₹95,000+',
    popularColors: 'Fiery Red / Atlas White',
    defaultFuel: 'Petrol',
    defaultTransmission: 'Automatic'
  },
  'hyundai-exter': {
    fuelTypes: ['Petrol', 'CNG'],
    popularVariant: 'SX (O) Connect 1.2 AMT',
    savingsBadge: 'Save Up to ₹70,000+',
    popularColors: 'Ranger Khaki / Cosmic Blue',
    defaultFuel: 'Petrol',
    defaultTransmission: 'Automatic'
  },
  'hyundai-verna': {
    fuelTypes: ['Petrol'],
    popularVariant: 'SX (O) 1.5L Turbo DCT',
    savingsBadge: 'Save Up to ₹1.30 Lakh+',
    popularColors: 'Abyss Black / Titan Grey',
    defaultFuel: 'Petrol',
    defaultTransmission: 'Automatic'
  },
  'hyundai-i20': {
    fuelTypes: ['Petrol'],
    popularVariant: 'Asta (O) 1.2 IVT',
    savingsBadge: 'Save Up to ₹65,000+',
    popularColors: 'Atlas White / Fiery Red',
    defaultFuel: 'Petrol',
    defaultTransmission: 'Automatic'
  },
  'hyundai-alcazar': {
    fuelTypes: ['Petrol', 'Diesel'],
    popularVariant: 'Signature 1.5 Turbo DCT 6-Seater',
    savingsBadge: 'Save Up to ₹1.45 Lakh+',
    popularColors: 'Robust Emerald / Atlas White',
    defaultFuel: 'Diesel',
    defaultTransmission: 'Automatic'
  },
  'hyundai-grand-i10-nios': {
    fuelTypes: ['Petrol', 'CNG'],
    popularVariant: 'Asta 1.2 AMT',
    savingsBadge: 'Save Up to ₹55,000+',
    popularColors: 'Polar White / Spark Green',
    defaultFuel: 'Petrol',
    defaultTransmission: 'Automatic'
  },
  'hyundai-aura': {
    fuelTypes: ['Petrol', 'CNG'],
    popularVariant: 'SX Plus 1.2 AMT',
    savingsBadge: 'Save Up to ₹60,000+',
    popularColors: 'Typhoon Silver / Starry Night',
    defaultFuel: 'Petrol',
    defaultTransmission: 'Automatic'
  },
  'hyundai-ioniq-5': {
    fuelTypes: ['Electric'],
    popularVariant: 'RWD 72.6 kWh Long Range',
    savingsBadge: 'Save Up to ₹3.00 Lakh+',
    popularColors: 'Gravity Gold Matte / Midnight Black',
    defaultFuel: 'Electric',
    defaultTransmission: 'Automatic'
  },

  // Maruti Suzuki
  'maruti-suzuki-swift': {
    fuelTypes: ['Petrol', 'CNG'],
    popularVariant: 'ZXi Plus AGS Dual Tone',
    savingsBadge: 'Save Up to ₹60,000+',
    popularColors: 'Luster Blue / Pearl Arctic White',
    defaultFuel: 'Petrol',
    defaultTransmission: 'Automatic'
  },
  'maruti-suzuki-dzire': {
    fuelTypes: ['Petrol', 'CNG'],
    popularVariant: 'ZXi Plus AGS (5-Star Safety & Sunroof)',
    savingsBadge: 'Save Up to ₹65,000+',
    popularColors: 'Alluring Blue / Pearl Arctic White',
    defaultFuel: 'Petrol',
    defaultTransmission: 'Automatic'
  },
  'maruti-suzuki-brezza': {
    fuelTypes: ['Petrol', 'CNG'],
    popularVariant: 'ZXi Plus 6AT Dual Tone',
    savingsBadge: 'Save Up to ₹90,000+',
    popularColors: 'Magma Grey / Brave Khaki',
    defaultFuel: 'Petrol',
    defaultTransmission: 'Automatic'
  },
  'maruti-suzuki-fronx': {
    fuelTypes: ['Petrol', 'CNG'],
    popularVariant: 'Alpha 1.0L Turbo 6AT Dual Tone',
    savingsBadge: 'Save Up to ₹75,000+',
    popularColors: 'Nexa Blue / Grandeur Grey',
    defaultFuel: 'Petrol',
    defaultTransmission: 'Automatic'
  },
  'maruti-suzuki-grand-vitara': {
    fuelTypes: ['Hybrid', 'Petrol', 'CNG'],
    popularVariant: 'Alpha Plus Intelligent Hybrid e-CVT',
    savingsBadge: 'Save Up to ₹1.40 Lakh+',
    popularColors: 'Nexa Blue / Arctic White',
    defaultFuel: 'Hybrid',
    defaultTransmission: 'Automatic'
  },
  'maruti-suzuki-baleno': {
    fuelTypes: ['Petrol', 'CNG'],
    popularVariant: 'Alpha 1.2 AGS',
    savingsBadge: 'Save Up to ₹65,000+',
    popularColors: 'Celestial Blue / Arctic White',
    defaultFuel: 'Petrol',
    defaultTransmission: 'Automatic'
  },
  'maruti-suzuki-ertiga': {
    fuelTypes: ['Petrol', 'CNG'],
    popularVariant: 'ZXi Plus 6AT',
    savingsBadge: 'Save Up to ₹80,000+',
    popularColors: 'Magma Grey / Pearl Metallic White',
    defaultFuel: 'Petrol',
    defaultTransmission: 'Automatic'
  },
  'maruti-suzuki-xl6': {
    fuelTypes: ['Petrol', 'CNG'],
    popularVariant: 'Alpha Plus 6AT Ventilated Seats',
    savingsBadge: 'Save Up to ₹95,000+',
    popularColors: 'Brave Khaki / Nexa Blue',
    defaultFuel: 'Petrol',
    defaultTransmission: 'Automatic'
  },

  // Tata
  'tata-punch': {
    fuelTypes: ['Petrol', 'CNG', 'Electric'],
    popularVariant: 'Creative Flagship Dual Tone AMT',
    savingsBadge: 'Save Up to ₹75,000+',
    popularColors: 'Tornado Blue / Daytona Grey',
    defaultFuel: 'Petrol',
    defaultTransmission: 'Automatic'
  },
  'tata-nexon': {
    fuelTypes: ['Petrol', 'Diesel', 'Electric', 'CNG'],
    popularVariant: 'Fearless Plus S 1.2 DCA Sunroof',
    savingsBadge: 'Save Up to ₹1.20 Lakh+',
    popularColors: 'Creative Ocean / Daytona Grey',
    defaultFuel: 'Petrol',
    defaultTransmission: 'Automatic'
  },
  'tata-harrier': {
    fuelTypes: ['Diesel'],
    popularVariant: 'Fearless Plus Dark Edition AT',
    savingsBadge: 'Save Up to ₹1.90 Lakh+',
    popularColors: 'Oberon Black (Dark) / Sunlit Yellow',
    defaultFuel: 'Diesel',
    defaultTransmission: 'Automatic'
  },
  'tata-safari': {
    fuelTypes: ['Diesel'],
    popularVariant: 'Accomplished Plus 6-Seater AT',
    savingsBadge: 'Save Up to ₹2.20 Lakh+',
    popularColors: 'Cosmic Gold / Oberon Black',
    defaultFuel: 'Diesel',
    defaultTransmission: 'Automatic'
  },
  'tata-curvv': {
    fuelTypes: ['Petrol', 'Diesel', 'Electric'],
    popularVariant: 'Accomplished Plus A 1.2 Turbo DCA',
    savingsBadge: 'Save Up to ₹1.35 Lakh+',
    popularColors: 'Opera Blue / Pristine White',
    defaultFuel: 'Petrol',
    defaultTransmission: 'Automatic'
  },

  // Mahindra
  'mahindra-thar-roxx': {
    fuelTypes: ['Diesel', 'Petrol'],
    popularVariant: 'AX7L 4x4 Diesel AT Panoramic Skyroof',
    savingsBadge: 'Save Up to ₹1.60 Lakh+',
    popularColors: 'Stealth Black / Battleship Grey',
    defaultFuel: 'Diesel',
    defaultTransmission: 'Automatic'
  },
  'mahindra-scorpio-n': {
    fuelTypes: ['Diesel', 'Petrol'],
    popularVariant: 'Z8 L 4x4 Diesel Automatic (Big Daddy)',
    savingsBadge: 'Save Up to ₹1.70 Lakh+',
    popularColors: 'Napoli Black / Everest White',
    defaultFuel: 'Diesel',
    defaultTransmission: 'Automatic'
  },
  'mahindra-xuv-7xo': {
    fuelTypes: ['Diesel', 'Petrol'],
    popularVariant: 'AX7 Luxury Pack AWD AT',
    savingsBadge: 'Save Up to ₹1.90 Lakh+',
    popularColors: 'Midnight Black / Dazzling Silver',
    defaultFuel: 'Diesel',
    defaultTransmission: 'Automatic'
  },
  'mahindra-xuv-3xo': {
    fuelTypes: ['Petrol', 'Diesel'],
    popularVariant: 'AX7L 1.2 TGDi AT Level-2 ADAS',
    savingsBadge: 'Save Up to ₹85,000+',
    popularColors: 'Citrine Yellow / Stealth Black',
    defaultFuel: 'Petrol',
    defaultTransmission: 'Automatic'
  },

  // Toyota
  'toyota-innova-hycross': {
    fuelTypes: ['Hybrid', 'Petrol'],
    popularVariant: 'ZX (O) Strong Hybrid Ottoman Seats',
    savingsBadge: 'Save Up to ₹1.80 Lakh+',
    popularColors: 'Blackish Ageha Glass Flake / Pearl White',
    defaultFuel: 'Hybrid',
    defaultTransmission: 'Automatic'
  },
  'toyota-fortuner': {
    fuelTypes: ['Diesel', 'Petrol'],
    popularVariant: '4x4 Diesel Automatic 4WD Legend',
    savingsBadge: 'Save Up to ₹2.50 Lakh+',
    popularColors: 'Attitude Black / Platinum White Pearl',
    defaultFuel: 'Diesel',
    defaultTransmission: 'Automatic'
  },
  'toyota-glanza': {
    fuelTypes: ['Petrol', 'CNG'],
    popularVariant: 'V AMT 360 Camera',
    savingsBadge: 'Save Up to ₹60,000+',
    popularColors: 'Sportin Red / Insta Blue',
    defaultFuel: 'Petrol',
    defaultTransmission: 'Automatic'
  },

  // Honda
  'honda-amaze': {
    fuelTypes: ['Petrol'],
    popularVariant: 'VX 1.2 i-VTEC CVT',
    savingsBadge: 'Save Up to ₹70,000+',
    popularColors: 'Radiant Red / Platinum White Pearl',
    defaultFuel: 'Petrol',
    defaultTransmission: 'Automatic'
  },
  'honda-elevate': {
    fuelTypes: ['Petrol'],
    popularVariant: 'ZX CVT with Honda Sensing ADAS',
    savingsBadge: 'Save Up to ₹1.25 Lakh+',
    popularColors: 'Phoenix Orange / Obsidian Blue',
    defaultFuel: 'Petrol',
    defaultTransmission: 'Automatic'
  },
  'honda-city': {
    fuelTypes: ['Petrol', 'Hybrid'],
    popularVariant: 'ZX e:HEV Strong Hybrid CVT',
    savingsBadge: 'Save Up to ₹1.35 Lakh+',
    popularColors: 'Golden Brown / Platinum White',
    defaultFuel: 'Petrol',
    defaultTransmission: 'Automatic'
  },

  // Kia
  'kia-seltos': {
    fuelTypes: ['Petrol', 'Diesel'],
    popularVariant: 'GTX Plus 1.5 Turbo DCT Dual Tone',
    savingsBadge: 'Save Up to ₹1.40 Lakh+',
    popularColors: 'Matte Graphite / Pewter Olive',
    defaultFuel: 'Petrol',
    defaultTransmission: 'Automatic'
  },
  'kia-sonet': {
    fuelTypes: ['Petrol', 'Diesel'],
    popularVariant: 'GTX Plus 1.0 Turbo DCT ADAS',
    savingsBadge: 'Save Up to ₹1.05 Lakh+',
    popularColors: 'Glacier White / Aurora Black Pearl',
    defaultFuel: 'Petrol',
    defaultTransmission: 'Automatic'
  }
};

function normalize(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

/**
 * Intelligent helper to extract rich metadata (fuels, popular variant, savings badge, colors)
 * for any car company and model.
 */
export function getCarModelMetadata(brand: string, model: string): ModelDetails {
  const normKey = `${normalize(brand)}-${normalize(model)}`;
  const lowerModel = model.toLowerCase();
  const lowerBrand = brand.toLowerCase();

  // 1. Check EV flag first so "Creta Electric" or "Nexon EV" is recognized as Electric
  const isEV = lowerModel.includes('ev') || lowerModel.includes('electric') || lowerBrand === 'byd' || lowerBrand === 'tesla';
  if (isEV) {
    return {
      fuelTypes: ['Electric', 'Petrol', 'Diesel', 'CNG', 'Hybrid'],
      popularVariant: `${model} Long Range / Fast Charge`,
      savingsBadge: 'Save Up to ₹1.80 Lakh+',
      popularColors: 'Polar White / Ocean Blue',
      defaultFuel: 'Electric',
      defaultTransmission: 'Automatic'
    };
  }
  
  // 2. Direct or partial match in known registry
  for (const [key, details] of Object.entries(KNOWN_METADATA)) {
    if (key === normKey || normKey.includes(key) || key.includes(normKey)) {
      const fuels = [...(details.fuelTypes || ['Petrol', 'Diesel'])];
      if (!fuels.includes('Electric')) {
        fuels.push('Electric');
      }
      return {
        fuelTypes: fuels,
        popularVariant: details.popularVariant || `${model} Top-Spec Automatic`,
        savingsBadge: details.savingsBadge || 'Save Up to ₹1.25 Lakh+',
        popularColors: details.popularColors || 'Polar White / Metallic Grey',
        defaultFuel: details.defaultFuel || details.fuelTypes?.[0] || 'Petrol',
        defaultTransmission: details.defaultTransmission || 'Automatic'
      };
    }
  }

  // 3. Dynamic heuristic inference
  const isHybrid = lowerModel.includes('hybrid') || lowerModel.includes('phev') || lowerModel.includes('e-drive');
  const isLargeSUV = ['suv', 'thar', 'scorpio', 'safari', 'harrier', 'fortuner', 'xuv', 'defender', 'kodiaq', 'gloster', 'cruiser'].some(k => lowerModel.includes(k));

  let fuelTypes: FuelType[];
  let defaultFuel: FuelType;
  let savingsBadge: string;

  if (isEV) {
    fuelTypes = ['Electric'];
    defaultFuel = 'Electric';
    savingsBadge = 'Save Up to ₹1.50 – ₹2.50 Lakh+';
  } else if (isHybrid) {
    fuelTypes = ['Hybrid', 'Petrol'];
    defaultFuel = 'Hybrid';
    savingsBadge = 'Save Up to ₹1.40 – ₹1.80 Lakh+';
  } else if (isLargeSUV) {
    fuelTypes = ['Diesel', 'Petrol'];
    defaultFuel = 'Diesel';
    savingsBadge = 'Save Up to ₹1.60 – ₹2.00 Lakh+';
  } else {
    fuelTypes = ['Petrol', 'CNG', 'Diesel'];
    defaultFuel = 'Petrol';
    savingsBadge = 'Save Up to ₹75,000 – ₹1.20 Lakh+';
  }

  return {
    fuelTypes,
    popularVariant: `${model} Top-Spec Automatic`,
    savingsBadge,
    popularColors: 'Polar White / Metallic Black',
    defaultFuel,
    defaultTransmission: 'Automatic'
  };
}
