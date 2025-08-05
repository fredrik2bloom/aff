/**
 * =================================================================
 * DATA SERVICE
 * =================================================================
 * This file acts as the bridge between the raw data (`casinos.ts`)
 * and the content structure (`content.ts`).
 *
 * Components should import functions from this file to get the data
 * they need, instead of doing the logic themselves.
 * =================================================================
 */

import { allCasinos, Casino } from '@/data/casinos';
import { 
  featuredHeroSlug,
  topCardsSlugs,
  comparisonTableSlugs,
  detailedAnalysisSlugs,
  specialtyWinnerSlugs,
  specialtyCategories
} from '@/data/content';

// For efficiency, we create a Map for instant lookups by casino slug.
// This is much faster than repeatedly searching the `allCasinos` array.
const casinoMap = new Map(allCasinos.map(casino => [casino.slug, casino]));


// === GETTER FUNCTIONS FOR COMPONENTS ===

/**
 * Gets the single featured casino for the Hero section.
 */
export function getFeaturedHeroCasino(): Casino | undefined {
  return casinoMap.get(featuredHeroSlug);
}

/**
 * Gets the list of casinos for the main card section.
 */
export function getCasinosForCards(): Casino[] {
  return topCardsSlugs
    .map(slug => casinoMap.get(slug))
    .filter(Boolean) as Casino[]; // .filter(Boolean) removes any potential undefined values
}

/**
 * Gets the list of casinos for the detailed comparison table.
 */
export function getCasinosForTable(): Casino[] {
  return comparisonTableSlugs
    .map(slug => casinoMap.get(slug))
    .filter(Boolean) as Casino[];
}

/**
 * Gets the list of casinos for the in-depth analysis section.
 */
export function getCasinosForAnalysis(): Casino[] {
  return detailedAnalysisSlugs
    .map(slug => casinoMap.get(slug))
    .filter(Boolean) as Casino[];
}

/**
 * Gets the data for the "Specialty Winners" component.
 * It returns the list of categories and a map of winners with full casino data.
 */
export function getSpecialtyData() {
  const winners = Object.entries(specialtyWinnerSlugs).reduce(
    (acc, [category, slug]) => {
      const casino = casinoMap.get(slug);
      if (casino) {
        acc[category] = casino;
      }
      return acc;
    },
    {} as Record<string, Casino>
  );

  return {
    categories: specialtyCategories,
    winners: winners,
  };
}