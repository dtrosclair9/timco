import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SERVICES, BUCKETS, propertyServices, landServices, SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: `${SITE.name} | Property & Land Management in Thibodaux, LA`,
  description:
    'TIMCO restores and maintains property and land from Thibodaux, LA. Property restoration, residential and commercial property management, land restoration, recreational land management. Insured. Call 985.665.7298.',
  openGraph: {
    title: `${SITE.name} | Property & Land Management in Thibodaux, LA`,
    description:
      'TIMCO restores and maintains property and land across the Bayou Region. Insured. Call 985.665.7298.',
    url: SITE.baseUrl,
  },
  alternates: { canonical: SITE.baseUrl },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
      '@id': `${SITE.baseUrl}/#business`,
      name: SITE.legalName,
      alternateName: SITE.name,
      description:
        'Property restoration, residential and commercial property management, land restoration, and recreational land management in Thibodaux, Louisiana.',
      url: SITE.baseUrl,
      telephone: SITE.phoneRaw,
      email: SITE.email,
      image: `${SITE.baseUrl}/images/hero-restoration.jpg`,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE.address.street,
        addressLocality: SITE.address.city,
        addressRegion: SITE.address.region,
        postalCode: SITE.address.postal,
        addressCountry: SITE.address.country,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: SITE.geo.lat,
        longitude: SITE.geo.lng,
      },
      areaServed: SITE.serviceArea.cities.map((c) => ({ '@type': 'City', name: c })),
      foundingDate: String(SITE.established),
      openingHoursSpecification: [{
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '07:00',
        closes: '17:00',
      }],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'TIMCO Services',
        itemListElement: SERVICES.map((s) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: s.title,
            url: `${SITE.baseUrl}/services/${s.slug}`,
          },
        })),
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE.baseUrl}/#website`,
      url: SITE.baseUrl,
      name: SITE.name,
      publisher: { '@id': `${SITE.baseUrl}/#business` },
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ───── HERO ───── */}
      <section className="relative bg-primary text-white overflow-hidden" aria-label="Hero">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-restoration.jpg"
            alt="Restored residential property under massive oaks in Thibodaux, Louisiana by TIMCO"
            fill
            priority
            className="object-cover opacity-50"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/30" />
        </div>

        <div className="relative container-wide py-28 md:py-40 lg:py-48">
          <p className="section-label">{SITE.address.city}, {SITE.address.region} · Bayou Region</p>
          <h1 className="heading-hero text-white mt-5 max-w-4xl text-balance">
            We restore<br />
            <span className="text-accent">overgrown property</span><br />
            back to usable land.
          </h1>
          <p className="lede text-gray-200 mt-7 max-w-xl">
            Brush clearing, tree work, debris removal, drainage, prescribed burns,
            and recurring lawn care — for homes, businesses, and rural acreage.
            One operator. One headquarters. {SITE.address.city}, {SITE.address.region}.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-accent text-sm">
              Request a Quote
            </Link>
            <a href={`tel:${SITE.phoneRaw}`} className="btn-outline-light text-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>

        {/* Scrolling proof strip */}
        <div className="relative border-t border-white/10 bg-primary-dark/60">
          <div className="container-wide py-5 grid grid-cols-2 md:grid-cols-4 gap-y-3 text-xs sm:text-sm">
            <ProofItem label="Established" value={String(SITE.established)} />
            <ProofItem label="HQ" value={`${SITE.address.city}, ${SITE.address.region}`} />
            <ProofItem label="Coverage" value={`${SITE.serviceArea.parishes.length} Parishes`} />
            <ProofItem label="Insured" value="Crew + Equipment" />
          </div>
        </div>
      </section>

      {/* ───── BEFORE / AFTER ───── */}
      <section className="section-padding bg-white" aria-labelledby="before-after-heading">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
            <div>
              <p className="section-label">The Restoration</p>
              <h2 id="before-after-heading" className="heading-xl text-primary mt-3 max-w-xl text-balance">
                From overgrown<br />to usable.
              </h2>
            </div>
            <p className="text-gray-600 max-w-md">
              Real lots, real crews. We show up with the right equipment, do the work in days, and leave it usable for whatever's next — a build, a hunt, a sale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BeforeAfter
              beforeSrc="/images/restoration-before-1.jpg"
              afterSrc="/images/restoration-after-1.jpg"
              caption="Property edge — brush + clearing"
            />
            <BeforeAfter
              beforeSrc="/images/restoration-before-2.jpg"
              afterSrc="/images/restoration-after-2.jpg"
              caption="Rural acreage — bobcat clearing"
            />
          </div>

          <div className="mt-10 text-center">
            <Link href="/services/property-restoration" className="btn-ghost">
              See more restoration work
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ───── SERVICES ───── */}
      <section className="section-padding bg-gray-50" aria-labelledby="services-heading">
        <div className="container-wide">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="section-label">What TIMCO Does</p>
            <h2 id="services-heading" className="heading-xl text-primary mt-3 text-balance">
              Two divisions.<br />One HQ on Hwy&nbsp;308.
            </h2>
            <p className="lede mt-5">
              Property management keeps homes and businesses sharp — from a one-time restoration to recurring lawn and grounds care. Land management reclaims and maintains the rural side, acre after acre.
            </p>
          </div>

          <div className="space-y-14">
            {BUCKETS.map((bucket) => {
              const items = bucket.bucket === 'property' ? propertyServices : landServices
              return (
                <div key={bucket.slug}>
                  <div className="flex items-end justify-between border-b border-gray-200 pb-3 mb-6">
                    <h3 className="heading-md text-primary">{bucket.title}</h3>
                    <Link
                      href={`/services/${bucket.slug}`}
                      className="text-accent hover:text-accent-dark text-xs font-bold uppercase tracking-mega shrink-0"
                    >
                      View all →
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {items.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="group relative overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                      >
                        <div className="relative h-52 overflow-hidden">
                          <Image
                            src={service.image}
                            alt={`${service.title} by TIMCO in Thibodaux, Louisiana`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                          <div className="absolute bottom-5 left-5 right-5">
                            <h4 className="heading-sm text-white">{service.title}</h4>
                          </div>
                        </div>
                        <div className="p-6">
                          <p className="text-sm text-gray-700 leading-relaxed">{service.lead}</p>
                          <p className="mt-4 text-accent text-xs font-bold uppercase tracking-mega group-hover:text-accent-dark transition-colors">
                            Learn more →
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ───── ABOUT SNIPPET ───── */}
      <section className="section-padding bg-white" aria-labelledby="about-snippet-heading">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/about-tim-portrait.jpg"
                alt={`${SITE.owner}, owner and operator of TIMCO in Thibodaux, Louisiana`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary to-transparent p-6 text-white">
                <p className="section-label text-accent">Owner / Operator</p>
                <p className="heading-md text-white mt-1">{SITE.owner}</p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <p className="section-label">About TIMCO</p>
              <h2 id="about-snippet-heading" className="heading-xl text-primary mt-3 max-w-lg text-balance">
                One operator.<br />Two sides of the same business.
              </h2>
              <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  TIMCO was founded by <strong className="text-primary">{SITE.owner}</strong> in {SITE.established} as a property and land company — rooted in {SITE.address.city} and built on showing up, doing the work, and leaving the place better than we found it.
                </p>
                <p>
                  From the same HQ on Hwy&nbsp;308, TIMCO handles two sides of the same job: <strong className="text-primary">property management</strong> for homes and businesses, and <strong className="text-primary">land management</strong> for the rural acreage that needs reclaiming or maintaining. Different ground, same standard.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/about" className="btn-outline-dark text-xs">
                  Meet TIMCO
                </Link>
                <Link href="/services" className="btn-ghost">
                  See all services →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── SERVICE AREA STRIP ───── */}
      <section className="bg-primary text-white py-16 border-y border-white/10" aria-labelledby="area-heading">
        <div className="container-wide text-center">
          <p className="section-label">Where We Work</p>
          <h2 id="area-heading" className="heading-lg mt-3 max-w-2xl mx-auto text-balance">
            Based in Thibodaux. Working across <span className="text-accent">Lafourche, Terrebonne & Assumption</span>.
          </h2>
          <div className="mt-8 flex flex-wrap gap-2 justify-center">
            {SITE.serviceArea.cities.map((c) => (
              <span
                key={c}
                className="inline-block border border-white/20 text-xs font-bold uppercase tracking-mega px-4 py-2"
              >
                {c}, LA
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ───── FINAL CTA ───── */}
      <section className="section-padding bg-gray-50" aria-labelledby="cta-heading">
        <div className="container-wide">
          <div className="bg-white shadow-lg p-10 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="section-label">Get a Quote</p>
              <h2 id="cta-heading" className="heading-xl text-primary mt-3 text-balance">
                Got a property that needs work?
              </h2>
              <p className="text-gray-700 mt-5 leading-relaxed">
                Tell us where it is and what shape it's in. Tim will follow up within a business day to walk through it and put a number on it.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/contact" className="btn-accent">Request a Quote</Link>
              <a href={`tel:${SITE.phoneRaw}`} className="btn-outline-dark">Call {SITE.phoneDisplay}</a>
              <p className="text-xs text-gray-500 text-center mt-2">
                Insured · Family run · Serving the Bayou Region since {SITE.established}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function ProofItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="block w-1 h-6 bg-accent" aria-hidden="true" />
      <div>
        <p className="text-[10px] font-bold uppercase tracking-mega text-gray-400">{label}</p>
        <p className="font-display font-semibold uppercase tracking-wide text-white">{value}</p>
      </div>
    </div>
  )
}

function BeforeAfter({
  beforeSrc,
  afterSrc,
  caption,
}: {
  beforeSrc: string
  afterSrc: string
  caption: string
}) {
  return (
    <article className="space-y-3">
      <div className="grid grid-cols-2 gap-1">
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
          <Image
            src={beforeSrc}
            alt="Property before restoration by TIMCO"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          <span className="absolute top-2 left-2 bg-primary text-white text-[10px] font-bold uppercase tracking-mega px-2 py-1">
            Before
          </span>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
          <Image
            src={afterSrc}
            alt="Property after restoration by TIMCO"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          <span className="absolute top-2 left-2 bg-accent text-white text-[10px] font-bold uppercase tracking-mega px-2 py-1">
            After
          </span>
        </div>
      </div>
      <p className="text-sm font-semibold uppercase tracking-wider text-primary">{caption}</p>
    </article>
  )
}
