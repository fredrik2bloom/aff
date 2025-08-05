/**
 * =================================================================
 * MASTER CASINO DATA FILE (SINGLE SOURCE OF TRUTH)
 * =================================================================
 * This file contains the complete, unified data for every casino.
 * When you need to update a casino's rating, bonus, or any other detail,
 * you change it HERE, and ONLY here. The change will automatically
 * apply to all components across the site.
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
  // --- INTERFACE UPDATED HERE ---
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

// The master array of all casinos.
export const allCasinos: Casino[] = [
  {
    slug: 'casino-777',
    name: 'Casino777',
    logoUrl: '/logos/casino777.svg',
    logoWhiteUrl: '/logos/casino777-white.svg',
    affiliateUrl: '#',
    rating: 4.8,
    bonus: { main: '150€ + 77 FS', details: 'Återkommande kampanjer', wagering: 'x50' },
    stats: { games: '6,000+', live: '20+', payoutTime: '24h' },
    editorial: {
      tagline: 'Den Ultimata Spelupplevelsen',
      pros: ['Största spelkatalogen på marknaden', 'Ultrasnabba PayPal-uttag', 'Regelbundna kampanjer och turneringar'],
      cons: ['Höga omsättningskrav på vissa bonusar', 'Begränsade kryptovalutaalternativ'],
      verdict: 'Casino777 utmärker sig som vårt toppval tack vare sitt massiva spelutbud, pålitliga betalningar och konsekventa användarupplevelse.'
    },
    // --- DATA UPDATED HERE ---
    analysisScores: {
      security: { score: 95, details: 'MGA-licens, SSL-kryptering, verktyg för ansvarsfullt spelande' },
      games: { score: 98, details: '6 000+ spel från 80+ leverantörer inklusive NetEnt, Pragmatic Play' },
      bonuses: { score: 85, details: 'Återkommande kampanjer, lojalitetsprogram, rättvisa omsättningsvillkor' },
      payments: { score: 92, details: 'PayPal, omedelbara uttag, inga avgifter på de flesta metoder' },
      support: { score: 88, details: 'Livechatt dygnet runt, e-postsupport, omfattande FAQ' },
      mobile: { score: 90, details: 'Responsiv design, mobilapp, komplett spelutbud' }
    },
    colors: { primary: 'bg-green-200', button: 'bg-yellow-400 text-green-900' }
  },
  {
    slug: 'leovegas',
    name: 'LeoVegas',
    logoUrl: '/logos/leovegas.svg',
    logoWhiteUrl: '/logos/leovegas-white.svg',
    affiliateUrl: '#',
    rating: 4.7,
    bonus: { main: '200€ Bonus', details: '100% upp till 200€', wagering: 'x20' },
    stats: { games: '2,000+', live: '23+', payoutTime: '24h' },
    editorial: {
      tagline: 'Kungen av Mobilcasino',
      pros: ['Bästa mobilcasinoupplevelsen', 'Låga omsättningskrav (x20)', 'Utmärkt sektion för live dealer'],
      cons: ['Mindre spelbibliotek än konkurrenter', 'Begränsad integration med sportsbetting'],
      verdict: 'LeoVegas utmärker sig inom mobilspel och kundtjänst. Idealiskt för spelare som främst spelar på mobila enheter.'
    },
    analysisScores: {
      security: { score: 92, details: 'MGA- & UKGC-licenser, avancerade säkerhetsprotokoll' },
      games: { score: 88, details: '2 000+ spel optimerade för mobil, exklusiva titlar' },
      bonuses: { score: 90, details: 'Låga omsättningskrav, frekventa kampanjer' },
      payments: { score: 85, details: 'Flera alternativ, bra behandlingstider' },
      support: { score: 94, details: 'Prisbelönt supportteam dygnet runt' },
      mobile: { score: 98, details: 'Branschledande mobilapp och upplevelse' }
    },
    colors: { primary: 'bg-orange-100', button: 'bg-orange-400 text-orange-900' }
  },
  {
    slug: 'sportium',
    name: 'Sportium',
    logoUrl: '/logos/sportium.svg',
    logoWhiteUrl: '/logos/sportium-white.svg',
    affiliateUrl: '#',
    rating: 4.6,
    bonus: { main: '10€ Gratis', details: '100% upp till 200€ bonus efter insättning', wagering: 'x50' },
    stats: { games: '1,000+', live: '15+', payoutTime: '24-48h' },
    editorial: {
      tagline: 'Allt-i-ett: Casino och Betting',
      pros: ['10€ gratis bara för att registrera dig', 'Fysiska uttag med Sportium UNO', 'Allt-i-ett-plattform för casino och betting'],
      cons: ['Högre omsättningskrav', 'Mindre spelutbud jämfört med specialiserade casinon'],
      verdict: 'Sportium är ett starkt val för spelare som vill ha både casinospel och sportsbetting på samma plattform.'
    },
    analysisScores: {
        security: { score: 90, details: 'Licensierad av DGOJ, säkra betalningsmetoder' },
        games: { score: 82, details: 'Fokus på spanska leverantörer och populära internationella spel' },
        bonuses: { score: 92, details: 'Generös gratisbonus och återkommande sportkampanjer' },
        payments: { score: 88, details: 'Stöd för spanska metoder som Bizum, samt e-plånböcker' },
        support: { score: 85, details: 'Spansktalande support tillgänglig via telefon och chatt' },
        mobile: { score: 84, details: 'Stabil mobil webbplats och dedikerade appar' }
    },
    colors: { primary: 'bg-red-200', button: 'bg-red-500 text-white' }
  },
  {
    slug: 'casumo',
    name: 'Casumo',
    logoUrl: '/logos/casumo.svg',
    logoWhiteUrl: '/logos/casumo-white.svg',
    affiliateUrl: '#',
    rating: 4.7,
    bonus: { main: '300€ Bonus', details: '100% upp till 300€', wagering: 'x30' },
    stats: { games: '2,000+', live: '5+', payoutTime: '24h' },
    editorial: {
      tagline: 'Ett Casinoäventyr',
      pros: ['Gamifierad och rolig casinoupplevelse', 'Modern mobilapp med FaceID', 'Rimligt omsättningskrav på x30'],
      cons: ['Mindre antal live-bord', 'Designen kan vara för lekfull för vissa spelare'],
      verdict: 'Casumo erbjuder en unik och engagerande spelupplevelse genom sitt "äventyrssystem".'
    },
    analysisScores: {
      security: { score: 93, details: 'Stark MGA-licens och fokus på spelarsäkerhet' },
      games: { score: 89, details: 'Brett utbud av slots och unika spelupplevelser' },
      bonuses: { score: 88, details: 'Gamifierat lojalitetssystem med regelbundna belöningar' },
      payments: { score: 91, details: 'Snabba och pålitliga insättningar och uttag' },
      support: { score: 86, details: 'Hjälpsam livechatt och FAQ-sektion' },
      mobile: { score: 92, details: 'Prisbelönt mobilapp med intuitiv design' }
    },
    colors: { primary: 'bg-violet-200', button: 'bg-violet-500 text-white' }
  },
  {
    slug: 'luckia',
    name: 'Luckia',
    logoUrl: '/logos/luckia.svg',
    logoWhiteUrl: '/logos/luckia-white.svg',
    affiliateUrl: '#',
    rating: 4.5,
    bonus: { main: '200€ Bonus', details: '100% upp till 200€', wagering: 'x60' },
    stats: { games: '4,000+', live: '10+', payoutTime: '24h' },
    editorial: {
      tagline: 'Spelautomaternas Paradis',
      pros: ['Enormt utbud av slots (+3,700)', 'Minsta insättning på endast 1€', '100% spanskt märke med stort förtroende'],
      cons: ['Mycket höga omsättningskrav', 'Få bordsspel jämfört med slotsutbudet'],
      verdict: 'Luckia är himmelriket för slots-entusiaster med ett av marknadens största utbud.'
    },
    analysisScores: {
      security: { score: 88, details: 'Långvarigt spanskt märke med hög trovärdighet' },
      games: { score: 96, details: 'Massivt bibliotek av slots från alla större leverantörer' },
      bonuses: { score: 75, details: 'Standard välkomstbonus men med höga omsättningskrav' },
      payments: { score: 85, details: 'Stöd för alla vanliga betalningsmetoder' },
      support: { score: 84, details: 'Solid kundtjänst med fokus på den spanska marknaden' },
      mobile: { score: 86, details: 'Funktionell mobilupplevelse med tillgång till de flesta spel' }
    },
    colors: { primary: 'bg-sky-200', button: 'bg-sky-500 text-white' }
  },
  {
    slug: 'playuzu',
    name: 'PlayUZU',
    logoUrl: '/logos/playuzu.svg',
    logoWhiteUrl: '/logos/playuzu-white.svg',
    affiliateUrl: '#',
    rating: 4.6,
    bonus: { main: '100 Free Spins', details: 'Helt utan omsättningskrav', wagering: '0x' },
    stats: { games: '3,000+', live: '25+', payoutTime: 'Omedelbart' },
    editorial: {
      tagline: 'Det Rättvisa Casinot',
      pros: ['Inga omsättningskrav på bonusar', 'Alla vinster betalas ut i kontanter', 'Omedelbara uttag'],
      cons: ['Mindre bonussummor jämfört med konkurrenter', 'Designen är mycket färgstark'],
      verdict: 'PlayUZU revolutionerar marknaden med sitt rättvisa tillvägagångssätt. Ett toppval för spelare som är trötta på komplicerade regler.'
    },
    analysisScores: {
      security: { score: 94, details: 'Transparenta villkor och starkt fokus på rättvist spel' },
      games: { score: 90, details: 'Stort urval av spel med unika sökfunktioner' },
      bonuses: { score: 98, details: 'Alla bonusar är omsättningsfria, vilket är bäst i klassen' },
      payments: { score: 99, details: 'Extremt snabba och verifierade omedelbara uttag' },
      support: { score: 88, details: 'Professionell support som förklarar deras unika modell' },
      mobile: { score: 91, details: 'Snygg och snabb mobilwebbplats' }
    },
    colors: { primary: 'bg-cyan-200', button: 'bg-cyan-500 text-white' }
  },
];