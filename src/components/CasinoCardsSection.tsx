import React from 'react';
import { Badge } from './ui/badge';
import { Award } from 'lucide-react';

// 1. Import the getter function and the card component
import { getCasinosForCards } from '@/lib/data-service';
import GlassCasinoCard from './cards/CasinoCard';

const CasinoCardsSection = () => {
    // 2. Fetch the data from our central service
    const casinos = getCasinosForCards();

    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <Badge variant="secondary" className="mb-4">
                        <Award className="mr-2 h-4 w-4" />
                        Expertanalys
                    </Badge>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
                        Topprankade Casinon
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                        Vårt team har noggrant testat och utvärderat dussintals casinon för att ge dig en definitiv ranking av de bästa alternativen på marknaden.
                    </p>
                </div>
                
                {/* 3. Map over the real data and render the updated card */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {casinos.map((casino, index) => (
                        <GlassCasinoCard key={casino.slug} casino={casino} rank={index + 1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CasinoCardsSection;