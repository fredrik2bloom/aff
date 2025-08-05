'use client';

import Link from "next/link";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border shadow-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center transition-smooth hover:opacity-100">
              <span className="sr-only">Casino utan svensk licens</span>
              <img 
                src="logo2.webp" 
                alt="Casino utan svensk licens" 
                className="h-12 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link 
                href="/" 
                className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-surface-hover hover:text-primary transition-smooth"
              >
                Hem
              </Link>
              <Link 
                href="/om-oss" 
                className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-surface-hover hover:text-primary transition-smooth"
              >
                Om oss
              </Link>
              <Link 
                href="/kontakt" 
                className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-surface-hover hover:text-primary transition-smooth"
              >
                Kontakt
              </Link>
            </div>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-surface-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-smooth"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Öppna huvudmeny</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <nav className="md:hidden border-t border-border" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background">
            <Link 
              href="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-surface-hover hover:text-primary transition-smooth"
            >
              Hem
            </Link>
            <Link 
              href="/om-oss" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-surface-hover hover:text-primary transition-smooth"
            >
              Om oss
            </Link>
            <Link 
              href="/kontakt" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-surface-hover hover:text-primary transition-smooth"
            >
              Kontakt
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;