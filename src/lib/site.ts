// Single source of truth for TIMCO site constants.
// Update domain + formspree ID here before launch — every page reads from this.

export const SITE = {
  name: 'TIMCO',
  legalName: 'TIMCO LLC',
  tagline: 'Property & Land Management, Restoration & Maintenance in Thibodaux, LA',
  baseUrl: 'https://timcola.com', // TODO: confirm domain spelling before launch
  owner: 'Timothy Caillouet',
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

// Every service belongs to one of two buckets, each of which has a hub page.
export const SERVICES = [
  {
    slug: 'property-restoration',
    title: 'Property Restoration',
    short: 'Overgrown homes and businesses brought back to usable.',
    lead: 'One-time cleanup of neglected residential and commercial lots — brush clearing, grass cutting, tree trimming, debris and trash removal, and full site work around homes and buildings. Hand it off looking like new.',
    icon: 'restoration',
    image: '/images/restoration-after-1.jpg',
    bucket: 'property',
  },
  {
    slug: 'residential-property-management',
    title: 'Residential Property Management',
    short: 'Recurring lawn and grounds care for homeowners.',
    lead: 'Scheduled lawn care for your home — grass cutting, weed eating, chemical spraying, tree trimming, and debris cleanup. Weekly, bi-weekly, or monthly. Your yard stays sharp without you lifting a finger.',
    icon: 'commercial',
    image: '/images/comm-after-white-home.jpg',
    bucket: 'property',
  },
  {
    slug: 'commercial-property-management',
    title: 'Commercial Property Management',
    short: 'Grounds maintenance for offices, apartments, and HOAs.',
    lead: 'Recurring grounds maintenance for commercial properties — offices, apartment complexes, and HOA common areas. Grass cutting, weed eating, spraying, tree trimming, and debris cleanup on a schedule that keeps your property presentable year-round.',
    icon: 'commercial',
    image: '/images/comm-bobcat-apartments.jpg',
    bucket: 'property',
  },
  {
    slug: 'land-restoration',
    title: 'Land Restoration',
    short: 'Reclaiming raw and rural acreage at scale.',
    lead: 'Large-scale clearing of neglected rural land — overgrown fields, wooded acreage, and tracts that have gotten away. Brush and tree clearing, drainage, and full site work to bring land back into usable, accessible shape.',
    icon: 'restoration',
    image: '/images/restoration-bobcat-1.jpg',
    bucket: 'land',
  },
  {
    slug: 'recreational-land-management',
    title: 'Recreational Land Management',
    short: 'Ongoing acreage care for hunters and landholders.',
    lead: 'Cutting, spraying, drainage, prescribed burns, tree clearing, and shooting-lane work — keeping rural and recreational land productive and accessible season after season.',
    icon: 'land',
    image: '/images/land-pine.jpg',
    bucket: 'land',
  },
] as const

export type ServiceSlug = (typeof SERVICES)[number]['slug']
export type Bucket = (typeof SERVICES)[number]['bucket']

export const propertyServices = SERVICES.filter((s) => s.bucket === 'property')
export const landServices = SERVICES.filter((s) => s.bucket === 'land')

// Two category hub pages, each introducing its bucket and linking to its leaf services.
export const BUCKETS = [
  {
    slug: 'property-management',
    bucket: 'property',
    title: 'Property Management',
    short: 'Restoration and recurring care for homes and businesses.',
    lead: 'Everything that keeps a developed property sharp — from one-time cleanup of an overgrown lot to scheduled lawn and grounds care for homeowners, offices, apartments, and HOAs.',
    image: '/images/comm-after-white-home.jpg',
  },
  {
    slug: 'land-management',
    bucket: 'land',
    title: 'Land Management',
    short: 'Reclaiming and maintaining rural and recreational acreage.',
    lead: 'Care for the rural side — large-scale land restoration that brings neglected acreage back, plus ongoing recreational land management for hunters and landholders who need their ground to stay productive.',
    image: '/images/land-pasture.jpg',
  },
] as const

export type BucketSlug = (typeof BUCKETS)[number]['slug']

export const CITY_PAGES = [
  { service: 'property-restoration', city: 'thibodaux', cityName: 'Thibodaux' },
  { service: 'property-restoration', city: 'houma', cityName: 'Houma' },
  { service: 'recreational-land-management', city: 'thibodaux', cityName: 'Thibodaux' },
  { service: 'recreational-land-management', city: 'houma', cityName: 'Houma' },
] as const

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  {
    href: '/services',
    label: 'Services',
    children: [
      { group: 'Property Management', href: '/services/property-management', items: propertyServices },
      { group: 'Land Management', href: '/services/land-management', items: landServices },
    ],
  },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const
