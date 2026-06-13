import type { Metadata } from 'next'
import { CityServiceLayout, buildMetadata, type CityPageData } from '@/components/CityServicePage'

const data: CityPageData = {
  service: 'Recreational Land Management',
  serviceSlug: 'recreational-land-management',
  city: 'Thibodaux',
  citySlug: 'thibodaux',
  parish: 'Lafourche Parish',
  parentServiceHref: '/services/recreational-land-management',
  metaTitle: 'Recreational Land Management & Bush Hogging, Thibodaux',
  metaDescription:
    'Bush hogging, land clearing, drainage, and canal & right-of-way clearing for Thibodaux hunting ground and rural acreage across Lafourche Parish. Insured.',
  hero: {
    image: '/images/land-pine.jpg',
    imageAlt: 'Lone pine in vast green pasture on managed recreational acreage outside Thibodaux',
  },
  intro:
    'TIMCO reclaims and manages recreational acreage around Thibodaux and across Lafourche Parish — clearing overgrown land, then cutting, spraying, drainage, prescribed burns, and tree work. Built for hunting ground, weekend retreats, and rural landowners who want their land kept right.',
  highlights: [
    'Bush-hogging & field cutting',
    'Chemical application (food plots, fence lines)',
    'Brush & small tree clearing',
    'Canal, bayou & right-of-way clearing',
    'Ditch & culvert drainage cleanup',
    'Prescribed pile burns',
    'Selective tree work & deadfall',
    'Seasonal & one-time visits',
  ],
  localContext: [
    {
      heading: 'Hunter-minded crew',
      body: "Tim hunts and works rural ground himself, so we think about your land the way an owner does — shooting lanes that actually clear, fields that hold cover, drainage that doesn't trap a truck come November.",
    },
    {
      heading: 'Lafourche-area access',
      body: 'A lot of Thibodaux-area recreational land sits down dirt roads, behind locked gates, or off back levees. We have the right trucks and trailers to get the equipment onto ground that other vendors skip.',
    },
    {
      heading: 'Canals, bayous & drainage',
      body: "Lafourche is flat — standing water is the real problem out here. Opening up canals, bayous, servitudes, and right-of-ways that grew over and stopped draining is work Tim takes pride in. We pull the debris by boat or on foot, boots and chainsaws, until a ditch that was unnavigable runs patent and drains again.",
    },
    {
      heading: 'Burns done safely',
      body: 'Prescribed brush burns on appropriate days, with the right equipment on site. We handle pile burns for landowners who want the brush gone without the risk of running it themselves.',
    },
  ],
  faqs: [
    {
      q: 'How small is too small for recreational land management?',
      a: 'Anything from a few acres up to a few hundred. We work weekend-cabin lots and large hunting tracts. If you have to maintain it but don\'t want to live on a Bobcat all summer, it\'s our work.',
    },
    {
      q: 'Do you do recurring visits or just one-time resets?',
      a: 'Both. We set up seasonal schedules for landowners who want regular cutting, spraying, and access maintenance. Or one-time reclaims to bring back land that got away.',
    },
    {
      q: 'Do you clear canals, bayous, and right-of-ways?',
      a: 'Yes — it\'s some of our favorite work. We open up canals, bayous, servitudes, and right-of-ways that have grown over and stopped draining, pulling all the debris by boat or on foot with chainsaws until the water runs and a ditch that was unnavigable is patent again.',
    },
    {
      q: 'Can you do prescribed burns?',
      a: 'Yes — pile burns and controlled brush burns. We do them on appropriate days (low wind, no burn ban) with the right equipment on site. We handle the reset of brushy or overgrown sections that piled up over the year.',
    },
    {
      q: 'What about food plot prep?',
      a: "Yes. We do food plot prep and refresh: clearing, disking where needed, spraying, and seedbed prep. Tell us what you're planting and we'll match the prep to it.",
    },
    {
      q: 'Do you handle deer stands, blinds, or other improvements?',
      a: 'We don\'t build stands or blinds (that\'s installs, not our line of work). But we clear shooting lanes, maintain access roads to existing stands, and clear around blind locations so they\'re ready come opening.',
    },
  ],
  photos: [
    { src: '/images/land-canal-cypress.jpg', alt: 'A cypress-lined canal cleared and opened back up near Thibodaux' },
    { src: '/images/land-ditch-clearing.jpg', alt: 'TIMCO clearing a ditch bank to open up drainage in Lafourche Parish' },
    { src: '/images/land-burn-day.jpg', alt: 'Controlled brush burn near Thibodaux for land management' },
    { src: '/images/land-burn-night.jpg', alt: 'Campfire at dusk among cypress on Thibodaux-area land' },
    { src: '/images/land-field-road.jpg', alt: 'Lush managed field with a turn-row outside Thibodaux' },
    { src: '/images/land-pasture.jpg', alt: 'Open rural pasture managed by TIMCO outside Thibodaux' },
    { src: '/images/land-deer-stand.jpg', alt: 'Wooded canal with footbridge and feeders on managed Lafourche land' },
    { src: '/images/land-bayou-dock-1.jpg', alt: 'Concrete dock and piling on a bayou near Thibodaux recreational land' },
  ],
  relatedCityPages: [
    { href: '/services/residential-land-management-thibodaux-la', label: 'Residential Land Management in Thibodaux' },
    { href: '/services/commercial-land-management-thibodaux-la', label: 'Commercial Land Management in Thibodaux' },
  ],
}

export const metadata: Metadata = buildMetadata(data)

export default function Page() {
  return <CityServiceLayout {...data} />
}
