import Image from 'next/image'
import Link from 'next/link'
import { SITE } from '@/lib/site'

export function ServiceHero({
  label,
  title,
  intro,
  image,
  imageAlt,
}: {
  label: string
  title: React.ReactNode
  intro: React.ReactNode
  image: string
  imageAlt: string
}) {
  return (
    <section className="relative bg-primary text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image src={image} alt={imageAlt} fill priority className="object-cover opacity-40" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/40" />
      </div>
      <div className="relative container-wide py-24 md:py-32">
        <p className="section-label">{label}</p>
        <h1 className="heading-hero text-white mt-4 max-w-4xl text-balance">{title}</h1>
        <div className="lede text-gray-200 mt-6 max-w-2xl">{intro}</div>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link href="/contact" className="btn-accent text-xs">Get a Quote</Link>
          <a href={`tel:${SITE.phoneRaw}`} className="btn-outline-light text-xs">
            Call {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  )
}

export function WhyGrid({
  label,
  heading,
  items,
}: {
  label: string
  heading: string
  items: { title: string; body: string }[]
}) {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="section-label">{label}</p>
          <h2 className="heading-xl text-primary mt-3 text-balance">{heading}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <article key={it.title} className="border-l-4 border-accent pl-6 py-2">
              <p className="font-display text-4xl text-accent/30 font-bold">0{i + 1}</p>
              <h3 className="heading-sm text-primary mt-2">{it.title}</h3>
              <p className="text-sm text-gray-700 mt-3 leading-relaxed">{it.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function IncludedList({
  label,
  heading,
  description,
  items,
  image,
  imageAlt,
}: {
  label: string
  heading: string
  description: string
  items: string[]
  image: string
  imageAlt: string
}) {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative aspect-[4/5] overflow-hidden order-2 lg:order-1">
            <Image src={image} alt={imageAlt} fill className="object-cover" sizes="(max-width:1024px) 100vw, 40vw" />
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <p className="section-label">{label}</p>
            <h2 className="heading-xl text-primary mt-3 text-balance">{heading}</h2>
            <p className="text-gray-700 mt-5 leading-relaxed">{description}</p>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {items.map((it) => (
                <li key={it} className="flex items-start gap-2.5 text-sm text-gray-800">
                  <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export function PhotoStrip({ label, heading, photos }: { label: string; heading: string; photos: { src: string; alt: string }[] }) {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="section-label">{label}</p>
            <h2 className="heading-lg text-primary mt-3 text-balance max-w-lg">{heading}</h2>
          </div>
          <p className="text-gray-600 max-w-sm text-sm">
            Real jobs. Real properties. {SITE.serviceArea.parishes.join(', ')} parishes.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {photos.map((p) => (
            <div key={p.src} className="relative aspect-[4/3] overflow-hidden bg-gray-100">
              <Image src={p.src} alt={p.alt} fill className="object-cover" sizes="(max-width:768px) 50vw, 33vw" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ServiceAreaBand({ cityPages }: { cityPages: { href: string; label: string }[] }) {
  return (
    <section className="bg-primary text-white py-16 border-y border-white/10">
      <div className="container-wide text-center">
        <p className="section-label">Service Area</p>
        <h2 className="heading-lg mt-3 max-w-2xl mx-auto text-balance">
          Based in <span className="text-accent">{SITE.address.city}</span>. Working across the Bayou Region.
        </h2>
        <div className="mt-8 flex flex-wrap gap-2 justify-center">
          {SITE.serviceArea.cities.map((c) => (
            <span key={c} className="inline-block border border-white/20 text-xs font-bold uppercase tracking-mega px-4 py-2">
              {c}, LA
            </span>
          ))}
        </div>
        {cityPages.length > 0 && (
          <div className="mt-10">
            <p className="text-xs uppercase tracking-mega text-gray-400 mb-3">Dedicated city pages</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {cityPages.map((p) => (
                <Link key={p.href} href={p.href} className="text-accent hover:text-accent-light text-xs font-bold uppercase tracking-mega">
                  {p.label} →
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export function ServiceCta({
  heading,
  body,
  formNote,
}: {
  heading: string
  body: string
  formNote?: string
}) {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-wide">
        <div className="bg-white shadow-lg p-10 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="section-label">Next Step</p>
            <h2 className="heading-xl text-primary mt-3 text-balance">{heading}</h2>
            <p className="text-gray-700 mt-5 leading-relaxed">{body}</p>
          </div>
          <div className="flex flex-col gap-3">
            <Link href="/contact" className="btn-accent">Request a Quote</Link>
            <a href={`tel:${SITE.phoneRaw}`} className="btn-outline-dark">Call {SITE.phoneDisplay}</a>
            {formNote && <p className="text-xs text-gray-500 text-center mt-2">{formNote}</p>}
          </div>
        </div>
      </div>
    </section>
  )
}

export function buildServiceSchema({
  slug,
  name,
  description,
  cityName,
}: {
  slug: string
  name: string
  description: string
  cityName?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType: name,
    url: cityName
      ? `${SITE.baseUrl}/services/${slug}-${cityName.toLowerCase()}-la`
      : `${SITE.baseUrl}/services/${slug}`,
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
    areaServed: cityName
      ? { '@type': 'City', name: cityName }
      : SITE.serviceArea.cities.map((c) => ({ '@type': 'City', name: c })),
  }
}
