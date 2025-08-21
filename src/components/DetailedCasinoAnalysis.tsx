'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { Progress } from './ui/progress';
import {
  ChevronDown, ChevronUp, Shield, Star, CreditCard, Gamepad2, Users, Clock,
  CheckCircle, XCircle, Crown
} from 'lucide-react';
import { getCasinosForAnalysis } from '@/lib/data-service';

// Data is fetched once and passed to the client component.
const detailedCasinos = getCasinosForAnalysis();

// --- Expert config & helpers ---
const EXPERTS = {
  niklas: {
    name: 'Niklas',
    image: '/authors/niklas-portrait.png',
    title: 'Casinoexpert',
  },
  fredrik: {
    name: 'Fredrik',
    image: '/authors/fredrik-portrait.png',
    title: 'Casinoexpert',
  },
} as const;

type ExpertKey = keyof typeof EXPERTS;

function resolveExpert(casino: any): (typeof EXPERTS)[ExpertKey] {
  // Try a few likely fields for where the expert might live in your data
  const raw =
    casino?.editorial?.expert ??
    casino?.editorial?.expertName ??
    casino?.expert ??
    'niklas';

  const key = String(raw).toLowerCase().trim() as ExpertKey;
  if (key in EXPERTS) return EXPERTS[key];
  return EXPERTS.niklas; // sensible default
}

const DetailedCasinoAnalysis = () => {
  const [expandedCasino, setExpandedCasino] = useState<string | null>(detailedCasinos[0]?.slug || null);

  const toggleExpanded = (casinoSlug: string) => {
    setExpandedCasino(expandedCasino === casinoSlug ? null : casinoSlug);
  };

  const categoryNames = {
    security: 'Säkerhet', games: 'Spel', bonuses: 'Bonusar',
    payments: 'Betalningar', support: 'Support', mobile: 'Mobil'
  };

  const categoryIcons = {
    security: Shield, games: Gamepad2, bonuses: Star,
    payments: CreditCard, support: Users, mobile: Clock
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Star className="mr-2 h-10 w-10" />
            Djupgående Analys
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
            Djupgående casinoanalyser
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            Våra experter spenderar veckor med att testa varje casino. Här är vad vi upptäckte under vår omfattande analys.
          </p>
        </div>

        <div className="space-y-8">
          {detailedCasinos.map((casino, index) => {
            const expert = resolveExpert(casino);
            return (
              <Collapsible
                key={casino.slug}
                open={expandedCasino === casino.slug}
                onOpenChange={() => toggleExpanded(casino.slug)}
              >
                <Card className="overflow-hidden transition-all">
                  {/* Header */}
                  <CardHeader className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
                    {/* Left Side: Brand Info */}
                    <div className="sm:col-span-2 flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-slate-100 p-2">
                          <Image src={casino.logoUrl} alt={`${casino.name} logo`} width={48} height={48} className="object-contain" />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center space-x-3">
                          {/* Highlight #1 with crown */}
                          <Badge
                            variant={index === 0 ? "default" : "outline"}
                            className={`text-sm flex items-center gap-1 px-3 py-1 ${index === 0 ? "bg-yellow-400 text-black font-bold shadow-md" : ""}`}
                          >
                            {index === 0 && <Crown className="h-4 w-4 text-yellow-700" />}
                            #{index + 1}
                          </Badge>

                          <CardTitle className="text-2xl">{casino.name}</CardTitle>
                        </div>
                        <p className="text-muted-foreground mt-1">{casino.editorial.tagline}</p>
                      </div>
                    </div>

                    {/* Right Side: Rating & Trigger Button */}
                    <div className="sm:col-span-1 flex items-center justify-start sm:justify-end space-x-4">
                      <div className="text-right">
                        <div className="flex items-center justify-end space-x-1">
                          {[1,2,3,4,5].map(star =>
                            <Star key={star} className={`h-5 w-5 ${casino.rating >= star ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}`} />
                          )}
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">{casino.rating.toFixed(1)} / 5.0 Betyg</div>
                      </div>
                      <CollapsibleTrigger asChild>
                        <Button variant="outline" size="icon" className="flex-shrink-0">
                          {expandedCasino === casino.slug ? (
                            <ChevronUp className="h-5 w-5" />
                          ) : (
                            <ChevronDown className="h-5 w-5" />
                          )}
                          <span className="sr-only">Toggle analysis</span>
                        </Button>
                      </CollapsibleTrigger>
                    </div>
                  </CardHeader>

                  {/* Content */}
                  <CollapsibleContent>
                    <CardContent className="px-6 pb-6 pt-0">
                      <div className="space-y-8 border-t pt-6">
                        {/* Detailed Scores */}
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-6">Detaljerad Genomgång</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {Object.entries(casino.analysisScores).map(([category, data]) => {
                              const Icon = categoryIcons[category as keyof typeof categoryIcons];
                              const categoryName = categoryNames[category as keyof typeof categoryNames];

                              return (
                                <div key={category} className="space-y-3">
                                  <div className="flex items-center space-x-2">
                                    <Icon className="h-5 w-5 text-primary" />
                                    <span className="font-medium text-foreground">{categoryName}</span>
                                    <span className="ml-auto text-sm font-bold text-primary">{(data as any).score}/100</span>
                                  </div>
                                  <Progress value={(data as any).score} className="h-2" />
                                  <p className="text-sm text-muted-foreground">{(data as any).details}</p>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Pros and Cons */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                              <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                              Fördelar
                            </h4>
                            <ul className="space-y-2">
                              {casino.editorial.pros.map((pro: string, i: number) => (
                                <li key={i} className="flex items-start space-x-2">
                                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                                  <span className="text-muted-foreground text-sm">{pro}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                              <XCircle className="mr-2 h-5 w-5 text-red-500" />
                              Nackdelar
                            </h4>
                            <ul className="space-y-2">
                              {casino.editorial.cons.map((con: string, i: number) => (
                                <li key={i} className="flex items-start space-x-2">
                                  <XCircle className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                                  <span className="text-muted-foreground text-sm">{con}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Expert Verdict */}
                        <div className="bg-slate-50 p-6 rounded-lg border">
                          <div className="flex items-center gap-4 mb-3">
                            <div className="h-12 w-12 rounded-full overflow-hidden ring-2 ring-gray-200">
                              <Image
                                src={expert.image}
                                alt={`${expert.name} porträtt`}
                                width={48}
                                height={48}
                                className="h-full w-full object-cover"
                                priority={false}
                              />
                            </div>
                            <div>
                              <div className="text-sm uppercase tracking-wide text-muted-foreground">Expertens Omdöme</div>
                              <div className="text-foreground font-semibold leading-tight">
                                {expert.name}
                                <span className="ml-2 text-xs text-muted-foreground font-normal">— {expert.title}</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-muted-foreground leading-relaxed italic">{casino.editorial.verdict}</p>
                        </div>

                        <div className="flex justify-center pt-4">
                          <Button size="lg" className="px-8" asChild>
                            <Link href={casino.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored">
                              Besök {casino.name}
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DetailedCasinoAnalysis;