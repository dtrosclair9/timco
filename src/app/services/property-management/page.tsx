import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { SITE, propertyServices } from '@/lib/site'
import { ServiceHero, ServiceAreaBand, ServiceCta } from '@/components/ServiceFrame'

const SLUG = 'property-management'

export const metadata: Metadata = {
  title: 'Property Management in Thibodaux, LA – Restoration & Recurring Care',
  description:
    'TIMCO property management in Thibodaux, LA — one-time restoration of overgrown homes and businesses, plus recurring residential and commercial lawn and grounds care. Insured. Call 985.665.7298.',
  openGraph: {
    title: 'Property Management in Thibodaux, LA | TIMCO',
    description: 'Restoration and recurring care for homes, businesses, apartments, and HOAs across the Bayou Region.',
    url: `${SITE.baseUrl}/services/${SLUG}`,
  },
  alternates: { canonical: `${SITE.baseUrl}/services/${SLUG}` },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Property Management',
  description:
    'TIMCO property management services in Thibodaux, LA — property restoration, residential property management, and commercial property management.',
  url: `${SITE.baseUrl}/services/${SLUG}`,
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: propertyServices.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.title,
      url: `${SITE.baseUrl}/services/${s.slug}`,
    })),
  },
}

export default function PropertyManagementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <ServiceHero
        label="Services"
        title={
          <>
            Property<br />
            <span className="text-accent">management</span>.
          </>
        }
        intro={
          <>
            Everything that keeps a developed property sharp — from a one-time
            cleanup of an overgrown lot to scheduled lawn and grounds care for
            <strong className="text-white"> homes, offices, apartments, and HOAs</strong> across
            Lafourche, Terrebonne, and Assumption.
          </>
        }
        image="/images/comm-after-white-home.jpg"
        imageAlt="Maintained residential property with a manicured lawn — TIMCO property management in Thibodaux, LA"
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="section-label">What We Handle</p>
            <h2 className="heading-xl text-primary mt-3 text-balance">Three ways we keep property in shape.</h2>
            <p className="text-gray-700 mt-5 leading-relaxed">
              Restoration is the one-time reset — pulling a neglected property back to usable. Management is the ongoing work that keeps it that way, week after week.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {propertyServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group block bg-gray-50 border-t-4 border-accent hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={`${s.title} in Thibodaux, LA`}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-7">
                  <h3 className="heading-sm text-primary group-hover:text-accent transition-colors">{s.title}</h3>
                  <p className="text-sm text-gray-700 mt-3 leading-relaxed">{s.short}</p>
                  <span className="inline-block mt-5 text-xs font-bold uppercase tracking-mega text-accent">
                    Learn More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServiceAreaBand cityPages={[]} />

      <ServiceCta
        heading="Have a property that needs attention?"
        body="Tell us the address and whether you need a one-time restoration or a recurring schedule. We'll walk it and give you an honest number."
        formNote="Insured · Serving the Bayou Region since 2021"
      />
    </>
  )
}
