import React from 'react';
import { Star, Check } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import Image from 'next/image';
import { Casino } from '@/data/casinos'; // Import the unified Casino type

// The component now accepts a single `casino` prop
interface GlassCasinoCardProps {
  casino: Casino;
  rank: number;
}

const GlassCasinoCard: React.FC<GlassCasinoCardProps> = ({ casino, rank }) => {
  // Destructure properties from the single casino object for easy use
  const { name, logoUrl, rating, bonus, editorial, affiliateUrl, colors } = casino;

  return (
    <Card className="h-full flex flex-col overflow-hidden rounded-2xl bg-slate-50 border border-slate-200/80 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:border-slate-300">
      <CardHeader className="relative p-6">
        {rank === 1 && (
            <Badge className="absolute top-4 left-4 z-10 font-bold" variant="default">BÄSTA CASINOT</Badge>
        )}
        <div className="flex items-center space-x-4 pt-6">
          <div className="relative flex-shrink-0">
            <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center p-2 border-2 border-slate-200 shadow-md">
                <Image src={logoUrl} alt={`${name} logo`} width={64} height={64} className="object-contain" />
            </div>
            <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-extrabold text-sm border-2 border-white">
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
          {bonus.details && (
            <p className="text-sm text-slate-500">{bonus.details}</p>
          )}
        </div>
        <div className="flex-grow">
          <ul className="space-y-3">
            {editorial.pros.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button size="lg" className={`w-full font-bold text-base transition-opacity ${colors.button} hover:opacity-90 shadow-lg`} asChild>
          <a href={affiliateUrl} target="_blank" rel="noopener noreferrer sponsored">Besök {name}</a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GlassCasinoCard;