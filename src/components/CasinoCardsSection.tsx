import React from 'react';
import { Badge } from './ui/badge';
import { Award } from 'lucide-react';

import { getCasinosForCards } from '@/lib/data-service';
import GlassCasinoCard from './cards/CasinoCard';

const CasinoCardsSection = () => {
  const casinos = getCasinosForCards();

  // take top 3 for podium
  const podiumCasinos = casinos.slice(0, 3);
  const others = casinos.slice(3);

  return (
    <section className="bg-white py-20 overflow-x-clip"> {/* clip any subpixel/transform bleed */}
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8"> {/* explicit width cap */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 inline-flex items-center">
            <Award className="mr-2 h-6 w-6 sm:h-7 sm:w-7" />
            Expertanalys
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Topprankade Casinon
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Vårt team har noggrant testat och utvärderat dussintals casinon för att ge dig en definitiv ranking av de bästa alternativen på marknaden.
          </p>
        </div>

        {/* 🏆 Podium section for top 3 */}
        <div
          className="
            grid grid-cols-1 sm:grid-cols-3 place-items-center gap-4 sm:gap-6 mb-16
          "
        >
          {/* Silver - #2 */}
          <div className="w-full max-w-xs sm:translate-y-6 order-2 sm:order-1 min-w-0">
            <GlassCasinoCard casino={podiumCasinos[1]} rank={2} highlight="silver" />
          </div>

          {/* Gold - #1 (center on sm+) */}
          <div className="w-full max-w-xs order-1 sm:order-2 min-w-0">
            <GlassCasinoCard casino={podiumCasinos[0]} rank={1} highlight="gold" />
          </div>

          {/* Bronze - #3 */}
          <div className="w-full max-w-xs sm:translate-y-6 order-3 sm:order-3 min-w-0">
            <GlassCasinoCard casino={podiumCasinos[2]} rank={3} highlight="bronze" />
          </div>
        </div>

        {/* Remaining casinos in a grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {others.map((casino, index) => (
            <GlassCasinoCard key={casino.slug} casino={casino} rank={index + 4} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasinoCardsSection;