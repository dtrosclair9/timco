import type { Metadata } from 'next'
import { CityServiceLayout, buildMetadata, type CityPageData } from '@/components/CityServicePage'

const data: CityPageData = {
  service: 'Property Restoration',
  serviceSlug: 'property-restoration',
  city: 'Houma',
  citySlug: 'houma',
  parish: 'Terrebonne Parish',
  parentServiceHref: '/services/property-restoration',
  hero: {
    image: '/images/restoration-after-2.jpg',
    imageAlt: 'Rural property restored under dramatic sky after TIMCO clearing in Houma area',
  },
  intro:
    'TIMCO restores overgrown property in Houma and across Terrebonne Parish — residential lots, commercial sites, rural acreage. We come out of Thibodaux on Hwy 308, so we\'re on Houma jobs all week.',
  highlights: [
    'Residential lot clearing',
    'Commercial site restoration',
    'Rural acreage cleanup',
    'Tree work & brush removal',
    'Chemical regrowth control',
    'Full debris haul-off',
    'Bayou-edge drainage cleanup',
    'Insured · COI on request',
  ],
  localContext: [
    {
      heading: 'Thibodaux to Houma daily',
      body: "We're on Houma jobs constantly — about 20 minutes from our Hwy 308 HQ. No inflated mobilization, no week-long delays to get on site. Houma quotes get walked within a business day.",
    },
    {
      heading: 'Terrebonne acreage & wet ground',
      body: 'Houma-area properties run from in-town residential to deep Terrebonne rural acreage. We handle the wet-ground side too — drainage cuts, culvert clearing, sheet-flow reshaping where standing water is the real problem.',
    },
    {
      heading: 'Hurricane recovery work',
      body: "Terrebonne has been through it. Post-storm yards full of branches, displaced debris, downed limbs on commercial sites — TIMCO does fast turnaround on storm-recovery cleanups for Houma homeowners and property managers.",
    },
    {
      heading: 'Honest scope, no installs upsell',
      body: "We don't do construction or hardscape installs — so when we quote a Houma property, it's the actual restoration work, not a setup for a bigger sell. We tell you up front if the job isn't for us.",
    },
  ],
  faqs: [
    {
      q: 'Do you charge extra to come down to Houma from Thibodaux?',
      a: 'No special trip charge for Houma — we run jobs there every week and it\'s priced into our standard quotes. Mobilization for Houma is the same as a Thibodaux job.',
    },
    {
      q: 'Can you handle rural Terrebonne properties, not just Houma proper?',
      a: 'Yes. We work rural acreage all over Terrebonne — Schriever, Gray, Bayou Cane, out toward Bayou Black. If you can describe the access road, we can quote the property.',
    },
    {
      q: 'How long does a typical Houma restoration take?',
      a: 'Most residential lots are one to three days. Commercial sites or large overgrown rural acreage run a week or more. We tell you the day count in the quote, not after the fact.',
    },
    {
      q: 'Do you handle storm debris cleanup for commercial Houma properties?',
      a: 'Yes. After hurricane or major weather events, commercial clients with TIMCO maintenance accounts get priority callouts. For one-off storm cleanups, send us photos and we\'ll quote the haul-off.',
    },
    {
      q: 'Are you licensed and insured?',
      a: "We're insured (liability + equipment) — we can produce a COI for Houma property managers who need it on file. We're not licensed for installs, and we don't do construction work — strictly maintenance, clearing, and restoration.",
    },
  ],
  photos: [
    { src: '/images/restoration-before-2.jpg', alt: 'Overgrown rural lot near Houma before TIMCO clearing' },
    { src: '/images/restoration-after-2.jpg', alt: 'Cleared rural lot near Houma after TIMCO restoration' },
    { src: '/images/restoration-bobcat-2.jpg', alt: 'TIMCO Bobcat parked in cleared field, Terrebonne Parish' },
    { src: '/images/restoration-farmhouse.jpg', alt: 'Rural farmhouse property restored by TIMCO near Houma' },
    { src: '/images/restoration-rural.jpg', alt: 'Rural Terrebonne property cleaned up by TIMCO' },
    { src: '/images/comm-tree-work.jpg', alt: 'TIMCO truck loaded with cut tree branches in Houma area' },
  ],
  relatedCityPages: [
    { href: '/services/property-restoration-thibodaux-la', label: 'Property Restoration in Thibodaux' },
    { href: '/services/recreational-land-management-houma-la', label: 'Land Management in Houma' },
  ],
}

export const metadata: Metadata = buildMetadata(data)

export default function Page() {
  return <CityServiceLayout {...data} />
}
