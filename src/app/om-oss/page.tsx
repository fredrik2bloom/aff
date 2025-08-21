import Header from "../../components/Header";
import Image from "next/image";
import Footer from "../../components/Footer";
import { Metadata } from "next";

// Page-specific metadata
export const metadata: Metadata = {
  title: 'Om Oss – Vårt Team och Vår Mission',
  description: 'Lär känna experterna bakom casinoutansvensklicens.eu. Läs om vår utvärderingsprocess, vårt mål och varför du kan lita på våra rekommendationer.',
  alternates: {
    canonical: '/om-oss',
  }
};

const experts = [
  {
    name: 'Niklas Johanneson',
    title: 'Chefredaktör & Grundare',
    imageSrc: '/authors/niklas-portrait.png',
    bio: 'Jag har snart ett decennium erfarenhet av iGaming branschen, både som spelare och proffesionellt. Mitt mål är att lyfta sajter av hög kvalité.',
    expertise: 'Spelutbud, Ansvarsfullt spelande, Säkerhet'
  },
  {
    name: 'Fredrik Blom',
    title: 'Medgrundare & Skribent',
    imageSrc: '/authors/fredrik-portrait.png',
    bio: 'Med ena foten i techvärlden, och andra i iGaming världen, har jag bra koll på vad som gör en spelsida bra. UX, betalningslösningar och spelupplevelse väger tyngst för mig.',
    expertise: 'Spelupplevelse, Betalningslösningar, UX'
  }
];

export default function OmOssPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
            Om oss
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <div className="bg-surface-elevated rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-bold text-primary mb-4">Vårt mål och syfte</h2>
              <p className="text-muted-foreground">
                Vi på casinoutansvensklicens.eu är dedikerade till att ge dig den mest kompletta och pålitliga informationen om casino utan svensk licens. 
                Vårt team av experter arbetar ständigt för att utvärdera och recensera de bästa alternativen på marknaden.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-surface-elevated rounded-lg p-6 border border-border">
                <h3 className="text-xl font-semibold text-primary mb-3">Expertanalys</h3>
                <p className="text-muted-foreground">
                  Våra experter har över 10 års erfarenhet inom online gambling-industrin och utvärderar varje casino 
                  baserat på säkerhet, spel, bonusar och användarupplevelse.
                </p>
              </div>
              
              <div className="bg-surface-elevated rounded-lg p-6 border border-border">
                <h3 className="text-xl font-semibold text-primary mb-3">Transparens</h3>
                <p className="text-muted-foreground">
                  Vi tror på total transparens. Alla våra recensioner är oberoende och baserade på faktisk testning 
                  och användarfeedback.
                </p>
              </div>
            </div>
            <div className="relative bg-surface-elevated rounded-lg p-8 border border-border overflow-hidden">
              <div className="relative">
                <h2 className="text-2xl font-bold text-primary mb-16 text-center">Möt våra experter</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-8">
                  {experts.map((expert) => (
                    <div key={expert.name} className="relative bg-background p-6 rounded-lg shadow-md border border-border">
                      <div className="absolute left-1/2 -translate-x-1/2 -top-12 w-24 h-24">
                        <Image
                          src={expert.imageSrc}
                          alt={`Porträtt av ${expert.name}`}
                          width={96}
                          height={96}
                          className="rounded-full object-cover border-4 border-background shadow-lg"
                        />
                      </div>
                      
                      <div className="mt-12 text-center">
                        <h4 className="text-xl font-bold text-foreground">{expert.name}</h4>
                        <p className="text-sm text-primary font-semibold">{expert.title}</p>
                        <p className="text-muted-foreground mt-4 text-base leading-relaxed">{expert.bio}</p>
                      </div>

                      <div className="mt-6 border-t border-border pt-4">
                        <h5 className="text-sm font-bold text-foreground text-center mb-3">Kärnkompetens</h5>
                        <div className="flex flex-wrap justify-center gap-2">
                          {expert.expertise.split(',').map(skill => (
                            <div key={skill} className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                              {skill.trim()}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Ny sektion: Hållbart & Ansvarsfullt Spelande */}
            <div className="bg-surface-elevated rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-bold text-primary mb-4">Hållbart & Ansvarsfullt Spelande</h2>
              <p className="text-muted-foreground">
                Vi anser att spelande ska vara underhållning, inte en källa till problem. Därför lyfter vi alltid fram vikten av 
                ansvarsfullt spelande och ger våra läsare verktyg och resurser för att hålla spelandet sunt och hållbart. 
                Vi uppmuntrar till att sätta gränser, ta pauser och söka hjälp om spelandet skulle kännas överväldigande. 
                Vårt mål är att främja en trygg och ansvarsfull spelupplevelse där nöje står i centrum.
              </p>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-primary mb-2">Externa resurser & stöd</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>
                    <a href="https://stodlinjen.se/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Stödlinjen (Sverige)
                    </a> – Erbjuder anonym och kostnadsfri rådgivning kring spelproblem.
                  </li>
                  <li>
                    <a href="https://www.gamblingtherapy.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Gambling Therapy
                    </a> – Internationellt stöd online för personer med spelrelaterade problem.
                  </li>
                  <li>
                    <a href="https://spelpaus.se/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Spelpaus
                    </a> – Svensk tjänst för självavstängning från alla licensierade spelbolag.
                  </li>
                </ul>
              </div>
            </div>

            
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};