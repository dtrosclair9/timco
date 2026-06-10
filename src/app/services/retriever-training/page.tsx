import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SITE } from '@/lib/site'
import {
  ServiceHero,
  WhyGrid,
  PhotoStrip,
  ServiceAreaBand,
  ServiceCta,
  buildServiceSchema,
} from '@/components/ServiceFrame'

const SLUG = 'retriever-training'

export const metadata: Metadata = {
  title: 'Retriever Training in Thibodaux, LA – Labrador Board-and-Train Kennel',
  description:
    'TIMCO Kennels — a 10-run Labrador retriever board-and-train in Thibodaux, LA. Basic obedience through advanced retriever (duck blind etiquette, hand signals). 3 to 9 month programs.',
  openGraph: {
    title: 'TIMCO Kennels — Labrador Retriever Training in Thibodaux, LA',
    description: 'Board-and-train Labradors for the duck blind. 10 kennels, 3–9 month programs.',
    url: `${SITE.baseUrl}/services/${SLUG}`,
  },
  alternates: { canonical: `${SITE.baseUrl}/services/${SLUG}` },
}

const schema = buildServiceSchema({
  slug: SLUG,
  name: 'Labrador Retriever Training',
  description:
    'TIMCO Kennels — Labrador retriever board-and-train in Thibodaux, LA. Basic obedience, basic retriever, advanced retriever (duck blind etiquette, hand signals). 10 kennel runs, programs from 3 to 9 months.',
})

const programs = [
  {
    name: 'Basic Obedience',
    span: 'Foundation',
    body: 'Sit, stay, here, kennel up, place, off-lead control. The behavior foundation every working Lab needs before any field work starts.',
  },
  {
    name: 'Basic Retriever',
    span: 'Field Foundation',
    body: 'Force fetch, marked retrieves on land and water, steady to throw, delivery to hand. The work that turns a Lab into a useful dog in the marsh.',
  },
  {
    name: 'Advanced Retriever',
    span: 'Duck Blind Ready',
    body: 'Hand signals, blind retrieves, duck blind etiquette, multi-mark memory work, steady to gunshot. The skills that make a Lab a partner, not a problem, on opening day.',
  },
]

export default function RetrieverTrainingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <ServiceHero
        label="TIMCO Kennels"
        title={
          <>
            Labrador retriever<br />
            <span className="text-accent">board-and-train</span>.
          </>
        }
        intro={
          <>
            Ten kennels at our {SITE.address.city} headquarters. Programs run three
            to nine months, from foundational obedience through advanced retriever
            work — the kind of training that produces a Lab who handles
            himself in a duck blind on opening morning.
          </>
        }
        image="/images/retriever-hero-boat.jpg"
        imageAlt="Two Labrador retrievers riding in a flat-bottom boat through Louisiana swamp — TIMCO Kennels"
      />

      {/* Programs */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="section-label">Programs</p>
            <h2 className="heading-xl text-primary mt-3 text-balance">Three stages. One full retriever.</h2>
            <p className="text-gray-700 mt-5 leading-relaxed">
              Pick the stage your dog needs, or run him through all three. Programs are tailored to the dog — some Labs need three months, others need closer to nine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {programs.map((p, i) => (
              <article key={p.name} className="bg-gray-50 p-8 border-t-4 border-accent">
                <p className="text-[10px] font-bold uppercase tracking-mega text-gray-500">Stage 0{i + 1}</p>
                <h3 className="heading-sm text-primary mt-2">{p.name}</h3>
                <p className="text-xs font-bold uppercase tracking-wider text-accent mt-1">{p.span}</p>
                <p className="text-sm text-gray-700 mt-4 leading-relaxed">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* The Kennel facility */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative aspect-square overflow-hidden">
              <Image
                src="/images/kennel-hero.jpg"
                alt="TIMCO Kennels — multiple Labradors in kennel runs at the Thibodaux facility"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div className="lg:col-span-7">
              <p className="section-label">The Facility</p>
              <h2 className="heading-xl text-primary mt-3 max-w-lg text-balance">
                10 kennel runs.<br />One {SITE.address.city} HQ.
              </h2>
              <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  TIMCO Kennels is at the same {SITE.address.street} headquarters as the property crew — which means somebody's on site every day and your dog is never on the back-burner.
                </p>
                <p>
                  Kennel runs are sized for active working Labs with daily field and water work on rural property nearby. Drop-offs and pick-ups are scheduled by appointment.
                </p>
                <p>
                  One dedicated in-house trainer handles every dog from day one to graduation. No revolving cast of handlers, no mixed cues.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-accent text-xs">Ask About Availability</Link>
                <a href={`tel:${SITE.phoneRaw}`} className="btn-ghost">
                  Call {SITE.phoneDisplay} →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyGrid
        label="Why TIMCO Kennels"
        heading="Why hunters send their Labs to us."
        items={[
          {
            title: 'One dedicated trainer',
            body: 'Your Lab works with one consistent in-house trainer from intake to graduation — one voice, one standard, no rotating handlers.',
          },
          {
            title: 'Real duck-blind training',
            body: 'Hand signals, blind retrieves, steady to gunshot, blind etiquette. We train Labs for what hunters actually need them to do.',
          },
          {
            title: 'Working facility',
            body: '10 dedicated runs at a working HQ. Daily field and water work on rural property. Your dog stays active, not crated.',
          },
          {
            title: 'Honest assessment',
            body: "We tell you what your dog is ready for and what he isn't. If he needs three months, we say three. If he needs nine, we say nine.",
          },
        ]}
      />

      <PhotoStrip
        label="The Dogs"
        heading="Labs at work."
        photos={[
          { src: '/images/kennel-pack-action.jpg', alt: 'Pack of Labradors playing in TIMCO kennel run yard' },
          { src: '/images/kennel-three-labs.jpg', alt: 'Three Labradors — white, yellow, and golden — posing on bench' },
          { src: '/images/kennel-white-lab-bench.jpg', alt: 'White Lab portrait on bench by TIMCO sign' },
          { src: '/images/retriever-sunset-1.jpg', alt: 'Three Labradors running toward camera at sunset' },
          { src: '/images/retriever-sunset-2.jpg', alt: 'Three Labradors spread across field at sunset' },
          { src: '/images/retriever-hero-boat.jpg', alt: 'Two retrievers in flat-bottom boat through Louisiana swamp' },
          { src: '/images/kennel-yellow-lab-hallway.jpg', alt: 'Yellow Lab portrait in TIMCO training facility hallway' },
          { src: '/images/kennel-black-lab-alert.jpg', alt: 'Black Lab sitting alert with kennel runs behind' },
          { src: '/images/kennel-white-lab-alert.jpg', alt: 'White Lab standing alert on bench at TIMCO Kennels' },
          { src: '/images/kennel-three-labs-picnic.jpg', alt: 'Three Labs posing on grass at picnic table' },
          { src: '/images/retriever-puppy-kennel.jpg', alt: 'Golden retriever puppy in grass with kennel runs behind' },
          { src: '/images/retriever-puppy-sweet.jpg', alt: 'Golden retriever puppy looking up at camera on grass' },
        ]}
      />

      <ServiceAreaBand
        cityPages={[
          { href: `/services/${SLUG}-thibodaux-la`, label: 'Retriever Training in Thibodaux' },
        ]}
      />

      <ServiceCta
        heading="Got a Lab who needs to be a duck dog?"
        body="Send us his age, current stage, and what you want him doing by season. Tim will follow up about kennel availability and program fit."
        formNote="10 runs · 3–9 month programs · One dedicated trainer per dog"
      />
    </>
  )
}
