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

const SLUG = 'commercial-property-management'

export const metadata: Metadata = {
  title: 'Commercial Property Management in Thibodaux, LA – Offices, Apartments, HOAs',
  description:
    'TIMCO handles grounds maintenance for commercial properties in Thibodaux, LA — offices, apartment complexes, and HOA common areas. Grass cutting, weed eating, spraying, trimming, debris cleanup on a reliable schedule. Insured.',
  openGraph: {
    title: 'Commercial Property Management in Thibodaux, LA | TIMCO',
    description: 'Recurring grounds maintenance for offices, apartments, and HOAs across the Bayou Region.',
    url: `${SITE.baseUrl}/services/${SLUG}`,
  },
  alternates: { canonical: `${SITE.baseUrl}/services/${SLUG}` },
}

const schema = buildServiceSchema({
  slug: SLUG,
  name: 'Commercial Property Management',
  description:
    'Recurring commercial grounds maintenance in Thibodaux, LA — grass cutting, weed eating, chemical spraying, tree trimming, and debris cleanup for offices, apartment complexes, and HOA common areas.',
})

export default function CommercialPropertyManagementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <ServiceHero
        label="Property Management"
        title={
          <>
            Commercial property<br />
            <span className="text-accent">management</span>.
          </>
        }
        intro={
          <>
            Recurring grounds maintenance for
            <strong className="text-white"> offices, apartment complexes, and HOAs</strong> across
            the Bayou Region. Predictable schedule, predictable invoice, certificate of
            insurance on file — the property stays presentable without you managing the crew.
          </>
        }
        image="/images/comm-bobcat-apartments.jpg"
        imageAlt="TIMCO Bobcat mowing apartment grounds — commercial property management in Thibodaux, LA"
      />

      <IncludedList
        label="What's Included"
        heading="Full grounds maintenance, on a schedule."
        description="We build a maintenance plan around your visit frequency — weekly, bi-weekly, or monthly. The schedule stays on the calendar so common areas, entrances, and frontage never fall behind."
        items={[
          'Grass cutting / mowing',
          'Weed eating &amp; edging',
          'Chemical spraying (weed kill, fence lines, hardscape)',
          'Mulching &amp; bed maintenance',
          'Tree trimming &amp; clearance for signage / sightlines',
          'Brush &amp; small tree removal',
          'Storm debris cleanup',
          'Trash &amp; debris haul-off between visits',
        ]}
        image="/images/comm-twelve-oaks.jpg"
        imageAlt="HOA subdivision entrance with manicured landscaping maintained by TIMCO in Thibodaux, LA"
      />

      {/* Who we work for */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="section-label">Who We Work For</p>
            <h2 className="heading-xl text-primary mt-3 text-balance">
              Property managers and commercial owners across the Bayou Region.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="bg-gray-50 p-8 border-t-4 border-accent">
              <p className="text-xs font-bold uppercase tracking-mega text-accent">Offices &amp; Apartments</p>
              <h3 className="heading-sm text-primary mt-2">Frontage that stays sharp.</h3>
              <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                Recurring maintenance for office parks, apartment complexes, and mixed-use sites. Predictable monthly invoice, certificate of insurance on file, reliable visit schedule. Storm callouts prioritized for accounts already on the books.
              </p>
            </article>
            <article className="bg-gray-50 p-8 border-t-4 border-accent">
              <p className="text-xs font-bold uppercase tracking-mega text-accent">HOAs &amp; Common Areas</p>
              <h3 className="heading-sm text-primary mt-2">Entrances, medians, shared grounds.</h3>
              <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                Subdivision entrances, retention areas, and common grounds kept presentable for residents and boards. One point of contact, one schedule, one invoice — no chasing down separate crews for separate tasks.
              </p>
            </article>
          </div>
        </div>
      </section>

      <WhyGrid
        label="Why TIMCO"
        heading="Why property managers stick with us."
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
        heading="Commercial properties under our care."
        photos={[
          { src: '/images/comm-bobcat-apartments.jpg', alt: 'TIMCO Bobcat mowing apartment grounds in Thibodaux' },
          { src: '/images/comm-twelve-oaks.jpg', alt: 'HOA subdivision entrance maintained by TIMCO' },
          { src: '/images/comm-antebellum.jpg', alt: 'Large commercial building under oaks maintained by TIMCO' },
          { src: '/images/comm-weed-eating.jpg', alt: 'TIMCO crew weed eating along a commercial property edge' },
          { src: '/images/comm-tree-work.jpg', alt: 'TIMCO truck loaded with cut tree branches from a maintenance job' },
          { src: '/images/comm-truck-field.jpg', alt: 'TIMCO truck staged at a commercial grounds maintenance job' },
        ]}
      />

      <ServiceAreaBand cityPages={[]} />

      <ServiceCta
        heading="Need a commercial property on a schedule?"
        body="Send the address, property type (office, apartments, HOA), and the visit cadence you're looking for. We'll quote a recurring plan that keeps the grounds looking right every visit."
        formNote="Insured · COI on request · Reliable schedule"
      />
    </>
  )
}
