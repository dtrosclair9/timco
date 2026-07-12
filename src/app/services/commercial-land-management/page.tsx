import type { Metadata } from 'next'
import { SITE, ogImage } from '@/lib/site'
import {
  ServiceHero,
  IncludedList,
  WhyGrid,
  PhotoStrip,
  ServiceAreaBand,
  ServiceCta,
  ServiceFaqs,
  buildServiceSchema,
} from '@/components/ServiceFrame'

const SLUG = 'commercial-land-management'

export const metadata: Metadata = {
  title: 'Commercial Land Management & Grounds Care, Thibodaux',
  description:
    'Commercial land management for Thibodaux offices, apartments, and HOAs — grounds maintenance, mowing, brush clearing, and cleanup on a set schedule. Insured.',
  openGraph: {
    title: 'Commercial Land Management & Grounds Maintenance in Thibodaux, LA | TIMCO',
    description: 'Grounds maintenance and cleanup for offices, apartments, and HOAs across the Bayou Region.',
    url: `${SITE.baseUrl}/services/${SLUG}`,
    images: [ogImage],
  },
  alternates: { canonical: `${SITE.baseUrl}/services/${SLUG}` },
}

const schema = buildServiceSchema({
  slug: SLUG,
  name: 'Commercial Land Management',
  description:
    'Commercial land management in Thibodaux, LA — one-time cleanup and clearing, then recurring grounds maintenance for offices, apartment complexes, and HOA common areas: grass cutting, weed eating, chemical spraying, tree trimming, and debris cleanup.',
})

