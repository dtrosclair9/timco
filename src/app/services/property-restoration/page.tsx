import type { Metadata } from 'next'
import Image from 'next/image'
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

const TITLE = 'Property Restoration'
const SLUG = 'property-restoration'

export const metadata: Metadata = {
  title: 'Property Restoration in Thibodaux, LA – Overgrown Lots, Brush, Debris',
  description:
    'TIMCO restores overgrown residential and commercial properties in Thibodaux, LA — brush clearing, tree work, trash and debris removal, complete site work. Insured. Call 985.665.7298.',
  openGraph: {
    title: 'Property Restoration in Thibodaux, LA | TIMCO',
    description: 'Brush, debris, overgrowth — TIMCO restores neglected properties across Lafourche and Terrebonne.',
    url: `${SITE.baseUrl}/services/${SLUG}`,
  },
  alternates: { canonical: `${SITE.baseUrl}/services/${SLUG}` },
}

const schema = buildServiceSchema({
  slug: SLUG,
  name: 'Property Restoration',
  description:
    'Complete property restoration in Thibodaux, LA — brush clearing, tree trimming, debris removal, site cleanup for residential and commercial lots.',
})

export default function PropertyRestorationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <ServiceHero
        label="Property & Land"
        title={
          <>
            Property restoration<br />in <span className="text-accent">Thibodaux, LA</span>.
          </>
        }
        intro={
          <>
            The lot that got away. The yard nobody's touched in five years. The
            commercial property that needs to be presentable by next month. TIMCO
            specializes in pulling overgrown property back to usable — brush,
            trees, trash, the whole site — in days, not weeks.
          </>
        }
        image="/images/restoration-after-2.jpg"
        imageAlt="Cleared rural lot under dramatic sky after TIMCO property restoration in Thibodaux, Louisiana"
      />

      {/* Before / After */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="section-label">Before & After</p>
            <h2 className="heading-xl text-primary mt-3 text-balance">From overgrown to usable.</h2>
            <p className="text-gray-700 mt-5 leading-relaxed">
              Real lots in Lafourche and Terrebonne. Brush clearing, weed eating, debris removal, tree trimming — the work that turns a property nobody wants to look at into one ready for a build, a sale, or a fresh start.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <BeforeAfter
              beforeSrc="/images/restoration-before-1.jpg"
              afterSrc="/images/restoration-after-1.jpg"
              caption="Residential lot — brush + clearing"
            />
            <BeforeAfter
              beforeSrc="/images/restoration-before-2.jpg"
              afterSrc="/images/restoration-after-2.jpg"
              caption="Rural lot — bobcat clearing"
            />
          </div>
        </div>
      </section>

      <IncludedList
        label="What's Included"
        heading="A full-site restoration package."
        description="Most TIMCO restoration jobs cover everything below in one mobilization. We bring the equipment, the crew, and the haul-off — you don't coordinate three contractors to do one job."
        items={[
          'Brush clearing & weed eating',
          'Tree trimming & selective removal',
          'Chemical spraying (weed kill / regrowth control)',
          'Debris & trash haul-off',
          'Bobcat / zero-turn clearing on tight access',
          'Drainage cleanup & reshaping where needed',
          'Site grading & prep for next use',
          "Final sweep so it's presentable",
        ]}
        image="/images/restoration-bobcat-1.jpg"
        imageAlt="TIMCO Bobcat zero-turn clearing tall brush in Thibodaux"
      />

      <WhyGrid
        label="Why TIMCO"
        heading="Why owners hire us for the worst lots."
        items={[
          {
            title: 'We do the dirty jobs',
            body: "Most landscapers won't touch an overgrown lot. We will. We have the equipment for properties that look unsalvageable and a crew that's done it dozens of times.",
          },
          {
            title: 'In days, not weeks',
            body: 'A typical residential lot is one to three days on site. Larger commercial sites run a week. We set the schedule before we start and stick to it.',
          },
          {
            title: 'One number, one mobilization',
            body: "No piecing together three contractors. Brush, trees, debris, and haul-off come out of one quote — and one crew shows up to handle all of it.",
          },
          {
            title: 'Insured equipment & crew',
            body: 'Liability and equipment coverage in place before any Bobcat hits the ground. We can produce a certificate for HOAs, property managers, or commercial owners on request.',
          },
          {
            title: 'Honest scope',
            body: "If a lot needs structural demo, installs, or anything we don't do, we tell you up front. We don't pad jobs with work we're not the right crew for.",
          },
          {
            title: 'Local to the Bayou Region',
            body: `${SITE.address.street} is our HQ — we're not a vendor driving in from out of parish. Mobilization is fast across ${SITE.serviceArea.parishes.join(', ')}.`,
          },
        ]}
      />

      <PhotoStrip
        label="Recent Work"
        heading="Overgrown lots we've put back to usable."
        photos={[
          { src: '/images/restoration-before-1.jpg', alt: 'Overgrown lot before TIMCO restoration' },
          { src: '/images/restoration-after-1.jpg', alt: 'Same lot after TIMCO brush clearing' },
          { src: '/images/restoration-bobcat-1.jpg', alt: 'TIMCO Bobcat clearing tall brush in Thibodaux' },
          { src: '/images/restoration-bobcat-2.jpg', alt: 'TIMCO Bobcat parked in cleared field' },
          { src: '/images/restoration-after-2.jpg', alt: 'Cleared rural lot under dramatic sky after TIMCO clearing' },
          { src: '/images/restoration-farmhouse.jpg', alt: 'Rural farmhouse with TIMCO crew working' },
          { src: '/images/restoration-rural.jpg', alt: 'Rural property cleared by TIMCO in Lafourche Parish' },
        ]}
      />

      <ServiceAreaBand
        cityPages={[
          { href: `/services/${SLUG}-thibodaux-la`, label: 'Property Restoration in Thibodaux' },
          { href: `/services/${SLUG}-houma-la`, label: 'Property Restoration in Houma' },
        ]}
      />

      <ServiceCta
        heading="Got a lot that needs to disappear?"
        body="Send a few photos and the address. Tim will follow up within a business day to walk the property and give you an honest number."
        formNote="Insured · Family-run · Serving the Bayou Region since 2021"
      />
    </>
  )
}

function BeforeAfter({ beforeSrc, afterSrc, caption }: { beforeSrc: string; afterSrc: string; caption: string }) {
  return (
    <article className="space-y-3">
      <div className="grid grid-cols-2 gap-1">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image src={beforeSrc} alt="Property before TIMCO restoration" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
          <span className="absolute top-2 left-2 bg-primary text-white text-[10px] font-bold uppercase tracking-mega px-2 py-1">Before</span>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image src={afterSrc} alt="Property after TIMCO restoration" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
          <span className="absolute top-2 left-2 bg-accent text-white text-[10px] font-bold uppercase tracking-mega px-2 py-1">After</span>
        </div>
      </div>
      <p className="text-sm font-semibold uppercase tracking-wider text-primary" dangerouslySetInnerHTML={{ __html: caption }} />
    </article>
  )
}
