import type { Metadata } from 'next'
import { CityServiceLayout, buildMetadata, type CityPageData } from '@/components/CityServicePage'

const data: CityPageData = {
  service: 'Recreational Land Management',
  serviceSlug: 'recreational-land-management',
  city: 'Houma',
  citySlug: 'houma',
  parish: 'Terrebonne Parish',
  parentServiceHref: '/services/recreational-land-management',
  metaTitle: 'Recreational Land Management & Bush Hogging, Houma',
  metaDescription:
    'Bush hogging, land clearing, drainage, and canal & right-of-way clearing for Houma hunting ground and rural acreage across Terrebonne Parish. Insured.',
  hero: {
    image: '/images/land-pine.jpg',
    imageAlt: 'Lone pine on managed recreational acreage outside Houma, Louisiana',
  },
  intro:
    'TIMCO reclaims and manages hunting ground and rural acreage across Houma and Terrebonne Parish — bush hogging, land clearing, drainage, prescribed burns, and opening up canals, bayous, and right-of-ways so they drain again. Run from our 619 Hwy 308 HQ in nearby Thibodaux.',
  highlights: [
    'Bush-hogging & field cutting',
    'Land clearing & forestry mulching',
    'Canal, bayou & right-of-way clearing',
    'Ditch & culvert drainage cleanup',
    'Prescribed pile burns',
    'Selective tree work & deadfall',
    'Food plot prep & refresh',
    'Seasonal & one-time visits',
  ],
  localContext: [
    {
      heading: 'Canals, bayous & drainage',
      body: "Terrebonne is bayou and marsh country, and the water has to move. Opening up canals, bayous, servitudes, and right-of-ways that grew over and stopped draining is work Tim takes pride in — we pull the debris by boat or on foot, boots and chainsaws, until a ditch that was unnavigable runs patent again.",
    },
    {
      heading: 'Marsh-edge & upland both',
      body: 'Houma-area recreational ground runs from upland woods down to marsh-edge — Bayou Black, Dularge, Montegut, Chauvin. We work both: the brushy upland tracts that need cutting and the wet-ground sections that need drainage and access cleared.',
    },
    {
      heading: 'Hunter-minded crew',
      body: 'Tim hunts and works rural ground himself, so we manage your land like an owner does — shooting lanes that actually clear, blind access that works, drainage that does not trap a truck come November.',
    },
    {
      heading: 'Equipment for soft ground',
      body: 'Some Terrebonne tracts are a slog to get into. Our trucks, trailers, and track equipment are sized for the soft ground and back-road access that defeats lighter setups — and we wait for the right window instead of leaving ruts.',
    },
  ],
  faqs: [
    {
      q: 'Do you clear canals, bayous, and right-of-ways around Houma?',
      a: "Yes — it's some of our favorite work, and Terrebonne is full of it. We open up canals, bayous, servitudes, and right-of-ways that have grown over and stopped draining, pulling the debris by boat or on foot with chainsaws until the water runs and a ditch that was unnavigable is patent again.",
    },
    {
      q: 'Do you go down to Bayou Black, Dularge, or Montegut?',
      a: 'Yes. We work the full Terrebonne footprint — Houma, Bayou Cane, Gray, Bayou Black, Dularge, Montegut, Chauvin. Anything within reasonable mobilization from our Thibodaux HQ is on the menu.',
    },
    {
      q: 'Can you bush-hog and clear a hunting lease?',
      a: 'Yes — bush-hogging, brush and small-tree clearing, shooting-lane cutting, and food-plot prep on hunting ground and leases across Terrebonne. Seasonal schedule or one-time reset, your call.',
    },
    {
      q: 'Do you handle wet ground without tearing it up?',
      a: 'Track-driven equipment, conservative ground pressure, and we do not go when the ground says no. Marsh-edge work waits for the right window — we tell you when, instead of leaving ruts.',
    },
    {
      q: 'Are you insured for work on hunting clubs and leases?',
      a: 'Yes. We carry liability and equipment coverage and can provide a certificate for hunting-club managers, lease holders, or landowners who need it before work starts.',
    },
  ],
  photos: [
    { src: '/images/land-canal-cypress.jpg', alt: 'A cypress-lined canal cleared and opened back up near Houma' },
    { src: '/images/land-ditch-clearing.jpg', alt: 'TIMCO clearing a ditch bank to open up drainage in Terrebonne Parish' },
    { src: '/images/land-burn-day.jpg', alt: 'Controlled brush burn on recreational land near Houma' },
    { src: '/images/land-burn-night.jpg', alt: 'Campfire at dusk among cypress on Terrebonne-area land' },
    { src: '/images/land-field-road.jpg', alt: 'Lush managed field with a turn-row outside Houma' },
    { src: '/images/land-pasture.jpg', alt: 'Open rural pasture managed by TIMCO in Terrebonne Parish' },
    { src: '/images/land-deer-stand.jpg', alt: 'Wooded canal with footbridge and feeders on managed Terrebonne land' },
    { src: '/images/land-bayou-dock-1.jpg', alt: 'Concrete dock and piling on a bayou near Houma recreational land' },
  ],
  relatedCityPages: [
    { href: '/services/recreational-land-management-thibodaux-la', label: 'Recreational Land Management in Thibodaux' },
    { href: '/services/recreational-land-management-raceland-la', label: 'Recreational Land Management in Raceland' },
  ],
}

export const metadata: Metadata = buildMetadata(data)

export default function Page() {
  return <CityServiceLayout {...data} />
}
