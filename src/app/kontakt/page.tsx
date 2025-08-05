// FILE: src/app/kontakt/page.tsx (MODIFIED)
// ================================================================
'use client';

import { useEffect, useRef, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { Turnstile } from '@marsidev/react-turnstile';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MessageSquare, Clock, Loader2, Plus, Minus } from 'lucide-react';
import { sendEmail, type FormState } from '@/app/kontakt/actions';


const faqItems = [
  {
    question: 'Hur recenserar ni casinon?',
    answer: 'Vår process är grundlig. Vi registrerar ett konto, sätter in pengar, testar spelutbudet, utvärderar bonusvillkor, kontaktar kundtjänsten och gör ett uttag. Allt för att ge en rättvis och komplett bild av casinot.',
  },
  {
    question: 'Är bonusarna ni listar alltid aktuella?',
    answer: 'Vi strävar efter att hålla all information, inklusive bonusar, så uppdaterad som möjligt. Casinon kan dock ändra sina erbjudanden utan förvarning. Vi rekommenderar därför att du alltid dubbelkollar villkoren på casinots egen webbplats.',
  },
  {
    question: 'Kan ni hjälpa mig att välja ett casino?',
    answer: 'Absolut! Våra recensioner och topplistor är designade för att hjälpa dig. Läs igenom dem för att se vilket casino som bäst matchar dina preferenser gällande spel, bonusar och betalningsmetoder. Om du har en specifik fråga, tveka inte att kontakta oss.',
  },
  {
    question: 'Jag har ett förslag på ett casino ni borde recensera. Hur gör jag?',
    answer: 'Vi älskar förslag från våra läsare! Skicka ett meddelande till oss via kontaktformuläret med namnet på casinot, så kommer vi att titta närmare på det för en eventuell framtida recension.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="bg-surface-elevated rounded-lg p-6 border border-border">
      <h3 className="font-semibold text-foreground mb-4">Vanliga frågor</h3>
      <div className="space-y-3">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-border/50 last:border-b-0">
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex justify-between items-center text-left py-3 focus:outline-none"
            >
              <span className="font-medium text-foreground">{item.question}</span>
              {openIndex === index ? <Minus className="h-5 w-5 text-primary" /> : <Plus className="h-5 w-5 text-muted-foreground" />}
            </button>
            {openIndex === index && (
              <div className="pb-3 pr-4 text-muted-foreground text-sm transition-all duration-300">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Skickar...
        </>
      ) : (
        'Skicka meddelande'
      )}
    </Button>
  );
}

const honeypotStyles: React.CSSProperties = {
  position: 'absolute',
  left: '-5000px',
  opacity: '0',
};

export default function KontaktPage() {
  const initialState: FormState = { message: '', success: false };
  const [state, formAction] = useFormState(sendEmail, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const turnstileRef = useRef<any>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
      turnstileRef.current?.reset();
    }
  }, [state.success]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
            Kontakt
          </h1>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-primary">Skicka oss ett meddelande</CardTitle>
                </CardHeader>
                <CardContent>
                  <form ref={formRef} action={formAction} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Namn
                      </label>
                      <Input id="name" name="name" placeholder="Ditt namn" required />
                      {state.errors?.name && <p className="text-sm text-red-500 mt-1">{state.errors.name[0]}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        E-post
                      </label>
                      <Input id="email" name="email" type="email" placeholder="din@email.com" required />
                      {state.errors?.email && <p className="text-sm text-red-500 mt-1">{state.errors.email[0]}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Ämne
                      </label>
                      <Input id="subject" name="subject" placeholder="Vad gäller ditt meddelande?" required />
                      {state.errors?.subject && <p className="text-sm text-red-500 mt-1">{state.errors.subject[0]}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Meddelande
                      </label>
                      <Textarea 
                        id="message" 
                        name="message"
                        placeholder="Skriv ditt meddelande här..." 
                        className="min-h-[120px]"
                        required
                      />
                      {state.errors?.message && <p className="text-sm text-red-500 mt-1">{state.errors.message[0]}</p>}
                    </div>

                    <div style={honeypotStyles} aria-hidden="true">
                      <label htmlFor="fax">Fax</label>
                      <input type="text" id="fax" name="fax" tabIndex={-1} autoComplete="off" />
                    </div>

                    <Turnstile
                      ref={turnstileRef}
                      siteKey={process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY!}
                      options={{ theme: 'light' }}
                    />
                    
                    <SubmitButton />

                    {state.message && (
                      <p className={`text-sm mt-2 ${state.success ? 'text-green-500' : 'text-red-500'}`}>
                        {state.message}
                      </p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
               <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">E-post</h3>
                      <p className="text-muted-foreground">
                        info@casinoutansvensklicens.se
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
               <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Support</h3>
                      <p className="text-muted-foreground">
                        Vi hjälper till med frågor om casinorecensioner, 
                        bonusar och allmän vägledning.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <FAQ />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};