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

const SLUG = 'residential-land-management'

export const metadata: Metadata = {
  title: 'Residential Land Management & Land Clearing, Thibodaux',
  description:
    'TIMCO clears overgrown residential lots and yards, then keeps your lawn and grounds on a schedule across Thibodaux and Lafourche Parish. Insured.',
  openGraph: {
    title: 'Residential Land Clearing & Lawn Care in Thibodaux, LA | TIMCO',
    description: 'Overgrown yard cleared, then your lawn kept on a schedule — residential land management across the Bayou Region.',
    url: `${SITE.baseUrl}/services/${SLUG}`,
  },
  alternates: { canonical: `${SITE.baseUrl}/services/${SLUG}` },
}

const schema = buildServiceSchema({
  slug: SLUG,
  name: 'Residential Land Management',
  description:
    'Residential land management in Thibodaux, LA — clearing and reclaiming overgrown home lots and yards, then recurring lawn and grounds care: grass cutting, weed eating, chemical spraying, tree trimming, and debris cleanup.',
})

export default function ResidentialLandManagementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <ServiceHero
        label="Residential Land Management"
        title={
          <>
            Residential land<br />
            <span className="text-accent">management</span>.
          </>
        }
        intro={
          <>
            <strong className="text-white">Land clearing and lawn care</strong> for your home — we clear
            an overgrown yard or lot, haul the debris, and then keep the lawn and grounds on a schedule
            you set. One crew brings your place back and maintains it, whether you&apos;re home every
            weekend or away for the season.
          </>
        }
        image="/images/res-home-modern.jpg"
        imageAlt="Modern farmhouse with a manicured lawn — TIMCO residential land management in Thibodaux, LA"
      />

      <IncludedList
        label="Restore & Manage"
        heading="Bring it back, then keep it sharp."
        description="Most homes start with a reset — clearing what got away — and move to a recurring plan we keep on the calendar so the yard never falls behind again."
        items={[
          'Overgrown lot &amp; yard clearing',
          'Brush, scrub &amp; small tree removal',
          'Debris &amp; trash haul-off',
          'Grass cutting / mowing',
          'Weed eating &amp; edging',
          'Chemical spraying (weed kill, fence lines, beds)',
          'Tree &amp; shrub trimming',
          'Recurring weekly, bi-weekly, or monthly visits',
        ]}
        image="/images/res-mower-home.jpg"
        imageAlt="TIMCO zero-turn mower on a residential lawn in Thibodaux, LA"
      />

      <WhyGrid
        label="Why TIMCO"
        heading="Why homeowners hand us the keys to the yard."
        items={[
          {
            title: 'Restore, then maintain',
            body: 'We can reset a yard that got away — brush, debris, the works — and roll straight into keeping it up. One quote, one crew, no juggling contractors.',
          },
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
            body: "The same local crew that knows your place — where the beds are, how you like the edges, which corners flood. Consistency you don't get from a rotating vendor.",
          },
          {
            title: 'Insured & accountable',
            body: 'Liability and equipment coverage current. If something goes wrong on your land, you are covered — not left holding the bill.',
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
          { src: '/images/comm-after-truck.jpg', alt: 'Maintained home with cleared yard and TIMCO truck' },
          { src: '/images/comm-2story-truck.jpg', alt: 'Two-story home with a manicured lawn maintained by TIMCO' },
          { src: '/images/comm-after-mobile.jpg', alt: 'Single-story home with a neatly mowed lawn in Thibodaux' },
          { src: '/images/comm-weed-eating.jpg', alt: 'TIMCO crew weed eating a home edge' },
          { src: '/images/comm-tree-work.jpg', alt: 'TIMCO truck hauling cut branches from a residential trim job' },
        ]}
      />

      <ServiceAreaBand
        cityPages={[
          { href: `/services/${SLUG}-thibodaux-la`, label: 'Residential Land Management in Thibodaux' },
          { href: `/services/${SLUG}-houma-la`, label: 'Residential Land Management in Houma' },
          { href: `/services/${SLUG}-raceland-la`, label: 'Residential Land Management in Raceland' },
        ]}
      />

      <ServiceCta
        heading="Yard that needs a reset — or a schedule?"
        body="Send the address and whether you need a one-time clearing, a recurring plan, or both. We'll quote it and keep your place looking right."
        formNote="Insured · No long-term contract · Serving the Bayou Region since 2021"
      />
    </>
  )
}