export default function CommercialLandManagementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <ServiceHero
        label="Commercial Land Management"
        title={
          <>
            Commercial land<br />
            <span className="text-accent">management</span>.
          </>
        }
        intro={
          <>
            <strong className="text-white">Grounds maintenance and cleanup</strong> for
            <strong className="text-white"> offices, apartment complexes, and HOAs</strong> across the
            Bayou Region. We clear a site that&apos;s gotten away, then keep it on a reliable schedule —
            predictable invoice, certificate of insurance on file.
          </>
        }
        image="/images/comm-bobcat-apartments.jpg"
        imageAlt="TIMCO Bobcat mowing apartment grounds — commercial land management in Thibodaux, LA"
      />

      <IncludedList
        label="Restore & Manage"
        heading="Reset the grounds, then keep them sharp."
        description="Take on a site that needs a one-time reset, or step straight into recurring care — either way, common areas, entrances, and frontage stay presentable year-round."
        items={[
          'One-time cleanup &amp; clearing',
          'Grass cutting / mowing',
          'Weed eating &amp; edging',
          'Chemical spraying (weed kill, fence lines, hardscape)',
          'Mulching &amp; bed maintenance',
          'Tree trimming &amp; clearance for signage / sightlines',
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
              Commercial owners, managers, and HOAs across the Bayou Region.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="bg-gray-50 p-8 border-t-4 border-accent">
              <p className="text-xs font-bold uppercase tracking-mega text-accent-dark">Offices &amp; Apartments</p>
              <h3 className="heading-sm text-primary mt-2">Frontage that stays sharp.</h3>
              <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                Recurring maintenance for office parks, apartment complexes, and mixed-use sites. Predictable monthly invoice, certificate of insurance on file, reliable visit schedule. Storm callouts prioritized for accounts already on the books.
              </p>
            </article>
            <article className="bg-gray-50 p-8 border-t-4 border-accent">
              <p className="text-xs font-bold uppercase tracking-mega text-accent-dark">HOAs &amp; Common Areas</p>
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
        heading="Why managers and boards stick with us."
        items={[
          {
            title: 'Restore, then maintain',
            body: 'Take on a site that needs a reset and roll straight into keeping it up — one crew, one quote, no juggling vendors for clearing versus mowing.',
          },
          {
            title: 'Recurring, on the calendar',
            body: 'Set your cadence — weekly, bi-weekly, monthly — and we keep the visit booked. No chasing down a contractor week-to-week; the schedule shows up like clockwork.',
          },
          {
            title: 'Insured & accountable',
            body: 'Liability and equipment coverage current — certificate available on request for managers, HOAs, and commercial owners that require one on file.',
          },
          {
            title: 'Predictable scope, predictable invoice',
            body: 'Recurring visits are quoted upfront. Storm cleanups and one-off resets are quoted separately so your monthly number stays predictable.',
          },
          {
            title: 'No installs upsell',
            body: "We do clearing, lawn care, and grounds maintenance — not hardscape installs or new landscape design. So when we say you need a service, it's because you need it.",
          },
          {
            title: 'After-the-storm priority',
            body: 'Hurricane debris, downed branches, blocked drainage — recurring accounts get priority callouts after weather events. We already know the grounds.',
          },
        ]}
      />

      <PhotoStrip
        label="Recent Work"
        heading="Commercial grounds under our care."
        photos={[
          { src: '/images/comm-antebellum.jpg', alt: 'Large commercial building under oaks maintained by TIMCO' },
          { src: '/images/comm-tree-work.jpg', alt: 'TIMCO truck loaded with cut tree branches from a maintenance job' },
          { src: '/images/comm-truck-field.jpg', alt: 'TIMCO truck staged at a commercial grounds maintenance job' },
          { src: '/images/comm-equipment-shed.jpg', alt: 'TIMCO Bobcat loader and trailer staged for a commercial job' },
          { src: '/images/comm-weed-eating.jpg', alt: 'TIMCO crew weed eating along a commercial grounds edge' },
          { src: '/images/comm-2story-truck.jpg', alt: 'Two-story commercial building with grounds maintained by TIMCO' },
        ]}
      />

      {/* TODO(owner): confirm specifics (price/visit ranges, typical cadence per site type) to strengthen */}
      <ServiceFaqs
        heading="Commercial grounds care, answered."
        faqs={[
          {
            q: 'Can you provide a certificate of insurance (COI) for our property?',
            a: 'Yes. TIMCO carries liability and equipment coverage, and a certificate of insurance is available on request — the document most property managers, HOA boards, and commercial owners need on file before a vendor works the grounds. Tell us who to name and where to send it, and we will get the COI over so you are covered before the first visit.',
          },
          {
            q: 'How often should commercial grounds be maintained in South Louisiana?',
            a: 'Through the Bayou Region growing season, most offices, apartment complexes, and HOA common areas need cutting on a weekly or every-other-week schedule to keep frontage sharp, tapering off in the cooler months when growth slows. Higher-visibility entrances and sightline areas sometimes want more frequent attention than back lots. We set the cadence to the site instead of forcing one schedule on every property — send the address and we will recommend a visit rhythm and quote it upfront.',
          },
          {
            q: 'Do you handle storm and hurricane debris cleanup for commercial sites?',
            a: 'Yes. Downed branches, blown-in brush, and debris blocking drainage after a weather event are common commercial callouts across Lafourche and Terrebonne parishes, and accounts already on a recurring schedule get priority because we already know the grounds. Storm cleanups are quoted separately from the recurring visit so your regular monthly invoice stays predictable.',
          },
          {
            q: 'How is commercial grounds maintenance priced?',
            a: 'It comes down to the size of the site, what the scope covers — mowing only versus mowing plus beds, trees, and haul-off — and how often we visit. Recurring maintenance is quoted upfront as a predictable number, while one-time resets and storm cleanups are quoted on their own. Call us for a free site walkthrough and we will put firm numbers to a recurring plan, a reset, or both.',
          },
        ]}
      />

      <ServiceAreaBand
        cityPages={[
          { href: `/services/${SLUG}-thibodaux-la`, label: 'Commercial Land Management in Thibodaux' },
          { href: `/services/${SLUG}-houma-la`, label: 'Commercial Land Management in Houma' },
        ]}
      />

      <ServiceCta
        heading="Need a commercial site on a schedule?"
        body="Send the address, site type (office, apartments, HOA), and the visit cadence you're looking for. We'll quote a reset, a recurring plan, or both."
        formNote="Insured · COI on request · Reliable schedule"
      />
    </>
  )
}
