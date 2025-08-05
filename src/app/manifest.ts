// ================================================================
// FILE: src/app/manifest.ts (FIXED)
// ================================================================
// Generates manifest.webmanifest for PWA installation
// ================================================================
import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Casino Utan Svensk Licens',
    short_name: 'Casino USL',
    description: 'Din guide till de bästa casinon utan svensk licens. Hitta topplistor, bonusar och expertanalyser.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0A0A', // Dark background
    theme_color: '#2563EB', // Primary blue theme
    icons: [
      {
        src: '/favicon/favicon.ico', // Browser favicon
        sizes: '32x32',
        type: 'image/x-icon'
      },
      {
        src: '/favicon/android-chrome-192x192.png', // Corrected name
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/favicon/android-chrome-512x512.png', // Corrected name
        sizes: '512x512',
        type: 'image/png'
      },
      {
        src: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ],
  }
}