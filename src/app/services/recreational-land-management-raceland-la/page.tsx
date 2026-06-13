import type { Metadata } from 'next'
import { CityServiceLayout, buildMetadata, type CityPageData } from '@/components/CityServicePage'

const data: CityPageData = {
  service: 'Recreational Land Management',
  serviceSlug: 'recreational-land-management',
  city: 'Raceland',
  citySlug: 'raceland',
  parish: 'Lafourche Parish',
  parentServiceHref: '/services/recreational-land-management',
  metaTitle: 'Bush Hogging & Recreational Land Management, Raceland',
  metaDescription:
    'Bush hogging, land clearing, drainage, and canal & right-of-way clearing for Raceland hunting ground and rural acreage along Bayou Lafourche. Insured.',
  hero: {
    image: '/images/land-pine.jpg',
    imageAlt: 'Lone pine on managed recreational acreage near Raceland, Louisiana',
  },
  intro:
    'TIMCO reclaims and manages hunting ground and rural acreage around Raceland and down Bayou Lafourche — bush hogging, land clearing, drainage, prescribed burns, and opening up canals and right-of-ways so they drain again. A short run from our Hwy 308 headquarters in Thibodaux.',
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
      heading: 'Down Bayou Lafourche',
      body: 'Raceland sits in the heart of Lafourche sugarcane country, strung along Bayou Lafourche between Thibodaux and the river. We work the cane-field edges, rural lots, and back acreage up and down the bayou on a schedule that holds.',
    },
    {
      heading: 'Canals & drainage',
      body: "Opening up canals, ditches, servitudes, and right-of-ways that grew over and stopped draining is work Tim takes pride in. We pull the debris by boat or on foot, boots and chainsaws, until a Raceland-area ditch that was unnavigable runs patent and drains again.",
    },
    {
      heading: 'Minutes from the HQ',
      body: 'Raceland is a quick run from our Hwy 308 yard in Thibodaux — close enough for fast quotes, reliable seasonal routes, and one-time resets without inflated mobilization charges to get equipment onto your tract.',
    },
    {
      heading: 'Hunter-minded crew',
      body: 'Tim hunts and works rural ground himself, so we manage your land like an owner does — shooting lanes that actually clear, food plots that feed, drainage that keeps a truck out of the mud come season.',
    },
  ],
  faqs: [
    {
      q: 'Do you bush-hog rural lots and acreage around Raceland?',
      a: 'Yes — bush-hogging, field cutting, and brush clearing on rural lots, cane-field edges, and back acreage around Raceland and down Bayou Lafourche. Seasonal schedule or a one-time reset, your call.',
    },
    {
      q: 'Do you clear canals, ditches, and right-of-ways?',
      a: "Yes, it's some of our favorite work. We open up canals, ditches, servitudes, and right-of-ways that have grown over and stopped draining, pulling debris by boat or on foot with chainsaws until the water runs and the ditch is patent again.",
    },
    {
      q: 'Can you handle land clearing and forestry mulching?',
      a: 'Yes — clearing overgrown and wooded tracts, brush and small-tree removal, and mulching to bring Raceland-area acreage back to usable. We bring the equipment and the crew for the heavy reclaim jobs.',
    },
    {
      q: 'Do you do prescribed burns?',
      a: 'Pile burns and controlled brush burns, on appropriate days (low wind, no burn ban) with the right equipment on site. We handle resetting brushy or overgrown sections that piled up over the year.',
    },
    {
      q: 'Are you insured?',
      a: 'Yes. We carry liability and equipment coverage and can provide a certificate for landowners, lease holders, or hunting clubs that need it before work starts.',
    },
  ],
  photos: [
    { src: '/images/land-canal-cypress.jpg', alt: 'A cypress-lined canal cleared and opened back up near Raceland' },
    { src: '/images/land-ditch-clearing.jpg', alt: 'TIMCO clearing a ditch bank to open up drainage near Raceland' },
    { src: '/images/land-burn-day.jpg', alt: 'Controlled brush burn on recreational land near Raceland' },
    { src: '/images/land-burn-night.jpg', alt: 'Campfire at dusk among cypress on Raceland-area land' },
    { src: '/images/land-field-road.jpg', alt: 'Lush managed field with a turn-row in Lafourche sugarcane country' },
    { src: '/images/land-pasture.jpg', alt: 'Open rural pasture managed by TIMCO near Raceland' },
    { src: '/images/land-deer-stand.jpg', alt: 'Wooded canal with footbridge and feeders on managed Lafourche land' },
    { src: '/images/land-bayou-dock-1.jpg', alt: 'Concrete dock and piling on a bayou near Raceland recreational land' },
  ],
  relatedCityPages: [
    { href: '/services/recreational-land-management-thibodaux-la', label: 'Recreational Land Management in Thibodaux' },
    { href: '/services/residential-land-management-raceland-la', label: 'Residential Land Management in Raceland' },
  ],
}

export const metadata: Metadata = buildMetadata(data)

export default function Page() {
  return <CityServiceLayout {...data} />
}
