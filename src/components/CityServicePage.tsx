import Image from 'next/image'
import Link from 'next/link'
import { SITE, ogImage } from '@/lib/site'

export type CityPageData = {
  service: string // brand/category name — used in breadcrumb, schema serviceType, link text
  serviceSlug: string
  city: string
  citySlug: string
  parish: string
  hero: { image: string; imageAlt: string }
  intro: string
  highlights: string[]
  localContext: { heading: string; body: string }[]
  faqs: { q: string; a: string }[]
  photos: { src: string; alt: string }[]
  relatedCityPages?: { href: string; label: string }[]
  parentServiceHref: string
  // SEO overrides — lead with what people actually search, keep brand as the wrapper.
  headline?: string // page H1 (search-led, e.g. "Land Clearing & Lawn Care"); defaults to `service`
  metaTitle?: string // <title> base (search-led); brand template appends " | TIMCO"
  metaDescription?: string // trimmed ~155-char description; defaults to intro
}

export function CityServiceLayout(d: CityPageData) {
  const fullSlug = `${d.serviceSlug}-${d.citySlug}-la`
  const url = `${SITE.baseUrl}/services/${fullSlug}`

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: `${d.service} in ${d.city}, LA`,
        description: d.intro,
        serviceType: d.service,
        url,
        areaServed: { '@type': 'City', name: d.city, containedIn: d.parish },
        provider: {
          '@type': 'LocalBusiness',
          name: SITE.legalName,
          telephone: SITE.phoneRaw,
          url: SITE.baseUrl,
          address: {
            '@type': 'PostalAddress',
            streetAddress: SITE.address.street,
            addressLocality: SITE.address.city,
            addressRegion: SITE.address.region,
            postalCode: SITE.address.postal,
            addressCountry: SITE.address.country,
          },
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.baseUrl}/services` },
          { '@type': 'ListItem', position: 3, name: d.service, item: `${SITE.baseUrl}${d.parentServiceHref}` },
          { '@type': 'ListItem', position: 4, name: `${d.service} in ${d.city}`, item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: d.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Breadcrumb visual */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container-wide py-3 text-xs">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-gray-500 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-accent">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/services" className="hover:text-accent">Services</Link>
            <span aria-hidden="true">/</span>
            <Link href={d.parentServiceHref} className="hover:text-accent">{d.service}</Link>
            <span aria-hidden="true">/</span>
            <span className="text-primary font-semibold">{d.city}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-primary text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src={d.hero.image} alt={d.hero.imageAlt} fill priority className="object-cover opacity-40" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/40" />
        </div>
        <div className="relative container-wide py-24 md:py-32">
          <p className="section-label text-accent-light">{d.city}, {d.parish}</p>
          <h1 className="heading-hero text-white mt-4 max-w-4xl text-balance">
            {d.headline ?? d.service} in<br />
            <span className="text-accent">{d.city}, LA</span>.
          </h1>
          <p className="lede text-gray-200 mt-6 max-w-2xl">{d.intro}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-accent text-xs">Get a {d.city} Quote</Link>
            <a href={`tel:${SITE.phoneRaw}`} className="btn-outline-light text-xs">
              Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Local Context */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="section-label">Why {d.city}</p>
              <h2 className="heading-xl text-primary mt-3 text-balance">
                {d.service.toLowerCase()} that knows {d.city}.
              </h2>
              <p className="text-gray-700 mt-6 leading-relaxed">
                TIMCO works {d.city} and the surrounding {d.parish} on a regular schedule.
                Our HQ at {SITE.address.street}, {SITE.address.city} keeps mobilization
                fast and trip charges reasonable — we're probably nearby this
                week already.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {d.localContext.map((c, i) => (
                <article key={c.heading} className="bg-gray-50 p-6 border-t-4 border-accent">
                  <p className="font-display text-3xl text-accent-dark font-bold" aria-hidden="true">0{i + 1}</p>
                  <h3 className="heading-sm text-primary mt-2">{c.heading}</h3>
                  <p className="text-sm text-gray-700 mt-3 leading-relaxed">{c.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="section-label">What's Included</p>
              <h2 className="heading-xl text-primary mt-3 text-balance">
                One quote covers the full job.
              </h2>
              <p className="text-gray-700 mt-5 leading-relaxed">
                Most {d.service.toLowerCase()} jobs in {d.city} cover everything below in a single mobilization.
                Equipment, crew, and haul-off out of one TIMCO quote — not three contractors.
              </p>
              <div className="mt-6">
                <Link href={d.parentServiceHref} className="btn-ghost">
                  Full {d.service.toLowerCase()} details →
                </Link>
              </div>
            </div>
            <div className="lg:col-span-7">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {d.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 bg-white p-4 border-l-2 border-accent">
                    <svg className="w-4 h-4 text-accent mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: h }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Photos */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <p className="section-label">Recent Work</p>
              <h2 className="heading-lg text-primary mt-3 text-balance max-w-md">
                {d.service.toLowerCase()} across the Bayou Region.
              </h2>
            </div>
            <p className="text-gray-600 max-w-sm text-sm">Real land, real crews. Insured.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {d.photos.map((p) => (
              <div key={p.src} className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <Image src={p.src} alt={p.alt} fill className="object-cover" sizes="(max-width:768px) 50vw, 33vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <p className="section-label">FAQ</p>
            <h2 className="heading-xl text-primary mt-3 text-balance">
              {d.city} questions, answered.
            </h2>
          </div>
          <div className="space-y-4">
            {d.faqs.map((f) => (
              <details key={f.q} className="bg-white border border-gray-200 group">
                <summary className="px-6 py-5 cursor-pointer list-none flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors">
                  <span className="font-display font-semibold text-primary text-lg uppercase tracking-tight pr-4">{f.q}</span>
                  <svg className="w-5 h-5 text-accent shrink-0 mt-1 transition-transform group-open:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-sm text-gray-700 leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Band */}
      <section className="bg-primary text-white py-16">
        <div className="container-wide text-center">
          <p className="section-label text-accent-light">Also Serving</p>
          <h2 className="heading-lg mt-3 max-w-2xl mx-auto text-balance">
            {d.city} and the rest of the <span className="text-accent">Bayou Region</span>.
          </h2>
          <div className="mt-8 flex flex-wrap gap-2 justify-center">
            {SITE.serviceArea.cities.map((c) => (
              <span key={c} className={`inline-block border ${c === d.city ? 'bg-accent-dark border-accent-dark text-white' : 'border-white/20 text-white'} text-xs font-bold uppercase tracking-mega px-4 py-2`}>
                {c}, LA
              </span>
            ))}
          </div>
          {d.relatedCityPages && d.relatedCityPages.length > 0 && (
            <div className="mt-10">
              <p className="text-xs uppercase tracking-mega text-gray-400 mb-3">Related city pages</p>
              <div className="flex flex-wrap gap-4 justify-center">
                {d.relatedCityPages.map((p) => (
                  <Link key={p.href} href={p.href} className="text-accent hover:text-accent-light text-xs font-bold uppercase tracking-mega">
                    {p.label} →
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide">
          <div className="bg-white shadow-lg p-10 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="section-label">Get a {d.city} Quote</p>
              <h2 className="heading-xl text-primary mt-3 text-balance">
                Land in {d.city} that needs work?
              </h2>
              <p className="text-gray-700 mt-5 leading-relaxed">
                Send the address and a few photos. Tim will drive out, walk the land, and give you an honest number — usually within a business day.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/contact" className="btn-accent">Request a Quote</Link>
              <a href={`tel:${SITE.phoneRaw}`} className="btn-outline-dark">Call {SITE.phoneDisplay}</a>
              <p className="text-xs text-gray-500 text-center mt-2">Insured · Family-run · Based in {SITE.address.city}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export function buildMetadata(d: {
  service: string
  serviceSlug: string
  city: string
  citySlug: string
  intro: string
  metaTitle?: string
  metaDescription?: string
}) {
  const fullSlug = `${d.serviceSlug}-${d.citySlug}-la`
  // Brand suffix " | TIMCO" is added by the root layout title template — don't repeat it here.
  const title = d.metaTitle ?? `${d.service} in ${d.city}, LA`
  const description = d.metaDescription ?? d.intro
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${SITE.name}`,
      description,
      url: `${SITE.baseUrl}/services/${fullSlug}`,
      images: [ogImage],
    },
    alternates: { canonical: `${SITE.baseUrl}/services/${fullSlug}` },
  }
}
