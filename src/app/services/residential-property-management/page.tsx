import type { Metadata } from 'next'
import { SITE } from '@/lib/site'
import {
  ServiceHero,
  IncludedList,
  WhyGrid,
  PhotoStrip,
  ServiceAreaBand,
  ServiceCta,
  buildServiceSchema,
} from '@/components/ServiceFrame'

const SLUG = 'residential-property-management'

export const metadata: Metadata = {
  title: 'Residential Property Management in Thibodaux, LA – Lawn & Grounds Care',
  description:
    'TIMCO handles recurring lawn and grounds care for homeowners in Thibodaux, LA — grass cutting, weed eating, spraying, tree trimming, and cleanup on a weekly, bi-weekly, or monthly schedule. Insured.',
  openGraph: {
    title: 'Residential Property Management in Thibodaux, LA | TIMCO',
    description: 'Recurring lawn and grounds care for homeowners across the Bayou Region.',
    url: `${SITE.baseUrl}/services/${SLUG}`,
  },
  alternates: { canonical: `${SITE.baseUrl}/services/${SLUG}` },
}

const schema = buildServiceSchema({
  slug: SLUG,
  name: 'Residential Property Management',
  description:
    'Recurring residential lawn and grounds care in Thibodaux, LA — grass cutting, weed eating, chemical spraying, tree trimming, and debris cleanup for homeowners on a weekly, bi-weekly, or monthly schedule.',
})

export default function ResidentialPropertyManagementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <ServiceHero
        label="Property Management"
        title={
          <>
            Residential property<br />
            <span className="text-accent">management</span>.
          </>
        }
        intro={
          <>
            Your yard handled while you&apos;re at work or out of town. TIMCO keeps
            <strong className="text-white"> homeowner lawns and grounds</strong> sharp on a schedule
            you set — weekly, bi-weekly, or monthly. No long-term contract, no chasing
            down a crew week to week.
          </>
        }
        image="/images/comm-after-white-home.jpg"
        imageAlt="Maintained home with a freshly mowed lawn — TIMCO residential property management in Thibodaux, LA"
      />

      <IncludedList
        label="What's Included"
        heading="The full lawn-care package, on your cadence."
        description="We build a plan around your visit frequency and keep it on the calendar, so your yard never falls behind — whether you're home every weekend or away for the season."
        items={[
          'Grass cutting / mowing',
          'Weed eating &amp; edging',
          'Chemical spraying (weed kill, fence lines, beds)',
          'Mulching &amp; bed maintenance',
          'Tree &amp; shrub trimming',
          'Brush &amp; small tree removal',
          'Storm &amp; seasonal debris cleanup',
          'Trash &amp; debris haul-off between visits',
        ]}
        image="/images/comm-weed-eating.jpg"
        imageAlt="TIMCO crew member weed eating along a residential property edge in Thibodaux, LA"
      />

      <WhyGrid
        label="Why TIMCO"
        heading="Why homeowners hand us the keys to the yard."
        items={[
          {
            title: 'Recurring, on the calendar',
            body: 'Set your cadence — weekly, bi-weekly, monthly — and we keep the visit booked. The schedule shows up like clockwork so the yard never gets ahead of you.',
          },
          {
            title: 'No long-term contract',
            body: "Month to month. Stay because the work is good, not because you're locked in. Pause for winter or ramp up for summer whenever you need.",
          },
          {
            title: 'One crew, every visit',
            body: "The same local crew that knows your property — where the beds are, how you like the edges, which corners flood. Consistency you don't get from a rotating vendor.",
          },
          {
            title: 'Insured & accountable',
            body: 'Liability and equipment coverage current. If something goes wrong on your property, you are covered — not left holding the bill.',
          },
          {
            title: 'Away-from-home friendly',
            body: 'Out of town, a second home, or just a busy season — we keep the place looking lived-in and maintained without you coordinating a thing.',
          },
          {
            title: 'Hwy 308 HQ',
            body: `Local to Thibodaux and quick across ${SITE.serviceArea.parishes.join(', ')} — easy to add a visit without inflated trip charges.`,
          },
        ]}
      />

      <PhotoStrip
        label="Recent Work"
        heading="Homes under our care."
        photos={[
          { src: '/images/comm-after-white-home.jpg', alt: 'White home with a freshly mowed lawn maintained by TIMCO' },
          { src: '/images/comm-after-truck.jpg', alt: 'Maintained residential home with cleared yard and TIMCO truck' },
          { src: '/images/comm-2story-truck.jpg', alt: 'Two-story home with manicured lawn maintained by TIMCO' },
          { src: '/images/comm-after-mobile.jpg', alt: 'Single-story home with a neatly mowed lawn in Thibodaux' },
          { src: '/images/comm-weed-eating.jpg', alt: 'TIMCO crew weed eating a residential property edge' },
          { src: '/images/comm-tree-work.jpg', alt: 'TIMCO truck hauling cut branches from a residential trim job' },
        ]}
      />

      <ServiceAreaBand cityPages={[]} />

      <ServiceCta
        heading="Want your yard on a schedule?"
        body="Send the address and how often you'd like us out — weekly, bi-weekly, or monthly. We'll quote a recurring plan that keeps your home looking right every visit."
        formNote="Insured · No long-term contract · 7am–5pm, 7 days a week"
      />
    </>
  )
}
