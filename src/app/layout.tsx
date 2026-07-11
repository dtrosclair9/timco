import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { SITE, ogImage } from '@/lib/site'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.baseUrl),
  title: {
    default: `${SITE.name} | Land Restoration & Management in Thibodaux, LA`,
    template: `%s | ${SITE.name}`,
  },
  description:
    'TIMCO is a land management company in Thibodaux, LA — restoring and managing residential, commercial, and recreational land. Clearing, cleanup, drainage, prescribed burns, and recurring grounds care. Insured. Serving Lafourche, Terrebonne, and Assumption parishes.',
  keywords: [
    'land management Thibodaux',
    'land restoration Louisiana',
    'land clearing Thibodaux LA',
    'residential land management Louisiana',
    'commercial land management Thibodaux',
    'recreational land management Louisiana',
    'lawn care Thibodaux LA',
    'TIMCO',
    'Lafourche Parish land services',
  ],
  authors: [{ name: SITE.legalName }],
  other: {
    'geo.region': 'US-LA',
    'geo.placename': SITE.address.city,
    'geo.position': `${SITE.geo.lat};${SITE.geo.lng}`,
    'ICBM': `${SITE.geo.lat}, ${SITE.geo.lng}`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE.baseUrl,
    siteName: SITE.name,
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
  },
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
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="font-sans text-gray-800 antialiased bg-white">
        <a href="#main" className="skip-link">Skip to main content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
