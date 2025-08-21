// data/content.ts

import { Trophy, Zap, Gift, Smartphone, Users, DollarSign } from 'lucide-react';

// === HERO SECTION ===
// Highlight one of the strongest casinos as the hero
export const featuredHeroSlug: string = 'casino-bonus333';

// === TOPLISTS & SECTIONS ===
// Top cards showing a few standouts
export const topCardsSlugs: string[] = [
  'casino-bonus333',
  'nordic-spins',
  'vegas-dreams'
];

// Comparison table with more detailed contenders
export const comparisonTableSlugs: string[] = [
  'casino-bonus333',
  'nordic-spins',
  'vegas-dreams',
  'crypto-spin',
  'royal-aces',
  'ocean-odds'
];

// Detailed analysis section (deep dives)
export const detailedAnalysisSlugs: string[] = [
  'casino-bonus333',
  'nordic-spins',
  'vegas-dreams',
  'crypto-spin',
  'royal-aces',
  'jackpot-jungle',
  'slot-safari',
  'casinoluxe',
  'spin-city',
  'ocean-odds'
];

// === SPECIALTY CATEGORIES ===
export const specialtyCategories = [
  { id: 'welcome-bonus', name: 'Bäst välkomstbonus', icon: Gift },
  { id: 'mobile', name: 'Bäst mobilcasino', icon: Smartphone },
  { id: 'live-dealer', name: 'Bästa live dealer', icon: Users },
  { id: 'slots', name: 'Störst slotsutbud', icon: Zap },
  { id: 'payouts', name: 'Snabbaste uttagen', icon: DollarSign },
  { id: 'overall', name: 'Totalvinnare', icon: Trophy }
];

// Assign the most fitting winners from the 10 casinos
export const specialtyWinnerSlugs: Record<string, string> = {
  'welcome-bonus': 'casino-bonus333', // huge free spins
  'mobile': 'vegas-dreams',           // top mobile optimization
  'live-dealer': 'nordic-spins',      // strong live casino selection
  'slots': 'jackpot-jungle',          // jackpot/slot heavy
  'payouts': 'crypto-spin',           // instant crypto withdrawals
  'overall': 'casinoluxe'             // strong balanced premium choice
};