// data/content.ts

import { Trophy, Zap, Gift, Smartphone, Users, DollarSign } from 'lucide-react';

// === HERO SECTION ===
// Updated to show the new casino
export const featuredHeroSlug: string = 'casino-bonus333';


// === TOPLISTS & SECTIONS ===
// Updated to only include the new casino
export const topCardsSlugs: string[] = ['casino-bonus333'];
export const comparisonTableSlugs: string[] = ['casino-bonus333'];
export const detailedAnalysisSlugs: string[] = ['casino-bonus333'];


// === SPECIALTY CATEGORIES ===
export const specialtyCategories = [
  { id: 'welcome-bonus', name: 'Bäst välkomstbonus', icon: Gift },
  { id: 'mobile', name: 'Bäst mobilcasino', icon: Smartphone },
  { id: 'live-dealer', name: 'Bästa live dealer', icon: Users },
  { id: 'slots', name: 'Störst slotsutbud', icon: Zap },
  { id: 'payouts', name: 'Snabbaste uttagen', icon: DollarSign },
  { id: 'overall', name: 'Totalvinnare', icon: Trophy }
];

// Updated to only include the new casino as the winner for relevant categories
export const specialtyWinnerSlugs: Record<string, string> = {
  'welcome-bonus': 'casino-bonus333',
  'mobile': 'casino-bonus333',
  'live-dealer': 'casino-bonus333',
  'slots': 'casino-bonus333',
  'payouts': 'casino-bonus333',
  'overall': 'casino-bonus333'
};