import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { SERVICES, SITE, ogImage } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Land Management & Land Clearing Services, Thibodaux',
  description:
    'Land clearing, lawn care, bush hogging, grounds maintenance, and canal & drainage clearing across Thibodaux and the Bayou Region. Land management, insured.',
  openGraph: {
    title: `Land Management Services in Thibodaux, LA | TIMCO`,
    description: 'Land clearing, lawn care, bush hogging, grounds maintenance, and canal & drainage clearing across the Bayou Region.',
    url: `${SITE.baseUrl}/services`,
    images: [ogImage],
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

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-primary text-white" aria-label="Services page hero">
        <div className="container-wide py-20 md:py-28">
          <p className="section-label">Services</p>
          <h1 className="heading-xl text-white mt-3 max-w-3xl text-balance">
            We restore &amp; manage land. Out of one Hwy&nbsp;308 HQ.
          </h1>
          <p className="lede text-gray-300 mt-6 max-w-2xl">
            One job, two halves — reclaim the land that&apos;s grown over, then keep it that way. Residential, commercial, and recreational, across the Bayou Region.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white" aria-labelledby="services-list">
        <div className="container-wide">
          <SectionTitle
            label="What We Do"
            heading="Three kinds of land. Same standard."
            body="Pick the work that fits — every service starts with a reset if the land needs it, then moves to ongoing management on your schedule."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-12">
            {SERVICES.map((s) => (
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

function SectionTitle({ label, href, heading, body }: { label: string; href?: string; heading: string; body: string }) {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
      <div className="max-w-xl">
        {href ? (
          <Link href={href} className="section-label text-accent hover:text-accent-dark inline-block">
            {label} →
          </Link>
        ) : (
          <p className="section-label">{label}</p>
        )}
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
