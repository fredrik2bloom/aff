import React from 'react';
import { Star, Check } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import Image from 'next/image';
import { Casino } from '@/data/casinos';

type Medal = 'gold' | 'silver' | 'bronze';

interface GlassCasinoCardProps {
  casino: Casino;
  rank: number;
  highlight?: Medal; // gold | silver | bronze
}

const medalStyles: Record<Medal, {
  wrapper: string;
  ribbon: string;
  ribbonText: string;
  rankCircle: string;
  ctaRing: string;
}> = {
  gold: {
    wrapper:
      '',
    ribbon: 'bg-yellow-400 text-black ring-1 ring-yellow-500/30',
    ribbonText: 'GULD',
    rankCircle: 'bg-yellow-400 text-black',
    ctaRing: '',
  },
  silver: {
    wrapper:
      '',
    ribbon: 'bg-gray-200 text-gray-900 ring-1 ring-gray-300/50',
    ribbonText: 'SILVER',
    rankCircle: 'bg-gray-300 text-gray-900',
    ctaRing: '',
  },
  bronze: {
    wrapper:
      '',
    ribbon: 'bg-orange-300 text-amber-900 ring-1 ring-orange-400/40',
    ribbonText: 'BRONS',
    rankCircle: 'bg-orange-300 text-amber-900',
    ctaRing: '',
  },
};

const GlassCasinoCard: React.FC<GlassCasinoCardProps> = ({ casino, rank, highlight }) => {
  const { name, logoUrl, rating, bonus, editorial, affiliateUrl, colors } = casino;

  const CardInner = (
    <Card className="h-full flex flex-col overflow-hidden rounded-2xl bg-slate-50 border border-slate-200/80 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:border-slate-300">
      <CardHeader className="relative p-6">
        {/* Keep legacy badge if not using podium highlight */}
        {rank === 1 && !highlight && (
          <Badge className="absolute top-4 left-4 z-10 font-bold" variant="default">
            BÄSTA CASINOT
          </Badge>
        )}

        <div className="flex items-center space-x-4 pt-6">
          <div className="relative flex-shrink-0">
            <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center p-2 border-2 border-slate-200 shadow-md">
              <Image src={logoUrl} alt={`${name} logo`} width={64} height={64} className="object-contain" />
            </div>
            <div
              className={`absolute -top-2 -left-2 w-8 h-8 rounded-full flex items-center justify-center font-extrabold text-sm border-2 border-white
                ${highlight ? medalStyles[highlight].rankCircle : 'bg-primary text-primary-foreground'}
              `}
            >
              {rank}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <CardTitle className="text-2xl font-bold text-slate-800">{name}</CardTitle>
            <div className="flex items-center space-x-1 mt-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-5 w-5 ${rating >= star ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300 fill-slate-200'}`}
                />
              ))}
              <span className="ml-2 text-sm font-bold text-slate-600">{rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="px-6 flex flex-col flex-grow">
        <hr className="border-slate-200" />
        <div className="my-6">
          <p className="text-sm font-semibold text-primary">Välkomsterbjudande</p>
          <p className="text-2xl font-bold text-slate-900">{bonus.main}</p>
          {bonus.details && <p className="text-sm text-slate-500">{bonus.details}</p>}
        </div>

        <div className="flex-grow">
          <ul className="space-y-3">
            {editorial.pros.slice(0, 3).map((feature, i) => (
              <li key={i} className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button
          size="lg"
          className={`w-full font-bold text-base transition-opacity hover:opacity-90 shadow-lg ${colors.button} ${highlight ? medalStyles[highlight].ctaRing : ''}`}
          asChild
        >
          <a href={affiliateUrl} target="_blank" rel="noopener noreferrer sponsored">Besök {name}</a>
        </Button>
      </CardFooter>
    </Card>
  );

  // ⬆️ Ribbon moved OUTSIDE the Card to avoid clipping
  if (highlight) {
    return (
      <div className="relative">
        {/* Ribbon above the card; not clipped by overflow */}
        <div
          className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold shadow z-20 ${medalStyles[highlight].ribbon}`}
        >
          {medalStyles[highlight].ribbonText}
        </div>

        <div className={medalStyles[highlight].wrapper}>
          <div className="rounded-2xl bg-white">
            {CardInner}
          </div>
        </div>
      </div>
    );
  }

  // Default (no highlight)
  return CardInner;
};

export default GlassCasinoCard;