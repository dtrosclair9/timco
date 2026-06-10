import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { SITE } from '@/lib/site'

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
    default: `${SITE.name} | Property Restoration & Retriever Training in Thibodaux, LA`,
    template: `%s | ${SITE.name}`,
  },
  description:
    'TIMCO restores overgrown properties and trains Labrador retrievers in Thibodaux, LA. Land management, commercial maintenance, board-and-train kennel. Serving Lafourche and Terrebonne parishes.',
  keywords: [
    'property restoration Thibodaux',
    'land clearing Thibodaux LA',
    'recreational land management Louisiana',
    'commercial property maintenance Thibodaux',
    'retriever training Thibodaux',
    'Labrador board and train Louisiana',
    'TIMCO',
    'TIMCO Kennels',
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
    images: [
      {
        url: '/images/hero-restoration.jpg',
        width: 1200,
        height: 630,
        alt: `${SITE.name} – Thibodaux, LA`,
      },
    ],
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
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
