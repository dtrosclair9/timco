// Single source of truth for TIMCO site constants.
// Update domain + formspree ID here before launch — every page reads from this.

export const SITE = {
  name: 'TIMCO',
  legalName: 'TIMCO LLC',
  tagline: 'Land Restoration & Management in Thibodaux, LA',
  slogan: 'We Restore & Manage Land',
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

// TIMCO is a land management company. Every service is the same two-part job —
// RESTORE (reclaim neglected, overgrown ground) and MANAGE (keep it that way).
export const SERVICES = [
  {
    slug: 'residential-land-management',
    title: 'Residential Land Management',
    short: 'Reclaim an overgrown yard, then keep it sharp.',
    lead: 'Bring a neglected home lot back and keep it that way — brush clearing, debris and trash removal, and full cleanup, then recurring lawn and grounds care. Restore once, manage from there.',
    icon: 'residential',
    image: '/images/res-home-modern.jpg',
  },
  {
    slug: 'commercial-land-management',
    title: 'Commercial Land Management',
    short: 'Restore and maintain commercial grounds.',
    lead: 'Land management for offices, apartment complexes, and HOA common areas — one-time cleanup and clearing, then recurring grounds maintenance that keeps the place presentable year-round.',
    icon: 'commercial',
    image: '/images/comm-bobcat-apartments.jpg',
  },
  {
    slug: 'recreational-land-management',
    title: 'Recreational Land Management',
    short: 'Reclaim and manage rural and hunting acreage.',
    lead: 'Reclaim overgrown rural land, then keep it productive — clearing, cutting, spraying, prescribed burns, tree work, and opening up canals, bayous, and right-of-ways so they drain again. Hunting ground kept accessible season after season.',
    icon: 'land',
    image: '/images/land-field-road.jpg',
  },
] as const

export type ServiceSlug = (typeof SERVICES)[number]['slug']

// One dedicated Thibodaux city landing page per service.
export const CITY_PAGES = [
  { service: 'residential-land-management', city: 'thibodaux', cityName: 'Thibodaux' },
  { service: 'commercial-land-management', city: 'thibodaux', cityName: 'Thibodaux' },
  { service: 'recreational-land-management', city: 'thibodaux', cityName: 'Thibodaux' },
] as const

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services', children: SERVICES },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const
