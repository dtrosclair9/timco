import type { Metadata } from 'next'
import { CityServiceLayout, buildMetadata, type CityPageData } from '@/components/CityServicePage'

const data: CityPageData = {
  service: 'Commercial Land Management',
  serviceSlug: 'commercial-land-management',
  city: 'Houma',
  citySlug: 'houma',
  parish: 'Terrebonne Parish',
  parentServiceHref: '/services/commercial-land-management',
  metaTitle: 'Commercial Land Management & Grounds Care, Houma',
  metaDescription:
    'Grounds maintenance and cleanup for Houma offices, apartments, and HOAs — clearing, mowing, reliable schedule across Terrebonne Parish. Insured.',
  hero: {
    image: '/images/comm-bobcat-apartments.jpg',
    imageAlt: 'TIMCO Bobcat mowing apartment grounds — commercial land management in Houma, Louisiana',
  },
  intro:
    'TIMCO handles commercial grounds maintenance and cleanup across Houma and Terrebonne Parish — offices, apartment complexes, and HOA common areas. A one-time reset, a recurring schedule, or both, run from our 619 Hwy 308 headquarters in nearby Thibodaux.',
  highlights: [
    'One-time cleanup & clearing',
    'Grass cutting / mowing',
    'Weed eating & edging',
    'Chemical spraying (fence lines, hardscape)',
    'Mulching & bed maintenance',
    'Tree trimming for signage & sightlines',
    'Storm & hurricane debris cleanup',
    'Trash & debris haul-off',
  ],
  localContext: [
    {
      heading: 'Houma is the market',
      body: 'Terrebonne’s parish seat has the offices, apartment complexes, and retail frontage that need grounds kept presentable year-round. We mobilize across Houma, Bayou Cane, and Gray on a schedule that holds.',
    },
    {
      heading: 'One schedule, one invoice',
      body: 'Office parks, apartment grounds, HOA entrances, retention areas — kept up on a predictable schedule with a single point of contact. No juggling separate crews for clearing versus mowing.',
    },
    {
      heading: 'Storm-cycle priority',
      body: 'Houma gets hit. After a hurricane, recurring commercial accounts get first callout for debris, downed limbs, and blocked drainage, because we already know the grounds and can move fast.',
    },
    {
      heading: 'Insured, COI on file',
      body: 'Liability and equipment coverage current, with a certificate of insurance available for Terrebonne property managers, boards, and commercial owners that require one before work starts.',
    },
  ],
  faqs: [
    {
      q: 'Do you maintain HOA common areas around Houma?',
      a: 'Yes — subdivision entrances, medians, retention areas, and shared grounds across Houma and Terrebonne Parish, kept presentable for residents and boards on a recurring schedule.',
    },
    {
      q: 'Can you do a one-time cleanup, or only recurring?',
      a: 'Both. We take on a Houma site that needs a reset — clearing, debris, overgrowth — and can roll straight into a recurring plan, or just handle the one-time job. Your call.',
    },
    {
      q: 'How do you handle hurricane cleanup for commercial accounts?',
      a: 'Recurring accounts get priority callouts after a storm — debris, downed branches, blocked drainage cleared so the grounds are presentable and safe. We already know your site.',
    },
    {
      q: 'Do you provide a certificate of insurance?',
      a: 'Yes. We carry liability and equipment coverage and provide a COI on request for property managers, HOA boards, and commercial owners in Terrebonne Parish.',
    },
    {
      q: 'Do you do installs or landscape design?',
      a: 'No — we do clearing, lawn care, and grounds maintenance, not hardscape installs or new landscape design. When we recommend a service, it is because the site needs it.',
    },
  ],
  photos: [
    { src: '/images/comm-equipment-shed.jpg', alt: 'TIMCO Bobcat loader and trailer staged for a commercial job near Houma' },
    { src: '/images/comm-twelve-oaks.jpg', alt: 'HOA subdivision entrance maintained by TIMCO near Houma' },
    { src: '/images/comm-antebellum.jpg', alt: 'Large commercial building under oaks maintained by TIMCO in Terrebonne Parish' },
    { src: '/images/comm-weed-eating.jpg', alt: 'TIMCO crew weed eating along a commercial grounds edge in Houma' },
    { src: '/images/comm-tree-work.jpg', alt: 'TIMCO truck loaded with cut tree branches from a Houma commercial job' },
    { src: '/images/comm-truck-field.jpg', alt: 'TIMCO truck staged at a commercial grounds maintenance job near Houma' },
  ],
  relatedCityPages: [
    { href: '/services/commercial-land-management-thibodaux-la', label: 'Commercial Land Management in Thibodaux' },
    { href: '/services/residential-land-management-houma-la', label: 'Residential Land Management in Houma' },
  ],
}

export const metadata: Metadata = buildMetadata(data)

export default function Page() {
  return <CityServiceLayout {...data} />
}
