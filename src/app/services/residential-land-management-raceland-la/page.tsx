import type { Metadata } from 'next'
import { CityServiceLayout, buildMetadata, type CityPageData } from '@/components/CityServicePage'

const data: CityPageData = {
  service: 'Residential Land Management',
  serviceSlug: 'residential-land-management',
  city: 'Raceland',
  citySlug: 'raceland',
  parish: 'Lafourche Parish',
  parentServiceHref: '/services/residential-land-management',
  metaTitle: 'Residential Land Management & Land Clearing, Raceland',
  metaDescription:
    'Land clearing, lawn care, and cleanup for Raceland homes — overgrown lots reclaimed, then grounds kept on a mowing schedule down Bayou Lafourche. Insured.',
  hero: {
    image: '/images/res-home-modern.jpg',
    imageAlt: 'Home with a manicured lawn after TIMCO residential land management in Raceland, Louisiana',
  },
  intro:
    'TIMCO clears overgrown yards and lots around Raceland and down Bayou Lafourche, hauls the debris, then keeps your lawn and grounds on a schedule. A one-time reclaim, a recurring plan, or both — a short run from our 619 Hwy 308 headquarters in Thibodaux.',
  highlights: [
    'Overgrown yard & lot clearing',
    'Brush & small tree removal',
    'Debris & trash haul-off',
    'Grass cutting / mowing',
    'Weed eating & edging',
    'Chemical spraying (weed kill, beds)',
    'Storm & seasonal debris cleanup',
    'Weekly, bi-weekly, or monthly visits',
  ],
  localContext: [
    {
      heading: 'Raceland & down the bayou',
      body: 'We work Raceland and the communities along Bayou Lafourche — Lockport, Mathews, Gheens, Bayou Blue. Rural lots, cane-country yards, and in-town homes, kept up on a schedule that holds.',
    },
    {
      heading: 'Reclaim, then maintain',
      body: 'A yard that got away over a wet season gets a one-time reclaim — brush, debris, small trees — and then a recurring plan so it never falls behind again. One crew, one quote, no juggling vendors.',
    },
    {
      heading: 'Minutes from the HQ',
      body: 'Raceland is a quick run from our Hwy 308 yard in Thibodaux — fast quotes, reliable recurring routes, and easy storm callouts without inflated trip charges to get a crew to your place.',
    },
    {
      heading: 'Away-from-home friendly',
      body: 'A camp, a second place, or just a busy stretch — we keep your Raceland-area land looking lived-in and maintained across the parish without you coordinating a thing.',
    },
  ],
  faqs: [
    {
      q: 'Do you clear overgrown yards in Raceland, or just mow?',
      a: 'Both. We reclaim a Raceland yard or lot that has gotten away — heavy brush, debris, small trees — and then keep it up on a recurring schedule. Book the reset, the ongoing care, or both.',
    },
    {
      q: 'How far down the bayou do you go?',
      a: 'Raceland, Lockport, Mathews, Gheens, Bayou Blue, and the communities along Bayou Lafourche. If it is within reasonable mobilization from our Thibodaux HQ, it is on the table.',
    },
    {
      q: 'Do I need a long-term contract?',
      a: 'No. Residential plans are month to month — pause for winter, ramp up for summer, cancel anytime. You stay because the work is good, not because you are locked in.',
    },
    {
      q: 'Do you haul off the debris too?',
      a: 'Haul-off is included in most reclaim quotes — you do not coordinate a separate dumpster. We leave the place clean.',
    },
    {
      q: 'Are you insured?',
      a: 'Yes. TIMCO carries liability and equipment coverage and can produce a certificate on request. If something goes wrong on your land, you are covered.',
    },
  ],
  photos: [
    { src: '/images/res-mower-home.jpg', alt: 'TIMCO zero-turn mower on a residential lawn in Raceland' },
    { src: '/images/comm-after-truck.jpg', alt: 'Maintained Raceland home with a cleared yard and TIMCO truck' },
    { src: '/images/comm-2story-truck.jpg', alt: 'Two-story home with a manicured lawn maintained by TIMCO near Raceland' },
    { src: '/images/comm-after-mobile.jpg', alt: 'Single-story home with a neatly mowed lawn in Lafourche Parish' },
    { src: '/images/comm-weed-eating.jpg', alt: 'TIMCO crew weed eating a home edge near Raceland' },
    { src: '/images/comm-tree-work.jpg', alt: 'TIMCO truck hauling cut branches from a Raceland-area job' },
  ],
  relatedCityPages: [
    { href: '/services/residential-land-management-thibodaux-la', label: 'Residential Land Management in Thibodaux' },
    { href: '/services/recreational-land-management-raceland-la', label: 'Recreational Land Management in Raceland' },
  ],
}

export const metadata: Metadata = buildMetadata(data)

export default function Page() {
  return <CityServiceLayout {...data} />
}
