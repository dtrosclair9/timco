import type { Metadata } from 'next'
import { CityServiceLayout, buildMetadata, type CityPageData } from '@/components/CityServicePage'

const data: CityPageData = {
  service: 'Residential Land Management',
  serviceSlug: 'residential-land-management',
  city: 'Thibodaux',
  citySlug: 'thibodaux',
  parish: 'Lafourche Parish',
  parentServiceHref: '/services/residential-land-management',
  metaTitle: 'Residential Land Management & Land Clearing, Thibodaux',
  metaDescription:
    'Land clearing, lawn care, and cleanup for Thibodaux homes — overgrown lots reclaimed, then grounds kept on a schedule across Lafourche Parish. Insured.',
  hero: {
    image: '/images/comm-after-white-home.jpg',
    imageAlt: 'Home with a freshly mowed lawn after TIMCO residential land management in Thibodaux, Louisiana',
  },
  intro:
    'TIMCO restores and maintains residential land around Thibodaux and Lafourche Parish — clearing overgrown yards and lots, then keeping them up. A one-time reset, a recurring lawn and grounds plan, or both, out of our 619 Hwy 308 headquarters.',
  highlights: [
    'Overgrown yard & lot clearing',
    'Brush & small tree removal',
    'Debris & trash haul-off',
    'Grass cutting / mowing',
    'Weed eating & edging',
    'Chemical spraying (weed kill, beds)',
    'Tree & shrub trimming',
    'Weekly, bi-weekly, or monthly visits',
  ],
  localContext: [
    {
      heading: 'Native to Thibodaux',
      body: 'Our HQ is on Hwy 308 in Thibodaux. We work this town and Lafourche Parish every week — neighborhoods from downtown out to the back end of Schriever Highway. Quick to start, easy to add to the route.',
    },
    {
      heading: 'Sized for in-town lots',
      body: "Smaller Thibodaux lots, tight side-yard access, mature oaks overhead — our zero-turn and Bobcat-track equipment is sized to actually fit the homes around here, then come back on a schedule.",
    },
    {
      heading: 'Reset, then keep it',
      body: "A yard that got away over a wet spring or an empty season gets a one-time reclaim — brush, debris, the works — and then a recurring plan so it never falls behind again. One crew, one quote.",
    },
    {
      heading: 'Away-from-home friendly',
      body: 'Out of town, a second home, or just a busy stretch — we keep your place looking lived-in and maintained across Thibodaux and the surrounding parishes without you coordinating a thing.',
    },
  ],
  faqs: [
    {
      q: 'Do you clear overgrown yards, or just mow?',
      a: 'Both. We reclaim a yard or lot that has gotten away — heavy brush, debris, small trees — and then keep it up on a recurring schedule. You can book the reset, the ongoing care, or both together.',
    },
    {
      q: 'How fast can you start in Thibodaux?',
      a: 'Most Thibodaux walkthroughs happen within a business day of you reaching out. Recurring routes start quickly; a one-time reclaim is usually scheduled within one to two weeks depending on the season and scope.',
    },
    {
      q: 'Do I need a long-term contract?',
      a: "No. Residential plans are month to month. Stay because the work is good — pause for winter, ramp up for summer, cancel anytime. No lock-in.",
    },
    {
      q: 'Do you haul off the debris too?',
      a: "Haul-off is included in most reclaim quotes — you don't coordinate a separate dumpster. We leave the place clean.",
    },
    {
      q: 'Are you insured?',
      a: 'Yes. TIMCO carries liability and equipment coverage. If something goes wrong on your land, you are covered — we can produce a certificate on request.',
    },
  ],
  photos: [
    { src: '/images/res-mower-home.jpg', alt: 'TIMCO zero-turn mower on a residential lawn in Thibodaux' },
    { src: '/images/comm-after-truck.jpg', alt: 'Maintained home with a cleared yard and TIMCO truck in Lafourche Parish' },
    { src: '/images/comm-2story-truck.jpg', alt: 'Two-story Thibodaux home with a manicured lawn maintained by TIMCO' },
    { src: '/images/comm-after-mobile.jpg', alt: 'Single-story home with a neatly mowed lawn in Thibodaux' },
    { src: '/images/comm-weed-eating.jpg', alt: 'TIMCO crew weed eating a home edge in Thibodaux' },
    { src: '/images/comm-tree-work.jpg', alt: 'TIMCO truck hauling cut branches from a residential job near Thibodaux' },
  ],
  relatedCityPages: [
    { href: '/services/commercial-land-management-thibodaux-la', label: 'Commercial Land Management in Thibodaux' },
    { href: '/services/recreational-land-management-thibodaux-la', label: 'Recreational Land Management in Thibodaux' },
  ],
}

export const metadata: Metadata = buildMetadata(data)

export default function Page() {
  return <CityServiceLayout {...data} />
}
