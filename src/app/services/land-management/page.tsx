import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { SITE, landServices } from '@/lib/site'
import { ServiceHero, ServiceAreaBand, ServiceCta } from '@/components/ServiceFrame'

const SLUG = 'land-management'

export const metadata: Metadata = {
  title: 'Land Management in Thibodaux, LA – Restoration & Recreational Land Care',
  description:
    'TIMCO land management in Thibodaux, LA — large-scale land restoration that reclaims neglected rural acreage, plus ongoing recreational land management for hunters and landholders. Insured. Call 985.665.7298.',
  openGraph: {
    title: 'Land Management in Thibodaux, LA | TIMCO',
    description: 'Reclaiming and maintaining rural and recreational acreage across the Bayou Region.',
    url: `${SITE.baseUrl}/services/${SLUG}`,
  },
  alternates: { canonical: `${SITE.baseUrl}/services/${SLUG}` },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Land Management',
  description:
    'TIMCO land management services in Thibodaux, LA — land restoration and recreational land management.',
  url: `${SITE.baseUrl}/services/${SLUG}`,
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: landServices.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.title,
      url: `${SITE.baseUrl}/services/${s.slug}`,
    })),
  },
}

export default function LandManagementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <ServiceHero
        label="Services"
        title={
          <>
            Land<br />
            <span className="text-accent">management</span>.
          </>
        }
        intro={
          <>
            Care for the rural side — large-scale
            <strong className="text-white"> land restoration</strong> that brings neglected acreage
            back, plus ongoing
            <strong className="text-white"> recreational land management</strong> for hunters and
            landholders who need their ground to stay productive season after season.
          </>
        }
        image="/images/land-pasture.jpg"
        imageAlt="Open rural pasture with distant treeline — TIMCO land management in the Bayou Region"
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="section-label">What We Handle</p>
            <h2 className="heading-xl text-primary mt-3 text-balance">Two ways we keep land working.</h2>
            <p className="text-gray-700 mt-5 leading-relaxed">
              Restoration is the heavy reset — reclaiming acreage that&apos;s grown over. Management is the ongoing care that keeps rural and recreational land accessible, huntable, and productive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {landServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group block bg-gray-50 border-t-4 border-accent hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={`${s.title} in Thibodaux, LA`}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                    sizes="(max-width:768px) 100vw, 50vw"
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
        heading="Got acreage that needs work?"
        body="Tell us roughly how many acres and what you're after — a one-time reclaim or season-to-season management. Tim will walk the property and give you an honest number."
        formNote="Insured · Rural ground is what we know"
      />
    </>
  )
}
