import type { Metadata } from 'next'
import { CityServiceLayout, buildMetadata, type CityPageData } from '@/components/CityServicePage'

const data: CityPageData = {
  service: 'Property Restoration',
  serviceSlug: 'property-restoration',
  city: 'Thibodaux',
  citySlug: 'thibodaux',
  parish: 'Lafourche Parish',
  parentServiceHref: '/services/property-restoration',
  hero: {
    image: '/images/restoration-after-1.jpg',
    imageAlt: 'Property restored to manicured residential lawn in Thibodaux, Louisiana by TIMCO',
  },
  intro:
    'TIMCO is a Thibodaux-based property restoration crew working out of 619 Hwy 308. Overgrown residential lots, neglected yards, post-tenant commercial cleanups — we clear it, haul it, and leave it usable. (Raw rural acreage is handled by our land restoration crew.)',
  highlights: [
    'Brush clearing & weed eating',
    'Tree trimming & selective removal',
    'Chemical spraying (weed kill / regrowth)',
    'Debris & trash haul-off',
    'Bobcat clearing on tight access',
    'Drainage cleanup & reshaping',
    'Site grading & final sweep',
    'HOA / commercial certificates available',
  ],
  localContext: [
    {
      heading: 'Native to Thibodaux',
      body: 'TIMCO is headquartered on Hwy 308 in Thibodaux. We work this town and Lafourche Parish every week — we know the neighborhoods from downtown to the back end of Schriever Highway.',
    },
    {
      heading: 'Sized for in-town lots',
      body: 'Smaller Thibodaux residential lots, tighter side-yard access, mature oaks overhead — our zero-turn and Bobcat-track equipment is sized to actually fit the properties around here.',
    },
    {
      heading: 'After Bayou Lafourche weather',
      body: 'After hurricane debris or a wet spring overgrowth, Thibodaux properties pile up fast. We do storm-recovery callouts for residents who need a lot back to usable in days, not months.',
    },
    {
      heading: 'Quick mobilization',
      body: "We're rarely more than 15 minutes from any address in Thibodaux. That means no inflated trip charges and same-week walkthroughs on most quotes.",
    },
  ],
  faqs: [
    {
      q: 'Do you work residential properties in Thibodaux, or just commercial?',
      a: 'Most of our Thibodaux work is residential — overgrown yards, neglected lots, post-tenant cleanups, estate properties. We also handle apartment complexes and commercial sites around town.',
    },
    {
      q: 'How fast can you start a restoration job in Thibodaux?',
      a: "Most Thibodaux walkthroughs happen within a business day of you reaching out. Once a quote is approved, we typically start within one to two weeks depending on the season and scope.",
    },
    {
      q: 'Do you haul off the debris too, or do I need a separate dumpster?',
      a: "Haul-off is included in most TIMCO restoration quotes. You don't need to coordinate a separate dumpster rental — we leave the property clean.",
    },
    {
      q: 'What if my lot is too overgrown for a standard mower?',
      a: 'That\'s the job we specialize in. Our Bobcat zero-turn and brush equipment handle the lots that defeat residential equipment. If a regular landscaper has turned it down, that\'s usually our work.',
    },
    {
      q: 'Are you insured for work on commercial Thibodaux properties?',
      a: "Yes. TIMCO carries liability and equipment coverage; we can produce a certificate for property managers, HOAs, and commercial owners who need one on file before work starts.",
    },
  ],
  photos: [
    { src: '/images/restoration-before-1.jpg', alt: 'Overgrown residential lot in Thibodaux before TIMCO restoration' },
    { src: '/images/restoration-after-1.jpg', alt: 'Cleared residential lot in Thibodaux after TIMCO restoration' },
    { src: '/images/restoration-bobcat-1.jpg', alt: 'TIMCO Bobcat clearing tall brush in Thibodaux' },
    { src: '/images/restoration-bobcat-2.jpg', alt: 'TIMCO Bobcat parked in cleared field outside Thibodaux' },
    { src: '/images/restoration-farmhouse.jpg', alt: 'TIMCO crew cleaning up an old farmhouse property near Thibodaux' },
    { src: '/images/comm-after-white-home.jpg', alt: 'Restored residential property with a freshly mowed lawn in Thibodaux' },
  ],
  relatedCityPages: [
    { href: '/services/property-restoration-houma-la', label: 'Property Restoration in Houma' },
    { href: '/services/recreational-land-management-thibodaux-la', label: 'Land Management in Thibodaux' },
    { href: '/services/recreational-land-management-houma-la', label: 'Land Management in Houma' },
  ],
}

export const metadata: Metadata = buildMetadata(data)

export default function Page() {
  return <CityServiceLayout {...data} />
}
