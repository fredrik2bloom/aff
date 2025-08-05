/**
 * =================================================================
 * CONTENT LAYOUT FILE
 * =================================================================
 * This file orchestrates the content of your site by referencing
 * the master data from `data/casinos.ts`.
 *
 * To change the order of a toplist or feature a different casino,
 * you simply change the order or value of the slugs below.
 * =================================================================
 */

// We need to import the icons for the specialty categories
import { Trophy, Zap, Gift, Smartphone, Users, DollarSign } from 'lucide-react';

// === HERO SECTION ===
// Defines which casino is featured in the main Hero component.
export const featuredHeroSlug: string = 'casino-777';


// === TOPLISTS & SECTIONS ===

// Defines the casinos and their order for the `CasinoCardsSection` component.
export const topCardsSlugs: string[] = [
  'casino-777', 
  'leovegas', 
  'sportium', 
  'casumo', 
  'luckia'
];

// Defines the casinos and their order for the `ComparisonTable` component.
export const comparisonTableSlugs: string[] = [
  'casino-777',
  'leovegas',
  'sportium',
  'casumo',
  'luckia',
  'playuzu'
];

// Defines which casinos are shown in the `DetailedCasinoAnalysis` component.
export const detailedAnalysisSlugs: string[] = [
  'casino-777', 
  'leovegas',
  'casumo',
  'luckia'
];


// === SPECIALTY CATEGORIES ===

// Defines the categories themselves for the `CasinoSpecialties` component.
export const specialtyCategories = [
  { id: 'welcome-bonus', name: 'Bäst välkomstbonus', icon: Gift },
  { id: 'mobile', name: 'Bäst mobilcasino', icon: Smartphone },
  { id: 'live-dealer', name: 'Bästa live dealer', icon: Users },
  { id: 'slots', name: 'Störst slotsutbud', icon: Zap },
  { id: 'payouts', name: 'Snabbaste uttagen', icon: DollarSign },
  { id: 'overall', name: 'Totalvinnare', icon: Trophy }
];

// Maps each specialty category ID to a winner's casino slug.
export const specialtyWinnerSlugs: Record<string, string> = {
  'welcome-bonus': 'sportium',
  'mobile': 'leovegas',
  'live-dealer': 'casino-777',
  'slots': 'luckia',
  'payouts': 'playuzu', // PlayUZU has instant payouts, a better fit.
  'overall': 'casino-777'
};