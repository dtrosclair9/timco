import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: `About TIMCO – Meet ${SITE.owner}`,
  description: `${SITE.legalName} is owned and operated by ${SITE.owner} out of Thibodaux, Louisiana. Property restoration, land management, and a Labrador retriever kennel from one Hwy 308 headquarters.`,
  openGraph: {
    title: `About ${SITE.name} | Thibodaux, LA`,
    description: `Meet ${SITE.owner}, owner of ${SITE.name} — lawn care, property restoration, land management, and Labrador retriever training from Thibodaux, Louisiana.`,
    url: `${SITE.baseUrl}/about`,
  },
  alternates: { canonical: `${SITE.baseUrl}/about` },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: `About ${SITE.legalName}`,
  url: `${SITE.baseUrl}/about`,
  description: `Learn about ${SITE.legalName} and its founder ${SITE.owner}, serving the Bayou Region from Thibodaux, LA.`,
  mainEntity: {
    '@type': 'LocalBusiness',
    name: SITE.legalName,
    founder: {
      '@type': 'Person',
      name: SITE.owner,
      jobTitle: SITE.ownerTitle,
      address: {
        '@type': 'PostalAddress',
        addressLocality: SITE.address.city,
        addressRegion: SITE.address.region,
        addressCountry: SITE.address.country,
      },
    },
    foundingDate: String(SITE.established),
    url: SITE.baseUrl,
    telephone: SITE.phoneRaw,
  },
}

const values = [
  {
    title: 'Show Up Ready',
    body: 'The right equipment, the right crew, on the day we said. No half-prepared visits. Most jobs are done in days, not weeks.',
  },
  {
    title: 'Honest Scope',
    body: "We walk the property, listen, and put an honest number on it. If a job isn't right for us, we tell you. We don't sell installs we don't do.",
  },
  {
    title: 'Local, Insured, Accountable',
    body: 'TIMCO is Tim. One operator. One phone number. If something needs fixing, you call the man whose name is on the truck.',
  },
]

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="bg-primary text-white" aria-label="About page hero">
        <div className="container-wide py-20 md:py-28">
          <p className="section-label">About</p>
          <h1 className="heading-xl text-white mt-3 max-w-3xl text-balance">
            One operator. One headquarters.<br />Built in {SITE.address.city}.
          </h1>
          <p className="lede text-gray-300 mt-6 max-w-2xl">
            TIMCO is a lawn care, property maintenance, restoration, and land management operation —
            run by {SITE.owner} out of {SITE.address.street}, {SITE.address.city}. The same
            building houses the equipment shed and the 10-run Labrador retriever kennel.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="section-padding bg-white" aria-labelledby="founder-heading">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/about-tim-portrait.jpg"
                alt={`${SITE.owner}, owner and operator of TIMCO`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-6 text-white">
                <p className="section-label text-accent">{SITE.ownerTitle}</p>
                <p className="heading-md text-white mt-1">{SITE.owner}</p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <p className="section-label">Meet the Owner</p>
              <h2 id="founder-heading" className="heading-xl text-primary mt-3 max-w-xl text-balance">
                A Thibodaux operation, top to bottom.
              </h2>
              <div className="mt-6 space-y-5 text-gray-700 leading-relaxed">
                <p>
                  {SITE.owner} started <strong className="text-primary">{SITE.legalName}</strong> in {SITE.established} on
                  the bread-and-butter work most homeowners and property managers need every
                  week — lawn care, grass cutting, weed eating, spraying, trimming, and cleanup
                  for residential and commercial properties across the Bayou Region. That recurring
                  maintenance is still the heart of the business.
                </p>
                <p>
                  Alongside it, TIMCO took on the lots most contractors skip &mdash; the overgrown
                  yards, the trash-filled properties, the brush nobody wanted to touch. The word
                  Tim keeps coming back to is <em>restoration</em>: taking a property nobody&apos;s
                  touched in years and handing it back usable.
                </p>
                <p>
                  That same philosophy runs the rural side: cutting, spraying, drainage, prescribed
                  burns, and tree clearing for landowners with recreational acreage in Lafourche,
                  Terrebonne, and Assumption parishes.
                </p>
                <p>
                  And it runs <strong className="text-primary">TIMCO Kennels</strong>, the
                  10-run Labrador retriever board-and-train at the same HQ. One dedicated in-house
                  trainer runs each dog through the program — three to nine months,
                  from basic obedience all the way to advanced retriever work (hand signals,
                  duck blind etiquette, the things a serious gun-dog owner needs).
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-outline-dark text-xs">Work with Tim</Link>
                <a href={`tel:${SITE.phoneRaw}`} className="btn-ghost">
                  {SITE.phoneDisplay} →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HQ photo strip */}
      <section className="bg-gray-50 section-padding" aria-labelledby="hq-heading">
        <div className="container-wide">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="section-label">Headquarters</p>
            <h2 id="hq-heading" className="heading-lg text-primary mt-3 text-balance">
              {SITE.address.street}, {SITE.address.city}
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              One building, three operations. Equipment shed for the property crew, kennel runs for the Labs, office for Tim.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <HqShot src="/images/about-equipment-fleet.jpg" alt="TIMCO equipment fleet at the Hwy 308 headquarters in Thibodaux" />
            <HqShot src="/images/kennel-facility.jpg" alt="TIMCO Kennels facility at the Thibodaux headquarters" />
            <HqShot src="/images/comm-equipment-shed.jpg" alt="TIMCO equipment shed with bobcat and utility trailer in Thibodaux" />
            <HqShot src="/images/about-brand-hat.jpg" alt="TIMCO Kennels branded hat" />
            <HqShot src="/images/about-trainer-dog.jpg" alt="TIMCO Kennels trainer working a Labrador retriever in the field" />
            <HqShot src="/images/atmosphere-cabin-night.jpg" alt="TIMCO Hwy 308 headquarters at night" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white" aria-labelledby="values-heading">
        <div className="container-wide">
          <div className="text-center mb-12 max-w-xl mx-auto">
            <p className="section-label">How TIMCO Works</p>
            <h2 id="values-heading" className="heading-xl text-primary mt-3 text-balance">
              Three things we don't compromise on.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <article key={v.title} className="bg-gray-50 p-8 border-t-4 border-accent">
                <p className="font-display text-5xl text-accent/40 font-bold">0{i + 1}</p>
                <h3 className="heading-sm text-primary mt-3">{v.title}</h3>
                <p className="text-sm text-gray-700 mt-3 leading-relaxed">{v.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="section-padding bg-primary text-white" aria-labelledby="area-heading">
        <div className="container-wide text-center">
          <p className="section-label">Where We Work</p>
          <h2 id="area-heading" className="heading-lg mt-3 text-white max-w-2xl mx-auto text-balance">
            Serving the Bayou Region from Hwy&nbsp;308.
          </h2>
          <p className="text-gray-300 mt-5 max-w-xl mx-auto leading-relaxed">
            TIMCO works across Lafourche, Terrebonne, and Assumption parishes. If your property is in this footprint, we're probably nearby this week.
          </p>
          <div className="mt-8 flex flex-wrap gap-2 justify-center">
            {SITE.serviceArea.cities.map((c) => (
              <span key={c} className="inline-block border border-white/20 text-xs font-bold uppercase tracking-mega px-4 py-2">
                {c}, LA
              </span>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/contact" className="btn-accent text-xs">Get a Quote</Link>
          </div>
        </div>
      </section>
    </>
  )
}

function HqShot({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-square overflow-hidden bg-gray-200">
      <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
    </div>
  )
}
