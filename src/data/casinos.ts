/**
 * =================================================================
 * MASTER CASINO DATA FILE (SINGLE SOURCE OF TRUTH)
 * =================================================================
 */

// The unified interface for a casino object.
export interface Casino {
  // Core Identity
  slug: string;
  name: string;
  logoUrl: string;
  logoWhiteUrl?: string;
  affiliateUrl: string;

  // Key Data for Tables & Cards
  rating: number;
  bonus: {
    main: string;
    details: string;
    wagering: string;
  };
  stats: {
    games: string;
    live: string;
    payoutTime: string;
  };
  
  // Detailed Analysis Data
  editorial: {
    tagline: string;
    pros: string[];
    cons: string[];
    verdict: string;
  };
  analysisScores: {
    security: { score: number; details: string };
    games: { score: number; details: string };
    bonuses: { score: number; details: string };
    payments: { score: number; details: string };
    support: { score: number; details: string };
    mobile: { score: number; details: string };
  };

  // UI & Presentation
  colors: {
    primary: string;
    button: string;
  };
}

// The master array now contains only one casino.
export const allCasinos: Casino[] = [
  {
    slug: 'casino-bonus333',
    name: 'Casino Bonus333',
    logoUrl: '/sites-logo/casino-bonus333.png',
    logoWhiteUrl: '/sites-logo/casino-bonus333.png', // Assumed white version for dark backgrounds
    affiliateUrl: 'https://casinobonus333.com/',
    rating: 4.9, // Placeholder: High rating for a featured casino
    bonus: {
      main: '5000 Free Spins',
      details: 'med Instant Banking (BankID)',
      wagering: '0x' // Placeholder: Assumed wager-free for such a strong offer
    },
    stats: {
      games: '3,000+',        // Placeholder
      live: '50+',           // Placeholder
      payoutTime: 'Omedelbart' // Matches "Instant Banking"
    },
    editorial: {
      tagline: 'Tusentals Free Spins med BankID', // Placeholder
      pros: [
        'Enormt välkomsterbjudande med 5000 Free Spins', 
        'Omedelbara och säkra uttag med BankID', 
        'Helt omsättningsfria vinster från spins'
      ],
      cons: [
        'Fokuserar främst på slots', 
        'Nytt casino på marknaden'
      ],
      verdict: 'Casino Bonus333 levererar ett av marknadens mest spektakulära välkomsterbjudanden, kombinerat med blixtsnabba uttag via BankID. Ett självklart val för den som älskar free spins.'
    },
    analysisScores: {
      security: { score: 98, details: 'Verifiering och transaktioner säkrade med BankID.' },
      games: { score: 90, details: 'Stort utbud av slots från ledande leverantörer.' },
      bonuses: { score: 99, details: 'Exceptionellt stort antal free spins, helt utan omsättningskrav.' },
      payments: { score: 99, details: 'Instant Banking säkerställer omedelbara insättningar och uttag.' },
      support: { score: 92, details: 'Hjälpsam kundtjänst tillgänglig för att guida nya spelare.' },
      mobile: { score: 95, details: 'Fullt mobilanpassad plattform för en smidig spelupplevelse.' }
    },
    colors: {
      primary: 'bg-amber-100', // Placeholder color scheme
      button: 'bg-amber-500 text-amber-950'
    }
  },
];