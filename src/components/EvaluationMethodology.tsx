import React from 'react';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Shield, Star, CreditCard, Gamepad2, HeadphonesIcon, Clock } from 'lucide-react';

const evaluationCriteria = [
  {
    name: 'Säkerhet & Licensiering',
    weight: 25,
    icon: Shield,
    description: 'Officiell licensiering, kryptering och regelefterlevnad'
  },
  {
    name: 'Spelkvalitet & Utbud',
    weight: 20,
    icon: Gamepad2,
    description: 'Storlek på spelkatalogen, mjukvaruleverantörer och exklusiva titlar'
  },
  {
    name: 'Bonusar & Kampanjer',
    weight: 20,
    icon: Star,
    description: 'Välkomsterbjudanden, pågående kampanjer och rättvisa omsättningskrav'
  },
  {
    name: 'Betalningsmetoder',
    weight: 15,
    icon: CreditCard,
    description: 'Insättnings-/uttagsalternativ, behandlingstider och avgifter'
  },
  {
    name: 'Kundtjänst',
    weight: 10,
    icon: HeadphonesIcon,
    description: 'Tillgänglighet dygnet runt, svarstider och supportkvalitet'
  },
  {
    name: 'Användarupplevelse',
    weight: 10,
    icon: Clock,
    description: 'Webbplatshastighet, mobilanpassning och enkel navigering'
  }
];

const EvaluationMethodology = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Shield className="mr-2 h-4 w-4" />
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
                      <Progress value={criterion.weight * 4} className="h-2" />
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