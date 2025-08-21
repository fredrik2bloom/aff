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

export const allCasinos: Casino[] = [
  // === 1 ===
  {
    slug: 'casino-bonus333',
    name: 'Casino Bonus333',
    logoUrl: '/sites-logo/casino-bonus333.png',
    logoWhiteUrl: '/sites-logo/casino-bonus333.png',
    affiliateUrl: 'https://casinobonus333.com/',
    rating: 4.9,
    bonus: {
      main: '5000 Free Spins',
      details: 'med Instant Banking (BankID)',
      wagering: '0x'
    },
    stats: { games: '3,000+', live: '50+', payoutTime: 'Omedelbart' },
    editorial: {
      tagline: 'Tusentals Free Spins med BankID',
      pros: ['Enormt välkomsterbjudande', 'Snabba uttag via BankID', 'Omsättningsfria vinster'],
      cons: ['Fokuserar mest på slots', 'Nytt casino'],
      verdict: 'Ett av de mest spektakulära free spins-erbjudandena på marknaden.'
    },
    analysisScores: {
      security: { score: 98, details: 'BankID-säkerhet.' },
      games: { score: 90, details: 'Ledande slot-leverantörer.' },
      bonuses: { score: 99, details: 'Omsättningsfritt.' },
      payments: { score: 99, details: 'Omedelbara transaktioner.' },
      support: { score: 92, details: 'Välkomnande kundtjänst.' },
      mobile: { score: 95, details: 'Full mobilanpassning.' }
    },
    colors: { primary: 'bg-amber-100', button: 'bg-amber-500 text-amber-950' }
  },

  // === 2 ===
  {
    slug: 'nordic-spins',
    name: 'Nordic Spins',
    logoUrl: '/sites-logo/nordic-spins.png',
    affiliateUrl: 'https://nordicspins.com/',
    rating: 4.7,
    bonus: {
      main: '200% Upp till 5000 kr',
      details: '+ 200 Free Spins',
      wagering: '20x'
    },
    stats: { games: '2,500+', live: '100+', payoutTime: '24 timmar' },
    editorial: {
      tagline: 'Skandinaviskt fokus, stora vinster!',
      pros: ['Stort live casino-utbud', 'Bra bonuspaket', 'Anpassat för svenska spelare'],
      cons: ['Omsättningskrav 20x', 'Färre betalningsmetoder'],
      verdict: 'Perfekt för nordiska spelare som gillar både slots och live-spel.'
    },
    analysisScores: {
      security: { score: 94, details: 'SSL-kryptering och EU-licens.' },
      games: { score: 93, details: 'Slots och live-bord.' },
      bonuses: { score: 88, details: 'Generöst men omsättningskrav.' },
      payments: { score: 85, details: 'Trustly, kort.' },
      support: { score: 90, details: 'Livechat & mail.' },
      mobile: { score: 92, details: 'Responsiv site & app.' }
    },
    colors: { primary: 'bg-blue-100', button: 'bg-blue-600 text-white' }
  },

  // === 3 ===
  {
    slug: 'vegas-dreams',
    name: 'Vegas Dreams',
    logoUrl: '/sites-logo/vegas-dreams.png',
    logoWhiteUrl: '/sites-logo/vegas-dreams-white.png',
    affiliateUrl: 'https://vegasdreams.com/',
    rating: 4.5,
    bonus: {
      main: '100 Free Spins varje vecka',
      details: 'Exklusivt lojalitetsprogram',
      wagering: '10x'
    },
    stats: { games: '4,000+', live: '200+', payoutTime: '1-3 dagar' },
    editorial: {
      tagline: 'Lev din Vegas-dröm online!',
      pros: ['Stort spelbibliotek', 'Lojalitetsbelöningar', 'Brett live-utbud'],
      cons: ['Längre uttagstid', 'Färre free spins i välkomstbonus'],
      verdict: 'En Vegas-inspirerad upplevelse med fokus på långsiktig belöning.'
    },
    analysisScores: {
      security: { score: 91, details: 'Licens och kryptering.' },
      games: { score: 97, details: '4000+ spel.' },
      bonuses: { score: 86, details: 'Högre omsättningskrav.' },
      payments: { score: 80, details: '1-3 dagars uttag.' },
      support: { score: 87, details: '24/7 support.' },
      mobile: { score: 94, details: 'Optimerad app.' }
    },
    colors: { primary: 'bg-purple-100', button: 'bg-purple-600 text-white' }
  },

  // === 4 ===
  {
    slug: 'crypto-spin',
    name: 'CryptoSpin',
    logoUrl: '/sites-logo/crypto-spin.png',
    affiliateUrl: 'https://cryptospin.io/',
    rating: 4.6,
    bonus: {
      main: '1 BTC Bonus',
      details: 'Första insättningen i krypto',
      wagering: '5x'
    },
    stats: { games: '2,000+', live: '80+', payoutTime: 'Instant (Crypto)' },
    editorial: {
      tagline: 'Spela med Bitcoin & Ethereum',
      pros: ['Snabba uttag med krypto', 'Anonymt spelande', 'Bra bonus i BTC'],
      cons: ['Ingen BankID', 'Begränsad fiat-support'],
      verdict: 'Bästa valet för kryptoentusiaster som vill ha snabba transaktioner.'
    },
    analysisScores: {
      security: { score: 96, details: 'Blockchain-transaktioner.' },
      games: { score: 88, details: 'Stort utbud men fokus på slots.' },
      bonuses: { score: 92, details: '1 BTC insättningsbonus.' },
      payments: { score: 97, details: 'Omedelbara krypto-uttag.' },
      support: { score: 85, details: 'Mail och chat.' },
      mobile: { score: 91, details: 'Mobiloptimerad site.' }
    },
    colors: { primary: 'bg-yellow-100', button: 'bg-yellow-500 text-black' }
  },

  // === 5 ===
  {
    slug: 'royal-aces',
    name: 'Royal Aces',
    logoUrl: '/sites-logo/royal-aces.png',
    affiliateUrl: 'https://royalaces.com/',
    rating: 4.3,
    bonus: {
      main: '100% Cashback',
      details: 'Förlora inte första veckan',
      wagering: '0x'
    },
    stats: { games: '1,500+', live: '40+', payoutTime: '2-4 dagar' },
    editorial: {
      tagline: 'Spela kungligt – riskfritt!',
      pros: ['Cashback utan krav', 'VIP-program', 'Klassisk design'],
      cons: ['Litet spelutbud', 'Uttag tar längre tid'],
      verdict: 'Ett tryggt alternativ för nya spelare som vill testa utan risk.'
    },
    analysisScores: {
      security: { score: 89, details: 'Säker men långsamma uttag.' },
      games: { score: 80, details: 'Mindre spelutbud.' },
      bonuses: { score: 95, details: 'Cashback utan omsättning.' },
      payments: { score: 78, details: 'Upp till 4 dagar.' },
      support: { score: 84, details: 'Mail och livechat.' },
      mobile: { score: 86, details: 'Fungerar men saknar app.' }
    },
    colors: { primary: 'bg-red-100', button: 'bg-red-600 text-white' }
  },

  // === 6 ===
  {
    slug: 'jackpot-jungle',
    name: 'Jackpot Jungle',
    logoUrl: '/sites-logo/jackpot-jungle.png',
    affiliateUrl: 'https://jackpotjungle.com/',
    rating: 4.8,
    bonus: {
      main: 'Dagliga överraskningsbonusar',
      details: 'Free spins & mystery jackpots',
      wagering: '15x'
    },
    stats: { games: '3,500+', live: '120+', payoutTime: '12 timmar' },
    editorial: {
      tagline: 'Där varje snurr kan bli en jackpot!',
      pros: ['Mystery Jackpots', 'Dagliga bonusar', 'Snabba uttag'],
      cons: ['Omsättningskrav på 15x', 'Mindre känd brand'],
      verdict: 'Ett spännande casino för den som jagar dagliga överraskningar.'
    },
    analysisScores: {
      security: { score: 93, details: 'EU-licens & kryptering.' },
      games: { score: 95, details: 'Brett utbud med jackpots.' },
      bonuses: { score: 90, details: 'Dagliga bonusar men omsättning krävs.' },
      payments: { score: 92, details: '12 timmars uttag.' },
      support: { score: 88, details: 'Livechat 24/7.' },
      mobile: { score: 90, details: 'Mobiloptimerat.' }
    },
    colors: { primary: 'bg-green-100', button: 'bg-green-600 text-white' }
  },

  // === 7 ===
  {
    slug: 'slot-safari',
    name: 'Slot Safari',
    logoUrl: '/sites-logo/slot-safari.png',
    affiliateUrl: 'https://slotsafari.com/',
    rating: 4.2,
    bonus: {
      main: '300 Free Spins',
      details: 'Spritt över 3 insättningar',
      wagering: '25x'
    },
    stats: { games: '2,200+', live: '60+', payoutTime: '24-48 timmar' },
    editorial: {
      tagline: 'En äventyrlig resa bland slots!',
      pros: ['Flera bonusar', 'Rolig design', 'Många free spins'],
      cons: ['Omsättningskrav 25x', 'Litet live-utbud'],
      verdict: 'Ett lekfullt casino med fokus på slots och bonusar.'
    },
    analysisScores: {
      security: { score: 87, details: 'Standard-säkerhet.' },
      games: { score: 89, details: 'Slot-fokus.' },
      bonuses: { score: 84, details: 'Högre omsättningskrav.' },
      payments: { score: 82, details: '24-48 timmar.' },
      support: { score: 85, details: 'Support via mail.' },
      mobile: { score: 88, details: 'Mobilvänligt.' }
    },
    colors: { primary: 'bg-orange-100', button: 'bg-orange-500 text-black' }
  },

  // === 8 ===
  {
    slug: 'casinoluxe',
    name: 'Casino Luxe',
    logoUrl: '/sites-logo/casino-luxe.png',
    affiliateUrl: 'https://casinoluxe.com/',
    rating: 4.4,
    bonus: {
      main: 'VIP-belöningar',
      details: 'Exklusivt program för high rollers',
      wagering: '10x'
    },
    stats: { games: '2,800+', live: '150+', payoutTime: '12-24 timmar' },
    editorial: {
      tagline: 'Exklusivitet och lyx för VIP-spelare',
      pros: ['VIP-klubb', 'Snabba uttag', 'Brett spelutbud'],
      cons: ['Ej för småspelare', 'Hög insättningsgräns'],
      verdict: 'Perfekt för storspelare som vill ha exklusiva förmåner.'
    },
    analysisScores: {
      security: { score: 95, details: 'Hög säkerhet & licenser.' },
      games: { score: 92, details: 'Slots och live-bord.' },
      bonuses: { score: 89, details: 'VIP-program.' },
      payments: { score: 90, details: 'Snabba uttag.' },
      support: { score: 93, details: 'Dedikerad VIP-support.' },
      mobile: { score: 89, details: 'Mobilvänlig.' }
    },
    colors: { primary: 'bg-gray-100', button: 'bg-gray-800 text-white' }
  },

  // === 9 ===
  {
    slug: 'spin-city',
    name: 'Spin City',
    logoUrl: '/sites-logo/spin-city.png',
    affiliateUrl: 'https://spincity.com/',
    rating: 4.1,
    bonus: {
      main: '50 Free Spins varje dag',
      details: 'Automatiskt tilldelat',
      wagering: '5x'
    },
    stats: { games: '1,800+', live: '30+', payoutTime: 'Instant' },
    editorial: {
      tagline: 'Staden som aldrig slutar snurra!',
      pros: ['Dagliga free spins', 'Snabba uttag', 'Användarvänlig plattform'],
      cons: ['Begränsat spelutbud', 'Fokus på casual players'],
      verdict: 'Spin City lockar med dagliga spins och enkelhet.'
    },
    analysisScores: {
      security: { score: 85, details: 'Grundläggande säkerhet.' },
      games: { score: 82, details: 'Mindre utbud.' },
      bonuses: { score: 91, details: 'Dagliga free spins.' },
      payments: { score: 95, details: 'Direkta uttag.' },
      support: { score: 80, details: 'Endast mail-support.' },
      mobile: { score: 87, details: 'Mobiloptimerad.' }
    },
    colors: { primary: 'bg-pink-100', button: 'bg-pink-500 text-white' }
  },

  // === 10 ===
  {
    slug: 'ocean-odds',
    name: 'Ocean Odds',
    logoUrl: '/sites-logo/ocean-odds.png',
    affiliateUrl: 'https://oceanodds.com/',
    rating: 4.6,
    bonus: {
      main: '150% Upp till 3000 kr',
      details: 'Välkomstpaket + free spins',
      wagering: '12x'
    },
    stats: { games: '2,600+', live: '90+', payoutTime: '12-36 timmar' },
    editorial: {
      tagline: 'Dyk ner i vinsterna!',
      pros: ['Maritimt tema', 'Stabil bonus', 'Bra spelvariation'],
      cons: ['Omsättning 12x', 'Ingen app'],
      verdict: 'Ett charmigt casino med havstema och stabila bonusar.'
    },
    analysisScores: {
      security: { score: 90, details: 'Licensierad & säker.' },
      games: { score: 91, details: 'Slots och bordsspel.' },
      bonuses: { score: 87, details: 'Rimligt omsättningskrav.' },
      payments: { score: 86, details: '12-36 timmar.' },
      support: { score: 89, details: 'Livechat & mail.' },
      mobile: { score: 85, details: 'Mobilvänlig site.' }
    },
    colors: { primary: 'bg-cyan-100', button: 'bg-cyan-600 text-white' }
  }
];