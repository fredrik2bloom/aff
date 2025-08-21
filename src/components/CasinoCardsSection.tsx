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
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Award className="mr-2 h-10 w-10" />
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
        <div className="flex justify-center items-end gap-6 mb-16">
          {/* Silver - #2 */}
          <div className="flex-1 max-w-xs transform translate-y-6">
            <GlassCasinoCard casino={podiumCasinos[1]} rank={2} highlight="silver" />
          </div>

          {/* Gold - #1 */}
          <div className="flex-1 max-w-xs">
            <GlassCasinoCard casino={podiumCasinos[0]} rank={1} highlight="gold" />
          </div>

          {/* Bronze - #3 */}
          <div className="flex-1 max-w-xs transform translate-y-6">
            <GlassCasinoCard casino={podiumCasinos[2]} rank={3} highlight="bronze" />
          </div>
        </div>

        {/* Remaining casinos in a grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {others.map((casino, index) => (
            <GlassCasinoCard key={casino.slug} casino={casino} rank={index + 4} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasinoCardsSection;