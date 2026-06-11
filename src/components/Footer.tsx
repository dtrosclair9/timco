import Link from 'next/link'
import Image from 'next/image'
import { SERVICES, SITE } from '@/lib/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary text-gray-300" role="contentinfo">
      <div className="container-wide pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="bg-white inline-block p-3 mb-5">
              <Image
                src="/images/logo-timco.png"
                alt={SITE.name}
                width={520}
                height={90}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              Property restoration, property management, and land management out of {SITE.address.city}, {SITE.address.region}.
              Serving {SITE.serviceArea.parishes.join(', ')} parishes.
            </p>
            <p className="mt-4 text-xs uppercase tracking-mega text-gray-500">
              Insured · {SITE.owner}, {SITE.ownerTitle}
            </p>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h3 className="font-display text-accent text-xs font-bold uppercase tracking-mega mb-4">Services</h3>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm hover:text-accent transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-xs uppercase tracking-mega text-accent hover:text-accent-light">
                  All services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Area */}
          <div className="md:col-span-2">
            <h3 className="font-display text-accent text-xs font-bold uppercase tracking-mega mb-4">Service Area</h3>
            <ul className="space-y-2 text-sm">
              {SITE.serviceArea.cities.map((c) => (
                <li key={c}>{c}, LA</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="font-display text-accent text-xs font-bold uppercase tracking-mega mb-4">Contact</h3>
            <address className="not-italic space-y-3 text-sm">
              <p>
                {SITE.address.street}<br />
                {SITE.address.city}, {SITE.address.region} {SITE.address.postal}
              </p>
              <p>
                <a href={`tel:${SITE.phoneRaw}`} className="hover:text-accent transition-colors">
                  {SITE.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={`mailto:${SITE.email}`} className="hover:text-accent transition-colors break-all">
                  {SITE.email}
                </a>
              </p>
            </address>
            <Link href="/contact" className="btn-accent text-xs mt-5">
              Request a Quote
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>&copy; {year} {SITE.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <span aria-hidden="true">·</span>
            <span>Est. {SITE.established}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
