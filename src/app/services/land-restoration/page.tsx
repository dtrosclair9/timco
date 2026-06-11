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

const SLUG = 'land-restoration'

export const metadata: Metadata = {
  title: 'Land Restoration in Thibodaux, LA – Clearing & Reclaiming Rural Acreage',
  description:
    'TIMCO reclaims neglected rural acreage in Thibodaux, LA — large-scale brush and tree clearing, drainage, and site work that brings overgrown land back to usable. Insured. Call 985.665.7298.',
  openGraph: {
    title: 'Land Restoration in Thibodaux, LA | TIMCO',
    description: 'Large-scale clearing and reclamation of rural and wooded acreage across the Bayou Region.',
    url: `${SITE.baseUrl}/services/${SLUG}`,
  },
  alternates: { canonical: `${SITE.baseUrl}/services/${SLUG}` },
}

const schema = buildServiceSchema({
  slug: SLUG,
  name: 'Land Restoration',
  description:
    'Large-scale land restoration in Thibodaux, LA — brush and tree clearing, drainage, and site work that reclaims overgrown rural and wooded acreage and brings it back to usable, accessible shape.',
})

export default function LandRestorationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <ServiceHero
        label="Land Management"
        title={
          <>
            Land restoration<br />in <span className="text-accent">Thibodaux, LA</span>.
          </>
        }
        intro={
          <>
            The back forty that grew over. The wooded tract you can&apos;t walk
            anymore. The field that&apos;s been idle for years. TIMCO reclaims
            <strong className="text-white"> raw rural acreage</strong> at scale — brush, trees,
            drainage, and site work — and hands it back accessible and usable.
          </>
        }
        image="/images/restoration-bobcat-2.jpg"
        imageAlt="TIMCO Bobcat clearing overgrown rural acreage with a treeline behind in the Bayou Region"
      />

      {/* Before / After */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="section-label">Before & After</p>
            <h2 className="heading-xl text-primary mt-3 text-balance">From grown-over to accessible.</h2>
            <p className="text-gray-700 mt-5 leading-relaxed">
              Real acreage in Lafourche, Terrebonne, and Assumption. Heavy brush clearing, tree work, ditch and drainage cleanup — the work that turns ground you can&apos;t use into land you can hunt, farm, build on, or sell. Working a developed lot near a house instead? That&apos;s <a href="/services/property-restoration" className="text-accent underline underline-offset-2 hover:text-accent-dark">property restoration</a>.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <BeforeAfter
              beforeSrc="/images/restoration-bobcat-1.jpg"
              afterSrc="/images/restoration-after-1.jpg"
              caption="Overgrown ditch line — cleared &amp; reopened"
            />
            <BeforeAfter
              beforeSrc="/images/restoration-before-2.jpg"
              afterSrc="/images/restoration-after-2.jpg"
              caption="Weedy field — bobcat clearing"
            />
          </div>
        </div>
      </section>

      <IncludedList
        label="What's Included"
        heading="A full-acreage reclamation package."
        description="Most land jobs cover everything below in one mobilization. We bring the heavy equipment, the crew, and the haul-off — you don't coordinate three contractors to take one tract back."
        items={[
          'Heavy brush &amp; undergrowth clearing',
          'Tree clearing &amp; selective thinning',
          'Bobcat &amp; tractor work on acreage',
          'Ditch, drainage &amp; culvert cleanup',
          'Prescribed / controlled burns where suitable',
          'Trail, lane &amp; access cutting',
          'Debris consolidation &amp; haul-off',
          'Reshaping &amp; site prep for next use',
        ]}
        image="/images/restoration-bobcat-1.jpg"
        imageAlt="TIMCO Bobcat zero-turn clearing an overgrown rural ditch bank near Thibodaux, LA"
      />

      <WhyGrid
        label="Why TIMCO"
        heading="Why landholders hire us for the heavy tracts."
        items={[
          {
            title: 'Built for acreage',
            body: "This isn't a push mower and a weekend. We bring Bobcats, tractors, and a crew that's reclaimed tracts most outfits won't quote.",
          },
          {
            title: 'We know rural ground',
            body: 'Drainage, treelines, soft spots, burn windows — Tim works and hunts this kind of land himself. We read a property the way an owner does, not a vendor.',
          },
          {
            title: 'One number, one mobilization',
            body: 'Brush, trees, drainage, and haul-off come out of one quote — and one crew handles all of it. No stitching together separate contractors for one tract.',
          },
          {
            title: 'Insured equipment & crew',
            body: 'Liability and equipment coverage in place before any machine hits the ground. Certificate available for landowners or managers who need one on file.',
          },
          {
            title: 'Honest scope',
            body: "If a tract needs surveying, structural work, or anything we don't do, we say so up front. We don't pad a job with work we're not the right crew for.",
          },
          {
            title: 'Local to the Bayou Region',
            body: `${SITE.address.street} is our HQ — not a vendor driving in from out of parish. Fast across ${SITE.serviceArea.parishes.join(', ')}.`,
          },
        ]}
      />

      <PhotoStrip
        label="Recent Work"
        heading="Acreage we've put back to usable."
        photos={[
          { src: '/images/restoration-bobcat-2.jpg', alt: 'TIMCO Bobcat clearing open rural acreage with a treeline behind' },
          { src: '/images/restoration-bobcat-1.jpg', alt: 'TIMCO Bobcat clearing an overgrown rural ditch bank' },
          { src: '/images/restoration-before-2.jpg', alt: 'TIMCO Bobcat mowing a weedy rural field, clearing in progress' },
          { src: '/images/restoration-after-2.jpg', alt: 'Cleared brush strip across open farmland after TIMCO land restoration' },
          { src: '/images/land-burn-day.jpg', alt: 'Controlled brush-pile burn on cleared rural land by a pond' },
          { src: '/images/comm-truck-field.jpg', alt: 'TIMCO truck staged at the edge of a rural acreage job' },
        ]}
      />

      <ServiceAreaBand cityPages={[]} />

      <ServiceCta
        heading="Got acreage that's grown over?"
        body="Send roughly how many acres and a few photos if you have them. Tim will follow up within a business day to walk the property and give you an honest number."
        formNote="Insured · Built for the heavy jobs · Serving the Bayou Region since 2021"
      />
    </>
  )
}

function BeforeAfter({ beforeSrc, afterSrc, caption }: { beforeSrc: string; afterSrc: string; caption: string }) {
  return (
    <article className="space-y-3">
      <div className="grid grid-cols-2 gap-1">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image src={beforeSrc} alt="Acreage before TIMCO land restoration" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
          <span className="absolute top-2 left-2 bg-primary text-white text-[10px] font-bold uppercase tracking-mega px-2 py-1">Before</span>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image src={afterSrc} alt="Acreage after TIMCO land restoration" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
          <span className="absolute top-2 left-2 bg-accent text-white text-[10px] font-bold uppercase tracking-mega px-2 py-1">After</span>
        </div>
      </div>
      <p className="text-sm font-semibold uppercase tracking-wider text-primary" dangerouslySetInnerHTML={{ __html: caption }} />
    </article>
  )
}
