'use client';

import React, { useState } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent, CardTitle } from './ui/card';
import { Trophy, Zap, Gift, Smartphone, Users, DollarSign, Star, CheckCircle2, ArrowRight } from 'lucide-react';

// --- Data remains the same, no changes needed here ---

const specialtyCategories = [
  { id: 'welcome-bonus', name: 'Bäst välkomstbonus', icon: Gift },
  { id: 'mobile', name: 'Bäst mobilcasino', icon: Smartphone },
  { id: 'live-dealer', name: 'Bästa live dealer', icon: Users },
  { id: 'slots', name: 'Störst slotsutbud', icon: Zap },
  { id: 'payouts', name: 'Snabbaste uttagen', icon: DollarSign },
  { id: 'overall', name: 'Totalvinnare', icon: Trophy }
];

const specialtyWinners = {
  'welcome-bonus': { casino: 'Sportium', logo: 'SPORT', offer: '10€ utan insättning + 100% upp till 200€', features: ['Ingen insättning krävs', 'Låga omsättningskrav', 'Förlängd giltighetstid'], rating: 4.8, color: 'bg-purple-700' },
  'mobile': { casino: 'LeoVegas', logo: 'LEO', offer: 'Prisbelönt mobilapp', features: ['Inbyggda appar för iOS/Android', 'Pekskärmsoptimerat gränssnitt', 'Mobil-exklusiva spel'], rating: 4.9, color: 'bg-blue-600' },
  'live-dealer': { casino: 'Casino777', logo: '777', offer: '50+ live dealer-bord', features: ['Flera olika studior', 'HD-kvalitet på streaming', 'Live-spelshower'], rating: 4.7, color: 'bg-green-600' },
  'slots': { casino: 'Luckia', logo: 'LUCK', offer: '3 700+ slotsspel', features: ['Alla stora leverantörer', 'Dagliga nysläpp', 'Progressiva jackpottar'], rating: 4.6, color: 'bg-indigo-800' },
  'payouts': { casino: 'Casumo', logo: 'CAS', offer: 'Uttag inom 24 timmar', features: ['Omedelbara uttag till e-plånböcker', 'Inga uttagsavgifter', 'Verifierad snabb behandling'], rating: 4.7, color: 'bg-red-600' },
  'overall': { casino: 'Casino777', logo: '777', offer: 'Komplett casinoupplevelse', features: ['Bästa spelutbudet', 'Säkerhet i toppklass', 'Utmärkt support'], rating: 4.8, color: 'bg-green-600' }
};


// --- REFACTORED COMPONENT ---

const CasinoSpecialties = () => {
  const [activeCategory, setActiveCategory] = useState('welcome-bonus');
  const winner = specialtyWinners[activeCategory as keyof typeof specialtyWinners];
  const activeCategoryDetails = specialtyCategories.find(cat => cat.id === activeCategory);

  return (
    <section className="py-20 bg-surface-elevated">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Trophy className="mr-2 h-10 w-10" />
            Casinon som matchar dina behov
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
            Kategorivinnare
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            Olika spelare har olika prioriteringar – så är det bara. Vi hjälper dig hitta casinot som passar dina behov och önskemål.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {specialtyCategories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            
            return (
              <Button
                key={category.id}
                variant={isActive ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`h-auto p-4 flex-col space-y-2 transition-all duration-200 ${isActive ? 'ring-2 ring-primary' : ''}`}
              >
                <Icon className="h-6 w-6" />
                <span className="text-xs font-medium text-center leading-tight">{category.name}</span>
              </Button>
            );
          })}
        </div>

        {/* --- REFACTORED WINNER CARD --- */}
        <Card className="max-w-6xl mx-auto shadow-lg overflow-hidden">
          <CardContent className="p-8 grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-8 items-start">
            
            {/* Column 1: Brand & Rating */}
            <div className="lg:col-span-3 flex flex-col items-center text-center space-y-4">
              <div className={`flex items-center justify-center w-24 h-24 rounded-full ${winner.color} text-white text-2xl font-bold`}>
                {winner.logo}
              </div>
              <div className="text-center">
                 <h3 className="text-2xl font-bold text-foreground">{winner.casino}</h3>
                 <div className="flex items-center justify-center space-x-1 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-5 w-5 ${winner.rating >= star ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 fill-gray-300'}`}
                      />
                    ))}
                    <span className="ml-2 text-sm font-medium text-muted-foreground">{winner.rating.toFixed(1)} / 5.0</span>
                 </div>
              </div>
            </div>

            {/* Column 2: Justification & Features */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-1">
                <Trophy className="h-7 w-7 text-primary" />
                <CardTitle className="text-2xl font-bold text-foreground">
                  {activeCategoryDetails?.name}
                </CardTitle>
              </div>
              <p className="text-muted-foreground mb-4">
                Vårt toppval för den bästa upplevelsen i den här kategorin.
              </p>
              <hr className="my-4"/>
              <h4 className="text-md font-semibold text-foreground mb-3">Viktiga egenskaper:</h4>
              <ul className="space-y-2.5">
                {winner.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Offer & CTA */}
            <div className="lg:col-span-4 flex flex-col justify-between items-center lg:items-stretch h-full bg-slate-50 dark:bg-slate-800/50 p-6 rounded-lg">
                <div className="text-center lg:text-left">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Specialerbjudande</h4>
                    <p className="text-primary text-lg font-medium">{winner.offer}</p>
                </div>
                <Button size="lg" className="w-full mt-6 lg:mt-0">
                  Besök {winner.casino}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </div>
            
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CasinoSpecialties;