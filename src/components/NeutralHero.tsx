import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import StarRating from './ui/StarRating';
import { Button } from './ui/button';
import { getFeaturedHeroCasino } from '@/lib/data-service';

const NeutralHero = () => {
  const featured = getFeaturedHeroCasino();

  if (!featured) {
    return <div>Featured casino not found.</div>;
  }

  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      {/* Clover background */}
      <div
        className="absolute inset-0 opacity-15 mix-blend-multiply"
        style={{ backgroundImage: 'url("/clover.png")' }}
      />

      {/* Regular vertical padding */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 text-center text-primary-foreground sm:px-6 lg:px-8 lg:py-28">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">
          Casino Utan Svensk Licens
        </h1>
        <p className="mt-4 text-lg font-semibold text-primary-glow">
          Expertanalyser av casino utan svensk licens 2025
        </p>

        <div className="mx-auto mt-12 max-w-4xl rounded-2xl bg-background/10 backdrop-blur-md border border-primary-foreground/20 p-6 shadow-premium md:p-8">
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <div className="h-10 mb-2 flex items-center">
                <Image
                  src={featured.logoWhiteUrl || featured.logoUrl}
                  alt={`${featured.name} logo`}
                  width={200}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div className="mt-2 flex items-center">
                <StarRating
                  rating={featured.rating}
                  iconClassName="h-5 w-5"
                  fillColor="text-yellow-400"
                  emptyColor="text-white/30"
                />
                <span className="ml-2 text-sm font-bold">{featured.rating.toFixed(1)}</span>
              </div>
            </div>

            <div className="border-t-2 border-primary-foreground/20 px-6 py-6 md:border-t-0 md:border-l-2 md:border-r-2 md:py-0">
              <p className="text-sm font-semibold text-primary-glow">Erbjudande</p>
              <p className="mt-1 text-3xl font-bold text-primary-foreground lg:text-4xl">
                {featured.bonus.main}
              </p>
              {featured.bonus.details && (
                <p className="mt-1 text-sm text-primary-glow">{featured.bonus.details}</p>
              )}
            </div>

            <div className="w-full">
              <Link href={featured.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored">
                <Button
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-4 px-6 text-lg shadow-large transition-transform transform hover:scale-105"
                >
                  Läs mer på deras hemsida →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeutralHero;