import type { Metadata } from 'next'
import { CityServiceLayout, buildMetadata, type CityPageData } from '@/components/CityServicePage'

const data: CityPageData = {
  service: 'Recreational Land Management',
  serviceSlug: 'recreational-land-management',
  city: 'Houma',
  citySlug: 'houma',
  parish: 'Terrebonne Parish',
  parentServiceHref: '/services/recreational-land-management',
  hero: {
    image: '/images/land-cypress.jpg',
    imageAlt: 'Cypress trees at a pond on a Terrebonne hunting property managed by TIMCO',
  },
  intro:
    'TIMCO manages hunting properties and recreational acreage across Terrebonne Parish out of our Thibodaux HQ — cutting, drainage, brush burns, tree clearing, food plot prep. Built for Houma landowners who want their land kept ready, not rescued.',
  highlights: [
    'Bush-hogging on big acreage',
    'Wet-ground drainage cleanup',
    'Marsh-edge brush clearing',
    'Prescribed pile burns',
    'Food plot prep & refresh',
    'Shooting lane maintenance',
    'Access road grading',
    'Deadfall & selective tree removal',
  ],
  localContext: [
    {
      heading: 'Terrebonne marsh & woods',
      body: 'Terrebonne recreational property runs from upland woods to marsh-edge. We work both — the brushy upland tracts that need cutting and the wet-ground sections that need drainage and access work.',
    },
    {
      heading: 'Hunter-minded crew',
      body: 'TIMCO also runs a Labrador retriever kennel out of the same HQ, so we think about your hunting property the way an owner does — shooting lanes that actually clear, blind access that actually works, food plots that actually feed.',
    },
    {
      heading: 'Equipment for Houma access',
      body: "Some Terrebonne properties are a slog to get into. Our trucks, trailers, and Bobcat track equipment are sized for the soft ground and back-road access that defeats lighter setups.",
    },
    {
      heading: 'Storm-cycle work',
      body: 'Houma gets storms. After a hurricane, hunting properties pile up with deadfall and blocked drainage. We do post-storm callouts so your land is hunt-ready instead of waiting on next year.',
    },
  ],
  faqs: [
    {
      q: 'Do you go down to Bayou Black or Dularge for property management?',
      a: 'Yes. We work the full Terrebonne footprint — Houma, Bayou Cane, Bayou Black, Dularge, Schriever. Anything within reasonable mobilization from our Thibodaux HQ is on the menu.',
    },
    {
      q: 'How do you handle wet ground without tearing it up?',
      a: 'Track-driven equipment, conservative ground pressure, and we don\'t go when the ground says no. Bayou-edge work waits for the right window — we tell you when, instead of leaving ruts.',
    },
    {
      q: 'Can you manage a duck-hunting property year-round?',
      a: 'Yes — off-season clearing, food plot work, blind access maintenance, summer cuts, pre-season burns. We can set up a seasonal schedule that gets the property hunt-ready by opening.',
    },
    {
      q: 'Do you do prescribed burns on Terrebonne properties?',
      a: 'Pile burns and controlled brush burns, yes — on appropriate days with right-sized equipment on site. We don\'t do large prescribed burns that require a certified burn boss for big tracts of timber.',
    },
    {
      q: 'Are you insured for work on private hunting clubs and leases?',
      a: 'Yes. We carry liability and equipment coverage. We can provide a COI for hunting club managers, lease holders, or commercial landowners who need it before work starts.',
    },
  ],
  photos: [
    { src: '/images/land-cypress.jpg', alt: 'Cypress swamp with cleared duck blind setup in Terrebonne' },
    { src: '/images/land-deer-stand.jpg', alt: 'Deer stand by pond on Terrebonne recreational property' },
    { src: '/images/land-bayou-dock-1.jpg', alt: 'Boat dock on bayou serving a Houma-area hunting property' },
    { src: '/images/land-bayou-dock-2.jpg', alt: 'Boat tied at dock under cypress on managed Terrebonne acreage' },
    { src: '/images/land-camp-dock.jpg', alt: 'Hunting camp boat dock on a Terrebonne property managed by TIMCO' },
    { src: '/images/land-burn-day.jpg', alt: 'Controlled pile burn on Terrebonne recreational land' },
    { src: '/images/land-pine.jpg', alt: 'Lone pine in vast pasture on a Houma-area property' },
    { src: '/images/land-pasture.jpg', alt: 'Open managed pasture on a Terrebonne recreational property' },
    { src: '/images/land-hero.jpg', alt: 'Barn with horses on a managed Houma-area property' },
  ],
  relatedCityPages: [
    { href: '/services/recreational-land-management-thibodaux-la', label: 'Land Management in Thibodaux' },
    { href: '/services/property-restoration-houma-la', label: 'Property Restoration in Houma' },
  ],
}

export const metadata: Metadata = buildMetadata(data)

export default function Page() {
  return <CityServiceLayout {...data} />
}
