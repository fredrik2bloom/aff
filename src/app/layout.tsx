// ================================================================
// FILE: src/app/layout.tsx (MODIFIED)
// ================================================================
// The root layout now includes default metadata, a metadataBase for
// resolving relative URLs, and Organization JSON-LD structured data.
// ================================================================
import './globals.css'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from 'next';

// Define the site's base URL and default metadata
const siteConfig = {
    name: "Casino Utan Svensk Licens",
    url: "https://www.casinoutansvensklicens.eu",
    ogImage: "https://www.casinoutansvensklicens.eu/og-image.png", // Create this image
    description: "Hitta de bästa casinon utan svensk licens. Expertanalyser, topplistor och exklusiva bonusar för svenska spelare.",
    author: "casinoutansvensklicens.eu",
};

// Define root metadata
export const metadata: Metadata = {
  // metadataBase is crucial for resolving relative paths in OG images, etc.
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`, // Adds site name to page titles
  },
  description: siteConfig.description,
  
  // For web crawlers
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // For social sharing (Open Graph)
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
    locale: 'sv_SE',
    type: 'website',
  },

  // For Twitter sharing
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@YourTwitterHandle', // Add your twitter handle
  },

  // For PWA and mobile
  manifest: '/manifest.webmanifest',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  
  // Author and canonical URL
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  alternates: {
    canonical: '/',
  }
};

// Organization JSON-LD Schema
const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Casino Utan Svensk Licens",
    "url": "https://www.casinoutansvensklicens.eu",
    "logo": "https://www.casinoutansvensklicens.eu/logo2.webp",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+46-XXX-XXX-XX", // Optional: Add a contact number
      "contactType": "Customer Service",
      "email": "info@casinoutansvensklicens.eu"
    },
    "sameAs": [
      // "https://www.facebook.com/your-page",
      // "https://www.twitter.com/your-handle",
      // "https://www.instagram.com/your-profile"
    ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv" suppressHydrationWarning>
      <head>
        {/* Add JSON-LD structured data to the head */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {children}
        </TooltipProvider>
      </body>
    </html>
  )
}