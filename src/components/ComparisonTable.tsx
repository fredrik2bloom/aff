import React from 'react';
import Image from 'next/image';
import { Award, Calendar, Clock, Star, CheckCircle, Crown } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

import { getCasinosForTable } from '@/lib/data-service';

const ComparisonTable = () => {
  const tableData = getCasinosForTable();

  const getRankTag = (rank: number) => {
    if (rank === 1) return { text: 'Bäst i test', variant: 'default' as const };
    return { text: `#${rank}`, variant: 'secondary' as const };
  };

  // Distinct row styles: gold (1), silver (2), bronze (3)
  const getRowClassName = (rank: number, index: number) => {
    let classes = 'transition-all duration-300';

    if (rank === 1) {
      // Gold
      classes += ' bg-amber-50/50 dark:bg-amber-900/10 border-l-4 border-amber-400';
    } else if (rank === 2) {
      // Silver
      classes += ' bg-gray-50/50 dark:bg-gray-800/10 border-l-4 border-gray-400';
    } else if (rank === 3) {
      // Bronze
      classes += ' bg-orange-50/50 dark:bg-orange-900/10 border-l-4 border-orange-400';
    } else {
      // Standard alternating for others
      classes += index % 2 === 0 ? ' bg-background' : ' bg-surface-elevated/30';
    }

    // Common hover effect
    classes += ' hover:bg-slate-100 hover:dark:bg-slate-700/50 hover:shadow-md hover:scale-[1.01]';

    return classes;
  };

  // Badge (left circle) colors to match gold/silver/bronze
  const getRankBadgeClass = (rank: number) => {
    if (rank === 2) return 'bg-gray-300 text-gray-800 dark:bg-gray-600 dark:text-gray-50';
    if (rank === 3) return 'bg-orange-300 text-orange-900 dark:bg-orange-700 dark:text-orange-50';
    return 'bg-slate-200 dark:bg-slate-700 text-foreground';
  };

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <Badge variant="secondary" className="mb-4">
            <Award className="mr-2 h-10 w-10" />
            Exklusiv Ranking
          </Badge>
          <h2 className="text-3xl font-extrabold text-foreground md:text-4xl lg:text-5xl">
            Jämförelsetabell för casino utan svensk licens
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Detaljerad analys av varje plattform med viktiga mätvärden för att hjälpa dig välja.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl shadow-large border border-border">
          <table className="min-w-full">
            <thead className="bg-surface-elevated border-b border-border">
              <tr>
                <th scope="col" className="w-16 px-4 py-5 text-left text-xs font-bold uppercase tracking-wider text-muted-foreground">Rank</th>
                <th scope="col" className="w-48 px-6 py-5 text-left text-xs font-bold uppercase tracking-wider text-muted-foreground">Casino</th>
                <th scope="col" className="w-40 px-6 py-5 text-left text-xs font-bold uppercase tracking-wider text-muted-foreground">Välkomstbonus</th>
                <th scope="col" className="w-24 px-4 py-5 text-center text-xs font-bold uppercase tracking-wider text-muted-foreground">Omsätt.</th>
                <th scope="col" className="w-24 px-4 py-5 text-center text-xs font-bold uppercase tracking-wider text-muted-foreground">Spel</th>
                <th scope="col" className="w-20 px-4 py-5 text-center text-xs font-bold uppercase tracking-wider text-muted-foreground">Live</th>
                <th scope="col" className="w-16 px-4 py-5 text-center text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  <Calendar className="mx-auto h-4 w-4" />
                </th>
                <th scope="col" className="w-24 px-4 py-5 text-center text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  <Clock className="mx-auto h-4 w-4" />
                </th>
                <th scope="col" className="w-20 px-4 py-5 text-center text-xs font-bold uppercase tracking-wider text-muted-foreground">Betyg</th>
                <th scope="col" className="w-24 px-4 py-5 text-center text-xs font-bold uppercase tracking-wider text-muted-foreground">Besök</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {tableData.map((row, index) => {
                const rank = index + 1;
                const rankTag = getRankTag(rank);

                return (
                  <tr key={row.slug} className={getRowClassName(rank, index)}>
                    {/* Rank */}
                    <td className="px-4 py-6 font-bold text-center">
                      {rank === 1 ? (
                        <div className="flex flex-col items-center text-amber-500">
                          <Crown className="h-6 w-6" />
                          <span className="text-xs -mt-1">Nr. {rank}</span>
                        </div>
                      ) : (
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full font-bold ${getRankBadgeClass(rank)}`}
                        >
                          {rank}
                        </div>
                      )}
                    </td>

                    {/* Casino */}
                    <td className="px-6 py-6">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <Image
                            src={row.logoUrl}
                            alt={`${row.name} logo`}
                            width={48}
                            height={48}
                            className="rounded-lg object-contain"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-base font-semibold text-foreground truncate">{row.name}</div>
                          <Badge variant={rankTag.variant} className="mt-1 text-xs">
                            {rankTag.text}
                          </Badge>
                        </div>
                      </div>
                    </td>

                    {/* Bonus */}
                    <td className="px-6 py-6">
                      <div className="text-sm">
                        <div className="font-semibold text-foreground">{row.bonus.main}</div>
                        <div className="text-xs text-muted-foreground mt-1">{row.bonus.details}</div>
                      </div>
                    </td>

                    {/* Wagering */}
                    <td className="px-4 py-6 text-center">
                      <Badge
                        variant="outline"
                        className={`font-semibold ${
                          row.bonus.wagering === '0x'
                            ? 'bg-success/10 text-success border-success/20'
                            : 'bg-warning/10 text-warning border-warning/20'
                        }`}
                      >
                        {row.bonus.wagering}
                      </Badge>
                    </td>

                    {/* Game Count */}
                    <td className="px-4 py-6 text-center">
                      <span className="text-sm font-medium text-foreground">{row.stats.games}</span>
                    </td>

                    {/* Live Game Count */}
                    <td className="px-4 py-6 text-center">
                      <span className="text-sm font-medium text-foreground">{row.stats.live}</span>
                    </td>

                    {/* Checkmark */}
                    <td className="px-4 py-6 text-center">
                      <CheckCircle className="mx-auto h-5 w-5 text-success" />
                    </td>

                    {/* Payout Time */}
                    <td className="px-4 py-6 text-center">
                      <span
                        className={`text-sm font-semibold ${
                          row.stats.payoutTime === 'Omedelbart' ? 'text-success' : 'text-foreground'
                        }`}
                      >
                        {row.stats.payoutTime}
                      </span>
                    </td>

                    {/* Rating */}
                    <td className="px-4 py-6 text-center">
                      <div className="flex items-center justify-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                        <span className="text-sm font-bold text-foreground">{row.rating.toFixed(1)}</span>
                      </div>
                    </td>

                    {/* Button */}
                    <td className="px-4 py-6 text-center">
                      <Button
                        variant={rank === 1 ? 'default' : 'outline'}
                        size="sm"
                        className="transition-transform hover:scale-105 font-semibold"
                        asChild
                      >
                        <a href={row.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored">
                          {rank === 1 ? 'Spela nu' : 'Besök'}
                        </a>
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;