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

const SLUG = 'commercial-property-maintenance'

export const metadata: Metadata = {
  title: 'Lawn Care & Property Maintenance in Thibodaux, LA – Residential & Commercial',
  description:
    'TIMCO handles weekly lawn care and grounds maintenance for residential homeowners and commercial properties — offices, apartments, HOAs. Grass cutting, weed eating, spraying, trimming, debris cleanup. Insured.',
  openGraph: {
    title: 'Lawn Care & Property Maintenance in Thibodaux, LA | TIMCO',
    description: 'Weekly lawn care and grounds maintenance for residential and commercial properties.',
    url: `${SITE.baseUrl}/services/${SLUG}`,
  },
  alternates: { canonical: `${SITE.baseUrl}/services/${SLUG}` },
}

const schema = buildServiceSchema({
  slug: SLUG,
  name: 'Lawn Care & Property Maintenance',
  description:
    'Recurring lawn care and property maintenance in Thibodaux, LA — grass cutting, weed eating, chemical spraying, tree trimming, debris cleanup for residential homeowners and commercial properties (offices, apartments, HOAs).',
})

export default function CommercialMaintenancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <ServiceHero
        label="Property & Land"
        title={
          <>
            Lawn care &amp; property<br />
            <span className="text-accent">maintenance</span>.
          </>
        }
        intro={
          <>
            Weekly grass cutting, weed eating, spraying, and trimming for
            <strong className="text-white"> residential homeowners</strong> and
            <strong className="text-white"> commercial properties</strong> —
            offices, apartment complexes, HOAs, mixed-use sites. A local Thibodaux
            crew — this is the bread-and-butter work TIMCO has been doing since 2021.
          </>
        }
        image="/images/comm-after-white-home.jpg"
        imageAlt="Maintained residential property with manicured lawn — TIMCO lawn care in Thibodaux, LA"
      />

      <IncludedList
        label="What's Included"
        heading="The full lawn-care package, on a schedule."
        description="We build a maintenance plan around your visit frequency — weekly, bi-weekly, monthly. Residential or commercial, the schedule stays on the calendar so your property never falls behind."
        items={[
          'Grass cutting / mowing',
          'Weed eating &amp; edging',
          'Chemical spraying (weed kill, fence lines, hardscape)',
          'Mulching',
          'Tree trimming &amp; clearance for signage / sightlines',
          'Brush &amp; small tree removal',
          'Storm debris cleanup',
          'Trash &amp; debris haul-off between visits',
        ]}
        image="/images/comm-bobcat-apartments.jpg"
        imageAlt="TIMCO Bobcat zero-turn mowing apartment grounds in Thibodaux, LA"
      />

      {/* Who we work for */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="section-label">Who We Work For</p>
            <h2 className="heading-xl text-primary mt-3 text-balance">
              Residential homeowners. Commercial managers. Same standard.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="bg-gray-50 p-8 border-t-4 border-accent">
              <p className="text-xs font-bold uppercase tracking-mega text-accent">Residential</p>
              <h3 className="heading-sm text-primary mt-2">Homeowner lawn care.</h3>
              <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                Weekly or bi-weekly visits across {SITE.address.city}, Houma, Raceland, Chackbay, Napoleonville, and Schriever. Mowing, weed eating, trimming, cleanup — your yard handled while you&apos;re at work or out of town. No long-term contract required.
              </p>
            </article>
            <article className="bg-gray-50 p-8 border-t-4 border-accent">
              <p className="text-xs font-bold uppercase tracking-mega text-accent">Commercial</p>
              <h3 className="heading-sm text-primary mt-2">Offices, apartments, HOAs.</h3>
              <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                Recurring maintenance for property managers and commercial owners. Predictable monthly invoice, certificate of insurance on file, reliable visit schedule. Storm callouts prioritized for accounts already on the books.
              </p>
            </article>
          </div>
        </div>
      </section>

      <WhyGrid
        label="Why TIMCO"
        heading="Why homeowners and property managers stick with us."
        items={[
          {
            title: 'Recurring, on the calendar',
            body: 'Set your cadence — weekly, bi-weekly, monthly — and we keep the visit booked. No chasing down a contractor week-to-week; the schedule shows up like clockwork.',
          },
          {
            title: 'Insured & accountable',
            body: 'Liability and equipment coverage current — certificate available on request for property managers, HOAs, and commercial owners that require one on file.',
          },
          {
            title: 'Predictable scope, predictable invoice',
            body: 'Recurring visits are quoted upfront. Storm cleanups and one-off resets are quoted separately so your monthly number stays predictable.',
          },
          {
            title: 'Hwy 308 HQ',
            body: 'Centrally located in Thibodaux. Quick mobilization across Lafourche and Terrebonne — easy to add an emergency visit without inflated trip charges.',
          },
          {
            title: 'No installs upsell',
            body: "We do maintenance, lawn care, and clearing — we don't do hardscape installs or new landscape design. So when we say you need a service, it's because you need it.",
          },
          {
            title: 'After-the-storm priority',
            body: 'Hurricane debris, downed branches, blocked drainage — recurring accounts get priority callouts after weather events. We know the properties already.',
          },
        ]}
      />

      <PhotoStrip
        label="Recent Work"
        heading="Properties under our care."
        photos={[
          { src: '/images/comm-after-white-home.jpg', alt: 'Residential property after TIMCO lawn care in Thibodaux' },
          { src: '/images/comm-bobcat-apartments.jpg', alt: 'TIMCO Bobcat mowing apartment grounds' },
          { src: '/images/comm-weed-eating.jpg', alt: 'TIMCO crew weed eating along property edge' },
          { src: '/images/comm-2story-truck.jpg', alt: 'Maintained two-story residential home with TIMCO truck out front' },
          { src: '/images/comm-after-truck.jpg', alt: 'TIMCO truck on a freshly mowed residential property' },
          { src: '/images/comm-twelve-oaks.jpg', alt: 'HOA subdivision entrance maintained by TIMCO' },
          { src: '/images/comm-after-mobile.jpg', alt: 'Mobile home property after TIMCO lawn care and clearing' },
          { src: '/images/comm-antebellum.jpg', alt: 'Large commercial building under oaks maintained by TIMCO' },
          { src: '/images/comm-tree-work.jpg', alt: 'TIMCO truck loaded with cut tree branches from a maintenance job' },
        ]}
      />

      <ServiceAreaBand cityPages={[]} />

      <ServiceCta
        heading="Need a property on a schedule?"
        body="Send the address, property type (residential or commercial), and the visit cadence you're looking for. We'll quote a recurring plan that keeps the place looking right every visit."
        formNote="Insured · Reliable schedule · 7am–5pm, 7 days a week"
      />
    </>
  )
}
