import type { Metadata } from 'next'
import { CityServiceLayout, buildMetadata, type CityPageData } from '@/components/CityServicePage'

const data: CityPageData = {
  service: 'Residential Land Management',
  serviceSlug: 'residential-land-management',
  city: 'Houma',
  citySlug: 'houma',
  parish: 'Terrebonne Parish',
  parentServiceHref: '/services/residential-land-management',
  metaTitle: 'Residential Land Management & Land Clearing, Houma',
  metaDescription:
    'Land clearing, lawn care, and cleanup for Houma homes — overgrown lots reclaimed, then grounds kept on a mowing schedule across Terrebonne Parish. Insured.',
  hero: {
    image: '/images/res-home-modern.jpg',
    imageAlt: 'Home with a manicured lawn after TIMCO residential land management in Houma, Louisiana',
  },
  intro:
    'TIMCO clears overgrown yards and lots around Houma and Terrebonne Parish, hauls the debris, then keeps your lawn and grounds on a schedule. A one-time reclaim, a recurring plan, or both — run from our 619 Hwy 308 headquarters in nearby Thibodaux.',
  highlights: [
    'Overgrown yard & lot clearing',
    'Brush & small tree removal',
    'Debris & trash haul-off',
    'Grass cutting / mowing',
    'Weed eating & edging',
    'Chemical spraying (weed kill, beds)',
    'Storm & hurricane debris cleanup',
    'Weekly, bi-weekly, or monthly visits',
  ],
  localContext: [
    {
      heading: 'All across Terrebonne',
      body: 'We work Houma and the communities around it — Bayou Cane, Gray, Bourg, Montegut, Bayou Black, Dularge. From in-town lots to ground out toward the marsh, we bring the right equipment and a schedule that holds.',
    },
    {
      heading: 'Storm cleanup, handled',
      body: 'Houma takes the brunt of the weather. After a hurricane or a hard blow, yards pile up with downed limbs and debris fast — we do storm-recovery callouts to get a lot back to usable in days, not months.',
    },
    {
      heading: 'Reclaim, then maintain',
      body: 'A yard that got away over a wet season gets a one-time reclaim — brush, debris, small trees — and then a recurring plan so it never falls behind again. One crew, one quote, no juggling vendors.',
    },
    {
      heading: 'Quick from the Thibodaux HQ',
      body: 'Houma is a short run from our Hwy 308 yard. Close enough to add an emergency visit after a storm and to keep recurring routes reliable, without inflated trip charges to get a crew to your place.',
    },
  ],
  faqs: [
    {
      q: 'Do you clear overgrown yards in Houma, or just mow?',
      a: 'Both. We reclaim a Houma yard or lot that has gotten away — heavy brush, debris, small trees — and then keep it up on a recurring schedule. Book the reset, the ongoing care, or both.',
    },
    {
      q: 'Do you handle hurricane and storm debris?',
      a: 'Yes. After a storm we prioritize callouts across Terrebonne — downed limbs, blown-in debris, blocked drainage — to get your yard cleared and usable quickly. Recurring accounts get first priority.',
    },
    {
      q: 'How far into Terrebonne do you go?',
      a: 'The full Houma footprint — Bayou Cane, Gray, Bourg, Montegut, Bayou Black, Dularge, and out toward the bayou-side communities. If it is within reasonable mobilization from our Thibodaux HQ, it is on the table.',
    },
    {
      q: 'Is there a long-term contract?',
      a: 'No. Residential plans are month to month — pause for winter, ramp up for summer, cancel anytime. You stay because the work is good, not because you are locked in.',
    },
    {
      q: 'Are you insured?',
      a: 'Yes. TIMCO carries liability and equipment coverage and can produce a certificate on request. If something goes wrong on your land, you are covered.',
    },
  ],
  photos: [
    { src: '/images/res-mower-home.jpg', alt: 'TIMCO zero-turn mower on a residential lawn in Houma' },
    { src: '/images/comm-after-truck.jpg', alt: 'Maintained Houma home with a cleared yard and TIMCO truck' },
    { src: '/images/comm-2story-truck.jpg', alt: 'Two-story Houma home with a manicured lawn maintained by TIMCO' },
    { src: '/images/comm-after-mobile.jpg', alt: 'Single-story home with a neatly mowed lawn in Terrebonne Parish' },
    { src: '/images/comm-weed-eating.jpg', alt: 'TIMCO crew weed eating a home edge near Houma' },
    { src: '/images/comm-tree-work.jpg', alt: 'TIMCO truck hauling cut branches from a Houma-area job' },
  ],
  relatedCityPages: [
    { href: '/services/residential-land-management-thibodaux-la', label: 'Residential Land Management in Thibodaux' },
    { href: '/services/recreational-land-management-houma-la', label: 'Recreational Land Management in Houma' },
  ],
}

export const metadata: Metadata = buildMetadata(data)

export default function Page() {
  return <CityServiceLayout {...data} />
}
