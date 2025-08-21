// ================================================================
// FILE: src/app/layout.tsx (WITH FONT)
// ================================================================
import './globals.css'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from 'next';
import { Raleway } from 'next/font/google'; // FONT: Step 1. Import the font

// FONT: Step 2. Configure the font with desired weights and a CSS variable
const spaceGrotesk = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-space-grotesk',
});

const siteConfig = {
  name: "Casino Utan Svensk Licens",
  url: "https://www.casinoutansvensklicens.eu",
  ogImage: "https://www.casinoutansvensklicens.eu/og.png",
  description: "Hitta de bästa casinon utan svensk licens. Expertanalyser, topplistor och exklusiva bonusar för svenska spelare.",
  author: "casinoutansvensklicens.eu",
};

export const metadata: Metadata = {
  // ... your metadata remains the same
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1, }, },
  openGraph: { url: siteConfig.url, title: siteConfig.name, description: siteConfig.description, siteName: siteConfig.name, images: [ { url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name, }, ], locale: 'sv_SE', type: 'website', },
  twitter: { card: 'summary_large_image', title: siteConfig.name, description: siteConfig.description, images: [siteConfig.ogImage], },
  manifest: '/manifest.webmanifest',
  icons: { icon: [ { url: '/favicon/favicon.ico', sizes: '32x32', type: 'image/x-icon' }, { url: '/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' }, { url: '/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }, ], apple: '/favicon/apple-touch-icon.png', shortcut: '/favicon/favicon.ico', },
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  alternates: { canonical: '/', },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Casino Utan Svensk Licens",
  "url": "https://www.casinoutansvensklicens.eu",
  "logo": "https://www.casinoutansvensklicens.eu/logo2.webp",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "email": "info@casinoutansvensklicens.eu"
  },
  "sameAs": []
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      {/* FONT: Step 3. Apply the font variable to the body tag */}
      <body className={`${spaceGrotesk.variable} font-sans`}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}