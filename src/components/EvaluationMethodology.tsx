'use client'
import React, { useState } from 'react';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Shield, Star, CreditCard, Gamepad2, HeadphonesIcon, Clock } from 'lucide-react';

/**
 * Individual Interactive Card Component
 * - Expands on hover via flex growth
 * - Fades/slide-in description when hovered
 */
const InteractiveCard = ({ isHovered, onMouseEnter, card }) => {
  const flexClass = isHovered ? 'flex-[4]' : 'flex-1';

  return (
    <div
      className={`relative h-[560px] rounded-2xl overflow-hidden transition-all duration-500 ease-in-out ${flexClass}`}
      onMouseEnter={onMouseEnter}
      role="button"
      tabIndex={0}
      onFocus={onMouseEnter}
    >
      <img
        src={card.imgUrl}
        alt={card.title}
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = 'https://placehold.co/800x560/0f172a/94a3b8?text=Image+Not+Found';
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent" />

      {/* This container holds both the un-hovered title and the hovered box */}
      <div className="absolute bottom-0 left-0 p-6">
        
        {/* --- 1. UN-HOVERED TITLE --- */}
        {/* This title is visible only when NOT hovered. It fades out as the box fades in. */}
        <h3 
          className={`text-white text-lg font-bold transition-opacity duration-300 pointer-events-none [text-shadow:1px_1px_3px_rgba(0,0,0,0.6)] ${isHovered ? 'opacity-0' : 'opacity-100'}`}
        >
          {card.title}
        </h3>

        {/* --- 2. HOVERED INFO BOX --- */}
        {/* This entire box (with its own title and description) appears on hover. */}
        <div 
          className={`bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg w-72 transition-all duration-500 ease-in-out absolute bottom-6 left-6 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-bold text-slate-800">{card.title}</h3>
            <div className="text-slate-600 flex-shrink-0 ml-4">{card.icon}</div>
          </div>
          
          <div className="overflow-hidden">
            <p className="text-slate-600 pt-2">{card.description}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

const evaluationCriteria = [
  {
    name: 'Säkerhet & Licensiering',
    weight: 20,
    icon: Shield,
    description: 'Officiell licensiering, kryptering och regelefterlevnad'
  },
  {
    name: 'Spelkvalitet & Utbud',
    weight: 40,
    icon: Gamepad2,
    description: 'Storlek på spelkatalogen, mjukvaruleverantörer och exklusiva titlar'
  },
  {
    name: 'Bonusar & Kampanjer',
    weight: 40,
    icon: Star,
    description: 'Välkomsterbjudanden, pågående kampanjer och rättvisa omsättningskrav'
  }
];

// Helper: build card data (icon element + image)
const buildCardData = () => {
  const stockImages: Record<string, string> = {
    'Säkerhet & Licensiering': 'security.png',
    'Spelkvalitet & Utbud': 'game-selection.png',
    'Bonusar & Kampanjer': 'bonus-campaigns.png'      // bonus gift box
  };

  return evaluationCriteria.map((c) => {
    const Icon = c.icon;
    return {
      title: c.name,
      description: c.description,
      icon: <Icon className="h-5 w-5" />,
      imgUrl: stockImages[c.name] ?? 'https://placehold.co/1200x800?text=No+Image'
    };
  });
};

const EvaluationMethodology = () => {
  const [hovered, setHovered] = useState(0);
  const cards = buildCardData();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Shield className="mr-2 h-10 w-10" />
            Om vår metodik
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
            Hur vi utvärderar casinon
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            Vårt expertteam använder ett omfattande 100-poängssystem för att testa och recensera varje casino.
            Vi satsar riktiga pengar, spelar riktiga spel och testar varje funktion för att ge dig ärliga, opartiska recensioner.
            Läs mer om oss, vårt mål, och våra experter
            <a href="/om-oss" className="text-primary hover:underline ml-1">här</a>.
          </p>
        </div>

        {/* NEW: Beautiful interactive cards row */}
        <div
          className="hidden md:flex gap-4 mb-16 h-[560px]"
          onMouseLeave={() => setHovered(-1)}
        >
          {cards.map((card, i) => (
            <InteractiveCard
              key={card.title}
              isHovered={hovered === i}
              onMouseEnter={() => setHovered(i)}
              card={card}
            />
          ))}
        </div>

        {/* Mobile fallback: simple stacked cards */}
        <div className="md:hidden space-y-4 mb-16">
          {cards.map((card) => (
            <div key={card.title} className="relative h-64 rounded-2xl overflow-hidden">
              <img src={card.imgUrl} alt={card.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg w-full">
                  <div className="flex items-start justify-between">
                    <h3 className="text-base font-semibold text-slate-800">{card.title}</h3>
                    <div className="text-slate-600 ml-4">{card.icon}</div>
                  </div>
                  <p className="text-slate-600 mt-2 text-sm">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Original content below */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {evaluationCriteria.map((criterion, index) => {
              const Icon = criterion.icon;
              return (
                <div key={index} className="group">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-foreground">{criterion.name}</h3>
                        <span className="text-sm font-medium text-primary">{criterion.weight}%</span>
                      </div>
                      <p className="text-muted-foreground text-sm">{criterion.description}</p>
                      <Progress value={criterion.weight} className="h-2" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-surface-elevated rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Vår Testprocess</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">1</div>
                <div>
                  <h4 className="font-semibold text-foreground">Registrering & Verifiering</h4>
                  <p className="text-muted-foreground text-sm">Vi skapar riktiga konton och slutför hela verifieringsprocessen</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">2</div>
                <div>
                  <h4 className="font-semibold text-foreground">Test med Riktiga Pengar</h4>
                  <p className="text-muted-foreground text-sm">Vi sätter in och spelar med riktiga pengar för att testa alla funktioner</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">3</div>
                <div>
                  <h4 className="font-semibold text-foreground">Test av Uttag</h4>
                  <p className="text-muted-foreground text-sm">Vi testar uttagsprocesser och verifierar faktiska utbetalningstider</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">4</div>
                <div>
                  <h4 className="font-semibold text-foreground">Kundtjänst</h4>
                  <p className="text-muted-foreground text-sm">Vi testar alla supportkanaler och mäter svarstider</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvaluationMethodology;