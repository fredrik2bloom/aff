import { ShieldCheck, Users, Info, MessageSquare, Phone, AlertTriangle } from 'lucide-react';

// A simple component for the 18+ icon
const EighteenPlusIcon = () => (
  <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-400 font-bold text-slate-400 text-sm">
    18+
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-6 pt-16 pb-8">
        
        {/* Top Section: Main Message & Trust Symbols */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Ansvarsfullt Spelande</h2>
          <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-slate-400">
            Spel ska vara en form av underhållning, inte ett sätt att tjäna pengar. Vi är engagerade i att främja en säker och ansvarsfull spelmiljö. Spela med måtta och inom dina gränser.
          </p>
        </div>
        
        <div className="mt-8 mb-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium">
          <div className="flex items-center gap-2">
            <EighteenPlusIcon />
            <span>Endast för personer över 18 år</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-slate-400" />
            <span>Säkert & Tryggt</span>
          </div>
          <div className="flex items-center gap-2">
            <a href="https://www.spelpaus.se" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
              <Info className="h-5 w-5 text-slate-400" />
              <span>Läs om Spelpaus.se</span>
            </a>
          </div>
        </div>
        
        <div className="w-full border-t border-slate-800 my-12"></div>

        {/* Main Content: 4-Column Layout */}
        <div className="grid grid-cols-1 gap-8 text-sm md:grid-cols-2 lg:grid-cols-4">
          
          {/* Column 1: About Us */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white uppercase tracking-wider">Om Oss</h3>
            <p className="text-slate-400">
              Casinoutansvensklicens.eu är en oberoende jämförelsesajt för casinon. Vårt mål är att ge transparent och korrekt information för att hjälpa dig göra välgrundade val.
            </p>
          </div>

          {/* Column 2: Warning Signs */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white uppercase tracking-wider">Varningssignaler</h3>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 mt-1 flex-shrink-0" /><span>Du spelar för mer än du har råd med.</span></li>
              <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 mt-1 flex-shrink-0" /><span>Spel påverkar ditt humör eller relationer.</span></li>
              <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 mt-1 flex-shrink-0" /><span>Du försöker vinna tillbaka förluster.</span></li>
            </ul>
          </div>

          {/* Column 3: Help & Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white uppercase tracking-wider">Hjälp & Stöd</h3>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>Stödlinjen: <a href="tel:020-819100" className="hover:text-white hover:underline">020-81 91 00</a></span>
              </li>
              <li className="flex items-center gap-2">
                <Users className="h-4 w-4 flex-shrink-0" />
                <a href="https://www.spelpaus.se" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline">Spelpaus.se</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white uppercase tracking-wider">Snabblänkar</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="/kontakt" className="hover:text-white hover:underline">Kontakta oss</a></li>
              <li><a href="/om-oss" className="hover:text-white hover:underline">Om oss</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Border & Copyright */}
        <div className="mt-16 w-full border-t border-slate-800 pt-8 text-center">
          <p className="text-sm text-slate-500">
            Copyright © {new Date().getFullYear()} - casinoutansvensklicens.eu. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;