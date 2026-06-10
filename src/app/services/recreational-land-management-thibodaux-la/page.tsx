import type { Metadata } from 'next'
import { CityServiceLayout, buildMetadata, type CityPageData } from '@/components/CityServicePage'

const data: CityPageData = {
  service: 'Recreational Land Management',
  serviceSlug: 'recreational-land-management',
  city: 'Thibodaux',
  citySlug: 'thibodaux',
  parish: 'Lafourche Parish',
  parentServiceHref: '/services/recreational-land-management',
  hero: {
    image: '/images/land-pine.jpg',
    imageAlt: 'Lone pine in vast green pasture on managed recreational acreage outside Thibodaux',
  },
  intro:
    'TIMCO manages recreational acreage around Thibodaux and across Lafourche Parish — cutting, spraying, drainage, prescribed burns, tree clearing. Built for hunting properties, weekend retreats, and rural landowners who want their land kept right.',
  highlights: [
    'Bush-hogging & field cutting',
    'Chemical application (food plots, fence lines)',
    'Brush & small tree clearing',
    'Drainage cleanup & reshaping',
    'Prescribed pile burns',
    'Selective tree work & deadfall',
    'Access road grading',
    'Seasonal & one-time visits',
  ],
  localContext: [
    {
      heading: 'Hunter-minded crew',
      body: "TIMCO also runs a Labrador retriever kennel out of the same HQ, so we think about rural ground the way an owner does — shooting lanes that actually clear, fields that hold cover, drainage that doesn't trap a truck come November.",
    },
    {
      heading: 'Lafourche-area access',
      body: 'A lot of Thibodaux-area recreational land sits down dirt roads, behind locked gates, or off back levees. We have the right trucks and trailers to get the equipment onto properties that other vendors skip.',
    },
    {
      heading: 'Drainage in flat country',
      body: 'Lafourche is flat. Standing water is the real problem on most Thibodaux-area rural property. We re-cut ditches, clear culverts, and shape sheet flow so your land actually drains after a heavy rain.',
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
      a: 'Both. We set up seasonal schedules for landowners who want regular cutting, spraying, and access maintenance. Or one-time resets to bring back a property that got away.',
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
    { src: '/images/land-hero.jpg', alt: 'Rustic barn with horses on managed Lafourche Parish acreage' },
    { src: '/images/land-pine.jpg', alt: 'Lone pine in pasture on TIMCO-managed Thibodaux-area land' },
    { src: '/images/land-deer-stand.jpg', alt: 'Deer stand by pond on managed Lafourche recreational property' },
    { src: '/images/land-burn-day.jpg', alt: 'Controlled brush pile burn near Thibodaux for land management' },
    { src: '/images/land-burn-night.jpg', alt: 'Nighttime brush pile burn on Thibodaux-area land' },
    { src: '/images/land-cypress.jpg', alt: 'Cypress swamp with cleared duck blind setup in Lafourche' },
    { src: '/images/land-bayou-dock-1.jpg', alt: 'Boat dock on bayou near Thibodaux recreational property' },
    { src: '/images/land-camp-dock.jpg', alt: 'TIMCO hunting camp boat dock in Lafourche Parish' },
    { src: '/images/land-pasture.jpg', alt: 'Open rural pasture managed by TIMCO outside Thibodaux' },
  ],
  relatedCityPages: [
    { href: '/services/recreational-land-management-houma-la', label: 'Land Management in Houma' },
    { href: '/services/property-restoration-thibodaux-la', label: 'Property Restoration in Thibodaux' },
    { href: '/services/retriever-training-thibodaux-la', label: 'Retriever Training in Thibodaux' },
  ],
}

export const metadata: Metadata = buildMetadata(data)

export default function Page() {
  return <CityServiceLayout {...data} />
}
