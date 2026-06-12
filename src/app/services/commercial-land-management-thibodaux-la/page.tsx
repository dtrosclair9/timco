import type { Metadata } from 'next'
import { CityServiceLayout, buildMetadata, type CityPageData } from '@/components/CityServicePage'

const data: CityPageData = {
  service: 'Commercial Land Management',
  serviceSlug: 'commercial-land-management',
  city: 'Thibodaux',
  citySlug: 'thibodaux',
  parish: 'Lafourche Parish',
  parentServiceHref: '/services/commercial-land-management',
  hero: {
    image: '/images/comm-bobcat-apartments.jpg',
    imageAlt: 'TIMCO Bobcat mowing apartment grounds — commercial land management in Thibodaux, Louisiana',
  },
  intro:
    'TIMCO restores and maintains commercial grounds around Thibodaux and Lafourche Parish — offices, apartment complexes, and HOA common areas. A one-time cleanup, a recurring maintenance schedule, or both, run out of our 619 Hwy 308 headquarters.',
  highlights: [
    'One-time cleanup & clearing',
    'Grass cutting / mowing',
    'Weed eating & edging',
    'Chemical spraying (fence lines, hardscape)',
    'Mulching & bed maintenance',
    'Tree trimming for signage & sightlines',
    'Storm debris cleanup',
    'Trash & debris haul-off',
  ],
  localContext: [
    {
      heading: 'Local to Thibodaux',
      body: 'Our HQ on Hwy 308 keeps mobilization fast across Thibodaux and Lafourche Parish. Quick to add an emergency visit after a storm, no inflated trip charges to get a crew to your site.',
    },
    {
      heading: 'One schedule, one invoice',
      body: "Offices, apartment complexes, HOA entrances, retention areas — kept presentable on a predictable schedule with a single point of contact. No juggling separate crews for clearing versus mowing.",
    },
    {
      heading: 'Reset, then maintain',
      body: 'Take on a site that needs a one-time reclaim and roll straight into recurring care. Frontage and common areas stay sharp year-round instead of falling behind between vendors.',
    },
    {
      heading: 'Insured, COI on file',
      body: 'Liability and equipment coverage current, with a certificate of insurance available for managers, boards, and commercial owners that require one before work starts.',
    },
  ],
  faqs: [
    {
      q: 'Do you handle HOA common areas around Thibodaux?',
      a: 'Yes — subdivision entrances, medians, retention areas, and shared grounds across Thibodaux and Lafourche Parish, kept presentable for residents and boards on a recurring schedule.',
    },
    {
      q: 'Can you do a one-time cleanup, or only recurring?',
      a: 'Both. We take on a site that needs a reset — clearing, debris, overgrowth — and can roll straight into a recurring plan, or just do the one-time job. Your call.',
    },
    {
      q: 'Do you carry insurance and provide a COI?',
      a: 'Yes. We carry liability and equipment coverage and provide a certificate of insurance on request for property managers, HOA boards, and commercial owners.',
    },
    {
      q: 'How do you handle storm cleanup?',
      a: 'Hurricane debris, downed branches, and blocked drainage — recurring accounts get priority callouts after weather events because we already know the grounds.',
    },
    {
      q: 'Do you do installs or landscape design?',
      a: "No — we do clearing, lawn care, and grounds maintenance, not hardscape installs or new landscape design. When we recommend a service, it's because the site needs it.",
    },
  ],
  photos: [
    { src: '/images/comm-bobcat-apartments.jpg', alt: 'TIMCO Bobcat mowing apartment grounds in Thibodaux' },
    { src: '/images/comm-twelve-oaks.jpg', alt: 'HOA subdivision entrance maintained by TIMCO near Thibodaux' },
    { src: '/images/comm-antebellum.jpg', alt: 'Large commercial building under oaks maintained by TIMCO in Lafourche Parish' },
    { src: '/images/comm-weed-eating.jpg', alt: 'TIMCO crew weed eating along a commercial grounds edge in Thibodaux' },
    { src: '/images/comm-tree-work.jpg', alt: 'TIMCO truck loaded with cut tree branches from a commercial job' },
    { src: '/images/comm-truck-field.jpg', alt: 'TIMCO truck staged at a commercial grounds maintenance job near Thibodaux' },
  ],
  relatedCityPages: [
    { href: '/services/residential-land-management-thibodaux-la', label: 'Residential Land Management in Thibodaux' },
    { href: '/services/recreational-land-management-thibodaux-la', label: 'Recreational Land Management in Thibodaux' },
  ],
}

export const metadata: Metadata = buildMetadata(data)

export default function Page() {
  return <CityServiceLayout {...data} />
}
