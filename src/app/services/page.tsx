import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { SERVICES, SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Services – Property Restoration, Land Management & Retriever Training',
  description:
    'TIMCO services in Thibodaux, LA: property restoration, recreational land management, commercial property maintenance, and Labrador retriever training. Serving Lafourche, Terrebonne, and Assumption parishes.',
  openGraph: {
    title: `TIMCO Services | Thibodaux, LA`,
    description: 'Property restoration, land management, commercial maintenance, retriever training.',
    url: `${SITE.baseUrl}/services`,
  },
  alternates: { canonical: `${SITE.baseUrl}/services` },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: `${SITE.name} Services`,
  url: `${SITE.baseUrl}/services`,
  description: 'Services offered by TIMCO in Thibodaux, Louisiana and the Bayou Region.',
  itemListElement: SERVICES.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Service',
      name: s.title,
      description: s.lead,
      url: `${SITE.baseUrl}/services/${s.slug}`,
      provider: {
        '@type': 'LocalBusiness',
        name: SITE.legalName,
        url: SITE.baseUrl,
      },
      areaServed: SITE.serviceArea.cities.map((c) => ({ '@type': 'City', name: c })),
    },
  })),
}

const propertyServices = SERVICES.filter((s) => !('division' in s))
const kennelServices = SERVICES.filter((s) => 'division' in s)

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-primary text-white" aria-label="Services page hero">
        <div className="container-wide py-20 md:py-28">
          <p className="section-label">Services</p>
          <h1 className="heading-xl text-white mt-3 max-w-3xl text-balance">
            Four service lines. Run out of one Hwy&nbsp;308 headquarters.
          </h1>
          <p className="lede text-gray-300 mt-6 max-w-2xl">
            TIMCO has two sides: the property & land crew that handles weekly lawn care for residential and commercial customers, restores overgrown lots, and manages rural acreage — plus TIMCO Kennels, a 10-run Labrador retriever board-and-train.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white" aria-labelledby="property-section">
        <div className="container-wide">
          <SectionTitle
            label="Property & Land"
            heading="Lawn care, restoration, and recreational land management."
            body="Weekly mowing and maintenance for residential and commercial customers, overgrown-lot restoration when a property has gotten away, and rural acreage care for hunters and landholders."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-12">
            {propertyServices.map((s) => (
              <ServiceCard key={s.slug} {...s} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 section-padding" aria-labelledby="kennels-section">
        <div className="container-wide">
          <SectionTitle
            label="TIMCO Kennels"
            heading="Labrador retriever board-and-train."
            body="10 runs at the same HQ. Programs run 3 to 9 months, from basic obedience through advanced retriever (hand signals, duck blind etiquette)."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-12 max-w-4xl">
            {kennelServices.map((s) => (
              <ServiceCard key={s.slug} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white section-padding" aria-labelledby="services-cta">
        <div className="container-wide text-center">
          <h2 id="services-cta" className="heading-lg text-white max-w-2xl mx-auto text-balance">
            Not sure which service fits?
          </h2>
          <p className="text-gray-300 mt-5 max-w-xl mx-auto">
            Describe what you're dealing with — we'll tell you whether it's a TIMCO job and what it'll take.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="btn-accent text-xs">Request a Quote</Link>
            <a href={`tel:${SITE.phoneRaw}`} className="btn-outline-light text-xs">
              Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

function SectionTitle({ label, heading, body }: { label: string; heading: string; body: string }) {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
      <div className="max-w-xl">
        <p className="section-label" dangerouslySetInnerHTML={{ __html: label }} />
        <h2 className="heading-xl text-primary mt-3 text-balance">{heading}</h2>
      </div>
      <p className="text-gray-600 max-w-md leading-relaxed">{body}</p>
    </div>
  )
}

type ServiceCardProps = (typeof SERVICES)[number]

function ServiceCard(s: ServiceCardProps) {
  return (
    <Link
      href={`/services/${s.slug}`}
      className="group bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={s.image}
          alt={`${s.title} by TIMCO in Thibodaux, Louisiana`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/10 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="heading-sm text-white">{s.title}</h3>
          <p className="text-xs text-gray-200 mt-1.5 font-semibold uppercase tracking-wider">{s.short}</p>
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <p className="text-sm text-gray-700 leading-relaxed flex-1">{s.lead}</p>
        <p className="mt-4 text-accent text-xs font-bold uppercase tracking-mega group-hover:text-accent-dark transition-colors">
          Service details →
        </p>
      </div>
    </Link>
  )
}
