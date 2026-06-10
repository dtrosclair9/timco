// Single source of truth for TIMCO site constants.
// Update domain + formspree ID here before launch — every page reads from this.

export const SITE = {
  name: 'TIMCO',
  legalName: 'TIMCO LLC',
  tagline: 'Property Restoration, Land Management & Retriever Training in Thibodaux, LA',
  baseUrl: 'https://timcola.com', // TODO: confirm domain spelling before launch
  owner: 'Timothy Cailouet',
  ownerShort: 'Tim',
  ownerTitle: 'Owner / Operator',
  phoneDisplay: '985.665.7298',
  phoneRaw: '+19856657298',
  email: 'timcollc2021@gmail.com', // public-facing email (Footer, Contact, Privacy mailto links)
  // Formspree routing — set in Formspree dashboard, not code. Point it at daynetrosclair@icloud.com
  // during testing, swap to timcollc2021@gmail.com before launch.
  address: {
    street: '619 Hwy 308',
    city: 'Thibodaux',
    region: 'LA',
    postal: '70301',
    country: 'US',
  },
  geo: {
    lat: 29.7969,
    lng: -90.8226,
  },
  serviceArea: {
    parishes: ['Lafourche', 'Terrebonne', 'Assumption'],
    cities: ['Thibodaux', 'Houma', 'Raceland', 'Chackbay', 'Napoleonville', 'Schriever'],
    primaryRegion: 'Bayou Region',
  },
  formspreeId: 'FORMSPREE_ID', // TODO: set real Formspree form ID before launch
  established: 2021,
} as const

export const SERVICES = [
  {
    slug: 'property-restoration',
    title: 'Property Restoration',
    short: 'Overgrown to usable — residential and commercial.',
    lead: 'Complete site cleanup of neglected residential and commercial lots. Brush clearing, grass cutting, tree trimming, debris and trash removal, full site work — then ongoing lawn care if you want it.',
    icon: 'restoration',
    image: '/images/restoration-after-1.jpg',
  },
  {
    slug: 'recreational-land-management',
    title: 'Recreational Land Management',
    short: 'Acreage care for hunters, recreational owners, and landholders.',
    lead: 'Cutting, spraying, drainage, prescribed burns, tree clearing — keeping rural land productive and accessible season after season.',
    icon: 'land',
    image: '/images/land-pine.jpg',
  },
  {
    slug: 'commercial-property-maintenance',
    title: 'Commercial Property Maintenance',
    short: 'Lawn care and grounds maintenance for residential, HOAs, offices, and apartments.',
    lead: 'Recurring lawn care, grass cutting, weed eating, chemical spraying, tree trimming, and debris cleanup — for homeowners and for commercial properties (offices, apartments, HOAs). Weekly, bi-weekly, or monthly visits.',
    icon: 'commercial',
    image: '/images/comm-bobcat-apartments.jpg',
  },
  {
    slug: 'retriever-training',
    title: 'Retriever Training',
    short: 'Board-and-train for Labradors and gun dogs.',
    lead: '3 to 9 month programs at our Thibodaux kennel — basic obedience, basic retriever, advanced (duck blind etiquette, hand signals). 10 runs.',
    icon: 'retriever',
    image: '/images/retriever-hero-boat.jpg',
    division: 'TIMCO Kennels',
  },
] as const

export type ServiceSlug = (typeof SERVICES)[number]['slug']

export const CITY_PAGES = [
  { service: 'property-restoration', city: 'thibodaux', cityName: 'Thibodaux' },
  { service: 'property-restoration', city: 'houma', cityName: 'Houma' },
  { service: 'recreational-land-management', city: 'thibodaux', cityName: 'Thibodaux' },
  { service: 'recreational-land-management', city: 'houma', cityName: 'Houma' },
  { service: 'retriever-training', city: 'thibodaux', cityName: 'Thibodaux' },
] as const

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  {
    href: '/services',
    label: 'Services',
    children: [
      { group: 'Property & Land', items: SERVICES.filter((s) => !('division' in s)) },
      {
        group: 'Kennels',
        items: SERVICES.filter((s) => 'division' in s),
      },
    ],
  },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const
